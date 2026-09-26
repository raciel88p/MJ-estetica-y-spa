import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Instagram,
  MapPin,
  Clock,
  ShieldCheck,
  Star,
  Heart,
  Quote
} from "lucide-react";
import { useState } from "react";
import type { ServicePageData } from "@/data/services";
import es from "@/i18n/locales/es/busto-service.json";
import en from "@/i18n/locales/en/busto-service.json";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as any } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
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
            <p className="text-stone-500 leading-relaxed pb-6 text-sm">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function BustoServiceContent({ service, waLink, lang = "es" }: { service: ServicePageData; waLink: string; lang?: "es" | "en" }) {
  const content = (lang === "es" ? es : en) as any;

  return (
    <div className="bg-white">
      {/* ── INTRO / HERO BADGES ────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4 rounded-full">
              {content.intro.tagline}
            </span>
            <p className="text-2xl font-serif text-stone-800 leading-relaxed mb-8">
              {content.intro.title}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {content.intro.items?.map((item: string, i: number) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-stone-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="p-6 bg-stone-50 border border-stone-100 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-bold text-stone-900">{content.intro.cta1}</p>
                <p className="text-xs text-stone-500">{content.intro.cta2}</p>
              </div>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-white font-bold text-xs uppercase tracking-widest hover:bg-stone-900 transition-colors"
              >
                {content.intro.footer}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── EMPATHY / PROBLEM ────────────────────────── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">{content.empathy.title}</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">{content.empathy.p1}</p>
            <p className="text-xl font-serif italic text-primary border-l-4 border-primary pl-4 mb-6">{content.empathy.quote}</p>
            <p className="text-stone-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: content.empathy.p2 }} />
            <p className="text-stone-800 font-medium">{content.empathy.p3}</p>
          </motion.div>
        </div>
      </section>

      {/* ── LEAD MAGNET ───────────────────────────────── */}
      <section className="py-20 bg-stone-900 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <span className="inline-block px-4 py-1.5 bg-primary text-white text-[10px] font-bold tracking-widest uppercase mb-4 rounded-full">
              {content.leadMagnet.label}
            </span>
            <h3 className="text-3xl font-serif font-bold mb-3">{content.leadMagnet.title}</h3>
            <p className="text-xl font-serif italic text-primary mb-8">{content.leadMagnet.subtitle}</p>

            <div className="bg-white/5 border border-white/10 p-8 max-w-2xl mx-auto mb-8 text-left">
              <p className="text-xs uppercase tracking-widest text-primary font-bold mb-4">{content.leadMagnet.learn}</p>
              <ul className="space-y-3">
                {content.leadMagnet.items?.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-white/70 text-sm mb-4">{content.leadMagnet.ctaLabel}</p>
            <p className="text-lg font-serif mb-6">
              {content.leadMagnet.wordIntro} <span className="text-primary font-bold">{content.leadMagnet.words?.[0]}</span> {content.leadMagnet.wordOr} <span className="text-primary font-bold">{content.leadMagnet.words?.[1]}</span> {content.leadMagnet.footer}
            </p>
            <a
              href="https://instagram.com/mjestetica.cr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity rounded-full shadow-lg"
            >
              <Instagram className="w-4 h-4" />
              {content.leadMagnet.cta}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── DEFINITION / WHAT IS IT ───────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">{content.definition.title}</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">{content.definition.desc}</p>
            <p className="text-primary font-bold mb-4">{content.definition.highlight}</p>
            <p className="text-stone-800 font-medium mb-4">{content.definition.goalTitle}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {content.definition.items?.map((item: string, idx: number) => (
                <div key={idx} className="flex items-center gap-3 bg-stone-50 p-4 border border-stone-100">
                  <Sparkles className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-medium text-stone-800">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-stone-500 italic text-sm border-l-2 border-primary pl-4">{content.definition.quote}</p>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT CAN IT HELP IMPROVE ───────────────────── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">{content.improvement.title}</h2>
            <p className="text-stone-600 mb-8">{content.improvement.intro}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {content.improvement.items?.map((item: string, idx: number) => (
                <div key={idx} className="bg-white p-5 border border-stone-200 shadow-sm text-stone-800 text-sm font-medium flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-xs uppercase tracking-widest font-bold text-primary mb-2 block">{content.benefits.label}</span>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6" dangerouslySetInnerHTML={{ __html: content.benefits.title }} />
            <p className="text-stone-600 mb-8">{content.benefits.intro}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.benefits.items?.map((item: string, idx: number) => (
                <div key={idx} className="flex items-center gap-3 bg-stone-50 p-4 border border-stone-100">
                  <Sparkles className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-stone-800 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── METHODOLOGY & INFO ────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{content.methodology.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {content.methodology.steps?.map((step: any, idx: number) => (
              <div key={idx} className="bg-white/5 p-6 border border-white/10">
                <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">{step.s}</span>
                <h4 className="text-lg font-serif font-bold mb-3">{step.t}</h4>
                <p className="text-white/60 text-xs leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white/5 p-6 border border-white/10">
            {content.methodology.items?.map((item: any, idx: number) => (
              <div key={idx} className="p-4 border-r last:border-r-0 border-white/10 text-center">
                <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">{item.l}</p>
                <p className="font-serif font-bold text-sm text-white">{item.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECOMMENDED FOR ───────────────────────────── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">{content.recommended.title}</h2>
            <p className="text-stone-600 mb-8">{content.recommended.intro}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.recommended.items?.map((item: string, idx: number) => (
                <div key={idx} className="flex items-center gap-3 bg-white p-4 border border-stone-200 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-stone-800 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────── */}
      <section className="py-20 bg-white border-t border-stone-200 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-900">{content.testimonials.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.testimonials.items?.map((item: any, i: number) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-50 p-8 border border-stone-100 flex flex-col justify-between">
                <div>
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <h4 className="font-serif font-bold text-stone-900 mb-3">{item.q}</h4>
                  <p className="text-stone-600 text-sm italic leading-relaxed">{item.t}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12 text-center">
            <h2 className="text-4xl font-serif font-bold text-stone-900">{content.faqs.title}</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="border-t border-stone-200">
            {content.faqs.items?.map((item: any, i: number) => (
              <motion.div key={i} variants={fadeUp}>
                <FaqItem question={item.q} answer={item.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US & LOCATION / PLANES ──────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold mb-4 text-white">{content.whyUs.title}</h2>
              <p className="text-primary font-bold mb-6 text-sm">{content.whyUs.intro}</p>
              <p className="text-white/40 uppercase tracking-widest text-xs font-bold mb-4">{content.whyUs.listLabel}</p>
              <div className="space-y-3 mb-8">
                {content.whyUs.items?.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/60 italic text-sm border-l border-primary pl-4">{content.whyUs.quote}</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/5 border border-white/10 p-8">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">{content.planes.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {content.planes.items?.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white/80 bg-white/5 p-3 border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/50 italic mb-8">{content.planes.intro}</p>
              <div className="border-t border-white/10 pt-6">
                <p className="font-serif font-bold text-white mb-4">{content.planes.locationTitle}</p>
                <div className="space-y-2 text-xs text-white/70">
                  {content.planes.locationItems?.map((loc: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{loc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-xs uppercase tracking-widest font-bold text-primary mb-3 block">{content.finalCta.tagline}</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">{content.finalCta.title}</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10 max-w-md mx-auto">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-white font-bold text-xs uppercase tracking-widest hover:bg-stone-900 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                {content.finalCta.cta1}
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-stone-200 text-stone-800 font-bold text-xs uppercase tracking-widest hover:bg-stone-50 transition-colors flex items-center justify-center gap-2"
              >
                {content.finalCta.cta2}
              </a>
            </div>
            <p className="text-stone-500 text-xs italic">{content.finalCta.footer}</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
