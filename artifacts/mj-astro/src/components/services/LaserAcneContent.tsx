import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, ArrowRight, Star, Clock, ShieldCheck, Zap, Sparkles, Target, Download, Heart, TrendingUp } from "lucide-react";
import es from "@/i18n/locales/es/laser-acne.json";
import en from "@/i18n/locales/en/laser-acne.json";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

interface Props {
  waLink: string;
  lang?: "es" | "en";
}

export function LaserAcneContent({ waLink, lang = "es" }: Props) {
  const content = lang === "es" ? es : en;

  return (
    <div className="bg-white">
      {/* ── INTRO / PAS ────────────────────────────── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              {content.intro.title}
            </h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto">
              <p>{content.intro.p1}</p>
              <p>{content.intro.p2}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
               {content.intro.items.map((item, i) => (
                 <div key={i} className="flex items-center gap-2 bg-white p-3 border border-stone-100 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-tight text-stone-700">{item}</span>
                 </div>
               ))}
            </div>

            <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
               <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-primary text-white text-xs font-bold tracking-[0.2em] uppercase px-8 py-5 hover:bg-stone-900 transition-all shadow-xl">
                  <MessageCircle className="w-4 h-4" />
                  {content.intro.cta}
               </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROBLEM / PERSONALIZATION ────────────────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
                {content.problem.title}
              </h2>
              <p className="text-stone-600 mb-6 leading-relaxed">
                {content.problem.p1}
              </p>
              <p className="text-stone-600 mb-8 leading-relaxed">
                {content.problem.p2}
              </p>
              <div className="space-y-4">
                 {content.problem.items.map((item, i) => (
                   <div key={i} className="flex items-center gap-3 text-stone-700">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="font-bold text-xs uppercase tracking-widest">{item}</span>
                   </div>
                 ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary/5 p-12 border border-primary/10 rounded-sm">
               <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">{content.problem.whatIsTitle}</h3>
               <p className="text-stone-600 leading-relaxed mb-8 italic">
                 {content.problem.whatIsDesc}
               </p>
               <ul className="space-y-4">
                  {content.problem.whatIsItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                       <Zap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                       <span className="text-stone-700 font-medium text-sm">{item}</span>
                    </li>
                  ))}
               </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS GRID ────────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative text-center">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 text-white">{content.benefits.label}</p>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">{content.benefits.title}</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.benefits.items.map((b, i) => {
              const icons = [TrendingUp, Sparkles, Target, CheckCircle2, Star, Heart];
              const Icon = icons[i % icons.length];
              return (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/5 p-8 border border-white/10">
                  <Icon className="w-10 h-10 text-primary mb-6 mx-auto" />
                  <h4 className="font-serif font-bold text-2xl mb-4 text-white">{b.t}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{b.d}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ──────────────────────────────── */}
      <section className="py-24 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">{content.methodology.title}</h2>
            <p className="text-stone-500 max-w-2xl mx-auto italic">{content.methodology.subtitle}</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.methodology.steps.map((step, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative p-8 bg-stone-50 border border-stone-200">
                <span className="text-primary font-bold text-5xl opacity-10 absolute top-4 right-4 italic font-serif">{i + 1}</span>
                <div className="text-left">
                  <h4 className="text-primary font-bold text-[10px] tracking-widest uppercase mb-4">{step.s}</h4>
                  <h3 className="text-lg font-serif font-bold text-stone-900 mb-4">{step.t}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{step.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-stone-400 font-bold uppercase text-[10px] tracking-[0.2em]">
             <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {content.methodology.stats[0]}</div>
             <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> {content.methodology.stats[1]}</div>
          </div>
        </div>
      </section>

      {/* ── BEFORE & AFTER ────────────────────────────── */}
      <section className="py-24 bg-[#071e2e] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl font-serif font-bold mb-8 text-white">{content.beforeAfter.title}</h2>
              <p className="text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">{content.beforeAfter.desc}</p>
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                 {content.beforeAfter.tags.map((tag, i) => (
                   <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">{tag}</span>
                 ))}
              </div>
              <div className="aspect-video bg-stone-800 rounded-sm flex items-center justify-center border border-white/10 overflow-hidden shadow-2xl relative">
                 <img src="/images/faciales-bg.webp" alt="Laser Acne Treatment Turrialba" className="w-full h-full object-cover opacity-50" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white/30 font-bold uppercase tracking-[0.4em] text-xs">{content.beforeAfter.caption}</p>
                 </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">{content.whyUs.title}</h2>
            <p className="text-stone-600 text-lg mb-12 leading-relaxed italic">{content.whyUs.subtitle}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-16">
              {content.whyUs.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-stone-700 font-bold text-sm uppercase tracking-wider">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LEAD MAGNET ─────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary/5 border-2 border-dashed border-primary/30 p-12 text-center rounded-sm">
           <p className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 italic">{content.leadMagnet.label}</p>
           <h3 className="text-3xl font-serif font-bold text-stone-900 mb-6">{content.leadMagnet.title}</h3>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-10">
              <div className="space-y-4">
                 <p className="font-bold text-stone-900 text-sm uppercase tracking-widest">{content.leadMagnet.learnTitle}</p>
                 {content.leadMagnet.items.map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-stone-700 text-sm">{item}</span>
                   </div>
                 ))}
              </div>
              <div className="flex flex-col justify-center">
                 <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-stone-900 text-white text-[10px] font-bold px-10 py-5 tracking-widest uppercase hover:bg-primary transition-all shadow-xl">
                    <Download className="w-5 h-5" /> {content.leadMagnet.cta}
                 </a>
              </div>
           </div>
        </motion.div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-24 bg-stone-50 border-y border-stone-100">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 text-center">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">{content.faq.title}</h2>
            <div className="w-12 h-0.5 bg-primary mx-auto" />
          </motion.div>
          <div className="space-y-12">
            {content.faq.items.map((faq, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h4 className="text-lg font-bold text-stone-900 mb-3">{faq.q}</h4>
                <p className="text-stone-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">{content.final.title}</h2>
            <p className="text-stone-600 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
              {content.final.desc}
            </p>
            <div className="flex flex-col gap-4 max-w-sm mx-auto">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-primary text-white text-sm font-bold tracking-[0.15em] uppercase px-10 py-5 hover:bg-stone-900 transition-all group shadow-2xl shadow-primary/20">
                <MessageCircle className="w-5 h-5" />
                {content.final.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-stone-400 font-bold text-[10px] uppercase tracking-widest mt-4">{content.final.location}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
