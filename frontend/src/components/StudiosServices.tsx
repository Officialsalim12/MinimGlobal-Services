'use client'

import Link from 'next/link'
import {
  Camera,
  Video,
  Mic,
  Calendar,
  Megaphone,
  Music,
  Image,
  Heart,
  Package,
  Clapperboard,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Camera,
    title: 'Photography',
    description:
      'We capture breathtaking moments with expert photography skills. High resolution photography, outdoor & studio shoots, wedding & event photography, and product photography for businesses.',
  },
  {
    icon: Image,
    title: 'Outdoor & Studio Shoots',
    description:
      'Our outdoor and studio shoots offer you the perfect combination of natural and controlled settings to capture stunning moments. Whether it\'s for portraits, lifestyle, or special events, we bring creativity and professionalism to every shot.',
  },
  {
    icon: Heart,
    title: 'Wedding & Event Photography',
    description:
      'Capture the joy and beauty of your most important events with our expert wedding and event photography. From intimate ceremonies to grand celebrations, we create timeless memories.',
  },
  {
    icon: Package,
    title: 'Product Photography for Businesses',
    description:
      'Bring your products to life with high quality product photography that showcases their best features. Whether you\'re selling online or need promotional images, we offer professional photography services for businesses of all sizes.',
  },
  {
    icon: Clapperboard,
    title: 'Professional Videography Services',
    description:
      'We bring your ideas to life through high quality video production, from commercials and documentaries to music videos and corporate films. Our experienced videographers use state of the art equipment to capture stunning visuals that tell compelling stories.',
  },
  {
    icon: Video,
    title: 'Animation & Motion Graphics',
    description:
      'We create engaging animations and motion graphics to bring your ideas to life.',
  },
  {
    icon: Mic,
    title: 'Audio Production',
    description:
      'Experience professional audio engineering, voiceovers, and high quality music production at Minim Studios. Top notch audio recording and editing.',
  },
  {
    icon: Calendar,
    title: 'Event Planning',
    description: 'Organizing and managing events with precision.',
  },
  {
    icon: Megaphone,
    title: 'Advertisement',
    description: 'Boost your brand visibility through strategic ads.',
  },
  {
    icon: Music,
    title: 'Live Jazz Band',
    description: 'Experience live jazz music for special occasions.',
  },
]

export default function StudiosServices() {
  return (
    <section className="dh-impact dp-section">
      <div className="dh-container">
        <div className="dh-impact-grid">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="dh-impact-card">
                <div className="dh-impact-overlay" aria-hidden="true" />
                <div className="dh-impact-icon">
                  <Icon size={48} strokeWidth={1.25} />
                </div>
                <div className="dh-impact-content">
                  <h3 className="dh-impact-title">{service.title}</h3>
                  <p className="dh-impact-desc">{service.description}</p>
                </div>
                <div className="dh-impact-btn-wrap">
                  <Link href="#booking" className="dh-impact-btn">
                    Book a Session
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
