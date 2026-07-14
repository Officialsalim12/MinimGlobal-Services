import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import FoodMenu from '@/components/FoodMenu'
import OrderForm from '@/components/OrderForm'

export default function FoodPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Our Services"
        subtitle="Premium food services and culinary experiences for everyday dining and special occasions."
        image="/images/Hero-3.jpg"
      />
      <FoodMenu />
      <div className="dp-form-band">
        <OrderForm />
      </div>
      <Footer />
    </main>
  )
}
