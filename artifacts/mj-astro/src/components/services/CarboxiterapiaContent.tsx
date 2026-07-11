import { motion } from "framer-motion";
import {
  MessageCircle,
  Zap,
  Sparkles,
  UserCheck,
  CheckCircle2,
  Instagram,
  MapPin,
  Calendar,
  Clock,
  ShieldCheck,
  Star,
  Info
} from "lucide-react";
import type { ServicePageData } from "@/data/services";
import es from "@/i18n/locales/es/carboxiterapia.json";
import en from "@/i18n/locales/en/carboxiterapia.json";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as any } },
};

export function CarboxiterapiaContent({ service, waLink, lang = "es" }: { service: ServicePageData; waLink: string; lang?: "es" | "en" }) {
  const content = lang === "es" ? es : en;

  return (
    <div className="bg-white">
      {/* ── INTRO SECTION ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              {content.intro.title.split('tu bienestar estético')[0]} <span className="text-primary italic font-light">{lang === 'es' ? 'tu bienestar estético' : 'your aesthetic well-being'}</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              {content.intro.desc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.intro.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-stone-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LEAD MAGNET: GUÍA GRATUITA ────────────────── */}
      <section className="py-20 bg-stone-900 text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-4 py-2 rounded-full mb-6">
                <Star className="w-4 h-4 fill-primary" />
                <span className="text-xs font-bold tracking-widest uppercase">{content.leadMagnet.label}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 italic text-white">{content.leadMagnet.title}</h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                {content.leadMagnet.instagram.split('“Carbo”')[0]} <span className="text-primary font-bold">“Carbo”</span> {content.leadMagnet.instagram.split('“Carbo”')[1]}
              </p>
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm mb-8">
                <h3 className="text-xl font-serif font-bold text-primary mb-6">{content.leadMagnet.guideTitle}</h3>
                <p className="text-white/60 text-sm mb-4 uppercase tracking-widest font-bold">{content.leadMagnet.learn}</p>
                <ul className="space-y-3">
                  {content.leadMagnet.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-6">
                <a
                  href="https://www.instagram.com/mj_fisioestetica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-bold uppercase tracking-widest text-xs"
                >
                  <Instagram className="w-5 h-5" />
                  {content.leadMagnet.instaCta}
                </a>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-8 md:p-12 text-stone-900">
              <h3 className="text-2xl font-serif font-bold mb-8 text-center uppercase tracking-tight">{content.ctaCard.title}</h3>
              <div className="space-y-6">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-stone-50 border border-stone-100 hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-primary tracking-widest uppercase mb-1">{content.ctaCard.waLabel}</p>
                    <p className="font-bold text-lg group-hover:text-primary transition-colors italic">{content.ctaCard.waCta}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-5 bg-stone-50 border border-stone-100">
                  <div className="w-12 h-12 bg-stone-200 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-stone-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-stone-400 tracking-widest uppercase mb-1">{content.ctaCard.locLabel}</p>
                    <p className="font-bold text-lg italic">{content.ctaCard.locValue}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 bg-stone-50 border border-stone-100">
                  <div className="w-12 h-12 bg-stone-200 flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-stone-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-stone-400 tracking-widest uppercase mb-1">{content.ctaCard.dateLabel}</p>
                    <p className="font-bold text-lg italic">{content.ctaCard.dateValue}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
      </section>

      {/* ── EDUCATIONAL: ¿QUÉ ES? ────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-8 text-center italic">{content.whatIs.title}</h2>
            <div className="bg-stone-50 p-10 border border-stone-100 mb-12">
              <p className="text-stone-700 text-lg leading-relaxed text-center italic">
                {content.whatIs.desc}
              </p>
            </div>
            <p className="text-stone-500 text-center mb-12 font-medium">
              {content.whatIs.focus}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              {content.whatIs.items.map((item, i) => {
                const icons = [<MapPin className="w-5 h-5 mx-auto mb-2 text-primary" />, <Star className="w-5 h-5 mx-auto mb-2 text-primary" />, <Sparkles className="w-5 h-5 mx-auto mb-2 text-primary" />, <UserCheck className="w-5 h-5 mx-auto mb-2 text-primary" />, <Zap className="w-5 h-5 mx-auto mb-2 text-primary" />];
                return (
                <div key={i} className="p-4 bg-white border border-stone-100 hover:shadow-md transition-shadow">
                  {icons[i]}
                  <p className="text-[10px] font-bold uppercase tracking-widest text-stone-900 leading-tight">{item.t}</p>
                </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{lang === 'es' ? 'Aplicaciones' : 'Applications'}</p>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6 leading-tight">
                {content.whatIs.applications}
              </h3>
              <ul className="grid grid-cols-1 gap-3">
                {content.whatIs.appItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-stone-500 italic text-sm leading-relaxed border-l-2 border-primary/20 pl-6">
                {content.whatIs.note}
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-stone-200">
               <img src="/images/carboxiterapia-bg.webp" alt="Carboxiterapia MJ" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ZONAS Y OBJETIVOS ────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 italic">{content.zones.title}</h2>
            <p className="text-stone-500 max-w-2xl mx-auto italic">
              {content.zones.desc}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-8 border border-stone-200">
              <h4 className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 border-b border-primary/10 pb-4">{content.zones.bodyTitle}</h4>
              <ul className="space-y-4">
                {content.zones.bodyItems.map((z) => (
                  <li key={z} className="flex justify-between items-center text-stone-700 font-medium">
                    {z} <span className="w-1 h-1 bg-stone-300 rounded-full" />
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-8 border border-stone-200">
              <h4 className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 border-b border-primary/10 pb-4">{content.zones.facialTitle}</h4>
              <ul className="space-y-4">
                {content.zones.facialItems.map((z) => (
                  <li key={z} className="flex justify-between items-center text-stone-700 font-medium">
                    {z} <span className="w-1 h-1 bg-stone-300 rounded-full" />
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-900 p-8 text-white">
              <h4 className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 border-b border-white/10 pb-4">{content.zones.commonTitle}</h4>
              <ul className="space-y-3">
                {content.zones.commonItems.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {o}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BENEFICIOS ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6 italic">{content.benefits.title}</h2>
            <p className="text-stone-500 italic max-w-2xl mx-auto">
              {content.benefits.desc}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {content.benefits.items.map((b, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.05}}}}
                className="flex items-center gap-4 p-4 border-b border-stone-100 group hover:bg-stone-50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="text-stone-700 font-medium italic">{b}</span>
              </motion.div>
            ))}
          </div>
          <p className="mt-16 text-center text-stone-400 text-sm italic">
            {content.benefits.note}
          </p>
        </div>
      </section>

      {/* ── PASOS DEL TRATAMIENTO ─────────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{content.methodology.label}</p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 italic text-white">{content.methodology.title}</h2>
            <p className="text-white/70">{content.methodology.desc}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {content.methodology.steps.map((step, i) => (
              <div key={i} className="relative bg-white/5 p-8 border border-white/10 hover:border-primary/40 transition-colors group">
                <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block italic">{step.s}</span>
                <h4 className="text-lg font-serif font-bold text-white mb-4 italic leading-tight">{step.t}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INFORMACIÓN IMPORTANTE ────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 text-center">
              <h2 className="text-3xl font-serif font-bold text-stone-900 italic">{content.info.title}</h2>
           </motion.div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200">
              {content.info.items.map((item, i) => {
                const icons = [<Clock className="w-5 h-5 text-primary" />, <Calendar className="w-5 h-5 text-primary" />, <ShieldCheck className="w-5 h-5 text-primary" />, <Zap className="w-5 h-5 text-primary" />];
                return (
                <div key={i} className="bg-white p-8 flex flex-col items-center text-center">
                   <div className="mb-4">{icons[i]}</div>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">{item.l}</p>
                   <p className="text-stone-900 font-serif font-bold italic">{item.v}</p>
                </div>
                );
              })}
           </div>
           <p className="mt-12 text-center text-stone-400 text-xs italic">
             {content.info.note}
           </p>
        </div>
      </section>

      {/* ── SESIONES Y MANTENIMIENTO ──────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6 italic">{content.sessions.title}</h2>
                <p className="text-stone-600 mb-8 leading-relaxed">
                  {content.sessions.desc}
                </p>
                <ul className="space-y-3 mb-10">
                  {content.sessions.factors.map((it) => (
                    <li key={it} className="flex items-center gap-3 text-stone-500 text-sm font-medium">
                      <div className="w-1 h-1 bg-primary rounded-full" />
                      {it}
                    </li>
                  ))}
                </ul>
                <div className="p-6 bg-white border border-stone-200 shadow-sm">
                   <p className="text-stone-900 font-serif font-bold italic text-lg leading-snug">
                     {content.sessions.orient}
                   </p>
                </div>
             </motion.div>
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-10 border border-stone-200 relative overflow-hidden">
                <h4 className="text-stone-400 text-[10px] font-bold tracking-[0.4em] uppercase mb-8">{content.sessions.optionsTitle}</h4>
                <div className="space-y-6 relative z-10">
                   {content.sessions.options.map((it) => (
                     <div key={it.t} className="flex gap-4">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <div>
                           <p className="font-bold text-stone-900 italic">{it.t}</p>
                           <p className="text-stone-500 text-xs">{it.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
                <Info className="absolute -right-8 -bottom-8 w-32 h-32 text-stone-50" />
             </motion.div>
          </div>
        </div>
      </section>

      {/* ── FILOSOFÍA Y RESULTADOS ───────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-8">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-8 italic">{content.philosophy.title}</h2>
            <p className="text-stone-600 text-lg mb-12 leading-relaxed italic max-w-2xl mx-auto">
              {content.philosophy.desc}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {content.philosophy.tags.map((tag) => (
                <span key={tag} className="px-6 py-2 bg-stone-50 border border-stone-200 text-stone-400 text-[10px] font-bold tracking-[0.3em] uppercase">
                  {tag}
                </span>
              ))}
            </div>

            <div className="bg-primary p-12 text-white relative overflow-hidden group">
               <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8 italic">{content.philosophy.ctaTitle}</h3>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-all text-xs"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {content.philosophy.cta}
                  </a>
               </div>
               <Sparkles className="absolute -right-10 -top-10 w-48 h-48 text-white/10 rotate-12 group-hover:rotate-45 transition-transform duration-1000" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
