import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Landmark, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import amLawFirmBg from "@/assets/case-studies/am-law-firm.jpg";
import federalAgencyBg from "@/assets/case-studies/federal-agency.jpg";
import globalBankBg from "@/assets/case-studies/global-bank.jpg";
import { useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

const CaseStudiesSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const caseStudies = [
    {
      icon: Briefcase,
      title: "AmLaw 50 Firm",
      category: "Law Firm",
      stat: "65%",
      statLabel: "Cost Reduction",
      description: "Discover how a leading AmLaw 50 firm reduced eDiscovery costs by 65% while improving review accuracy and speed.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      bgImage: amLawFirmBg
    },
    {
      icon: Landmark,
      title: "Federal Agency",
      category: "Government",
      stat: "10x",
      statLabel: "Faster Processing",
      description: "Learn how a federal agency achieved 10x faster document processing while maintaining strict compliance requirements.",
      color: "text-accent",
      bgColor: "bg-accent/10",
      bgImage: federalAgencyBg
    },
    {
      icon: Building2,
      title: "Global Bank",
      category: "Corporation",
      stat: "99.9%",
      statLabel: "Accuracy Rate",
      description: "See how a global financial institution achieved 99.9% accuracy in document review with Venio's AI-powered platform.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      bgImage: globalBankBg
    }
  ];

  useState(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  });

  return (
    <section id="case-studies" className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Real Results from Real Customers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            See how leading organizations are transforming their eDiscovery processes with Venio
          </p>
        </div>

        <div className="relative">
          <Carousel 
            setApi={setApi} 
            className="w-full"
            opts={{
              loop: true,
              align: "start",
            }}
          >
            <CarouselContent>
              {caseStudies.map((study, index) => (
                <CarouselItem key={index}>
                  {/* Hover glow wrapper with zoom effect */}
                  <div className="relative group transition-transform duration-500 hover:scale-[1.03] transform-gpu will-change-transform">
                    {/* Animated glow on hover */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-accent via-primary to-accent rounded-3xl opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-700 group-hover:blur-3xl"></div>
                    
                    <Card className="relative overflow-hidden border-0 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] transition-all duration-500">
                      {/* Content wrapper that counter-scales to keep content fixed */}
                      <div className="grid md:grid-cols-2 aspect-[2/1] transition-transform duration-500 group-hover:scale-[0.9709] origin-center">
                        {/* Left Side - Image with Overlay */}
                        <div className="relative overflow-hidden">
                          <img 
                            src={study.bgImage} 
                            alt={study.title}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/85"></div>
                          
                          {/* Decorative Elements */}
                          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
                          
                          <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-white">
                            <div className="mb-6 relative">
                              <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl"></div>
                              <div className="relative bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl">
                                <study.icon className="h-8 w-8 text-white" />
                              </div>
                            </div>
                            
                            <span className="text-xs font-semibold uppercase tracking-widest mb-6 text-white/95 px-3 py-1.5 bg-white/10 rounded-full backdrop-blur-sm">
                              {study.category}
                            </span>
                            
                            <div className="text-center space-y-2">
                              <div className="relative inline-block">
                                <div className="absolute inset-0 bg-white/10 blur-2xl"></div>
                                <div className="relative text-6xl font-bold text-white drop-shadow-2xl">
                                  {study.stat}
                                </div>
                              </div>
                              <p className="text-lg font-body font-semibold text-white/95">{study.statLabel}</p>
                            </div>
                            
                            {/* Decorative line */}
                            <div className="mt-6 w-16 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full"></div>
                          </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="bg-background p-8 flex flex-col justify-center">
                          <div className="inline-block mb-4 w-fit">
                            <span className="text-xs font-bold uppercase tracking-widest text-accent">
                              Success Story
                            </span>
                          </div>
                          
                          <h3 className="text-3xl font-bold text-primary mb-4 leading-tight">
                            {study.title}
                          </h3>
                          
                          <div className="w-12 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mb-6"></div>
                          
                          <p className="text-base text-muted-foreground font-body leading-relaxed mb-8">
                            {study.description}
                          </p>

                          <Button className="group/btn shadow-lg hover:shadow-xl transition-all duration-300 w-fit">
                            Read Full Case Study
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Navigation Buttons */}
          <button
            onClick={() => api?.scrollPrev()}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed z-10"
            disabled={!api?.canScrollPrev()}
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>

          <button
            onClick={() => api?.scrollNext()}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed z-10"
            disabled={!api?.canScrollNext()}
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
        </div>

        <div className="text-center mt-12">
          <button className="btn btn-secondary text-lg px-10 py-4">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
