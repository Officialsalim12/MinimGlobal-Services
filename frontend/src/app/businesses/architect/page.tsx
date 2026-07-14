import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import ArchitectServices from '@/components/ArchitectServices'
import ExpenditureTracker from '@/components/ExpenditureTracker'

export default function ArchitectPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Our Services"
        subtitle="Explore our architectural services and discover how we can bring your vision to life."
        image="/images/Hero-4.jpg"
      />
      <ArchitectServices />
      <div id="tracker" className="dp-form-band">
        <ExpenditureTracker />
      </div>
      <Footer />
    </main>
  )
}
