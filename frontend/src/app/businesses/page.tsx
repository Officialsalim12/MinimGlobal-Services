import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import BusinessDivisions from '@/components/BusinessDivisions'

export default function BusinessesPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Our Businesses"
        subtitle="Driving growth across media, food, architecture, and apparel to build a prosperous future for Sierra Leone."
        image="/images/Hero-4.jpg"
      />
      <BusinessDivisions />
      <Footer />
    </main>
  )
}
