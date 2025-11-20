import { CheckCircle2 } from "lucide-react";

const ProblemSolutionSection = () => {
  const problems = [
    "Manual document review consuming thousands of billable hours",
    "High eDiscovery costs eating into case profitability",
    "Missed deadlines due to inefficient workflows",
    "Difficulty scaling operations for large matters"
  ];

  const solutions = [
    "AI-powered document analysis reducing review time by 70%",
    "Predictive analytics for accurate cost estimation",
    "Automated workflows ensuring on-time delivery",
    "Scalable platform handling cases of any size"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Problem Column */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-destructive/10 rounded-full">
              <span className="text-destructive font-semibold text-sm">The Challenge</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Law Firms Face Growing Pressure
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Traditional eDiscovery processes are time-consuming, expensive, and difficult to scale—putting your firm at a competitive disadvantage.
            </p>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Column */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">The Solution</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Venio Transforms Your Workflow
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our AI-powered platform streamlines every step of the eDiscovery process, from collection to production, saving time and reducing costs.
            </p>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
