'use client'

import { useState } from 'react'
import Link from 'next/link'

const categories = [
  { id: 'family', name: 'Family', blurb: 'Family Collection for everyone' },
  { id: 'batch', name: 'Batch', blurb: 'Building the best foundation for your child\'s growth and success' },
  { id: 'men', name: "Men's Clothing", blurb: 'Explore the latest fashion in Men\'s Clothing' },
  { id: 'women', name: "Women's Clothing", blurb: 'Discover the latest trends in Women\'s Fashion' },
  { id: 'children', name: "Children's Clothing", blurb: 'Find the best outfits for your little ones' },
]

const products = [
  {
    id: 1,
    name: "Men's Formal Shirt",
    category: 'men',
    price: 50000,
    blurb: 'Explore the latest fashion in Men\'s Clothing',
  },
  {
    id: 2,
    name: "Women's Blouse",
    category: 'women',
    price: 45000,
    blurb: 'Discover the latest trends in Women\'s Fashion',
  },
  {
    id: 3,
    name: "Children's Clothing",
    category: 'children',
    price: 25000,
    blurb: 'Find the best outfits for your little ones',
  },
  {
    id: 4,
    name: 'Family Matching Set',
    category: 'family',
    price: 120000,
    blurb: 'Family Collection for everyone',
  },
  {
    id: 5,
    name: 'Uniform',
    category: 'batch',
    price: 40000,
    blurb: 'Building the best foundation for your child\'s growth and success',
  },
  {
    id: 6,
    name: 'Batch Collection',
    category: 'batch',
    price: 55000,
    blurb: 'Building the best foundation for your child\'s growth and success',
  },
]

export default function ClothingCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => {
          if (selectedCategory === 'family') {
            return ['family', 'men', 'women', 'children'].includes(p.category)
          }
          return p.category === selectedCategory
        })

  const activeBlurb =
    selectedCategory === 'all'
      ? 'Find the best outfits for your family. Building the best foundation for your child\'s growth and success.'
      : categories.find((c) => c.id === selectedCategory)?.blurb

  return (
    <section className="dp-section">
      <div className="dh-container">
        <div className="dp-filter-row">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`dp-filter-btn ${selectedCategory === 'all' ? 'is-active' : ''}`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setSelectedCategory(category.id)}
              className={`dp-filter-btn ${
                selectedCategory === category.id ? 'is-active' : ''
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {selectedCategory !== 'all' && activeBlurb && (
          <p className="dh-section-sub" style={{ textAlign: 'center', marginBottom: 28 }}>
            {activeBlurb}
          </p>
        )}

        <div className="dp-product-grid">
          {filteredProducts.map((product) => (
            <article key={product.id} className="dp-product-card">
              <div className="dp-product-fallback">
                {product.name.charAt(0)}
              </div>
              <div className="dp-product-body">
                <p className="dp-product-cat">
                  {categories.find((c) => c.id === product.category)?.name}
                </p>
                <h3>{product.name}</h3>
                <p>{product.blurb}</p>
                <strong>Le {product.price.toLocaleString()}</strong>
              </div>
            </article>
          ))}
        </div>

        <div className="ahs-team-cta">
          <Link href="/businesses/clothing/contact" className="ahs-btn">
            <span className="ahs-btn-text">Contact Us</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
