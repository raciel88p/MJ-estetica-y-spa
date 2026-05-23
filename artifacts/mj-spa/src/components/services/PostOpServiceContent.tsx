import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MessageCircle, Star, ArrowRight, ChevronDown, Sparkles, Heart, Users, Clock } from "lucide-react";
import { useState } from "react";

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

export function PostOpServiceContent({ waLink }: { waLink: string }) {
  return (
    <>
      {/* ── SECCIÓN 1: INTRODUCCIÓN ────────────────── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center md:text-left mb-16"
          >
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Después de una cirugía estética, tu cuerpo necesita mucho más que reposo. Necesita atención especializada, drenaje adecuado y protocolos post operatorios diseñados para favorecer la recuperación, reducir inflamación y ayudarte a mejorar tu proceso de recuperación con mayor comodidad y confianza.
            </p>
            <p className="text-stone-800 font-serif text-xl font-bold leading-relaxed">
              En MJ Estética & Wellness Center combinamos bienestar, estética y atención personalizada para brindarte una experiencia post operatoria enfocada en resultados, comodidad y acompañamiento humano.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {[
              "Atención personalizada",
              "Protocolos post operatorios especializados",
              "Ambiente cómodo y relajante",
              "Experiencia wellness profesional",
              "Seguimiento orientado a recuperación estética"
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-center gap-3 bg-stone-50 p-4 border border-stone-100">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-stone-700 font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 2: SÍNTOMAS / AGITACIÓN ───────────── */}
      <section className="py-24 bg-stone-50 border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
              ¿Te realizaron una cirugía y ahora buscas mejorar tu recuperación?
            </h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              Muchas personas después de un procedimiento estético experimentan:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {[
              "Inflamación excesiva",
              "Sensación de tensión o pesadez",
              "Retención de líquidos",
              "Molestias corporales",
              "Fibrosis o endurecimiento",
              "Ansiedad por no ver resultados rápidos",
              "Incomodidad al moverse"
            ].map((item, i) => (
              <motion.div
                key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex items-start gap-3 bg-white p-5 border border-stone-100"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span className="text-stone-700 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <p className="text-xl md:text-2xl font-serif italic text-stone-600 mb-4">
              Y aunque la cirugía ya pasó… <br />
              <span className="text-stone-900 font-bold not-italic">la recuperación es una parte CRÍTICA del resultado final.</span>
            </p>
            <p className="text-primary font-bold text-lg">Ahí es donde los masajes post operatorios pueden marcar una gran diferencia.</p>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 3: DEFINICIÓN Y QUÉ INCLUYE ────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">¿Qué son los masajes post operatorios?</h2>
              <div className="space-y-6 text-stone-600 leading-relaxed text-base">
                <p>
                  Los masajes post operatorios son protocolos especializados orientados a acompañar procesos de recuperación estética mediante técnicas enfocadas en drenaje, bienestar corporal y apoyo a la recuperación física posterior a procedimientos quirúrgicos.
                </p>
                <p>
                  En MJ Estética & Wellness Center adaptamos cada sesión según tu proceso y evolución para ayudarte a sentirte más cómoda durante tu recuperación.
                </p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-50 p-8 border border-stone-200">
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">¿Qué incluyen nuestras sesiones post operatorias?</h2>
              <p className="text-primary font-bold text-xs tracking-widest uppercase mb-8">Protocolos diseñados para bienestar y recuperación estética</p>
              <ul className="space-y-4">
                {[
                  "Drenaje linfático post operatorio",
                  "Atención personalizada según evolución",
                  "Protocolos orientados a inflamación y bienestar corporal",
                  "Acompañamiento durante el proceso de recuperación",
                  "Ambiente relajante y cómodo",
                  "Seguimiento estético personalizado",
                  "Recomendaciones para mejorar hábitos post operatorios"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-stone-700 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* ── LEAD MAGNET: GUÍA GRATUITA ───────────────── */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-stone-900 p-10 md:p-16 text-white text-center rounded-sm shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 border border-white/20">
                Regalo Exclusivo
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Descarga GRATIS nuestra guía:</h2>
              <p className="text-primary font-bold text-xl md:text-2xl mb-8 italic">“Cómo mejorar tus resultados post operatorios”</p>

              <p className="text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                Aprende recomendaciones importantes para apoyar tu recuperación estética y mejorar hábitos durante el proceso post quirúrgico.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-12 max-w-3xl mx-auto">
                {[
                  "Cómo reducir inflamación",
                  "Hábitos que ayudan a tu recuperación",
                  "Errores comunes después de una cirugía",
                  "Recomendaciones de bienestar post operatorio",
                  "Cuándo iniciar cuidados complementarios"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-white/90">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-white/60 mb-8 font-medium italic">🎁 Solicítala ahora por WhatsApp y recíbela GRATIS.</p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-primary/90 transition-all shadow-xl group"
              >
                <MessageCircle className="w-5 h-5" />
                LO QUIERO POR WHATSAPP
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <Star className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5 rotate-12" />
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 4: BENEFICIOS ────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Beneficios de los masajes post operatorios</h2>
            <p className="text-stone-500 font-medium">Una recuperación más cómoda y acompañada</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Sensación de alivio corporal",
              "Bienestar durante la recuperación",
              "Apoyo al drenaje de líquidos",
              "Disminución de sensación de pesadez",
              "Relajación y comodidad corporal",
              "Acompañamiento estético personalizado",
              "Sensación de recuperación progresiva"
            ].map((benefit, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-center gap-3 bg-white p-5 border border-stone-100 hover:border-primary/30 transition-all">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-stone-700 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 5: ¿PARA QUIÉN SE RECOMIENDAN? ───────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">¿Para quién se recomiendan?</h2>
              <p className="text-stone-600 mb-8 leading-relaxed">
                Nuestros protocolos post operatorios pueden ser ideales para personas que se realizaron procedimientos como:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Liposucción", "Abdominoplastia", "BBL", "Lipoescultura", "Mastopexia", "Cirugías corporales", "Cirugías faciales", "Procedimientos estéticos"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-stone-700 font-medium text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-10 text-stone-500 font-medium italic">
                También para quienes desean sentirse acompañadas y guiadas durante su recuperación estética.
              </p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-stone-50 p-8 border border-stone-200"
            >
               <h3 className="text-2xl font-serif font-bold text-stone-900 mb-8">¿Cómo es la experiencia en MJ?</h3>
               <div className="space-y-8">
                  {[
                    { s: "Paso 1", t: "Valoración inicial", d: "Conversamos sobre tu procedimiento, evolución y necesidades actuales." },
                    { s: "Paso 2", t: "Atención personalizada", d: "Adaptamos el protocolo según tu etapa post operatoria y sensibilidad corporal." },
                    { s: "Paso 3", t: "Sesión wellness", d: "Disfrutas un ambiente cómodo, privado y orientado al bienestar." },
                    { s: "Paso 4", t: "Seguimiento y recomendaciones", d: "Te brindamos acompañamiento y sugerencias para ayudarte a mejorar tu recuperación." }
                  ].map((step, i) => (
                    <div key={i} className="relative pl-4 border-l-2 border-primary/20">
                      <span className="text-[10px] font-bold tracking-widest text-primary uppercase block mb-1">{step.s}</span>
                      <h4 className="text-lg font-serif font-bold text-stone-900 mb-2">{step.t}</h4>
                      <p className="text-stone-500 text-sm leading-relaxed">{step.d}</p>
                    </div>
                  ))}
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 6: POR QUÉ ELEGIR MJ ───────────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              ¿Por qué tantas pacientes eligen <br />
              <span className="text-primary italic font-light">MJ Estética & Wellness Center?</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Porque entendemos que el post operatorio no es solamente físico… <br />
              <span className="text-white font-bold block mt-4">También es emocional.</span>
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center mb-20">
             <p className="text-white/80 text-lg leading-relaxed mb-12">
               Después de una cirugía muchas personas sienten ansiedad, incomodidad o preocupación por los resultados. Por eso en MJ buscamos ofrecer:
             </p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { i: <Heart className="w-8 h-8 text-primary mx-auto mb-4" />, t: "Atención humana" },
                  { i: <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />, t: "Espacios cómodos y relajantes" },
                  { i: <Users className="w-8 h-8 text-primary mx-auto mb-4" />, t: "Protocolos personalizados" },
                  { i: <Users className="w-8 h-8 text-primary mx-auto mb-4" />, t: "Acompañamiento cercano" },
                  { i: <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />, t: "Experiencia wellness enfocada" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 p-6 border border-white/10 flex flex-col items-center">
                    {item.i}
                    <span className="text-sm font-bold tracking-wider uppercase text-white/90">{item.t}</span>
                  </div>
                ))}
             </div>
          </motion.div>

          {/* TESTIMONIOS */}
          <div className="max-w-4xl mx-auto pt-24 border-t border-white/10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
               <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Lo que dicen nuestras pacientes</p>
               <h2 className="text-3xl font-serif font-bold text-white">Testimonios de pacientes</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { q: "Me ayudó muchísimo con la inflamación", d: "Después de mi cirugía me sentía súper incómoda y pesada. Las sesiones me ayudaron a sentirme mucho mejor y más tranquila durante mi recuperación." },
                { q: "La atención fue demasiado humana", d: "Me explicaron todo el proceso y sentí muchísimo acompañamiento. El ambiente es relajante y profesional." },
                { q: "Sentí alivio desde las primeras sesiones", d: "Me ayudó muchísimo a sentir menos tensión y moverme con más comodidad." }
              ].map((test, i) => (
                <div key={i} className="bg-white/5 p-8 border border-white/10 flex flex-col h-full relative">
                  <span className="absolute top-4 left-4 text-primary text-4xl leading-none opacity-20">“</span>
                  <h4 className="text-white font-serif font-bold mb-4 text-lg italic leading-tight">“{test.q}”</h4>
                  <p className="text-white/60 text-sm leading-relaxed mt-auto">{test.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Star className="absolute -left-20 -top-20 w-64 h-64 text-white/5 rotate-45" />
      </section>

      {/* ── SECCIÓN 7: FAQ ───────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-4">Preguntas frecuentes</h2>
          </motion.div>
          <div className="space-y-4">
            {[
              { question: "¿Cuándo puedo iniciar los masajes post operatorios?", answer: "Depende del procedimiento y de las indicaciones médicas. Siempre recomendamos valoración previa." },
              { question: "¿Los protocolos son personalizados?", answer: "Sí. Adaptamos cada experiencia según tu evolución y necesidades." },
              { question: "¿Cuántas sesiones necesito?", answer: "La cantidad puede variar según el procedimiento y objetivos de recuperación." },
              { question: "¿Ayudan con la inflamación?", answer: "Muchas pacientes buscan estos protocolos para apoyar procesos de drenaje y bienestar corporal durante la recuperación." },
              { question: "¿Necesito cita previa?", answer: "Sí. Trabajamos con reservación para brindarte una atención personalizada." },
              { question: "¿Atienden pacientes de Turrialba y alrededores?", answer: "Sí. Recibimos pacientes de Turrialba y zonas cercanas." }
            ].map((item, i) => (
              <FaqItem key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 8: CIERRE Y CTA FINAL ─────────────── */}
      <section className="py-24 bg-stone-50 border-t border-stone-100 overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-8">Recuperarte también es parte de verte bien</h2>
             <p className="text-stone-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
               Tu cirugía fue una inversión en ti. <br />
               <span className="text-stone-900 font-bold">Ahora dale a tu cuerpo el cuidado y acompañamiento que necesita durante el proceso de recuperación.</span>
             </p>

             <div className="bg-white p-10 md:p-16 shadow-2xl border border-stone-200 inline-block text-left max-w-3xl w-full">
               <h3 className="text-2xl font-serif font-bold text-stone-900 mb-8 text-center md:text-left">Agenda tu valoración hoy mismo</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-12">
                 {[
                   "Escríbenos por WhatsApp",
                   "Consulta disponibilidad",
                   "Solicita tu guía GRATUITA",
                   "Reserva tus sesiones post operatorias"
                 ].map((t, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                     <span className="text-stone-800 font-bold">{t}</span>
                   </div>
                 ))}
               </div>

               <div className="flex flex-col items-center gap-6">
                 <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex justify-center items-center gap-3 bg-primary text-white py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all shadow-xl group"
                  >
                    <MessageCircle className="w-5 h-5" />
                    AGENDAR POR WHATSAPP
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <p className="text-stone-500 text-sm font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Respuesta rápida en horario laboral
                  </p>
               </div>
             </div>

             <div className="mt-16 text-stone-400 text-xs tracking-widest uppercase font-bold">
               <p>MJ Estética & Wellness Center</p>
               <p className="mt-1 text-primary">Bienestar, recuperación estética y atención personalizada en Turrialba</p>
             </div>
           </motion.div>
        </div>
      </section>
    </>
  );
}
