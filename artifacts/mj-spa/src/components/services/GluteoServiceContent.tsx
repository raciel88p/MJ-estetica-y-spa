import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Zap,
  Sparkles,
  UserCheck,
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
  Target,
  Heart,
  Search,
  Quote
} from "lucide-react";
import { useState } from "react";
import type { ServicePageData } from "@/data/services";

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
        <span className="font-serif text-lg text-stone-900 group-hover:text-primary transition-colors italic">{question}</span>
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

export function GluteoServiceContent({ service, waLink }: { service: ServicePageData; waLink: string }) {
  return (
    <div className="bg-white">
      {/* ── INTRO SECTION ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase italic">Confianza y Bienestar</span>
            </div>
            <p className="text-stone-600 text-lg leading-relaxed mb-10 italic">
              En <span className="font-bold text-stone-900">MJ Estética & Wellness Center</span> entendemos que sentirte bien con tu cuerpo también impacta tu confianza, seguridad y bienestar. Por eso creamos protocolos de levantamiento de glúteo enfocados en resultados progresivos, naturales y visualmente armónicos.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Tratamientos corporales personalizados",
                "Evaluación individual profesional",
                "Resultados progresivos y naturales",
                "Ambiente cómodo, privado y premium",
                "Protocolos adaptados a cada cuerpo"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-stone-700 font-medium italic">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-stone-50 border-l-4 border-primary italic">
              <p className="text-xl text-stone-900 font-serif leading-tight">
                🍑 Descubre cómo mejorar la apariencia de tus glúteos sin perder naturalidad
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── DESIRES & PROBLEMS ───────────────────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h3 className="text-2xl font-serif font-bold mb-8 text-primary italic">Muchas personas desean:</h3>
              <div className="space-y-4">
                {[
                  "Mejorar firmeza",
                  "Aumentar proyección visual",
                  "Lograr una apariencia más armónica",
                  "Complementar sus rutinas fitness",
                  "Sentirse más seguras con su cuerpo",
                  "Recuperar confianza corporal"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-white/80 italic">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm">
                <p className="text-white/60 text-sm mb-6 leading-relaxed italic">
                  El problema es que no todos los tratamientos ofrecen resultados naturales o personalizados.
                </p>
                <h3 className="text-xl font-serif font-bold mb-6 italic text-white">Nuestro enfoque Wellness integral prioriza:</h3>
                <div className="space-y-3">
                  {["Naturalidad", "Seguridad", "Armonización corporal", "Evaluación individual", "Resultados progresivos"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-white font-medium italic">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2" />
      </section>

      {/* ── DEFINITION SECTION ───────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 italic">¿Qué es el levantamiento de glúteo?</h2>
            <p className="text-stone-600 text-lg leading-relaxed italic">
              El levantamiento de glúteo es un tratamiento corporal estético diseñado para ayudar a mejorar la apariencia, firmeza y contorno de los glúteos mediante protocolos personalizados orientados a resultados armónicos y naturales.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-50 p-10 border border-stone-100 mb-16">
            <p className="text-stone-700 italic leading-relaxed text-center">
              Cada cuerpo responde diferente. Por eso en MJ realizamos una <span className="font-bold">valoración corporal previa</span> para diseñar un protocolo adaptado a tus objetivos, hábitos y tipo corporal.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <p className="text-stone-500 mb-8 italic">El enfoque puede incluir distintas técnicas corporales, aparatología estética y protocolos complementarios orientados a:</p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {[
                 "mejorar firmeza de glúteos",
                 "estimular apariencia más elevada",
                 "favorecer contorno corporal",
                 "complementar rutinas fitness",
                 "potenciar armonización corporal"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                   <Check className="w-4 h-4 text-primary shrink-0" />
                   <span className="text-stone-700 font-medium italic">{item}</span>
                 </div>
               ))}
             </div>
             <p className="mt-12 text-center text-primary font-bold italic border-t border-stone-100 pt-8">
               Lo más importante: buscamos resultados progresivos y reales, evitando apariencias exageradas o artificiales.
             </p>
          </motion.div>
        </div>
      </section>

      {/* ── BENEFITS SECTION ─────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 italic">✨ Beneficios</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 italic">Beneficios más buscados por nuestras pacientes</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "Apariencia más firme y tonificada",
              "Mejor proyección visual de los glúteos",
              "Contorno corporal más armónico",
              "Complemento ideal para ejercicio y wellness corporal",
              "Resultados progresivos y naturales",
              "Sensación de mayor seguridad y confianza corporal",
              "Protocolos personalizados según objetivos",
              "Mejor armonización estética corporal"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.05}}}}
                className="flex items-center gap-4 p-4 border-b border-stone-200/50 group hover:bg-white transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="text-stone-700 font-medium italic text-sm">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-16 text-center text-stone-500 italic max-w-2xl mx-auto">
            Muchas pacientes nos buscan porque desean sentirse mejor con su cuerpo sin necesidad de procedimientos invasivos extremos.
          </motion.p>
        </div>
      </section>

      {/* ── RECOMMENDED FOR ──────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <MessageCircle className="w-12 h-12 text-primary/40" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-stone-900 italic">💬 ¿Para quién se recomienda?</h2>
            <p className="text-stone-500 mt-4 italic">El levantamiento de glúteo puede recomendarse para personas que desean:</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Mejorar la firmeza corporal", d: "Con el tiempo, cambios de peso o sedentarismo, los glúteos pueden perder firmeza y forma." },
              { t: "Mejorar el contorno corporal", d: "Ideal para quienes desean una apariencia más armónica y proporcionada." },
              { t: "Complementar entrenamiento físico", d: "Muchas personas entrenan constantemente pero desean potenciar visualmente sus resultados." },
              { t: "Buscar resultados naturales", d: "Pacientes que prefieren una estética corporal elegante, progresiva y realista." },
              { t: "Mejorar confianza física", d: "Cuando te sientes bien con tu cuerpo, eso también se refleja en tu seguridad personal." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp}
                className="bg-stone-50 p-8 border border-stone-100 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Check className="w-5 h-5 text-primary" />
                  <h3 className="font-serif font-bold text-stone-900 italic">{item.t}</h3>
                </div>
                <p className="text-stone-500 text-sm italic leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS: METHODOLOGY ────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 italic">🔬 El Proceso</p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 italic">¿Cómo funciona una sesión de levantamiento de glúteo?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { s: "Paso 1", t: "Evaluación corporal personalizada", d: "Analizamos objetivos, hábitos, composición corporal y expectativas para definir el mejor protocolo." },
              { s: "Paso 2", t: "Diseño del protocolo", d: "Creamos un enfoque adaptado a tus necesidades corporales y nivel de proyección deseado." },
              { s: "Paso 3", t: "Aplicación del tratamiento", d: "Dependiendo del protocolo, pueden utilizarse técnicas corporales, aparatología estética y procedimientos complementarios." },
              { s: "Paso 4", t: "Seguimiento y recomendaciones", d: "Te guiamos con hábitos complementarios para potenciar resultados progresivos y naturales." }
            ].map((step, i) => (
              <div key={i} className="relative bg-white/5 p-8 border border-white/10 hover:border-primary/40 transition-colors group">
                <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block italic">{step.s}</span>
                <h4 className="text-lg font-serif font-bold text-white mb-4 italic leading-tight">{step.t}</h4>
                <p className="text-white/50 text-sm leading-relaxed italic">{step.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              { l: "Duración aproximada", v: "Entre 45 y 90 minutos por sesión.", i: <Clock className="w-5 h-5 text-primary" /> },
              { l: "Frecuencia recomendada", v: "Varía según evaluación corporal y objetivos individuales.", i: <Calendar className="w-5 h-5 text-primary" /> },
              { l: "Recuperación", v: "La mayoría de protocolos permiten reincorporarse rápidamente.", i: <Zap className="w-5 h-5 text-primary" /> }
            ].map((item, i) => (
              <div key={i} className="p-8 flex flex-col items-center text-center">
                 <div className="mb-4">{item.i}</div>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 italic">{item.l}</p>
                 <p className="text-white font-serif font-bold italic text-sm">{item.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SESSIONS RECOMMENDATION ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-0.5 bg-primary" />
              <h2 className="text-3xl font-serif font-bold text-stone-900 italic">📈 ¿Cuántas sesiones se recomiendan?</h2>
            </div>
            <p className="text-stone-500 mb-10 italic">La cantidad de sesiones depende de:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
              {[
                "Objetivos estéticos",
                "Estado corporal actual",
                "Hábitos diarios",
                "Rutina física",
                "Nivel de firmeza deseado",
                "Evaluación profesional"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-stone-700 italic">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-stone-50 p-10 rounded-sm border border-stone-100">
               <p className="text-stone-600 mb-8 italic">Muchas pacientes optan por programas corporales completos para potenciar resultados y mantener la armonización corporal a largo plazo.</p>
               <p className="text-stone-400 text-[10px] uppercase tracking-widest mb-6 italic">También contamos con:</p>
               <div className="grid grid-cols-2 gap-4">
                 {["✨ paquetes corporales", "✨ programas wellness", "✨ protocolos combinados", "✨ seguimiento personalizado"].map((item, i) => (
                   <span key={i} className="text-stone-900 font-bold italic text-sm">{item}</span>
                 ))}
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LEAD MAGNET: GUÍA GRATUITA ────────────────── */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-4 py-2 rounded-full mb-6">
                <Star className="w-4 h-4 fill-white" />
                <span className="text-xs font-bold tracking-widest uppercase">Recurso Exclusivo</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 italic">🎁 GUÍA GRATUITA</h2>
              <p className="text-white/90 text-lg mb-4 leading-relaxed italic">
                Cómo mejorar la apariencia y firmeza de los glúteos
              </p>
              <div className="bg-white/10 border border-white/20 p-8 rounded-sm mb-8 backdrop-blur-sm">
                <p className="text-white text-sm mb-4 uppercase tracking-widest font-bold">Aprenderás:</p>
                <ul className="space-y-3">
                  {[
                    "hábitos que ayudan a mejorar firmeza",
                    "recomendaciones corporales",
                    "errores que afectan resultados",
                    "tips wellness",
                    "cómo potenciar tratamientos estéticos",
                    "cuidados corporales complementarios"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 shrink-0" />
                      <span className="italic">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-white font-bold italic mb-8">Además recibirás información sobre nuestros protocolos personalizados de levantamiento de glúteo en Turrialba.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-8 md:p-12 text-stone-900 shadow-2xl">
              <h3 className="text-2xl font-serif font-bold mb-8 text-center italic uppercase tracking-tight">Comenta la palabra:</h3>
              <div className="text-center mb-10">
                 <span className="text-4xl md:text-5xl font-serif font-bold text-primary italic underline underline-offset-8">“GLÚTEO”</span>
              </div>
              <div className="space-y-6">
                <a
                  href="https://www.instagram.com/mj_fisioestetica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-stone-50 border border-stone-100 hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-primary tracking-widest uppercase mb-1 italic">Instagram Direct</p>
                    <p className="font-bold text-lg group-hover:text-primary transition-colors italic">📸 Ir a nuestro perfil</p>
                  </div>
                </a>
                <p className="text-xs text-center text-stone-400 italic">Recibe tu guía al instante vía mensaje directo.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BELIEFS / PHILOSOPHY ─────────────────────── */}
      <section className="py-24 bg-white overflow-hidden">
         <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
               <div className="flex justify-center mb-8">
                 <Search className="w-10 h-10 text-primary/30" />
               </div>
               <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 italic">📸 Resultados reales y naturales</h2>
               <p className="text-stone-500 italic mb-12">En MJ Estética & Wellness Center creemos en:</p>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                 {["armonía corporal", "naturalidad", "evolución progresiva", "estética elegante y realista"].map((item, i) => (
                   <div key={i} className="p-4 border border-stone-100 italic font-medium text-stone-800 text-sm">
                      ✔ {item}
                   </div>
                 ))}
               </div>
               <p className="text-lg text-stone-600 italic border-l-4 border-primary/20 pl-8 text-left max-w-2xl mx-auto">
                 Por eso evitamos resultados exagerados o artificiales. Nuestros protocolos buscan que te sientas cómoda, segura y auténtica con tu cuerpo.
               </p>
            </motion.div>
         </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="py-24 bg-stone-50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900 italic">❤️ Historias reales de transformación</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "“Buscaba algo natural que complementara mi entrenamiento y realmente noté una mejor apariencia y firmeza.”",
              "“Me encantó el enfoque personalizado. Sentí acompañamiento durante todo el proceso.”",
              "“No quería algo exagerado, solo sentirme más segura con mi cuerpo, y el resultado fue exactamente lo que buscaba.”"
            ].map((text, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.1}}}}
                className="bg-white p-8 border border-stone-200 relative group"
              >
                <Quote className="w-8 h-8 text-primary/10 absolute top-4 right-4" />
                <p className="text-stone-600 italic mb-6 leading-relaxed">{text}</p>
                <p className="text-primary text-xs font-bold tracking-widest uppercase italic">— Paciente MJ</p>
              </motion.div>
            ))}
          </div>
        </div>
        <Heart className="absolute -bottom-20 -left-20 w-64 h-64 text-primary/5 -rotate-12" />
      </section>

      {/* ── FAQ SECTION ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-serif font-bold text-stone-900 italic">❓ Preguntas frecuentes</h2>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="border-t border-stone-200"
          >
            {[
              { q: "¿El levantamiento de glúteo es invasivo?", a: "Depende del protocolo recomendado. Durante la valoración corporal explicamos todas las opciones disponibles y cuál se adapta mejor a tus objetivos." },
              { q: "¿Cuándo se ven resultados?", a: "Muchas pacientes comienzan a notar cambios progresivos conforme avanzan las sesiones y se complementan hábitos saludables." },
              { q: "¿Los resultados son naturales?", a: "Sí. Nuestro enfoque prioriza armonización corporal y apariencia estética natural." },
              { q: "¿Se puede combinar con ejercicio?", a: "Sí. De hecho, muchas pacientes utilizan el tratamiento como complemento wellness corporal." },
              { q: "¿Cuántas sesiones necesito?", a: "Cada cuerpo es diferente. La cantidad ideal se define durante la evaluación personalizada." },
              { q: "¿Tiene tiempo de recuperación?", a: "Muchos protocolos permiten retomar actividades habituales rápidamente." },
              { q: "¿Ayuda con firmeza?", a: "Uno de los principales objetivos es contribuir a mejorar la apariencia de firmeza y proyección corporal." },
              { q: "¿Qué cuidados debo tener?", a: "Te brindaremos recomendaciones específicas según el protocolo aplicado y tus objetivos corporales." }
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
             <h2 className="text-3xl md:text-4xl font-serif font-bold italic mb-6">💎 ¿Por qué elegir MJ Estética & Wellness Center?</h2>
             <p className="text-primary font-bold italic uppercase tracking-widest text-sm">Porque no trabajamos con soluciones genéricas.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-4">
                <p className="text-white/40 uppercase tracking-widest text-xs font-bold mb-6">Trabajamos con:</p>
                {[
                  "evaluación corporal individual",
                  "protocolos personalizados",
                  "enfoque wellness integral",
                  "experiencia en estética corporal",
                  "ambiente premium y cómodo",
                  "seguimiento profesional",
                  "resultados progresivos y armónicos"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-white italic font-medium">{item}</span>
                  </div>
                ))}
             </motion.div>
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-center justify-center">
                <div className="p-10 border border-primary/30 bg-primary/5 rounded-full">
                   <p className="text-center text-lg italic leading-relaxed text-white">
                     Nuestro objetivo es ayudarte a sentirte mejor contigo misma de manera <span className="text-primary font-bold">natural y segura</span>.
                   </p>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* ── LOCATION & FINAL CTA ─────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 italic">📍 Levantamiento de Glúteo en Turrialba</h2>
              <div className="space-y-6">
                {[
                  { t: "Ubicación accesible en Turrialba", i: <MapPin className="w-5 h-5 text-primary" /> },
                  { t: "Parqueo cercano", i: <Zap className="w-5 h-5 text-primary" /> },
                  { t: "Atención por WhatsApp", i: <MessageCircle className="w-5 h-5 text-primary" /> },
                  { t: "Horarios flexibles", i: <Clock className="w-5 h-5 text-primary" /> },
                  { t: "Ambiente cómodo y profesional", i: <UserCheck className="w-5 h-5 text-primary" /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-stone-700 italic">
                    {item.i}
                    <span className="font-medium">{item.t}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary p-12 text-white relative overflow-hidden shadow-2xl">
               <div className="relative z-10 text-center">
                  <p className="text-white/60 text-xs font-bold tracking-[0.4em] uppercase mb-4 italic">🚨 Agenda tu valoración corporal hoy</p>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8 italic">Tu cuerpo merece un enfoque personalizado, natural y profesional.</h3>
                  <p className="text-white/80 italic mb-10 text-sm">🍑 Descubre el protocolo ideal para ti</p>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-all text-xs italic w-full justify-center"
                  >
                    <MessageCircle className="w-5 h-5" />
                    CONSULTAR DISPONIBILIDAD HOY
                  </a>
                  <p className="mt-8 text-[10px] tracking-widest text-white/50 uppercase font-bold italic">💬 Escríbenos por WhatsApp y agenda tu valoración en MJ</p>
               </div>
               <Sparkles className="absolute -right-10 -top-10 w-48 h-48 text-white/10 rotate-12" />
            </motion.div>
          </div>

          <div className="mt-20 pt-10 border-t border-stone-100 text-center">
             <a href="/" className="text-stone-400 text-xs hover:text-primary transition-colors italic tracking-widest font-bold">👉 VISITA AHORA: MJ ESTÉTICA & WELLNESS CENTER</a>
          </div>
        </div>
      </section>
    </div>
  );
}
