'use client'

import { useMemo, useState } from 'react'
import ClothingAddToCartButton from '@/components/ClothingAddToCartButton'
import {
  CLOTHING_CATEGORY_META,
  CLOTHING_PRODUCTS,
  filterClothingProducts,
  formatLeones,
  type ClothingCategory,
} from '@/data/clothing'

const CATEGORIES: Array<{ id: ClothingCategory | 'all'; label: string }> = [
  { id: 'all', label: 'All' },
  { id: 'wholesale', label: CLOTHING_CATEGORY_META.wholesale.title },
  { id: 'uniforms', label: CLOTHING_CATEGORY_META.uniforms.title },
  { id: 'special-wear', label: CLOTHING_CATEGORY_META['special-wear'].title },
  { id: 'family-wear', label: CLOTHING_CATEGORY_META['family-wear'].title },
]

export default function ClothingShop() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<ClothingCategory | 'all'>('all')

  const products = useMemo(
    () => filterClothingProducts(query, category),
    [query, category]
  )

  return (
    <>
      <section
        className="mc-page-hero"
        style={{ backgroundImage: "url('/images/Hero-3.jpg')" }}
      >
        <div className="mc-hero-overlay" />
        <div className="mc-page-hero-content">
          <p className="mc-eyebrow">Online Store</p>
          <h1>Shop Minim Clothing</h1>
          <p>
            One store for wholesale, uniforms, special wear, and family wear.
            Filter by category or search by name.
          </p>
        </div>
      </section>

      <section className="mc-shop">
        <div className="mc-container">
          <div className="mc-shop-filters">
            <label className="mc-shop-search">
              <span className="sr-only">Search products</span>
              <input
                type="search"
                placeholder="Search by name…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
            <div className="mc-shop-categories" role="group" aria-label="Filter by category">
              {CATEGORIES.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`mc-filter-btn ${category === item.id ? 'is-active' : ''}`}
                  onClick={() => setCategory(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <p className="mc-shop-count">
            {products.length} of {CLOTHING_PRODUCTS.length} product
            {CLOTHING_PRODUCTS.length === 1 ? '' : 's'}
          </p>

          {products.length === 0 ? (
            <div className="mc-shop-empty">
              <p>No products match your search.</p>
              <button
                type="button"
                className="mc-btn mc-btn-dark"
                onClick={() => {
                  setQuery('')
                  setCategory('all')
                }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="mc-product-grid">
              {products.map((product) => (
                <article key={product.id} className="mc-product-card">
                  <div
                    className="mc-product-image"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  />
                  <div className="mc-product-body">
                    <p className="mc-product-cat">
                      {CLOTHING_CATEGORY_META[product.category].title}
                    </p>
                    <h3>{product.name}</h3>
                    <p>{product.blurb}</p>
                    <strong>
                      {formatLeones(product.price)}
                      {product.unit ? (
                        <span className="mc-product-unit"> / {product.unit}</span>
                      ) : null}
                    </strong>
                    <ClothingAddToCartButton
                      productId={product.id}
                      productName={product.name}
                    />
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
