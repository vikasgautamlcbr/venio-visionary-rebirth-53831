import { TrendingUp, DollarSign, Clock, Shield } from "lucide-react";

const dataPoints = [
  {
    icon: TrendingUp,
    value: "10x",
    label: "Faster document review",
    description: "AI-powered review dramatically accelerates workflows"
  },
  {
    icon: DollarSign,
    value: "70%",
    label: "Cost savings achieved",
    description: "Reduced overhead and efficient resource allocation"
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Cloud availability",
    description: "Access your data securely from anywhere, anytime"
  },
  {
    icon: Shield,
    value: "99.9%",
    label: "Uptime guarantee",
    description: "Enterprise-grade reliability and security"
  }
];

export const DataPointsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Key Metrics for Law Firms
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world performance indicators that show how Venio accelerates law firm workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dataPoints.map((point, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  <point.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-5xl font-bold mb-2 bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                  {point.value}
                </h3>
                
                <p className="text-lg font-semibold mb-2">{point.label}</p>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
