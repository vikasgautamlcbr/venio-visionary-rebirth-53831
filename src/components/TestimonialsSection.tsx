import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Play } from "lucide-react";
import amentumLogo from "@/assets/clients/amentum.webp";
import arrayLogo from "@/assets/clients/array.webp";
import cdsLogo from "@/assets/clients/cds.webp";
import consilioLogo from "@/assets/clients/consilio.webp";
import eparioLogo from "@/assets/clients/epario.webp";
import haugLogo from "@/assets/clients/haug-partners.webp";
import nixonLogo from "@/assets/clients/nixon-peabody.webp";
import proteusLogo from "@/assets/clients/proteus.webp";

const TestimonialsSection = () => {
  const [showVideo, setShowVideo] = useState(true);

  const stats = [
    { value: "10x", label: "Faster document review" },
    { value: "70%", label: "Cost savings achieved" },
    { value: "99.9%", label: "Uptime guarantee" }
  ];

  const testimonial = {
    text: "Venio transformed our eDiscovery process completely. The AI-powered automation reduced our review time from weeks to days, while maintaining accuracy. The on-premises deployment gave us total control over sensitive data, which was crucial for our compliance requirements. We've achieved significant cost savings and our team couldn't be happier with the intuitive interface.",
    author: "Sarah Mitchell",
    role: "Director of Legal Operations",
    company: "Nixon Peabody LLP",
    initials: "SM"
  };

  const clientLogos = [
    { src: amentumLogo, alt: "Amentum" },
    { src: arrayLogo, alt: "Array" },
    { src: cdsLogo, alt: "CDS" },
    { src: consilioLogo, alt: "Consilio" },
    { src: eparioLogo, alt: "Epario" },
    { src: haugLogo, alt: "Haug Partners" },
    { src: nixonLogo, alt: "Nixon Peabody" },
    { src: proteusLogo, alt: "Proteus" }
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-background to-background/95 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.08),transparent_60%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Leading Legal Teams
              <br />
              Worldwide
            </h2>
          </div>

          <div className="max-w-7xl mx-auto relative">
          <div className="flex gap-8 overflow-hidden">
            {/* Video Testimonial */}
            <div 
              className={`transition-all duration-700 ease-in-out ${
                showVideo ? 'w-full' : 'w-0 opacity-0'
              }`}
            >
              {showVideo && (
                <div className="glass-dark backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Text testimonial */}
                    <div className="space-y-8">
                      <div className="text-6xl text-accent/40 font-serif">"</div>
                      <p className="text-lg text-white/80 font-body leading-relaxed -mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamelit, sed do eiusmod tempor
                      </p>
                      <div>
                        <p className="font-bold text-white text-lg">{testimonial.author}</p>
                        <p className="text-white/70 font-body">{testimonial.role}</p>
                        <p className="text-white/70 font-body">{testimonial.company}</p>
                      </div>
                    </div>

                    {/* Right side - Video placeholder */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden glass border border-white/20 shadow-lg">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-20 h-20 rounded-full bg-gradient-to-r from-accent to-secondary flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-accent/30">
                          <Play className="w-8 h-8 text-white ml-1" fill="white" />
                        </button>
                      </div>
                      {/* Placeholder for actual video */}
                      <div className="w-full h-full bg-gradient-to-br from-primary/50 to-secondary/50"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Written Testimonials */}
            <div 
              className={`transition-all duration-700 ease-in-out ${
                showVideo ? 'w-0 opacity-0' : 'w-full'
              }`}
            >
              {!showVideo && (
                <div className="glass-dark backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent mb-2">
                          {stat.value}
                        </div>
                        <p className="text-white/70 font-body">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowVideo(true)}
              className={`rounded-full glass border border-white/20 hover:border-accent/50 transition-all ${
                showVideo 
                  ? 'bg-gradient-to-r from-accent to-secondary text-white border-accent shadow-lg shadow-accent/20' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowVideo(false)}
              className={`rounded-full glass border border-white/20 hover:border-accent/50 transition-all ${
                !showVideo 
                  ? 'bg-gradient-to-r from-accent to-secondary text-white border-accent shadow-lg shadow-accent/20' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 border-t border-white/10 bg-background/50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
            
            {/* Infinite scrolling logos */}
            <div className="flex gap-16 animate-slide-left">
              {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="h-12 w-auto object-contain"
                    style={{ minWidth: '120px' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
