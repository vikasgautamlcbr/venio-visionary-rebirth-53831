import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollProgressIndicator } from "@/components/ScrollProgressIndicator";
import InteractiveBackground from "@/components/InteractiveBackground";
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
  { id: "overview", label: "Overview" },
  { id: "benefits", label: "Benefits" },
  { id: "data", label: "Data" },
  { id: "demo", label: "Demo" },
  { id: "features", label: "Features" },
  { id: "industries", label: "Industries" },
  { id: "download", label: "Download" },
];

const problems = [
  { id: "manual", title: "Manual Hold Process", description: "Still using spreadsheets and email?" },
  { id: "tracking", title: "Poor Tracking", description: "Can't see custodian status in real time?" },
  { id: "spoliation", title: "Risk of Spoliation", description: "Worried about defensibility?" },
];

const VenioLegalHold = () => {
  const [selectedProblem, setSelectedProblem] = useState<string>("manual");

  return (
    <div className="min-h-screen">
      <Navbar />
      <ScrollProgressIndicator sections={sections} />

      {/* Hero Section */}
      <section id="overview" className="relative min-h-[90vh] flex items-center overflow-hidden gradient-animated pt-24 pb-20">
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

      {/* Problem → Solution Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <InteractiveBackground />
        <div className="container mx-auto max-w-7xl relative z-10">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            What challenge are you facing?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {problems.map((problem) => (
              <Card
                key={problem.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedProblem === problem.id
                    ? "border-secondary shadow-lg ring-2 ring-secondary/20"
                    : "border-border hover:border-secondary/50"
                }`}
                onClick={() => setSelectedProblem(problem.id)}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="glass border-secondary/30">
            <CardContent className="p-8">
              <p className="text-lg text-center">
                Venio automates the entire legal hold lifecycle—ensuring faster notices, higher compliance, and full defensibility.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-6 relative overflow-hidden">
        <InteractiveBackground />
        <div className="container mx-auto max-w-7xl relative z-10">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Why Teams Choose Venio Legal Hold
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Automation & Consistency</h3>
                <p className="text-muted-foreground">
                  Eliminate spreadsheets, auto-send custodial notices, and scale with confidence.
                </p>
              </CardContent>
            </Card>
            <Card className="glass hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Defensibility & Compliance</h3>
                <p className="text-muted-foreground">
                  Track every acknowledgment, build audit-ready logs, and reduce preservation risk.
                </p>
              </CardContent>
            </Card>
            <Card className="glass hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Speed & Visibility</h3>
                <p className="text-muted-foreground">
                  Launch holds in minutes, monitor custodian status in real time, and stop chasing responses.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Points Section */}
      <section id="data" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-accent/5 to-secondary/5"></div>
        <InteractiveBackground />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "70%", label: "shorter hold cycles" },
              { value: "40%", label: "higher custodian response rate" },
              { value: "100%", label: "defensible audit tracking" },
              { value: "64%", label: "of discovery failures avoidable" },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2 animate-fade-in-scale">
                <div className="text-5xl font-bold text-secondary">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Demo Section */}
      <section id="demo" className="py-20 px-6 relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
        <InteractiveBackground />
        <div className="container mx-auto max-w-7xl relative z-10">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            See Legal Holds in Action
          </h2>
          <div className="space-y-8">
            <div className="relative h-[400px] glass-dark rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center text-white/70">
                <Play className="h-16 w-16 mx-auto mb-4 text-secondary" />
                <p>Autoplay Demo Video</p>
              </div>
            </div>
            <div className="text-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                Start Interactive Demo
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
              {[
                { icon: FileText, label: "Create & Launch Holds" },
                { icon: Users, label: "Custodian Dashboard" },
                { icon: Bell, label: "Automated Reminders" },
                { icon: CheckCircle, label: "Acknowledgment Tracking" },
                { icon: Clock, label: "Release Workflows" },
                { icon: Shield, label: "Audit Trail Logging" },
              ].map((step, index) => (
                <Card key={index} className="glass text-center hover:shadow-lg transition-all">
                  <CardContent className="p-4 space-y-2">
                    <step.icon className="h-8 w-8 mx-auto text-secondary" />
                    <p className="text-xs font-medium">{step.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background"></div>
        <InteractiveBackground />
        <div className="container mx-auto max-w-7xl relative z-10">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Powerful Features for Modern Legal Teams
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="custodian" className="glass border-none rounded-lg px-6">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                Custodian Management
              </AccordionTrigger>
              <AccordionContent className="space-y-2 text-muted-foreground">
                <p>• Automated Notices</p>
                <p>• Reminders & Escalations</p>
                <p>• Custodian Portal</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="defensibility" className="glass border-none rounded-lg px-6">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                Defensibility & Compliance
              </AccordionTrigger>
              <AccordionContent className="space-y-2 text-muted-foreground">
                <p>• Full Audit Trails</p>
                <p>• Legal Hold Templates</p>
                <p>• Release Workflows</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="efficiency" className="glass border-none rounded-lg px-6">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                Team Efficiency
              </AccordionTrigger>
              <AccordionContent className="space-y-2 text-muted-foreground">
                <p>• Bulk Upload & Sync</p>
                <p>• Dashboards & Reporting</p>
                <p>• Integrations</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Industry Applications Section */}
      <section id="industries" className="py-20 px-6 relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
        <InteractiveBackground />
        <div className="container mx-auto max-w-7xl relative z-10">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Proven Across Industries
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, title: "Corporate Legal", link: "#" },
              { icon: Briefcase, title: "Law Firms", link: "#" },
              { icon: Landmark, title: "Government", link: "#" },
              { icon: Building, title: "Financial Services", link: "#" },
            ].map((industry, index) => (
              <Card
                key={index}
                className="glass hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <industry.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold">{industry.title}</h3>
                  <ChevronRight className="h-5 w-5 mx-auto text-muted-foreground group-hover:text-secondary transition-colors" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Brief Download Section */}
      <section id="download" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background"></div>
        <InteractiveBackground />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="glass-dark rounded-2xl p-12 flex items-center justify-center h-[400px]">
              <div className="text-center text-white/70">
                <FileText className="h-32 w-32 mx-auto text-secondary mb-4" />
                <p className="text-sm">PDF Thumbnail</p>
              </div>
            </div>
            <div className="space-y-6 relative z-10">
              <h2 className="text-4xl font-heading font-bold">
                Download the Legal Hold Product Brief
              </h2>
              <p className="text-lg text-muted-foreground">
                Get the full-feature overview, deployment options, and technical details.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn btn-primary text-lg px-8 py-3 group">
                  <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  Download Product Brief
                </button>
                <button className="btn btn-secondary text-lg px-8 py-3">
                  Talk to an Expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-accent/10 to-secondary/10"></div>
        <InteractiveBackground />
        <div className="container mx-auto max-w-4xl text-center space-y-8 relative z-10">
          <h2 className="text-4xl font-heading font-bold">
            Ready to simplify your Legal Hold process?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn btn-primary text-lg px-10 py-4">
              Book a Demo
            </button>
            <button className="btn btn-secondary text-lg px-10 py-4">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VenioLegalHold;
