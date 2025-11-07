import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FeaturesSection from "@/components/FeaturesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import SecuritySection from "@/components/SecuritySection";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <TestimonialsSection />
        <FeaturesSection />
        <CaseStudiesSection />
        <SecuritySection />
        <CTABanner />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
