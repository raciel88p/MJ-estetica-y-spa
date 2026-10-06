import { motion } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Zap,
  ShieldCheck,
  UserCheck,
  Award,
  MapPin,
  Star,
  AlertCircle
} from "lucide-react";
import es from "@/i18n/locales/es/rejuvenecimiento-facial-laser.json";
import en from "@/i18n/locales/en/rejuvenecimiento-facial-laser.json";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as any } },
};

interface Props {
  waLink: string;
  lang?: "es" | "en";
}

export function RejuvenecimientoLaserContent({ waLink, lang = "es" }: Props) {
  const content = lang === "es" ? es : en;

  return (
    <div className="bg-white">
      {/* ── SECCIÓN: INTRO (PAS) ──────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              {content.intro.title}
            </h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto text-left md:text-center">
              <p>{content.intro.p1}</p>
              <p>{content.intro.p2}</p>
              <p className="text-primary font-serif text-2xl italic mt-8">
                {content.intro.subTitle}
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 border-l-4 border-primary shadow-sm">
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-wider">{content.intro.triedTitle}</h3>
              <ul className="space-y-4 text-stone-600 font-medium">
                {content.intro.triedItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">❌ <span className="line-through opacity-70">{item}</span></li>
                ))}
              </ul>
              <p className="mt-6 text-stone-400 text-sm italic">{content.intro.triedNote}</p>
            </div>
            <div className="space-y-6">
              <p className="text-stone-700 leading-relaxed">
                {content.intro.realityP1}
              </p>
              <p className="text-stone-900 font-bold leading-relaxed">
                {content.intro.realityP2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: TRATAMIENTO ─────────────────────── */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
                {content.treatment.title}
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                {content.treatment.p1}
              </p>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-wider">{content.treatment.helpTitle}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.treatment.helpItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-stone-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <div className="aspect-[4/5] bg-stone-100 rounded-sm overflow-hidden border border-stone-200">
                 <img src="/images/faciales-bg.webp" alt="Laser Facial Rejuvenation" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary p-8 shadow-xl hidden sm:block">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: BENEFICIOS ────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-stone-900">{content.benefits.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.benefits.items.map((step, i) => (
              <div key={i} className="bg-white p-8 border border-stone-200 shadow-sm group hover:border-primary transition-colors">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                   <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-serif font-bold text-stone-900 mb-4 leading-tight">{step.t}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: CANDIDATOS ────────────────────────── */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
             <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">{content.candidates.title}</h2>
                <p className="text-stone-600 mb-8">{content.candidates.desc}</p>
                <div className="space-y-4">
                  {content.candidates.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-stone-800 font-bold text-sm">{item}</span>
                    </div>
                  ))}
                </div>
             </div>
             <div className="flex-1 bg-stone-900 p-10 text-white relative overflow-hidden">
                <AlertCircle className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-serif font-bold mb-6">{content.candidates.untoldTitle}</h3>
                <p className="text-stone-300 leading-relaxed mb-6">{content.candidates.untoldP1}</p>
                <p className="text-primary font-bold italic font-serif text-lg">{content.candidates.untoldP2}</p>
             </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: AUTORIDAD & UBICACIÓN ────────────────── */}
      <section className="py-24 bg-stone-50 border-y border-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">{content.whyUs.title}</h2>
            <p className="text-stone-600 max-w-2xl mx-auto italic">{content.whyUs.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { icon: <UserCheck className="w-6 h-6" />, t: content.whyUs.items[0] },
              { icon: <Zap className="w-6 h-6" />, t: content.whyUs.items[1] },
              { icon: <ShieldCheck className="w-6 h-6" />, t: content.whyUs.items[2] },
              { icon: <Award className="w-6 h-6" />, t: content.whyUs.items[3] },
              { icon: <Star className="w-6 h-6" />, t: content.whyUs.items[4] },
              { icon: <MapPin className="w-6 h-6" />, t: content.whyUs.items[5] }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-stone-200 bg-white flex flex-col items-center gap-4 text-center group hover:border-primary transition-all">
                <div className="text-primary group-hover:scale-110 transition-transform">{item.icon}</div>
                <span className="text-stone-900 font-bold text-sm leading-relaxed">{item.t}</span>
              </div>
            ))}
          </div>

          <div className="bg-white p-10 border border-stone-200 shadow-sm">
             <h3 className="text-xl font-serif font-bold text-stone-900 mb-8 text-center uppercase tracking-widest">{content.whyUs.nearTitle}</h3>
             <div className="flex flex-wrap justify-center gap-3">
               {content.whyUs.locations.map((loc, i) => (
                 <span key={i} className="px-4 py-2 bg-stone-100 text-stone-600 text-[10px] font-bold uppercase tracking-wider rounded-sm border border-stone-200">
                    📍 {loc}
                 </span>
               ))}
             </div>
             <p className="text-center text-stone-400 text-sm mt-8 italic">{content.whyUs.locationsNote}</p>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: LEAD MAGNET ─────────────────────── */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-white/60 text-xs font-bold tracking-[0.4em] uppercase mb-4">{content.leadMagnet.label}</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 italic">{content.leadMagnet.title}</h2>
              <p className="text-xl md:text-2xl font-serif mb-10 italic">{content.leadMagnet.desc}</p>

              <div className="max-w-xl mx-auto bg-white p-12 text-stone-900 shadow-2xl">
                 <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-4">{content.leadMagnet.keywordLabel}</p>
                 <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-12 underline decoration-stone-200 uppercase tracking-widest">{content.leadMagnet.keyword}</p>
                 <p className="text-sm text-stone-500 leading-relaxed mb-8 font-medium italic">{content.leadMagnet.learnTitle}</p>

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
        <Sparkles className="absolute -bottom-20 -right-20 w-64 h-64 text-white/5 rotate-12" />
      </section>

      {/* ── SECCIÓN: FINAL CTA ───────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              {content.final.title}
            </h2>
            <p className="text-stone-600 text-lg mb-12 max-w-2xl mx-auto italic">
              {content.final.desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
               <div className="bg-stone-50 p-8 border border-stone-200 text-left">
                  <h3 className="text-lg font-serif font-bold text-stone-900 mb-4">{content.final.duringTitle}</h3>
                  <ul className="space-y-3">
                    {content.final.duringItems.map((u, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                        <CheckCircle2 className="w-4 h-4 text-primary" /> {u}
                      </li>
                    ))}
                  </ul>
               </div>
               <div className="flex flex-col gap-4 justify-center">
                  <a
                    href={waLink}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-primary text-white px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all text-xs"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {content.final.cta}
                  </a>
                  <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">MJ Estética & Wellness Center</p>
               </div>
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-stone-400 text-[9px] font-bold uppercase tracking-[0.2em]">
               {content.final.keywords.map((kw, i) => (
                 <span key={i}>{kw}</span>
               ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
