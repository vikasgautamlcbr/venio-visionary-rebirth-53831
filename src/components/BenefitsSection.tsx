import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { Sparkles, Shield, Zap } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Automation & Consistency",
    description: "Eliminate manual spreadsheets and fragmented workflows. Venio automates notices, reminders, and escalations—ensuring every custodian stays aligned from day one.",
  },
  {
    icon: Shield,
    title: "Defensibility & Compliance",
    description: "Maintain complete, audit-ready records of every action. Track acknowledgments, preserve data properly, and reduce the risk of spoliation or sanctions with built-in compliance safeguards.",
  },
  {
    icon: Zap,
    title: "Speed & Visibility",
    description: "Launch holds in minutes, not hours. Monitor custodian responses in real time, get instant visibility into status updates, and keep your entire legal hold process moving without bottlenecks.",
  },
];

export const BenefitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 sticky top-24 z-10 bg-background/80 backdrop-blur-sm py-6">
          <h2 className="text-4xl font-heading font-bold mb-4">
            Why Teams Choose Venio Legal Hold
          </h2>
        </div>

        {/* Stacking Cards */}
        <div className="max-w-5xl mx-auto space-y-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="sticky"
              style={{ 
                top: `${120 + (index * 24)}px`,
                zIndex: index + 1
              }}
            >
              <Card className="glass shadow-2xl border-border/50 overflow-hidden w-full aspect-[3/2] bg-background">
                <CardContent className="p-0 h-full bg-background">
                  <div className="grid md:grid-cols-2 gap-0 h-full">
                    {/* Text Content */}
                    <div className="p-10 flex flex-col justify-center space-y-4">
                      <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-2">
                        <benefit.icon className="h-7 w-7 text-secondary" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Image Placeholder */}
                    <div className="relative h-full bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center">
                      <div className="text-center text-muted-foreground/50">
                        <benefit.icon className="h-16 w-16 mx-auto mb-2" />
                        <p className="text-sm">Image Placeholder</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Extra space to allow scrolling */}
        <div className="h-96"></div>
      </div>
    </section>
  );
};
