import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Instagram,
  Clock,
  Quote,
  Wind
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

export function VendasFriasContent({ service, waLink }: { service: ServicePageData; waLink: string }) {
  return (
    <div className="bg-white">
      {/* ── INTRO SECTION ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Bienestar y Autocuidado</span>
            </div>
            <p className="text-stone-600 text-lg leading-relaxed mb-6 italic">
              Tu cuerpo también necesita momentos de descanso, frescura y autocuidado.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              En <span className="font-bold text-stone-900">MJ Estética & Wellness Center</span> hemos diseñado protocolos de vendas frías enfocados en brindar una experiencia corporal relajante, personalizada y orientada al bienestar integral femenino.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "✨ Sensación refrescante",
                "✨ Experiencia wellness corporal",
                "✨ Protocolos personalizados",
                "✨ Ambiente relajante y cómodo",
                "✨ Atención individualizada"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-stone-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-stone-50 border-l-4 border-primary">
              <p className="text-xl text-stone-900 font-serif leading-tight">
                Descubre una nueva experiencia de bienestar corporal
              </p>
              <p className="mt-4 text-stone-600 leading-relaxed">
                Muchas veces el estrés, la rutina, la sensación de pesadez corporal o simplemente la necesidad de desconectarnos hacen que el cuerpo pida una pausa.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CORE DESCRIPTION ─────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Las vendas frías son un protocolo wellness corporal diseñado para brindar sensación de frescura, relajación y bienestar mediante técnicas enfocadas en el cuidado estético y el autocuidado femenino.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed font-medium">
              En MJ Estética & Wellness Center cada sesión se adapta de forma individual según tus necesidades, objetivos y experiencia corporal deseada.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              "✅ Ideal como complemento wellness",
              "✅ Perfecto para autocuidado corporal",
              "✅ Experiencia relajante y refrescante",
              "✅ Ambiente spa premium en Turrialba"
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 border border-stone-200 shadow-sm rounded-sm text-center">
                <span className="text-stone-800 font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS SECTION ──────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">¿Qué son las vendas frías?</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Las vendas frías son un protocolo corporal wellness que utiliza técnicas especializadas orientadas a generar sensación de frescura, relajación y bienestar corporal.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              Durante la sesión se aplican vendas con componentes refrescantes cuidadosamente integrados dentro de un protocolo personalizado enfocado en:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {[
              "✔️ bienestar corporal",
              "✔️ relajación femenina",
              "✔️ sensación de ligereza",
              "✔️ autocuidado wellness",
              "✔️ experiencia spa corporal"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-stone-50 rounded-sm">
                <span className="text-stone-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center text-primary font-bold italic">
            Cada protocolo se adapta individualmente, convirtiéndose en una excelente alternativa para quienes desean regalarse un momento de relajación y cuidado personal.
          </motion.p>
        </div>
      </section>

      {/* ── BENEFITS SECTION ─────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-8 text-white">¿Qué beneficios pueden aportar las vendas frías?</h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Las vendas frías se han convertido en uno de los tratamientos wellness corporales favoritos por mujeres que desean desconectarse, relajarse y sentirse mejor física y emocionalmente.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "Sensación de frescura corporal",
              "Relajación y bienestar integral",
              "Sensación de ligereza corporal",
              "Complemento de protocolos estéticos corporales",
              "Experiencia spa wellness premium",
              "Cuidado corporal personalizado",
              "Momento de desconexión y autocuidado",
              "Sensación corporal revitalizante"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.05}}}}
                className="flex items-center gap-4 p-4 border-b border-stone-100 group hover:bg-stone-50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <span className="text-orange-pastel font-medium text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECOMMENDED FOR ──────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">¿Para quién se recomiendan las vendas frías?</h2>
            <p className="text-stone-500">Este protocolo wellness es ideal para:</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Mujeres que buscan relajación corporal", d: "Si deseas regalarse un momento de descanso físico y mental, las vendas frías pueden convertirse en una experiencia altamente relajante." },
              { t: "Personas con sensación de pesadez corporal", d: "Muchas clientas buscan protocolos que les ayuden a sentirse más ligeras y revitalizadas." },
              { t: "Complemento de tratamientos corporales", d: "Las vendas frías pueden integrarse dentro de programas wellness y protocolos corporales personalizados." },
              { t: "Personas enfocadas en autocuidado y bienestar", d: "Porque cuidar tu cuerpo también es parte de sentirte bien contigo misma." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp}
                className="bg-stone-50 p-8 border border-stone-100 hover:border-primary/30 transition-all"
              >
                <h3 className="font-serif font-bold text-stone-900 mb-4 h-12 flex items-center leading-tight">{item.t}</h3>
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
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-stone-900">¿Cómo funciona una sesión de vendas frías?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { s: "Paso 1", t: "Evaluación personalizada", d: "Analizamos tus necesidades y objetivos para adaptar el protocolo ideal para ti." },
              { s: "Paso 2", t: "Aplicación de las vendas frías", d: "Se colocan cuidadosamente las vendas dentro de un ambiente relajante y cómodo." },
              { s: "Paso 3", t: "Relajación y bienestar", d: "Durante la sesión muchas personas experimentan sensación de frescura, descanso y desconexión corporal." },
              { s: "Paso 4", t: "Recomendaciones complementarias", d: "Te orientamos sobre frecuencia recomendada y protocolos wellness complementarios." }
            ].map((step, i) => (
              <div key={i} className="relative bg-white p-8 border border-stone-200 shadow-sm group">
                <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block font-sans">{step.s}</span>
                <h4 className="text-lg font-serif font-bold text-stone-900 mb-4 leading-tight">{step.t}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2 text-stone-700 font-medium">
              <Clock className="w-5 h-5 text-primary" />
              <span>⏱️ Duración aproximada: 45 a 60 minutos</span>
            </div>
            <div className="flex items-center gap-2 text-stone-700 font-medium">
              <Wind className="w-5 h-5 text-primary" />
              <span>🌿 Ambiente relajante tipo spa</span>
            </div>
            <div className="flex items-center gap-2 text-stone-700 font-medium">
              <Sparkles className="w-5 h-5 text-primary" />
              <span>💆‍♀️ Experiencia wellness personalizada</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">Una experiencia enfocada en bienestar corporal</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-12">
              En MJ Estética & Wellness Center creemos que la estética moderna también debe enfocarse en bienestar, relajación y autocuidado.
            </p>
            <p className="text-stone-400 text-[10px] uppercase tracking-widest mb-10 font-bold">Por eso hemos creado un espacio pensado para:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
              {[
                "✨ desconectarte del estrés",
                "✨ sentirte cómoda y cuidada",
                "✨ vivir una experiencia wellness premium",
                "✨ disfrutar protocolos corporales personalizados",
                "✨ reconectar contigo misma"
              ].map((item, i) => (
                <div key={i} className="p-4 border border-stone-100 text-stone-800 font-medium text-sm">
                   {item}
                </div>
              ))}
            </div>
            <div className="p-10 bg-primary/5 border border-primary/20 rounded-sm">
               <p className="text-2xl font-serif text-stone-900 mb-4">Aquí no solo vienes a recibir un tratamiento…</p>
               <p className="text-xl font-serif text-primary italic font-bold">Vienes a regalarte un momento para ti.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SENSATIONS ───────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">¿Qué se siente durante una sesión?</h2>
            <p className="text-stone-500 mb-12">La mayoría de nuestras clientas describen la experiencia como:</p>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {["💙 refrescante", "💙 relajante", "💙 cómoda", "💙 revitalizante", "💙 ideal para desconectarse del estrés diario"].map((item, i) => (
                <span key={i} className="px-6 py-3 bg-white border border-stone-200 text-stone-800 font-bold rounded-full text-sm shadow-sm">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-stone-400 text-xs italic">Cada experiencia puede variar según el protocolo personalizado aplicado.</p>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900">Testimonios reales</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "“Me encantó la sensación de frescura y relajación. Salí sintiéndome más ligera y tranquila.”",
              "“El ambiente es súper relajante y la atención personalizada hace toda la diferencia.”",
              "“Más que un tratamiento, sentí que fue una experiencia de autocuidado.”"
            ].map((text, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.1}}}}
                className="bg-stone-50 p-8 border border-stone-100 relative"
              >
                <Quote className="w-8 h-8 text-primary/10 absolute top-4 right-4" />
                <p className="text-stone-600 mb-6 leading-relaxed italic">{text}</p>
                <p className="text-primary text-[10px] font-bold tracking-widest uppercase">— Paciente MJ</p>
              </motion.div>
            ))}
          </div>
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
              { q: "¿Qué se siente durante una sesión de vendas frías?", a: "Generalmente se experimenta una sensación refrescante y relajante que ayuda a generar bienestar corporal." },
              { q: "¿Las vendas frías ayudan con sensación de pesadez?", a: "Muchas personas las buscan precisamente por la sensación de ligereza y frescura que pueden aportar." },
              { q: "¿Cuánto dura la sesión?", a: "Aproximadamente entre 45 y 60 minutos." },
              { q: "¿Se pueden combinar con otros tratamientos?", a: "Sí, frecuentemente forman parte de protocolos wellness y tratamientos corporales complementarios." },
              { q: "¿Son relajantes?", a: "Sí, están orientadas a brindar una experiencia corporal relajante y confortable." },
              { q: "¿Cuántas sesiones se recomiendan?", a: "Depende de cada objetivo y protocolo personalizado." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <FaqItem question={item.q} answer={item.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PACKAGES & PRICES ────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-900 text-white p-12 relative overflow-hidden">
             <div className="relative z-10">
               <h2 className="text-3xl font-serif font-bold mb-10 text-center text-white">Paquetes Wellness y Sesiones</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                 <div className="space-y-4">
                   {["✨ Sesiones individuales", "✨ Programas corporales wellness"].map((item, i) => (
                     <p key={i} className="text-lg font-medium">{item}</p>
                   ))}
                 </div>
                 <div className="space-y-4">
                   {["✨ Experiencias spa premium", "✨ Paquetes personalizados"].map((item, i) => (
                     <p key={i} className="text-lg font-medium">{item}</p>
                   ))}
                 </div>
               </div>
               <div className="border-t border-stone-200 pt-10 flex flex-col items-center">
                 <p className="text-2xl font-serif text-primary font-bold mb-2">Planes disponibles</p>
                 <p className="text-stone-400 text-xs uppercase tracking-widest font-bold">Valoración personalizada incluida</p>
               </div>
             </div>
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">¿Por qué elegir MJ Estética & Wellness Center?</h2>
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-12">Porque aquí cada experiencia se adapta a ti.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left max-w-2xl mx-auto mb-16">
              {[
                "Protocolos wellness personalizados",
                "Atención individualizada",
                "Ambiente relajante y premium",
                "Experiencia corporal enfocada en bienestar",
                "Espacios cómodos y profesionales",
                "Enfoque integral de autocuidado femenino"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                   <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                   <span className="text-stone-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-stone-600 italic">
              En MJ Estética & Wellness Center buscamos que cada visita se convierta en un momento de bienestar real.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── LOCATION ─────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-8">📍 Ubicación en Turrialba</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {["✔️ Fácil acceso", "✔️ Atención personalizada", "✔️ Ambiente wellness premium", "✔️ WhatsApp disponible para reservas", "✔️ Parqueo cercano"].map((item, i) => (
                <span key={i} className="text-stone-600 font-medium text-sm">{item}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LEAD MAGNET ──────────────────────────────── */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-white/60 text-xs font-bold tracking-[0.4em] uppercase mb-4">🎁 RECURSO GRATUITO EXCLUSIVO</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Guía Gratuita:</h2>
              <p className="text-2xl font-serif mb-10 italic">“Cómo levantar el busto y mejorar tu bienestar corporal”</p>
              <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
                Descubre consejos wellness, hábitos de autocuidado y recomendaciones complementarias para sentirte mejor contigo misma.
              </p>

              <div className="max-w-md mx-auto bg-white p-10 text-stone-900 shadow-2xl">
                 <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-4">💌 Comenta la palabra:</p>
                 <p className="text-5xl font-serif font-bold text-primary mb-10 underline decoration-stone-200">“VENDAS”</p>
                 <p className="text-sm text-stone-500 leading-relaxed mb-10">y recibe automáticamente la guía gratuita + información exclusiva de nuestras sesiones wellness.</p>
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
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">Agenda tu experiencia wellness hoy</h2>
            <div className="space-y-2 mb-12">
               <p className="text-xl text-stone-600 italic">Tu cuerpo merece descanso.</p>
               <p className="text-xl text-stone-600 italic">Tu mente merece desconexión.</p>
               <p className="text-xl text-stone-600 italic font-bold">Y tú mereces sentirte bien.</p>
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all text-xs"
            >
              <MessageCircle className="w-5 h-5" />
              RESERVAR MI MOMENTO MJ
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
