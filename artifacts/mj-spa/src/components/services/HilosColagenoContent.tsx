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
  Award
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

export function HilosColagenoContent({ service, waLink }: { service: ServicePageData; waLink: string }) {
  return (
    <div className="bg-white">
      {/* ── INTRO SECTION ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Estética Facial Premium</span>
            </div>
            <p className="text-stone-600 text-lg leading-relaxed mb-6 italic">
              ¿Te gustaría verte más fresca, firme y armonizada sin perder tu naturalidad?
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              En <span className="font-bold text-stone-900">MJ Estética & Wellness Center</span> diseñamos protocolos personalizados con Hilos de Colágeno orientados a rejuvenecimiento progresivo, firmeza facial y armonización estética natural. Este procedimiento está pensado para personas que desean mejorar la apariencia de su piel, recuperar luminosidad facial y apoyar protocolos antiaging con un enfoque elegante, moderno y personalizado.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                "✨ Resultados naturales",
                "✨ Glow facial saludable",
                "✨ Armonización facial progresiva",
                "✨ Atención profesional y personalizada",
                "✨ Experiencia estética premium en Turrialba"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-stone-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-stone-50 p-8 border-l-4 border-primary">
               <h3 className="font-serif font-bold text-stone-900 mb-4">Agenda hoy tu valoración facial personalizada</h3>
               <div className="space-y-2 text-stone-600 text-sm">
                  <p className="flex items-center gap-2">👉 Escríbenos por WhatsApp</p>
                  <p className="flex items-center gap-2">👉 Consulta disponibilidad</p>
                  <p className="flex items-center gap-2">👉 Descubre el protocolo ideal para ti</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT ARE THEY ────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">¿Qué son los Hilos de Colágeno?</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Los Hilos de Colágeno son un procedimiento estético avanzado utilizado en protocolos de rejuvenecimiento facial y firmeza progresiva. Su objetivo es apoyar la apariencia de una piel más firme, armonizada y luminosa mediante técnicas enfocadas en bienestar estético y resultados naturales.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              En MJ Estética & Wellness Center entendemos que cada rostro es diferente. Por eso, cada protocolo se adapta de manera personalizada según las necesidades, objetivos y características faciales de cada paciente.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
             {[
               "✔ Naturalidad",
               "✔ Armonización facial",
               "✔ Rejuvenecimiento elegante",
               "✔ Glow saludable",
               "✔ Bienestar estético integral"
             ].map((item, i) => (
               <div key={i} className="bg-white p-4 text-center border border-stone-200 shadow-sm rounded-sm">
                  <span className="text-stone-800 font-bold text-xs">{item}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ── IMPROVEMENTS ─────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">¿Qué puede ayudar a mejorar este procedimiento?</h2>
            <p className="text-stone-500">Los Hilos de Colágeno pueden apoyar protocolos orientados a:</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
             {[
               "✨ Apariencia de firmeza facial",
               "✨ Rejuvenecimiento progresivo",
               "✨ Glow y luminosidad natural",
               "✨ Definición facial elegante",
               "✨ Armonización estética natural",
               "✨ Bienestar facial premium",
               "✨ Apariencia más descansada y fresca",
               "✨ Protocolos antiaging personalizados"
             ].map((item, i) => (
               <div key={i} className="flex items-center gap-3 p-4 bg-stone-50 border border-stone-100 rounded-sm">
                  <span className="text-stone-700 font-medium text-sm">{item}</span>
               </div>
             ))}
          </div>

          <p className="text-center text-primary font-bold italic text-sm">
            Todo procedimiento requiere valoración individual para determinar recomendaciones y expectativas personalizadas.
          </p>
        </div>
      </section>

      {/* ── BENEFITS SECTION ─────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-8 text-white">Beneficios de los Hilos de Colágeno</h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
              En MJ Estética & Wellness Center buscamos resultados naturales y progresivos, evitando cambios exagerados o artificiales.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-16">
            {[
              "Apariencia más firme y armonizada",
              "Glow facial natural",
              "Rejuvenecimiento elegante",
              "Resultados progresivos y personalizados",
              "Sensación de frescura facial",
              "Definición suave y natural",
              "Atención premium y seguimiento profesional",
              "Protocolos adaptados individualmente"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.05}}}}
                className="flex items-center gap-4 p-4 border-b border-white/10 group hover:bg-white/5 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <span className="text-white/90 font-medium text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-white/40 italic text-sm">Porque verte bien también puede sentirse natural.</p>
        </div>
      </section>

      {/* ── METHODOLOGY ──────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-stone-900">¿Cómo funciona el procedimiento?</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">Nuestro protocolo está diseñado para brindar tranquilidad, claridad y acompañamiento durante todo el proceso.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { s: "Paso 1", t: "Valoración facial personalizada", d: "Analizamos tus objetivos, características faciales y necesidades estéticas." },
              { s: "Paso 2", t: "Diseño del protocolo ideal", d: "Creamos una propuesta personalizada enfocada en armonización facial y resultados naturales." },
              { s: "Paso 3", t: "Aplicación del procedimiento", d: "El procedimiento se realiza bajo protocolos profesionales orientados a comodidad y seguridad." },
              { s: "Paso 4", t: "Seguimiento y recomendaciones posteriores", d: "Te acompañamos con cuidados posteriores y seguimiento individualizado para optimizar resultados." }
            ].map((step, i) => (
              <div key={i} className="relative bg-white p-8 border border-stone-200 shadow-sm group">
                <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block font-sans">{step.s}</span>
                <h4 className="text-lg font-serif font-bold text-stone-900 mb-4 leading-tight">{step.t}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-stone-600 text-xs font-bold uppercase tracking-widest">
             <span className="flex items-center gap-2">📍 Duración aproximada: según valoración personalizada</span>
             <span className="flex items-center gap-2">📍 Recuperación: progresiva y variable</span>
             <span className="flex items-center gap-2">📍 Cuidados posteriores detallados</span>
          </div>
        </div>
      </section>

      {/* ── IDEAL FOR ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">¿Para quién se recomiendan los Hilos de Colágeno?</h2>
            <p className="text-stone-500 mb-12">Este procedimiento puede ser ideal para personas que buscan:</p>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {[
                "✨ Rejuvenecimiento facial natural",
                "✨ Firmeza facial progresiva",
                "✨ Glow saludable",
                "✨ Armonización estética premium",
                "✨ Protocolos antiaging modernos",
                "✨ Resultados elegantes y personalizados",
                "✨ Mejorar la apariencia de cansancio facial"
              ].map((item, i) => (
                <span key={i} className="px-6 py-3 bg-stone-50 border border-stone-200 text-stone-800 font-bold rounded-full text-xs shadow-sm">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-stone-400 text-xs italic">Cada paciente requiere valoración individual para determinar el protocolo más adecuado.</p>
          </motion.div>
        </div>
      </section>

      {/* ── PHILOSOPHY ───────────────────────────────── */}
      <section className="py-24 bg-stone-50 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">Resultados Naturales y Progresivos</h2>
              <div className="space-y-6 text-stone-600 text-lg leading-relaxed mb-16 max-w-3xl mx-auto">
                <p>En MJ Estética & Wellness Center creemos en una estética elegante y armónica. Nuestro enfoque no busca transformar tu rostro. Busca ayudarte a sentirte más segura, fresca y luminosa manteniendo tu esencia natural.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                {["✔ Naturalidad", "✔ Progresividad", "✔ Glow saludable", "✔ Armonización facial"].map((item, i) => (
                   <div key={i} className="p-4 bg-white border border-stone-200 rounded-sm">
                      <span className="text-primary font-bold text-sm">{item}</span>
                   </div>
                ))}
              </div>
              <p className="text-stone-400 text-[10px] font-bold uppercase tracking-widest">Bienestar estético integral</p>
           </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900">Lo que dicen nuestras pacientes</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "“Sentí mi rostro más fresco y definido sin verme exagerada.”",
              "“Me encantó el glow natural que noté después del procedimiento.”",
              "“La atención fue súper personalizada y me explicaron todo el proceso.”",
              "“Buscaba algo natural y justamente eso fue lo que encontré.”"
            ].map((text, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.1}}}}
                className="bg-stone-50 p-8 border border-stone-100 relative"
              >
                <Quote className="w-8 h-8 text-primary/10 absolute top-4 right-4" />
                <p className="text-stone-600 mb-6 leading-relaxed italic text-sm">{text}</p>
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
              { q: "¿Qué son los Hilos de Colágeno?", a: "Son procedimientos estéticos orientados a protocolos de firmeza y rejuvenecimiento facial progresivo." },
              { q: "¿Los resultados se ven naturales?", a: "Sí. El objetivo en MJ Estética & Wellness Center es mantener armonización facial y naturalidad." },
              { q: "¿Ayudan con firmeza facial?", a: "Pueden apoyar protocolos orientados a mejorar la apariencia de firmeza facial." },
              { q: "¿Tiene recuperación?", a: "Cada persona responde diferente. Durante la valoración se explican cuidados y recomendaciones posteriores." },
              { q: "¿Cuándo se ven resultados?", a: "Los resultados pueden percibirse progresivamente según cada paciente y protocolo aplicado." },
              { q: "¿Se puede combinar con otros tratamientos?", a: "Sí, dependiendo de la valoración profesional y objetivos individuales." },
              { q: "¿Duele el procedimiento?", a: "La experiencia puede variar según cada persona. Nuestro enfoque prioriza comodidad y acompañamiento profesional." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <FaqItem question={item.q} answer={item.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROGRAMS SECTION ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-900 text-white p-12 relative overflow-hidden">
             <div className="relative z-10">
               <h2 className="text-3xl font-serif font-bold mb-10 text-center text-white">Programas Premium de Rejuvenecimiento Facial</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 text-sm">
                 <div className="space-y-4">
                   {["✨ Protocolos de firmeza facial", "✨ Programas de glow y armonización estética"].map((item, i) => (
                     <p key={i} className="font-medium">{item}</p>
                   ))}
                 </div>
                 <div className="space-y-4">
                   {["✨ Facial rejuvenation bundles", "✨ Protocolos antiaging premium", "✨ Memberships estéticos personalizados"].map((item, i) => (
                     <p key={i} className="font-medium">{item}</p>
                   ))}
                 </div>
               </div>
               <div className="border-t border-white/10 pt-10 flex flex-col items-center text-center">
                 <p className="text-white/50 text-xs uppercase tracking-widest font-bold">Consulta disponibilidad y opciones durante tu valoración</p>
               </div>
             </div>
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">¿Por qué elegir MJ Estética & Wellness Center?</h2>
            <p className="text-stone-600 text-lg mb-12">Porque creemos que la belleza más poderosa es la que se siente natural.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
              {[
                { icon: <Zap className="w-5 h-5" />, t: "Protocolos personalizados" },
                { icon: <Target className="w-5 h-5" />, t: "Atención profesional y cercana" },
                { icon: <Award className="w-5 h-5" />, t: "Experiencia estética premium" },
                { icon: <Star className="w-5 h-5" />, t: "Enfoque natural y progresivo" },
                { icon: <ShieldCheck className="w-5 h-5" />, t: "Seguimiento individualizado" },
                { icon: <MessageCircle className="w-5 h-5" />, t: "Ambiente cómodo y seguro" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 border border-stone-200 flex flex-col items-center text-center">
                   <div className="text-primary mb-4">{item.icon}</div>
                   <span className="text-stone-800 font-bold text-sm">{item.t}</span>
                </div>
              ))}
            </div>

            <p className="text-stone-600 italic">Nos enfocamos en ayudarte a verte bien sin perder tu esencia.</p>
          </motion.div>
        </div>
      </section>

      {/* ── LEAD MAGNET ──────────────────────────────── */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-white/60 text-xs font-bold tracking-[0.4em] uppercase mb-4">🎁 RECURSO GRATUITO EXCLUSIVO</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Guía Gratuita:</h2>
              <p className="text-2xl font-serif mb-10 italic">“Cómo mejorar los resultados de tus Hilos de Colágeno”</p>

              <div className="max-w-md mx-auto bg-white p-10 text-stone-900 shadow-2xl">
                 <p className="text-sm text-stone-500 leading-relaxed mb-8">Aprende:</p>

                 <div className="space-y-3 mb-10 text-left">
                   {[
                     "✔ Cuidados posteriores recomendados",
                     "✔ Cómo potenciar el glow facial",
                     "✔ Hábitos que apoyan firmeza facial",
                     "✔ Recomendaciones estéticas y wellness",
                     "✔ Consejos para prolongar resultados"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-2">
                       <CheckCircle2 className="w-3 h-3 text-primary" />
                       <span className="text-[10px] font-bold text-stone-700">{item}</span>
                     </div>
                   ))}
                 </div>

                 <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-10">🎁 Solicítala ahora por WhatsApp.</p>

                 <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-stone-900 text-white py-4 font-bold tracking-widest uppercase hover:bg-primary transition-colors text-xs"
                 >
                    <MessageCircle className="w-4 h-4" />
                    SOLICITAR GUÍA POR WHATSAPP
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
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">Agenda tu valoración facial hoy</h2>
            <p className="text-stone-600 text-lg mb-12 max-w-2xl mx-auto">
              Si estás buscando un protocolo de rejuvenecimiento facial natural, armonización estética y glow saludable en Turrialba, estamos listas para ayudarte.
            </p>

            <div className="bg-stone-50 p-10 border border-stone-200 mb-12">
               <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">MJ Estética & Wellness Center — Turrialba</h3>
               <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm font-bold text-stone-700">
                  <span>✅ Agenda tu valoración facial</span>
                  <span>✅ Descubre el protocolo ideal</span>
                  <span>✅ Consulta disponibilidad hoy</span>
               </div>
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all text-xs"
            >
              <MessageCircle className="w-5 h-5" />
              ESCRIBIR POR WHATSAPP
            </a>

            <p className="mt-12 text-stone-400 text-[10px] font-bold tracking-widest uppercase">
              ✨ Estética avanzada, bienestar y armonización facial premium
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
