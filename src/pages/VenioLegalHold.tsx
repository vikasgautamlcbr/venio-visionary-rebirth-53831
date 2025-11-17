import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      <Navbar />
      <ScrollProgressIndicator sections={sections} />

      {/* Hero Section */}
      <section id="overview" className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                Automated, Defensible Legal Holds—Done Right.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Streamline notices, confirmations, and compliance with a modern automated legal hold solution built for speed and accuracy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                  <Play className="mr-2 h-5 w-5" />
                  Try Interactive Demo
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:bg-muted">
                  <Download className="mr-2 h-5 w-5" />
                  Download Product Brief
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] glass rounded-2xl p-8 flex items-center justify-center animate-fade-in-scale">
              <div className="text-muted-foreground text-center">
                <FileText className="h-24 w-24 mx-auto mb-4 text-secondary" />
                <p className="text-sm">Product Dashboard Visual</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
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
      <section id="benefits" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
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
      <section id="data" className="py-20 px-6 bg-gradient-to-r from-secondary/5 to-accent/5">
        <div className="container mx-auto max-w-7xl">
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
      <section id="demo" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            See Legal Holds in Action
          </h2>
          <div className="space-y-8">
            <div className="relative h-[400px] glass rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <Play className="h-16 w-16 mx-auto mb-4 text-secondary" />
                <p className="text-muted-foreground">Autoplay Demo Video</p>
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
      <section id="features" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
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
      <section id="industries" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
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
      <section id="download" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="glass rounded-2xl p-12 flex items-center justify-center h-[400px]">
              <div className="text-center">
                <FileText className="h-32 w-32 mx-auto text-secondary mb-4" />
                <p className="text-sm text-muted-foreground">PDF Thumbnail</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-heading font-bold">
                Download the Legal Hold Product Brief
              </h2>
              <p className="text-lg text-muted-foreground">
                Get the full-feature overview, deployment options, and technical details.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                  <Download className="mr-2 h-5 w-5" />
                  Download Product Brief
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:bg-muted">
                  Talk to an Expert
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 px-6 bg-gradient-to-r from-secondary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl font-heading font-bold">
            Ready to simplify your Legal Hold process?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              Book a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-muted">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VenioLegalHold;
