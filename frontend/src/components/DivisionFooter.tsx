'use client'

import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'
import type { Business } from '@/data/businesses'
import { getApexPublicUrl } from '@/data/businesses'

type Props = {
  business: Business
}

export default function DivisionFooter({ business }: Props) {
  const apexUrl = getApexPublicUrl()

  return (
    <footer className="dh-footer">
      <div className="dh-container dh-footer-grid">
        <div>
          <div className="inline-block mb-4">
            <Image
              src="/images/logo.png"
              alt={business.name}
              width={180}
              height={50}
              className="object-contain"
            />
          </div>
          <p className="dh-footer-copy">
            {business.name} — part of Minim Global Services.
          </p>
          <p className="dh-footer-copy mt-3">
            <a href={apexUrl} className="underline underline-offset-2">
              Part of Minim Global
            </a>
          </p>
        </div>

        <div>
          <h4 className="dh-footer-heading">On this site</h4>
          <ul className="dh-footer-links">
            {business.navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="dh-footer-heading">Contact</h4>
          <ul className="dh-footer-contact">
            <li>
              <MapPin size={18} />
              <span>Freetown, Sierra Leone</span>
            </li>
            <li>
              <Phone size={18} />
              <a href="tel:033883388">033 88 33 88</a>
            </li>
            <li>
              <Mail size={18} />
              <a href="mailto:info@minimglobal.com">info@minimglobal.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="dh-footer-bottom">
        <div className="dh-container dh-footer-bottom-inner">
          <p>
            &copy; {new Date().getFullYear()} {business.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
