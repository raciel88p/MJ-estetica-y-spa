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
  Heart
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

export function BustoServiceContent({ service, waLink }: { service: ServicePageData; waLink: string }) {
  return (
    <div className="bg-white">
      {/* ── INTRO SECTION ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Confianza y Armonía</span>
            </div>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              Tratamiento corporal diseñado para apoyar la apariencia y firmeza del busto mediante protocolos personalizados orientados a resultados naturales, progresivos y armónicos.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Atención personalizada",
                "Protocolos individualizados",
                "Resultados naturales",
                "Ambiente premium y cómodo",
                "Enfoque wellness femenino"
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

      {/* ── EMPATHY SECTION ──────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">¿Sientes que tu busto perdió firmeza o armonía?</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-12">
              El paso del tiempo, los cambios hormonales, el embarazo, la lactancia o la pérdida de peso pueden modificar la apariencia del busto y afectar cómo te sientes contigo misma.
            </p>

            <div className="bg-white p-10 border border-stone-100 shadow-sm relative">
               <Quote className="w-12 h-12 text-primary/5 absolute top-6 right-6" />
               <p className="text-stone-800 text-xl font-serif italic mb-6">
                 "Muchas mujeres no buscan verse perfectas. Buscan volver a sentirse cómodas, femeninas y seguras frente al espejo."
               </p>
               <div className="w-12 h-px bg-primary mx-auto" />
            </div>

            <p className="mt-12 text-stone-600 leading-relaxed max-w-2xl mx-auto">
              En <span className="font-bold">MJ Estética & Wellness Center</span> entendemos que cada cuerpo es distinto. Por eso desarrollamos protocolos personalizados enfocados en bienestar corporal, naturalidad y armonización femenina.
            </p>
            <p className="mt-6 text-primary font-bold">Aquí no trabajamos cambios exagerados. Trabajamos resultados progresivos, elegantes y alineados con tu cuerpo.</p>
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
              <h2 className="text-4xl font-serif font-bold mb-6 text-primary">Descarga GRATIS la guía:</h2>
              <p className="text-white/90 text-xl mb-8 font-serif italic leading-snug">
                “Cómo mejorar la apariencia y firmeza del busto naturalmente”
              </p>
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm mb-8">
                <p className="text-white text-xs mb-4 uppercase tracking-widest font-bold">Dentro de esta guía descubrirás:</p>
                <ul className="space-y-3">
                  {[
                    "Hábitos que ayudan a mejorar la firmeza corporal",
                    "Errores que aceleran la pérdida de elasticidad",
                    "Cómo funcionan los protocolos wellness corporales",
                    "Qué esperar de un tratamiento profesional",
                    "Recomendaciones post embarazo y cambios hormonales",
                    "Consejos para mantener resultados naturales"
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
                 <span className="text-3xl font-serif font-bold text-primary">“BUSTO”</span>
                 <span className="text-stone-300 font-light">o</span>
                 <span className="text-3xl font-serif font-bold text-primary">“PECHO”</span>
              </div>
              <p className="text-stone-600 mb-8">en nuestro Instagram y recibirás automáticamente acceso a la guía + información exclusiva del tratamiento.</p>
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

      {/* ── DEFINITION & GOALS ───────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">¿Qué es un levantamiento de busto?</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              El levantamiento de busto es un tratamiento corporal orientado a mejorar visualmente la apariencia, armonía y firmeza del área del busto mediante protocolos personalizados de bienestar estético.
            </p>
            <p className="text-primary font-bold">El objetivo NO es transformar tu cuerpo artificialmente.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
               <h3 className="text-xl font-serif font-bold text-stone-900 mb-6 italic">El objetivo es ayudarte a:</h3>
               <div className="space-y-4">
                 {[
                   "mejorar la apariencia de firmeza",
                   "armonizar el contorno corporal",
                   "apoyar el bienestar femenino",
                   "potenciar la confianza física",
                   "mantener resultados naturales"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                     <span className="text-stone-700 font-medium">{item}</span>
                   </div>
                 ))}
               </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-50 p-8 border border-stone-100">
               <p className="text-stone-600 text-sm leading-relaxed italic">
                 "Cada cuerpo requiere una evaluación individual. Por eso en MJ Estética & Wellness Center realizamos valoraciones personalizadas para diseñar protocolos adaptados a tus objetivos corporales y bienestar general."
               </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHAT IT HELPS ────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">¿Qué puede ayudar a mejorar este tratamiento?</h2>
            <p className="text-stone-500">Nuestros protocolos están orientados a apoyar:</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Apariencia de firmeza corporal",
              "Armonización femenina",
              "Contorno corporal",
              "Cambios post embarazo",
              "Pérdida de elasticidad",
              "Bienestar corporal femenino",
              "Confianza física",
              "Apariencia estética natural"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.05}}}}
                className="bg-white p-6 border border-stone-100 flex items-center gap-3 hover:border-primary/30 transition-all"
              >
                <Check className="w-4 h-4 text-primary shrink-0" />
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
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Filosofía MJ</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 leading-tight">Beneficios del levantamiento de busto<br /><span className="text-primary font-light italic">Resultados progresivos y naturales</span></h2>
            <p className="text-stone-500 mt-6 max-w-2xl leading-relaxed">En MJ creemos en una estética elegante y armónica. Por eso nuestros tratamientos buscan:</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "Apariencia corporal más firme",
              "Resultados naturales",
              "Protocolos personalizados",
              "Bienestar estético femenino",
              "Armonización corporal",
              "Experiencia wellness premium",
              "Acompañamiento individualizado"
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
        </div>
      </section>

      {/* ── METHODOLOGY ──────────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">¿Cómo funciona una sesión?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { s: "Paso 1", t: "Valoración corporal", d: "Analizamos tu caso, objetivos y características corporales para crear un protocolo individualizado." },
              { s: "Paso 2", t: "Diseño del protocolo", d: "Seleccionamos técnicas y sesiones orientadas a bienestar, firmeza y armonización corporal." },
              { s: "Paso 3", t: "Aplicación del tratamiento", d: "La sesión se realiza en un ambiente cómodo, privado y relajante." },
              { s: "Paso 4", t: "Seguimiento personalizado", d: "Te brindamos recomendaciones y hábitos complementarios para apoyar la evolución progresiva de los resultados." }
            ].map((step, i) => (
              <div key={i} className="relative bg-white/5 p-8 border border-white/10 hover:border-primary/40 transition-colors group">
                <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">{step.s}</span>
                <h4 className="text-lg font-serif font-bold text-white mb-4 leading-tight">{step.t}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { l: "Duración aproximada", v: "45 a 60 minutos", i: <Clock className="w-5 h-5 text-primary" /> },
              { l: "Recuperación", v: "Mínima o inmediata", i: <ShieldCheck className="w-5 h-5 text-primary" /> },
              { l: "Frecuencia", v: "Personalizada según valoración", i: <Calendar className="w-5 h-5 text-primary" /> },
              { l: "Resultados", v: "Progresivos y variables", i: <Sparkles className="w-5 h-5 text-primary" /> }
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
            <p className="text-stone-500 mt-4">Este tratamiento puede ser ideal para personas que buscan:</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Mejorar la apariencia de firmeza corporal",
              "Recuperar armonía femenina post embarazo",
              "Apoyar el bienestar estético corporal",
              "Mantener resultados naturales",
              "Mejorar confianza física y bienestar corporal",
              "Complementar protocolos wellness femeninos"
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
            <h2 className="text-3xl font-serif font-bold text-stone-900">❤️ Historias reales de transformación</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { q: "“Volví a sentirme cómoda conmigo misma”", t: "“Después del embarazo sentía muchos cambios en mi cuerpo. Me encantó que el enfoque fuera natural y femenino. Me sentí acompañada durante todo el proceso.”" },
              { q: "“Los resultados se ven armónicos”", t: "“Buscaba algo elegante y progresivo, no algo exagerado. Me encantó la experiencia y la atención personalizada.”" },
              { q: "“Me devolvió confianza”", t: "“El ambiente, el trato y el protocolo hicieron toda la diferencia. Me sentí segura desde la primera valoración.”" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.1}}}}
                className="bg-white p-8 border border-stone-200 shadow-sm flex flex-col group"
              >
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
              { q: "¿El levantamiento de busto es invasivo?", a: "Dependerá del protocolo recomendado durante la valoración corporal. Nuestro enfoque prioriza bienestar, seguridad y naturalidad." },
              { q: "¿Ayuda con la apariencia de firmeza?", a: "Los protocolos están diseñados para apoyar visualmente la armonía y apariencia corporal de forma progresiva." },
              { q: "¿Cuántas sesiones se recomiendan?", a: "Cada caso es diferente. La cantidad de sesiones dependerá de la valoración individual." },
              { q: "¿Cuándo se ven resultados?", a: "Muchas personas comienzan a notar cambios progresivos conforme avanzan las sesiones y hábitos complementarios." },
              { q: "¿Los resultados se ven naturales?", a: "Sí. En MJ buscamos armonización corporal y bienestar estético femenino con resultados elegantes y naturales." },
              { q: "¿Se puede combinar con otros tratamientos?", a: "Sí. Dependiendo de tu valoración, puede combinarse con otros protocolos corporales wellness." },
              { q: "¿Tiene recuperación?", a: "La recuperación depende del protocolo aplicado. Durante tu valoración te explicaremos cada detalle." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <FaqItem question={item.q} answer={item.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">¿Por qué elegir MJ Estética & Wellness Center?</h2>
             <p className="text-primary font-bold uppercase tracking-widest text-sm">Porque creemos que la estética femenina debe sentirse natural, segura y armónica.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <p className="text-white/40 uppercase tracking-widest text-xs font-bold mb-6">En MJ encontrarás:</p>
                <div className="space-y-4">
                  {[
                    "Atención individualizada",
                    "Protocolos corporales personalizados",
                    "Experiencia wellness femenina",
                    "Ambiente premium y cómodo",
                    "Acompañamiento cercano",
                    "Enfoque en bienestar corporal",
                    "Resultados progresivos y naturales"
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
                  "No buscamos cambios exagerados. Buscamos ayudarte a sentirte bien contigo misma."
                </p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* ── PLANES & LOCATION ────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">Planes y valoración personalizada</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                 {[
                   "Protocolos individualizados",
                   "Programas wellness corporales",
                   "Paquetes corporales femeninos",
                   "Seguimiento personalizado",
                   "Memberships wellness"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 p-4 bg-stone-50 border border-stone-100 text-stone-700 text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                   </div>
                 ))}
              </div>
              <p className="text-stone-500 italic mb-10">La mejor forma de conocer el tratamiento ideal para ti es mediante una valoración profesional.</p>

              <div className="bg-stone-900 text-white p-10 relative overflow-hidden">
                <h3 className="text-xl font-serif font-bold mb-6 relative z-10 text-white">MJ Estética & Wellness Center — Turrialba</h3>
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3 text-white/70 text-sm"><MapPin className="w-4 h-4 text-primary" /> Atención en Turrialba</div>
                  <div className="flex items-center gap-3 text-white/70 text-sm"><MessageCircle className="w-4 h-4 text-primary" /> WhatsApp disponible</div>
                  <div className="flex items-center gap-3 text-white/70 text-sm"><ShieldCheck className="w-4 h-4 text-primary" /> Parqueo cercano</div>
                  <div className="flex items-center gap-3 text-white/70 text-sm"><Clock className="w-4 h-4 text-primary" /> Horarios personalizados</div>
                  <div className="flex items-center gap-3 text-white/70 text-sm"><ShieldCheck className="w-4 h-4 text-primary" /> Ambiente cómodo y privado</div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
                   <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Atendemos pacientes de:</p>
                   <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/60">
                     {["Turrialba centro", "Cartago", "Siquirres", "Juan Viñas", "Tucurrique", "Zonas cercanas"].map(loc => <span key={loc}>• {loc}</span>)}
                   </div>
                </div>
                <Sparkles className="absolute -right-10 -bottom-10 w-48 h-48 text-white/5 rotate-12" />
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary p-12 text-white shadow-2xl lg:sticky lg:top-32">
               <div className="text-center">
                  <p className="text-white/60 text-xs font-bold tracking-[0.4em] uppercase mb-4">Tu bienestar también merece atención</p>
                  <h3 className="text-3xl font-serif font-bold mb-8 leading-tight">Descubre un enfoque diferente de armonización corporal femenina.</h3>
                  <div className="space-y-4">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 w-full bg-white text-primary py-5 font-bold text-xs tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-all"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Agenda tu valoración corporal
                    </a>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 w-full border border-white/30 text-white py-4 font-bold text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-all"
                    >
                      Consulta disponibilidad hoy
                    </a>
                  </div>
                  <div className="mt-10 pt-8 border-t border-white/20">
                    <a href={waLink} target="_blank" rel="noopener noreferrer" className="text-white text-xs font-bold flex flex-col items-center gap-3 group">
                       <span className="opacity-70 group-hover:opacity-100 transition-opacity tracking-widest">Escríbenos por WhatsApp y recibe la guía gratuita</span>
                       <span className="text-lg italic group-hover:translate-x-1 transition-transform">Descubre el protocolo ideal para ti 👉</span>
                    </a>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
