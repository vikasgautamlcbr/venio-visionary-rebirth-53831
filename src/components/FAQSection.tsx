import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is eDiscovery Software?",
      answer: "eDiscovery (electronic discovery) software helps legal teams identify, collect, process, review, and produce electronically stored information (ESI) for litigation, investigations, or compliance. Venio's AI-powered platform automates this process, reducing time and costs."
    },
    {
      question: "How does AI Improve eDiscovery?",
      answer: "AI accelerates document review through predictive coding, email threading, and near-duplicate detection. Venio's AI reduces manual effort by 70% and improves accuracy in identifying relevant evidence."
    },
    {
      question: "Is Venio's Platform Secure for Sensitive Legal Data?",
      answer: "Yes. Venio is SOC 2 Type II certified, GDPR-compliant, and offers encryption at rest/in transit. Choose cloud, on-premises, or hybrid deployment to meet your security needs."
    },
    {
      question: "What's the Difference Between Cloud and On-premises eDiscovery?",
      answer: "Cloud: Fast deployment, scalable, and accessible anywhere.\nOn-Premises: Full data control for highly regulated industries.\nVenio offers both, plus hybrid options."
    },
    {
      question: "How Quickly Can I Start Using Venio?",
      answer: "Venio's platform can be set up in minutes. Either cloud, on-premises, or hybrid, our team will assist you with deployment. Schedule a demo today."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-muted/50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left side - Title and Subtitle */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-24">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary/20 to-accent/20 px-6 py-3 rounded-full mb-6">
                  <Sparkles className="h-5 w-5 text-accent" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-muted-foreground font-body leading-relaxed">
                  Everything you need to know about Venio's eDiscovery platform
                </p>
              </div>
            </div>

            {/* Right side - FAQs */}
            <div className="lg:col-span-3">
              <Accordion type="single" collapsible className="space-y-0">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <AccordionItem value={`item-${index}`} className="border-0 py-6">
                      <AccordionTrigger className="text-left text-lg font-bold text-primary hover:text-secondary py-0 hover:no-underline group">
                        <div className="flex items-start gap-4 pr-8">
                          <div className="bg-gradient-to-br from-secondary to-accent text-white w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold group-hover:scale-110 transition-transform">
                            {index + 1}
                          </div>
                          <span>{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground font-body leading-relaxed pt-4 pl-12 whitespace-pre-line">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                    {index < faqs.length - 1 && (
                      <div className="h-[1px] bg-secondary/30"></div>
                    )}
                  </div>
                ))}
              </Accordion>

              <div className="mt-12 glass rounded-2xl p-8 border-2 border-secondary/20">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-secondary/10 to-accent/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Still have questions?
                    </h3>
                    <p className="text-muted-foreground font-body mb-4">
                      Our team is here to help you find the perfect eDiscovery solution
                    </p>
                    <Button className="bg-gradient-to-r from-secondary to-accent hover:opacity-90 text-white">
                      Contact Our Team
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
