import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import amentum from "@/assets/clients/amentum.webp";
import consilio from "@/assets/clients/consilio.webp";
import array from "@/assets/clients/array.webp";
import haugPartners from "@/assets/clients/haug-partners.webp";
import nixonPeabody from "@/assets/clients/nixon-peabody.webp";
import proteus from "@/assets/clients/proteus.webp";
import cds from "@/assets/clients/cds.webp";
import epario from "@/assets/clients/epario.webp";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const rotatingTexts = ["Effortless eDiscovery", "Unified Platform", "Total Control"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const clientLogos = [
    { name: "Amentum", src: amentum },
    { name: "Consilio", src: consilio },
    { name: "Array", src: array },
    { name: "Haug Partners", src: haugPartners },
    { name: "Nixon Peabody", src: nixonPeabody },
    { name: "Proteus", src: proteus },
    { name: "CDS", src: cds },
    { name: "Epario", src: epario },
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-start overflow-hidden gradient-animated pt-32 pb-32">
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

      <div className="container mx-auto px-4 relative z-10 flex-1 flex items-center">
        <div className="max-w-4xl mx-auto text-center w-full">
          {/* Hero Content */}
          <div className="animate-fade-in-scale">
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-2 glass-dark px-6 py-3 rounded-full mb-8 pulse-glow animate-slide-up">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">AI-Powered eDiscovery Platform</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Meet Venio
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-accent animate-shimmer inline-block min-w-[400px] md:min-w-[600px]">
                {rotatingTexts[currentText]}
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-white/90 mb-8 max-w-3xl mx-auto font-body leading-relaxed">
              The only AI-powered, cloud and on-premises eDiscovery software that's intuitive,
              easy to adopt, and designed to reduce costs - all in one unified eDiscovery platform.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button className="btn btn-primary text-lg px-10 py-4 group">
                <span className="flex items-center justify-center">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
              <button className="btn btn-secondary text-lg px-10 py-4">
                Take a Product Tour
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-white/80 text-sm font-body mb-16">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-white/50"></div>
              <span>No steep learning curve. Full flexibility, your way.</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-white/50"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Client Logos Section - Full Width */}
      <div className="absolute bottom-20 left-0 right-0 z-20">
        <div className="text-center mb-8">
          <p className="text-white/50 text-xs uppercase tracking-[0.25em] font-medium">
            Trusted by Leading Legal Teams
          </p>
        </div>
        
        <div className="relative overflow-hidden py-6 border-y border-white/10">
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
          
          {/* Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary via-primary/50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary via-primary/50 to-transparent z-10 pointer-events-none"></div>
          
          {/* Logo Carousel */}
          <div className="flex gap-20 animate-slide-left">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center group cursor-pointer"
              >
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                  style={{ minWidth: '160px', maxWidth: '220px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Wave with Gradient */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full drop-shadow-2xl"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
