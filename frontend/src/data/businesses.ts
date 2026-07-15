export type BusinessSlug = 'studios' | 'food' | 'architect' | 'clothing'

export type BusinessNavLink = {
  href: string
  label: string
}

export type Business = {
  slug: BusinessSlug
  subdomain: string
  name: string
  path: string
  navLinks: BusinessNavLink[]
}

/** DNS: point studios/food/architect/clothing (or *) at the same host as the apex site. */
export const businesses: Business[] = [
  {
    slug: 'studios',
    subdomain: 'studios',
    name: 'Minim Studios',
    path: '/businesses/studios',
    navLinks: [
      { href: '/photography', label: 'Photography' },
      { href: '/videography', label: 'Videography' },
      { href: '/sound', label: 'Sound' },
      { href: '/displays', label: 'Displays' },
      { href: '/design', label: 'Design' },
      { href: '/team', label: 'Team' },
      { href: '/contact', label: 'Get in Touch' },
    ],
  },
  {
    slug: 'food',
    subdomain: 'food',
    name: 'Minim Food',
    path: '/businesses/food',
    navLinks: [
      { href: '/', label: 'Home' },
      { href: '/catering', label: 'Catering' },
      { href: '/shop', label: 'Shop' },
      { href: '/team', label: 'Team' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    slug: 'architect',
    subdomain: 'architect',
    name: 'Minim Architect',
    path: '/businesses/architect',
    navLinks: [
      { href: '/', label: 'Home' },
      { href: '/portfolio', label: 'Portfolio' },
      { href: '/services', label: 'Services' },
      { href: '/expenditure', label: 'Expenditure' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    slug: 'clothing',
    subdomain: 'clothing',
    name: 'Minim Clothing',
    path: '/businesses/clothing',
    navLinks: [
      { href: '/', label: 'Home' },
      { href: '/shop', label: 'Shop' },
      { href: '/services', label: 'Services' },
      { href: '/team', label: 'Team' },
      { href: '/contact', label: 'Contact' },
    ],
  },
]

export const BUSINESS_SLUGS = businesses.map((b) => b.slug)

export function getRootDomain(): string {
  return (process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'localhost').toLowerCase()
}

export function getBusinessBySlug(slug: string): Business | undefined {
  return businesses.find((b) => b.slug === slug)
}

export function getBusinessBySubdomain(subdomain: string): Business | undefined {
  return businesses.find((b) => b.subdomain === subdomain.toLowerCase())
}

export function getBusinessByHost(hostHeader: string): Business | undefined {
  const host = hostHeader.split(':')[0].toLowerCase()
  const root = getRootDomain()

  if (host === root || host === `www.${root}`) return undefined

  const suffix = `.${root}`
  if (!host.endsWith(suffix)) return undefined

  const sub = host.slice(0, -suffix.length)
  if (!sub || sub.includes('.')) return undefined

  return getBusinessBySubdomain(sub)
}

function buildOrigin(subOrHost: string, port?: string): string {
  const root = getRootDomain()
  const isLocal = root === 'localhost' || root.endsWith('.localhost')
  const protocol = isLocal ? 'http' : 'https'
  const portSuffix =
    port && port !== '80' && port !== '443' ? `:${port}` : isLocal ? ':3000' : ''
  return `${protocol}://${subOrHost}${portSuffix}`
}

/** Public shareable URL for a division (subdomain). */
export function getBusinessPublicUrl(slug: BusinessSlug, requestPort?: string): string {
  const biz = getBusinessBySlug(slug)
  if (!biz) return `/businesses/${slug}`

  if (typeof window !== 'undefined') {
    const { protocol, port } = window.location
    const portSuffix = port && port !== '80' && port !== '443' ? `:${port}` : ''
    return `${protocol}//${biz.subdomain}.${getRootDomain()}${portSuffix}`
  }

  return buildOrigin(`${biz.subdomain}.${getRootDomain()}`, requestPort)
}

export function getApexPublicUrl(requestPort?: string): string {
  const root = getRootDomain()

  if (typeof window !== 'undefined') {
    const { protocol, port } = window.location
    const portSuffix = port && port !== '80' && port !== '443' ? `:${port}` : ''
    return `${protocol}//${root}${portSuffix}`
  }

  return buildOrigin(root, requestPort)
}
