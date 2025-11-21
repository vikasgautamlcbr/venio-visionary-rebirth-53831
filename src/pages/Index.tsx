import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import SecuritySection from "@/components/SecuritySection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TestimonialsSection />
        {/* Experience Venio in Action - to be added */}
        <CaseStudiesSection />
        <SecuritySection />
        {/* What Challenges section - to be added */}
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
