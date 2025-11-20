import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, DollarSign, Shield } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const solutions = [
  {
    problem: "Manual Review",
    problemDetail: "Hours spent reviewing documents manually",
    solution: "AI-Powered Analysis",
    solutionDetail: "Instant document classification and review",
    impact: "85%",
    impactLabel: "Time Saved",
    gradient: "from-primary via-primary/80 to-accent",
    icon: Clock,
    stat: "200+",
    statLabel: "Hours saved monthly"
  },
  {
    problem: "Data Silos",
    problemDetail: "Information scattered across multiple systems",
    solution: "Unified Platform",
    solutionDetail: "Single source of truth for all case data",
    impact: "90%",
    impactLabel: "Faster Access",
    gradient: "from-accent via-accent/80 to-primary",
    icon: TrendingUp,
    stat: "3x",
    statLabel: "Faster retrieval"
  },
  {
    problem: "High Costs",
    problemDetail: "Expensive external review teams",
    solution: "Automated Workflows",
    solutionDetail: "In-house automation reduces external spend",
    impact: "60%",
    impactLabel: "Cost Reduction",
    gradient: "from-primary/90 via-accent/70 to-primary/90",
    icon: DollarSign,
    stat: "$500K+",
    statLabel: "Annual savings"
  },
  {
    problem: "Compliance Risk",
    problemDetail: "Manual processes prone to human error",
    solution: "Smart Validation",
    solutionDetail: "Automated compliance checks and alerts",
    impact: "95%",
    impactLabel: "Error Reduction",
    gradient: "from-accent via-primary/70 to-accent/80",
    icon: Shield,
    stat: "99.9%",
    statLabel: "Accuracy rate"
  }
];

export default function ProblemSolutionSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="container relative mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Transform Your Workflow
          </h2>
          <p className="text-xl text-muted-foreground">
            See how leading law firms overcome their biggest challenges
          </p>
        </div>

        {/* Solutions Slider */}
        <div className="max-w-7xl mx-auto relative px-16 md:px-20">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {solutions.map((item, index) => {
                const Icon = item.icon;
                
                return (
                  <CarouselItem key={index} className="pl-4">
                    <div className="py-8 px-2">
                      {/* Unified Card with Before/After */}
                      <div className="rounded-3xl border border-border/50 bg-card shadow-2xl overflow-hidden hover:shadow-accent/10 hover:shadow-2xl transition-all duration-300">
                        <div className="flex flex-col md:flex-row min-h-[420px]">
                          {/* Problem Side - Left (40%) */}
                          <div className="md:flex-[4] p-8 md:p-10 bg-gradient-to-br from-muted/40 to-muted/20 border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-border/30">
                            <div className="space-y-5 h-full flex flex-col">
                              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 text-muted-foreground text-xs font-bold uppercase tracking-widest w-fit shadow-sm">
                                <Icon className="h-4 w-4" />
                                Before
                              </div>
                              <h3 className="text-2xl md:text-3xl font-bold text-foreground/85 leading-tight">
                                {item.problem}
                              </h3>
                              <p className="text-muted-foreground leading-relaxed text-base flex-grow">
                                {item.problemDetail}
                              </p>
                            </div>
                          </div>

                          {/* Solution Side - Right (60%) */}
                          <div className="md:flex-[6] p-8 md:p-10 bg-gradient-to-br from-accent/8 via-accent/12 to-accent/5 relative overflow-hidden">
                            {/* Subtle decorative element */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            
                            <div className="space-y-5 h-full flex flex-col relative z-10">
                              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest w-fit shadow-sm border border-accent/20">
                                <Icon className="h-4 w-4" />
                                After
                              </div>
                              <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                                {item.solution}
                              </h3>
                              <p className="text-muted-foreground leading-relaxed text-base flex-grow">
                                {item.solutionDetail}
                              </p>
                              
                              {/* Impact Stats */}
                              <div className="grid grid-cols-2 gap-6 pt-6 mt-auto border-t-2 border-accent/15">
                                <div className="space-y-1">
                                  <div className="text-4xl md:text-5xl font-bold text-accent leading-none">
                                    {item.impact}
                                  </div>
                                  <div className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                                    {item.impactLabel}
                                  </div>
                                </div>
                                {item.stat && (
                                  <div className="space-y-1">
                                    <div className="text-3xl md:text-4xl font-bold text-accent leading-none">
                                      {item.stat}
                                    </div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                                      {item.statLabel}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="-left-12 md:-left-16 h-12 w-12 border-2" />
            <CarouselNext className="-right-12 md:-right-16 h-12 w-12 border-2" />
          </Carousel>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Button size="lg" variant="secondary" className="group shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-base px-10 py-6 h-auto">
            Talk to an Expert
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
