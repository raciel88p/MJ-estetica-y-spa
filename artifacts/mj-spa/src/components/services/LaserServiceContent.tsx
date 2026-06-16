import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, Star, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import type { ServicePageData } from "@/data/services";

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
            <p className="text-primary/80 leading-relaxed pb-6 text-sm">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function LaserServiceContent({ service, waLink }: { service: ServicePageData; waLink: string }) {
  return (
    <>
      {/* Qué nos diferencia */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-primary/30" />
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Diferencial</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-10 leading-tight">
              Qué nos <br />
              <span className="text-primary italic font-light">diferencia</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                "Valoración personalizada",
                "Tecnología segura para distintos tipos de piel",
                "Tratamientos corporales y faciales",
                "Resultados progresivos visibles",
                "Atención profesional y humana"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-stone-50 p-4 border border-stone-100 group hover:border-primary/20 transition-all">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-stone-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center md:text-left bg-stone-900 p-8 md:p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4">¡Empieza hoy!</p>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">👉 Agenda hoy tu valoración personalizada</h3>
                <p className="text-white mb-10 max-w-lg leading-relaxed text-base">
                  Escríbenos por WhatsApp y descubre cuál paquete es ideal para ti.
                </p>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 font-bold tracking-[0.15em] uppercase hover:bg-primary/90 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Consultar por WhatsApp
                </a>
              </div>
              <Star className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5 rotate-12" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problemas del vello & Guía Gratuita */}
      <section className="py-24 bg-stone-50 border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-8 text-center">
              Sabemos que muchas veces el vello <br className="hidden md:block" />
              <span className="text-primary">no es solo estética…</span>
            </h3>
            <p className="text-stone-500 text-center mb-12">También puede causar:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Irritación constante", "Foliculitis", "Manchas",
                "Inseguridad", "Tiempo perdido rasurándote", "Dolor con cera o métodos tradicionales"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-5 border border-stone-100 hover:border-primary/30 hover:shadow-sm transition-all">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-stone-700 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary p-10 md:p-16 text-white text-center rounded-sm shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 border border-white/20">
                Regalo Especial
              </span>
              <p className="text-white/80 mb-2 font-medium">Por eso queremos regalarte una:</p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Guía Gratuita de Belleza y <br /> <br /> Cuidado de la Piel</h2>
              <p className="text-white mb-6 font-bold uppercase tracking-widest text-xs">Descubre:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12 max-w-3xl mx-auto">
                {[
                  "✨ Cómo cuidar tu piel antes y después de la depilación láser",
                  "✨ Errores que aumentan manchas e irritación",
                  "✨ Cómo lograr mejores resultados en menos sesiones",
                  "✨ Tips para mantener tu piel suave y uniforme"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-sm md:text-base text-white/90 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/60 mb-8 font-medium italic">👉 Descarga tu guía gratuita aquí</p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-100 transition-all shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                QUIERO MI GUÍA
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Qué es & Para quién */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">¿Qué es la Depilación Láser?</h2>
              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p>
                  La depilación láser es un tratamiento estético que ayuda a reducir progresivamente el crecimiento del vello utilizando tecnología especializada que actúa directamente sobre el folículo piloso.
                </p>
                <p>
                  En MJ Estética & Wellness Center trabajamos con protocolos personalizados para diferentes zonas y tipos de piel, brindando una experiencia más cómoda, segura y efectiva en Turrialba.
                </p>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">¿Para quién es ideal?</h2>
              <ul className="space-y-4">
                {[
                  "Te rasuras constantemente", "Sufres de vellos encarnados",
                  "Tienes foliculitis", "Tu piel se irrita con facilidad",
                  "La cera te causa dolor o manchas", "Quieres ahorrar tiempo en tu rutina",
                  "Deseas una piel más uniforme y suave"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-600 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qué problemas ayuda a mejorar */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">¿Qué problemas ayuda a mejorar la depilación láser?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {[
              { t: "Irritación constante al rasurarte", d: "Reduce el roce frecuente y el daño continuo sobre la piel." },
              { t: "Vellos encarnados", d: "Ayuda a disminuir el crecimiento irregular del vello." },
              { t: "Foliculitis", d: "Muchas personas notan una mejora progresiva en la apariencia de la piel." },
              { t: "Oscurecimiento de zonas", d: "Puede ayudar visualmente a mejorar la uniformidad de la piel." },
              { t: "Crecimiento rápido del vello", d: "Olvídate de rasurarte constantemente." }
            ].map((item, i) => (
              <div key={i} className="bg-stone-900 p-8 hover:bg-stone-800 transition-colors">
                <h4 className="text-primary font-bold mb-3 text-base">{item.t}</h4>
                <p className="text-white/80 text-base leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-16 border-t border-white/10">
            <p className="text-white uppercase tracking-widest text-base font-bold mb-8 text-center">Resultados progresivos y reales</p>
            <p className="text-white/60 text-base mb-8 text-center">Lo que normalmente se trabaja:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
               {["Reducción progresiva del vello", "Mejor apariencia de la piel", "Disminución de irritación", "Menos crecimiento frecuente"].map((text, i) => (
                 <div key={i} className="p-4 border border-white/10 rounded-sm">
                    <p className="text-white text-sm font-medium">{text}</p>
                 </div>
               ))}
            </div>
          </div>
          <p className="mt-8 text-center text-white/40 text-base italic">
            📍 Las sesiones y resultados pueden variar según cada persona.
          </p>
        </div>
      </section>

      {/* Beneficios reales que notarás */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">Beneficios reales que notarás</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 bg-stone-50 p-5 border border-stone-100">
                <span className="text-primary font-bold">✅</span>
                <span className="text-stone-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona (Pasos) */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6 text-center">
               Así funciona tu tratamiento
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { s: "Paso 1", t: "Valoración personalizada", d: "Analizamos tu tipo de piel, zona y necesidades." },
              { s: "Paso 2", t: "Preparación de la piel", d: "Te explicamos cuidados previos y recomendaciones." },
              { s: "Paso 3", t: "Aplicación del láser", d: "La sesión suele durar entre 15 y 60 minutos dependiendo de la zona." },
              { s: "Paso 4", t: "Cuidados posteriores", d: "Recibes indicaciones para mejorar resultados y proteger tu piel." }
            ].map((step, i) => (
              <div key={i} className="relative">
                <span className="text-base font-bold tracking-widest text-primary uppercase mb-2 block">{step.s}</span>
                <h4 className="text-base font-serif font-bold text-stone-900 mb-4">{step.t}</h4>
                <p className="text-stone-500 text-base leading-relaxed">{step.d}</p>
                {i < 3 && <ArrowRight className="hidden md:block absolute -right-4 top-8 w-4 h-4 text-stone-200" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Corta / Detalles extras */}
      <section className="py-24 bg-white border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">¿Duele?</h3>
              <p className="text-stone-600 leading-relaxed">
                La sensación suele describirse como pequeños “toques de calor” o “piquetitos leves”. Es un tratamiento rápido y tolerable.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">¿Cuántas sesiones necesito?</h3>
              <p className="text-stone-600 leading-relaxed">
                Depende del tipo de vello y zona, pero muchas personas comienzan a notar cambios progresivos desde las primeras sesiones.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Imagina esto... */}
      <section className="py-24 bg-stone-50 overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-10 uppercase tracking-tight">Imagina esto…</h2>
             <div className="space-y-4 mb-12 text-xl md:text-2xl font-serif italic text-stone-600">
                <p>Despertarte…</p>
                <p>Ponerte la ropa que te gusta…</p>
                <p>Ir a la playa, al gimnasio o salir sin preocuparte por rasurarte a última hora.</p>
             </div>
             <div className="bg-white p-10 shadow-sm border border-stone-200 inline-block text-left max-w-2xl">
               <p className="text-stone-800 font-medium mb-6">Eso es lo que muchas personas buscan cuando empiezan depilación láser:</p>
               <div className="space-y-4">
                 {["✨ Más comodidad", "✨ Más confianza", "✨ Más tranquilidad con su piel"].map((t, i) => (
                   <p key={i} className="text-stone-900 font-bold text-xl">{t}</p>
                 ))}
               </div>
             </div>
           </motion.div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900">Testimonios de clientes</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Antes me irritaba muchísimo al rasurarme. Después de varias sesiones he notado mi piel mucho más tranquila.",
              "Ya no tengo que preocuparme por rasurarme cada pocos días.",
              "Me encanta sentir la piel más suave y uniforme."
            ].map((test, i) => (
              <div key={i} className="bg-stone-50 p-8 rounded-sm border border-stone-100 italic text-stone-600 text-sm leading-relaxed relative">
                <span className="absolute top-4 left-4 text-primary text-4xl leading-none opacity-20">“</span>
                {test}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes (Laser) */}
      <section className="py-24 bg-stone-50 border-y border-stone-100">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-stone-900">Preguntas frecuentes</h2>
          </motion.div>
          <div className="space-y-4">
            {service.faq?.map((item, i) => (
              <FaqItem key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegir MJ */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-10 md:p-16 shadow-sm border border-stone-100">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 flex items-center gap-3">
              <span className="text-2xl text-primary">💖</span> ¿Por qué elegir MJ Estética & Wellness Center?
            </h2>
            <p className="text-stone-600 mb-10 leading-relaxed font-serif text-lg italic">
              Buscamos ayudarte a sentirte mejor contigo misma.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
              {[
                "Atención personalizada", "Protocolos profesionales",
                "Tecnología segura", "Ambiente cómodo y privado",
                "Seguimiento profesional", "Ubicación accesible en Turrialba",
                "Experiencia real en estética y wellness"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 border-b border-stone-50 pb-3">
                  <span className="text-primary font-bold">✔</span>
                  <span className="font-medium text-stone-800 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ubicación y contacto */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
               <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">Ubicación y contacto</h2>
               <ul className="space-y-6">
                 {[
                   { i: "📍", t: "Turrialba, Cartago" },
                   { i: "📲", t: "Atención por WhatsApp" },
                   { i: "🕒", t: "Horarios flexibles" },
                   { i: "🚗", t: "Fácil acceso y parqueo cercano" }
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-4 text-stone-700 font-medium">
                     <span className="text-xl">{item.i}</span>
                     {item.t}
                   </li>
                 ))}
               </ul>
             </motion.div>
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-900 p-8 text-white rounded-sm">
                <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4">Finaliza hoy el rasurado</p>
                <h3 className="text-2xl font-serif font-bold mb-6 leading-tight text-white">Tu piel puede verse y sentirse diferente</h3>
                <p className="text-white mb-8 leading-relaxed italic text-base">
                  Cada día que pospones empezar… es otro día lidiando con irritación, rasurado constante y molestias innecesarias. Hoy puede ser el momento de cambiar eso.
                </p>
                <div className="space-y-2 mb-10 text-base font-medium text-white">
                  <p>👉 Agenda tu valoración personalizada ahora</p>
                  <p>👉 Descubre el paquete ideal para ti</p>
                  <p>👉 Escríbenos por WhatsApp</p>
                </div>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center gap-3 bg-primary text-white py-4 font-bold tracking-[0.15em] uppercase hover:bg-primary/90 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  RESERVAR AHORA
                </a>
             </motion.div>
           </div>
        </div>
      </section>
    </>
  );
}
