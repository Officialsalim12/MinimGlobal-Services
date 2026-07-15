'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ShoppingCart } from 'lucide-react'
import { getApexPublicUrl } from '@/data/businesses'
import { FOOD_NAV } from '@/data/food'
import { useFoodCart } from '@/components/FoodCartContext'
import FoodCartDrawer from '@/components/FoodCartDrawer'

export default function FoodShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const apexUrl = getApexPublicUrl()
  const { itemCount, openCart } = useFoodCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen)
    return () => document.body.classList.remove('nav-open')
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const publicPath = pathname.replace(/^\/businesses\/food/, '') || '/'

  return (
    <div className="mf-site">
      <header
        className={`mf-nav ${scrolled || publicPath !== '/' ? 'is-scrolled' : ''} ${
          menuOpen ? 'is-open' : ''
        }`}
      >
        <div className="mf-nav-top">
          <div className="mf-container mf-nav-top-inner">
            <a href="tel:033883388">033 88 33 88</a>
            <a href="mailto:info@minimglobal.com">orders@minimglobal.com</a>
          </div>
        </div>
        <div className="mf-nav-inner">
          <a href="/" className="mf-nav-logo" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="Minim Food"
              width={140}
              height={40}
              className="object-contain"
              priority
            />
          </a>

          <nav className="mf-nav-links" aria-label="Primary">
            {FOOD_NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`mf-nav-link ${
                  publicPath === link.href ||
                  (link.href !== '/' && publicPath.startsWith(link.href))
                    ? 'is-active'
                    : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mf-nav-actions">
            <button
              type="button"
              className="mf-cart-btn"
              aria-label={`Open cart, ${itemCount} items`}
              onClick={openCart}
            >
              <ShoppingCart size={20} />
              {itemCount > 0 && <span className="mf-cart-badge">{itemCount}</span>}
            </button>
            <button
              type="button"
              className="mf-nav-toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div className={`mf-nav-mobile ${menuOpen ? 'is-open' : ''}`}>
          {FOOD_NAV.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="mf-nav-mobile-cart"
            onClick={() => {
              setMenuOpen(false)
              openCart()
            }}
          >
            Cart ({itemCount})
          </button>
        </div>
      </header>

      {children}
      <FoodCartDrawer />

      <footer className="mf-footer">
        <div className="mf-container mf-footer-grid">
          <div>
            <h4>Address</h4>
            <p>Freetown, Sierra Leone</p>
          </div>
          <div>
            <h4>Phone</h4>
            <p>
              <a href="tel:033883388">033 88 33 88</a>
            </p>
          </div>
          <div>
            <h4>Email</h4>
            <p>
              <a href="mailto:info@minimglobal.com">info@minimglobal.com</a>
            </p>
          </div>
          <div>
            <h4>Company</h4>
            <p>
              <a href={apexUrl}>Part of Minim Global</a>
            </p>
          </div>
        </div>
        <div className="mf-footer-bottom">
          <div className="mf-container">
            <p>
              &copy; {new Date().getFullYear()} Minim Food. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
