import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Clock, ChevronDown, ArrowRight, MessageCircle, Star, ShieldCheck, Award } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import type { ServicePageData } from "@/data/services";
import { servicePages } from "@/data/services";
import { SEO } from "@/components/SEO";
import { Breadcrumb } from "@/components/Breadcrumb";

const WA = "https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const heroBgMap: Record<string, string> = {
  "masajes-corporales":        "masajes-corporales-bg.png",
  "masajes-relajantes":        "masajes-relajantes-bg.png",
  "masajes-post-operatorios":  "masajes-post-operatorios-bg.png",
  "reduccion-de-medidas":      "reduccion-de-medidas-bg.png",
  "tensado-corporal":          "tensado-corporal-bg.png",
  "drenaje-linfatico":         "drenaje-linfatico-bg.png",
  "depilacion-laser":          "depilacion-laser-bg.png",
  "iron-beauty-fitness":       "iron-beauty-fitness-bg.png",
  "faciales":                  "faciales-bg.png",
  "terapias-faciales":         "terapias-faciales-bg.png",
  "peeling-quimico":           "peeling-quimico-bg.png",
  "hollywood-peel":            "hollywood-peel-bg.png",
  "eliminacion-manchas":       "eliminacion-manchas-bg.png",
  "radiofrecuencia-facial":    "radiofrecuencia-facial-bg.png",
  "adn-salmon":                "adn-salmon-bg.png",
  "tratamiento-anticelulitis": "anticelulitis-bg.png",
  "carboxiterapia":            "carboxiterapia-bg.png",
  "levantamiento-gluteo":      "levantamiento-gluteo-bg.png",
  "levantamiento-busto":       "levantamiento-busto-bg.png",
  "vendas-frias":              "vendas-frias-bg.png",
  "maderoterapia":             "maderoterapia-bg.png",
  "auriculoterapia":           "auriculoterapia-bg.png",
  "varices-aranas-vasculares": "varices-aranas-vasculares-bg.png",
  "piernas-cansadas":          "piernas-cansadas-bg.png",
  "nutricion":                 "nutricion-bg.png",
  "botox-full-face":           "botox-full-face-bg.png",
  "hilos-tensores":            "hilos-tensores-bg.png",
  "trasplante-capilar":        "trasplante-capilar-bg.png",
  "acido-hialuronico":         "acido-hialuronico-bg.png",
  "biorevitalizacion":         "biorevitalizacion-bg.png",
};

