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
    <section className="relative py-24 overflow-hidden bg-background">
      <div className="container relative mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Transform Your Workflow
          </h2>
          <p className="text-lg text-muted-foreground">
            See how leading law firms overcome their biggest challenges
          </p>
        </div>

        {/* Solutions Slider */}
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {solutions.map((item, index) => {
                const Icon = item.icon;
                
                return (
                  <CarouselItem key={index} className="pl-4">
                    <div className="py-8 px-4">
                      {/* Split Layout - Always Problem Left, Solution Right */}
                      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch">
                        {/* Problem Side - Left */}
                        <div className="flex-1 flex flex-col justify-center">
                          <div className="space-y-4 p-6 md:p-8 rounded-2xl border border-border/50 bg-muted/30 h-full">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-xs font-semibold uppercase tracking-wider">
                              <Icon className="h-3.5 w-3.5" />
                              Before
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground/80">
                              {item.problem}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-base">
                              {item.problemDetail}
                            </p>
                          </div>
                        </div>

                        {/* Divider with Arrow */}
                        <div className="flex items-center justify-center flex-shrink-0 my-4 md:my-0">
                          <div className="relative">
                            <div className="absolute inset-0 bg-accent/20 blur-xl opacity-60 rounded-full"></div>
                            <div className="relative bg-accent/10 rounded-full p-3 md:p-4 border-2 border-accent/30">
                              <ArrowRight className="h-5 w-5 md:h-6 md:w-6 text-accent md:rotate-0 rotate-90" />
                            </div>
                          </div>
                        </div>

                        {/* Solution Side - Right */}
                        <div className="flex-1 flex flex-col justify-center">
                          <div className="space-y-5 p-6 md:p-8 rounded-2xl border-2 border-accent/20 bg-gradient-to-br from-accent/5 via-accent/10 to-transparent shadow-lg h-full">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-wider">
                              <Icon className="h-3.5 w-3.5" />
                              After
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                              {item.solution}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-base">
                              {item.solutionDetail}
                            </p>
                            
                            {/* Impact Stats */}
                            <div className="flex gap-8 pt-5 mt-5 border-t border-accent/20">
                              <div>
                                <div className="text-3xl md:text-4xl font-bold text-accent">
                                  {item.impact}
                                </div>
                                <div className="text-xs text-muted-foreground mt-1.5 uppercase tracking-wider font-medium">
                                  {item.impactLabel}
                                </div>
                              </div>
                              {item.stat && (
                                <div>
                                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                                    {item.stat}
                                  </div>
                                  <div className="text-xs text-muted-foreground mt-1.5 uppercase tracking-wider font-medium">
                                    {item.statLabel}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* CTA */}
        <div className="text-center mt-20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Button size="lg" variant="secondary" className="group shadow-lg hover:shadow-xl transition-shadow">
            Talk to an Expert
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
