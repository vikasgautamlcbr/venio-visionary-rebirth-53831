import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnnaChat } from "@/components/AnnaChat";
import { DataPointsSection } from "@/components/DataPointsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { ResourcesCarousel } from "@/components/ResourcesCarousel";
import InteractiveBackground from "@/components/InteractiveBackground";

const LawFirmSolutions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section with Chatbot */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <InteractiveBackground />
          
          <div className="relative z-10 container mx-auto px-6 py-24">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                How Venio Solves My Problem
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Get tailored solutions for law firm workflows, eDiscovery challenges, and document-heavy cases. Ask your question below and Anna will guide you instantly.
              </p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <AnnaChat />
            </div>
          </div>
        </section>

        {/* Data Points Section */}
        <DataPointsSection />

        {/* Case Studies Section */}
        <CaseStudiesSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Resources Section */}
        <ResourcesCarousel />
      </main>

      <Footer />
    </div>
  );
};

export default LawFirmSolutions;
