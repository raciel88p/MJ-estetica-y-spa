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
  Award
} from "lucide-react";
import { useState } from "react";
import type { ServicePageData } from "@/data/services";

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

export function LaserDespigmentanteContent({ service, waLink }: { service: ServicePageData; waLink: string }) {
  return (
    <div className="bg-white">
      {/* ── INTRO SECTION ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Renovación Facial</span>
            </div>
            <p className="text-stone-600 text-lg leading-relaxed mb-6 italic">
              ¿Sientes que las manchas, el tono irregular o la falta de luminosidad hacen que tu piel luzca cansada o apagada?
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              En <span className="font-bold text-stone-900">MJ Estética & Wellness Center</span> desarrollamos protocolos personalizados de láser despigmentante orientados a apoyar la apariencia de una piel más luminosa, uniforme y revitalizada mediante tecnología estética avanzada y skincare premium.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "✨ Glow natural",
                "✨ Luminosidad facial progresiva",
                "✨ Protocolos personalizados",
                "✨ Experiencia estética premium",
                "✨ Atención profesional en Turrialba"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-stone-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CORE TECHNOLOGY ──────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              Descubre cómo mejorar la apariencia de tu piel con tecnología estética avanzada
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              El láser despigmentante es un tratamiento facial diseñado para apoyar protocolos de luminosidad, apariencia de tono uniforme y rejuvenecimiento facial mediante tecnología orientada al bienestar y cuidado avanzado de la piel.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              Cada piel tiene necesidades diferentes, por eso en MJ realizamos una valoración personalizada para recomendar el protocolo más adecuado según objetivos, textura, sensibilidad y tipo de piel.
            </p>
          </motion.div>

          <div className="bg-white p-10 border border-stone-200 shadow-sm">
             <h3 className="text-xl font-serif font-bold text-stone-900 mb-8">¿Qué puede ayudar a mejorar este tratamiento?</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
               {[
                 "Apariencia de tono uniforme",
                 "Glow y luminosidad facial",
                 "Sensación de renovación facial",
                 "Apariencia revitalizada",
                 "Textura visualmente más uniforme",
                 "Protocolos de skincare avanzado",
                 "Bienestar y cuidado de la piel",
                 "Experiencia facial premium"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                   <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                   <span className="text-stone-700 font-medium text-sm">{item}</span>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* ── MARKETING / PHILOSOPHY ────────────────────── */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-6">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">¿Por qué muchas personas eligen el láser despigmentante?</h2>
             <p className="text-stone-600 text-lg leading-relaxed italic mb-12">
               Porque buscan verse más frescas, luminosas y seguras sin necesidad de cambios exagerados.
             </p>
           </motion.div>

           <div className="space-y-8 text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto mb-16">
             <p>Muchas veces las manchas faciales, el tono desigual o la pérdida de glow hacen que la piel se vea más cansada de lo que realmente está.</p>
             <div className="p-8 bg-primary/5 border-l-4 border-primary">
                <p className="text-stone-900 font-bold mb-4">El problema no siempre es la edad.</p>
                <p>Muchas veces es acumulación de sol, estrés, cambios hormonales o simplemente falta de protocolos adecuados para la piel.</p>
             </div>
             <p>Y aunque existen muchísimos productos, mascarillas o rutinas virales… la mayoría no trabajan de manera personalizada.</p>
             <p className="font-bold text-stone-900">Ahí es donde un protocolo profesional puede marcar una gran diferencia.</p>
             <p>En MJ Estética & Wellness Center combinamos experiencia skincare premium, evaluación individualizada y tecnología estética avanzada para crear protocolos orientados a luminosidad facial y bienestar de la piel.</p>
           </div>
        </div>
      </section>

      {/* ── METHODOLOGY ──────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-stone-900">¿Cómo funciona el tratamiento con láser despigmentante?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { s: "Paso 1", t: "Valoración facial personalizada", d: "Analizamos tu piel, objetivos y necesidades específicas para recomendar el protocolo más adecuado." },
              { s: "Paso 2", t: "Preparación de la piel", d: "Se prepara la piel mediante protocolos orientados a confort y cuidado facial." },
              { s: "Paso 3", t: "Aplicación del protocolo láser", d: "La sesión se realiza de forma profesional y personalizada según sensibilidad y objetivos." },
              { s: "Paso 4", t: "Recomendaciones posteriores", d: "Te guiamos con cuidados posteriores, protección solar y seguimiento profesional para apoyar mejores resultados." }
            ].map((step, i) => (
              <div key={i} className="relative bg-white p-8 border border-stone-200 shadow-sm group">
                <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block font-sans">{step.s}</span>
                <h4 className="text-lg font-serif font-bold text-stone-900 mb-4 leading-tight">{step.t}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS SECTION ─────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-8 text-white">Beneficios del láser despigmentante</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "Apariencia más luminosa",
              "Glow facial progresivo",
              "Sensación de renovación",
              "Experiencia skincare premium",
              "Bienestar facial",
              "Protocolos personalizados",
              "Rejuvenecimiento facial orientado a luminosidad",
              "Atención profesional y seguimiento individualizado"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.05}}}}
                className="flex items-center gap-4 p-4 border-b border-white/10 group hover:bg-white/5 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <span className="text-white/90 font-medium text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECOMMENDED FOR ──────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">¿Para quién se recomienda este tratamiento?</h2>
            <p className="text-stone-500">Este tratamiento puede ser ideal para personas que buscan:</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Glow facial natural",
              "Apariencia más uniforme",
              "Protocolos de skincare avanzado",
              "Luminosidad facial",
              "Bienestar de la piel",
              "Rejuvenecimiento facial progresivo",
              "Experiencias estéticas premium"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-stone-50 rounded-sm border border-stone-100">
                <Target className="w-4 h-4 text-primary shrink-0" />
                <span className="text-stone-700 font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATOR ───────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">Lo que hace diferente a MJ Estética & Wellness Center</h2>
            <p className="text-stone-600 text-lg mb-4">No creemos en tratamientos genéricos. Creemos que cada piel merece un protocolo personalizado.</p>
            <p className="text-primary font-bold uppercase tracking-widest text-xs">Por eso nuestra experiencia está orientada a:</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16">
             {[
               { icon: <Zap className="w-5 h-5" />, t: "Tecnología estética avanzada" },
               { icon: <Target className="w-5 h-5" />, t: "Protocolos individualizados" },
               { icon: <ShieldCheck className="w-5 h-5" />, t: "Atención profesional" },
               { icon: <Award className="w-5 h-5" />, t: "Ambiente cómodo y seguro" },
               { icon: <Sparkles className="w-5 h-5" />, t: "Experiencia skincare premium" },
               { icon: <Clock className="w-5 h-5" />, t: "Seguimiento personalizado" },
               { icon: <UserCheck className="w-5 h-5" />, t: "Evaluación facial profesional" }
             ].map((item, i) => (
               <div key={i} className="bg-white p-6 border border-stone-200 flex flex-col items-center text-center group hover:border-primary transition-colors">
                  <div className="text-primary mb-4">{item.icon}</div>
                  <span className="text-stone-800 font-bold text-sm">{item.t}</span>
               </div>
             ))}
          </div>

          <p className="text-center text-stone-600 italic max-w-2xl mx-auto leading-relaxed">
            Nuestro objetivo no es solamente realizar un tratamiento. Buscamos ayudarte a sentirte más cómoda, segura y feliz con la apariencia de tu piel.
          </p>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900">Testimonios de experiencias reales</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "“Sentí mi piel mucho más luminosa y fresca después de las sesiones.”",
              "“Me encantó que el protocolo fuera personalizado y explicaran cada paso.”",
              "“La experiencia fue súper profesional y el glow facial se veía muy natural.”"
            ].map((text, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{...fadeUp, visible: {...fadeUp.visible, transition: {delay: i*0.1}}}}
                className="bg-stone-50 p-8 border border-stone-100 relative"
              >
                <Quote className="w-8 h-8 text-primary/10 absolute top-4 right-4" />
                <p className="text-stone-600 mb-6 leading-relaxed italic">{text}</p>
                <p className="text-primary text-[10px] font-bold tracking-widest uppercase">— Paciente MJ</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ───────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12 text-center">
            <h2 className="text-4xl font-serif font-bold text-stone-900">Preguntas Frecuentes</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="border-t border-stone-200">
            {[
              { q: "¿Qué es el láser despigmentante?", a: "Es un protocolo facial orientado a apoyar la apariencia de tono uniforme y luminosidad mediante tecnología estética avanzada." },
              { q: "¿Ayuda con manchas faciales?", a: "Puede apoyar protocolos relacionados con apariencia uniforme y glow facial según evaluación personalizada." },
              { q: "¿Tiene recuperación?", a: "Dependiendo de cada piel, pueden existir recomendaciones posteriores y uso importante de protector solar." },
              { q: "¿Cuántas sesiones se recomiendan?", a: "La cantidad puede variar según objetivos y evaluación facial individualizada." },
              { q: "¿Se puede combinar con otros tratamientos?", a: "Sí, muchas personas combinan protocolos faciales y skincare avanzado según recomendación profesional." },
              { q: "¿Cuándo se observan cambios?", a: "Cada piel responde diferente. Los resultados suelen percibirse progresivamente." },
              { q: "¿Qué cuidados posteriores requiere?", a: "Protección solar, hidratación y seguimiento profesional." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <FaqItem question={item.q} answer={item.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROGRAMS SECTION ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-900 text-white p-12 relative overflow-hidden">
             <div className="relative z-10">
               <h2 className="text-3xl font-serif font-bold mb-10 text-center text-white">Programas y valoraciones</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                 <div className="space-y-4">
                   {["✨ Valoraciones faciales personalizadas", "✨ Programas glow facial", "✨ Protocolos skincare premium"].map((item, i) => (
                     <p key={i} className="text-lg font-medium">{item}</p>
                   ))}
                 </div>
                 <div className="space-y-4">
                   {["✨ Advanced facial care", "✨ Paquetes de cuidado facial"].map((item, i) => (
                     <p key={i} className="text-lg font-medium">{item}</p>
                   ))}
                 </div>
               </div>
               <div className="border-t border-white/10 pt-10 flex flex-col items-center text-center">
                 <p className="text-white/50 text-xs uppercase tracking-widest font-bold">Consulta disponibilidad y opciones según tu piel</p>
               </div>
             </div>
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </motion.div>
        </div>
      </section>

      {/* ── LEAD MAGNET ──────────────────────────────── */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-white/60 text-xs font-bold tracking-[0.4em] uppercase mb-4">🎁 RECURSO GRATUITO EXCLUSIVO</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Guía Gratuita:</h2>
              <p className="text-2xl font-serif mb-10 italic">“Cómo mejorar los resultados de tu tratamiento despigmentante”</p>

              <div className="max-w-xl mx-auto bg-white p-10 text-stone-900 shadow-2xl">
                 <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-4">💌 Comenta la palabra:</p>
                 <p className="text-5xl font-serif font-bold text-primary mb-10 underline decoration-stone-200">“DESPIGMENTANTE”</p>
                 <p className="text-sm text-stone-500 leading-relaxed mb-8">y recibe GRATIS nuestra guía con recomendaciones para apoyar:</p>

                 <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-10 text-left">
                   {["Glow facial", "Luminosidad", "Cuidado posterior", "Protección solar", "Rutinas skincare", "Bienestar de la piel"].map((item, i) => (
                     <div key={i} className="flex items-center gap-2">
                       <CheckCircle2 className="w-3 h-3 text-primary" />
                       <span className="text-[10px] font-bold text-stone-700">{item}</span>
                     </div>
                   ))}
                 </div>

                 <a
                    href="https://www.instagram.com/mj_fisioestetica/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-stone-900 text-white py-4 font-bold tracking-widest uppercase hover:bg-primary transition-colors text-xs"
                 >
                    <Instagram className="w-4 h-4" />
                    IR A INSTAGRAM
                 </a>
              </div>
           </motion.div>
        </div>
        <Sparkles className="absolute -bottom-20 -left-20 w-64 h-64 text-white/5 rotate-12" />
      </section>

      {/* ── FINAL CTA ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">Agenda tu valoración facial hoy</h2>
            <p className="text-stone-600 text-lg mb-12 max-w-2xl mx-auto">
              Tu piel merece atención profesional, protocolos personalizados y una experiencia premium orientada a bienestar y luminosidad facial.
            </p>

            <div className="bg-stone-50 p-10 border border-stone-200 mb-12">
               <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">📍 MJ Estética & Wellness Center — Turrialba</h3>
               <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm font-bold text-stone-700">
                  <span>✅ Agenda tu valoración facial</span>
                  <span>✅ Descubre el protocolo ideal</span>
                  <span>✅ Consulta disponibilidad</span>
               </div>
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all text-xs"
            >
              <MessageCircle className="w-5 h-5" />
              ESCRIBIR POR WHATSAPP HOY
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
