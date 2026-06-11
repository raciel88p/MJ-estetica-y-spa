import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Quote,
  Zap,
  Target,
  ShieldCheck,
  UserCheck,
  Award,
  Clock,
  MapPin,
  Star,
  AlertCircle
} from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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

export function RejuvenecimientoLaserContent({ waLink }: { waLink: string }) {
  return (
    <div className="bg-white">
      {/* ── SECCIÓN: INTRO (PAS) ──────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              ¿Buscas un tratamiento de rejuvenecimiento facial con láser en Turrialba?
            </h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto text-left md:text-center">
              <p>
                Si has comenzado a notar líneas de expresión, arrugas, manchas solares o pérdida de firmeza en tu piel, no estás sola. Con el paso de los años, factores como el sol, el estrés, la contaminación y la disminución natural del colágeno provocan cambios visibles en nuestro rostro.
              </p>
              <p>
                La buena noticia es que hoy puedes acceder a tratamientos de <strong>rejuvenecimiento facial con láser en Turrialba</strong>, diseñados para ayudarte a recuperar una apariencia más fresca, saludable y juvenil sin necesidad de cirugía.
              </p>
              <p className="text-primary font-serif text-2xl italic mt-8">
                ¿Tu piel refleja menos juventud de la que realmente sientes?
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 border-l-4 border-primary shadow-sm">
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-wider">Quizás has intentado:</h3>
              <ul className="space-y-4 text-stone-600 font-medium">
                <li className="flex items-center gap-3">❌ <span className="line-through opacity-70">Cremas antiedad</span></li>
                <li className="flex items-center gap-3">❌ <span className="line-through opacity-70">Sérums costosos</span></li>
                <li className="flex items-center gap-3">❌ <span className="line-through opacity-70">Tratamientos caseros</span></li>
                <li className="flex items-center gap-3">❌ <span className="line-through opacity-70">Maquillaje para disimular</span></li>
              </ul>
              <p className="mt-6 text-stone-400 text-sm italic">Pero los resultados suelen ser temporales o poco visibles.</p>
            </div>
            <div className="space-y-6">
              <p className="text-stone-700 leading-relaxed">
                La realidad es que el envejecimiento ocurre en las <strong>capas profundas de la piel</strong>, donde muchos productos no logran actuar.
              </p>
              <p className="text-stone-900 font-bold leading-relaxed">
                Por eso cada vez más personas buscan tratamientos de láser para rejuvenecimiento facial en Turrialba que ayuden a estimular la producción natural de colágeno y mejorar la calidad de la piel desde el interior.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: TRATAMIENTO ─────────────────────── */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
                Tratamiento de Rejuvenecimiento Facial con Láser en Turrialba
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                En MJ Estética y Wellness Center entendemos que cada piel es diferente. Por eso realizamos una valoración personalizada para diseñar un protocolo adaptado a tus necesidades y objetivos.
              </p>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-wider">Nuestro tratamiento puede ayudar a mejorar:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Arrugas finas",
                  "Líneas de expresión",
                  "Manchas solares",
                  "Poros dilatados",
                  "Textura irregular",
                  "Flacidez leve",
                  "Luminosidad",
                  "Signos de edad"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-stone-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <div className="aspect-[4/5] bg-stone-100 rounded-sm overflow-hidden border border-stone-200">
                 <img src="/images/faciales-bg.webp" alt="Rejuvenecimiento Facial" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary p-8 shadow-xl hidden sm:block">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: BENEFICIOS ────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-stone-900">Beneficios del Rejuvenecimiento Láser Facial</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Estimula el colágeno", d: "El colágeno es una proteína fundamental para mantener la firmeza y elasticidad de la piel." },
              { t: "Mejora la textura", d: "Ayuda a conseguir una apariencia más suave y uniforme en todo el rostro." },
              { t: "Reduce líneas finas", d: "Favorece una piel con aspecto más joven, descansado y revitalizado." },
              { t: "Disminuye manchas", d: "Ideal para quienes desean un tono más homogéneo y libre de daños solares." },
              { t: "Resultados naturales", d: "Sin alterar tus facciones ni generar cambios artificiales. Te verás como tú, pero más joven." },
              { t: "Proceso no invasivo", d: "Recupera la luminosidad de tu piel sin necesidad de pasar por el quirófano." }
            ].map((step, i) => (
              <div key={i} className="bg-white p-8 border border-stone-200 shadow-sm group hover:border-primary transition-colors">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                   <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-serif font-bold text-stone-900 mb-4 leading-tight">{step.t}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: CANDIDATOS ────────────────────────── */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
             <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">¿Quién Es Candidato para el Rejuvenecimiento Láser?</h2>
                <p className="text-stone-600 mb-8">Este tratamiento es ideal para hombres y mujeres que desean:</p>
                <div className="space-y-4">
                  {[
                    "Mejorar la apariencia de su piel",
                    "Prevenir el envejecimiento prematuro",
                    "Reducir líneas finas y arrugas",
                    "Mejorar manchas solares",
                    "Recuperar firmeza y luminosidad",
                    "Verse más jóvenes sin procedimientos invasivos"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-stone-800 font-bold text-sm">{item}</span>
                    </div>
                  ))}
                </div>
             </div>
             <div className="flex-1 bg-stone-900 p-10 text-white relative overflow-hidden">
                <AlertCircle className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-serif font-bold mb-6">Lo Que Nadie Te Dice Sobre el Envejecimiento Facial</h3>
                <p className="text-stone-300 leading-relaxed mb-6">La mayoría de las personas esperan demasiado tiempo para actuar. Mientras más temprano comiences a estimular el colágeno natural de tu piel, mayores posibilidades tendrás de mantener una apariencia saludable durante más años.</p>
                <p className="text-primary font-bold italic font-serif text-lg">No se trata únicamente de estética. Se trata de sentir confianza cada vez que te miras al espejo.</p>
             </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: AUTORIDAD & UBICACIÓN ────────────────── */}
      <section className="py-24 bg-stone-50 border-y border-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">¿Por Qué Elegirnos para tu Rejuvenecimiento Facial en Turrialba?</h2>
            <p className="text-stone-600 max-w-2xl mx-auto italic">Sabemos que cuando buscas un centro de estética en Turrialba quieres sentir confianza y seguridad.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { icon: <UserCheck className="w-6 h-6" />, t: "Atención personalizada" },
              { icon: <Zap className="w-6 h-6" />, t: "Tecnología especializada" },
              { icon: <ShieldCheck className="w-6 h-6" />, t: "Protocolos adaptados" },
              { icon: <Award className="w-6 h-6" />, t: "Instalaciones cómodas y seguras" },
              { icon: <Star className="w-6 h-6" />, t: "Experiencia en estética avanzada" },
              { icon: <MapPin className="w-6 h-6" />, t: "Ubicación céntrica en Turrialba" }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-stone-200 bg-white flex flex-col items-center gap-4 text-center group hover:border-primary transition-all">
                <div className="text-primary group-hover:scale-110 transition-transform">{item.icon}</div>
                <span className="text-stone-900 font-bold text-sm leading-relaxed">{item.t}</span>
              </div>
            ))}
          </div>

          <div className="bg-white p-10 border border-stone-200 shadow-sm">
             <h3 className="text-xl font-serif font-bold text-stone-900 mb-8 text-center uppercase tracking-widest">Rejuvenecimiento Facial en Turrialba Cerca de Ti</h3>
             <div className="flex flex-wrap justify-center gap-3">
               {[
                 "Turrialba Centro", "La Suiza", "Santa Cruz", "Pavones", "Tres Equis",
                 "Juan Viñas", "Tucurrique", "Pejibaye", "Cartago", "Paraíso", "Siquirres"
               ].map((loc, i) => (
                 <span key={i} className="px-4 py-2 bg-stone-100 text-stone-600 text-[10px] font-bold uppercase tracking-wider rounded-sm border border-stone-200">
                    📍 {loc}
                 </span>
               ))}
             </div>
             <p className="text-center text-stone-400 text-sm mt-8 italic">Y zonas cercanas que buscan tratamientos faciales avanzados en la región.</p>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: LEAD MAGNET ─────────────────────── */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-white/60 text-xs font-bold tracking-[0.4em] uppercase mb-4">🎁 RECURSO GRATUITO EXCLUSIVO</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 italic">Guía Gratuita para Seguidores de Instagram</h2>
              <p className="text-xl md:text-2xl font-serif mb-10 italic">"Cómo Potenciar los Resultados de tus Tratamientos Estéticos y Bienestar"</p>

              <div className="max-w-xl mx-auto bg-white p-12 text-stone-900 shadow-2xl">
                 <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-4">💌 Comenta la palabra:</p>
                 <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-12 underline decoration-stone-200 uppercase tracking-widest">“REJUVENECIMIENTO”</p>
                 <p className="text-sm text-stone-500 leading-relaxed mb-8 font-medium italic">Descubre recomendaciones prácticas para:</p>

                 <div className="grid grid-cols-1 gap-y-3 mb-10 text-left max-w-sm mx-auto">
                   {[
                     "Mejorar la salud de tu piel",
                     "Mantener resultados por más tiempo",
                     "Potenciar tus tratamientos faciales",
                     "Hábitos que favorecen una piel sana"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3">
                       <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                       <span className="text-sm font-bold text-stone-700">{item}</span>
                     </div>
                   ))}
                 </div>

                 <a
                    href={waLink}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-stone-900 text-white py-5 font-bold tracking-widest uppercase hover:bg-primary transition-colors text-xs"
                 >
                    <MessageCircle className="w-5 h-5" />
                    SOLICITAR GUÍA POR WHATSAPP
                 </a>
              </div>
           </motion.div>
        </div>
        <Sparkles className="absolute -bottom-20 -right-20 w-64 h-64 text-white/5 rotate-12" />
      </section>

      {/* ── SECCIÓN: FINAL CTA ───────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              Agenda Tu Valoración para Rejuvenecimiento Facial con Láser en Turrialba
            </h2>
            <p className="text-stone-600 text-lg mb-12 max-w-2xl mx-auto italic">
              Cada piel cuenta una historia diferente. Por eso realizamos una valoración personalizada para analizar tu caso y recomendar el tratamiento más adecuado.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
               <div className="bg-stone-50 p-8 border border-stone-200 text-left">
                  <h3 className="text-lg font-serif font-bold text-stone-900 mb-4">Durante tu valoración:</h3>
                  <ul className="space-y-3">
                    {["Resolver tus dudas", "Conocer el procedimiento", "Recomendaciones profesionales", "Plan personalizado"].map((u, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                        <CheckCircle2 className="w-4 h-4 text-primary" /> {u}
                      </li>
                    ))}
                  </ul>
               </div>
               <div className="flex flex-col gap-4 justify-center">
                  <a
                    href={waLink}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-primary text-white px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all text-xs"
                  >
                    <MessageCircle className="w-5 h-5" />
                    RESERVA TU CITA HOY
                  </a>
                  <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">MJ Estética y Wellness Center</p>
               </div>
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-stone-400 text-[9px] font-bold uppercase tracking-[0.2em]">
               <span>Rejuvenecimiento facial en Turrialba</span>
               <span>Láser para arrugas</span>
               <span>Tratamiento para manchas</span>
               <span>Estimulación de colágeno</span>
               <span>Medicina estética facial</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
