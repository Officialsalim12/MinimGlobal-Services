import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import StudiosServices from '@/components/StudiosServices'
import PortfolioGallery from '@/components/PortfolioGallery'
import BookingForm from '@/components/BookingForm'

export default function StudiosPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Studio Services"
        subtitle="Explore our professional studio services"
        image="/images/Hero-1.jpg"
      />
      <StudiosServices />
      <div className="dp-section-muted">
        <PortfolioGallery />
      </div>
      <div id="booking" className="dp-form-band">
        <BookingForm service="Minim Studios" />
      </div>
      <Footer />
    </main>
  )
}
