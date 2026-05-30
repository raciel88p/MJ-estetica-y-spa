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
  Check,
  Heart,
  Droplets
} from "lucide-react";
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
            <p className="text-stone-500 leading-relaxed pb-6 text-sm">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function LipFillerContent({ service, waLink }: { service: ServicePageData; waLink: string }) {
  return (
    <div className="bg-white">
      {/* ── INTRO SECTION ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Armonización Labial</span>
            </div>
            <p className="text-stone-600 text-lg leading-relaxed mb-6 italic">
              ¿Te gustaría tener unos labios más definidos, hidratados y atractivos sin perder tu esencia natural?
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              En <span className="font-bold text-stone-900">MJ Estética & Wellness Center</span> entendemos que los labios no deben verse artificiales ni exagerados. Por eso diseñamos protocolos de relleno de labios enfocados en la armonización facial, la naturalidad y la belleza personalizada. Nuestro objetivo no es cambiar tu rostro, es ayudarte a resaltar lo mejor de ti.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
              {[
                "✅ Resultados naturales",
                "✅ Valoración personalizada",
                "✅ Armonización facial profesional",
                "✅ Protocolos individualizados",
                "✅ Experiencia estética premium"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-stone-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-8 bg-stone-50 border-l-4 border-primary">
               <p className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4">🎁 RECURSO EXCLUSIVO</p>
               <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">Reclama tu Guía Gratuita</h3>
               <p className="text-stone-600 leading-relaxed mb-6">
                 <strong>"Cómo lograr mejores resultados con tu relleno de labios y mantenerlos hermosos por más tiempo"</strong>. Además recibirás información exclusiva sobre cuidados, recomendaciones y consejos para potenciar tus resultados.
               </p>
               <div className="flex flex-col gap-4">
                  <p className="text-stone-900 font-bold">Solicita tu guía gratuita y agenda tu valoración estética hoy mismo.</p>
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                     Escríbenos por WhatsApp <MessageCircle className="w-4 h-4" />
                  </a>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT IS SECTION ──────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">¿Qué es el Relleno de Labios?</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              El relleno de labios es un procedimiento estético utilizado para mejorar la apariencia, hidratación, definición y armonía de los labios mediante técnicas especializadas adaptadas a cada persona.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              En MJ Estética & Wellness Center entendemos que cada rostro es único. Por eso realizamos una valoración personalizada para diseñar un resultado acorde con tus rasgos faciales, objetivos estéticos y estilo personal.
            </p>
          </motion.div>

          <div className="bg-white p-10 border border-stone-200 shadow-sm">
             <h3 className="text-xl font-serif font-bold text-stone-900 mb-8">El procedimiento puede ayudar a mejorar:</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                 "Hidratación labial",
                 "Definición del contorno",
                 "Perfilado natural",
                 "Volumen personalizado",
                 "Simetría visual",
                 "Armonización facial",
                 "Apariencia rejuvenecida"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                   <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                   <span className="text-stone-700 font-medium text-sm">{item}</span>
                 </div>
               ))}
             </div>
             <p className="mt-12 text-center text-primary font-bold italic">Nuestro enfoque siempre busca resultados elegantes y naturales.</p>
          </div>
        </div>
      </section>

      {/* ── NATURAL RESULTS ─────────────────────────── */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">¿Los resultados se ven naturales?</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              Esta es una de las preguntas más frecuentes. La respuesta es <span className="font-bold text-stone-900">sí</span>. Cuando el procedimiento es realizado bajo una valoración adecuada y un diseño facial personalizado, el resultado puede verse armónico, elegante y acorde con las características naturales del rostro.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
              {[
                "💋 Labios más hidratados",
                "💋 Mejor definición",
                "💋 Recuperar volumen perdido",
                "💋 Perfilado sutil",
                "💋 Un aspecto más juvenil"
              ].map((item, i) => (
                <div key={i} className="p-4 bg-stone-50 border border-stone-100 rounded-sm">
                   <span className="text-stone-800 font-bold text-[10px] uppercase tracking-wider">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-stone-500 italic">Ese es precisamente el enfoque que seguimos en MJ.</p>
          </motion.div>
        </div>
      </section>

      {/* ── IMPROVEMENTS ─────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">¿Qué puede ayudar a mejorar este procedimiento?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { t: "Hidratación Labial", d: "Ayuda a mejorar la apariencia de labios resecos o con poca hidratación visual." },
              { t: "Perfilado Natural", d: "Permite definir mejor el contorno labial manteniendo una apariencia elegante." },
              { t: "Volumen Personalizado", d: "Cada protocolo se adapta según los objetivos de la persona." },
              { t: "Armonización Facial", d: "Analizamos proporciones y equilibrio facial antes de realizar cualquier procedimiento." },
              { t: "Bienestar Estético", d: "La armonización facial puede formar parte de sentirse más segura y cómoda." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 border border-stone-200 shadow-sm hover:border-primary transition-colors group">
                <h3 className="font-serif font-bold text-stone-900 mb-3 text-sm group-hover:text-primary transition-colors">{item.t}</h3>
                <p className="text-stone-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS SECTION ─────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-8 text-white">Beneficios del Relleno de Labios</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "Aspecto más hidratado",
              "Perfilado más definido",
              "Volumen natural personalizado",
              "Armonización facial elegante",
              "Apariencia más fresca",
              "Resultados progresivos",
              "Tratamiento adaptado a cada paciente",
              "Seguimiento profesional",
              "Experiencia premium",
              "Alta personalización"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.05}}}}
                className="flex items-center gap-4 p-4 border-b border-white/10 group hover:bg-white/5 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-white/90 font-medium text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERSONALIZED TARGETS ────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-stone-900">Resultados Personalizados Según Tu Objetivo</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             {[
               {
                 t: "Hidratación Labial Natural",
                 d: "Ideal para quienes buscan labios con apariencia más saludable e hidratada.",
                 b: ["Aspecto más fresco", "Better textura visual", "Resultado muy natural"],
                 cta: "Agenda tu valoración"
               },
               {
                 t: "Perfilado de Labios",
                 d: "Pensado para quienes desean definir mejor el contorno labial.",
                 b: ["Mejor definición", "Apariencia más elegante", "Mayor armonía facial"],
                 cta: "Consulta disponibilidad"
               },
               {
                 t: "Volumen Sutil y Elegante",
                 d: "Diseñado para quienes desean aumentar volumen sin exageraciones.",
                 b: ["Aspecto natural", "Mayor presencia labial", "Resultado personalizado"],
                 cta: "Agenda tu valoración"
               },
               {
                 t: "Armonización Facial Premium",
                 d: "Los labios son una pieza importante dentro del equilibrio facial.",
                 b: ["Mejor proporción visual", "Diseño adaptado al rostro", "Resultado integral"],
                 cta: "Escríbenos por WhatsApp"
               }
             ].map((item, i) => (
               <div key={i} className="p-10 bg-stone-50 border border-stone-100 flex flex-col">
                  <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">{item.t}</h3>
                  <p className="text-stone-600 mb-8">{item.d}</p>
                  <div className="mb-10">
                     <p className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-4">Beneficios</p>
                     <ul className="space-y-2">
                        {item.b.map((ben, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-stone-500 text-sm">
                            <span className="w-1 h-1 bg-primary rounded-full" />
                            {ben}
                          </li>
                        ))}
                     </ul>
                  </div>
                  <div className="mt-auto">
                    <a href={waLink} target="_blank" rel="noopener noreferrer" className="text-primary font-bold text-sm flex items-center gap-2 hover:translate-x-1 transition-transform">
                       👉 {item.cta}
                    </a>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ──────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-stone-900">¿Cómo Funciona el Procedimiento?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { s: "Paso 1", t: "Valoración Estética Personalizada", d: "Analizamos tus objetivos, proporciones faciales y expectativas." },
              { s: "Paso 2", t: "Diseño del Resultado Ideal", d: "Creamos una estrategia personalizada enfocada en armonización y naturalidad." },
              { s: "Paso 3", t: "Aplicación del Procedimiento", d: "Se realiza el tratamiento siguiendo protocolos profesionales y personalizados." },
              { s: "Paso 4", t: "Recomendaciones y Seguimiento", d: "Recibes indicaciones posteriores para apoyar tu recuperación y resultados." }
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

      {/* ── RECOMMENDED FOR ──────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">¿Para Quién se Recomienda?</h2>
            <p className="text-stone-500">Este procedimiento puede ser ideal para personas que buscan:</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Armonización facial",
              "Hidratación labial",
              "Perfilado elegante",
              "Volumen natural",
              "Mejor definición de labios",
              "Protocolos estéticos premium",
              "Rejuvenecimiento facial no quirúrgico",
              "Resultados personalizados"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-stone-50 rounded-sm">
                <Target className="w-4 h-4 text-primary shrink-0" />
                <span className="text-stone-700 font-medium text-xs">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900">Lo Que Dicen Nuestras Pacientes</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "“Me encantó que el resultado se viera natural. Mis labios se ven más definidos sin perder mi esencia.”",
              "“Buscaba hidratación y un poco más de volumen. El resultado superó mis expectativas.”",
              "“La valoración fue muy profesional y me ayudaron a elegir el resultado ideal para mi rostro.”"
            ].map((text, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.1}}}}
                className="bg-white p-8 border border-stone-100 relative shadow-sm text-center"
              >
                <p className="text-stone-600 mb-6 leading-relaxed italic text-sm">{text}</p>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-3 h-3 fill-primary text-primary" />)}
                </div>
                <p className="text-primary text-[10px] font-bold tracking-widest uppercase">— Paciente MJ</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12 text-center">
            <h2 className="text-4xl font-serif font-bold text-stone-900">Preguntas Frecuentes</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="border-t border-stone-200">
            {[
              { q: "¿Qué es el relleno de labios?", a: "Es un procedimiento estético orientado a mejorar hidratación, perfilado y volumen de forma personalizada." },
              { q: "¿Los resultados se ven naturales?", a: "Sí. El objetivo es lograr armonización facial y resultados acordes con cada persona." },
              { q: "¿Cuánto dura el procedimiento?", a: "La duración puede variar según cada caso y valoración profesional." },
              { q: "¿Se puede personalizar el volumen?", a: "Sí. Cada protocolo se adapta a los objetivos individuales." },
              { q: "¿Tiene recuperación?", a: "Cada paciente puede experimentar procesos diferentes. Durante la valoración se explican los cuidados recomendados." },
              { q: "¿Qué cuidados posteriores requiere?", a: "Se brindan indicaciones específicas según cada caso." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <FaqItem question={item.q} answer={item.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">¿Por Qué Elegir MJ Estética & Wellness Center?</h2>
            <p className="text-stone-600 text-lg mb-12 max-w-2xl mx-auto">Porque entendemos que la verdadera belleza no consiste en transformar tu rostro. Consiste en resaltar lo mejor de ti.</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 text-left">
              {[
                "Atención profesional",
                "Protocolos personalizados",
                "Resultados naturales",
                "Experiencia estética premium",
                "Enfoque en armonización",
                "Seguimiento personalizado",
                "Ambiente seguro",
                "Técnicas actualizadas"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white border border-stone-200 rounded-sm">
                   <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                   <span className="text-stone-800 font-bold text-[10px] uppercase tracking-wider">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">Agenda Tu Valoración Estética</h2>
            <p className="text-stone-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Tus labios pueden verse más hidratados, definidos y armoniosos sin perder naturalidad. Descubre cuál es el protocolo ideal para ti.
            </p>

            <div className="bg-stone-50 p-10 border border-stone-200 mb-12">
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm font-bold text-stone-700 mb-10">
                  <span className="flex items-center justify-center gap-2">🎁 Solicita tu Guía Gratuita</span>
                  <span className="flex items-center justify-center gap-2">📲 Escríbenos por WhatsApp</span>
                  <span className="flex items-center justify-center gap-2">📅 Agenda tu valoración</span>
               </div>
               <p className="text-2xl font-serif text-primary font-bold mt-2 flex items-center justify-center gap-2">
                 <Heart className="w-6 h-6 fill-primary" />
                 Descubre tu mejor versión con resultados naturales y elegantes.
               </p>
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all text-xs"
            >
              <MessageCircle className="w-5 h-5" />
              SOLICITAR VALORACIÓN AHORA
            </a>

            <div className="mt-16 pt-10 border-t border-stone-100 flex flex-col items-center">
               <p className="text-stone-900 font-serif font-bold text-lg mb-2">MJ Estética & Wellness Center</p>
               <p className="text-stone-400 text-[10px] font-bold uppercase tracking-widest">📍 Turrialba, Costa Rica — Atención profesional en armonización facial y bienestar estético</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
