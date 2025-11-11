import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left side - Title and Subtitle */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-24">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">FAQ</span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 mt-3">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
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
                      <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-secondary py-0 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pt-3 whitespace-pre-line">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                    {index < faqs.length - 1 && (
                      <div className="h-[1px] bg-secondary/30"></div>
                    )}
                  </div>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
