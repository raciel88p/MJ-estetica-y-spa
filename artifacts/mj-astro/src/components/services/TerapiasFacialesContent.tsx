import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, ArrowRight, Star, MapPin, Phone, Clock, Gift, Download, Sparkles, Heart, Zap, ShieldCheck } from "lucide-react";

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

export function TerapiasFacialesContent({ waLink }: Props) {
  return (
    <div className="bg-white">
      {/* ── INTRO / PAS ────────────────────────────── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
              <p>Tu piel habla de ti todos los días. El estrés, la contaminación, el sol, los cambios hormonales y el paso del tiempo pueden hacer que pierda luminosidad, hidratación y vitalidad.</p>
              <p>En <span className="font-bold text-stone-900">MJ Estética & Wellness Center</span>, entendemos que cada piel es única, por eso nuestras <span className="font-bold text-stone-900">terapias faciales en Turrialba</span> están diseñadas para ofrecer una experiencia personalizada que combina bienestar, relajación y skincare profesional.</p>
              <p>No creemos en tratamientos iguales para todas las personas. Antes de iniciar cualquier protocolo realizamos una valoración para conocer las necesidades de tu piel y recomendar la terapia facial que mejor se adapte a tus objetivos.</p>
            </div>

            <div className="mt-12 bg-white p-8 md:p-12 shadow-xl border border-stone-100 rounded-sm">
               <h3 className="text-2xl font-serif font-bold text-stone-900 mb-8 leading-tight">Agenda tu valoración facial hoy mismo</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10 max-w-lg mx-auto">
                 {[
                   "Valoración personalizada",
                   "Protocolos adaptados",
                   "Atención profesional",
                   "Tecnología avanzada",
                   "Ambiente relajante"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                     <span className="text-sm font-bold text-stone-700 uppercase tracking-wide">{item}</span>
                   </div>
                 ))}
               </div>
               <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-primary text-white text-xs font-bold tracking-[0.2em] uppercase px-8 py-5 hover:bg-stone-900 transition-all shadow-lg">
                  <MessageCircle className="w-4 h-4" />
                  Escríbenos por WhatsApp
                  <ArrowRight className="w-4 h-4" />
               </a>
               <p className="mt-6 text-primary font-bold text-sm">Descubre cuál terapia facial es ideal para ti.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT ARE THEY ───────────────────────────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
                ¿Qué son las terapias faciales?
              </h2>
              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p>Las terapias faciales son protocolos profesionales enfocados en mejorar la apariencia, el bienestar y el cuidado integral de la piel del rostro. A diferencia de un facial convencional, una terapia facial personalizada evalúa las condiciones particulares de cada persona para seleccionar técnicas, equipos y productos adecuados.</p>
                <p>El objetivo no es únicamente mejorar el aspecto de la piel, sino también promover una experiencia de relajación que contribuya al bienestar general.</p>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-50 p-10 border border-stone-200">
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-6">Protocolos ideales para:</h3>
              <ul className="space-y-4">
                {[
                  "Recuperar luminosidad facial",
                  "Mantener una piel saludable",
                  "Complementar tu rutina de skincare",
                  "Disfrutar de una experiencia de relajación",
                  "Favorecer un rejuvenecimiento progresivo",
                  "Atención profesional personalizada"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-stone-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ────────────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 text-white">MJ ESTÉTICA WELLNESS</p>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 text-white">¿Qué beneficios ofrecen las terapias faciales?</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Glow facial natural", d: "Una piel limpia e hidratada refleja mejor la luz, proporcionando una apariencia más luminosa y saludable.", icon: Zap },
              { t: "Bienestar facial", d: "La experiencia de una terapia facial ayuda a disminuir la tensión del rostro y brinda una agradable sensación de relajación.", icon: Heart },
              { t: "Apariencia revitalizada", d: "Los protocolos ayudan a mejorar la textura y el aspecto general de la piel de manera progresiva.", icon: Sparkles },
              { t: "Hidratación profunda", d: "Muchas pieles pierden agua con facilidad. Las terapias ayudan a restaurar la hidratación necesaria para mantener una piel más confortable.", icon: ShieldCheck },
              { t: "Cuidado profesional", d: "Cada sesión utiliza productos seleccionados según el tipo de piel y los objetivos establecidos durante la valoración.", icon: Star },
              { t: "Aliado del Skincare", d: "Las terapias faciales potencian los cuidados diarios realizados en casa y ayudan a mantener mejores resultados a largo plazo.", icon: CheckCircle2 }
            ].map((b, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-all">
                <b.icon className="w-10 h-10 text-primary mb-6" />
                <h4 className="font-serif font-bold text-2xl mb-4 text-white">{b.t}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{b.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOCUS AREAS ──────────────────────────────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6 leading-tight">¿Qué pueden ayudar a mejorar?</h2>
             <p className="text-stone-500 max-w-2xl mx-auto italic leading-relaxed">Dependiendo del protocolo recomendado durante la valoración, las terapias faciales pueden apoyar el cuidado de:</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
             {[
               "Piel opaca o sin luminosidad",
               "Deshidratación facial",
               "Sensación de piel cansada",
               "Textura irregular",
               "Bienestar general de la piel",
               "Mantenimiento del glow natural",
               "Rutinas de rejuvenecimiento",
               "Cuidado preventivo envejecimiento",
               "Piel expuesta a contaminación",
               "Necesidad de relajación facial"
             ].map((item, i) => (
               <div key={i} className="flex items-center gap-3 bg-stone-50 p-4 border-l-2 border-primary/40">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-stone-700 font-medium text-sm">{item}</span>
               </div>
             ))}
          </div>
          <p className="mt-12 text-center text-stone-400 text-xs italic max-w-2xl mx-auto">Es importante recordar que los resultados pueden variar según las características individuales de cada persona y el seguimiento de las recomendaciones posteriores.</p>
        </div>
      </section>

      {/* ── TYPES OF THERAPY ─────────────────────────── */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">Tipos de terapias faciales disponibles</h2>
              <p className="text-stone-600 mt-4">En MJ Estética & Wellness Center contamos con diferentes protocolos que pueden adaptarse a las necesidades específicas de cada piel.</p>
           </motion.div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
             {[
               { t: "Terapias Glow Facial", d: "Ideales para quienes desean recuperar luminosidad y obtener una apariencia fresca y saludable. Excelente opción antes de eventos especiales, sesiones fotográficas o simplemente para consentirse." },
               { t: "Hidratación Profunda", d: "Pensadas para pieles que presentan resequedad, sensación de tirantez o falta de confort. Buscan restaurar el equilibrio natural de hidratación de la piel." },
               { t: "Bienestar Facial", d: "Combinan técnicas de relajación con protocolos estéticos para brindar una experiencia integral de bienestar, ideal para personas con altos niveles de estrés." },
               { t: "Rejuvenecimiento Facial", d: "Protocolos enfocados en mantener una apariencia saludable mediante técnicas personalizadas que favorecen el cuidado progresivo de la piel." },
               { t: "Skincare Premium", d: "Incluyen protocolos personalizados utilizando productos profesionales seleccionados según las necesidades individuales." }
             ].map((item, i) => (
               <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-10 group hover:bg-primary transition-colors duration-500">
                  <h4 className="text-2xl font-serif font-bold text-stone-900 group-hover:text-white mb-4">{item.t}</h4>
                  <p className="text-stone-500 group-hover:text-white/80 text-sm leading-relaxed">{item.d}</p>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* ── METHODOLOGY ──────────────────────────────── */}
      <section className="py-24 bg-[#040f19] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20">
            <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 text-white font-bold">¿CÓMO FUNCIONAN?</p>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">Nuestras terapias faciales paso a paso</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { s: "Paso 1", t: "Valoración personalizada", d: "Analizamos el estado de tu piel, escuchamos tus objetivos y resolvemos todas tus dudas." },
              { s: "Paso 2", t: "Diseño del protocolo", d: "Seleccionamos la terapia más adecuada según tu tipo de piel y las necesidades identificadas." },
              { s: "Paso 3", t: "Aplicación del tratamiento", d: "Realizamos el protocolo en un ambiente cómodo y relajante utilizando productos profesionales y tecnología estética." },
              { s: "Paso 4", t: "Recomendaciones posteriores", d: "Te brindamos consejos para prolongar los beneficios obtenidos: hidratación, protector solar y rutina en casa." }
            ].map((step, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
                <span className="text-primary font-bold text-7xl opacity-10 absolute -top-4 -left-4 italic font-serif text-white">{i + 1}</span>
                <div className="relative pt-6">
                  <h4 className="text-primary font-bold text-[10px] tracking-widest uppercase mb-4 text-white">{step.s}</h4>
                  <h3 className="text-xl font-serif font-bold mb-4 text-white">{step.t}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR WHOM ─────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
                ¿Para quién están recomendadas?
              </h2>
              <p className="text-stone-600 mb-8 leading-relaxed">
                Las terapias faciales son ideales para personas que desean cuidar su piel de forma profesional. Cada protocolo se adapta individualmente, por lo que siempre recomendamos una valoración previa.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {[
                   "Mantener una piel saludable",
                   "Mejorar la luminosidad",
                   "Complementar rutina skincare",
                   "Experiencia relajante",
                   "Cuidado personalizado",
                   "Dedicar tiempo al bienestar"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-stone-700 font-medium text-sm">{item}</span>
                   </div>
                 ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-50 p-10 border border-stone-200">
               <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">¿Por qué elegirnos?</h3>
               <ul className="space-y-4">
                 {[
                   "Valoraciones individuales",
                   "Protocolos 100% adaptados",
                   "Atención cercana y profesional",
                   "Ambiente cómodo y relajante",
                   "Tecnología estética moderna",
                   "Seguimiento personalizado",
                   "Compromiso con bienestar integral"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-stone-600">
                      <Star className="w-4 h-4 text-primary fill-primary" />
                      <span className="text-sm font-medium">{item}</span>
                   </li>
                 ))}
               </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS & RESULTS ───────────────────── */}
      <section className="py-24 bg-stone-50 border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">Lo que opinan nuestras pacientes</h2>
            <p className="text-stone-500 italic">Miles de pequeños cambios pueden marcar una gran diferencia.</p>
          </motion.div>
          <div className="space-y-8 mb-20">
             {[
               "Mi piel luce mucho más luminosa y saludable.",
               "Me encantó la atención personalizada.",
               "La experiencia fue relajante desde que llegué.",
               "Ahora entiendo mejor cómo cuidar mi piel.",
               "Cada sesión se adapta a lo que realmente necesito."
             ].map((text, i) => (
               <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-6 rounded-sm shadow-sm border border-stone-100 flex items-start gap-4">
                  <span className="text-2xl">⭐</span>
                  <p className="text-stone-700 font-medium italic">"{text}"</p>
               </motion.div>
             ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center bg-white p-12 border border-stone-200 shadow-xl rounded-sm">
             <h3 className="text-3xl font-serif font-bold text-stone-900 mb-6">Antes y después</h3>
             <p className="text-stone-600 leading-relaxed mb-8">
               Cada piel responde de forma diferente. Mostramos resultados reales obtenidos mediante protocolos personalizados y realizados por profesionales. Las fotografías permiten observar cambios en luminosidad, textura y glow natural.
             </p>
             <div className="flex flex-wrap justify-center gap-4">
                {["Luminosidad", "Textura", "Vitalidad", "Glow natural"].map((badge, i) => (
                  <span key={i} className="bg-primary/10 text-primary text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest">{badge}</span>
                ))}
             </div>
             <p className="mt-8 text-stone-400 text-xs italic">No utilizamos imágenes falsas ni promesas irreales.</p>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">Preguntas Frecuentes</h2>
            <div className="w-12 h-0.5 bg-primary mx-auto" />
          </motion.div>
          <div className="space-y-12">
            {[
              { q: "¿Cada cuánto se recomienda realizar una terapia facial?", a: "La frecuencia depende del tipo de piel y de los objetivos de cada persona. Durante la valoración podremos recomendar el intervalo más adecuado." },
              { q: "¿Las terapias faciales duelen?", a: "No. La mayoría de los protocolos son cómodos y están diseñados para brindar una experiencia relajante." },
              { q: "¿Cuánto dura una sesión?", a: "Dependiendo del protocolo, una sesión suele durar entre 60 y 90 minutos." },
              { q: "¿Debo seguir algún cuidado después del tratamiento?", a: "Sí. Generalmente recomendamos mantener la piel hidratada, utilizar protector solar diariamente y seguir las indicaciones brindadas por la profesional." },
              { q: "¿Puedo combinar diferentes terapias faciales?", a: "Sí. En muchos casos es posible desarrollar un plan personalizado que combine distintos protocolos de acuerdo con las necesidades de tu piel." },
              { q: "¿Necesito una valoración previa?", a: "Sí. Es la mejor forma de conocer el estado de tu piel y recomendar el tratamiento más adecuado." }
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
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">Terapias Faciales en Turrialba Cerca de Ti</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: MapPin, text: "Turrialba Centro" },
                  { icon: Clock, text: "Fácil acceso y parqueo" },
                  { icon: Phone, text: "Horarios flexibles" },
                  { icon: ShieldCheck, text: "Atención con cita previa" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-stone-700">
                    <item.icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-bold text-[10px] uppercase tracking-widest">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white p-8 border border-stone-200 shadow-sm rounded-sm max-w-md">
                 <p className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 italic">🎁 GUÍA GRATUITA</p>
                 <h3 className="text-xl font-serif font-bold text-stone-900 mb-4 text-left">Descarga gratis nuestra guía de cuidado facial</h3>
                 <p className="text-stone-500 text-sm mb-6 leading-relaxed">Aprende cómo cuidar tu piel después de un facial, errores que afectan resultados y consejos básicos de skincare.</p>
                 <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-stone-900 text-white text-[10px] font-bold px-6 py-4 tracking-widest uppercase hover:bg-primary transition-all">
                   <Download className="w-4 h-4" /> [DESCARGAR GUÍA GRATIS]
                 </a>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#071e2e] p-12 text-white text-center rounded-sm">
              <h2 className="text-4xl font-serif font-bold mb-8 leading-tight text-white">Agenda tu valoración facial</h2>
              <p className="text-white/70 mb-10 leading-relaxed text-lg">
                Cada piel merece un tratamiento diseñado especialmente para sus necesidades. Agenda hoy tu valoración facial, consulta disponibilidad por WhatsApp y comienza tu camino hacia una piel más luminosa.
              </p>
              <div className="flex flex-col gap-4 max-w-sm mx-auto">
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-primary text-white text-sm font-bold tracking-[0.15em] uppercase px-10 py-5 hover:bg-white hover:text-stone-900 transition-all group shadow-xl shadow-primary/20">
                  <MessageCircle className="w-5 h-5" />
                  Agenda tu valoración
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-primary font-bold text-xs uppercase tracking-widest mt-4">Inversión en confianza y bienestar</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
