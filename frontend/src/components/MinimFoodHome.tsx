import { ArrowRight, UtensilsCrossed, ShoppingBag } from 'lucide-react'
import { cateringPackages, foodProducts, formatLeones } from '@/data/food'
import AddToCartButton from '@/components/AddToCartButton'

export default function MinimFoodHome() {
  const featured = foodProducts.slice(0, 6)

  return (
    <>
      <section
        className="mf-hero"
        style={{ backgroundImage: "url('/images/Hero-3.jpg')" }}
      >
        <div className="mf-hero-overlay" />
        <div className="mf-hero-content">
          <p className="mf-eyebrow">Minim Food</p>
          <h1>Catering &amp; Online Food Shop</h1>
          <p className="mf-hero-sub">
            Book professional catering for your event, or order meals and pantry
            products online for delivery across Sierra Leone.
          </p>
          <div className="mf-hero-actions">
            <a href="/businesses/food/catering" className="mf-btn mf-btn-primary">
              <UtensilsCrossed size={16} />
              Book Catering
            </a>
            <a href="/businesses/food/shop" className="mf-btn mf-btn-ghost">
              <ShoppingBag size={16} />
              Shop Products
            </a>
          </div>
        </div>
      </section>

      <section className="mf-split">
        <div className="mf-container mf-split-grid">
          <article className="mf-split-card">
            <p className="mf-label">Catering</p>
            <h2>Events, offices &amp; celebrations</h2>
            <p>
              From corporate lunches to weddings, Minim Food plans the menu,
              prepares the food, and delivers on time with optional on site
              service.
            </p>
            <a href="/businesses/food/catering" className="mf-btn mf-btn-dark">
              View catering packages <ArrowRight size={16} />
            </a>
          </article>
          <article className="mf-split-card is-accent">
            <p className="mf-label">Shop online</p>
            <h2>Order food &amp; products</h2>
            <p>
              Buy party trays, drinks, spices, and pantry items online. Pay on
              delivery or arrange your preferred payment with our team.
            </p>
            <a href="/businesses/food/shop" className="mf-btn mf-btn-primary">
              Browse the shop <ArrowRight size={16} />
            </a>
          </article>
        </div>
      </section>

      <section className="mf-sheets">
        <div className="mf-container">
          <div className="mf-section-head">
            <p className="mf-label dark">Catering packages</p>
            <h2>Popular catering options</h2>
          </div>
          <div className="mf-sheets-grid">
            {cateringPackages.map((pack) => (
              <article key={pack.slug} className="mf-sheet-card">
                <div
                  className="mf-sheet-media"
                  style={{ backgroundImage: `url('${pack.image}')` }}
                />
                <div className="mf-sheet-body">
                  <h3>{pack.title}</h3>
                  <p>{pack.description}</p>
                  <p className="mf-meta">
                    {pack.guests} · from {formatLeones(pack.priceFrom)}
                  </p>
                  <a href="/businesses/food/contact" className="mf-btn mf-btn-dark">
                    Request quote
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mf-shop-preview">
        <div className="mf-container">
          <div className="mf-section-head mf-section-head-row">
            <div>
              <p className="mf-label dark">Shop online</p>
              <h2>Featured products</h2>
            </div>
            <a href="/businesses/food/shop" className="mf-text-link">
              View all products <ArrowRight size={16} />
            </a>
          </div>
          <div className="mf-product-grid">
            {featured.map((product) => (
              <article key={product.id} className="mf-product-card">
                <div
                  className="mf-product-media"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />
                <div className="mf-product-body">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="mf-product-foot">
                    <strong>
                      {formatLeones(product.price)}
                      <span> / {product.unit}</span>
                    </strong>
                    <AddToCartButton
                      productId={product.id}
                      productName={product.name}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mf-delivery">
        <div className="mf-container mf-delivery-inner">
          <h2>Speedy &amp; reliable delivery</h2>
          <p>
            Catering deliveries for events and same day or next day product
            delivery across Freetown. Shop online and we confirm availability
            quickly.
          </p>
          <a href="/businesses/food/shop" className="mf-btn mf-btn-primary">
            Go to Shop
          </a>
        </div>
      </section>
    </>
  )
}
