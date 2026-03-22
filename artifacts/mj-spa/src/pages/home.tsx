import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  ArrowRight, Star, MapPin, Phone, Clock,
  ChevronRight, ChevronLeft, CheckCircle2
} from "lucide-react";

import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

/* ── HERO SLIDES ──────────────────────────────────── */
const heroSlides = [
  {
    bg: "hero-bg.png",
    label: "Estética Avanzada",
    title: "DESCUBRE TU\nMEJOR VERSIÓN",
    sub: "Los mejores profesionales y la mejor tecnología, exclusivamente para ti.",
    cta: "Ver tratamientos",
    ctaHref: "#servicios",
  },
  {
    bg: "spa-texture.png",
    label: "Spa & Bienestar",
    title: "RELÁJATE Y\nRECUPERA TU ENERGÍA",
    sub: "Circuitos de spa, masajes y tratamientos corporales diseñados para tu bienestar total.",
    cta: "Reservar cita",
    ctaHref: "https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0",
    ctaExternal: true,
  },
  {
    bg: "about-us.png",
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
    slug: "estetica-facial",
    label: "TRATAMIENTOS FACIALES",
    title: "Rejuvenecimiento y cuidado del rostro",
    desc: "Limpieza profunda, mesoterapia, radiofrecuencia, peeling y más. Un rostro luminoso y joven.",
    gradient: "from-rose-950/80 to-stone-900/90",
    accent: "#c9a0a0",
  },
  {
    slug: "estetica-corporal",
    label: "TRATAMIENTOS CORPORALES",
    title: "Moldea y reafirma tu silueta",
    desc: "Cavitación, presoterapia, radiofrecuencia corporal y tratamientos reductores de última generación.",
    gradient: "from-stone-900/85 to-stone-800/80",
    accent: "#a0b8c9",
  },
  {
    slug: "spa-bienestar",
    label: "SPA & BIENESTAR",
    title: "Una experiencia para cuerpo y mente",
    desc: "Circuito spa, chocolaterapia, aromaterapia, piedras calientes y envolturas corporales.",
    gradient: "from-emerald-950/85 to-stone-900/90",
    accent: "#a0c9b0",
  },
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
  { n: "01", title: "Profesionales certificados", desc: "Equipo con formación continua y certificaciones internacionales en estética y medicina." },
  { n: "02", title: "Tecnología de vanguardia", desc: "Aparatología de última generación para resultados óptimos y duraderos." },
  { n: "03", title: "Trato completamente personalizado", desc: "Cada tratamiento es diseñado según tus necesidades y objetivos particulares." },
  { n: "04", title: "Resultados visibles y seguros", desc: "Protocolos probados que garantizan tu seguridad y satisfacción en cada visita." },
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
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

/* ════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════ */
export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const { toast } = useToast();

  /* auto-advance hero */
  useEffect(() => {
    const t = setInterval(() => setSlideIndex(i => (i + 1) % heroSlides.length), 6000);
    return () => clearInterval(t);
  }, []);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", phone: "", service: "", message: "" }
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
    toast({ title: "¡Mensaje enviado!", description: "Nos pondremos en contacto contigo pronto." });
    form.reset();
  };

  const BASE = import.meta.env.BASE_URL;
  const slide = heroSlides[slideIndex];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SEO
        title="Centro de Estética y Spa en Turrialba"
        description="MJ Fisio Estética y Spa en Turrialba, Costa Rica. Tratamientos faciales, masajes, depilación láser, botox, hilos tensores, nutrición y más. Reserva tu cita hoy."
        canonical="/"
      />
      <Navbar />
      <FloatingWhatsApp />

      {/* ══ HERO SLIDER ════════════════════════════════ */}
      <section id="inicio" className="relative h-screen min-h-[620px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slideIndex}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={`${BASE}images/${slide.bg}`}
              alt="MJ Fisio Estética y Spa"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/55" />
          </motion.div>
        </AnimatePresence>

        {/* Slide content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${slideIndex}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-white/60 tracking-[0.3em] uppercase text-xs font-medium mb-6">
                {slide.label}
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-none tracking-tight mb-6 whitespace-pre-line">
                {slide.title}
              </h1>
              <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                {slide.sub}
              </p>
              {slide.ctaExternal ? (
                <a
                  id="cta-hero-reserva"
                  href={slide.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary text-white text-sm font-semibold tracking-widest uppercase px-10 py-4 hover:bg-primary/90 transition-all group"
                >
                  {slide.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <a
                  href={slide.ctaHref}
                  className="inline-flex items-center gap-3 bg-white text-stone-900 text-sm font-semibold tracking-widest uppercase px-10 py-4 hover:bg-primary hover:text-white transition-all group"
                >
                  {slide.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Slide indicators */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                className={`transition-all duration-300 ${i === slideIndex ? "w-10 h-1 bg-white" : "w-4 h-1 bg-white/40"}`}
              />
            ))}
          </div>

          {/* Prev / Next */}
          <button
            onClick={() => setSlideIndex(i => (i - 1 + heroSlides.length) % heroSlides.length)}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 border border-white/30 text-white flex items-center justify-center hover:border-white hover:bg-white/10 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setSlideIndex(i => (i + 1) % heroSlides.length)}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 border border-white/30 text-white flex items-center justify-center hover:border-white hover:bg-white/10 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/10 z-20">
          <div className="max-w-4xl mx-auto px-6 py-4 grid grid-cols-3 divide-x divide-white/20">
            {[
              { n: "2335+", label: "Clientes atendidas" },
              { n: "82+", label: "Tratamientos disponibles" },
              { n: "3+", label: "Años de experiencia" },
            ].map((s) => (
              <div key={s.n} className="text-center px-4">
                <p className="text-white text-xl font-serif font-bold">{s.n}</p>
                <p className="text-white/60 text-xs tracking-wide mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INTRO BANNER ═══════════════════════════════ */}
      <section className="py-6 bg-primary">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white text-center sm:text-left font-medium tracking-wide">
            En MJ Fisio Estética y Spa queremos que tu visita sea toda una experiencia
          </p>
          <a
            href="https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-white text-sm font-semibold tracking-widest uppercase border border-white/50 px-6 py-2 hover:bg-white hover:text-primary transition-all"
          >
            Contacta con nosotras
          </a>
        </div>
      </section>

      {/* ══ SERVICE CATEGORIES ═════════════════════════ */}
      <section id="servicios" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              MJ FISIO ESTÉTICA Y SPA
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
              Medicina Estética y Bienestar
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCategories.map((cat, i) => (
              <motion.div
                key={cat.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.12 } } }}
                className="group relative h-[420px] md:h-[500px] overflow-hidden cursor-pointer"
              >
                {/* Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${cat.gradient} transition-transform duration-700 group-hover:scale-105`}
                >
                  <img
                    src={`${BASE}images/${i === 0 ? "hero-bg.png" : i === 1 ? "about-us.png" : "spa-texture.png"}`}
                    alt={cat.label}
                    className="w-full h-full object-cover mix-blend-overlay opacity-60"
                  />
                </div>

                {/* Border accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 group-hover:opacity-100 opacity-0"
                  style={{ backgroundColor: cat.accent }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 opacity-70">
                    {cat.label}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight mb-3">
                    {cat.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs">
                    {cat.desc}
                  </p>
                  <Link href={`/servicios/${cat.slug}`}>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase border-b pb-0.5 transition-colors group-hover:border-white/80 border-white/40">
                      Descubrir <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY US (alternating) ═══════════════════════ */}
      <section id="nosotros" className="py-20 md:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Image */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="relative"
            >
              <img
                src={`${BASE}images/about-us.png`}
                alt="Instalaciones MJ Fisio Estética y Spa"
                className="w-full h-[560px] object-cover"
                loading="lazy"
              />
              {/* Stats badge */}
              <div className="absolute -bottom-6 -right-0 md:-right-8 bg-primary text-white p-7 text-center">
                <p className="text-4xl font-serif font-bold">3+</p>
                <p className="text-xs tracking-widest uppercase mt-1 opacity-80">Años de excelencia</p>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="pt-8 lg:pt-0"
            >
              <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                NUESTRA EXPERIENCIA
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight mb-3">
                Well Clinic
              </h2>
              <h2 className="text-4xl md:text-5xl font-serif font-light italic text-stone-400 leading-tight mb-8">
                en Turrialba
              </h2>
              <p className="text-stone-500 leading-relaxed mb-10">
                En MJ Fisio Estética y Spa hemos creado un espacio donde la salud, la belleza y el bienestar
                se unen. Combinamos la calidez de un trato cercano con la excelencia de profesionales altamente
                cualificados y tecnología de vanguardia.
              </p>

              <div className="space-y-6 mb-10">
                {features.map((f) => (
                  <div key={f.n} className="flex items-start gap-5">
                    <span className="text-3xl font-serif font-bold text-stone-100 leading-none shrink-0 w-10">
                      {f.n}
                    </span>
                    <div>
                      <p className="text-stone-900 font-semibold text-sm mb-1">{f.title}</p>
                      <p className="text-stone-400 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/nosotros">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary border-b border-primary/40 pb-0.5 hover:border-primary transition-colors cursor-pointer tracking-wide uppercase">
                  Conoce nuestro equipo <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ DARK BAND CTA ══════════════════════════════ */}
      <section
        className="relative py-32 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${BASE}images/spa-texture.png)` }}
      >
        <div className="absolute inset-0 bg-stone-900/88" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-6">
              PIDE TU CITA
            </p>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
              COMIENZA TU<br />
              <span className="italic font-light text-white/60">TRANSFORMACIÓN</span>
            </h2>
            <p className="text-stone-400 mb-10 leading-relaxed max-w-xl mx-auto">
              Estamos en Turrialba, Ciudadela Jorge de Bravo. Escríbenos por WhatsApp y agendamos tu cita sin compromiso.
            </p>
            <a
              href="https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white text-sm font-semibold tracking-widest uppercase px-12 py-5 hover:bg-primary/90 transition-all group"
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
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
          >
            <div>
              <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">TESTIMONIOS</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
                Lo que dicen<br />nuestras clientas
              </h2>
              <div className="w-16 h-0.5 bg-primary mt-5" />
            </div>
            <Link href="/testimonios">
              <span className="text-sm font-semibold text-stone-400 hover:text-primary transition-colors cursor-pointer tracking-wide uppercase whitespace-nowrap">
                Ver todos →
              </span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.08 } } }}
                className="bg-stone-50 p-8 border-t-2 border-primary"
              >
                <div className="flex gap-0.5 mb-5">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{t.name[0]}</span>
                  </div>
                  <p className="text-stone-900 text-sm font-bold">{t.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ════════════════════════════════════ */}
      <section id="contacto" className="py-20 md:py-28 bg-stone-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
              <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">CONTACTO</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-8">
                Reserva tu momento<br />
                <span className="italic font-light text-white/40">de bienestar</span>
              </h2>
              <p className="text-stone-400 text-sm leading-relaxed mb-12">
                Estamos aquí para asesorarte. Contáctanos directamente o completa el formulario y te respondemos a la brevedad.
              </p>

              <div className="space-y-8">
                {[
                  { icon: MapPin, title: "UBICACIÓN", lines: ["Turrialba, Costa Rica", "Ciudadela Jorge de Bravo"] },
                  { icon: Phone, title: "TELÉFONO", lines: ["+506 86907757"] },
                  { icon: Clock, title: "HORARIO", lines: ["Lun, Mar, Jue, Vie: 9:00 – 20:00", "Sábados: 8:00 – 15:00"] },
                ].map(({ icon: Icon, title, lines }) => (
                  <div key={title} className="flex items-start gap-5">
                    <div className="w-10 h-10 border border-stone-700 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-widest mb-1">{title}</p>
                      {lines.map((l, i) => (
                        <p key={i} className="text-stone-400 text-sm">{l}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-stone-800">
                <p className="text-xs font-semibold text-white tracking-widest uppercase mb-5">SÍGUENOS</p>
                <div className="flex gap-4">
                  {[
                    { label: "IG", href: "https://www.instagram.com/mjfisioesteticayspa/" },
                    { label: "FB", href: "https://www.facebook.com/mjfisioestetica" },
                    { label: "TK", href: "#" },
                  ].map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 border border-stone-700 flex items-center justify-center text-xs font-bold text-stone-400 hover:border-primary hover:text-primary transition-all"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-white p-8 md:p-10"
            >
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-8">Envíanos un mensaje</h3>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-widest mb-2">Nombre</label>
                  <Input
                    {...form.register("name")}
                    placeholder="Tu nombre completo"
                    className="rounded-none border-0 border-b border-stone-200 bg-transparent px-0 py-3 focus-visible:ring-0 focus-visible:border-primary placeholder:text-stone-300 text-sm"
                  />
                  {form.formState.errors.name && <p className="text-red-500 text-xs mt-1">{form.formState.errors.name.message}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-widest mb-2">Email</label>
                    <Input
                      {...form.register("email")}
                      placeholder="tu@email.com"
                      className="rounded-none border-0 border-b border-stone-200 bg-transparent px-0 py-3 focus-visible:ring-0 focus-visible:border-primary placeholder:text-stone-300 text-sm"
                    />
                    {form.formState.errors.email && <p className="text-red-500 text-xs mt-1">{form.formState.errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-widest mb-2">Teléfono</label>
                    <Input
                      {...form.register("phone")}
                      placeholder="+506..."
                      className="rounded-none border-0 border-b border-stone-200 bg-transparent px-0 py-3 focus-visible:ring-0 focus-visible:border-primary placeholder:text-stone-300 text-sm"
                    />
                    {form.formState.errors.phone && <p className="text-red-500 text-xs mt-1">{form.formState.errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-widest mb-2">Servicio</label>
                  <select
                    {...form.register("service")}
                    className="w-full border-0 border-b border-stone-200 bg-transparent py-3 text-sm text-stone-700 focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="">Selecciona un servicio</option>
                    <optgroup label="Estética Facial">
                      <option value="limpieza-facial">Limpieza Facial</option>
                      <option value="mesoterapia-facial">Mesoterapia Facial</option>
                      <option value="radiofrecuencia-facial">Radiofrecuencia Facial</option>
                    </optgroup>
                    <optgroup label="Estética Corporal">
                      <option value="cavitacion">Cavitación</option>
                      <option value="presoterapia">Presoterapia</option>
                      <option value="tratamiento-reductor">Tratamiento Reductor</option>
                    </optgroup>
                    <optgroup label="Spa & Bienestar">
                      <option value="circuito-spa">Circuito Spa</option>
                      <option value="masaje-relajante">Masaje Relajante</option>
                      <option value="chocolaterapia">Chocolaterapia</option>
                    </optgroup>
                  </select>
                  {form.formState.errors.service && <p className="text-red-500 text-xs mt-1">{form.formState.errors.service.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-widest mb-2">Mensaje</label>
                  <Textarea
                    {...form.register("message")}
                    placeholder="¿En qué podemos ayudarte?"
                    className="rounded-none border-0 border-b border-stone-200 bg-transparent px-0 py-3 focus-visible:ring-0 focus-visible:border-primary placeholder:text-stone-300 text-sm min-h-[90px] resize-none"
                  />
                  {form.formState.errors.message && <p className="text-red-500 text-xs mt-1">{form.formState.errors.message.message}</p>}
                </div>

                <div className="pt-4">
                  <Button
                    id="cta-contacto-enviar"
                    type="button"
                    className="w-full rounded-none bg-stone-900 hover:bg-primary text-white text-sm font-bold tracking-widest uppercase py-5 transition-colors"
                    onClick={() => window.open("https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0", "_blank")}
                  >
                    Enviar por WhatsApp
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
