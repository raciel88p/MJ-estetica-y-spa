import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  Zap,
  Activity,
  Heart,
  ShieldCheck,
  Dumbbell
} from "lucide-react";
import { useState } from "react";
import es from "@/i18n/locales/es/masaje-descarga-muscular.json";

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

export function MasajeDescargaMuscularContent({ waLink, lang = "es" }: { waLink: string, lang?: "es" | "en" }) {
  const content = lang === "es" ? es : (es as any);
  const descargaWaLink = `https://wa.me/50686907757?text=${encodeURIComponent("Hola, me interesa reservar el Masaje de Descarga Muscular en MJ Fisio Estética & Spa. ¿Me pueden compartir disponibilidad, opciones y horarios?")}`;

  return (
    <div className="bg-white">
      {/* ── HERO / INTRO SECTION ───────────────────────── */}
      <section className="py-20 bg-stone-50 border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-6">
              {content.hero?.title}
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 leading-tight mb-6">
              {content.hero?.subtitle}
            </h1>
            <div className="space-y-4 text-stone-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              <p className="italic text-stone-800 font-medium">{content.hero?.p1}</p>
              <p>{content.hero?.p2}</p>
              <p>{content.hero?.p3}</p>
              <p>{content.hero?.p4}</p>
            </div>

            <div className="mt-8 mb-8 p-6 bg-white border border-stone-200 rounded-sm max-w-xl mx-auto shadow-sm">
              <p className="text-primary font-bold text-base mb-2">{content.hero?.badge}</p>
              <p className="text-stone-600 text-sm">{content.hero?.subbadge}</p>
            </div>

            <a
              href={descargaWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white font-bold tracking-widest uppercase px-8 py-4 text-xs hover:bg-stone-900 transition-colors shadow-lg"
            >
              <Activity className="w-4 h-4" />
              {content.hero?.cta}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── ¿QUÉ ES UN MASAJE DE DESCARGA MUSCULAR? ───────── */}
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

              <div className="mt-8 p-6 bg-stone-50 border-l-4 border-primary rounded-r-sm">
                <p className="text-stone-900 font-serif font-bold text-base italic leading-relaxed">
                  "{content.whatIs?.quote}"
                </p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
              <div className="aspect-[4/5] bg-stone-100 rounded-sm overflow-hidden border border-stone-200 shadow-xl">
                <img
                  src="/images/boda-spa-img.webp"
                  alt="Masaje de descarga muscular en Turrialba"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ¿SIENTES TU CUERPO CARGADO? ─────────────────── */}
      <section className="py-20 bg-stone-50 border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              {content.reasons?.title}
            </h2>
            <p className="text-stone-600 text-base max-w-xl mx-auto mb-8">{content.reasons?.subtitle}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-8 text-left">
              {content.reasons?.bullets?.map((b: string, i: number) => (
                <div key={i} className="bg-white p-3.5 border border-stone-200 rounded-sm shadow-sm flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-stone-800 text-xs font-semibold">{b}</span>
                </div>
              ))}
            </div>

            <p className="text-stone-900 font-serif font-bold text-lg max-w-xl mx-auto">{content.reasons?.conclusion}</p>
          </motion.div>
        </div>
      </section>

      {/* ── PARA QUIENES NO DEJAN DE MOVERSE ─────────────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              {content.targetAudience?.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {content.targetAudience?.profiles?.map((profile: { icon: string; title: string; description: string }, i: number) => (
              <div key={i} className="bg-stone-50 p-8 border border-stone-200 rounded-sm">
                <span className="text-3xl mb-3 block">{profile.icon}</span>
                <h3 className="font-serif font-bold text-stone-900 text-xl mb-3">{profile.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{profile.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ¿CÓMO ES TU EXPERIENCIA EN MJ? ─────────────── */}
      <section className="py-20 bg-stone-50 border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              {content.steps?.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
            {content.steps?.items?.map((step: { num: string; t: string; d: string }, i: number) => (
              <div key={i} className="bg-white p-6 border border-stone-200 rounded-sm shadow-sm">
                <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">{step.num}</span>
                <h3 className="font-serif font-bold text-stone-900 text-lg mb-2">{step.t}</h3>
                <p className="text-stone-600 text-xs leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-stone-900 font-bold text-sm tracking-wider uppercase">{content.steps?.conclusion}</p>
        </div>
      </section>

      {/* ── NO NECESITAS ESPERAR A SENTIRTE AGOTADO ─────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              {content.waiting?.title}
            </h2>
            <p className="text-stone-600 text-base max-w-2xl mx-auto mb-8">{content.waiting?.p1}</p>

            <div className="flex flex-wrap justify-center gap-3 max-w-md mx-auto mb-8">
              {content.waiting?.bullets?.map((b: string, i: number) => (
                <span key={i} className="bg-stone-100 text-stone-800 font-semibold px-4 py-2 text-xs rounded-full border border-stone-200">
                  {b}
                </span>
              ))}
            </div>

            <p className="text-stone-900 font-serif font-bold text-xl">{content.waiting?.conclusion}</p>
          </motion.div>
        </div>
      </section>

      {/* ── UNA EXPERIENCIA DIFERENTE EN TURRIALBA ───────── */}
      <section className="py-20 bg-stone-50 border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              {content.whyUs?.title}
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-sm mb-8">{content.whyUs?.subtitle}</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto text-left mb-8">
              {content.whyUs?.bullets?.map((b: string, i: number) => (
                <div key={i} className="bg-white p-3.5 border border-stone-200 rounded-sm shadow-sm">
                  <span className="text-stone-800 text-xs font-semibold">{b}</span>
                </div>
              ))}
            </div>

            <p className="text-stone-900 font-bold text-base">{content.whyUs?.conclusion}</p>
          </motion.div>
        </div>
      </section>

      {/* ── PREGUNTAS FRECUENTES ──────────────────────── */}
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
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">{content.final?.title}</h2>
            <p className="text-white/90 text-xl font-serif italic mb-6">{content.final?.subtitle}</p>
            <p className="text-white/80 text-base max-w-xl mx-auto mb-4">{content.final?.p1}</p>
            <p className="text-white font-bold text-xl uppercase tracking-widest mb-8">{content.final?.motto}</p>

            <div className="mb-8">
              <span className="inline-block bg-white text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-2">
                {content.final?.badge}
              </span>
            </div>

            <a
              href={descargaWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-stone-900 text-white font-bold tracking-widest uppercase px-10 py-5 text-sm hover:bg-white hover:text-stone-900 transition-all shadow-2xl mb-8"
            >
              <MessageCircle className="w-5 h-5 text-primary" />
              {content.final?.cta}
            </a>

            <p className="text-white/80 text-xs max-w-lg mx-auto mb-2">{content.final?.footerText}</p>
            <p className="text-white/60 text-xs italic">{content.final?.tagline}</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
