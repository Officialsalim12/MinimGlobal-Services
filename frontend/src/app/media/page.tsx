import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import BlogPosts from '@/components/BlogPosts'
import LiveStream from '@/components/LiveStream'

export default function MediaPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Media Hub"
        subtitle="Latest news, press releases, and updates from Minim Global Services."
        image="/images/Hero-6.jpg"
      />
      <div className="dp-section-muted">
        <LiveStream />
      </div>
      <BlogPosts
        title="Press Releases and News"
        subtitle="Stay updated with the latest insights from Minim Global Services."
      />
      <Footer />
    </main>
  )
}
