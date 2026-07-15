import ClothingOrderForm from '@/components/ClothingOrderForm'

export default function ClothingContactPage() {
  return (
    <>
      <section
        className="mc-page-hero"
        style={{ backgroundImage: "url('/images/Hero-1.jpg')" }}
      >
        <div className="mc-hero-overlay" />
        <div className="mc-page-hero-content">
          <p className="mc-eyebrow">Customer Care</p>
          <h1>Contact Us</h1>
          <p>
            Shop online from any collection, or send a message if you need help
            with sizes, branding, or delivery.
          </p>
          <div className="mc-hero-actions">
            <a href="/businesses/clothing/shop" className="mc-btn mc-btn-primary">
              Shop Online
            </a>
          </div>
        </div>
      </section>

      <section className="mc-contact-page">
        <div className="mc-container mc-contact-grid">
          <div>
            <h2>Need help?</h2>
            <p>
              Prefer to buy immediately? Use Add to cart on any product page.
              For custom branding or large programme questions, message us here.
            </p>
            <ul className="mc-contact-details">
              <li>
                <strong>Phone</strong>
                <a href="tel:033883388">033 88 33 88</a>
              </li>
              <li>
                <strong>Email</strong>
                <a href="mailto:info@minimglobal.com">wardrobe@minimglobal.com</a>
              </li>
              <li>
                <strong>Shop</strong>
                <span>Freetown, Sierra Leone</span>
              </li>
            </ul>
          </div>
          <div>
            <h2>Send a Message</h2>
            <ClothingOrderForm />
          </div>
        </div>
      </section>
    </>
  )
}
