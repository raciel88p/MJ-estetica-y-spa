import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Instagram,
  Clock,
  Quote,
  Wind
} from "lucide-react";
import { useState } from "react";
import type { ServicePageData } from "@/data/services";
import es from "@/i18n/locales/es/vendas-frias.json";
import en from "@/i18n/locales/en/vendas-frias.json";

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

export function VendasFriasContent({ waLink, lang = "es" }: { service: ServicePageData; waLink: string; lang?: "es" | "en" }) {
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
            <p className="text-stone-600 text-lg leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: content.intro.p1 }} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.intro.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-stone-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-stone-50 border-l-4 border-primary">
              <p className="text-xl text-stone-900 font-serif leading-tight">
                {content.intro.box.title}
              </p>
              <p className="mt-4 text-stone-600 leading-relaxed">
                {content.intro.box.p1}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CORE DESCRIPTION ─────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              {content.core.p1}
            </p>
            <p className="text-stone-600 text-lg leading-relaxed font-medium">
              {content.core.p2}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {content.core.items.map((item, i) => (
              <div key={i} className="bg-white p-4 border border-stone-200 shadow-sm rounded-sm text-center">
                <span className="text-stone-800 font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS SECTION ──────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">{content.whatIs.title}</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              {content.whatIs.p1}
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              {content.whatIs.p2}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {content.whatIs.items.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-stone-50 rounded-sm">
                <span className="text-stone-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center text-primary font-bold italic">
            {content.whatIs.footer}
          </motion.p>
        </div>
      </section>

      {/* ── BENEFITS SECTION ─────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-8 text-white">{content.benefits.title}</h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              {content.benefits.desc}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {content.benefits.items.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.05}}}}
                className="flex items-center gap-4 p-4 border-b border-stone-100 group hover:bg-stone-800 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <span className="text-orange-pastel font-medium text-sm">{item}</span>
              </motion.div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.recommended.items.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp}
                className="bg-stone-50 p-8 border border-stone-100 hover:border-primary/30 transition-all"
              >
                <h3 className="font-serif font-bold text-stone-900 mb-4 h-12 flex items-center leading-tight">{item.t}</h3>
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
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-stone-900">{content.methodology.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.methodology.items.map((step, i) => (
              <div key={i} className="relative bg-white p-8 border border-stone-200 shadow-sm group">
                <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block font-sans">{step.s}</span>
                <h4 className="text-lg font-serif font-bold text-stone-900 mb-4 leading-tight">{step.t}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8">
            {content.methodology.stats.map((stat, i) => {
              const icons = [<Clock className="w-5 h-5 text-primary" />, <Wind className="w-5 h-5 text-primary" />, <Sparkles className="w-5 h-5 text-primary" />];
              return (
              <div key={i} className="flex items-center gap-2 text-stone-700 font-medium">
                {icons[i]}
                <span>{stat}</span>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">{content.philosophy.title}</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-12">
              {content.philosophy.p1}
            </p>
            <p className="text-stone-400 text-[10px] uppercase tracking-widest mb-10 font-bold">{content.philosophy.label}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
              {content.philosophy.items.map((item, i) => (
                <div key={i} className="p-4 border border-stone-100 text-stone-800 font-medium text-sm">
                   {item}
                </div>
              ))}
            </div>
            <div className="p-10 bg-primary/5 border border-primary/20 rounded-sm">
               <p className="text-2xl font-serif text-stone-900 mb-4">{content.philosophy.footerTitle}</p>
               <p className="text-xl font-serif text-primary italic font-bold">{content.philosophy.footerDesc}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SENSATIONS ───────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">{content.sensations.title}</h2>
            <p className="text-stone-500 mb-12">{content.sensations.desc}</p>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {content.sensations.items.map((item, i) => (
                <span key={i} className="px-6 py-3 bg-white border border-stone-200 text-stone-800 font-bold rounded-full text-sm shadow-sm">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-stone-400 text-xs italic">{content.sensations.footer}</p>
          </motion.div>
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
                <p className="text-primary text-[10px] font-bold tracking-widest uppercase">— {content.testimonials.badge}</p>
              </motion.div>
            ))}
          </div>
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

      {/* ── PACKAGES & PRICES ────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-900 text-white p-12 relative overflow-hidden">
             <div className="relative z-10">
               <h2 className="text-3xl font-serif font-bold mb-10 text-center text-white">{content.packages.title}</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                 <div className="space-y-4">
                   {content.packages.items.slice(0, 2).map((item, i) => (
                     <p key={i} className="text-lg font-medium">{item}</p>
                   ))}
                 </div>
                 <div className="space-y-4">
                   {content.packages.items.slice(2, 4).map((item, i) => (
                     <p key={i} className="text-lg font-medium">{item}</p>
                   ))}
                 </div>
               </div>
               <div className="border-t border-stone-200 pt-10 flex flex-col items-center">
                 <p className="text-2xl font-serif text-primary font-bold mb-2">{content.packages.footer}</p>
                 <p className="text-stone-400 text-xs uppercase tracking-widest font-bold">{content.packages.subFooter}</p>
               </div>
             </div>
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">{content.whyUs.title}</h2>
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-12">{content.whyUs.label}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left max-w-2xl mx-auto mb-16">
              {content.whyUs.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                   <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                   <span className="text-stone-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-stone-600 italic">
              {content.whyUs.footer}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── LOCATION ─────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-8">{content.location.title}</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {content.location.items.map((item, i) => (
                <span key={i} className="text-stone-600 font-medium text-sm">{item}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LEAD MAGNET ──────────────────────────────── */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-white/60 text-xs font-bold tracking-[0.4em] uppercase mb-4">{content.leadMagnet.label}</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{content.leadMagnet.title}</h2>
              <p className="text-2xl font-serif mb-10 italic">{content.leadMagnet.desc}</p>
              <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
                {content.leadMagnet.p1}
              </p>

              <div className="max-w-md mx-auto bg-white p-10 text-stone-900 shadow-2xl">
                 <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-4">{content.leadMagnet.keywordLabel}</p>
                 <p className="text-5xl font-serif font-bold text-primary mb-10 underline decoration-stone-200 uppercase tracking-widest">{content.leadMagnet.keyword}</p>
                 <p className="text-sm text-stone-500 leading-relaxed mb-10">{content.leadMagnet.footer}</p>
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
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">{content.final.title}</h2>
            <div className="space-y-2 mb-12">
               <p className="text-xl text-stone-600 italic">{content.final.p1}</p>
               <p className="text-xl text-stone-600 italic">{content.final.p2}</p>
               <p className="text-xl text-stone-600 italic font-bold">{content.final.p3}</p>
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
