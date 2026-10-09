import { motion } from "framer-motion";
import {
  MessageCircle,
  Star,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Sparkles,
  Check,
  Clock,
  MapPin,
  ChevronDown,
  Quote,
  Info,
  Leaf
} from "lucide-react";

import ginkgoEn from "../../i18n/locales/en/microagujas-ginkgo.json";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as any } },
};

export function MicroagujasGinkgoContent({
  waLink,
  lang = "es"
}: {
  waLink: string;
  lang?: "es" | "en";
}) {
  const isEn = lang === "en";

  const heroBullets = isEn ? ginkgoEn.hero.bullets : [
    "Protocolos personalizados",
    "Evaluación profesional de piel",
    "Atención individualizada",
    "Ambiente seguro y wellness premium",
    "Enfoque avanzado de skincare facial"
  ];

  const whatIsApproach = isEn ? ginkgoEn.whatIs.approachBullets : [
    "Resultados progresivos", "Glow facial natural", "Complementa rutinas skincare", "Enfoque personalizado según tu piel"
  ];

  const improvementsItems = isEn ? ginkgoEn.improvements.items : [
    "Apariencia de textura facial",
    "Glow y luminosidad natural",
    "Piel con apariencia opaca",
    "Sensación de piel cansada",
    "Bienestar facial integral",
    "Revitalización progresiva",
    "Apariencia más fresca y uniforme",
    "Complemento para skincare avanzado"
  ];

  const realBenefitsList = isEn ? ginkgoEn.benefits.items : [
    "Glow facial natural",
    "Apariencia de piel revitalizada",
    "Textura visualmente más uniforme",
    "Sensación de hidratación y frescura",
    "Experiencia premium de bienestar facial",
    "Protocolos adaptados a cada tipo de piel",
    "Complemento ideal para rutinas skincare",
    "Atención personalizada y seguimiento profesional"
  ];

  const processSteps = isEn ? ginkgoEn.process.steps : [
    { step: "01", title: "Evaluación personalizada", desc: "Analizamos tu piel, objetivos y necesidades para definir el protocolo ideal." },
    { step: "02", title: "Limpieza y preparación", desc: "Se prepara la piel para garantizar una experiencia cómoda y segura." },
    { step: "03", title: "Aplicación", desc: "Se realiza el procedimiento acompañado de activos orientados a revitalización y bienestar facial." },
    { step: "04", title: "Recomendaciones", desc: "Te indicamos cuidados posteriores, hidratación y protección solar para apoyar mejores resultados." }
  ];

  const targetAudienceItems = isEn ? ginkgoEn.targetAudience.items : [
    "Personas con piel opaca",
    "Personas que desean glow facial natural",
    "Rutinas de skincare avanzado",
    "Personas con apariencia de textura irregular",
    "Quienes buscan revitalización facial progresiva",
    "Mantenimiento facial preventivo",
    "Experiencia wellness premium"
  ];

  const testimonialsList = isEn ? ginkgoEn.testimonials.items : [
    "“Mi piel empezó a verse mucho más luminosa y fresca.”",
    "“Sentí una experiencia súper premium y personalizada.”",
    "“Me encantó que no prometen milagros, sino resultados progresivos reales.”",
    "“Mi rostro se siente más revitalizado y saludable.”"
  ];

  const faqsList = isEn ? ginkgoEn.faqs.items.map(f => ({ q: f.q, a: f.a })) : [
    { q: "¿Las microagujas con Ginkgo Biloba duelen?", a: "La sensación puede variar según cada persona, pero generalmente se describe como tolerable y el protocolo se adapta según evaluación profesional." },
    { q: "¿Ayuda con glow facial?", a: "Muchas personas buscan este tratamiento para apoyar protocolos orientados a luminosidad y revitalización facial." },
    { q: "¿Cuántas sesiones se recomiendan?", a: "Depende de cada piel y objetivos. Por eso recomendamos valoración personalizada." },
    { q: "¿Cuándo se ven resultados?", a: "Los resultados suelen ser progresivos y pueden variar según la piel y cuidados posteriores." },
    { q: "¿Tiene tiempo de recuperación?", a: "Puede existir sensibilidad temporal después del procedimiento. Se brindan recomendaciones específicas posteriores." }
  ];

  const whyUsItems = isEn ? ginkgoEn.whyUs.items : [
    "Protocolos personalizados de piel",
    "Atención individualizada",
    "Skincare avanzado",
    "Wellness facial premium",
    "Ambiente seguro y profesional",
    "Seguimiento progresivo",
    "Bienestar real"
  ];

  return (
    <div className="bg-white">
      {/* ── SECCIÓN: INTRODUCCIÓN ────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex flex-col items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <p className="text-stone-800 text-xl md:text-2xl font-serif leading-relaxed italic max-w-3xl">
                {isEn ? `"${ginkgoEn.hero.quote}"` : '"Tu piel refleja cómo te sientes… y cuando luce apagada, cansada o sin luminosidad, muchas veces no basta con una rutina básica de skincare."'}
              </p>
            </div>

            <div className="space-y-6 text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto mb-16">
              <p>
                {isEn ? ginkgoEn.hero.p1 : "En MJ Estética & Wellness Center diseñamos protocolos de Microagujas con Ginkgo Biloba enfocados en apoyar la revitalización facial, mejorar la apariencia de la textura de la piel y potenciar un glow natural mediante una experiencia premium de bienestar facial."}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left pt-8">
                {heroBullets.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-stone-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-stone-50 p-10 border border-stone-100 rounded-sm">
               <h3 className="text-xl font-serif font-bold text-stone-900 mb-8 uppercase tracking-widest">
                 {isEn ? ginkgoEn.hero.ctaTitle : "Descubre el protocolo ideal para tu piel"}
               </h3>
               <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 font-bold text-xs uppercase tracking-[0.2em] hover:bg-stone-900 transition-all">
                    <MessageCircle className="w-4 h-4" /> {isEn ? ginkgoEn.hero.ctaAssessment : "Agenda tu valoración"}
                  </a>
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-stone-200 text-stone-600 px-8 py-4 font-bold text-xs uppercase tracking-[0.2em] hover:bg-stone-50 transition-all">
                    {isEn ? ginkgoEn.hero.ctaAvailability : "Consulta disponibilidad"}
                  </a>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: ¿QUÉ SON? ─────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 uppercase tracking-tighter">
                {isEn ? ginkgoEn.whatIs.title : "¿Qué son las Microagujas con Ginkgo Biloba?"}
              </h2>
              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p>
                  {isEn ? ginkgoEn.whatIs.p1 : "El tratamiento de Microagujas con Ginkgo Biloba combina técnicas de skincare avanzado con activos especializados orientados a apoyar protocolos de revitalización facial y bienestar de la piel."}
                </p>
                <p>
                  {isEn ? ginkgoEn.whatIs.p2 : "Las microagujas ayudan a estimular la piel de forma controlada mientras se aplican activos cosméticos cuidadosamente seleccionados para complementar la apariencia de luminosidad, textura y frescura facial."}
                </p>
                <p>
                  {isEn ? ginkgoEn.whatIs.p3 : "El Ginkgo Biloba es reconocido dentro del mundo wellness y skincare por su presencia en protocolos orientados al cuidado y revitalización de la piel."}
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-white p-10 border border-stone-100 rounded-sm shadow-sm"
            >
              <p className="text-stone-900 font-bold mb-6 uppercase text-xs tracking-widest border-b border-stone-100 pb-4">
                {isEn ? ginkgoEn.whatIs.approachTitle : "Nuestro Enfoque"}
              </p>
              <ul className="space-y-4">
                {whatIsApproach.map((t, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-stone-600 font-medium">{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-stone-50">
                <p className="italic text-stone-500 text-sm">
                  {isEn ? `"${ginkgoEn.whatIs.note}"` : '"En MJ Estética & Wellness Center entendemos que cada piel es diferente, por eso cada sesión inicia con una evaluación personalizada."'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: QUÉ MEJORA ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">
              {isEn ? "Results" : "Resultados"}
            </p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter">
              {isEn ? ginkgoEn.improvements.title : "¿Qué puede ayudar a mejorar este tratamiento?"}
            </h2>
            <p className="text-stone-500 mt-4 max-w-2xl mx-auto italic">
              {isEn ? ginkgoEn.improvements.subtitle : "Las Microagujas con Ginkgo Biloba pueden integrarse en protocolos orientados a mejorar la apariencia general de la piel y potenciar el bienestar facial."}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {improvementsItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-stone-50 p-6 rounded-sm border border-stone-100">
                <Check className="w-5 h-5 text-primary shrink-0" />
                <span className="text-stone-700 text-sm font-bold uppercase tracking-tight">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-stone-400 text-sm max-w-2xl mx-auto">
            {isEn ? ginkgoEn.improvements.note : "Nuestro enfoque busca resultados naturales y progresivos, evitando promesas irreales o exageradas."}
          </p>
        </div>
      </section>

      {/* ── SECCIÓN: BENEFICIOS ─────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 uppercase tracking-tight">
              {isEn ? ginkgoEn.benefits.title : "Beneficios reales"}
            </h2>
            <p className="text-stone-400 text-lg">
              {isEn ? ginkgoEn.benefits.intro : "Nuestro enfoque no busca transformar tu rostro artificialmente, sino ayudarte a potenciar la mejor versión de tu piel."}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-16">
            {realBenefitsList.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-stone-300 font-medium italic font-serif text-lg">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center pt-12 border-t border-white/10">
             <p className="text-xl font-serif italic text-primary">
               {isEn ? `"${ginkgoEn.benefits.closing}"` : '"Porque una piel saludable no se trata de filtros… Se trata de cuidado constante, bienestar y protocolos adecuados para ti."'}
             </p>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: PASO A PASO ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">
              {isEn ? "The Experience" : "La Experiencia"}
            </p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter">
              {isEn ? ginkgoEn.process.title : "¿Cómo funciona una sesión?"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((s, i) => (
              <div key={i} className="p-10 bg-stone-50 border border-stone-100 rounded-sm relative">
                <span className="absolute top-6 right-8 text-4xl font-serif font-bold text-primary/10">{s.step}</span>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-4 uppercase tracking-tight">{s.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-stone-100 pt-12 text-center">
            {[
              { icon: <Clock className="w-5 h-5 mx-auto mb-2 text-primary" />, text: isEn ? ginkgoEn.process.duration : "60-90 min" },
              { icon: <Zap className="w-5 h-5 mx-auto mb-2 text-primary" />, text: isEn ? ginkgoEn.process.sunProtection : "Protector Solar" },
              { icon: <Info className="w-5 h-5 mx-auto mb-2 text-primary" />, text: isEn ? ginkgoEn.process.hydration : "Hidratación" },
              { icon: <Sparkles className="w-5 h-5 mx-auto mb-2 text-primary" />, text: isEn ? ginkgoEn.process.recovery : "Recuperación Prog." }
            ].map((item, i) => (
              <div key={i}>
                {item.icon}
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: PARA QUIÉN ─────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-12 md:p-20 border border-stone-100 shadow-sm">
             <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 uppercase text-center tracking-tighter">
               {isEn ? ginkgoEn.targetAudience.title : "¿Para quién se recomienda?"}
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
               {targetAudienceItems.map((t, i) => (
                 <div key={i} className="flex items-center gap-3 bg-stone-50 p-4 rounded-sm">
                   <Check className="w-4 h-4 text-primary shrink-0" />
                   <span className="text-stone-600 text-xs font-bold uppercase">{t}</span>
                 </div>
               ))}
             </div>
             <div className="space-y-6 text-stone-600 text-center italic font-serif">
                <p>{isEn ? `"${ginkgoEn.targetAudience.quote1}"` : '"En internet existen miles de consejos de skincare… Pero no todas las pieles necesitan lo mismo."'}</p>
                <p>{isEn ? ginkgoEn.targetAudience.quote2 : "En MJ Estética & Wellness Center creemos que el verdadero bienestar facial empieza entendiendo tu piel y creando un protocolo diseñado para ti."}</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: TESTIMONIOS ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter">
              {isEn ? ginkgoEn.testimonials.title : "Lo que dicen nuestras pacientes"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonialsList.map((text, i) => (
              <div key={i} className="bg-stone-50 p-8 border border-stone-100 rounded-sm italic font-serif text-stone-600">
                <Quote className="w-6 h-6 text-primary/20 mb-4" />
                <p className="text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: FAQ ─────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 leading-tight uppercase tracking-tighter">
              {isEn ? ginkgoEn.faqs.title : "Preguntas Frecuentes"}
            </h2>
          </motion.div>
          <div className="space-y-4">
            {faqsList.map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <details className="group bg-white border border-stone-100 rounded-sm overflow-hidden transition-all duration-300 open:shadow-md">
                  <summary className="p-6 cursor-pointer flex justify-between items-center list-none font-serif font-bold text-stone-900 group-hover:text-primary">
                    {item.q}
                    <span className="text-primary transition-transform duration-300 group-open:rotate-180">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="p-6 pt-0 text-stone-600 text-sm leading-relaxed border-t border-stone-50">
                    {item.a}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: POR QUÉ ELEGIRNOS ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-12 uppercase tracking-tighter">
                {isEn ? ginkgoEn.whyUs.title : "¿Por qué elegir MJ Estética & Wellness Center?"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16">
                {whyUsItems.map((t, i) => (
                  <div key={i} className="flex items-center gap-4 border-b border-stone-100 pb-4">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-stone-700 font-bold uppercase text-xs tracking-widest">{t}</span>
                  </div>
                ))}
              </div>
              <p className="text-2xl font-serif italic text-primary">
                {isEn ? `"${ginkgoEn.whyUs.closing}"` : '"Nuestro objetivo no es que tu piel se vea artificial. Nuestro objetivo es ayudarte a sentirte bien cuando te mires al espejo."'}
              </p>
           </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: FINAL CTA ─────────────────── */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-8">
              <MapPin className="w-4 h-4" />
              <span className="text-[10px] font-bold tracking-widest uppercase">
                {isEn ? ginkgoEn.finalCta.badge : "Microagujas con Ginkgo Biloba en Turrialba"}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 uppercase tracking-tighter text-white leading-tight">
              {isEn ? ginkgoEn.finalCta.title : "Descubre el glow natural de tu piel"}
            </h2>
            <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              {isEn ? ginkgoEn.finalCta.p1 : "Tu piel merece más que un tratamiento rápido. Merece atención, evaluación profesional y un protocolo pensado especialmente para ti."}
            </p>
            <div className="flex flex-col items-center gap-6">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-primary px-12 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-all shadow-2xl">
                <MessageCircle className="w-5 h-5" /> {isEn ? ginkgoEn.finalCta.cta : "Agendar Valoración Facial"}
              </a>
              <div className="flex gap-8 opacity-60">
                 {isEn ? (
                   ginkgoEn.finalCta.info.map((item, i) => (
                     <span key={i} className="text-[10px] font-bold uppercase">{item}</span>
                   ))
                 ) : (
                   <>
                     <span className="text-[10px] font-bold uppercase">🚗 Parqueo</span>
                     <span className="text-[10px] font-bold uppercase">🕒 Cita Previa</span>
                     <span className="text-[10px] font-bold uppercase">📍 Turrialba</span>
                   </>
                 )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
