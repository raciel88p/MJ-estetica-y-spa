import { motion } from "framer-motion";
import {
  MessageCircle,
  Star,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Sparkles,
  Gift,
  Instagram,
  Check,
  Clock,
  MapPin,
  ChevronDown,
  Quote,
  UserCheck,
  ArrowRight
} from "lucide-react";
import es from "@/i18n/locales/es/rejuvenecimiento-facial.json";
import en from "@/i18n/locales/en/rejuvenecimiento-facial.json";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as any } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function RejuvenecimientoFacialContent({
  waLink,
  faq,
  lang = "es"
}: {
  waLink: string;
  faq?: { question: string; answer: string }[];
  lang?: "es" | "en";
}) {
  const content = lang === "es" ? es : en;
  return (
    <div className="bg-white">
      {/* ── SECCIÓN: INTRODUCCIÓN ────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex flex-col items-center text-center mb-12">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-tight">
                {content.intro.title}
              </h2>
              <p className="text-stone-800 text-xl md:text-2xl font-serif leading-relaxed italic max-w-3xl">
                {content.intro.quote}
              </p>
            </div>

            <div className="space-y-6 text-stone-600 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-16">
              <p>
                {content.intro.p1}
              </p>
              <p className="font-serif italic text-stone-900">
                {content.intro.p2}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16">
              {content.intro.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-stone-50 p-4 border border-stone-100 rounded-sm">
                  <Sparkles className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-stone-700 text-sm font-bold uppercase tracking-tight">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center bg-stone-900 text-white p-10 rounded-sm">
               <h3 className="text-2xl font-serif font-bold mb-6">{content.intro.ctaBox.title}</h3>
               <div className="space-y-4 mb-8">
                  <p className="flex items-center justify-center gap-2">{content.intro.ctaBox.p1}</p>
                  <p className="flex items-center justify-center gap-2">{content.intro.ctaBox.p2}</p>
                  <p className="flex items-center justify-center gap-2">{content.intro.ctaBox.p3}</p>
               </div>
               <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-stone-900 transition-all shadow-xl"
                >
                  <MessageCircle className="w-5 h-5" />
                  {content.intro.ctaBox.cta}
                </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: ¿QUÉ ES? ─────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{content.concept.label}</p>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 uppercase tracking-tighter">{content.concept.title}</h2>
              <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                <p>
                  {content.concept.p1}
                </p>
                <p>
                  {content.concept.p2}
                </p>
                <p className="font-serif italic">
                  {content.concept.p3}
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-white p-10 border border-stone-200 rounded-sm relative shadow-sm"
            >
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-tight text-center">{content.concept.focus.title}</h3>
              <div className="space-y-4">
                {content.concept.focus.items.map((item, i) => (
                   <div key={i} className="flex items-center gap-3 border-b border-stone-100 pb-3 last:border-0">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-stone-700 font-bold uppercase tracking-widest text-xs">{item}</span>
                   </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: ¿QUÉ MEJORA? ─────────────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-5 -translate-y-1/4 translate-x-1/4">
          <Sparkles className="w-96 h-96 text-primary" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{content.results.label}</p>
            <h2 className="text-4xl font-serif font-bold mb-6 uppercase tracking-tighter text-white">{content.results.title}</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">{content.results.desc}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {content.results.items.map((item, i) => (
              <motion.div
                key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-6 rounded-sm hover:bg-white/10 transition-colors flex items-center gap-3"
              >
                <Sparkles className="w-5 h-5 text-primary shrink-0" />
                <span className="text-stone-200 text-xs font-bold uppercase tracking-wide">{item}</span>
              </motion.div>
            ))}
          </div>
          <p className="mt-16 text-center text-primary font-serif text-xl italic text-white">
            {content.results.footer}
          </p>
        </div>
      </section>

      {/* ── SECCIÓN: BENEFICIOS ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
             <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{content.benefits.label}</p>
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-tight">
               {content.benefits.title}
             </h2>
             <div className="space-y-4 text-stone-600 text-lg">
                <p>{content.benefits.p1}</p>
                <p className="font-serif italic font-bold text-stone-900">{content.benefits.p2}</p>
             </div>
          </motion.div>

          <div className="bg-stone-50 p-10 md:p-16 border border-stone-100 rounded-sm">
             <h3 className="text-2xl font-serif font-bold text-stone-900 mb-8 text-center uppercase tracking-tight">{content.benefits.list.title}</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
               {content.benefits.list.items.map((item, i) => (
                 <div key={i} className="flex items-center gap-4">
                   <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                   <span className="text-stone-700 text-sm font-bold uppercase tracking-tight">{item}</span>
                 </div>
               ))}
             </div>
             <p className="mt-12 text-center text-stone-500 font-serif italic text-lg">
                {content.benefits.list.footer}
             </p>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: PROTOCOLOS DISPONIBLES ─────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 text-primary">{content.catalog.label}</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter mb-4">{content.catalog.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.catalog.items.map((item, i) => (
              <motion.div
                key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white p-8 border border-stone-200 rounded-sm shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-4 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                  <div className="space-y-2 mb-8">
                    {item.tags.map((tag, j) => (
                       <div key={j} className="flex items-center gap-2">
                          <Sparkles className="w-3 h-3 text-primary shrink-0" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{tag}</span>
                       </div>
                    ))}
                  </div>
                </div>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-primary border-b border-primary/30 pb-0.5 hover:border-primary transition-all w-fit"
                >
                  {content.catalog.cta} <ArrowRight className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: PASO A PASO ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{content.process.label}</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter mb-4">{content.process.title}</h2>
            <p className="text-stone-500 max-w-2xl mx-auto text-lg">{content.process.desc}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.process.items.map((item, i) => (
              <div key={i} className="relative p-8 bg-stone-50 border border-stone-100 rounded-sm hover:translate-y-[-4px] transition-all duration-300">
                <span className="text-5xl font-serif font-bold text-primary/10 absolute top-4 right-6">{item.step}</span>
                <h3 className="text-lg font-serif font-bold text-stone-900 mb-4 relative z-10 uppercase tracking-tight">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#071e2e] p-8 rounded-sm grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
             <div className="flex flex-col items-center gap-2">
                <Clock className="w-6 h-6 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-stone-400">{content.process.stats.duration}</span>
                <p className="text-sm">{content.process.stats.durationValue}</p>
             </div>
             <div className="flex flex-col items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-stone-400">{content.process.stats.recovery}</span>
                <p className="text-sm">{content.process.stats.recoveryValue}</p>
             </div>
             <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-stone-400">{content.process.stats.care}</span>
                <p className="text-sm px-4">{content.process.stats.careValue}</p>
             </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: PARA QUIÉN? ─────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 uppercase tracking-tight text-white">{content.forWho.title}</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-16">
               {content.forWho.items.map((item, i) => (
                 <div key={i} className="flex items-center gap-3 bg-white/5 p-4 border border-white/10 rounded-sm">
                   <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                   <span className="text-stone-200 text-[10px] font-bold uppercase tracking-widest">{item}</span>
                 </div>
               ))}
             </div>
             <p className="text-stone-400 italic text-lg max-w-2xl mx-auto">
                {content.forWho.footer}
             </p>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: RESULTADOS NATURALES ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 uppercase tracking-tighter">{content.natural.title}</h2>
                <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                  <p>
                    {content.natural.p1}
                  </p>
                  <p>
                    {content.natural.p2}
                  </p>
                </div>
             </motion.div>
             <div className="bg-stone-50 p-10 border border-stone-100 rounded-sm">
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-tight text-center">{content.natural.focus.title}</h3>
                <div className="space-y-4">
                  {content.natural.focus.items.map((item, i) => (
                     <div key={i} className="flex items-center gap-3 border-b border-stone-200 pb-3 last:border-0">
                        <Sparkles className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-stone-700 font-bold uppercase tracking-widest text-xs">{item}</span>
                     </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: TESTIMONIOS ─────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{content.testimonials.label}</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter">{content.testimonials.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.testimonials.items.map((quote, i) => (
              <motion.div
                key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white p-8 border border-stone-100 rounded-sm relative shadow-sm"
              >
                <Quote className="w-8 h-8 text-primary/10 mb-4" />
                <p className="text-stone-700 font-serif italic text-lg leading-relaxed">{quote}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: FAQ ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{content.faq.label}</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 leading-tight uppercase tracking-tighter">{content.faq.title}</h2>
          </motion.div>

          <div className="space-y-4">
            {faq?.map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <details className="group bg-stone-50 border border-stone-100 rounded-sm overflow-hidden transition-all duration-300 open:shadow-md">
                  <summary className="p-6 cursor-pointer flex justify-between items-center list-none font-serif font-bold text-stone-900 group-hover:text-primary">
                    {item.question}
                    <span className="text-primary transition-transform duration-300 group-open:rotate-180">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="p-6 pt-0 text-stone-600 text-sm leading-relaxed border-t border-stone-100/50">
                    {item.answer}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: PROGRAMAS PREMIUM ─────────────────── */}
      <section className="py-24 bg-[#071e2e] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 uppercase tracking-tight text-white font-serif">{content.programs.title}</h2>
             <p className="text-stone-400 mb-12 text-lg">{content.programs.p1}</p>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 text-left">
               {content.programs.items.map((item, i) => (
                 <div key={i} className="flex items-center gap-3 bg-white/5 p-4 border border-white/10 rounded-sm">
                   <Sparkles className="w-4 h-4 text-primary shrink-0" />
                   <span className="text-stone-200 text-[10px] font-bold uppercase tracking-widest">{item}</span>
                 </div>
               ))}
             </div>
             <p className="text-stone-400 italic text-lg max-w-2xl mx-auto">
                {content.programs.footer}
             </p>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: POR QUÉ ELEGIR MJ ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-tight">
               {content.whyUs.title}
             </h2>
             <p className="text-stone-500 text-lg">{content.whyUs.p1}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl mx-auto">
            {content.whyUs.items.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                <span className="text-stone-700 text-sm font-bold uppercase tracking-tight">{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-16 text-center text-stone-400 text-base italic font-serif max-w-2xl mx-auto">
            {content.whyUs.footer}
          </p>
        </div>
      </section>

      {/* ── SECCIÓN: LEAD MAGNET (GUÍA GRATUITA) ────────────────── */}
      <section className="py-24 bg-stone-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-white border border-stone-200 p-10 md:p-16 rounded-sm text-center shadow-xl"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8">
              <Gift className="w-4 h-4" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase">{content.leadMagnet.label}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: content.leadMagnet.title }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-left max-w-2xl mx-auto mb-12 py-8 border-y border-stone-100">
               <div className="col-span-full mb-2 text-stone-400 text-[10px] font-bold uppercase tracking-widest">{content.leadMagnet.learn}</div>
              {content.leadMagnet.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-stone-600 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-6">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all shadow-xl group"
              >
                <MessageCircle className="w-5 h-5" />
                {content.leadMagnet.cta}
              </a>
              <p className="text-stone-400 text-[10px] tracking-widest uppercase flex items-center gap-2">
                <Gift className="w-3 h-3 text-primary" /> {content.leadMagnet.footer}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: FINAL ─────────────────── */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 uppercase tracking-tighter">{content.final.title}</h2>
             <p className="text-stone-500 text-lg mb-12 max-w-2xl mx-auto">
                {content.final.p1}
             </p>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto mb-16 text-left">
               {content.final.items.map((item, i) => (
                 <div key={i} className="flex items-center gap-3 bg-stone-50 p-4 border border-stone-100 rounded-sm">
                   <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                   <span className="text-stone-600 text-[10px] font-bold uppercase tracking-widest">{item}</span>
                 </div>
               ))}
             </div>

             <div className="mt-20 border-t border-stone-100 pt-20">
                <p className="text-stone-900 font-serif font-bold text-xl mb-2">MJ Estética & Wellness Center</p>
                <div className="flex items-center justify-center gap-2 text-primary mb-8">
                   <MapPin className="w-4 h-4" />
                   <span className="font-bold tracking-[0.3em] uppercase text-[10px]">Turrialba</span>
                </div>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all shadow-2xl hover:-translate-y-1 active:translate-y-0"
                >
                  <MessageCircle className="w-5 h-5" />
                  {content.final.cta}
                </a>
                <p className="mt-8 text-primary font-bold text-[10px] tracking-widest uppercase">
                  {content.final.footer}
                </p>
             </div>
           </motion.div>
        </div>
      </section>
    </div>
  );
}
