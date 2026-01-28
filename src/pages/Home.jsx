import AboutSection from '../components/home/AboutSection'
import BrandsSection from '../components/home/BrandsSection'
import CatalogSection from '../components/home/CatalogSection'
import HeroSection from '../components/home/HeroSection'
import NewsletterSection from '../components/home/NewsletterSection'
import ProductCategoriesSection from '../components/home/ProductCategoriesSection'
import { brandLogos, heroSlides } from '../components/home/homeData'

function Home() {
  return (
    <div className="pb-16">
      <HeroSection slides={heroSlides} />
      <ProductCategoriesSection />
      <AboutSection />
      <BrandsSection brands={brandLogos} />
      <CatalogSection />
      <NewsletterSection />
    </div>
  )
}

export default Home

