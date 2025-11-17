import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Section {
  id: string;
  label: string;
}

interface ScrollProgressIndicatorProps {
  sections: Section[];
}

export const ScrollProgressIndicator = ({ sections }: ScrollProgressIndicatorProps) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group flex items-center gap-3 text-left"
            aria-label={`Navigate to ${section.label}`}
          >
            <div
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                activeSection === section.id
                  ? "bg-secondary w-3 h-3 shadow-lg shadow-secondary/30"
                  : "bg-muted-foreground/30 group-hover:bg-muted-foreground/50"
              )}
            />
            <span
              className={cn(
                "text-xs font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 whitespace-nowrap",
                activeSection === section.id
                  ? "opacity-100 text-secondary"
                  : "text-muted-foreground"
              )}
            >
              {section.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
