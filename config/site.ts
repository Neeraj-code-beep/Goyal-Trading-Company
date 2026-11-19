export const siteConfig = {
  name: 'Goyal Trading Company',
  description: 'B2B textile manufacturing and wholesale trading established in 2000. Supplying sportswear, activewear, school wear, and corporate uniforms from Delhi.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  contact: {
    publicPhoneApproved: false, // Set to true once business owner approval is received for public display
    publicWhatsAppApproved: false,
  },
  links: {
    email: 'Goyals27@yahoo.in',
    phone: '+91-9212126463',
    whatsapp: '919212126463',
    address: {
      line1: 'No. E-187, First Floor',
      landmark: 'Near Indra Park, Opp. Metro Pillar 180',
      locality: 'Shastri Nagar',
      city: 'Delhi',
      postalCode: '110052',
      country: 'India',
      full: 'No. E-187, First Floor, Near Indra Park, Opp. Metro Pillar 180, Shastri Nagar, Delhi - 110052, India',
    },
  },
  social: {
    linkedin: 'https://linkedin.com/company/goyaltrading',
    twitter: 'https://twitter.com/goyaltrading',
    instagram: 'https://instagram.com/goyaltrading',
  },
}
