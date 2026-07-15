'use client'

import { useMemo, useState } from 'react'
import { toast } from 'react-hot-toast'
import {
  foodProducts,
  formatLeones,
  type FoodProduct,
} from '@/data/food'
import { useFoodCart } from '@/components/FoodCartContext'

const filters: Array<{ id: 'all' | FoodProduct['category']; label: string }> = [
  { id: 'all', label: 'All' },
  { id: 'meals', label: 'Meals & trays' },
  { id: 'pantry', label: 'Pantry' },
  { id: 'drinks', label: 'Drinks' },
  { id: 'party', label: 'Party' },
  { id: 'equipment', label: 'Supplies' },
]

export default function ShopPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]['id']>('all')
  const { addItem, openCart, itemCount, subtotal } = useFoodCart()

  const products = useMemo(
    () =>
      filter === 'all'
        ? foodProducts
        : foodProducts.filter((p) => p.category === filter),
    [filter]
  )

  return (
    <>
      <section
        className="mf-page-hero"
        style={{ backgroundImage: "url('/images/Hero-1.jpg')" }}
      >
        <div className="mf-hero-overlay" />
        <div className="mf-page-hero-content">
          <p className="mf-eyebrow">Shop</p>
          <h1>Buy food &amp; products online</h1>
          <p>
            Add items to your cart, then checkout when you are ready for
            delivery.
          </p>
          {itemCount > 0 && (
            <div className="mf-hero-actions">
              <button type="button" className="mf-btn mf-btn-primary" onClick={openCart}>
                View cart ({itemCount}) · {formatLeones(subtotal)}
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="mf-shop">
        <div className="mf-container">
          <div className="mf-filter-row">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`mf-filter-btn ${filter === item.id ? 'is-active' : ''}`}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mf-product-grid">
            {products.map((product) => (
              <article key={product.id} className="mf-product-card">
                <div
                  className="mf-product-media"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />
                <div className="mf-product-body">
                  <p className="mf-product-cat">{product.category}</p>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="mf-product-foot">
                    <strong>
                      {formatLeones(product.price)}
                      <span> / {product.unit}</span>
                    </strong>
                    <button
                      type="button"
                      className="mf-btn mf-btn-primary"
                      onClick={() => {
                        addItem(product.id, 1)
                        toast.success(`${product.name} added to cart`)
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
