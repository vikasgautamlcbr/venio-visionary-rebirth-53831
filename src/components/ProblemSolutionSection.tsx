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
            <CarouselContent>
              {solutions.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <CarouselItem key={index}>
                    <div className="p-4">
                      {/* Split Layout */}
                      <div className={`flex flex-col md:flex-row ${!isEven ? 'md:flex-row-reverse' : ''} gap-8 items-center`}>
                        {/* Problem Side */}
                        <div className="flex-1">
                          <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 text-muted-foreground text-xs font-medium uppercase tracking-wider">
                              <Icon className="h-3 w-3" />
                              Before
                            </div>
                            <h3 className="text-2xl font-bold text-foreground/70">
                              {item.problem}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {item.problemDetail}
                            </p>
                          </div>
                        </div>

                        {/* Divider with Arrow */}
                        <div className="hidden md:flex items-center justify-center flex-shrink-0">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary to-primary/20 blur-xl opacity-50"></div>
                            <div className="relative bg-primary/10 rounded-full p-4 border border-primary/20">
                              <ArrowRight className={`h-6 w-6 text-primary ${!isEven ? 'rotate-180' : ''}`} />
                            </div>
                          </div>
                        </div>

                        {/* Solution Side */}
                        <div className="flex-1">
                          <div className="space-y-4 p-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider">
                              <Icon className="h-3 w-3" />
                              After
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">
                              {item.solution}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {item.solutionDetail}
                            </p>
                            
                            {/* Impact Stats */}
                            <div className="flex gap-6 pt-4 mt-4 border-t border-border/50">
                              <div>
                                <div className="text-3xl font-bold text-primary">
                                  {item.impact}
                                </div>
                                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                                  {item.impactLabel}
                                </div>
                              </div>
                              {item.stat && (
                                <div>
                                  <div className="text-2xl font-bold text-foreground">
                                    {item.stat}
                                  </div>
                                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                                    {item.statLabel}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Mobile Arrow */}
                      <div className="flex md:hidden justify-center my-4">
                        <ArrowRight className="h-6 w-6 text-primary rotate-90" />
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
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Button size="lg" className="group">
            Talk to an Expert
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
