import { motion } from "framer-motion";
import { MessageCircle, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as any } },
};

export function AdnSalmonContent({ waLink }: { waLink: string }) {
  return (
    <>
      {/* Para quién está recomendado */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 flex items-center gap-3">
              <span className="text-2xl">💎</span> ¿PARA QUIÉN ESTÁ RECOMENDADO?
            </h2>
            <div className="bg-stone-50 p-8 rounded-sm border border-stone-100">
              <p className="text-stone-700 mb-6 font-medium">Este protocolo es ideal para personas con:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 mb-8">
                {[
                  "Piel deshidratada", "Falta de brillo facial", "Líneas finas",
                  "Flacidez leve", "Textura irregular", "Piel sensible o cansada",
                  "Signos tempranos de envejecimiento"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-stone-600">
                    <span className="text-primary text-lg leading-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-primary font-bold italic border-t border-stone-200 pt-6">
                También es excelente como tratamiento preventivo antiaging.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cómo es el procedimiento */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-3 text-white">
              <span className="text-2xl">🌿</span> Qué incluye
            </h2>
            <p className="text-stone-300 mb-10 leading-relaxed text-lg">
              En MJ Estética Wellness Center realizamos una valoración personalizada para adaptar el protocolo a las necesidades de tu piel.
            </p>
            <div className="space-y-4 mb-10">
              <p className="text-primary font-bold uppercase tracking-widest text-xs">Tu sesión incluye</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Limpieza facial profesional", "Aplicación de ADN de Salmón",
                  "Microneedling o bioestimulación", "Protocolo calmante e hidratante",
                  "Recomendaciones post tratamiento"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-sm border border-white/10 group hover:bg-white/10 transition-colors">
                    <span className="text-primary">✨</span>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-stone-400 italic">
              Es un procedimiento mínimamente invasivo y la recuperación suele ser rápida.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Por qué hablan del ADN de Salmón */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-6 text-primary text-xl">
              📍
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 uppercase tracking-tight">
              ¿POR QUÉ TANTAS PERSONAS ESTÁN <br /> HABLANDO DEL ADN DE SALMÓN?
            </h2>
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
              <p className="font-medium text-stone-800">
                Porque los resultados se sienten naturales.
              </p>
              <p>
                La piel comienza a verse más hidratada y luminosa desde las primeras sesiones, mientras que la firmeza y regeneración mejoran progresivamente.
              </p>
              <div className="pt-4 space-y-2">
                <p className="font-serif italic text-2xl text-stone-900">"No es un cambio artificial. <br /> Es una mejor versión de tu piel."</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Por qué elegir MJ */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-10 md:p-16 shadow-sm border border-stone-100">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 flex items-center gap-3">
              <span className="text-2xl text-primary">💖</span> ¿POR QUÉ ELEGIR MJ ESTÉTICA WELLNESS CENTER?
            </h2>
            <p className="text-stone-600 mb-10 leading-relaxed">
              En MJ Estética Wellness Center combinamos bienestar, estética avanzada y protocolos personalizados para ayudarte a lograr resultados reales y naturales.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 mb-12">
              {[
                "Atención personalizada", "Protocolos modernos de rejuvenecimiento",
                "Tecnología estética avanzada", "Experiencia wellness integral",
                "Resultados progresivos y seguros"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 border-b border-stone-50 pb-3">
                  <span className="text-primary font-bold">✔</span>
                  <span className="font-medium text-stone-800">{item}</span>
                </div>
              ))}
            </div>
            <div className="text-stone-500 italic space-y-2">
              <p>Tu piel merece más que un tratamiento.</p>
              <p>Merece cuidado profesional y un enfoque pensado para ti.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guía Gratuita */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-white/20">
              Regalo Exclusivo
            </div>
            <h2 className="text-4xl font-serif font-bold mb-6">🎁 GUÍA GRATUITA DE BELLEZA</h2>
            <p className="text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed text-lg">
              Por comentar la palabra <span className="font-bold text-white">“ADN”</span> o <span className="font-bold text-white">“Salmón”</span>, queremos regalarte nuestra guía exclusiva de cuidado facial y rejuvenecimiento.
            </p>
            <div className="space-y-6">
              <p className="text-sm font-medium tracking-widest uppercase text-white/60">Descárgala aquí 👇</p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-100 transition-all shadow-xl hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                DESCARGAR GUÍA GRATUITA
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agenda tu valoración */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">🔥 AGENDA TU VALORACIÓN</h2>
            <p className="text-stone-600 mb-12 text-lg leading-relaxed">
              Si deseas mejorar la calidad de tu piel, recuperar luminosidad y experimentar uno de los tratamientos más innovadores de la medicina estética moderna…
            </p>
            <div className="p-8 border-2 border-primary/20 rounded-sm relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4">
                <Star className="w-6 h-6 fill-primary text-primary" />
              </div>
              <p className="text-stone-900 font-serif font-bold text-2xl mb-8">
                Este puede ser el momento perfecto para comenzar.
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 font-bold tracking-[0.2em] uppercase hover:bg-primary/90 transition-all shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Reservar ahora
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
