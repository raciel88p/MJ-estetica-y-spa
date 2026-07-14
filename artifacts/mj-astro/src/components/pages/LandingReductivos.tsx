import { withAppProviders } from "@/components/ReactAppWrapper";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { BeforeAfterCard } from "@/components/testimonials/BeforeAfterCard";
import { ChatProof } from "@/components/testimonials/ChatProof";
import { StatsBar } from "@/components/StatsBar";
import { useTranslations } from "@/i18n/ui";
import { testimonials, beforeAfterItems, chatProofs, WA_BASE } from "@/data/testimonials";
import {
  CheckCircle2,
  ArrowRight,
  Star,
  ShieldCheck,
  Clock,
  Zap,
  ChevronDown,
  Phone,
  Users,
  Award,
} from "lucide-react";
import { useState } from "react";

const WA_CTA = WA_BASE;

function trackWA(label: string) {
  if (typeof window !== "undefined" && (window as any).dataLayer) {
    (window as any).dataLayer.push({ event: "click_whatsapp", cta_label: label });
  }
}

function CTAButton({ label, id, className = "" }: { label: string; id: string; className?: string }) {
  return (
    <a
      id={id}
      href={WA_CTA}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWA(label)}
      className={`inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold rounded-full px-8 py-4 text-base shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-0.5 transition-all duration-200 ${className}`}
    >
      <Phone className="w-5 h-5" />
      {label}
      <ArrowRight className="w-4 h-4" />
    </a>
  );
}

const faqs = [
  {
    q: "¿Cuántas sesiones necesito para ver resultados?",
    a: "La mayoría de nuestras clientas ven cambios visibles desde la 2ª o 3ª sesión. Un ciclo completo de 8–12 sesiones garantiza resultados duraderos. Cada cuerpo es diferente, por eso empezamos con una valoración GRATIS.",
  },
  {
    q: "¿Duele el tratamiento?",
    a: "No. Los tratamientos reductivos son completamente indoloros. Son relajantes y muchas clientas se quedan dormidas durante las sesiones. No hay tiempo de recuperación — puedes continuar tu día normal.",
  },
  {
    q: "¿Cuánto tiempo dura cada sesión?",
    a: "Entre 45 y 75 minutos dependiendo del área a tratar. Puedes venir en tu hora de almuerzo o antes/después del trabajo.",
  },
  {
    q: "¿Los resultados son permanentes?",
    a: "Con hábitos saludables y mantenimiento mensual, los resultados se mantienen a largo plazo. Te enseñamos cómo cuidar los resultados para que duren.",
  },
  {
    q: "¿Funciona después de embarazos o cirugías?",
    a: "Sí. Muchas de nuestras clientas vienen precisamente por esto. Tenemos protocolos especiales para tejidos postparto y post-quirúrgicos. Consultamos tu historial en la valoración.",
  },
  {
    q: "¿Cuánto cuesta el tratamiento?",
    a: "Tenemos paquetes desde ₡45,000 por sesión individual hasta paquetes de 10 sesiones con hasta 35% de descuento. Escríbenos para cotizarte según tu objetivo específico.",
  },
];

