import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Video, BookOpen, FileCheck, Download, Newspaper, BookMarked, TrendingUp, Lightbulb } from "lucide-react";
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
    const pattern = [
      "md:col-span-2 md:row-span-2", // Large
      "md:col-span-1 md:row-span-1", // Small
      "md:col-span-1 md:row-span-1", // Small
      "md:col-span-1 md:row-span-2", // Tall
      "md:col-span-2 md:row-span-1", // Wide
      "md:col-span-1 md:row-span-1", // Small
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
      title: "Petabyte-Scale eDiscovery: Fortune 100 Financial Services",
      description: "How a global bank processed 120+TB of data with full PII protection, achieving 72% data reduction and 2.1× review efficiency for a major regulatory investigation.",
      type: "case-study",
      topic: "ediscovery-systems",
      icon: TrendingUp,
      date: "Monday, 18 November, 2024",
      fileUrl: "/resources/Case_Study-Fortune_100_Financial_Services.pdf"
    },
    {
      id: 2,
      title: "Weekly Productions, Zero Rejections: AmLaw 50 Success",
      description: "Discover how an AmLaw 50 firm achieved flawless weekly production cycles with zero rejections using Venio's defensible workflows.",
      type: "case-study",
      topic: "review",
      icon: TrendingUp,
      date: "Monday, 18 November, 2024",
      fileUrl: "/resources/Case_Study-AmLaw_50_Success_Story.pdf"
    },
    {
      id: 3,
      title: "Audit-Ready Federal Workflows: Agency Success Story",
      description: "How Venio created defensible pipelines for a federal agency, reducing operator hours by 35% and achieving 100% audit trail compliance.",
      type: "case-study",
      topic: "legal-news",
      icon: TrendingUp,
      date: "Monday, 18 November, 2024",
      fileUrl: "/resources/Case_Study-Federal_Agency_Workflows.pdf"
    },
    {
      id: 4,
      title: "Venio Review Product Brief",
      description: "The Complete Review Platform for Modern Legal Teams. Discover how Venio Review delivers fast, intuitive, and reliable document review at scale.",
      type: "product-brief",
      topic: "review",
      icon: FileCheck,
      date: "Monday, 18 November, 2024",
      fileUrl: "/resources/Product_Brief-Venio_Review.pdf"
    },
    {
      id: 5,
      title: "Venio ECA Product Brief",
      description: "Reduce risk and make your discovery 10x faster with Venio ECA. Cut data volume sent to external partners by up to 90%.",
      type: "product-brief",
      topic: "eca",
      icon: FileCheck,
      date: "Monday, 18 November, 2024",
      fileUrl: "/resources/Product_Brief-Venio_ECA.pdf"
    },
    {
      id: 6,
      title: "Venio Legal Hold Product Brief",
      description: "Modernizing Legal Hold for a Connected, Data-Driven World. Built for reliability and designed for defensibility.",
      type: "product-brief",
      topic: "legal-hold",
      icon: FileCheck,
      date: "Monday, 18 November, 2024",
      fileUrl: "/resources/Product_Brief-Venio_Legal_Hold.pdf"
    },
    {
      id: 7,
      title: "Venio vs Others: Platform Comparison",
      description: "Key eDiscovery capabilities comparison between Venio, Relativity, NUIX, and Everlaw. See how Venio simplifies eDiscovery and accelerates results.",
      type: "infographic",
      topic: "ediscovery-systems",
      icon: TrendingUp,
      date: "Monday, 18 November, 2024",
      fileUrl: "/resources/Venio_vs_Others_comparison_sheet.pdf"
    },
    {
      id: 8,
      title: "10-Point Checklist for Document Review",
      description: "Where law firms lose the most in document review. Use this checklist to uncover quick wins and build a court-ready process.",
      type: "how-to-guide",
      topic: "review",
      icon: BookMarked,
      date: "Monday, 18 November, 2024",
      fileUrl: "/resources/10_points_checklist_for_Doc_Review.pdf"
    },
    {
      id: 9,
      title: "See How Venio Speeds Up Case Prep",
      description: "Discover how Venio empowers attorneys with lightning-fast search, AI-powered review, and organized workflows for faster case preparation.",
      type: "brochure",
      topic: "ediscovery-systems",
      icon: Download,
      date: "Monday, 18 November, 2024",
      fileUrl: "/resources/See_How_Venio_Speeds_Up_Case_Prep.pdf"
    },
    {
      id: 10,
      title: "Take Control of Every Case: Collection to Review",
      description: "How Venio helps litigation support teams manage collection, processing, review, and production seamlessly on a unified platform.",
      type: "brochure",
      topic: "ediscovery-systems",
      icon: Download,
      date: "Monday, 18 November, 2024",
      fileUrl: "/resources/Take_Control_of_Every_Case_From_Collection_to_Review.pdf"
    },
  ];

  const filteredResources = resources.filter((resource) => {
    const matchesTopic = topicFilter === "all" || resource.topic === topicFilter;
    const matchesType = typeFilter === "all" || resource.type === typeFilter;
    return matchesTopic && matchesType;
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

      {/* Resources Grid - Bento Layout */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {filteredResources.length > 0 ? (
            <div className="grid md:grid-cols-3 auto-rows-[280px] gap-6">
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
                    <CardHeader className="h-full flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div className={cn(
                          "inline-flex p-3 rounded-xl border-2 transition-all",
                          colors.bg,
                          colors.border
                        )}>
                          <resource.icon className={cn("h-6 w-6", colors.text)} />
                        </div>
                        <span className={cn(
                          "text-xs font-medium px-3 py-1 rounded-full border",
                          colors.badge
                        )}>
                          {getTypeLabel(resource.type)}
                        </span>
                      </div>
                      <CardTitle className={cn(
                        "text-xl mb-2 transition-colors",
                        "group-hover:" + colors.text
                      )}>
                        {resource.title}
                      </CardTitle>
                      <CardDescription className="text-sm flex-grow">
                        {resource.description}
                      </CardDescription>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mt-4 pt-4 border-t">
                        <span className="font-medium">{resource.date}</span>
                        <span className={cn(
                          "font-semibold group-hover:underline",
                          colors.text
                        )}>
                          View Resource →
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
