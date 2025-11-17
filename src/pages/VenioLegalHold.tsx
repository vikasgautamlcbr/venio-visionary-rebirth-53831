import { Card, CardContent } from "@/components/ui/card";
import { ScrollProgressIndicator } from "@/components/ScrollProgressIndicator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FileText, 
  Shield, 
  Clock, 
  Users, 
  Bell, 
  CheckCircle, 
  BarChart3, 
  Building2, 
  Briefcase, 
  Landmark, 
  Building,
  Download,
  Play,
  ChevronRight
} from "lucide-react";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "data", label: "Impact" },
  { id: "demo", label: "Demo" },
  { id: "features", label: "Features" },
  { id: "case-studies", label: "Case Studies" },
  { id: "download", label: "Resources" },
];

const VenioLegalHold = () => {

  return (
    <div className="min-h-screen">
      <Navbar />
      <ScrollProgressIndicator sections={sections} />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden gradient-animated pt-24 pb-20">
        {/* Dynamic Animated Background */}
        <div className="absolute inset-0">
          {/* Large Glowing Orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-32 right-10 w-[500px] h-[500px] bg-accent/25 rounded-full blur-3xl float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          
          {/* Floating Geometric Shapes */}
          <div className="absolute top-40 right-20 w-20 h-20 border-2 border-white/20 rounded-lg animate-spin-slow"></div>
          <div className="absolute bottom-40 left-32 w-16 h-16 border-2 border-accent/30 rotate-45 animate-bounce-slow"></div>
          <div className="absolute top-1/3 left-20 w-12 h-12 bg-secondary/20 rounded-full animate-float"></div>
          <div className="absolute bottom-1/3 right-40 w-24 h-24 border-2 border-white/10 rounded-full animate-pulse"></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary/80"></div>

        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              {/* Floating Badge */}
              <div className="inline-flex items-center gap-2 glass-dark px-6 py-3 rounded-full mb-2 pulse-glow animate-slide-up">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-white/90 text-sm font-medium">Automated Legal Hold Solution</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
                Automated, Defensible Legal Holds—
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-accent animate-shimmer">
                  Done Right
                </span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Streamline notices, confirmations, and compliance with a modern automated legal hold solution built for speed and accuracy.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary text-lg px-8 py-3 group">
                  <Play className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Try Interactive Demo
                </button>
                <button className="btn btn-secondary text-lg px-8 py-3 group">
                  <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  Download Product Brief
                </button>
              </div>
            </div>
            <div className="relative h-[400px] glass-dark rounded-2xl p-8 flex items-center justify-center animate-fade-in-scale">
              <div className="text-white/70 text-center">
                <FileText className="h-24 w-24 mx-auto mb-4 text-secondary" />
                <p className="text-sm">Product Dashboard Visual</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Data Points Section */}
      <section id="data" className="py-24 px-6 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Measurable Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how Venio Legal Hold transforms legal operations with proven results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "70%", label: "Shorter hold cycles", icon: Clock },
              { value: "40%", label: "Higher custodian response rate", icon: Users },
              { value: "100%", label: "Defensible audit tracking", icon: Shield },
              { value: "64%", label: "Of discovery failures avoidable", icon: CheckCircle },
            ].map((stat, index) => (
              <Card key={index} className="glass text-center hover:shadow-xl transition-all duration-300 border-border/50">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="text-5xl font-bold text-secondary">{stat.value}</div>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Experience It Live</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Walk through the complete legal hold workflow from creation to release
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="relative aspect-video glass rounded-2xl p-8 flex items-center justify-center group hover:shadow-2xl transition-all duration-300">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="h-12 w-12 text-secondary" />
                </div>
                <p className="text-muted-foreground text-lg font-medium">Interactive Product Demo</p>
                <p className="text-sm text-muted-foreground mt-2">Click to explore the full workflow</p>
              </div>
            </div>
            
            <div className="text-center">
              <button className="btn btn-primary text-lg px-10 py-4 group">
                Start Interactive Demo
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-16">
              {[
                { icon: FileText, label: "Create & Launch", desc: "Set up holds in minutes" },
                { icon: Users, label: "Track Custodians", desc: "Real-time status monitoring" },
                { icon: Shield, label: "Audit & Release", desc: "Complete defensibility" },
              ].map((step, index) => (
                <Card key={index} className="glass text-center hover:shadow-xl transition-all duration-300 border-border/50">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold">{step.label}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Complete Legal Hold Platform</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage legal holds efficiently and defensibly
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Bell, 
                title: "Automated Notices", 
                desc: "Send, track, and manage custodian notifications automatically",
                features: ["Email templates", "Scheduled reminders", "Escalation workflows"]
              },
              { 
                icon: Users, 
                title: "Custodian Portal", 
                desc: "Self-service portal for acknowledgments and questions",
                features: ["One-click acknowledgment", "Document upload", "Status tracking"]
              },
              { 
                icon: Shield, 
                title: "Full Audit Trails", 
                desc: "Complete defensibility with detailed activity logs",
                features: ["Every action logged", "Timestamped records", "Export reports"]
              },
              { 
                icon: FileText, 
                title: "Hold Templates", 
                desc: "Standardize your process with reusable templates",
                features: ["Custom templates", "Pre-approved language", "Quick deployment"]
              },
              { 
                icon: BarChart3, 
                title: "Dashboards & Reports", 
                desc: "Real-time visibility into all active legal holds",
                features: ["Status overview", "Response rates", "Custom reports"]
              },
              { 
                icon: CheckCircle, 
                title: "Release Workflows", 
                desc: "Manage the entire lifecycle from notice to release",
                features: ["Bulk operations", "Approval chains", "Documentation"]
              },
            ].map((feature, index) => (
              <Card key={index} className="glass hover:shadow-xl transition-all duration-300 border-border/50 group">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                  <ul className="space-y-2 pt-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Proven Results</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how leading organizations are transforming their legal hold processes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                icon: Building2, 
                title: "Fortune 500 Corporation", 
                industry: "Corporate Legal",
                challenge: "Managing 200+ simultaneous holds across global operations",
                result: "Reduced hold cycle time by 65% and improved custodian response rates to 95%",
                metric: "65% faster"
              },
              { 
                icon: Briefcase, 
                title: "Am Law 100 Firm", 
                industry: "Law Firms",
                challenge: "Manual tracking across multiple client matters causing delays",
                result: "Automated 90% of routine hold tasks and eliminated tracking spreadsheets",
                metric: "90% automated"
              },
              { 
                icon: Landmark, 
                title: "Federal Agency", 
                industry: "Government",
                challenge: "Ensuring compliance with strict record retention requirements",
                result: "Achieved 100% audit-ready documentation with full defensibility",
                metric: "100% compliant"
              },
              { 
                icon: Building, 
                title: "Global Bank", 
                industry: "Financial Services",
                challenge: "High-volume litigation requiring rapid hold deployment",
                result: "Cut deployment time from days to hours with automated workflows",
                metric: "10x faster deployment"
              },
            ].map((study, index) => (
              <Card key={index} className="glass hover:shadow-xl transition-all duration-300 group border-border/50">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <study.icon className="h-7 w-7 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{study.title}</h3>
                        <p className="text-sm text-muted-foreground">{study.industry}</p>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-secondary">{study.metric}</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">Challenge</p>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">Result</p>
                      <p className="text-sm text-muted-foreground">{study.result}</p>
                    </div>
                  </div>
                  
                  <button className="text-sm font-medium text-secondary hover:text-secondary/80 flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Full Case Study
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Product Brief Section */}
      <section id="download" className="py-24 px-6 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="glass rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="bg-secondary/5 p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-64 mx-auto bg-white/10 rounded-lg shadow-2xl flex items-center justify-center mb-6">
                    <FileText className="h-24 w-24 text-secondary" />
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">Legal Hold Product Brief</p>
                  <p className="text-xs text-muted-foreground mt-1">PDF • 2.4 MB</p>
                </div>
              </div>
              <div className="p-12 flex flex-col justify-center space-y-6">
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-4">
                    Get the Complete Product Brief
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Download our comprehensive guide covering features, deployment options, security details, and technical specifications.
                  </p>
                </div>
                
                <ul className="space-y-3">
                  {[
                    "Complete feature breakdown",
                    "Deployment & integration options",
                    "Security & compliance details",
                    "Pricing information",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button className="btn btn-primary px-8 py-3 group flex-1">
                    <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                    Download Brief
                  </button>
                  <button className="btn btn-secondary px-8 py-3 flex-1">
                    Request Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-4xl">
          <div className="glass rounded-3xl p-12 md:p-16 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Ready to Transform Your Legal Hold Process?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join leading organizations using Venio Legal Hold to automate workflows and ensure compliance.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="btn btn-primary text-lg px-12 py-4 group">
                Book a Demo
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <p className="text-sm text-muted-foreground pt-4">
              Schedule a personalized walkthrough with our team
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VenioLegalHold;
