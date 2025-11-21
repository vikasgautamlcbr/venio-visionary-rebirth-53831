import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FAQSection from "@/components/FAQSection";
import { 
  CheckCircle, 
  X, 
  Shield, 
  Zap, 
  Cloud, 
  DollarSign, 
  FileCheck, 
  Database,
  ArrowRight,
  Download,
  Sparkles,
  Play,
  Brain,
  Workflow,
  Users,
  Clock
} from "lucide-react";
import { useEffect } from "react";
import amentum from "@/assets/clients/amentum.webp";
import consilio from "@/assets/clients/consilio.webp";
import array from "@/assets/clients/array.webp";
import haugPartners from "@/assets/clients/haug-partners.webp";
import nixonPeabody from "@/assets/clients/nixon-peabody.webp";
import proteus from "@/assets/clients/proteus.webp";
import cds from "@/assets/clients/cds.webp";
import epario from "@/assets/clients/epario.webp";

const WhyVenio = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden gradient-animated pt-32 pb-36">
          {/* Dynamic Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-32 right-10 w-[500px] h-[500px] bg-accent/25 rounded-full blur-3xl float-delayed"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="absolute top-40 right-20 w-20 h-20 border-2 border-white/20 rounded-lg animate-spin-slow"></div>
            <div className="absolute bottom-40 left-32 w-16 h-16 border-2 border-accent/30 rotate-45 animate-bounce-slow"></div>
            <div className="absolute top-1/3 left-20 w-12 h-12 bg-secondary/20 rounded-full animate-float"></div>
            <div className="absolute bottom-1/3 right-40 w-24 h-24 border-2 border-white/10 rounded-full animate-pulse"></div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary/80"></div>
          
          <div className="relative z-10 container mx-auto px-6 max-w-5xl flex-1 flex items-center">
            <div className="text-center animate-fade-in w-full">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                The Venio Advantage: Faster, Smarter, Defensible eDiscovery
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-10">
                End-to-end eDiscovery in one platform — AI acceleration, flexible deployment, and enterprise-grade defensibility.
              </p>

              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 glow-accent-hover group"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Client Logo Carousel - Full Width */}
          <div className="relative z-10 w-full mt-16">
            <p className="text-white/70 text-sm mb-6 font-body text-center">Trusted by leading organizations</p>
            <div className="overflow-hidden py-6">
              <div className="flex gap-24 animate-scroll">
                {/* First set of logos */}
                {[
                  { src: amentum, name: "Amentum" },
                  { src: array, name: "Array" },
                  { src: cds, name: "CDS" },
                  { src: consilio, name: "Consilio" },
                  { src: epario, name: "Epario" },
                  { src: haugPartners, name: "Haug Partners" },
                  { src: nixonPeabody, name: "Nixon Peabody" },
                  { src: proteus, name: "Proteus" }
                ].map((logo, index) => (
                  <div 
                    key={`first-${index}`} 
                    className="flex-shrink-0"
                  >
                    <img 
                      src={logo.src} 
                      alt={logo.name} 
                      className="h-8 md:h-10 w-auto object-contain brightness-0 invert"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {[
                  { src: amentum, name: "Amentum" },
                  { src: array, name: "Array" },
                  { src: cds, name: "CDS" },
                  { src: consilio, name: "Consilio" },
                  { src: epario, name: "Epario" },
                  { src: haugPartners, name: "Haug Partners" },
                  { src: nixonPeabody, name: "Nixon Peabody" },
                  { src: proteus, name: "Proteus" }
                ].map((logo, index) => (
                  <div 
                    key={`second-${index}`} 
                    className="flex-shrink-0"
                  >
                    <img 
                      src={logo.src} 
                      alt={logo.name} 
                      className="h-8 md:h-10 w-auto object-contain brightness-0 invert"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 1 - The Problem */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Why other eDiscovery approaches fail
              </h2>
              <p className="text-lg text-muted-foreground">
                Many teams stitch together point tools, legacy platforms, and manual processes. The result: slower timelines, high cost, fragmented workflows, and increased legal risk. Venio was built to remove those barriers—by unifying process, applying AI where it matters, and keeping control where it's needed.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="glass text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
                    <Workflow className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Fragmented Workflows</h3>
                  <p className="text-muted-foreground">Multiple tools, many handoffs.</p>
                </CardContent>
              </Card>

              <Card className="glass text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Slow Review Cycles</h3>
                  <p className="text-muted-foreground">Linear review that drags on.</p>
                </CardContent>
              </Card>

              <Card className="glass text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
                    <DollarSign className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Hidden Costs</h3>
                  <p className="text-muted-foreground">Hosting, per-GB fees, and vendor reliance.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Venio vs others — at a glance</h2>
              <p className="text-lg text-muted-foreground">
                See the differences that matter when evaluating platforms for enterprise discovery.
              </p>
            </div>

            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden glass rounded-2xl border border-border/50">
                  <table className="min-w-full divide-y divide-border/50">
                    <thead>
                      <tr className="bg-muted/30">
                        <th className="text-left p-6 font-semibold text-foreground">Capability</th>
                        <th className="text-center p-6 font-semibold bg-accent/10 text-accent border-x-2 border-accent/30">Venio</th>
                        <th className="text-center p-6 font-semibold text-foreground">Legacy Tools</th>
                        <th className="text-center p-6 font-semibold text-foreground">Point Solutions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                      {[
                        { capability: "End-to-end platform", venio: true, legacy: false, point: false },
                        { capability: "AI/TAR/CAL built-in", venio: true, legacy: false, point: "partial" },
                        { capability: "Deployment flexibility", venio: "Cloud / Hybrid / On-prem", legacy: "Limited", point: "Cloud only" },
                        { capability: "Early Case Assessment (ECA)", venio: "Native", legacy: "Add-on", point: "Rare" },
                        { capability: "Data reduction before review", venio: "Up to 90%", legacy: "Low", point: "Variable" },
                        { capability: "Defensible audit trails", venio: "Full", legacy: "Partial", point: "Often missing" },
                        { capability: "Predictable cost", venio: "Designed for it", legacy: "Hard to predict", point: "Variable" },
                      ].map((row, index) => (
                        <tr key={index} className="hover:bg-muted/20 transition-colors">
                          <td className="p-6 font-medium text-foreground">{row.capability}</td>
                          <td className="p-6 text-center bg-accent/5 border-x-2 border-accent/20">
                            {typeof row.venio === "boolean" ? (
                              row.venio ? (
                                <CheckCircle className="h-6 w-6 text-accent mx-auto" />
                              ) : (
                                <X className="h-6 w-6 text-red-500 mx-auto" />
                              )
                            ) : (
                              <span className="text-sm font-semibold text-accent">{row.venio}</span>
                            )}
                          </td>
                          <td className="p-6 text-center">
                            {typeof row.legacy === "boolean" ? (
                              row.legacy ? (
                                <CheckCircle className="h-6 w-6 text-green-600 mx-auto" />
                              ) : (
                                <X className="h-6 w-6 text-red-500 mx-auto" />
                              )
                            ) : (
                              <span className="text-sm text-muted-foreground">{row.legacy}</span>
                            )}
                          </td>
                          <td className="p-6 text-center">
                            {typeof row.point === "boolean" ? (
                              row.point ? (
                                <CheckCircle className="h-6 w-6 text-green-600 mx-auto" />
                              ) : (
                                <X className="h-6 w-6 text-red-500 mx-auto" />
                              )
                            ) : row.point === "partial" ? (
                              <span className="text-sm text-yellow-600 font-medium">Partial</span>
                            ) : (
                              <span className="text-sm text-muted-foreground">{row.point}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" className="group">
                Download the Venio Comparison Kit
                <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* The 6 Pillars Section */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">The pillars of Venio Advantage</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Unified End-to-End",
                  description: "One platform handling Legal Hold → Ingestion → ECA → Review → Production — fewer transfers, less risk.",
                  imagePlaceholder: "unified-workflow.gif"
                },
                {
                  icon: Brain,
                  title: "AI-Powered Acceleration",
                  description: "CAL/TAR, prioritization, clustering, and auto-tagging reduce reviewer workload and speed insights.",
                  imagePlaceholder: "ai-acceleration.gif"
                },
                {
                  icon: Cloud,
                  title: "Flexible Deployment",
                  description: "Cloud, hybrid, or on-prem—choose what fits your security, governance, and budget model.",
                  imagePlaceholder: "flexible-deployment.gif"
                },
                {
                  icon: DollarSign,
                  title: "Radical Cost Control",
                  description: "Early culling and optimized hosting deliver predictable total cost of ownership.",
                  imagePlaceholder: "cost-control.gif"
                },
                {
                  icon: FileCheck,
                  title: "Defensible Process & Auditability",
                  description: "Full, immutable audit trails, custodial tracking, and production QC built in.",
                  imagePlaceholder: "audit-trails.gif"
                },
                {
                  icon: Database,
                  title: "Modern Data Coverage",
                  description: "Native ingestion and handling for email, cloud apps, chats, multimedia, and mobile sources.",
                  imagePlaceholder: "data-coverage.gif"
                }
              ].map((pillar, index) => (
                <Card key={index} className="glass hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-0">
                    {/* Image/GIF Placeholder */}
                    <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                      <div className="relative z-10 text-center p-6">
                        <pillar.icon className="h-12 w-12 text-accent mx-auto mb-2 group-hover:scale-110 transition-transform" />
                        <p className="text-xs text-muted-foreground font-mono">{pillar.imagePlaceholder}</p>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{pillar.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Real results teams see with Venio</h2>
              <p className="text-lg text-muted-foreground">Measurable improvements you can expect</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "Up to 90%", label: "Data reduction before review", icon: Database },
                { value: "70%", label: "Faster time to launch holds and begin review", icon: Clock },
                { value: "40%", label: "Higher custodian response and compliance rates", icon: Users },
                { value: "64%", label: "Common discovery failures avoidable", icon: Shield }
              ].map((metric, index) => (
                <Card key={index} className="glass text-center hover:shadow-xl transition-all duration-300 border-border/50">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center">
                      <metric.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <div className="text-5xl font-bold text-secondary">{metric.value}</div>
                    <p className="text-sm text-muted-foreground font-medium">{metric.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Common Gaps Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Common gaps in competing approaches</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Without native ECA, automation, or integrated audit trails, teams face high costs, slower turnarounds, and compliance risk.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Problems */}
              <div className="space-y-6">
                <div className="glass-dark rounded-2xl p-8 border-2 border-red-500/20">
                  <h3 className="text-2xl font-bold mb-6 text-red-400 flex items-center gap-3">
                    <X className="h-6 w-6" />
                    Other Tools
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Cloud-only lock-in with no deployment flexibility",
                      "Expensive add-ons required for basic ECA functionality",
                      "Unpredictable per-GB pricing and hidden fees",
                      "Limited automation requiring manual processes",
                      "Fragmented workflows across multiple tools"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5">
                        <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div className="space-y-6">
                <div className="glass rounded-2xl p-8 border-2 border-accent/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
                  <h3 className="text-2xl font-bold mb-6 text-accent flex items-center gap-3 relative z-10">
                    <CheckCircle className="h-6 w-6" />
                    Venio Advantage
                  </h3>
                  <div className="space-y-4 relative z-10">
                    {[
                      "Flexible deployment: cloud, hybrid, or on-premises",
                      "Built-in ECA with no additional licensing fees",
                      "Transparent, predictable pricing model",
                      "Scriptable automation and AI-powered workflows",
                      "Complete end-to-end platform integration"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Capabilities Section */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Platform capabilities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the complete eDiscovery workflow with interactive demonstrations
              </p>
            </div>

            <div className="space-y-8">
              {/* Feature 1: Unified Workflow - Text Left, Video Right */}
              <div className="glass rounded-3xl p-8 md:p-12 border-2 border-muted-foreground/10 hover:border-accent/30 transition-all duration-300 glow-on-hover hover:shadow-xl group">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Workflow className="w-7 h-7 text-blue-600" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-primary">
                        Unified Workflow
                      </h3>
                    </div>
                    <p className="text-lg text-muted-foreground font-body leading-relaxed">
                      Legal Hold automation, secure ingestion, built-in ECA, review, and production—all in one seamless platform.
                    </p>
                  </div>
                  
                  <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border-2 border-muted-foreground/20 flex items-center justify-center overflow-hidden group">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-accent" />
                      </div>
                      <p className="text-sm text-muted-foreground font-mono">Workflow Demo Video</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 & 3: Two Cards Side by Side */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Card 1: AI & Review */}
                <div className="glass rounded-3xl p-8 border-2 border-muted-foreground/10 hover:border-secondary/30 transition-all duration-300 glow-on-hover hover:shadow-xl group">
                  <div className="relative aspect-video bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl border-2 border-muted-foreground/20 flex items-center justify-center mb-8 overflow-hidden group">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-secondary" />
                      </div>
                      <p className="text-sm text-muted-foreground font-mono">AI Review Demo</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Brain className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary">
                      AI & Review
                    </h3>
                  </div>
                  <p className="text-lg text-muted-foreground font-body leading-relaxed">
                    Continuous Active Learning (CAL), predictive prioritization, near-duplicate clustering.
                  </p>
                </div>

                {/* Card 2: Early Case Assessment */}
                <div className="glass rounded-3xl p-8 border-2 border-muted-foreground/10 hover:border-accent/30 transition-all duration-300 glow-on-hover hover:shadow-xl group">
                  <div className="relative aspect-video bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl border-2 border-muted-foreground/20 flex items-center justify-center mb-8 overflow-hidden group">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-accent" />
                      </div>
                      <p className="text-sm text-muted-foreground font-mono">ECA Demo</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary">
                      Early Case Assessment
                    </h3>
                  </div>
                  <p className="text-lg text-muted-foreground font-body leading-relaxed">
                    Sampling, custodian prioritization, fast analytics, and exportable reports.
                  </p>
                </div>
              </div>

              {/* Feature 4: Production - Video Left, Text Right */}
              <div className="glass rounded-3xl p-8 md:p-12 border-2 border-muted-foreground/10 hover:border-secondary/30 transition-all duration-300 glow-on-hover hover:shadow-xl group">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                  <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border-2 border-muted-foreground/20 flex items-center justify-center overflow-hidden group">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-secondary" />
                      </div>
                      <p className="text-sm text-muted-foreground font-mono">Production Demo</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0">
                        <FileCheck className="w-7 h-7 text-green-600" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-primary">
                        Production & Export
                      </h3>
                    </div>
                    <p className="text-lg text-muted-foreground font-body leading-relaxed">
                      Native load-file generation, redaction tools, QC, and defensible export processes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Features Row */}
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="glass hover:shadow-xl transition-all duration-300 border-2 border-muted-foreground/10 hover:border-accent/30">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                        <Shield className="h-6 w-6 text-red-600" />
                      </div>
                      <h3 className="text-xl font-bold">Security & Compliance</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Encryption, RBAC, immutable logs, SOC/ISO controls.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass hover:shadow-xl transition-all duration-300 border-2 border-muted-foreground/10 hover:border-accent/30">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                        <Database className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold">Integrations</h3>
                    </div>
                    <p className="text-muted-foreground">
                      O365, Google Workspace, Slack, Teams, cloud storage, forensic exports.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <CaseStudiesSection />

        {/* Testimonials Section - Using VenioLegalHold style */}
        <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold mb-4">Customers say it best</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from organizations that transformed their eDiscovery with Venio
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: "Venio cut our data sent to review by over 75%, saving months of work.",
                  author: "Senior eDiscovery Manager",
                  company: "Global Bank",
                  metric: "75%",
                  metricLabel: "Data reduction"
                },
                {
                  quote: "Unified platform, clearer audits, faster response times.",
                  author: "Litigation Partner",
                  company: "AmLaw 100 firm",
                  metric: "70%",
                  metricLabel: "Faster response"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="glass hover:shadow-xl transition-all duration-300 border-border/50">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="h-8 w-8 text-accent" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent mb-1">{testimonial.metric}</div>
                        <p className="text-sm text-muted-foreground">{testimonial.metricLabel}</p>
                      </div>
                    </div>
                    <p className="text-lg italic leading-relaxed">"{testimonial.quote}"</p>
                    <div className="pt-4 border-t border-border/50">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section - Bento Card Layout */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Resources & comparison kit</h2>
              <p className="text-lg text-muted-foreground">
                Explore whitepapers, product briefs, and comparison guides to evaluate Venio in detail.
              </p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Featured Large Card */}
              <div className="md:col-span-2 md:row-span-2">
                <Card className="glass hover:shadow-2xl transition-all duration-300 cursor-pointer h-full group overflow-hidden border-2 border-accent/20">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="relative h-64 bg-gradient-to-br from-accent/20 via-primary/10 to-accent/20 overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-2xl bg-white shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Download className="h-16 w-16 text-accent" />
                        </div>
                      </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4 w-fit">
                        <Sparkles className="h-3 w-3 text-accent" />
                        <span className="text-xs font-medium text-accent">Featured</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">Complete Comparison Kit</h3>
                      <p className="text-muted-foreground mb-6 flex-1">
                        Comprehensive guide comparing Venio against legacy tools and point solutions. Includes feature matrix, pricing analysis, and ROI calculator.
                      </p>
                      <Button className="w-full group">
                        Download Full Kit
                        <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Smaller Cards */}
              <Card className="glass hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <FileCheck className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold mb-2">Venio ECA Brief</h3>
                  <p className="text-sm text-muted-foreground mb-4">Early Case Assessment features and benefits</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-3 w-3" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Brain className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-bold mb-2">Review Overview</h3>
                  <p className="text-sm text-muted-foreground mb-4">AI-powered review capabilities and workflows</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-3 w-3" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <DollarSign className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-bold mb-2">ROI Calculator</h3>
                  <p className="text-sm text-muted-foreground mb-4">Calculate your potential cost savings</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <ArrowRight className="mr-2 h-3 w-3" />
                    Launch Tool
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-bold mb-2">Security Whitepaper</h3>
                  <p className="text-sm text-muted-foreground mb-4">Compliance and security architecture</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-3 w-3" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Final CTA */}
        <section className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 gradient-animated"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary/80"></div>
          
          <div className="container mx-auto max-w-4xl relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Experience the Venio Advantage Today
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Book a personalized demo and see how Venio saves time and cost while improving defensibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 group">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Request Pricing
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WhyVenio;