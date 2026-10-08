import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  Gift,
  ShieldCheck,
  Star,
  MapPin,
  Clock,
  ArrowRight
} from "lucide-react";
import { useState } from "react";
import es from "@/i18n/locales/es/radiofrecuencia-facial.json";
import en from "@/i18n/locales/en/radiofrecuencia-facial.json";

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
            <p className="text-stone-600 leading-relaxed pb-6 text-sm">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function RadiofrecuenciaFacialContent({ waLink, lang = "es" }: { waLink: string, lang?: "es" | "en" }) {
  const content = lang === "es" ? es : en;
  const customWaLink = `https://wa.me/50686907757?text=${encodeURIComponent(
    lang === "es"
      ? "Hola, me interesa agendar una Valoración de Radiofrecuencia Facial en MJ Estética & Wellness Center. ¿Me pueden compartir disponibilidad?"
      : "Hello! I am interested in scheduling a Facial Radiofrequency Assessment at MJ Estética & Wellness Center. Could you please share availability?"
  )}`;

  return (
    <div className="bg-white">
      {/* ── INTRO HERO / BULLETS ───────────────────────── */}
      <section className="py-16 bg-stone-50 border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-stone-500 font-serif italic text-lg mb-4">{content.hero?.intro}</p>
            <p className="text-stone-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              {content.hero?.p1}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-2xl mx-auto mb-8 text-left">
              {content.hero?.bullets?.map((b: string, i: number) => (
                <div key={i} className="bg-white p-3.5 border border-stone-200 rounded-sm shadow-sm">
                  <span className="text-stone-800 text-xs font-semibold">{b}</span>
                </div>
              ))}
            </div>

            <a
              href={customWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white font-bold tracking-widest uppercase px-8 py-4 text-xs hover:bg-stone-900 transition-colors shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              {content.hero?.ctaDiscover}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── COMMENT OFFER / FREE GUIDE BAND ─────────────── */}
      <section className="py-16 bg-primary/5 border-b border-primary/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-block bg-primary/15 text-primary font-bold text-sm px-5 py-2 rounded-full mb-4">
              {content.commentOffer?.title}
            </span>
            <p className="text-stone-800 font-serif text-lg font-bold mb-2">{content.commentOffer?.p1}</p>
            <p className="text-stone-600 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
              {content.commentOffer?.p2}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8 max-w-3xl mx-auto">
              <div className="bg-white p-6 border border-stone-200 rounded-sm">
                <p className="font-bold text-stone-900 text-sm mb-3 uppercase tracking-wider">{content.commentOffer?.idealTitle}</p>
                <div className="space-y-2">
                  {content.commentOffer?.idealItems?.map((item: string, i: number) => (
                    <p key={i} className="text-xs text-stone-700 font-medium">{item}</p>
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 border border-stone-200 rounded-sm">
                <p className="font-bold text-stone-900 text-sm mb-3 uppercase tracking-wider">{content.commentOffer?.includesTitle}</p>
                <div className="space-y-2">
                  {content.commentOffer?.includesItems?.map((item: string, i: number) => (
                    <p key={i} className="text-xs text-stone-700 font-medium">{item}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-6 border-2 border-primary/30 rounded-sm max-w-xl mx-auto mb-8 shadow-md">
              <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">
                {content.commentOffer?.guideBadge}
              </span>
              <p className="font-serif font-bold text-stone-900 text-base mb-4">
                {content.commentOffer?.guideTitle}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={customWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-white font-bold tracking-widest uppercase px-6 py-3 text-xs hover:bg-stone-900 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  {lang === "es" ? "Solicitar Guía en WhatsApp" : "Request Guide on WhatsApp"}
                </a>
              </div>
            </div>

            <p className="text-stone-500 text-xs italic">{content.commentOffer?.footerTagline}</p>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT IS FACIAL RADIOFREQUENCY ───────────────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 leading-tight">
                {content.whatIs?.title}
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed text-sm md:text-base">
                <p>{content.whatIs?.p1}</p>
                <p>{content.whatIs?.p2}</p>
              </div>

              <div className="mt-8">
                <p className="font-bold text-stone-900 text-sm uppercase tracking-wider mb-4">
                  {content.whatIs?.chooseTitle}
                </p>
                <div className="space-y-2">
                  {content.whatIs?.chooseItems?.map((item: string, i: number) => (
                    <p key={i} className="text-xs font-semibold text-stone-800">{item}</p>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
              <div className="aspect-[4/5] bg-stone-100 rounded-sm overflow-hidden border border-stone-200 shadow-xl">
                <img
                  src="/images/radiofrecuencia-facial-bg.webp"
                  alt="Facial Radiofrequency in Turrialba"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONCERNS HELPED ───────────────────────────── */}
      <section className="py-20 bg-stone-50 border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-2">
              {content.concerns?.title}
            </h2>
            <p className="text-stone-600 text-sm mb-10">{content.concerns?.subtitle}</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              {content.concerns?.items?.map((item: string, i: number) => (
                <div key={i} className="bg-white p-5 border border-stone-200 rounded-sm shadow-sm flex items-center justify-center text-center">
                  <span className="text-stone-800 text-xs font-bold leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-stone-500 text-xs italic">{content.concerns?.note}</p>
          </motion.div>
        </div>
      </section>

      {/* ── BENEFITS ───────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-2">
              {content.benefits?.title}
            </h2>
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-10">
              {content.benefits?.subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12 text-left">
              {content.benefits?.items?.map((item: string, i: number) => (
                <div key={i} className="bg-stone-50 p-5 border border-stone-200 rounded-sm">
                  <span className="text-stone-800 text-xs font-semibold leading-relaxed block">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 p-8 border border-primary/20 max-w-xl mx-auto text-center rounded-sm">
              <p className="text-stone-900 font-bold uppercase tracking-wider text-xs mb-1">{content.benefits?.notTransform}</p>
              <p className="font-serif font-bold text-stone-900 text-xl text-primary">{content.benefits?.goalText}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HOW A SESSION WORKS (STEPS) ───────────────── */}
      <section className="py-20 bg-stone-50 border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              {content.steps?.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {content.steps?.items?.map((item: { step: string; title: string; desc: string }, i: number) => (
              <div key={i} className="bg-white p-6 border border-stone-200 rounded-sm shadow-sm">
                <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">{item.step}</span>
                <h3 className="font-serif font-bold text-stone-900 text-lg mb-2">{item.title}</h3>
                <p className="text-stone-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-center">
            {content.steps?.meta?.map((m: string, i: number) => (
              <div key={i} className="bg-white p-3 border border-stone-200 text-xs font-semibold text-stone-700">
                {m}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TARGET AUDIENCE ────────────────────────────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              {content.targetAudience?.title}
            </h2>
            <p className="text-stone-600 text-sm mb-8">{content.targetAudience?.intro}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left mb-8">
              {content.targetAudience?.items?.map((item: string, i: number) => (
                <div key={i} className="bg-stone-50 p-3.5 border border-stone-200 rounded-sm">
                  <span className="text-stone-800 text-xs font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── REAL, NATURAL-LOOKING RESULTS ───────────────── */}
      <section className="py-20 bg-stone-50 border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-2">
              {content.realResults?.title}
            </h2>
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-8">
              {content.realResults?.subtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto mb-8">
              {content.realResults?.items?.map((item: string, i: number) => (
                <span key={i} className="bg-white text-stone-800 font-semibold px-4 py-2.5 text-xs rounded-full border border-stone-200 shadow-sm">
                  {item}
                </span>
              ))}
            </div>

            <p className="text-stone-600 text-sm mb-2">{content.realResults?.p1}</p>
            <p className="font-serif font-bold text-stone-900 text-xl italic text-primary">{content.realResults?.highlight}</p>
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE MJ ──────────────────────────────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              {content.whyUs?.title}
            </h2>
            <p className="text-stone-600 max-w-xl mx-auto text-sm mb-8">{content.whyUs?.subtitle}</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left mb-8">
              {content.whyUs?.items?.map((item: string, i: number) => (
                <div key={i} className="bg-stone-50 p-3.5 border border-stone-200 rounded-sm">
                  <span className="text-stone-800 text-xs font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-stone-900 font-bold text-sm max-w-xl mx-auto">{content.whyUs?.priority}</p>
          </motion.div>
        </div>
      </section>

      {/* ── FREE GUIDE ─────────────────────────────────── */}
      <section className="py-16 bg-primary/5 border-b border-primary/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-block bg-primary/10 text-primary font-bold text-xs px-4 py-2 rounded-full mb-3 uppercase tracking-wider">
              {content.freeGuide?.badge}
            </span>
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">{content.freeGuide?.title}</h3>
            <p className="text-stone-600 text-sm mb-6">{content.freeGuide?.desc}</p>

            <div className="bg-white p-6 border border-stone-200 rounded-sm max-w-xl mx-auto mb-6 text-left space-y-2">
              {content.freeGuide?.items?.map((item: string, i: number) => (
                <p key={i} className="text-xs font-semibold text-stone-800">{item}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ─────────────────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">{content.faqs?.title}</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="border-t border-stone-200">
            {content.faqs?.items?.map((item: { q: string; a: string }, i: number) => (
              <motion.div key={i} variants={fadeUp}>
                <FaqItem question={item.q} answer={item.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────── */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">{content.finalCta?.title}</h2>
            <p className="text-white/80 text-base max-w-xl mx-auto mb-6">{content.finalCta?.subtitle}</p>

            <div className="bg-stone-900 p-8 border border-white/10 rounded-sm max-w-2xl mx-auto mb-8 text-left">
              <h3 className="text-xl font-serif font-bold text-white mb-6 text-center">{content.finalCta?.heading}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {content.finalCta?.items?.map((item: string, i: number) => (
                  <p key={i} className="text-xs font-semibold text-white/90">{item}</p>
                ))}
              </div>
              <div className="pt-6 border-t border-white/10 flex flex-wrap justify-around text-xs text-primary font-bold uppercase tracking-wider">
                <span>{content.finalCta?.location}</span>
                <span>{content.finalCta?.attention}</span>
                <span>{content.finalCta?.rejuvenation}</span>
              </div>
            </div>

            <a
              href={customWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-stone-900 font-bold tracking-widest uppercase px-10 py-5 text-sm hover:bg-stone-900 hover:text-white transition-all shadow-2xl"
            >
              <MessageCircle className="w-5 h-5 text-primary" />
              {content.finalCta?.cta}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
