import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Quote,
  Star,
  Zap,
  Target,
  ShieldCheck,
  Award,
  UserCheck,
  Check
} from "lucide-react";
import { useState } from "react";
import type { ServicePageData } from "@/data/services";
import es from "@/i18n/locales/es/trasplante-capilar.json";
import en from "@/i18n/locales/en/trasplante-capilar.json";

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

export function TrasplanteCapilarContent({ waLink, lang = "es" }: { service: ServicePageData; waLink: string; lang?: "es" | "en" }) {
  const content = lang === "es" ? es : en;
  return (
    <div className="bg-white">
      {/* ── INTRO SECTION ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">{content.intro.label}</span>
            </div>
            <p className="text-stone-600 text-lg leading-relaxed mb-6 italic">
              {content.intro.title}
            </p>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed mb-10">
              {content.intro.items.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>

            <div className="mt-16 p-8 bg-stone-50 border-l-4 border-primary">
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">{content.intro.box.title}</h3>
              <p className="text-stone-600 leading-relaxed mb-6">
                {content.intro.box.p1}
              </p>
              <p className="text-stone-900 font-bold">
                {content.intro.box.p2}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT IS SECTION ──────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">{content.whatIs.title}</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              {content.whatIs.p1}
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              {content.whatIs.p2}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.whatIs.items.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white border border-stone-200 shadow-sm rounded-sm">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span className="text-stone-700 font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECOMMENDED FOR ──────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">{content.recommended.title}</h2>
            <p className="text-stone-500">{content.recommended.desc}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.recommended.items.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-stone-50 rounded-sm border border-stone-100">
                <Target className="w-4 h-4 text-primary shrink-0" />
                <span className="text-stone-700 font-medium text-xs">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORRIES SECTION ──────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-white">{content.worries.title}</h2>
             <p className="text-white/60 text-lg mb-12">{content.worries.desc}</p>
           </motion.div>

           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
              {content.worries.items.map((q, i) => (
                <div key={i} className="p-6 border border-white/10 bg-white/5 italic text-center font-serif text-lg">
                   {q}
                </div>
              ))}
           </div>

           <p className="text-center text-primary font-bold text-lg leading-relaxed">
             {content.worries.footer}
           </p>
        </div>
      </section>

      {/* ── BENEFITS SECTION ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">{content.benefits.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.benefits.items.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp}
                className="bg-stone-50 p-8 border border-stone-100 hover:border-primary/30 transition-all group"
              >
                <h3 className="font-serif font-bold text-stone-900 mb-4 text-lg group-hover:text-primary transition-colors">{item.t}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ──────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-stone-900">{content.process.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.process.items.map((step, i) => (
              <div key={i} className="relative bg-white p-8 border border-stone-200 shadow-sm group">
                <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block font-sans">{step.s}</span>
                <h4 className="text-lg font-serif font-bold text-stone-900 mb-4 leading-tight">{step.t}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS TIMELINE ──────────────────────────── */}
      <section className="py-24 bg-white">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
               <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">{content.timeline.title}</h2>
               <div className="space-y-6 text-stone-600 text-lg leading-relaxed mb-12">
                  <p dangerouslySetInnerHTML={{ __html: content.timeline.p1 }} />
                  <p>{content.timeline.p2}</p>
                  <p>{content.timeline.p3}</p>
               </div>
            </motion.div>
         </div>
      </section>

      {/* ── TRANSFORMATIONS ──────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900">{content.transformations.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.transformations.items.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.1}}}}
                className="bg-white p-8 border border-stone-100 relative shadow-sm"
              >
                <Quote className="w-8 h-8 text-primary/10 absolute top-4 right-4" />
                <p className="text-stone-600 mb-6 leading-relaxed italic text-sm">{item.t}</p>
                <p className="text-primary text-[10px] font-bold tracking-widest uppercase">— {item.n}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATOR ───────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">{content.whyUs.title}</h2>
            <p className="text-stone-600 text-lg mb-12">{content.whyUs.p1}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16 text-left">
              {content.whyUs.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-stone-50 rounded-sm">
                   <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                   <span className="text-stone-800 font-bold text-[10px] uppercase tracking-wider">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ SECTION ───────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12 text-center">
            <h2 className="text-4xl font-serif font-bold text-stone-900">{content.faq.title}</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="border-t border-stone-200">
            {content.faq.items.map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <FaqItem question={item.q} answer={item.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">{content.final.title}</h2>
            <p className="text-stone-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              {content.final.p1}
            </p>

            <div className="bg-stone-50 p-10 border border-stone-200 mb-12">
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm font-bold text-stone-700 mb-10">
                  {content.final.box.items.map((item, i) => (
                    <span key={i} className="flex items-center justify-center gap-2">✅ {item}</span>
                  ))}
               </div>
               <p className="text-stone-900 font-serif text-xl italic mb-4">{content.final.box.p1}</p>
               <p className="text-stone-400 text-sm">{content.final.box.p2}</p>
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all text-xs"
            >
              <MessageCircle className="w-5 h-5" />
              {content.final.cta}
            </a>

            <div className="mt-16 pt-10 border-t border-stone-100 flex flex-col items-center">
               <p className="text-stone-900 font-serif font-bold text-lg mb-2">MJ Estética & Wellness Center</p>
               <p className="text-stone-400 text-[10px] font-bold uppercase tracking-widest">{content.final.footer}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
