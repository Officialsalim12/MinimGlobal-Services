'use client'

import { useState } from 'react'
import { Minus, Plus, Trash2, X, ShoppingBag } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { formatLeones } from '@/data/clothing'
import { useClothingCart } from '@/components/ClothingCartContext'

export default function ClothingCartDrawer() {
  const {
    lines,
    itemCount,
    subtotal,
    isOpen,
    closeCart,
    setQuantity,
    removeItem,
    clearCart,
    getProduct,
  } = useClothingCart()

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  })

  const onCheckout = (e: React.FormEvent) => {
    e.preventDefault()
    if (lines.length === 0) return
    toast.success('Purchase complete. We will confirm stock and delivery shortly.')
    clearCart()
    setForm({ name: '', email: '', phone: '', address: '', notes: '' })
    closeCart()
  }

  if (!isOpen) return null

  return (
    <div className="mc-cart-root" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <button
        type="button"
        className="mc-cart-backdrop"
        aria-label="Close cart"
        onClick={closeCart}
      />
      <aside className="mc-cart-drawer">
        <div className="mc-cart-head">
          <div>
            <h2>Your cart</h2>
            <p>
              {itemCount} item{itemCount === 1 ? '' : 's'}
            </p>
          </div>
          <button type="button" className="mc-cart-close" onClick={closeCart} aria-label="Close">
            <X size={22} />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="mc-cart-empty">
            <ShoppingBag size={36} />
            <p>Your cart is empty.</p>
            <a href="/shop" className="mc-btn mc-btn-dark" onClick={closeCart}>
              Continue shopping
            </a>
          </div>
        ) : (
          <>
            <ul className="mc-cart-lines">
              {lines.map((line) => {
                const product = getProduct(line.productId)
                if (!product) return null
                return (
                  <li key={line.productId} className="mc-cart-line">
                    <div
                      className="mc-cart-thumb"
                      style={{ backgroundImage: `url('${product.image}')` }}
                    />
                    <div className="mc-cart-line-body">
                      <h3>{product.name}</h3>
                      <p>
                        {formatLeones(product.price)}
                        {product.unit ? ` / ${product.unit}` : ''}
                      </p>
                      <div className="mc-cart-qty">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() =>
                            setQuantity(line.productId, line.quantity - 1)
                          }
                        >
                          <Minus size={14} />
                        </button>
                        <span>{line.quantity}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() =>
                            setQuantity(line.productId, line.quantity + 1)
                          }
                        >
                          <Plus size={14} />
                        </button>
                        <button
                          type="button"
                          className="mc-cart-remove"
                          aria-label={`Remove ${product.name}`}
                          onClick={() => removeItem(line.productId)}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                    <strong className="mc-cart-line-total">
                      {formatLeones(product.price * line.quantity)}
                    </strong>
                  </li>
                )
              })}
            </ul>

            <div className="mc-cart-checkout">
              <div className="mc-cart-subtotal">
                <span>Subtotal</span>
                <strong>{formatLeones(subtotal)}</strong>
              </div>

              <form className="mc-form mc-cart-form" onSubmit={onCheckout}>
                <label>
                  Full Name
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </label>
                <label>
                  Phone
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </label>
                <label>
                  Delivery address
                  <input
                    required
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                  />
                </label>
                <label>
                  Notes
                  <textarea
                    rows={2}
                    placeholder="Sizes, branding, delivery notes…"
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  />
                </label>
                <button type="submit" className="mc-btn mc-btn-primary">
                  Buy now · {formatLeones(subtotal)}
                </button>
              </form>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
