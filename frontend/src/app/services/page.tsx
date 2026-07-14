import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import BusinessDivisions from '@/components/BusinessDivisions'

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Our Services"
        subtitle="Choose a service to learn more:"
        image="/images/Hero-4.jpg"
      />
      <BusinessDivisions />
      <Footer />
    </main>
  )
}
