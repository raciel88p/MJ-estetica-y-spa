import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  ArrowRight, Star, MapPin, Phone, Clock,
  ChevronRight, ChevronLeft, MessageCircle
} from "lucide-react";

import { useABTest } from "@/hooks/useABTest";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { GoogleMap, MAPS_LINK, GOOGLE_REVIEW_LINK } from "@/components/GoogleMap";
import { StatsBar } from "@/components/StatsBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

/* ── HERO SLIDES ──────────────────────────────────── */
const heroSlides = [
  {
    bg: "hero-bg.webp",
    label: "Estética Avanzada",
    title: "DESCUBRE TU\nMEJOR VERSIÓN",
    sub: "Los mejores profesionales y la mejor tecnología, exclusivamente para ti.",
    cta: "Ver tratamientos",
    ctaHref: "#servicios",
  },
  {
    bg: "spa-texture.webp",
    label: "Spa & Bienestar",
    title: "RELÁJATE Y\nRECUPERA TU ENERGÍA",
    sub: "Circuitos de spa, masajes y tratamientos corporales diseñados para tu bienestar total.",
    cta: "Reservar cita",
    ctaHref: "https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0",
    ctaExternal: true,
  },
  {
    bg: "about-us.webp",
    label: "Medicina Estética",
    title: "TECNOLOGÍA DE\nVANGUARDIA PARA TI",
    sub: "Tratamientos médico-estéticos con resultados visibles desde la primera sesión.",
    cta: "Conocer más",
    ctaHref: "/medicos-esteticos",
  },
];

/* ── SERVICE CATEGORIES ───────────────────────────── */
const serviceCategories = [
  {
    href: "/tratamientos/corporales",
    label: "CORPORALES",
    index: "01",
    title: "Moldea y reafirma tu silueta",
    desc: "Tecnología de vanguardia para resultados reales sin cirugía.",
    services: ["Cavitación Ultrasónica", "Tensado Corporal en Turrialba", "Drenaje Linfático", "Reducción de Medidas", "Depilación Láser"],
    bg: "about-us.webp",
    accent: "from-rose-900/90",
  },
  {
    href: "/tratamientos/faciales",
    label: "FACIALES",
    index: "02",
    title: "Rejuvenece y luminiza tu rostro",
    desc: "Un rostro luminoso, joven y sin imperfecciones.",
    services: ["✨ HOLLYWOOD PEEL EN TURRIALBA", "Radiofrecuencia Facial", "Ácido Hialurónico", "Biorevitalización", "Eliminación de Manchas"],
    bg: "hero-bg.webp",
    accent: "from-stone-900/90",
  },
  {
    href: "/tratamientos/piernas",
    label: "PIERNAS",
    index: "03",
    title: "Piernas sanas, ligeras y estéticas",
    desc: "Técnicas no invasivas con resultados duraderos.",
    services: ["Presoterapia", "Drenaje Circulatorio", "Tratamiento Anticelulitis", "Piernas Cansadas"],
    bg: "spa-texture.webp",
    accent: "from-stone-900/95",
  },
];

/* ── FEATURED TREATMENTS ──────────────────────────── */
const featuredTreatments = [
  { name: "Reducción de Medidas", href: "/servicios/reduccion-de-medidas", cat: "Corporal" },
  { name: "Tensado Corporal en Turrialba", href: "/servicios/tensado-corporal", cat: "Corporal" },
  { name: "Masajes Post Operatorios", href: "/servicios/masajes-post-operatorios", cat: "Corporal" },
  { name: "ADN de Salmón", href: "/servicios/adn-salmon", cat: "Facial" },
  { name: "✨ HOLLYWOOD PEEL EN TURRIALBA", href: "/servicios/hollywood-peel", cat: "Facial" },
  { name: "Radiofrecuencia Facial", href: "/servicios/radiofrecuencia-facial", cat: "Facial" },
  { name: "Eliminación de Manchas", href: "/servicios/eliminacion-manchas", cat: "Facial" },
  { name: "Reducción de Papada", href: "/servicios/tensado-corporal", cat: "Corporal" },
];

