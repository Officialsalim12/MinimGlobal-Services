import Hero from '@/components/Hero'
import HomeStats from '@/components/HomeStats'
import ServiceCards from '@/components/ServiceCards'
import PressReleases from '@/components/PressReleases'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ImpactSection from '@/components/ImpactSection'
import HomeReports from '@/components/HomeReports'
import HomeSustainability from '@/components/HomeSustainability'

export default function Home() {
  return (
    <main className="dh">
      <Navbar />
      <Hero />
      <HomeStats />
      <ImpactSection />
      <PressReleases />
      <ServiceCards />
      <HomeReports />
      <HomeSustainability />
      <Footer />
    </main>
  )
}
