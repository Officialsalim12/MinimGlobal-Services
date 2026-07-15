'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import type { Business } from '@/data/businesses'

type Props = {
  business: Business
}

export default function DivisionNavbar({ business }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', isOpen)
    return () => document.body.classList.remove('nav-open')
  }, [isOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <nav className={`dh-nav ${scrolled ? 'is-scrolled' : ''} ${isOpen ? 'is-open' : ''}`}>
      <div className="dh-nav-inner">
        <Link href="/" className="dh-nav-logo" onClick={() => setIsOpen(false)}>
          <Image
            src="/images/logo.png"
            alt={business.name}
            width={140}
            height={40}
            className="object-contain dh-nav-logo-img"
            priority
          />
        </Link>

        <div className="dh-nav-links">
          {business.navLinks.map((link) => (
            <div key={link.href} className="dh-nav-item">
              <Link href={link.href} className="dh-nav-link" onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="dh-nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`dh-nav-mobile ${isOpen ? 'is-open' : ''}`}>
        {business.navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="dh-nav-mobile-row"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