/* ── TESTIMONIALS ─────────────────────────────────── */
const testimonials = [
  { name: "Kattya Brenes", text: "Es un privilegio formar parte de la Familia MJ. Agradezco infinitamente por abrirme las puertas para ser atendida por un equipo de personas profesionales y capacitadas." },
  { name: "Carlos Brenes", text: "Desde que empecé con MJ estética he sentido como mi autoestima ha crecido, en un mes rebajé varios centímetros en mi abdomen y papada. Los resultados en poco tiempo me hacen sentir agradecido." },
  { name: "Laura Hernández González", text: "Esos rollitos tan molestos que no podía quitar por más gimnasio, los logré eliminar gracias al tratamiento en MJ estética. Sin lugar a dudas un lugar para chinearte y de paso verte mejor." },
  { name: "Andrea Salas Portuguez", text: "La atención excelente tanto de Adri como de María, los servicios de primera calidad, mucho orden, puntualidad y precios muy asequibles." },
  { name: "Marlene Fernández Mora", text: "El servicio brindado y la atención son excelentes, en particular el profesionalismo que demuestran. Sí los recomendaría a ojos cerrados." },
  { name: "Catalina Aguilar Madriz", text: "Me he realizado varios tratamientos con MJ teniendo súper buenos resultados, por eso sigo comprando paquetes y recomendando a mis amig@s a que también vayan." },
];

/* ── WHY US ───────────────────────────────────────── */
const features = [
  { n: "01", title: "Profesionales certificados", desc: "Equipo con formación continua y certificaciones en estética y medicina." },
  { n: "02", title: "Tecnología de vanguardia", desc: "Aparatología de última generación para resultados óptimos y duraderos." },
  { n: "03", title: "Trato completamente personalizado", desc: "Cada tratamiento es diseñado según tus necesidades y objetivos." },
  { n: "04", title: "Resultados visibles y seguros", desc: "Protocolos probados que garantizan tu seguridad y satisfacción." },
];

/* ── CONTACT FORM ─────────────────────────────────── */
const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre es muy corto"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(9, "Teléfono inválido"),
  service: z.string().min(1, "Selecciona un servicio"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});
type ContactFormValues = z.infer<typeof contactFormSchema>;

