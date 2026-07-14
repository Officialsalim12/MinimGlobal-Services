'use client'

import Link from 'next/link'
import { BookOpen, ArrowRight } from 'lucide-react'

const leaders = [
  {
    name: 'MR. A.A. JOHNSON',
    position: 'Director 1',
    description: 'Strategic Leadership & Management',
    initials: 'AJ',
  },
  {
    name: 'MRS. FLORENCE JOHNSON',
    position: 'Director 2',
    description: 'Operations & Business Development',
    initials: 'FJ',
  },
  {
    name: 'KADIATU KOROMA',
    position: 'Head of Multimedia',
    description: 'Creative Strategy & Media Production',
    initials: 'KK',
  },
]

export default function ExecutiveLeadership() {
  return (
    <div className="ahs">
      <section
        className="ahs-hero"
        style={{ backgroundImage: "url('/images/Hero-4.jpg')" }}
      >
        <div className="ahs-hero-overlay" />
        <div className="ahs-hero-inner">
          <h1 className="ahs-hero-title">Executive Leadership</h1>
          <p className="ahs-hero-sub">
            Meet Our Team, the leaders guiding Minim Global Services.
          </p>
        </div>
      </section>

      <section className="ahs-team-intro">
        <div className="ahs-container ahs-team-intro-inner">
          <h2 className="ahs-heading">Meet Our Team</h2>
          <p className="ahs-team-intro-desc">
            Minim Global Services is a leading company dedicated to providing
            top quality services across various industries.
          </p>
          <span className="ahs-underline" aria-hidden="true">
            <span />
          </span>
        </div>
      </section>

      <section className="ahs-team-section">
        <div className="ahs-container">
          <div className="ahs-team-grid">
            {leaders.map((leader) => (
              <article key={leader.name} className="ahs-team-card">
                <div className="ahs-team-photo">
                  <div className="ahs-team-photo-fallback" aria-hidden="true">
                    {leader.initials}
                  </div>
                </div>
                <div className="ahs-team-body">
                  <div className="ahs-team-meta">
                    <h3 className="ahs-team-name">{leader.name}</h3>
                    <p className="ahs-team-role">{leader.position}</p>
                  </div>
                  <p className="ahs-team-desc">{leader.description}</p>
                  <div className="ahs-team-social">
                    <div className="ahs-team-social-inner">
                      <Link
                        href="/about/team"
                        aria-label={`Learn more about ${leader.name}`}
                        className="ahs-team-social-link"
                      >
                        <BookOpen size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="ahs-team-cta">
            <Link href="/about/team" className="ahs-btn">
              <span className="ahs-btn-text">Meet the Full Team</span>
              <ArrowRight size={16} className="ahs-btn-icon" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
