import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Quote,
  Zap,
  Target,
  ShieldCheck,
  UserCheck,
  Award,
  Clock,
  MapPin,
  Star,
  Leaf
} from "lucide-react";
import { useState } from "react";
import es from "@/i18n/locales/es/aromaterapia.json";
import en from "@/i18n/locales/en/aromaterapia.json";

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

export function AromaterapiaContent({ waLink, lang = "es" }: { waLink: string; lang?: "es" | "en" }) {
  const content = lang === "es" ? es : en;
  return (
    <div className="bg-white">
      {/* ── SECCIÓN: INTRO ──────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              {content.intro.title}
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {content.intro.tags.map((item, i) => (
                <span key={i} className="bg-stone-200 text-stone-600 px-4 py-2 rounded-full text-sm font-medium tracking-wide uppercase">
                  {item}
                </span>
              ))}
            </div>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto">
              <p>
                {content.intro.p1}
              </p>
              <p>
                {content.intro.p2}
              </p>
              <p className="font-bold text-stone-900 italic">
                {content.intro.highlight}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: BENEFICIOS ─────────────────────── */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
                {content.benefits.title}
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                {content.benefits.desc}
              </p>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-wider">{content.benefits.subtitle}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.benefits.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Leaf className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-stone-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <div className="aspect-square bg-stone-100 rounded-sm overflow-hidden border border-stone-200">
                <img src="/images/masajes-relajantes-bg.webp" alt="Aromaterapia Experience" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-6 -right-6 bg-primary p-8 shadow-xl hidden sm:block">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: PROCESO ────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-stone-900">{content.process.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.process.steps.map((step, i) => (
              <div key={i} className="bg-white p-8 border border-stone-200 shadow-sm group hover:border-primary transition-colors">
                <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block font-sans">{step.s}</span>
                <h4 className="text-lg font-serif font-bold text-stone-900 mb-4 leading-tight">{step.t}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm font-bold text-stone-600 uppercase tracking-widest">
             {content.process.items.map((item, i) => {
               const icons = [<Clock className="w-4 h-4 text-primary" />, <MapPin className="w-4 h-4 text-primary" />, <CheckCircle2 className="w-4 h-4 text-primary" />, <MessageCircle className="w-4 h-4 text-primary" />];
               return (
                <span key={i} className="flex items-center gap-2">{icons[i]} {item}</span>
               );
             })}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: RECOMENDADO PARA ────────────────── */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">{content.who.title}</h2>
            <p className="text-stone-500 italic max-w-2xl mx-auto">{content.who.intro}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            {content.who.items.map((item, i) => (
              <div key={i} className="p-8 border border-stone-100 bg-stone-50 rounded-sm flex flex-col items-center gap-4 group hover:bg-white hover:border-primary transition-all">
                <Target className="w-6 h-6 text-primary" />
                <span className="text-stone-800 font-bold text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: COMBINACIONES ──────────────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex-1">
               <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 leading-tight text-white">{content.combinations.title}</h2>
               <p className="text-white/60 mb-10 leading-relaxed">{content.combinations.desc}</p>
               <div className="space-y-4">
                 {content.combinations.items.map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                     <span className="text-white/90 font-medium">{item}</span>
                   </div>
                 ))}
               </div>
             </motion.div>
             <div className="flex-1 bg-white/5 p-10 backdrop-blur-sm border border-white/10 text-center">
                <p className="text-white font-serif text-xl italic mb-8 italic">"{content.combinations.quote}"</p>
                <a
                  href={waLink}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 font-bold tracking-widest uppercase hover:bg-white hover:text-stone-900 transition-colors text-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  {content.combinations.cta}
                </a>
             </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: AUTORIDAD ──────────────────────── */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              {content.whyUs.title}
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto leading-relaxed italic">
              {content.whyUs.desc}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
             {content.whyUs.items.map((item, i) => {
               const icons = [
                 <UserCheck className="w-6 h-6" />,
                 <Zap className="w-6 h-6" />,
                 <ShieldCheck className="w-6 h-6" />,
                 <Award className="w-6 h-6" />,
                 <Star className="w-6 h-6" />,
                 <MapPin className="w-6 h-6" />
               ];
               return (
               <div key={i} className="bg-stone-50 p-8 border border-stone-200 flex flex-col items-center text-center group hover:bg-white hover:border-primary transition-all">
                  <div className="text-primary mb-6">{icons[i]}</div>
                  <span className="text-stone-900 font-bold text-sm tracking-wide leading-tight">{item.t}</span>
               </div>
               );
             })}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: TESTIMONIOS ─────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">{content.testimonials.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.testimonials.items.map((text, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.1 } } }}
                className="bg-white p-10 border border-stone-200 shadow-sm relative group hover:border-primary transition-colors"
              >
                <Quote className="w-8 h-8 text-primary/10 absolute top-4 right-4" />
                <div className="flex gap-1 mb-6">
                   {[...Array(5)].map((_, star) => <Star key={star} className="w-3.5 h-3.5 fill-primary text-primary" />)}
                </div>
                <p className="text-stone-600 mb-6 leading-relaxed italic text-sm">{text}</p>
                <p className="text-primary text-[10px] font-bold tracking-widest uppercase">— {content.testimonials.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: FAQ ────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-serif font-bold text-stone-900">{content.faqs.title}</h2>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="border-t border-stone-200"
          >
            {content.faqs.items.map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <FaqItem question={item.q} answer={item.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: LEAD MAGNET ─────────────────────── */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-white/60 text-xs font-bold tracking-[0.4em] uppercase mb-4">{content.leadMagnet.label}</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 italic">{content.leadMagnet.title}</h2>
              <p className="text-xl md:text-2xl font-serif mb-10 italic">"{content.leadMagnet.subtitle}"</p>

              <div className="max-w-xl mx-auto bg-white p-12 text-stone-900 shadow-2xl">
                 <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-4">{content.leadMagnet.ctaLabel}</p>
                 <p className="text-6xl font-serif font-bold text-primary mb-12 underline decoration-stone-200 uppercase tracking-widest">“{content.leadMagnet.word}”</p>
                 <p className="text-sm text-stone-500 leading-relaxed mb-8 font-medium italic">{content.leadMagnet.learn}</p>

                 <div className="grid grid-cols-1 gap-y-3 mb-10 text-left max-w-sm mx-auto">
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

      {/* ── SECCIÓN: FINAL CTA ───────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              {content.finalCta.title}
            </h2>
            <p className="text-stone-600 text-lg mb-12 max-w-2xl mx-auto italic">
              {content.finalCta.desc}
            </p>

            <div className="bg-stone-50 p-10 border border-stone-200 mb-12 flex flex-col md:flex-row items-center justify-center gap-12">
               <div className="text-left">
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">📍 {content.finalCta.location}</h3>
                  <p className="text-stone-500 text-sm">{content.finalCta.address}</p>
               </div>
               <div className="flex flex-col gap-4">
                  <a
                    href={waLink}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all text-xs"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {content.finalCta.cta}
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
