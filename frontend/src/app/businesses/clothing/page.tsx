import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import ClothingCatalog from '@/components/ClothingCatalog'
import ClothingOrderForm from '@/components/ClothingOrderForm'

export default function ClothingPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Minim Clothing"
        subtitle="Fashion design, family clothing, corporate wear, and custom apparel solutions."
        image="/images/Hero-5.jpg"
      />
      <ClothingCatalog />
      <div className="dp-form-band">
        <ClothingOrderForm />
      </div>
      <Footer />
    </main>
  )
}
