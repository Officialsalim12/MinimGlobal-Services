'use client'

import { Youtube, Play, Radio, Users } from 'lucide-react'

export default function LiveStream() {
  return (
    <section className="dp-section">
      <div className="dh-container">
        <div className="dh-section-head dh-section-head-center">
          <h2 className="dh-section-title">Watch Our Live Stream</h2>
          <p className="dh-section-sub">
            Stay tuned for live updates and broadcasts from Minim Global Services.
          </p>
          <span className="ahs-underline" aria-hidden="true">
            <span />
          </span>
        </div>

        <div className="dp-live-stage">
          <Youtube size={64} />
          <h3>Live Stream Coming Soon</h3>
          <p>Stay tuned for live updates and broadcasts from Minim Global Services.</p>
        </div>

        <div className="dh-impact-grid" style={{ marginTop: 40 }}>
          {[
            {
              icon: Play,
              title: 'Live Events',
              description: 'Watch live coverage of our events and ceremonies.',
            },
            {
              icon: Radio,
              title: 'Live Streaming',
              description: 'Broadcast events in real time with high quality.',
            },
            {
              icon: Users,
              title: 'Stay Connected',
              description: 'Stay tuned for live updates and broadcasts from Minim Global Services.',
            },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="dh-impact-card">
                <div className="dh-impact-icon">
                  <Icon size={40} strokeWidth={1.25} />
                </div>
                <div className="dh-impact-content">
                  <h3 className="dh-impact-title">{item.title}</h3>
                  <p className="dh-impact-desc">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
