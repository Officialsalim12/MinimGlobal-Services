export type ClothingNavLink = {
  href: string
  label: string
}

export const CLOTHING_NAV: ClothingNavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
]

export type ClothingCategory =
  | 'wholesale'
  | 'uniforms'
  | 'special-wear'
  | 'family-wear'

export type ClothingProduct = {
  id: string
  name: string
  category: ClothingCategory
  price: number
  unit?: string
  blurb: string
  image: string
}

export type ClothingService = {
  id: string
  title: string
  summary: string
  description: string
  image: string
}

export function formatLeones(amount: number): string {
  return `Le ${amount.toLocaleString()}`
}

const IMAGES = {
  h1: '/images/Hero-1.jpg',
  h2: '/images/Hero-2.jpeg',
  h3: '/images/Hero-3.jpg',
  h4: '/images/Hero-4.jpg',
  h5: '/images/Hero-5.jpg',
  h6: '/images/Hero-6.jpg',
} as const

export const CLOTHING_PROMO =
  'Shop online. Wholesale, uniforms, special wear, and family wear with cart checkout.'

export const CLOTHING_PRODUCTS: ClothingProduct[] = [
  // Wholesale
  {
    id: 'ws-polo-pack',
    name: 'Staff Polo Pack',
    category: 'wholesale',
    price: 850000,
    unit: 'pack of 12',
    blurb: 'Bulk branded polos for shops, offices, and field teams.',
    image: IMAGES.h1,
  },
  {
    id: 'ws-tee-carton',
    name: 'Cotton Tee Carton',
    category: 'wholesale',
    price: 620000,
    unit: 'carton',
    blurb: 'Wholesale cotton tees ready for retail or staff kits.',
    image: IMAGES.h3,
  },
  {
    id: 'ws-shirt-case',
    name: 'Dress Shirt Case',
    category: 'wholesale',
    price: 1450000,
    unit: 'case of 20',
    blurb: 'Case pricing for corporate and wholesale partners.',
    image: IMAGES.h5,
  },
  {
    id: 'ws-fabric-roll',
    name: 'Corporate Fabric Bundle',
    category: 'wholesale',
    price: 980000,
    blurb: 'Fabric bundles for tailor partners and large group orders.',
    image: IMAGES.h4,
  },
  // Uniforms
  {
    id: 'uni-school',
    name: 'School Uniform Set',
    category: 'uniforms',
    price: 185000,
    blurb: 'Durable school shirt and trouser or skirt sets sized for kids.',
    image: IMAGES.h6,
  },
  {
    id: 'uni-corporate',
    name: 'Corporate Uniform',
    category: 'uniforms',
    price: 245000,
    blurb: 'Branded shirts, trousers, and skirts for offices and banks.',
    image: IMAGES.h4,
  },
  {
    id: 'uni-hospitality',
    name: 'Hospitality Uniform',
    category: 'uniforms',
    price: 210000,
    blurb: 'Servicewear for hotels, restaurants, and events staff.',
    image: IMAGES.h2,
  },
  {
    id: 'uni-security',
    name: 'Security Uniform Kit',
    category: 'uniforms',
    price: 275000,
    blurb: 'Hard-wearing uniform kits for guards and site teams.',
    image: IMAGES.h3,
  },
  {
    id: 'uni-medical',
    name: 'Medical Scrub Set',
    category: 'uniforms',
    price: 165000,
    blurb: 'Comfortable scrub sets for clinics and medical staff.',
    image: IMAGES.h5,
  },
  // Special wear
  {
    id: 'sp-wedding',
    name: 'Wedding Ceremony Wear',
    category: 'special-wear',
    price: 550000,
    blurb: 'Tailored looks for grooms, bridal parties, and ceremony guests.',
    image: IMAGES.h4,
  },
  {
    id: 'sp-choir',
    name: 'Choir & Church Robes',
    category: 'special-wear',
    price: 195000,
    blurb: 'Special occasion garments for choir, church, and ministry events.',
    image: IMAGES.h6,
  },
  {
    id: 'sp-graduation',
    name: 'Graduation Outfit',
    category: 'special-wear',
    price: 285000,
    blurb: 'Sharp graduation wear for students and family photos.',
    image: IMAGES.h1,
  },
  {
    id: 'sp-cultural',
    name: 'Cultural Special Wear',
    category: 'special-wear',
    price: 320000,
    blurb: 'Custom cultural and ceremonial outfits for landmark events.',
    image: IMAGES.h2,
  },
  // Family wear
  {
    id: 'fam-matching',
    name: 'Family Matching Set',
    category: 'family-wear',
    price: 420000,
    blurb: 'Coordinated outfits for parents and children for photos and events.',
    image: IMAGES.h5,
  },
  {
    id: 'fam-mens',
    name: 'Family Mens Essentials',
    category: 'family-wear',
    price: 155000,
    blurb: 'Everyday shirts and trousers for fathers and older sons.',
    image: IMAGES.h3,
  },
  {
    id: 'fam-womens',
    name: 'Family Womens Essentials',
    category: 'family-wear',
    price: 148000,
    blurb: 'Comfortable, polished pieces for mothers and daughters.',
    image: IMAGES.h2,
  },
  {
    id: 'fam-kids',
    name: 'Kids Everyday Wear',
    category: 'family-wear',
    price: 78000,
    blurb: 'Durable kidswear for school runs, weekends, and family outings.',
    image: IMAGES.h6,
  },
  {
    id: 'fam-batch',
    name: 'Family Batch Collection',
    category: 'family-wear',
    price: 350000,
    blurb: 'Grouped family packs for celebrations and holiday gatherings.',
    image: IMAGES.h1,
  },
]

