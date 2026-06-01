import { motion } from "framer-motion";
import {
  MessageCircle,
  CheckCircle2,
  Sparkles,
  Zap,
  Check,
  ShieldCheck,
  MapPin,
  ChevronDown,
  Quote,
  Clock,
  Heart
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function AuriculoterapiaContent({
  waLink
}: {
  waLink: string;
}) {
  return (
    <div className="bg-white">
      {/* ── SECCIÓN: INTRODUCCIÓN ────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-8 mx-auto">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <p className="text-stone-800 text-xl md:text-2xl font-serif leading-relaxed italic max-w-3xl mx-auto mb-12">
              "En MJ Fisio Estética & Wellness Center ayudamos a nuestros pacientes a reducir el estrés, controlar la ansiedad y complementar procesos de pérdida de peso mediante sesiones profesionales de auriculoterapia en Turrialba."
            </p>
            <div className="max-w-2xl mx-auto space-y-6 text-stone-600 text-lg">
              <p>
                Esta terapia natural estimula puntos específicos de la oreja para ayudar al cuerpo a recuperar su balance físico y emocional de forma segura y relajante.
              </p>
              <p className="font-bold text-stone-900">
                Agenda tu cita hoy mismo por WhatsApp y comienza tu proceso de bienestar.
              </p>
            </div>
            <div className="mt-12">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar Mi Cita
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: ¿QUÉ ES? ─────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 uppercase tracking-tighter">¿Qué es la auriculoterapia?</h2>
              <p className="text-stone-600 leading-relaxed mb-8 text-lg">
                La auriculoterapia es una técnica terapéutica que trabaja puntos reflejos en la oreja conectados con distintas áreas del cuerpo. Es utilizada para:
              </p>
              <ul className="grid grid-cols-1 gap-4">
                {[
                  "Reducir ansiedad y estrés",
                  "Controlar apetito y antojos",
                  "Mejorar descanso y sueño",
                  "Complementar tratamientos reductivos",
                  "Ayudar en procesos emocionales",
                  "Mejorar bienestar general"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-stone-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-white p-10 border border-stone-100 rounded-sm shadow-sm"
            >
              <Quote className="w-12 h-12 text-primary/10 mb-6" />
              <p className="text-xl font-serif italic text-stone-800 leading-relaxed">
                "En nuestro centro de estética en Turrialba realizamos sesiones personalizadas según las necesidades de cada paciente."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: BENEFICIOS ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Efectos Reales</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter">Beneficios de la auriculoterapia en Turrialba</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Controla la ansiedad y el estrés",
                desc: "Ideal para personas con tensión laboral, agotamiento mental o ansiedad constante."
              },
              {
                title: "Ayuda al control de peso",
                desc: "Puede disminuir antojos y apoyar tratamientos reductivos y hábitos saludables."
              },
              {
                title: "Mejora el descanso",
                desc: "Muchos pacientes experimentan una sensación profunda de relajación y mejor calidad de sueño."
              },
              {
                title: "Terapia natural y no invasiva",
                desc: "Sin procedimientos dolorosos ni tiempos de recuperación."
              }
            ].map((item, i) => (
              <motion.div
                key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-stone-50 p-10 border border-stone-100 rounded-sm hover:bg-white hover:shadow-md transition-all group"
              >
                <Zap className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-serif font-bold mb-4 text-stone-900 uppercase tracking-tight">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: PARA QUIÉN? ─────────────────── */}
      <section className="py-24 bg-[#071e2e] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 uppercase tracking-tight text-white">¿Para quién se recomienda?</h2>
             <p className="text-stone-400 mb-12 text-lg">La auriculoterapia es ideal para personas en Turrialba que buscan:</p>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left max-w-4xl mx-auto">
               {[
                 "Manejo de ansiedad",
                 "Reducción de estrés",
                 "Apoyo para bajar de peso",
                 "Mejorar hábitos alimenticios",
                 "Bienestar emocional",
                 "Terapias complementarias naturales"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 bg-white/5 p-4 border border-white/10 rounded-sm">
                   <Check className="w-4 h-4 text-primary shrink-0" />
                   <span className="text-stone-200 text-xs font-bold uppercase tracking-wide">{item}</span>
                 </div>
               ))}
             </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: PASO A PASO ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">El Proceso</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter">¿Cómo es una sesión de auriculoterapia?</h2>
          </motion.div>

          <div className="space-y-8 max-w-2xl mx-auto">
            {[
              "Evaluamos tus objetivos y necesidades.",
              "Identificamos los puntos auriculares adecuados.",
              "Aplicamos estímulos terapéuticos específicos.",
              "Finalizas con una sensación de relajación y bienestar."
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-6 group">
                <span className="w-12 h-12 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-primary font-bold text-lg group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  {i + 1}
                </span>
                <p className="text-stone-700 text-lg font-medium">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-16 text-center text-stone-500 italic">
            Las sesiones son rápidas, cómodas y personalizadas.
          </p>
        </div>
      </section>

      {/* ── SECCIÓN: POR QUÉ ELEGIRNOS ─────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter">¿Por qué elegirnos en Turrialba?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Atención personalizada",
                desc: "Cada paciente recibe una evaluación individual."
              },
              {
                title: "Ambiente relajante y profesional",
                desc: "Creamos una experiencia enfocada en bienestar físico y emocional."
              },
              {
                title: "Experiencia integral",
                desc: "Combinamos técnicas estéticas y terapias complementarias para potenciar resultados."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 border border-stone-100 shadow-sm rounded-sm">
                <ShieldCheck className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-xl font-serif font-bold mb-4 text-stone-900 uppercase tracking-tight">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: FAQ ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Resolviendo dudas</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 leading-tight uppercase tracking-tighter">Preguntas frecuentes</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: "¿La auriculoterapia duele?", a: "No. La mayoría de pacientes sienten únicamente una ligera presión o estímulo suave." },
              { q: "¿Cuántas sesiones necesito?", a: "Depende de tus objetivos y condición. Muchas personas notan cambios desde las primeras sesiones." },
              { q: "¿La auriculoterapia ayuda para bajar de peso?", a: "Sí, puede ayudar a controlar ansiedad y apetito como complemento de hábitos saludables." },
              { q: "¿Tiene efectos secundarios?", a: "Es una terapia natural y segura cuando es aplicada por profesionales capacitados." }
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 uppercase tracking-tighter text-white">Reserva tu sesión de auriculoterapia en Turrialba</h2>
            <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Si buscas una alternativa natural para reducir estrés, ansiedad o complementar tu proceso de bienestar, en MJ Fisio Estética y Spa estamos listos para ayudarte.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-primary px-12 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-all shadow-2xl"
            >
              <MessageCircle className="w-5 h-5" />
              Escríbenos hoy mismo
            </a>
            <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-60">
               <span className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase"><MapPin className="w-3 h-3" /> Turrialba, Costa Rica</span>
               <span className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase"><Clock className="w-3 h-3" /> Horarios Flexibles</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
