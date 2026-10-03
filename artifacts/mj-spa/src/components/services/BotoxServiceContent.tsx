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
  Quote
} from "lucide-react";
import es from "@/i18n/locales/es/botox-service.json";
import en from "@/i18n/locales/en/botox-service.json";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as any } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function BotoxServiceContent({
  waLink,
  faq,
  lang = "es"
}: {
  waLink: string;
  faq?: { question: string; answer: string }[];
  lang?: "es" | "en";
}) {
  const content = lang === "es" ? es : en;
  const currentFaq = faq && faq.length > 0 ? faq : content.faqs.items.map(f => ({ question: f.q, answer: f.a }));

  return (
    <div className="bg-white">
      {/* ── SECCIÓN: INTRODUCCIÓN Y VALORES ────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex flex-col items-center text-center mb-12">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <p className="text-stone-800 text-xl md:text-2xl font-serif leading-relaxed italic max-w-3xl">
                {content.intro.quote}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {content.intro.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-stone-50 rounded-sm border border-stone-100">
                  <Star className="w-4 h-4 text-primary fill-primary/20 shrink-0" />
                  <span className="text-stone-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: LEAD MAGNET (GUÍA GRATUITA) ────────────────── */}
      <section className="py-24 bg-[#071e2e] relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5 -translate-y-1/3 translate-x-1/3">
          <Gift className="w-96 h-96 text-primary" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 md:p-16 rounded-sm text-center"
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-8">
              <Gift className="w-4 h-4" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">{content.leadMagnet.label}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: content.leadMagnet.title }} />
            <p className="text-stone-300 mb-10 text-lg" dangerouslySetInnerHTML={{ __html: content.leadMagnet.desc }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-left max-w-2xl mx-auto mb-12">
              {content.leadMagnet.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-stone-200 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="https://www.instagram.com/mj_fisioestetica/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-primary transition-all shadow-xl"
            >
              <Instagram className="w-5 h-5" />
              {content.leadMagnet.cta}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: QUÉ ES EL BOTOX FULL FACE ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight" dangerouslySetInnerHTML={{ __html: content.whatIs.title }} />
              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p>
                  {content.whatIs.p1}
                </p>
                <p className="font-medium text-stone-900">
                  {content.whatIs.highlight}
                </p>
                <div className="pt-6 border-t border-stone-100">
                  <p className="text-sm font-bold text-stone-900 uppercase tracking-widest mb-6">{content.whatIs.objectiveLabel}</p>
                  <ul className="space-y-4">
                    {content.whatIs.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="relative aspect-square bg-stone-100 rounded-sm overflow-hidden"
            >
               <img
                 src="/images/botox-full-face-bg.webp"
                 alt="Armonización Facial con Botox"
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-primary/5" />
               <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                 <p className="text-white text-sm italic font-serif">
                   {content.whatIs.imageQuote}
                 </p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: ZONAS A TRATAR ─────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-tight">
              {content.zones.title}
            </h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              {content.zones.desc}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {content.zones.items.map((item, i) => (
              <div key={i} className="bg-white p-6 text-center border border-stone-100 shadow-sm rounded-sm group hover:border-primary/30 transition-all">
                <p className="text-stone-900 font-bold text-xs uppercase tracking-widest mb-2 group-hover:text-primary transition-colors">{item}</p>
                <div className="w-6 h-0.5 bg-primary/20 mx-auto" />
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-stone-500 text-sm italic">
            {content.zones.footer}
          </p>
        </div>
      </section>

      {/* ── SECCIÓN: NARRATIVA DE RESULTADOS ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-[#071e2e] p-10 md:p-20 text-white rounded-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />

            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 leading-tight text-white" dangerouslySetInnerHTML={{ __html: content.narrative.title }} />

              <div className="space-y-4 mb-12">
                {content.narrative.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-stone-300 text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-white/5 border-l-4 border-primary">
                <p className="text-xl font-serif italic text-white mb-4">
                  {content.narrative.quote}
                </p>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {content.narrative.desc}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: BENEFICIOS CHECKLIST ─────────────────── */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4 uppercase tracking-tighter">{content.benefits.title}</h2>
             <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.benefits.items.map((item, i) => (
              <motion.div
                key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex items-center gap-3 p-6 bg-stone-50 border border-stone-100 rounded-sm"
              >
                <Sparkles className="w-5 h-5 text-primary shrink-0" />
                <span className="text-stone-700 font-bold text-sm uppercase tracking-tight leading-tight">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: PROCESO PASO A PASO ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-tight">{content.process.title}</h2>
            <p className="text-stone-500">{content.process.desc}</p>
          </motion.div>

          <div className="space-y-12">
            {content.process.steps.map((item, i) => (
              <motion.div
                key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex flex-col md:flex-row gap-8 items-start border-l-2 border-primary/20 pl-8 relative ml-4"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                <div className="shrink-0">
                  <span className="text-primary font-bold text-sm uppercase tracking-widest">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">{item.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-6 bg-stone-50 rounded-sm">
              <Clock className="w-6 h-6 text-primary" />
              <div>
                <p className="text-[10px] text-stone-400 uppercase font-bold tracking-widest">{content.process.durationLabel}</p>
                <p className="text-sm font-bold text-stone-900">{content.process.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-stone-50 rounded-sm">
              <ShieldCheck className="w-6 h-6 text-primary" />
              <div>
                <p className="text-[10px] text-stone-400 uppercase font-bold tracking-widest">{content.process.recoveryLabel}</p>
                <p className="text-sm font-bold text-stone-900">{content.process.recovery}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-stone-50 rounded-sm">
              <Sparkles className="w-6 h-6 text-primary" />
              <div>
                <p className="text-[10px] text-stone-400 uppercase font-bold tracking-widest">{content.process.resultsLabel}</p>
                <p className="text-sm font-bold text-stone-900">{content.process.results}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: CUÁNDO SE NOTAN LOS RESULTADOS ─────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 uppercase tracking-tight">
               {content.timing.title}
            </h2>
            <p className="text-stone-600 text-lg mb-12 max-w-2xl mx-auto">
               {content.timing.desc}
            </p>

            <div className="bg-white p-10 border border-stone-200 rounded-sm text-left max-w-2xl mx-auto mb-16 shadow-sm">
               <p className="font-bold text-stone-900 text-xs uppercase tracking-[0.2em] mb-8 border-b border-stone-100 pb-4">{content.timing.factorLabel}</p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12">
                 {content.timing.factors.map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <Check className="w-4 h-4 text-primary shrink-0" />
                     <span className="text-stone-600 text-sm font-medium">{item}</span>
                   </div>
                 ))}
               </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 border-t border-stone-200 pt-12">
              {content.timing.tags.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-bold text-stone-900 uppercase text-[10px] tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: TESTIMONIOS (CITAS) ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{content.testimonials.label}</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter">{content.testimonials.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.testimonials.items.map((text, i) => (
              <motion.div
                key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-stone-50 p-8 rounded-sm border border-stone-100 flex flex-col justify-between"
              >
                <Quote className="w-8 h-8 text-primary/20 mb-6" />
                <p className="text-stone-600 text-sm italic leading-relaxed mb-8">{text}</p>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-primary fill-primary" />)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: MITO RÍGIDO ─────────────────── */}
      <section className="py-24 bg-[#071e2e] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 uppercase tracking-tight text-white">{content.myth.title}</h2>
             <div className="max-w-2xl mx-auto space-y-6">
               <p className="text-2xl font-serif italic text-primary">{content.myth.highlight}</p>
               <p className="text-stone-400 text-lg leading-relaxed">
                 {content.myth.desc}
               </p>
               <div className="pt-8 flex justify-center">
                  <div className="bg-primary/10 border border-primary/20 px-8 py-4 rounded-sm">
                    <p className="text-sm font-bold tracking-widest uppercase text-white">{content.myth.footer}</p>
                  </div>
               </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: FAQ (PREGUNTAS FRECUENTES) ─────────────────── */}
      {currentFaq && currentFaq.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
              <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{content.faqs.label}</p>
              <h2 className="text-4xl font-serif font-bold text-stone-900 leading-tight">{content.faqs.title}</h2>
            </motion.div>

            <div className="space-y-4">
              {currentFaq.map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                >
                  <details className="group bg-stone-50 border border-stone-100 rounded-sm overflow-hidden transition-all duration-300 open:shadow-md">
                    <summary className="p-6 cursor-pointer flex justify-between items-center list-none font-serif font-bold text-stone-900 group-hover:text-primary">
                      {item.question}
                      <span className="text-primary transition-transform duration-300 group-open:rotate-180">
                        <ChevronDown className="w-5 h-5" />
                      </span>
                    </summary>
                    <div className="p-6 pt-0 text-stone-600 text-sm leading-relaxed border-t border-stone-200/50">
                      {item.answer}
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SECCIÓN: POR QUÉ ELEGIR MJ ─────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-tight">
              {content.whyUs.title}
            </h2>
            <p className="text-stone-500 text-lg italic font-serif">
              {content.whyUs.quote}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl mx-auto">
            {content.whyUs.items.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-stone-700 text-sm font-bold uppercase tracking-tight">{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-16 text-center text-stone-900 font-serif text-xl italic max-w-2xl mx-auto border-t border-stone-200 pt-12">
            {content.whyUs.footer}
          </p>
        </div>
      </section>

      {/* ── SECCIÓN: TURRIALBA LOCALIZACIÓN ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <div className="inline-flex items-center gap-2 text-primary mb-6">
               <MapPin className="w-5 h-5" />
               <span className="font-bold tracking-widest uppercase text-xs">{content.location.label}</span>
             </div>
             <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 uppercase tracking-tighter">{content.location.title}</h2>
             <p className="text-stone-500 text-lg mb-12 max-w-2xl mx-auto">
                {content.location.desc}
             </p>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
               {content.location.items.map((item, i) => (
                 <div key={i} className="flex items-center gap-3 bg-stone-50 p-4 border border-stone-100 rounded-sm">
                   <Check className="w-4 h-4 text-primary shrink-0" />
                   <span className="text-stone-600 text-xs font-bold uppercase">{item}</span>
                 </div>
               ))}
             </div>

             <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-60">
                {content.location.tags.map((tag, i) => (
                  <span key={i} className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase">{tag}</span>
                ))}
             </div>

             <div className="mt-20">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all shadow-2xl hover:-translate-y-1 active:translate-y-0"
                >
                  <MessageCircle className="w-5 h-5" />
                  {content.location.cta}
                </a>
             </div>
           </motion.div>
        </div>
      </section>
    </div>
  );
}
