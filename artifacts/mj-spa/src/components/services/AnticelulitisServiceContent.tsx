import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  Instagram,
  Quote,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import type { ServicePageData } from '../../data/services';
import es from '@/i18n/locales/es/anticelulitis.json';
import en from '@/i18n/locales/en/anticelulitis.json';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
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

interface Props {
  service: ServicePageData;
  waLink: string;
  lang?: "es" | "en";
}

export default function AnticelulitisServiceContent({ service, waLink, lang = "es" }: Props) {
  const content = lang === "es" ? es : en;

  return (
    <div className="bg-white">
      {/* ── INTRO SECTION ────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              {content.intro.title.split('lisa, firme y uniforme?')[0]} <span className="italic font-light text-primary">{lang === 'es' ? 'lisa, firme y uniforme?' : 'smoother, firmer and more uniform?'}</span>
            </h2>
            <p className="text-xl text-stone-600 font-serif italic mb-12">
              {content.intro.subtitle}
            </p>
            <div className="space-y-6 text-stone-600 leading-relaxed text-lg max-w-3xl mx-auto">
              <p>
                {content.intro.p1}
              </p>
              <p>
                {content.intro.p2}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LEAD MAGNET (GIFT) ────────────────────────── */}
      <section className="py-24 bg-stone-50 border-y border-stone-100 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-10 md:p-16 shadow-sm border border-stone-100 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">{content.leadMagnet.label}</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">
                {content.leadMagnet.title.split('ANTICELULITIS')[0]} <span className="text-primary uppercase tracking-tighter">{content.leadMagnet.word}</span>
              </h2>
              <p className="text-stone-600 text-lg mb-8 italic">
                {content.leadMagnet.subtitle}
              </p>
              <p className="text-2xl font-serif font-bold text-stone-900 mb-8">
                {content.leadMagnet.guideTitle}
              </p>
              <p className="text-stone-500 mb-0">
                {content.leadMagnet.desc}
              </p>
            </div>
            <div className="shrink-0 w-full md:w-80">
              <div className="bg-stone-900 p-8 text-center text-white rounded-sm">
                <p className="text-primary text-[10px] font-bold tracking-widest uppercase mb-6">{content.leadMagnet.ctaLabel}</p>
                <p className="text-sm text-white/70 mb-8 leading-relaxed">{content.leadMagnet.ctaDesc}</p>
                <a
                  href="https://www.instagram.com/mj_fisioestetica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center gap-2 bg-primary text-white py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-primary/90 transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  {content.leadMagnet.cta}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PAIN POINTS (IDENTIFY) ────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">{content.painPoints.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.painPoints.items.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.05}}}}
                className="flex items-start gap-4 p-6 bg-stone-50 border border-stone-100"
              >
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-stone-700 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-12 text-center text-stone-600 italic text-lg">
            {content.painPoints.closing}
          </motion.p>
        </div>
      </section>

      {/* ── WHAT IS IT ────────────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{content.whatIs.label}</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10 text-white">{content.whatIs.title}</h2>
            <div className="space-y-8 text-white/80 text-lg leading-relaxed max-w-3xl">
              <p>
                {content.whatIs.p1}
              </p>
              <p className="p-8 border-l-2 border-primary bg-white/5 italic">
                {content.whatIs.p2}
              </p>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* ── BENEFITS ─────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">{content.benefits.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.benefits.items.map((benefit, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.08}}}}
                className="p-8 border border-stone-100 bg-stone-50 hover:bg-white hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500"
              >
                <span className="text-3xl mb-6 block">{benefit.i}</span>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">{benefit.t}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{benefit.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION (IMAGINE) ──────────────────────────── */}
      <section className="py-24 bg-stone-50 overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-10 uppercase tracking-tight">{content.vision.title}</h2>
             <div className="space-y-6 mb-16 text-xl md:text-2xl font-serif italic text-stone-600">
                {content.vision.items.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
             </div>
             <div className="bg-white p-10 shadow-sm border border-stone-200 inline-block text-left max-w-2xl mx-auto">
               <div className="space-y-6">
                 <p className="text-stone-900 font-bold text-2xl border-l-4 border-primary pl-6">{content.vision.closing1}</p>
                 <p className="text-stone-900 font-bold text-2xl border-l-4 border-primary pl-6">{content.vision.closing2}</p>
               </div>
             </div>
           </motion.div>
        </div>
      </section>

      {/* ── WHY RESULTS FAIL ──────────────────────────── */}
      <section className="py-24 bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">{content.failure.title}</h2>
              <p className="text-stone-600 text-lg mb-8 leading-relaxed italic">
                {content.failure.desc1}
              </p>
              <p className="text-stone-600 mb-10 leading-relaxed">
                {content.failure.desc2}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.failure.factors.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-stone-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-10 font-serif font-bold text-xl text-stone-900">
                {content.failure.closing}
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
              <div className="aspect-[4/5] bg-stone-100 overflow-hidden">
                <img
                  src="/images/about-us.webp"
                  alt="Experiencia MJ"
                  className="w-full h-full object-cover grayscale opacity-80"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary p-8 text-white max-w-xs hidden md:block">
                <p className="text-sm font-bold tracking-widest uppercase mb-2">{content.failure.commitmentLabel}</p>
                <p className="text-base italic leading-relaxed">{content.failure.commitmentQuote}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WELLNESS EXPERIENCE ──────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">{content.wellness.title}</h2>
            <p className="text-stone-600 text-lg">{content.wellness.desc}</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {content.wellness.items.map((item, i) => (
              <div key={i} className="bg-white p-6 border border-stone-200 text-center">
                <span className="text-xl mb-3 block">✨</span>
                <p className="text-stone-900 font-bold text-sm uppercase tracking-wide">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-stone-500 italic">{content.wellness.footer}</p>
        </div>
      </section>

      {/* ── STEPS (HOW IT WORKS) ──────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900">{content.howItWorks.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {content.howItWorks.steps.map((step, i) => (
              <div key={i} className="relative">
                <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-4 block">{step.s}</span>
                <h4 className="text-lg font-serif font-bold text-stone-900 mb-4">{step.t}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{step.d}</p>
                {i < 3 && <ArrowRight className="hidden md:block absolute -right-4 top-10 w-4 h-4 text-stone-200" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECOMMENDED FOR ───────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-white">{content.who.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {content.who.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-white/80 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">{content.testimonials.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.testimonials.items.map((text, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.1}}}}
                className="bg-stone-50 p-8 border border-stone-100 relative"
              >
                <Quote className="w-8 h-8 text-primary/10 absolute top-4 right-4" />
                <p className="text-stone-600 mb-6 leading-relaxed italic">“{text}”</p>
                <p className="text-primary text-[10px] font-bold tracking-widest uppercase">— {lang === 'es' ? 'Paciente MJ' : 'MJ Patient'}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE MJ ────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-10 md:p-16 shadow-sm border border-stone-100">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">{content.whyUs.title}</h2>
            <p className="text-stone-600 mb-10 leading-relaxed italic text-lg">
              {content.whyUs.desc}
            </p>
            <p className="text-stone-900 font-bold text-lg mb-10">{content.whyUs.subtitle}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
              {content.whyUs.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3 border-b border-stone-50 pb-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium text-stone-800 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ SECTION ───────────────────────────────── */}
      <section className="py-24 bg-white border-t border-stone-100">
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

      {/* ── FINAL LEAD MAGNET ────────────────────────── */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-white/60 text-xs font-bold tracking-[0.4em] uppercase mb-4">{content.finalLead.label}</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{content.finalLead.title}</h2>
              <p className="text-2xl font-serif mb-10 italic">{content.finalLead.p1}</p>
              <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                {content.finalLead.p2}
              </p>

              <div className="max-w-md mx-auto bg-white p-10 text-stone-900 shadow-2xl">
                 <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-4">{content.finalLead.wordLabel}</p>
                 <p className="text-5xl font-serif font-bold text-primary mb-10 underline decoration-stone-200">“{content.finalLead.word}”</p>
                 <p className="text-sm text-stone-500 leading-relaxed mb-10">{content.finalLead.desc}</p>
                 <a
                    href="https://www.instagram.com/mj_fisioestetica/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-stone-900 text-white py-4 font-bold tracking-widest uppercase hover:bg-primary transition-colors text-xs"
                 >
                    <Instagram className="w-4 h-4" />
                    {content.finalLead.cta}
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
            <p className="text-stone-600 text-lg mb-12 leading-relaxed">{content.finalCta.desc}</p>

            <div className="flex flex-col gap-4 max-w-sm mx-auto">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-5 font-bold tracking-[0.15em] uppercase hover:bg-stone-900 transition-all text-xs"
              >
                <MessageCircle className="w-5 h-5" />
                {content.finalCta.cta1}
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-stone-200 text-stone-600 px-8 py-5 font-bold tracking-[0.15em] uppercase hover:bg-stone-50 transition-all text-xs"
              >
                {content.finalCta.cta2}
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold text-xs uppercase tracking-[0.2em] border-b border-primary/20 pb-1 self-center mt-4 hover:border-primary transition-colors"
              >
                {content.finalCta.cta3}
              </a>
            </div>

            <div className="mt-24 pt-12 border-t border-stone-100">
               <p className="font-serif font-bold text-2xl text-stone-900 mb-2">{content.finalCta.footerTitle}</p>
               <p className="text-stone-500 text-sm">{content.finalCta.footerDesc}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
