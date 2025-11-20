const ProblemSolutionSection = () => {
  const solutions = [
    {
      problem: "Manual Review",
      problemDetail: "Teams spending weeks on document-by-document review",
      solution: "AI-Powered Analysis",
      solutionDetail: "Intelligent automation completes review in hours",
      impact: "70%",
      impactLabel: "Time Saved",
      gradient: "from-violet-500 to-purple-600",
      size: "large",
      stat: "2,500+",
      statLabel: "Hours Saved Monthly"
    },
    {
      problem: "Budget Overruns",
      solution: "Predictable Costs",
      impact: "60%",
      impactLabel: "Cost Reduction",
      gradient: "from-blue-500 to-cyan-500",
      size: "small"
    },
    {
      problem: "Missed Deadlines",
      solution: "Auto Delivery",
      impact: "100%",
      impactLabel: "On-Time Rate",
      gradient: "from-emerald-500 to-teal-600",
      size: "small"
    },
    {
      problem: "Scaling Issues",
      problemDetail: "Infrastructure struggles with large matters",
      solution: "Unlimited Capacity",
      solutionDetail: "Handle any case size effortlessly",
      impact: "10M+",
      impactLabel: "Docs Processed",
      gradient: "from-orange-500 to-red-500",
      size: "medium"
    },
    {
      problem: "Complex Workflows",
      problemDetail: "Multiple tools and manual handoffs",
      solution: "One Platform",
      solutionDetail: "End-to-end automation in one place",
      impact: "5x",
      impactLabel: "Faster Setup",
      gradient: "from-pink-500 to-rose-600",
      size: "medium"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl float-delayed"></div>
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

        {/* Bento Grid - 2 Rows Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 grid-rows-2">
          {solutions.map((item, index) => (
            <div
              key={index}
              className={`group relative animate-fade-in ${
                item.size === 'large' 
                  ? 'md:col-span-2 md:row-span-2' 
                  : item.size === 'medium'
                  ? 'md:col-span-2 md:row-span-1'
                  : 'md:col-span-1 md:row-span-1'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card */}
              <div className="relative h-full min-h-[280px] glass rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl">
                {/* Gradient background overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500`}></div>
                
                {/* Top gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`}></div>

                {/* Content */}
                <div className={`relative z-10 h-full flex flex-col p-6 ${item.size === 'large' ? 'lg:p-10' : 'lg:p-8'}`}>
                  
                  {/* Problem Section */}
                  <div className="flex-none mb-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-destructive"></div>
                      <span className="text-xs font-semibold text-destructive uppercase tracking-wide">Before</span>
                    </div>
                    
                    <h3 className={`font-bold text-foreground mb-2 ${
                      item.size === 'large' ? 'text-3xl lg:text-4xl' : 'text-2xl'
                    }`}>
                      {item.problem}
                    </h3>
                    
                    {item.problemDetail && (
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.problemDetail}
                      </p>
                    )}
                  </div>

                  {/* Arrow Transition */}
                  <div className="flex-none my-6">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-px bg-gradient-to-r from-border via-border to-transparent"></div>
                      <div className={`p-2 rounded-full bg-gradient-to-r ${item.gradient} group-hover:scale-110 transition-transform`}>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-l from-border via-border to-transparent"></div>
                    </div>
                  </div>

                  {/* Solution Section */}
                  <div className="flex-none">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">After</span>
                    </div>
                    
                    <h3 className={`font-bold text-foreground mb-2 ${
                      item.size === 'large' ? 'text-3xl lg:text-4xl' : 'text-2xl'
                    }`}>
                      {item.solution}
                    </h3>
                    
                    {item.solutionDetail && (
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {item.solutionDetail}
                      </p>
                    )}

                    {/* Impact Stats */}
                    <div className={`inline-flex flex-col gap-1 px-4 py-3 rounded-2xl bg-gradient-to-r ${item.gradient} shadow-lg`}>
                      <div className="text-2xl font-bold text-white">
                        {item.impact}
                      </div>
                      <div className="text-xs text-white/90 font-medium">
                        {item.impactLabel}
                      </div>
                    </div>

                    {/* Additional stat for large cards */}
                    {item.size === 'large' && item.stat && (
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{item.statLabel}</span>
                          <span className="text-2xl font-bold text-foreground">{item.stat}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="inline-flex flex-col items-center gap-6 p-10 rounded-3xl glass border border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Ready to transform your workflow?
              </h3>
              <p className="text-muted-foreground">
                See how Venio can solve your specific challenges
              </p>
            </div>
            <button className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-primary/90 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105">
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
