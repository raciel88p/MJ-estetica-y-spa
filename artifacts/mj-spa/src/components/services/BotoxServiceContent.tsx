import { motion } from "framer-motion";
import { MessageCircle, Star, CheckCircle2, ShieldCheck, Zap, Sparkles, Microscope, ChevronDown } from "lucide-react";

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
    <>
      {/* ── SECCIÓN: PARA QUIÉN ES ────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                 <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-stone-900 uppercase tracking-tight">
                ¿Es para ti el Botox Full Face?
              </h2>
            </div>

            <div className="bg-stone-50 p-8 md:p-12 rounded-sm border border-stone-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
                 <Star className="w-32 h-32 fill-primary" />
              </div>

              <p className="text-stone-700 mb-8 font-medium text-lg italic">
                "Ideal para quienes buscan refrescar su imagen sin perder la esencia de su rostro."
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12 mb-10">
                {[
                  "Suavizar arrugas en frente y entrecejo",
                  "Eliminar las 'patas de gallo' laterales",
                  "Elevar sutilmente la cola de la ceja",
                  "Prevenir que las líneas de expresión se vuelvan permanentes",
                  "Eliminar el aspecto de cansancio o enfado",
                  "Lucir una piel más tersa y descansada"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-white border-l-4 border-primary shadow-sm inline-block">
                <p className="text-stone-900 font-bold text-sm">
                   Resultados naturales: Mantenemos tu capacidad de sonreír y expresarte con total libertad.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: CIENCIA Y PRECISIÓN (CIENCIA) ────────── */}
      <section className="py-24 bg-stone-50 border-y border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="flex items-center gap-2 mb-4">
                <Microscope className="w-4 h-4 text-primary" />
                <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Ciencia y Precisión</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 leading-tight uppercase">
                ¿Cómo funciona <br /><span className="text-primary italic font-light lowercase">la magia del botox?</span>
              </h2>
              <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
                <p>
                  La toxina botulínica no es un "relleno". Su función es relajar temporalmente los músculos responsables de las arrugas dinámicas (aquellas que aparecen al gesticular).
                </p>
                <p>
                  Al suavizar la contracción muscular, la piel que se encuentra encima se relaja, permitiendo que las líneas existentes se difuminen y evitando que se conviertan en surcos profundos o arrugas estáticas.
                </p>
                <div className="bg-white p-5 border border-stone-200 mt-8">
                  <h4 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    Efecto Preventivo
                  </h4>
                  <p className="text-xs">
                    Aplicado a tiempo, el Botox actúa como un "entrenamiento" para que tus músculos no marquen la piel, retrasando significativamente los signos de envejecimiento.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="relative aspect-square md:aspect-video lg:aspect-square bg-stone-200 rounded-sm overflow-hidden shadow-2xl"
            >
               <img
                 src="/images/botox-full-face-bg.webp"
                 alt="Aplicación técnica de Botox"
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: QUÉ INCLUYE (PROCEDIMIENTO) ────────── */}
      <section className="py-24 bg-[#071e2e] text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="absolute top-0 right-0 opacity-5 -translate-y-1/2 translate-x-1/2">
            <Zap className="w-96 h-96 text-primary" />
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4 flex items-center justify-center gap-3 text-white uppercase tracking-tight">
              Protocolo Premium
            </h2>
            <p className="text-stone-400 leading-relaxed text-lg max-w-2xl mx-auto">
              Cada aplicación es una obra de arte basada en la anatomía única de tu rostro.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
          >
            {[
              { title: "Valoración Facial 3D", desc: "Mapeo muscular dinámico para determinar puntos exactos de aplicación." },
              { title: "Selección Premium", desc: "Utilizamos exclusivamente marcas líderes mundiales con alta pureza." },
              { title: "Micro-Inyecciones", desc: "Uso de agujas extra-finas para una experiencia mínimamente molesta." },
              { title: "Técnica de Apertura", desc: "Diseño específico para elevar cejas y refrescar la mirada." },
              { title: "Protocolo Post-Cuidado", desc: "Entrega de kit de instrucciones para maximizar la duración del efecto." },
              { title: "Retoque de Cortesía", desc: "Control a los 15 días para asegurar simetría y satisfacción total." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white/5 p-6 rounded-sm border border-white/10 hover:bg-white/10 transition-all group">
                <h4 className="text-primary font-bold text-sm mb-2 flex items-center gap-2">
                  <Star className="w-3 h-3 fill-primary" />
                  {item.title}
                </h4>
                <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-center gap-4 p-6 bg-primary/10 border border-primary/20 rounded-sm">
            <ShieldCheck className="w-10 h-10 text-primary shrink-0" />
            <p className="text-sm text-stone-200">
              <span className="font-bold text-white block mb-1 uppercase tracking-widest text-[10px]">Seguridad Médica</span>
              Procedimiento realizado bajo estrictas normas de bioseguridad por médicos especialistas debidamente colegiados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: FILOSOFÍA ─────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="inline-block p-4 rounded-full bg-stone-50 mb-8">
               <Star className="w-8 h-8 text-primary fill-primary/20" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-10 uppercase tracking-tighter leading-[1.1]">
              REJUVENECER <br /> <span className="text-primary font-light italic lowercase">sin cambiar quién eres</span>
            </h2>
            <div className="space-y-8 text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl mx-auto">
              <p>
                Nuestra meta es que tus amigos y familiares te digan <span className="text-stone-900 font-bold">"qué bien te ves"</span>, no "¿qué te hiciste?".
              </p>
              <div className="pt-8 border-t border-stone-100">
                <p className="font-serif italic text-3xl text-stone-900 leading-tight">
                  "El Botox perfecto es aquel que es invisible a los ojos, <br className="hidden md:block" /> pero evidente en la frescura de tu piel."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: FAQ ───────────────────────────── */}
      {faq && faq.length > 0 && (
        <section className="py-24 bg-white border-t border-stone-100">
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

      {/* ── SECCIÓN: AGENDA ───────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#071e2e] p-10 md:p-16 relative overflow-hidden text-center shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 uppercase tracking-tight">¿Lista para brillar con luz propia?</h2>
              <p className="text-white/60 mb-12 text-lg leading-relaxed max-w-2xl mx-auto">
                No permitas que las arrugas de expresión oculten la vitalidad de tu rostro. Reserva tu valoración médica y da el primer paso hacia una versión más fresca de ti misma.
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 font-bold tracking-[0.2em] uppercase hover:bg-primary/90 transition-all shadow-[0_20px_50px_rgba(193,157,83,0.3)] hover:-translate-y-1 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar Mi Valoración
              </a>
              <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-40">
                 <span className="text-[10px] text-white font-bold tracking-[0.2em] uppercase">✓ Marcas Premium</span>
                 <span className="text-[10px] text-white font-bold tracking-[0.2em] uppercase">✓ Médicos Expertos</span>
                 <span className="text-[10px] text-white font-bold tracking-[0.2em] uppercase">✓ Resultados Naturales</span>
              </div>
              <p className="mt-10 text-white/30 text-[9px] tracking-widest uppercase">
                * Los resultados y la cantidad de producto varían según cada individuo.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
