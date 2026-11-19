/**
 * Goyal Trading Company — B2B Inquiry Validation Test Suite
 *
 * Tests the ACTUAL production implementations in:
 *   - lib/validation/inquiry.ts
 *   - app/actions/inquiry.ts
 *   - data/products.ts
 *
 * Execution commands:
 *   node tests/inquiry-validation.test.js
 *   node --test tests/inquiry-validation.test.js
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { describe, it } = require('node:test');

// -------------------------------------------------------------------
// 1. Hook TypeScript compilation using the project's installed tooling
// -------------------------------------------------------------------
const ts = require('typescript');
const Module = require('module');

const origResolve = Module._resolveFilename;
Module._resolveFilename = function (request, parent, isMain, options) {
  if (request.startsWith('@/')) {
    const relPath = request.slice(2);
    const fullPath = path.resolve(__dirname, '..', relPath);
    return origResolve.call(this, fullPath, parent, isMain, options);
  }
  return origResolve.call(this, request, parent, isMain, options);
};

require.extensions['.ts'] = function (module, filename) {
  const content = fs.readFileSync(filename, 'utf8');
  const compiled = ts.transpileModule(content, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
    fileName: filename,
  });
  module._compile(compiled.outputText, filename);
};

// -------------------------------------------------------------------
// 2. Import ACTUAL Production Implementations
// -------------------------------------------------------------------
const {
  getTodayInIndia,
  isValidDeliveryDate,
  isValidPhone,
  isSupportedIndianLandline10,
  isValidIndianPinCode,
  isValidPostalCode,
  validateQuoteInquiry,
  validateSampleInquiry,
  sanitizeString,
  isValidEmail,
} = require('../lib/validation/inquiry.ts');

const {
  submitQuoteInquiry,
  submitSampleInquiry,
} = require('../app/actions/inquiry.ts');

const {
  getAllProductFamilies,
  getAllCategories,
  getAllProducts,
} = require('../data/products.ts');

// -------------------------------------------------------------------
// 3. Source Code Contract & Structural Audits
// -------------------------------------------------------------------
describe('Source Code Contract & Disclaimers', () => {
  const sourcePath = path.join(__dirname, '..', 'lib', 'validation', 'inquiry.ts');
  const sourceContent = fs.readFileSync(sourcePath, 'utf8');

  it('Date.parse() fallback must be completely removed from isValidDeliveryDate', () => {
    const hasDateParse = /function isValidDeliveryDate[\s\S]*?Date\.parse/m.test(sourceContent);
    assert.strictEqual(hasDateParse, false);
  });

  it('Error message must specify "today or a future date in YYYY-MM-DD format."', () => {
    assert.ok(
      sourceContent.includes('Target delivery date must be today or a future date in YYYY-MM-DD format.')
    );
  });

  it('Phone JSDoc must state format validation does not prove an active or assigned line', () => {
    assert.ok(
      sourceContent.includes('does NOT verify whether') &&
      sourceContent.includes('active, assigned by a carrier')
    );
  });

  it('Phone error message must specify "valid contact telephone number" without 10-digit only claim', () => {
    assert.ok(
      sourceContent.includes('Please provide a valid contact telephone number.')
    );
    assert.strictEqual(
      sourceContent.includes('Please provide a valid 10-digit contact telephone number.'),
      false
    );
  });
});

// -------------------------------------------------------------------
// 4. Sanitization Tests (Production sanitizeString)
// -------------------------------------------------------------------
describe('Sanitization Suite (Production sanitizeString)', () => {
  it('preserves procurement angle bracket expressions (e.g. Tolerance <1cm, Order <500 sets)', () => {
    assert.strictEqual(sanitizeString('Tolerance <1cm'), 'Tolerance <1cm');
    assert.strictEqual(sanitizeString('Order size <500 sets'), 'Order size <500 sets');
    assert.strictEqual(sanitizeString('GSM >220 and <260'), 'GSM >220 and <260');
    assert.strictEqual(sanitizeString('Shade <Navy Blue>'), 'Shade <Navy Blue>');
  });

  it('strips script, style, and iframe tags with enclosed contents', () => {
    assert.strictEqual(sanitizeString('Normal text <script>alert("xss")</script> after'), 'Normal text  after');
    assert.strictEqual(sanitizeString('Text <style>body{display:none}</style> end'), 'Text  end');
    assert.strictEqual(sanitizeString('Start <iframe src="https://evil.com"></iframe> finish'), 'Start  finish');
  });

  it('strips inline event handlers and pseudo-protocols', () => {
    assert.strictEqual(sanitizeString('<img src=x onerror=alert(1)>'), '');
    assert.strictEqual(sanitizeString('javascript:alert(1)'), 'alert(1)');
    assert.strictEqual(sanitizeString('vbscript:msgbox(1)'), 'msgbox(1)');
  });

  it('strips standard HTML tags while preserving raw text and trimming whitespace', () => {
    assert.strictEqual(sanitizeString('<p>Hello <b>World</b></p>'), 'Hello World');
    assert.strictEqual(sanitizeString('   <div>Uniform specs</div>   '), 'Uniform specs');
    assert.strictEqual(sanitizeString(null), '');
    assert.strictEqual(sanitizeString(undefined), '');
    assert.strictEqual(sanitizeString(123), '');
  });
});

// -------------------------------------------------------------------
// 5. Delivery Date Validation (Production isValidDeliveryDate & getTodayInIndia)
// -------------------------------------------------------------------
describe('Target Delivery Date Validation (Production isValidDeliveryDate & getTodayInIndia)', () => {
  const todayInIndia = getTodayInIndia();

  it('accepts today\'s date in India (Asia/Kolkata)', () => {
    assert.strictEqual(isValidDeliveryDate(todayInIndia), true);
  });

  it('accepts future dates', () => {
    assert.strictEqual(isValidDeliveryDate('2027-06-15'), true);
    assert.strictEqual(isValidDeliveryDate('2030-12-31'), true);
  });

  it('accepts valid leap year Feb 29 (2028-02-29, 2032-02-29, 2000-02-29)', () => {
    assert.strictEqual(isValidDeliveryDate('2028-02-29'), true);
    assert.strictEqual(isValidDeliveryDate('2032-02-29'), true);
    // Century leap year
    const pastRef = new Date('1999-01-01T00:00:00Z');
    assert.strictEqual(isValidDeliveryDate('2000-02-29', pastRef), true);
  });

  it('rejects non-leap year Feb 29 (2025, 2026, 2027, 2100)', () => {
    assert.strictEqual(isValidDeliveryDate('2025-02-29'), false);
    assert.strictEqual(isValidDeliveryDate('2026-02-29'), false);
    assert.strictEqual(isValidDeliveryDate('2027-02-29'), false);
    assert.strictEqual(isValidDeliveryDate('2100-02-29'), false); // Century non-leap year
  });

  it('rejects 31st on 30-day months (April, June, Sept, Nov)', () => {
    assert.strictEqual(isValidDeliveryDate('2027-04-31'), false);
    assert.strictEqual(isValidDeliveryDate('2027-06-31'), false);
    assert.strictEqual(isValidDeliveryDate('2027-09-31'), false);
    assert.strictEqual(isValidDeliveryDate('2027-11-31'), false);
  });

  it('rejects impossible calendar dates (Feb 30, Day 32, Month 13, Month 00, Day 00)', () => {
    assert.strictEqual(isValidDeliveryDate('2027-02-30'), false);
    assert.strictEqual(isValidDeliveryDate('2027-01-32'), false);
    assert.strictEqual(isValidDeliveryDate('2027-13-01'), false);
    assert.strictEqual(isValidDeliveryDate('2027-00-15'), false);
    assert.strictEqual(isValidDeliveryDate('2027-01-00'), false);
  });

  it('rejects past dates relative to India-local time', () => {
    assert.strictEqual(isValidDeliveryDate('2020-01-01'), false);
    assert.strictEqual(isValidDeliveryDate('2024-01-01'), false);
  });

  it('rejects non-ISO formats without fallback', () => {
    assert.strictEqual(isValidDeliveryDate('15/06/2027'), false);
    assert.strictEqual(isValidDeliveryDate('06-15-2027'), false);
    assert.strictEqual(isValidDeliveryDate('2027/06/15'), false);
    assert.strictEqual(isValidDeliveryDate('June 15, 2027'), false);
    assert.strictEqual(isValidDeliveryDate('tomorrow'), false);
    assert.strictEqual(isValidDeliveryDate(''), false);
    assert.strictEqual(isValidDeliveryDate(null), false);
  });

  it('handles UTC/IST midnight boundary cases correctly', () => {
    // When reference UTC time is 2026-11-15T20:00:00Z:
    // In India (UTC+5:30), the time is 2026-11-16 01:30:00 AM (already the 16th).
    const boundaryRef = new Date('2026-11-15T20:00:00Z');
    assert.strictEqual(getTodayInIndia(boundaryRef), '2026-11-16');

    // Therefore, 2026-11-15 is in the past in India at that moment:
    assert.strictEqual(isValidDeliveryDate('2026-11-15', boundaryRef), false);
    // While 2026-11-16 is accepted as today in India:
    assert.strictEqual(isValidDeliveryDate('2026-11-16', boundaryRef), true);
  });

  it('handles morning UTC cases correctly aligned with India date', () => {
    // When reference UTC time is 2026-11-15T02:00:00Z:
    // In India (UTC+5:30), the time is 2026-11-15 07:30:00 AM (still the 15th).
    const morningRef = new Date('2026-11-15T02:00:00Z');
    assert.strictEqual(getTodayInIndia(morningRef), '2026-11-15');
    assert.strictEqual(isValidDeliveryDate('2026-11-15', morningRef), true);
    assert.strictEqual(isValidDeliveryDate('2026-11-14', morningRef), false);
  });
});

// -------------------------------------------------------------------
// 5. Telephone Validation: Indian Mobile (Production isValidPhone)
// 6. Telephone Validation: Indian Mobile (Production isValidPhone)
// -------------------------------------------------------------------
describe('Telephone Validation - Indian Mobile (Production isValidPhone)', () => {
  it('accepts standard 10-digit Indian mobiles starting with 6, 7, 8, 9', () => {
    assert.strictEqual(isValidPhone('9212126463'), true);
    assert.strictEqual(isValidPhone('9876543210'), true);
    assert.strictEqual(isValidPhone('8123456789'), true);
    assert.strictEqual(isValidPhone('7012345678'), true);
    assert.strictEqual(isValidPhone('6234567890'), true);
  });

  it('accepts Indian mobiles with +91 country prefix and hyphens/spaces', () => {
    assert.strictEqual(isValidPhone('+91 9212126463'), true);
    assert.strictEqual(isValidPhone('+91-9876543210'), true);
    assert.strictEqual(isValidPhone('+918123456789'), true);
  });

  it('accepts Indian mobiles with 91 prefix (12 digits)', () => {
    assert.strictEqual(isValidPhone('919212126463'), true);
    assert.strictEqual(isValidPhone('919876543210'), true);
  });
});

// -------------------------------------------------------------------
// 6. Telephone Validation: Indian Landlines (Production isValidPhone)
// 7. Telephone Validation: Indian Landlines (Production isValidPhone)
// -------------------------------------------------------------------
describe('Telephone Validation - Indian Landlines (Production isValidPhone)', () => {
  it('accepts Delhi landlines (STD 011 / 11) with 8-digit subscriber starting with 2-6', () => {
    assert.strictEqual(isValidPhone('011-23456789'), true);
    assert.strictEqual(isValidPhone('01123456789'), true);
    assert.strictEqual(isValidPhone('1123456789'), true);
    assert.strictEqual(isValidPhone('+91-11-23456789'), true);
    assert.strictEqual(isValidPhone('+91 11 23456789'), true);
    assert.strictEqual(isValidPhone('911123456789'), true);
  });

  it('accepts Mumbai landlines (STD 022 / 22) with 8-digit subscriber starting with 2-6', () => {
    assert.strictEqual(isValidPhone('022-22001122'), true);
    assert.strictEqual(isValidPhone('02222001122'), true);
    assert.strictEqual(isValidPhone('2222001122'), true);
    assert.strictEqual(isValidPhone('+91 22 22001122'), true);
    assert.strictEqual(isValidPhone('912222001122'), true);
  });

  it('accepts other major metro landlines (Kolkata 033, Chennai 044, Bengaluru 080, Pune 020)', () => {
    assert.strictEqual(isValidPhone('033-22334455'), true);
    assert.strictEqual(isValidPhone('044-28112233'), true);
    assert.strictEqual(isValidPhone('080-22998877'), true);
    assert.strictEqual(isValidPhone('020-25678901'), true);
  });

  it('accepts industrial/textile hubs (Noida 0120, Gurugram 0124, Ludhiana 0161, Surat 0261, Indore 0731, Tirupur 0421)', () => {
    assert.strictEqual(isValidPhone('0120-2345678'), true);
    assert.strictEqual(isValidPhone('0124-4567890'), true);
    assert.strictEqual(isValidPhone('0161-2456789'), true);
    assert.strictEqual(isValidPhone('0261-2345678'), true);
    assert.strictEqual(isValidPhone('0731-2345678'), true);
    assert.strictEqual(isValidPhone('0421-2233445'), true);
  });

  it('rejects 10-digit numbers starting with 1-5 that are NOT valid landlines', () => {
    assert.strictEqual(isValidPhone('1000000000'), false);
    assert.strictEqual(isValidPhone('5012345678'), false);
    assert.strictEqual(isValidPhone('1112345678'), false); // Delhi subscriber starting with 1
    assert.strictEqual(isValidPhone('1192345678'), false); // Delhi subscriber starting with 9 (mobile range)
    assert.strictEqual(isValidPhone('011-12345678'), false); // 11-digit Delhi starting with 1
    assert.strictEqual(isValidPhone('011-92345678'), false); // 11-digit Delhi starting with 9
  });

  it('rejects 91-prefixed numbers with invalid landline formats', () => {
    assert.strictEqual(isValidPhone('911112345678'), false);
    assert.strictEqual(isValidPhone('915000000000'), false);
    assert.strictEqual(isValidPhone('911234567890'), false);
  });
});

// -------------------------------------------------------------------
// 7. Telephone Validation: International Numbers (Production isValidPhone)
// 8. Telephone Validation: International Numbers (Production isValidPhone)
// -------------------------------------------------------------------
describe('Telephone Validation - International Numbers (Production isValidPhone)', () => {
  it('accepts international numbers with an explicit + country prefix', () => {
    assert.strictEqual(isValidPhone('+1 415 555 2671'), true); // US
    assert.strictEqual(isValidPhone('+44 20 7946 0958'), true); // UK
    assert.strictEqual(isValidPhone('+81 3 1234 5678'), true); // Japan
    assert.strictEqual(isValidPhone('+971 4 123 4567'), true); // UAE
    assert.strictEqual(isValidPhone('+49 30 123456'), true); // Germany
  });

  it('rejects international numbers missing an explicit + prefix', () => {
    assert.strictEqual(isValidPhone('14155552671'), false);
    assert.strictEqual(isValidPhone('442079460958'), false);
    assert.strictEqual(isValidPhone('81312345678'), false);
  });
});

// -------------------------------------------------------------------
// 8. Telephone Validation: Anti-Abuse & Structural Guards
// 9. Telephone Validation: Anti-Abuse & Structural Guards
// -------------------------------------------------------------------
describe('Telephone Validation - Anti-Abuse & Structural Guards (Production isValidPhone)', () => {
  it('rejects identical repeated digits (dummy numbers)', () => {
    assert.strictEqual(isValidPhone('0000000000'), false);
    assert.strictEqual(isValidPhone('1111111111'), false);
    assert.strictEqual(isValidPhone('9999999999'), false);
    assert.strictEqual(isValidPhone('+91 0000000000'), false);
    assert.strictEqual(isValidPhone('+1 1111111111'), false);
  });

  it('rejects sequential dummy numbers', () => {
    assert.strictEqual(isValidPhone('1234567890'), false);
    assert.strictEqual(isValidPhone('0123456789'), false);
    assert.strictEqual(isValidPhone('+1234567890'), false);
  });

  it('rejects invalid lengths (<10 digits or >15 digits)', () => {
    assert.strictEqual(isValidPhone('12345'), false);
    assert.strictEqual(isValidPhone('98765'), false);
    assert.strictEqual(isValidPhone('1234567890123456'), false);
  });

  it('rejects letters, scripts, and injection payloads', () => {
    assert.strictEqual(isValidPhone('abcdefghij1234567890'), false);
    assert.strictEqual(isValidPhone('<script>9212126463</script>'), false);
    assert.strictEqual(isValidPhone('call: 9212126463'), false);
    assert.strictEqual(isValidPhone(''), false);
  });
});

// -------------------------------------------------------------------
// 9. Postal Code Validation (Production isValidIndianPinCode & isValidPostalCode)
// -------------------------------------------------------------------
describe('Postal Code Validation (Production isValidIndianPinCode & isValidPostalCode)', () => {
  it('accepts valid 6-digit Indian PIN codes (1-9 starting)', () => {
    assert.strictEqual(isValidIndianPinCode('110052'), true); // Delhi
    assert.strictEqual(isValidIndianPinCode('560001'), true); // Bengaluru
    assert.strictEqual(isValidIndianPinCode('400001'), true); // Mumbai
    assert.strictEqual(isValidIndianPinCode('641601'), true); // Tirupur
    assert.strictEqual(isValidPostalCode('110052'), true);
    assert.strictEqual(isValidPostalCode('560001'), true);
  });

  it('rejects Indian PIN codes starting with zero', () => {
    assert.strictEqual(isValidIndianPinCode('011052'), false);
    assert.strictEqual(isValidPostalCode('011052'), false);
  });

  it('rejects Indian PIN codes with incorrect lengths (e.g. 5 digits or 7 digits)', () => {
    assert.strictEqual(isValidIndianPinCode('11005'), false); // 5 digits
    assert.strictEqual(isValidIndianPinCode('1100521'), false); // 7 digits
    assert.strictEqual(isValidPostalCode('1100521'), false); // 7 bare digits
  });

  it('accepts standard international postal code formats', () => {
    // US ZIP (5 digits and ZIP+4)
    assert.strictEqual(isValidPostalCode('90210'), true);
    assert.strictEqual(isValidPostalCode('10001-1234'), true);
    // UK Postcodes
    assert.strictEqual(isValidPostalCode('SW1A 1AA'), true);
    assert.strictEqual(isValidPostalCode('M1 1AE'), true);
    assert.strictEqual(isValidPostalCode('EC1A 1BB'), true);
    assert.strictEqual(isValidPostalCode('sw1a 1aa'), true);
    // Canadian Postal Codes
    assert.strictEqual(isValidPostalCode('M5V 2T6'), true);
    assert.strictEqual(isValidPostalCode('K1A 0B1'), true);
    // European / Australian 4-digit codes
    assert.strictEqual(isValidPostalCode('2000'), true);
    assert.strictEqual(isValidPostalCode('8001'), true);
    // Hyphenated codes (Japan)
    assert.strictEqual(isValidPostalCode('100-0001'), true);
    // European country-prefixed codes
    assert.strictEqual(isValidPostalCode('D-10115'), true);
    assert.strictEqual(isValidPostalCode('CH-8001'), true);
  });

  it('rejects arbitrary, malformed, or injection strings as postal codes', () => {
    assert.strictEqual(isValidPostalCode('ABC-123'), false);
    assert.strictEqual(isValidPostalCode('invalid_postal_code'), false);
    assert.strictEqual(isValidPostalCode('!@#$%^'), false);
    assert.strictEqual(isValidPostalCode('<script>alert(1)</script>'), false);
    assert.strictEqual(isValidPostalCode('12'), false); // too short
    assert.strictEqual(isValidPostalCode('12345678901234'), false); // too long
    assert.strictEqual(isValidPostalCode(''), false);
    assert.strictEqual(isValidPostalCode(null), false);
    assert.strictEqual(isValidPostalCode(undefined), false);
  });
});

// -------------------------------------------------------------------
// 11. Production Form Validation: Quote Inquiry (validateQuoteInquiry)
// -------------------------------------------------------------------
describe('Production Form Validation: Quote Inquiry (Production validateQuoteInquiry)', () => {
  const families = getAllProductFamilies();
  const categories = getAllCategories();
  const products = getAllProducts();

  it('loads the actual production catalogue data', () => {
    assert.ok(families.length > 0);
    assert.ok(categories.length > 0);
    assert.ok(products.length > 0);
  });

  it('validates a complete, valid wholesale quotation inquiry', () => {
    const validResult = validateQuoteInquiry({
      name: 'Rohan Sharma',
      company: 'Apex Apparel Sourcing Ltd',
      email: 'rohan@apexapparel.example',
      phone: '+91 9212126463',
      productInterest: products[0].slug,
      familySlug: products[0].familySlug,
      categorySlug: products[0].categorySlug,
      estimatedQuantity: '1,000 - 5,000 pieces',
      specificationsMessage: 'Premium 100% cotton pique polo t-shirts with embroidered crest on left chest.',
      targetDeliveryDate: '2027-08-20',
    });

    assert.strictEqual(validResult.success, true);
    assert.strictEqual(validResult.data.name, 'Rohan Sharma');
    assert.strictEqual(validResult.data.company, 'Apex Apparel Sourcing Ltd');
    assert.strictEqual(validResult.data.email, 'rohan@apexapparel.example');
    assert.strictEqual(validResult.data.phone, '+91 9212126463');
    assert.strictEqual(validResult.data.productInterest, products[0].name);
    assert.strictEqual(validResult.data.targetDeliveryDate, '2027-08-20');
  });

  it('validates minimal valid quote inquiry without optional fields', () => {
    const result = validateQuoteInquiry({
      name: 'Rohan Sharma',
      company: 'Apex Apparel Sourcing Ltd',
      email: 'rohan@apexapparel.example',
      phone: '9212126463',
      estimatedQuantity: '50 - 150 pieces',
      specificationsMessage: 'Inquiry for custom athletic wear without optional parameters.',
    });

    assert.strictEqual(result.success, true);
    assert.strictEqual(result.data.productInterest, undefined);
    assert.strictEqual(result.data.familySlug, undefined);
    assert.strictEqual(result.data.categorySlug, undefined);
    assert.strictEqual(result.data.targetDeliveryDate, undefined);
  });

  it('rejects mismatched family/category pairs (e.g. track-suits under t-shirts)', () => {
    const result = validateQuoteInquiry({
      name: 'Rohan Sharma',
      company: 'Apex Apparel Sourcing Ltd',
      email: 'rohan@apexapparel.example',
      phone: '9212126463',
      familySlug: 't-shirts',
      categorySlug: 'track-suits',
      estimatedQuantity: '1000-2500',
      specificationsMessage: 'Premium combed cotton interlock specifications test.',
    });

    assert.strictEqual(result.success, true);
    assert.strictEqual(result.data.familySlug, 't-shirts');
    assert.strictEqual(result.data.categorySlug, undefined, 'Mismatched category must be discarded');
  });

  it('preserves valid family/category pairs from real catalogue', () => {
    const result = validateQuoteInquiry({
      name: 'Rohan Sharma',
      company: 'Apex Apparel Sourcing Ltd',
      email: 'rohan@apexapparel.example',
      phone: '9212126463',
      familySlug: 't-shirts',
      categorySlug: 'round-neck-t-shirts',
      estimatedQuantity: '1000-2500',
      specificationsMessage: 'Premium combed cotton interlock specifications test.',
    });

    assert.strictEqual(result.success, true);
    assert.strictEqual(result.data.familySlug, 't-shirts');
    assert.strictEqual(result.data.categorySlug, 'round-neck-t-shirts');
  });

  it('infers parent family from standalone category using real catalogue', () => {
    const result = validateQuoteInquiry({
      name: 'Rohan Sharma',
      company: 'Apex Apparel Sourcing Ltd',
      email: 'rohan@apexapparel.example',
      phone: '9212126463',
      categorySlug: 'hoodies-sweatshirts',
      estimatedQuantity: '500-1000',
      specificationsMessage: 'Heavyweight fleece hoodie inquiry for winter collection.',
    });

    assert.strictEqual(result.success, true);
    assert.strictEqual(result.data.familySlug, 'track-suits-activewear');
    assert.strictEqual(result.data.categorySlug, 'hoodies-sweatshirts');
  });

  it('discards unknown product interest (never retains arbitrary input)', () => {
    const result = validateQuoteInquiry({
      name: 'Rohan Sharma',
      company: 'Apex Apparel Sourcing Ltd',
      email: 'rohan@apexapparel.example',
      phone: '9212126463',
      productInterest: 'completely-unmatched-fake-product-12345',
      estimatedQuantity: '500-1000',
      specificationsMessage: 'Inquiry with unverified product interest.',
    });

    assert.strictEqual(result.success, true);
    assert.strictEqual(result.data.productInterest, undefined, 'Unknown product must be set to undefined');
  });

  it('resolves known product from actual catalogue to canonical name, family, and category', () => {
    const sampleProduct = products[0];
    const result = validateQuoteInquiry({
      name: 'Rohan Sharma',
      company: 'Apex Apparel Sourcing Ltd',
      email: 'rohan@apexapparel.example',
      phone: '9212126463',
      productInterest: sampleProduct.slug,
      estimatedQuantity: '500-1000',
      specificationsMessage: 'Inquiry for known catalogue garment.',
    });

    assert.strictEqual(result.success, true);
    assert.strictEqual(result.data.productInterest, sampleProduct.name);
    assert.strictEqual(result.data.familySlug, sampleProduct.familySlug);
    assert.strictEqual(result.data.categorySlug, sampleProduct.categorySlug);
  });

  it('validates target delivery date integration (accepts future date, rejects invalid date)', () => {
    // Valid delivery date
    const validResult = validateQuoteInquiry({
      name: 'Rohan Sharma',
      company: 'Apex Apparel Sourcing Ltd',
      email: 'rohan@apexapparel.example',
      phone: '9212126463',
      estimatedQuantity: '500-1000',
      specificationsMessage: 'Inquiry with valid future delivery target.',
      targetDeliveryDate: '2027-08-20',
    });
    assert.strictEqual(validResult.success, true);
    assert.strictEqual(validResult.data.targetDeliveryDate, '2027-08-20');

    // Invalid delivery date (past)
    const invalidResult = validateQuoteInquiry({
      name: 'Rohan Sharma',
      company: 'Apex Apparel Sourcing Ltd',
      email: 'rohan@apexapparel.example',
      phone: '9212126463',
      estimatedQuantity: '500-1000',
      specificationsMessage: 'Inquiry with past delivery target.',
      targetDeliveryDate: '2020-01-01',
    });
    assert.strictEqual(invalidResult.success, false);
    assert.strictEqual(
      invalidResult.errors.targetDeliveryDate,
      'Target delivery date must be today or a future date in YYYY-MM-DD format.'
    );
  });

  it('returns updated phone error message on invalid phone input', () => {
    const invalidPhoneResult = validateQuoteInquiry({
      name: 'Rohan Sharma',
      company: 'Apex Apparel Sourcing Ltd',
      email: 'rohan@apexapparel.example',
      phone: '1000000000',
      estimatedQuantity: '500-1000',
      specificationsMessage: 'Inquiry with invalid phone number.',
    });
    assert.strictEqual(invalidPhoneResult.success, false);
    assert.strictEqual(
      invalidPhoneResult.errors.phone,
      'Please provide a valid contact telephone number.'
    );
  });

  it('rejects inquiry with missing required fields or short specifications', () => {
    const missingResult = validateQuoteInquiry({
      name: '',
      company: '',
      email: 'bad-email',
      phone: 'not-a-phone',
      estimatedQuantity: '',
      specificationsMessage: 'short',
    });
    assert.strictEqual(missingResult.success, false);
    assert.ok(missingResult.errors.name);
    assert.ok(missingResult.errors.company);
    assert.ok(missingResult.errors.email);
    assert.ok(missingResult.errors.phone);
    assert.ok(missingResult.errors.estimatedQuantity);
    assert.ok(missingResult.errors.specificationsMessage);
  });
});

// -------------------------------------------------------------------
// 12. Production Form Validation: Sample Request (validateSampleInquiry)
// -------------------------------------------------------------------
describe('Production Form Validation: Sample Request (Production validateSampleInquiry)', () => {
  const products = getAllProducts();

  it('validates a complete, valid sample request with fabric-swatch', () => {
    const validResult = validateSampleInquiry({
      name: 'Suresh Patel',
      company: 'Gujarat Sports Federation',
      email: 'suresh@gsf.example',
      phone: '9212126463',
      deliveryAddress: 'Plot 42, Sector 18, Electronic City',
      city: 'Gandhinagar',
      postalCode: '382018',
      productInterest: products[0].slug,
      sampleType: 'fabric-swatch',
      customRequirements: 'Require 240 GSM dri-fit interlock swatches in Royal Blue and White.',
    });

    assert.strictEqual(validResult.success, true);
    assert.strictEqual(validResult.data.name, 'Suresh Patel');
    assert.strictEqual(validResult.data.sampleType, 'fabric-swatch');
    assert.strictEqual(validResult.data.productInterest, products[0].name);
    assert.strictEqual(validResult.data.postalCode, '382018');
  });

  it('accepts sample formats: prototype-garment and size-set', () => {
    const protoResult = validateSampleInquiry({
      name: 'Suresh Patel',
      company: 'Gujarat Sports Federation',
      email: 'suresh@gsf.example',
      phone: '+91 9212126463',
      deliveryAddress: 'Plot 42, Sector 18, Electronic City',
      city: 'Gandhinagar',
      postalCode: '382018',
      sampleType: 'prototype-garment',
    });
    assert.strictEqual(protoResult.success, true);
    assert.strictEqual(protoResult.data.sampleType, 'prototype-garment');

    const sizeSetResult = validateSampleInquiry({
      name: 'Suresh Patel',
      company: 'Gujarat Sports Federation',
      email: 'suresh@gsf.example',
      phone: '+91 9212126463',
      deliveryAddress: 'Plot 42, Sector 18, Electronic City',
      city: 'Gandhinagar',
      postalCode: '382018',
      sampleType: 'size-set',
    });
    assert.strictEqual(sizeSetResult.success, true);
    assert.strictEqual(sizeSetResult.data.sampleType, 'size-set');
  });

  it('validates international delivery addresses with international postal codes', () => {
    const usResult = validateSampleInquiry({
      name: 'John Miller',
      company: 'Miller Athletics LLC',
      email: 'john@millerathletics.example',
      phone: '+1 415 555 2671',
      deliveryAddress: '100 Montgomery Street, Suite 500',
      city: 'San Francisco',
      postalCode: '94104',
      sampleType: 'prototype-garment',
    });
    assert.strictEqual(usResult.success, true);
    assert.strictEqual(usResult.data.postalCode, '94104');
  });

  it('rejects invalid sampleType', () => {
    const invalidTypeResult = validateSampleInquiry({
      name: 'Suresh Patel',
      company: 'Gujarat Sports Federation',
      email: 'suresh@gsf.example',
      phone: '9212126463',
      deliveryAddress: 'Plot 42, Sector 18, Electronic City',
      city: 'Gandhinagar',
      postalCode: '382018',
      sampleType: 'unsupported-format',
    });
    assert.strictEqual(invalidTypeResult.success, false);
    assert.ok(invalidTypeResult.errors.sampleType);
  });

  it('rejects delivery address that is too short (< 10 chars)', () => {
    const shortAddressResult = validateSampleInquiry({
      name: 'Suresh Patel',
      company: 'Gujarat Sports Federation',
      email: 'suresh@gsf.example',
      phone: '9212126463',
      deliveryAddress: 'Short St',
      city: 'Gandhinagar',
      postalCode: '382018',
      sampleType: 'fabric-swatch',
    });
    assert.strictEqual(shortAddressResult.success, false);
    assert.ok(shortAddressResult.errors.deliveryAddress);
  });

  it('rejects invalid postal code in sample inquiry', () => {
    const badPostalResult = validateSampleInquiry({
      name: 'Suresh Patel',
      company: 'Gujarat Sports Federation',
      email: 'suresh@gsf.example',
      phone: '9212126463',
      deliveryAddress: 'Plot 42, Sector 18, Electronic City',
      city: 'Gandhinagar',
      postalCode: '011052', // Invalid Indian PIN starting with 0
      sampleType: 'fabric-swatch',
    });
    assert.strictEqual(badPostalResult.success, false);
    assert.ok(badPostalResult.errors.postalCode);
  });

  it('discards unknown product interest for samples without error', () => {
    const unknownProductResult = validateSampleInquiry({
      name: 'Suresh Patel',
      company: 'Gujarat Sports Federation',
      email: 'suresh@gsf.example',
      phone: '9212126463',
      deliveryAddress: 'Plot 42, Sector 18, Electronic City',
      city: 'Gandhinagar',
      postalCode: '382018',
      productInterest: 'non-existent-product-id',
      sampleType: 'fabric-swatch',
    });
    assert.strictEqual(unknownProductResult.success, true);
    assert.strictEqual(unknownProductResult.data.productInterest, undefined);
  });
});

// -------------------------------------------------------------------
// 13. Server Action Testing: submitQuoteInquiry & submitSampleInquiry
// -------------------------------------------------------------------
describe('Server Actions Integration (Production submitQuoteInquiry & submitSampleInquiry)', () => {
  it('submitQuoteInquiry returns provider_unavailable and formats complete WhatsApp URL with all fields', async () => {
    const fd = new FormData();
    fd.append('name', 'Rohan Sharma');
    fd.append('company', 'Apex Apparel Sourcing Ltd');
    fd.append('email', 'rohan@apexapparel.example');
    fd.append('phone', '+91 9212126463');
    fd.append('productInterest', 'Track Suits');
    fd.append('familySlug', 'track-suits-activewear');
    fd.append('categorySlug', 'track-suits');
    fd.append('estimatedQuantity', '500 - 1,000 pieces');
    fd.append('targetDeliveryDate', '2027-08-20');
    fd.append('specificationsMessage', 'Need 500 sets of sublimated interlock track suits with institutional branding.');

    const result = await submitQuoteInquiry(null, fd);

    // Honest delivery assertion: provider_unavailable because automated email provider is not yet hooked up
    assert.strictEqual(result.status, 'provider_unavailable');
    assert.ok(result.fallbackWhatsAppUrl);
    assert.strictEqual(result.verifiedContactPhone, '+91 9212126463');

    // Decode URL and verify all critical fields are present in the WhatsApp text
    const decodedUrl = decodeURIComponent(result.fallbackWhatsAppUrl);
    assert.ok(decodedUrl.startsWith('https://wa.me/919212126463?text='));
    assert.ok(decodedUrl.includes('*Buyer:* Rohan Sharma'));
    assert.ok(decodedUrl.includes('*Organization:* Apex Apparel Sourcing Ltd'));
    assert.ok(decodedUrl.includes('*Email:* rohan@apexapparel.example'), 'WhatsApp text MUST contain customer email');
    assert.ok(decodedUrl.includes('*Phone:* +91 9212126463'));
    assert.ok(decodedUrl.includes('*Target Delivery:* 2027-08-20'), 'WhatsApp text MUST contain target delivery date');
    assert.ok(decodedUrl.includes('*Estimated Volume:* 500 - 1,000 pieces'));
    assert.ok(decodedUrl.includes('*Specifications:* Need 500 sets'));

    // Context summary checks
    assert.strictEqual(result.contextSummary.deliveryDate, '2027-08-20');
    assert.strictEqual(result.contextSummary.quantity, '500 - 1,000 pieces');
  });

  it('submitQuoteInquiry silently rejects spam when honeypot is populated', async () => {
    const fd = new FormData();
    fd.append('_hp_company_url', 'https://spam-bot-marketing.example');
    fd.append('name', 'Spam Bot');
    fd.append('company', 'Spam Corp');
    fd.append('email', 'bot@spam.example');
    fd.append('phone', '9212126463');

    const result = await submitQuoteInquiry(null, fd);
    assert.strictEqual(result.status, 'validation_error');
    assert.strictEqual(result.message, 'Your inquiry could not be processed at this time.');
    assert.strictEqual(result.fallbackWhatsAppUrl, undefined);
  });

  it('submitQuoteInquiry returns validation_error and fieldErrors on invalid input', async () => {
    const fd = new FormData();
    fd.append('name', 'A'); // Too short
    fd.append('company', ''); // Missing
    fd.append('email', 'not-an-email');
    fd.append('phone', '123'); // Invalid phone
    fd.append('estimatedQuantity', '');
    fd.append('specificationsMessage', 'short');

    const result = await submitQuoteInquiry(null, fd);
    assert.strictEqual(result.status, 'validation_error');
    assert.ok(result.fieldErrors);
    assert.ok(result.fieldErrors.name);
    assert.ok(result.fieldErrors.company);
    assert.ok(result.fieldErrors.email);
    assert.ok(result.fieldErrors.phone);
    assert.ok(result.fieldErrors.estimatedQuantity);
    assert.ok(result.fieldErrors.specificationsMessage);
  });

  it('submitSampleInquiry returns provider_unavailable and formats complete WhatsApp URL with courier address and sample format', async () => {
    const fd = new FormData();
    fd.append('name', 'Suresh Patel');
    fd.append('company', 'Gujarat Sports Federation');
    fd.append('email', 'suresh@gsf.example');
    fd.append('phone', '+91 9212126463');
    fd.append('deliveryAddress', 'Plot 42, Sector 18, Electronic City');
    fd.append('city', 'Gandhinagar');
    fd.append('postalCode', '382018');
    fd.append('sampleType', 'fabric-swatch');
    fd.append('customRequirements', 'Need swatch booklet for 240 GSM dri-fit polyester interlock.');

    const result = await submitSampleInquiry(null, fd);

    assert.strictEqual(result.status, 'provider_unavailable');
    assert.ok(result.fallbackWhatsAppUrl);
    assert.strictEqual(result.verifiedContactPhone, '+91 9212126463');

    const decodedUrl = decodeURIComponent(result.fallbackWhatsAppUrl);
    assert.ok(decodedUrl.includes('*Buyer:* Suresh Patel'));
    assert.ok(decodedUrl.includes('*Organization:* Gujarat Sports Federation'));
    assert.ok(decodedUrl.includes('*Email:* suresh@gsf.example'), 'WhatsApp text MUST contain customer email');
    assert.ok(decodedUrl.includes('*Phone:* +91 9212126463'));
    assert.ok(decodedUrl.includes('*Sample Format:* Fabric Swatch'), 'Sample format label must be readable');
    assert.ok(decodedUrl.includes('*Delivery Address:* Plot 42, Sector 18, Electronic City'));
    assert.ok(decodedUrl.includes('*City:* Gandhinagar'));
    assert.ok(decodedUrl.includes('*Postal Code:* 382018'));
    assert.ok(decodedUrl.includes('*Requirements:* Need swatch booklet'));
  });

  it('submitSampleInquiry silently rejects spam when honeypot is populated', async () => {
    const fd = new FormData();
    fd.append('_hp_company_url', 'http://malicious-spammer.example');
    fd.append('name', 'Sample Spammer');
    fd.append('company', 'Spam Co');

    const result = await submitSampleInquiry(null, fd);
    assert.strictEqual(result.status, 'validation_error');
    assert.strictEqual(result.message, 'Your inquiry could not be processed at this time.');
  });

  it('submitSampleInquiry returns validation_error and fieldErrors on invalid input', async () => {
    const fd = new FormData();
    fd.append('name', '');
    fd.append('deliveryAddress', 'Short');
    fd.append('postalCode', '011052'); // Bad postal code

    const result = await submitSampleInquiry(null, fd);
    assert.strictEqual(result.status, 'validation_error');
    assert.ok(result.fieldErrors);
    assert.ok(result.fieldErrors.name);
    assert.ok(result.fieldErrors.deliveryAddress);
    assert.ok(result.fieldErrors.postalCode);
  });
});
