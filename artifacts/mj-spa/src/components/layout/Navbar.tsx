import { useState, useEffect, useRef, useCallback, type Dispatch, type SetStateAction } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";

import {
  medicoEsteticosLinks,
  tratamientosCorporalesLinks,
  tratamientosFacialesLinks,
  tratamientosPiernasLinks,
  mjCreativoLinks,
} from "@/data/services";
import { useTranslations } from "@/i18n/ui";

type DropdownKey = "nosotros" | "servicios" | "medicos" | "paquetes" | "idioma" | null;

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

export function Navbar({ lang = 'es', alternateLink }: { lang?: 'es' | 'en', alternateLink?: string }) {
  const t = useTranslations(lang);

  const corporalesHalf1 = tratamientosCorporalesLinks[lang].slice(0, 6);
  const corporalesHalf2 = tratamientosCorporalesLinks[lang].slice(6);
  const facialesHalf1 = tratamientosFacialesLinks[lang].slice(0, 9);
  const facialesHalf2 = tratamientosFacialesLinks[lang].slice(9);

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
  const linkBase = `text-[11px] xl:text-[13px] uppercase tracking-wider font-semibold hover:text-primary transition-all duration-300 relative group/link`;

  const isActive = (path: string) => {
    const normalizedPath = currentPath.replace(/^\/en/, '') || '/';
    const normalizedTarget = path.replace(/^\/en/, '') || '/';

    // Handle special case for about-us / nosotros renaming
    const isAboutPath = (p: string) => p === '/nosotros' || p === '/about-us';
    if (isAboutPath(normalizedPath) && isAboutPath(normalizedTarget)) return true;

    // Handle special case for other renamed pages if any
    if (normalizedTarget === '/suggestion-box' && normalizedPath === '/buzon-sugerencias') return true;
    if (normalizedTarget === '/buzon-sugerencias' && normalizedPath === '/suggestion-box') return true;

    return normalizedPath === normalizedTarget || (normalizedTarget !== "/" && normalizedPath.startsWith(normalizedTarget));
  };

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

  const getAlternateLink = (targetLang: 'es' | 'en') => {
    if (alternateLink) return alternateLink;
    if (targetLang === 'en') {
      if (currentPath === '/') return '/en';
      if (currentPath.startsWith('/en')) return currentPath;
      return '/en' + currentPath;
    } else {
      if (!currentPath.startsWith('/en')) return currentPath || '/';
      return currentPath.replace('/en', '') || '/';
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm py-3.5 border-b border-stone-100"
          : "bg-gradient-to-b from-black/80 via-black/20 to-transparent py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full">
          {/* Large prominent Brand Logo on the left with zero side margins */}
          <Link href={lang === 'es' ? "/" : "/en"} className="flex items-center cursor-pointer group shrink-0 mx-0 px-0">
            <img
              src={`${import.meta.env.BASE_URL}images/logo-mj.png`}
              alt="MJ Fisio Estética y Spa"
              className="h-14 lg:h-18 w-auto object-contain transition-all duration-300 group-hover:scale-105 mx-0 px-0"
              style={isScrolled ? {} : { filter: "drop-shadow(0 0 10px rgba(255,255,255,0.5)) brightness(1.15)" }}
              height="80"
            />
          </Link>

          {/* Desktop Nav on the right */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-6 ml-auto">

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
                {t('nav.nosotros')}
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
                        <Link href={lang === 'es' ? "/nosotros" : "/en/about-us"}
                          className="block px-3 py-2 text-sm text-foreground hover:bg-secondary/40 hover:text-primary transition-colors rounded-lg cursor-pointer"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {lang === 'es' ? 'Sobre Nosotros' : 'About Us'}
                        </Link>
                        <Link href={lang === 'es' ? "/buzon-sugerencias" : "/en/suggestion-box"}
                          className="block px-3 py-2 text-sm text-foreground hover:bg-secondary/40 hover:text-primary transition-colors rounded-lg cursor-pointer"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {lang === 'es' ? 'Buzón de Sugerencias' : 'Suggestion Box'}
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href={lang === 'es' ? "/testimonios" : "/en/testimonials"} className={`${linkBase} ${textClass} ${isActive("/testimonios") ? "text-primary" : ""} cursor-pointer`}>
              {t('nav.testimonios')}
              {isActive("/testimonios") && <ActiveIndicator />}
            </Link>

            <Link href={lang === 'es' ? "/paquetes" : "/en/packages"} className={`${linkBase} ${textClass} ${isActive("/paquetes") ? "text-primary" : ""} cursor-pointer`}>
              {t('nav.paquetes')}
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
                {t('nav.servicios')}
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
                        <div className="grid grid-cols-5 gap-x-4">
                          {/* Corporales col 1 */}
                          <div>
                            <Link href={lang === 'es' ? "/servicios/corporales" : "/en/services/body-treatments"}
                              className="block px-2 py-1 text-[10px] font-bold text-primary uppercase tracking-widest hover:bg-secondary/30 rounded mb-1 transition-colors cursor-pointer"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {lang === 'es' ? 'Corporales' : 'Body'}
                            </Link>
                            {corporalesHalf1.map((link) => (
                              <Link
                                key={link.name}
                                href={link.href}
                                className="block px-2 py-1 text-[12px] text-foreground hover:bg-secondary/40 hover:text-primary transition-colors rounded cursor-pointer"
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
                                className="block px-2 py-1 text-[12px] text-foreground hover:bg-secondary/40 hover:text-primary transition-colors rounded cursor-pointer"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {link.name}
                              </Link>
                            ))}
                          </div>
                          {/* Faciales col 1 */}
                          <div>
                            <Link href={lang === 'es' ? "/servicios/faciales" : "/en/services/facials"}
                              className="block px-2 py-1 text-[10px] font-bold text-primary uppercase tracking-widest hover:bg-secondary/30 rounded mb-1 transition-colors cursor-pointer"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {lang === 'es' ? 'Faciales' : 'Facials'}
                            </Link>
                            {facialesHalf1.map((link) => (
                              <Link
                                key={link.name}
                                href={link.href}
                                className="block px-2 py-1 text-[12px] text-foreground hover:bg-secondary/40 hover:text-primary transition-colors rounded cursor-pointer"
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
                                className="block px-2 py-1 text-[12px] text-foreground hover:bg-secondary/40 hover:text-primary transition-colors rounded cursor-pointer"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {link.name}
                              </Link>
                            ))}
                          </div>
                          {/* Piernas */}
                          <div>
                            <Link href={lang === 'es' ? "/servicios/piernas" : "/en/services/leg-treatments"}
                              className="block px-2 py-1 text-[10px] font-bold text-primary uppercase tracking-widest hover:bg-secondary/30 rounded mb-1 transition-colors cursor-pointer"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {lang === 'es' ? 'Piernas' : 'Legs'}
                            </Link>
                          {tratamientosPiernasLinks[lang].map((link) => (
                              <Link
                                key={link.name}
                                href={link.href}
                                className="block px-2 py-1 text-[12px] text-foreground hover:bg-secondary/40 hover:text-primary transition-colors rounded cursor-pointer"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {link.name}
                              </Link>
                            ))}

                            {/* MJ Creativo */}
                            <div className="mt-4">
                              <span className="block px-2 py-1 text-[10px] font-bold text-primary uppercase tracking-widest mb-1">
                                MJ Creativo
                              </span>
                            {mjCreativoLinks[lang].map((link) => (
                                <Link
                                  key={link.name}
                                  href={link.href}
                                  className="block px-2 py-1 text-[12px] text-foreground hover:bg-secondary/40 hover:text-primary transition-colors rounded cursor-pointer"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  {link.name}
                                </Link>
                              ))}
                            </div>
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
                  href={lang === 'es' ? "/medicina-estetica" : "/en/medical-aesthetic"}
                  className={`${linkBase} ${textClass} ${isActive("/medicina-estetica") ? "text-primary" : ""} cursor-pointer`}
                >
                  {t('nav.medico')}
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
                            href={lang === 'es' ? "/medicina-estetica" : "/en/facial-harmonization"}
                            className="block px-3 py-2 text-sm font-bold text-primary hover:bg-secondary/40 transition-colors rounded-lg cursor-pointer"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {lang === 'es' ? 'Armonización Facial' : 'Facial Harmonization'}
                          </Link>
                          {medicoEsteticosLinks[lang].map((link) => (
                            <Link
                              key={link.name}
                              href={link.href}
                              className="block px-3 py-2 text-sm text-foreground hover:bg-secondary/40 hover:text-primary transition-colors rounded-lg cursor-pointer"
                              onClick={() => setOpenDropdown(null)}
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

            <a href={lang === 'es' ? "/#contacto" : "/en/#contact"} className={`${linkBase} ${textClass} cursor-pointer`}>
              {lang === 'es' ? "Contacto" : "Contact"}
            </a>

            <Link href={lang === 'es' ? "/blog" : "/en/blog"} className={`${linkBase} ${textClass} ${isActive("/blog") ? "text-primary" : ""} cursor-pointer`}>
              {t('nav.blog')}
              {isActive("/blog") && <ActiveIndicator />}
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
                {t('nav.reservar')}
              </a>
            </Button>

            {/* ── Idioma Toggle ── */}
            <div className={`flex items-center gap-1.5 border-l border-white/20 pl-4 ml-1`}>
              <Globe className={`w-3.5 h-3.5 ${textClass} opacity-60`} />
              <span className={`text-[10px] xl:text-[11px] uppercase tracking-tighter ${textClass} opacity-60 font-bold mr-0.5`}>
                {lang === 'es' ? 'Idioma' : 'Language'}
              </span>
              <div className="flex items-center gap-1.5">
                <a
                  href={getAlternateLink('es')}
                  className={`text-[12px] xl:text-[13px] font-bold transition-all ${lang === 'es' ? 'text-primary underline underline-offset-4 scale-105' : textClass + ' opacity-60 hover:opacity-100'}`}
                >
                  ES
                </a>
                <span className={`${textClass} opacity-20 text-xs`}>|</span>
                <a
                  href={getAlternateLink('en')}
                  className={`text-[12px] xl:text-[13px] font-bold transition-all ${lang === 'en' ? 'text-primary underline underline-offset-4 scale-105' : textClass + ' opacity-60 hover:opacity-100'}`}
                >
                  EN
                </a>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              className={`p-2 transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-border lg:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col py-4 px-6 gap-1">
              {/* Mobile Language Selection - TOP & PROMINENT */}
              <div className="py-5 border-b-2 border-primary/5 bg-stone-50/50 -mx-6 px-6 mb-4">
                <div className="flex items-center gap-2 mb-4 justify-center">
                  <Globe className="w-4 h-4 text-primary" />
                  <p className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.3em]">Seleccionar Idioma</p>
                </div>
                <div className="flex gap-3">
                  <a href={getAlternateLink('es')}
                    className={`flex-1 text-center py-3 rounded-xl border-2 font-bold uppercase text-xs tracking-widest transition-all ${lang === 'es' ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" : "bg-white text-stone-400 border-stone-200"}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Español
                  </a>
                  <a href={getAlternateLink('en')}
                    className={`flex-1 text-center py-3 rounded-xl border-2 font-bold uppercase text-xs tracking-widest transition-all ${lang === 'en' ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" : "bg-white text-stone-400 border-stone-200"}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    English
                  </a>
                </div>
              </div>

              {/* Mobile Nosotros Accordion */}
              <div className="border-b border-muted">
                <button
                  className="w-full flex justify-between items-center text-foreground text-lg py-3 hover:text-primary transition-colors font-serif"
                  onClick={() => setIsMobileNosotrosOpen(!isMobileNosotrosOpen)}
                >
                  {lang === 'es' ? 'Nosotros' : 'About Us'}
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
                        <Link href={lang === 'es' ? "/nosotros" : "/en/about-us"}
                          className={`block py-2 text-base ${isActive("/nosotros") || isActive("/about-us") ? "text-primary font-bold" : "text-muted-foreground"} hover:text-primary transition-colors cursor-pointer`}
                          onClick={() => { setIsMobileMenuOpen(false); setIsMobileNosotrosOpen(false); }}
                        >
                          {lang === 'es' ? 'Sobre Nosotros' : 'About Us'}
                        </Link>
                        <Link href={lang === 'es' ? "/buzon-sugerencias" : "/en/suggestion-box"}
                          className={`block py-2 text-base ${isActive("/buzon-sugerencias") ? "text-primary font-bold" : "text-muted-foreground"} hover:text-primary transition-colors cursor-pointer`}
                          onClick={() => { setIsMobileMenuOpen(false); setIsMobileNosotrosOpen(false); }}
                        >
                          {lang === 'es' ? 'Buzón de Sugerencias' : 'Suggestion Box'}
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href={lang === 'es' ? "/testimonios" : "/en/testimonials"}
                className={`${isActive("/testimonios") ? "text-primary font-bold" : "text-foreground"} text-lg py-3 border-b border-muted hover:text-primary transition-colors font-serif block cursor-pointer`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.testimonios')}
              </Link>

              <Link href={lang === 'es' ? "/paquetes" : "/en/packages"}
                className={`${isActive("/paquetes") ? "text-primary font-bold" : "text-foreground"} text-lg py-3 border-b border-muted hover:text-primary transition-colors font-serif block cursor-pointer`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.paquetes')}
              </Link>



              {/* Mobile Services Accordion */}
              <div className="border-b border-muted">
                <button
                  className="w-full flex justify-between items-center text-foreground text-lg py-3 hover:text-primary transition-colors font-serif"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  {lang === 'es' ? 'Servicios' : 'Services'}
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
                          <Link href={lang === 'es' ? "/servicios/corporales" : "/en/services/body-treatments"}
                            className="block py-1.5 text-xs font-bold text-primary uppercase tracking-widest cursor-pointer"
                            onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                          >
                            {lang === 'es' ? 'Corporales' : 'Body'}
                          </Link>
                          {tratamientosCorporalesLinks[lang].map((link) => (
                            <Link
                              key={link.name}
                              href={link.href}
                              className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors pl-2 cursor-pointer"
                              onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                            >
                              {link.name}
                            </Link>
                          ))}

                        </div>
                        {/* Faciales */}
                        <div className="mb-2">
                          <Link href={lang === 'es' ? "/servicios/faciales" : "/en/services/facials"}
                            className="block py-1.5 text-xs font-bold text-primary uppercase tracking-widest cursor-pointer"
                            onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                          >
                            {lang === 'es' ? 'Faciales' : 'Facials'}
                          </Link>
                          {tratamientosFacialesLinks[lang].map((link) => (
                            <Link
                              key={link.name}
                              href={link.href}
                              className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors pl-2 cursor-pointer"
                              onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                            >
                              {link.name}
                            </Link>
                          ))}

                        </div>
                        {/* Piernas */}
                        <div className="mb-2">
                          <Link href={lang === 'es' ? "/servicios/piernas" : "/en/services/leg-treatments"}
                            className="block py-1.5 text-xs font-bold text-primary uppercase tracking-widest cursor-pointer"
                            onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                          >
                            {lang === 'es' ? 'Piernas' : 'Legs'}
                          </Link>
                          {tratamientosPiernasLinks[lang].map((link) => (
                            <Link
                              key={link.name}
                              href={link.href}
                              className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors pl-2 cursor-pointer"
                              onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                            >
                              {link.name}
                            </Link>
                          ))}

                          {/* MJ Creativo (Mobile) */}
                          <div className="mt-3 pl-2">
                            <span className="block py-1 text-[10px] font-bold text-primary uppercase tracking-widest mb-1">
                              MJ Creativo
                            </span>
                            {mjCreativoLinks[lang].map((link) => (
                              <Link
                                key={link.name}
                                href={link.href}
                                className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
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

              {/* Mobile Médico Estético Accordion */}
              <div className="border-b border-muted">
                <div className="flex justify-between items-center w-full">
                  <Link
                    href={lang === 'es' ? "/medicina-estetica" : "/en/facial-harmonization"}
                    className={`flex-grow ${isActive("/medicina-estetica") ? "text-primary font-bold" : "text-foreground"} text-lg py-3 hover:text-primary transition-colors font-serif cursor-pointer`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('nav.medico')}
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
                            href={lang === 'es' ? "/medicina-estetica" : "/en/facial-harmonization"}
                            className="block py-2 text-base font-bold text-primary hover:text-primary/80 transition-colors cursor-pointer"
                            onClick={() => { setIsMobileMenuOpen(false); setIsMobileMedicosOpen(false); }}
                          >
                            {lang === 'es' ? 'Armonización Facial' : 'Facial Harmonization'}
                          </Link>
                      {medicoEsteticosLinks[lang].map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            className="block py-2 text-base text-muted-foreground hover:text-primary transition-colors cursor-pointer"
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
                href={lang === 'es' ? "/#contacto" : "/en/#contact"}
                className={`text-foreground text-lg py-3 border-b border-muted hover:text-primary transition-colors font-serif block cursor-pointer`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {lang === 'es' ? "Contacto" : "Contact"}
              </a>

              <Link
                href={lang === 'es' ? "/blog" : "/en/blog"}
                className={`${isActive("/blog") ? "text-primary font-bold" : "text-foreground"} text-lg py-3 border-b border-muted hover:text-primary transition-colors font-serif block cursor-pointer`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.blog')}
              </Link>

              <Button className="mt-4 w-full rounded-full bg-primary text-white hover:bg-primary/90" asChild>
                <a id="cta-nav-reserva-mobile" href="https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                  {t('nav.reservar')}
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
