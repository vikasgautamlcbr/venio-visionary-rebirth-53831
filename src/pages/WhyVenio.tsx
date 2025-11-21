import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ArrowRight, 
  Download,
  Workflow,
  Clock,
  DollarSign,
  Zap,
  Shield,
  Cloud,
  Brain,
  BarChart3,
  Lock,
  Database,
  CheckCircle2,
  XCircle,
  MinusCircle,
  Building2,
  Scale,
  Landmark,
  Briefcase
} from "lucide-react";

const WhyVenio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              The Venio Advantage: Faster, Smarter, Defensible eDiscovery
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              End-to-end eDiscovery in one platform — AI acceleration, flexible deployment, and enterprise-grade defensibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Download className="mr-2 h-5 w-5" />
                Download Comparison Kit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 - The Problem */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why other eDiscovery approaches fail
            </h2>
            <p className="text-lg text-muted-foreground">
              Many teams stitch together point tools, legacy platforms, and manual processes. The result: slower timelines, high cost, fragmented workflows, and increased legal risk. Venio was built to remove those barriers—by unifying process, applying AI where it matters, and keeping control where it's needed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Workflow className="h-6 w-6 text-destructive" />
                </div>
                <CardTitle className="text-xl">Fragmented Workflows</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Multiple tools, many handoffs.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-destructive" />
                </div>
                <CardTitle className="text-xl">Slow Review Cycles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Linear review that drags on.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-destructive" />
                </div>
                <CardTitle className="text-xl">Hidden Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Hosting, per-GB fees, and vendor reliance.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 2 - Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Venio vs others — at a glance
              </h2>
              <p className="text-lg text-muted-foreground">
                See the differences that matter when evaluating platforms for enterprise discovery.
              </p>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">Capability</TableHead>
                        <TableHead className="text-center">Venio</TableHead>
                        <TableHead className="text-center">Legacy Tools</TableHead>
                        <TableHead className="text-center">Point Solutions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">End-to-end platform</TableCell>
                        <TableCell className="text-center">
                          <CheckCircle2 className="h-5 w-5 text-primary mx-auto" />
                        </TableCell>
                        <TableCell className="text-center">
                          <XCircle className="h-5 w-5 text-destructive mx-auto" />
                        </TableCell>
                        <TableCell className="text-center">
                          <XCircle className="h-5 w-5 text-destructive mx-auto" />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">AI/TAR/CAL built-in</TableCell>
                        <TableCell className="text-center">
                          <CheckCircle2 className="h-5 w-5 text-primary mx-auto" />
                        </TableCell>
                        <TableCell className="text-center">
                          <XCircle className="h-5 w-5 text-destructive mx-auto" />
                        </TableCell>
                        <TableCell className="text-center">
                          <MinusCircle className="h-5 w-5 text-muted-foreground mx-auto" />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Deployment flexibility</TableCell>
                        <TableCell className="text-center text-sm">Cloud / Hybrid / On-prem</TableCell>
                        <TableCell className="text-center text-sm">Limited</TableCell>
                        <TableCell className="text-center text-sm">Cloud only</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Early Case Assessment (ECA)</TableCell>
                        <TableCell className="text-center text-sm">Native</TableCell>
                        <TableCell className="text-center text-sm">Add-on</TableCell>
                        <TableCell className="text-center text-sm">Rare</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Data reduction before review</TableCell>
                        <TableCell className="text-center text-sm">Up to 90%</TableCell>
                        <TableCell className="text-center text-sm">Low</TableCell>
                        <TableCell className="text-center text-sm">Variable</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Defensible audit trails</TableCell>
                        <TableCell className="text-center text-sm">Full</TableCell>
                        <TableCell className="text-center text-sm">Partial</TableCell>
                        <TableCell className="text-center text-sm">Often missing</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Predictable cost</TableCell>
                        <TableCell className="text-center text-sm">Designed for it</TableCell>
                        <TableCell className="text-center text-sm">Hard to predict</TableCell>
                        <TableCell className="text-center text-sm">Variable</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <p className="text-center mt-6 text-sm text-muted-foreground">
              For a downloadable detailed comparison, use:{" "}
              <Button variant="link" className="p-0 h-auto">
                Download the Venio Comparison Kit
              </Button>
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - The 6 Pillars */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The pillars of Venio advantage
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Workflow className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Unified End-to-End</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  One platform handling Legal Hold → Ingestion → ECA → Review → Production — fewer transfers, less risk.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>AI-Powered Acceleration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  CAL/TAR, prioritization, clustering, and auto-tagging reduce reviewer workload and speed insights.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Flexible Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cloud, hybrid, or on-prem—choose what fits your security, governance, and budget model.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Radical Cost Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Early culling and optimized hosting deliver predictable total cost of ownership.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Defensible Process & Auditability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Full, immutable audit trails, custodial tracking, and production QC built in.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Modern Data Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Native ingestion and handling for email, cloud apps, chats, multimedia, and mobile sources.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4 - Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Real results teams see with Venio
              </h2>
              <p className="text-lg text-muted-foreground">
                Measurable improvements you can expect.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-5xl font-bold text-primary mb-2">90%</CardTitle>
                  <CardDescription className="text-base">Data reduction before review</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-5xl font-bold text-primary mb-2">70%</CardTitle>
                  <CardDescription className="text-base">Faster time to launch holds and begin review</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-5xl font-bold text-primary mb-2">40%</CardTitle>
                  <CardDescription className="text-base">Higher custodian response and compliance rates</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-5xl font-bold text-primary mb-2">64%</CardTitle>
                  <CardDescription className="text-base">Common discovery failures avoidable</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Gaps in Competing Approaches */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Common gaps in competing approaches
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Without native ECA, automation, or integrated audit trails, teams face high costs, slower turnarounds, and compliance risk.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-destructive/50">
                <CardHeader>
                  <CardTitle className="text-destructive">Other Tools</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Cloud-only lock-in</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Add-ons for ECA</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Unpredictable fees</span>
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/50">
                <CardHeader>
                  <CardTitle className="text-primary">Venio</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Flexible deployment</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Built-in ECA</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Transparent pricing and scriptable automation</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Feature Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Platform capabilities
            </h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="workflow">
                <AccordionTrigger className="text-xl font-semibold">
                  Unified Workflow
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Legal Hold automation, secure ingestion, built-in ECA, review, production.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ai">
                <AccordionTrigger className="text-xl font-semibold">
                  AI & Review
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Continuous Active Learning (CAL), predictive prioritization, near-duplicate clustering.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="eca">
                <AccordionTrigger className="text-xl font-semibold">
                  Early Case Assessment
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Sampling, custodian prioritization, fast analytics, and exportable reports.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="production">
                <AccordionTrigger className="text-xl font-semibold">
                  Production
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Native load-file generation, redaction tools, QC, and defensible export.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="security">
                <AccordionTrigger className="text-xl font-semibold">
                  Security & Compliance
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Encryption, RBAC, immutable logs, SOC/ISO controls.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="integrations">
                <AccordionTrigger className="text-xl font-semibold">
                  Integrations
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Supported sources: O365, Google Workspace, Slack, Teams, cloud storage, forensic exports.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Section 7 - Industry Use Cases */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Proven in real environments
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Corporate Legal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Reduced external review costs by enabling in-house ECA and prioritized review.
                  </p>
                  <Button variant="link" className="p-0 h-auto">
                    View case study →
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Scale className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Law Firms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Accelerated matter turnaround with AI-powered document review and client-ready reporting.
                  </p>
                  <Button variant="link" className="p-0 h-auto">
                    View case study →
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Landmark className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Government</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Met strict security requirements with on-prem deployment and full audit trails.
                  </p>
                  <Button variant="link" className="p-0 h-auto">
                    View case study →
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Financial Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Ensured regulatory compliance with defensible workflows and complete documentation.
                  </p>
                  <Button variant="link" className="p-0 h-auto">
                    View case study →
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 - Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Customers say it best
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <p className="text-lg mb-4 italic">
                    "Venio cut our data sent to review by over 75%, saving months of work."
                  </p>
                  <p className="text-sm text-muted-foreground">
                    — Senior eDiscovery Manager, Global Bank
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <p className="text-lg mb-4 italic">
                    "Unified platform, clearer audits, faster response times."
                  </p>
                  <p className="text-sm text-muted-foreground">
                    — Litigation Partner, AmLaw 100 firm
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9 - Downloadable Resources */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Resources & comparison kit
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Explore whitepapers, product briefs, and comparison guides to evaluate Venio in detail.
            </p>

            <div className="space-y-4">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="flex items-center justify-between p-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Venio ECA Product Brief</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive overview of Early Case Assessment capabilities</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="flex items-center justify-between p-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Venio Review Overview</h3>
                    <p className="text-sm text-muted-foreground">Detailed product brief on review capabilities</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer border-primary/50">
                <CardContent className="flex items-center justify-between p-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Venio vs Others — Comparison Kit</h3>
                    <p className="text-sm text-muted-foreground">Complete comparison guide (lead capture required)</p>
                  </div>
                  <Button size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Get the Kit
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10 - FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Common questions
            </h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="onprem">
                <AccordionTrigger className="text-lg font-semibold">
                  Can Venio run on-prem?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Yes — Venio supports cloud, hybrid, and on-prem deployments.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="reduction">
                <AccordionTrigger className="text-lg font-semibold">
                  How much data reduction can we expect?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Datasets vary, but clients commonly see 50–90% reductions before full review using ECA + dedupe.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="slack">
                <AccordionTrigger className="text-lg font-semibold">
                  Does Venio support Slack/Teams data?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Yes — Venio ingests modern collaboration platforms natively.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary via-primary/95 to-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Experience the Venio Advantage Today
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Book a personalized demo and see how Venio saves time and cost while improving defensibility.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 group"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white hover:bg-white/90 text-primary text-lg px-8 py-6"
              >
                Request Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyVenio;
