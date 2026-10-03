import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  ChevronDown,
  CheckCircle2,
  Gift,
  MapPin,
  Star,
  Sparkles,
  Coffee
} from "lucide-react";
import { useState } from "react";
import es from "@/i18n/locales/es/masaje-cafe.json";

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

export function MasajeCafeContent({ waLink, lang = "es" }: { waLink: string, lang?: "es" | "en" }) {
  const content = lang === "es" ? es : (es as any);
  const coffeeWaLink = `https://wa.me/50686907757?text=${encodeURIComponent("Hola, me interesa reservar el Masaje con Café en MJ Fisio Estética & Spa. ¿Me pueden compartir disponibilidad, precio y horarios?")}`;

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
              <p>{content.hero?.p1}</p>
              <p>{content.hero?.p2}</p>
              <p className="text-stone-800 font-medium">{content.hero?.p3}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-2xl mx-auto mt-8 mb-10 text-left">
              {content.hero?.bullets?.map((item: string, i: number) => (
                <div key={i} className="flex items-center gap-2 bg-white p-3 border border-stone-200 rounded-sm">
                  <span className="text-xs font-semibold text-stone-800">{item}</span>
                </div>
              ))}
            </div>

            <a
              href={coffeeWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white font-bold tracking-widest uppercase px-8 py-4 text-xs hover:bg-stone-900 transition-colors shadow-lg"
            >
              <Coffee className="w-4 h-4" />
              {content.hero?.cta}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── ¿QUÉ ES EL MASAJE CON CAFÉ? ─────────────────── */}
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
                <p className="font-medium text-stone-800">{content.whatIs?.p3}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100">
                <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-4">
                  {content.whatIs?.listTitle}
                </h3>
                <div className="space-y-2.5">
                  {content.whatIs?.bullets?.map((bullet: string, i: number) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-sm font-medium text-stone-800">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={coffeeWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-stone-900 text-white font-bold tracking-widest uppercase px-6 py-3.5 text-xs hover:bg-primary transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-primary" />
                  {content.whatIs?.cta}
                </a>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
              <div className="aspect-[4/5] bg-stone-100 rounded-sm overflow-hidden border border-stone-200 shadow-xl">
                <img
                  src="/images/boda-spa-img.webp"
                  alt="Masaje con café en Turrialba"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BENEFICIOS DEL MASAJE CON CAFÉ ─────────────── */}
      <section className="py-20 bg-stone-50 border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              {content.benefits?.title}
            </h2>
            <p className="text-stone-600 max-w-xl mx-auto text-sm">{content.benefits?.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {content.benefits?.items?.map((item: { t: string; d: string }, i: number) => (
              <div key={i} className="bg-white p-6 border border-stone-200 rounded-sm shadow-sm">
                <h3 className="font-serif font-bold text-stone-900 text-lg mb-3">{item.t}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={coffeeWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold tracking-widest uppercase px-8 py-4 text-xs hover:bg-stone-900 transition-colors shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              {content.benefits?.cta}
            </a>
          </div>
        </div>
      </section>

      {/* ── ¿CÓMO ES UNA SESIÓN? ────────────────────────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              {content.session?.title}
            </h2>
            <p className="text-stone-600 text-base">{content.session?.intro}</p>
          </motion.div>

          <div className="space-y-6 max-w-3xl mx-auto mb-10">
            {content.session?.steps?.map((step: { num: string; t: string; d: string }, i: number) => (
              <div key={i} className="bg-stone-50 p-6 border border-stone-200 rounded-sm flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm shrink-0">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-serif font-bold text-stone-900 text-lg mb-1">{step.t}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-stone-500 font-semibold text-xs uppercase tracking-wider">{content.session?.duration}</p>
        </div>
      </section>

      {/* ── ¿PARA QUIÉN PUEDE SER UNA BUENA OPCIÓN? ──────── */}
      <section className="py-20 bg-stone-50 border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              {content.forWhom?.title}
            </h2>
            <p className="text-stone-600 text-sm mb-8">{content.forWhom?.subtitle}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-8 text-left">
              {content.forWhom?.items?.map((item: string, i: number) => (
                <div key={i} className="bg-white p-3.5 border border-stone-200 rounded-sm flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-stone-800 text-xs font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-stone-500 text-xs italic max-w-xl mx-auto">{content.forWhom?.disclaimer}</p>
          </motion.div>
        </div>
      </section>

      {/* ── ¿EL MASAJE CON CAFÉ AYUDA CON LA CELULITIS? ─── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
              {content.cellulite?.title}
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm md:text-base max-w-2xl mx-auto mb-8">
              <p>{content.cellulite?.p1}</p>
              <p className="font-bold text-stone-800">{content.cellulite?.p2}</p>
              <p>{content.cellulite?.p3}</p>
              <p className="italic text-stone-500">{content.cellulite?.p4}</p>
            </div>

            <p className="text-stone-900 font-bold text-base mb-6">{content.cellulite?.question}</p>

            <a
              href={coffeeWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold tracking-widest uppercase px-8 py-4 text-xs hover:bg-stone-900 transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              {content.cellulite?.cta}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── ¿POR QUÉ ELEGIR MJ FISIO ESTÉTICA & SPA? ──────── */}
      <section className="py-20 bg-stone-50 border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              {content.whyUs?.title}
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-sm">{content.whyUs?.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {content.whyUs?.items?.map((item: { t: string; d: string }, i: number) => (
              <div key={i} className="bg-white p-8 border border-stone-200 rounded-sm">
                <h3 className="font-serif font-bold text-stone-900 text-xl mb-3">{item.t}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UN REGALO DIFERENTE ───────────────────────── */}
      <section className="py-20 bg-primary/5 border-b border-primary/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              {content.gift?.title}
            </h2>
            <p className="text-stone-600 text-base max-w-xl mx-auto mb-8">{content.gift?.subtitle}</p>

            <div className="bg-white p-6 border border-stone-200 max-w-xl mx-auto mb-8 shadow-sm">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
                {content.gift?.occasions?.map((occ: string, i: number) => (
                  <span key={i} className="text-xs font-semibold text-stone-800">{occ}</span>
                ))}
              </div>
            </div>

            <a
              href={coffeeWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold tracking-widest uppercase px-8 py-4 text-xs hover:bg-stone-900 transition-colors shadow-md"
            >
              <Gift className="w-4 h-4" />
              {content.gift?.cta}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIOS ───────────────────────────────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-10">{content.testimonials?.title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {content.testimonials?.items?.map((item: { text: string; stars: number }, i: number) => (
                <div key={i} className="bg-stone-50 p-6 border border-stone-200 rounded-sm text-left">
                  <div className="flex items-center gap-1 text-primary mb-3">
                    {[...Array(item.stars)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-primary" />
                    ))}
                  </div>
                  <p className="text-stone-700 italic text-xs leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <a
              href={coffeeWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-stone-900 text-white font-bold tracking-widest uppercase px-8 py-4 text-xs hover:bg-primary transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-primary" />
              {content.testimonials?.cta}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── UBICACIÓN SEO ─────────────────────────────── */}
      <section className="py-20 bg-stone-50 border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">{content.location?.title}</h2>
            <p className="text-stone-600 text-sm max-w-2xl mx-auto mb-4">{content.location?.subtitle}</p>
            <p className="text-stone-500 text-xs mb-8">{content.location?.communities}</p>

            <div className="bg-white p-6 border border-stone-200 max-w-md mx-auto mb-8 text-left text-xs text-stone-700 whitespace-pre-line leading-relaxed">
              {content.location?.address}
            </div>

            <a
              href={coffeeWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-stone-900 text-white font-bold tracking-widest uppercase px-8 py-4 text-xs hover:bg-primary transition-colors shadow-md"
            >
              <MapPin className="w-4 h-4 text-primary" />
              {content.location?.cta}
            </a>
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
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">{content.final?.title}</h2>
            <p className="text-white/80 text-base max-w-xl mx-auto mb-2">{content.final?.p1}</p>
            <p className="text-white/90 font-medium text-base max-w-xl mx-auto mb-8">{content.final?.p2}</p>

            <div className="mb-8">
              <span className="inline-block bg-white text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-2">
                {content.final?.badge}
              </span>
              <p className="text-white/80 text-xs">{content.final?.subbadge}</p>
            </div>

            <a
              href={coffeeWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-stone-900 text-white font-bold tracking-widest uppercase px-10 py-5 text-sm hover:bg-white hover:text-stone-900 transition-all shadow-2xl"
            >
              <Coffee className="w-5 h-5 text-primary" />
              {content.final?.cta}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
