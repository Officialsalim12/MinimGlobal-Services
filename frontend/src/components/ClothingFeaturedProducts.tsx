'use client'

import ClothingAddToCartButton from '@/components/ClothingAddToCartButton'
import {
  CLOTHING_CATEGORY_META,
  CLOTHING_PRODUCTS,
  formatLeones,
} from '@/data/clothing'

type Props = {
  limit?: number
}

/** Featured products for the home page, linking into the full shop. */
export default function ClothingFeaturedProducts({ limit = 6 }: Props) {
  const products = CLOTHING_PRODUCTS.slice(0, limit)

  return (
    <div className="mc-product-block">
      <div className="mc-product-block-head">
        <h2>Featured</h2>
        <a href="/shop" className="mc-text-link">
          View All
        </a>
      </div>
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
    </div>
  )
}
