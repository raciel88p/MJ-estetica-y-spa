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
  Quote,
  X
} from "lucide-react";
import { useState } from "react";
import { BeforeAfterSlider } from "../testimonials/BeforeAfterSlider";

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

export function IronBeautyServiceContent({ waLink }: { waLink: string }) {
  return (
    <div className="bg-white">
      {/* ── INTRO SECTION ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Estética Deportiva Avanzada</span>
            </div>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              En <span className="font-bold text-stone-900">MJ Estética & Wellness Center</span> diseñamos protocolos corporales especializados para atletas, fisicoculturistas y personas fitness que buscan verse bien, sentirse mejor y optimizar su bienestar físico mediante tratamientos personalizados orientados al estilo de vida deportivo.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Recuperación muscular complementaria",
                "Definición corporal estética",
                "Wellness fitness personalizado",
                "Protocolos adaptados a objetivos físicos",
                "Atención profesional y ambiente cómodo"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-stone-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-stone-50 border-l-4 border-primary">
              <p className="text-xl text-stone-900 font-serif leading-tight">
                ¿Sientes que entrenas duro… pero tu cuerpo no refleja todo tu esfuerzo?
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PAIN POINTS ───────────────────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h3 className="text-2xl font-serif font-bold mb-8 text-primary">Muchos atletas y personas fitness enfrentan:</h3>
              <div className="space-y-4">
                {[
                  "Fatiga muscular constante",
                  "Retención de líquidos",
                  "Sensación de inflamación corporal",
                  "Dificultad para mantener definición estética",
                  "Estrés físico acumulado",
                  "Sobrecarga muscular por entrenamiento intenso"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <X className="w-5 h-5 text-primary" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm h-full flex flex-col justify-center">
                <p className="text-white/80 text-lg mb-6 leading-relaxed">
                  Y aunque entrenar y alimentarte bien es fundamental, el cuerpo también necesita recuperación, mantenimiento corporal y protocolos wellness especializados.
                </p>
                <div className="flex items-center gap-3 text-primary font-bold text-xl font-serif">
                   <Sparkles className="w-6 h-6 shrink-0" />
                   <span>Aquí es donde Iron Beauty Fitness puede ayudarte.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2" />
      </section>

      {/* ── DEFINITION & PROTOCOLS ───────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">¿Qué es Iron Beauty Fitness?</h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              Iron Beauty Fitness es un protocolo de estética deportiva y wellness corporal diseñado para complementar hábitos fitness, apoyar recuperación muscular y mejorar la apariencia corporal mediante atención personalizada.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-50 p-10 border border-stone-100 mb-16">
            <p className="text-stone-700 leading-relaxed text-center">
              En MJ Estética & Wellness Center entendemos que cada disciplina y cada cuerpo requieren una valoración individual.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <p className="text-stone-400 text-[10px] uppercase tracking-widest mb-8 text-center font-bold">Por eso nuestros protocolos pueden incluir:</p>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
               {[
                 "Masajes deportivos",
                 "Drenaje corporal",
                 "Radiofrecuencia corporal",
                 "Wellness muscular",
                 "Relajación corporal",
                 "Protocolos de recuperación fitness",
                 "Definición estética corporal"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 bg-stone-50 p-4 border border-stone-100">
                   <Check className="w-4 h-4 text-primary shrink-0" />
                   <span className="text-stone-700 font-medium text-sm">{item}</span>
                 </div>
               ))}
             </div>
             <p className="mt-12 text-center text-primary font-bold text-lg italic">
               Todo adaptado a tus objetivos físicos y rutina deportiva.
             </p>
          </motion.div>
        </div>
      </section>

      {/* ── TARGET AUDIENCE ─────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Especialización</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900">¿Para quién está pensado?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {[
              "Fisicoculturistas",
              "Atletas recreativos",
              "Personas fitness",
              "Deportistas de alto rendimiento",
              "Preparación para competencias",
              "Personas con rutinas intensas de entrenamiento",
              "Wellness corporal deportivo"
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
                <span className="text-stone-700 font-medium text-sm">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-16 text-center text-stone-500 max-w-2xl mx-auto italic">
            Si buscas complementar tu estilo de vida fitness con protocolos especializados, esta experiencia fue diseñada para ti.
          </motion.p>
        </div>
      </section>

      {/* ── BENEFITS SECTION ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Valor Añadido</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900">BENEFICIOS QUE PUEDE APORTAR</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Sensación de bienestar corporal",
              "Recuperación muscular complementaria",
              "Apoyo en definición estética",
              "Mejor apariencia física",
              "Relajación corporal post entrenamiento",
              "Complemento wellness deportivo",
              "Protocolos adaptados a objetivos individuales"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp}
                className="bg-stone-50 p-6 border border-stone-100 flex items-start gap-4"
              >
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span className="text-stone-700 font-medium text-sm leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <p className="text-xl font-serif font-bold text-stone-900 italic">"Porque el rendimiento también se construye fuera del gimnasio."</p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS: METHODOLOGY ────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Protocolo Profesional</p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">¿Cómo funciona la valoración estética deportiva?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { s: "Paso 1", t: "Evaluación corporal personalizada", d: "Analizamos tus objetivos físicos, hábitos deportivos y necesidades corporales." },
              { s: "Paso 2", t: "Identificación de prioridades", d: "Definimos enfoque wellness, recuperación o definición corporal según tu estilo de vida fitness." },
              { s: "Paso 3", t: "Diseño del protocolo", d: "Creamos un protocolo corporal personalizado orientado a bienestar y recuperación." },
              { s: "Paso 4", t: "Seguimiento y mantenimiento", d: "Te acompañamos con recomendaciones y frecuencia ideal según tus objetivos." }
            ].map((step, i) => (
              <div key={i} className="relative bg-white/5 p-8 border border-white/10 hover:border-primary/40 transition-colors group">
                <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">{step.s}</span>
                <h4 className="text-lg font-serif font-bold text-white mb-4 leading-tight">{step.t}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-stone-900">¿Por qué atletas y personas fitness eligen MJ Estética & Wellness Center?</h2>
             <p className="text-stone-500 mb-8 italic">Porque aquí no trabajamos protocolos genéricos.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
            {[
              "Atención personalizada",
              "Enfoque wellness fitness",
              "Protocolos adaptados a atletas",
              "Recuperación corporal especializada",
              "Ambiente profesional y cómodo",
              "Acompañamiento individualizado"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-3 border-b border-stone-100">
                <Check className="w-5 h-5 text-primary shrink-0" />
                <span className="text-stone-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-16 text-center text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Nuestro enfoque busca complementar tu disciplina física con bienestar corporal y estética deportiva profesional.
          </p>
        </div>
      </section>

      {/* ── BEFORE & AFTER ────────────────────────────── */}
      <section className="py-24 bg-stone-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900 uppercase tracking-widest text-xs mb-4 text-primary">Resultados Reales</h2>
            <h3 className="text-3xl font-serif font-bold text-stone-900">Nuestros Atletas</h3>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative z-10">
            <BeforeAfterSlider
              beforeImage="/images/iron-beauty-before.png"
              afterImage="/images/iron-beauty-after.png"
              beforeLabel="Preparación"
              afterLabel="Resultado Final"
            />
            <p className="text-center text-stone-400 text-[10px] mt-6 italic">* Los resultados varían según el compromiso y la disciplina de cada individuo.</p>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900 uppercase tracking-widest text-xs mb-4 text-primary">Testimonios</h2>
            <h3 className="text-3xl font-serif font-bold text-stone-900">Lo que dicen quienes ya lo viven</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "“Sentía demasiada tensión muscular después de entrenar. Después de las sesiones me sentí mucho más ligero y recuperado.”", a: "Cliente fitness" },
              { t: "“Me ayudó muchísimo como complemento en mi preparación física.”", a: "Atleta recreativo" },
              { t: "“La atención personalizada marca totalmente la diferencia.”", a: "Cliente wellness deportivo" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.1}}}}
                className="bg-white p-8 border border-stone-200 relative group"
              >
                <Quote className="w-8 h-8 text-primary/10 absolute top-4 right-4" />
                <p className="text-stone-600 mb-6 leading-relaxed italic">{item.t}</p>
                <p className="text-primary text-[10px] font-bold tracking-widest uppercase">— {item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-serif font-bold text-stone-900">PREGUNTAS FRECUENTES</h2>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="border-t border-stone-200"
          >
            {[
              { q: "¿La estética deportiva ayuda con recuperación muscular?", a: "Los protocolos pueden complementar bienestar y relajación corporal posterior al entrenamiento." },
              { q: "¿Se puede combinar con entrenamiento?", a: "Sí. Los protocolos están diseñados para complementar hábitos fitness y wellness corporal." },
              { q: "¿Es personalizado?", a: "Sí. Cada cuerpo y disciplina requieren valoración individual." },
              { q: "¿Ayuda antes de competencias?", a: "Muchos atletas buscan complementar su preparación física mediante protocolos wellness y recuperación corporal." },
              { q: "¿Qué tratamientos pueden incluirse?", a: "Dependiendo de la valoración pueden incluirse drenaje corporal, radiofrecuencia, masajes deportivos y wellness muscular." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <FaqItem question={item.q} answer={item.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── LEAD MAGNET: RECURSO GRATUITO ────────────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-4 py-2 rounded-full mb-6">
                <Star className="w-4 h-4 fill-primary" />
                <span className="text-xs font-bold tracking-widest uppercase">Exclusivo para Atletas</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">🎁 RECURSO GRATUITO PARA TI</h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed italic">
                Solo por comentar la palabra: <span className="text-primary font-bold not-italic">“IRON”</span>
              </p>
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm mb-8 backdrop-blur-sm">
                <p className="text-primary text-sm mb-6 uppercase tracking-widest font-bold">Te enviaremos GRATIS nuestra guía:</p>
                <h4 className="text-xl font-serif font-bold mb-6 text-white leading-tight">
                  “Cómo mejorar tus resultados estéticos y wellness con limpiezas faciales y recuperación corporal”
                </h4>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mb-4 font-bold">Descubre:</p>
                <ul className="space-y-3">
                  {[
                    "Hábitos que potencian tus resultados",
                    "Cómo complementar recuperación y bienestar",
                    "Errores comunes que afectan tu apariencia corporal",
                    "Tips wellness para atletas y personas fitness"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-8 md:p-12 text-stone-900 shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold mb-8 text-center uppercase tracking-tight">Escríbenos la palabra:</h3>
                <div className="text-center mb-10">
                   <span className="text-4xl md:text-5xl font-serif font-bold text-primary underline underline-offset-8">“IRON”</span>
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
                      <p className="text-[10px] font-bold text-primary tracking-widest uppercase mb-1">Instagram Direct</p>
                      <p className="font-bold text-lg group-hover:text-primary transition-colors">📸 Ir a nuestro perfil</p>
                    </div>
                  </a>
                  <p className="text-xs text-center text-stone-400">Recibe tu guía + valoración personalizada vía mensaje directo.</p>
                </div>
              </div>
              <Sparkles className="absolute -right-10 -bottom-10 w-48 h-48 text-stone-100" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CLOSING & FINAL CTA ─────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20">
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
               TU CUERPO YA HACE EL ESFUERZO.<br />
               <span className="text-primary italic font-light">Dale también la recuperación y el wellness que merece.</span>
             </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-8 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                MJ Estética & Wellness Center — Turrialba
              </h2>
              <div className="space-y-6">
                {[
                  "Agenda tu valoración corporal deportiva hoy",
                  "Consulta disponibilidad por WhatsApp",
                  "Descubre el protocolo ideal para tus objetivos físicos"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-stone-700">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary p-12 text-white relative overflow-hidden shadow-2xl">
               <div className="relative z-10 text-center">
                  <p className="text-white/60 text-xs font-bold tracking-[0.4em] uppercase mb-4">CTA FINAL</p>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mb-10 leading-tight">
                    ESCRÍBENOS “IRON” Y RECIBE TU GUÍA + VALORACIÓN PERSONALIZADA
                  </h3>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-all text-xs w-full justify-center"
                  >
                    <MessageCircle className="w-5 h-5" />
                    ESCRIBIR POR WHATSAPP
                  </a>
               </div>
               <Zap className="absolute -right-10 -top-10 w-48 h-48 text-white/10 rotate-12" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
