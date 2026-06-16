import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Instagram,
  Clock,
  Quote,
  Zap,
  Target,
  ShieldCheck,
  UserCheck,
  Award,
  Heart,
  FileText,
  User
} from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as any } },
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

export function PeelingFacialContent({ waLink }: { waLink: string }) {
  return (
    <div className="bg-white">
      {/* ── INTRO SECTION (PAS) ────────────────────────── */}
      <section className="py-20 bg-white border-b border-stone-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Renovación Facial Avanzada</span>
            </div>
            <p className="text-stone-600 text-lg leading-relaxed mb-6 italic">
              ¿Buscas un <strong>peeling facial en Turrialba</strong> que te ayude a mejorar manchas, marcas de acné, poros abiertos o líneas de expresión?
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              En <strong>MJ Fisio Estética & Spa</strong> ofrecemos tratamientos de <strong>rejuvenecimiento facial en Turrialba</strong> diseñados para renovar la piel, estimular la regeneración celular y devolverle luminosidad a tu rostro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── LEAD MAGNET ──────────────────────────────── */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-1 md:p-2 shadow-xl border border-stone-100">
              <div className="border border-stone-50 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
                 <div className="flex-1 text-center md:text-left text-stone-900">
                    <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">🎁 RECURSO GRATUITO</p>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Guía: Cómo Obtener Mejores Resultados con un Peeling Facial</h3>
                    <div className="space-y-2 mb-8 text-left max-w-sm mx-auto md:mx-0">
                       {[
                         "✅ Qué hacer antes de un peeling facial",
                         "✅ Cómo cuidar tu piel después del tratamiento",
                         "✅ Errores que pueden afectar los resultados",
                         "✅ Recomendaciones para mantener una piel saludable",
                         "✅ Consejos para potenciar el rejuvenecimiento facial"
                       ].map((item, i) => (
                         <p key={i} className="text-sm text-stone-600 font-medium">{item}</p>
                       ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                       <div className="bg-stone-50 border border-stone-200 px-6 py-3 text-center w-full sm:w-auto">
                          <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">Palabra Clave</p>
                          <p className="text-2xl font-serif font-bold text-primary">“PEELING”</p>
                       </div>
                       <a
                          href={waLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-4 font-bold tracking-widest uppercase hover:bg-primary transition-colors text-xs w-full sm:w-auto"
                       >
                          <MessageCircle className="w-4 h-4" />
                          Descargar Guía Gratis
                       </a>
                    </div>
                 </div>
                 <div className="shrink-0 w-40 h-56 bg-stone-100 flex items-center justify-center relative group hidden md:flex">
                    <div className="absolute inset-2 border border-stone-200" />
                    <FileText className="w-12 h-12 text-primary/20" />
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                       <p className="text-[8px] font-bold tracking-tighter text-stone-400 uppercase">Skincare Guide</p>
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* ── ¿QUÉ ES? ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              ¿Qué es un Peeling Facial?
            </h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
              <p>
                El <strong>peeling facial profesional</strong> es un tratamiento estético que ayuda a eliminar células muertas de la superficie de la piel mediante la aplicación controlada de sustancias especializadas.
              </p>
              <p>
                Este procedimiento favorece la renovación celular, mejora la textura de la piel y contribuye a reducir imperfecciones visibles.
              </p>
              <p className="font-medium text-stone-800">
                Cada tratamiento es personalizado según las necesidades y objetivos de cada paciente.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BENEFICIOS ────────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-stone-900">Beneficios del Peeling Facial en Turrialba</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">Nuestro tratamiento de <strong>peeling químico facial en Turrialba</strong> puede ayudarte a mejorar globalmente la salud de tu piel.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Reducir manchas causadas por el sol",
              "Mejorar marcas y cicatrices de acné",
              "Disminuir líneas de expresión finas",
              "Mejorar la textura de la piel",
              "Minimizar apariencia de poros abiertos",
              "Estimular la regeneración celular",
              "Incrementar la luminosidad facial",
              "Apariencia más joven y saludable"
            ].map((benefit, i) => (
              <div key={i} className="bg-white p-6 border border-stone-100 shadow-sm flex items-start gap-3 hover:border-primary transition-colors">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-stone-700 leading-tight">{benefit}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-stone-400 italic">Muchas personas notan cambios visibles desde las primeras sesiones.</p>
        </div>
      </section>

      {/* ── MANCHAS ──────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
                Peeling Facial para Manchas en Turrialba
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                Las manchas faciales son una de las principales consultas en tratamientos estéticos. Nuestro peeling facial ayuda a mejorar la apariencia de:
              </p>
              <ul className="space-y-4 mb-8">
                {["Manchas solares", "Hiperpigmentación", "Manchas postinflamatorias", "Tono desigual de la piel"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-700 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                  </li>
                ))}
              </ul>
              <p className="text-stone-500 italic">Mediante protocolos personalizados buscamos obtener resultados progresivos y seguros para cada tipo de piel.</p>
            </motion.div>
            <div className="relative">
              <div className="aspect-square bg-stone-100 border border-stone-200 flex items-center justify-center p-8">
                 <Sparkles className="w-24 h-24 text-primary/20 animate-pulse" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-stone-900 text-white p-6 shadow-xl">
                 <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Resultados</p>
                 <p className="text-xl font-serif font-bold italic">Tono Unificado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACNÉ ─────────────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              Peeling Facial para Acné y Marcas de Acné
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              Si buscas un tratamiento para acné en Turrialba, el peeling facial puede ser una excelente alternativa. Este procedimiento contribuye a:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
               {[
                 { t: "Desobstruir poros", d: "Elimina impurezas profundas" },
                 { t: "Mejorar la textura", d: "Piel más lisa y suave" },
                 { t: "Reducir marcas", d: "Atenúa cicatrices superficiales" },
                 { t: "Uniformidad", d: "Piel con aspecto más balanceado" }
               ].map((item, i) => (
                 <div key={i} className="bg-white p-6 border border-stone-200 text-left">
                    <h4 className="font-bold text-stone-900 mb-1">{item.t}</h4>
                    <p className="text-sm text-stone-500">{item.d}</p>
                 </div>
               ))}
            </div>
            <p className="text-stone-500">La evaluación profesional permite determinar el protocolo adecuado para cada caso.</p>
          </motion.div>
        </div>
      </section>

      {/* ── REJUVENECIMIENTO ─────────────────────────── */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] bg-stone-900 overflow-hidden relative shadow-2xl">
                   <img src="/images/faciales-bg.webp" alt="Rejuvenecimiento Facial" className="w-full h-full object-cover opacity-60" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-white text-3xl font-serif font-bold italic text-center px-10">Luce una piel fresca, saludable y revitalizada.</p>
                   </div>
                </div>
             </div>
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">Rejuvenecimiento Facial en Turrialba</h2>
                <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
                   <p>Con el paso de los años la piel pierde luminosidad, elasticidad y uniformidad.</p>
                   <p>El peeling facial es uno de los tratamientos más utilizados dentro de los protocolos de <strong>rejuvenecimiento facial en Turrialba</strong> debido a que favorece la renovación de la piel y ayuda a mejorar signos visibles del envejecimiento.</p>
                   <p className="font-medium text-stone-900 italic">Es ideal para personas que desean una apariencia más fresca, saludable y revitalizada.</p>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROCESO ──────────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-stone-900 uppercase tracking-tighter">¿Cómo Realizamos el Peeling Facial en MJ?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Evaluación Personalizada", d: "Analizamos tu piel para determinar el tipo de peeling más adecuado." },
              { t: "Limpieza Profunda", d: "Preparamos la piel eliminando impurezas y residuos acumulados." },
              { t: "Aplicación del Peeling", d: "Realizamos la aplicación siguiendo protocolos profesionales." },
              { t: "Neutralización y Protección", d: "Controlamos el procedimiento para garantizar seguridad y comodidad." },
              { t: "Hidratación Especializada", d: "Finalizamos con productos que ayudan a proteger y restaurar la piel." }
            ].map((step, i) => (
              <div key={i} className="p-8 bg-white border border-stone-200 group hover:border-primary transition-colors">
                <span className="text-primary font-serif text-4xl font-bold mb-6 block opacity-20 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                <h4 className="text-xl font-serif font-bold text-stone-900 mb-4">{step.t}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFERENCIALES ────────────────────────────── */}
      <section className="py-24 bg-[#040f19] text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">¿Por Qué Elegir Nuestro Centro Estético en Turrialba?</h2>
            <p className="text-white/50 max-w-2xl mx-auto italic">En MJ Fisio Estética & Spa nos enfocamos en brindar tratamientos personalizados y atención profesional.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Valoración personalizada",
              "Protocolos adaptados a cada piel",
              "Productos profesionales",
              "Atención especializada",
              "Ambiente cómodo y relajante",
              "Ubicación estratégica en Turrialba",
              "Seguimiento de resultados"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-4 border-b border-white/10">
                <Sparkles className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-medium text-white/80">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-16 text-primary font-bold italic text-lg">Nuestro objetivo es ayudarte a mejorar la salud y apariencia de tu piel de forma segura.</p>
        </div>
      </section>

      {/* ── CANDIDATOS ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 leading-tight">¿Quiénes Son Candidatos para un Peeling Facial?</h2>
                <p className="text-stone-600 mb-8">Este tratamiento puede ser adecuado para personas que presentan:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {[
                    "Manchas faciales",
                    "Acné y marcas de acné",
                    "Poros abiertos",
                    "Textura irregular",
                    "Líneas finas de expresión",
                    "Piel opaca o sin luminosidad",
                    "Signos tempranos de envejecimiento"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <UserCheck className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm font-bold text-stone-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="flex-1 bg-stone-50 p-10 border border-stone-200 text-center">
               <Quote className="w-12 h-12 text-primary/10 mx-auto mb-6" />
               <p className="text-xl font-serif italic text-stone-800 leading-relaxed mb-6">"Durante la valoración determinaremos si este procedimiento es ideal para ti."</p>
               <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-stone-900 text-white px-8 py-4 font-bold tracking-widest uppercase hover:bg-primary transition-all text-[10px]">
                  Agenda tu valoración
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ───────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12 text-center">
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter">Preguntas Frecuentes</h2>
            <p className="text-stone-400 uppercase text-[10px] tracking-widest font-bold mt-2">Sobre Peeling Facial en Turrialba</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="border-t border-stone-200">
            {[
              { q: "¿Cuánto cuesta un peeling facial en Turrialba?", a: "El costo depende del tipo de peeling y las necesidades específicas de cada paciente. Te brindaremos información durante la valoración." },
              { q: "¿Cuántas sesiones de peeling facial necesito?", a: "La cantidad de sesiones varía según el objetivo del tratamiento y el estado de la piel." },
              { q: "¿El peeling facial ayuda a eliminar manchas?", a: "Sí, es uno de los procedimientos más utilizados para mejorar la apariencia de manchas faciales y tono desigual." },
              { q: "¿Sirve para las marcas de acné?", a: "Sí, puede ayudar a mejorar la apariencia de marcas superficiales y la textura de la piel." },
              { q: "¿Cuándo veo resultados?", a: "Muchas personas observan una piel más luminosa desde las primeras sesiones." },
              { q: "¿Dónde realizar un peeling facial en Turrialba?", a: "En MJ Estética & Wellness Center ofrecemos evaluación personalizada y tratamientos faciales adaptados a cada paciente." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <FaqItem question={item.q} answer={item.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">Agenda tu Cita para un Peeling Facial en Turrialba</h2>
            <p className="text-stone-600 text-lg mb-12 max-w-2xl mx-auto italic">
              Si estás buscando un tratamiento facial en Turrialba para mejorar manchas, marcas de acné o signos de envejecimiento, nuestro equipo está listo para ayudarte.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-primary text-white px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all text-xs"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar información por WhatsApp
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-stone-900 text-stone-900 px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-all text-xs"
              >
                Reserva tu espacio hoy
              </a>
            </div>
            <p className="mt-12 text-stone-400 font-bold uppercase tracking-[0.3em] text-[10px]">Tu piel merece atención profesional y tratamientos adaptados.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
