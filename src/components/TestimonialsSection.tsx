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
      <section className="py-12 bg-gradient-to-b from-white to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
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
                <div className="glass rounded-2xl p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Text testimonial */}
                    <div className="space-y-8">
                      <div className="text-6xl text-accent/20 font-serif">"</div>
                      <p className="text-lg text-muted-foreground font-body leading-relaxed -mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamelit, sed do eiusmod tempor
                      </p>
                      <div>
                        <p className="font-bold text-primary text-lg">{testimonial.author}</p>
                        <p className="text-muted-foreground font-body">{testimonial.role}</p>
                        <p className="text-muted-foreground font-body">{testimonial.company}</p>
                      </div>
                    </div>

                    {/* Right side - Video placeholder */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden glass-dark">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-20 h-20 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-transform glow-accent-hover">
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
              className={`transition-all duration-700 ease-in-out flex-shrink-0 ${
                showVideo ? 'w-0 opacity-0' : 'w-full'
              }`}
            >
              {!showVideo && (
                <div className="glass rounded-2xl p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Stats */}
                    <div className="space-y-8">
                      {stats.map((stat, index) => (
                        <div key={index} className="glass-dark p-6 rounded-xl">
                          <div className="text-5xl font-bold text-accent mb-2">{stat.value}</div>
                          <p className="text-white/70 font-body">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <div className="space-y-8">
                      <div className="text-6xl text-accent/20 font-serif">"</div>
                      <p className="text-lg text-muted-foreground font-body leading-relaxed -mt-4">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xl">
                          {testimonial.initials}
                        </div>
                        <div>
                          <p className="font-bold text-primary text-lg">{testimonial.author}</p>
                          <p className="text-muted-foreground font-body">{testimonial.role}</p>
                          <p className="text-muted-foreground font-body">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
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
              onClick={() => setShowVideo(false)}
              disabled={!showVideo}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowVideo(true)}
              disabled={showVideo}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground font-body">
              Trusted by Industry Leaders
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 max-w-6xl mx-auto">
            {clientLogos.map((logo, index) => (
              <div 
                key={index} 
                className="opacity-100 transition-all duration-300"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-12 md:h-16 w-auto object-contain brightness-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
