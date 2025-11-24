import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Video, BookOpen, FileCheck, Download, Newspaper, BookMarked, TrendingUp, Lightbulb, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const Resources = () => {
  const [topicFilter, setTopicFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  // Color accents for resource types
  const typeColors: Record<string, { bg: string; border: string; text: string; badge: string }> = {
    "case-study": { 
      bg: "bg-emerald-500/5", 
      border: "border-emerald-500/30 hover:border-emerald-500/50", 
      text: "text-emerald-600 dark:text-emerald-400",
      badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
    },
    "blog": { 
      bg: "bg-blue-500/5", 
      border: "border-blue-500/30 hover:border-blue-500/50", 
      text: "text-blue-600 dark:text-blue-400",
      badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30"
    },
    "white-paper": { 
      bg: "bg-purple-500/5", 
      border: "border-purple-500/30 hover:border-purple-500/50", 
      text: "text-purple-600 dark:text-purple-400",
      badge: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30"
    },
    "product-brief": { 
      bg: "bg-orange-500/5", 
      border: "border-orange-500/30 hover:border-orange-500/50", 
      text: "text-orange-600 dark:text-orange-400",
      badge: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30"
    },
    "ebook": { 
      bg: "bg-pink-500/5", 
      border: "border-pink-500/30 hover:border-pink-500/50", 
      text: "text-pink-600 dark:text-pink-400",
      badge: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/30"
    },
    "video": { 
      bg: "bg-red-500/5", 
      border: "border-red-500/30 hover:border-red-500/50", 
      text: "text-red-600 dark:text-red-400",
      badge: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30"
    },
    "brochure": { 
      bg: "bg-indigo-500/5", 
      border: "border-indigo-500/30 hover:border-indigo-500/50", 
      text: "text-indigo-600 dark:text-indigo-400",
      badge: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30"
    },
    "press-release": { 
      bg: "bg-cyan-500/5", 
      border: "border-cyan-500/30 hover:border-cyan-500/50", 
      text: "text-cyan-600 dark:text-cyan-400",
      badge: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30"
    },
    "how-to-guide": { 
      bg: "bg-amber-500/5", 
      border: "border-amber-500/30 hover:border-amber-500/50", 
      text: "text-amber-600 dark:text-amber-400",
      badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30"
    },
    "infographic": { 
      bg: "bg-teal-500/5", 
      border: "border-teal-500/30 hover:border-teal-500/50", 
      text: "text-teal-600 dark:text-teal-400",
      badge: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30"
    },
  };

  const getBentoSpan = (index: number) => {
    // More compact bento pattern with less blank space
    const pattern = [
      "md:col-span-2 md:row-span-1", // Wide
      "md:col-span-1 md:row-span-1", // Regular
      "md:col-span-1 md:row-span-1", // Regular
      "md:col-span-1 md:row-span-1", // Regular
      "md:col-span-2 md:row-span-1", // Wide
      "md:col-span-1 md:row-span-1", // Regular
    ];
    return pattern[index % pattern.length];
  };

  const resourceTypes = [
    { value: "all", label: "All Types" },
    { value: "case-study", label: "Case Studies" },
    { value: "blog", label: "Blogs" },
    { value: "white-paper", label: "White Papers" },
    { value: "product-brief", label: "Product Briefs" },
    { value: "ebook", label: "eBooks" },
    { value: "video", label: "Videos" },
    { value: "brochure", label: "Brochures" },
    { value: "press-release", label: "Press Releases" },
    { value: "how-to-guide", label: "How-to Guides" },
    { value: "infographic", label: "Infographics" },
  ];

  const topics = [
    { value: "all", label: "All Topics" },
    { value: "cloud-ediscovery", label: "Cloud EDiscovery" },
    { value: "legal-hold", label: "Legal Hold" },
    { value: "eca", label: "Early Case Assessment (ECA)" },
    { value: "review", label: "Review" },
    { value: "ediscovery-systems", label: "EDiscovery Systems" },
    { value: "legal-news", label: "Legal News And Research" },
  ];

  const resources = [
    {
      id: 1,
      title: "What Is FRCP Rule 33? A Reference Guide",
      description: "The U.S. federal court system is highly regulated and uniform across all states. Understanding FRCP Rule 33 for interrogatories in modern litigation.",
      type: "blog",
      topic: "legal-news",
      icon: Lightbulb,
      date: "Monday, 18 November, 2024",
      fileUrl: "https://www.veniosystems.com/blog/what-is-frcp-rule-33-a-reference-guide/",
      featured: false
    },
    {
      id: 2,
      title: "Why Premium eDiscovery Pricing Doesn't Guarantee Better Results",
      description: "Many legal teams still believe premium eDiscovery software pricing equals superior performance. Learn why that's not always the case.",
      type: "blog",
      topic: "ediscovery-systems",
      icon: Lightbulb,
      date: "Thursday, 10 October, 2024",
      fileUrl: "https://www.veniosystems.com/blog/why-premium-ediscovery-software-pricing-doesnt-guarantee-better-results/",
      featured: false
    },
    {
      id: 3,
      title: "Understanding ESI Protocol: The Definitive Checklist",
      description: "In modern litigation, the battle is won or lost before discovery even begins. Master ESI protocol formulation with this comprehensive guide.",
      type: "blog",
      topic: "legal-news",
      icon: Lightbulb,
      date: "Wednesday, 09 October, 2024",
      fileUrl: "https://www.veniosystems.com/blog/understanding-formulating-esi-protocol-checklist/",
      featured: false
    },
    {
      id: 4,
      title: "What is ESI? The Ultimate Guide to ESI in Modern eDiscovery",
      description: "Electronically Stored Information (ESI) isn't just data; it's the digital battlefield of modern litigation. Learn everything about ESI.",
      type: "blog",
      topic: "legal-news",
      icon: Lightbulb,
      date: "Tuesday, 08 October, 2024",
      fileUrl: "https://www.veniosystems.com/blog/what-is-esi-legal-hold-guide/",
      featured: false
    },
    {
      id: 5,
      title: "Petabyte-Scale eDiscovery: Fortune 100 Financial Services",
      description: "How a global bank processed 120+TB of data with full PII protection, achieving 72% data reduction and 2.1× review efficiency for a major regulatory investigation.",
      type: "case-study",
      topic: "ediscovery-systems",
      icon: TrendingUp,
      date: "Monday, 18 November, 2024",
      fileUrl: "/resources/Case_Study-Fortune_100_Financial_Services.pdf",
      featured: true
    },
    {
      id: 6,
      title: "Weekly Productions, Zero Rejections: AmLaw 50 Success",
      description: "Discover how an AmLaw 50 firm achieved flawless weekly production cycles with zero rejections using Venio's defensible workflows.",
      type: "case-study",
      topic: "review",
      icon: TrendingUp,
      date: "Monday, 18 November, 2024",
      fileUrl: "/resources/Case_Study-AmLaw_50_Success_Story.pdf",
      featured: true
    },
    {
      id: 7,
      title: "Fortune 100 Bank Cuts eDiscovery Costs with Venio",
      description: "When eDiscovery scales into the hundreds of terabytes, every inefficiency carries a cost. See how this bank transformed their process.",
      type: "blog",
      topic: "review",
      icon: Lightbulb,
      date: "Friday, 04 October, 2024",
      fileUrl: "https://www.veniosystems.com/blog/fortune-100-bank-cuts-ediscovery-costs-with-venio/",
      featured: false
    },
    {
      id: 8,
      title: "Audit-Ready Federal Workflows: Agency Success Story",
      description: "How Venio created defensible pipelines for a federal agency, reducing operator hours by 35% and achieving 100% audit trail compliance.",
      type: "case-study",
      topic: "legal-news",
      icon: TrendingUp,
      date: "Monday, 18 November, 2024",
      fileUrl: "/resources/Case_Study-Federal_Agency_Workflows.pdf",
      featured: true
    },
    {
      id: 9,
      title: "Understanding eDiscovery Software Costs",
      description: "eDiscovery can be one of the priciest components of any legal case. Learn tips for smarter spending and cost control.",
      type: "blog",
      topic: "ediscovery-systems",
      icon: Lightbulb,
      date: "Monday, 30 September, 2024",
      fileUrl: "https://www.veniosystems.com/blog/understanding-ediscovery-software-costs/",
      featured: false
    },
    {
      id: 10,
      title: "Venio Review Product Brief",
      description: "The Complete Review Platform for Modern Legal Teams. Discover how Venio Review delivers fast, intuitive, and reliable document review at scale.",
      type: "product-brief",
      topic: "review",
      icon: FileCheck,
      date: "Monday, 18 November, 2024",
      fileUrl: "/resources/Product_Brief-Venio_Review.pdf",
      featured: true
    },
    {
      id: 11,
      title: "Venio ECA Product Brief",
      description: "Reduce risk and make your discovery 10x faster with Venio ECA. Cut data volume sent to external partners by up to 90%.",
      type: "product-brief",
      topic: "eca",
      icon: FileCheck,
      date: "Monday, 18 November, 2024",
      fileUrl: "/resources/Product_Brief-Venio_ECA.pdf",
      featured: false
    },
    {
      id: 12,
      title: "Venio Legal Hold Product Brief",
      description: "Modernizing Legal Hold for a Connected, Data-Driven World. Built for reliability and designed for defensibility.",
      type: "product-brief",
      topic: "legal-hold",
      icon: FileCheck,
      date: "Monday, 18 November, 2024",
      fileUrl: "/resources/Product_Brief-Venio_Legal_Hold.pdf",
      featured: false
    },
    {
      id: 13,
      title: "Venio vs Others: Platform Comparison",
      description: "Key eDiscovery capabilities comparison between Venio, Relativity, NUIX, and Everlaw. See how Venio simplifies eDiscovery and accelerates results.",
      type: "infographic",
      topic: "ediscovery-systems",
      icon: TrendingUp,
      date: "Monday, 18 November, 2024",
      fileUrl: "/resources/Venio_vs_Others_comparison_sheet.pdf",
      featured: false
    },
    {
      id: 14,
      title: "10-Point Checklist for Document Review",
      description: "Where law firms lose the most in document review. Use this checklist to uncover quick wins and build a court-ready process.",
      type: "how-to-guide",
      topic: "review",
      icon: BookMarked,
      date: "Monday, 18 November, 2024",
      fileUrl: "/resources/10_points_checklist_for_Doc_Review.pdf",
      featured: false
    },
    {
      id: 15,
      title: "See How Venio Speeds Up Case Prep",
      description: "Discover how Venio empowers attorneys with lightning-fast search, AI-powered review, and organized workflows for faster case preparation.",
      type: "brochure",
      topic: "ediscovery-systems",
      icon: Download,
      date: "Monday, 18 November, 2024",
      fileUrl: "/resources/See_How_Venio_Speeds_Up_Case_Prep.pdf",
      featured: false
    },
    {
      id: 16,
      title: "Take Control of Every Case: Collection to Review",
      description: "How Venio helps litigation support teams manage collection, processing, review, and production seamlessly on a unified platform.",
      type: "brochure",
      topic: "ediscovery-systems",
      icon: Download,
      date: "Monday, 18 November, 2024",
      fileUrl: "/resources/Take_Control_of_Every_Case_From_Collection_to_Review.pdf",
      featured: false
    },
  ];

  const featuredResources = resources.filter(r => r.featured);
  
  const filteredResources = resources.filter((resource) => {
    const matchesTopic = topicFilter === "all" || resource.topic === topicFilter;
    const matchesType = typeFilter === "all" || resource.type === typeFilter;
    return matchesTopic && matchesType && !resource.featured; // Exclude featured from main grid
  });

  const getTypeLabel = (type: string) => {
    const typeObj = resourceTypes.find(t => t.value === type);
    return typeObj?.label || type;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden gradient-animated pt-32 pb-20">
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
        
        <div className="container mx-auto text-center relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Resource Hub
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Explore case studies, guides, white papers, and more to help you master eDiscovery and stay ahead of industry trends.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-center">
            <div className="w-full md:w-auto min-w-[280px]">
              <label className="block text-sm font-semibold mb-2 text-foreground">
                Browse by Topic
              </label>
              <Select value={topicFilter} onValueChange={setTopicFilter}>
                <SelectTrigger className="w-full bg-background border-border">
                  <SelectValue placeholder="All Topics" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border z-50">
                  {topics.map((topic) => (
                    <SelectItem key={topic.value} value={topic.value}>
                      {topic.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="w-full md:w-auto min-w-[280px]">
              <label className="block text-sm font-semibold mb-2 text-foreground">
                Browse by Type
              </label>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-full bg-background border-border">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border z-50">
                  {resourceTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="text-center mt-6 text-sm text-muted-foreground">
            Showing {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'}
          </div>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Resources</h2>
              <p className="text-muted-foreground">Discover our most popular and impactful content</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredResources.map((resource, index) => {
              const colors = typeColors[resource.type] || typeColors["blog"];
              return (
                <a
                  key={resource.id}
                  href={resource.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card 
                    className={cn(
                      "h-full hover:shadow-2xl transition-all duration-300 cursor-pointer",
                      "border-2 relative overflow-hidden",
                      colors.bg,
                      colors.border
                    )}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transform translate-x-16 -translate-y-16" />
                    
                    <CardHeader className="relative z-10 pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className={cn(
                          "inline-flex p-3 rounded-xl border-2 transition-all",
                          colors.bg,
                          colors.border,
                          "group-hover:scale-110"
                        )}>
                          <resource.icon className={cn("h-6 w-6", colors.text)} />
                        </div>
                        <span className={cn(
                          "text-xs font-semibold px-3 py-1.5 rounded-full border inline-flex items-center gap-1",
                          colors.badge
                        )}>
                          <Star className="h-3 w-3 fill-current" />
                          FEATURED
                        </span>
                      </div>
                      
                      <CardTitle className={cn(
                        "text-lg mb-3 line-clamp-2 transition-colors leading-tight",
                        "group-hover:" + colors.text
                      )}>
                        {resource.title}
                      </CardTitle>
                      
                      <CardDescription className="text-sm line-clamp-3 mb-4">
                        {resource.description}
                      </CardDescription>
                      
                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="text-xs text-muted-foreground font-medium">
                          {getTypeLabel(resource.type)}
                        </span>
                        <span className={cn(
                          "text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1",
                          colors.text
                        )}>
                          View
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </CardHeader>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resources Grid - Compact Bento Layout */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">All Resources</h2>
            <p className="text-muted-foreground">Browse our complete collection of resources</p>
          </div>
          
          {filteredResources.length > 0 ? (
            <div className="grid md:grid-cols-3 auto-rows-[200px] gap-4">
              {filteredResources.map((resource, index) => {
                const colors = typeColors[resource.type] || typeColors["blog"];
                return (
                  <a
                    href={resource.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <Card 
                      key={resource.id} 
                      className={cn(
                        "group hover:shadow-xl transition-all duration-300 cursor-pointer h-full",
                        "border-2",
                        colors.bg,
                        colors.border,
                        getBentoSpan(index)
                      )}
                    >
                    <CardHeader className="h-full flex flex-col p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className={cn(
                          "inline-flex p-2 rounded-lg border transition-all",
                          colors.bg,
                          colors.border
                        )}>
                          <resource.icon className={cn("h-5 w-5", colors.text)} />
                        </div>
                        <span className={cn(
                          "text-xs font-medium px-2 py-1 rounded-full border",
                          colors.badge
                        )}>
                          {getTypeLabel(resource.type)}
                        </span>
                      </div>
                      <CardTitle className={cn(
                        "text-lg mb-2 line-clamp-2 transition-colors leading-tight",
                        "group-hover:" + colors.text
                      )}>
                        {resource.title}
                      </CardTitle>
                      <CardDescription className="text-xs flex-grow line-clamp-3">
                        {resource.description}
                      </CardDescription>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mt-3 pt-3 border-t">
                        <span className={cn(
                          "font-semibold group-hover:underline",
                          colors.text
                        )}>
                          View →
                        </span>
                      </div>
                    </CardHeader>
                    </Card>
                  </a>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex p-6 rounded-full bg-muted mb-6">
                <FileText className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">No resources found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filters to see more results.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
