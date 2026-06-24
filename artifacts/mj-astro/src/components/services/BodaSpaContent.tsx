import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Quote,
  Zap,
  Target,
  ShieldCheck,
  UserCheck,
  Award,
  Clock,
  MapPin,
  Star,
  Heart,
  Gem
} from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as any } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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

export function BodaSpaContent({ waLink }: { waLink: string }) {
  return (
    <div className="bg-white">
      {/* ── SECCIÓN: LEAD MAGNET INICIAL ─────────────────── */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-white/60 text-xs font-bold tracking-[0.4em] uppercase mb-4">💍 REGALO EXCLUSIVO PARA NOVIAS</p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 italic">Descarga GRATIS Nuestra Guía:</h2>
              <p className="text-xl md:text-2xl font-serif mb-10 italic">"Cómo Llegar Relajada, Radiante y Sin Estrés al Día de Tu Boda"</p>

              <div className="max-w-xl mx-auto bg-white p-12 text-stone-900 shadow-2xl">
                 <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-4">💌 Comenta la palabra:</p>
                 <p className="text-6xl font-serif font-bold text-primary mb-12 underline decoration-stone-200 uppercase tracking-widest">“BODA”</p>
                 <p className="text-sm text-stone-500 leading-relaxed mb-8 font-medium italic">En esta guía descubrirás:</p>

                 <div className="grid grid-cols-1 gap-y-3 mb-10 text-left max-w-sm mx-auto">
                   {[
                     "Consejos para disfrutar los días previos.",
                     "Cómo potenciar los beneficios de un Spa Pre Boda.",
                     "Secretos para una piel radiante el gran día.",
                     "Técnicas de relajación para novias."
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3">
                       <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                       <span className="text-sm font-bold text-stone-700">{item}</span>
                     </div>
                   ))}
                 </div>

                 <a
                    href={waLink}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-stone-900 text-white py-5 font-bold tracking-widest uppercase hover:bg-primary transition-colors text-xs w-full"
                 >
                    <MessageCircle className="w-5 h-5" />
                    DESCARGAR GUÍA POR WHATSAPP
                 </a>
                 <p className="mt-6 text-[10px] text-stone-400 font-medium uppercase tracking-widest">
                    Además recibirás información exclusiva sobre nuestros paquetes.
                 </p>
              </div>
           </motion.div>
        </div>
        <Sparkles className="absolute -bottom-20 -left-20 w-64 h-64 text-white/5 rotate-12" />
      </section>

      {/* ── SECCIÓN: EL PROBLEMA (PAS) ────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              El Mejor Regalo Antes de Tu Boda Eres Tú
            </h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto">
              <p>
                Durante meses organizas cada detalle: Vestido, Fotografía, Invitados, Maquillaje, Decoración.
              </p>
              <p className="font-bold text-stone-900">
                Pero muchas novias olvidan cuidar a la persona más importante de ese día: Ellas mismas.
              </p>
              <p>
                Si estás sintiendo alguno de estos síntomas, es momento de hacer una pausa:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mt-12 text-left">
               {[
                 "Estrés constante",
                 "Ansiedad",
                 "Dolores musculares",
                 "Cansancio acumulado",
                 "Dificultad para dormir",
                 "Piel apagada"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 bg-white p-4 border border-stone-200">
                   <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                   <span className="text-stone-800 font-medium">{item}</span>
                 </div>
               ))}
            </div>

            <p className="mt-12 text-stone-600 leading-relaxed italic">
              Todo esto puede afectar cómo te sientes y cómo luces el día de tu boda. En MJ Estética & Wellness Center hemos diseñado una experiencia exclusiva para ayudarte a recuperar el equilibrio físico y emocional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: BENEFICIOS ─────────────────────── */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
                Vive la Experiencia de Boda Spa Más Relajante en Turrialba
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                Nuestros protocolos para novias están diseñados para que llegues al altar sintiéndote ligera, renovada y con un brillo natural inigualable.
              </p>
              <h3 className="text-sm font-bold text-stone-900 mb-6 uppercase tracking-[0.2em]">Lo que vivirás con nosotros:</h3>
              <div className="space-y-4">
                {[
                  "Relajación profunda del sistema nervioso",
                  "Alivio de tensiones musculares por estrés",
                  "Preparación cutánea para un maquillaje perfecto",
                  "Drenaje linfático para reducir inflamación",
                  "Ambiente privado y exclusivo para novias",
                  "Atención 100% personalizada por profesionales"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span className="text-stone-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <div className="aspect-[4/5] bg-stone-100 rounded-sm overflow-hidden border border-stone-200 shadow-2xl">
                <img src="/images/boda-spa-img.webp" alt="Novia relajándose en Spa" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-stone-900 p-10 shadow-2xl hidden lg:block">
                 <Heart className="w-10 h-10 text-primary mb-4" />
                 <p className="text-white font-serif italic text-lg leading-tight">"Te mereces este momento solo para ti."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: LOS PAQUETES (ITEMS) ──────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-stone-900">Nuestros Paquetes Exclusivos</h2>
            <p className="text-stone-500 max-w-2xl mx-auto italic">Selecciona la experiencia que mejor se adapte a tus necesidades antes del gran día.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                t: "Novia Radiante",
                p: "El Favorito",
                d: "Protocolo integral que combina exfoliación corporal de seda, masaje relajante con aromaterapia y facial express 'Bridal Glow'.",
                time: "120 min"
              },
              {
                t: "Spa en Pareja Pre-Boda",
                p: "Compartir la Calma",
                d: "Experiencia compartida para liberar el estrés de los preparativos juntos en un ambiente de calma absoluta, velas y música suave.",
                time: "90 min"
              },
              {
                t: "Masaje Anti-Estrés Nupcial",
                p: "Alivio Directo",
                d: "Sesión focalizada en liberar tensión profunda de espalda, cuello y hombros acumulada por la organización del evento.",
                time: "60 min"
              }
            ].map((pkg, i) => (
              <div key={i} className="bg-white p-10 border border-stone-200 shadow-sm flex flex-col group hover:border-primary transition-all">
                <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block font-sans">{pkg.p}</span>
                <h4 className="text-xl font-serif font-bold text-stone-900 mb-6 leading-tight">{pkg.t}</h4>
                <p className="text-stone-500 text-sm leading-relaxed mb-8 flex-grow">{pkg.d}</p>
                <div className="flex items-center gap-2 text-stone-400 text-xs font-bold uppercase tracking-widest border-t border-stone-100 pt-6">
                  <Clock className="w-4 h-4 text-primary" />
                  {pkg.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: POR QUÉ ELEGIRNOS ────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              ¿Por Qué Confiar Tu Relajación a MJ Estética?
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto leading-relaxed italic">
              Entendemos la importancia de tu boda. No solo te brindamos un servicio, creamos un refugio de paz para ti.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
             {[
               { icon: <Gem className="w-6 h-6" />, t: "Experiencia Premium" },
               { icon: <UserCheck className="w-6 h-6" />, t: "Especialistas en Novias" },
               { icon: <ShieldCheck className="w-6 h-6" />, t: "Privacidad Garantizada" },
               { icon: <Award className="w-6 h-6" />, t: "Resultados Visibles" },
               { icon: <Star className="w-6 h-6" />, t: "Atención al Detalle" },
               { icon: <MapPin className="w-6 h-6" />, t: "Turrialba Centro" }
             ].map((item, i) => (
               <div key={i} className="bg-stone-50 p-8 border border-stone-200 flex flex-col items-center text-center group hover:bg-white hover:border-primary transition-all">
                  <div className="text-primary mb-6">{item.icon}</div>
                  <span className="text-stone-900 font-bold text-sm tracking-wide leading-tight">{item.t}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: FAQ ────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-serif font-bold text-stone-900">Preguntas para Novias</h2>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="border-t border-stone-200"
          >
            {[
              { q: "¿Con cuánta anticipación debo reservar mi Boda Spa?", a: "Recomendamos reservar con al menos 2 a 4 semanas de anticipación para asegurar tu espacio en nuestra agenda." },
              { q: "¿Cuántos días antes de la boda es ideal realizar el spa?", a: "Lo ideal es entre 2 y 5 días antes de la boda. Así estarás relajada y los beneficios estéticos en tu piel estarán en su punto máximo el día del evento." },
              { q: "¿Pueden ir mis damas de honor o mamá?", a: "¡Claro! Podemos coordinar una experiencia grupal para que compartas este momento con tus personas más cercanas." },
              { q: "¿Tienen paquetes que incluyan faciales?", a: "Sí, nuestro paquete estrella 'Novia Radiante' incluye un facial diseñado específicamente para aportar luminosidad inmediata." },
              { q: "¿Qué debo llevar el día de mi sesión?", a: "Solo tu disposición para relajarte. Nosotros te proporcionamos todo lo necesario: bata, pantuflas y una bebida de cortesía." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <FaqItem question={item.q} answer={item.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: FINAL CTA ───────────────────────── */}
      <section className="py-32 bg-stone-900 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
              Reserva Hoy Tu Boda Spa en Turrialba
            </h2>
            <p className="text-stone-400 text-xl mb-12 max-w-2xl mx-auto italic">
              No dejes tu bienestar para el último momento. Llega al altar sintiéndote la mejor versión de ti misma.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={waLink}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-stone-900 transition-all text-sm w-full sm:w-auto"
              >
                <MessageCircle className="w-6 h-6" />
                Agendar por WhatsApp
              </a>
              <a
                href={waLink}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-white/20 text-white px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-stone-900 transition-all text-sm w-full sm:w-auto"
              >
                <Star className="w-5 h-5" />
                Ver Disponibilidad
              </a>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
      </section>
    </div>
  );
}