export const CLOTHING_SERVICES: ClothingService[] = [
  {
    id: 'wholesale',
    title: 'Wholesale Supply',
    summary:
      'Bulk pricing for retailers, NGOs, schools, and corporate buyers across Sierra Leone.',
    description:
      'Minim Clothing supplies wholesale apparel for shops, institutions, and organisations. Tell us your quantities, branding needs, and delivery timeline and we will prepare a quote for cartons, packs, and custom-labelled stock.',
    image: IMAGES.h3,
  },
  {
    id: 'uniforms',
    title: 'Uniform Programmes',
    summary:
      'School, corporate, hospitality, security, and medical uniforms measured and delivered as a set.',
    description:
      'From school batches to bank and hospitality uniforms, we manage measurement, production, branding, and delivery so every team looks consistent and work-ready.',
    image: IMAGES.h4,
  },
  {
    id: 'special',
    title: 'Special Wear & Events',
    summary:
      'Wedding parties, graduations, choir robes, and cultural ceremony outfits made for the occasion.',
    description:
      'Special wear is crafted for moments that matter. We design and tailor wedding parties, graduation looks, church and choir garments, and cultural outfits with fittings and group coordination.',
    image: IMAGES.h6,
  },
  {
    id: 'family',
    title: 'Family Wear & Tailoring',
    summary:
      'Matching family sets, kidswear, and custom fittings for everyday and celebrations.',
    description:
      'Family wear covers matching sets, kids essentials, and tailored pieces for parents. Bring the whole family for fittings or send sizes for batch production ahead of holidays and events.',
    image: IMAGES.h5,
  },
]

export const CLOTHING_CATEGORY_META: Record<
  ClothingCategory,
  { title: string; subtitle: string; image: string; path: string }
> = {
  wholesale: {
    title: 'Wholesale',
    subtitle:
      'Bulk apparel for retailers, organisations, and corporate partners. Pack and carton pricing available.',
    image: IMAGES.h3,
    path: '/shop',
  },
  uniforms: {
    title: 'Uniforms',
    subtitle:
      'School, corporate, hospitality, security, and medical uniforms built for daily work.',
    image: IMAGES.h4,
    path: '/shop',
  },
  'special-wear': {
    title: 'Special Wear',
    subtitle:
      'Wedding, graduation, choir, church, and cultural outfits for landmark occasions.',
    image: IMAGES.h6,
    path: '/shop',
  },
  'family-wear': {
    title: 'Family Wear',
    subtitle:
      'Matching family sets, kidswear, and everyday pieces for the whole household.',
    image: IMAGES.h5,
    path: '/shop',
  },
}

export type ClothingTeamMember = {
  name: string
  role: string
  initials: string
  bio: string
}

export const CLOTHING_TEAM: ClothingTeamMember[] = [
  {
    name: 'Mariama Bah',
    role: 'Fashion Designer',
    initials: 'MB',
    bio: 'Leads design for special wear, family collections, and custom ceremonial outfits.',
  },
  {
    name: 'Wholesale Lead',
    role: 'Bulk & Partner Orders',
    initials: 'WL',
    bio: 'Coordinates carton pricing, retailer packs, and corporate wholesale deliveries.',
  },
  {
    name: 'Uniform Supervisor',
    role: 'School & Workplace Kits',
    initials: 'US',
    bio: 'Manages measurements, branding, and delivery for school and staff uniform programmes.',
  },
  {
    name: 'Tailoring Manager',
    role: 'Fit & Alterations',
    initials: 'TM',
    bio: 'Oversees fittings, alterations, and made-to-measure finishing for special and family wear.',
  },
]

export const CLOTHING_PUBLIC_PATHS = [
  '/',
  '/shop',
  '/services',
  '/team',
  '/contact',
] as const

export function getClothingProductsByCategory(category: ClothingCategory) {
  return CLOTHING_PRODUCTS.filter((p) => p.category === category)
}

export function filterClothingProducts(
  query: string,
  category: ClothingCategory | 'all'
) {
  const q = query.trim().toLowerCase()
  return CLOTHING_PRODUCTS.filter((product) => {
    const matchesCategory =
      category === 'all' || product.category === category
    const matchesName =
      !q ||
      product.name.toLowerCase().includes(q) ||
      product.blurb.toLowerCase().includes(q) ||
      CLOTHING_CATEGORY_META[product.category].title.toLowerCase().includes(q)
    return matchesCategory && matchesName
  })
}

export function isClothingPublicPath(pathname: string): boolean {
  return (CLOTHING_PUBLIC_PATHS as readonly string[]).includes(pathname)
}
