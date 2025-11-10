import { Brain, Cloud, Workflow, DollarSign, Sparkles } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            The Only Unified eDiscovery Platform
            <br />
            Built for Total Control
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            Simplify your legal process with Venio's all-in-one, on-premises eDiscovery platform –
            built for control, speed, and cost-efficiency at every stage.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {/* Feature 1: AI-Powered Automation - Text Left, Visual Right */}
          <div className="glass rounded-3xl p-8 md:p-12 border-2 border-muted-foreground/10 hover:border-secondary/30 transition-all duration-300 glow-on-hover hover:shadow-xl group">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary">
                    AI-Powered Automation
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                  Streamline your eDiscovery process with AI-powered technology, designed to eliminate manual tasks and boost productivity by up to 10x. Leveraging advanced AI and continuous active learning (CAL).
                </p>
              </div>
              
              {/* Visual Placeholder */}
              <div className="relative aspect-video bg-white rounded-2xl border-2 border-muted-foreground/20 flex items-center justify-center min-h-[300px]">
              </div>
            </div>
          </div>

          {/* Feature 2 & 3: Two Cards Side by Side */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: Flexible Deployment */}
            <div className="glass rounded-3xl p-8 border-2 border-muted-foreground/10 hover:border-accent/30 transition-all duration-300 glow-on-hover hover:shadow-xl group">
              {/* Visual Placeholder */}
              <div className="relative aspect-video bg-white rounded-2xl border-2 border-muted-foreground/20 flex items-center justify-center mb-8">
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Cloud className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-primary">
                  Flexible Deployment
                </h3>
              </div>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Take full control of your data with cloud, on-premises, or hybrid eDiscovery solutions, offering robust security and compliance for sensitive information.
              </p>
            </div>

            {/* Card 2: End-to-End Workflows */}
            <div className="glass rounded-3xl p-8 border-2 border-muted-foreground/10 hover:border-secondary/30 transition-all duration-300 glow-on-hover hover:shadow-xl group">
              {/* Visual Placeholder */}
              <div className="relative aspect-video bg-white rounded-2xl border-2 border-muted-foreground/20 flex items-center justify-center mb-8">
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Workflow className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-primary">
                  End-to-End Workflows
                </h3>
              </div>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Unified eDiscovery platform simplifies workflows from data ingestion to production. Manage legal holds, early case assessment, review, and document production seamlessly.
              </p>
            </div>
          </div>

          {/* Feature 4: Cost Efficiency - Visual Left, Text Right */}
          <div className="glass rounded-3xl p-8 md:p-12 border-2 border-muted-foreground/10 hover:border-accent/30 transition-all duration-300 glow-on-hover hover:shadow-xl group">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Visual Placeholder */}
              <div className="relative aspect-video bg-white rounded-2xl border-2 border-muted-foreground/20 flex items-center justify-center min-h-[300px]">
              </div>

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary">
                    Cost Efficiency by Design
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                  Achieve up to 70% cost savings with cost-efficient eDiscovery software, designed to minimize licensing, labor, and infrastructure expenses.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 5: Intuitive Interface - Text Left, Visual Right */}
          <div className="glass rounded-3xl p-8 md:p-12 border-2 border-muted-foreground/10 hover:border-secondary/30 transition-all duration-300 glow-on-hover hover:shadow-xl group">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary">
                    Intuitive and Easy to Learn
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                  User-friendly interface ensures rapid adoption with a minimal learning curve. Customizable workflows, drag-and-drop functionality, and pre-built templates.
                </p>
              </div>

              {/* Visual Placeholder */}
              <div className="relative aspect-video bg-white rounded-2xl border-2 border-muted-foreground/20 flex items-center justify-center min-h-[300px]">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
