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
                    <span className="text-primary font-bold">✔</span>
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">Beneficios de Recibir Acompañamiento Nutricional Profesional</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Alimentación Adaptada a Ti", d: "No trabajamos con planes genéricos." },
              { t: "Hábitos Sostenibles", d: "Creamos estrategias realistas para tu estilo de vida." },
              { t: "Educación Nutricional", d: "Comprende cómo funciona tu alimentación." },
              { t: "Bienestar Integral", d: "La nutrición forma parte de un enfoque completo de salud y bienestar." },
              { t: "Seguimiento Continuo", d: "Te acompañamos durante el proceso." },
              { t: "Objetivos Personalizados", d: "Cada paciente tiene metas diferentes y cada plan se adapta a ellas." }
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
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">¿Cómo Funciona una Consulta Nutricional en MJ Estética & Wellness Center?</h2>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { s: "Paso 1", t: "Valoración Inicial", d: "Analizamos hábitos, objetivos y estilo de vida." },
              { s: "Paso 2", t: "Diseño del Plan Nutricional", d: "Creamos una estrategia personalizada." },
              { s: "Paso 3", t: "Implementación", d: "Comienzas a aplicar los cambios de manera progresiva." },
              { s: "Paso 4", t: "Seguimiento y Ajustes", d: "Realizamos acompañamiento para optimizar resultados." }
            ].map((step, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-900 p-10">
                <span className="text-primary text-xs font-bold tracking-widest uppercase block mb-6">{step.s}</span>
                <h3 className="text-2xl font-serif font-bold mb-4">{step.t}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR WHOM / CASES ─────────────────────────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 leading-tight">¿Para Quién se Recomienda el Servicio de Nutricionista?</h2>
              <div className="space-y-4">
                {[
                  "Personas que desean bajar porcentaje de grasa corporal",
                  "Personas interesadas en bienestar integral",
                  "Personas que desean mejorar hábitos alimenticios",
                  "Personas con objetivos estéticos y wellness",
                  "Personas que desean una alimentación más organizada",
                  "Personas que buscan orientación nutricional profesional",
                  "Hombres y mujeres de Turrialba y Cartago que desean mejorar su calidad de vida"
                ].map((item, i) => (
                  <div key={i} className="bg-stone-50 p-4 border-l-4 border-primary/30">
                    <p className="text-stone-800 font-bold text-sm leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 leading-tight">Casos Frecuentes que Atendemos</h2>
              <div className="space-y-6">
                {[
                  "Personas que sienten que comen bien pero no logran resultados.",
                  "Personas que han probado múltiples dietas.",
                  "Personas que desean complementar tratamientos estéticos.",
                  "Personas con agendas ocupadas que necesitan estrategias realistas.",
                  "Personas que desean mejorar energía y bienestar."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-stone-600">
                    <span className="text-primary font-bold">✔</span>
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 leading-tight">¿Por Qué Elegir MJ Estética & Wellness Center?</h2>
            <p className="text-stone-600 text-lg mb-12 leading-relaxed">
              A diferencia de un enfoque tradicional centrado únicamente en la alimentación, nuestro centro integra bienestar, estética y acompañamiento profesional.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-16">
              {[
                "Nutrición Personalizada",
                "Atención Individualizada",
                "Seguimiento Profesional",
                "Enfoque Wellness Integral",
                "Ambiente Cómodo y Seguro",
                "Atención Cercana y Humana",
                "Ubicación Conveniente en Turrialba"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-stone-700 font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-stone-500 font-medium text-lg italic">Nuestro objetivo es ayudarte a construir hábitos que realmente puedas mantener.</p>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4">Lo Que Dicen Nuestros Pacientes</p>
            <div className="flex justify-center gap-1 mb-10">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
            </div>
            <div className="grid grid-cols-1 gap-12">
              {[
                "Aprendí a organizar mi alimentación sin sentir restricciones extremas.",
                "Por primera vez sentí que el plan fue diseñado para mí.",
                "El acompañamiento me ayudó a mantener hábitos que antes abandonaba.",
                "Me siento mejor física y emocionalmente gracias al proceso."
              ].map((t, i) => (
                <div key={i} className="relative">
                  <span className="text-stone-100 text-[100px] font-serif absolute -top-12 left-0 -z-10 leading-none select-none">"</span>
                  <p className="text-2xl md:text-3xl font-serif text-stone-800 italic leading-relaxed">
                    {t}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-20 bg-stone-50 border-y border-stone-200">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4 leading-tight">
              Preguntas Frecuentes Sobre Nutrición en Turrialba
            </h2>
          </motion.div>
          <div className="space-y-10">
            {[
              { q: "¿Los planes nutricionales son personalizados?", a: "Sí. Cada paciente recibe recomendaciones adaptadas a sus objetivos." },
              { q: "¿La consulta incluye seguimiento?", a: "Sí. El seguimiento es parte fundamental del proceso." },
              { q: "¿Puedo combinar nutrición con tratamientos estéticos?", a: "Sí. Muchos pacientes integran nutrición y bienestar dentro de un enfoque integral." },
              { q: "¿Atienden personas de Cartago y zonas cercanas?", a: "Sí. Recibimos pacientes de Turrialba y comunidades cercanas." },
              { q: "¿Qué objetivos puede apoyar una nutricionista?", a: "Hábitos saludables, bienestar integral, organización alimenticia y objetivos de composición corporal." }
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
