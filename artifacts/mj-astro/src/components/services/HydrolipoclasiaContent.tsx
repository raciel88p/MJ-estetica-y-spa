import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Clock, Calendar, Heart, ShieldCheck } from "lucide-react";
import es from "@/i18n/locales/es/hydrolipoclasia.json";
import en from "@/i18n/locales/en/hydrolipoclasia.json";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as any } },
};

export function HydrolipoclasiaContent({ waLink, lang = "es" }: { waLink: string, lang?: "es" | "en" }) {
  const content = lang === "es" ? es : en;

  return (
    <>
      {/* ── QUÉ ES & ZONAS ────────────────────────────── */}
      <section className="py-24 bg-stone-50 border-y border-stone-100">
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

              <div className="mt-10 p-6 bg-white border border-stone-200 shadow-sm">
                <p className="text-stone-900 font-bold mb-4 uppercase tracking-widest text-xs">{content.whatIs.important}</p>
                <ul className="space-y-3">
                  {content.whatIs.importantItems.map((text, i) => (
                    <li key={i} className="flex items-center gap-2 text-stone-600 text-sm">
                      <span className="text-primary font-bold">✅</span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">{content.whatIs.zonesTitle}</h2>
              <div className="grid grid-cols-1 gap-3">
                {content.whatIs.zones.map((zona, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-4 border border-stone-100 rounded-sm hover:shadow-sm transition-shadow">
                    <div className="w-2 h-2 rounded-full bg-primary/40" />
                    <span className="text-stone-700 font-medium">{zona}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN & FRUSTRACIONES ────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 text-center">{content.who.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.who.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-stone-50 p-5 border border-stone-100">
                  <Heart className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-stone-700 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-900 p-10 md:p-16 text-white rounded-sm shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6 text-center">
                {content.who.frustrationTitle.split('…')[0]}… <br className="hidden md:block" />
                <span className="text-primary italic">{content.who.frustrationTitle.split('…')[1]}</span>
              </h3>
              <p className="text-white/60 mb-10 text-center uppercase tracking-widest text-xs font-bold">{content.who.frustrationLabel}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
                {content.who.frustrations.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/5 p-6 border border-white/10 rounded-sm">
                    <span className="text-red-400">❌</span>
                    <span className="text-white/90 font-medium italic">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-lg leading-relaxed max-w-2xl mx-auto">
                {content.who.frustrationNote}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ─────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
               {content.howItWorks.title}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.howItWorks.steps.map((step, i) => (
              <div key={i} className="relative bg-stone-50 p-8 border border-stone-100 h-full">
                <span className="text-xs font-bold tracking-widest text-primary uppercase mb-2 block">{step.s}</span>
                <h4 className="text-lg font-serif font-bold text-stone-900 mb-4">{step.t}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{step.d}</p>
                {i < 3 && <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/20 z-10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUÉ INCLUYE ──────────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 mb-16 border-b border-white/10 pb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-serif font-bold mb-8 text-white">{content.includes.title}</h2>
            <p className="text-white/70 mb-8">{content.includes.desc}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.includes.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 p-4 border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-white/50 text-xs italic">
              {content.includes.note}
            </p>
          </motion.div>
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold mb-8 text-white">{content.info.title}</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">{content.info.durationLabel}</p>
                    <p className="text-lg font-medium">{content.info.durationValue}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-primary">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">{content.info.freqLabel}</p>
                    <p className="text-lg font-medium">{content.info.freqValue}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-primary">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">{content.info.recoveryLabel}</p>
                    <p className="text-lg font-medium">{content.info.recoveryValue}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-primary">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">{content.info.resultsLabel}</p>
                    <p className="text-lg font-medium">{content.info.resultsValue}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold mb-8 text-white">{content.sessions.title}</h2>
              <p className="text-white/70 leading-relaxed mb-8">
                {content.sessions.desc}
              </p>
              <div className="p-6 bg-white/5 border border-white/10 mb-8 italic text-white/90">
                {content.sessions.quote}
              </div>
              <div className="space-y-3">
                <p className="text-primary font-bold uppercase tracking-widest text-[10px]">{content.sessions.featureLabel}</p>
                {content.sessions.features.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </>
  );
}
