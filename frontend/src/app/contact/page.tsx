import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import ContactPageContent from '@/components/ContactPageContent'

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you! Whether you have questions about our services, want to collaborate, or simply need more information, our team at Minim Global Services is here to assist you."
        image="/images/Hero-2.jpeg"
      />
      <ContactPageContent />
      <Footer />
    </main>
  )
}
