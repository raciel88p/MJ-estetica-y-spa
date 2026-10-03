import { motion } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  Instagram,
  Star
} from "lucide-react";
import type { ServicePageData } from "@/data/services";
import es from "@/i18n/locales/es/hollywood-peel.json";
import en from "@/i18n/locales/en/hollywood-peel.json";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as any } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

export function HollywoodPeelContent({ service, waLink, lang = "es" }: { service: ServicePageData; waLink: string; lang?: "es" | "en" }) {
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              {content.intro.title}
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              {content.intro.p1}
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              {content.intro.p2}
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              {content.intro.p3}
            </p>

            <div className="p-8 bg-stone-50 border-l-4 border-primary mb-12">
               <h3 className="text-xl font-serif font-bold text-stone-900 mb-4 flex items-center gap-2">
                 <Sparkles className="w-5 h-5 text-primary" />
                 {content.intro.boxTitle}
               </h3>
               <p className="text-stone-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: content.intro.boxDesc }} />
               <p className="mt-4 text-stone-600 italic">
                 {content.intro.boxClosing}
               </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT IT DOES ────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 flex items-center justify-center gap-3">
              <Star className="w-8 h-8 text-primary fill-primary" />
              {content.whatItDoes.title}
            </h2>
            <p className="text-stone-500 text-lg">{content.whatItDoes.desc}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-16">
             {content.whatItDoes.items.map((item, i) => (
               <div key={i} className="flex items-center gap-4 p-4 bg-white border border-stone-200 shadow-sm rounded-sm group hover:border-primary/30 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-stone-700 font-medium text-sm">{item}</span>
               </div>
             ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {content.whatItDoes.tags.map((item, i) => (
               <span key={i} className="px-6 py-3 bg-stone-900 text-white font-bold rounded-full text-xs tracking-widest uppercase">
                 {item}
               </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMAGINE THIS ─────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-10">{content.imagine.title}</h2>
              <div className="space-y-6 text-stone-600 text-lg leading-relaxed mb-16">
                <p>{content.imagine.p1}</p>
                <p>{content.imagine.p2}</p>
                <p>{content.imagine.p3}</p>
              </div>

              <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-8">{content.imagine.quoteLabel}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {content.imagine.quotes.map((item, i) => (
                  <div key={i} className="p-6 border border-stone-100 bg-stone-50 italic text-stone-800 font-serif">
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-stone-500 italic">{content.imagine.footer}</p>
           </motion.div>
        </div>
      </section>

      {/* ── IDEAL FOR ────────────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">{content.idealFor.title}</h2>
            <p className="text-white/60 text-lg">{content.idealFor.desc}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {content.idealFor.items.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 border border-white/10 bg-white/5 rounded-sm">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-white/80 font-medium text-xs">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-white/50 italic text-sm">
            {content.idealFor.footer}
          </p>
        </div>
      </section>

      {/* ── DIFFERENTIATOR ───────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">{content.differentiator.title}</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: content.differentiator.desc }} />

            <div className="bg-stone-50 p-10 border border-stone-200 mb-12">
               <p className="text-stone-700 leading-relaxed mb-6">
                 {content.differentiator.p2}
               </p>
               <p className="text-xl font-serif text-stone-900 italic">{content.differentiator.quote}</p>
               <p className="text-2xl font-serif text-primary font-bold mt-2">{content.differentiator.highlight}</p>
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
              <p className="text-2xl font-serif mb-10 italic">{content.leadMagnet.subtitle}</p>

              <div className="max-w-md mx-auto bg-white p-10 text-stone-900 shadow-2xl">
                 <p className="text-sm text-stone-500 leading-relaxed mb-8">{content.leadMagnet.desc}</p>

                 <div className="space-y-3 mb-10 text-left">
                   {content.leadMagnet.items.map((item, i) => (
                     <div key={i} className="flex items-center gap-2">
                       <CheckCircle2 className="w-3 h-3 text-primary" />
                       <span className="text-[10px] font-bold text-stone-700">{item}</span>
                     </div>
                   ))}
                 </div>

                 <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-4">{content.leadMagnet.ctaLabel}</p>
                 <p className="text-5xl font-serif font-bold text-primary mb-10 underline decoration-stone-200">“{content.leadMagnet.word}”</p>

                 <a
                    href="https://www.instagram.com/mj_fisioestetica/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-stone-900 text-white py-4 font-bold tracking-widest uppercase hover:bg-primary transition-colors text-xs"
                 >
                    <Instagram className="w-4 h-4" />
                    {content.leadMagnet.cta}
                 </a>
                 <p className="mt-6 text-[10px] text-stone-400 font-bold uppercase tracking-widest">{content.leadMagnet.footer}</p>
              </div>
           </motion.div>
        </div>
        <Sparkles className="absolute -bottom-20 -left-20 w-64 h-64 text-white/5 rotate-12" />
      </section>


      {/* ── FINAL SEO BAND ───────────────────────────── */}
      <section className="py-20 bg-white border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-8 uppercase tracking-widest">{content.seoBand.title}</h2>
              <p className="text-stone-600 leading-relaxed mb-10 max-w-2xl mx-auto">
                {content.seoBand.desc}
              </p>
              <p className="text-primary font-bold">
                {content.seoBand.footer}
              </p>
           </motion.div>
        </div>
      </section>
    </div>
  );
}
