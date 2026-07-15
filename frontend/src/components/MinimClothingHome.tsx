import ClothingFeaturedProducts from '@/components/ClothingFeaturedProducts'
import { CLOTHING_SERVICES } from '@/data/clothing'

export default function MinimClothingHome() {
  return (
    <>
      <section
        className="mc-hero"
        style={{ backgroundImage: "url('/images/Hero-4.jpg')" }}
      >
        <div className="mc-hero-overlay" />
        <div className="mc-hero-content">
          <h1>
            Wholesale. Uniforms.
            <br />
            Special &amp; Family Wear.
          </h1>
          <p>
            Shop one online store for bulk apparel, work uniforms, special
            occasion outfits, and family wear. Filter by category or search by name.
          </p>
          <div className="mc-hero-actions">
            <a href="/businesses/clothing/shop" className="mc-btn mc-btn-primary">
              Shop Online
            </a>
            <a href="/businesses/clothing/services" className="mc-btn mc-btn-ghost">
              Our Services
            </a>
          </div>
        </div>
      </section>

      <section className="mc-trust">
        <div className="mc-container mc-trust-grid">
          <div>
            <h3>One online store</h3>
            <p>Browse every product in one place and checkout from your cart.</p>
          </div>
          <div>
            <h3>Filter &amp; search</h3>
            <p>Find items by name or category: wholesale, uniforms, special, family.</p>
          </div>
          <div>
            <h3>Buy online</h3>
            <p>Add to cart, set quantities, and complete purchase with delivery details.</p>
          </div>
        </div>
      </section>

      <section className="mc-latest">
        <div className="mc-container">
          <div className="mc-section-head mc-section-head-center">
            <p className="mc-label">Shop online</p>
            <h2>Latest Selections</h2>
            <p>
              A preview from the store. Open Shop to filter the full catalogue.
            </p>
          </div>
          <ClothingFeaturedProducts limit={6} />
        </div>
      </section>

      <section className="mc-services-band">
        <div className="mc-container">
          <div className="mc-section-head mc-section-head-center">
            <p className="mc-label light">What we do</p>
            <h2>Services &amp; Specials</h2>
          </div>
          <div className="mc-services-grid mc-services-grid-4">
            {CLOTHING_SERVICES.map((service) => (
              <article key={service.id} className="mc-service-card">
                <div
                  className="mc-service-image"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="mc-service-body">
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <a href="/businesses/clothing/services" className="mc-text-link">
                    Learn More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mc-story">
        <div className="mc-container mc-story-grid">
          <div
            className="mc-story-image"
            style={{ backgroundImage: "url('/images/Hero-5.jpg')" }}
            role="img"
            aria-label="Minim Clothing shop floor"
          />
          <div>
            <p className="mc-label dark">The Minim Clothing Story</p>
            <h2>
              Built for Teams.
              <br />
              Made for Families.
            </h2>
            <p>
              Minim Clothing serves wholesalers, schools, workplaces, and families
              across Sierra Leone. Order online for bulk stock, uniforms, special
              occasion wear, and matching family outfits.
            </p>
            <a href="/businesses/clothing/team" className="mc-btn mc-btn-dark">
              Meet the Team
            </a>
          </div>
        </div>
      </section>

      <section className="mc-cta-band">
        <div className="mc-container mc-cta-band-inner">
          <div>
            <h2>Ready to buy online?</h2>
            <p>Open the store, filter what you need, and checkout from your cart.</p>
          </div>
          <a href="/businesses/clothing/shop" className="mc-btn mc-btn-primary">
            Start Shopping
          </a>
        </div>
      </section>
    </>
  )
}
