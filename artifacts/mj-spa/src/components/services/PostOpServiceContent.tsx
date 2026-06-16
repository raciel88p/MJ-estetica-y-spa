import { motion } from "framer-motion";
import {
  CheckCircle2,
  MessageCircle,
  AlertCircle,
  Target,
  Zap,
  ShieldCheck,
  Clock,
  Star,
  Users,
  Search,
  Check,
  ArrowRight
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as any } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

export function PostOpServiceContent({ waLink }: { waLink: string }) {
  return (
    <div className="bg-white">
      {/* ── SECCIÓN 1: SÍNTOMAS (Debajo del profesional) ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-primary" />
              <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Síntomas a tratar</p>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight mb-8">
              ¿Notas durezas, inflamación o <span className="font-light italic text-primary">molestias tras tu cirugía?</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-12">
              Es completamente normal que tras una intervención aparezcan hematomas, edema o fibrosis. Nuestro objetivo es tratarlos a tiempo para asegurar que el resultado final sea el que siempre soñaste.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <AlertCircle className="w-8 h-8 text-primary" />,
                title: "Fibrosis Quirúrgica",
                desc: "Tratamos las acumulaciones de tejido cicatricial que generan durezas e irregularidades bajo la piel."
              },
              {
                icon: <Clock className="w-8 h-8 text-primary" />,
                title: "Edema e Inflamación",
                desc: "Aceleramos la eliminación de líquidos acumulados para reducir el volumen y la presión."
              },
              {
                icon: <Search className="w-8 h-8 text-primary" />,
                title: "Hematomas",
                desc: "Mejoramos la circulación local para que los moretones desaparezcan de forma más rápida."
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="p-8 border border-stone-100 bg-stone-50 rounded-sm hover:shadow-sm transition-all">
                <div className="mb-6 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 2: BENEFICIOS ── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">¿Por qué es vital?</p>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
                El post operatorio es el <span className="font-light italic text-primary">50% del éxito de tu cirugía</span>
              </h2>
              <ul className="space-y-6">
                {[
                  "Resultados más uniformes y sin irregularidades",
                  "Reducción significativa del dolor y la tensión",
                  "Mejor cicatrización y calidad de la piel",
                  "Retorno más rápido a tus actividades diarias",
                  "Prevención de complicaciones a largo plazo",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-stone-700 font-medium">{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-stone-900 transition-colors group"
                >
                  <MessageCircle className="w-4 h-4" />
                  CONSULTAR DISPONIBILIDAD
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative aspect-square"
            >
              <img
                src="/images/masajes-post-operatorios-bg.webp"
                alt="Tratamiento Post Operatorio"
                className="w-full h-full object-cover rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-8 shadow-xl border border-stone-100 max-w-xs">
                <p className="text-primary font-bold text-4xl mb-2">98%</p>
                <p className="text-stone-500 text-xs font-bold tracking-widest uppercase">Satisfacción en recuperación guiada</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 3: PROCESO ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center mb-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Nuestro Protocolo</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900">4 Pasos hacia tu mejor versión</h2>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-stone-100 border border-stone-100">
            {[
              { num: "01", title: "Valoración", desc: "Analizamos tu tipo de cirugía y el estado actual de los tejidos." },
              { num: "02", title: "Drenaje", desc: "Activamos el sistema linfático para evacuar líquidos y toxinas." },
              { num: "03", title: "Desfibrosis", desc: "Trabajamos manualmente las zonas de dureza para ablandarlas." },
              { num: "04", title: "Seguimiento", desc: "Monitoreamos tu evolución hasta que el tejido esté 100% sano." },
            ].map((step, i) => (
              <div key={i} className="bg-white p-10 group hover:bg-stone-50 transition-colors">
                <span className="text-primary/30 text-5xl font-serif font-bold block mb-6 group-hover:text-primary/50 transition-colors">{step.num}</span>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">{step.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 4: LEAD MAGNET (GUÍA GRATUITA) - LIGHT THEME ── */}
      <section className="py-20 bg-white border-y border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-stone-50 border border-stone-200 rounded-sm p-10 md:p-16 text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8">
                <Star className="w-4 h-4 fill-primary" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Recurso Exclusivo</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6 max-w-2xl mx-auto leading-tight">
                Descarga nuestra <span className="text-primary italic font-light">Guía de Cuidados</span> Post Operatorios en Casa
              </h2>
              <p className="text-stone-500 mb-10 max-w-lg mx-auto leading-relaxed">
                Aprende qué hacer y qué evitar los primeros días para no comprometer tus resultados. Totalmente gratis.
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-stone-900 text-white px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-primary transition-colors"
              >
                SOLICITAR GUÍA POR WHATSAPP
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 5: POR QUÉ ELEGIR MJ (Debajo del pliego de información) - LIGHT THEME ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-16">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Confianza & Experiencia</p>
              <h2 className="text-4xl font-serif font-bold text-stone-900 leading-tight">
                ¿Por qué confiar en <span className="font-light italic text-primary">MJ Wellness Center?</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <ShieldCheck className="w-10 h-10 text-primary" />,
                title: "Experiencia Hospitalaria",
                desc: "Contamos con años de experiencia trabajando con cirujanos de renombre en el Hospital La Católica."
              },
              {
                icon: <Zap className="w-10 h-10 text-primary" />,
                title: "Técnicas de Vanguardia",
                desc: "Protocolos actualizados que combinan drenaje manual con aparatología de última generación."
              },
              {
                icon: <Users className="w-10 h-10 text-primary" />,
                title: "Atención 1 a 1",
                desc: "No somos una clínica de volumen. Cada paciente recibe el tiempo y la atención que su cirugía requiere."
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 6: FAQs ── */}
      <section className="py-20 bg-stone-50 border-t border-stone-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Resolviendo tus dudas</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 leading-tight">Preguntas Frecuentes</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "¿Cuándo debo iniciar mis masajes?",
                a: "Generalmente a partir de las 48-72 horas para drenaje linfático suave. Para trabajo de fibrosis, solemos iniciar a partir de la 3ª semana."
              },
              {
                q: "¿Los masajes post operatorios duelen?",
                a: "El drenaje linfático es una técnica muy suave e indolora. El trabajo de desfibrosis puede generar algo de molestia, pero siempre se adapta a tu sensibilidad."
              },
              {
                q: "¿Cuántas sesiones voy a necesitar?",
                a: "Depende de la cirugía y de cómo responda tu cuerpo. El promedio para una liposucción o abdominoplastia es de 10 a 15 sesiones."
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-white border border-stone-200 rounded-sm overflow-hidden transition-all duration-300 open:shadow-md">
                <summary className="p-6 cursor-pointer flex justify-between items-center list-none font-serif font-bold text-stone-900 group-hover:text-primary">
                  {faq.q}
                  <span className="text-primary transition-transform duration-300 group-open:rotate-180">↓</span>
                </summary>
                <div className="p-6 pt-0 text-stone-500 text-sm leading-relaxed border-t border-stone-50">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 7: CTA FINAL ── */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-white/60 text-[10px] font-bold tracking-[0.4em] uppercase mb-6">Tu recuperación empieza aquí</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">
              ¿Lista para asegurar los <span className="italic font-light opacity-80">mejores resultados de tu cirugía?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-stone-100 transition-all flex items-center justify-center gap-3 shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                AGENDAR VALORACIÓN
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-white/30 text-white px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-white/5 transition-all flex items-center justify-center gap-3"
              >
                CONSULTA POR WHATSAPP
              </a>
            </div>
            <p className="mt-8 text-white/40 text-[10px] font-bold tracking-widest uppercase">
              Cupos limitados por semana para garantizar atención personalizada
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
