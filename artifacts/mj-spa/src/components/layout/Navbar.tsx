import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Servicios", href: "#servicios" },
  { name: "Testimonios", href: "#testimonios" },
  { name: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className={`text-2xl md:text-3xl font-serif font-bold tracking-wider transition-colors ${
              isScrolled ? "text-primary" : "text-white"
            }`}>
              MJ
              <span className={`text-sm md:text-base font-sans tracking-widest font-light block -mt-1 ${
                isScrolled ? "text-foreground" : "text-white/90"
              }`}>
                Fisio Estética y Spa
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm uppercase tracking-widest font-medium hover:text-primary transition-colors ${
                  isScrolled ? "text-foreground/80" : "text-white/90"
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button
              className={`rounded-full px-6 py-5 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 ${
                isScrolled 
                  ? "bg-primary text-white hover:bg-primary/90" 
                  : "bg-white text-primary hover:bg-white/90"
              }`}
              asChild
            >
              <a href="#contacto">
                <Phone className="w-4 h-4 mr-2" />
                Reserva tu cita
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-border md:hidden"
          >
            <div className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground text-lg py-2 border-b border-muted hover:text-primary transition-colors font-serif"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="mt-4 w-full rounded-full bg-primary text-white hover:bg-primary/90" asChild>
                <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>
                  Reserva tu cita
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
