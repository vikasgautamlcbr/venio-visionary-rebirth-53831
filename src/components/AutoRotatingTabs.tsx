import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Zap, Brain, Globe } from "lucide-react";

const AutoRotatingTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  const tabs = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with SOC 2 Type II certification and end-to-end encryption",
      videoPlaceholder: "/placeholder.svg"
    },
    {
      icon: Brain,
      title: "AI-Powered Review",
      description: "Reduce review time by 70% with intelligent document analysis and predictive coding",
      videoPlaceholder: "/placeholder.svg"
    },
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description: "Process terabytes of data in hours, not weeks, with our optimized infrastructure",
      videoPlaceholder: "/placeholder.svg"
    },
    {
      icon: Globe,
      title: "Global Deployment",
      description: "Deploy anywhere with cloud, on-premises, or hybrid options to meet your needs",
      videoPlaceholder: "/placeholder.svg"
    }
  ];

  const DURATION = 5000; // 5 seconds per tab

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(0);
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, DURATION);

    return () => clearInterval(interval);
  }, [tabs.length]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + (100 / (DURATION / 50));
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [activeTab]);

  return (
    <section className="py-24 relative -mt-20 mb-20 z-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto glass rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-white/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Tabs */}
            <div className="space-y-2">
              {tabs.map((tab, index) => {
                const Icon = tab.icon;
                const isActive = activeTab === index;
                
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveTab(index);
                      setProgress(0);
                    }}
                    className={`w-full text-left p-6 rounded-xl transition-all duration-300 relative overflow-hidden group ${
                      isActive
                        ? "bg-gradient-to-r from-secondary/20 to-accent/20"
                        : "hover:bg-white/5"
                    }`}
                  >
                    {/* Progress bar */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-secondary to-accent transition-all duration-100"
                        style={{ width: `${progress}%` }}
                      />
                    )}
                    
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-br from-secondary to-accent"
                          : "bg-white/10 group-hover:bg-white/20"
                      }`}>
                        <Icon className={`h-6 w-6 ${isActive ? "text-white" : "text-muted-foreground"}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold mb-2 transition-colors ${
                          isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                        }`}>
                          {tab.title}
                        </h3>
                        <AnimatePresence mode="wait">
                          {isActive && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-sm text-muted-foreground font-body"
                            >
                              {tab.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Video Placeholder */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-video rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 border-2 border-white/20 flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={tabs[activeTab].videoPlaceholder}
                    alt={tabs[activeTab].title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoRotatingTabs;
