import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  Heart,
  Calendar,
  MapPin
} from "lucide-react";
import { useState } from "react";
import es from "@/i18n/locales/es/boda-spa.json";

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

export function BodaSpaContent({ waLink, lang = "es" }: { waLink: string, lang?: "es" | "en" }) {
  const content = lang === "es" ? es : (es as any);

  return (
    <div className="bg-white">
      {/* ── HERO SECTION ───────────────────────────────── */}
      <section className="py-20 bg-stone-50 border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-6">
              {content.hero?.title}
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 leading-tight mb-6">
              {content.hero?.subtitle}
            </h1>
            <p className="text-stone-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-4">
              {content.hero?.intro}
            </p>
            <p className="text-stone-800 font-medium text-base mb-8 max-w-2xl mx-auto">
              {content.hero?.subintro}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-2xl mx-auto mb-10 text-left">
              {content.hero?.bullets?.map((item: string, i: number) => (
                <div key={i} className="flex items-center gap-2 bg-white p-3 border border-stone-200 rounded-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-stone-800 text-xs font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-stone-700 italic mb-8 font-serif text-lg">{content.hero?.closing}</p>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white font-bold tracking-widest uppercase px-8 py-4 text-xs hover:bg-stone-900 transition-colors shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              Reserva tu Boda Spa
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── ¿POR QUÉ ELEGIR NUESTRO SPA PARA NOVIAS? ───── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4 leading-tight">
                {content.whyChoose?.title}
              </h2>
              <p className="text-stone-600 mb-6 text-sm md:text-base leading-relaxed">
                {content.whyChoose?.subtitle}
              </p>

              <div className="space-y-3 mb-8">
                {content.whyChoose?.bullets?.map((bullet: string, i: number) => (
                  <div key={i} className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-stone-800 text-sm font-medium">{bullet}</span>
                  </div>
                ))}
              </div>

              <p className="text-primary font-bold text-sm italic">{content.whyChoose?.closing}</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
              <div className="aspect-[4/5] bg-stone-100 rounded-sm overflow-hidden border border-stone-200 shadow-xl">
                <img
                  src="/images/boda-spa-img.webp"
                  alt="Boda Spa para novias en Turrialba"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SPA PARA PAREJAS Y DESPEDIDAS DE SOLTERA ────── */}
      <section className="py-20 bg-stone-50 border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              {content.couplesAndParties?.title}
            </h2>
            <p className="text-stone-600 text-base mb-8 max-w-xl mx-auto">
              {content.couplesAndParties?.subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8 text-left">
              {content.couplesAndParties?.options?.map((opt: string, i: number) => (
                <div key={i} className="bg-white p-4 border border-stone-200 rounded-sm flex items-center gap-3">
                  <Heart className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-stone-800 text-xs font-semibold">{opt}</span>
                </div>
              ))}
            </div>

            <p className="text-stone-500 italic text-sm">{content.couplesAndParties?.note}</p>
          </motion.div>
        </div>
      </section>

      {/* ── BENEFICIOS DE NUESTRO BODA SPA ──────────────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">
              {content.benefits?.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10 text-left">
              {content.benefits?.items?.map((item: string, i: number) => (
                <div key={i} className="bg-stone-50 p-4 border border-stone-200 rounded-sm flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-stone-800 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-primary font-serif font-bold text-xl italic max-w-xl mx-auto">
              “{content.benefits?.goal}”
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── RESERVA TU SPA EN TURRIALBA HOY ────────────── */}
      <section className="py-20 bg-primary/5 border-b border-primary/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              {content.reserve?.title}
            </h2>
            <p className="text-stone-600 text-sm mb-6 italic">{content.reserve?.notice}</p>

            <div className="bg-white p-6 border border-stone-200 max-w-lg mx-auto mb-8 shadow-sm text-left">
              <p className="font-bold text-stone-900 text-sm mb-3 uppercase tracking-wider">{content.reserve?.agendaTitle}</p>
              <ul className="space-y-2">
                {content.reserve?.services?.map((serv: string, i: number) => (
                  <li key={i} className="flex items-center gap-2 text-stone-700 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="capitalize">{serv}</span>
                  </li>
                ))}
              </ul>
              <p className="text-stone-600 text-xs mt-4 pt-3 border-t border-stone-100">{content.reserve?.closing}</p>
            </div>

            <p className="text-stone-700 font-semibold text-sm mb-6">{content.reserve?.location}</p>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white font-bold tracking-widest uppercase px-8 py-4 text-xs hover:bg-stone-900 transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              {content.reserve?.cta}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── PREGUNTAS FRECUENTES ──────────────────────── */}
      <section className="py-20 bg-stone-50 border-b border-stone-100">
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
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Boda Spa en Turrialba</h2>
            <p className="text-white/80 text-base max-w-xl mx-auto mb-8">
              Vive un momento inolvidable de relajación y cuidado antes de tu gran día.
            </p>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-stone-900 text-white font-bold tracking-widest uppercase px-10 py-5 text-sm hover:bg-white hover:text-stone-900 transition-all shadow-2xl"
            >
              <MessageCircle className="w-5 h-5" />
              Reserva por WhatsApp
            </a>

            <p className="mt-6 text-xs text-white/80">📍 Turrialba, Cartago, Costa Rica • MJ Estética & Wellness Center</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
