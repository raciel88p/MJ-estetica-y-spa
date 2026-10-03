import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  ChevronDown,
  CheckCircle2,
  Heart,
  Gift,
  MapPin,
  Sparkles,
  Star
} from "lucide-react";
import { useState } from "react";
import es from "@/i18n/locales/es/tropical-extreme.json";

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

export function TropicalExtremeContent({ waLink, lang = "es" }: { waLink: string, lang?: "es" | "en" }) {
  const content = lang === "es" ? es : (es as any);
  const tropicalWaLink = `https://wa.me/50686907757?text=${encodeURIComponent("Hola, me interesa reservar el Ritual Tropical Extreme en MJ Estética & Spa. ¿Me pueden compartir disponibilidad, precio y horarios?")}`;

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
              <p className="text-stone-800 font-medium">{content.hero?.p2}</p>
              <p className="italic text-primary font-serif text-xl">{content.hero?.tagline}</p>
            </div>

            <div className="mt-10 flex flex-col items-center gap-3">
              <a
                href={tropicalWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-white font-bold tracking-widest uppercase px-8 py-4 text-xs hover:bg-stone-900 transition-colors shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                {content.hero?.cta}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ¿QUÉ ES EL RITUAL TROPICAL EXTREME? ───────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 leading-tight">
                {content.whatIs?.title}
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed text-sm md:text-base">
                <p>{content.whatIs?.p1}</p>
                <p className="font-bold text-stone-800">{content.whatIs?.p2}</p>
              </div>

              <div className="mt-6 space-y-2.5">
                {content.whatIs?.bullets?.map((bullet: string, i: number) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-sm font-medium text-stone-800">{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href={tropicalWaLink}
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
                  alt="Ritual Tropical Extreme en Turrialba"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ¿QUÉ PUEDES ESPERAR DE TU EXPERIENCIA? ────── */}
      <section className="py-20 bg-stone-50 border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              {content.expectation?.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {content.expectation?.items?.map((item: { t: string; d: string }, i: number) => (
              <div key={i} className="bg-white p-6 border border-stone-200 rounded-sm shadow-sm">
                <h3 className="font-serif font-bold text-stone-900 text-lg mb-3">{item.t}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ¿POR QUÉ ELEGIR TROPICAL EXTREME? ─────────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              {content.whyChoose?.title}
            </h2>
            <p className="text-primary font-serif font-bold text-2xl italic mb-6">
              “{content.whyChoose?.highlight}”
            </p>
            <p className="text-stone-600 text-base leading-relaxed max-w-2xl mx-auto mb-10">
              {content.whyChoose?.p1}
            </p>

            <div className="bg-stone-50 p-8 border border-stone-200 text-left max-w-3xl mx-auto">
              <h3 className="font-serif font-bold text-stone-900 text-xl mb-6 text-center">
                {content.whyChoose?.valuePropsTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {content.whyChoose?.valueProps?.map((prop: { t: string; d: string }, i: number) => (
                  <div key={i}>
                    <h4 className="font-bold text-stone-900 text-sm mb-1">{prop.t}</h4>
                    <p className="text-stone-600 text-xs leading-relaxed">{prop.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ¿PARA QUIÉN ES TROPICAL EXTREME? ──────────── */}
      <section className="py-20 bg-stone-50 border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              {content.forWhom?.title}
            </h2>
            <p className="text-stone-600 text-sm">{content.forWhom?.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {content.forWhom?.items?.map((item: { t: string; d: string }, i: number) => (
              <div key={i} className="bg-white p-6 border border-stone-200 rounded-sm">
                <h3 className="font-serif font-bold text-stone-900 text-lg mb-2">{item.t}</h3>
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

            <div className="bg-white p-6 border border-stone-200 max-w-xl mx-auto mb-8 shadow-sm text-left">
              <p className="font-bold text-stone-900 text-sm mb-4 uppercase tracking-wider">{content.gift?.occasionsTitle}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {content.gift?.occasions?.map((occ: string, i: number) => (
                  <span key={i} className="text-xs font-medium text-stone-800">{occ}</span>
                ))}
              </div>
            </div>

            <a
              href={tropicalWaLink}
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

      {/* ── CONTEXTO Y UBICACIÓN SEO ──────────────────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">
              {content.seoContext?.title}
            </h2>
            <p className="text-stone-600 text-base leading-relaxed max-w-2xl mx-auto mb-4">
              {content.seoContext?.p1}
            </p>
            <p className="text-stone-600 text-base leading-relaxed max-w-2xl mx-auto mb-8">
              {content.seoContext?.p2}
            </p>

            <div className="bg-stone-50 p-6 border border-stone-200 max-w-md mx-auto mb-8 text-left text-xs text-stone-700 whitespace-pre-line leading-relaxed">
              {content.seoContext?.location}
            </div>

            <a
              href={tropicalWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-stone-900 text-white font-bold tracking-widest uppercase px-8 py-4 text-xs hover:bg-primary transition-colors shadow-md"
            >
              <MapPin className="w-4 h-4 text-primary" />
              {content.seoContext?.cta}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FILOSOFÍA Y TESTIMONIO ───────────────────── */}
      <section className="py-20 bg-stone-50 border-b border-stone-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">{content.philosophy?.title}</h2>
            <p className="text-stone-600 leading-relaxed mb-4">{content.philosophy?.p1}</p>
            <p className="text-2xl font-serif font-bold text-primary italic mb-4">“{content.philosophy?.highlight}”</p>
            <p className="text-stone-600 text-sm mb-12">{content.philosophy?.p2}</p>

            <div className="bg-white p-8 border border-stone-200 shadow-sm text-left">
              <div className="flex items-center gap-1 text-primary mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary" />
                ))}
              </div>
              <p className="text-stone-700 italic text-sm mb-4 leading-relaxed">{content.testimonial?.quote}</p>
              <p className="text-stone-500 font-bold text-xs">{content.testimonial?.author}</p>
            </div>
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
            <p className="text-white/80 text-base max-w-xl mx-auto mb-8 leading-relaxed">{content.final?.p1}</p>

            <div className="mb-8">
              <span className="inline-block bg-white text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-2">
                {content.final?.badge}
              </span>
              <p className="text-white/80 text-xs">{content.final?.subbadge}</p>
            </div>

            <a
              href={tropicalWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-stone-900 text-white font-bold tracking-widest uppercase px-10 py-5 text-sm hover:bg-white hover:text-stone-900 transition-all shadow-2xl"
            >
              <MessageCircle className="w-5 h-5" />
              {content.final?.cta}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
