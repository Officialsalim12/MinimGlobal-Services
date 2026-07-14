'use client'

import Link from 'next/link'
import {
  Megaphone,
  Calendar,
  Newspaper,
  DollarSign,
  Radio,
  Music,
  ArrowRight,
} from 'lucide-react'

const impactAreas = [
  {
    icon: Megaphone,
    title: 'Media Consultancy',
    description: 'Expert guidance in media strategies and branding.',
    link: '/businesses/studios',
  },
  {
    icon: Calendar,
    title: 'Event Planning',
    description: 'Organizing and managing events with precision.',
    link: '/businesses/studios',
  },
  {
    icon: Newspaper,
    title: 'Advertisement',
    description: 'Boost your brand visibility through strategic ads.',
    link: '/media',
  },
  {
    icon: DollarSign,
    title: 'Track Your Expenditure',
    description: 'Monitor and manage your finances effectively.',
    link: '/businesses/architect',
  },
  {
    icon: Radio,
    title: 'Live Streaming',
    description: 'Broadcast events in real time with high quality.',
    link: '/media',
  },
  {
    icon: Music,
    title: 'Live Jazz Band',
    description: 'Experience live jazz music for special occasions.',
    link: '/businesses/studios',
  },
]

export default function ImpactSection() {
  return (
    <section className="dh-impact">
      <div className="dh-container">
        <div className="dh-section-head dh-section-head-center" style={{ marginBottom: 40 }}>
          <h2 className="dh-section-title">Our Expertise</h2>
          <p className="dh-section-sub">The future that connects us together!</p>
          <span className="ahs-underline" aria-hidden="true">
            <span />
          </span>
        </div>
        <div className="dh-impact-grid">
          {impactAreas.map((area) => {
            const Icon = area.icon
            return (
              <div key={area.title} className="dh-impact-card">
                <div className="dh-impact-overlay" aria-hidden="true" />
                <div className="dh-impact-icon">
                  <Icon size={48} strokeWidth={1.25} />
                </div>
                <div className="dh-impact-content">
                  <h3 className="dh-impact-title">{area.title}</h3>
                  <p className="dh-impact-desc">{area.description}</p>
                </div>
                <div className="dh-impact-btn-wrap">
                  <Link href={area.link} className="dh-impact-btn">
                    Read More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
