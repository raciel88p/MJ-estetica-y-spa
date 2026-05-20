import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, ArrowRight, Star, Clock, Calendar, Heart, ShieldCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export function HydrolipoclasiaContent({ waLink }: { waLink: string }) {
  return (
    <>
      {/* ── INTRO & CHECKLIST ────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-primary/30" />
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Protocolo Especializado</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-10 leading-tight">
              Recupera la confianza <br />
              <span className="text-primary italic font-light">en tu cuerpo</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              En MJ Estética & Wellness Center combinamos protocolos corporales especializados, atención personalizada y tecnología estética avanzada para ayudarte a mejorar la apariencia de zonas con grasa localizada y recuperar confianza en tu cuerpo.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {[
                "Tratamiento no invasivo",
                "Protocolos seguros y personalizados",
                "Resultados progresivos y naturales",
                "Atención profesional en Turrialba",
                "Sesiones rápidas y cómodas"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-stone-50 p-4 border border-stone-100">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-stone-700 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-stone-900 p-8 md:p-12 text-white relative overflow-hidden rounded-sm">
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold text-white mb-6">¿Te gustaría saber si este tratamiento es ideal para ti?</h3>
                <ul className="space-y-4 mb-10">
                  {[
                    "Agenda hoy tu valoración corporal personalizada",
                    "Consulta paquetes y promociones activas",
                    "Escríbenos por WhatsApp y recibe atención inmediata"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary">👉</span>
                      <span className="text-white/90 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 font-bold tracking-[0.15em] uppercase hover:bg-primary/90 transition-all shadow-xl"
                >
                  <MessageCircle className="w-4 h-4" />
                  Consultar por WhatsApp
                </a>
              </div>
              <Star className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5 rotate-12" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── QUÉ ES & ZONAS ────────────────────────────── */}
      <section className="py-24 bg-stone-50 border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">¿Qué es la hidrolipoclasia?</h2>
              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p>
                  La hidrolipoclasia es un tratamiento corporal no invasivo diseñado para ayudar a reducir grasa localizada y mejorar el contorno corporal mediante protocolos especializados que combinan diferentes tecnologías y técnicas estéticas.
                </p>
                <p>
                  Este tratamiento suele aplicarse en zonas donde la grasa tiende a acumularse y es difícil de reducir únicamente con dieta o ejercicio.
                </p>
              </div>

              <div className="mt-10 p-6 bg-white border border-stone-200 shadow-sm">
                <p className="text-stone-900 font-bold mb-4 uppercase tracking-widest text-xs">Es importante entender que:</p>
                <ul className="space-y-3">
                  {["No reemplaza una cirugía", "No sustituye hábitos saludables", "Los resultados son progresivos", "Requiere seguimiento profesional"].map((text, i) => (
                    <li key={i} className="flex items-center gap-2 text-stone-600 text-sm">
                      <span className="text-primary font-bold">✅</span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">Zonas más comunes:</h2>
              <div className="grid grid-cols-1 gap-3">
                {["Abdomen", "Cintura", "Flancos", "Espalda", "Brazos", "Piernas", "Zona lumbar"].map((zona, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-4 border border-stone-100 rounded-sm hover:shadow-sm transition-shadow">
                    <div className="w-2 h-2 rounded-full bg-primary/40" />
                    <span className="text-stone-700 font-medium">{zona}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN & FRUSTRACIONES ────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 text-center">¿Para quién está recomendado este tratamiento?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Desean mejorar su contorno corporal",
                "Buscan reducir acumulaciones localizadas de grasa",
                "Quieren un tratamiento no invasivo",
                "Desean complementar ejercicio y alimentación saludable",
                "Buscan mejorar visualmente ciertas zonas del cuerpo"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-stone-50 p-5 border border-stone-100">
                  <Heart className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-stone-700 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-900 p-10 md:p-16 text-white rounded-sm shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6 text-center">
                Si sientes que haces esfuerzos y aun así hay áreas que no cambian… <br className="hidden md:block" />
                <span className="text-primary italic">no estás solo(a).</span>
              </h3>
              <p className="text-white/60 mb-10 text-center uppercase tracking-widest text-xs font-bold">Muchas personas llegan a MJ frustradas porque:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
                {[
                  "“Hago ejercicio y mi abdomen no baja”",
                  "“La cintura no mejora aunque me cuide”",
                  "“Siento acumulación en flancos o espalda”",
                  "“Quiero verme mejor sin cirugía”"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/5 p-6 border border-white/10 rounded-sm">
                    <span className="text-red-400">❌</span>
                    <span className="text-white/90 font-medium italic">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-lg leading-relaxed max-w-2xl mx-auto">
                Y precisamente ahí es donde una valoración profesional puede ayudarte a descubrir el protocolo correcto para tu cuerpo.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BENEFICIOS ────────────────────────────────── */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Beneficios reales de la hidrolipoclasia</h2>
              <p className="text-stone-500 italic">En MJ creemos en expectativas reales y resultados honestos.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              {[
                "Mejorar el contorno corporal",
                "Reducir visualmente volumen localizado",
                "Complementar hábitos saludables",
                "Mejorar la apariencia de ciertas zonas",
                "Sentirte más cómodo(a) con tu cuerpo",
                "Obtener sesiones rápidas con mínima recuperación"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-5 border border-stone-200">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-stone-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-center font-serif text-2xl text-stone-900 font-bold">
              Lo más importante: buscamos resultados naturales y progresivos, no promesas irreales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ─────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
               ¿Cómo funciona una sesión de hidrolipoclasia?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                s: "Paso 1",
                t: "Valoración personalizada",
                d: "Analizamos objetivos, zonas, hábitos y tipo de acumulación para darte recomendaciones personalizadas."
              },
              {
                s: "Paso 2",
                t: "Aplicación del protocolo",
                d: "Se realiza el tratamiento según la zona y necesidad específica de tu cuerpo."
              },
              {
                s: "Paso 3",
                t: "Protocolos adicionales",
                d: "Dependiendo del caso, pueden recomendarse protocolos adicionales para potenciar resultados."
              },
              {
                s: "Paso 4",
                t: "Mejora tus resultados",
                d: "Te orientamos sobre hidratación, alimentación, actividad física y cuidados posteriores."
              }
            ].map((step, i) => (
              <div key={i} className="relative bg-stone-50 p-8 border border-stone-100 h-full">
                <span className="text-xs font-bold tracking-widest text-primary uppercase mb-2 block">{step.s}</span>
                <h4 className="text-lg font-serif font-bold text-stone-900 mb-4">{step.t}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{step.d}</p>
                {i < 3 && <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/20 z-10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INFO IMPORTANTE & SESIONES ────────────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold mb-8 text-white">Información importante</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Duración aproximada</p>
                    <p className="text-lg font-medium">45–90 minutos</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-primary">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Frecuencia</p>
                    <p className="text-lg font-medium">Según valoración profesional</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-primary">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Recuperación</p>
                    <p className="text-lg font-medium">Mínima en la mayoría de casos</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-primary">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Resultados</p>
                    <p className="text-lg font-medium">Progresivos y personalizados</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold mb-8 text-white">¿Cuántas sesiones se recomiendan?</h2>
              <p className="text-white/70 leading-relaxed mb-8">
                La cantidad de sesiones depende de la zona tratada, tu objetivo corporal, hábitos personales, evaluación profesional y la respuesta individual de tu cuerpo.
              </p>
              <div className="p-6 bg-white/5 border border-white/10 mb-8 italic text-white/90">
                "Muchas personas observan cambios progresivos conforme avanzan las sesiones y mantienen hábitos saludables."
              </div>
              <div className="space-y-3">
                <p className="text-primary font-bold uppercase tracking-widest text-[10px]">En MJ contamos con:</p>
                {["Paquetes corporales personalizados", "Seguimiento profesional", "Protocolos adaptados a cada cuerpo"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── RESULTADOS REALES ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-10">Resultados reales y progresivos</h2>
            <div className="space-y-6 text-xl md:text-2xl font-serif italic text-stone-600 mb-16">
              <p>Imagina volver a sentirte cómodo(a) usando la ropa que te gusta.</p>
              <p>Mirarte al espejo y notar cambios reales.</p>
              <p>No buscar perfección… sino sentirte mejor contigo mismo(a).</p>
            </div>
            <p className="text-stone-800 font-medium leading-relaxed max-w-2xl mx-auto mb-16">
              En MJ Estética & Wellness Center creemos que el bienestar corporal también impacta tu seguridad, energía y autoestima.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
              {[
                "📸 Resultados reales",
                "📸 Casos personalizados",
                "📸 Seguimiento progresivo"
              ].map((item, i) => (
                <div key={i} className="text-stone-900 font-bold uppercase tracking-widest text-sm">
                  {item}
                </div>
              ))}
            </div>
            <p className="text-primary font-bold animate-bounce uppercase tracking-tighter">Desliza para ver la transformación 👇</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
