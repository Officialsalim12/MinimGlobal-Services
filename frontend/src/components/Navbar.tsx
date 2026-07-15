'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [aboutDropdown, setAboutDropdown] = useState(false)

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

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/businesses', label: 'Our Businesses' },
    { href: '/about', label: 'About Us', hasDropdown: true },
    { href: '/contact', label: 'Contact' },
  ]

  const aboutSubLinks = [
    { href: '/about/history', label: 'History, Mission & Vision' },
    { href: '/about/leadership', label: 'Executive Leadership' },
  ]

  return (
    <nav className={`dh-nav ${scrolled ? 'is-scrolled' : ''} ${isOpen ? 'is-open' : ''}`}>
      <div className="dh-nav-inner">
        <Link href="/" className="dh-nav-logo" onClick={() => setIsOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="Minim Global"
            width={140}
            height={40}
            className="object-contain dh-nav-logo-img"
            priority
          />
        </Link>

        <div className="dh-nav-links">
          {navLinks.map((link) => (
            <div key={link.href} className="dh-nav-item">
              <Link href={link.href} className="dh-nav-link">
                {link.label}
                {link.hasDropdown && <ChevronDown size={14} />}
              </Link>
              {link.hasDropdown && (
                <div className="dh-nav-dropdown">
                  {aboutSubLinks.map((subLink) => (
                    <Link key={subLink.href} href={subLink.href}>
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              )}
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
        {navLinks.map((link) => (
          <div key={link.href}>
            <div className="dh-nav-mobile-row">
              <Link
                href={link.href}
                className="flex-1"
                onClick={() => {
                  if (!link.hasDropdown) setIsOpen(false)
                }}
              >
                {link.label}
              </Link>
              {link.hasDropdown && (
                <button
                  type="button"
                  aria-label="Toggle about submenu"
                  onClick={() => setAboutDropdown(!aboutDropdown)}
                >
                  <ChevronDown
                    size={16}
                    className={aboutDropdown ? 'rotate-180' : ''}
                  />
                </button>
              )}
            </div>
            {link.hasDropdown && aboutDropdown && (
              <div className="dh-nav-mobile-sub">
                {aboutSubLinks.map((subLink) => (
                  <Link
                    key={subLink.href}
                    href={subLink.href}
                    onClick={() => {
                      setAboutDropdown(false)
                      setIsOpen(false)
                    }}
                  >
                    {subLink.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  )
}
