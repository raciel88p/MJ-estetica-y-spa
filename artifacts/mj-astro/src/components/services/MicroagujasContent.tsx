import { motion } from "framer-motion";
import {
  MessageCircle,
  Star,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Sparkles,
  Gift,
  Instagram,
  Check,
  Clock,
  MapPin,
  ChevronDown,
  Quote,
  Heart,
  Smartphone,
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

export function MicroagujasContent({
  waLink
}: {
  waLink: string;
}) {
  return (
    <div className="bg-white">
      {/* ── SECCIÓN: INTRODUCCIÓN ────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex flex-col items-center text-center mb-12">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <p className="text-stone-800 text-xl md:text-2xl font-serif leading-relaxed italic max-w-3xl">
                "¿Te gustaría ver tu piel más luminosa, uniforme y revitalizada sin perder su naturalidad?"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
                <p>
                  Las microagujas son uno de los tratamientos faciales más buscados actualmente por personas que desean mejorar la apariencia de su piel, potenciar el glow facial y apoyar protocolos de rejuvenecimiento progresivo con un enfoque moderno de skincare avanzado.
                </p>
                <p>
                  En MJ Estética & Wellness Center diseñamos protocolos personalizados de microneedling facial orientados al bienestar de la piel, glow saludable y renovación facial progresiva en Turrialba.
                </p>
              </div>
              <div className="bg-stone-50 p-8 rounded-sm border border-stone-100">
                <ul className="space-y-4">
                  {[
                    "Atención personalizada",
                    "Protocolos adaptados a cada piel",
                    "Experiencia skincare premium",
                    "Tecnología estética avanzada",
                    "Ambiente cómodo y profesional"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-stone-700 font-bold uppercase text-xs tracking-wider">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: LEAD MAGNET (REGALO ESPECIAL) ────────────────── */}
      <section className="py-24 bg-[#071e2e] relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5 -translate-y-1/3 translate-x-1/3">
          <Gift className="w-96 h-96 text-primary" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 md:p-16 rounded-sm text-center"
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-8">
              <Gift className="w-4 h-4" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">Regalo Especial</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 leading-tight">
              “Cómo mejorar los resultados de tus Microagujas”
            </h2>
            <p className="text-stone-300 mb-10 text-lg">
              Comenta la palabra <span className="text-white font-bold uppercase tracking-widest">“Microagujas”</span> en nuestro Instagram y recibe GRATIS nuestra guía exclusiva con:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-left max-w-2xl mx-auto mb-12">
              {[
                "Qué hacer antes y después",
                "Cómo prolongar el glow facial",
                "Cuidados clave para tu piel",
                "Recomendaciones skincare",
                "Tips para renovación facial"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-stone-200 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-6">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-[#071e2e] transition-all shadow-xl group"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar Guía por WhatsApp
              </a>
              <p className="text-white/60 font-serif italic text-lg">Porque cada piel necesita un protocolo diferente.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: ¿QUÉ SON? ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 uppercase tracking-tighter">¿Qué son las Microagujas?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p>
                  Las microagujas, también conocidas como microneedling facial, son técnicas avanzadas de skincare utilizadas para apoyar protocolos de renovación facial, glow y bienestar de la piel mediante microestimulaciones superficiales cuidadosamente personalizadas.
                </p>
                <p>
                  Este tratamiento se ha convertido en una tendencia mundial dentro del skincare premium gracias a su capacidad para mejorar la apariencia general de la piel de forma progresiva y natural.
                </p>
              </div>
              <div className="bg-stone-50 p-8 rounded-sm border border-stone-100 flex flex-col justify-center">
                <p className="text-stone-900 font-bold mb-6 uppercase text-xs tracking-widest border-b border-stone-200 pb-2">Adaptación en MJ:</p>
                <ul className="space-y-3">
                  {["Tipo de piel", "Objetivos faciales", "Sensibilidad cutánea", "Necesidades individuales", "Historial skincare"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-stone-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-primary font-serif italic text-sm">"Porque no existen dos pieles iguales."</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: QUÉ AYUDA A MEJORAR ─────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 text-primary">Resultados Reales</p>
            <h2 className="text-4xl font-serif font-bold mb-6 uppercase tracking-tighter text-white">¿Qué puede ayudar a mejorar este tratamiento?</h2>
            <p className="text-stone-400 max-w-2xl mx-auto leading-relaxed">
              Nuestro enfoque busca resultados naturales y progresivos, evitando promesas irreales o exageradas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Glow & Brillo", desc: "Potencia la luminosidad facial saludable." },
              { title: "Textura Uniforme", desc: "Mejora la apariencia de la textura cutánea." },
              { title: "Renovación", desc: "Sensación de renovación y frescura facial." },
              { title: "Rejuvenecimiento", desc: "Apoya protocolos de rejuvenecimiento progresivo." },
              { title: "Revitalización", desc: "Bienestar y revitalización integral de la piel." },
              { title: "Skincare Avanzado", desc: "Protocolos personalizados de alta gama." },
              { title: "Salud Cutánea", desc: "Apariencia más fresca y saludable." },
              { title: "Enfoque Natural", desc: "Resultados elegantes sin cambios artificiales." }
            ].map((item, i) => (
              <motion.div
                key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors"
              >
                <Sparkles className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-lg font-serif font-bold mb-2 text-white uppercase tracking-tight">{item.title}</h3>
                <p className="text-stone-400 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: BENEFICIOS REALES ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 uppercase tracking-tighter">Beneficios Reales</h2>
              <p className="text-stone-600 leading-relaxed mb-8 text-lg">
                Por eso las microagujas se han convertido en uno de los protocolos favoritos dentro del mundo del wellness y el skincare avanzado.
              </p>
              <div className="space-y-4">
                {[
                  "Glow facial saludable",
                  "Sensación de renovación y frescura",
                  "Piel con apariencia más revitalizada",
                  "Protocolos completamente personalizados",
                  "Experiencia estética premium",
                  "Atención profesional y seguimiento",
                  "Rutinas skincare más efectivas"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-stone-700 font-medium text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-stone-50 p-12 border border-stone-100 rounded-sm text-center"
            >
              <Quote className="w-12 h-12 text-primary/10 mb-8 mx-auto" />
              <p className="text-2xl font-serif italic text-stone-800 leading-relaxed mb-6">
                "No buscamos cambiar quién eres. Buscamos ayudarte a sentirte mejor con tu piel."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: PROTOCOLOS ─────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Opciones de Tratamiento</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter">Protocolos de Microagujas Disponibles</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Microneedling Facial Premium",
                desc: "Renovación facial progresiva y bienestar de la piel.",
                items: ["Atención personalizada", "Evaluación profesional", "Objetivos skincare"]
              },
              {
                title: "Glow Facial Avanzado",
                desc: "Diseñado para personas que desean una apariencia más luminosa y fresca.",
                items: ["Efecto glow natural", "Luminosidad", "Frescura inmediata"]
              },
              {
                title: "Skin Repair Premium",
                desc: "Cuidado avanzado de la textura y apariencia de la piel.",
                items: ["Skincare personalizado", "Seguimiento profesional", "Enfoque progresivo"]
              },
              {
                title: "Rejuvenecimiento Personalizado",
                desc: "Tratamientos adaptados según necesidades individuales.",
                items: ["Cuidado inteligente", "Sin exagerar", "Naturalidad elegida"]
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 border border-stone-100 shadow-sm rounded-sm hover:translate-y-[-4px] transition-all">
                <h3 className="text-xl font-serif font-bold mb-4 text-stone-900 uppercase tracking-tight h-14 flex items-center">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-6 min-h-[4rem]">{item.desc}</p>
                <ul className="space-y-2">
                  {item.items.map((it, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-stone-400">
                      <Check className="w-3 h-3 text-primary" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: PASO A PASO ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Experiencia MJ</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter">¿Cómo funciona el tratamiento?</h2>
          </motion.div>

          <div className="space-y-12 max-w-2xl mx-auto">
            {[
              { title: "Valoración facial personalizada", desc: "Analizamos tu piel, objetivos y necesidades específicas." },
              { title: "Preparación de la piel", desc: "La piel se limpia y prepara cuidadosamente para el protocolo." },
              { title: "Aplicación del tratamiento", desc: "Se realiza el protocolo de microagujas adaptado a tu piel y objetivos faciales." },
              { title: "Cuidados posteriores", desc: "Brindamos recomendaciones: Protector solar, hidratación y seguimiento skincare." }
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-8 group">
                <span className="w-16 h-16 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-primary font-bold text-2xl group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-2 uppercase tracking-tight">{step.title}</h3>
                  <p className="text-stone-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: TESTIMONIOS ─────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter">Lo que dicen nuestras clientes</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              "“Sentí mi piel muchísimo más luminosa y fresca.”",
              "“Me encantó porque el resultado se ve natural.”",
              "“La atención y el seguimiento hacen toda la diferencia.”",
              "“Mi piel se siente más saludable y revitalizada.”"
            ].map((text, i) => (
              <div key={i} className="bg-white p-8 border border-stone-100 rounded-sm italic font-serif text-stone-600 shadow-sm">
                <Quote className="w-6 h-6 text-primary/20 mb-4" />
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: FAQ ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Resolviendo Dudas</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter">Preguntas Frecuentes</h2>
          </motion.div>
          <div className="space-y-4">
            {[
              { q: "¿Qué son las microagujas?", a: "Son técnicas avanzadas de microneedling facial utilizadas dentro de protocolos skincare orientados a glow, renovación y bienestar facial." },
              { q: "¿Ayudan con glow facial?", a: "Muchas personas buscan este tratamiento precisamente para apoyar protocolos relacionados con luminosidad y revitalización facial." },
              { q: "¿Tiene recuperación?", a: "Puede existir sensibilidad temporal dependiendo del protocolo y tipo de piel." },
              { q: "¿Cuántas sesiones se recomiendan?", a: "Esto depende completamente de cada persona y sus objetivos faciales." },
              { q: "¿Qué cuidados posteriores requiere?", a: "Generalmente se recomienda protector solar, hidratación y productos adecuados bajo seguimiento profesional." }
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <details className="group bg-stone-50 border border-stone-100 rounded-sm overflow-hidden transition-all duration-300 open:shadow-md">
                  <summary className="p-6 cursor-pointer flex justify-between items-center list-none font-serif font-bold text-stone-900 group-hover:text-primary">
                    {item.q}
                    <span className="text-primary transition-transform duration-300 group-open:rotate-180">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="p-6 pt-0 text-stone-600 text-sm leading-relaxed border-t border-stone-200">
                    {item.a}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: FINAL CTA ─────────────────── */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-8">
              <MapPin className="w-4 h-4" />
              <span className="text-[10px] font-bold tracking-widest uppercase">Microagujas en Turrialba</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 uppercase tracking-tighter text-white leading-tight">
              Descubre el protocolo ideal <br className="hidden md:block" />
              para tu piel hoy
            </h2>
            <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto leading-relaxed italic font-serif">
              "Nuestro objetivo no es venderte milagros. Nuestro objetivo es ayudarte a cuidar tu piel inteligentemente."
            </p>
            <div className="flex flex-col items-center gap-6">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-primary px-12 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-all shadow-2xl"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar Valoración Facial
              </a>
              <div className="flex gap-10 opacity-60">
                 <span className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase"><Clock className="w-3 h-3" /> Atención Rápida</span>
                 <span className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase"><ShieldCheck className="w-3 h-3" /> Ambiente Seguro</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
