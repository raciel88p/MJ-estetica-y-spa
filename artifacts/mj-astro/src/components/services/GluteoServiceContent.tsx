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
  Info,
  ArrowRight
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight italic">
              Realza tu figura con <span className="text-primary font-light">resultados naturales</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-10 italic">
              En MJ Estética & Wellness Center, nuestro protocolo de levantamiento de glúteo está diseñado para quienes buscan firmeza, elevación y definición sin recurrir a cirugías. Combinamos tecnología de vanguardia con un enfoque personalizado para potenciar tu belleza natural.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Atención individualizada",
                "Protocolos de triple tecnología",
                "Sin tiempo de inactividad",
                "Resultados progresivos y visibles",
                "Enfoque en armonía corporal"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-stone-700 font-medium italic">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LEAD MAGNET: GUÍA GRATUITA ────────────────── */}
      <section className="py-20 bg-stone-900 text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-4 py-2 rounded-full mb-6">
                <Star className="w-4 h-4 fill-primary" />
                <span className="text-xs font-bold tracking-widest uppercase">Recurso Exclusivo</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 italic">🎁 GUÍA GRATUITA</h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed italic">
                Comenta la palabra <span className="text-primary font-bold">“Gluteo”</span> en nuestro Instagram y recibe GRATIS nuestra guía:
              </p>
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm mb-8">
                <h3 className="text-xl font-serif font-bold text-primary mb-6 italic">“Cómo mantener tus glúteos firmes y elevados por más tiempo”</h3>
                <p className="text-white/60 text-sm mb-4 uppercase tracking-widest font-bold">Aprenderás:</p>
                <ul className="space-y-3">
                  {[
                    "Hábitos diarios para potenciar el lifting",
                    "Ejercicios clave para complementar tus sesiones",
                    "Tips de nutrición para la firmeza de la piel",
                    "Cómo prolongar los resultados del protocolo",
                    "Cuidados esenciales post-tratamiento"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-6">
                <a
                  href="https://www.instagram.com/mj_fisioestetica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-bold uppercase tracking-widest text-xs"
                >
                  <Instagram className="w-5 h-5" />
                  Ir a Instagram
                </a>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-8 md:p-12 text-stone-900">
              <h3 className="text-2xl font-serif font-bold mb-8 text-center uppercase tracking-tight italic">👉 Inicia tu transformación</h3>
              <div className="space-y-6">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-stone-50 border border-stone-100 hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-primary tracking-widest uppercase mb-1 italic">WhatsApp Business</p>
                    <p className="font-bold text-lg group-hover:text-primary transition-colors italic">📲 Agenda tu valoración</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-5 bg-stone-50 border border-stone-100">
                  <div className="w-12 h-12 bg-stone-200 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-stone-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-stone-400 tracking-widest uppercase mb-1 italic">Ubicación</p>
                    <p className="font-bold text-lg italic">📍 Atención en Turrialba</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 bg-stone-50 border border-stone-100">
                  <div className="w-12 h-12 bg-stone-200 flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-stone-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-stone-400 tracking-widest uppercase mb-1 italic">Citas</p>
                    <p className="font-bold text-lg italic">🗓️ Plazas limitadas</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
      </section>

      {/* ── EDUCATIONAL: ¿CÓMO FUNCIONA? ────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-8 text-center italic">Tecnología Triple Acción</h2>
            <div className="bg-stone-50 p-10 border border-stone-100 mb-12">
              <p className="text-stone-700 text-lg leading-relaxed text-center italic">
                Nuestro protocolo estrella combina tres tecnologías potentes que actúan en sinergia para elevar, tonificar y mejorar la calidad de la piel en una sola sesión.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { t: "Radiofrecuencia", d: "Estimula colágeno y reafirma la piel.", i: <Zap className="w-8 h-8 mb-4 text-primary" /> },
                { t: "Electroestimulación", d: "Tonifica y define el músculo glúteo.", i: <Star className="w-8 h-8 mb-4 text-primary" /> },
                { t: "Carboxiterapia", d: "Mejora circulación y oxigenación.", i: <Sparkles className="w-8 h-8 mb-4 text-primary" /> }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white border border-stone-100 hover:shadow-xl transition-all text-center group hover:border-primary/30">
                  <div className="flex justify-center">{item.i}</div>
                  <h4 className="text-lg font-serif font-bold text-stone-900 mb-3 italic">{item.t}</h4>
                  <p className="text-stone-500 text-sm leading-relaxed italic">{item.d}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-stone-200">
               <img src="/images/levantamiento-gluteo-bg.webp" alt="Levantamiento de Glúteo MJ" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>
            <div>
              <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 italic">Objetivos del tratamiento</p>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6 leading-tight italic">
                ¿Qué lograremos juntas?
              </h3>
              <ul className="grid grid-cols-1 gap-3">
                {[
                  "Elevación del contorno glúteo",
                  "Aumento de la firmeza cutánea",
                  "Definición de la masa muscular",
                  "Mejora de la textura (piel de naranja)",
                  "Resultados armónicos y naturales",
                  "Mayor confianza con tu figura"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-600 font-medium italic">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-stone-500 italic text-sm leading-relaxed border-l-2 border-primary/20 pl-6">
                A diferencia de los implantes, este método respeta tu anatomía natural y potencia tu propio cuerpo de forma progresiva.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── INVERSIÓN Y PAQUETES ────────────────────────── */}
      <section className="py-20 md:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mb-16 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-primary" />
              <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase italic">Inversión y Paquetes</p>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight italic">
              Elige tu plan de <span className="font-light text-primary">transformación</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {service.items.map((item, i) => (
              <motion.div
                key={i} variants={fadeUp}
                className="relative bg-white border border-stone-200 p-8 flex flex-col group hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-6">
                   <span className="text-primary text-[10px] font-bold tracking-widest uppercase mb-2 block italic">Opción {i+1}</span>
                   <h3 className="text-xl font-serif font-bold text-stone-900 leading-tight min-h-[3rem] flex items-center italic">{item.title}</h3>
                </div>
                <div className="flex-1">
                   <p className="text-stone-500 text-sm leading-relaxed mb-8 italic">{item.description}</p>
                </div>
                <div className="mt-auto pt-6 border-t border-stone-200/60">
                   <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-stone-400 text-[10px] uppercase tracking-widest mb-1 italic">Inversión</p>
                        <p className="text-2xl font-serif font-bold text-primary italic">{item.price}</p>
                      </div>
                      {item.duration && (
                        <div className="text-right">
                          <p className="text-stone-400 text-[10px] uppercase tracking-widest mb-1 italic">Duración</p>
                          <p className="text-stone-900 font-bold text-sm italic">{item.duration}</p>
                        </div>
                      )}
                   </div>
                   <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex justify-center items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-white bg-primary py-3.5 hover:bg-stone-900 transition-colors italic"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    LO QUIERO
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── METODOLOGÍA: QUÉ INCLUYE ────────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 italic">Metodología MJ</p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 italic">Qué incluye tu sesión</h2>
            <p className="text-white/70 italic text-lg">Tu sesión incluye:</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { s: "Paso 1", t: "Evaluación postural y cutánea", d: "Analizamos tu anatomía glútea y el grado de flacidez o falta de tono." },
              { s: "Paso 2", t: "Diseño del protocolo", d: "Personalizamos la intensidad de la triple tecnología según tus objetivos." },
              { s: "Paso 3", t: "Aplicación del tratamiento", d: "La sesión combina aparatología avanzada en un ambiente relajante." },
              { s: "Paso 4", t: "Recomendaciones post-sesión", d: "Te guiamos con ejercicios y hábitos para maximizar la elevación." }
            ].map((step, i) => (
              <div key={i} className="relative bg-white/5 p-8 border border-white/10 hover:border-primary/40 transition-colors group">
                <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block italic">{step.s}</span>
                <h4 className="text-lg font-serif font-bold text-white mb-4 italic leading-tight">{step.t}</h4>
                <p className="text-white/50 text-sm leading-relaxed italic">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFICIOS RESUMEN ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6 italic">¿Por qué elegirnos?</h2>
            <p className="text-stone-500 italic max-w-2xl mx-auto">
              Nuestros resultados hablan por sí solos. En MJ Estética & Wellness Center priorizamos tu seguridad y satisfacción.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {service.benefits.map((b, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.05}}}}
                className="flex items-center gap-4 p-4 border-b border-stone-100 group hover:bg-stone-50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="text-stone-700 font-medium italic text-sm">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INFORMACIÓN IMPORTANTE ────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 text-center">
              <h2 className="text-3xl font-serif font-bold text-stone-900 italic">Información importante</h2>
           </motion.div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200">
              {[
                { l: "Duración aproximada", v: "45 a 75 minutos", i: <Clock className="w-5 h-5 text-primary" /> },
                { l: "Frecuencia sugerida", v: "2 sesiones por semana", i: <Calendar className="w-5 h-5 text-primary" /> },
                { l: "Ciclo recomendado", v: "10 sesiones iniciales", i: <ShieldCheck className="w-5 h-5 text-primary" /> },
                { l: "Recuperación", v: "Inmediata (vida normal)", i: <Zap className="w-5 h-5 text-primary" /> }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 flex flex-col items-center text-center">
                   <div className="mb-4">{item.i}</div>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2 italic">{item.l}</p>
                   <p className="text-stone-900 font-serif font-bold italic">{item.v}</p>
                </div>
              ))}
           </div>
           <p className="mt-12 text-center text-stone-400 text-xs italic">
             * Los resultados y la cantidad de sesiones varían según cada individuo.
           </p>
        </div>
      </section>

      {/* ── FAQ SECTION ───────────────────────────────── */}
      {service.faq && service.faq.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 sm:px-10">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="mb-12 text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-primary" />
                <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase italic">Preguntas Frecuentes</p>
                <div className="w-8 h-0.5 bg-primary" />
              </div>
              <h2 className="text-4xl font-serif font-bold text-stone-900 italic">
                Dudas comunes sobre el <br />
                <span className="font-light italic text-primary">levantamiento de glúteo</span>
              </h2>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="border-t border-stone-200"
            >
              {service.faq.map((item, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <FaqItem question={item.question} answer={item.answer} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ── FINAL CTA ─────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-8">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-8 italic">Resultados que te harán sentir radiante</h2>
            <p className="text-stone-600 text-lg mb-12 leading-relaxed italic max-w-2xl mx-auto">
              No esperes más para lucir la figura que deseas. Agenda tu valoración gratuita y descubre el poder de nuestro protocolo personalizado.
            </p>

            <div className="bg-primary p-12 text-white relative overflow-hidden group">
               <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8 italic">¿Lista para elevar tu confianza?</h3>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-all text-xs italic"
                  >
                    <MessageCircle className="w-5 h-5" />
                    RESERVAR MI SESIÓN AHORA
                  </a>
               </div>
               <Sparkles className="absolute -right-10 -top-10 w-48 h-48 text-white/10 rotate-12 group-hover:rotate-45 transition-transform duration-1000" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