const serviceCategoryMap: Record<string, { name: string; href: string }> = {
  "masajes-corporales":        { name: "Tratamientos Corporales", href: "/tratamientos/corporales" },
  "masajes-relajantes":        { name: "Tratamientos Corporales", href: "/tratamientos/corporales" },
  "masajes-post-operatorios":  { name: "Tratamientos Corporales", href: "/tratamientos/corporales" },
  "reduccion-de-medidas":      { name: "Tratamientos Corporales", href: "/tratamientos/corporales" },
  "tensado-corporal":          { name: "Tratamientos Corporales", href: "/tratamientos/corporales" },
  "drenaje-linfatico":         { name: "Tratamientos Corporales", href: "/tratamientos/corporales" },
  "depilacion-laser":          { name: "Tratamientos Corporales", href: "/tratamientos/corporales" },
  "iron-beauty-fitness":       { name: "Tratamientos Corporales", href: "/tratamientos/corporales" },
  "carboxiterapia":            { name: "Tratamientos Corporales", href: "/tratamientos/corporales" },
  "levantamiento-gluteo":      { name: "Tratamientos Corporales", href: "/tratamientos/corporales" },
  "levantamiento-busto":       { name: "Tratamientos Corporales", href: "/tratamientos/corporales" },
  "vendas-frias":              { name: "Tratamientos Corporales", href: "/tratamientos/corporales" },
  "maderoterapia":             { name: "Tratamientos Corporales", href: "/tratamientos/corporales" },
  "auriculoterapia":           { name: "Tratamientos Corporales", href: "/tratamientos/corporales" },
  "faciales":                  { name: "Tratamientos Faciales",   href: "/tratamientos/faciales"   },
  "adn-salmon":                { name: "Tratamientos Faciales",   href: "/tratamientos/faciales"   },
  "terapias-faciales":         { name: "Tratamientos Faciales",   href: "/tratamientos/faciales"   },
  "peeling-quimico":           { name: "Tratamientos Faciales",   href: "/tratamientos/faciales"   },
  "hollywood-peel":            { name: "Tratamientos Faciales",   href: "/tratamientos/faciales"   },
  "eliminacion-manchas":       { name: "Tratamientos Faciales",   href: "/tratamientos/faciales"   },
  "radiofrecuencia-facial":    { name: "Tratamientos Faciales",   href: "/tratamientos/faciales"   },
  "tratamiento-anticelulitis": { name: "Tratamientos de Piernas", href: "/tratamientos/piernas"    },
  "varices-aranas-vasculares": { name: "Tratamientos de Piernas", href: "/tratamientos/piernas"    },
  "piernas-cansadas":          { name: "Tratamientos de Piernas", href: "/tratamientos/piernas"    },
};

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left gap-4 group"
      >
        <span className="font-serif text-lg text-stone-900 group-hover:text-primary transition-colors">{question}</span>
        <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-primary/80 leading-relaxed pb-6 text-sm">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicePage({ service }: { service: ServicePageData }) {
  const category = serviceCategoryMap[service.slug];
  const BASE = import.meta.env.BASE_URL;

  const breadcrumbItems = category
    ? [{ label: category.name, href: category.href }, { label: service.name }]
    : [{ label: service.name }];

  const related = servicePages
    .filter((s) => {
      if (s.slug === service.slug) return false;
      if (!category) return false;
      const cat = serviceCategoryMap[s.slug];
      return cat?.href === category.href;
    })
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={service.name}
        description={`${service.tagline} — ${service.heroDescription.slice(0, 120)}. MJ Fisio Estética y Spa, Turrialba, Costa Rica.`}
        canonical={`/servicios/${service.slug}`}
      />
      <Navbar />

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-end pb-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BASE}images/${heroBgMap[service.slug] ?? service.heroBg ?? "hero-bg.png"})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/90" />

        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-36 pb-16">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-8">
              <Breadcrumb items={breadcrumbItems} variant="dark" />
            </motion.div>

            <motion.p variants={fadeUp} className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">
              {service.tagline}
            </motion.p>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6 max-w-3xl">
              {service.name}
            </motion.h1>

            <motion.p variants={fadeUp} className="text-white/65 text-base md:text-lg max-w-2xl leading-relaxed mb-10">
              {service.heroDescription}
            </motion.p>

            {/* Hero CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                id={`cta-hero-${service.slug}`}
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-primary text-white text-sm font-bold tracking-[0.15em] uppercase px-8 py-4 hover:bg-primary/90 transition-all group"
              >
                <MessageCircle className="w-4 h-4" />
                Reservar por WhatsApp
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              {category && (
                <Link href={category.href}>
                  <span className="inline-flex items-center gap-2 text-white/60 text-sm font-medium border-b border-white/20 pb-0.5 hover:text-white hover:border-white transition-colors cursor-pointer">
                    Ver todos los {category.name.toLowerCase()}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────── */}
      <section className="bg-[#040f19] py-5 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: <Star className="w-4 h-4 fill-primary text-primary" />, text: "5★ en Google" },
            { icon: <ShieldCheck className="w-4 h-4 text-primary" />,       text: "100% no invasivo" },
            { icon: <Award className="w-4 h-4 text-primary" />,             text: "Profesionales certificados" },
            { icon: <MessageCircle className="w-4 h-4 text-primary" />,     text: "Valoración gratuita" },
          ].map((t) => (
            <div key={t.text} className="flex items-center justify-center gap-2">
              {t.icon}
              <span className="text-white/60 text-xs font-medium tracking-wide">{t.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────── */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-10"
          >
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-3">Beneficios</p>
            <h2 className="text-3xl font-serif font-bold text-stone-900">
              ¿Por qué elegir este tratamiento?
            </h2>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {service.benefits.map((benefit, i) => (
              <motion.div
                key={i} variants={fadeUp}
                className="flex items-start gap-3 bg-white p-5 border border-stone-100 hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-stone-700 font-medium leading-snug">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE ITEMS ─────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-primary" />
              <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Nuestros Tratamientos</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
              ¿Qué incluye<br />
              <span className="font-light italic text-primary">este servicio?</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-100"
          >
            {service.items.map((item, i) => (
              <motion.div
                key={i} variants={fadeUp}
                className="group bg-white p-8 md:p-10 hover:bg-stone-50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4 gap-4">
                  <div>
                    <span className="text-stone-400 text-sm font-serif font-bold mr-3">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-stone-900 group-hover:text-primary transition-colors inline">{item.title}</h3>
                  </div>
                  {item.duration && (
                    <span className="flex items-center gap-1.5 text-stone-500 text-xs shrink-0 border border-stone-200 px-3 py-1">
                      <Clock className="w-3.5 h-3.5" />
                      {item.duration}
                    </span>
                  )}
                </div>
                <p className="text-stone-600 leading-relaxed mb-6 text-sm">{item.description}</p>
                {item.price && (
                  <p className="text-stone-500 text-xs tracking-widest uppercase mb-5">{item.price}</p>
                )}
                <a
                  id={`cta-item-${service.slug}-${i}`}
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-white bg-primary px-5 py-2.5 hover:bg-primary/90 transition-colors group/btn"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Reservar sesión
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── URGENCY CTA BAND ──────────────────────────── */}
      <section className="bg-primary py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-white/70 text-xs font-bold tracking-[0.4em] uppercase mb-3">Valoración Sin Compromiso</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Reserva hoy — plazas limitadas
            </h2>
            <p className="text-white/75 text-sm mb-8 max-w-md mx-auto leading-relaxed">
              Escríbenos por WhatsApp y te asesoramos sin costo. Diseñamos el protocolo ideal para tu caso.
            </p>
            <a
              id={`cta-urgency-${service.slug}`}
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-primary text-sm font-bold tracking-[0.15em] uppercase px-10 py-4 hover:bg-stone-100 transition-colors group"
            >
              <MessageCircle className="w-4 h-4" />
              Escribir por WhatsApp
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      {service.faq && service.faq.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6 sm:px-10">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-primary" />
                <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Preguntas Frecuentes</p>
              </div>
              <h2 className="text-4xl font-serif font-bold text-stone-900">
                Todo lo que necesitas<br />
                <span className="font-light italic text-primary">saber antes de tu cita</span>
              </h2>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="border-t border-stone-200"
            >
              {service.faq.map((item, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <FaqItem question={item.question} answer={item.answer} />
                </motion.div>
              ))}
            </motion.div>

            {/* Inline WhatsApp after FAQ */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="mt-12 p-8 bg-[#040f19] flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div>
                <p className="text-white font-serif text-xl font-bold mb-1">¿Tienes más dudas?</p>
                <p className="text-white/75 text-sm">Escríbenos y te respondemos al instante.</p>
              </div>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 border border-primary text-primary text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 hover:bg-primary hover:text-white transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Preguntar ahora
              </a>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── RELATED SERVICES ──────────────────────────── */}
      {related.length > 0 && (
        <section className="py-16 bg-stone-50 border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="mb-10"
            >
              <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">También te puede interesar</p>
              <h2 className="text-3xl font-serif font-bold text-stone-900">Servicios relacionados</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200">
              {related.map((rel, i) => (
                <motion.div
                  key={rel.slug}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.08 } } }}
                  className="bg-white p-8 group hover:bg-stone-50 transition-colors"
                >
                  <p className="text-xs font-serif font-bold text-stone-400 mb-3">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-2 group-hover:text-primary transition-colors">
                    {rel.name}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-5">{rel.tagline}</p>
                  <Link href={`/servicios/${rel.slug}`}>
                    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-primary border-b border-primary/30 pb-0.5 hover:border-primary transition-colors cursor-pointer">
                      Ver tratamiento <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
            {category && (
              <div className="mt-8 text-center">
                <Link href={category.href}>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-stone-600 border-b border-stone-300 pb-0.5 hover:text-primary hover:border-primary transition-colors cursor-pointer tracking-wide uppercase text-xs">
                    Ver todos los {category.name.toLowerCase()} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
