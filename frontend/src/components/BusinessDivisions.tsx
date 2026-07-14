'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const businesses = [
  {
    title: 'Minim Studios',
    meta: 'Media / Production / Events',
    description: 'Explore our professional studio services',
    image: '/images/Hero-1.jpg',
    link: '/businesses/studios',
    details: [
      'Photography',
      'Videography',
      'Audio Production',
      'Event Planning',
      'Advertisement',
      'Live Jazz Band',
    ],
  },
  {
    title: 'Minim Food',
    meta: 'Catering / Hospitality',
    description:
      'Catering, restaurant operations, and food service solutions delivering quality and reliability for everyday and special occasions.',
    image: '/images/Hero-3.jpg',
    link: '/businesses/food',
    details: [
      'Restaurant Operations',
      'Catering Services',
      'Food Delivery',
      'Event Catering',
      'Menu Planning',
      'Special Events',
    ],
  },
  {
    title: 'Minim Architect Designers & Engineers',
    meta: 'Construction / Design',
    description:
      'Explore our architectural services and discover how we can bring your vision to life.',
    image: '/images/Hero-4.jpg',
    link: '/businesses/architect',
    details: [
      'Residential Design',
      'Construction',
      'Real Estate',
      'Project Management',
      'Consultancy',
      'Track Your Expenditure',
    ],
  },
  {
    title: 'Minim Clothing',
    meta: 'Fashion / Apparel',
    description:
      'Fashion design, family clothing, corporate wear, and custom apparel solutions.',
    image: '/images/Hero-5.jpg',
    link: '/businesses/clothing',
    details: [
      'Family',
      'Batch',
      "Men's Clothing",
      "Women's Clothing",
      "Children's Clothing",
    ],
  },
]

export default function BusinessDivisions() {
  return (
    <div className="ahs">
      <section className="ahs-team-intro">
        <div className="ahs-container ahs-team-intro-inner">
          <h2 className="ahs-heading">Diversified for Everyday Needs</h2>
          <p className="ahs-team-intro-desc">
            As a diversified group, our interest across industries reflects our
            commitment to fulfilling essential needs for people and businesses
            in Sierra Leone.
          </p>
          <span className="ahs-underline" aria-hidden="true">
            <span />
          </span>
        </div>
      </section>

      <section className="dp-biz-list">
        <div className="ahs-container">
          <div className="dp-biz-stack">
            {businesses.map((biz, index) => (
              <article
                key={biz.title}
                className={`dp-biz-item ${index % 2 === 1 ? 'is-reverse' : ''}`}
              >
                <div
                  className="dp-biz-media"
                  style={{ backgroundImage: `url('${biz.image}')` }}
                />
                <div className="dp-biz-copy">
                  <p className="dp-biz-meta">{biz.meta}</p>
                  <h3 className="ahs-heading">{biz.title}</h3>
                  <p className="ahs-body">{biz.description}</p>
                  <ul className="dp-feature-list">
                    {biz.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <Link href={biz.link} className="ahs-btn">
                    <span className="ahs-btn-text">Learn More</span>
                    <ArrowRight size={16} className="ahs-btn-icon" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
