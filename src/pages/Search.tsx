import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon, FileText, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import venioLogo from "@/assets/venio-logo.svg";

// Import resource images
import fortuneBankImg from "@/assets/resources/fortune-100-bank.jpg";
import amlawSuccessImg from "@/assets/resources/amlaw-50-success.jpg";
import federalAgencyImg from "@/assets/resources/federal-agency.jpg";
import venioReviewImg from "@/assets/resources/venio-review-platform.jpg";
import esiProtocolImg from "@/assets/resources/esi-protocol.jpg";
import ediscoveryPricingImg from "@/assets/resources/ediscovery-pricing.jpg";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [inputValue, setInputValue] = useState(searchParams.get("q") || "");

  useEffect(() => {
    if (searchQuery) {
      setSearchParams({ q: searchQuery });
    } else {
      setSearchParams({});
    }
  }, [searchQuery, setSearchParams]);

  // All searchable content
  const allContent = [
    // Resources
    {
      id: "res-1",
      type: "resource",
      category: "Blog",
      title: "What Is FRCP Rule 33? A Reference Guide",
      description: "The U.S. federal court system is highly regulated and uniform across all states. Understanding FRCP Rule 33 for interrogatories in modern litigation.",
      date: "Monday, 18 November, 2024",
      link: "https://www.veniosystems.com/blog/what-is-frcp-rule-33-a-reference-guide/",
    },
    {
      id: "res-2",
      type: "resource",
      category: "Blog",
      title: "Why Premium eDiscovery Pricing Doesn't Guarantee Better Results",
      description: "Many legal teams still believe premium eDiscovery software pricing equals superior performance. Learn why that's not always the case.",
      date: "Thursday, 10 October, 2024",
      link: "https://www.veniosystems.com/blog/why-premium-ediscovery-software-pricing-doesnt-guarantee-better-results/",
      imageUrl: ediscoveryPricingImg,
    },
    {
      id: "res-3",
      type: "resource",
      category: "Blog",
      title: "Understanding ESI Protocol: The Definitive Checklist",
      description: "In modern litigation, the battle is won or lost before discovery even begins. Master ESI protocol formulation with this comprehensive guide.",
      date: "Wednesday, 09 October, 2024",
      link: "https://www.veniosystems.com/blog/understanding-formulating-esi-protocol-checklist/",
      imageUrl: esiProtocolImg,
    },
    {
      id: "res-4",
      type: "resource",
      category: "Blog",
      title: "What is ESI? The Ultimate Guide to ESI in Modern eDiscovery",
      description: "Electronically Stored Information (ESI) isn't just data; it's the digital battlefield of modern litigation. Learn everything about ESI.",
      date: "Tuesday, 08 October, 2024",
      link: "https://www.veniosystems.com/blog/what-is-esi-legal-hold-guide/",
    },
    {
      id: "res-5",
      type: "resource",
      category: "Case Study",
      title: "Petabyte-Scale eDiscovery: Fortune 100 Financial Services",
      description: "How a global bank processed 120+TB of data with full PII protection, achieving 72% data reduction and 2.1× review efficiency for a major regulatory investigation.",
      date: "Monday, 18 November, 2024",
      link: "/resources/Case_Study-Fortune_100_Financial_Services.pdf",
      imageUrl: fortuneBankImg,
    },
    {
      id: "res-6",
      type: "resource",
      category: "Case Study",
      title: "Weekly Productions, Zero Rejections: AmLaw 50 Success",
      description: "Discover how an AmLaw 50 firm achieved flawless weekly production cycles with zero rejections using Venio's defensible workflows.",
      date: "Monday, 18 November, 2024",
      link: "/resources/Case_Study-AmLaw_50_Success_Story.pdf",
      imageUrl: amlawSuccessImg,
    },
    {
      id: "res-7",
      type: "resource",
      category: "Blog",
      title: "Fortune 100 Bank Cuts eDiscovery Costs with Venio",
      description: "When eDiscovery scales into the hundreds of terabytes, every inefficiency carries a cost. See how this bank transformed their process.",
      date: "Friday, 04 October, 2024",
      link: "https://www.veniosystems.com/blog/fortune-100-bank-cuts-ediscovery-costs-with-venio/",
    },
    {
      id: "res-8",
      type: "resource",
      category: "Case Study",
      title: "Audit-Ready Federal Workflows: Agency Success Story",
      description: "How Venio created defensible pipelines for a federal agency, reducing operator hours by 35% and achieving 100% audit trail compliance.",
      date: "Monday, 18 November, 2024",
      link: "/resources/Case_Study-Federal_Agency_Workflows.pdf",
      imageUrl: federalAgencyImg,
    },
    {
      id: "res-9",
      type: "resource",
      category: "Product Brief",
      title: "Venio Review Product Brief",
      description: "The Complete Review Platform for Modern Legal Teams. Discover how Venio Review delivers fast, intuitive, and reliable document review at scale.",
      date: "Monday, 18 November, 2024",
      link: "/resources/Product_Brief-Venio_Review.pdf",
      imageUrl: venioReviewImg,
    },
    {
      id: "res-10",
      type: "resource",
      category: "Product Brief",
      title: "Venio ECA Product Brief",
      description: "Reduce risk and make your discovery 10x faster with Venio ECA. Cut data volume sent to external partners by up to 90%.",
      date: "Monday, 18 November, 2024",
      link: "/resources/Product_Brief-Venio_ECA.pdf",
    },
    // Pages
    {
      id: "page-1",
      type: "page",
      category: "Product",
      title: "Venio Legal Hold",
      description: "Modernizing Legal Hold for a Connected, Data-Driven World. Built for reliability and designed for defensibility.",
      link: "/venio-legal-hold",
    },
    {
      id: "page-2",
      type: "page",
      category: "Solutions",
      title: "Law Firm Solutions",
      description: "Comprehensive eDiscovery solutions tailored for law firms of all sizes.",
      link: "/law-firm-solutions",
    },
    {
      id: "page-3",
      type: "page",
      category: "Pricing",
      title: "Pricing & Plans",
      description: "Transparent pricing for enterprise-grade eDiscovery solutions.",
      link: "/pricing",
    },
    {
      id: "page-4",
      type: "page",
      category: "Resources",
      title: "Resource Hub",
      description: "Explore case studies, guides, white papers, and more to help you master eDiscovery.",
      link: "/resources",
    },
    {
      id: "page-5",
      type: "page",
      category: "About",
      title: "Why Venio",
      description: "Discover why leading organizations trust Venio for their eDiscovery needs.",
      link: "/why-venio",
    },
  ];

  const searchResults = allContent.filter((item) => {
    if (!searchQuery) return false;
    const query = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(inputValue);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center gap-6">
          <Link to="/" className="flex items-center">
            <img src={venioLogo} alt="VENIO" className="h-7 w-auto" />
          </Link>
          
          {/* Search Bar in Header (after initial search) */}
          {searchQuery && (
            <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
              <div className="relative">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" strokeWidth={2} />
                <Input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full h-12 pl-12 pr-4 border-gray-300 rounded-full shadow-sm hover:shadow-md focus:shadow-md transition-shadow"
                  placeholder="Search Venio"
                  autoFocus
                />
              </div>
            </form>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6">
        {!searchQuery ? (
          /* Initial Search View - Google Style */
          <div className="flex flex-col items-center justify-center min-h-[80vh]">
            <div className="text-center max-w-2xl w-full">
              <img src={venioLogo} alt="VENIO" className="h-20 w-auto mx-auto mb-8" />
              
              <form onSubmit={handleSearch} className="mb-8">
                <div className="relative">
                  <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" strokeWidth={2} />
                  <Input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-full h-14 pl-14 pr-5 text-base border-gray-300 rounded-full shadow-sm hover:shadow-md focus:shadow-md transition-shadow"
                    placeholder="Search Venio"
                    autoFocus
                  />
                </div>
              </form>

              <p className="text-sm text-gray-500">
                Search for resources, products, solutions, and more
              </p>
            </div>
          </div>
        ) : (
          /* Search Results */
          <div className="py-8 max-w-3xl">
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                About {searchResults.length.toLocaleString()} {searchResults.length === 1 ? 'result' : 'results'}
              </p>
            </div>

            {searchResults.length === 0 ? (
              <div className="py-20 text-center">
                <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-500">
                  Try different keywords or browse our <Link to="/resources" className="text-primary hover:underline">resources</Link>
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                {searchResults.map((result) => (
                  <a
                    key={result.id}
                    href={result.link}
                    target={result.link.startsWith('http') ? '_blank' : undefined}
                    rel={result.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block group"
                  >
                    <div className="flex items-start gap-4">
                      {result.imageUrl && (
                        <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                          <img 
                            src={result.imageUrl} 
                            alt={result.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm text-gray-600">{result.category}</span>
                          {result.type === "page" && (
                            <ArrowRight className="h-3 w-3 text-gray-400" />
                          )}
                        </div>
                        <h3 className="text-xl text-primary group-hover:underline font-normal mb-1 line-clamp-1">
                          {result.title}
                        </h3>
                        {result.date && (
                          <p className="text-sm text-gray-500 mb-2">
                            {result.date}
                          </p>
                        )}
                        <p className="text-sm text-gray-700 line-clamp-2">
                          {result.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Search;
