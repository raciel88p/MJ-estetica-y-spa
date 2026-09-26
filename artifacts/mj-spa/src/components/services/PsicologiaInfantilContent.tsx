import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Star, ChevronDown, CheckCircle2, ArrowRight } from "lucide-react";
import es from "@/i18n/locales/es/psicologia-infantil.json";
import en from "@/i18n/locales/en/psicologia-infantil.json";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as any } },
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

export function PsicologiaInfantilContent({ waLink, lang = "es" }: { waLink: string; lang?: "es" | "en" }) {
  const content = lang === "es" ? es : en;

  return (
    <>
      {/* Para quién está recomendado */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 flex items-center gap-3">
              <span className="text-2xl">🧸</span> {content.recommend.title}
            </h2>
            <div className="bg-stone-50 p-8 rounded-sm border border-stone-100">
              <p className="text-stone-700 mb-6 font-medium">{content.recommend.intro}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* A veces no se trata simplemente de que un niño no quiera obedecer */}
      <section className="py-20 bg-stone-50 border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">{content.problem.title}</h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed max-w-2xl mx-auto">
              <p>{content.problem.p2}</p>
              <p>{content.problem.p3}</p>
              <p className="font-bold text-stone-900 pt-4 border-t border-stone-200">{content.problem.closing}</p>
              <p className="text-sm text-stone-500 leading-relaxed">{content.problem.closingDesc}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consulta de Psicología Familiar */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-900 border-l-4 border-primary pl-4">{content.psychology_consultation.title}</h2>
          </motion.div>
          <div className="space-y-12">
            {content.psychology_consultation.citas.map((cita, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-50 p-8 rounded-sm border border-stone-100">
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">{cita.t}</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">{cita.d}</p>
                {cita.items && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 border-t border-stone-200/60 pt-6">
                    {cita.items.map((it, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-sm border border-stone-100">
                        <h4 className="font-bold text-primary mb-1 text-sm">✦ {it.t}</h4>
                        <p className="text-stone-500 text-xs leading-relaxed">{it.d}</p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulta Psicopedagógica */}
      <section className="py-20 bg-stone-50 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-900 border-l-4 border-primary pl-4">{content.psychopedagogical_consultation.title}</h2>
            <p className="text-stone-500 text-sm mt-3">{content.psychopedagogical_consultation.intro}</p>
          </motion.div>
          <div className="space-y-12">
            {content.psychopedagogical_consultation.citas.map((cita, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-8 rounded-sm border border-stone-100">
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">{cita.t}</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">{cita.d}</p>
                {cita.items && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 border-t border-stone-200/60 pt-6">
                    {cita.items.map((it, idx) => (
                      <div key={idx} className="bg-stone-50 p-4 rounded-sm border border-stone-100">
                        <h4 className="font-bold text-primary mb-1 text-sm">✦ {it.t}</h4>
                        <p className="text-stone-500 text-xs leading-relaxed">{it.d}</p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿Cuándo buscar acompañamiento? */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#071e2e] text-white p-10 md:p-16 rounded-sm">
            <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3 text-white">
              <span className="text-2xl text-primary">❓</span> {content.when_to_seek.title}
            </h2>
            <p className="text-white/80 mb-10 leading-relaxed text-lg">
              {content.when_to_seek.desc}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 mb-8">
              {content.when_to_seek.items.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/90">
                  <span className="text-primary text-lg leading-none">•</span>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-primary font-bold italic border-t border-white/20 pt-6 mt-6">
              {content.when_to_seek.note}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="py-24 bg-stone-50 border-y border-stone-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-6 text-primary text-xl">
              💡
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-3 uppercase tracking-tight">
              {content.philosophy.title}
            </h2>
            <p className="text-primary font-bold font-serif italic text-lg mb-8">{content.philosophy.subtitle}</p>
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
              <p>{content.philosophy.p1}</p>
              <p>{content.philosophy.p2}</p>
              <p className="font-serif italic text-2xl text-stone-900 pt-4 border-t border-stone-200">
                "{content.philosophy.p3}"
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agenda tu valoración */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">{content.final_cta.title}</h2>
            <p className="text-stone-600 mb-8 text-lg leading-relaxed">
              {content.final_cta.desc}
            </p>
            <div className="p-8 border-2 border-primary/20 rounded-sm relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4">
                <Star className="w-6 h-6 fill-primary text-primary" />
              </div>
              <p className="text-stone-900 font-serif font-bold text-2xl mb-8">
                {content.final_cta.quote}
              </p>
              <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3">{content.final_cta.cta_label}</p>
              <p className="text-stone-500 text-sm mb-6 leading-relaxed">{content.final_cta.cta_desc}</p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 font-bold tracking-[0.2em] uppercase hover:bg-primary/90 transition-all shadow-lg mb-4"
              >
                <MessageCircle className="w-5 h-5" />
                {content.final_cta.cta_btn}
              </a>
              <p className="text-stone-400 text-xs leading-relaxed max-w-lg mx-auto italic mt-4">
                {content.final_cta.cta_note}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
