'use client'

import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const portfolioItems = [
  {
    id: 1,
    title: 'Brand Identity for We Go Project',
    category: 'Branding',
    description:
      'Created a comprehensive branding package including logo design, marketing materials, and visual guidelines.',
  },
  {
    id: 2,
    title: 'E commerce Website for Fashion Star Boutique',
    category: 'Web',
    description:
      'Developed a fully responsive e commerce platform with secure payment integration and a user friendly interface.',
  },
  {
    id: 3,
    title: 'Content Strategy for Wildlife Survey',
    category: 'Content',
    description:
      'Developed a robust content strategy, including blog posts, newsletters, and SEO optimization, driving organic traffic growth.',
  },
  {
    id: 4,
    title: 'Project 1 - Cinematic Short Film',
    category: 'Videography',
    description: 'High quality video production capturing compelling cinematic stories.',
  },
  {
    id: 5,
    title: 'Project 2 - Music Video',
    category: 'Videography',
    description: 'Professional music video production with stunning visuals.',
  },
  {
    id: 6,
    title: 'Project 3 - Live Performance',
    category: 'Videography',
    description: 'Live performance coverage with professional videography.',
  },
  {
    id: 7,
    title: 'Project 4 - Corporate Event',
    category: 'Videography',
    description: 'Corporate event films that tell your brand story.',
  },
  {
    id: 8,
    title: 'Wedding Ceremony',
    category: 'Photography',
    description: 'Wedding & event photography capturing timeless moments.',
  },
  {
    id: 9,
    title: "Samuel Johnson's Birthday",
    category: 'Event',
    description: 'Event coverage with high resolution photography.',
  },
]

export default function PortfolioGallery() {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  const images = [
    '/images/Hero-1.jpg',
    '/images/Hero-2.jpeg',
    '/images/Hero-3.jpg',
    '/images/Hero-4.jpg',
    '/images/Hero-5.jpg',
    '/images/Hero-6.jpg',
  ]

  return (
    <section className="dp-section">
      <div className="dh-container">
        <div className="dh-section-head dh-section-head-center">
          <h2 className="dh-section-title">Our Portfolio</h2>
          <p className="dh-section-sub">
            Explore some of the projects we&apos;ve worked on at Minim Global
            Services.
          </p>
          <span className="ahs-underline" aria-hidden="true">
            <span />
          </span>
        </div>

        <div className="dp-product-grid">
          {portfolioItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className="dp-product-card"
              style={{ textAlign: 'left', cursor: 'pointer', width: '100%' }}
              onClick={() => {
                setPhotoIndex(index)
                setIsOpen(true)
              }}
            >
              <div className="dp-product-fallback">{item.title.charAt(0)}</div>
              <div className="dp-product-body">
                <p className="dp-product-cat">{item.category}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={portfolioItems.map((item, i) => ({
          src: images[i % images.length],
          title: item.title,
          description: item.description,
        }))}
      />
    </section>
  )
}
