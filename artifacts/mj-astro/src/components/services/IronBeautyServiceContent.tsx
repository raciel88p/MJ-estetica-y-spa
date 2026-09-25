import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Zap,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Instagram,
  MapPin,
  Star,
  Quote,
  Target,
  Heart,
  Search
} from "lucide-react";
import { useState } from "react";
import es from "@/i18n/locales/es/iron-beauty.json";
import en from "@/i18n/locales/en/iron-beauty.json";

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

export function IronBeautyServiceContent({ waLink, lang = "es" }: { waLink: string; lang?: "es" | "en" }) {
  const content = (lang === "es" ? es : en) as any;

  return (
    <div className="bg-white">
      {/* ── INTRO SECTION ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6 leading-tight">
              {content.intro.title}
            </h2>
            {content.intro.subtitle && (
              <p className="text-xl font-serif text-primary italic mb-6">{content.intro.subtitle}</p>
            )}
            <p className="text-2xl font-serif font-bold text-stone-900 mb-6 italic border-l-4 border-primary pl-4">
              {content.intro.p1}
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              {content.intro.p2}
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

      {/* ── FRUSTRATION / PAIN POINTS ───────────────── */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white leading-tight">
              {content.frustration.title}
            </h2>
            <p className="text-white/60 mb-8 uppercase tracking-widest text-xs font-bold">{content.frustration.intro}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {content.frustration.items?.map((item: string, idx: number) => (
                <div key={idx} className="flex items-start gap-3 bg-white/5 p-4 border border-white/10">
                  <span className="text-red-400 font-bold shrink-0">❌</span>
                  <span className="text-white/90 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-white/80 text-base leading-relaxed mb-6">{content.frustration.closing}</p>
            <p className="text-xl font-serif font-bold text-primary italic">{content.frustration.highlight}</p>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT IS IRON BEAUTY ──────────────────────── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">{content.whatIs.title}</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-4">{content.whatIs.p1}</p>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">{content.whatIs.p2}</p>
            <p className="text-stone-900 font-bold mb-4 uppercase tracking-widest text-xs">{content.whatIs.itemsTitle}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
              {content.whatIs.items?.map((item: string, idx: number) => (
                <div key={idx} className="p-4 bg-white border border-stone-200 flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-semibold text-stone-800">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-stone-500 italic text-sm">{content.whatIs.footer}</p>
          </motion.div>
        </div>
      </section>

      {/* ── WHO IS IT DESIGNED FOR ────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">{content.who.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {content.who.items?.map((item: string, idx: number) => (
                <div key={idx} className="flex items-center gap-3 bg-stone-50 p-4 border border-stone-100">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-stone-800 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-stone-700 italic font-serif text-lg text-center border-t border-stone-100 pt-6">{content.who.footer}</p>
          </motion.div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 text-center">{content.benefits.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {content.benefits.items?.map((item: string, idx: number) => (
                <div key={idx} className="flex items-center gap-3 bg-white p-5 border border-stone-200 shadow-sm">
                  <Sparkles className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-stone-800 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-primary font-serif font-bold italic text-xl text-center">{content.benefits.footer}</p>
          </motion.div>
        </div>
      </section>

      {/* ── METHODOLOGY / STEPS ──────────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">{content.methodology.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {content.methodology.steps?.map((step: any, idx: number) => (
              <div key={idx} className="bg-white/5 p-6 border border-white/10 relative">
                <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-3">{step.s}</span>
                <h4 className="text-lg font-serif font-bold text-white mb-3 leading-tight">{step.t}</h4>
                <p className="text-white/60 text-xs leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">{content.whyUs.title}</h2>
            <p className="text-primary font-serif font-bold text-xl italic mb-8">{content.whyUs.subtitle}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {content.whyUs.items?.map((item: string, idx: number) => (
                <div key={idx} className="flex items-center gap-3 bg-stone-50 p-4 border border-stone-100">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-stone-800 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-stone-600 text-base italic border-l-2 border-primary pl-4">{content.whyUs.footer}</p>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────── */}
      <section className="py-20 bg-stone-50 border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-900">{content.testimonials.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.testimonials.items?.map((item: any, i: number) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.1}}}}
                className="bg-white p-8 border border-stone-200 relative group flex flex-col justify-between"
              >
                <Quote className="w-8 h-8 text-primary/10 absolute top-4 right-4" />
                <p className="text-stone-600 mb-6 leading-relaxed italic text-sm">{item.quote}</p>
                <p className="text-primary text-[10px] font-bold tracking-widest uppercase">— {item.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-stone-900">{content.faqs.title}</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="border-t border-stone-200">
            {content.faqs.items?.map((item: any, i: number) => (
              <motion.div key={i} variants={fadeUp}>
                <FaqItem question={item.q} answer={item.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── LEAD MAGNET ───────────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-4 py-2 rounded-full mb-6">
                <Star className="w-4 h-4 fill-primary" />
                <span className="text-xs font-bold tracking-widest uppercase">{content.leadMagnet.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">{content.leadMagnet.title}</h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed italic">
                {content.leadMagnet.intro} <span className="text-primary font-bold not-italic">{content.leadMagnet.word}</span>
              </p>
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm mb-8 backdrop-blur-sm">
                <h4 className="text-xl font-serif font-bold mb-6 text-white leading-tight">
                  {content.leadMagnet.guideTitle}
                </h4>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mb-4 font-bold">{content.leadMagnet.learnTitle}</p>
                <ul className="space-y-3">
                  {content.leadMagnet.items?.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-8 md:p-12 text-stone-900 shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold mb-6 text-center uppercase tracking-tight">{content.leadMagnet.intro}</h3>
                <div className="text-center mb-8">
                   <span className="text-4xl md:text-5xl font-serif font-bold text-primary underline underline-offset-8">{content.leadMagnet.word}</span>
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
                      <p className="text-[10px] font-bold text-primary tracking-widest uppercase mb-1">Instagram Direct</p>
                      <p className="font-bold text-lg group-hover:text-primary transition-colors">{content.leadMagnet.ctaLabel}</p>
                    </div>
                  </a>
                  <p className="text-xs text-center text-stone-400">{content.leadMagnet.subtext}</p>
                </div>
              </div>
              <Sparkles className="absolute -right-10 -bottom-10 w-48 h-48 text-stone-100" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CLOSING & FINAL CTA ─────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20">
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-4 leading-tight">
               {content.closing.title}
             </h2>
             <p className="text-2xl font-serif italic text-primary">{content.closing.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-8 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                {content.closing.center}
              </h3>
              <div className="space-y-4">
                {content.closing.items?.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-4 text-stone-700">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary p-12 text-white relative overflow-hidden shadow-2xl">
               <div className="relative z-10 text-center">
                  <h3 className="text-xl md:text-2xl font-serif font-bold mb-8 leading-tight uppercase">
                    {content.closing.finalTitle}
                  </h3>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-all text-xs w-full justify-center"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {content.closing.waCta}
                  </a>
               </div>
               <Zap className="absolute -right-10 -top-10 w-48 h-48 text-white/10 rotate-12" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
