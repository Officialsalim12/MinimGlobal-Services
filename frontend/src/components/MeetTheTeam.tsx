'use client'

import Link from 'next/link'
import { Mail, ArrowRight } from 'lucide-react'

const teamMembers = [
  {
    name: 'NASIATU SESAY',
    role: 'Admin',
    description: 'Administration',
    initials: 'NS',
  },
  {
    name: 'EMMANUEL B. KOROMA',
    role: 'Admin',
    description: 'Global Services',
    initials: 'EK',
  },
  {
    name: 'MR. BENSON',
    role: 'Project Coordinator',
    description: 'Project Management & Planning',
    initials: 'MB',
  },
  {
    name: 'LILIAN KAMARA',
    role: 'Junior Architect',
    description: 'Design & Drafting',
    initials: 'LK',
  },
  {
    name: 'JOSHUA SESAY',
    role: 'Junior Engineer',
    description: 'Technical Support & Engineering',
    initials: 'JS',
  },
  {
    name: 'FATIMATA KAMARA',
    role: 'Graphic Design Staff',
    description: 'Visual Content & Branding',
    initials: 'FK',
  },
  {
    name: 'IBRAHIM SESAY',
    role: 'Staff',
    description: 'Project Ministry',
    initials: 'IS',
  },
]

export default function MeetTheTeam() {
  return (
    <div className="ahs">
      <section
        className="ahs-hero"
        style={{ backgroundImage: "url('/images/Hero-5.jpg')" }}
      >
        <div className="ahs-hero-overlay" />
        <div className="ahs-hero-inner">
          <h1 className="ahs-hero-title">Meet Our Team</h1>
          <p className="ahs-hero-sub">
            Minim Global Services is a leading company dedicated to providing
            top quality services across various industries.
          </p>
        </div>
      </section>

      <section className="ahs-team-intro">
        <div className="ahs-container ahs-team-intro-inner">
          <h2 className="ahs-heading">Meet Our Team</h2>
          <p className="ahs-team-intro-desc">
            Our mission is to innovate and drive growth for businesses through
            strategic solutions.
          </p>
          <span className="ahs-underline" aria-hidden="true">
            <span />
          </span>
        </div>
      </section>

      <section className="ahs-team-section">
        <div className="ahs-container">
          <div className="ahs-team-grid">
            {teamMembers.map((member) => (
              <article key={member.name + member.role} className="ahs-team-card">
                <div className="ahs-team-photo">
                  <div className="ahs-team-photo-fallback" aria-hidden="true">
                    {member.initials}
                  </div>
                </div>
                <div className="ahs-team-body">
                  <div className="ahs-team-meta">
                    <h3 className="ahs-team-name">{member.name}</h3>
                    <p className="ahs-team-role">{member.role}</p>
                  </div>
                  <p className="ahs-team-desc">{member.description}</p>
                  <div className="ahs-team-social">
                    <div className="ahs-team-social-inner">
                      <a
                        href="mailto:info@minimglobal.com"
                        aria-label={`Email ${member.name}`}
                        className="ahs-team-social-link"
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="ahs-team-cta">
            <Link href="/about/leadership" className="ahs-btn">
              <span className="ahs-btn-text">View Executive Leadership</span>
              <ArrowRight size={16} className="ahs-btn-icon" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
