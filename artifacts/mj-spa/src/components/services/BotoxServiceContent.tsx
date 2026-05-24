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
  Quote
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function BotoxServiceContent({
  waLink,
  faq
}: {
  waLink: string;
  faq?: { question: string; answer: string }[]
}) {
  return (
    <div className="bg-white">
      {/* ── SECCIÓN: INTRODUCCIÓN Y VALORES ────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex flex-col items-center text-center mb-12">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <p className="text-stone-800 text-xl md:text-2xl font-serif leading-relaxed italic max-w-3xl">
                "En MJ Estética & Wellness Center diseñamos protocolos de Botox Full Face enfocados en lograr una apariencia más armoniosa, elegante y natural, respetando completamente la expresión de tu rostro."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {[
                "Resultados sutiles y sofisticados",
                "Evaluación facial personalizada",
                "Protocolos individualizados",
                "Atención profesional en un ambiente premium y seguro",
                "Enfoque en naturalidad y armonización facial"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-stone-50 rounded-sm border border-stone-100">
                  <Star className="w-4 h-4 text-primary fill-primary/20 shrink-0" />
                  <span className="text-stone-700 text-sm font-medium">{item}</span>
                </div>
              ))}
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
              Guía GRATUITA: <br className="md:hidden" />
              <span className="text-primary italic font-light">“Cómo hacer que tu Botox dure más”</span>
            </h2>
            <p className="text-stone-300 mb-10 text-lg">
              Comenta la palabra <span className="text-white font-bold">“BOTOX”</span> en nuestro Instagram y recibe acceso inmediato a nuestra guía exclusiva con:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-left max-w-2xl mx-auto mb-12">
              {[
                "Cuidados posteriores",
                "Hábitos que prolongan resultados",
                "Errores que debes evitar",
                "Tips profesionales para mantener una apariencia fresca y natural"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-stone-200 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="https://www.instagram.com/mj_fisioestetica/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-primary transition-all shadow-xl"
            >
              <Instagram className="w-5 h-5" />
              IR A INSTAGRAM
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: QUÉ ES EL BOTOX FULL FACE ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
                ¿Qué es el <span className="text-primary italic font-light">Botox Full Face?</span>
              </h2>
              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p>
                  El Botox Full Face es un protocolo de armonización facial diseñado para ayudar a suavizar líneas de expresión y brindar una apariencia más descansada mediante aplicaciones estratégicas y personalizadas.
                </p>
                <p className="font-medium text-stone-900">
                  A diferencia de los enfoques exagerados, el objetivo NO es congelar el rostro ni eliminar tu expresión natural.
                </p>
                <div className="pt-6 border-t border-stone-100">
                  <p className="text-sm font-bold text-stone-900 uppercase tracking-widest mb-6">El verdadero objetivo es:</p>
                  <ul className="space-y-4">
                    {[
                      "Suavizar líneas dinámicas",
                      "Relajar tensiones faciales",
                      "Mantener naturalidad",
                      "Mejorar la armonía facial",
                      "Ayudar a prevenir marcas de expresión futuras"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="relative aspect-square bg-stone-100 rounded-sm overflow-hidden"
            >
               <img
                 src="/images/botox-full-face-bg.webp"
                 alt="Armonización Facial con Botox"
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-primary/5" />
               <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                 <p className="text-white text-sm italic font-serif">
                   "En MJ cada rostro se evalúa de forma individual porque entendemos que la belleza natural no debe verse artificial."
                 </p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: ZONAS A TRATAR ─────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-tight">
              ¿Qué zonas puede ayudar a tratar?
            </h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              Nuestro protocolo puede ayudar a trabajar distintas áreas faciales según evaluación profesional:
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Frente", "Entrecejo", "Patas de gallo", "Sonrisa gingival",
              "Mentón", "Cuello", "Líneas dinámicas", "Armonización completa"
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 text-center border border-stone-100 shadow-sm rounded-sm group hover:border-primary/30 transition-all">
                <p className="text-stone-900 font-bold text-xs uppercase tracking-widest mb-2 group-hover:text-primary transition-colors">{item}</p>
                <div className="w-6 h-0.5 bg-primary/20 mx-auto" />
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-stone-500 text-sm italic">
            Cada aplicación se realiza de forma estratégica para conservar movimiento natural y expresividad.
          </p>
        </div>
      </section>

      {/* ── SECCIÓN: NARRATIVA DE RESULTADOS ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-[#071e2e] p-10 md:p-20 text-white rounded-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />

            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 leading-tight">
                Imagina verte descansada… <br />
                <span className="text-primary italic font-light">incluso en tus días más ocupados</span>
              </h2>

              <div className="space-y-4 mb-12">
                {[
                  "Verse más frescas",
                  "Reducir apariencia de cansancio",
                  "Prevenir líneas de expresión",
                  "Mantener un rostro elegante y natural",
                  "Mejorar armonización facial sin cirugía"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-stone-300 text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-white/5 border-l-4 border-primary">
                <p className="text-xl font-serif italic text-white mb-4">
                  "El mejor Botox es el que NO se nota… pero sí se percibe."
                </p>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Cuando el protocolo está bien diseñado, las personas notan que te ves mejor, más relajada y rejuvenecida, sin entender exactamente por qué. Eso es armonización facial inteligente.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: BENEFICIOS CHECKLIST ─────────────────── */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4 uppercase tracking-tighter">Beneficios del Botox Full Face</h2>
             <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Apariencia más descansada",
              "Expresión facial más relajada",
              "Suavización de líneas de expresión",
              "Resultados naturales y sutiles",
              "Prevención de marcas dinámicas",
              "Armonización facial elegante",
              "Recuperación rápida",
              "Procedimiento mínimamente invasivo"
            ].map((item, i) => (
              <motion.div
                key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex items-center gap-3 p-6 bg-stone-50 border border-stone-100 rounded-sm"
              >
                <Sparkles className="w-5 h-5 text-primary shrink-0" />
                <span className="text-stone-700 font-bold text-sm uppercase tracking-tight leading-tight">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: PROCESO PASO A PASO ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-tight">¿Cómo funciona una sesión?</h2>
            <p className="text-stone-500">Un protocolo diseñado para tu comodidad y seguridad.</p>
          </motion.div>

          <div className="space-y-12">
            {[
              { step: "Paso 1", title: "Evaluación facial personalizada", desc: "Analizamos tus expresiones, simetría facial y objetivos estéticos." },
              { step: "Paso 2", title: "Diseño del protocolo", desc: "Se define un plan individualizado según las zonas a tratar y el resultado esperado." },
              { step: "Paso 3", title: "Aplicación", desc: "El procedimiento suele ser rápido y con molestias mínimas." },
              { step: "Paso 4", title: "Cuidados posteriores", desc: "Te brindamos recomendaciones específicas para optimizar duración y resultados." }
            ].map((item, i) => (
              <motion.div
                key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex flex-col md:flex-row gap-8 items-start border-l-2 border-primary/20 pl-8 relative ml-4"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                <div className="shrink-0">
                  <span className="text-primary font-bold text-sm uppercase tracking-widest">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">{item.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-6 bg-stone-50 rounded-sm">
              <Clock className="w-6 h-6 text-primary" />
              <div>
                <p className="text-[10px] text-stone-400 uppercase font-bold tracking-widest">Duración</p>
                <p className="text-sm font-bold text-stone-900">20–40 minutos</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-stone-50 rounded-sm">
              <ShieldCheck className="w-6 h-6 text-primary" />
              <div>
                <p className="text-[10px] text-stone-400 uppercase font-bold tracking-widest">Recuperación</p>
                <p className="text-sm font-bold text-stone-900">Inmediata / Rápida</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-stone-50 rounded-sm">
              <Sparkles className="w-6 h-6 text-primary" />
              <div>
                <p className="text-[10px] text-stone-400 uppercase font-bold tracking-widest">Resultados</p>
                <p className="text-sm font-bold text-stone-900">Progresivos y naturales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: CUÁNDO SE NOTAN LOS RESULTADOS ─────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 uppercase tracking-tight">
               ¿Cuándo se empiezan a notar los resultados?
            </h2>
            <p className="text-stone-600 text-lg mb-12 max-w-2xl mx-auto">
               Los cambios suelen comenzar a percibirse progresivamente durante los días posteriores al procedimiento.
            </p>

            <div className="bg-white p-10 border border-stone-200 rounded-sm text-left max-w-2xl mx-auto mb-16 shadow-sm">
               <p className="font-bold text-stone-900 text-xs uppercase tracking-[0.2em] mb-8 border-b border-stone-100 pb-4">El resultado final dependerá de:</p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12">
                 {["Evaluación facial", "Tipo de piel", "Expresividad muscular", "Hábitos del paciente", "Cuidados posteriores"].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <Check className="w-4 h-4 text-primary shrink-0" />
                     <span className="text-stone-600 text-sm font-medium">{item}</span>
                   </div>
                 ))}
               </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 border-t border-stone-200 pt-12">
              {["Naturalidad", "Expresión armónica", "Resultados elegantes"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-bold text-stone-900 uppercase text-[10px] tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: TESTIMONIOS (CITAS) ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">La voz de nuestras pacientes</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter">Lo que más aman</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "“Me veía cansada todo el tiempo y ahora mi rostro luce fresco pero completamente natural.”",
              "“Tenía miedo de verme rígida, pero el resultado fue súper sutil.”",
              "“Se nota muchísimo la diferencia en la armonía facial sin perder expresión.”",
              "“Amé que me explicaran todo y que el enfoque fuera tan natural.”"
            ].map((text, i) => (
              <motion.div
                key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-stone-50 p-8 rounded-sm border border-stone-100 flex flex-col justify-between"
              >
                <Quote className="w-8 h-8 text-primary/20 mb-6" />
                <p className="text-stone-600 text-sm italic leading-relaxed mb-8">{text}</p>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-primary fill-primary" />)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: MITO RÍGIDO ─────────────────── */}
      <section className="py-24 bg-[#071e2e] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 uppercase tracking-tight">¿El Botox Full Face deja el rostro rígido?</h2>
             <div className="max-w-2xl mx-auto space-y-6">
               <p className="text-2xl font-serif italic text-primary">"No necesariamente."</p>
               <p className="text-stone-400 text-lg leading-relaxed">
                 Cuando el tratamiento se realiza correctamente y de forma personalizada, el objetivo es mantener movimiento natural y expresión facial armónica.
               </p>
               <div className="pt-8 flex justify-center">
                  <div className="bg-primary/10 border border-primary/20 px-8 py-4 rounded-sm">
                    <p className="text-sm font-bold tracking-widest uppercase text-white">En MJ Estética & Wellness Center priorizamos resultados sutiles y elegantes.</p>
                  </div>
               </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: FAQ (PREGUNTAS FRECUENTES) ─────────────────── */}
      {faq && faq.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
              <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Resolviendo dudas</p>
              <h2 className="text-4xl font-serif font-bold text-stone-900 leading-tight">Preguntas Frecuentes</h2>
            </motion.div>

            <div className="space-y-4">
              {faq.map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                >
                  <details className="group bg-stone-50 border border-stone-100 rounded-sm overflow-hidden transition-all duration-300 open:shadow-md">
                    <summary className="p-6 cursor-pointer flex justify-between items-center list-none font-serif font-bold text-stone-900 group-hover:text-primary">
                      {item.question}
                      <span className="text-primary transition-transform duration-300 group-open:rotate-180">
                        <ChevronDown className="w-5 h-5" />
                      </span>
                    </summary>
                    <div className="p-6 pt-0 text-stone-600 text-sm leading-relaxed border-t border-stone-200/50">
                      {item.answer}
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SECCIÓN: POR QUÉ ELEGIR MJ ─────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-tight">
              ¿Por qué elegir MJ Estética & Wellness Center?
            </h2>
            <p className="text-stone-500 text-lg italic font-serif">
              "Porque entendemos que la estética moderna no se trata de cambiar tu rostro… sino de potenciarlo de forma inteligente y natural."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl mx-auto">
            {[
              "Protocolos faciales personalizados",
              "Atención estética profesional",
              "Enfoque premium y humano",
              "Resultados orientados a naturalidad",
              "Ambiente cómodo, elegante y seguro",
              "Experiencia en armonización facial"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-stone-700 text-sm font-bold uppercase tracking-tight">{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-16 text-center text-stone-900 font-serif text-xl italic max-w-2xl mx-auto border-t border-stone-200 pt-12">
            Nuestro objetivo es ayudarte a verte fresca, descansada y segura… sin perder tu esencia.
          </p>
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
             <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 uppercase tracking-tighter">Botox Full Face en Turrialba 📍</h2>
             <p className="text-stone-500 text-lg mb-12 max-w-2xl mx-auto">
                Atendemos pacientes en Turrialba y zonas cercanas que buscan resultados de alto nivel en un entorno clínico de confianza.
             </p>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
               {[
                 "Rejuvenecimiento facial natural",
                 "Prevención de líneas de expresión",
                 "Apariencia descansada",
                 "Armonización facial premium",
                 "Protocolos personalizados y seguros"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 bg-stone-50 p-4 border border-stone-100 rounded-sm">
                   <Check className="w-4 h-4 text-primary shrink-0" />
                   <span className="text-stone-600 text-xs font-bold uppercase">{item}</span>
                 </div>
               ))}
             </div>

             <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-60">
                <span className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase">🚗 Parqueo disponible</span>
                <span className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase">📲 Atención por WhatsApp</span>
                <span className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase">🕒 Horarios flexibles</span>
             </div>

             <div className="mt-20">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all shadow-2xl hover:-translate-y-1 active:translate-y-0"
                >
                  <MessageCircle className="w-5 h-5" />
                  Agendar Mi Valoración
                </a>
             </div>
           </motion.div>
        </div>
      </section>
    </div>
  );
}
