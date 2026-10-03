import { motion } from "framer-motion";
import {
  MessageCircle,
  Zap,
  Sparkles,
  CheckCircle2,
  Instagram,
  MapPin,
  Calendar,
  Clock,
  ShieldCheck,
  Star,
  Info,
  HelpCircle,
  Tag
} from "lucide-react";
import type { ServicePageData } from "@/data/services";
import es from "@/i18n/locales/es/carboxiterapia.json";
import en from "@/i18n/locales/en/carboxiterapia.json";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as any } },
};

export function CarboxiterapiaContent({ service, waLink, lang = "es" }: { service: ServicePageData; waLink: string; lang?: "es" | "en" }) {
  const content = (lang === "es" ? es : en) as any;

  return (
    <div className="bg-white">
      {/* ── INTRO SECTION ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              {content.intro.title}
            </h2>
            {content.intro.subtitle && (
              <p className="text-xl font-serif text-primary italic mb-6">{content.intro.subtitle}</p>
            )}
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              {content.intro.desc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.intro.items?.map((item: string, i: number) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-stone-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LEAD MAGNET ───────────────────────────────── */}
      <section className="py-16 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border-y border-amber-200/50">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-block px-4 py-1.5 bg-amber-500 text-white text-[10px] font-bold tracking-widest uppercase mb-4 rounded-full">
              {content.leadMagnet.label}
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">{content.leadMagnet.title}</h3>
            <p className="text-stone-700 text-base mb-2">{content.leadMagnet.instagram}</p>
            <p className="text-xl font-serif italic font-bold text-primary mb-6">{content.leadMagnet.guideTitle}</p>
            <div className="bg-white p-6 border border-amber-200/60 shadow-sm max-w-2xl mx-auto mb-8 text-left">
              <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">{content.leadMagnet.learn}</p>
              <ul className="space-y-2">
                {content.leadMagnet.items?.map((it: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="https://instagram.com/mjestetica.cr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity rounded-full shadow-md"
            >
              <Instagram className="w-4 h-4" />
              {content.leadMagnet.instaCta}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT IS CARBOXYTHERAPY ────────────────────── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">{content.whatIs.title}</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">{content.whatIs.desc}</p>
            <p className="text-stone-800 font-medium mb-4">{content.whatIs.focus}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
              {content.whatIs.items?.map((it: any, i: number) => (
                <div key={i} className="p-4 bg-white border border-stone-200 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-semibold text-stone-800">{it.t}</span>
                </div>
              ))}
            </div>
            <p className="text-stone-800 font-medium mb-4">{content.whatIs.applications}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {content.whatIs.appItems?.map((app: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2 text-stone-700 text-sm">
                  <Sparkles className="w-4 h-4 text-primary shrink-0" />
                  <span>{app}</span>
                </div>
              ))}
            </div>
            {content.whatIs.note && (
              <p className="text-stone-500 italic text-sm border-l-2 border-primary pl-4">{content.whatIs.note}</p>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── AREAS & CONCERNS ──────────────────────────── */}
      <section className="py-24 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">{content.zones.title}</h2>
            <p className="text-stone-500 italic">{content.zones.desc}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-50 p-8 border border-stone-100">
              <h4 className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 border-b border-stone-200 pb-4">{content.zones.bodyTitle}</h4>
              <ul className="space-y-4">
                {content.zones.bodyItems?.map((b: string) => (
                  <li key={b} className="flex justify-between items-center text-stone-700 font-medium">
                    {b} <span className="w-1 h-1 bg-stone-300 rounded-full" />
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-50 p-8 border border-stone-100">
              <h4 className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 border-b border-stone-200 pb-4">{content.zones.facialTitle}</h4>
              <ul className="space-y-4">
                {content.zones.facialItems?.map((z: string) => (
                  <li key={z} className="flex justify-between items-center text-stone-700 font-medium">
                    {z} <span className="w-1 h-1 bg-stone-300 rounded-full" />
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-900 p-8 text-white">
              <h4 className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 border-b border-white/10 pb-4">{content.zones.commonTitle}</h4>
              <ul className="space-y-3">
                {content.zones.commonItems?.map((o: string) => (
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

      {/* ── BENEFITS ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6 italic">{content.benefits.title}</h2>
            <p className="text-stone-500 italic max-w-2xl mx-auto">
              {content.benefits.desc}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {content.benefits.items?.map((b: string, i: number) => (
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

      {/* ── HOW IT WORKS ─────────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{content.methodology.label}</p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 italic text-white">{content.methodology.title}</h2>
            <p className="text-white/70">{content.methodology.desc}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {content.methodology.steps?.map((step: any, i: number) => (
              <div key={i} className="relative bg-white/5 p-8 border border-white/10 hover:border-primary/40 transition-colors group">
                <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block italic">{step.s}</span>
                <h4 className="text-lg font-serif font-bold text-white mb-4 italic leading-tight">{step.t}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPORTANT INFO ───────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 text-center">
              <h2 className="text-3xl font-serif font-bold text-stone-900 italic">{content.info.title}</h2>
           </motion.div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200">
              {content.info.items?.map((item: any, i: number) => {
                const icons = [<Clock key="1" className="w-5 h-5 text-primary" />, <Calendar key="2" className="w-5 h-5 text-primary" />, <ShieldCheck key="3" className="w-5 h-5 text-primary" />, <Zap key="4" className="w-5 h-5 text-primary" />];
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

      {/* ── SESSIONS & MAINTENANCE ───────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6 italic">{content.sessions.title}</h2>
                <p className="text-stone-600 mb-8 leading-relaxed">
                  {content.sessions.desc}
                </p>
                <ul className="space-y-3 mb-10">
                  {content.sessions.factors?.map((it: string) => (
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
                   {content.sessions.options?.map((it: any) => (
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

      {/* ── TESTIMONIALS (IF PRESENT) ────────────────── */}
      {content.testimonials && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-stone-900 italic">{content.testimonials.title}</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.testimonials.items?.map((item: any, idx: number) => (
                <div key={idx} className="bg-stone-50 p-6 border border-stone-200 flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 text-amber-400 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="font-serif font-bold text-stone-900 mb-2">{item.title}</p>
                    <p className="text-stone-600 text-sm italic">{item.quote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQS (IF PRESENT) ────────────────────────── */}
      {content.faqs && (
        <section className="py-20 bg-stone-50 border-t border-stone-200">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-stone-900 italic">{content.faqs.title}</h2>
            </motion.div>
            <div className="space-y-4">
              {content.faqs.items?.map((faq: any, idx: number) => (
                <div key={idx} className="bg-white p-6 border border-stone-200">
                  <p className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-primary shrink-0" />
                    {faq.q}
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed pl-6">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PRICES & PACKAGES (IF PRESENT) ───────────── */}
      {content.prices && (
        <section className="py-16 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-2 italic">{content.prices.title}</h2>
              <p className="text-xl font-bold text-primary mb-4">{content.prices.subtitle}</p>
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {content.prices.items?.map((p: string, idx: number) => (
                  <span key={idx} className="px-4 py-2 bg-stone-100 text-stone-700 text-xs font-semibold rounded-full flex items-center gap-2">
                    <Tag className="w-3 h-3 text-primary" />
                    {p}
                  </span>
                ))}
              </div>
              <p className="text-stone-500 text-sm italic">{content.prices.desc}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── WHY CHOOSE US & LOCATION ──────────────────── */}
      {(content.whyUs || content.location) && (
        <section className="py-20 bg-stone-900 text-white">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            {content.whyUs && (
              <div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-primary italic">{content.whyUs.title}</h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">{content.whyUs.desc}</p>
                <ul className="space-y-2 mb-6">
                  {content.whyUs.items?.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {content.whyUs.footer && (
                  <p className="text-primary italic text-xs font-semibold">{content.whyUs.footer}</p>
                )}
              </div>
            )}
            {content.location && (
              <div className="bg-white/5 p-8 border border-white/10">
                <div className="flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-widest mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{content.location.title}</span>
                </div>
                <p className="text-xl font-serif font-bold text-white mb-6 italic">{content.location.center}</p>
                <ul className="space-y-3">
                  {content.location.items?.map((loc: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{loc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

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
              {content.philosophy.tags?.map((tag: string) => (
                <span key={tag} className="px-6 py-2 bg-stone-50 border border-stone-200 text-stone-400 text-[10px] font-bold tracking-[0.3em] uppercase">
                  {tag}
                </span>
              ))}
            </div>

            <div className="bg-primary p-12 text-white relative overflow-hidden group">
               <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 italic">
                    {content.finalCta?.title || content.philosophy.ctaTitle}
                  </h3>
                  {content.finalCta?.subtitle && (
                    <p className="text-white/80 text-sm max-w-xl mx-auto mb-8">{content.finalCta.subtitle}</p>
                  )}
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-all text-xs"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {content.philosophy.cta}
                  </a>
                  {content.finalCta?.giftNotice && (
                    <p className="text-white/70 text-xs italic mt-6">{content.finalCta.giftNotice}</p>
                  )}
               </div>
               <Sparkles className="absolute -right-10 -top-10 w-48 h-48 text-white/10 rotate-12 group-hover:rotate-45 transition-transform duration-1000" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
