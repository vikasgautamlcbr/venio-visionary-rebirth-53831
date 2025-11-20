import { CheckCircle2, AlertCircle, TrendingUp, Zap } from "lucide-react";

const ProblemSolutionSection = () => {
  const problems = [
    {
      title: "Manual document review",
      description: "Consuming thousands of billable hours",
      icon: AlertCircle
    },
    {
      title: "High eDiscovery costs",
      description: "Eating into case profitability",
      icon: AlertCircle
    },
    {
      title: "Missed deadlines",
      description: "Due to inefficient workflows",
      icon: AlertCircle
    },
    {
      title: "Scaling challenges",
      description: "Difficulty handling large matters",
      icon: AlertCircle
    }
  ];

  const solutions = [
    {
      title: "AI-powered analysis",
      description: "Reduce review time by 70%",
      icon: Zap
    },
    {
      title: "Predictive analytics",
      description: "Accurate cost estimation",
      icon: TrendingUp
    },
    {
      title: "Automated workflows",
      description: "Ensure on-time delivery",
      icon: CheckCircle2
    },
    {
      title: "Scalable platform",
      description: "Handle cases of any size",
      icon: CheckCircle2
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="absolute top-20 left-10 w-96 h-96 bg-destructive/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Transform Your <span className="text-primary">eDiscovery Challenges</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Traditional processes hold you back. Venio propels you forward.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem Column */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-destructive/10 rounded-full border border-destructive/20">
              <AlertCircle className="w-4 h-4 text-destructive" />
              <span className="text-destructive font-semibold text-sm">The Challenge</span>
            </div>
            
            <div className="glass rounded-2xl p-8 border-l-4 border-destructive/50 hover:border-destructive transition-all duration-300 hover:shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Law Firms Face Growing Pressure
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Traditional eDiscovery processes are time-consuming, expensive, and difficult to scale—putting your firm at a competitive disadvantage.
              </p>
              
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-4 rounded-lg bg-background/50 hover:bg-destructive/5 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <problem.icon className="w-5 h-5 text-destructive" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{problem.title}</h4>
                      <p className="text-sm text-muted-foreground">{problem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solution Column */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 rounded-full border border-primary/20">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold text-sm">The Solution</span>
            </div>
            
            <div className="glass rounded-2xl p-8 border-l-4 border-primary/50 hover:border-primary transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-primary/5 to-transparent">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Venio Transforms Your Workflow
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our AI-powered platform streamlines every step of the eDiscovery process, from collection to production, saving time and reducing costs.
              </p>
              
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-4 rounded-lg bg-background/50 hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <solution.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{solution.title}</h4>
                      <p className="text-sm text-muted-foreground">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
