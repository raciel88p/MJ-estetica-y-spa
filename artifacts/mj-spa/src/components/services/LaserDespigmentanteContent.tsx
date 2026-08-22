import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Instagram,
  Clock,
  Quote,
  Zap,
  Target,
  ShieldCheck,
  UserCheck,
  Award
} from "lucide-react";
import { useState } from "react";
import type { ServicePageData } from "@/data/services";
import es from "@/i18n/locales/es/laser-despigmentante.json";
import en from "@/i18n/locales/en/laser-despigmentante.json";

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

export function LaserDespigmentanteContent({ service, waLink, lang = "es" }: { service: ServicePageData; waLink: string; lang?: "es" | "en" }) {
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
                  <span className="text-stone-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CORE TECHNOLOGY ──────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              {content.whatIs.title}
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              {content.whatIs.desc}
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              {content.whatIs.desc2}
            </p>
          </motion.div>

          <div className="bg-white p-10 border border-stone-200 shadow-sm">
             <h3 className="text-xl font-serif font-bold text-stone-900 mb-8">{content.whatIs.boxTitle}</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
               {content.whatIs.items.map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                   <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                   <span className="text-stone-700 font-medium text-sm">{item}</span>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* ── MARKETING / PHILOSOPHY ────────────────────── */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-6">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">{content.why.title}</h2>
             <p className="text-stone-600 text-lg leading-relaxed italic mb-12">
               {content.why.intro}
             </p>
           </motion.div>

           <div className="space-y-8 text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto mb-16">
             <p>{content.why.p1}</p>
             <div className="p-8 bg-primary/5 border-l-4 border-primary">
                <p className="text-stone-900 font-bold mb-4">{content.why.p2}</p>
                <p>{content.why.p3}</p>
             </div>
             <p>{content.why.p4}</p>
             <p className="font-bold text-stone-900">{content.why.p4}</p>
             <p>{content.why.p5}</p>
           </div>
        </div>
      </section>

      {/* ── METHODOLOGY ──────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-stone-900">{content.methodology.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.methodology.steps.map((step, i) => (
              <div key={i} className="relative bg-white p-8 border border-stone-200 shadow-sm group">
                <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block font-sans">{step.s}</span>
                <h4 className="text-lg font-serif font-bold text-stone-900 mb-4 leading-tight">{step.t}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS SECTION ─────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-8 text-white">{content.benefits.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {content.benefits.items.map((item, i) => (
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
        </div>
      </section>

      {/* ── RECOMMENDED FOR ──────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">{content.who.title}</h2>
            <p className="text-stone-500">{content.who.desc}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.who.items.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-stone-50 rounded-sm border border-stone-100">
                <Target className="w-4 h-4 text-primary shrink-0" />
                <span className="text-stone-700 font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATOR ───────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">{content.whyUs.title}</h2>
            <p className="text-stone-600 text-lg mb-4">{content.whyUs.p1}</p>
            <p className="text-primary font-bold uppercase tracking-widest text-xs">{content.whyUs.p2}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16">
             {content.whyUs.items.map((item, i) => {
               const icons = [<Zap className="w-5 h-5" />, <Target className="w-5 h-5" />, <ShieldCheck className="w-5 h-5" />, <Award className="w-5 h-5" />, <Sparkles className="w-5 h-5" />, <Clock className="w-5 h-5" />, <UserCheck className="w-5 h-5" />];
               return (
               <div key={i} className="bg-white p-6 border border-stone-200 flex flex-col items-center text-center group hover:border-primary transition-colors">
                  <div className="text-primary mb-4">{icons[i]}</div>
                  <span className="text-stone-800 font-bold text-sm">{item.t}</span>
               </div>
               );
             })}
          </div>

          <p className="text-center text-stone-600 italic max-w-2xl mx-auto leading-relaxed">
            {content.whyUs.closing}
          </p>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900">{content.testimonials.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.testimonials.items.map((text, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.1}}}}
                className="bg-stone-50 p-8 border border-stone-100 relative"
              >
                <Quote className="w-8 h-8 text-primary/10 absolute top-4 right-4" />
                <p className="text-stone-600 mb-6 leading-relaxed italic">{text}</p>
                <p className="text-primary text-[10px] font-bold tracking-widest uppercase">— {content.testimonials.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ───────────────────────────────── */}
      <section className="py-24 bg-stone-50">
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

      {/* ── PROGRAMS SECTION ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-900 text-white p-12 relative overflow-hidden">
             <div className="relative z-10">
               <h2 className="text-3xl font-serif font-bold mb-10 text-center text-white">{content.programs.title}</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                 <div className="space-y-4">
                   {content.programs.items.slice(0,3).map((item, i) => (
                     <p key={i} className="text-lg font-medium">{item}</p>
                   ))}
                 </div>
                 <div className="space-y-4">
                   {content.programs.items.slice(3).map((item, i) => (
                     <p key={i} className="text-lg font-medium">{item}</p>
                   ))}
                 </div>
               </div>
               <div className="border-t border-white/10 pt-10 flex flex-col items-center text-center">
                 <p className="text-white/50 text-xs uppercase tracking-widest font-bold">{content.programs.note}</p>
               </div>
             </div>
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </motion.div>
        </div>
      </section>

      {/* ── LEAD MAGNET ──────────────────────────────── */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-white/60 text-xs font-bold tracking-[0.4em] uppercase mb-4">{content.leadMagnet.label}</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{content.leadMagnet.title}</h2>
              <p className="text-2xl font-serif mb-10 italic">{content.leadMagnet.subtitle}</p>

              <div className="max-w-xl mx-auto bg-white p-10 text-stone-900 shadow-2xl">
                 <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-4">{content.leadMagnet.wordLabel}</p>
                 <p className="text-5xl font-serif font-bold text-primary mb-10 underline decoration-stone-200">“{content.leadMagnet.word}”</p>
                 <p className="text-sm text-stone-500 leading-relaxed mb-8">{content.leadMagnet.desc}</p>

                 <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-10 text-left">
                   {content.leadMagnet.items.map((item, i) => (
                     <div key={i} className="flex items-center gap-2">
                       <CheckCircle2 className="w-3 h-3 text-primary" />
                       <span className="text-[10px] font-bold text-stone-700">{item}</span>
                     </div>
                   ))}
                 </div>

                 <a
                    href="https://www.instagram.com/mj_fisioestetica/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-stone-900 text-white py-4 font-bold tracking-widest uppercase hover:bg-primary transition-colors text-xs"
                 >
                    <Instagram className="w-4 h-4" />
                    {content.leadMagnet.cta}
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
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">{content.finalCta.title}</h2>
            <p className="text-stone-600 text-lg mb-12 max-w-2xl mx-auto">
              {content.finalCta.desc}
            </p>

            <div className="bg-stone-50 p-10 border border-stone-200 mb-12">
               <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">{content.finalCta.location}</h3>
               <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm font-bold text-stone-700">
                  {content.finalCta.items.map((it, i) => (
                    <span key={i}>{it}</span>
                  ))}
               </div>
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all text-xs"
            >
              <MessageCircle className="w-5 h-5" />
              {content.finalCta.cta}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
