import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Zap,
  Sparkles,
  UserCheck,
  ChevronDown,
  CheckCircle2,
  Instagram,
  MapPin,
  Calendar,
  Clock,
  Star,
  Check,
  Search,
  Quote
} from "lucide-react";
import { useState } from "react";
import type { ServicePageData } from "@/data/services";
import es from "@/i18n/locales/es/gluteo-service.json";
import en from "@/i18n/locales/en/gluteo-service.json";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as any } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
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

export function GluteoServiceContent({ service, waLink, lang = "es" }: { service: ServicePageData; waLink: string; lang?: "es" | "en" }) {
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
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              {content.intro.p1.split('MJ Estética & Wellness Center')[0]} <span className="font-bold text-stone-900">MJ Estética & Wellness Center</span> {content.intro.p1.split('MJ Estética & Wellness Center')[1]}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.intro.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-stone-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-stone-50 border-l-4 border-primary">
              <p className="text-xl text-stone-900 font-serif leading-tight">
                {content.intro.highlight}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── DESIRES & PROBLEMS ───────────────────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h3 className="text-2xl font-serif font-bold mb-8 text-primary">{content.desires.title}</h3>
              <div className="space-y-4">
                {content.desires.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm">
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                  {content.desires.problem}
                </p>
                <h3 className="text-xl font-serif font-bold mb-6 text-white">{content.desires.approach}</h3>
                <div className="space-y-3">
                  {content.desires.approachItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-white font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2" />
      </section>

      {/* ── DEFINITION SECTION ───────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">{content.whatIs.title}</h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              {content.whatIs.desc}
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-50 p-10 border border-stone-100 mb-16">
            <p className="text-stone-700 leading-relaxed text-center">
              {content.whatIs.note.split('valoración corporal previa').length > 1
                ? <>{content.whatIs.note.split('valoración corporal previa')[0]} <span className="font-bold">{lang === 'es' ? 'valoración corporal previa' : 'prior body assessment'}</span> {content.whatIs.note.split('valoración corporal previa')[1]}</>
                : content.whatIs.note.split('prior body assessment').length > 1
                ? <>{content.whatIs.note.split('prior body assessment')[0]} <span className="font-bold">{lang === 'es' ? 'valoración corporal previa' : 'prior body assessment'}</span> {content.whatIs.note.split('prior body assessment')[1]}</>
                : content.whatIs.note
              }
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <p className="text-stone-500 mb-8">{content.whatIs.apps}</p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {content.whatIs.appItems.map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                   <Check className="w-4 h-4 text-primary shrink-0" />
                   <span className="text-stone-700 font-medium">{item}</span>
                 </div>
               ))}
             </div>
             <p className="mt-12 text-center text-primary font-bold border-t border-stone-100 pt-8">
               {content.whatIs.closing}
             </p>
          </motion.div>
        </div>
      </section>

      {/* ── BENEFITS SECTION ─────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{content.benefits.label}</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900">{content.benefits.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {content.benefits.items.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.05}}}}
                className="flex items-center gap-4 p-4 border-b border-stone-200/50 group hover:bg-white transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="text-stone-700 font-medium text-sm">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-16 text-center text-stone-500 max-w-2xl mx-auto">
            {content.benefits.footer}
          </motion.p>
        </div>
      </section>

      {/* ── RECOMMENDED FOR ──────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <MessageCircle className="w-12 h-12 text-primary/40" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-stone-900">{content.who.title}</h2>
            <p className="text-stone-500 mt-4">{content.who.intro}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.who.items.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp}
                className="bg-stone-50 p-8 border border-stone-100 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Check className="w-5 h-5 text-primary" />
                  <h3 className="font-serif font-bold text-stone-900">{item.t}</h3>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS: METHODOLOGY ────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{content.process.label}</p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">{content.process.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.process.steps.map((step, i) => (
              <div key={i} className="relative bg-white/5 p-8 border border-white/10 hover:border-primary/40 transition-colors group">
                <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">{step.s}</span>
                <h4 className="text-lg font-serif font-bold text-white mb-4 leading-tight">{step.t}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {content.process.items.map((item, i) => {
              const icons = [<Clock className="w-5 h-5 text-primary" />, <Calendar className="w-5 h-5 text-primary" />, <Zap className="w-5 h-5 text-primary" />];
              return (
              <div key={i} className="p-8 flex flex-col items-center text-center">
                 <div className="mb-4">{icons[i]}</div>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">{item.l}</p>
                 <p className="text-white font-serif font-bold text-sm">{item.v}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SESSIONS RECOMMENDATION ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-0.5 bg-primary" />
              <h2 className="text-3xl font-serif font-bold text-stone-900">{content.sessions.title}</h2>
            </div>
            <p className="text-stone-500 mb-10">{content.sessions.intro}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
              {content.sessions.factors.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-stone-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-stone-50 p-10 rounded-sm border border-stone-100">
               <p className="text-stone-600 mb-8">{content.sessions.note}</p>
               <p className="text-stone-400 text-[10px] uppercase tracking-widest mb-6">{content.sessions.alsoLabel}</p>
               <div className="grid grid-cols-2 gap-4">
                 {content.sessions.alsoItems.map((item, i) => (
                   <span key={i} className="text-stone-900 font-bold text-sm">{item}</span>
                 ))}
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LEAD MAGNET: GUÍA GRATUITA ────────────────── */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-4 py-2 rounded-full mb-6">
                <Star className="w-4 h-4 fill-white" />
                <span className="text-xs font-bold tracking-widest uppercase">{content.leadMagnet.label}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{content.leadMagnet.title}</h2>
              <p className="text-white/90 text-lg mb-4 leading-relaxed">
                {content.leadMagnet.subtitle}
              </p>
              <div className="bg-white/10 border border-white/20 p-8 rounded-sm mb-8 backdrop-blur-sm">
                <p className="text-white text-sm mb-4 uppercase tracking-widest font-bold">{content.leadMagnet.learn}</p>
                <ul className="space-y-3">
                  {content.leadMagnet.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 shrink-0" />
                      <span className="italic">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-white font-bold mb-8">{content.leadMagnet.info}</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-8 md:p-12 text-stone-900 shadow-2xl">
              <h3 className="text-2xl font-serif font-bold mb-8 text-center uppercase tracking-tight">{content.leadMagnet.ctaLabel}</h3>
              <div className="text-center mb-10">
                 <span className="text-4xl md:text-5xl font-serif font-bold text-primary underline underline-offset-8">“{content.leadMagnet.word}”</span>
              </div>
              <div className="space-y-6">
                <a
                  href="https://www.instagram.com/mj_fisioestetica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-stone-50 border border-stone-100 hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-primary tracking-widest uppercase mb-1">{content.leadMagnet.directLabel}</p>
                    <p className="font-bold text-lg group-hover:text-primary transition-colors">{content.leadMagnet.directCta}</p>
                  </div>
                </a>
                <p className="text-xs text-center text-stone-400">{content.leadMagnet.footer}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BELIEFS / PHILOSOPHY ─────────────────────── */}
      <section className="py-24 bg-white overflow-hidden">
         <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
               <div className="flex justify-center mb-8">
                 <Search className="w-10 h-10 text-primary/30" />
               </div>
               <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">{content.philosophy.title}</h2>
               <p className="text-stone-500 mb-12">{content.philosophy.intro}</p>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                 {content.philosophy.items.map((item, i) => (
                   <div key={i} className="p-4 border border-stone-100 font-medium text-stone-800 text-sm">
                      ✔ {item}
                   </div>
                 ))}
               </div>
               <p className="text-lg text-stone-600 border-l-4 border-primary/20 pl-8 text-left max-w-2xl mx-auto">
                 {content.philosophy.closing}
               </p>
            </motion.div>
         </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="py-24 bg-stone-50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900">{content.testimonials.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.testimonials.items.map((text, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.1}}}}
                className="bg-white p-8 border border-stone-200 relative group"
              >
                <Quote className="w-8 h-8 text-primary/10 absolute top-4 right-4" />
                <p className="text-stone-600 mb-6 leading-relaxed">{text}</p>
                <p className="text-primary text-xs font-bold tracking-widest uppercase">— {content.testimonials.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <Heart className="absolute -bottom-20 -left-20 w-64 h-64 text-primary/5 -rotate-12" />
      </section>

      {/* ── FAQ SECTION ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
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

      {/* ── WHY CHOOSE US ────────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">{content.whyUs.title}</h2>
             <p className="text-primary font-bold uppercase tracking-widest text-sm">{content.whyUs.intro}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-4">
                <p className="text-white/40 uppercase tracking-widest text-xs font-bold mb-6">{content.whyUs.listLabel}</p>
                {content.whyUs.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
             </motion.div>
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-center justify-center">
                <div className="p-10 border border-primary/30 bg-primary/5 rounded-full">
                   <p className="text-center text-lg leading-relaxed text-white">
                     {content.whyUs.closing.split('natural y segura').length > 1
                       ? <>{content.whyUs.closing.split('natural y segura')[0]} <span className="text-primary font-bold">{lang === 'es' ? 'natural y segura' : 'natural and safe'}</span> {content.whyUs.closing.split('natural y segura')[1]}</>
                       : content.whyUs.closing.split('natural and safe').length > 1
                       ? <>{content.whyUs.closing.split('natural and safe')[0]} <span className="text-primary font-bold">{lang === 'es' ? 'natural y segura' : 'natural and safe'}</span> {content.whyUs.closing.split('natural and safe')[1]}</>
                       : content.whyUs.closing
                     }
                   </p>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* ── LOCATION & FINAL CTA ─────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">{content.location.title}</h2>
              <div className="space-y-6">
                {content.location.items.map((item, i) => {
                  const icons = [<MapPin className="w-5 h-5 text-primary" />, <Zap className="w-5 h-5 text-primary" />, <MessageCircle className="w-5 h-5 text-primary" />, <Clock className="w-5 h-5 text-primary" />, <UserCheck className="w-5 h-5 text-primary" />];
                  return (
                  <div key={i} className="flex items-center gap-4 text-stone-700">
                    {icons[i]}
                    <span className="font-medium">{item}</span>
                  </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary p-12 text-white relative overflow-hidden shadow-2xl">
               <div className="relative z-10 text-center">
                  <p className="text-white/60 text-xs font-bold tracking-[0.4em] uppercase mb-4">{content.location.ctaTagline}</p>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8">{content.location.ctaTitle}</h3>
                  <p className="text-white/80 mb-10 text-sm">{content.location.ctaHighlight}</p>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-all text-xs w-full justify-center"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {content.location.cta}
                  </a>
                  <p className="mt-8 text-[10px] tracking-widest text-white/50 uppercase font-bold">{content.location.ctaFooter}</p>
               </div>
               <Sparkles className="absolute -right-10 -top-10 w-48 h-48 text-white/10 rotate-12" />
            </motion.div>
          </div>

          <div className="mt-20 pt-10 border-t border-stone-100 text-center">
             <a href={lang === 'es' ? "/" : "/en/"} className="text-stone-400 text-xs hover:text-primary transition-colors tracking-widest font-bold">{content.location.visit}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
