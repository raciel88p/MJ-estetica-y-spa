import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Instagram,
  Target,
  ShieldCheck,
  Zap,
  MapPin,
  Clock,
  UserCheck,
  Star,
  Award
} from "lucide-react";
import { useState } from "react";
import es from "@/i18n/locales/es/ojeras.json";
import en from "@/i18n/locales/en/ojeras.json";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as any } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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

export function OjerasServiceContent({ waLink, lang = "es" }: { waLink: string; lang?: "es" | "en" }) {
  const content = lang === "es" ? es : en;
  return (
    <div className="bg-white">
      {/* ── SECCIÓN 2: PROBLEMA (PAS) ────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
              {content.problem.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              {content.problem.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.1 } } }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-red-500 text-xs">✕</span>
                  </div>
                  <p className="text-stone-600 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
            <div className="bg-white p-8 border border-stone-200 shadow-sm flex items-center">
              <p className="text-stone-600 text-lg leading-relaxed italic">
                {content.problem.footer}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 3: SOLUCIÓN ──────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{content.solution.label}</p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              {content.solution.title}
            </h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto">
              <p dangerouslySetInnerHTML={{ __html: content.solution.p1 }} />
              <p>
                {content.solution.p2}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 4: BENEFICIOS ─────────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold mb-4 text-white">{content.benefits.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {content.benefits.items.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.05 } } }}
                className="flex items-center gap-4 p-4 border-b border-white/10 group hover:bg-white/5 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-white/90 font-medium text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 5: ¿QUÉ ES LA CARBOXITERAPIA? ──────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
                {content.howItWorks.title}
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                {content.howItWorks.p1}
              </p>
              <p className="text-stone-700 font-bold mb-6">{content.howItWorks.p2}</p>
              <div className="space-y-3">
                {content.howItWorks.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-stone-600 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
               <div className="aspect-[4/5] bg-stone-100 overflow-hidden rounded-sm">
                  <img src="/images/acido-hialuronico-bg.webp" alt="Tratamiento de Carboxiterapia para Ojeras" className="w-full h-full object-cover" />
               </div>
               <div className="absolute -bottom-6 -left-6 bg-primary p-8 shadow-xl hidden sm:block">
                  <Zap className="w-8 h-8 text-white" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 6: ¿PARA QUIÉN? ───────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
              {content.idealFor.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.idealFor.items.map((item, i) => (
              <div key={i} className="bg-white p-6 border border-stone-200 flex items-center gap-4 group hover:border-primary transition-colors">
                <Target className="w-5 h-5 text-primary shrink-0" />
                <span className="text-stone-700 font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 7: AUTORIDAD LOCAL ────────────────── */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">
              {content.whyUs.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="grid grid-cols-1 gap-4">
               {content.whyUs.items.map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                   <Sparkles className="w-4 h-4 text-primary shrink-0" />
                   <span className="text-stone-700 font-medium">{item}</span>
                 </div>
               ))}
            </div>
            <div className="bg-stone-50 p-8 flex items-center justify-center">
               <p className="text-stone-600 text-center leading-relaxed italic">
                 {content.whyUs.footer}
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 8: ZONAS QUE ATENDEMOS (SEO LOCAL) ── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">
                {content.coverage.title}
              </h2>
              <p className="text-stone-600 mb-8 leading-relaxed">
                {content.coverage.p1}
              </p>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                {content.coverage.zones.map((zona, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="text-stone-700 text-sm font-medium">{zona}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="bg-white p-10 border border-stone-200 shadow-sm text-center">
               <p className="text-stone-600 text-lg leading-relaxed mb-8">
                 {content.coverage.footer}
               </p>
               <a
                  href={waLink}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 font-bold tracking-widest uppercase hover:bg-stone-900 transition-colors text-xs"
               >
                  <MessageCircle className="w-4 h-4" />
                  {content.coverage.cta}
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 9: PROCESO ────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-stone-900">{content.firstVisit.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.firstVisit.items.map((step, i) => (
              <div key={i} className="relative bg-stone-50 p-8 border border-stone-100 group hover:border-primary transition-colors">
                <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block font-sans">{step.s}</span>
                <h4 className="text-lg font-serif font-bold text-stone-900 mb-4 leading-tight">{step.t}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 10: LEAD MAGNET ──────────────────── */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-white/60 text-xs font-bold tracking-[0.4em] uppercase mb-4">{content.leadMagnet.label}</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{content.leadMagnet.title}</h2>
              <p className="text-2xl font-serif mb-10 italic">{content.leadMagnet.p1}</p>

              <div className="max-w-xl mx-auto bg-white p-10 text-stone-900 shadow-2xl">
                 <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-4">{content.leadMagnet.keywordLabel}</p>
                 <p className="text-5xl font-serif font-bold text-primary mb-10 underline decoration-stone-200 uppercase tracking-widest">{content.leadMagnet.keyword}</p>
                 <p className="text-sm text-stone-500 leading-relaxed mb-8 font-medium italic">{content.leadMagnet.p2}</p>

                 <div className="grid grid-cols-1 gap-y-3 mb-10 text-left max-w-xs mx-auto">
                   {content.leadMagnet.items.map((item, i) => (
                     <div key={i} className="flex items-center gap-3">
                       <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                       <span className="text-sm font-bold text-stone-700">{item}</span>
                     </div>
                   ))}
                 </div>

                 <a
                    href={waLink}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-stone-900 text-white py-5 font-bold tracking-widest uppercase hover:bg-primary transition-colors text-xs"
                 >
                    <MessageCircle className="w-5 h-5" />
                    {content.leadMagnet.cta}
                 </a>
              </div>
           </motion.div>
        </div>
        <Sparkles className="absolute -bottom-20 -left-20 w-64 h-64 text-white/5 rotate-12" />
      </section>

      {/* ── SECCIÓN 11: FAQ SECTION ──────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-serif font-bold text-stone-900">{content.faq.title}</h2>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="border-t border-stone-200"
          >
            {content.faq.items.map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <FaqItem question={item.q} answer={item.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 12: CTA FINAL ────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              {content.finalCta.title}
            </h2>
            <p className="text-stone-600 text-lg mb-12 max-w-2xl mx-auto">
              {content.finalCta.p1}
            </p>

            <div className="bg-stone-50 p-10 border border-stone-200 mb-12 flex flex-col md:flex-row items-center justify-center gap-12">
               <div className="text-left">
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">{content.finalCta.location}</h3>
                  <p className="text-stone-500 text-sm">{content.finalCta.subLocation}</p>
               </div>
               <div className="flex flex-col gap-4">
                  <a
                    href={waLink}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all text-xs"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {content.finalCta.cta1}
                  </a>
                  <a
                    href={waLink}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border border-stone-900 text-stone-900 px-10 py-4 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-all text-xs"
                  >
                    <Star className="w-4 h-4" />
                    {content.finalCta.cta2}
                  </a>
               </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
