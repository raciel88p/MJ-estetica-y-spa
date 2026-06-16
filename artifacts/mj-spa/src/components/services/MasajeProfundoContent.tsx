import { motion } from "framer-motion";
import {
  MessageCircle,
  Star,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Sparkles,
  Gift,
  Check,
  Clock,
  MapPin,
  ChevronDown,
  Quote,
  Heart,
  Info
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as any } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function MasajeProfundoContent({
  waLink
}: {
  waLink: string;
}) {
  return (
    <div className="bg-white">
      {/* ── SECCIÓN: INTRODUCCIÓN ────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-8 mx-auto">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <p className="text-stone-800 text-xl md:text-2xl font-serif leading-relaxed italic max-w-3xl mx-auto mb-12">
              "¿Sientes tu cuerpo cargado, rígido o agotado por el estrés del día a día? En MJ Estética & Wellness Center creamos una experiencia de masaje profundo diseñada para ayudarte a desconectar, liberar tensión muscular y recuperar una verdadera sensación de bienestar corporal."
            </p>

            <div className="bg-stone-50 p-8 rounded-sm border border-stone-100 mb-12">
               <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
                 ✨ Si llegaste aquí después de comentar la palabra “PROFUNDO”, tenemos algo especial para ti.
               </p>
               <p className="text-stone-600 text-lg leading-relaxed italic">
                 "Porque entendemos que muchas veces el cuerpo habla antes que la mente: dolor, cansancio, tensión acumulada, estrés físico, mala postura, agotamiento… y la sensación constante de no poder descansar realmente."
               </p>
            </div>

            <div className="space-y-6 text-stone-600 text-lg leading-relaxed max-w-2xl mx-auto">
              <p>Nuestro Masaje Profundo en Turrialba no es simplemente un masaje. Es una experiencia wellness premium enfocada en:</p>
              <div className="grid grid-cols-2 gap-4 text-left pt-4">
                {["relajación profunda", "descanso físico", "alivio de tensión", "bienestar muscular", "autocuidado consciente", "recuperación personalizada"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-stone-700 font-medium uppercase text-[10px] tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: IMAGINA ─────────────────── */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/spa-texture.webp" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <h2 className="text-3xl md:text-5xl font-serif italic mb-12 text-white">Imagina por un momento…</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 "Llegar a un ambiente tranquilo.",
                 "Música relajante.",
                 "Aromas suaves.",
                 "Iluminación wellness.",
                 "Una camilla cómoda.",
                 "Protocolo adaptado a ti."
               ].map((text, i) => (
                 <div key={i} className="bg-white/5 backdrop-blur-sm p-6 border border-white/10 rounded-sm">
                   <p className="text-stone-300 font-serif text-lg italic">{text}</p>
                 </div>
               ))}
             </div>
             <p className="mt-16 text-primary text-xl font-serif italic">
               Eso es exactamente lo que buscamos crear para ti.
             </p>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: ¿QUÉ ES? ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 uppercase tracking-tighter">¿QUÉ ES UN MASAJE PROFUNDO?</h2>
              <p className="text-stone-600 leading-relaxed mb-8 text-lg">
                El masaje profundo es una experiencia corporal orientada a liberar tensión muscular acumulada mediante técnicas personalizadas que buscan brindar relajación, descanso físico y bienestar corporal.
              </p>
              <div className="bg-stone-50 p-6 border-l-4 border-primary">
                 <p className="text-stone-900 font-bold mb-4 uppercase text-xs tracking-widest">Cada sesión se adapta individualmente según:</p>
                 <ul className="space-y-2">
                   {["nivel de tensión", "sensibilidad corporal", "presión deseada", "zonas de mayor carga", "necesidades de relajación"].map((t, i) => (
                     <li key={i} className="flex items-center gap-2 text-stone-600 text-sm italic">• {t}</li>
                   ))}
                 </ul>
              </div>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-stone-50 p-10 border border-stone-100 rounded-sm shadow-sm text-center"
            >
              <Quote className="w-12 h-12 text-primary/10 mb-6 mx-auto" />
              <p className="text-xl font-serif italic text-stone-800 leading-relaxed mb-6">
                "No se trata de aplicar presión extrema. Se trata de ayudarte a sentir alivio, relajación y desconexión física."
              </p>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest border-b border-primary/30 pb-1 hover:border-primary transition-all">
                Reservar Mi Experiencia <MessageCircle className="w-3 h-3" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: BENEFICIOS ─────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter">¿QUÉ BENEFICIOS PUEDE APORTAR?</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Sensación de relajación muscular",
              "Bienestar corporal integral",
              "Descanso físico profundo",
              "Experiencia wellness premium",
              "Sensación de alivio corporal",
              "Complemento ideal para autocuidado",
              "Relajación física y mental",
              "Momento de desconexión personal",
              "Sensación de renovación corporal"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-6 rounded-sm border border-stone-100 shadow-sm group hover:border-primary/30 transition-colors">
                <Sparkles className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-stone-700 text-sm font-medium uppercase tracking-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: PARA QUIÉN ─────────────────── */}
      <section className="py-24 bg-[#071e2e] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <h2 className="text-3xl md:text-5xl font-serif font-bold mb-12 uppercase tracking-tight text-white">¿PARA QUIÉN SE RECOMIENDA?</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-16">
               {[
                 "sienten tensión corporal frecuente",
                 "pasan muchas horas sentadas o trabajando",
                 "viven con altos niveles de estrés físico",
                 "entrenan o realizan actividad física",
                 "desean relajación profunda",
                 "buscan autocuidado corporal",
                 "desean regalarse un momento de bienestar real"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 bg-white/5 p-4 border border-white/10 rounded-sm">
                   <Check className="w-4 h-4 text-primary shrink-0" />
                   <span className="text-stone-200 text-xs font-bold uppercase tracking-wide">{item}</span>
                 </div>
               ))}
             </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: PASO A PASO ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter">¿CÓMO ES LA EXPERIENCIA EN MJ?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { step: "01", title: "Evaluación personalizada", desc: "Analizamos contigo las zonas de tensión y el nivel de presión ideal." },
              { step: "02", title: "Ambiente wellness", desc: "Creamos un entorno diseñado para ayudarte a desconectar completamente." },
              { step: "03", title: "Aplicación personalizada", desc: "Cada movimiento y protocolo se adapta a tus necesidades corporales." },
              { step: "04", title: "Seguimiento", desc: "Te brindamos recomendaciones para potenciar la sensación de bienestar." }
            ].map((s, i) => (
              <div key={i} className="p-10 bg-stone-50 border border-stone-100 rounded-sm relative group hover:bg-white hover:shadow-xl transition-all duration-300">
                <span className="absolute top-6 right-8 text-5xl font-serif font-bold text-primary/10 group-hover:text-primary/20">{s.step}</span>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-4 uppercase tracking-tight">{s.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-12 border-t border-stone-100 pt-12">
             <div className="flex items-center gap-3">
               <Clock className="w-6 h-6 text-primary" />
               <div className="text-left">
                  <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Duración</p>
                  <p className="text-stone-900 font-bold">60 a 90 minutos</p>
               </div>
             </div>
             <div className="flex items-center gap-3">
               <Zap className="w-6 h-6 text-primary" />
               <div className="text-left">
                  <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Presión</p>
                  <p className="text-stone-900 font-bold">Totalmente Personalizada</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: FILOSOFÍA ─────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 uppercase tracking-tighter text-stone-900">UNA EXPERIENCIA ENFOCADA EN BIENESTAR REAL</h2>
             <p className="text-stone-600 text-xl font-serif italic mb-12">
               "En MJ Estética & Wellness Center creemos que el bienestar no es un lujo. Es una necesidad."
             </p>
             <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 text-left">
                {["relajación profunda", "descanso físico", "bienestar corporal", "desconexión emocional", "autocuidado premium"].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 border-b border-stone-200 pb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-stone-700 text-sm font-bold uppercase tracking-widest">{item}</span>
                   </div>
                ))}
             </div>
             <div className="space-y-2">
                <p className="text-stone-400 uppercase text-xs tracking-[0.4em] mb-4">Nuestro objetivo es que salgas sintiéndote:</p>
                <div className="text-3xl md:text-5xl font-serif font-bold text-stone-900 space-y-2 italic">
                   <p>más ligero,</p>
                   <p>más relajado,</p>
                   <p className="text-primary">más tranquilo,</p>
                   <p>y con bienestar real.</p>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: POR QUÉ ELEGIRNOS ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-12 uppercase tracking-tighter">¿POR QUÉ ELEGIR MJ ESTÉTICA & WELLNESS CENTER?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                {[
                  { title: "Atención", desc: "Personalizada y humana." },
                  { title: "Protocolos", desc: "Adaptados individualmente." },
                  { title: "Ambiente", desc: "Relajante, privado y wellness." },
                  { title: "Experiencia", desc: "Cálida y profesional." }
                ].map((item, i) => (
                  <div key={i} className="space-y-4">
                     <ShieldCheck className="w-8 h-8 text-primary" />
                     <h3 className="font-bold text-stone-900 uppercase text-sm tracking-widest">{item.title}</h3>
                     <p className="text-stone-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
           </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: TESTIMONIOS ─────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter text-white">TESTIMONIOS</h2>
            <p className="text-stone-400 uppercase text-[10px] tracking-widest font-bold mt-2">La voz de nuestras clientas</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "“Sentí una relajación increíble desde la primera sesión. El ambiente transmite demasiada paz.”", author: "Cliente MJ" },
              { text: "“Llegué con demasiada tensión corporal y salí sintiéndome muchísimos más liviana.”", author: "Cliente Wellness" },
              { text: "“Más que un masaje, fue una experiencia completa de descanso.”", author: "Cliente MJ" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-sm border border-stone-100 shadow-sm relative italic font-serif text-stone-600">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
                <p className="text-lg leading-relaxed mb-8">{item.text}</p>
                <div className="flex items-center gap-4 border-t border-stone-50 pt-6">
                   <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-[10px]">MJ</div>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-stone-900">{item.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: FAQ ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 leading-tight uppercase tracking-tighter">PREGUNTAS FRECUENTES</h2>
          </motion.div>
          <div className="space-y-4">
            {[
              { q: "¿Qué se siente durante el masaje profundo?", a: "Una sensación progresiva de relajación muscular y bienestar corporal intenso." },
              { q: "¿La presión se adapta?", a: "Sí. Cada sesión se personaliza completamente según tu umbral de dolor y necesidad." },
              { q: "¿Cuánto dura?", a: "Entre 60 y 90 minutos dependiendo del protocolo seleccionado." },
              { q: "¿Es relajante?", a: "Sí. Aunque trabajamos el músculo, el enfoque principal es bienestar y relajación profunda." },
              { q: "¿Se puede combinar con otros tratamientos?", a: "Sí. Puede complementarse perfectamente con exfoliaciones o envolturas corporales." }
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <details className="group bg-stone-50 border border-stone-100 rounded-sm overflow-hidden transition-all duration-300 open:shadow-md">
                  <summary className="p-6 cursor-pointer flex justify-between items-center list-none font-serif font-bold text-stone-900 group-hover:text-primary">
                    {item.q}
                    <span className="text-primary transition-transform duration-300 group-open:rotate-180">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="p-6 pt-0 text-stone-600 text-sm leading-relaxed border-t border-stone-200/50">
                    {item.a}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: REGALO ─────────────────── */}
      <section className="py-24 bg-[#071e2e] relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5 -translate-y-1/3 translate-x-1/3">
          <Gift className="w-96 h-96 text-primary" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 md:p-20 rounded-sm text-center"
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-8">
              <Gift className="w-4 h-4" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">Regalo Exclusivo</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight uppercase tracking-tighter">
              REGALO ESPECIAL POR COMENTAR <span className="text-primary">“PROFUNDO”</span>
            </h2>
            <p className="text-stone-300 mb-10 text-xl font-serif italic leading-relaxed">
              "Queremos ayudarte a potenciar tu bienestar y autocuidado."
            </p>

            <div className="bg-stone-900/50 p-8 border border-white/10 rounded-sm mb-12 text-left">
               <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest border-b border-white/10 pb-4">“Cómo mejorar los resultados de tus tratamientos faciales y wellness”</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {["cuidar mejor tu piel", "potenciar tus resultados", "mejorar tu rutina", "complementar tus sesiones"].map((t, i) => (
                   <div key={i} className="flex items-center gap-2">
                     <CheckCircle2 className="w-4 h-4 text-primary" />
                     <span className="text-stone-300 text-xs font-medium uppercase">{t}</span>
                   </div>
                 ))}
               </div>
            </div>

            <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-stone-900 transition-all shadow-2xl active:translate-y-1">
              <MessageCircle className="w-5 h-5" /> Reclamar Mi Guía Gratuita
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: FINAL CTA ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Agenda Hoy</p>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 uppercase tracking-tighter text-stone-900">🔥 AGENDA TU EXPERIENCIA WELLNESS HOY</h2>
            <div className="text-2xl md:text-3xl font-serif italic text-stone-500 mb-12 space-y-2">
               <p>Tu cuerpo merece descanso.</p>
               <p>Tu mente merece desconexión.</p>
               <p className="text-stone-900 font-bold">Y tú mereces sentirte bien otra vez.</p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all shadow-2xl hover:-translate-y-1 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar Mi Masaje Profundo
              </a>
              <div className="flex flex-wrap justify-center gap-8 opacity-60">
                 <span className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase"><MapPin className="w-3 h-3" /> Turrialba, Costa Rica</span>
                 <span className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase"><Info className="w-3 h-3" /> Cita Previa</span>
              </div>
            </div>

            <div className="mt-20 pt-12 border-t border-stone-100">
               <p className="font-serif font-bold text-stone-900 text-xl mb-1">MJ Estética & Wellness Center</p>
               <p className="text-stone-400 text-sm tracking-widest uppercase">Bienestar corporal, relajación profunda y experiencias wellness premium en Turrialba.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
