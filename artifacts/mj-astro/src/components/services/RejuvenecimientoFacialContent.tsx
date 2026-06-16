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
  UserCheck,
  ArrowRight
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as any } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function RejuvenecimientoFacialContent({
  waLink,
  faq
}: {
  waLink: string;
  faq?: { question: string; answer: string }[]
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
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-tight">
                Glow Natural, Armonización Facial y Bienestar Estético Premium
              </h2>
              <p className="text-stone-800 text-xl md:text-2xl font-serif leading-relaxed italic max-w-3xl">
                "Tu piel cuenta tu historia… pero también puede reflejar luminosidad, frescura y bienestar."
              </p>
            </div>

            <div className="space-y-6 text-stone-600 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-16">
              <p>
                En MJ Estética & Wellness Center diseñamos protocolos de rejuvenecimiento facial personalizados orientados a glow natural, armonización estética y revitalización progresiva de la piel.
              </p>
              <p className="font-serif italic text-stone-900">
                Porque el verdadero rejuvenecimiento no se trata de cambiar quién eres. Se trata de ayudarte a verte descansada, luminosa y segura de ti misma.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16">
              {[
                "Glow facial saludable",
                "Protocolos skincare premium",
                "Atención personalizada",
                "Rejuvenecimiento elegante y natural",
                "Bienestar facial integral",
                "Experiencia estética avanzada en Turrialba"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-stone-50 p-4 border border-stone-100 rounded-sm">
                  <Sparkles className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-stone-700 text-sm font-bold uppercase tracking-tight">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center bg-stone-900 text-white p-10 rounded-sm">
               <h3 className="text-2xl font-serif font-bold mb-6">Agenda tu valoración facial personalizada</h3>
               <div className="space-y-4 mb-8">
                  <p className="flex items-center justify-center gap-2">👉 Escríbenos por WhatsApp</p>
                  <p className="flex items-center justify-center gap-2">👉 Consulta disponibilidad</p>
                  <p className="flex items-center justify-center gap-2">👉 Descubre el protocolo ideal para tu piel</p>
               </div>
               <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-stone-900 transition-all shadow-xl"
                >
                  <MessageCircle className="w-5 h-5" />
                  RESERVAR AHORA
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
              <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Concepto</p>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 uppercase tracking-tighter">¿Qué es el rejuvenecimiento facial?</h2>
              <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                <p>
                  El rejuvenecimiento facial es un conjunto de protocolos estéticos diseñados para apoyar la apariencia de una piel más luminosa, armonizada y revitalizada.
                </p>
                <p>
                  En MJ Estética & Wellness Center utilizamos tratamientos personalizados orientados a glow facial, bienestar de la piel y rejuvenecimiento progresivo mediante tecnologías y protocolos skincare avanzados.
                </p>
                <p className="font-serif italic">
                  Cada piel tiene necesidades diferentes. Por eso realizamos valoraciones personalizadas para diseñar experiencias adaptadas a cada paciente.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-white p-10 border border-stone-200 rounded-sm relative shadow-sm"
            >
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-tight text-center">Nuestro enfoque busca:</h3>
              <div className="space-y-4">
                {["Naturalidad", "Glow saludable", "Armonización facial", "Luminosidad elegante", "Bienestar estético integral"].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 border-b border-stone-100 pb-3 last:border-0">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-stone-700 font-bold uppercase tracking-widest text-xs">{item}</span>
                   </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: ¿QUÉ MEJORA? ─────────────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-5 -translate-y-1/4 translate-x-1/4">
          <Sparkles className="w-96 h-96 text-primary" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Resultados</p>
            <h2 className="text-4xl font-serif font-bold mb-6 uppercase tracking-tighter text-white">¿Qué puede ayudar a mejorar el rejuvenecimiento facial?</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">Nuestros protocolos pueden apoyar procesos orientados a:</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Glow y luminosidad facial",
              "Apariencia de firmeza facial",
              "Sensación de renovación y frescura",
              "Textura facial más uniforme",
              "Bienestar de la piel",
              "Rejuvenecimiento progresivo",
              "Apariencia revitalizada y descansada",
              "Protocolos antiaging personalizados"
            ].map((item, i) => (
              <motion.div
                key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-6 rounded-sm hover:bg-white/10 transition-colors flex items-center gap-3"
              >
                <Sparkles className="w-5 h-5 text-primary shrink-0" />
                <span className="text-stone-200 text-xs font-bold uppercase tracking-wide">{item}</span>
              </motion.div>
            ))}
          </div>
          <p className="mt-16 text-center text-primary font-serif text-xl italic text-white">
            Cada protocolo se adapta según las necesidades individuales y objetivos de cada persona.
          </p>
        </div>
      </section>

      {/* ── SECCIÓN: BENEFICIOS ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
             <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">MJ Wellness Experience</p>
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-tight">
               Beneficios del Rejuvenecimiento Facial
             </h2>
             <div className="space-y-4 text-stone-600 text-lg">
                <p>En MJ Estética & Wellness Center creemos en resultados progresivos, naturales y elegantes.</p>
                <p className="font-serif italic font-bold text-stone-900">Nuestros pacientes buscan verse mejor… sin perder su esencia.</p>
             </div>
          </motion.div>

          <div className="bg-stone-50 p-10 md:p-16 border border-stone-100 rounded-sm">
             <h3 className="text-2xl font-serif font-bold text-stone-900 mb-8 text-center uppercase tracking-tight">Lo que más valoran quienes nos visitan:</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
               {[
                 "Piel más luminosa y revitalizada",
                 "Glow facial progresivo",
                 "Sensación de rejuvenecimiento natural",
                 "Bienestar facial integral",
                 "Resultados personalizados",
                 "Apariencia más fresca y descansada",
                 "Protocolos skincare premium",
                 "Atención estética profesional"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4">
                   <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                   <span className="text-stone-700 text-sm font-bold uppercase tracking-tight">{item}</span>
                 </div>
               ))}
             </div>
             <p className="mt-12 text-center text-stone-500 font-serif italic text-lg">
                Porque el skincare también puede convertirse en una experiencia de bienestar.
             </p>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: PROTOCOLOS DISPONIBLES ─────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 text-primary">Catálogo Premium</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter mb-4">Protocolos de Rejuvenecimiento Facial Disponibles</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Láser Facial",
                desc: "Protocolos orientados a mejorar la apariencia de luminosidad, textura y revitalización facial.",
                tags: ["Glow natural", "Apariencia más uniforme", "Rejuvenecimiento progresivo"]
              },
              {
                title: "Microagujas",
                desc: "Tratamiento skincare avanzado enfocado en apoyar procesos de renovación facial y bienestar de la piel.",
                tags: ["Sensación de renovación", "Glow saludable", "Protocolos personalizados"]
              },
              {
                title: "Radiofrecuencia Facial",
                desc: "Protocolo orientado a apoyar procesos de firmeza y armonización facial progresiva.",
                tags: ["Firmeza facial", "Bienestar estético", "Rejuvenecimiento elegante"]
              },
              {
                title: "Hollywood Peel",
                desc: "Experiencia premium diseñada para potenciar luminosidad facial y apariencia revitalizada.",
                tags: ["Glow inmediato", "Piel luminosa", "Experiencia skincare premium"]
              },
              {
                title: "Protocolos Skincare Premium",
                desc: "Combinaciones personalizadas según objetivos faciales y necesidades individuales.",
                tags: ["Glow memberships", "Antiaging bundles", "Rejuvenation programs"]
              }
            ].map((item, i) => (
              <motion.div
                key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white p-8 border border-stone-200 rounded-sm shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-4 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                  <div className="space-y-2 mb-8">
                    {item.tags.map((tag, j) => (
                       <div key={j} className="flex items-center gap-2">
                          <Sparkles className="w-3 h-3 text-primary shrink-0" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{tag}</span>
                       </div>
                    ))}
                  </div>
                </div>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-primary border-b border-primary/30 pb-0.5 hover:border-primary transition-all w-fit"
                >
                  Consulta disponibilidad <ArrowRight className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: PASO A PASO ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">La Experiencia MJ</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter mb-4">¿Cómo funciona la experiencia de rejuvenecimiento facial?</h2>
            <p className="text-stone-500 max-w-2xl mx-auto text-lg">Queremos que disfrutes el proceso con tranquilidad, claridad y acompañamiento profesional.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Valoración facial personalizada", desc: "Analizamos tu piel, objetivos y necesidades específicas." },
              { step: "02", title: "Diseño del protocolo ideal", desc: "Creamos una experiencia personalizada orientada a glow y armonización facial." },
              { step: "03", title: "Aplicación del tratamiento", desc: "Realizamos el procedimiento bajo protocolos profesionales y personalizados." },
              { step: "04", title: "Seguimiento y recomendaciones", desc: "Te acompañamos con cuidados posteriores y seguimiento individualizado." }
            ].map((item, i) => (
              <div key={i} className="relative p-8 bg-stone-50 border border-stone-100 rounded-sm hover:translate-y-[-4px] transition-all duration-300">
                <span className="text-5xl font-serif font-bold text-primary/10 absolute top-4 right-6">{item.step}</span>
                <h3 className="text-lg font-serif font-bold text-stone-900 mb-4 relative z-10 uppercase tracking-tight">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#071e2e] p-8 rounded-sm grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
             <div className="flex flex-col items-center gap-2">
                <Clock className="w-6 h-6 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-stone-400">Duración</span>
                <p className="text-sm">Variable según protocolo</p>
             </div>
             <div className="flex flex-col items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-stone-400">Recuperación</span>
                <p className="text-sm">Depende de cada tratamiento</p>
             </div>
             <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-stone-400">Cuidados posteriores</span>
                <p className="text-sm px-4">Explicados durante tu valoración</p>
             </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: PARA QUIÉN? ─────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 uppercase tracking-tight text-white">¿Para quién se recomienda el rejuvenecimiento facial?</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-16">
               {[
                 "Glow facial natural",
                 "Rejuvenecimiento progresivo",
                 "Bienestar de la piel",
                 "Protocolos antiaging premium",
                 "Armonización facial elegante",
                 "Skincare avanzado personalizado",
                 "Apariencia fresca y luminosa"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 bg-white/5 p-4 border border-white/10 rounded-sm">
                   <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                   <span className="text-stone-200 text-[10px] font-bold uppercase tracking-widest">{item}</span>
                 </div>
               ))}
             </div>
             <p className="text-stone-400 italic text-lg max-w-2xl mx-auto">
                "Cada experiencia se adapta individualmente según las necesidades de la piel."
             </p>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: RESULTADOS NATURALES ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 uppercase tracking-tighter">Resultados Naturales y Glow Saludable</h2>
                <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                  <p>
                    En MJ Estética & Wellness Center creemos en una estética elegante y armónica.
                  </p>
                  <p>
                    No buscamos resultados exagerados. Buscamos ayudarte a potenciar tu belleza natural con protocolos diseñados para brindar bienestar facial y glow saludable.
                  </p>
                </div>
             </motion.div>
             <div className="bg-stone-50 p-10 border border-stone-100 rounded-sm">
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-tight text-center">Por eso priorizamos:</h3>
                <div className="space-y-4">
                  {["Luminosidad natural", "Rejuvenecimiento progresivo", "Textura uniforme", "Bienestar estético", "Armonización facial premium"].map((item, i) => (
                     <div key={i} className="flex items-center gap-3 border-b border-stone-200 pb-3 last:border-0">
                        <Sparkles className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-stone-700 font-bold uppercase tracking-widest text-xs">{item}</span>
                     </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: TESTIMONIOS ─────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Voces MJ</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter">Lo que dicen nuestras pacientes</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Mi piel se veía mucho más luminosa y fresca.",
              "Me encantó que el resultado se viera natural y elegante.",
              "Sentí mi rostro revitalizado sin verme diferente.",
              "La experiencia fue súper personalizada y relajante."
            ].map((quote, i) => (
              <motion.div
                key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white p-8 border border-stone-100 rounded-sm relative shadow-sm"
              >
                <Quote className="w-8 h-8 text-primary/10 mb-4" />
                <p className="text-stone-700 font-serif italic text-lg leading-relaxed">{quote}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: FAQ ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Resolviendo dudas</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 leading-tight uppercase tracking-tighter">Preguntas Frecuentes</h2>
          </motion.div>

          <div className="space-y-4">
            {faq?.map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <details className="group bg-stone-50 border border-stone-100 rounded-sm overflow-hidden transition-all duration-300 open:shadow-md">
                  <summary className="p-6 cursor-pointer flex justify-between items-center list-none font-serif font-bold text-stone-900 group-hover:text-primary">
                    {item.question}
                    <span className="text-primary transition-transform duration-300 group-open:rotate-180">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="p-6 pt-0 text-stone-600 text-sm leading-relaxed border-t border-stone-100/50">
                    {item.answer}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: PROGRAMAS PREMIUM ─────────────────── */}
      <section className="py-24 bg-[#071e2e] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 uppercase tracking-tight text-white font-serif">Programas Premium de Rejuvenecimiento Facial</h2>
             <p className="text-stone-400 mb-12 text-lg">En MJ Estética & Wellness Center contamos con:</p>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 text-left">
               {[
                 "Rejuvenation programs",
                 "Glow memberships",
                 "Protocolos skincare premium",
                 "Antiaging bundles",
                 "Experiencias wellness faciales"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 bg-white/5 p-4 border border-white/10 rounded-sm">
                   <Sparkles className="w-4 h-4 text-primary shrink-0" />
                   <span className="text-stone-200 text-[10px] font-bold uppercase tracking-widest">{item}</span>
                 </div>
               ))}
             </div>
             <p className="text-stone-400 italic text-lg max-w-2xl mx-auto">
                "Consulta disponibilidad durante tu valoración personalizada."
             </p>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: POR QUÉ ELEGIR MJ ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-tight">
               ¿Por qué elegir MJ Estética & Wellness Center?
             </h2>
             <p className="text-stone-500 text-lg">Porque entendemos que cada piel merece una experiencia personalizada.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl mx-auto">
            {[
              "Protocolos individualizados",
              "Tecnología estética moderna",
              "Atención profesional",
              "Experiencia skincare premium",
              "Ambiente cómodo y seguro",
              "Seguimiento personalizado",
              "Enfoque natural y progresivo"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                <span className="text-stone-700 text-sm font-bold uppercase tracking-tight">{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-16 text-center text-stone-400 text-base italic font-serif max-w-2xl mx-auto">
            "Nos enfocamos en ayudarte a sentirte bien contigo misma mientras cuidamos la naturalidad de tu piel."
          </p>
        </div>
      </section>

      {/* ── SECCIÓN: LEAD MAGNET (GUÍA GRATUITA) ────────────────── */}
      <section className="py-24 bg-stone-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-white border border-stone-200 p-10 md:p-16 rounded-sm text-center shadow-xl"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8">
              <Gift className="w-4 h-4" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Recurso Gratuito</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 leading-tight">
              Descarga GRATIS la Guía: <br />
              <span className="text-primary italic font-light block mt-2">“Cómo mejorar los resultados de tu rejuvenecimiento facial”</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-left max-w-2xl mx-auto mb-12 py-8 border-y border-stone-100">
               <div className="col-span-full mb-2 text-stone-400 text-[10px] font-bold uppercase tracking-widest">Aprende:</div>
              {[
                "Cómo potenciar el glow facial",
                "Hábitos que apoyan el bienestar de la piel",
                "Recomendaciones skincare post tratamiento",
                "Consejos para prolongar luminosidad facial",
                "Tips wellness para rejuvenecimiento progresivo"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-stone-600 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-6">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all shadow-xl group"
              >
                <MessageCircle className="w-5 h-5" />
                SOLICITAR GUÍA POR WHATSAPP
              </a>
              <p className="text-stone-400 text-[10px] tracking-widest uppercase flex items-center gap-2">
                <Gift className="w-3 h-3 text-primary" /> Regalo exclusivo para nuestros pacientes
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: FINAL ─────────────────── */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 uppercase tracking-tighter">Agenda tu valoración facial hoy</h2>
             <p className="text-stone-500 text-lg mb-12 max-w-2xl mx-auto">
                Si estás buscando rejuvenecimiento facial avanzado, glow natural y protocolos skincare premium en Turrialba, estamos listas para ayudarte.
             </p>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto mb-16 text-left">
               {[
                 "Agenda tu valoración facial",
                 "Descubre el protocolo ideal para tu piel",
                 "Consulta disponibilidad",
                 "Escríbenos por WhatsApp hoy"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 bg-stone-50 p-4 border border-stone-100 rounded-sm">
                   <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                   <span className="text-stone-600 text-[10px] font-bold uppercase tracking-widest">{item}</span>
                 </div>
               ))}
             </div>

             <div className="mt-20 border-t border-stone-100 pt-20">
                <p className="text-stone-900 font-serif font-bold text-xl mb-2">MJ Estética & Wellness Center</p>
                <div className="flex items-center justify-center gap-2 text-primary mb-8">
                   <MapPin className="w-4 h-4" />
                   <span className="font-bold tracking-[0.3em] uppercase text-[10px]">Turrialba</span>
                </div>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all shadow-2xl hover:-translate-y-1 active:translate-y-0"
                >
                  <MessageCircle className="w-5 h-5" />
                  AGENDAR HOY
                </a>
                <p className="mt-8 text-primary font-bold text-[10px] tracking-widest uppercase">
                  ✨ Glow natural, armonización facial y bienestar estético premium
                </p>
             </div>
           </motion.div>
        </div>
      </section>
    </div>
  );
}
