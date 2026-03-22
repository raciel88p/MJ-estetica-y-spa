import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  medicoEsteticosLinks,
  tratamientosCorporalesLinks,
  tratamientosFacialesLinks,
  tratamientosPiernasLinks,
} from "@/data/services";

const serviceCategoryLinks = [
  {
    category: "Corporales",
    categoryHref: "/tratamientos/corporales",
    links: tratamientosCorporalesLinks.slice(0, 5),
  },
  {
    category: "Faciales",
    categoryHref: "/tratamientos/faciales",
    links: tratamientosFacialesLinks.slice(0, 4),
  },
  {
    category: "Piernas",
    categoryHref: "/tratamientos/piernas",
    links: tratamientosPiernasLinks,
  },
];

type DropdownKey = "nosotros" | "servicios" | "medicos" | "paquetes" | null;

function useHoverDropdown(key: DropdownKey, openDropdown: DropdownKey, setOpenDropdown: (k: DropdownKey) => void) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const open = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(key);
  }, [key, setOpenDropdown]);

  const scheduleClose = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown((prev: DropdownKey) => (prev === key ? null : prev));
    }, 120);
  }, [key, setOpenDropdown]);

  const cancelClose = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  return { open, scheduleClose, cancelClose, isOpen: openDropdown === key };
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileMedicosOpen, setIsMobileMedicosOpen] = useState(false);
  const [isMobileNosotrosOpen, setIsMobileNosotrosOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = () => setOpenDropdown(null);
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const nosotros = useHoverDropdown("nosotros", openDropdown, setOpenDropdown as any);
  const servicios = useHoverDropdown("servicios", openDropdown, setOpenDropdown as any);
  const medicos = useHoverDropdown("medicos", openDropdown, setOpenDropdown as any);

  const textClass = isScrolled ? "text-stone-700" : "text-white/90";
  const linkBase = `text-sm uppercase tracking-widest font-medium hover:text-primary transition-colors`;

  const dropdownPanelVariants = {
    initial: { opacity: 0, y: 8, scale: 0.97 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 8, scale: 0.97 },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-sm py-3 border-b border-stone-100"
          : "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer group">
            <img
              src={`${import.meta.env.BASE_URL}images/logo-mj.png`}
              alt="MJ Fisio Estética y Spa"
              className="h-14 md:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              style={isScrolled ? {} : { filter: "drop-shadow(0 0 10px rgba(255,255,255,0.5)) brightness(1.15)" }}
              width="160"
              height="64"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">

            {/* ── Nosotros Dropdown ── */}
            <div
              className="relative"
              onMouseEnter={() => { nosotros.cancelClose(); nosotros.open(); }}
              onMouseLeave={nosotros.scheduleClose}
            >
              <button
                className={`flex items-center gap-1 ${linkBase} ${textClass}`}
                onClick={(e) => { e.stopPropagation(); setOpenDropdown(nosotros.isOpen ? null : "nosotros"); }}
              >
                Nosotros
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${nosotros.isOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {nosotros.isOpen && (
                  <motion.div
                    {...dropdownPanelVariants}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                    onMouseEnter={nosotros.cancelClose}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
                  >
                    <div className="w-52 bg-white rounded-2xl shadow-2xl border border-border overflow-hidden">
                      <div className="px-3 pt-4 pb-3 flex flex-col gap-1">
                        <Link
                          href="/nosotros"
                          className="block px-3 py-2 text-sm text-foreground hover:bg-secondary/40 hover:text-primary transition-colors rounded-lg"
                          onClick={() => setOpenDropdown(null)}
                        >
                          Sobre Nosotros
                        </Link>
                        <Link
                          href="/buzon-sugerencias"
                          className="block px-3 py-2 text-sm text-foreground hover:bg-secondary/40 hover:text-primary transition-colors rounded-lg"
                          onClick={() => setOpenDropdown(null)}
                        >
                          Buzón de Sugerencias
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/testimonios" className={`${linkBase} ${textClass}`}>
              Testimonios
            </Link>

            <Link href="/paquetes" className={`${linkBase} ${textClass}`}>
              Paquetes
            </Link>

            {/* ── Servicios Dropdown ── */}
            <div
              className="relative"
              onMouseEnter={() => { servicios.cancelClose(); servicios.open(); }}
              onMouseLeave={servicios.scheduleClose}
            >
              <button
                className={`flex items-center gap-1 ${linkBase} ${textClass}`}
                onClick={(e) => { e.stopPropagation(); setOpenDropdown(servicios.isOpen ? null : "servicios"); }}
              >
                Servicios
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicios.isOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {servicios.isOpen && (
                  <motion.div
                    {...dropdownPanelVariants}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                    onMouseEnter={servicios.cancelClose}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
                  >
                    <div className="w-[580px] bg-white rounded-2xl shadow-2xl border border-border overflow-hidden">
                      <div className="px-5 pt-4 pb-3">
                        <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-4">
                          Nuestros Servicios
                        </p>
                        <div className="grid grid-cols-3 gap-x-6 gap-y-0">
                          {serviceCategoryLinks.map((cat) => (
                            <div key={cat.category}>
                              <Link
                                href={cat.categoryHref}
                                className="block px-3 py-1.5 text-xs font-bold text-primary uppercase tracking-widest hover:bg-secondary/30 rounded-lg mb-1 transition-colors"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {cat.category} →
                              </Link>
                              {cat.links.map((link) => (
                                <Link
                                  key={link.name}
                                  href={link.href}
                                  className="block px-3 py-1.5 text-sm text-foreground hover:bg-secondary/40 hover:text-primary transition-colors rounded-lg"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  {link.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                        <div className="border-t border-border mt-3 pt-3 pb-1">
                          <a
                            href="/#servicios"
                            className="block px-3 py-1.5 text-sm text-primary font-semibold hover:bg-secondary/40 transition-colors rounded-lg"
                            onClick={() => setOpenDropdown(null)}
                          >
                            Ver todos los servicios →
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── Médicos y Estéticos Dropdown ── */}
            <div
              className="relative"
              onMouseEnter={() => { medicos.cancelClose(); medicos.open(); }}
              onMouseLeave={medicos.scheduleClose}
            >
              <button
                className={`flex items-center gap-1 ${linkBase} ${textClass}`}
                onClick={(e) => { e.stopPropagation(); setOpenDropdown(medicos.isOpen ? null : "medicos"); }}
              >
                Médicos y Estéticos
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${medicos.isOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {medicos.isOpen && (
                  <motion.div
                    {...dropdownPanelVariants}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                    onMouseEnter={medicos.cancelClose}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
                  >
                    <div className="w-56 bg-white rounded-2xl shadow-2xl border border-border overflow-hidden">
                      <div className="px-3 pt-4 pb-3">
                        <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3 px-2">
                          Especialidades
                        </p>
                        <div className="flex flex-col gap-1">
                          {medicoEsteticosLinks.map((link) => (
                            <Link
                              key={link.name}
                              href={link.href}
                              className="block px-3 py-2 text-sm text-foreground hover:bg-secondary/40 hover:text-primary transition-colors rounded-lg"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-border mt-2 pt-2 pb-1">
                          <Link
                            href="/medicos-esteticos"
                            className="block px-3 py-1.5 text-sm text-primary font-semibold hover:bg-secondary/40 transition-colors rounded-lg"
                            onClick={() => setOpenDropdown(null)}
                          >
                            Ver todos →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="/#contacto" className={`${linkBase} ${textClass}`}>
              Contacto
            </a>

            <Button
              className={`rounded-none px-6 py-2.5 text-sm font-semibold tracking-wide transition-all ${
                isScrolled
                  ? "bg-stone-900 text-white hover:bg-primary"
                  : "bg-white text-stone-900 hover:bg-primary hover:text-white"
              }`}
              asChild
            >
              <a id="cta-nav-reserva-desktop" href="https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
                Reservar cita
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
              {/* Mobile Nosotros Accordion */}
              <div className="border-b border-muted">
                <button
                  className="w-full flex justify-between items-center text-foreground text-lg py-3 hover:text-primary transition-colors font-serif"
                  onClick={() => setIsMobileNosotrosOpen(!isMobileNosotrosOpen)}
                >
                  Nosotros
                  <ChevronDown className={`w-5 h-5 transition-transform ${isMobileNosotrosOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isMobileNosotrosOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-3 pl-4 flex flex-col gap-1">
                        <Link
                          href="/nosotros"
                          className="block py-2 text-base text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => { setIsMobileMenuOpen(false); setIsMobileNosotrosOpen(false); }}
                        >
                          Sobre Nosotros
                        </Link>
                        <Link
                          href="/buzon-sugerencias"
                          className="block py-2 text-base text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => { setIsMobileMenuOpen(false); setIsMobileNosotrosOpen(false); }}
                        >
                          Buzón de Sugerencias
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/testimonios"
                className="text-foreground text-lg py-3 border-b border-muted hover:text-primary transition-colors font-serif block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonios
              </Link>

              <Link
                href="/paquetes"
                className="text-foreground text-lg py-3 border-b border-muted hover:text-primary transition-colors font-serif block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Paquetes
              </Link>

              {/* Mobile Services Accordion */}
              <div className="border-b border-muted">
                <button
                  className="w-full flex justify-between items-center text-foreground text-lg py-3 hover:text-primary transition-colors font-serif"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  Servicios
                  <ChevronDown className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`} />
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
                        {serviceCategoryLinks.map((cat) => (
                          <div key={cat.category} className="mb-2">
                            <Link
                              href={cat.categoryHref}
                              className="block py-1.5 text-xs font-bold text-primary uppercase tracking-widest"
                              onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                            >
                              {cat.category} →
                            </Link>
                            {cat.links.slice(0, 3).map((link) => (
                              <Link
                                key={link.name}
                                href={link.href}
                                className="block py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors pl-2"
                                onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                              >
                                {link.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Médicos y Estéticos Accordion */}
              <div className="border-b border-muted">
                <button
                  className="w-full flex justify-between items-center text-foreground text-lg py-3 hover:text-primary transition-colors font-serif"
                  onClick={() => setIsMobileMedicosOpen(!isMobileMedicosOpen)}
                >
                  Médicos y Estéticos
                  <ChevronDown className={`w-5 h-5 transition-transform ${isMobileMedicosOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isMobileMedicosOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-3 pl-4 flex flex-col gap-1">
                        {medicoEsteticosLinks.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            className="block py-2 text-base text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => { setIsMobileMenuOpen(false); setIsMobileMedicosOpen(false); }}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="/#contacto"
                className="text-foreground text-lg py-3 border-b border-muted hover:text-primary transition-colors font-serif"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </a>

              <Button className="mt-4 w-full rounded-full bg-primary text-white hover:bg-primary/90" asChild>
                <a id="cta-nav-reserva-mobile" href="https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
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
