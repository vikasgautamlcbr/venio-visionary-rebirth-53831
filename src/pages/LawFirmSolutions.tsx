import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnnaChat } from "@/components/AnnaChat";
import { DataPointsSection } from "@/components/DataPointsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { ResourcesCarousel } from "@/components/ResourcesCarousel";
import ClientLogosSection from "@/components/ClientLogosSection";

const LawFirmSolutions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section with Chatbot */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden gradient-animated">
          {/* Dynamic Animated Background */}
          <div className="absolute inset-0">
            {/* Large Glowing Orbs */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-32 right-10 w-[500px] h-[500px] bg-accent/25 rounded-full blur-3xl float-delayed"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            
            {/* Floating Geometric Shapes */}
            <div className="absolute top-40 right-20 w-20 h-20 border-2 border-white/20 rounded-lg animate-spin-slow"></div>
            <div className="absolute bottom-40 left-32 w-16 h-16 border-2 border-accent/30 rotate-45 animate-bounce-slow"></div>
            <div className="absolute top-1/3 left-20 w-12 h-12 bg-secondary/20 rounded-full animate-float"></div>
            <div className="absolute bottom-1/3 right-40 w-24 h-24 border-2 border-white/10 rounded-full animate-pulse"></div>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary/80"></div>
          
          <div className="relative z-10 container mx-auto px-6 py-24">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                How Venio Solves My Problem
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
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

        {/* Client Logos Section */}
        <ClientLogosSection />

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
