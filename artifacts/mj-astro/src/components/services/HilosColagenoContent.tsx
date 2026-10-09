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
  Award
} from "lucide-react";
import { useState } from "react";
import type { ServicePageData } from "@/data/services";
import es from "@/i18n/locales/es/hilos-colageno.json";
import en from "@/i18n/locales/en/hilos-colageno.json";

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

export function HilosColagenoContent({ service, waLink, lang = "es" }: { service?: ServicePageData; waLink: string; lang?: "es" | "en" }) {
  const content = lang === "es" ? es : en;
  const customWaLink = `https://wa.me/50686907757?text=${encodeURIComponent(
    lang === "es"
      ? "Hola, me interesa agendar una valoración para Hilos de Colágeno en MJ Estética & Wellness Center. ¿Me pueden compartir disponibilidad?"
      : "Hello! I am interested in scheduling a consultation for Collagen Threads at MJ Estética & Wellness Center. Could you please share availability?"
  )}`;

  return (
    <div className="bg-white">
      {/* ── INTRO SECTION ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">{content.hero?.badge}</span>
            </div>
            <p className="text-stone-600 text-lg leading-relaxed mb-6 italic">
              {content.hero?.question}
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              {content.hero?.p1}
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              {content.hero?.p2}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {content.hero?.bullets?.map((item: string, i: number) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-stone-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-stone-50 p-8 border-l-4 border-primary">
               <h3 className="font-serif font-bold text-stone-900 mb-4">{content.hero?.boxTitle}</h3>
               <div className="space-y-2 text-stone-600 text-sm">
                  {content.hero?.boxBullets?.map((b: string, i: number) => (
                    <p key={i} className="flex items-center gap-2">{b}</p>
                  ))}
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT ARE THEY ────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">{content.whatAre?.title}</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              {content.whatAre?.p1}
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              {content.whatAre?.p2}
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              {content.whatAre?.p3}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
             {content.whatAre?.focusItems?.map((item: string, i: number) => (
               <div key={i} className="bg-white p-4 text-center border border-stone-200 shadow-sm rounded-sm">
                  <span className="text-stone-800 font-bold text-xs">{item}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ── IMPROVEMENTS ─────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">{content.improvements?.title}</h2>
            <p className="text-stone-500">{content.improvements?.intro}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
             {content.improvements?.items?.map((item: string, i: number) => (
               <div key={i} className="flex items-center gap-3 p-4 bg-stone-50 border border-stone-100 rounded-sm">
                  <span className="text-stone-700 font-medium text-sm">{item}</span>
               </div>
             ))}
          </div>

          <p className="text-center text-primary font-bold italic text-sm">
            {content.improvements?.note}
          </p>
        </div>
      </section>

      {/* ── BENEFITS SECTION ─────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-8 text-white">{content.benefits?.title}</h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
              {content.benefits?.intro}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-16">
            {content.benefits?.items?.map((item: string, i: number) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.05}}}}
                className="flex items-center gap-4 p-4 border-b border-white/10 group hover:bg-white/5 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <span className="text-white/90 font-medium text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-white/40 italic text-sm">{content.benefits?.closing}</p>
        </div>
      </section>

      {/* ── METHODOLOGY / STEPS ──────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-stone-900">{content.steps?.title}</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">{content.steps?.subtitle}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {content.steps?.items?.map((step: { step: string; title: string; desc: string }, i: number) => (
              <div key={i} className="relative bg-white p-8 border border-stone-200 shadow-sm group">
                <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block font-sans">{step.step}</span>
                <h4 className="text-lg font-serif font-bold text-stone-900 mb-4 leading-tight">{step.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-stone-600 text-xs font-bold uppercase tracking-widest">
             {content.steps?.meta?.map((m: string, i: number) => (
               <span key={i} className="flex items-center gap-2">{m}</span>
             ))}
          </div>
        </div>
      </section>

      {/* ── TARGET AUDIENCE ──────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">{content.targetAudience?.title}</h2>
            <p className="text-stone-500 mb-12">{content.targetAudience?.intro}</p>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {content.targetAudience?.items?.map((item: string, i: number) => (
                <span key={i} className="px-6 py-3 bg-stone-50 border border-stone-200 text-stone-800 font-bold rounded-full text-xs shadow-sm">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-stone-400 text-xs italic">{content.targetAudience?.note}</p>
          </motion.div>
        </div>
      </section>

      {/* ── PHILOSOPHY ───────────────────────────────── */}
      <section className="py-24 bg-stone-50 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">{content.philosophy?.title}</h2>
              <div className="space-y-6 text-stone-600 text-lg leading-relaxed mb-16 max-w-3xl mx-auto">
                <p>{content.philosophy?.p1}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                {content.philosophy?.bullets?.map((item: string, i: number) => (
                   <div key={i} className="p-4 bg-white border border-stone-200 rounded-sm">
                      <span className="text-primary font-bold text-sm">{item}</span>
                   </div>
                ))}
              </div>
              <p className="text-stone-400 text-[10px] font-bold uppercase tracking-widest">{content.philosophy?.tagline}</p>
           </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900">{content.testimonials?.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.testimonials?.items?.map((text: string, i: number) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.1}}}}
                className="bg-stone-50 p-8 border border-stone-100 relative"
              >
                <Quote className="w-8 h-8 text-primary/10 absolute top-4 right-4" />
                <p className="text-stone-600 mb-6 leading-relaxed italic text-sm">{text}</p>
                <p className="text-primary text-[10px] font-bold tracking-widest uppercase">— MJ Patient</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ───────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12 text-center">
            <h2 className="text-4xl font-serif font-bold text-stone-900">{content.faqs?.title}</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="border-t border-stone-200">
            {content.faqs?.items?.map((item: { q: string; a: string }, i: number) => (
              <motion.div key={i} variants={fadeUp}>
                <FaqItem question={item.q} answer={item.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROGRAMS SECTION ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-900 text-white p-12 relative overflow-hidden">
             <div className="relative z-10">
               <h2 className="text-3xl font-serif font-bold mb-10 text-center text-white">{content.programs?.title}</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 text-sm">
                 <div className="space-y-4">
                   {content.programs?.items?.slice(0, 2).map((item: string, i: number) => (
                     <p key={i} className="font-medium">{item}</p>
                   ))}
                 </div>
                 <div className="space-y-4">
                   {content.programs?.items?.slice(2).map((item: string, i: number) => (
                     <p key={i} className="font-medium">{item}</p>
                   ))}
                 </div>
               </div>
               <div className="border-t border-white/10 pt-10 flex flex-col items-center text-center">
                 <p className="text-white/50 text-xs uppercase tracking-widest font-bold">{content.programs?.note}</p>
               </div>
             </div>
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">{content.whyUs?.title}</h2>
            <p className="text-stone-600 text-lg mb-12">{content.whyUs?.subtitle}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
              {content.whyUs?.items?.map((item: string, i: number) => (
                <div key={i} className="bg-white p-6 border border-stone-200 flex flex-col items-center text-center">
                   <span className="text-stone-800 font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-stone-600 italic">{content.whyUs?.closing}</p>
          </motion.div>
        </div>
      </section>

      {/* ── LEAD MAGNET ──────────────────────────────── */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-white/60 text-xs font-bold tracking-[0.4em] uppercase mb-4">{content.freeGuide?.badge}</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{content.freeGuide?.title}</h2>
              <p className="text-2xl font-serif mb-10 italic">{content.freeGuide?.subtitle}</p>

              <div className="max-w-md mx-auto bg-white p-10 text-stone-900 shadow-2xl">
                 <p className="text-sm text-stone-500 leading-relaxed mb-8">{content.freeGuide?.learnTitle}</p>

                 <div className="space-y-3 mb-10 text-left">
                   {content.freeGuide?.items?.map((item: string, i: number) => (
                     <div key={i} className="flex items-center gap-2">
                       <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                       <span className="text-[10px] font-bold text-stone-700">{item}</span>
                     </div>
                   ))}
                 </div>

                 <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-10">{content.freeGuide?.ctaText}</p>

                 <a
                    href={customWaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-stone-900 text-white py-4 font-bold tracking-widest uppercase hover:bg-primary transition-colors text-xs"
                 >
                    <MessageCircle className="w-4 h-4" />
                    {content.freeGuide?.ctaBtn}
                 </a>
              </div>
           </motion.div>
        </div>
        <Sparkles className="absolute -bottom-20 -left-20 w-64 h-64 text-white/5 rotate-12" />
      </section>

      {/* ── FINAL CTA ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">{content.finalCta?.title}</h2>
            <p className="text-stone-600 text-lg mb-12 max-w-2xl mx-auto">
              {content.finalCta?.desc}
            </p>

            <div className="bg-stone-50 p-10 border border-stone-200 mb-12">
               <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">{content.finalCta?.heading}</h3>
               <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm font-bold text-stone-700">
                  {content.finalCta?.bullets?.map((b: string, i: number) => (
                    <span key={i}>{b}</span>
                  ))}
               </div>
            </div>

            <a
              href={customWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all text-xs"
            >
              <MessageCircle className="w-5 h-5" />
              {content.finalCta?.cta}
            </a>

            <p className="mt-12 text-stone-400 text-[10px] font-bold tracking-widest uppercase">
              {content.finalCta?.footerTagline}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
