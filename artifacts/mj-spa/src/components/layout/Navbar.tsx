import { useState, useEffect, useRef, useCallback, type Dispatch, type SetStateAction } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

import {
  medicoEsteticosLinks,
  tratamientosCorporalesLinks,
  tratamientosFacialesLinks,
  tratamientosPiernasLinks,
  mjCreativoLinks,
} from "@/data/services";

const corporalesHalf1 = tratamientosCorporalesLinks.slice(0, 6);
const corporalesHalf2 = tratamientosCorporalesLinks.slice(6);
const facialesHalf1 = tratamientosFacialesLinks.slice(0, 9);
const facialesHalf2 = tratamientosFacialesLinks.slice(9);

type DropdownKey = "nosotros" | "servicios" | "medicos" | "paquetes" | null;

function useHoverDropdown(key: DropdownKey, openDropdown: DropdownKey, setOpenDropdown: Dispatch<SetStateAction<DropdownKey>>) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

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
  const [currentPath, setCurrentPath] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileMedicosOpen, setIsMobileMedicosOpen] = useState(false);
  const [isMobileNosotrosOpen, setIsMobileNosotrosOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    setCurrentPath(window.location.pathname);
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

  const textClass = isScrolled ? "text-[#0c3e5a]" : "text-white/90";
  const linkBase = `text-[15px] uppercase tracking-widest font-medium hover:text-primary transition-all duration-300 relative group/link`;

  const isActive = (path: string) => currentPath === path || (path !== "/" && currentPath.startsWith(path));

  const ActiveIndicator = () => (
    <motion.span
      layoutId="activeNav"
      className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ type: "spring", stiffness: 380, damping: 30 }}
    />
  );

  const dropdownPanelVariants = {
    initial: { opacity: 0, y: 8, scale: 0.97 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 8, scale: 0.97 },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm py-3 border-b border-stone-100"
          : "bg-gradient-to-b from-black/80 via-black/20 to-transparent py-5"
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
                className={`flex items-center gap-1 ${linkBase} ${textClass} ${isActive("/nosotros") || isActive("/buzon-sugerencias") ? "text-primary" : ""}`}
                onClick={(e) => { e.stopPropagation(); setOpenDropdown(nosotros.isOpen ? null : "nosotros"); }}
              >
                Nosotros
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${nosotros.isOpen ? "rotate-180" : ""}`} />
                {(isActive("/nosotros") || isActive("/buzon-sugerencias")) && <ActiveIndicator />}
              </button>
              <AnimatePresence>
                {nosotros.isOpen && (
                  <motion.div
                    {...dropdownPanelVariants}
                    transition={{ duration: 0.16, ease: "easeOut" as const }}
                    onMouseEnter={nosotros.cancelClose}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
                  >
                    <div className="w-52 bg-white rounded-2xl shadow-2xl border border-border overflow-hidden">
                      <div className="px-3 pt-4 pb-3 flex flex-col gap-1">
                        <Link href="/nosotros"
                          className="block px-3 py-2 text-sm text-foreground hover:bg-secondary/40 hover:text-primary transition-colors rounded-lg"
                          onClick={() => setOpenDropdown(null)}
                        >
                          Sobre Nosotros
                        </Link>
                        <Link href="/buzon-sugerencias"
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

            <Link href="/testimonios" className={`${linkBase} ${textClass} ${isActive("/testimonios") ? "text-primary" : ""}`}>
              Testimonios
              {isActive("/testimonios") && <ActiveIndicator />}
            </Link>

            <Link href="/paquetes" className={`${linkBase} ${textClass} ${isActive("/paquetes") ? "text-primary" : ""}`}>
              Paquetes
              {isActive("/paquetes") && <ActiveIndicator />}
            </Link>



            {/* ── Servicios Dropdown ── */}
            <div
              className="relative"
              onMouseEnter={() => { servicios.cancelClose(); servicios.open(); }}
              onMouseLeave={servicios.scheduleClose}
            >
              <button
                className={`flex items-center gap-1 ${linkBase} ${textClass} ${isActive("/tratamientos") || isActive("/servicios") ? "text-primary" : ""}`}
                onClick={(e) => { e.stopPropagation(); setOpenDropdown(servicios.isOpen ? null : "servicios"); }}
              >
                Servicios
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicios.isOpen ? "rotate-180" : ""}`} />
                {(isActive("/tratamientos") || isActive("/servicios")) && <ActiveIndicator />}
              </button>
              <AnimatePresence>
                {servicios.isOpen && (
                  <motion.div
                    {...dropdownPanelVariants}
                    transition={{ duration: 0.16, ease: "easeOut" as const }}
                    onMouseEnter={servicios.cancelClose}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
                  >
                    <div className="w-[1000px] bg-white rounded-2xl shadow-2xl border border-border overflow-hidden m-[5px]">
                      <div className="px-5 pt-5 pb-5">
                        <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-4">
                          Nuestros Servicios
                        </p>
                        <div className="grid grid-cols-6 gap-x-4">
                          {/* Corporales col 1 */}
                          <div>
                            <Link href="/tratamientos/corporales"
                              className="block px-2 py-1 text-[10px] font-bold text-primary uppercase tracking-widest hover:bg-secondary/30 rounded mb-1 transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              Corporales
                            </Link>
                            {corporalesHalf1.map((link) => (
                              <Link
                                key={link.name}
                                href={link.href}
                                className="block px-2 py-1 text-[12px] text-foreground hover:bg-secondary/40 hover:text-primary transition-colors rounded"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {link.name}
                              </Link>
                            ))}
                          </div>
                          {/* MJ Creativo */}
                          <div>
                            <Link href="/servicios/arteterapia"
                              className="block px-2 py-1 text-[10px] font-bold text-primary uppercase tracking-widest hover:bg-secondary/30 rounded mb-1 transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              MJ Creativo
                            </Link>
                            {mjCreativoLinks.map((link) => (
                              <Link
                                key={link.name}
                                href={link.href}
                                className="block px-2 py-1 text-[12px] text-foreground hover:bg-secondary/40 hover:text-primary transition-colors rounded"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {link.name}
                              </Link>
                            ))}
                          </div>
                          {/* Corporales col 2 (continuation) */}
                          <div className="pt-6">
                            {corporalesHalf2.map((link) => (
                              <Link
                                key={link.name}
                                href={link.href}
                                className="block px-2 py-1 text-[12px] text-foreground hover:bg-secondary/40 hover:text-primary transition-colors rounded"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {link.name}
                              </Link>
                            ))}
                          </div>
                          {/* Faciales col 1 */}
                          <div>
                            <Link href="/tratamientos/faciales"
                              className="block px-2 py-1 text-[10px] font-bold text-primary uppercase tracking-widest hover:bg-secondary/30 rounded mb-1 transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              Faciales
                            </Link>
                            {facialesHalf1.map((link) => (
                              <Link
                                key={link.name}
                                href={link.href}
                                className="block px-2 py-1 text-[12px] text-foreground hover:bg-secondary/40 hover:text-primary transition-colors rounded"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {link.name}
                              </Link>
                            ))}
                          </div>
                          {/* Faciales col 2 (continuation) */}
                          <div className="pt-6">
                            {facialesHalf2.map((link) => (
                              <Link
                                key={link.name}
                                href={link.href}
                                className="block px-2 py-1 text-[12px] text-foreground hover:bg-secondary/40 hover:text-primary transition-colors rounded"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {link.name}
                              </Link>
                            ))}
                          </div>
                          {/* Piernas */}
                          <div>
                            <Link href="/tratamientos/piernas"
                              className="block px-2 py-1 text-[10px] font-bold text-primary uppercase tracking-widest hover:bg-secondary/30 rounded mb-1 transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              Piernas
                            </Link>
                            {tratamientosPiernasLinks.map((link) => (
                              <Link
                                key={link.name}
                                href={link.href}
                                className="block px-2 py-1 text-[12px] text-foreground hover:bg-secondary/40 hover:text-primary transition-colors rounded"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {link.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── Médico Estético Dropdown ── */}
            <div
              className="relative"
              onMouseEnter={() => { medicos.cancelClose(); medicos.open(); }}
              onMouseLeave={medicos.scheduleClose}
            >
              <div className="flex items-center gap-1">
              <Link
                  href="/medicina-estetica"
                  className={`${linkBase} ${textClass} ${isActive("/medicina-estetica") ? "text-primary" : ""}`}
                >
                  Médico Estético
                  {isActive("/medicina-estetica") && <ActiveIndicator />}
              </Link>
                <button
                  className={`p-1 ${textClass} hover:text-primary transition-colors`}
                  onClick={(e) => { e.stopPropagation(); setOpenDropdown(medicos.isOpen ? null : "medicos"); }}
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${medicos.isOpen ? "rotate-180" : ""}`} />
                </button>
              </div>
              <AnimatePresence>
                {medicos.isOpen && (
                  <motion.div
                    {...dropdownPanelVariants}
                    transition={{ duration: 0.16, ease: "easeOut" as const }}
                    onMouseEnter={medicos.cancelClose}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
                  >
                    <div className="w-56 bg-white rounded-2xl shadow-2xl border border-border overflow-hidden">
                      <div className="px-3 pt-4 pb-3">
                        <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3 px-2">
                          Especialidades
                        </p>
                        <div className="flex flex-col gap-1">
                          <Link
                            href="/medicina-estetica"
                            className="block px-3 py-2 text-sm font-bold text-primary hover:bg-secondary/40 transition-colors rounded-lg"
                            onClick={() => setOpenDropdown(null)}
                          >
                            Armonización Facial
                          </Link>
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
                        {/* MJ Creativo */}
                        <div className="mb-2">
                          <Link href="/servicios/arteterapia"
                            className="block py-1.5 text-xs font-bold text-primary uppercase tracking-widest"
                            onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                          >
                            MJ Creativo
                          </Link>
                          {mjCreativoLinks.map((link) => (
                            <Link
                              key={link.name}
                              href={link.href}
                              className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors pl-2"
                              onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/#contacto" className={`${linkBase} ${textClass}`}>
              Contacto
            </Link>

            <Button
              className={`rounded-none px-6 py-2.5 text-sm font-semibold tracking-wide transition-all ${
                isScrolled
                  ? "bg-[#071e2e] text-white hover:bg-primary"
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
                        <Link href="/nosotros"
                          className={`block py-2 text-base ${isActive("/nosotros") ? "text-primary font-bold" : "text-muted-foreground"} hover:text-primary transition-colors`}
                          onClick={() => { setIsMobileMenuOpen(false); setIsMobileNosotrosOpen(false); }}
                        >
                          Sobre Nosotros
                        </Link>
                        <Link href="/buzon-sugerencias"
                          className={`block py-2 text-base ${isActive("/buzon-sugerencias") ? "text-primary font-bold" : "text-muted-foreground"} hover:text-primary transition-colors`}
                          onClick={() => { setIsMobileMenuOpen(false); setIsMobileNosotrosOpen(false); }}
                        >
                          Buzón de Sugerencias
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/testimonios"
                className={`${isActive("/testimonios") ? "text-primary font-bold" : "text-foreground"} text-lg py-3 border-b border-muted hover:text-primary transition-colors font-serif block`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonios
              </Link>

              <Link href="/paquetes"
                className={`${isActive("/paquetes") ? "text-primary font-bold" : "text-foreground"} text-lg py-3 border-b border-muted hover:text-primary transition-colors font-serif block`}
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
                        {/* Corporales */}
                        <div className="mb-2">
                          <Link href="/tratamientos/corporales"
                            className="block py-1.5 text-xs font-bold text-primary uppercase tracking-widest"
                            onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                          >
                            Corporales
                          </Link>
                          {tratamientosCorporalesLinks.map((link) => (
                            <Link
                              key={link.name}
                              href={link.href}
                              className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors pl-2"
                              onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                        {/* Faciales */}
                        <div className="mb-2">
                          <Link href="/tratamientos/faciales"
                            className="block py-1.5 text-xs font-bold text-primary uppercase tracking-widest"
                            onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                          >
                            Faciales
                          </Link>
                          {tratamientosFacialesLinks.map((link) => (
                            <Link
                              key={link.name}
                              href={link.href}
                              className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors pl-2"
                              onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                        {/* Piernas */}
                        <div className="mb-2">
                          <Link href="/tratamientos/piernas"
                            className="block py-1.5 text-xs font-bold text-primary uppercase tracking-widest"
                            onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                          >
                            Piernas
                          </Link>
                          {tratamientosPiernasLinks.map((link) => (
                            <Link
                              key={link.name}
                              href={link.href}
                              className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors pl-2"
                              onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Médico Estético Accordion */}
              <div className="border-b border-muted">
                <div className="flex justify-between items-center w-full">
                  <Link
                    href="/medicina-estetica"
                    className={`flex-grow ${isActive("/medicina-estetica") ? "text-primary font-bold" : "text-foreground"} text-lg py-3 hover:text-primary transition-colors font-serif`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Médico Estético
                  </Link>
                  <button
                    className="p-3 text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMedicosOpen(!isMobileMedicosOpen)}
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform ${isMobileMedicosOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>
                <AnimatePresence>
                  {isMobileMedicosOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-3 pl-4 flex flex-col gap-1">
                          <Link
                            href="/medicina-estetica"
                            className="block py-2 text-base font-bold text-primary hover:text-primary/80 transition-colors"
                            onClick={() => { setIsMobileMenuOpen(false); setIsMobileMedicosOpen(false); }}
                          >
                            Armonización Facial
                          </Link>
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

              <Link
                href="/#contacto"
                className={`text-foreground text-lg py-3 border-b border-muted hover:text-primary transition-colors font-serif`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </Link>

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
