'use client'
import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'

const teamMembers = [
  {
    id: 1,
    name: 'John Kamara',
    role: 'CEO & Founder',
    description: 'Visionary leader with 15+ years in business management',
    imageUrl: '/images/team/john.jpg',
    linkedinUrl: 'https://linkedin.com',
    email: 'john@minimglobal.com',
  },
  {
    id: 2,
    name: 'Sarah Conteh',
    role: 'Creative Director',
    description: 'Award winning creative professional in media and design',
    imageUrl: '/images/team/sarah.jpg',
    linkedinUrl: 'https://linkedin.com',
    email: 'sarah@minimglobal.com',
  },
  {
    id: 3,
    name: 'Michael Bangura',
    role: 'Technical Lead',
    description: 'Expert in architecture and engineering solutions',
    imageUrl: '/images/team/michael.jpg',
    linkedinUrl: 'https://linkedin.com',
    email: 'michael@minimglobal.com',
  },
  {
    id: 4,
    name: 'Aminata Turay',
    role: 'Operations Manager',
    description: 'Efficient operations specialist with logistics expertise',
    imageUrl: '/images/team/aminata.jpg',
    linkedinUrl: 'https://linkedin.com',
    email: 'aminata@minimglobal.com',
  },
  {
    id: 5,
    name: 'David Sesay',
    role: 'Marketing Director',
    description: 'Digital marketing and brand strategy expert',
    imageUrl: '/images/team/david.jpg',
    linkedinUrl: 'https://linkedin.com',
    email: 'david@minimglobal.com',
  },
  {
    id: 6,
    name: 'Fatmata Koroma',
    role: 'Finance Manager',
    description: 'Financial planning and expenditure tracking specialist',
    imageUrl: '/images/team/fatmata.jpg',
    linkedinUrl: 'https://linkedin.com',
    email: 'fatmata@minimglobal.com',
  },
  {
    id: 7,
    name: 'Ibrahim Mansaray',
    role: 'Food Services Head',
    description: 'Culinary expert with hospitality management background',
    imageUrl: '/images/team/ibrahim.jpg',
    linkedinUrl: 'https://linkedin.com',
    email: 'ibrahim@minimglobal.com',
  },
  {
    id: 8,
    name: 'Mariama Bah',
    role: 'Fashion Designer',
    description: 'Creative fashion designer for Minim Clothing',
    imageUrl: '/images/team/mariama.jpg',
    linkedinUrl: 'https://linkedin.com',
    email: 'mariama@minimglobal.com',
  },
  {
    id: 9,
    name: 'Samuel Bio',
    role: 'Project Manager',
    description: 'Experienced in construction and project oversight',
    imageUrl: '/images/team/samuel.jpg',
    linkedinUrl: 'https://linkedin.com',
    email: 'samuel@minimglobal.com',
  },
  {
    id: 10,
    name: 'Isata Kamara',
    role: 'Client Relations',
    description: 'Dedicated to exceptional customer service and relations',
    imageUrl: '/images/team/isata.jpg',
    linkedinUrl: 'https://linkedin.com',
    email: 'isata@minimglobal.com',
  },
]

export default function TeamSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">The talented professionals behind Minim Global Services</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-primary-accent overflow-hidden bg-gray-200">
                <div className="w-full h-full flex items-center justify-center text-primary-dark text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary-dark text-center mb-2">
                {member.name}
              </h3>
              <p className="text-primary-accent text-center font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-text-medium text-center text-sm mb-4">
                {member.description}
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-dark hover:text-primary-accent transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="text-primary-dark hover:text-primary-accent transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
