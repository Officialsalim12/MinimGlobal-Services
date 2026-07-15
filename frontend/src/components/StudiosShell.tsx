'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { getApexPublicUrl } from '@/data/businesses'
import { STUDIOS_NAV } from '@/data/studios'

export default function StudiosShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const apexUrl = getApexPublicUrl()

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

  const publicPath = pathname.replace(/^\/businesses\/studios/, '') || '/'

  return (
    <div className="ms-site">
      <header
        className={`ms-nav ${scrolled || publicPath !== '/' ? 'is-scrolled' : ''} ${
          menuOpen ? 'is-open' : ''
        }`}
      >
        <div className="ms-nav-inner">
          <a href="/" className="ms-nav-logo" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="Minim Studios"
              width={140}
              height={40}
              className="object-contain"
              priority
            />
          </a>

          <nav className="ms-nav-links" aria-label="Primary">
            {STUDIOS_NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`ms-nav-link ${publicPath === link.href ? 'is-active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="ms-nav-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`ms-nav-mobile ${menuOpen ? 'is-open' : ''}`}>
          {STUDIOS_NAV.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      </header>

      {children}

      <footer className="ms-footer">
        <div className="ms-container ms-footer-grid">
          <div>
            <Image
              src="/images/logo.png"
              alt="Minim Studios"
              width={160}
              height={44}
              className="object-contain mb-4"
            />
            <p>Based in Freetown, available nationwide</p>
            <p className="ms-footer-meta">
              Freetown, Sierra Leone
              <br />
              Studio: 033 88 33 88
              <br />
              <a href="mailto:info@minimglobal.com">info@minimglobal.com</a>
            </p>
          </div>
          <div>
            <h4>Our Studios</h4>
            <ul>
              <li>
                <a href="/photography">Photography Studio</a>
              </li>
              <li>
                <a href="/videography">Videography Studio</a>
              </li>
              <li>
                <a href="/sound">Sound Studio</a>
              </li>
              <li>
                <a href="/displays">Displays Studio</a>
              </li>
              <li>
                <a href="/design">Design Studio</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/team">Team</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href={apexUrl}>Part of Minim Global</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="ms-footer-bottom">
          <div className="ms-container">
            <p>
              &copy; {new Date().getFullYear()} Minim Studios. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
