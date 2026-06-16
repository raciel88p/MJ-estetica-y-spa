import { motion } from "framer-motion";
import {
  MessageCircle,
  Star,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Sparkles,
  Gift,
  Check,
  Clock,
  MapPin,
  ChevronDown,
  Quote,
  Heart,
  Info,
  Sun
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as any } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function MicroagujasVitaminaCContent({
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
            <div className="flex flex-col items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Sun className="w-6 h-6 text-primary" />
              </div>
              <p className="text-stone-800 text-xl md:text-2xl font-serif leading-relaxed italic max-w-3xl">
                "¿Te gustaría que tu piel se vea más luminosa, fresca y revitalizada sin perder naturalidad?"
              </p>
            </div>

            <div className="space-y-6 text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto mb-16">
              <p>
                En MJ Estética & Wellness Center hemos diseñado un protocolo premium de microagujas con vitamina C orientado a apoyar la luminosidad facial, la textura uniforme y el bienestar progresivo de la piel.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left pt-8">
                {[
                  "Tratamiento facial personalizado",
                  "Protocolos adaptados según tu piel",
                  "Experiencia skincare premium",
                  "Atención profesional y acompañamiento",
                  "Glow facial natural y rejuvenecimiento"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-stone-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
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
              Descarga GRATIS la guía: <br />
              <span className="text-primary italic font-light">“Cómo mejorar los resultados de tus Microagujas con Vitamina C”</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-left max-w-2xl mx-auto mb-12">
              {[
                "Cuidados antes y después",
                "Cómo prolongar el glow facial",
                "Errores que afectan resultados",
                "Recomendaciones skincare",
                "Tips para luminosidad y textura"
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
                Agendar Valoración Personalizada
              </a>
              <p className="text-white/40 text-[10px] tracking-widest uppercase">
                👉 Comenta la palabra <span className="text-white font-bold">VitaminaC</span> en Instagram para recibir acceso
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
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 uppercase tracking-tighter">¿Qué son las Microagujas con Vitamina C?</h2>
              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p>
                  Las microagujas con vitamina C son un protocolo de skincare avanzado que combina técnicas de microneedling facial con la aplicación de vitamina C orientada a apoyar la luminosidad, apariencia uniforme y sensación de renovación de la piel.
                </p>
                <p>
                  Este tratamiento busca estimular una experiencia de rejuvenecimiento progresivo y glow natural mediante protocolos personalizados según las necesidades específicas de cada persona.
                </p>
                <p>
                  Cada piel es diferente, por eso en MJ Estética & Wellness Center realizamos una valoración facial individualizada antes de iniciar cualquier protocolo.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-stone-50 p-10 border border-stone-100 rounded-sm shadow-sm"
            >
              <Quote className="w-12 h-12 text-primary/10 mb-6" />
              <p className="text-xl font-serif italic text-stone-800 leading-relaxed">
                "Este tratamiento es ideal para quienes desean cuidar su piel desde un enfoque natural, progresivo y profesional."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: QUÉ MEJORA ─────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 text-primary">Resultados</p>
            <h2 className="text-4xl font-serif font-bold text-white mb-6 uppercase tracking-tighter">¿Qué puede ayudar a mejorar?</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Glow y luminosidad facial",
              "Apariencia de textura uniforme",
              "Sensación de renovación facial",
              "Bienestar y cuidado profesional",
              "Apariencia revitalizada y fresca",
              "Protocolos de skincare premium",
              "Rejuvenecimiento progresivo"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 p-6 rounded-sm border border-white/10">
                <Check className="w-5 h-5 text-primary shrink-0" />
                <span className="text-stone-300 text-sm font-bold uppercase tracking-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: POR QUÉ VITAMINA C ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-tight">¿Por qué tantas personas buscan Microagujas con Vitamina C?</h2>
            <p className="text-stone-500 text-lg">Porque actualmente muchas personas desean verse más frescas sin resultados exagerados.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-4">
              {[
                "mejorar la apariencia de su piel",
                "incorporar skincare avanzado profesional",
                "apoyar la luminosidad facial",
                "sentirse más seguras frente al espejo"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-stone-600 text-sm">{text}</span>
                </div>
              ))}
            </div>
            <div className="bg-stone-50 p-8 border-l-4 border-primary">
              <p className="text-stone-700 leading-relaxed italic">
                "La vitamina C es reconocida dentro del skincare facial por asociarse con glow, luminosidad y bienestar de la piel, mientras que las microagujas permiten una experiencia estética avanzada orientada al rejuvenecimiento progresivo."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: BENEFICIOS ─────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Efectos Reales</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter">Beneficios reales</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Glow facial progresivo",
              "Sensación de renovación",
              "Apariencia más luminosa",
              "Textura facial más uniforme",
              "Experiencia skincare premium",
              "Bienestar facial profesional",
              "Rejuvenecimiento natural",
              "Protocolos personalizados"
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 border border-stone-100 shadow-sm rounded-sm">
                <div className="w-2 h-2 rounded-full bg-primary mb-4" />
                <span className="text-stone-700 font-bold uppercase text-xs tracking-widest">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-2xl font-serif italic text-primary">"Nuestro enfoque NO busca resultados artificiales. Buscamos que tu piel luzca saludable, fresca y naturalmente revitalizada."</p>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: PASO A PASO ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Metodología</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter">¿Cómo funciona el tratamiento?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { step: "01", title: "Valoración personalizada", desc: "Analizamos las necesidades de tu piel y diseñamos un protocolo individualizado." },
              { step: "02", title: "Limpieza y preparación", desc: "Preparamos la piel mediante protocolos profesionales de higiene y cuidado." },
              { step: "03", title: "Aplicación del protocolo", desc: "Se realiza el procedimiento utilizando técnicas avanzadas orientadas a glow facial." },
              { step: "04", title: "Cuidados posteriores", desc: "Te brindamos recomendaciones específicas para apoyar la recuperación." }
            ].map((s, i) => (
              <div key={i} className="p-10 bg-stone-50 border border-stone-100 rounded-sm relative">
                <span className="absolute top-6 right-8 text-4xl font-serif font-bold text-primary/10">{s.step}</span>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-4 uppercase tracking-tight">{s.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-stone-100 pt-12 text-center">
            {[
              { icon: <Clock className="w-5 h-5 mx-auto mb-2 text-primary" />, text: "60-90 min" },
              { icon: <Zap className="w-5 h-5 mx-auto mb-2 text-primary" />, text: "Ligero y Tolerable" },
              { icon: <Info className="w-5 h-5 mx-auto mb-2 text-primary" />, text: "Protector Solar" },
              { icon: <Sparkles className="w-5 h-5 mx-auto mb-2 text-primary" />, text: "Recuperación Var." }
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
             <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 uppercase text-center tracking-tighter">¿Para quién se recomienda?</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
               {[
                 "Personas que desean glow natural",
                 "Interesadas en rejuvenecimiento progresivo",
                 "Apariencia de textura irregular",
                 "Buscan skincare avanzado",
                 "Bienestar facial premium",
                 "Cuidar su piel profesionalmente"
               ].map((t, i) => (
                 <div key={i} className="flex items-center gap-3 bg-stone-50 p-4 rounded-sm">
                   <Check className="w-4 h-4 text-primary shrink-0" />
                   <span className="text-stone-600 text-xs font-bold uppercase">{t}</span>
                 </div>
               ))}
             </div>
             <div className="text-center">
                <p className="text-stone-900 font-serif text-xl italic">"Cada piel responde de manera distinta y los protocolos se adaptan individualmente."</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: TESTIMONIOS ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter">Lo que dicen nuestras clientas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "“Sentí mi piel mucho más luminosa y fresca después del protocolo.”", author: "Andrea M." },
              { text: "“Me encantó porque el resultado se ve natural y elegante.”", author: "Katherine R." },
              { text: "“Ahora siento mi piel más uniforme y con muchísimo glow.”", author: "Sofía V." }
            ].map((item, i) => (
              <div key={i} className="bg-stone-50 p-8 border border-stone-100 rounded-sm">
                <Quote className="w-6 h-6 text-primary/20 mb-4" />
                <p className="text-stone-600 italic font-serif mb-6">{item.text}</p>
                <p className="text-stone-900 font-bold text-xs uppercase tracking-widest">— {item.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: FAQ ─────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 leading-tight uppercase tracking-tighter">Preguntas Frecuentes</h2>
          </motion.div>
          <div className="space-y-4">
            {[
              { q: "¿Qué son las microagujas con vitamina C?", a: "Es un protocolo facial que combina microneedling con vitamina C orientado a apoyar glow, textura uniforme y bienestar de la piel." },
              { q: "¿Ayudan con glow facial?", a: "Muchas personas buscan este tratamiento por su enfoque en luminosidad y rejuvenecimiento progresivo." },
              { q: "¿Tiene recuperación?", a: "La recuperación puede variar según cada piel y protocolo aplicado." },
              { q: "¿Cuántas sesiones se recomiendan?", a: "Depende de los objetivos y evaluación personalizada." },
              { q: "¿Cuándo podrían observarse cambios?", a: "Los resultados y tiempos pueden variar según cada persona y continuidad del protocolo." }
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

      {/* ── SECCIÓN: POR QUÉ ELEGIRNOS ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-12 uppercase tracking-tighter">¿Por qué elegir MJ Estética & Wellness Center?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16">
                {[
                  "atención profesional",
                  "protocolos individualizados",
                  "skincare avanzado",
                  "experiencia premium",
                  "bienestar facial",
                  "acompañamiento personalizado",
                  "ambiente cómodo y seguro",
                  "enfoque natural y progresivo"
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-4 border-b border-stone-100 pb-4">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    <span className="text-stone-700 font-bold uppercase text-xs tracking-widest">{t}</span>
                  </div>
                ))}
              </div>
              <p className="text-2xl font-serif italic text-primary">"No creemos en resultados exagerados. Creemos en ayudarte a sentirte bien con tu piel."</p>
           </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: FINAL CTA ─────────────────── */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-8">
              <MapPin className="w-4 h-4" />
              <span className="text-[10px] font-bold tracking-widest uppercase">Turrialba, Costa Rica</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 uppercase tracking-tighter text-white leading-tight">Agenda tu valoración <br /> facial hoy</h2>
            <div className="flex flex-col items-center gap-6">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-primary px-12 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-all shadow-2xl">
                <MessageCircle className="w-5 h-5" /> Escríbenos por WhatsApp
              </a>
              <div className="flex gap-8 opacity-60">
                 <span className="text-[10px] font-bold uppercase">🚗 Parqueo</span>
                 <span className="text-[10px] font-bold uppercase">🕒 Horarios Flexibles</span>
                 <span className="text-[10px] font-bold uppercase">✨ Atención Personalizada</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
