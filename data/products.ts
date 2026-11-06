import { ProductFamily, ProductCategory, ProductSubcategory, Product, ProductFamilySlug } from '@/types/product'

// Product Families based on verified repository data
export const productFamilies: ProductFamily[] = [
  {
    id: 'track-suits-activewear',
    slug: 'track-suits-activewear',
    name: 'Track Suits & Activewear',
    shortName: 'Track Suits',
    description: 'Comprehensive range of track suits, jogging suits, and activewear for sports, fitness, and casual wear.',
    categories: [
      {
        id: 'track-suits',
        slug: 'track-suits',
        name: 'Track Suits',
        description: 'Full track suits including jogging, polyester, cotton, and winter variants.',
        familySlug: 'track-suits-activewear',
        subcategories: [
          {
            id: 'general-track-suits',
            slug: 'general-track-suits',
            name: 'Track Suits',
            categorySlug: 'track-suits',
            products: [
              {
                id: 'track-suit-general',
                slug: 'track-suit-general',
                name: 'Track Suit',
                familySlug: 'track-suits-activewear',
                categorySlug: 'track-suits',
                subcategorySlug: 'general-track-suits',
                description: 'General purpose track suit for sports and casual wear.',
                featured: true,
                inquiryLabel: 'Request Track Suit Quote',
                specifications: {
                  fabric: '100% Polyester / Cotton Blend',
                  gsm: '220-240 GSM',
                  material: 'Breathable, Moisture-wicking',
                  features: [
                    'Full zip jacket with stand collar',
                    'Elastic waistband with drawstring',
                    'Side pockets with zippers',
                    'Ribbed cuffs and hem',
                    'Machine washable',
                    'Color fastness guaranteed'
                  ]
                },
                tags: ['Sports', 'Track Suit', 'Activewear', 'Team Uniforms', 'School Wear']
              }
            ]
          },
          {
            id: 'jogging-track-suits',
            slug: 'jogging-track-suits',
            name: 'Jogging Track Suits',
            categorySlug: 'track-suits',
            products: []
          },
          {
            id: 'polyester-track-suits',
            slug: 'polyester-track-suits',
            name: 'Polyester Track Suits',
            categorySlug: 'track-suits',
            products: []
          },
          {
            id: 'school-tracksuits',
            slug: 'school-tracksuits',
            name: 'School Tracksuits',
            categorySlug: 'track-suits',
            products: []
          },
          {
            id: 'winter-track-suits',
            slug: 'winter-track-suits',
            name: 'Winter Track Suits',
            categorySlug: 'track-suits',
            products: []
          }
        ],
        featured: true,
        seo: {
          title: 'Track Suits - Sports & Activewear | Goyal Trading Company',
          description: 'Premium quality track suits for sports, fitness, and school use. Custom manufacturing available.'
        }
      },
      {
        id: 'hoodies-sweatshirts',
        slug: 'hoodies-sweatshirts',
        name: 'Hoodies & Sweatshirts',
        description: 'Comfortable hoodies and sweatshirts for casual wear and team uniforms.',
        familySlug: 'track-suits-activewear',
        subcategories: [
          {
            id: 'hoodies',
            slug: 'hoodies',
            name: 'Hoodies',
            categorySlug: 'hoodies-sweatshirts',
            products: []
          },
          {
            id: 'sweatshirts',
            slug: 'sweatshirts',
            name: 'Sweatshirts',
            categorySlug: 'hoodies-sweatshirts',
            products: []
          }
        ],
        featured: true,
        seo: {
          title: 'Hoodies & Sweatshirts Manufacturer | Goyal Trading Company',
          description: 'Premium hoodies and sweatshirts for casual wear and team uniforms.'
        }
      },
      {
        id: 'track-pants',
        slug: 'track-pants',
        name: 'Track Pants',
        description: 'Track pants and lower wear in various materials and fits.',
        familySlug: 'track-suits-activewear',
        subcategories: [
          {
            id: 'general-track-pants',
            slug: 'general-track-pants',
            name: 'Track Pants',
            categorySlug: 'track-pants',
            products: [
              {
                id: 'track-pant-general',
                slug: 'track-pant-general',
                name: 'Track Pant',
                familySlug: 'track-suits-activewear',
                categorySlug: 'track-pants',
                subcategorySlug: 'general-track-pants',
                description: 'Comfortable track pant for sports and casual wear.',
                featured: true,
                inquiryLabel: 'Request Track Pant Quote',
                specifications: {
                  fabric: '100% Polyester / Cotton Blend',
                  gsm: '220-240 GSM',
                  material: 'Breathable, Comfortable',
                  features: [
                    'Elastic waistband with drawstring',
                    'Side pockets',
                    'Ribbed ankle cuffs',
                    'Moisture-wicking fabric',
                    'Color fastness guaranteed',
                    'Machine washable'
                  ]
                },
                tags: ['Track Pant', 'Sports', 'Activewear', 'Casual Wear', 'Training']
              }
            ]
          },
          {
            id: 'spandex-track-pants',
            slug: 'spandex-track-pants',
            name: 'Spandex Track Pants',
            categorySlug: 'track-pants',
            products: []
          }
        ],
        featured: true,
        seo: {
          title: 'Track Pants - Sports Lower Wear | Goyal Trading Company',
          description: 'High-quality track pants and sports lower wear. Custom options available.'
        }
      }
    ],
    featured: true,
    seo: {
      title: 'Track Suits & Activewear Manufacturer | Goyal Trading Company',
      description: 'Leading manufacturer of track suits, activewear, and sports apparel. Custom bulk orders.'
    }
  },
  {
    id: 't-shirts',
    slug: 't-shirts',
    name: 'T-Shirts',
    shortName: 'T-Shirts',
    description: 'Wide range of t-shirts including round neck, polo, dry fit, and corporate t-shirts.',
    categories: [
      {
        id: 'round-neck-t-shirts',
        slug: 'round-neck-t-shirts',
        name: 'Round Neck T-Shirts',
        description: 'Classic round neck t-shirts in cotton, polyester, and blends.',
        familySlug: 't-shirts',
        subcategories: [
          {
            id: 'cotton-t-shirts',
            slug: 'cotton-t-shirts',
            name: 'Cotton T-Shirts',
            categorySlug: 'round-neck-t-shirts',
            products: [
              {
                id: 'round-neck-cotton-tshirt',
                slug: 'round-neck-cotton-tshirt',
                name: 'Round Neck Cotton T-Shirt',
                familySlug: 't-shirts',
                categorySlug: 'round-neck-t-shirts',
                subcategorySlug: 'cotton-t-shirts',
                description: 'Breathable cotton t-shirt for everyday wear.',
                featured: true,
                inquiryLabel: 'Request T-Shirt Quote',
                specifications: {
                  fabric: '100% Cotton',
                  gsm: '180-200 GSM',
                  material: 'Soft, Breathable, Absorbent',
                  features: [
                    'Round neck design',
                    'Double-stitched hems',
                    'Pre-shrunk fabric',
                    'Bio-wash finish',
                    'Color fastness guaranteed',
                    'Available in multiple colors'
                  ]
                },
                tags: ['T-Shirt', 'Cotton', 'Round Neck', 'Casual Wear', 'Corporate']
              }
            ]
          },
          {
            id: 'printed-t-shirts',
            slug: 'printed-t-shirts',
            name: 'Printed T-Shirts',
            categorySlug: 'round-neck-t-shirts',
            products: []
          },
          {
            id: 'v-neck-t-shirts',
            slug: 'v-neck-t-shirts',
            name: 'V-Neck T-Shirts',
            categorySlug: 'round-neck-t-shirts',
            products: []
          },
          {
            id: 'oversized-t-shirts',
            slug: 'oversized-t-shirts',
            name: 'Oversized T-Shirts',
            categorySlug: 'round-neck-t-shirts',
            products: []
          }
        ],
        featured: true,
        seo: {
          title: 'Round Neck T-Shirts Manufacturer | Goyal Trading Company',
          description: 'Premium round neck t-shirts in cotton and polyester. Custom printing available.'
        }
      },
      {
        id: 'polo-t-shirts',
        slug: 'polo-t-shirts',
        name: 'Polo T-Shirts',
        description: 'Collared polo t-shirts for corporate and casual wear.',
        familySlug: 't-shirts',
        subcategories: [
          {
            id: 'dry-fit-polo',
            slug: 'dry-fit-polo',
            name: 'Dry Fit Polo',
            categorySlug: 'polo-t-shirts',
            products: [
              {
                id: 'dry-fit-polo-black',
                slug: 'dry-fit-polo-black',
                name: 'Dry Fit Polo Black',
                familySlug: 't-shirts',
                categorySlug: 'polo-t-shirts',
                subcategorySlug: 'dry-fit-polo',
                description: 'Moisture-wicking dry fit polo t-shirt.',
                featured: true,
                inquiryLabel: 'Request Polo Quote',
                specifications: {
                  fabric: '100% Polyester',
                  gsm: '160-180 GSM',
                  material: 'Moisture-wicking, Quick-dry',
                  features: [
                    'Collared design with buttons',
                    'Moisture-wicking technology',
                    'Anti-odor treatment',
                    'UV protection',
                    'Breathable mesh panels',
                    'Machine washable'
                  ]
                },
                tags: ['Polo', 'Dry Fit', 'Sports', 'Corporate', 'Athletic']
              }
            ]
          },
          {
            id: 'corporate-polo',
            slug: 'corporate-polo',
            name: 'Corporate Polo',
            categorySlug: 'polo-t-shirts',
            products: []
          }
        ],
        featured: true,
        seo: {
          title: 'Polo T-Shirts - Corporate & Sports | Goyal Trading Company',
          description: 'Premium polo t-shirts for corporate branding and sports teams. Custom embroidery.'
        }
      },
      {
        id: 'corporate-t-shirts',
        slug: 'corporate-t-shirts',
        name: 'Corporate T-Shirts',
        description: 'Custom corporate t-shirts for branding and events.',
        familySlug: 't-shirts',
        subcategories: [],
        featured: true,
        seo: {
          title: 'Corporate T-Shirts Manufacturer | Goyal Trading Company',
          description: 'Custom corporate t-shirts with logo printing and embroidery. Bulk orders.'
        }
      }
    ],
    featured: true,
    seo: {
      title: 'T-Shirts Manufacturer - Polo, Round Neck, Corporate | Goyal Trading Company',
      description: 'Leading manufacturer of t-shirts including polo, round neck, and corporate variants.'
    }
  },
  {
    id: 'sports-wear-athletic-gear',
    slug: 'sports-wear-athletic-gear',
    name: 'Sports Wear & Athletic Gear',
    shortName: 'Sports Wear',
    description: 'Specialized sports wear including cricket, football, kabaddi kits, and athletic gear.',
    categories: [
      {
        id: 'cricket-wear',
        slug: 'cricket-wear',
        name: 'Cricket Wear',
        description: 'Complete cricket uniforms, dresses, and accessories.',
        familySlug: 'sports-wear-athletic-gear',
        subcategories: [
          {
            id: 'cricket-dress',
            slug: 'cricket-dress',
            name: 'Cricket Dress',
            categorySlug: 'cricket-wear',
            products: [
              {
                id: 'cricket-dress-team',
                slug: 'cricket-dress-team',
                name: 'Cricket Dress',
                familySlug: 'sports-wear-athletic-gear',
                categorySlug: 'cricket-wear',
                subcategorySlug: 'cricket-dress',
                description: 'Complete cricket team dress with custom numbering.',
                featured: true,
                inquiryLabel: 'Request Cricket Kit Quote',
                specifications: {
                  fabric: '100% Polyester',
                  gsm: '200-220 GSM',
                  material: 'Breathable, Quick-dry',
                  features: [
                    'Custom numbering and logos',
                    'Moisture-wicking fabric',
                    'Reinforced stitching',
                    'Team color options',
                    'Player name customization',
                    'UV resistant'
                  ]
                },
                tags: ['Cricket', 'Team Uniform', 'Sports', 'Custom', 'Athletic']
              }
            ]
          },
          {
            id: 'cricket-track-pants',
            slug: 'cricket-track-pants',
            name: 'Cricket Track Pants',
            categorySlug: 'cricket-wear',
            products: []
          }
        ],
        featured: true,
        seo: {
          title: 'Cricket Wear Manufacturer | Goyal Trading Company',
          description: 'Custom cricket uniforms and team kits. Professional quality sports wear.'
        }
      },
      {
        id: 'football-kits',
        slug: 'football-kits',
        name: 'Football Kits',
        description: 'Football team kits and uniforms.',
        familySlug: 'sports-wear-athletic-gear',
        subcategories: [
          {
            id: 'football-dress',
            slug: 'football-dress',
            name: 'Football Dress',
            categorySlug: 'football-kits',
            products: [
              {
                id: 'football-kit-navy',
                slug: 'football-kit-navy',
                name: 'Sports Navy Blue Football Kit',
                familySlug: 'sports-wear-athletic-gear',
                categorySlug: 'football-kits',
                subcategorySlug: 'football-dress',
                description: 'Professional football team kit in navy blue.',
                featured: true,
                inquiryLabel: 'Request Football Kit Quote',
                specifications: {
                  fabric: '100% Polyester',
                  gsm: '180-200 GSM',
                  material: 'Breathable, Lightweight',
                  features: [
                    'Custom team numbering',
                    'Breathable mesh panels',
                    'Moisture-wicking technology',
                    'Reinforced seams',
                    'Multiple color options',
                    'Professional fit'
                  ]
                },
                tags: ['Football', 'Team Kit', 'Sports', 'Custom', 'Athletic']
              }
            ]
          }
        ],
        featured: true,
        seo: {
          title: 'Football Kits Manufacturer | Goyal Trading Company',
          description: 'Custom football team kits and uniforms. Professional sports manufacturing.'
        }
      },
      {
        id: 'kabaddi-wear',
        slug: 'kabaddi-wear',
        name: 'Kabaddi Wear',
        description: 'Kabaddi team dresses and athletic wear.',
        familySlug: 'sports-wear-athletic-gear',
        subcategories: [
          {
            id: 'kabaddi-dress',
            slug: 'kabaddi-dress',
            name: 'Kabaddi Dress',
            categorySlug: 'kabaddi-wear',
            products: [
              {
                id: 'kabaddi-dress-printed',
                slug: 'kabaddi-dress-printed',
                name: 'Men Printed Kabaddi Dress',
                familySlug: 'sports-wear-athletic-gear',
                categorySlug: 'kabaddi-wear',
                subcategorySlug: 'kabaddi-dress',
                description: 'Printed kabaddi team dress for competitions.',
                featured: true,
                inquiryLabel: 'Request Kabaddi Kit Quote',
                specifications: {
                  fabric: '100% Polyester',
                  gsm: '200-220 GSM',
                  material: 'Durable, Quick-dry',
                  features: [
                    'Custom team printing',
                    'Reinforced stitching',
                    'Moisture-wicking fabric',
                    'Competition grade',
                    'Team color customization',
                    'Breathable design'
                  ]
                },
                tags: ['Kabaddi', 'Team Uniform', 'Sports', 'Custom', 'Athletic']
              }
            ]
          }
        ],
        featured: true,
        seo: {
          title: 'Kabaddi Wear Manufacturer | Goyal Trading Company',
          description: 'Custom kabaddi team dresses and athletic wear. Professional sports manufacturing.'
        }
      }
    ],
    featured: true,
    seo: {
      title: 'Sports Wear & Athletic Gear Manufacturer | Goyal Trading Company',
      description: 'Specialized sports wear for cricket, football, kabaddi, and athletic teams. Custom manufacturing.'
    }
  },
  {
    id: 'jackets-outerwear',
    slug: 'jackets-outerwear',
    name: 'Jackets & Outerwear',
    shortName: 'Jackets',
    description: 'Jackets, windcheaters, rain wear, and outerwear for various applications.',
    categories: [
      {
        id: 'jackets',
        slug: 'jackets',
        name: 'Jackets',
        description: 'Training jackets, corporate jackets, and casual outerwear.',
        familySlug: 'jackets-outerwear',
        subcategories: [
          {
            id: 'training-jackets',
            slug: 'training-jackets',
            name: 'Training Jackets',
            categorySlug: 'jackets',
            products: [
              {
                id: 'training-jacket-spandex',
                slug: 'training-jacket-spandex',
                name: 'Spandex Training Jacket',
                familySlug: 'jackets-outerwear',
                categorySlug: 'jackets',
                subcategorySlug: 'training-jackets',
                description: 'Flexible spandex training jacket for sports and fitness.',
                featured: true,
                inquiryLabel: 'Request Jacket Quote',
                specifications: {
                  fabric: 'Spandex Blend',
                  gsm: '240-260 GSM',
                  material: 'Flexible, Stretchable',
                  features: [
                    'Full zip front',
                    'Stand collar',
                    'Side pockets with zippers',
                    'Elastic cuffs and hem',
                    '4-way stretch fabric',
                    'Breathable mesh lining'
                  ]
                },
                tags: ['Jacket', 'Training', 'Sports', 'Spandex', 'Athletic']
              }
            ]
          },
          {
            id: 'corporate-jackets',
            slug: 'corporate-jackets',
            name: 'Corporate Jackets',
            categorySlug: 'jackets',
            products: []
          },
          {
            id: 'winter-jackets',
            slug: 'winter-jackets',
            name: 'Winter Jackets',
            categorySlug: 'jackets',
            products: []
          },
          {
            id: 'safety-jackets',
            slug: 'safety-jackets',
            name: 'Safety Jackets',
            categorySlug: 'jackets',
            products: []
          },
          {
            id: 'reflective-jackets',
            slug: 'reflective-jackets',
            name: 'Reflective Jackets',
            categorySlug: 'jackets',
            products: []
          }
        ],
        featured: true,
        seo: {
          title: 'Jackets Manufacturer | Goyal Trading Company',
          description: 'Training jackets, corporate jackets, and outerwear. Custom manufacturing.'
        }
      },
      {
        id: 'rain-wear',
        slug: 'rain-wear',
        name: 'Rain Wear',
        description: 'Windcheaters, rain jackets, and weather protection.',
        familySlug: 'jackets-outerwear',
        subcategories: [
          {
            id: 'windcheater',
            slug: 'windcheater',
            name: 'Wind Cheater',
            categorySlug: 'rain-wear',
            products: [
              {
                id: 'windcheater-outerwear',
                slug: 'windcheater-outerwear',
                name: 'Wind Cheater',
                familySlug: 'jackets-outerwear',
                categorySlug: 'rain-wear',
                subcategorySlug: 'windcheater',
                description: 'Water-resistant wind cheater for weather protection.',
                featured: true,
                inquiryLabel: 'Request Rain Wear Quote',
                specifications: {
                  fabric: '100% Polyester',
                  gsm: '200-220 GSM',
                  material: 'Water-resistant, Windproof',
                  features: [
                    'Water-resistant coating',
                    'Windproof design',
                    'Full zip front',
                    'Hood with drawstring',
                    'Side pockets',
                    'Lightweight and packable'
                  ]
                },
                tags: ['Wind Cheater', 'Rain Wear', 'Outerwear', 'Water-resistant', 'Weather Protection']
              }
            ]
          }
        ],
        featured: true,
        seo: {
          title: 'Rain Wear Manufacturer | Goyal Trading Company',
          description: 'Windcheaters and rain wear for weather protection. Custom manufacturing.'
        }
      }
    ],
    featured: true,
    seo: {
      title: 'Jackets & Outerwear Manufacturer | Goyal Trading Company',
      description: 'Training jackets, windcheaters, rain wear, and outerwear. Custom bulk orders.'
    }
  },
  {
    id: 'shorts',
    slug: 'shorts',
    name: 'Shorts',
    shortName: 'Shorts',
    description: 'Sports shorts, compression tights, and athletic shorts.',
    categories: [
      {
        id: 'men-shorts',
        slug: 'men-shorts',
        name: 'Men\'s Shorts',
        description: 'Athletic shorts and sports lower wear.',
        familySlug: 'shorts',
        subcategories: [
          {
            id: 'sports-shorts',
            slug: 'sports-shorts',
            name: 'Sports Shorts',
            categorySlug: 'men-shorts',
            products: [
              {
                id: 'sports-shorts-athletic',
                slug: 'sports-shorts-athletic',
                name: 'Sports Shorts',
                familySlug: 'shorts',
                categorySlug: 'men-shorts',
                subcategorySlug: 'sports-shorts',
                description: 'Athletic sports shorts for training and sports.',
                featured: true,
                inquiryLabel: 'Request Shorts Quote',
                specifications: {
                  fabric: '100% Polyester',
                  gsm: '160-180 GSM',
                  material: 'Lightweight, Breathable',
                  features: [
                    'Elastic waistband with drawstring',
                    'Moisture-wicking fabric',
                    'Side pockets',
                    'Breathable mesh panels',
                    'Quick-dry technology',
                    'Anti-odor treatment'
                  ]
                },
                tags: ['Shorts', 'Sports', 'Athletic', 'Training', 'Gym']
              }
            ]
          },
          {
            id: 'compression-tights',
            slug: 'compression-tights',
            name: 'Compression Tights',
            categorySlug: 'men-shorts',
            products: []
          },
          {
            id: 'gym-shorts',
            slug: 'gym-shorts',
            name: 'Gym Shorts',
            categorySlug: 'men-shorts',
            products: []
          },
          {
            id: 'cargo-shorts',
            slug: 'cargo-shorts',
            name: 'Cargo Shorts',
            categorySlug: 'men-shorts',
            products: []
          }
        ],
        featured: true,
        seo: {
          title: 'Sports Shorts Manufacturer | Goyal Trading Company',
          description: 'Athletic shorts and compression tights. Custom sports manufacturing.'
        }
      },
      {
        id: 'gym-yoga-wear',
        slug: 'gym-yoga-wear',
        name: 'Gym & Yoga Wear',
        description: 'Gym wear, yoga pants, and fitness apparel.',
        familySlug: 'shorts',
        subcategories: [
          {
            id: 'yoga-pants',
            slug: 'yoga-pants',
            name: 'Yoga Pants',
            categorySlug: 'gym-yoga-wear',
            products: []
          },
          {
            id: 'fitness-tops',
            slug: 'fitness-tops',
            name: 'Fitness Tops',
            categorySlug: 'gym-yoga-wear',
            products: []
          }
        ],
        featured: true,
        seo: {
          title: 'Gym & Yoga Wear Manufacturer | Goyal Trading Company',
          description: 'Gym wear, yoga pants, and fitness apparel. Custom manufacturing.'
        }
      }
    ],
    featured: true,
    seo: {
      title: 'Shorts Manufacturer - Sports & Athletic | Goyal Trading Company',
      description: 'Sports shorts, compression tights, and athletic wear. Custom manufacturing.'
    }
  },
  {
    id: 'school-wear',
    slug: 'school-wear',
    name: 'School Wear',
    shortName: 'School Wear',
    description: 'Complete school uniforms including dresses, track suits, t-shirts, bags, and accessories.',
    categories: [
      {
        id: 'school-dress',
        slug: 'school-dress',
        name: 'School Dress',
        description: 'School uniforms and institutional wear.',
        familySlug: 'school-wear',
        subcategories: [
          {
            id: 'boys-school-uniforms',
            slug: 'boys-school-uniforms',
            name: 'Boys School Uniforms',
            categorySlug: 'school-dress',
            products: []
          },
          {
            id: 'girls-school-uniforms',
            slug: 'girls-school-uniforms',
            name: 'Girls School Uniforms',
            categorySlug: 'school-dress',
            products: []
          }
        ],
        featured: true,
        seo: {
          title: 'School Dress Manufacturer | Goyal Trading Company',
          description: 'Custom school uniforms and institutional wear. Bulk manufacturing.'
        }
      },
      {
        id: 'school-track-suit',
        slug: 'school-track-suit',
        name: 'School Track Suit',
        description: 'Track suits designed for school sports and activities.',
        familySlug: 'school-wear',
        subcategories: [],
        featured: true,
        seo: {
          title: 'School Track Suit Manufacturer | Goyal Trading Company',
          description: 'School track suits for sports and activities. Custom manufacturing.'
        }
      },
      {
        id: 'school-bags',
        slug: 'school-bags',
        name: 'School Bags',
        description: 'School bags and backpacks.',
        familySlug: 'school-wear',
        subcategories: [
          {
            id: 'school-backpacks',
            slug: 'school-backpacks',
            name: 'School Backpacks',
            categorySlug: 'school-bags',
            products: []
          },
          {
            id: 'school-trolley-bags',
            slug: 'school-trolley-bags',
            name: 'School Trolley Bags',
            categorySlug: 'school-bags',
            products: []
          }
        ],
        featured: true,
        seo: {
          title: 'School Bags Manufacturer | Goyal Trading Company',
          description: 'School bags and backpacks. Custom manufacturing.'
        }
      }
    ],
    featured: true,
    seo: {
      title: 'School Wear Manufacturer | Goyal Trading Company',
      description: 'Complete school uniforms, track suits, bags, and accessories. Custom manufacturing.'
    }
  },
  {
    id: 'corporate-wear',
    slug: 'corporate-wear',
    name: 'Corporate Wear',
    shortName: 'Corporate Wear',
    description: 'Corporate t-shirts, jackets, caps, and promotional wear.',
    categories: [
      {
        id: 'corporate-t-shirts',
        slug: 'corporate-t-shirts',
        name: 'Corporate T-Shirts',
        description: 'Custom corporate t-shirts with branding.',
        familySlug: 'corporate-wear',
        subcategories: [
          {
            id: 'corporate-round-neck',
            slug: 'corporate-round-neck',
            name: 'Corporate Round Neck',
            categorySlug: 'corporate-t-shirts',
            products: []
          },
          {
            id: 'corporate-polo',
            slug: 'corporate-polo',
            name: 'Corporate Polo',
            categorySlug: 'corporate-t-shirts',
            products: []
          }
        ],
        featured: true,
        seo: {
          title: 'Corporate T-Shirts Manufacturer | Goyal Trading Company',
          description: 'Custom corporate t-shirts with logo printing and embroidery.'
        }
      },
      {
        id: 'corporate-shirts',
        slug: 'corporate-shirts',
        name: 'Corporate Shirts',
        description: 'Formal corporate shirts for business wear.',
        familySlug: 'corporate-wear',
        subcategories: [
          {
            id: 'formal-shirts',
            slug: 'formal-shirts',
            name: 'Formal Shirts',
            categorySlug: 'corporate-shirts',
            products: []
          },
          {
            id: 'corporate-trousers',
            slug: 'corporate-trousers',
            name: 'Corporate Trousers',
            categorySlug: 'corporate-shirts',
            products: []
          }
        ],
        featured: true,
        seo: {
          title: 'Corporate Shirts Manufacturer | Goyal Trading Company',
          description: 'Formal corporate shirts and trousers for business wear.'
        }
      },
      {
        id: 'hospital-uniforms',
        slug: 'hospital-uniforms',
        name: 'Hospital Uniforms',
        description: 'Medical scrubs, lab coats, and healthcare uniforms.',
        familySlug: 'corporate-wear',
        subcategories: [
          {
            id: 'medical-scrubs',
            slug: 'medical-scrubs',
            name: 'Medical Scrubs',
            categorySlug: 'hospital-uniforms',
            products: []
          },
          {
            id: 'lab-coats',
            slug: 'lab-coats',
            name: 'Lab Coats',
            categorySlug: 'hospital-uniforms',
            products: []
          }
        ],
        featured: true,
        seo: {
          title: 'Hospital Uniforms Manufacturer | Goyal Trading Company',
          description: 'Medical scrubs, lab coats, and healthcare uniforms.'
        }
      },
      {
        id: 'industrial-uniforms',
        slug: 'industrial-uniforms',
        name: 'Industrial Uniforms',
        description: 'Safety workwear and industrial uniforms.',
        familySlug: 'corporate-wear',
        subcategories: [
          {
            id: 'safety-jackets',
            slug: 'safety-jackets',
            name: 'Safety Jackets',
            categorySlug: 'industrial-uniforms',
            products: []
          },
          {
            id: 'reflective-gear',
            slug: 'reflective-gear',
            name: 'Reflective Gear',
            categorySlug: 'industrial-uniforms',
            products: []
          }
        ],
        featured: true,
        seo: {
          title: 'Industrial Uniforms Manufacturer | Goyal Trading Company',
          description: 'Safety workwear and industrial uniforms for manufacturing.'
        }
      },
      {
        id: 'hospitality-uniforms',
        slug: 'hospitality-uniforms',
        name: 'Hospitality Uniforms',
        description: 'Hotel, restaurant, and chef uniforms.',
        familySlug: 'corporate-wear',
        subcategories: [
          {
            id: 'chef-uniforms',
            slug: 'chef-uniforms',
            name: 'Chef Uniforms',
            categorySlug: 'hospitality-uniforms',
            products: []
          },
          {
            id: 'hotel-staff',
            slug: 'hotel-staff',
            name: 'Hotel Staff Uniforms',
            categorySlug: 'hospitality-uniforms',
            products: []
          }
        ],
        featured: true,
        seo: {
          title: 'Hospitality Uniforms Manufacturer | Goyal Trading Company',
          description: 'Chef uniforms, hotel staff uniforms, and hospitality wear.'
        }
      },
      {
        id: 'corporate-caps',
        slug: 'corporate-caps',
        name: 'Corporate Caps',
        description: 'Custom corporate caps with embroidery.',
        familySlug: 'corporate-wear',
        subcategories: [],
        featured: true,
        seo: {
          title: 'Corporate Caps Manufacturer | Goyal Trading Company',
          description: 'Custom corporate caps with embroidery. Bulk manufacturing.'
        }
      },
      {
        id: 'promotional-corporate-gift',
        slug: 'promotional-corporate-gift',
        name: 'Promotional Corporate Gifts',
        description: 'Promotional items and corporate gifts.',
        familySlug: 'corporate-wear',
        subcategories: [
          {
            id: 'promotional-apparel',
            slug: 'promotional-apparel',
            name: 'Promotional Apparel',
            categorySlug: 'promotional-corporate-gift',
            products: []
          },
          {
            id: 'custom-merchandise',
            slug: 'custom-merchandise',
            name: 'Custom Merchandise',
            categorySlug: 'promotional-corporate-gift',
            products: []
          }
        ],
        featured: true,
        seo: {
          title: 'Promotional Corporate Gifts Manufacturer | Goyal Trading Company',
          description: 'Promotional items and corporate gifts. Custom manufacturing.'
        }
      }
    ],
    featured: true,
    seo: {
      title: 'Corporate Wear Manufacturer | Goyal Trading Company',
      description: 'Corporate t-shirts, jackets, caps, and promotional wear. Custom manufacturing.'
    }
  },
  {
    id: 'bags-accessories',
    slug: 'bags-accessories',
    name: 'Bags & Accessories',
    shortName: 'Bags',
    description: 'Laptop bags, gym bags, duffle bags, backpacks, and caps.',
    categories: [
      {
        id: 'bags',
        slug: 'bags',
        name: 'Bags',
        description: 'Various bag types for different applications.',
        familySlug: 'bags-accessories',
        subcategories: [
          {
            id: 'laptop-bags',
            slug: 'laptop-bags',
            name: 'Laptop Bags',
            categorySlug: 'bags',
            products: [
              {
                id: 'laptop-bag-executive',
                slug: 'laptop-bag-executive',
                name: 'Laptop Bag',
                familySlug: 'bags-accessories',
                categorySlug: 'bags',
                subcategorySlug: 'laptop-bags',
                description: 'Professional laptop bag for executives.',
                featured: true,
                inquiryLabel: 'Request Bag Quote',
                specifications: {
                  fabric: 'High-quality Nylon',
                  material: 'Durable, Water-resistant',
                  features: [
                    'Padded laptop compartment',
                    'Multiple organizer pockets',
                    'Adjustable shoulder strap',
                    'Water-resistant exterior',
                    'Reinforced handles',
                    'Professional design'
                  ]
                },
                tags: ['Laptop Bag', 'Executive', 'Professional', 'Accessories', 'Corporate']
              }
            ]
          },
          {
            id: 'gym-bags',
            slug: 'gym-bags',
            name: 'Gym Bags',
            categorySlug: 'bags',
            products: []
          },
          {
            id: 'duffle-bags',
            slug: 'duffle-bags',
            name: 'Duffle Bags',
            categorySlug: 'bags',
            products: []
          },
          {
            id: 'backpacks',
            slug: 'backpacks',
            name: 'Backpacks',
            categorySlug: 'bags',
            products: []
          }
        ],
        featured: true,
        seo: {
          title: 'Bags Manufacturer | Goyal Trading Company',
          description: 'Laptop bags, gym bags, duffle bags, and backpacks. Custom manufacturing.'
        }
      },
      {
        id: 'caps',
        slug: 'caps',
        name: 'Caps',
        description: 'Baseball caps, golf caps, and promotional caps.',
        familySlug: 'bags-accessories',
        subcategories: [
          {
            id: 'baseball-caps',
            slug: 'baseball-caps',
            name: 'Baseball Caps',
            categorySlug: 'caps',
            products: [
              {
                id: 'baseball-cap-embroidered',
                slug: 'baseball-cap-embroidered',
                name: 'Baseball Cap',
                familySlug: 'bags-accessories',
                categorySlug: 'caps',
                subcategorySlug: 'baseball-caps',
                description: 'Classic baseball cap with embroidery option.',
                featured: true,
                inquiryLabel: 'Request Cap Quote',
                specifications: {
                  fabric: '100% Cotton / Polyester Blend',
                  material: 'Breathable, Durable',
                  features: [
                    'Adjustable strap back',
                    'Embroidery ready',
                    'Pre-curved brim',
                    'Ventilation eyelets',
                    'Moisture-wicking sweatband',
                    'Multiple colors available'
                  ]
                },
                tags: ['Cap', 'Baseball Cap', 'Accessories', 'Corporate', 'Promotional']
              }
            ]
          },
          {
            id: 'promotional-caps',
            slug: 'promotional-caps',
            name: 'Promotional Caps',
            categorySlug: 'caps',
            products: []
          }
        ],
        featured: true,
        seo: {
          title: 'Caps Manufacturer | Goyal Trading Company',
          description: 'Baseball caps, golf caps, and promotional caps. Custom embroidery.'
        }
      }
    ],
    featured: true,
    seo: {
      title: 'Bags & Accessories Manufacturer | Goyal Trading Company',
      description: 'Laptop bags, gym bags, duffle bags, backpacks, and caps. Custom manufacturing.'
    }
  },
  {
    id: 'swimming-water-sports',
    slug: 'swimming-water-sports',
    name: 'Swimming & Water Sports',
    shortName: 'Swimming',
    description: 'Swim costumes, swimming shorts, goggles, and water sports accessories.',
    categories: [
      {
        id: 'swimwear',
        slug: 'swimwear',
        name: 'Swimwear',
        description: 'Swimming costumes and swimwear.',
        familySlug: 'swimming-water-sports',
        subcategories: [
          {
            id: 'swim-costume',
            slug: 'swim-costume',
            name: 'Swim Costume',
            categorySlug: 'swimwear',
            products: [
              {
                id: 'swim-costume-athletic',
                slug: 'swim-costume-athletic',
                name: 'Swim Costume',
                familySlug: 'swimming-water-sports',
                categorySlug: 'swimwear',
                subcategorySlug: 'swim-costume',
                description: 'Athletic swim costume for competitions and training.',
                featured: true,
                inquiryLabel: 'Request Swimwear Quote',
                specifications: {
                  fabric: 'Chlorine-resistant Polyester',
                  gsm: '200-220 GSM',
                  material: 'Quick-dry, UV-resistant',
                  features: [
                    'Chlorine-resistant fabric',
                    'UV protection',
                    'Quick-dry technology',
                    'Four-way stretch',
                    'Competition fit',
                    'Multiple sizes available'
                  ]
                },
                tags: ['Swimwear', 'Swimming', 'Athletic', 'Competition', 'Training']
              }
            ]
          },
          {
            id: 'swimming-shorts',
            slug: 'swimming-shorts',
            name: 'Swimming Shorts',
            categorySlug: 'swimwear',
            products: []
          }
        ],
        featured: true,
        seo: {
          title: 'Swimwear Manufacturer | Goyal Trading Company',
          description: 'Swimming costumes and swimwear. Custom manufacturing.'
        }
      },
      {
        id: 'swimming-accessories',
        slug: 'swimming-accessories',
        name: 'Swimming Accessories',
        description: 'Swimming goggles, caps, and accessories.',
        familySlug: 'swimming-water-sports',
        subcategories: [
          {
            id: 'swimming-goggles',
            slug: 'swimming-goggles',
            name: 'Swimming Goggles',
            categorySlug: 'swimming-accessories',
            products: [
              {
                id: 'swimming-goggles-professional',
                slug: 'swimming-goggles-professional',
                name: 'Swimming Goggles',
                familySlug: 'swimming-water-sports',
                categorySlug: 'swimming-accessories',
                subcategorySlug: 'swimming-goggles',
                description: 'Professional swimming goggles for training and competition.',
                featured: true,
                inquiryLabel: 'Request Swimming Accessories Quote',
                specifications: {
                  fabric: 'Silicone / Polycarbonate',
                  material: 'Anti-fog, UV-resistant',
                  features: [
                    'Anti-fog coating',
                    'UV protection',
                    'Adjustable silicone strap',
                    'Leak-proof seal',
                    'Wide peripheral vision',
                    'Multiple lens colors'
                  ]
                },
                tags: ['Swimming', 'Goggles', 'Accessories', 'Training', 'Competition']
              }
            ]
          }
        ],
        featured: true,
        seo: {
          title: 'Swimming Accessories Manufacturer | Goyal Trading Company',
          description: 'Swimming goggles, caps, and water sports accessories.'
        }
      }
    ],
    featured: true,
    seo: {
      title: 'Swimming & Water Sports Manufacturer | Goyal Trading Company',
      description: 'Swimwear, swimming accessories, and water sports equipment. Custom manufacturing.'
    }
  },
  {
    id: 'medical-equipment',
    slug: 'medical-equipment',
    name: 'Medical Equipment',
    shortName: 'Medical',
    description: 'Medical and healthcare equipment including examination gloves.',
    categories: [
      {
        id: 'medical-supplies',
        slug: 'medical-supplies',
        name: 'Medical Supplies',
        description: 'Medical examination gloves and healthcare supplies.',
        familySlug: 'medical-equipment',
        subcategories: [
          {
            id: 'examination-gloves',
            slug: 'examination-gloves',
            name: 'Examination Gloves',
            categorySlug: 'medical-supplies',
            products: [
              {
                id: 'nitrile-examination-gloves',
                slug: 'nitrile-examination-gloves',
                name: 'Nitrile Examination Gloves',
                familySlug: 'medical-equipment',
                categorySlug: 'medical-supplies',
                subcategorySlug: 'examination-gloves',
                description: 'Nitrile examination gloves for medical use.',
                featured: true,
                inquiryLabel: 'Request Medical Supplies Quote',
                specifications: {
                  fabric: 'Nitrile Rubber',
                  material: 'Latex-free, Powder-free',
                  features: [
                    'Latex-free formula',
                    'Powder-free interior',
                    'Textured fingertips',
                    'Ambidextrous design',
                    'Medical grade quality',
                    'Various sizes available'
                  ]
                },
                tags: ['Medical', 'Gloves', 'Examination', 'Healthcare', 'Safety']
              }
            ]
          }
        ],
        featured: true,
        seo: {
          title: 'Medical Equipment Manufacturer | Goyal Trading Company',
          description: 'Medical examination gloves and healthcare supplies. Custom manufacturing.'
        }
      }
    ],
    featured: true,
    seo: {
      title: 'Medical Equipment Manufacturer | Goyal Trading Company',
      description: 'Medical examination gloves and healthcare supplies. Custom manufacturing.'
    }
  },
  {
    id: 'uniforms',
    slug: 'uniforms',
    name: 'Uniforms',
    shortName: 'Uniforms',
    description: 'Specialized uniforms for army, hospital, NCC, scout, and security services.',
    categories: [
      {
        id: 'army-uniform',
        slug: 'army-uniform',
        name: 'Army Uniform',
        description: 'Army and military uniforms.',
        familySlug: 'uniforms',
        subcategories: [],
        featured: true,
        seo: {
          title: 'Army Uniform Manufacturer | Goyal Trading Company',
          description: 'Army and military uniforms. Custom manufacturing.'
        }
      },
      {
        id: 'hospital-uniforms',
        slug: 'hospital-uniforms',
        name: 'Hospital Uniforms',
        description: 'Healthcare and hospital uniforms.',
        familySlug: 'uniforms',
        subcategories: [],
        featured: true,
        seo: {
          title: 'Hospital Uniforms Manufacturer | Goyal Trading Company',
          description: 'Healthcare and hospital uniforms. Custom manufacturing.'
        }
      },
      {
        id: 'ncc-uniform',
        slug: 'ncc-uniform',
        name: 'NCC Uniform',
        description: 'NCC cadet uniforms.',
        familySlug: 'uniforms',
        subcategories: [],
        featured: true,
        seo: {
          title: 'NCC Uniform Manufacturer | Goyal Trading Company',
          description: 'NCC cadet uniforms. Custom manufacturing.'
        }
      },
      {
        id: 'security-uniforms',
        slug: 'security-uniforms',
        name: 'Security Service Uniforms',
        description: 'Security service uniforms.',
        familySlug: 'uniforms',
        subcategories: [],
        featured: true,
        seo: {
          title: 'Security Uniforms Manufacturer | Goyal Trading Company',
          description: 'Security service uniforms. Custom manufacturing.'
        }
      }
    ],
    featured: true,
    seo: {
      title: 'Uniforms Manufacturer | Goyal Trading Company',
      description: 'Army, hospital, NCC, scout, and security uniforms. Custom manufacturing.'
    }
  },
  {
    id: 'fabrics-materials',
    slug: 'fabrics-materials',
    name: 'Fabrics & Materials',
    shortName: 'Fabrics',
    description: 'Sports fabrics, textile fabrics, and stitching materials.',
    categories: [
      {
        id: 'textile-fabrics',
        slug: 'textile-fabrics',
        name: 'Textile Fabrics',
        description: 'Sports fabrics and textile materials.',
        familySlug: 'fabrics-materials',
        subcategories: [
          {
            id: 'sports-fabric',
            slug: 'sports-fabric',
            name: 'Sports Fabric',
            categorySlug: 'textile-fabrics',
            products: [
              {
                id: 'sports-fabric-performance',
                slug: 'sports-fabric-performance',
                name: 'Sports Fabric',
                familySlug: 'fabrics-materials',
                categorySlug: 'textile-fabrics',
                subcategorySlug: 'sports-fabric',
                description: 'Performance sports fabric for athletic wear.',
                featured: true,
                inquiryLabel: 'Request Fabric Quote',
                specifications: {
                  fabric: '100% Polyester',
                  gsm: '180-240 GSM',
                  material: 'Moisture-wicking, Quick-dry',
                  features: [
                    'Moisture-wicking technology',
                    'Quick-dry properties',
                    'Breathable mesh options',
                    'Anti-odor treatment',
                    'UV protection available',
                    'Multiple color options'
                  ]
                },
                tags: ['Fabric', 'Sports', 'Textile', 'Material', 'Manufacturing']
              }
            ]
          }
        ],
        featured: true,
        seo: {
          title: 'Textile Fabrics Manufacturer | Goyal Trading Company',
          description: 'Sports fabrics and textile materials. Custom manufacturing.'
        }
      },
      {
        id: 'stitching-materials',
        slug: 'stitching-materials',
        name: 'Stitching Materials',
        description: 'Stitching materials and supplies.',
        familySlug: 'fabrics-materials',
        subcategories: [],
        featured: true,
        seo: {
          title: 'Stitching Materials Manufacturer | Goyal Trading Company',
          description: 'Stitching materials and supplies. Custom manufacturing.'
        }
      }
    ],
    featured: true,
    seo: {
      title: 'Fabrics & Materials Manufacturer | Goyal Trading Company',
      description: 'Sports fabrics, textile fabrics, and stitching materials. Custom manufacturing.'
    }
  },
  {
    id: 'promotional-items',
    slug: 'promotional-items',
    name: 'Promotional Items',
    shortName: 'Promotional',
    description: 'Promotional items, umbrellas, raincoats, and corporate gifts.',
    categories: [
      {
        id: 'umbrella-raincoats',
        slug: 'umbrella-raincoats',
        name: 'Umbrella & Raincoats',
        description: 'Umbrellas and raincoats for promotional use.',
        familySlug: 'promotional-items',
        subcategories: [],
        featured: true,
        seo: {
          title: 'Umbrella & Raincoats Manufacturer | Goyal Trading Company',
          description: 'Umbrellas and raincoats for promotional use. Custom manufacturing.'
        }
      }
    ],
    featured: true,
    seo: {
      title: 'Promotional Items Manufacturer | Goyal Trading Company',
      description: 'Promotional items, umbrellas, raincoats, and corporate gifts. Custom manufacturing.'
    }
  }
]

