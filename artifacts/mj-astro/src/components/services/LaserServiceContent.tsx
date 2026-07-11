import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, Star, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import type { ServicePageData } from "@/data/services";
import es from "@/i18n/locales/es/laser-service.json";
import en from "@/i18n/locales/en/laser-service.json";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as any } },
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

export function LaserServiceContent({ service, waLink, lang = "es" }: { service: ServicePageData; waLink: string; lang?: "es" | "en" }) {
  const content = lang === "es" ? es : en;

  return (
    <>
      {/* Qué nos diferencia */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-primary/30" />
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">{content.diff.label}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-10 leading-tight">
              {content.diff.title.split(' ')[0]} {content.diff.title.split(' ')[1]} <br />
              <span className="text-primary italic font-light">{content.diff.title.split(' ').slice(2).join(' ')}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {content.diff.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-stone-50 p-4 border border-stone-100 group hover:border-primary/20 transition-all">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-stone-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center md:text-left bg-stone-900 p-8 md:p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4">{content.diff.ctaTitle}</p>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">{content.diff.ctaSubtitle}</h3>
                <p className="text-white mb-10 max-w-lg leading-relaxed text-base">
                  {content.diff.ctaDesc}
                </p>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 font-bold tracking-[0.15em] uppercase hover:bg-primary/90 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  {content.diff.cta}
                </a>
              </div>
              <Star className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5 rotate-12" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problemas del vello & Guía Gratuita */}
      <section className="py-24 bg-stone-50 border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-8 text-center">
              {content.problems.title.split('no es solo')[0]} <br className="hidden md:block" />
              <span className="text-primary">no es solo {content.problems.title.split('no es solo')[1]}</span>
            </h3>
            <p className="text-stone-500 text-center mb-12">{content.problems.subtitle}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {content.problems.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-5 border border-stone-100 hover:border-primary/30 hover:shadow-sm transition-all">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-stone-700 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary p-10 md:p-16 text-white text-center rounded-sm shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 border border-white/20">
                {content.leadMagnet.label}
              </span>
              <p className="text-white/80 mb-2 font-medium">{content.leadMagnet.intro}</p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">{content.leadMagnet.title.split(' y ')[0]} y <br /> <br /> {content.leadMagnet.title.split(' y ')[1]}</h2>
              <p className="text-white mb-6 font-bold uppercase tracking-widest text-xs">{content.leadMagnet.discover}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12 max-w-3xl mx-auto">
                {content.leadMagnet.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-sm md:text-base text-white/90 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/60 mb-8 font-medium italic">{content.leadMagnet.footer}</p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-100 transition-all shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                {content.leadMagnet.cta}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Qué es & Para quién */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">{content.whatIs.title}</h2>
              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p>
                  {content.whatIs.p1}
                </p>
                <p>
                  {content.whatIs.p2}
                </p>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">{content.forWhom.title}</h2>
              <ul className="space-y-4">
                {content.forWhom.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-600 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qué problemas ayuda a mejorar */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">{content.benefits.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {content.benefits.items.map((item, i) => (
              <div key={i} className="bg-stone-900 p-8 hover:bg-stone-800 transition-colors">
                <h4 className="text-primary font-bold mb-3 text-base">{item.t}</h4>
                <p className="text-white/80 text-base leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-16 border-t border-white/10">
            <p className="text-white uppercase tracking-widest text-base font-bold mb-8 text-center">{content.benefits.resultsLabel}</p>
            <p className="text-white/60 text-base mb-8 text-center">{content.benefits.resultsSubtitle}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
               {content.benefits.results.map((text, i) => (
                 <div key={i} className="p-4 border border-white/10 rounded-sm">
                    <p className="text-white text-sm font-medium">{text}</p>
                 </div>
               ))}
            </div>
          </div>
          <p className="mt-8 text-center text-white/40 text-base italic">
            {content.benefits.note}
          </p>
        </div>
      </section>

      {/* Beneficios reales que notarás */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">{content.realBenefits.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 bg-stone-50 p-5 border border-stone-100">
                <span className="text-primary font-bold">✅</span>
                <span className="text-stone-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona (Pasos) */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6 text-center">
               {content.howItWorks.title}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {content.howItWorks.steps.map((step, i) => (
              <div key={i} className="relative">
                <span className="text-base font-bold tracking-widest text-primary uppercase mb-2 block">{step.s}</span>
                <h4 className="text-base font-serif font-bold text-stone-900 mb-4">{step.t}</h4>
                <p className="text-stone-500 text-base leading-relaxed">{step.d}</p>
                {i < 3 && <ArrowRight className="hidden md:block absolute -right-4 top-8 w-4 h-4 text-stone-200" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Corta / Detalles extras */}
      <section className="py-24 bg-white border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">{content.extra.painTitle}</h3>
              <p className="text-stone-600 leading-relaxed">
                {content.extra.painDesc}
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">{content.extra.sessionsTitle}</h3>
              <p className="text-stone-600 leading-relaxed">
                {content.extra.sessionsDesc}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Imagina esto... */}
      <section className="py-24 bg-stone-50 overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-10 uppercase tracking-tight">{content.imagine.title}</h2>
             <div className="space-y-4 mb-12 text-xl md:text-2xl font-serif italic text-stone-600">
                <p>{content.imagine.p1}</p>
                <p>{content.imagine.p2}</p>
                <p>{content.imagine.p3}</p>
             </div>
             <div className="bg-white p-10 shadow-sm border border-stone-200 inline-block text-left max-w-2xl">
               <p className="text-stone-800 font-medium mb-6">{content.imagine.seeking}</p>
               <div className="space-y-4">
                 {content.imagine.items.map((t, i) => (
                   <p key={i} className="text-stone-900 font-bold text-xl">{t}</p>
                 ))}
               </div>
             </div>
           </motion.div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900">{content.testimonials.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.testimonials.items.map((test, i) => (
              <div key={i} className="bg-stone-50 p-8 rounded-sm border border-stone-100 italic text-stone-600 text-sm leading-relaxed relative">
                <span className="absolute top-4 left-4 text-primary text-4xl leading-none opacity-20">“</span>
                {test}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes (Laser) */}
      <section className="py-24 bg-stone-50 border-y border-stone-100">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-stone-900">{content.faqs.title}</h2>
          </motion.div>
          <div className="space-y-4">
            {service.faq?.map((item, i) => (
              <FaqItem key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegir MJ */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-10 md:p-16 shadow-sm border border-stone-100">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 flex items-center gap-3">
              <span className="text-2xl text-primary">💖</span> {content.whyMJ.title}
            </h2>
            <p className="text-stone-600 mb-10 leading-relaxed font-serif text-lg italic">
              {content.whyMJ.subtitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
              {content.whyMJ.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3 border-b border-stone-50 pb-3">
                  <span className="text-primary font-bold">✔</span>
                  <span className="font-medium text-stone-800 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ubicación y contacto */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
               <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">{content.contact.title}</h2>
               <ul className="space-y-6">
                 {content.contact.items.map((item, i) => (
                   <li key={i} className="flex items-center gap-4 text-stone-700 font-medium">
                     <span className="text-xl">{item.i}</span>
                     {item.t}
                   </li>
                 ))}
               </ul>
             </motion.div>
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-900 p-8 text-white rounded-sm">
                <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4">{content.contact.ctaLabel}</p>
                <h3 className="text-2xl font-serif font-bold mb-6 leading-tight text-white">{content.contact.ctaTitle}</h3>
                <p className="text-white mb-8 leading-relaxed italic text-base">
                  {content.contact.ctaDesc}
                </p>
                <div className="space-y-2 mb-10 text-base font-medium text-white">
                  {content.contact.ctaSteps.map((step, i) => (
                    <p key={i}>{step}</p>
                  ))}
                </div>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center gap-3 bg-primary text-white py-4 font-bold tracking-[0.15em] uppercase hover:bg-primary/90 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  {content.contact.cta}
                </a>
             </motion.div>
           </div>
        </div>
      </section>
    </>
  );
}
