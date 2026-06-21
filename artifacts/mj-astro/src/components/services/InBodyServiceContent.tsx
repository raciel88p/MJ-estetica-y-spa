import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, ArrowRight, Activity, TrendingDown, Target, Zap, Clock, ShieldCheck, MapPin, Phone, Star } from "lucide-react";

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

export function InBodyServiceContent({ waLink }: Props) {
  return (
    <div className="bg-white">
      {/* ── INTRO / PAS ────────────────────────────── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              Conoce tu porcentaje de grasa, masa muscular y estado corporal con tecnología InBody en Turrialba
            </h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto">
              <p>¿Quieres saber si realmente estás perdiendo grasa, ganando músculo o mejorando tu condición física?</p>
              <p className="font-bold text-stone-900 italic">Una báscula tradicional solo muestra tu peso, pero no explica qué está pasando dentro de tu cuerpo.</p>
              <p>En MJ Fisio Estética & Wellness Center realizamos análisis de composición corporal InBody, una evaluación profesional que te permite conocer datos reales para tomar mejores decisiones.</p>
            </div>
            <div className="mt-12">
               <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-primary text-white text-xs font-bold tracking-[0.2em] uppercase px-8 py-5 hover:bg-stone-900 transition-all shadow-xl">
                  <MessageCircle className="w-4 h-4" />
                  Agenda tu análisis InBody
                  <ArrowRight className="w-4 h-4" />
               </a>
               <p className="mt-6 text-primary font-bold text-sm tracking-wide">Recibe orientación personalizada para interpretar tus resultados.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SEARCH / FOCUS ──────────────────────────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 leading-tight">
                ¿Buscas dónde hacer un InBody en Turrialba?
              </h2>
              <p className="text-stone-600 mb-8 leading-relaxed">
                Nuestro servicio está diseñado para personas que desean conocer su estado físico antes de iniciar o mejorar un proceso de:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Pérdida de grasa corporal",
                  "Aumento de masa muscular",
                  "Entrenamiento deportivo",
                  "Cambio de hábitos saludables",
                  "Seguimiento de resultados"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-primary/10 p-1 rounded-full">
                       <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-stone-700 font-bold text-xs uppercase tracking-wider">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-stone-500 text-sm italic">
                Atendemos clientes de Turrialba, Tucurrique, Juan Viñas, Santa Cruz, Pavones, La Suiza, Pejibaye y zonas cercanas.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-50 p-10 border border-stone-200 shadow-sm">
               <h3 className="text-2xl font-serif font-bold text-stone-900 mb-8 italic">Tu peso no cuenta toda la historia</h3>
               <p className="text-stone-600 mb-8">Puedes estar mejorando aunque la balanza no cambie porque:</p>
               <ul className="space-y-4">
                 {[
                   "Estás perdiendo grasa",
                   "Estás aumentando músculo",
                   "Tu composición corporal mejora",
                   "Tu cuerpo cambia de forma saludable"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-stone-700 font-medium">
                      <TrendingDown className="w-5 h-5 text-primary shrink-0" />
                      <span>{item}</span>
                   </li>
                 ))}
               </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS IT ──────────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">¿Qué es un análisis InBody?</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Utiliza tecnología de bioimpedancia avanzada para analizar cómo está formado tu cuerpo en pocos minutos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { t: "Grasa Corporal", d: "Porcentaje real de grasa en todo el cuerpo.", icon: Activity },
              { t: "Masa Muscular", d: "Distribución muscular por segmentos corporales.", icon: Zap },
              { t: "Grasa Visceral", d: "Nivel de grasa interna alrededor de los órganos.", icon: Target },
              { t: "Metabolismo", d: "Cálculo exacto de tu gasto calórico basal.", icon: Activity },
              { t: "Agua Corporal", d: "Evaluación de hidratación y retención.", icon: Activity },
              { t: "IMC", d: "Índice de Masa Corporal preciso.", icon: Activity },
              { t: "Peso Recomendado", d: "Objetivos realistas según tu composición.", icon: Activity },
              { t: "Seguimiento", d: "Medición de avances de manera objetiva.", icon: Activity }
            ].map((item, i) => (
              <div key={i} className="bg-stone-900 p-8 hover:bg-stone-800 transition-colors">
                <h4 className="font-serif font-bold text-xl mb-3 text-primary">{item.t}</h4>
                <p className="text-stone-400 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS GRID ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
             <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 italic">POR QUÉ HACERLO</p>
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900">Beneficios de realizar un InBody</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Objetivos claros", d: "Crea metas basadas en datos, no en suposiciones." },
              { t: "Ajuste de plan", d: "Permite ajustar entrenamiento y alimentación con precisión." },
              { t: "Control de pérdida", d: "Asegura que pierdas grasa sin comprometer tu músculo." },
              { t: "Progreso profesional", d: "Mide tu evolución de forma científica y objetiva." },
              { t: "Detección desbalances", d: "Identifica si un brazo o pierna tiene menos músculo." },
              { t: "Decisiones basadas en datos", d: "Deja de adivinar y empieza a saber qué funciona." }
            ].map((b, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-50 p-8 border border-stone-100 hover:border-primary/20 transition-all">
                <h4 className="font-serif font-bold text-xl text-stone-900 mb-3">{b.t}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{b.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ATHLETES ────────────────────────────────── */}
      <section className="py-24 bg-stone-50 border-y border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                 <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 leading-tight">InBody para deportistas en Turrialba</h2>
                 <p className="text-stone-600 mb-10 leading-relaxed text-lg text-left">Herramienta fundamental para personas activas que practican gimnasio, running, ciclismo o deportes funcionales.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                    {["Gimnasio", "Running", "Ciclismo", "Deportes recreativos", "Entrenamiento funcional"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-stone-700 font-bold uppercase text-[10px] tracking-widest">
                         <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                         {item}
                      </div>
                    ))}
                 </div>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-900 p-12 text-white text-center rounded-sm">
                 <h3 className="text-2xl font-serif font-bold mb-6 italic">¿Cómo funciona?</h3>
                 <div className="space-y-6 text-left">
                    {[
                      { s: "1", t: "Medición", d: "Realizas la prueba en el equipo InBody." },
                      { s: "2", t: "Análisis", d: "El dispositivo procesa tus indicadores." },
                      { s: "3", t: "Reporte", d: "Recibes un informe completo impreso o digital." },
                      { s: "4", t: "Interpretación", d: "Revisamos resultados y resolvemos tus dudas." }
                    ].map((step, i) => (
                      <div key={i} className="flex gap-4">
                         <span className="text-primary font-bold">{step.s}.</span>
                         <p className="text-sm"><span className="font-bold">{step.t}:</span> {step.d}</p>
                      </div>
                    ))}
                 </div>
                 <p className="mt-8 text-primary font-bold text-xs uppercase tracking-widest">⏱ Duración: 5 a 10 minutos</p>
              </motion.div>
           </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">¿Por qué realizar tu InBody con nosotros?</h2>
            <p className="text-stone-600 text-lg mb-12 italic leading-relaxed">"Porque no solo necesitas un número: necesitas entender qué significa."</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-16">
              {[
                "Tecnología profesional InBody",
                "Atención personalizada",
                "Interpretación de resultados",
                "Seguimiento de avances",
                "Experiencia en bienestar y salud"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-stone-700 font-bold text-sm uppercase tracking-wider">{item}</span>
                </div>
              ))}
            </div>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-stone-900 text-white text-xs font-bold tracking-[0.2em] uppercase px-10 py-5 hover:bg-primary transition-all rounded-sm shadow-xl">
               Reserva tu análisis hoy
               <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-24 bg-stone-50 border-t border-stone-100">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4 leading-tight">Preguntas frecuentes</h2>
            <div className="w-20 h-0.5 bg-primary mx-auto" />
          </motion.div>
          <div className="space-y-12">
            {[
              { q: "¿Cuánto cuesta un InBody en Turrialba?", a: "El precio puede variar según el servicio y la orientación incluida. Escríbenos por WhatsApp para conocer disponibilidad y detalles." },
              { q: "¿Cuánto dura un análisis InBody?", a: "La medición tarda aproximadamente entre 5 y 10 minutos." },
              { q: "¿El InBody mide grasa corporal y músculo?", a: "Sí. Permite conocer porcentaje de grasa, masa muscular, grasa visceral, agua corporal y otros indicadores." },
              { q: "¿Cada cuánto debo realizar un InBody?", a: "Depende de tus objetivos. Muchas personas realizan mediciones cada 4 a 8 semanas para evaluar cambios." },
              { q: "¿Dónde puedo hacerme un InBody en Turrialba?", a: "Puedes realizar tu análisis en MJ Fisio Estética & Wellness Center, con atención personalizada y tecnología profesional." }
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
      <section className="py-24 bg-[#071e2e] text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl font-serif font-bold mb-8 leading-tight">Agenda tu valoración hoy</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: MapPin, text: "Turrialba, Costa Rica" },
                  { icon: Clock, text: "Atención inmediata" },
                  { icon: Phone, text: "WhatsApp activo" },
                  { icon: Star, text: "Resultados precisos" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-stone-300">
                    <item.icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-bold text-xs tracking-widest uppercase">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
              <p className="text-white/70 mb-10 leading-relaxed text-lg italic">
                "Conoce tu cuerpo. Mide tu progreso. Mejora tus resultados."
              </p>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-primary text-white text-sm font-bold tracking-[0.15em] uppercase px-10 py-5 hover:bg-white hover:text-stone-900 transition-all group shadow-2xl shadow-primary/20">
                <MessageCircle className="w-5 h-5" />
                Reservar por WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
