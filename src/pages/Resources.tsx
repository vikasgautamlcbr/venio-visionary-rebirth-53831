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
      title: "Global Bank Reduces Review Time by 70%",
      description: "Learn how a Fortune 500 financial institution transformed their eDiscovery process with Venio's AI-powered platform.",
      type: "case-study",
      topic: "review",
      icon: TrendingUp,
      date: "Monday, 15 March, 2024"
    },
    {
      id: 2,
      title: "The Complete Guide to Cloud EDiscovery",
      description: "A comprehensive white paper exploring the benefits, challenges, and best practices for cloud-based eDiscovery solutions.",
      type: "white-paper",
      topic: "cloud-ediscovery",
      icon: FileText,
      date: "Thursday, 08 February, 2024"
    },
    {
      id: 3,
      title: "Implementing Legal Hold: Best Practices",
      description: "Step-by-step guide to implementing an effective legal hold process in your organization.",
      type: "how-to-guide",
      topic: "legal-hold",
      icon: BookMarked,
      date: "Wednesday, 17 January, 2024"
    },
    {
      id: 4,
      title: "AI in Document Review: 2024 Trends",
      description: "Explore the latest trends and innovations in AI-powered document review technology.",
      type: "blog",
      topic: "review",
      icon: Lightbulb,
      date: "Friday, 22 March, 2024"
    },
    {
      id: 5,
      title: "Venio Review Platform Demo",
      description: "Watch a comprehensive demo of Venio's AI-powered review platform and see how it can accelerate your workflows.",
      type: "video",
      topic: "review",
      icon: Video,
      date: "Tuesday, 13 February, 2024"
    },
    {
      id: 6,
      title: "ECA Strategies for Cost Reduction",
      description: "Discover proven strategies for using Early Case Assessment to reduce eDiscovery costs by up to 60%.",
      type: "ebook",
      topic: "eca",
      icon: BookOpen,
      date: "Monday, 29 January, 2024"
    },
    {
      id: 7,
      title: "Venio One Product Brief",
      description: "Quick overview of Venio One's features, benefits, and use cases for modern legal teams.",
      type: "product-brief",
      topic: "ediscovery-systems",
      icon: FileCheck,
      date: "Thursday, 28 March, 2024"
    },
    {
      id: 8,
      title: "eDiscovery Market Report 2024",
      description: "Annual report analyzing market trends, growth projections, and technology innovations in eDiscovery.",
      type: "white-paper",
      topic: "legal-news",
      icon: FileText,
      date: "Saturday, 24 February, 2024"
    },
    {
      id: 9,
      title: "Venio Announces Partnership with Leading Law Firms",
      description: "Venio expands its reach with strategic partnerships across AmLaw 200 firms.",
      type: "press-release",
      topic: "legal-news",
      icon: Newspaper,
      date: "Sunday, 10 March, 2024"
    },
    {
      id: 10,
      title: "Cloud EDiscovery Platform Comparison",
      description: "Visual comparison of leading cloud eDiscovery platforms showing key features and pricing.",
      type: "infographic",
      topic: "cloud-ediscovery",
      icon: TrendingUp,
      date: "Friday, 19 January, 2024"
    },
    {
      id: 11,
      title: "Venio Platform Overview Brochure",
      description: "Comprehensive brochure covering all Venio products and services for legal professionals.",
      type: "brochure",
      topic: "ediscovery-systems",
      icon: Download,
      date: "Wednesday, 21 February, 2024"
    },
    {
      id: 12,
      title: "Legal Hold Automation: ROI Calculator",
      description: "Interactive guide showing how to calculate ROI when automating your legal hold process.",
      type: "how-to-guide",
      topic: "legal-hold",
      icon: BookMarked,
      date: "Saturday, 30 March, 2024"
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
                  <Card 
                    key={resource.id} 
                    className={cn(
                      "group hover:shadow-xl transition-all duration-300 cursor-pointer",
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
