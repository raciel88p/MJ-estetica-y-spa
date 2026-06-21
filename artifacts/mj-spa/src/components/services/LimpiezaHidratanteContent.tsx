import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, ArrowRight, Droplets, Sparkles, Star, MapPin, Phone, Clock, ShieldCheck, Download, XCircle, Heart } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

interface Props {
  waLink: string;
}

export function LimpiezaHidratanteContent({ waLink }: Props) {
  return (
    <div className="bg-white">
      {/* ── HERO REINFORCEMENT ─────────────────────── */}
      <section className="py-20 bg-stone-50 border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="inline-flex items-center gap-2 text-primary mb-6">
              <Droplets className="w-6 h-6" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Hidratación Profunda</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              Recupera la hidratación, luminosidad y suavidad natural de tu piel
            </h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto">
              <p className="font-medium text-stone-900">¡Qué bueno que llegaste hasta aquí! 💙</p>
              <p>Si comentaste <span className="text-primary font-bold">"Hidratante"</span> en nuestro Instagram, probablemente sientes que tu piel está tirante, reseca, opaca o sensible por el clima y el sol.</p>
              <p>La buena noticia es que sí tiene solución, y no necesitas tratamientos invasivos para lograr una piel más fresca y profundamente hidratada.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SYMPTOMS / PAS ─────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 leading-tight">
                ¿Sientes que tu piel necesita ayuda profesional?
              </h2>
              <p className="text-stone-600 mb-8 leading-relaxed">
                En MJ Estética & Spa Turrialba realizamos una Limpieza Facial Hidratante Profesional, diseñada para restaurar la barrera natural de la piel.
              </p>
              <div className="space-y-4">
                {[
                  "Tirante o reseca.",
                  "Opaca y sin brillo.",
                  "Con textura áspera.",
                  "Sensible por el clima o el sol.",
                  "Necesita un cuidado profesional saludable."
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                    <span className="text-stone-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary/5 p-10 border border-primary/10 rounded-sm">
               <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">¿Qué es una Limpieza Facial Hidratante?</h3>
               <p className="text-stone-600 mb-8 italic">No es una limpieza facial tradicional.</p>
               <div className="space-y-4">
                 {[
                   "Eliminar células muertas.",
                   "Limpiar poros e impurezas.",
                   "Restaurar la hidratación profunda.",
                   "Mejorar la elasticidad.",
                   "Aportar luminosidad inmediata.",
                   "Dejar una sensación de frescura y confort."
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                     <span className="text-stone-700 font-bold text-xs uppercase tracking-wide">{item}</span>
                   </div>
                 ))}
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS GRID ────────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Beneficios que notarás</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Suavidad", d: "Piel mucho más tersa al tacto.", icon: Sparkles },
              { t: "Luminosidad", d: "Glow natural desde la primera sesión.", icon: Star },
              { t: "Hidratación", d: "Sensación inmediata de confort.", icon: Droplets },
              { t: "Textura", d: "Superficie cutánea más uniforme.", icon: Sparkles },
              { t: "Descanso", d: "Rostro con apariencia más relajada.", icon: Heart },
              { t: "Acabado", d: "Maquillaje con mejor acabado visual.", icon: ShieldCheck },
              { t: "Salud", d: "Apariencia notablemente más saludable.", icon: ShieldCheck },
              { t: "Duración", d: "Resultados que se mantienen en el tiempo.", icon: Clock }
            ].map((b, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/5 p-8 border border-white/10">
                <b.icon className="w-8 h-8 text-primary mb-6 mx-auto" />
                <h4 className="font-serif font-bold text-xl mb-3 text-white">{b.t}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{b.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ──────────────────────────────── */}
      <section className="py-24 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">¿Cómo es el tratamiento?</h2>
                <p className="text-stone-600 mb-10 text-lg leading-relaxed">Cada piel es diferente, por eso personalizamos el procedimiento realizado por personal capacitado y utilizando productos profesionales.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                   {[
                     "Diagnóstico facial.",
                     "Limpieza profesional.",
                     "Exfoliación.",
                     "Extracción.",
                     "Principios activos hidratantes.",
                     "Mascarilla hidratante.",
                     "Productos calmantes.",
                     "Protección solar."
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3 py-3 border-b border-stone-100">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-stone-700 font-medium text-sm">{item}</span>
                     </div>
                   ))}
                </div>
             </motion.div>
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-50 p-12 border border-stone-200 shadow-xl rounded-sm">
                <h3 className="text-3xl font-serif font-bold text-stone-900 mb-8 italic text-white">¿Por qué elegir MJ Estética & Spa?</h3>
                <p className="text-stone-600 mb-10 leading-relaxed">La diferencia está en el diagnóstico. No aplicamos el mismo protocolo para todas las personas.</p>
                <ul className="space-y-6">
                   {[
                     "Atención personalizada.",
                     "Equipos profesionales.",
                     "Protocolos seguros.",
                     "Productos de alta calidad.",
                     "Ambiente relajante y profesional."
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-stone-800 font-bold uppercase text-xs tracking-widest">{item}</span>
                     </li>
                   ))}
                </ul>
             </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONSEQUENCES ────────────────────────────── */}
      <section className="py-24 bg-[#040f19] text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-10 leading-tight text-white font-bold">¿Qué pasa si no hidratas correctamente tu piel?</h2>
            <p className="text-stone-400 mb-12 text-lg italic">Cuando la piel permanece deshidratada durante mucho tiempo puede provocar:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
               {[
                 { t: "Mayor sensibilidad", icon: XCircle },
                 { t: "Líneas finas tempranas", icon: XCircle },
                 { t: "Aspecto apagado", icon: XCircle },
                 { t: "Pérdida de elasticidad", icon: XCircle },
                 { t: "Desequilibrio graso", icon: XCircle }
               ].map((item, i) => (
                 <div key={i} className="bg-white/5 p-6 border border-white/10 flex items-center gap-4">
                    <item.icon className="w-5 h-5 text-red-500 shrink-0" />
                    <span className="text-stone-200 font-medium">{item.t}</span>
                 </div>
               ))}
            </div>
            <p className="mt-12 text-primary font-bold text-xl italic">Mientras antes recuperes la hidratación, mejores serán los resultados.</p>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">Preguntas Frecuentes</h2>
            <div className="w-20 h-0.5 bg-primary mx-auto" />
          </motion.div>
          <div className="space-y-12">
            {[
              { q: "¿Cada cuánto se recomienda realizar una Limpieza Facial Hidratante?", a: "Generalmente cada 4 a 6 semanas, dependiendo del estado de tu piel y de tu rutina en casa." },
              { q: "¿Es dolorosa?", a: "No. Es un tratamiento relajante y cómodo. Si se requiere alguna extracción, se realiza con técnicas para minimizar molestias." },
              { q: "¿Puedo hacerme el tratamiento si tengo piel grasa?", a: "Sí. La piel grasa también puede estar deshidratada. Determinaremos el protocolo ideal para ti." },
              { q: "¿Cuánto dura la sesión?", a: "Aproximadamente entre 60 y 90 minutos." },
              { q: "¿Veré resultados desde la primera sesión?", a: "Sí. La mayoría nota una piel más suave, luminosa e hidratada inmediatamente." }
            ].map((faq, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h4 className="text-lg font-bold text-stone-900 mb-3">{faq.q}</h4>
                <p className="text-stone-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEAD MAGNET ─────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary/5 border-2 border-dashed border-primary/30 p-12 text-center rounded-sm">
           <p className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 italic">🎁 REGALO ESPECIAL</p>
           <h3 className="text-3xl font-serif font-bold text-stone-900 mb-6">Descarga nuestra guía exclusiva</h3>
           <p className="text-stone-700 text-lg font-serif italic mb-10 max-w-2xl mx-auto">"Cómo mejorar los resultados de una Limpieza Facial Hidratante y mantener tu piel hidratada por más tiempo"</p>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-12">
              <div className="space-y-4">
                 <p className="font-bold text-stone-900 text-sm uppercase tracking-widest">Lo que aprenderás:</p>
                 {[
                   "Errores que resecan tu piel.",
                   "Cómo hidratar correctamente.",
                   "Productos que realmente ayudan.",
                   "Hábitos diarios saludables.",
                   "Cómo prolongar los resultados."
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-stone-700 text-sm">{item}</span>
                   </div>
                 ))}
              </div>
              <div className="flex flex-col justify-center items-center md:items-start">
                 <p className="text-stone-500 text-sm mb-6 leading-relaxed">Como agradecimiento por escribirnos desde Instagram, solicítala completamente GRATIS.</p>
                 <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-stone-900 text-white text-[10px] font-bold px-10 py-5 tracking-widest uppercase hover:bg-primary transition-all shadow-xl">
                    <Download className="w-5 h-5" /> [DESCARGAR GUÍA GRATIS]
                 </a>
              </div>
           </div>
        </motion.div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">¿Lista para devolverle la hidratación a tu piel?</h2>
            <p className="text-stone-600 text-lg mb-12 leading-relaxed">
              No esperes a que la resequedad o la opacidad afecten la salud de tu rostro. Te ayudamos a recuperar una piel radiante con un tratamiento profesional pensado para ti.
            </p>
            <div className="flex flex-col gap-6 max-w-sm mx-auto">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-primary text-white text-sm font-bold tracking-[0.15em] uppercase px-10 py-5 hover:bg-stone-900 transition-all group shadow-2xl shadow-primary/20">
                <MessageCircle className="w-5 h-5" />
                Agendar mi valoración
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mt-2">💧 Reserva tu cita hoy mismo</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
