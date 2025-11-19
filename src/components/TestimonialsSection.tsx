import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import amentumLogo from "@/assets/clients/amentum.webp";
import arrayLogo from "@/assets/clients/array.webp";
import cdsLogo from "@/assets/clients/cds.webp";
import consilioLogo from "@/assets/clients/consilio.webp";
import eparioLogo from "@/assets/clients/epario.webp";
import haugLogo from "@/assets/clients/haug-partners.webp";
import nixonLogo from "@/assets/clients/nixon-peabody.webp";
import proteusLogo from "@/assets/clients/proteus.webp";

const TestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const stats = [
    { value: "10x", label: "Faster document review" },
    { value: "70%", label: "Cost savings achieved" },
    { value: "99.9%", label: "Uptime guarantee" }
  ];

  const testimonials = [
    {
      text: "Venio transformed our eDiscovery process completely. The AI-powered automation reduced our review time from weeks to days, while maintaining accuracy. The on-premises deployment gave us total control over sensitive data, which was crucial for our compliance requirements.",
      author: "Sarah Mitchell",
      role: "Director of Legal Operations",
      company: "Nixon Peabody LLP",
      initials: "SM"
    },
    {
      text: "In my experience, law firms and their clients avoid some of the most damaging discovery mistakes by managing the legal hold process effectively. This is true for individual cases and across matters. Leveraging technology to automate a well-thought-through workflow helps bring consistency and discipline to the hold process in addition to gains in productivity. That is why I like Venio's focus on its new integrated Legal Hold module.",
      author: "John Anderson",
      role: "Chief Legal Officer",
      company: "Global Corp",
      initials: "JA"
    },
    {
      text: "The platform's intuitive interface and powerful features have revolutionized how we handle document review. We've seen incredible improvements in efficiency and cost savings across all our cases.",
      author: "Emily Chen",
      role: "Managing Partner",
      company: "Tech Legal Associates",
      initials: "EC"
    }
  ];

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);


  return (
    <>
      <section className="py-24 bg-gradient-to-b from-white to-muted">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Trusted by Leading Legal Teams
              <br />
              Worldwide
            </h2>
          </div>

          <div className="max-w-6xl mx-auto px-16 relative">
            <Carousel
              setApi={setApi}
              opts={{
                loop: true,
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {/* Slide 1: Video Testimonial */}
                <CarouselItem>
                  <div className="glass rounded-2xl p-8 md:p-12 min-h-[500px]">
                    <div className="grid md:grid-cols-2 gap-12 items-center h-full">
                      {/* Left side - Text testimonial */}
                      <div className="space-y-8">
                        <div className="text-6xl text-accent/20 font-serif">"</div>
                        <p className="text-lg text-muted-foreground font-body leading-relaxed -mt-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamelit, sed do eiusmod tempor
                        </p>
                        <div>
                          <p className="font-bold text-primary text-lg">{testimonials[0].author}</p>
                          <p className="text-muted-foreground font-body">{testimonials[0].role}</p>
                          <p className="text-muted-foreground font-body">{testimonials[0].company}</p>
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
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Slides 2-4: Written Testimonials */}
                {testimonials.map((testimonial, idx) => (
                  <CarouselItem key={idx}>
                    <div className="glass rounded-2xl p-8 md:p-12 min-h-[500px]">
                      <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Stats - Left side */}
                        <div className="space-y-6 max-w-[90%] mx-auto md:mx-0">
                          {stats.map((stat, index) => (
                            <div key={index} className="bg-gradient-to-br from-primary/90 to-accent/80 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
                              <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                              <p className="text-white/90 font-body text-sm">{stat.label}</p>
                            </div>
                          ))}
                        </div>

                        {/* Testimonial Text - Right side */}
                        <div className="space-y-8">
                          <div className="text-6xl text-accent/20 font-serif">"</div>
                          <p className="text-lg text-muted-foreground font-body leading-relaxed -mt-4 italic">
                            {testimonial.text}
                          </p>
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
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
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Enhanced Navigation Buttons - Outside */}
              <button
                onClick={() => api?.scrollPrev()}
                className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 hover:scale-110 flex items-center justify-center transition-all duration-300 z-20"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6 text-primary" />
              </button>

              <button
                onClick={() => api?.scrollNext()}
                className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 hover:scale-110 flex items-center justify-center transition-all duration-300 z-20"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6 text-primary" />
              </button>
            </Carousel>

            {/* Enhanced Dot indicators at bottom */}
            <div className="flex justify-center gap-2 mt-8">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === current 
                      ? "w-10 bg-primary shadow-lg shadow-primary/50" 
                      : "w-2.5 bg-primary/30 hover:bg-primary/50 hover:w-6"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Logo Trail - Below scroll indicator */}
        <div className="mt-16 overflow-hidden py-6">
          <div className="flex gap-24 animate-scroll">
            {/* First set of logos */}
            {[
              { src: amentumLogo, alt: "Amentum" },
              { src: arrayLogo, alt: "Array" },
              { src: cdsLogo, alt: "CDS" },
              { src: consilioLogo, alt: "Consilio" },
              { src: eparioLogo, alt: "Epario" },
              { src: haugLogo, alt: "Haug Partners" },
              { src: nixonLogo, alt: "Nixon Peabody" },
              { src: proteusLogo, alt: "Proteus" }
            ].map((logo, index) => (
              <div 
                key={`first-${index}`} 
                className="flex-shrink-0"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-8 md:h-10 w-auto object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[
              { src: amentumLogo, alt: "Amentum" },
              { src: arrayLogo, alt: "Array" },
              { src: cdsLogo, alt: "CDS" },
              { src: consilioLogo, alt: "Consilio" },
              { src: eparioLogo, alt: "Epario" },
              { src: haugLogo, alt: "Haug Partners" },
              { src: nixonLogo, alt: "Nixon Peabody" },
              { src: proteusLogo, alt: "Proteus" }
            ].map((logo, index) => (
              <div 
                key={`second-${index}`} 
                className="flex-shrink-0"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-8 md:h-10 w-auto object-contain"
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
