import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, ArrowRight, Star, MapPin, Phone, Clock, ShieldCheck, Zap, Sparkles, Target, Download, Heart, TrendingUp } from "lucide-react";

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

export function LaserAcneContent({ waLink }: Props) {
  return (
    <div className="bg-white">
      {/* ── INTRO / PAS ────────────────────────────── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              ¿Te gustaría verte al espejo y sentir más confianza al observar tu piel?
            </h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto">
              <p>En MJ Estética & Wellness Center entendemos que el acné no solo afecta la apariencia física. También puede impactar la autoestima y la seguridad personal.</p>
              <p>Por eso ofrecemos tratamientos de <span className="font-bold text-stone-900">Láser para Acné en Turrialba</span> diseñados para complementar protocolos profesionales de cuidado facial, ayudando a mejorar progresivamente la apariencia de:</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
               {[
                 "Brotes activos", "Marcas de acné", "Piel grasa", "Textura irregular",
                 "Poros visibles", "Inflamación", "Tono desigual", "Apariencia opaca"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-2 bg-white p-3 border border-stone-100 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-tight text-stone-700">{item}</span>
                 </div>
               ))}
            </div>

            <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
               <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-primary text-white text-xs font-bold tracking-[0.2em] uppercase px-8 py-5 hover:bg-stone-900 transition-all shadow-xl">
                  <MessageCircle className="w-4 h-4" />
                  Agenda tu valoración
               </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROBLEM / PERSONALIZATION ────────────────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
                ¿Buscas un Tratamiento para Acné en Turrialba?
              </h2>
              <p className="text-stone-600 mb-8 leading-relaxed">
                Miles de personas prueban productos sin lograr los resultados que esperan porque el origen del acné es diferente en cada persona. Analizamos tu piel para recomendar un protocolo personalizado.
              </p>
              <div className="space-y-4">
                 {[
                   "Tipo de piel", "Nivel de inflamación", "Presencia de marcas",
                   "Hábitos de cuidado facial", "Objetivos del paciente"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 text-stone-700">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="font-bold text-xs uppercase tracking-widest">{item}</span>
                   </div>
                 ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary/5 p-12 border border-primary/10 rounded-sm">
               <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">¿Qué es el Láser para Acné?</h3>
               <p className="text-stone-600 leading-relaxed mb-8 italic">
                 Es un tratamiento facial avanzado que complementa estrategias de skincare profesional ayudando a mejorar progresivamente la apariencia de la piel con tendencia acneica.
               </p>
               <ul className="space-y-4">
                  {[
                    "Mejorar la apariencia de brotes.",
                    "Reducir visualmente marcas.",
                    "Mejorar la textura facial.",
                    "Mantener apariencia saludable."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                       <Zap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                       <span className="text-stone-700 font-medium text-sm">{item}</span>
                    </li>
                  ))}
               </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS GRID ────────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative text-center">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 text-white">MJ ESTÉTICA FACIAL</p>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 text-white">Beneficios del Láser</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Mejora progresiva", d: "Una piel con apariencia más uniforme aumenta la confianza y bienestar personal.", icon: TrendingUp },
              { t: "Apoyo para marcas", d: "Ayuda a apoyar tratamientos orientados a mejorar la apariencia de marcas visibles.", icon: Sparkles },
              { t: "Textura uniforme", d: "Contribuye a mejorar visualmente la textura de la piel de manera eficaz.", icon: Target },
              { t: "Aliado Skincare", d: "Puede integrarse con otros protocolos de cuidado facial profesional.", icon: CheckCircle2 },
              { t: "Personalizado", d: "Cada sesión se adapta según las necesidades detectadas en tu piel.", icon: Star },
              { t: "Bienestar integral", d: "Porque sentirse bien también forma parte de verse bien cada día.", icon: Heart }
            ].map((b, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/5 p-8 border border-white/10">
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">¿Cómo es una Sesión?</h2>
            <p className="text-stone-500 max-w-2xl mx-auto italic">Un protocolo profesional y cuidado para tu rostro.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { s: "Paso 1", t: "Valoración Profesional", d: "Analizamos tu piel y objetivos detalladamente." },
              { s: "Paso 2", t: "Preparación Facial", d: "Limpieza y acondicionamiento previo de la piel." },
              { s: "Paso 3", t: "Aplicación del Protocolo", d: "Tratamiento realizado por profesionales capacitados." },
              { s: "Paso 4", t: "Recomendaciones", d: "Cuidados posteriores y seguimiento personalizado." }
            ].map((step, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative p-8 bg-stone-50 border border-stone-200">
                <span className="text-primary font-bold text-5xl opacity-10 absolute top-4 right-4 italic font-serif">{i + 1}</span>
                <div className="text-left">
                  <h4 className="text-primary font-bold text-[10px] tracking-widest uppercase mb-4">{step.s}</h4>
                  <h3 className="text-lg font-serif font-bold text-stone-900 mb-4">{step.t}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{step.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-stone-400 font-bold uppercase text-[10px] tracking-[0.2em]">
             <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> Duración: 30-60 min</div>
             <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Recuperación rápida</div>
          </div>
        </div>
      </section>

      {/* ── BEFORE & AFTER ────────────────────────────── */}
      <section className="py-24 bg-[#071e2e] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl font-serif font-bold mb-8 text-white font-bold">Antes y Después</h2>
              <p className="text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">Observa casos reales de pacientes que siguieron protocolos personalizados. Buscamos resultados naturales y una mejora progresiva de la apariencia facial.</p>
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                 {["Apariencia uniforme", "Mejora progresiva", "Resultados naturales", "Bienestar facial"].map((tag, i) => (
                   <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">{tag}</span>
                 ))}
              </div>
              <div className="aspect-video bg-stone-800 rounded-sm flex items-center justify-center border border-white/10 overflow-hidden shadow-2xl">
                 <img src="/images/faciales-bg.webp" alt="Láser para Acné Turrialba" className="w-full h-full object-cover opacity-50" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white/30 font-bold uppercase tracking-[0.4em] text-xs">Casos Reales MJ Estética</p>
                 </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">¿Por Qué Elegir MJ Estética?</h2>
            <p className="text-stone-600 text-lg mb-12 leading-relaxed">"Porque no tratamos únicamente la piel. Tratamos personas."</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-16">
              {[
                "Protocolos personalizados", "Atención individualizada",
                "Tecnología especializada", "Ambiente profesional",
                "Seguimiento continuo", "Educación en skincare"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-stone-700 font-bold text-sm uppercase tracking-wider">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LEAD MAGNET ─────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary/5 border-2 border-dashed border-primary/30 p-12 text-center rounded-sm">
           <p className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 italic">🎁 RECURSO GRATUITO</p>
           <h3 className="text-3xl font-serif font-bold text-stone-900 mb-6">Guía: 7 Hábitos que Ayudan a Mejorar una Piel con Tendencia al Acné</h3>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-10">
              <div className="space-y-4">
                 <p className="font-bold text-stone-900 text-sm uppercase tracking-widest">Lo que aprenderás:</p>
                 {[
                   "Errores que empeoran los brotes.",
                   "Cuidados posteriores recomendados.",
                   "Cómo complementar tu rutina.",
                   "Consejos para potenciar resultados.",
                   "Mantenimiento de apariencia saludable."
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

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-24 bg-stone-50 border-y border-stone-100">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 text-center">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">Preguntas Frecuentes</h2>
            <div className="w-12 h-0.5 bg-primary mx-auto" />
          </motion.div>
          <div className="space-y-12">
            {[
              { q: "¿El láser para acné duele?", a: "La mayoría describe una sensación tolerable que depende de la sensibilidad individual." },
              { q: "¿Ayuda con marcas de acné?", a: "Puede formar parte de protocolos orientados a mejorar su apariencia según valoración profesional." },
              { q: "¿Cuántas sesiones necesito?", a: "Cada caso es diferente y requiere evaluación personalizada." },
              { q: "¿Sirve para piel grasa?", a: "Muchas personas con piel grasa incorporan este tratamiento dentro de sus protocolos faciales." },
              { q: "¿Cuándo puedo ver resultados?", a: "Los resultados suelen ser progresivos y dependen de diversos factores individuales." }
            ].map((faq, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h4 className="text-lg font-bold text-stone-900 mb-3">{faq.q}</h4>
                <p className="text-stone-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">Agenda tu valoración facial hoy</h2>
            <p className="text-stone-600 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
              Tu piel merece atención profesional. Mientras más temprano comiences un protocolo adecuado, más rápido podrás avanzar hacia una piel más saludable.
            </p>
            <div className="flex flex-col gap-4 max-w-sm mx-auto">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-primary text-white text-sm font-bold tracking-[0.15em] uppercase px-10 py-5 hover:bg-stone-900 transition-all group shadow-2xl shadow-primary/20">
                <MessageCircle className="w-5 h-5" />
                Reservar Cita
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-stone-400 font-bold text-[10px] uppercase tracking-widest mt-4">📍 Turrialba, Cartago, Costa Rica</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
