'use client'

import Link from 'next/link'
import { Clock, ChevronRight } from 'lucide-react'

const posts = [
  {
    id: 1,
    title: 'How Digital Marketing is Transforming Businesses',
    date: 'January 15, 2024',
    excerpt:
      'Discover how digital marketing strategies can help brands expand their reach and increase revenue.',
    image: '/images/Hero-6.jpg',
    link: '/media',
  },
  {
    id: 2,
    title: 'The Importance of Media Consultancy',
    date: 'January 10, 2024',
    excerpt:
      'Learn why media consultancy is essential for businesses looking to enhance their brand identity.',
    image: '/images/Hero-2.jpeg',
    link: '/media',
  },
  {
    id: 3,
    title: 'Driving Business Growth through Innovation',
    date: 'January 5, 2024',
    excerpt:
      'Explore the latest innovations and how they can drive growth in businesses across various sectors.',
    image: '/images/Hero-5.jpg',
    link: '/media',
  },
]

type BlogPostsProps = {
  title?: string
  subtitle?: string
  limit?: number
}

export default function BlogPosts({
  title = 'Our Blog',
  subtitle = 'Stay updated with the latest insights from Minim Global Services.',
  limit,
}: BlogPostsProps) {
  const items = typeof limit === 'number' ? posts.slice(0, limit) : posts

  return (
    <section className="dh-press dp-section-flush">
      <div className="dh-container">
        <div className="dh-section-head dh-section-head-center">
          <h2 className="dh-section-title">{title}</h2>
          <p className="dh-section-sub">{subtitle}</p>
          <span className="ahs-underline" aria-hidden="true">
            <span />
          </span>
        </div>

        <div className="dh-press-grid">
          {items.map((post) => (
            <article key={post.id} className="dh-press-card">
              <div
                className="dh-press-image"
                style={{ backgroundImage: `url('${post.image}')` }}
              />
              <div className="dh-press-body">
                <div className="dh-press-inner">
                  <div className="dh-press-date">
                    <Clock size={15} />
                    {post.date}
                  </div>
                  <h3 className="dh-press-title-hover">
                    <Link href={post.link}>{post.title}</Link>
                  </h3>
                  <p className="dh-press-excerpt">{post.excerpt}</p>
                </div>
                <h3 className="dh-press-title">
                  <Link href={post.link}>{post.title}</Link>
                </h3>
                <Link
                  href={post.link}
                  className="dh-press-more"
                  aria-label={`Read more: ${post.title}`}
                >
                  <ChevronRight size={24} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
