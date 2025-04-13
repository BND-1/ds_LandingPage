import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ProductsSection } from "@/components/products-section"
import { CasesSection } from "@/components/cases-section"
import { DeploymentGuide } from "@/components/deployment-guide"
import { AfterSales } from "@/components/after-sales"
import { PaymentMethods } from "@/components/payment-methods"
// import { DeliveryTimeline } from "@/components/delivery-timeline"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <CasesSection />
      <DeploymentGuide />
      <AfterSales />
      <PaymentMethods />
      {/* <DeliveryTimeline /> */}
      <Footer />
    </div>
  )
}

