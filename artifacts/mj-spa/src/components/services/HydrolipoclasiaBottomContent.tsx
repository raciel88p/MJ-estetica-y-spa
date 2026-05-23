import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  MessageCircle,
  ChevronDown,
  CheckCircle2,
  Star,
  Gift,
  Heart,
  MapPin,
  Clock,
  Car,
  Smartphone,
  Quote
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
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
            <p className="text-stone-600 leading-relaxed pb-6 text-sm whitespace-pre-line">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function HydrolipoclasiaBottomContent({ waLink }: { waLink: string }) {
  return (
    <div className="bg-white">
      {/* ── TESTIMONIOS ─────────────────────────────── */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Experiencias</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-2">Testimonios</h2>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "“Sentía mucha inseguridad con mí”",
              "“Muy buenos resultados en poco tiempo y el personal muy atento, super recomendado..”",
              "“Mi cintura se veía más definida”",
              "“Ha sido de gran provecho ❤️ amo los resultados de cada cosa que me han hecho🙏🏻”",
              "“Me sentí acompañada durante todo el proceso”",
              "“La atención fue súper profesional y personalizada.”"
            ].map((text, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white p-8 border border-stone-100 shadow-sm relative group hover:shadow-md transition-shadow">
                <Quote className="absolute top-4 right-4 w-6 h-6 text-stone-100 group-hover:text-primary/10 transition-colors" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-primary text-primary" />)}
                </div>
                <p className="text-stone-700 italic leading-relaxed text-sm">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PREGUNTAS FRECUENTES ─────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Preguntas frecuentes</h2>
            <p className="text-stone-500 text-sm">Todo lo que necesitas saber antes de tu tratamiento.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="border-t border-stone-200">
            {[
              { q: "¿La hidrolipoclasia duele?", a: "La sensación puede variar según la persona y el protocolo utilizado, pero muchas personas describen el procedimiento como tolerable." },
              { q: "¿Es invasiva?", a: "Es un tratamiento no quirúrgico orientado a remodelación corporal." },
              { q: "¿Sirve para bajar de peso?", a: "Está diseñado para ayudar a mejorar zonas con grasa localizada y contorno corporal. No sustituye procesos médicos de pérdida de peso." },
              { q: "¿Cuándo veo resultados?", a: "Los cambios suelen ser progresivos y dependen de hábitos, sesiones y respuesta corporal." },
              { q: "¿Puedo hacer ejercicio después?", a: "En muchos casos sí, aunque las recomendaciones pueden variar según la evaluación." },
              { q: "¿Qué zonas pueden trabajarse?", a: "Abdomen, cintura, flancos, espalda, brazos y otras zonas según valoración." }
            ].map((item, i) => (
              <FaqItem key={i} question={item.q} answer={item.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PAQUETES & VALORACIÓN ───────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white border border-stone-200 p-10 md:p-16 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full" />

            <div className="relative z-10">
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-10 text-center uppercase tracking-tight">Paquetes y valoración</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  "Sesiones individuales",
                  "Paquetes por zonas",
                  "Protocolos personalizados",
                  "Valoración corporal previa"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-stone-50 p-6 border border-stone-100 hover:border-primary/20 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-stone-800 font-bold text-sm uppercase tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROMOCIÓN ESPECIAL ───────────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="border border-white/10 p-10 md:p-16 relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-8 border border-white/10">
              <Gift className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">Promoción especial</h2>
            <p className="text-primary font-bold text-lg mb-8 uppercase tracking-[0.2em]">🎁 Solicita tu valoración y recibe una guía gratuita:</p>
            <p className="text-2xl font-serif italic mb-10 text-white/90">“Cómo bajar de peso y mejorar tu bienestar corporal”</p>

            <div className="max-w-lg mx-auto bg-white/5 border border-white/10 p-8 text-left mb-12">
              <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-6 text-center">La guía incluye:</p>
              <ul className="space-y-4">
                {[
                  "Hábitos que ayudan realmente",
                  "Errores comunes al intentar adelgazar",
                  "Tips de alimentación y bienestar",
                  "Recomendaciones para potenciar tratamientos corporales"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-white/80 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-primary/90 transition-all shadow-2xl"
            >
              <MessageCircle className="w-5 h-5" />
              SOLICITAR VALORACIÓN + GUÍA
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── POR QUÉ ELEGIR MJ ────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-tight">¿Por qué elegir <br/><span className="text-primary italic">MJ Estética & Wellness Center?</span></h2>
            <p className="text-stone-500 max-w-2xl mx-auto leading-relaxed">Porque aquí no buscamos venderte ilusiones. Buscamos ayudarte con:</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "Atención personalizada",
              "Protocolos corporales profesionales",
              "Acompañamiento real",
              "Ambiente cómodo y privado",
              "Evaluación honesta",
              "Enfoque wellness integral",
              "Tecnología estética especializada"
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-center gap-3 bg-stone-50 p-5 border border-stone-100">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-stone-800 font-bold text-xs uppercase tracking-widest">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center text-stone-500 mt-16 italic text-lg max-w-xl mx-auto border-t border-stone-100 pt-8">
            Nuestro objetivo es que te sientas acompañado(a), informado(a) y seguro(a) en cada etapa del proceso.
          </motion.p>
        </div>
      </section>

      {/* ── UBICACIÓN & ATENCIÓN ─────────────────────── */}
      <section className="py-24 bg-stone-50 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white border border-stone-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
            <div className="bg-[#071e2e] p-10 md:p-16 md:w-1/2 text-white">
              <h2 className="text-3xl font-serif font-bold mb-8 uppercase tracking-tight text-white">Ubicación y atención</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">Dónde estamos</p>
                    <p className="font-medium text-lg">Turrialba, Costa Rica</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Smartphone className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">Reservas</p>
                    <p className="font-medium text-lg">Atención vía WhatsApp</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Car className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">Comodidad</p>
                    <p className="font-medium text-lg">Fácil acceso y parqueo cercano</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">Flexibilidad</p>
                    <p className="font-medium text-lg">Horarios personalizados con cita previa</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 md:p-16 md:w-1/2 flex flex-col justify-center items-center text-center">
              <Heart className="w-12 h-12 text-primary/20 mb-6" />
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6 leading-tight">¿Lista para comenzar tu cambio?</h3>
              <p className="text-stone-500 mb-8 text-sm leading-relaxed">Agenda hoy mismo tu valoración personalizada y descubre el protocolo ideal para ti.</p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-stone-900 text-white px-8 py-4 font-bold tracking-[0.2em] uppercase hover:bg-primary transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Agendar cita
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
