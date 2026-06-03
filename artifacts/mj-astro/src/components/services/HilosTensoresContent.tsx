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
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function HilosTensoresContent({
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
                Descubre Cómo Recuperar una Apariencia Más Firme y Rejuvenecida Sin Cirugía
              </h2>
              <p className="text-stone-800 text-xl md:text-2xl font-serif leading-relaxed italic max-w-3xl">
                "Si comentaste la palabra TENSORES, probablemente estés buscando una forma de verte más fresca, definida y rejuvenecida sin pasar por una cirugía."
              </p>
            </div>

            <div className="space-y-6 text-stone-600 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-16">
              <p>
                Y la buena noticia es que hoy existen procedimientos avanzados que pueden ayudar a mejorar la apariencia de firmeza facial, redefinir contornos y favorecer una armonización natural del rostro.
              </p>
              <p className="font-serif italic text-stone-900">
                En MJ Estética & Wellness Center ayudamos a personas que desean verse mejor sin perder su esencia.
              </p>
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

      {/* ── SECCIÓN: LEAD MAGNET (GUÍA GRATUITA) ────────────────── */}
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
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">Recurso Exclusivo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 leading-tight">
              Guía GRATUITA + Valoración Facial Personalizada <br className="md:hidden" />
              <span className="text-primary italic font-light block mt-2">“Cómo Potenciar y Mantener Mejores Resultados con Hilos Tensores”</span>
            </h2>
            <p className="text-stone-300 mb-10 text-lg">
              Solicita tu guía gratuita y recibe asesoría personalizada.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-left max-w-2xl mx-auto mb-12">
              {[
                "Cómo funcionan los hilos tensores",
                "Qué esperar del procedimiento",
                "Cuidados antes y después",
                "Hábitos que ayudan a prolongar los resultados",
                "Tratamientos complementarios"
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
                DESCARGAR GUÍA GRATUITA
              </a>
              <p className="text-white/40 text-[10px] tracking-widest uppercase flex items-center gap-2">
                <Instagram className="w-3 h-3" /> Escríbenos por Instagram o WhatsApp
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: ¿QUÉ SON? ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Concepto</p>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 uppercase tracking-tighter">¿Qué Son los Hilos Tensores?</h2>
              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p>
                  Los hilos tensores son un procedimiento estético mínimamente invasivo diseñado para apoyar protocolos de rejuvenecimiento facial, firmeza y armonización del rostro.
                </p>
                <p>
                  Su objetivo es ayudar a mejorar la apariencia de ciertas zonas que con el tiempo pueden perder definición debido al proceso natural de envejecimiento.
                </p>
                <p>
                  Muchas personas los consideran una alternativa para quienes desean un efecto de lifting facial sin cirugía y con una recuperación relativamente rápida.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-stone-50 p-10 border border-stone-100 rounded-sm relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
              <p className="text-xl font-serif italic text-stone-800 leading-relaxed relative z-10">
                "Lo más importante es entender que cada rostro es diferente. Por eso, en MJ Estética & Wellness Center realizamos una valoración personalizada para diseñar un protocolo adaptado a tus objetivos estéticos."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: BENEFICIOS ─────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 text-primary">Resultados</p>
            <h2 className="text-4xl font-serif font-bold mb-6 uppercase tracking-tighter text-white">¿Qué Puede Ayudar a Mejorar Este Procedimiento?</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">Los hilos tensores pueden formar parte de protocolos orientados a:</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Firmeza Facial", desc: "Mejorar la apariencia de firmeza facial significativamente." },
              { title: "Rejuvenecimiento", desc: "Favorecer una apariencia más rejuvenecida y vital." },
              { title: "Definición", desc: "Definir contornos faciales para un rostro más esculpido." },
              { title: "Armonización", desc: "Apoyar procesos de armonización facial integral." },
              { title: "Soporte", desc: "Mejorar la apariencia de ciertas zonas con pérdida de soporte." },
              { title: "Complemento", desc: "Complementar tratamientos de rejuvenecimiento facial." }
            ].map((item, i) => (
              <motion.div
                key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors"
              >
                <Sparkles className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-xl font-serif font-bold mb-4 text-white uppercase tracking-tight">{item.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-16 text-center text-primary font-serif text-xl italic text-white">
            Todo esto manteniendo una apariencia natural y elegante.
          </p>
        </div>
      </section>

      {/* ── SECCIÓN: POR QUÉ ELEGIR MJ ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-tight">
               ¿Por Qué Cada Vez Más Personas Eligen Hilos Tensores?
             </h2>
             <p className="text-stone-500 text-lg">
               Porque buscan resultados visibles sin los tiempos de recuperación asociados a procedimientos quirúrgicos.
             </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl mx-auto mb-16">
            {[
              "Apariencia más firme y definida",
              "Rejuvenecimiento progresivo",
              "Resultados personalizados",
              "Procedimiento mínimamente invasivo",
              "Armonización facial natural",
              "Recuperación relativamente rápida",
              "Sensación de bienestar y confianza personal"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-stone-700 text-sm font-bold uppercase tracking-tight">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center pt-12 border-t border-stone-100">
             <p className="text-stone-400 uppercase text-[10px] tracking-[0.4em] font-bold mb-4 text-primary">Nuestra Filosofía</p>
             <p className="text-2xl font-serif font-bold text-stone-900 mb-2">Nuestro objetivo no es cambiar tu rostro.</p>
             <p className="text-2xl font-serif italic text-primary">Nuestro objetivo es ayudarte a resaltar tu belleza natural.</p>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: HISTORIA DE PACIENTES ─────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-12 md:p-20 shadow-sm border border-stone-100">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 uppercase tracking-tighter text-center">La Historia de Muchas Pacientes Que Llegan a MJ</h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed italic font-serif">
              <p>Quizás te identifiques.</p>
              <p>Te ves al espejo y notas que tu rostro ya no refleja cómo te sientes por dentro.</p>
              <p>Te cuidas. Haces ejercicio. Trabajas en ti.</p>
              <p>Pero ciertas zonas comienzan a mostrar cambios naturales asociados al paso del tiempo.</p>
              <p>Entonces surge la pregunta:</p>
              <p className="text-stone-900 font-bold not-italic font-sans border-l-4 border-primary pl-6 py-4 bg-stone-50">
                "¿Existe una opción que me ayude a verme más fresca sin cirugía?"
              </p>
              <p className="not-italic font-sans text-base">
                Esa es precisamente la razón por la que muchas personas buscan una valoración para conocer si los hilos tensores podrían ser adecuados para sus objetivos.
              </p>
              <p className="not-italic font-sans text-base text-stone-900 font-medium">
                Y cuando descubren que existen alternativas personalizadas, naturales y seguras, recuperan la confianza para volver a sentirse bien frente al espejo.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: PASO A PASO ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Metodología MJ</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter">¿Cómo Funciona el Procedimiento?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Valoración Facial", desc: "Analizamos tu rostro, tus objetivos y tus expectativas de forma personalizada." },
              { step: "02", title: "Diseño del Protocolo", desc: "Creamos una propuesta individualizada según tus necesidades específicas." },
              { step: "03", title: "Aplicación", desc: "El procedimiento se realiza siguiendo protocolos profesionales y personalizados." },
              { step: "04", title: "Seguimiento", desc: "Recibirás indicaciones para favorecer una adecuada recuperación y optimizar tu experiencia." }
            ].map((item, i) => (
              <div key={i} className="relative p-8 bg-stone-50 border border-stone-100 rounded-sm hover:translate-y-[-4px] transition-all duration-300">
                <span className="text-5xl font-serif font-bold text-primary/10 absolute top-4 right-6">{item.step}</span>
                <h3 className="text-lg font-serif font-bold text-stone-900 mb-4 relative z-10 uppercase tracking-tight">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: PARA QUIÉN? ─────────────────── */}
      <section className="py-24 bg-[#071e2e] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 uppercase tracking-tight text-white">¿Para Quién Se Recomiendan los Hilos Tensores?</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-16">
               {[
                 "Rejuvenecimiento facial progresivo",
                 "Lifting facial sin cirugía",
                 "Armonización facial",
                 "Definición de contornos",
                 "Apariencia de firmeza facial",
                 "Protocolos estéticos premium",
                 "Resultados naturales y elegantes"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 bg-white/5 p-4 border border-white/10 rounded-sm">
                   <CheckCircle2 className="w-4 h-4 text-primary" />
                   <span className="text-stone-200 text-xs font-bold uppercase tracking-wide">{item}</span>
                 </div>
               ))}
             </div>
             <p className="text-stone-400 italic text-lg max-w-2xl mx-auto">
                "La mejor forma de saber si es adecuado para ti es mediante una valoración profesional."
             </p>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: DIFERENCIAL MJ ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-tight">
              Lo Que Hace Diferente a MJ Estética & Wellness Center
            </h2>
            <p className="text-stone-500 text-lg">No creemos en tratamientos genéricos. Creemos en personas únicas.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl mx-auto">
            {[
              "Valoración personalizada",
              "Protocolos individualizados",
              "Atención profesional",
              "Ambiente seguro y cómodo",
              "Seguimiento posterior",
              "Enfoque en naturalidad y armonización facial",
              "Experiencia estética premium"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                <span className="text-stone-700 text-sm font-bold uppercase tracking-tight">{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-16 text-center text-stone-400 text-xs font-bold uppercase tracking-[0.3em] max-w-2xl mx-auto pt-12 border-t border-stone-100">
            Nuestro compromiso es ayudarte a tomar decisiones informadas sobre tu bienestar estético.
          </p>
        </div>
      </section>

      {/* ── SECCIÓN: FAQ ─────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Resolviendo dudas</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 leading-tight uppercase tracking-tighter">Preguntas Frecuentes</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: "¿Los hilos tensores se ven naturales?", a: "Cuando forman parte de un protocolo adecuado y personalizado, el objetivo es mantener una apariencia armónica y natural." },
              { q: "¿Es un procedimiento quirúrgico?", a: "No. Se considera un procedimiento mínimamente invasivo." },
              { q: "¿Tiene tiempo de recuperación?", a: "Cada caso es diferente. Durante la valoración explicaremos qué esperar según tu situación particular." },
              { q: "¿Puedo combinarlo con otros tratamientos?", a: "En algunos casos puede integrarse dentro de protocolos de rejuvenecimiento facial más amplios." },
              { q: "¿Cuánto duran los resultados?", a: "La duración puede variar según factores individuales y hábitos de cada persona." },
              { q: "¿Cómo sé si soy candidata?", a: "La valoración facial personalizada es el mejor punto de partida." }
            ].map((item, i) => (
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

      {/* ── SECCIÓN: TURRIALBA LOCALIZACIÓN ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <div className="inline-flex items-center gap-2 text-primary mb-6">
               <MapPin className="w-5 h-5" />
               <span className="font-bold tracking-widest uppercase text-xs">Ubicación Estratégica</span>
             </div>
             <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 uppercase tracking-tighter">Hilos Tensores en Turrialba 📍</h2>
             <p className="text-stone-500 text-lg mb-12 max-w-2xl mx-auto">
                Agenda tu valoración hoy y descubre qué protocolo puede ayudarte a conseguir una apariencia más firme, armonizada y rejuvenecida.
             </p>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
               {[
                 "Hilos Tensores adecuados para ti",
                 "Evaluación personalizada",
                 "Conoce las opciones disponibles"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 bg-stone-50 p-4 border border-stone-100 rounded-sm">
                   <Check className="w-4 h-4 text-primary shrink-0" />
                   <span className="text-stone-600 text-xs font-bold uppercase">{item}</span>
                 </div>
               ))}
             </div>

             <div className="mt-20">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all shadow-2xl hover:-translate-y-1 active:translate-y-0"
                >
                  <MessageCircle className="w-5 h-5" />
                  AGENDAR HOY TU VALORACIÓN
                </a>
                <p className="mt-8 text-stone-400 text-sm italic font-serif">
                  "Porque verte bien no significa cambiar quién eres. Significa sentirte bien con la mejor versión de ti."
                </p>
             </div>
           </motion.div>
        </div>
      </section>
    </div>
  );
}
