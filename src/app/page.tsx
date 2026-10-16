import { Header } from "@/components/site/header"
import { Hero } from "@/components/site/hero"
import { BrandStrip, Categories, Services } from "@/components/site/sections"
import {
  ProductSection,
  ReviewsSection,
} from "@/components/site/products"
import { Footer } from "@/components/site/footer"
import { CartDrawer } from "@/components/site/cart-drawer"
import { MobileMenu } from "@/components/site/mobile-menu"
import { products } from "@/lib/catalog"

export default function Home() {
  const men = products.filter((p) => p.category === "men").slice(0, 12)
  const ladies = products.filter((p) => p.category === "ladies").slice(0, 8)
  const couple = products.filter((p) => p.category === "couple").slice(0, 4)
  const accessories = products.filter((p) => p.category === "accessories").slice(0, 4)
  const gifts = products.filter((p) => p.category === "gifts").slice(0, 2)
  const newArrivals = products.filter((p) => p.badge === "new" || p.category === "men").slice(0, 8)
  const hotDeals = products.filter((p) => p.badge === "hot" || (!!p.oldPrice && (p.oldPrice - p.price) / p.oldPrice >= 0.2)).slice(0, 8)
  const sale = products.filter((p) => !!p.oldPrice).slice(0, 8)

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <BrandStrip />
        <Categories />
        <Services />

        <ProductSection
          id="men"
          title="Men's Watch"
          subtitle="Premium timepieces for the modern gentleman"
          products={men}
        />

        <ProductSection
          id="ladies"
          title="Ladies Watch"
          subtitle="Elegant watches crafted for refined taste"
          products={ladies}
        />

        <ProductSection
          id="couple"
          title="Couple Watch"
          subtitle="Matching timepieces for you and your partner"
          products={couple}
        />

        <ProductSection
          id="new"
          title="New Arrival"
          subtitle="Fresh additions to our collection"
          products={newArrivals}
        />

        <ProductSection
          id="hot"
          title="Hot Deals"
          subtitle="Limited time offers - grab them before they're gone"
          products={hotDeals}
        />

        <ProductSection
          id="accessories"
          title="Accessories"
          subtitle="Watch organizers, straps & winders"
          products={accessories}
        />

        <ProductSection
          id="gifts"
          title="Gifts"
          subtitle="Perfect gift sets for your loved ones"
          products={gifts}
        />

        <ReviewsSection />

        <ProductSection
          id="sale"
          title="Sale"
          subtitle="Up to 30% off on authentic premium watches"
          products={sale}
        />
      </main>
      <Footer />

      <CartDrawer />
      <MobileMenu />
    </div>
  )
}
