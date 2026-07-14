'use client'

import { useState } from 'react'

const menuItems = [
  { id: 1, name: 'Jollof Rice', description: 'Traditional Sierra Leonean jollof rice', price: 15000, category: 'Main Course' },
  { id: 2, name: 'Cassava Leaves', description: 'Palava sauce with cassava leaves', price: 12000, category: 'Main Course' },
  { id: 3, name: 'Grilled Fish', description: 'Freshly grilled fish with spices', price: 18000, category: 'Seafood' },
  { id: 4, name: 'Fried Plantain', description: 'Sweet fried plantains', price: 5000, category: 'Side Dish' },
  { id: 5, name: 'Chicken Stew', description: 'Rich chicken stew with vegetables', price: 15000, category: 'Main Course' },
  { id: 6, name: 'Egusi Soup', description: 'Melon seed soup with fufu', price: 14000, category: 'Soup' },
]

export default function FoodMenu() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', 'Main Course', 'Seafood', 'Side Dish', 'Soup']
  const filteredItems =
    selectedCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory)

  return (
    <section className="dp-section">
      <div className="dh-container">
        <div className="dh-section-head dh-section-head-center">
          <h2 className="dh-section-title">Our Menu</h2>
          <p className="dh-section-sub">
            Quality dishes prepared with care for everyday dining and events.
          </p>
          <span className="ahs-underline" aria-hidden="true">
            <span />
          </span>
        </div>

        <div className="dp-filter-row">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`dp-filter-btn ${
                selectedCategory === category ? 'is-active' : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="dp-product-grid">
          {filteredItems.map((item) => (
            <article key={item.id} className="dp-product-card">
              <div className="dp-product-fallback">{item.name.charAt(0)}</div>
              <div className="dp-product-body">
                <p className="dp-product-cat">{item.category}</p>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <strong>
                  Le {item.price.toLocaleString()}
                </strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
