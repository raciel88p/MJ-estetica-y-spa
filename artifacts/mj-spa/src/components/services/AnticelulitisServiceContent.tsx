import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  Instagram,
  Quote,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import type { ServicePageData } from '../../data/services';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
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

interface Props {
  service: ServicePageData;
  waLink: string;
}

export default function AnticelulitisServiceContent({ service, waLink }: Props) {
  return (
    <div className="bg-white">
      {/* ── INTRO SECTION ────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              ¿Te gustaría lucir una piel más <span className="italic font-light text-primary">lisa, firme y uniforme?</span>
            </h2>
            <p className="text-xl text-stone-600 font-serif italic mb-12">
              Descubre nuestro Tratamiento Anticelulitis en MJ Estética & Wellness Center
            </p>
            <div className="space-y-6 text-stone-600 leading-relaxed text-lg max-w-3xl mx-auto">
              <p>
                La celulitis es una de las preocupaciones estéticas más comunes en mujeres de todas las edades. Aunque es completamente natural, muchas personas desean mejorar la apariencia de su piel para sentirse más cómodas, seguras y confiadas.
              </p>
              <p>
                En MJ Estética & Wellness Center hemos desarrollado protocolos corporales personalizados que ayudan a mejorar progresivamente la apariencia de la piel, promoviendo una sensación de bienestar, autocuidado y confianza.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LEAD MAGNET (GIFT) ────────────────────────── */}
      <section className="py-24 bg-stone-50 border-y border-stone-100 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-10 md:p-16 shadow-sm border border-stone-100 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Regalo Exclusivo</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">
                Por comentar la palabra <span className="text-primary uppercase tracking-tighter">ANTICELULITIS</span>
              </h2>
              <p className="text-stone-600 text-lg mb-8 italic">
                Queremos obsequiarte nuestra guía gratuita:
              </p>
              <p className="text-2xl font-serif font-bold text-stone-900 mb-8">
                "7 hábitos que potencian los resultados de cualquier tratamiento anticelulitis"
              </p>
              <p className="text-stone-500 mb-0">
                Descubre recomendaciones simples que pueden ayudarte a complementar tus tratamientos corporales y mejorar tu experiencia de bienestar.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-80">
              <div className="bg-stone-900 p-8 text-center text-white rounded-sm">
                <p className="text-primary text-[10px] font-bold tracking-widest uppercase mb-6">Solicítala ahora</p>
                <p className="text-sm text-white/70 mb-8 leading-relaxed">Haz clic en el botón al finalizar esta página o contáctanos por Instagram.</p>
                <a
                  href="https://www.instagram.com/mj_fisioestetica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center gap-2 bg-primary text-white py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-primary/90 transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  Ir a Instagram
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PAIN POINTS (IDENTIFY) ────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">¿Te identificas con alguna de estas situaciones?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Sientes que la apariencia de tu piel ha cambiado con el tiempo.",
              "Has probado cremas o productos sin notar cambios visibles.",
              "Te incomoda usar vestidos, shorts o ropa ajustada.",
              "Deseas mejorar la textura y apariencia de ciertas zonas corporales.",
              "Buscas una profesional acompañada por especialistas."
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.05}}}}
                className="flex items-start gap-4 p-6 bg-stone-50 border border-stone-100"
              >
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-stone-700 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-12 text-center text-stone-600 italic text-lg">
            Si respondiste sí a alguna de ellas, este tratamiento puede ser ideal para ti.
          </motion.p>
        </div>
      </section>

      {/* ── WHAT IS IT ────────────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">La ciencia del bienestar</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10 text-white">¿Qué es nuestro tratamiento anticelulitis?</h2>
            <div className="space-y-8 text-white/80 text-lg leading-relaxed max-w-3xl">
              <p>
                Es un protocolo corporal personalizado diseñado para mejorar progresivamente la apariencia de la piel mediante técnicas estéticas no invasivas que buscan favorecer la circulación, estimular tejidos y complementar procesos de remodelación corporal.
              </p>
              <p className="p-8 border-l-2 border-primary bg-white/5 italic">
                Cada persona presenta características distintas, por eso realizamos una valoración previa para determinar el protocolo más adecuado según tus objetivos.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* ── BENEFITS ─────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Beneficios que nuestras pacientes suelen valorar</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "Piel más uniforme", d: "Apariencia de la piel visiblemente más lisa y suave.", i: "✨" },
              { t: "Firmeza corporal", d: "Mejora la sensación de tonicidad en las zonas tratadas.", i: "💪" },
              { t: "Bienestar integral", d: "Complemento ideal para tus programas de cuidado personal.", i: "🌿" },
              { t: "Autocuidado", d: "Una experiencia relajante enfocada 100% en ti.", i: "🧖‍♀️" },
              { t: "Adaptado a ti", d: "Protocolos que se ajustan a tus necesidades individuales.", i: "🎯" },
              { t: "Atención experta", d: "Acompañamiento profesional durante todo el proceso.", i: "👩‍⚕️" }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.08}}}}
                className="p-8 border border-stone-100 bg-stone-50 hover:bg-white hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500"
              >
                <span className="text-3xl mb-6 block">{benefit.i}</span>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">{benefit.t}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{benefit.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION (IMAGINE) ──────────────────────────── */}
      <section className="py-24 bg-stone-50 overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-10 uppercase tracking-tight">Imagina cómo podrías sentirte</h2>
             <div className="space-y-6 mb-16 text-xl md:text-2xl font-serif italic text-stone-600">
                <p>Visualiza usar esa ropa que tanto te gusta sin preocuparte por la apariencia de tu piel.</p>
                <p>Imagina mirarte al espejo y sentirte más cómoda con tu imagen.</p>
                <p>Piensa en dedicarte un espacio para ti, para tu bienestar y autocuidado.</p>
             </div>
             <div className="bg-white p-10 shadow-sm border border-stone-200 inline-block text-left max-w-2xl mx-auto">
               <div className="space-y-6">
                 <p className="text-stone-900 font-bold text-2xl border-l-4 border-primary pl-6">No se trata únicamente de estética.</p>
                 <p className="text-stone-900 font-bold text-2xl border-l-4 border-primary pl-6">Se trata de sentirte bien contigo misma.</p>
               </div>
             </div>
           </motion.div>
        </div>
      </section>

      {/* ── WHY RESULTS FAIL ──────────────────────────── */}
      <section className="py-24 bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">¿Por qué muchas personas no obtienen resultados?</h2>
              <p className="text-stone-600 text-lg mb-8 leading-relaxed italic">
                Porque suelen enfocarse únicamente en productos cosméticos o soluciones aisladas.
              </p>
              <p className="text-stone-600 mb-10 leading-relaxed">
                La apariencia de la piel está influenciada por múltiples factores:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Hábitos diarios", "Hidratación",
                  "Actividad física", "Alimentación",
                  "Cuidados corporales", "Protocolos estéticos"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-stone-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-10 font-serif font-bold text-xl text-stone-900">
                Por eso en MJ trabajamos desde un enfoque integral y personalizado.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
              <div className="aspect-[4/5] bg-stone-100 overflow-hidden">
                <img
                  src="/images/about-us.webp"
                  alt="Experiencia MJ"
                  className="w-full h-full object-cover grayscale opacity-80"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary p-8 text-white max-w-xs hidden md:block">
                <p className="text-sm font-bold tracking-widest uppercase mb-2">Compromiso MJ</p>
                <p className="text-base italic leading-relaxed">“Abordamos la celulitis no como un problema aislado, sino como parte de tu bienestar corporal total.”</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WELLNESS EXPERIENCE ──────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">Nuestra Experiencia Wellness Corporal</h2>
            <p className="text-stone-600 text-lg">Cuando agendas tu cita no solo recibes un tratamiento. Recibes una experiencia diseñada para tu bienestar.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { t: "Espacios cómodos", i: "✨" },
              { t: "Atención individual", i: "✨" },
              { t: "Protocolos únicos", i: "✨" },
              { t: "Ambiente relajante", i: "✨" },
              { t: "Acompañamiento", i: "✨" },
              { t: "Recomendaciones", i: "✨" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 border border-stone-200 text-center">
                <span className="text-xl mb-3 block">{item.i}</span>
                <p className="text-stone-900 font-bold text-sm uppercase tracking-wide">{item.t}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-stone-500 italic">Cada sesión está pensada para convertirse en un momento de autocuidado y renovación.</p>
        </div>
      </section>

      {/* ── STEPS (HOW IT WORKS) ──────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900">¿Cómo funciona?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { s: "Paso 1", t: "Valoración personalizada", d: "Analizamos tus objetivos y características individuales." },
              { s: "Paso 2", t: "Diseño del protocolo", d: "Seleccionamos el tratamiento más adecuado para ti." },
              { s: "Paso 3", t: "Aplicación del procedimiento", d: "Realizamos la sesión siguiendo protocolos profesionales." },
              { s: "Paso 4", t: "Recomendaciones complementarias", d: "Te orientamos sobre hábitos que pueden ayudar a potenciar tu experiencia." }
            ].map((step, i) => (
              <div key={i} className="relative">
                <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-4 block">{step.s}</span>
                <h4 className="text-lg font-serif font-bold text-stone-900 mb-4">{step.t}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{step.d}</p>
                {i < 3 && <ArrowRight className="hidden md:block absolute -right-4 top-10 w-4 h-4 text-stone-200" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECOMMENDED FOR ───────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-white">¿Para quién está recomendado?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                "Personas que desean mejorar la apariencia de la piel.",
                "Mujeres que buscan tratamientos corporales personalizados.",
                "Personas interesadas en wellness y autocuidado.",
                "Quienes desean complementar programas de remodelación corporal.",
                "Personas que valoran experiencias premium de bienestar."
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-white/80 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Lo que dicen nuestras pacientes</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Me encantó la atención y el acompañamiento durante todo el proceso.",
              "Las sesiones se sienten relajantes y me ayudaron a dedicarme tiempo para mí.",
              "Desde la valoración entendieron exactamente lo que buscaba.",
              "El ambiente es hermoso y la atención excelente."
            ].map((text, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.1}}}}
                className="bg-stone-50 p-8 border border-stone-100 relative"
              >
                <Quote className="w-8 h-8 text-primary/10 absolute top-4 right-4" />
                <p className="text-stone-600 mb-6 leading-relaxed italic">“{text}”</p>
                <p className="text-primary text-[10px] font-bold tracking-widest uppercase">— Paciente MJ</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE MJ ────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-10 md:p-16 shadow-sm border border-stone-100">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">¿Por qué elegir MJ Estética & Wellness Center?</h2>
            <p className="text-stone-600 mb-10 leading-relaxed italic text-lg">
              Porque entendemos que cada cuerpo es diferente. No aplicamos protocolos genéricos.
            </p>
            <p className="text-stone-900 font-bold text-lg mb-10">Diseñamos experiencias personalizadas enfocadas en bienestar, autocuidado y atención integral.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
              {[
                "Valoración individual", "Protocolos corporales personalizados",
                "Atención cercana y profesional", "Ambiente premium",
                "Experiencia wellness integral", "Ubicación accesible en Turrialba"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 border-b border-stone-50 pb-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium text-stone-800 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ SECTION ───────────────────────────────── */}
      <section className="py-24 bg-white border-t border-stone-100">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12 text-center">
            <h2 className="text-4xl font-serif font-bold text-stone-900">Preguntas Frecuentes</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="border-t border-stone-200">
            {[
              { q: "¿Cuántas sesiones necesito?", a: "La cantidad de sesiones puede variar según cada persona y sus objetivos. Durante la valoración te orientaremos." },
              { q: "¿Es doloroso?", a: "La experiencia suele ser cómoda y adaptada a cada paciente." },
              { q: "¿Puedo combinarlo con otros tratamientos?", a: "Sí. Existen protocolos complementarios que pueden evaluarse durante tu consulta." },
              { q: "¿Cuánto dura una sesión?", a: "La duración depende del tratamiento seleccionado y se explica durante la valoración." },
              { q: "¿Los resultados son inmediatos?", a: "Cada persona responde de forma diferente y los resultados suelen observarse progresivamente." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <FaqItem question={item.q} answer={item.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FINAL LEAD MAGNET ────────────────────────── */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-white/60 text-xs font-bold tracking-[0.4em] uppercase mb-4">🎁 REGALO EXCLUSIVO</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Reclama tu guía gratuita</h2>
              <p className="text-2xl font-serif mb-10 italic">"7 hábitos que potencian los resultados de cualquier tratamiento anticelulitis"</p>
              <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                Además, recibe información sobre nuestras promociones y disponibilidad de citas.
              </p>

              <div className="max-w-md mx-auto bg-white p-10 text-stone-900 shadow-2xl">
                 <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-4">💌 Comenta la palabra:</p>
                 <p className="text-5xl font-serif font-bold text-primary mb-10 underline decoration-stone-200">“ANTICELULITIS”</p>
                 <p className="text-sm text-stone-500 leading-relaxed mb-10">y recibe automáticamente la guía gratuita + información exclusiva de nuestras sesiones.</p>
                 <a
                    href="https://www.instagram.com/mj_fisioestetica/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-stone-900 text-white py-4 font-bold tracking-widest uppercase hover:bg-primary transition-colors text-xs"
                 >
                    <Instagram className="w-4 h-4" />
                    IR A INSTAGRAM
                 </a>
              </div>
           </motion.div>
        </div>
        <Sparkles className="absolute -bottom-20 -left-20 w-64 h-64 text-white/5 rotate-12" />
      </section>

      {/* ── FINAL CTA ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">Agenda tu Valoración Corporal Hoy</h2>
            <p className="text-stone-600 text-lg mb-12 leading-relaxed">Las citas son limitadas para garantizar una atención personalizada.</p>

            <div className="flex flex-col gap-4 max-w-sm mx-auto">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-5 font-bold tracking-[0.15em] uppercase hover:bg-stone-900 transition-all text-xs"
              >
                <MessageCircle className="w-5 h-5" />
                Haz clic aquí y agenda tu valoración
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-stone-200 text-stone-600 px-8 py-5 font-bold tracking-[0.15em] uppercase hover:bg-stone-50 transition-all text-xs"
              >
                Consulta disponibilidad por WhatsApp
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold text-xs uppercase tracking-[0.2em] border-b border-primary/20 pb-1 self-center mt-4 hover:border-primary transition-colors"
              >
                Descubre cuál es el protocolo ideal para ti
              </a>
            </div>

            <div className="mt-24 pt-12 border-t border-stone-100">
               <p className="font-serif font-bold text-2xl text-stone-900 mb-2">MJ Estética & Wellness Center</p>
               <p className="text-stone-500 text-sm">Bienestar, autocuidado y experiencias corporales premium en Turrialba.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
