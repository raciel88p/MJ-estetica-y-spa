import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Instagram,
  MapPin,
  Calendar,
  Clock,
  ShieldCheck,
  Star,
  Check,
  ArrowRight,
  Search,
  Quote,
  Heart,
  Zap,
  Activity,
  Smile,
  UserCheck
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

export function TensadoServiceContent({ service, waLink }: { service: ServicePageData; waLink: string }) {
  return (
    <div className="bg-white">
      {/* ── INTRO SECTION ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Bienestar y Firmeza</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">
              ¿Te gustaría mejorar la apariencia de firmeza de tu piel y sentirte más cómoda con tu cuerpo sin procedimientos invasivos?
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              En MJ Estética & Wellness Center diseñamos protocolos de tensado corporal personalizados orientados a apoyar la reafirmación corporal, el bienestar estético y la remodelación progresiva mediante tecnologías avanzadas y atención profesional.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Valoración corporal personalizada",
                "Protocolos adaptados a tus objetivos",
                "Tecnología estética avanzada",
                "Experiencia wellness premium",
                "Atención profesional y seguimiento individualizado"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-stone-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-col sm:flex-row gap-4">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-stone-900 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Agenda tu valoración corporal hoy
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-stone-200 text-stone-600 px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-stone-50 transition-colors"
              >
                Consulta disponibilidad vía WhatsApp
              </a>
            </div>
            <p className="mt-6 text-center sm:text-left text-stone-400 text-xs font-bold tracking-widest uppercase">
              👉 Descubre el protocolo ideal para ti
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── LEAD MAGNET ──────────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-4 py-2 rounded-full mb-6">
                <Star className="w-4 h-4 fill-white" />
                <span className="text-xs font-bold tracking-widest uppercase">Recurso Gratuito</span>
              </div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-primary">Descarga GRATIS la Guía:</h2>
              <p className="text-white/90 text-xl mb-8 font-serif italic leading-snug">
                “Cómo mejorar los resultados del Tensado Corporal”
              </p>
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm mb-8">
                <p className="text-white text-xs mb-4 uppercase tracking-widest font-bold">Dentro de esta guía descubrirás:</p>
                <ul className="space-y-3">
                  {[
                    "Hábitos que ayudan a mejorar resultados",
                    "Cuidados posteriores recomendados",
                    "Consejos wellness para firmeza corporal",
                    "Cómo complementar tu tratamiento corporal"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-8 md:p-12 text-stone-900 text-center">
              <h3 className="text-2xl font-serif font-bold mb-8 uppercase tracking-tight">¿Cómo obtenerla?</h3>
              <p className="text-stone-500 mb-8">Comenta la palabra:</p>
              <div className="flex flex-col gap-4 mb-10">
                 <span className="text-4xl font-serif font-bold text-primary tracking-widest">“TENSADO”</span>
              </div>
              <p className="text-stone-600 mb-8">en nuestro Instagram y recibe acceso inmediato a nuestra guía gratuita con recomendaciones para potenciar tu protocolo corporal y mantener una apariencia más firme y saludable.</p>
              <a
                href="https://www.instagram.com/mj_fisioestetica/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full bg-stone-900 text-white py-4 font-bold text-xs tracking-[0.2em] hover:bg-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
                IR A INSTAGRAM
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── DEFINITION SECTION ───────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">¿Qué es el Tensado Corporal?</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              El tensado corporal es un protocolo estético diseñado para apoyar la apariencia de firmeza corporal y la reafirmación de la piel mediante tecnologías avanzadas y tratamientos personalizados.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              En MJ Estética & Wellness Center cada protocolo se adapta según las necesidades, objetivos y características individuales de cada persona.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-6 italic">Nuestro enfoque combina:</h3>
                <div className="space-y-4">
                  {[
                    "Radiofrecuencia corporal",
                    "Protocolos reafirmantes",
                    "Wellness corporal avanzado",
                    "Remodelación estética progresiva",
                    "Experiencia corporal premium"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-stone-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-stone-50 p-8 border border-stone-100 flex items-center">
                 <p className="text-stone-600 text-sm leading-relaxed italic">
                   "Porque cada cuerpo requiere una valoración personalizada y un enfoque profesional orientado al bienestar integral."
                 </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT IT HELPS ────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">¿Qué puede ayudar a mejorar este tratamiento?</h2>
            <p className="text-stone-500">El tensado corporal puede apoyar protocolos relacionados con:</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Apariencia de firmeza corporal",
              "Sensación de bienestar estético",
              "Remodelación corporal progresiva",
              "Glow y apariencia saludable de la piel",
              "Protocolos corporales personalizados",
              "Experiencias wellness premium",
              "Reafirmación estética corporal",
              "Apariencia corporal más uniforme y saludable"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.05}}}}
                className="bg-white p-6 border border-stone-100 flex items-center gap-3 hover:border-primary/30 transition-all shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-primary shrink-0" />
                <span className="text-stone-700 text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS GRID ────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Resultados MJ</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 leading-tight"> Beneficios del Tensado Corporal<br /><span className="text-primary font-light italic">Resultados orientados al bienestar y la firmeza natural</span></h2>
            <p className="text-stone-500 mt-6 max-w-2xl leading-relaxed">Nuestros protocolos están diseñados para brindar una experiencia corporal premium enfocada en resultados progresivos y personalizados. Beneficios más buscados:</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "Apariencia corporal más firme",
              "Sensación de bienestar y remodelación",
              "Glow corporal progresivo",
              "Protocolos adaptados individualmente",
              "Experiencia cómoda y relajante",
              "Tecnologías estéticas modernas",
              "Seguimiento profesional personalizado",
              "Bienestar corporal integral"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-center gap-4 py-4 border-b border-stone-100 group"
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <Check className="w-3.5 h-3.5 text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="text-stone-800 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
          <p className="mt-12 text-center text-stone-500 italic">En MJ creemos que la estética también debe sentirse natural, cómoda y alineada con tu bienestar.</p>
        </div>
      </section>

      {/* ── TECHNOLOGIES ─────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-stone-900">Tecnologías utilizadas</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Radiofrecuencia */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white p-8 border border-stone-100 shadow-sm">
              <Zap className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-serif font-bold mb-4">Radiofrecuencia Corporal</h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-6">
                Tecnología estética orientada a apoyar protocolos de reafirmación corporal y bienestar estético mediante calor controlado y técnicas no invasivas.
              </p>
              <ul className="space-y-2 mb-8">
                {["Sensación relajante", "Protocolos progresivos", "Experiencia corporal premium", "Complemento ideal"].map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-stone-600 font-medium">
                    <Check className="w-3 h-3 text-primary" /> {b}
                  </li>
                ))}
              </ul>
              <p className="text-primary text-[10px] font-bold tracking-widest uppercase">👉 Consulta disponibilidad para valoración</p>
            </motion.div>

            {/* Protocolos Reafirmantes */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white p-8 border border-stone-100 shadow-sm">
              <Activity className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-serif font-bold mb-4">Protocolos Reafirmantes Personalizados</h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-6">
                Cada cuerpo tiene necesidades distintas. Por eso diseñamos protocolos corporales adaptados según tus objetivos.
              </p>
              <ul className="space-y-2">
                {["Objetivos estéticos", "Tipo de piel", "Áreas a trabajar", "Estilo de vida", "Bienestar integral"].map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-stone-600 font-medium">
                    <Check className="w-3 h-3 text-primary" /> {b}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Wellness Corporal */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white p-8 border border-stone-100 shadow-sm">
              <Smile className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-serif font-bold mb-4">Wellness Corporal Avanzado</h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-6">
                Nuestro enfoque combina estética y bienestar para que tu experiencia sea mucho más completa.
              </p>
              <p className="text-stone-600 text-sm font-medium italic">
                "No buscamos resultados irreales. Buscamos ayudarte a sentirte mejor contigo misma mediante protocolos progresivos y personalizados."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ──────────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">¿Cómo funciona un protocolo?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { s: "Paso 1", t: "Valoración personalizada", d: "Analizamos tus objetivos y necesidades para recomendar el protocolo más adecuado." },
              { s: "Paso 2", t: "Diseño del protocolo ideal", d: "Creamos un plan adaptado según el área corporal y objetivos estéticos." },
              { s: "Paso 3", t: "Aplicación del tratamiento", d: "Realizamos el procedimiento con tecnologías avanzadas y acompañamiento profesional." },
              { s: "Paso 4", t: "Seguimiento y recomendaciones", d: "Te brindamos cuidados posteriores y recomendaciones para potenciar resultados." }
            ].map((step, i) => (
              <div key={i} className="relative bg-white/5 p-8 border border-white/10 hover:border-primary/40 transition-colors group">
                <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">{step.s}</span>
                <h4 className="text-lg font-serif font-bold text-white mb-4 leading-tight">{step.t}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              { l: "Atención", v: "Personalizada", i: <UserCheck className="w-5 h-5 text-primary" /> },
              { l: "Protocolos", v: "Cómodos y seguros", i: <ShieldCheck className="w-5 h-5 text-primary" /> },
              { l: "Seguimiento", v: "Profesional", i: <Clock className="w-5 h-5 text-primary" /> }
            ].map((item, i) => (
              <div key={i} className="p-8 flex flex-col items-center text-center">
                 <div className="mb-4">{item.i}</div>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">{item.l}</p>
                 <p className="text-white font-serif font-bold text-sm">{item.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECOMMENDED PROFILES ─────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900">¿Para quién se recomienda?</h2>
            <p className="text-stone-500 mt-4">Este tratamiento puede ser ideal para personas interesadas en:</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Firmeza corporal",
              "Remodelación estética progresiva",
              "Wellness corporal",
              "Protocolos reafirmantes premium",
              "Glow corporal saludable",
              "Bienestar y estética corporal",
              "Tratamientos corporales avanzados"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-center gap-3 p-5 bg-stone-50 border border-stone-100"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-stone-700 font-medium text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="py-24 bg-stone-50 overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900">Resultados Reales y Naturales</h2>
            <p className="text-stone-500 mt-4 max-w-2xl mx-auto italic">
              En MJ Estética & Wellness Center creemos en resultados progresivos, naturales y alineados con el bienestar corporal. Nuestras fotografías y testimonios reflejan experiencias reales orientadas a firmeza, glow saludable y remodelación progresiva.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { q: "“Me encantó la experiencia”", t: "“Sentí mi piel más firme y el ambiente súper relajante. Me gustó que explicaran todo el proceso y los cuidados posteriores.”" },
              { q: "“Protocolo personalizado”", t: "“El acompañamiento fue excelente y el protocolo fue diseñado justo para mis objetivos. La experiencia wellness hace una gran diferencia.”" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.1}}}}
                className="bg-white p-8 border border-stone-200 shadow-sm flex flex-col group"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <h4 className="font-serif font-bold text-stone-900 mb-4 text-lg italic">{item.q}</h4>
                <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-1">{item.t}</p>
                <p className="text-primary text-[10px] font-bold tracking-widest uppercase">— Paciente MJ</p>
              </motion.div>
            ))}
          </div>
        </div>
        <Heart className="absolute -bottom-20 -right-20 w-64 h-64 text-primary/5 -rotate-12" />
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-serif font-bold text-stone-900">Preguntas frecuentes</h2>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="border-t border-stone-200"
          >
            {[
              { q: "¿Qué es el tensado corporal?", a: "Es un protocolo estético orientado a apoyar la apariencia de firmeza corporal mediante tratamientos personalizados y tecnologías avanzadas." },
              { q: "¿Ayuda con la firmeza corporal?", a: "Puede apoyar protocolos relacionados con reafirmación estética y remodelación progresiva según cada caso individual." },
              { q: "¿Qué tecnologías utilizan?", a: "Trabajamos con tecnologías estéticas modernas y protocolos corporales personalizados." },
              { q: "¿Tiene recuperación?", a: "Generalmente son protocolos no invasivos orientados a una experiencia cómoda y wellness." },
              { q: "¿Cuántas sesiones se recomiendan?", a: "Depende de los objetivos y valoración personalizada de cada persona." },
              { q: "¿Se puede combinar con otros tratamientos?", a: "Sí, muchas veces puede complementarse con otros protocolos corporales y wellness." },
              { q: "¿Cuándo pueden observarse resultados?", a: "Cada persona responde de manera distinta y los resultados suelen ser progresivos." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <FaqItem question={item.q} answer={item.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROGRAMS ──────────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">Programas y Protocolos Corporales Premium</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Body Tightening Programs",
                "Wellness Body Bundles",
                "Firming Protocols",
                "Body Contouring Experiences"
              ].map((item, i) => (
                <div key={i} className="bg-white px-6 py-3 border border-stone-100 shadow-sm text-primary text-xs font-bold tracking-widest uppercase">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-10 text-stone-500">Consulta por nuestras opciones y paquetes personalizados.</p>
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">¿Por qué elegir MJ Estética & Wellness Center?</h2>
             <p className="text-primary font-bold uppercase tracking-widest text-sm">En MJ Estética & Wellness Center nos enfocamos en brindar una experiencia wellness premium con atención personalizada y protocolos adaptados individualmente.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <p className="text-white/40 uppercase tracking-widest text-xs font-bold mb-6">Lo que nos diferencia:</p>
                <div className="space-y-4">
                  {[
                    "Tecnología estética moderna",
                    "Protocolos personalizados",
                    "Atención profesional",
                    "Seguimiento individualizado",
                    "Ambiente cómodo y seguro",
                    "Experiencia wellness avanzada",
                    "Remodelación corporal progresiva"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-white/90 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
             </motion.div>
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/5 border border-white/10 p-10 flex flex-col justify-center text-center italic">
                <p className="text-xl text-white leading-relaxed">
                  "Tu cuerpo merece sentirse bien. Descubre un protocolo diseñado para apoyar tu bienestar, firmeza corporal y confianza personal."
                </p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA & LOCATION ─────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">Ubicación y Contacto</h2>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-stone-900">Turrialba, Costa Rica</h4>
                    <p className="text-stone-500 text-sm">Visítanos en nuestro centro especializado.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-stone-900">Horarios flexibles</h4>
                    <p className="text-stone-500 text-sm">Nos adaptamos a tu agenda.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-stone-900">Parqueo disponible</h4>
                    <p className="text-stone-500 text-sm">Comodidad desde tu llegada.</p>
                  </div>
                </div>
              </div>

              <div className="bg-stone-900 text-white p-10 relative overflow-hidden">
                <h3 className="text-xl font-serif font-bold mb-6 relative z-10 text-white">MJ Estética & Wellness Center — Turrialba</h3>
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3 text-white/70 text-sm"><MessageCircle className="w-4 h-4 text-primary" /> Atención por WhatsApp</div>
                  <div className="flex items-center gap-3 text-white/70 text-sm"><Star className="w-4 h-4 text-primary" /> Valoraciones personalizadas</div>
                  <div className="flex items-center gap-3 text-white/70 text-sm"><ShieldCheck className="w-4 h-4 text-primary" /> Experiencia premium</div>
                </div>
                <Sparkles className="absolute -right-10 -bottom-10 w-48 h-48 text-white/5 rotate-12" />
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary p-12 text-white shadow-2xl lg:sticky lg:top-32">
               <div className="text-center">
                  <p className="text-white/60 text-xs font-bold tracking-[0.4em] uppercase mb-4">Agenda hoy mismo</p>
                  <h3 className="text-3xl font-serif font-bold mb-8 leading-tight">Descubre el protocolo ideal para ti en Turrialba.</h3>
                  <div className="space-y-4">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 w-full bg-white text-primary py-5 font-bold text-xs tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-all"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Escríbenos por WhatsApp
                    </a>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 w-full border border-white/30 text-white py-4 font-bold text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-all"
                    >
                      Consulta disponibilidad
                    </a>
                  </div>
                  <div className="mt-10 pt-8 border-t border-white/20 italic">
                    <p className="text-sm opacity-80">
                      "Buscamos ayudarte a sentirte mejor contigo misma mediante protocolos progresivos y personalizados."
                    </p>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
