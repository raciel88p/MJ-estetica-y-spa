import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, ArrowRight, Star, MapPin, Phone, Clock, ShieldCheck, Zap, Sparkles, Target, Download, Heart } from "lucide-react";

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

export function MelanOutContent({ waLink }: Props) {
  return (
    <div className="bg-white">
      {/* ── INTRO / PAS ────────────────────────────── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              ¿Te gustaría lucir una piel más luminosa, uniforme y saludable?
            </h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto">
              <p>Las manchas faciales, el melasma, la textura irregular y la pérdida de luminosidad pueden afectar la apariencia de tu piel y hacer que luzca cansada o envejecida antes de tiempo.</p>
              <p>En MJ Estética & Wellness Center hemos desarrollado protocolos personalizados de <span className="font-bold text-stone-900 underline decoration-primary/30">Microneedling con MelanOut en Turrialba</span>, diseñados para apoyar tratamientos despigmentantes y potenciar la luminosidad natural mediante técnicas avanzadas.</p>
            </div>
            <div className="mt-12 bg-white p-8 md:p-12 shadow-xl border border-stone-100 rounded-sm">
               <h3 className="text-2xl font-serif font-bold text-stone-900 mb-8">Agenda tu valoración facial hoy mismo</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10 max-w-lg mx-auto">
                 {[
                   "Protocolos personalizados",
                   "Atención individualizada",
                   "Ambiente seguro y premium",
                   "Seguimiento de resultados",
                   "Enfoque wellness avanzado"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                     <span className="text-sm font-bold text-stone-700 uppercase tracking-wide">{item}</span>
                   </div>
                 ))}
               </div>
               <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-primary text-white text-xs font-bold tracking-[0.2em] uppercase px-8 py-5 hover:bg-stone-900 transition-all shadow-lg">
                  <MessageCircle className="w-4 h-4" />
                  RESERVAR POR WHATSAPP
                  <ArrowRight className="w-4 h-4" />
               </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT IS IT ──────────────────────────────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
                ¿Qué es el Microneedling con MelanOut?
              </h2>
              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p>El Microneedling con MelanOut es un tratamiento facial avanzado que combina microagujas de precisión con activos especializados orientados al cuidado de la piel y protocolos despigmentantes.</p>
                <p>Las microagujas crean microcanales controlados que facilitan la absorción de ingredientes seleccionados, ayudando a mejorar progresivamente la apariencia del tono, la textura y la luminosidad facial.</p>
                <p>Es una excelente alternativa para personas que desean complementar su rutina de skincare con procedimientos profesionales diseñados para apoyar la renovación visible de la piel.</p>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary/5 p-10 border border-primary/10 rounded-sm">
               <h3 className="text-xl font-serif font-bold text-stone-900 mb-6">Ideal para mejorar:</h3>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {[
                   "Manchas faciales", "Melasma", "Hiperpigmentación",
                   "Tono desigual", "Textura irregular", "Piel opaca",
                   "Marcas superficiales", "Signos de la edad", "Falta de glow"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                     <span className="text-stone-700 text-sm font-medium">{item}</span>
                   </li>
                 ))}
               </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ────────────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 text-white">BENEFICIOS PREMIUM</p>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">¿Por qué elegir este tratamiento?</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Glow facial natural", d: "Mejora la luminosidad general para una apariencia más fresca y saludable.", icon: Zap },
              { t: "Apoyo despigmentante", d: "Complementa tratamientos orientados a mejorar manchas y tono desigual.", icon: Target },
              { t: "Mejora la textura", d: "Favorece una apariencia más uniforme, suave y revitalizada.", icon: Sparkles },
              { t: "Personalización total", d: "Cada protocolo se adapta a las necesidades específicas de tu piel.", icon: Heart },
              { t: "Rejuvenecimiento", d: "Resultados progresivos y naturales conforme avanza el protocolo.", icon: Star },
              { t: "Potencia tu skincare", d: "Lleva tus cuidados diarios al siguiente nivel con ayuda profesional.", icon: CheckCircle2 }
            ].map((b, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-all">
                <b.icon className="w-10 h-10 text-primary mb-6 mx-auto" />
                <h4 className="font-serif font-bold text-2xl mb-4 text-white">{b.t}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{b.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ──────────────────────────────── */}
      <section className="py-24 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">¿Cómo funciona una sesión?</h2>
            <p className="text-stone-500 max-w-2xl mx-auto italic">Un proceso profesional diseñado para tu bienestar.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { s: "Paso 1", t: "Valoración facial", d: "Analizamos tu piel para determinar objetivos y expectativas reales." },
              { s: "Paso 2", t: "Limpieza profesional", d: "Preparamos la piel adecuadamente para optimizar el procedimiento." },
              { s: "Paso 3", t: "Microneedling + MelanOut", d: "Aplicación del protocolo personalizado con equipos especializados." },
              { s: "Paso 4", t: "Recomendaciones", d: "Indicaciones específicas para proteger y potenciar los resultados." }
            ].map((step, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative p-10 bg-stone-50 border border-stone-200 shadow-sm">
                <span className="text-primary font-bold text-7xl opacity-10 absolute -top-4 -left-4 italic font-serif">{i + 1}</span>
                <div className="relative text-left">
                  <h4 className="text-primary font-bold text-[10px] tracking-widest uppercase mb-4">{step.s}</h4>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">{step.t}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{step.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-stone-400 font-bold uppercase text-[10px] tracking-[0.2em]">
             <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> Duración: 60-90 min</div>
             <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Procedimiento seguro</div>
          </div>
        </div>
      </section>

      {/* ── FOR WHOM ─────────────────────────────────── */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">¿Para quién se recomienda?</h2>
                <div className="space-y-4">
                   {[
                     "Personas con manchas faciales",
                     "Tratamiento para Melasma",
                     "Piel con textura irregular",
                     "Amantes del skincare avanzado",
                     "Personas que buscan glow natural",
                     "Mantenimiento preventivo antiaging"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3 bg-white p-4 border border-stone-200 shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-stone-700 font-bold text-xs uppercase tracking-widest">{item}</span>
                     </div>
                   ))}
                </div>
             </motion.div>
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#071e2e] p-12 text-white rounded-sm shadow-2xl relative">
                <h3 className="text-3xl font-serif font-bold mb-8 text-white">¿Por Qué Elegir MJ Estética & Wellness Center?</h3>
                <ul className="space-y-6">
                   {[
                     { t: "Atención Personalizada", d: "Entendemos que cada piel es un mundo diferente." },
                     { t: "Experiencia en Skincare", d: "Protocolos avanzados con tecnología de vanguardia." },
                     { t: "Ambiente Wellness Premium", d: "Espacios diseñados para tu relax y seguridad." },
                     { t: "Seguimiento Profesional", d: "Acompañamos tu progreso en cada paso del camino." }
                   ].map((item, i) => (
                     <li key={i}>
                        <h4 className="font-bold text-primary text-lg mb-1">{item.t}</h4>
                        <p className="text-white/60 text-sm leading-relaxed">{item.d}</p>
                     </li>
                   ))}
                </ul>
             </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS & RESULTS ───────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">Resultados Reales</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">Buscamos resultados naturales, equilibrados y acordes con las necesidades de tu piel.</p>
          </motion.div>
          <div className="aspect-video bg-stone-100 rounded-sm mb-20 overflow-hidden relative shadow-2xl">
             <img src="/images/faciales-bg.webp" alt="Resultados MelanOut" className="w-full h-full object-cover opacity-60" />
             <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-stone-400 font-bold uppercase tracking-[0.4em] text-xs text-white">Resultados Progresivos MJ Estética</p>
             </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left italic">
             {[
               "Mi piel luce mucho más luminosa y uniforme.",
               "Sentí que mi rostro recuperó frescura y brillo.",
               "Me encantó el seguimiento y la atención personalizada."
             ].map((t, i) => (
               <div key={i} className="p-8 bg-stone-50 border-l-4 border-primary">
                  <p className="text-stone-700 leading-relaxed font-medium">"{t}"</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ── LEAD MAGNET ─────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary/5 border-2 border-dashed border-primary/30 p-12 text-center rounded-sm">
           <p className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 italic font-bold">🎁 RECURSO GRATUITO</p>
           <h3 className="text-3xl font-serif font-bold text-stone-900 mb-6">Guía: Cómo Potenciar los Resultados Despigmentantes</h3>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-10">
              <div className="space-y-4">
                 <p className="font-bold text-stone-900 text-sm uppercase tracking-widest">Lo que aprenderás:</p>
                 {[
                   "Hábitos que ayudan a cuidar tu piel.",
                   "Errores comunes que debes evitar.",
                   "Recomendaciones para potenciar resultados.",
                   "Consejos de protección solar avanzada.",
                   "Rutinas complementarias de skincare."
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-stone-700 text-sm">{item}</span>
                   </div>
                 ))}
              </div>
              <div className="flex flex-col justify-center">
                 <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-stone-900 text-white text-[10px] font-bold px-10 py-5 tracking-widest uppercase hover:bg-primary transition-all shadow-xl">
                    <Download className="w-5 h-5" /> SOLICITAR GUÍA POR WHATSAPP
                 </a>
              </div>
           </div>
        </motion.div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────── */}
      <section className="py-24 bg-[#040f19] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl font-serif font-bold mb-8 leading-tight text-white">Agenda tu valoración facial hoy</h2>
            <p className="text-stone-400 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
              Tu piel merece un protocolo diseñado específicamente para ella. Descubre cómo el Microneedling con MelanOut puede ayudarte.
            </p>
            <div className="flex flex-col gap-6 max-w-sm mx-auto">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-primary text-white text-sm font-bold tracking-[0.15em] uppercase px-10 py-5 hover:bg-white hover:text-stone-900 transition-all group shadow-2xl shadow-primary/20">
                <MessageCircle className="w-5 h-5" />
                Agendar Valoración
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mt-2 font-bold">📍 Turrialba, Costa Rica</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
