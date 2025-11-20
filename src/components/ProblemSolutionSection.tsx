import { ArrowRight, Zap, Target, TrendingUp, Shield } from "lucide-react";

const ProblemSolutionSection = () => {
  const items = [
    {
      problem: "Manual review takes weeks",
      solution: "AI completes in hours",
      icon: Zap,
      color: "from-orange-500 to-red-500"
    },
    {
      problem: "Unpredictable costs",
      solution: "Fixed pricing model",
      icon: Target,
      color: "from-blue-500 to-cyan-500"
    },
    {
      problem: "Missed deadlines",
      solution: "Automated tracking",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500"
    },
    {
      problem: "Scaling bottlenecks",
      solution: "Infinite capacity",
      icon: Shield,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            The <span className="text-destructive">Problem</span> → The <span className="text-primary">Solution</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch your biggest challenges transform into competitive advantages
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="space-y-8">
          {items.map((item, index) => (
            <div 
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
                {/* Problem Side */}
                <div className="glass rounded-2xl p-6 border-l-4 border-destructive/50 hover:border-destructive transition-all duration-300 hover:shadow-lg hover:-translate-x-2">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <p className="text-lg text-muted-foreground font-medium">{item.problem}</p>
                  </div>
                </div>

                {/* Center Connector */}
                <div className="hidden md:flex items-center justify-center relative">
                  <div className="relative flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                      <ArrowRight className="w-5 h-5 text-primary group-hover:animate-pulse" />
                    </div>
                    
                    {/* Animated connecting line */}
                    <div className="absolute inset-0 -z-10">
                      <div className={`absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    </div>
                  </div>
                </div>

                {/* Solution Side */}
                <div className="glass rounded-2xl p-6 border-l-4 border-primary bg-gradient-to-r from-primary/5 to-transparent hover:shadow-lg hover:translate-x-2 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-lg text-foreground font-semibold">{item.solution}</p>
                  </div>
                </div>
              </div>

              {/* Mobile arrow */}
              <div className="md:hidden flex justify-center my-2">
                <ArrowRight className="w-6 h-6 text-primary rotate-90" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-4">
              Ready to see Venio in action?
            </p>
            <button className="btn btn-primary">
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
