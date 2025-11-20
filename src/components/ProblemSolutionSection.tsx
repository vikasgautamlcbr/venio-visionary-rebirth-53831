import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, DollarSign, Shield } from "lucide-react";

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
    <section className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>

      <div className="container relative mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
            Transform Your Workflow
          </h2>
          <p className="text-xl text-muted-foreground">
            See how leading law firms overcome their biggest challenges
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                  {/* Gradient accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`}></div>
                  
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} mb-6`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Before/After Layout */}
                  <div className="space-y-4">
                    {/* Before */}
                    <div className="relative">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-20 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                          Before
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            {item.problem}
                          </h3>
                          <p className="text-muted-foreground">
                            {item.problemDetail}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Arrow Transition */}
                    <div className="flex items-center gap-4 py-2">
                      <div className="flex-shrink-0 w-20 flex justify-center">
                        <ArrowRight className={`h-6 w-6 text-primary animate-pulse bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`} />
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-border via-primary/20 to-border"></div>
                    </div>

                    {/* After */}
                    <div className="relative">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-20 text-sm font-semibold text-primary uppercase tracking-wider">
                          After
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            {item.solution}
                          </h3>
                          <p className="text-muted-foreground">
                            {item.solutionDetail}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Impact Stats */}
                    <div className="flex items-center gap-6 pt-4 mt-6 border-t border-border/50">
                      <div className="flex-1">
                        <div className={`text-3xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                          {item.impact}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {item.impactLabel}
                        </div>
                      </div>
                      {item.stat && (
                        <div className="flex-1 text-right">
                          <div className="text-2xl font-bold text-foreground">
                            {item.stat}
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            {item.statLabel}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" className="group">
            Talk to an Expert
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
