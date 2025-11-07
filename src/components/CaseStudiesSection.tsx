import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Landmark, Briefcase } from "lucide-react";
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

        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-[1920px] mx-auto">
          {caseStudies.map((study, index) => (
            <Card 
              key={index}
              className="glass rounded-3xl border-2 border-muted-foreground/10 hover:border-secondary/30 overflow-hidden glow-on-hover hover:shadow-xl transition-all duration-500 group hover:scale-105 cursor-pointer"
            >
              <div className="flex flex-col h-full">
                {/* Top - Stats with Image Background */}
                <div className="relative overflow-hidden">
                  <img 
                    src={study.bgImage} 
                    alt={study.title}
                    className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/85"></div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10 flex flex-col items-center justify-center p-6 lg:p-8 text-white">
                    <div className="mb-4 relative">
                      <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl"></div>
                      <div className={`relative ${study.bgColor} w-16 h-16 rounded-3xl flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl transform group-hover:scale-110 transition-transform duration-300`}>
                        <study.icon className={`h-8 w-8 ${study.color}`} />
                      </div>
                    </div>
                    
                    <span className="text-xs font-semibold uppercase tracking-widest mb-4 text-white/95 px-3 py-1.5 bg-white/10 rounded-full backdrop-blur-sm">
                      {study.category}
                    </span>
                    
                    <div className="text-center space-y-2">
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-white/10 blur-2xl"></div>
                        <div className="relative text-5xl lg:text-6xl font-bold bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent drop-shadow-2xl">
                          {study.stat}
                        </div>
                      </div>
                      <p className="text-lg font-body font-semibold text-white/95">{study.statLabel}</p>
                    </div>
                    
                    {/* Decorative line */}
                    <div className="mt-4 w-16 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full"></div>
                  </div>
                </div>

                {/* Bottom - Content */}
                <div className="p-6 lg:p-8 flex flex-col justify-between flex-grow bg-gradient-to-br from-white to-gray-50/30 relative">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full"></div>
                  
                  <div className="relative">
                    <div className="inline-block mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1.5 rounded-full">
                        Success Story
                      </span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4 leading-tight group-hover:text-secondary transition-colors duration-300">
                      {study.title}
                    </h3>
                    
                    <div className="w-12 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mb-4"></div>
                    
                    <p className="text-base text-muted-foreground font-body leading-relaxed mb-6">
                      {study.description}
                    </p>

                    <Button size="sm" className="group/btn shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
                      Read Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

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
