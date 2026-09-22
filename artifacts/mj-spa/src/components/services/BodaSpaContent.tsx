import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  ChevronDown,
  CheckCircle2,
  Heart,
  Gift
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
              <p>
                {content.hero?.p2}{" "}
                <strong className="text-primary font-bold">{content.hero?.p2Highlight}</strong>
              </p>
              <p className="text-stone-800 font-medium">{content.hero?.p3}</p>
              <p className="italic text-stone-700">{content.hero?.p4}</p>
            </div>

            <div className="mt-10 flex flex-col items-center gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-white font-bold tracking-widest uppercase px-8 py-4 text-xs hover:bg-stone-900 transition-colors shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                {content.hero?.cta}
              </a>
              <span className="text-xs text-stone-500">{content.hero?.subcta}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MÁS QUE UN MASAJE ─────────────────────────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 leading-tight">
                {content.moreThanMassage?.title}
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed text-sm md:text-base">
                <p>{content.moreThanMassage?.p1}</p>
                <p className="font-medium text-stone-800">{content.moreThanMassage?.p2}</p>
                <p>{content.moreThanMassage?.p3}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100">
                <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">
                  {content.moreThanMassage?.priorityTitle}
                </h3>
                <p className="text-stone-600 text-sm mb-6">{content.moreThanMassage?.priorityDesc}</p>
                <div className="space-y-2.5">
                  {content.moreThanMassage?.items?.map((item: string, i: number) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-stone-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
              <div className="aspect-[4/5] bg-stone-100 rounded-sm overflow-hidden border border-stone-200 shadow-xl">
                <img
                  src="/images/boda-spa-img.webp"
                  alt="Ritual Spa Prenatal para Embarazadas"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ¿POR QUÉ MERECES ESTE MOMENTO? ───────────── */}
      <section className="py-20 bg-stone-50 border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
              {content.whyDeserve?.title}
            </h2>
            <p className="text-stone-700 text-lg mb-6">{content.whyDeserve?.p1}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto mb-10 text-left">
              {content.whyDeserve?.list?.map((item: string, i: number) => (
                <div key={i} className="flex items-center gap-2 bg-white p-3.5 border border-stone-200 rounded-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-stone-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 border border-stone-200 max-w-2xl mx-auto shadow-sm mb-8">
              <p className="text-stone-500 text-sm mb-3 italic">{content.whyDeserve?.asked}</p>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
                {content.whyDeserve?.question}
              </h3>
              <p className="text-stone-700 leading-relaxed text-sm md:text-base">{content.whyDeserve?.invitation}</p>
            </div>

            <p className="text-primary font-bold text-lg mb-8">{content.whyDeserve?.tagline}</p>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-stone-900 text-white font-bold tracking-widest uppercase px-8 py-4 text-xs hover:bg-primary transition-colors shadow-md"
            >
              <Heart className="w-4 h-4 text-primary" />
              {content.whyDeserve?.cta}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── ¿QUÉ INCLUYE TU RITUAL SPA PRENATAL? ──────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              {content.includes?.title}
            </h2>
            <p className="text-stone-600 max-w-xl mx-auto text-sm md:text-base">{content.includes?.desc}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.includes?.items?.map((item: { t: string; d: string }, i: number) => (
              <div key={i} className="bg-stone-50 p-6 border border-stone-200 rounded-sm flex flex-col justify-between hover:border-primary transition-colors">
                <div>
                  <h3 className="font-serif font-bold text-stone-900 text-lg mb-3 leading-snug">{item.t}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ¿QUÉ PUEDES ESPERAR DE LA EXPERIENCIA? ────── */}
      <section className="py-20 bg-stone-900 text-white border-b border-stone-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">
              {content.expectation?.title}
            </h2>
            <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              {content.expectation?.p1}
            </p>
            <p className="text-stone-400 text-sm mb-4">{content.expectation?.p2}</p>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-primary italic max-w-xl mx-auto">
              “{content.expectation?.highlight}”
            </h3>
          </motion.div>
        </div>
      </section>

      {/* ── ¿POR QUÉ ELEGIR MJ ESTÉTICA & SPA? ────────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              {content.whyUs?.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {content.whyUs?.items?.map((item: { t: string; d: string }, i: number) => (
              <div key={i} className="bg-stone-50 p-8 border border-stone-200 rounded-sm">
                <h3 className="font-serif font-bold text-stone-900 text-xl mb-3">{item.t}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ¿BUSCAS UN REGALO PARA UNA FUTURA MAMÁ? ────── */}
      <section className="py-20 bg-primary/5 border-b border-primary/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-block bg-primary text-white text-[10px] font-bold tracking-[0.3em] uppercase px-4 py-1.5 mb-4">
              REGALO ESPECIAL
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
              {content.gift?.title}
            </h2>
            <p className="text-stone-700 text-base md:text-lg mb-2">{content.gift?.p1}</p>
            <p className="text-stone-600 text-sm mb-8">{content.gift?.p2}</p>

            <div className="bg-white p-6 border border-stone-200 max-w-xl mx-auto mb-8 shadow-sm">
              <h3 className="font-bold text-stone-900 text-sm uppercase tracking-wider mb-4">
                {content.gift?.perfectFor}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
                {content.gift?.occasions?.map((occ: string, i: number) => (
                  <span key={i} className="text-xs font-semibold text-stone-800">
                    {occ}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-primary font-bold text-base mb-8">{content.gift?.tagline}</p>

            <a
              href={waLink}
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

      {/* ── UNA EXPERIENCIA PARA DISFRUTAR ─────────────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">
              {content.experienceNotRace?.title}
            </h2>
            <p className="text-stone-600 leading-relaxed mb-6">{content.experienceNotRace?.p1}</p>
            <p className="text-2xl font-serif font-bold text-primary italic mb-6">
              {content.experienceNotRace?.quote}
            </p>
            <p className="text-stone-800 font-medium text-base">{content.experienceNotRace?.tagline}</p>
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
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">{content.final?.p1}</h2>
            <h3 className="text-2xl md:text-3xl font-serif mb-6 italic">{content.final?.p2}</h3>
            <p className="text-white/80 text-base mb-2">{content.final?.p3}</p>
            <p className="text-2xl font-bold mb-8">{content.final?.highlight}</p>
            <p className="text-white/90 text-sm md:text-base max-w-xl mx-auto mb-8">{content.final?.invite}</p>

            <div className="mb-8">
              <span className="inline-block bg-white text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-2">
                {content.final?.badge}
              </span>
              <p className="text-white/80 text-xs">{content.final?.subbadge}</p>
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-stone-900 text-white font-bold tracking-widest uppercase px-10 py-5 text-sm hover:bg-white hover:text-stone-900 transition-all shadow-2xl"
            >
              <MessageCircle className="w-5 h-5" />
              {content.final?.cta}
            </a>

            <p className="mt-6 text-xs text-white/80">{content.final?.waMsg}</p>
            <p className="mt-4 text-xs font-semibold text-white/70">{content.final?.location} • {content.final?.brand}</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
