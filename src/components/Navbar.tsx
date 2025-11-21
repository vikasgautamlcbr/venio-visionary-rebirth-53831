import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import venioLogo from "@/assets/venio-logo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: "Products",
      hasDropdown: true,
      items: ["Venio Review", "Venio One", "Venio ECA", "AI at the Core", "Venio Production"],
    },
    {
      label: "Solutions",
      hasDropdown: true,
      hasMegaMenu: true,
      categories: [
        {
          title: "By Roles",
          items: ["Law Firms", "Legal Service Providers", "Corporations", "Government"],
        },
        {
          title: "By Industry",
          items: ["Financial Services", "Healthcare", "Technology", "Energy"],
        },
        {
          title: "By Use Cases",
          items: ["Document Review", "Contract Analysis", "Legal Research", "Compliance"],
        },
      ],
    },
    {
      label: "Pricing",
      hasDropdown: false,
      link: "/pricing",
    },
    {
      label: "Resources",
      hasDropdown: false,
      link: "/resources",
    },
    {
      label: "Partner",
      hasDropdown: false,
      link: "#",
    },
    {
      label: "Why Venio",
      hasDropdown: false,
      link: "/why-venio",
    },
  ];

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? "glass-navbar rounded-2xl py-3 shadow-2xl" 
          : "glass-navbar rounded-2xl py-4 shadow-xl"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src={venioLogo} alt="VENIO" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
            {navItems.map((item) => (
              <div key={item.label} className="group relative flex-shrink-0">
                {item.link && !item.hasDropdown ? (
                  <Link 
                    to={item.link}
                    className="text-white hover:text-accent transition-colors font-medium text-sm flex items-center gap-1 whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button className="text-white hover:text-accent transition-colors font-medium text-sm flex items-center gap-1 whitespace-nowrap">
                    {item.label}
                    {item.hasDropdown && <ChevronDown size={16} className="opacity-70" />}
                  </button>
                )}
                
                {/* Mega Menu for Solutions */}
                {item.hasDropdown && item.hasMegaMenu && item.categories && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="rounded-xl shadow-2xl p-6 min-w-[600px] bg-[rgba(25,42,86,0.95)] backdrop-blur-xl border border-white/20">
                      <div className="grid grid-cols-3 gap-6">
                        {item.categories.map((category) => (
                          <div key={category.title}>
                            <h3 className="text-accent font-semibold text-sm mb-3 uppercase tracking-wide">
                              {category.title}
                            </h3>
                            <div className="space-y-1">
                              {category.items.map((subItem) => {
                                // Handle special link for Law Firm Solutions
                                if (subItem === "Law Firms") {
                                  return (
                                    <Link
                                      key={subItem}
                                      to="/law-firm-solutions"
                                      className="block px-3 py-2 text-sm text-white hover:text-accent hover:bg-white/10 rounded-md transition-colors"
                                    >
                                      {subItem}
                                    </Link>
                                  );
                                }
                                return (
                                  <a
                                    key={subItem}
                                    href="#"
                                    className="block px-3 py-2 text-sm text-white hover:text-accent hover:bg-white/10 rounded-md transition-colors"
                                  >
                                    {subItem}
                                  </a>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Regular Dropdown */}
                {item.hasDropdown && !item.hasMegaMenu && item.items && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="rounded-xl shadow-2xl p-4 min-w-[220px] bg-[rgba(25,42,86,0.95)] backdrop-blur-xl border border-white/20">
                      {item.items.map((subItem) => {
                        // Handle special link for Venio Legal Hold
                        if (item.label === "Products" && subItem === "Venio Review") {
                          return (
                            <Link
                              key={subItem}
                              to="/venio-legal-hold"
                              className="block px-4 py-2 text-sm text-white hover:text-accent hover:bg-white/10 rounded-md transition-colors"
                            >
                              Venio Legal Hold
                            </Link>
                          );
                        }
                        return (
                          <a
                            key={subItem}
                            href="#"
                            className="block px-4 py-2 text-sm text-white hover:text-accent hover:bg-white/10 rounded-md transition-colors"
                          >
                            {subItem}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Button 
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 glass-navbar rounded-xl p-4">
            {navItems.map((item) => (
              <div key={item.label} className="mb-4">
                {item.link && !item.hasDropdown ? (
                  <Link
                    to={item.link}
                    className="font-semibold text-white mb-2 flex items-center gap-1 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div className="font-semibold text-white mb-2 flex items-center gap-1">
                    {item.label}
                    {item.hasDropdown && <ChevronDown size={16} />}
                  </div>
                )}
                
                {/* Mega Menu for Solutions in Mobile */}
                {item.hasDropdown && item.hasMegaMenu && item.categories && (
                  <div className="ml-2 mt-2 space-y-3">
                    {item.categories.map((category) => (
                      <div key={category.title}>
                        <div className="text-accent text-xs font-semibold mb-1 uppercase tracking-wide">
                          {category.title}
                        </div>
                        {category.items.map((subItem) => {
                          if (subItem === "Law Firms") {
                            return (
                              <Link
                                key={subItem}
                                to="/law-firm-solutions"
                                className="block px-4 py-2 text-sm text-white/90 hover:text-accent hover:bg-white/10 rounded-md transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subItem}
                              </Link>
                            );
                          }
                          return (
                            <a
                              key={subItem}
                              href="#"
                              className="block px-4 py-2 text-sm text-white/90 hover:text-accent hover:bg-white/10 rounded-md transition-colors"
                            >
                              {subItem}
                            </a>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Regular Dropdown in Mobile */}
                {item.hasDropdown && !item.hasMegaMenu && item.items && item.items.map((subItem) => {
                  // Handle special link for Venio Legal Hold in mobile menu
                  if (item.label === "Products" && subItem === "Venio Review") {
                    return (
                      <Link
                        key={subItem}
                        to="/venio-legal-hold"
                        className="block px-4 py-2 text-sm text-white/90 hover:text-accent hover:bg-white/10 rounded-md transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Venio Legal Hold
                      </Link>
                    );
                  }
                  return (
                    <a
                      key={subItem}
                      href="#"
                      className="block px-4 py-2 text-sm text-white/90 hover:text-accent hover:bg-white/10 rounded-md transition-colors"
                    >
                      {subItem}
                    </a>
                  );
                })}
              </div>
            ))}
            <div className="mt-4">
              <Button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold">
                Book a Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
