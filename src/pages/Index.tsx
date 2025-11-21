import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InteractiveDemosSection from "@/components/InteractiveDemosSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import SecuritySection from "@/components/SecuritySection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TestimonialsSection />
        <InteractiveDemosSection />
        <CaseStudiesSection />
        <ProblemSolutionSection />
        <SecuritySection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
