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
      items: ["Law Firms", "Legal Service Providers", "Corporations", "Government"],
    },
    {
      label: "Use Cases",
      hasDropdown: true,
      items: ["Document Review", "Contract Analysis", "Legal Research", "Compliance"],
    },
    {
      label: "Pricing",
      hasDropdown: false,
    },
    {
      label: "Resources",
      hasDropdown: false,
    },
    {
      label: "Why Venio",
      hasDropdown: false,
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
                <button className="text-white hover:text-accent transition-colors font-medium text-sm flex items-center gap-1 whitespace-nowrap">
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={16} className="opacity-70" />}
                </button>
                {/* Dropdown */}
                {item.hasDropdown && item.items && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="glass-navbar rounded-xl shadow-2xl p-4 min-w-[220px]">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-white hover:text-accent hover:bg-white/10 rounded-md transition-colors"
                        >
                          {subItem}
                        </a>
                      ))}
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
                <div className="font-semibold text-white mb-2 flex items-center gap-1">
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={16} />}
                </div>
                {item.hasDropdown && item.items && item.items.map((subItem) => (
                  <a
                    key={subItem}
                    href="#"
                    className="block px-4 py-2 text-sm text-white/90 hover:text-accent hover:bg-white/10 rounded-md transition-colors"
                  >
                    {subItem}
                  </a>
                ))}
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
