import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Quote,
  Target,
  ShieldCheck,
  UserCheck,
  Award,
  Clock,
  MapPin,
  Star,
  Palette,
  Coffee,
  Heart
} from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as any } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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

export function ArteterapiaContent({ waLink }: { waLink: string }) {
  return (
    <div className="bg-white">
      {/* ── SECCIÓN: INTRO (PAS - Problem) ──────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              Arteterapia en Turrialba: Una Experiencia Diferente para Tu Bienestar
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              ¿Buscas una actividad diferente en Turrialba para relajarte, desconectarte del estrés y dedicarte tiempo de calidad?
            </p>
            <div className="bg-primary/5 border border-primary/20 p-8 rounded-sm mb-12">
               <p className="text-stone-800 text-lg font-medium leading-relaxed">
                 Si comentaste la palabra <span className="font-bold text-primary underline uppercase tracking-widest">ARTETERAPIA</span> en nuestro Instagram, llegaste al lugar indicado.
               </p>
            </div>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto">
              <p>
                Vivimos en una época donde el estrés, las preocupaciones y la sobrecarga mental forman parte de la rutina diaria. Muchas personas en Turrialba buscan actividades para reducir el estrés y salir de la rutina.
              </p>
              <p>
                En MJ Estética y Spa Turrialba hemos creado una experiencia única que combina <span className="font-bold text-stone-900">arteterapia, pintura guiada y café</span>, diseñada para ayudarte a liberar tensiones, estimular tu creatividad y mejorar tu bienestar emocional en un ambiente acogedor y seguro.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: ¿QUÉ ES? (PAS - Agitation) ─────────────────────── */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
                ¿Qué es la Arteterapia?
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                La arteterapia es una técnica de bienestar que utiliza el proceso creativo como herramienta para expresar emociones, reducir el estrés y mejorar la salud emocional.
              </p>
              <div className="space-y-4 mb-8">
                <p className="text-stone-700 font-medium">✨ No necesitas experiencia artística.</p>
                <p className="text-stone-700 font-medium">✨ No importa si nunca has tomado un pincel.</p>
                <p className="text-stone-700 font-medium">✨ Aquí no buscamos artistas. <span className="text-primary">Buscamos ayudarte a sentirte mejor.</span></p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Pintura terapéutica",
                  "Café de especialidad",
                  "Bienestar emocional",
                  "Conexión personal",
                  "Reducción de ansiedad",
                  "Espacio creativo libre",
                  "Ambiente wellness"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-stone-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <div className="aspect-square bg-stone-100 rounded-sm overflow-hidden border border-stone-200">
                <img src="/images/masajes-relajantes-bg.webp" alt="Arteterapia Experience" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-6 -right-6 bg-primary p-8 shadow-xl hidden sm:block">
                <Palette className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: POR QUÉ PARTICIPAR (Solution) ────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-stone-900">¿Por Qué Participar en una Sesión?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "Reduce el Estrés", d: "La pintura ayuda a enfocar la atención en el presente, disminuyendo pensamientos repetitivos.", icon: <Sparkles className="w-6 h-6" /> },
              { t: "Mejora Tu Bienestar", d: "El arte permite expresar emociones de forma natural y segura en un ambiente acogedor.", icon: <Heart className="w-6 h-6" /> },
              { t: "Estimula la Creatividad", d: "Desarrolla nuevas ideas y fortalece tu capacidad de resolución de problemas.", icon: <Palette className="w-6 h-6" /> }
            ].map((card, i) => (
              <div key={i} className="bg-white p-8 border border-stone-200 shadow-sm group hover:border-primary transition-colors">
                <div className="text-primary mb-6">{card.icon}</div>
                <h4 className="text-lg font-serif font-bold text-stone-900 mb-4 leading-tight">{card.t}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{card.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm font-bold text-stone-600 uppercase tracking-widest">
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Sesiones de 120 min</span>
            <span className="flex items-center gap-2"><Palette className="w-4 h-4 text-primary" /> Materiales incluidos</span>
            <span className="flex items-center gap-2"><Coffee className="w-4 h-4 text-primary" /> Café incluido</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Turrialba Centro</span>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: ¿QUIÉNES PUEDEN PARTICIPAR? ────────────────── */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">¿Quiénes Pueden Participar?</h2>
            <p className="text-stone-500 italic max-w-2xl mx-auto">Nuestra experiencia de Arteterapia en Turrialba es ideal para cualquier persona que quiera relajarse y disfrutar un momento para sí misma.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              "Personas con estrés laboral",
              "Parejas buscando algo diferente",
              "Emprendedores y profesionales",
              "Grupos de amigos o amigas",
              "Amantes del café y el arte",
              "Personas en búsqueda wellness",
              "Cualquier persona que quiera relajarse",
              "Buscadores de bienestar emocional"
            ].map((item, i) => (
              <div key={i} className="p-8 border border-stone-100 bg-stone-50 rounded-sm flex flex-col items-center gap-4 group hover:bg-white hover:border-primary transition-all">
                <Target className="w-5 h-5 text-primary" />
                <span className="text-stone-800 font-bold text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: ¿QUÉ INCLUYE? ──────────────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex-1">
               <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 leading-tight text-white">¿Qué Incluye Tu Experiencia?</h2>
               <div className="space-y-4">
                 {[
                   "Materiales de pintura (bastidor, pinceles, acrílicos)",
                   "Café de especialidad durante la actividad",
                   "Guía y acompañamiento durante la sesión",
                   "Ambiente relajante y sensorial",
                   "Espacio ideal para compartir y disfrutar",
                   "Tu obra finalizada para llevar a casa"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                     <span className="text-white/90 font-medium">{item}</span>
                   </div>
                 ))}
               </div>
             </motion.div>
             <div className="flex-1 bg-white/5 p-10 backdrop-blur-sm border border-white/10 text-center">
                <p className="text-white font-serif text-xl italic mb-8 italic">"No existen reglas estrictas. No existe presión. Solo existe el momento presente."</p>
                <a
                  href={waLink}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 font-bold tracking-widest uppercase hover:bg-white hover:text-stone-900 transition-colors text-xs"
                >
                  <Palette className="w-4 h-4" />
                  RESERVAR MI SESIÓN
                </a>
             </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: AUTORIDAD ──────────────────────── */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              ¿Por Qué Elegir MJ Estética & Wellness Center?
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto leading-relaxed italic">
              En MJ Estética y Spa entendemos que el bienestar va mucho más allá de la estética. Creemos que sentirse bien por dentro también se refleja por fuera.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
             {[
               { icon: <Heart className="w-6 h-6" />, t: "Bienestar Integral" },
               { icon: <UserCheck className="w-6 h-6" />, t: "Atención Empática" },
               { icon: <ShieldCheck className="w-6 h-6" />, t: "Ambiente Seguro" },
               { icon: <Award className="w-6 h-6" />, t: "Calidad Premium" },
               { icon: <Star className="w-6 h-6" />, t: "Conexión Personal" },
               { icon: <MapPin className="w-6 h-6" />, t: "Ubicación en Turrialba" }
             ].map((item, i) => (
               <div key={i} className="bg-stone-50 p-8 border border-stone-200 flex flex-col items-center text-center group hover:bg-white hover:border-primary transition-all">
                  <div className="text-primary mb-6">{item.icon}</div>
                  <span className="text-stone-900 font-bold text-sm tracking-wide leading-tight">{item.t}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: TESTIMONIOS ─────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">Descubriendo el Bienestar</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Llegué diciendo 'No sé pintar' y terminé descubriendo que lo importante era cómo me sentía. Salí mucho más tranquila.",
              "Una forma diferente de conectar conmigo misma. El café delicioso y el ambiente es simplemente mágico.",
              "Me ayudó a soltar el estrés de la semana. No necesitas ser artista, solo necesitas querer sentirte bien."
            ].map((text, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.1 } } }}
                className="bg-white p-10 border border-stone-200 shadow-sm relative group hover:border-primary transition-colors"
              >
                <Quote className="w-8 h-8 text-primary/10 absolute top-4 right-4" />
                <div className="flex gap-1 mb-6">
                   {[...Array(5)].map((_, star) => <Star key={star} className="w-3.5 h-3.5 fill-primary text-primary" />)}
                </div>
                <p className="text-stone-600 mb-6 leading-relaxed italic text-sm">{text}</p>
                <p className="text-primary text-[10px] font-bold tracking-widest uppercase">— Paciente MJ</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: FAQ ────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-serif font-bold text-stone-900">Preguntas Frecuentes</h2>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="border-t border-stone-200"
          >
            {[
              { q: "¿Necesito saber pintar?", a: "No. No buscamos artistas, buscamos ayudarte a sentirte mejor. La experiencia está diseñada para que cualquier persona pueda disfrutarla sin importar su nivel artístico." },
              { q: "¿Qué incluye la sesión?", a: "Incluye todos los materiales de pintura, una deliciosa taza de café (o bebida alternativa), guía durante la actividad y un ambiente diseñado para la relajación." },
              { q: "¿Quiénes pueden participar?", a: "Es ideal para personas con estrés laboral, parejas, grupos de amigos o cualquier persona que quiera dedicar tiempo a su bienestar emocional y salir de la rutina." },
              { q: "¿Dónde están ubicados?", a: "En MJ Estética y Spa, en el centro de Turrialba, con parqueo disponible." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <FaqItem question={item.q} answer={item.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: LEAD MAGNET ─────────────────────── */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-white/60 text-xs font-bold tracking-[0.4em] uppercase mb-4">🎁 RECURSO GRATUITO EXCLUSIVO</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 italic">Mejora Tu Bienestar Emocional</h2>
              <p className="text-xl md:text-2xl font-serif mb-10 italic">"Descarga gratis nuestra guía exclusiva de Arteterapia"</p>

              <div className="max-w-xl mx-auto bg-white p-12 text-stone-900 shadow-2xl">
                 <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-4">💌 Comenta la palabra:</p>
                 <p className="text-4xl md:text-6xl font-serif font-bold text-primary mb-12 underline decoration-stone-200 uppercase tracking-widest">“ARTETERAPIA”</p>
                 <p className="text-sm text-stone-500 leading-relaxed mb-8 font-medium italic">Dentro encontrarás:</p>

                 <div className="grid grid-cols-1 gap-y-3 mb-10 text-left max-w-sm mx-auto">
                   {[
                     "Técnicas básicas de arteterapia para casa.",
                     "Beneficios científicos para reducir el estrés.",
                     "Ejercicios prácticos de conexión emocional.",
                     "Consejos para aprovechar mejor cada sesión."
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3">
                       <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                       <span className="text-sm font-bold text-stone-700">{item}</span>
                     </div>
                   ))}
                 </div>

                 <a
                    href={waLink}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-stone-900 text-white py-5 font-bold tracking-widest uppercase hover:bg-primary transition-colors text-xs"
                 >
                    <MessageCircle className="w-5 h-5" />
                    SOLICITAR GUÍA GRATUITA
                 </a>
              </div>
           </motion.div>
        </div>
        <Palette className="absolute -bottom-20 -left-20 w-64 h-64 text-white/5 rotate-12" />
      </section>

      {/* ── SECCIÓN: FINAL CTA ───────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              Vive una Experiencia Diferente de Pintura y Café
            </h2>
            <p className="text-stone-600 text-lg mb-12 max-w-2xl mx-auto italic">
              Da el primer paso hacia tu bienestar hoy mismo. Los espacios son limitados para garantizar una experiencia personalizada.
            </p>

            <div className="bg-stone-50 p-10 border border-stone-200 mb-12 flex flex-col md:flex-row items-center justify-center gap-12">
               <div className="text-left">
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">📍 MJ Estética & Wellness Center</h3>
                  <p className="text-stone-500 text-sm">Turrialba Centro, Cartago</p>
               </div>
               <div className="flex flex-col gap-4">
                  <a
                    href={waLink}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all text-xs"
                  >
                    <MessageCircle className="w-5 h-5" />
                    RESERVAR SESIÓN
                  </a>
                  <a
                    href={waLink}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border border-stone-900 text-stone-900 px-10 py-4 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-all text-xs"
                  >
                    <Palette className="w-4 h-4" />
                    SOLICITAR INFORMACIÓN
                  </a>
               </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