function FAQ({ q, a, open, toggle }: { q: string; a: string; open: boolean; toggle: () => void }) {
  return (
    <div className="border border-stone-200 rounded-2xl overflow-hidden">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-stone-50 transition-colors"
      >
        <span className="font-semibold text-stone-800 text-sm leading-snug">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-stone-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

function LandingReductivos({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const t = useTranslations(lang);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs_localized = lang === 'es' ? faqs : [
    {
      q: "How many sessions do I need to see results?",
      a: "Most of our clients see visible changes from the 2nd or 3rd session. A full cycle of 8–12 sessions guarantees long-lasting results. Every body is different, so we start with a FREE assessment.",
    },
    {
      q: "Does the treatment hurt?",
      a: "No. Reductive treatments are completely painless. They are relaxing and many clients fall asleep during sessions. There is no recovery time — you can continue your normal day.",
    },
    {
      q: "How long does each session last?",
      a: "Between 45 and 75 minutes depending on the area to be treated. You can come during your lunch hour or before/after work.",
    },
    {
      q: "Are the results permanent?",
      a: "With healthy habits and monthly maintenance, results are maintained long-term. We teach you how to care for the results so they last.",
    },
    {
      q: "Does it work after pregnancies or surgeries?",
      a: "Yes. Many of our clients come specifically for this. We have special protocols for postpartum and post-surgical tissues. We consult your history in the assessment.",
    },
    {
      q: "How much does the treatment cost?",
      a: "We have packages starting from ₡45,000 per individual session up to 10-session packages with up to 35% discount. Write to us for a quote based on your specific goal.",
    },
  ];

  const problemItems = lang === 'es' ? [
    "Haces ejercicio pero la grasa localizada no desaparece",
    "Después del embarazo tu cuerpo no volvió a ser el mismo",
    "Te sientes incómoda en traje de baño o ropa ajustada",
    "La celulitis y la flacidez te quitan confianza",
    "Probaste dietas y nada funciona a largo plazo",
    "Quieres resultados reales sin someterte a cirugías",
  ] : [
    "You exercise but localized fat doesn't go away",
    "After pregnancy your body didn't go back to being the same",
    "You feel uncomfortable in a swimsuit or tight clothing",
    "Cellulite and sagging take away your confidence",
    "You tried diets and nothing works long-term",
    "You want real results without undergoing surgery",
  ];

  const solutionItems = [
    {
      icon: "🪵",
      title: lang === 'es' ? "Maderoterapia" : "Wood Therapy",
      desc: lang === 'es' ? "Técnica colombiana con rodillos de madera que rompe la grasa y activa la circulación. Visible desde la 1ª sesión." : "Colombian technique with wooden rollers that breaks fat and activates circulation. Visible from the 1st session.",
      badge: lang === 'es' ? "Muy popular" : "Very popular",
    },
    {
      icon: "🌊",
      title: lang === 'es' ? "Drenaje Linfático" : "Lymphatic Drainage",
      desc: lang === 'es' ? "Elimina toxinas y líquidos retenidos. Reduce inflamación y define la silueta. Ideal combinado con reductivos." : "Eliminates toxins and retained fluids. Reduces inflammation and defines the silhouette. Ideal combined with weight loss.",
      badge: lang === 'es' ? "Complemento esencial" : "Essential complement",
    },
    {
      icon: "⚡",
      title: lang === 'es' ? "Reductivo Intensivo" : "Intensive Weight Loss",
      desc: lang === 'es' ? "Protocolo personalizado que combina varias técnicas para máximos resultados. El preferido de nuestras clientas." : "Personalized protocol that combines several techniques for maximum results. Preferred by our clients.",
      badge: lang === 'es' ? "Mayor resultado" : "Greatest result",
    },
  ];

  const resultsItems = [
    { icon: <Users className="w-4 h-4" />, text: t('reductivos.results.t1') },
    { icon: <Award className="w-4 h-4" />, text: t('reductivos.results.t2') },
    { icon: <ShieldCheck className="w-4 h-4" />, text: t('reductivos.results.t3') },
  ];

  const pricingItems = [
    {
      name: lang === 'es' ? "Inicio" : "Start",
      sessions: lang === 'es' ? "4 sesiones" : "4 sessions",
      desc: lang === 'es' ? "Para conocer los resultados y empezar tu transformación." : "To get to know the results and start your transformation.",
      perks: lang === 'es' ? ["Protocolo inicial", "Valoración incluida", "Seguimiento semanal"] : ["Initial protocol", "Assessment included", "Weekly follow-up"],
      cta: lang === 'es' ? "Consultar precio" : "Check price",
      highlight: false,
    },
    {
      name: lang === 'es' ? "Transformación" : "Transformation",
      sessions: lang === 'es' ? "8 sesiones" : "8 sessions",
      desc: lang === 'es' ? "El más popular. Resultados visibles y duraderos." : "The most popular. Visible and lasting results.",
      perks: lang === 'es' ? [
        "Protocolo combinado",
        "Drenaje incluido",
        "Seguimiento personalizado",
        "20% de descuento",
      ] : [
        "Combined protocol",
        "Drainage included",
        "Personalized follow-up",
        "20% discount",
      ],
      cta: lang === 'es' ? "¡Lo quiero!" : "I want it!",
      highlight: true,
    },
    {
      name: lang === 'es' ? "Total" : "Total",
      sessions: lang === 'es' ? "12 sesiones" : "12 sessions",
      desc: lang === 'es' ? "Transformación completa con máximos resultados." : "Complete transformation with maximum results.",
      perks: lang === 'es' ? [
        "Protocolo premium",
        "Maderoterapia incluida",
        "Prioridad en citas",
        "35% de descuento",
      ] : [
        "Premium protocol",
        "Wood therapy included",
        "Priority in appointments",
        "35% discount",
      ],
      cta: lang === 'es' ? "Consultar precio" : "Check price",
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title={lang === 'es' ? "Reductivos en Turrialba — Reduce medidas sin cirugía | MJ Estética" : "Weight Loss in Turrialba — Reduce sizes without surgery | MJ Estética"}
        description={lang === 'es' ? "Tratamientos reductivos en Turrialba, Costa Rica. Pierde hasta 2 tallas en 4 semanas con maderoterapia, drenaje linfático y reductivos. Valoración GRATIS. MJ Estética." : "Weight loss treatments in Turrialba, Costa Rica. Lose up to 2 sizes in 4 weeks with wood therapy, lymphatic drainage and weight loss. FREE assessment. MJ Estética."}
        canonical={lang === 'es' ? "/reductivos-turrialba" : "/en/weight-loss"}
        lang={lang}
      />
      <Navbar lang={lang} alternateLink={lang === 'es' ? '/en/weight-loss' : '/reductivos-turrialba'} />

      {/* ───── 1. HERO ───── */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#071e2e] overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,#1378A2,transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Star className="w-3.5 h-3.5 fill-primary" />
            {t('reductivos.hero.badge')}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-serif text-white leading-tight mb-6"
          >
            {t('reductivos.hero.title1')}
            <span className="block text-primary">{t('reductivos.hero.title2')}</span>
            {t('reductivos.hero.title3')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-4"
          >
            {t('reductivos.hero.desc1')}<strong className="text-white">{t('reductivos.hero.desc2')}</strong>{t('reductivos.hero.desc3')}
            <span className="block mt-1">{t('reductivos.hero.desc4')}</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-primary font-semibold text-sm mb-10"
          >
            {t('reductivos.hero.gift')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <CTAButton label={t('reductivos.hero.cta')} id="hero-cta-reductivos" className="text-lg px-10 py-5" />
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mt-12 text-white/50 text-xs"
          >
            {[t('reductivos.hero.trust1'), t('reductivos.hero.trust2'), t('reductivos.hero.trust3')].map((t_txt) => (
              <span key={t_txt} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary/60" /> {t_txt}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───── Trust bar ───── */}
      <section className="bg-primary py-6">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "+100", label: t('reductivos.stats.s1') },
              { value: "4.9★", label: t('reductivos.stats.s2') },
              { value: "2 tallas", label: t('reductivos.stats.s3') },
              { value: "4 sem.", label: t('reductivos.stats.s4') },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl font-serif font-bold text-white">{stat.value}</p>
                <p className="text-white/70 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsBar lang={lang} />

      {/* ───── 2. PROBLEM ───── */}
      <section className="py-24 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">{t('reductivos.problem.tagline')}</p>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              {t('reductivos.problem.title')}
            </h2>
            <p className="text-stone-500 text-lg">
              {t('reductivos.problem.desc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {problemItems.map((pain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 bg-white border border-stone-200 rounded-xl p-4"
              >
                <div className="w-6 h-6 rounded-full bg-red-50 border border-red-200 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-red-400 text-xs">✕</span>
                </div>
                <p className="text-stone-700 text-sm leading-snug">{pain}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center"
          >
            <p className="text-primary font-semibold text-lg font-serif">
              {t('reductivos.problem.p1')}
            </p>
            <p className="text-stone-600 text-sm mt-2">
              {t('reductivos.problem.p2')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───── 3. SOLUTION ───── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">{t('reductivos.solution.tagline')}</p>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              {t('reductivos.solution.title')}
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              {t('reductivos.solution.desc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutionItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative bg-white rounded-2xl p-7 border border-stone-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <span className="absolute top-4 right-4 text-[10px] font-bold text-primary bg-primary/10 rounded-full px-2.5 py-1 uppercase tracking-wider">
                  {item.badge}
                </span>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-serif font-bold text-stone-800 mb-3">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <CTAButton label={t('reductivos.solution.cta')} id="solution-cta-reductivos" />
          </motion.div>
        </div>
      </section>

      {/* ───── 4. RESULTS (Before/After) ───── */}
      <section className="py-24 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">{t('reductivos.results.tagline')}</p>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              {t('reductivos.results.title')}
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto text-sm italic">
              {t('reductivos.results.desc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {beforeAfterItems.map((item, i) => (
              <BeforeAfterCard key={item.id} item={item} index={i} lang={lang} />
            ))}
          </div>

          {/* Trust signals */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {resultsItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white border border-stone-200 rounded-full px-4 py-2 text-sm text-stone-700"
              >
                <span className="text-primary">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 5. TESTIMONIALS ───── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">
              {t('reductivos.testimonials.tagline')}
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              {t('reductivos.testimonials.title')}
            </h2>
            <p className="text-stone-500">{t('reductivos.testimonials.desc')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {testimonials.slice(0, 3).map((testi, i) => (
              <TestimonialCard key={testi.id} testimonial={testi} index={i} lang={lang} />
            ))}
          </div>

          {/* Chat proof */}
          <div className="max-w-sm mx-auto">
            <p className="text-center text-sm text-stone-500 mb-4 font-medium">
              {t('reductivos.testimonials.chat')}
            </p>
            <ChatProof messages={chatProofs.slice(0, 4)} />
          </div>
        </div>
      </section>

      {/* ───── 6. OFFER / PRICING ───── */}
      <section className="py-24 px-4 sm:px-6 bg-[#071e2e]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">{t('reductivos.pricing.tagline')}</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
              {t('reductivos.pricing.title')}
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              {t('reductivos.pricing.desc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingItems.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-7 flex flex-col gap-5 ${
                  pkg.highlight
                    ? "bg-primary border-2 border-primary shadow-xl shadow-primary/30 scale-105"
                    : "bg-white/5 border border-white/10"
                }`}
              >
                {pkg.highlight && (
                  <div className="text-center">
                    <span className="text-xs font-bold uppercase tracking-widest bg-white text-primary rounded-full px-3 py-1">
                      {t('reductivos.pricing.popular')}
                    </span>
                  </div>
                )}
                <div>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${pkg.highlight ? "text-white/80" : "text-white/50"}`}>
                    {pkg.name}
                  </p>
                  <p className={`text-3xl font-serif font-bold ${pkg.highlight ? "text-white" : "text-white"}`}>
                    {pkg.sessions}
                  </p>
                  <p className={`text-sm mt-2 ${pkg.highlight ? "text-white/80" : "text-white/50"}`}>{pkg.desc}</p>
                </div>
                <ul className="flex flex-col gap-2 flex-1">
                  {pkg.perks.map((p, j) => (
                    <li key={j} className={`flex items-center gap-2 text-sm ${pkg.highlight ? "text-white" : "text-white/70"}`}>
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${pkg.highlight ? "text-white" : "text-primary/60"}`} />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href={WA_CTA}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWA(`pkg-${pkg.name}`)}
                  className={`w-full text-center font-bold py-3 rounded-full transition-all text-sm ${
                    pkg.highlight
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  {pkg.cta} →
                </a>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-white/40 text-xs mt-8">
            {t('reductivos.pricing.footer')}
          </p>
        </div>
      </section>

      {/* ───── 7. FAQ ───── */}
      <section className="py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">{t('reductivos.faq.tagline')}</p>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-3">
              {t('reductivos.faq.title')}
            </h2>
            <p className="text-stone-500 text-sm">
              {t('reductivos.faq.desc')}
            </p>
          </motion.div>

          <div className="flex flex-col gap-3">
            {faqs_localized.map((faq, i) => (
              <FAQ
                key={i}
                q={faq.q}
                a={faq.a}
                open={openFaq === i}
                toggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ───── 8. FINAL CTA ───── */}
      <section className="py-24 px-4 sm:px-6 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_bottom_right,white,transparent)]" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 text-white rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider mb-8">
              <Clock className="w-3.5 h-3.5" /> {t('reductivos.final.plazas')}
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">
              {t('reductivos.final.title1')}
              <span className="block">{t('reductivos.final.title2')}</span>
            </h2>
            <p className="text-white/80 text-lg mb-4 max-w-xl mx-auto">
              {t('reductivos.final.desc')}
            </p>
            <div className="flex flex-wrap gap-3 justify-center text-white/70 text-xs mb-10">
              <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> {t('reductivos.final.trust1')}</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> {t('reductivos.final.trust2')}</span>
              <span className="flex items-center gap-1"><Star className="w-3 h-3" /> {t('reductivos.final.trust3')}</span>
            </div>
            <CTAButton label={t('reductivos.final.cta')} id="final-cta-reductivos" className="text-lg px-10 py-5" />
            <p className="text-white/50 text-xs mt-4">{t('reductivos.final.footer')}</p>
          </motion.div>
        </div>
      </section>

      <Footer lang={lang} />
      <FloatingWhatsApp />
    </div>
  );
}

export default withAppProviders(LandingReductivos);
