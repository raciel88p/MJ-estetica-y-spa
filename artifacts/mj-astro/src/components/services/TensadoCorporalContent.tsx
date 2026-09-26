import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Zap,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Instagram,
  MapPin,
  Clock,
  ShieldCheck,
  Star,
  Quote,
  HelpCircle,
  Smartphone,
  Car
} from "lucide-react";
import { useState } from "react";
import type { ServicePageData } from "@/data/services";
import es from "@/i18n/locales/es/tensado-corporal.json";
import en from "@/i18n/locales/en/tensado-corporal.json";

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

export function TensadoCorporalContent({ service, waLink, lang = "es" }: { service: ServicePageData; waLink: string; lang?: "es" | "en" }) {
  const content = (lang === "es" ? es : en) as any;

  return (
    <div className="bg-white">
      {/* ── INTRO / HERO BADGES ────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-4 leading-tight">
              {content.intro.title}
            </h2>
            <p className="text-xl font-serif text-primary italic mb-6">{content.intro.subtitle}</p>
            <p className="text-lg text-stone-700 leading-relaxed mb-6 font-medium">{content.intro.question}</p>
            <p className="text-stone-600 leading-relaxed mb-8">{content.intro.desc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {content.intro.items?.map((item: string, i: number) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-stone-700 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="p-6 bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-bold text-stone-900">{content.intro.ctaTitle}</p>
                <div className="flex gap-3 text-xs text-stone-500 mt-1">
                  {content.intro.ctaItems?.map((it: string, idx: number) => (
                    <span key={idx}>• {it}</span>
                  ))}
                </div>
              </div>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-white font-bold text-xs uppercase tracking-widest hover:bg-stone-900 transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LEAD MAGNET ───────────────────────────────── */}
      <section className="py-16 bg-stone-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-block px-4 py-1.5 bg-primary text-white text-[10px] font-bold tracking-widest uppercase mb-4 rounded-full">
              {content.leadMagnet.label}
            </span>
            <h3 className="text-3xl font-serif font-bold text-white mb-2">{content.leadMagnet.title}</h3>
            <p className="text-xl font-serif italic text-primary mb-6">{content.leadMagnet.subtitle}</p>
            <p className="text-white/80 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">{content.leadMagnet.instagram}</p>

            <div className="bg-white/5 border border-white/10 p-6 max-w-xl mx-auto mb-8 text-left">
              <p className="text-xs uppercase tracking-widest text-primary font-bold mb-3">{content.leadMagnet.learnTitle}</p>
              <ul className="space-y-2">
                {content.leadMagnet.items?.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://instagram.com/mjestetica.cr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity rounded-full shadow-lg"
            >
              <Instagram className="w-4 h-4" />
              {content.leadMagnet.instaCta}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT IS BODY TIGHTENING ───────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">{content.whatIs.title}</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">{content.whatIs.desc}</p>
            <p className="text-stone-900 font-bold mb-4">{content.whatIs.focusTitle}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
              {content.whatIs.items?.map((item: string, idx: number) => (
                <div key={idx} className="p-4 bg-stone-50 border border-stone-100 flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-semibold text-stone-800">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-stone-500 italic text-sm border-l-2 border-primary pl-4">{content.whatIs.note}</p>
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

      {/* ── BENEFITS & TECHNOLOGIES ──────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-2">{content.benefits.title}</h2>
            <p className="text-xl font-serif italic text-primary mb-4">{content.benefits.subtitle}</p>
            <p className="text-stone-600 mb-8">{content.benefits.desc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {content.benefits.items?.map((item: string, idx: number) => (
                <div key={idx} className="flex items-center gap-3 bg-stone-50 p-4 border border-stone-100">
                  <Sparkles className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-stone-800 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-stone-500 italic text-sm border-l-2 border-primary pl-4">{content.benefits.note}</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-900 text-white p-10 border border-white/10">
            <h3 className="text-2xl font-serif font-bold mb-4 text-white">{content.technologies.title}</h3>
            <h4 className="text-xl font-serif italic text-primary mb-3">{content.technologies.rfTitle}</h4>
            <p className="text-white/80 text-sm leading-relaxed mb-6">{content.technologies.rfDesc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {content.technologies.items?.map((item: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-stone-900 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              {content.technologies.cta}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── METHODOLOGY & STEPS ───────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">{content.methodology.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {content.methodology.steps?.map((step: any, idx: number) => (
              <div key={idx} className="bg-white p-6 border border-stone-200 shadow-sm">
                <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">{step.s}</span>
                <h4 className="text-lg font-serif font-bold mb-3 text-stone-900">{step.t}</h4>
                <p className="text-stone-600 text-xs leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
          <div className="bg-white p-8 border border-stone-200 shadow-sm max-w-3xl mx-auto text-center">
            <p className="font-serif font-bold text-stone-900 mb-4">{content.methodology.includesTitle}</p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-stone-700 font-medium">
              {content.methodology.includesItems?.map((item: string, idx: number) => (
                <span key={idx} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────── */}
      {content.testimonials && (
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-stone-900">{content.testimonials.title}</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.testimonials.items?.map((item: any, i: number) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-50 p-8 border border-stone-200">
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <p className="text-stone-700 text-base italic leading-relaxed">{item.quote}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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

      {/* ── WHY CHOOSE US & LOCATION / FINAL CTA ─────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold mb-4 text-white">{content.whyUs.title}</h2>
              <p className="text-white/80 text-sm mb-6 leading-relaxed">{content.whyUs.desc}</p>
              <div className="space-y-3">
                {content.whyUs.items?.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-white/90 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/5 border border-white/10 p-8">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">{content.programs.title}</h3>
              <p className="text-white/60 text-xs mb-4">{content.programs.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {content.programs.items?.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white/90 bg-white/5 p-3 border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-primary italic">{content.programs.footer}</p>
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary p-12 text-white text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">{content.finalCta.title}</h2>
            <p className="text-white/90 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">{content.finalCta.subtitle}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-primary font-bold text-xs uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                {content.finalCta.cta1}
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/30 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                {content.finalCta.cta2}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
