import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Instagram,
  Target,
  ShieldCheck,
  Zap,
  MapPin,
  Clock,
  UserCheck,
  Star,
  Award
} from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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
            <p className="text-stone-500 leading-relaxed pb-6 text-sm">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function OjerasServiceContent({ waLink }: { waLink: string }) {
  return (
    <div className="bg-white">
      {/* ── SECCIÓN 2: PROBLEMA (PAS) ────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
              ¿Te Identificas con Alguna de Estas Situaciones?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              {[
                "Te ves cansada incluso después de dormir bien.",
                "Las ojeras afectan tu confianza.",
                "Las bolsas debajo de los ojos hacen que parezcas mayor.",
                "Has probado cremas y maquillaje sin obtener los resultados esperados.",
                "Sientes que tu mirada perdió luminosidad."
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.1 } } }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-red-500 text-xs">✕</span>
                  </div>
                  <p className="text-stone-600 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
            <div className="bg-white p-8 border border-stone-200 shadow-sm flex items-center">
              <p className="text-stone-600 text-lg leading-relaxed italic">
                La realidad es que las ojeras pueden hacer que tu rostro refleje cansancio, estrés o envejecimiento prematuro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 3: SOLUCIÓN ──────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">La Solución</p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              Tratamiento para Ojeras con Carboxiterapia en Turrialba
            </h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto">
              <p>
                En <span className="font-bold text-stone-900">MJ Fisio Estética & Spa</span> ofrecemos un tratamiento especializado que ayuda a mejorar la apariencia del contorno de ojos mediante la aplicación controlada de dióxido de carbono medicinal (CO₂).
              </p>
              <p>
                La carboxiterapia es uno de los procedimientos más utilizados para revitalizar la zona ocular sin necesidad de cirugía.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 4: BENEFICIOS ─────────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold mb-4 text-white">Beneficios de la Carboxiterapia para Ojeras</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "Ayuda a disminuir la apariencia de las ojeras.",
              "Favorece una mirada más descansada.",
              "Mejora la luminosidad del contorno de ojos.",
              "Procedimiento mínimamente invasivo.",
              "Sin cirugía.",
              "Sesiones rápidas.",
              "Atención personalizada.",
              "Tratamiento profesional en Turrialba."
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.05 } } }}
                className="flex items-center gap-4 p-4 border-b border-white/10 group hover:bg-white/5 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-white/90 font-medium text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 5: ¿QUÉ ES LA CARBOXITERAPIA? ──────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
                ¿Cómo Funciona el Tratamiento?
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                La carboxiterapia consiste en la aplicación controlada de CO₂ medicinal en el área tratada para estimular procesos relacionados con la circulación, oxigenación y regeneración natural de la piel.
              </p>
              <p className="text-stone-700 font-bold mb-6">Es utilizada frecuentemente para ayudar a mejorar:</p>
              <div className="space-y-3">
                {["Ojeras oscuras", "Bolsas debajo de los ojos", "Apariencia de cansancio", "Flacidez leve", "Luminosidad de la piel"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-stone-600 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
               <div className="aspect-[4/5] bg-stone-100 overflow-hidden rounded-sm">
                  <img src="/images/carboxiterapia-ojeras.webp" alt="Tratamiento de Carboxiterapia para Ojeras" className="w-full h-full object-cover" />
               </div>
               <div className="absolute -bottom-6 -left-6 bg-primary p-8 shadow-xl hidden sm:block">
                  <Zap className="w-8 h-8 text-white" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 6: ¿PARA QUIÉN? ───────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
              Este Tratamiento Puede Ser Ideal Para Ti Si Presentas:
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Ojeras oscuras.",
              "Bolsas debajo de los ojos.",
              "Mirada cansada.",
              "Piel apagada en el contorno ocular.",
              "Signos leves de envejecimiento.",
              "Líneas finas alrededor de los ojos."
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 border border-stone-200 flex items-center gap-4 group hover:border-primary transition-colors">
                <Target className="w-5 h-5 text-primary shrink-0" />
                <span className="text-stone-700 font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 7: AUTORIDAD LOCAL ────────────────── */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">
              ¿Por qué Elegir MJ Fisio Estética & Spa en Turrialba?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="grid grid-cols-1 gap-4">
               {[
                 "Atención personalizada.",
                 "Protocolos faciales profesionales.",
                 "Tratamientos estéticos avanzados.",
                 "Ambiente cómodo y seguro.",
                 "Evaluación individualizada.",
                 "Excelente ubicación en Turrialba.",
                 "Seguimiento profesional."
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                   <Sparkles className="w-4 h-4 text-primary shrink-0" />
                   <span className="text-stone-700 font-medium">{item}</span>
                 </div>
               ))}
            </div>
            <div className="bg-stone-50 p-8 flex items-center justify-center">
               <p className="text-stone-600 text-center leading-relaxed italic">
                 Nos enfocamos en ayudarte a mejorar la apariencia de tu piel mediante tratamientos personalizados y tecnología estética moderna.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 8: ZONAS QUE ATENDEMOS (SEO LOCAL) ── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">
                Atendemos Pacientes de Todo Turrialba y Cartago
              </h2>
              <p className="text-stone-600 mb-8 leading-relaxed">
                Recibimos pacientes de todas estas zonas cercanas, brindando la mejor atención en medicina estética y bienestar.
              </p>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                {[
                  "Turrialba Centro", "La Suiza", "Santa Cruz", "Pavones", "Tucurrique",
                  "Juan Viñas", "Pacayitas", "Cartago Centro", "Paraíso", "Cervantes", "Jiménez"
                ].map((zona, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="text-stone-700 text-sm font-medium">{zona}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="bg-white p-10 border border-stone-200 shadow-sm text-center">
               <p className="text-stone-600 text-lg leading-relaxed mb-8">
                 Si buscas un tratamiento para ojeras cerca de Turrialba, estaremos encantados de ayudarte.
               </p>
               <a
                  href={waLink}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 font-bold tracking-widest uppercase hover:bg-stone-900 transition-colors text-xs"
               >
                  <MessageCircle className="w-4 h-4" />
                  CONSULTAR DISPONIBILIDAD
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 9: PROCESO ────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-stone-900">¿Cómo Es Tu Primera Valoración?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { s: "Paso 1", t: "Agenda tu cita por WhatsApp.", d: "El primer paso para tu transformación." },
              { s: "Paso 2", t: "Realizamos una evaluación personalizada.", d: "Analizamos tu caso específico y objetivos." },
              { s: "Paso 3", t: "Determinamos el protocolo recomendado.", d: "Diseñamos el plan de sesiones ideal para ti." },
              { s: "Paso 4", t: "Iniciamos tu tratamiento.", d: "Comienza tu camino hacia una mirada revitalizada." }
            ].map((step, i) => (
              <div key={i} className="relative bg-stone-50 p-8 border border-stone-100 group hover:border-primary transition-colors">
                <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block font-sans">{step.s}</span>
                <h4 className="text-lg font-serif font-bold text-stone-900 mb-4 leading-tight">{step.t}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 10: LEAD MAGNET ──────────────────── */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-white/60 text-xs font-bold tracking-[0.4em] uppercase mb-4">🎁 RECURSO GRATUITO EXCLUSIVO</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Descarga Gratis Nuestra Guía:</h2>
              <p className="text-2xl font-serif mb-10 italic">"7 Consejos para Mejorar la Apariencia de las Ojeras"</p>

              <div className="max-w-xl mx-auto bg-white p-10 text-stone-900 shadow-2xl">
                 <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-4">💌 Solicítala enviando la palabra:</p>
                 <p className="text-5xl font-serif font-bold text-primary mb-10 underline decoration-stone-200 uppercase tracking-widest">“OJERAS”</p>
                 <p className="text-sm text-stone-500 leading-relaxed mb-8 font-medium italic">Aprenderás:</p>

                 <div className="grid grid-cols-1 gap-y-3 mb-10 text-left max-w-xs mx-auto">
                   {[
                     "Hábitos que pueden influir en las ojeras.",
                     "Cuidados recomendados para el contorno de ojos.",
                     "Cómo complementar tus tratamientos estéticos."
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3">
                       <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                       <span className="text-sm font-bold text-stone-700">{item}</span>
                     </div>
                   ))}
                 </div>

                 <a
                    href={waLink}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-stone-900 text-white py-5 font-bold tracking-widest uppercase hover:bg-primary transition-colors text-xs"
                 >
                    <MessageCircle className="w-5 h-5" />
                    SOLICITAR GUÍA POR WHATSAPP
                 </a>
              </div>
           </motion.div>
        </div>
        <Sparkles className="absolute -bottom-20 -left-20 w-64 h-64 text-white/5 rotate-12" />
      </section>

      {/* ── SECCIÓN 11: FAQ SECTION ──────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-serif font-bold text-stone-900">Preguntas Frecuentes</h2>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="border-t border-stone-200"
          >
            {[
              { q: "¿Dónde realizan el tratamiento para ojeras en Turrialba?", a: "En MJ Fisio Estética & Spa, Turrialba, Costa Rica." },
              { q: "¿La carboxiterapia para ojeras duele?", a: "Puede generar molestias leves y temporales dependiendo de cada persona." },
              { q: "¿Cuánto dura una sesión?", a: "Entre 20 y 40 minutos aproximadamente." },
              { q: "¿Cuántas sesiones necesito?", a: "La cantidad varía según cada caso y será definida durante la valoración." },
              { q: "¿Es un procedimiento quirúrgico?", a: "No, es un tratamiento estético no quirúrgico." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <FaqItem question={item.q} answer={item.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 12: CTA FINAL ────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              Agenda Tu Valoración para Ojeras en Turrialba
            </h2>
            <p className="text-stone-600 text-lg mb-12 max-w-2xl mx-auto">
              Recupera una mirada más fresca, luminosa y descansada con nuestro enfoque profesional y personalizado.
            </p>

            <div className="bg-stone-50 p-10 border border-stone-200 mb-12 flex flex-col md:flex-row items-center justify-center gap-12">
               <div className="text-left">
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">📍 MJ Fisio Estética & Spa</h3>
                  <p className="text-stone-500 text-sm">Turrialba, Cartago, Costa Rica</p>
               </div>
               <div className="flex flex-col gap-4">
                  <a
                    href={waLink}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all text-xs"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Reserva por WhatsApp
                  </a>
                  <a
                    href={waLink}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border border-stone-900 text-stone-900 px-10 py-4 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-all text-xs"
                  >
                    <Star className="w-4 h-4" />
                    Quiero Agendar Mi Valoración
                  </a>
               </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
