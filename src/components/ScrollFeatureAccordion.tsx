import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, Users, Shield, FileText, BarChart3, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
  imagePlaceholder: string;
}

const features: Feature[] = [
  {
    icon: Bell,
    title: "Automated Notifications & Reminders",
    description: "Eliminate manual follow-ups with intelligent, automated custodian notifications",
    details: [
      "Customizable email templates with brand consistency",
      "Smart escalation workflows for non-responses",
      "Multi-channel notifications (email, SMS, portal)",
      "Scheduled reminders with configurable intervals",
    ],
    imagePlaceholder: "Notification Dashboard",
  },
  {
    icon: Users,
    title: "Custodian Management Portal",
    description: "Empower custodians with a self-service portal for seamless interaction",
    details: [
      "One-click acknowledgment and confirmation",
      "Secure document upload and preservation",
      "Real-time status tracking and updates",
      "Interactive Q&A with legal team",
    ],
    imagePlaceholder: "Custodian Portal Interface",
  },
  {
    icon: Shield,
    title: "Complete Audit & Defensibility",
    description: "Build ironclad defensibility with comprehensive audit trails",
    details: [
      "Timestamped records of every action",
      "Immutable audit logs for legal review",
      "Exportable compliance reports",
      "Chain-of-custody documentation",
    ],
    imagePlaceholder: "Audit Trail View",
  },
  {
    icon: FileText,
    title: "Legal Hold Templates",
    description: "Standardize and accelerate hold deployment with reusable templates",
    details: [
      "Library of pre-approved hold notices",
      "Custom template builder with legal review",
      "Matter-specific template variations",
      "Version control and approval workflow",
    ],
    imagePlaceholder: "Template Library",
  },
  {
    icon: BarChart3,
    title: "Real-Time Dashboards & Analytics",
    description: "Gain instant visibility with comprehensive reporting and analytics",
    details: [
      "Live status dashboard for all active holds",
      "Custodian response rate tracking",
      "Matter-level and portfolio analytics",
      "Custom report builder with exports",
    ],
    imagePlaceholder: "Analytics Dashboard",
  },
  {
    icon: CheckCircle,
    title: "Release & Lifecycle Management",
    description: "Manage the complete hold lifecycle from issuance to release",
    details: [
      "Controlled release workflows with approvals",
      "Bulk operations for efficiency",
      "Release confirmation and documentation",
      "Post-release compliance tracking",
    ],
    imagePlaceholder: "Release Workflow",
  },
];

export const ScrollFeatureAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = featureRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index);
            }
          });
        },
        {
          threshold: 0.6,
          rootMargin: "-20% 0px -20% 0px",
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Complete Legal Hold Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage legal holds efficiently and defensibly
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Accordion Items */}
          <div className="space-y-4 lg:sticky lg:top-24">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  ref={(el) => (featureRefs.current[index] = el)}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "cursor-pointer transition-all duration-500",
                    "scroll-mt-24"
                  )}
                >
                  <Card
                    className={cn(
                      "transition-all duration-500 border-2",
                      isActive
                        ? "border-accent shadow-lg shadow-accent/20 bg-accent/5"
                        : "border-border/50 hover:border-accent/50 bg-card/50"
                    )}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500",
                            isActive
                              ? "bg-accent text-white scale-110"
                              : "bg-secondary/10 text-secondary"
                          )}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3
                            className={cn(
                              "text-xl font-semibold mb-2 transition-colors duration-300",
                              isActive ? "text-foreground" : "text-foreground/80"
                            )}
                          >
                            {feature.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            {feature.description}
                          </p>

                          {/* Expandable details */}
                          <div
                            className={cn(
                              "overflow-hidden transition-all duration-500",
                              isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                            )}
                          >
                            <ul className="space-y-2 pt-2 border-t border-border/50">
                              {feature.details.map((detail, i) => (
                                <li
                                  key={i}
                                  className="text-sm text-muted-foreground flex items-start gap-2 animate-fade-in"
                                  style={{ animationDelay: `${i * 50}ms` }}
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0"></div>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Right side - Image Placeholder (sticky) */}
          <div className="lg:sticky lg:top-24 hidden lg:block">
            <div className="relative">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute inset-0 transition-all duration-700",
                    activeIndex === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  )}
                >
                  <Card className="glass overflow-hidden border-2 border-accent/20">
                    <CardContent className="p-0">
                      <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 flex items-center justify-center relative overflow-hidden">
                        {/* Animated background */}
                        <div className="absolute inset-0">
                          <div className="absolute top-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
                          <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-500"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 text-center p-8">
                          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center backdrop-blur">
                            <feature.icon className="h-10 w-10 text-accent" />
                          </div>
                          <p className="text-xl font-semibold text-foreground mb-2">
                            {feature.imagePlaceholder}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Product Screenshot
                          </p>
                        </div>

                        {/* Decorative grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            {/* Placeholder container for layout */}
            <div className="aspect-[4/3]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
