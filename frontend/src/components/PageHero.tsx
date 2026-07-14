type PageHeroProps = {
  title: string
  subtitle?: string
  image?: string
}

export default function PageHero({
  title,
  subtitle,
  image = '/images/Hero-6.jpg',
}: PageHeroProps) {
  return (
    <section className="ahs-hero" style={{ backgroundImage: `url('${image}')` }}>
      <div className="ahs-hero-overlay" />
      <div className="ahs-hero-inner">
        <h1 className="ahs-hero-title">{title}</h1>
        {subtitle && <p className="ahs-hero-sub">{subtitle}</p>}
      </div>
    </section>
  )
}
