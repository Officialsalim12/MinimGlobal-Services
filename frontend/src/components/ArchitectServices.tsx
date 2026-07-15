'use client'

import Link from 'next/link'
import {
  Building,
  Home,
  Landmark,
  Briefcase,
  Clipboard,
  Wrench,
  DollarSign,
  Map,
  Paintbrush,
  Trees,
  Building2,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Residential Design',
    description:
      "We create innovative, Modern Designs prior to the task at hand inorder to satisfy our client's Style and Taste.",
  },
  {
    icon: Building,
    title: 'Construction',
    description:
      'We provide a wide range of construction services in which safety, integrity, Quality and Professionalism is our greatest interest in achieving great Results.',
  },
  {
    icon: Paintbrush,
    title: 'Renovation',
    description:
      'Revamp and transform your space with our top quality renovation services that blend design and functionality.',
  },
  {
    icon: Landmark,
    title: 'Real Estate',
    description:
      'We Specialize in Property Sales and Rentals, Property Management, Assessments, valuations, Home Insurance and Interior Design. Building Dreams, Brick by Brick. Real estate is more than just buying and selling properties, it\'s about creating homes, opportunities, and lasting legacies. Every foundation laid, every space designed, and every investment made shapes the future. Whether you\'re building, buying, or investing, remember: real estate isn\'t just about properties, it\'s about possibilities.',
  },
  {
    icon: Briefcase,
    title: 'Consultancy',
    description:
      'Strategic guidance to help you navigate architecture, construction, and real estate projects.',
  },
  {
    icon: Clipboard,
    title: 'Development',
    description:
      'We help Clients evaluate Potential Development Opportunities focusing on Client Objectives using Innovative planning solutions.',
  },
  {
    icon: Building2,
    title: 'Urban Planning',
    description:
      'we create sustainable, efficient, and vibrant spaces for communities and cities to thrive',
  },
  {
    icon: Trees,
    title: 'Landscape Design',
    description:
      'Creating green, aesthetic, and functional outdoor spaces.',
  },
  {
    icon: Wrench,
    title: 'Project Management',
    description:
      'We provide services Specialize in Planning, Coordinating and Executing Projects according to Specific requirements and constraints. Planning & Strategy: Strategic planning to guide the project through each phase seamlessly. Team Management: Coordinating teams for the effective execution of the project. Quality Control: Ensuring top quality standards are maintained throughout the project. Budgeting & Cost Management: Maintaining the project\'s budget and ensuring cost efficiency.',
  },
  {
    icon: DollarSign,
    title: 'Track Your Expenditure',
    description:
      'We Track all Expenditure Prior to Workdone with precision, ensuring Transparency in your construction Project.',
  },
  {
    icon: Map,
    title: 'Land Survey',
    description:
      'We offer precise Land Boundary Survey and Topographical level Survey Solutions to establish accurate property boundaries and establish differences in ground level.',
  },
]

export default function ArchitectServices() {
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
                  <Link
                    href={
                      service.title === 'Track Your Expenditure'
                        ? '#tracker'
                        : '/contact'
                    }
                    className="dh-impact-btn"
                  >
                    {service.title === 'Track Your Expenditure'
                      ? 'Track Expenditure'
                      : 'Contact Us'}
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
