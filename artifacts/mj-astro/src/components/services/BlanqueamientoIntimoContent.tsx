import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Instagram,
  Target,
  ShieldCheck,
  Lock
} from "lucide-react";
import { useState } from "react";
import type { ServicePageData } from "@/data/services";
import es from "@/i18n/locales/es/blanqueamiento-intimo.json";
import en from "@/i18n/locales/en/blanqueamiento-intimo.json";

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

export function BlanqueamientoIntimoContent({ service, waLink, lang = "es" }: { service: ServicePageData; waLink: string; lang?: "es" | "en" }) {
  const content = lang === "es" ? es : en;
  return (
    <div className="bg-white">
      {/* ── INTRO SECTION ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">{content.intro.tagline}</span>
            </div>
            <p className="text-stone-600 text-lg leading-relaxed mb-6 italic">
              {content.intro.p1}
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: content.intro.p2 }} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.intro.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-stone-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROBLEM / AGITATION ──────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              {content.causes.title}
            </h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
              <p>{content.causes.intro}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {content.causes.items.map((item, i) => (
                  <div key={i} className="bg-white p-6 border border-stone-200 shadow-sm">
                    <h4 className="font-bold text-stone-900 mb-2">{item.t}</h4>
                    <p className="text-sm text-stone-500">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SOLUTION / METHODOLOGY ────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-stone-900">{content.protocol.title}</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">{content.protocol.desc}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.protocol.steps.map((step, i) => {
              const icons = [<Target className="w-6 h-6" />, <Sparkles className="w-6 h-6" />, <ShieldCheck className="w-6 h-6" />];
              return (
              <div key={i} className="p-8 border border-stone-100 bg-stone-50 rounded-sm hover:border-primary transition-colors text-center flex flex-col items-center">
                <div className="text-primary mb-6">{icons[i]}</div>
                <h4 className="text-xl font-serif font-bold text-stone-900 mb-4">{step.t}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{step.d}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BENEFITS SECTION ─────────────────────────── */}
      <section className="py-24 bg-[#040f19] text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl font-serif font-bold mb-8 text-white">{content.benefits.title}</h2>
              <div className="space-y-4">
                {content.benefits.items.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4 py-3 border-b border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-white/80 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <a href={waLink} className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 font-bold tracking-widest uppercase hover:bg-white hover:text-primary transition-all text-xs">
                  <MessageCircle className="w-4 h-4" />
                  {content.benefits.cta}
                </a>
              </div>
            </motion.div>
            <div className="relative">
              <div className="aspect-square bg-stone-800/50 border border-white/10 flex items-center justify-center p-12">
                 <div className="text-center">
                    <Lock className="w-16 h-16 text-primary mx-auto mb-6 opacity-50" />
                    <p className="text-xl font-serif italic text-white/60">{content.benefits.privacyQuote}</p>
                 </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary p-6 shadow-xl hidden md:block">
                 <p className="text-white font-bold text-center" dangerouslySetInnerHTML={{ __html: content.benefits.badge }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12 text-center">
            <h2 className="text-4xl font-serif font-bold text-stone-900">{content.faqs.title}</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="border-t border-stone-200">
            {content.faqs.items.map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <FaqItem question={item.q} answer={item.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── LEAD MAGNET ──────────────────────────────── */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-1 md:p-2 shadow-2xl">
              <div className="border border-stone-100 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
                 <div className="flex-1 text-center md:text-left text-stone-900">
                    <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{content.leadMagnet.label}</p>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{content.leadMagnet.title}</h2>
                    <p className="text-stone-500 mb-8 leading-relaxed">
                       {content.leadMagnet.desc}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                       <div className="bg-stone-50 border border-stone-200 px-6 py-3 text-center">
                          <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">{content.leadMagnet.wordLabel}</p>
                          <p className="text-2xl font-serif font-bold text-primary">“{content.leadMagnet.word}”</p>
                       </div>
                       <ArrowRight className="w-6 h-6 text-primary hidden sm:block" />
                       <a
                          href="https://www.instagram.com/mj_fisioestetica/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-stone-900 text-white px-6 py-4 font-bold tracking-widest uppercase hover:bg-primary transition-colors text-xs"
                       >
                          <Instagram className="w-4 h-4" />
                          {content.leadMagnet.cta}
                       </a>
                    </div>
                 </div>
                 <div className="shrink-0 w-48 h-64 bg-stone-100 flex items-center justify-center relative group">
                    <div className="absolute inset-2 border border-stone-200" />
                    <Sparkles className="w-12 h-12 text-primary/20" />
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                       <p className="text-[8px] font-bold tracking-tighter text-stone-400">MJ WELLNESS</p>
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">{content.finalCta.title}</h2>
            <p className="text-stone-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              {content.finalCta.desc}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-primary text-white px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all text-xs"
              >
                <MessageCircle className="w-5 h-5" />
                {content.finalCta.cta1}
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-stone-900 text-stone-900 px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-all text-xs"
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

function ArrowRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
