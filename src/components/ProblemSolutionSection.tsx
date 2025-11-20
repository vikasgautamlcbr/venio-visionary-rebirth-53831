const ProblemSolutionSection = () => {
  const solutions = [
    {
      problem: "Manual Review Takes Weeks",
      solution: "AI Completes in Hours",
      impact: "70% Faster",
      gradient: "from-violet-500 to-purple-600",
      size: "large", // Takes more space
      description: "Transform weeks of tedious document review into hours of intelligent analysis"
    },
    {
      problem: "Unpredictable Costs",
      solution: "Fixed Pricing",
      impact: "60% Savings",
      gradient: "from-blue-500 to-cyan-500",
      size: "small"
    },
    {
      problem: "Missed Deadlines",
      solution: "Automated Delivery",
      impact: "100% On-Time",
      gradient: "from-emerald-500 to-teal-600",
      size: "small"
    },
    {
      problem: "Can't Scale",
      solution: "Infinite Capacity",
      impact: "Unlimited Scale",
      gradient: "from-orange-500 to-red-500",
      size: "medium",
      description: "Scale from hundreds to millions of documents seamlessly"
    },
    {
      problem: "Complex Workflows",
      solution: "One-Click Automation",
      impact: "5x Efficiency",
      gradient: "from-pink-500 to-rose-600",
      size: "medium",
      description: "Simplify multi-step processes into single automated workflows"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-semibold text-primary">The Venio Difference</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Stop Struggling.
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Start Winning.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your biggest eDiscovery pain points into competitive advantages
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">
          {solutions.map((item, index) => (
            <div
              key={index}
              className={`group relative animate-fade-in ${
                item.size === 'large' 
                  ? 'lg:col-span-2 lg:row-span-2' 
                  : item.size === 'medium'
                  ? 'lg:col-span-2'
                  : 'lg:col-span-1'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card */}
              <div className="relative h-full glass rounded-3xl p-6 lg:p-8 border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden group-hover:scale-[1.02]">
                {/* Gradient accent on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className={`relative z-10 h-full flex flex-col ${item.size === 'large' ? 'justify-between' : 'justify-center'}`}>
                  {/* Problem */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-destructive uppercase tracking-wider">
                      <div className="w-6 h-px bg-destructive/50"></div>
                      <span>Challenge</span>
                    </div>
                    <h3 className={`font-bold text-muted-foreground ${item.size === 'large' ? 'text-2xl' : 'text-lg'}`}>
                      {item.problem}
                    </h3>
                  </div>

                  {/* Divider with animated dot */}
                  <div className="flex items-center gap-3 my-4">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.gradient} group-hover:scale-150 transition-transform duration-300`}></div>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                  </div>

                  {/* Solution */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
                      <div className="w-6 h-px bg-primary/50"></div>
                      <span>Solution</span>
                    </div>
                    <h3 className={`font-bold text-foreground ${item.size === 'large' ? 'text-3xl' : 'text-xl'}`}>
                      {item.solution}
                    </h3>
                    
                    {item.description && item.size !== 'small' && (
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    )}
                    
                    {/* Impact badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${item.gradient} text-white text-xs font-bold shadow-lg`}>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      {item.impact}
                    </div>
                  </div>
                </div>

                {/* Hover effect border glow */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-2xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
            <p className="text-lg text-muted-foreground">
              Ready to transform your eDiscovery process?
            </p>
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:scale-105">
              <span>Talk to an Expert</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
