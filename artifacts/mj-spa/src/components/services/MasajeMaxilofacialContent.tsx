import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, ArrowRight, Heart, Sparkles, Star, MapPin, Phone, Clock, ShieldCheck, Zap } from "lucide-react";

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

export function MasajeMaxilofacialContent({ waLink }: Props) {
  return (
    <div className="bg-white">
      {/* ── INTRO / PAS ────────────────────────────── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              Relajación Facial Profunda y Bienestar Integral en MJ Estética & Wellness Center
            </h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto">
              <p>¿Sientes tensión en el rostro, mandíbula cargada o simplemente deseas regalarte un momento de relajación y autocuidado?</p>
              <p>En MJ Estética & Wellness Center hemos desarrollado una experiencia de <span className="font-bold text-stone-900 underline decoration-primary/30">masaje maxilofacial en Turrialba</span> enfocada en promover bienestar facial, relajación muscular y una sensación profunda de descanso físico y emocional.</p>
              <p>Cada protocolo es personalizado y adaptado a las necesidades de tu rostro para brindarte una experiencia wellness premium en un ambiente diseñado para desconectarte del estrés diario.</p>
            </div>
            <div className="mt-12 bg-white p-8 md:p-12 shadow-xl border border-stone-100 rounded-sm">
               <h3 className="text-2xl font-serif font-bold text-stone-900 mb-8">Agenda tu valoración facial personalizada</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10 max-w-lg mx-auto">
                 {[
                   "Atención individualizada",
                   "Ambiente relajante",
                   "Protocolos personalizados",
                   "Experiencia wellness premium",
                   "Ubicación céntrica",
                   "Horarios flexibles"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                     <span className="text-sm font-bold text-stone-700 uppercase tracking-wide">{item}</span>
                   </div>
                 ))}
               </div>
               <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-primary text-white text-xs font-bold tracking-[0.2em] uppercase px-8 py-5 hover:bg-stone-900 transition-all shadow-lg">
                  <MessageCircle className="w-4 h-4" />
                  Reservar por WhatsApp
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
                ¿Qué es el Masaje Maxilofacial?
              </h2>
              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p>El masaje maxilofacial es una experiencia de bienestar facial diseñada para trabajar distintas áreas del rostro mediante maniobras suaves y personalizadas orientadas a generar relajación facial, armonización muscular y una agradable sensación de bienestar.</p>
                <p>A diferencia de un masaje facial convencional, este protocolo se enfoca en brindar una experiencia integral que combina técnicas de relajación, autocuidado facial y bienestar emocional.</p>
                <p>En MJ Estética & Wellness Center cada sesión se adapta a las características y necesidades de cada persona para ofrecer una experiencia totalmente personalizada.</p>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
               <div className="aspect-video bg-stone-100 rounded-sm overflow-hidden shadow-2xl relative">
                  <img src="/images/masajes-relajantes-bg.webp" alt="Masaje Maxilofacial" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-primary/10" />
               </div>
               <div className="absolute -bottom-6 -right-6 bg-primary p-6 shadow-xl hidden md:block">
                  <Heart className="w-10 h-10 text-white" />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ────────────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 text-white">BIENESTAR Y SALUD</p>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Beneficios Reales</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Relajación facial profunda", d: "Ayuda a crear una experiencia de descanso y desconexión que muchas personas buscan después de jornadas exigentes.", icon: Zap },
              { t: "Bienestar muscular facial", d: "Promueve una agradable sensación de confort en distintas zonas del rostro.", icon: Heart },
              { t: "Autocuidado personal", d: "Dedicar tiempo para ti también forma parte de una vida más equilibrada.", icon: Sparkles },
              { t: "Experiencia premium", d: "Una combinación de ambiente, atención personalizada y protocolos diseñados para tu bienestar.", icon: Star },
              { t: "Relajación integral", d: "Muchos clientes describen la experiencia como un momento para desconectar del ritmo acelerado.", icon: Clock },
              { t: "Armonización facial", d: "Mejora visualmente la expresión al liberar la tensión acumulada en los músculos del rostro.", icon: CheckCircle2 }
            ].map((b, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-all">
                <b.icon className="w-10 h-10 text-primary mb-6" />
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">¿Cómo es una sesión con nosotros?</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">Un proceso diseñado para tu máximo confort y resultados.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 shadow-xl border border-stone-200">
            {[
              { s: "1", t: "Valoración personalizada", d: "Conocemos tus necesidades y objetivos para adaptar la experiencia." },
              { s: "2", t: "Preparación del protocolo", d: "Creamos un ambiente diseñado para favorecer la relajación y el confort." },
              { s: "3", t: "Aplicación del masaje", d: "Se realizan maniobras personalizadas con intensidad ajustada para cada persona." },
              { s: "4", t: "Recomendaciones posteriores", d: "Te brindamos orientación para complementar tu rutina de bienestar facial." }
            ].map((step, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-10">
                <span className="text-primary font-bold text-5xl italic font-serif block mb-6">{step.s}</span>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">{step.t}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR WHOM ─────────────────────────────────── */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">¿Para Quién Está Recomendado?</h2>
                <p className="text-stone-600 mb-10 text-lg leading-relaxed">Este masaje facial es ideal para quienes buscan priorizar su bienestar y salud facial en un mundo de ritmo acelerado.</p>
                <div className="space-y-4">
                   {[
                     "Personas que buscan relajación facial profunda",
                     "Desean incorporar momentos de bienestar a su rutina",
                     "Quienes disfrutan experiencias wellness premium",
                     "Personas con jornadas laborales exigentes",
                     "Interesados en el autocuidado facial",
                     "Personas que desean desconectarse y dedicar tiempo para sí"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3 bg-white p-4 border border-stone-200 shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-stone-700 font-medium text-sm">{item}</span>
                     </div>
                   ))}
                </div>
             </motion.div>
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#071e2e] p-12 text-white rounded-sm shadow-2xl relative">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <Star className="w-24 h-24 text-white" />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-8">¿Por Qué Elegir MJ Estética & Wellness Center?</h3>
                <ul className="space-y-6">
                   {[
                     { t: "Atención Personalizada", d: "Cada protocolo se adapta individualmente." },
                     { t: "Ambiente Wellness Premium", d: "Espacios diseñados para comodidad y relajación." },
                     { t: "Equipo Capacitado", d: "Profesionales comprometidos con la alta calidad." },
                     { t: "Ubicación Conveniente", d: "Fácil acceso en Turrialba con parqueo." },
                     { t: "Enfoque Integral", d: "Buscamos ayudarte a vivir un momento de bienestar." }
                   ].map((item, i) => (
                     <li key={i}>
                        <h4 className="font-bold text-primary text-lg mb-1">{item.t}</h4>
                        <p className="text-white/60 text-sm">{item.d}</p>
                     </li>
                   ))}
                </ul>
             </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4 font-bold">VOCES DE NUESTRAS PACIENTES</p>
            <div className="flex justify-center gap-1 mb-10">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
            </div>
            <div className="grid grid-cols-1 gap-12 text-left">
              {[
                "Me sorprendió lo relajante que fue toda la experiencia.",
                "El ambiente y la atención hacen que realmente puedas desconectarte.",
                "Definitivamente volveré a incluirlo dentro de mi rutina de autocuidado."
              ].map((t, i) => (
                <div key={i} className="relative bg-stone-50 p-8 border-l-4 border-primary italic">
                  <p className="text-xl md:text-2xl font-serif text-stone-800 leading-relaxed font-light">
                    "{t}"
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-24 bg-stone-50 border-y border-stone-200">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 text-center">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">Preguntas Frecuentes</h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
          </motion.div>
          <div className="space-y-10">
            {[
              { q: "¿Qué se siente durante la sesión?", a: "Generalmente se percibe como una experiencia relajante y confortable." },
              { q: "¿Cuánto dura una cita?", a: "La duración puede variar según el protocolo seleccionado." },
              { q: "¿Es personalizado?", a: "Sí. Adaptamos cada sesión a las necesidades individuales de cada cliente." },
              { q: "¿Puedo combinarlo con otros tratamientos faciales?", a: "Sí, podemos orientarte sobre las mejores opciones según tus objetivos." },
              { q: "¿Cada cuánto se recomienda?", a: "La frecuencia dependerá de tus preferencias y plan de bienestar facial." }
            ].map((faq, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h4 className="text-lg font-bold text-stone-900 mb-3">{faq.q}</h4>
                <p className="text-stone-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL INFO / CTA ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight text-left">Reserva tu Experiencia en Turrialba</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: MapPin, text: "Turrialba, Cartago" },
                  { icon: Phone, text: "Atención por WhatsApp" },
                  { icon: CheckCircle2, text: "Parqueo disponible" },
                  { icon: Clock, text: "Citas programadas" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-stone-700">
                    <item.icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-bold text-xs tracking-widest uppercase">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-8 bg-stone-50 border border-stone-200 border-l-4 border-l-primary">
                 <p className="text-stone-600 text-sm leading-relaxed italic">"Conoce tu cuerpo. Mide tu progreso. Mejora tus resultados."</p>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#040f19] p-12 text-white text-center rounded-sm shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 leading-tight">VIVE LA EXPERIENCIA WELLNESS</h2>
              <p className="text-white/70 mb-10 leading-relaxed text-lg">
                Agenda hoy tu valoración facial personalizada y descubre una experiencia wellness diseñada para ti.
              </p>
              <div className="flex flex-col gap-4 max-w-sm mx-auto">
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-primary text-white text-sm font-bold tracking-[0.15em] uppercase px-8 py-5 hover:bg-white hover:text-stone-900 transition-all group shadow-xl shadow-primary/20">
                  <MessageCircle className="w-5 h-5" />
                  AGENDAR VALORACIÓN
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
