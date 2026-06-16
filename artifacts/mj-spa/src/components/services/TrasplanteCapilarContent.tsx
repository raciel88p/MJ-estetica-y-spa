import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Quote,
  Star,
  Zap,
  Target,
  ShieldCheck,
  Award,
  UserCheck,
  Check
} from "lucide-react";
import { useState } from "react";
import type { ServicePageData } from "@/data/services";

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

export function TrasplanteCapilarContent({ service, waLink }: { service: ServicePageData; waLink: string }) {
  return (
    <div className="bg-white">
      {/* ── INTRO SECTION ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Restauración Capilar</span>
            </div>
            <p className="text-stone-600 text-lg leading-relaxed mb-6 italic">
              ¿Te preocupa la pérdida de cabello y cómo afecta tu imagen personal?
            </p>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed mb-10">
              <p>Cada vez que te miras al espejo, notas menos densidad, entradas más marcadas o zonas donde el cabello ya no luce igual.</p>
              <p>Quizás has probado productos, shampoos, suplementos o tratamientos sin obtener los resultados que esperabas.</p>
              <p>La realidad es que la pérdida capilar puede impactar mucho más que la apariencia física. Puede afectar la confianza, la seguridad personal e incluso la forma en que te relacionas con los demás.</p>
              <p>Pero existe una alternativa diseñada para quienes desean mejorar su apariencia capilar de forma progresiva, natural y personalizada.</p>
            </div>

            <div className="mt-16 p-8 bg-stone-50 border-l-4 border-primary">
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">Descubre el Trasplante Capilar en MJ Estética & Wellness Center</h3>
              <p className="text-stone-600 leading-relaxed mb-6">
                En MJ Estética & Wellness Center, entendemos que cada persona tiene una historia diferente detrás de su pérdida de cabello. Por eso desarrollamos protocolos personalizados orientados a restaurar la apariencia capilar respetando la armonía facial y buscando resultados progresivos y naturales.
              </p>
              <p className="text-stone-900 font-bold">
                Nuestro enfoque no consiste únicamente en recuperar cabello. Buscamos ayudarte a recuperar confianza, seguridad y bienestar estético.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT IS SECTION ──────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">¿Qué es un Trasplante Capilar?</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              El trasplante capilar es un procedimiento diseñado para apoyar la restauración de la apariencia del cabello mediante la redistribución estratégica de folículos capilares. Su objetivo es mejorar visualmente la densidad capilar, reforzar la línea del cabello y crear una apariencia más armónica y natural.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              Cada caso requiere una valoración individualizada para determinar el protocolo más adecuado según:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Patrón de pérdida capilar",
              "Nivel de densidad actual",
              "Características faciales",
              "Expectativas personales",
              "Objetivos estéticos"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white border border-stone-200 shadow-sm rounded-sm">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span className="text-stone-700 font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECOMMENDED FOR ──────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">¿Para quién está recomendado?</h2>
            <p className="text-stone-500">Este procedimiento puede ser una opción para personas que desean mejorar:</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Apariencia de pérdida de cabello",
              "Entradas pronunciadas",
              "Disminución visual de densidad capilar",
              "Línea capilar poco definida",
              "Imagen personal",
              "Confianza y seguridad estética",
              "Armonización facial"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-stone-50 rounded-sm border border-stone-100">
                <Target className="w-4 h-4 text-primary shrink-0" />
                <span className="text-stone-700 font-medium text-xs">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORRIES SECTION ──────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-white">Lo que más preocupa a quienes consideran un Trasplante Capilar</h2>
             <p className="text-white/60 text-lg mb-12">La mayoría de personas nos hacen preguntas similares:</p>
           </motion.div>

           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
              {[
                "“¿Se verá natural?”",
                "“¿Me va a doler?”",
                "“¿Será permanente?”",
                "“¿Cuándo voy a notar resultados?”",
                "“¿Valdrá la pena?”"
              ].map((q, i) => (
                <div key={i} className="p-6 border border-white/10 bg-white/5 italic text-center font-serif text-lg">
                   {q}
                </div>
              ))}
           </div>

           <p className="text-center text-primary font-bold text-lg leading-relaxed">
             Y son preguntas totalmente válidas. Por eso nuestro proceso inicia siempre con una valoración profesional para analizar tu caso y diseñar una estrategia personalizada.
           </p>
        </div>
      </section>

      {/* ── BENEFITS SECTION ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">Beneficios del Trasplante Capilar</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Apariencia Natural", d: "Nuestro objetivo es lograr una integración armónica con tus características faciales." },
              { t: "Mejora Visual de Densidad", d: "Ayuda a crear una apariencia capilar más uniforme y equilibrada." },
              { t: "Resultados Progresivos", d: "La evolución ocurre gradualmente para respetar el ciclo natural del crecimiento capilar." },
              { t: "Confianza Personal", d: "Muchos pacientes reportan sentirse más seguros con su imagen." },
              { t: "Restauración Personalizada", d: "Cada protocolo se adapta a las necesidades específicas de cada paciente." },
              { t: "Seguimiento Profesional", d: "Te acompañamos durante todo el proceso de recuperación y evolución." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp}
                className="bg-stone-50 p-8 border border-stone-100 hover:border-primary/30 transition-all group"
              >
                <h3 className="font-serif font-bold text-stone-900 mb-4 text-lg group-hover:text-primary transition-colors">{item.t}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ──────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-stone-900">¿Cómo funciona el proceso?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { s: "Paso 1", t: "Valoración Capilar", d: "Analizamos tu caso, historial y objetivos estéticos." },
              { s: "Paso 2", t: "Diseño Personalizado", d: "Creamos un plan adaptado a tu patrón de pérdida capilar." },
              { s: "Paso 3", t: "Procedimiento", d: "Se realiza siguiendo protocolos diseñados para maximizar la naturalidad y la armonía visual." },
              { s: "Paso 4", t: "Seguimiento y Recuperación", d: "Recibes acompañamiento para optimizar la evolución y el cuidado posterior." }
            ].map((step, i) => (
              <div key={i} className="relative bg-white p-8 border border-stone-200 shadow-sm group">
                <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block font-sans">{step.s}</span>
                <h4 className="text-lg font-serif font-bold text-stone-900 mb-4 leading-tight">{step.t}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS TIMELINE ──────────────────────────── */}
      <section className="py-24 bg-white">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
               <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">¿Cuándo se empiezan a notar los resultados?</h2>
               <div className="space-y-6 text-stone-600 text-lg leading-relaxed mb-12">
                  <p>Esta es una de las preguntas más frecuentes. La respuesta es sencilla: <span className="font-bold text-stone-900">Los resultados son progresivos.</span></p>
                  <p>Cada paciente evoluciona de forma diferente y los tiempos pueden variar según múltiples factores individuales.</p>
                  <p>Lo importante es comprender que el crecimiento capilar requiere tiempo y seguimiento. La evolución suele observarse gradualmente conforme avanza el proceso de recuperación.</p>
               </div>
            </motion.div>
         </div>
      </section>

      {/* ── TRANSFORMATIONS ──────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900">Historias de Transformación</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { n: "Carlos, 38 años", t: "“Mi mayor miedo era que se notara artificial. Después del proceso, las personas me dicen que me veo más joven, pero nadie nota que me hice un procedimiento.”" },
              { n: "Andrés, 42 años", t: "“Más que recuperar cabello, recuperé confianza para reuniones, fotografías y actividades sociales.”" },
              { n: "Mariana, 35 años", t: "“Buscaba mejorar ciertas áreas con menos densidad y el resultado se integró de forma muy natural.”" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.1}}}}
                className="bg-white p-8 border border-stone-100 relative shadow-sm"
              >
                <Quote className="w-8 h-8 text-primary/10 absolute top-4 right-4" />
                <p className="text-stone-600 mb-6 leading-relaxed italic text-sm">{item.t}</p>
                <p className="text-primary text-[10px] font-bold tracking-widest uppercase">— {item.n}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATOR ───────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">¿Por qué elegir MJ Estética & Wellness Center?</h2>
            <p className="text-stone-600 text-lg mb-12">Porque entendemos que un trasplante capilar no se trata solamente de cabello. Se trata de autoestima, confianza y bienestar.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16 text-left">
              {[
                "Protocolos personalizados",
                "Evaluaciones individuales",
                "Atención profesional",
                "Seguimiento continuo",
                "Enfoque estético integral",
                "Resultados naturales",
                "Ambiente seguro y premium"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-stone-50 rounded-sm">
                   <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                   <span className="text-stone-800 font-bold text-[10px] uppercase tracking-wider">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ SECTION ───────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12 text-center">
            <h2 className="text-4xl font-serif font-bold text-stone-900">Preguntas Frecuentes</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="border-t border-stone-200">
            {[
              { q: "¿El trasplante capilar duele?", a: "La experiencia puede variar entre pacientes. Durante la valoración se explican todos los detalles del procedimiento." },
              { q: "¿Se ve natural?", a: "El objetivo principal es mantener una apariencia armónica y natural adaptada a cada persona." },
              { q: "¿Cuánto dura la recuperación?", a: "Depende de cada caso y de los cuidados posteriores recomendados." },
              { q: "¿Los resultados son inmediatos?", a: "No. La evolución es progresiva y requiere tiempo." },
              { q: "¿Quién es candidato ideal?", a: "Personas con pérdida capilar que desean mejorar la apariencia y densidad del cabello mediante una valoración personalizada." },
              { q: "¿Puede combinarse con otros tratamientos?", a: "Sí, dependiendo de la evaluación profesional realizada." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <FaqItem question={item.q} answer={item.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">Agenda tu Valoración Capilar</h2>
            <p className="text-stone-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Si has llegado hasta aquí, probablemente llevas tiempo buscando una solución para mejorar tu apariencia capilar. El primer paso no es realizar un procedimiento. El primer paso es obtener una evaluación profesional para conocer las opciones disponibles para tu caso.
            </p>

            <div className="bg-stone-50 p-10 border border-stone-200 mb-12">
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm font-bold text-stone-700 mb-10">
                  <span className="flex items-center justify-center gap-2">✅ Diagnóstico profesional</span>
                  <span className="flex items-center justify-center gap-2">✅ Evaluación individual</span>
                  <span className="flex items-center justify-center gap-2">✅ Protocolo personalizado</span>
                  <span className="flex items-center justify-center gap-2 lg:col-start-1">✅ Atención especializada</span>
                  <span className="flex items-center justify-center gap-2">✅ Seguimiento profesional</span>
               </div>
               <p className="text-stone-900 font-serif text-xl italic mb-4">Agenda hoy tu valoración capilar personalizada.</p>
               <p className="text-stone-400 text-sm">Tu nueva imagen puede comenzar con una conversación.</p>
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all text-xs"
            >
              <MessageCircle className="w-5 h-5" />
              CONSULTAR POR WHATSAPP
            </a>

            <div className="mt-16 pt-10 border-t border-stone-100 flex flex-col items-center">
               <p className="text-stone-900 font-serif font-bold text-lg mb-2">MJ Estética & Wellness Center</p>
               <p className="text-stone-400 text-[10px] font-bold uppercase tracking-widest">📍 Turrialba — Estética avanzada, bienestar y armonización facial premium</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
