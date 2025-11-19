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
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-background/95">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,165,250,0.08),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
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
              className="group relative p-8 rounded-2xl glass-dark backdrop-blur-xl border border-white/10 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] hover:scale-105"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-secondary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -inset-1 bg-gradient-to-br from-accent/30 via-secondary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
              
              <div className="relative">
                <div className="inline-flex p-4 rounded-xl glass border border-white/20 mb-6 group-hover:border-accent/40 transition-all shadow-lg">
                  <point.icon className="h-8 w-8 text-accent" />
                </div>
                
                <h3 className="text-5xl font-bold mb-2 bg-gradient-to-br from-accent via-secondary to-accent bg-clip-text text-transparent">
                  {point.value}
                </h3>
                
                <p className="text-lg font-semibold mb-2 text-white">{point.label}</p>
                <p className="text-sm text-white/70">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
