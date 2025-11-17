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
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate progress from when section enters viewport until it exits
      const start = windowHeight;
      const end = -sectionHeight;
      const progress = Math.max(0, Math.min(1, (start - sectionTop) / (start - end)));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate individual card progress (each card animates in succession)
  const getCardProgress = (index: number) => {
    const cardStart = index / benefits.length;
    const cardEnd = (index + 1) / benefits.length;
    const cardProgress = Math.max(0, Math.min(1, (scrollProgress - cardStart) / (cardEnd - cardStart)));
    return cardProgress;
  };

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-gradient-to-b from-background via-muted/20 to-background min-h-[200vh]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4">
            Why Teams Choose Venio Legal Hold
          </h2>
        </div>

        {/* Stacking Container */}
        <div className="relative max-w-5xl mx-auto" style={{ height: '66vw', maxHeight: '600px' }}>
          {benefits.map((benefit, index) => {
            const progress = getCardProgress(index);
            const translateY = (1 - progress) * 100;
            const scale = 0.9 + (progress * 0.1);
            const opacity = progress;
            
            return (
              <div
                key={index}
                className="absolute inset-0 transition-all duration-300"
                style={{
                  transform: `translateY(${translateY}%) scale(${scale})`,
                  opacity: opacity,
                  zIndex: index,
                }}
              >
                <Card className="glass shadow-2xl border-border/50 overflow-hidden h-full w-full">
                  <CardContent className="p-0 h-full">
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
            );
          })}
        </div>
      </div>
    </section>
  );
};
