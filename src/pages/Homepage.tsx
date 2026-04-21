import { Navbar } from '../components/navbar'
import { Hero } from '../components/hero'
import { Categories } from '../components/categories'
import { FeaturedProducts } from '../components/featured-products'
import { FlashSale } from '../components/flash-sale'
import { Recommended } from '../components/recommended'
import { TrustSignals } from '../components/trust-signals'
import { Newsletter } from '../components/newsletter'
import { Footer } from '../components/footer'

function Homepage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <FlashSale />
        <Recommended />
        <TrustSignals />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default Homepage
