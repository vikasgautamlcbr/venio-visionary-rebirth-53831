import { AlertCircle, CheckCircle2, TrendingUp, Zap, Clock, DollarSign } from "lucide-react";

const ProblemSolutionSection = () => {
  const comparisons = [
    {
      problem: {
        icon: Clock,
        title: "Weeks of Manual Review",
        description: "Document review consuming thousands of billable hours with high error rates"
      },
      solution: {
        icon: Zap,
        title: "AI-Powered Analysis",
        description: "Reduce review time by 70% with intelligent automation and higher accuracy"
      }
    },
    {
      problem: {
        icon: DollarSign,
        title: "Unpredictable Costs",
        description: "Budget overruns and unexpected expenses hurting case profitability"
      },
      solution: {
        icon: TrendingUp,
        title: "Predictive Analytics",
        description: "Accurate cost forecasting and budget control from day one"
      }
    },
    {
      problem: {
        icon: AlertCircle,
        title: "Missed Deadlines",
        description: "Stressed teams struggling to meet court-imposed timelines"
      },
      solution: {
        icon: CheckCircle2,
        title: "Automated Workflows",
        description: "Streamlined processes ensuring on-time delivery every time"
      }
    },
    {
      problem: {
        icon: AlertCircle,
        title: "Scaling Challenges",
        description: "Infrastructure can't handle large, complex matters efficiently"
      },
      solution: {
        icon: CheckCircle2,
        title: "Scalable Platform",
        description: "Handle cases of any size with enterprise-grade infrastructure"
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-12 max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Transform Your <span className="text-primary">Challenges</span> into Advantages
          </h2>
          <p className="text-lg text-muted-foreground">
            Hover over each card to see how Venio turns problems into solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {comparisons.map((item, index) => (
            <div
              key={index}
              className="group relative h-64 perspective-1000"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                {/* Front - Problem */}
                <div className="absolute inset-0 backface-hidden">
                  <div className="glass rounded-2xl p-6 h-full flex flex-col justify-between border-l-4 border-destructive/50 hover:shadow-xl transition-shadow">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                          <item.problem.icon className="w-6 h-6 text-destructive" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">{item.problem.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{item.problem.description}</p>
                    </div>
                    <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground">
                      <span>Hover to see solution</span>
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back - Solution */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className="glass rounded-2xl p-6 h-full flex flex-col justify-between border-l-4 border-primary bg-gradient-to-br from-primary/5 to-transparent hover:shadow-xl transition-shadow">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <item.solution.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">{item.solution.title}</h3>
                      </div>
                      <p className="text-foreground leading-relaxed font-medium">{item.solution.description}</p>
                    </div>
                    <div className="flex items-center justify-end gap-2 text-sm text-primary font-semibold">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Venio Solution</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
