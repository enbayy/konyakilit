import AboutSection from '../components/home/AboutSection'
import BrandsSection from '../components/home/BrandsSection'
import CatalogSection from '../components/home/CatalogSection'
import HeroSection from '../components/home/HeroSection'
import NewsSection from '../components/home/NewsSection'
import NewsletterSection from '../components/home/NewsletterSection'
import { brandLogos, heroSlides, newsItems } from '../components/home/homeData'

function Home() {
  return (
    <div className="space-y-16 pb-16">
      <HeroSection slides={heroSlides} />
      <AboutSection />
      <BrandsSection brands={brandLogos} />
      <NewsSection items={newsItems} />
      <CatalogSection />
      <NewsletterSection />
    </div>
  )
}

export default Home

