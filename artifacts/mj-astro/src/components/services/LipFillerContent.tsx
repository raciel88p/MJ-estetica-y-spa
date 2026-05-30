import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Check, ArrowRight, UserCheck, Star, HelpCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-primary transition-colors"
      >
        <span className="text-lg font-serif font-bold text-stone-900">{question}</span>
        <HelpCircle className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180 text-primary' : 'text-stone-300'}`} />
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-stone-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export const LipFillerContent = ({ waLink }: { waLink: string }) => {
  return (
    <>
      {/* ── INTRO / PHILOSOPHY ────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              ¿Te gustaría tener unos labios más definidos, hidratados y atractivos sin perder tu esencia natural?
            </h2>
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed max-w-3xl mx-auto">
              <p>
                En <strong>MJ Estética & Wellness Center</strong> entendemos que los labios no deben verse artificiales ni exagerados.
              </p>
              <p>
                Por eso diseñamos protocolos de relleno de labios enfocados en la <strong>armonización facial, la naturalidad y la belleza personalizada.</strong>
              </p>
              <p className="italic">Nuestro objetivo no es cambiar tu rostro. Nuestro objetivo es ayudarte a resaltar lo mejor de ti.</p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Resultados naturales",
                "Valoración personalizada",
                "Armonización facial profesional",
                "Protocolos individualizados",
                "Experiencia estética premium"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-stone-50 p-4 border border-stone-100 rounded-sm">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-stone-800 font-semibold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LEAD MAGNET ────────────────────────────────── */}
      <section className="py-16 bg-[#040f19] text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-block bg-primary/20 text-primary text-[10px] font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-6 border border-primary/30">
              Obsequio Especial
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6">🎁 Reclama tu Guía Gratuita</h3>
            <p className="text-xl md:text-2xl font-serif italic text-stone-300 mb-8 leading-relaxed">
              "Cómo lograr mejores resultados con tu relleno de labios y mantenerlos hermosos por más tiempo"
            </p>
            <p className="text-stone-400 mb-10 max-w-2xl mx-auto">
              Además recibirás información exclusiva sobre cuidados, recomendaciones y consejos para potenciar tus resultados.
            </p>
            <div className="space-y-6">
              <p className="text-lg font-medium">Solicita tu guía gratuita y agenda tu valoración estética hoy mismo. 👇</p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 font-bold tracking-[0.2em] uppercase hover:bg-primary/90 transition-all rounded-sm"
              >
                <MessageCircle className="w-5 h-5" />
                QUIERO MI GUÍA GRATUITA
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT IS IT? ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">¿Qué es el Relleno de Labios?</h2>
              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p>
                  El relleno de labios es un procedimiento estético utilizado para mejorar la apariencia, hidratación, definición y armonía de los labios mediante técnicas especializadas adaptadas a cada persona.
                </p>
                <p>
                  En <strong>MJ Estética & Wellness Center</strong> entendemos que cada rostro es único. Por eso realizamos una valoración personalizada para diseñar un resultado acorde con tus rasgos faciales, objetivos estéticos y estilo personal.
                </p>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-50 p-10 border border-stone-100 rounded-sm">
              <h4 className="text-xl font-serif font-bold text-stone-900 mb-6">El procedimiento ayuda a mejorar:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Hidratación labial",
                  "Definición del contorno",
                  "Perfilado natural",
                  "Volumen personalizado",
                  "Simetría visual",
                  "Armonización facial",
                  "Apariencia rejuvenecida"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-primary font-bold">✔</span>
                    <span className="text-stone-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-primary font-serif italic font-medium">Nuestro enfoque siempre busca resultados elegantes y naturales.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── NATURAL RESULTS? ───────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">¿Los resultados se ven naturales?</h2>
            <p className="text-xl md:text-2xl font-serif text-stone-300 italic mb-12">Esta es una de las preguntas más frecuentes. La respuesta es sí.</p>
            <div className="bg-white/5 border border-white/10 p-10 rounded-sm text-left backdrop-blur-sm max-w-3xl mx-auto">
              <p className="text-stone-300 leading-relaxed mb-10">
                Cuando el procedimiento es realizado bajo una valoración adecuada y un diseño facial personalizado, el resultado puede verse armónico, elegante y acorde con las características naturales del rostro.
              </p>
              <p className="text-white font-bold mb-6">Muchas personas desean:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
                {["Labios más hidratados", "Mejor definición", "Recuperar volumen perdido", "Perfilado sutil", "Aspecto más juvenil"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xl">💋</span>
                    <span className="text-stone-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-primary font-medium border-t border-white/10 pt-8">
                Sin que otras personas noten exactamente qué cambió. Ese es precisamente el enfoque que seguimos en MJ.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT CAN IT IMPROVE? ───────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">¿Qué puede ayudar a mejorar este procedimiento?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                t: "Hidratación Labial",
                d: "Ayuda a mejorar la apariencia de labios resecos o con poca hidratación visual."
              },
              {
                t: "Perfilado Natural",
                d: "Permite definir mejor el contorno labial manteniendo una apariencia elegante."
              },
              {
                t: "Volumen Personalizado",
                d: "Cada protocolo se adapta según los objetivos de la persona."
              },
              {
                t: "Armonización Facial",
                d: "Analizamos proporciones y equilibrio facial antes de realizar cualquier procedimiento."
              },
              {
                t: "Bienestar Estético",
                d: "Muchas personas buscan sentirse más seguras y cómodas con su imagen."
              }
            ].map((item, i) => (
              <div key={i} className={`p-8 rounded-sm border border-stone-100 bg-stone-50 ${i >= 3 ? 'md:col-span-1' : ''}`}>
                <h4 className="text-xl font-serif font-bold text-stone-900 mb-4">{item.t}</h4>
                <p className="text-stone-600 leading-relaxed text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS LIST ─────────────────────────────── */}
      <section className="py-24 bg-[#071e2e] text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Beneficios del Relleno de Labios</h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Aspecto más hidratado", "Perfilado más definido", "Volumen natural personalizado",
                  "Armonización facial elegante", "Apariencia más fresca", "Resultados progresivos",
                  "Tratamiento adaptado a cada paciente", "Seguimiento profesional", "Experiencia premium", "Alta personalización"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-stone-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="md:w-1/3">
              <div className="aspect-[4/5] bg-white/5 border border-white/10 rounded-sm relative p-8 flex flex-col justify-center text-center">
                 <p className="text-4xl font-serif mb-6 text-primary">✨</p>
                 <h4 className="text-2xl font-serif font-bold mb-4">Belleza Personalizada</h4>
                 <p className="text-stone-400 leading-relaxed text-sm italic">
                   Diseñamos el resultado que mejor se adapte a tus rasgos y deseos individuales.
                 </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OBJECTIVES ─────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">Resultados Personalizados Según Tu Objetivo</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                t: "Hidratación Labial Natural",
                d: "Ideal para quienes buscan labios con apariencia más saludable e hidratada.",
                b: ["Aspecto más fresco", "Mejor textura visual", "Resultado muy natural"],
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
            ].map((obj, i) => (
              <div key={i} className="bg-stone-50 p-8 rounded-sm border border-stone-100 flex flex-col h-full">
                <h4 className="text-xl font-serif font-bold text-stone-900 mb-4">{obj.t}</h4>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">{obj.d}</p>
                <div className="mb-8 flex-1">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-primary mb-4">Beneficios</p>
                  <ul className="space-y-3">
                    {obj.b.map((b, j) => (
                      <li key={j} className="flex items-center gap-2 text-stone-800 text-sm font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-primary font-bold text-sm hover:translate-x-1 transition-transform border-t border-stone-200 pt-6 group">
                  <span>👉 {obj.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STEPS ─────────────────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">¿Cómo Funciona el Procedimiento?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { s: "Paso 1", t: "Valoración Estética Personalizada", d: "Analizamos tus objetivos, proporciones faciales y expectativas." },
              { s: "Paso 2", t: "Diseño del Resultado Ideal", d: "Creamos una estrategia personalizada enfocada en armonización y naturalidad." },
              { s: "Paso 3", t: "Aplicación del Procedimiento", d: "Se realiza el tratamiento siguiendo protocolos profesionales y personalizados." },
              { s: "Paso 4", t: "Recomendaciones y Seguimiento", d: "Recibes indicaciones posteriores para apoyar tu recuperación y resultados." }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <span className="text-base font-bold tracking-widest text-primary uppercase mb-2 block">{step.s}</span>
                <h4 className="text-xl font-serif font-bold mb-4">{step.t}</h4>
                <p className="text-stone-400 text-sm leading-relaxed">{step.d}</p>
                {i < 3 && <ArrowRight className="hidden md:block absolute -right-4 top-8 w-4 h-4 text-white/20 group-hover:text-primary transition-colors" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IS IT FOR? ────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-50 p-12 md:p-16 rounded-sm border border-stone-200 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
             <h2 className="text-3xl font-serif font-bold text-stone-900 mb-10">¿Para Quién se Recomienda?</h2>
             <p className="text-stone-600 mb-8 font-medium">Este procedimiento puede ser ideal para personas que buscan:</p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {[
                 "Armonización facial", "Hidratación labial", "Perfilado elegante",
                 "Volumen natural", "Mejor definición de labios", "Protocolos estéticos premium",
                 "Rejuvenecimiento facial no quirúrgico", "Resultados personalizados"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                   <Check className="w-5 h-5 text-primary shrink-0" />
                   <span className="text-stone-800 font-semibold">{item}</span>
                 </div>
               ))}
             </div>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="py-24 bg-white border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900">Lo Que Dicen Nuestras Pacientes</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                q: "Me encantó que el resultado se viera natural. Mis labios se ven más definidos sin perder mi esencia.",
                s: 5
              },
              {
                q: "Buscaba hidratación y un poco más de volumen. El resultado superó mis expectativas.",
                s: 5
              },
              {
                q: "La valoración fue muy profesional y me ayudaron a elegir el resultado ideal para mi rostro.",
                s: 5
              }
            ].map((test, i) => (
              <div key={i} className="bg-stone-50 p-8 rounded-sm border border-stone-100 flex flex-col text-center relative">
                <div className="flex justify-center gap-1 mb-6 text-primary">
                  {[...Array(test.s)].map((_, j) => <Star key={j} className="w-4 h-4 fill-primary" />)}
                </div>
                <p className="italic text-stone-600 text-sm leading-relaxed mb-6">"{test.q}"</p>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rotate-45 border-r border-b border-stone-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-stone-900">Preguntas Frecuentes</h2>
          </motion.div>
          <div className="bg-white p-8 md:p-12 shadow-sm border border-stone-200">
            {[
              {
                q: "¿Qué es el relleno de labios?",
                a: "Es un procedimiento estético orientado a mejorar hidratación, perfilado y volumen de forma personalizada."
              },
              {
                q: "¿Los resultados se ven naturales?",
                a: "Sí. El objetivo es lograr armonización facial y resultados acordes con cada persona."
              },
              {
                q: "¿Cuánto dura el procedimiento?",
                a: "La duración puede variar según cada caso y valoración profesional."
              },
              {
                q: "¿Se puede personalizar el volumen?",
                a: "Sí. Cada protocolo se adapta a los objetivos individuales."
              },
              {
                q: "¿Tiene recuperación?",
                a: "Cada paciente puede experimentar procesos diferentes. Durante la valoración se explican los cuidados recomendados."
              },
              {
                q: "¿Qué cuidados posteriores requiere?",
                a: "Se brindan indicaciones específicas según cada caso."
              }
            ].map((item, i) => (
              <FaqItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY MJ? ───────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-900 p-10 md:p-16 shadow-2xl rounded-sm text-white">
            <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-3">
              <span className="text-2xl text-primary">✨</span> ¿Por qué elegir MJ Estética & Wellness Center?
            </h2>
            <div className="space-y-6 mb-12">
              <p className="text-stone-300 leading-relaxed font-serif text-xl italic">
                Porque entendemos que la verdadera belleza no consiste en transformar tu rostro. Consiste en resaltar lo mejor de ti.
              </p>
              <p className="text-white font-medium">En MJ encontrarás:</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
              {[
                "Atención profesional", "Protocolos personalizados",
                "Resultados naturales", "Experiencia estética premium",
                "Enfoque en armonización facial", "Seguimiento personalizado",
                "Ambiente seguro y confortable", "Tecnología y técnicas actualizadas"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 border-b border-white/5 pb-3">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-medium text-stone-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">Agenda Tu Valoración Estética</h2>
            <p className="text-lg text-stone-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              Tus labios pueden verse más hidratados, definidos y armoniosos sin perder naturalidad. Descubre cuál es el protocolo ideal para ti.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-lg mx-auto">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 font-bold tracking-[0.1em] uppercase hover:bg-[#1fb355] transition-all rounded-sm shadow-sm">
                 <MessageCircle className="w-5 h-5" />
                 ESCRÍBENOS
              </a>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-primary text-white py-4 font-bold tracking-[0.1em] uppercase hover:bg-primary/90 transition-all rounded-sm shadow-sm">
                 <Star className="w-5 h-5" />
                 SOLICITAR GUÍA
              </a>
            </div>
            <div className="space-y-2 text-stone-500 font-serif italic mb-10">
               <p>👉 Agenda tu valoración personalizada</p>
               <p>👉 Descubre tu mejor versión con resultados naturales y elegantes</p>
            </div>
            <div className="pt-8 border-t border-stone-200">
               <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">MJ Estética & Wellness Center</h3>
               <p className="text-stone-500 text-sm tracking-widest uppercase">Turrialba, Costa Rica</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
