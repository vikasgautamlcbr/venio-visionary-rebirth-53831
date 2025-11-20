import { ArrowRight } from "lucide-react";

const ProblemSolutionSection = () => {
  const comparisons = [
    {
      problem: "Weeks of manual document review",
      solution: "AI reduces review time by 70%"
    },
    {
      problem: "Unpredictable costs hurting margins",
      solution: "Predictive analytics for accurate budgeting"
    },
    {
      problem: "Missed deadlines, stressed teams",
      solution: "Automated workflows ensure on-time delivery"
    },
    {
      problem: "Can't scale for large cases",
      solution: "Platform handles matters of any size"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            From Overwhelmed to <span className="text-primary">Optimized</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how Venio transforms common eDiscovery challenges into competitive advantages
          </p>
        </div>

        <div className="space-y-4">
          {comparisons.map((item, index) => (
            <div 
              key={index}
              className="glass rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
                {/* Problem */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  </div>
                  <p className="text-muted-foreground">{item.problem}</p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>

                {/* Solution */}
                <div className="flex items-center gap-4 md:flex-row-reverse">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-foreground font-semibold md:text-right">{item.solution}</p>
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
