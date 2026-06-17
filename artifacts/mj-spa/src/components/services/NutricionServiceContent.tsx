import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, ArrowRight, Star, MapPin, Phone, Clock, Gift, Download } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as any } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

interface Props {
  waLink: string;
}

export function NutricionServiceContent({ waLink }: Props) {
  return (
    <div className="bg-white">
      {/* ── PROBLEM / AGITATION ──────────────────────── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              ¿Buscas un Nutricionista en Turrialba que Realmente Adapte el Plan a Tu Estilo de Vida?
            </h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
              <p>Muchas personas llegan a consulta después de probar dietas restrictivas, consejos de internet o programas que simplemente no se ajustan a su realidad.</p>
              <p className="font-bold text-stone-900">El problema no suele ser la falta de disciplina.</p>
              <p>El problema es que la mayoría de planes no están diseñados para la persona que los está siguiendo.</p>
              <p>En MJ Estética & Wellness Center entendemos que cada paciente tiene horarios, objetivos, hábitos y necesidades diferentes.</p>
              <p>Por eso nuestro servicio de nutrición personalizada en Turrialba se enfoca en construir estrategias sostenibles que puedas mantener a largo plazo.</p>
              <p className="italic font-medium text-primary">Porque la verdadera transformación ocurre cuando la alimentación se adapta a tu vida y no al revés.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOCUS SECTIONS ───────────────────────────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6 leading-tight">
                Servicio de Nutricionista en Turrialba con Enfoque en Bienestar Integral
              </h2>
              <p className="text-stone-600 mb-8">Nuestro programa de acompañamiento nutricional está diseñado para apoyar personas que desean:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Mejorar sus hábitos alimenticios",
                  "Organizar mejor su alimentación diaria",
                  "Recibir educación nutricional personalizada",
                  "Mejorar su bienestar integral",
                  "Complementar tratamientos estéticos y wellness",
                  "Trabajar objetivos de composición corporal",
                  "Desarrollar hábitos saludables sostenibles",
                  "Crear una mejor relación con la alimentación"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-stone-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-stone-500 text-sm italic">Cada consulta se adapta individualmente según tus objetivos, necesidades y estilo de vida.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-50 p-8 border border-stone-200">
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-8">¿Qué Incluye la Consulta Nutricional?</h3>
              <div className="space-y-8">
                {[
                  { t: "Valoración Nutricional Completa", d: "Conocemos tu situación actual, hábitos alimenticios, objetivos y necesidades." },
                  { t: "Diagnóstico y Definición de Objetivos", d: "Establecemos metas realistas y alcanzables adaptadas a tu contexto." },
                  { t: "Plan Nutricional Personalizado", d: "Diseñado específicamente para tu estilo de vida." },
                  { t: "Educación Nutricional", d: "Aprende cómo tomar mejores decisiones alimenticias sin depender de dietas extremas." },
                  { t: "Seguimiento Profesional", d: "Realizamos ajustes y acompañamiento para ayudarte a mantener el progreso." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 mb-1">{item.t}</h4>
                      <p className="text-stone-500 text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WEIGHT LOSS / COMPOSITION ────────────────── */}
      <section className="py-20 bg-[#071e2e] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">
                Nutricionista para Bajar de Peso y Mejorar la Composición Corporal en Turrialba
              </h2>
              <p className="text-white/70 mb-8">Uno de los objetivos más frecuentes de nuestros pacientes es mejorar su composición corporal mediante hábitos sostenibles.</p>
              <div className="grid grid-cols-1 gap-3">
                {["Organizar tu alimentación", "Mejorar tus elecciones nutricionales", "Crear hábitos consistentes", "Optimizar tu bienestar general", "Mantener resultados sostenibles en el tiempo"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-white/50 italic">No creemos en soluciones rápidas. Creemos en estrategias que puedas mantener durante meses y años.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/5 border border-white/10 p-10 backdrop-blur-sm text-center">
              <Star className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-serif font-bold mb-4">Empieza hoy tu cambio</h3>
              <p className="text-white/60 mb-8 text-sm leading-relaxed">Únete a las decenas de personas en Turrialba que han transformado su relación con la comida.</p>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-white text-xs font-bold tracking-widest uppercase px-8 py-4 hover:bg-white hover:text-stone-900 transition-all">
                AGENDAR CITA POR WHATSAPP <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS GRID ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-3">VENTAJAS</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">Beneficios</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Alimentación adaptada a ti", d: "No trabajamos con planes genéricos." },
              { t: "Hábitos sostenibles y realistas", d: "Creamos estrategias que puedas mantener a largo plazo." },
              { t: "Educación nutricional", d: "Aprende a tomar mejores decisiones por tu cuenta." },
              { t: "Bienestar integral y energía", d: "Mejora tu calidad de vida y vitalidad." },
              { t: "Seguimiento y acompañamiento profesional", d: "Te acompañamos en cada etapa del proceso." },
              { t: "Objetivos personalizados", d: "Ya sea salud, estética o rendimiento deportivo." }
            ].map((b, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-50 p-8 border border-stone-100 hover:border-primary/20 transition-colors">
                <h4 className="font-serif font-bold text-xl text-stone-900 mb-3">{b.t}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{b.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ──────────────────────────────── */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">METODOLOGÍA</p>
              <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">¿Cómo funciona una consulta nutricional en MJ Estética & Wellness Center?</h2>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { s: "Paso 1", t: "Valoración inicial", d: "Hábitos, objetivos y estilo de vida." },
              { s: "Paso 2", t: "Diseño del plan nutricional", d: "Estrategia personalizada." },
              { s: "Paso 3", t: "Implementación", d: "Cambios progresivos." },
              { s: "Paso 4", t: "Seguimiento y ajustes", d: "Para optimizar resultados." }
            ].map((step, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-900 p-10">
                <span className="text-primary text-xs font-bold tracking-widest uppercase block mb-6">{step.s}</span>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">{step.t}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-20 bg-stone-50 border-y border-stone-200">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4 leading-tight">
              Preguntas Frecuentes
            </h2>
          </motion.div>
          <div className="space-y-10">
            {[
              { q: "¿Los planes nutricionales son personalizados?", a: "Sí, cada recomendación se adapta a tus objetivos." },
              { q: "¿La consulta incluye seguimiento?", a: "Sí, el acompañamiento es fundamental para el éxito." },
              { q: "¿Puedo combinar nutrición con tratamientos estéticos?", a: "Sí, es el complemento ideal para potenciar resultados corporales." },
              { q: "¿Qué objetivos puede apoyar una nutricionista?", a: "Hábitos, bienestar, organización alimenticia y composición corporal." }
            ].map((faq, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={faqUp}>
                <h4 className="text-lg font-bold text-stone-900 mb-3">{faq.q}</h4>
                <p className="text-stone-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL INFO / CTA ─────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">Nutricionista en Turrialba Cerca de Ti</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: MapPin, text: "MJ Estética & Wellness Center" },
                  { icon: MapPin, text: "Turrialba, Cartago, Costa Rica" },
                  { icon: Clock, text: "Citas programadas" },
                  { icon: Phone, text: "Atención por WhatsApp" },
                  { icon: CheckCircle2, text: "Parqueo disponible" },
                  { icon: Star, text: "Atención personalizada" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-stone-700">
                    <item.icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#071e2e] p-10 text-white text-center">
              <h2 className="text-3xl font-serif font-bold mb-6 leading-tight">Agenda Tu Valoración Nutricional Hoy</h2>
              <p className="text-white/70 mb-10 leading-relaxed">
                Tu alimentación puede convertirse en una herramienta para mejorar tu bienestar, energía y calidad de vida. Descubre cómo un plan nutricional personalizado puede ayudarte a construir hábitos sostenibles y alcanzar tus objetivos.
              </p>
              <div className="flex flex-col gap-4 max-w-sm mx-auto">
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-primary text-white text-sm font-bold tracking-[0.15em] uppercase px-8 py-4 hover:bg-white hover:text-stone-900 transition-all group">
                  <MessageCircle className="w-4 h-4" />
                  Agenda tu valoración
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-primary font-bold text-xs uppercase tracking-widest mt-2">Cupos limitados por agenda semanal</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
const faqUp = fadeUp;