// Helper functions
export function getProductFamily(slug: ProductFamilySlug): ProductFamily | undefined {
  return productFamilies.find(f => f.slug === slug)
}

export function getAllProductFamilies(): ProductFamily[] {
  return productFamilies
}

export function getFeaturedProductFamilies(): ProductFamily[] {
  return productFamilies.filter(f => f.featured)
}

export function getCategory(familySlug: ProductFamilySlug, categorySlug: string): ProductCategory | undefined {
  const family = getProductFamily(familySlug)
  if (!family) return undefined
  return family.categories.find(c => c.slug === categorySlug)
}

export function getAllCategories(): ProductCategory[] {
  return productFamilies.flatMap(f => f.categories)
}

export function getFeaturedCategories(): ProductCategory[] {
  return getAllCategories().filter(c => c.featured)
}

export function getAllProducts(): Product[] {
  return productFamilies.flatMap(family =>
    family.categories.flatMap(category =>
      category.subcategories.flatMap(subcategory => subcategory.products)
    )
  )
}

export function getFeaturedProducts(): Product[] {
  return getAllProducts().filter(p => p.featured)
}

export function getProductBySlug(slug: string): Product | undefined {
  return getAllProducts().find(p => p.slug === slug)
}

export function getProductByHierarchy(
  familySlug: ProductFamilySlug,
  categorySlug: string,
  productSlug: string
): { product: Product; category: ProductCategory; family: ProductFamily } | undefined {
  const family = getProductFamily(familySlug)
  if (!family) return undefined

  const category = family.categories.find(c => c.slug === categorySlug)
  if (!category) return undefined

  for (const subcategory of category.subcategories) {
    const product = subcategory.products.find(p => p.slug === productSlug)
    if (product) {
      return { product, category, family }
    }
  }

  return undefined
}

export function getProductsByFamily(familySlug: ProductFamilySlug): Product[] {
  const family = getProductFamily(familySlug)
  if (!family) return []
  return family.categories.flatMap(category =>
    category.subcategories.flatMap(subcategory => subcategory.products)
  )
}

export function getProductsByCategory(familySlug: ProductFamilySlug, categorySlug: string): Product[] {
  const category = getCategory(familySlug, categorySlug)
  if (!category) return []
  return category.subcategories.flatMap(subcategory => subcategory.products)
}

// Legacy compatibility
export const products = getAllProducts()
