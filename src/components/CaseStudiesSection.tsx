import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Landmark, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import amLawFirmBg from "@/assets/case-studies/am-law-firm.jpg";
import federalAgencyBg from "@/assets/case-studies/federal-agency.jpg";
import globalBankBg from "@/assets/case-studies/global-bank.jpg";

const CaseStudiesSection = () => {
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

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-[1920px]">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Real Results from Real Customers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            See how leading organizations are transforming their eDiscovery processes with Venio
          </p>
        </div>

        <Carousel className="w-full max-w-7xl mx-auto mb-12 group/carousel">
          <CarouselContent>
            {caseStudies.map((study, index) => (
              <CarouselItem key={index}>
                <Card className="border-2 border-muted-foreground/10 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white">
                  <div className="grid md:grid-cols-2 min-h-[600px]">
                    {/* Left Side - Stats with Image Background */}
                    <div className="relative overflow-hidden group">
                      <img 
                        src={study.bgImage} 
                        alt={study.title}
                        className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/85"></div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>
                      
                      <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 lg:p-12 text-white">
                        <div className="mb-8 relative">
                          <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl"></div>
                          <div className={`relative ${study.bgColor} w-20 h-20 rounded-3xl flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl transform hover:scale-110 transition-transform duration-300`}>
                            <study.icon className={`h-10 w-10 ${study.color}`} />
                          </div>
                        </div>
                        
                        <span className="text-sm font-semibold uppercase tracking-widest mb-6 text-white/95 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                          {study.category}
                        </span>
                        
                        <div className="text-center space-y-3">
                          <div className="relative inline-block">
                            <div className="absolute inset-0 bg-white/10 blur-2xl"></div>
                            <div className="relative text-7xl lg:text-8xl font-bold mb-2 bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent drop-shadow-2xl">
                              {study.stat}
                            </div>
                          </div>
                          <p className="text-xl lg:text-2xl font-body font-semibold text-white/95">{study.statLabel}</p>
                        </div>
                        
                        {/* Decorative line */}
                        <div className="mt-8 w-24 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full"></div>
                      </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="p-8 lg:p-12 xl:p-16 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50/30 relative">
                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full"></div>
                      
                      <div className="relative">
                        <div className="inline-block mb-6">
                          <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-4 py-2 rounded-full">
                            Success Story
                          </span>
                        </div>
                        
                        <h3 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                          {study.title}
                        </h3>
                        
                        <div className="w-16 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mb-8"></div>
                        
                        <p className="text-lg lg:text-xl text-muted-foreground font-body leading-relaxed mb-10 flex-grow">
                          {study.description}
                        </p>

                        <Button size="lg" className="group/btn shadow-lg hover:shadow-xl transition-all duration-300 text-base px-8">
                          Read Full Case Study
                          <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-8 h-14 w-14 border-2 hover:scale-110 transition-transform duration-300" />
          <CarouselNext className="right-8 h-14 w-14 border-2 hover:scale-110 transition-transform duration-300" />
        </Carousel>

        <div className="text-center">
          <button className="btn btn-secondary text-lg px-10 py-4">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
