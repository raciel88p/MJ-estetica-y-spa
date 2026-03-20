import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";

const serviceLinks = [
  { name: "Masajes Corporales", href: "/servicios/masajes-corporales" },
  { name: "Faciales", href: "/servicios/faciales" },
  { name: "Masajes Relajantes", href: "/servicios/masajes-relajantes" },
  { name: "Depilación Láser", href: "/servicios/depilacion-laser" },
  { name: "Terapias Faciales", href: "/servicios/terapias-faciales" },
  { name: "Peeling Químico", href: "/servicios/peeling-quimico" },
  { name: "Botox Full Face", href: "/servicios/botox-full-face" },
  { name: "Relleno de Labios", href: "/servicios/relleno-de-labios" },
  { name: "Hilos Tensores", href: "/servicios/hilos-tensores" },
];

const navLinks = [
  { name: "Inicio", href: "/#inicio", isAnchor: true },
  { name: "Nosotros", href: "/#nosotros", isAnchor: true },
  { name: "Testimonios", href: "/#testimonios", isAnchor: true },
  { name: "Contacto", href: "/#contacto", isAnchor: true },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const textClass = isScrolled ? "text-foreground/80" : "text-white/90";
  const hoverClass = "hover:text-primary transition-colors";
  const linkBase = `text-sm uppercase tracking-widest font-medium ${hoverClass}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div
              className={`text-2xl md:text-3xl font-serif font-bold tracking-wider transition-colors ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              MJ
              <span
                className={`text-sm md:text-base font-sans tracking-widest font-light block -mt-1 ${
                  isScrolled ? "text-foreground" : "text-white/90"
                }`}
              >
                Fisio Estética y Spa
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#nosotros" className={`${linkBase} ${textClass}`}>
              Nosotros
            </a>

            {/* Services Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                className={`flex items-center gap-1 ${linkBase} ${textClass}`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Servicios
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] bg-white rounded-2xl shadow-2xl border border-border overflow-hidden z-50"
                  >
                    <div className="px-5 pt-4 pb-2">
                      <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">
                        Nuestros Servicios
                      </p>
                      <div className="grid grid-cols-3 gap-x-4 gap-y-1">
                        {serviceLinks.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            className="block px-3 py-2 text-sm text-foreground hover:bg-secondary/40 hover:text-primary transition-colors rounded-lg"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-border mt-3 pt-3 pb-1">
                        <a
                          href="/#servicios"
                          className="block px-3 py-1.5 text-sm text-primary font-semibold hover:bg-secondary/40 transition-colors rounded-lg"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          Ver todos los servicios →
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="/#testimonios" className={`${linkBase} ${textClass}`}>
              Testimonios
            </a>
            <a href="/#contacto" className={`${linkBase} ${textClass}`}>
              Contacto
            </a>

            <Button
              className={`rounded-full px-6 py-5 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 ${
                isScrolled
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "bg-white text-primary hover:bg-white/90"
              }`}
              asChild
            >
              <a href="/#contacto">
                <Phone className="w-4 h-4 mr-2" />
                Reserva tu cita
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
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
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-border md:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col py-4 px-6 gap-1">
              <a
                href="/#nosotros"
                className="text-foreground text-lg py-3 border-b border-muted hover:text-primary transition-colors font-serif"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nosotros
              </a>

              {/* Mobile Services Accordion */}
              <div className="border-b border-muted">
                <button
                  className="w-full flex justify-between items-center text-foreground text-lg py-3 hover:text-primary transition-colors font-serif"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  Servicios
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-3 pl-4 flex flex-col gap-1">
                        {serviceLinks.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            className="block py-2 text-base text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileServicesOpen(false);
                            }}
                          >
                            {link.name}
                          </Link>
                        ))}
                        <a
                          href="/#servicios"
                          className="block py-2 text-base text-primary font-semibold"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Ver todos →
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="/#testimonios"
                className="text-foreground text-lg py-3 border-b border-muted hover:text-primary transition-colors font-serif"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonios
              </a>
              <a
                href="/#contacto"
                className="text-foreground text-lg py-3 border-b border-muted hover:text-primary transition-colors font-serif"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </a>
              <Button className="mt-4 w-full rounded-full bg-primary text-white hover:bg-primary/90" asChild>
                <a href="/#contacto" onClick={() => setIsMobileMenuOpen(false)}>
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
