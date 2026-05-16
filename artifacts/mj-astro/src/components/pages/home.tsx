import { withAppProviders } from "@/components/ReactAppWrapper";
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
    ctaHref: "#contacto",
  }
];

/* ── FORM SCHEMA ──────────────────────────────────── */
const formSchema = z.object({
  name: z.string().min(2, "El nombre es muy corto"),
  phone: z.string().min(8, "Teléfono inválido"),
  message: z.string().min(10, "El mensaje es muy corto"),
});

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);
  const abVariant = useABTest({testName: 'hero_cta_color', variants: {A: 'primary', B: 'accent'}}).value;
  const { toast } = useToast();

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", phone: "", message: "" }
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <FloatingWhatsApp />

      {/* ── HERO ────────────────────────────────────────── */}
      <section id="inicio" className="relative h-screen min-h-[640px] overflow-hidden">
        {mounted && (
          <AnimatePresence mode="sync">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={`/images/${heroSlides[currentSlide].bg}`}
                alt="MJ Fisio Estética y Spa"
                className="w-full h-full object-cover object-center"
                loading={currentSlide === 0 ? "eager" : "lazy"}
                fetchPriority={currentSlide === 0 ? "high" : "auto"}
                decoding="async"
                width={1920}
                height={1080}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
            </motion.div>
          </AnimatePresence>
        )}
        {/* Fallback para SSR */}
        {!mounted && (
          <div className="absolute inset-0" style={{ opacity: 0, transform: 'scale(1.04)' }}>
            <img
              src="/images/hero-bg.webp"
              alt="MJ Fisio Estética y Spa"
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
          </div>
        )}

        {/* Decoración lateral */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 z-10">
          <span className="text-white/30 text-[10px] tracking-[0.35em] uppercase font-medium" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
            Turrialba · Costa Rica
          </span>
          <div className="w-px h-16 bg-white/20" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            {/* Etiqueta superior */}
            <div className="flex items-center justify-center gap-4 mb-7">
              <div className="w-12 h-px bg-white/30" />
              <p className="text-white/85 tracking-[0.35em] uppercase text-xs font-medium">
                {heroSlides[currentSlide]?.label || heroSlides[0].label}
              </p>
              <div className="w-12 h-px bg-white/30" />
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[96px] font-serif font-bold text-white leading-none tracking-tight mb-7 whitespace-pre-line">
              {heroSlides[currentSlide]?.title || heroSlides[0].title}
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              {heroSlides[currentSlide]?.sub || heroSlides[0].sub}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a href={heroSlides[currentSlide]?.ctaHref || heroSlides[0].ctaHref}>
                <Button
                  size="lg"
                  className={`
                    h-14 px-10 text-sm tracking-[0.2em] uppercase font-semibold
                    hover-elevate active-elevate-2
                    ${abVariant === 'accent'
                      ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                      : 'bg-primary text-white hover:bg-primary/90'}
                  `}
                >
                  {heroSlides[currentSlide]?.cta || heroSlides[0].cta}
                </Button>
              </a>
              <a href="https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-10 text-sm tracking-[0.2em] uppercase font-semibold bg-white/10 text-white border-white/20 hover:bg-white hover:text-stone-900 transition-all duration-300"
                >
                  Contáctanos
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Controles del Slider */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
            className="p-3 rounded-full border border-white/20 text-white/70 hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
            aria-label="Diapositiva anterior"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <div className="flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`transition-all duration-500 rounded-full ${
                  i === currentSlide ? 'w-8 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Ir a diapositiva ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
            className="p-3 rounded-full border border-white/20 text-white/70 hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
            aria-label="Siguiente diapositiva"
          >
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────── */}
      <StatsBar />

      {/* ── NOSOTROS ────────────────────────────────────── */}
      <section id="nosotros" className="py-24 md:py-32 bg-stone-50 relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-100/50 -skew-x-12 translate-x-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-primary" />
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Nuestra Esencia</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8 leading-tight">
                El Arte del <br />
                <span className="italic text-primary font-light">Bienestar Integral</span>
              </h2>
              <div className="prose prose-stone prose-lg text-stone-600 space-y-6">
                <p>
                  En MJ Fisio Estética y Spa, no solo ofrecemos tratamientos; creamos experiencias transformadoras. Nuestro enfoque integral combina la ciencia médica más avanzada con el arte del cuidado personal.
                </p>
                <p>
                  Ubicados en el corazón de Turrialba, hemos diseñado un santuario de tranquilidad donde la belleza y la salud convergen bajo el cuidado de expertos apasionados.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-stone-200 pt-10">
                <div>
                  <h4 className="text-3xl font-serif text-stone-900 mb-2">10+</h4>
                  <p className="text-sm tracking-wide text-stone-500 uppercase">Años de Excelencia</p>
                </div>
                <div>
                  <h4 className="text-3xl font-serif text-stone-900 mb-2">3</h4>
                  <p className="text-sm tracking-wide text-stone-500 uppercase">Especialidades Médicas</p>
                </div>
              </div>

              <div className="mt-12">
                <a href="/nosotros" className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.15em] uppercase text-primary hover:text-stone-900 transition-colors group">
                  Conoce nuestra historia
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm relative shadow-2xl">
                <img
                  src="/images/nosotros.webp"
                  alt="Instalaciones de MJ Fisio Estética"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={1000}
                />
                <div className="absolute inset-0 border-[1px] border-white/20 m-6 rounded-sm pointer-events-none" />
              </div>

              {/* Badge flotante */}
              <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-xl max-w-[280px]">
                <div className="flex gap-1 text-primary mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-stone-800 font-serif italic text-lg leading-snug">
                  "Un oasis de paz y profesionalismo. Resultados increíbles desde la primera sesión."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ÁREAS DE TRATAMIENTO ────────────────────────── */}
      <section id="servicios" className="py-24 md:py-32 bg-stone-900 text-white relative">
        <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-primary" />
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">MJ Fisio Estética y Spa</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
                Nuestras áreas<br/>
                <span className="font-light italic text-stone-400">de tratamiento</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-stone-400 text-lg max-w-sm"
            >
              Tres especialidades, un solo lugar. Tratamientos médico-estéticos en el corazón de Turrialba.
            </motion.p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 h-auto md:h-[600px]">
          {[
            {
              id: 'corporales',
              num: '01',
              title: "Corporales",
              img: "tratamientos-c.jpg",
              link: "/tratamientos/corporales",
              desc: "Moldea tu figura y recupera la firmeza de tu piel."
            },
            {
              id: 'faciales',
              num: '02',
              title: "Faciales",
              img: "tratamientos-f.jpg",
              link: "/tratamientos/faciales",
              desc: "Rejuvenece y revitaliza tu rostro con tecnología médica."
            },
            {
              id: 'piernas',
              num: '03',
              title: "Piernas",
              img: "tratamientos-p.jpg",
              link: "/tratamientos/piernas",
              desc: "Tratamiento de varices y mejora circulatoria profunda."
            }
          ].map((cat, i) => (
            <motion.a
              key={cat.id}
              href={cat.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="group relative h-[400px] md:h-full overflow-hidden block border-r border-stone-800 last:border-r-0 cursor-pointer"
            >
              <img
                src={`/images/${cat.img}`}
                alt={`Tratamientos ${cat.title}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
                decoding="async"
                width={600}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

              <div className="absolute inset-0 p-10 flex flex-col justify-between">
                <span className="text-6xl font-serif text-white/20 font-bold tracking-tighter transition-colors duration-500 group-hover:text-primary/40">
                  {cat.num}
                </span>

                <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl font-serif tracking-wide border border-white/20 px-6 py-2 backdrop-blur-sm group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      {cat.title}
                    </h3>
                  </div>
                  <p className="text-stone-300 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ── DOCTOR SECTION ──────────────────────────────── */}
      <section className="py-24 md:py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white p-8 md:p-16 shadow-2xl rounded-sm border border-stone-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="order-2 lg:order-1 space-y-8">
                <div>
                  <h3 className="text-stone-400 font-bold tracking-[0.2em] uppercase text-xs mb-3">Dirección Médica</h3>
                  <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Dr. Raciel Pérez</h2>
                  <p className="text-primary font-medium mt-2">Código Médico: MED16200</p>
                </div>

                <div className="prose prose-stone text-stone-600">
                  <p>
                    Especialista en Medicina Estética y Funcional, dedicado a realzar la belleza natural
                    mediante procedimientos mínimamente invasivos y tecnología de vanguardia.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-stone-100">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Star className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900">Especialista</h4>
                      <p className="text-sm text-stone-500">Medicina Estética</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900">Consulta</h4>
                      <p className="text-sm text-stone-500">Valoración inicial</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <a href="/medicos-esteticos">
                    <Button variant="outline" className="h-12 px-8 tracking-widest uppercase text-xs font-bold border-stone-300 text-stone-700 hover:bg-stone-900 hover:text-white transition-all">
                      Conocer al equipo médico
                    </Button>
                  </a>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative aspect-square md:aspect-[4/3] rounded-sm overflow-hidden shadow-xl">
                  <img
                    src="/images/doctor-raciel.webp"
                    alt="Dr. Raciel Pérez"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-stone-900/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GOOGLE REVIEWS SUMMARY ──────────────────────── */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-primary/20 rounded-full blur-[120px] opacity-50" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center gap-1 mb-8">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="w-8 h-8 fill-[#FABB05] text-[#FABB05]" />
            ))}
          </div>

          <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
            Lo que dicen <br />
            <span className="font-light italic text-primary">nuestras clientas</span>
          </h2>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 mt-12 rounded-sm relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-stone-900 border border-white/10 w-12 h-12 flex items-center justify-center rounded-full">
              <span className="text-4xl font-serif text-primary leading-none mt-4">"</span>
            </div>

            <p className="text-lg md:text-xl text-stone-300 font-light leading-relaxed mb-8">
              "Excelente atención, el personal es muy profesional y amable. Las instalaciones son de primer nivel y los resultados de los tratamientos son visibles desde la primera sesión. 100% recomendado para quienes buscan calidad."
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                MV
              </div>
              <div className="text-left">
                <p className="font-bold">María V.</p>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-3 h-3 fill-[#FABB05] text-[#FABB05]" />
                    ))}
                  </div>
                  <p className="text-white/50 text-xs">hace 2 semanas</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/testimonios">
              <Button size="lg" className="h-14 px-8 tracking-widest uppercase text-xs font-bold bg-primary text-white hover:bg-primary/90 w-full sm:w-auto">
                Ver más testimonios
              </Button>
            </a>
            <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="h-14 px-8 tracking-widest uppercase text-xs font-bold border-white/20 text-white bg-transparent hover:bg-white hover:text-stone-900 w-full sm:w-auto">
                Dejar una reseña en Google
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACTO Y MAPA ────────────────────────────── */}
      <section id="contacto" className="py-0 relative flex flex-col lg:flex-row min-h-[800px]">
        {/* Formulario */}
        <div className="w-full lg:w-1/2 bg-stone-50 p-8 md:p-16 lg:p-24 flex items-center">
          <div className="max-w-md mx-auto w-full">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Contacto</span>
            </div>

            <h2 className="text-4xl font-serif text-stone-900 mb-4">Ponte en contacto</h2>
            <p className="text-stone-500 mb-10">Agenda tu cita o realiza una consulta. Nuestro equipo te atenderá a la brevedad.</p>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Input
                  placeholder="Tu nombre"
                  className="bg-white border-stone-200 h-14 rounded-sm"
                  {...form.register("name")}
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div>
                <Input
                  placeholder="Tu teléfono"
                  type="tel"
                  className="bg-white border-stone-200 h-14 rounded-sm"
                  {...form.register("phone")}
                />
                {form.formState.errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
                )}
              </div>

              <div>
                <Textarea
                  placeholder="¿En qué tratamiento estás interesada?"
                  className="bg-white border-stone-200 min-h-[120px] rounded-sm resize-none"
                  {...form.register("message")}
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full h-14 tracking-widest uppercase text-xs font-bold bg-stone-900 text-white hover:bg-primary transition-colors">
                Enviar mensaje
              </Button>
            </form>

            <div className="mt-12 pt-12 border-t border-stone-200 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Ubicación</h4>
                  <p className="text-stone-500 text-sm">Turrialba Centro, 150m este de la Iglesia Católica, Cartago, Costa Rica.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Teléfono</h4>
                  <p className="text-stone-500 text-sm">+506 8888-8888</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Horario</h4>
                  <p className="text-stone-500 text-sm">Lunes a Sábado: 8:00 AM - 6:00 PM<br/>Domingo: Cerrado</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full h-[50vh] lg:h-auto relative">
          <GoogleMap />

          <div className="absolute bottom-8 right-8 z-10 hidden md:block">
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-stone-900 shadow-xl hover:bg-stone-100 rounded-sm font-bold uppercase tracking-widest text-xs h-12 px-6">
                Abrir en Google Maps
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default withAppProviders(Home);
