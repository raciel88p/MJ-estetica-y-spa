import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Zap, Sparkles, UserCheck, ChevronDown } from "lucide-react";
import { useState } from "react";
import type { ServicePageData } from "@/data/services";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
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
            <p className="text-primary/80 leading-relaxed pb-6 text-sm">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function CarboxiterapiaContent({ service, waLink }: { service: ServicePageData; waLink: string }) {
  return (
    <>
      {/* ── SECCIÓN DIFERENCIAL ───────────────────────── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-primary/30" />
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Tecnología Médica</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-10 leading-tight">
              Oxigenación profunda para <br />
              <span className="text-primary italic font-light">una piel renovada</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                "CO₂ medicinal de alta pureza",
                "Microinyecciones de alta precisión",
                "Efecto lipolítico (quema de grasa)",
                "Estimulación intensa de colágeno",
                "Sin tiempo de recuperación",
                "Tratamiento versátil: facial y corporal"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-stone-50 p-4 border border-stone-100 group hover:border-primary/20 transition-all">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-stone-700 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PAIN POINTS ──────────────────────────────── */}
      <section className="py-24 bg-stone-50 border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6 text-center">¿Sientes que tu piel ha perdido vitalidad?</h2>
            <p className="text-stone-500 text-center mb-12 max-w-2xl mx-auto">
              Con el tiempo, la circulación disminuye y los tejidos pierden oxígeno, lo que se traduce en:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { t: "Celulitis y piel de naranja", d: "Acumulaciones de grasa que no ceden con dieta." },
                { t: "Flacidez corporal y facial", d: "Pérdida de firmeza en brazos, abdomen u óvalo facial." },
                { t: "Ojeras oscuras y marcadas", d: "Mirada cansada por falta de oxigenación en la zona." },
                { t: "Cicatrices y estrías", d: "Tejidos que necesitan una renovación profunda desde el interior." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 border border-stone-200 flex gap-4 items-start">
                  <span className="text-red-400 mt-1">✕</span>
                  <div>
                    <h4 className="text-stone-900 font-bold text-sm mb-1">{item.t}</h4>
                    <p className="text-stone-500 text-xs leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── EXPLICACIÓN DEL PROCEDIMIENTO ────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">¿Cómo actúa la carboxiterapia?</h2>
              <div className="space-y-6 text-stone-600 leading-relaxed text-sm">
                <p>
                  El tratamiento consiste en la aplicación de microinyecciones de dióxido de carbono (CO₂) medicinal en los tejidos afectados.
                </p>
                <p>
                  Al introducir CO₂, el cuerpo reacciona aumentando el flujo de sangre y oxígeno a la zona tratada (Efecto Bohr). Esto estimula el metabolismo de las grasas y la producción de colágeno de forma natural.
                </p>
                <p className="font-bold text-primary">
                  ¿El resultado? Una piel más firme, luminosa y una reducción visible de la celulitis y grasa localizada.
                </p>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
              <div className="aspect-[4/5] bg-stone-100 rounded-sm overflow-hidden border border-stone-200 relative group">
                <img src="/images/carboxiterapia-bg.webp" alt="Tratamiento de Carboxiterapia" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl border border-stone-100 max-w-[200px]">
                <Sparkles className="w-6 h-6 text-primary mb-3" />
                <p className="text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-1">Resultados</p>
                <p className="text-stone-900 font-serif font-bold leading-tight">Piel 3x más oxigenada desde la primera sesión</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PASOS DEL TRATAMIENTO ─────────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">El Protocolo MJ</p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Tu sesión paso a paso</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { s: "01", t: "Valoración", d: "Evaluamos el grado de celulitis o flacidez para definir las zonas de aplicación." },
              { s: "02", t: "Preparación", d: "Limpieza y desinfección de la zona. Utilizamos equipo estéril y CO₂ de grado médico." },
              { s: "03", t: "Microinyección", d: "Aplicación controlada del gas. Es rápido y la molestia es mínima y pasajera." },
              { s: "04", t: "Activación", d: "Masaje post-aplicación para distribuir el gas y potenciar la oxigenación." }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <span className="text-4xl font-serif font-light text-primary/30 mb-4 block group-hover:text-primary/60 transition-colors">{step.s}</span>
                <h4 className="text-lg font-serif font-bold text-white mb-3">{step.t}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{step.d}</p>
                {i < 3 && <div className="hidden md:block absolute -right-4 top-8 w-8 h-px bg-white/10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREGUNTAS FRECUENTES (Carboxiterapia) ─────── */}
      <section className="py-24 bg-stone-50 border-y border-stone-100">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-stone-900">Preguntas frecuentes</h2>
          </motion.div>
          <div className="space-y-4">
            {service.faq?.map((item, i) => (
              <FaqItem key={i} question={item.question} answer={item.answer} />
            ))}
            <FaqItem
                question="¿Es seguro el CO₂?"
                answer="Absolutamente. El dióxido de carbono es un gas que nuestro cuerpo produce naturalmente. El CO₂ medicinal utilizado se elimina rápidamente a través de la respiración sin dejar residuos en el organismo."
            />
            <FaqItem
                question="¿Puedo hacer vida normal después?"
                answer="Sí, es un tratamiento 'lunch-time'. Puedes retomar tus actividades inmediatamente. Solo recomendamos no realizar ejercicio intenso las 2-3 horas posteriores."
            />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary p-10 md:p-20 text-white text-center relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-white/70 text-[10px] font-bold tracking-[0.4em] uppercase mb-6">Resultados Reales</p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Recupera la firmeza y <br /> salud de tu piel</h2>
              <p className="text-white/80 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
                No dejes que la celulitis o la flacidez afecten tu confianza. La carboxiterapia es el aliado médico-estético que estabas buscando.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white text-primary px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-100 transition-all shadow-xl text-xs"
                >
                  <MessageCircle className="w-5 h-5" />
                  AGENDAR VALORACIÓN
                </a>
              </div>
            </div>
            <UserCheck className="absolute -left-10 -bottom-10 w-64 h-64 text-white/5 -rotate-12" />
          </motion.div>
          <p className="mt-8 text-center text-stone-400 text-[10px] uppercase tracking-widest">
            * Los resultados pueden variar según cada persona. Se recomienda una valoración previa.
          </p>
        </div>
      </section>
    </>
  );
}
