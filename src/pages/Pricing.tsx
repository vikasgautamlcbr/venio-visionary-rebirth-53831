import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, TrendingDown, DollarSign, Users, Database, Clock } from "lucide-react";
import ROICalculator from "@/components/ROICalculator";

const Pricing = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees or surprise charges. Pay only for what you use with clear, upfront pricing."
    },
    {
      icon: TrendingDown,
      title: "Cost-Effective",
      description: "Save up to 80% compared to traditional eDiscovery platforms without compromising on features."
    },
    {
      icon: Users,
      title: "Unlimited Users",
      description: "Add as many team members as you need at no additional per-user cost."
    },
    {
      icon: Database,
      title: "Scalable Storage",
      description: "Grow your data volume seamlessly without worrying about storage limitations."
    },
    {
      icon: Clock,
      title: "No Long-Term Contracts",
      description: "Flexible monthly billing with no lock-in periods. Cancel or adjust anytime."
    },
    {
      icon: Check,
      title: "All Features Included",
      description: "Access our complete suite of tools including AI-powered search, analytics, and automation."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get Quote in Seconds
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Transparent, flexible pricing that scales with your needs. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose Venio Pricing</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Experience cost-effective eDiscovery with transparent pricing and unlimited flexibility
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="glass hover:shadow-lg transition-all">
                <CardHeader>
                  <benefit.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Calculate Your Savings</h2>
            <p className="text-muted-foreground text-lg">
              See how much you can save by switching to Venio
            </p>
          </div>

          <ROICalculator />

          <div className="text-center mt-8">
            <Button size="lg" className="px-8">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Price Comparison</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
              Industry-standard pricing based on per-GB storage costs. All competitors charge additional fees for users, processing, and analytics.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="glass overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-6 font-semibold">Platform</th>
                      <th className="text-center p-6 font-semibold">Price per GB/Month</th>
                      <th className="text-center p-6 font-semibold">User Fees</th>
                      <th className="text-center p-6 font-semibold">Processing Fees</th>
                      <th className="text-center p-6 font-semibold">Total Cost (100GB)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border bg-primary/5">
                      <td className="p-6 font-semibold text-primary">Venio</td>
                      <td className="p-6 text-center font-bold text-primary">$0.50</td>
                      <td className="p-6 text-center text-green-600">Unlimited</td>
                      <td className="p-6 text-center text-green-600">Included</td>
                      <td className="p-6 text-center font-bold text-primary">$50/mo</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-6">Relativity</td>
                      <td className="p-6 text-center">$2.50</td>
                      <td className="p-6 text-center text-muted-foreground">$50-100/user</td>
                      <td className="p-6 text-center text-muted-foreground">$0.15/GB</td>
                      <td className="p-6 text-center font-semibold">$250/mo</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-6">Everlaw</td>
                      <td className="p-6 text-center">$2.00</td>
                      <td className="p-6 text-center text-muted-foreground">$75/user</td>
                      <td className="p-6 text-center text-muted-foreground">$0.10/GB</td>
                      <td className="p-6 text-center font-semibold">$200/mo</td>
                    </tr>
                    <tr>
                      <td className="p-6">Nuix</td>
                      <td className="p-6 text-center">$2.25</td>
                      <td className="p-6 text-center text-muted-foreground">$60-90/user</td>
                      <td className="p-6 text-center text-muted-foreground">$0.12/GB</td>
                      <td className="p-6 text-center font-semibold">$225/mo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="font-semibold mb-3 text-lg">Pricing Methodology</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <Check className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>Pricing based on publicly available information and industry reports from 2024</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>Competitor pricing includes base storage costs plus typical user licensing and processing fees</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>Venio includes all features (unlimited users, processing, analytics) in the base price</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>Actual competitor costs may vary based on contract terms and volume discounts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
