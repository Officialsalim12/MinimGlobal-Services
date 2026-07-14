'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Camera, Utensils, Building, Shirt } from 'lucide-react'

const divisions = [
  {
    icon: Camera,
    title: 'Minim Studios',
    description: 'Media production, photography, videography, audio production, and event planning services',
    link: '/services/studios',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Utensils,
    title: 'Minim Food',
    description: 'Premium food services, catering, and culinary experiences for all occasions',
    link: '/services/food',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Building,
    title: 'Minim Architect Designers & Engineers',
    description: 'Comprehensive architectural design, construction, real estate, and engineering services',
    link: '/services/architect',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Shirt,
    title: 'Minim Clothing',
    description: 'Fashion design, family clothing, corporate wear, and custom apparel solutions',
    link: '/services/clothing',
    color: 'from-purple-500 to-purple-600',
  },
]

export default function ServiceDivisions() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {divisions.map((division, index) => (
            <motion.div
              key={division.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={division.link}>
                <div className="card p-8 h-full hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${division.color} flex items-center justify-center mb-6`}>
                    <division.icon className="text-white" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-dark mb-4">
                    {division.title}
                  </h3>
                  <p className="text-text-medium text-lg">
                    {division.description}
                  </p>
                  <div className="mt-6 text-primary-accent font-semibold inline-flex items-center gap-2">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
