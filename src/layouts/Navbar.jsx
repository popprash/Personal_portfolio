import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#tech_stack", label: "Tech Stack" },
  { href: "#contact", label: "Contact Me" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }  z-50`}
    >
      <nav className="container mx-auto flex items-center justify-between">
        <a
          href=""
          className="text-xl tracking-tight font-bold hover:text-primary"
        >
          PC <span className="text-primary">.</span>
        </a>
        {/* Desktop view */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex  items-center gap-2">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground rounded-full hover:text-foreground hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/* CTA button */}
        
        {/* hamburgerMenu icon */}
        <button
          className="md:hidden  p-2 text-foreground cursor-pointer"
          onClick={() => setisMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X /> : <Menu size={24} />}
        </button>
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-5 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="text-lg  text-muted-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm">Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