/* ── ANIMATION PRESETS ────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } }
};

const WA = "https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0";

/* ════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════ */
export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const { toast } = useToast();

  const heroCTA = useABTest({
    testName: "hero_cta_text",
    variants: {
      A: "Reservar cita",
      B: "Quiero mi cita gratis",
    },
  });

  useEffect(() => {
    const t = setInterval(() => setSlideIndex(i => (i + 1) % heroSlides.length), 6000);
    return () => clearInterval(t);
  }, []);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", phone: "", service: "", message: "" }
  });

  const serviceLabels: Record<string, string> = {
    "reduccion-medidas": "Reducción de Medidas",
    "masajes-post-operatorios": "Masajes Post Operatorios",
    "tensado-corporal": "Tensado Corporal en Turrialba",
    "drenaje-linfatico": "Drenaje Linfático",
    "adn-salmon": "ADN de Salmón",
    "tratamiento-ojeras": "Tratamiento de Ojeras",
    "blanqueamiento-zona-intima": "Láser Despigmentante en Turrialba",
    "hollywood-peel": "✨ HOLLYWOOD PEEL EN TURRIALBA",
    "radiofrecuencia-facial": "Radiofrecuencia Facial",
    "eliminacion-manchas": "Eliminación de Manchas",
    "peeling-quimico": "Peeling Químico",
    "faciales": "Tratamientos Faciales",
    "piernas-cansadas": "Piernas Cansadas",
    "botox": "Bótox y Toxina Botulínica",
    "acido-hialuronico": "Ácido Hialurónico",
    "hilos-tensores": "Hilos Tensores",
  };

  const onSubmit = (data: ContactFormValues) => {
    const serviceLabel = serviceLabels[data.service] || data.service;
    const text = [
      `Hola MJ Fisio Estética y Spa 👋`,
      ``,
      `*Nombre:* ${data.name}`,
      `*Servicio:* ${serviceLabel}`,
      `*Teléfono:* ${data.phone}`,
      `*Email:* ${data.email}`,
      ``,
      `*Mensaje:* ${data.message}`,
    ].join("\n");

    const waUrl = `https://wa.me/50686907757?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    toast({ title: "¡Abriendo WhatsApp!", description: "Tu mensaje está listo — solo confirma el envío." });
    form.reset();
  };

  const BASE = import.meta.env.BASE_URL;
  const slide = heroSlides[slideIndex];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SEO
        title="Centro de Estética y Spa en Turrialba"
        description="MJ Fisio Estética y Spa en Turrialba, Costa Rica. Tratamientos faciales, corporales, piernas cansadas, botox, hilos tensores y más. Reserva tu cita hoy."
        canonical="/"
      />
      <Navbar />
      <FloatingWhatsApp />

      {/* ══ HERO SLIDER ════════════════════════════════ */}
      <section id="inicio" className="relative h-screen min-h-[640px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slideIndex}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={`${BASE}images/${slide.bg}`}
              alt="MJ Fisio Estética y Spa"
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
          </motion.div>
        </AnimatePresence>

        {/* Vertical side text — editorial touch */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 z-10">
          <span className="text-white/30 text-[10px] tracking-[0.35em] uppercase font-medium"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
            Turrialba · Costa Rica
          </span>
          <div className="w-px h-16 bg-white/20" />
        </div>

        {/* Slide content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${slideIndex}`}
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="max-w-5xl mx-auto"
            >
              {/* Eyebrow */}
              <div className="flex items-center justify-center gap-4 mb-7">
                <div className="w-12 h-px bg-white/30" />
                <p className="text-white/85 tracking-[0.35em] uppercase text-xs font-medium">
                  {slide.label}
                </p>
                <div className="w-12 h-px bg-white/30" />
              </div>

              {/* Main heading */}
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[96px] font-serif font-bold text-white leading-none tracking-tight mb-7 whitespace-pre-line">
                {slide.title}
              </h1>

              {/* Subtitle */}
              <p className="text-white/65 text-base md:text-lg max-w-lg mx-auto mb-11 leading-relaxed font-light">
                {slide.sub}
              </p>

              {/* CTA — A/B test: hero_cta_text */}
              {slide.ctaExternal ? (
                <a
                  id="cta-hero-reserva"
                  href={slide.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary text-white text-xs font-bold tracking-[0.2em] uppercase px-10 py-4 hover:bg-primary/90 transition-all group"
                  onClick={() => heroCTA.trackConversion("hero_whatsapp_click")}
                >
                  {heroCTA.value}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <a
                  href={slide.ctaHref}
                  className="inline-flex items-center gap-3 border border-white/60 text-white text-xs font-bold tracking-[0.2em] uppercase px-10 py-4 hover:bg-white hover:text-stone-900 transition-all group"
                >
                  {slide.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Slide indicators */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                className={`transition-all duration-400 ${i === slideIndex ? "w-12 h-0.5 bg-white" : "w-5 h-0.5 bg-white/30"}`}
              />
            ))}
          </div>

          {/* Prev / Next */}
          <button
            onClick={() => setSlideIndex(i => (i - 1 + heroSlides.length) % heroSlides.length)}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/25 text-white flex items-center justify-center hover:border-white/70 hover:bg-white/10 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setSlideIndex(i => (i + 1) % heroSlides.length)}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/25 text-white flex items-center justify-center hover:border-white/70 hover:bg-white/10 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </section>

      <StatsBar />

      {/* ══ INTRO BANNER ═══════════════════════════════ */}
      <section className="py-5 bg-primary">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white text-center sm:text-left text-sm font-light tracking-wide">
            En MJ Fisio Estética y Spa queremos que tu visita sea toda una experiencia
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/40 px-6 py-2.5 hover:bg-white hover:text-primary transition-all"
          >
            Reserva tu cita →
          </a>
        </div>
      </section>

      {/* ══ SERVICE CATEGORIES ═════════════════════════ */}
      <section id="servicios" className="bg-[#040f19]">
        {/* Section header */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 md:pt-28 pb-14">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-primary" />
                <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">
                  MJ FISIO ESTÉTICA Y SPA
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                Nuestras áreas<br />
                <span className="font-light italic text-white/25">de tratamiento</span>
              </h2>
            </div>
            <p className="text-white text-sm leading-relaxed max-w-xs md:text-right">
              Tres especialidades, un solo lugar. Tratamientos médico-estéticos en el corazón de Turrialba.
            </p>
          </motion.div>
        </div>

        {/* Cards grid — full bleed */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {serviceCategories.map((cat, i) => (
            <motion.div
              key={cat.href}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.12 } } }}
              className="group relative overflow-hidden cursor-pointer"
            >
              <Link href={cat.href}>
                {/* Background image */}
                <div className="relative h-[520px] md:h-[620px]">
                  <img
                    src={`${BASE}images/${cat.bg}`}
                    alt={cat.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 scale-100"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={620}
                  />
                  {/* Strong dark overlay — ensures readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/97 via-black/70 to-black/20" />
                  {/* Primary brand tint on hover */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/12 transition-all duration-600" />
                  {/* Left border accent */}
                  {i > 0 && <div className="absolute top-0 left-0 bottom-0 w-px bg-white/6" />}
                  {/* Top brand stripe that grows on hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  {/* ── CONTENT ── */}
                  <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10">
                    {/* Top: index badge */}
                    <div className="flex items-start justify-between">
                      <span className="text-[80px] md:text-[100px] font-serif font-bold text-white/4 leading-none select-none">
                        {cat.index}
                      </span>
                      <div className="border border-primary/40 group-hover:border-primary group-hover:bg-primary transition-all duration-300 px-3 py-1.5">
                        <span className="text-primary group-hover:text-white text-[9px] font-bold tracking-[0.4em] uppercase transition-colors duration-300">
                          {cat.label}
                        </span>
                      </div>
                    </div>

                    {/* Bottom: main content */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight mb-3">
                        {cat.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-6">
                        {cat.desc}
                      </p>

                      {/* Key services list */}
                      <ul className="space-y-2 mb-8">
                        {cat.services.map((s) => (
                          <li key={s} className="flex items-center gap-2.5 text-xs text-white/80 group-hover:text-white transition-colors">
                            <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div className="inline-flex items-center gap-2 bg-primary/0 border border-white/20 group-hover:border-primary group-hover:bg-primary px-5 py-3 transition-all duration-300">
                        <span className="text-white text-[10px] font-bold tracking-[0.25em] uppercase">
                          Ver tratamientos
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform duration-200" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ FEATURED TREATMENTS LIST ═══════════════════ */}
      <section className="bg-[#040f19]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 md:py-28">
          {/* Header */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-primary" />
                <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">
                  Tratamientos Destacados
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                Nuestros tratamientos<br />
                <span className="font-light italic text-white/30">más populares</span>
              </h2>
            </div>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-primary text-white text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 hover:bg-primary/90 transition-colors whitespace-nowrap">
              Reservar cita <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Treatment rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-white/8">
            {featuredTreatments.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className={i % 2 === 0 ? "md:border-r border-white/8" : ""}
              >
                <Link href={t.href}>
                  <div className="group flex items-center justify-between border-b border-white/8 py-6 px-2 hover:bg-primary/10 hover:px-5 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-5">
                      <span className="text-primary text-xl font-serif font-bold w-8 shrink-0 leading-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-white font-medium text-base md:text-lg group-hover:text-primary transition-colors">
                        {t.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-white/25 text-[10px] tracking-[0.25em] uppercase hidden sm:block">{t.cat}</span>
                      <div className="w-8 h-8 border border-white/10 group-hover:border-primary group-hover:bg-primary flex items-center justify-center transition-all duration-300">
                        <ArrowRight className="w-3.5 h-3.5 text-white/30 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT / WHY US ════════════════════════════= */}
      <section id="nosotros" className="py-20 md:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Image */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="relative"
            >
              <img
                src={`${BASE}images/about-us.webp`}
                alt="Instalaciones MJ Fisio Estética y Spa"
                className="w-full h-[580px] object-cover"
                loading="lazy"
                decoding="async"
                width={900}
                height={580}
              />
              {/* Floating stat */}
              <div className="absolute -bottom-6 -right-0 md:-right-8 bg-primary text-white px-8 py-7 text-center">
                <p className="text-5xl font-serif font-bold">3+</p>
                <p className="text-[10px] tracking-[0.25em] uppercase mt-1 opacity-80">Años de excelencia</p>
              </div>
              {/* Decorative frame */}
              <div className="absolute top-6 left-6 w-16 h-16 border border-white/50 pointer-events-none" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="pt-8 lg:pt-0"
            >
              <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-5">
                NUESTRA EXPERIENCIA
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight mb-2">
                MJ Fisio Estética
              </h2>
              <h2 className="text-4xl md:text-5xl font-serif font-light italic text-stone-300 leading-tight mb-9">
                y Spa
              </h2>
              <p className="text-primary text-sm leading-relaxed mb-10">
                En MJ Fisio Estética y Spa hemos creado un espacio donde la salud, la belleza
                y el bienestar se unen. Combinamos la calidez de un trato cercano con la excelencia
                de profesionales altamente cualificados y tecnología de vanguardia, en el corazón
                de Turrialba.
              </p>

              <div className="space-y-7 mb-10">
                {features.map((f) => (
                  <div key={f.n} className="flex items-start gap-5">
                    <span className="text-3xl font-serif font-bold text-primary/30 leading-none shrink-0 w-10 mt-1">
                      {f.n}
                    </span>
                    <div>
                      <p className="text-stone-900 font-semibold text-sm mb-1">{f.title}</p>
                      <p className="text-primary text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/nosotros">
                <span className="inline-flex items-center gap-2 text-xs font-bold text-primary border-b border-primary/40 pb-0.5 hover:border-primary transition-colors cursor-pointer tracking-[0.2em] uppercase">
                  Conoce nuestro equipo <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ DARK CTA BAND ══════════════════════════════ */}
      <section
        className="relative py-36 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${BASE}images/spa-texture.webp)` }}
      >
        <div className="absolute inset-0 bg-[#071e2e]/92" />
        {/* Decorative lines */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5 ml-16 hidden lg:block" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-white/5 mr-16 hidden lg:block" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-10 h-px bg-primary/60" />
              <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">PIDE TU CITA</p>
              <div className="w-10 h-px bg-primary/60" />
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-none mb-4">
              COMIENZA TU
            </h2>
            <h2 className="text-5xl md:text-7xl font-serif font-light italic text-white/70 leading-none mb-10">
              Transformación
            </h2>
            <p className="text-white/75 text-sm mb-12 leading-relaxed max-w-md mx-auto">
              Estamos en Turrialba, Ciudadela Jorge de Bravo. Escríbenos por WhatsApp y agendamos tu cita sin compromiso.
            </p>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white text-xs font-bold tracking-[0.2em] uppercase px-12 py-5 hover:bg-primary/90 transition-all group"
            >
              RESERVAR POR WHATSAPP
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ═══════════════════════════════ */}
      <section id="testimonios" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          >
            <div>
              <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">TESTIMONIOS</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
                Lo que dicen<br />
                <span className="font-light italic text-primary">nuestras clientas</span>
              </h2>
            </div>
            <Link href="/testimonios">
              <span className="text-xs font-bold text-stone-500 hover:text-primary transition-colors cursor-pointer tracking-[0.2em] uppercase whitespace-nowrap">
                Ver todos →
              </span>
            </Link>
          </motion.div>

          {/* Featured testimonial */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="relative bg-[#040f19] p-10 md:p-14 mb-1 overflow-hidden"
          >
            {/* Brand accent stripe */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
            {/* Decorative quote */}
            <div className="absolute top-6 right-8 text-primary/10 text-[120px] font-serif leading-none select-none pointer-events-none">
              "
            </div>
            <div className="max-w-3xl relative z-10">
              <div className="flex gap-1 mb-7">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-primary text-primary" />)}
              </div>
              <p className="text-white text-xl md:text-2xl font-serif font-light italic leading-relaxed mb-8">
                "{testimonials[0].text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-primary flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-base">{testimonials[0].name[0]}</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{testimonials[0].name}</p>
                  <p className="text-white/70 text-xs tracking-widest uppercase mt-0.5">Cliente verificada</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Grid of remaining testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {testimonials.slice(1).map((t, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08 } } }}
                className="relative bg-stone-50 p-8 border-l-2 border-primary/20 hover:border-primary hover:bg-white hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex gap-0.5 mb-5">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-primary text-primary" />)}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-primary/15 group-hover:bg-primary flex items-center justify-center shrink-0 transition-colors duration-300">
                    <span className="text-primary group-hover:text-white font-bold text-sm transition-colors duration-300">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-stone-900 text-sm font-bold">{t.name}</p>
                    <p className="text-white/75 text-xs tracking-widest uppercase mt-0.5">Clienta</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ LOCATION + GOOGLE MAPS ═════════════════════ */}
      <section id="ubicacion" className="bg-[#071e2e]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Google Maps embed */}
            <div className="relative h-72 lg:h-auto min-h-[360px]">
              <GoogleMap className="absolute inset-0 w-full h-full" />
            </div>

            {/* Info panel */}
            <div className="px-8 sm:px-12 py-12 flex flex-col justify-between gap-8">
              <div>
                <p className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-5">
                  CÓMO LLEGAR
                </p>
                <h2 className="text-3xl font-serif font-bold text-white leading-tight mb-8">
                  Estamos en el corazón<br />
                  <span className="font-light italic text-white/70">de Turrialba</span>
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: "DIRECCIÓN",
                      content: "Ciudadela Jorge de Bravo, Turrialba, Cartago, Costa Rica",
                      href: MAPS_LINK,
                    },
                    {
                      icon: Phone,
                      title: "TELÉFONO / WHATSAPP",
                      content: "+506 86907757",
                      href: WA,
                    },
                    {
                      icon: Clock,
                      title: "HORARIO DE ATENCIÓN",
                      content: "Lun, Mar, Jue, Vie: 9:00 – 20:00 · Sáb: 8:00 – 15:00",
                      href: null,
                    },
                  ].map(({ icon: Icon, title, content, href }) => (
                    <div key={title} className="flex items-start gap-4">
                      <div className="w-9 h-9 border border-stone-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-white/65 uppercase tracking-[0.25em] mb-1">{title}</p>
                        {href ? (
                          <a href={href} target="_blank" rel="noopener noreferrer"
                            className="text-white text-sm hover:text-primary transition-colors leading-relaxed">
                            {content}
                          </a>
                        ) : (
                          <p className="text-white text-sm leading-relaxed">{content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Business CTAs */}
              <div className="border-t border-[#1a4f6e] pt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 border border-stone-700 py-3 px-4 text-xs font-bold uppercase tracking-widest text-white hover:border-primary hover:text-primary transition-all"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Ver en Maps
                </a>
                <a
                  href={GOOGLE_REVIEW_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 border border-stone-700 py-3 px-4 text-xs font-bold uppercase tracking-widest text-white hover:border-yellow-500 hover:text-yellow-500 transition-all"
                >
                  <Star className="w-3.5 h-3.5" />
                  Dejar reseña en Google
                </a>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-primary py-3 px-4 text-xs font-bold uppercase tracking-widest text-white hover:bg-primary/90 transition-all"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                  Reservar cita
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONTACT SECTION ════════════════════════════ */}
      <section id="contacto" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
              <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-5">CONTACTO</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight mb-3">
                Reserva tu momento
              </h2>
              <h2 className="text-4xl md:text-5xl font-serif font-light italic text-stone-400 leading-tight mb-10">
                de bienestar
              </h2>
              <p className="text-stone-500 text-sm leading-relaxed mb-12">
                Contáctanos directamente por WhatsApp o completa el formulario y te respondemos a la brevedad.
              </p>

              {/* Quick actions */}
              <div className="flex flex-col gap-4 mb-12">
                <a
                  href={WA}
                  target="_blank" rel="noopener noreferrer"
                  id="cta-contacto-whatsapp"
                  className="flex items-center gap-4 border border-stone-200 px-6 py-4 hover:border-primary hover:text-primary transition-all group"
                >
                  <div className="w-9 h-9 bg-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-stone-700 group-hover:text-primary">Escribir por WhatsApp</p>
                    <p className="text-stone-500 text-xs mt-0.5">Respuesta inmediata</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-primary ml-auto group-hover:translate-x-1 transition-all" />
                </a>
                <a
                  href="tel:+50686907757"
                  className="flex items-center gap-4 border border-stone-200 px-6 py-4 hover:border-primary hover:text-primary transition-all group"
                >
                  <div className="w-9 h-9 bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-stone-700 group-hover:text-primary">Llamar ahora</p>
                    <p className="text-stone-500 text-xs mt-0.5">+506 86907757</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-primary ml-auto group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              {/* Social */}
              <div className="border-t border-stone-200 pt-8">
                <p className="text-[10px] font-bold text-stone-500 tracking-[0.3em] uppercase mb-5">SÍGUENOS</p>
                <div className="flex gap-3">
                  {[
                    { label: "Instagram", short: "IG", href: "https://www.instagram.com/mjfisioesteticayspa/" },
                    { label: "Facebook", short: "FB", href: "https://www.facebook.com/mjfisioestetica" },
                    { label: "TikTok", short: "TK", href: "#" },
                  ].map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      title={s.label}
                      className="w-11 h-11 bg-stone-100 border border-stone-200 flex items-center justify-center text-xs font-bold text-stone-700 hover:bg-primary hover:border-primary hover:text-white transition-all">
                      {s.short}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-stone-50 p-8 md:p-10"
            >
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">Envíanos un mensaje</h3>
              <p className="text-stone-500 text-sm mb-8">Te contactaremos a la brevedad posible.</p>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-stone-600 uppercase tracking-[0.25em] mb-2">Nombre completo</label>
                  <Input
                    {...form.register("name")}
                    placeholder="Tu nombre"
                    className="rounded-none border-0 border-b border-stone-300 bg-transparent px-0 py-3 focus-visible:ring-0 focus-visible:border-primary placeholder:text-stone-400 text-stone-900 text-sm"
                  />
                  {form.formState.errors.name && <p className="text-red-500 text-xs mt-1">{form.formState.errors.name.message}</p>}
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold text-stone-600 uppercase tracking-[0.25em] mb-2">Email</label>
                    <Input
                      {...form.register("email")}
                      placeholder="tu@email.com"
                      className="rounded-none border-0 border-b border-stone-300 bg-transparent px-0 py-3 focus-visible:ring-0 focus-visible:border-primary placeholder:text-stone-400 text-stone-900 text-sm"
                    />
                    {form.formState.errors.email && <p className="text-red-500 text-xs mt-1">{form.formState.errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-stone-600 uppercase tracking-[0.25em] mb-2">Teléfono</label>
                    <Input
                      {...form.register("phone")}
                      placeholder="+506..."
                      className="rounded-none border-0 border-b border-stone-300 bg-transparent px-0 py-3 focus-visible:ring-0 focus-visible:border-primary placeholder:text-stone-400 text-stone-900 text-sm"
                    />
                    {form.formState.errors.phone && <p className="text-red-500 text-xs mt-1">{form.formState.errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-stone-600 uppercase tracking-[0.25em] mb-2">Servicio de interés</label>
                  <select
                    {...form.register("service")}
                    className="w-full border-0 border-b border-stone-300 bg-transparent py-3 text-sm text-stone-900 focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="">Selecciona un servicio</option>
                    <optgroup label="Tratamientos Corporales">
                      <option value="reduccion-medidas">Reducción de Medidas</option>
                      <option value="masajes-post-operatorios">Masajes Post Operatorios</option>
                      <option value="tensado-corporal">Tensado Corporal en Turrialba</option>
                      <option value="drenaje-linfatico">Drenaje Linfático</option>
                      <option value="blanqueamiento-zona-intima">Láser Despigmentante en Turrialba</option>
                    </optgroup>
                    <optgroup label="Tratamientos Faciales">
                      <option value="adn-salmon">ADN de Salmón</option>
                      <option value="hollywood-peel">✨ HOLLYWOOD PEEL EN TURRIALBA</option>
                      <option value="radiofrecuencia-facial">Radiofrecuencia Facial</option>
                      <option value="eliminacion-manchas">Eliminación de Manchas</option>
                      <option value="acido-hialuronico">Ácido Hialurónico</option>
                      <option value="tratamiento-ojeras">Tratamiento de Ojeras</option>
                    </optgroup>
                    <optgroup label="Tratamientos de Piernas">
                      <option value="piernas-cansadas">Piernas Cansadas</option>
                    </optgroup>
                    <optgroup label="Médico Estético">
                      <option value="botox">Botox</option>
                      <option value="hilos-tensores">Hilos Tensores</option>
                    </optgroup>
                  </select>
                  {form.formState.errors.service && <p className="text-red-500 text-xs mt-1">{form.formState.errors.service.message}</p>}
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-stone-600 uppercase tracking-[0.25em] mb-2">Mensaje</label>
                  <Textarea
                    {...form.register("message")}
                    placeholder="¿En qué podemos ayudarte?"
                    className="rounded-none border-0 border-b border-stone-300 bg-transparent px-0 py-3 focus-visible:ring-0 focus-visible:border-primary placeholder:text-stone-400 text-stone-900 text-sm min-h-[90px] resize-none"
                  />
                  {form.formState.errors.message && <p className="text-red-500 text-xs mt-1">{form.formState.errors.message.message}</p>}
                </div>

                <div className="pt-2">
                  <Button
                    id="cta-contacto-enviar"
                    type="submit"
                    className="w-full rounded-none bg-[#071e2e] hover:bg-primary text-white text-xs font-bold tracking-[0.2em] uppercase py-5 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Enviar mensaje por WhatsApp
                  </Button>
                  <p className="text-white/75 text-[10px] text-center mt-3 leading-relaxed">
                    Al enviar, se abre WhatsApp con tu mensaje prellenado — solo confirma el envío.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MARCAS QUE NOS RESPALDAN ──────────────────── */}
      <section className="py-14 bg-stone-50 border-t border-stone-100">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-10">Marcas que nos respaldan</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {[
              { name: "Produes", detail: "Dermocosmética profesional" },
              { name: "doTERRA", detail: "Aceites esenciales certificados" },
              { name: "Farmacy", detail: "Cosmética limpia y activos naturales" },
            ].map((brand) => (
              <div key={brand.name} className="flex flex-col items-center gap-1 group">
                <span className="text-2xl md:text-3xl font-serif font-bold text-stone-800 group-hover:text-primary transition-colors tracking-tight">
                  {brand.name}
                </span>
                <span className="text-xs text-stone-400 tracking-wide">{brand.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
