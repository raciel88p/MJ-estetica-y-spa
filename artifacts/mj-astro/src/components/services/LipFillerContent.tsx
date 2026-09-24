import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Check, ArrowRight, Star, HelpCircle, Sparkles } from 'lucide-react';
import es from '@/i18n/locales/es/lip-filler.json';
import en from '@/i18n/locales/en/lip-filler.json';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
};

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-primary transition-colors"
      >
        <span className="text-lg font-serif font-bold text-stone-900">{question}</span>
        <HelpCircle className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180 text-primary' : 'text-stone-300'}`} />
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-stone-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export const LipFillerContent = ({ waLink, lang = 'es' }: { waLink: string; lang?: 'es' | 'en' }) => {
  const content = lang === 'es' ? es : en;

  return (
    <>
      {/* ── INTRO / PHILOSOPHY ────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              {content.hero?.p1}
            </h2>
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed max-w-3xl mx-auto">
              <p>{content.hero?.p2}</p>
              <p>{content.hero?.p3}</p>
              <p className="italic">{content.hero?.quote}</p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {content.hero?.bullets?.map((item: string, i: number) => (
                <div key={i} className="flex items-center gap-3 bg-stone-50 p-4 border border-stone-100 rounded-sm">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-stone-800 font-semibold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LEAD MAGNET ────────────────────────────────── */}
      <section className="py-16 bg-[#040f19] text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-block bg-primary/20 text-primary text-[10px] font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-6 border border-primary/30">
              {content.leadMagnet?.label}
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-white">{content.leadMagnet?.title}</h3>
            <p className="text-xl md:text-2xl font-serif italic text-stone-300 mb-8 leading-relaxed">
              "{content.leadMagnet?.subtitle}"
            </p>
            <p className="text-stone-400 mb-10 max-w-2xl mx-auto">
              {content.leadMagnet?.desc}
            </p>
            <div className="space-y-6">
              <p className="text-lg font-medium">{content.leadMagnet?.cta}</p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 font-bold tracking-[0.2em] uppercase hover:bg-primary/90 transition-all rounded-sm"
              >
                <MessageCircle className="w-5 h-5" />
                {lang === 'es' ? 'QUIERO MI GUÍA GRATUITA' : 'REQUEST YOUR FREE GUIDE'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT IS IT? ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">{content.whatIs?.title}</h2>
              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p>{content.whatIs?.p1}</p>
                <p>{content.whatIs?.p2}</p>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-50 p-10 border border-stone-100 rounded-sm">
              <h4 className="text-xl font-serif font-bold text-stone-900 mb-6">{content.whatIs?.subtitle}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.whatIs?.bullets?.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-primary font-bold">✔</span>
                    <span className="text-stone-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-primary font-serif italic font-medium">{content.whatIs?.conclusion}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── NATURAL RESULTS? ───────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-white">{content.natural?.title}</h2>
            <p className="text-xl md:text-2xl font-serif text-stone-300 italic mb-12">{content.natural?.p1}</p>
            <div className="bg-white/5 border border-white/10 p-10 rounded-sm text-left backdrop-blur-sm max-w-3xl mx-auto">
              <p className="text-stone-300 leading-relaxed mb-10">{content.natural?.p2}</p>
              <p className="text-white font-bold mb-6">{content.natural?.subtitle}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
                {content.natural?.bullets?.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-stone-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-primary font-medium border-t border-white/10 pt-8 text-center">
                {content.natural?.conclusion}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT CAN IT IMPROVE? ───────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">{content.enhance?.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {content.enhance?.items?.map((item: { t: string; d: string }, i: number) => (
              <div key={i} className="p-8 rounded-sm border border-stone-100 bg-stone-50">
                <h4 className="text-xl font-serif font-bold text-stone-900 mb-4">{item.t}</h4>
                <p className="text-stone-600 leading-relaxed text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS LIST ─────────────────────────────── */}
      <section className="py-24 bg-[#071e2e] text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-white">{content.benefits?.title}</h2>
              <div className="grid grid-cols-1 gap-4">
                {content.benefits?.items?.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-stone-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="md:w-1/3">
              <div className="aspect-[4/5] bg-white/5 border border-white/10 rounded-sm relative p-8 flex flex-col justify-center text-center">
                 <p className="text-4xl font-serif mb-6 text-primary">✨</p>
                 <h4 className="text-2xl font-serif font-bold mb-4 text-white">{lang === 'es' ? 'Belleza Personalizada' : 'Personalized Beauty'}</h4>
                 <p className="text-stone-400 leading-relaxed text-sm italic">
                   {lang === 'es' ? 'Diseñamos el resultado que mejor se adapte a tus rasgos y deseos individuales.' : 'We design results tailored to your features and individual goals.'}
                 </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OBJECTIVES ─────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">{content.objectives?.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.objectives?.items?.map((obj: { t: string; d: string; b: string[]; cta: string }, i: number) => (
              <div key={i} className="bg-stone-50 p-8 rounded-sm border border-stone-100 flex flex-col h-full">
                <h4 className="text-xl font-serif font-bold text-stone-900 mb-4">{obj.t}</h4>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">{obj.d}</p>
                <div className="mb-8 flex-1">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-primary mb-4">{lang === 'es' ? 'Beneficios' : 'Benefits'}</p>
                  <ul className="space-y-3">
                    {obj.b.map((b: string, j: number) => (
                      <li key={j} className="flex items-center gap-2 text-stone-800 text-sm font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-primary font-bold text-sm hover:translate-x-1 transition-transform border-t border-stone-200 pt-6 group">
                  <span>👉 {obj.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STEPS ─────────────────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">{content.steps?.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {content.steps?.items?.map((step: { s: string; t: string; d: string }, i: number) => (
              <div key={i} className="relative group">
                <span className="text-base font-bold tracking-widest text-primary uppercase mb-2 block">{step.s}</span>
                <h4 className="text-xl font-serif font-bold mb-4 text-white">{step.t}</h4>
                <p className="text-stone-400 text-sm leading-relaxed">{step.d}</p>
                {i < 3 && <ArrowRight className="hidden md:block absolute -right-4 top-8 w-4 h-4 text-white/20 group-hover:text-primary transition-colors" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IS IT FOR? ────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-50 p-12 md:p-16 rounded-sm border border-stone-200 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
             <h2 className="text-3xl font-serif font-bold text-stone-900 mb-10">{content.forWhom?.title}</h2>
             <p className="text-stone-600 mb-8 font-medium">{content.forWhom?.p1}</p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {content.forWhom?.bullets?.map((item: string, i: number) => (
                 <div key={i} className="flex items-center gap-3">
                   <Check className="w-5 h-5 text-primary shrink-0" />
                   <span className="text-stone-800 font-semibold">{item}</span>
                 </div>
               ))}
             </div>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="py-24 bg-white border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900">{content.testimonials?.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.testimonials?.items?.map((test: { q: string; s: number }, i: number) => (
              <div key={i} className="bg-stone-50 p-8 rounded-sm border border-stone-100 flex flex-col text-center relative">
                <div className="flex justify-center gap-1 mb-6 text-primary">
                  {[...Array(test.s)].map((_, j) => <Star key={j} className="w-4 h-4 fill-primary" />)}
                </div>
                <p className="italic text-stone-600 text-sm leading-relaxed mb-6">"{test.q}"</p>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rotate-45 border-r border-b border-stone-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-stone-900">{content.faqs?.title}</h2>
          </motion.div>
          <div className="bg-white p-8 md:p-12 shadow-sm border border-stone-200">
            {content.faqs?.items?.map((item: { q: string; a: string }, i: number) => (
              <FaqItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY MJ? ───────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-900 p-10 md:p-16 shadow-2xl rounded-sm text-white">
            <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-3 text-white">
              <span className="text-2xl text-primary">✨</span> {content.whyUs?.title}
            </h2>
            <div className="space-y-6 mb-12">
              <p className="text-stone-300 leading-relaxed font-serif text-xl italic">
                "{content.whyUs?.quote}"
              </p>
              <p className="text-white font-medium">{content.whyUs?.p1}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
              {content.whyUs?.items?.map((item: string, i: number) => (
                <div key={i} className="flex items-center gap-3 border-b border-white/5 pb-3">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-medium text-stone-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">{content.final?.title}</h2>
            <p className="text-lg text-stone-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              {content.final?.subtitle}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-lg mx-auto">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 font-bold tracking-[0.1em] uppercase hover:bg-[#1fb355] transition-all rounded-sm shadow-sm">
                 <MessageCircle className="w-5 h-5" />
                 {content.final?.cta2}
              </a>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-primary text-white py-4 font-bold tracking-[0.1em] uppercase hover:bg-primary/90 transition-all rounded-sm shadow-sm">
                 <Sparkles className="w-5 h-5" />
                 {content.final?.cta1}
              </a>
            </div>
            <div className="space-y-2 text-stone-500 font-serif italic mb-10">
               <p>💋 {content.final?.motto}</p>
            </div>
            <div className="pt-8 border-t border-stone-200">
               <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">{content.final?.brand}</h3>
               <p className="text-stone-500 text-sm tracking-widest uppercase">{content.final?.location}</p>
               <p className="text-stone-400 text-xs mt-1">{content.final?.tagline}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
