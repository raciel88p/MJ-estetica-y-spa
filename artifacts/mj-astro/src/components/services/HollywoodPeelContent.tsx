import { motion } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Instagram,
  Star,
  Zap,
  Globe,
  ArrowRight,
  ShieldCheck,
  Award
} from "lucide-react";
import type { ServicePageData } from "@/data/services";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

export function HollywoodPeelContent({ service, waLink }: { service: ServicePageData; waLink: string }) {
  return (
    <div className="bg-white">
      {/* ── INTRO SECTION ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Glow Inmediato</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              Recupera el Glow Natural de Tu Piel Desde la Primera Sesión
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              ¿Te miras al espejo y sientes que tu piel luce cansada, opaca o con manchas que ya no puedes ocultar ni con maquillaje?
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              Quizá has probado cremas, mascarillas o rutinas que prometen mucho… pero los resultados duran poco o simplemente no llegan.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              La realidad es que el estrés, el sol, la contaminación y el paso del tiempo afectan tu piel más rápido de lo que imaginas. Pero hoy puedes devolverle luminosidad, suavidad y vida a tu rostro sin cirugía, sin dolor y sin largos tiempos de recuperación.
            </p>

            <div className="p-8 bg-stone-50 border-l-4 border-primary mb-12">
               <h3 className="text-xl font-serif font-bold text-stone-900 mb-4 flex items-center gap-2">
                 <Sparkles className="w-5 h-5 text-primary" />
                 Descubre el Tratamiento Favorito de las Celebridades: Hollywood Peel
               </h3>
               <p className="text-stone-600 leading-relaxed">
                 En <a href="https://mjesteticayspa.com?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">MJ Fisio Estética & Spa</a> te ofrecemos el exclusivo tratamiento de <strong>Hollywood Peel en Turrialba</strong>, una tecnología avanzada que combina carbón activado y láser para rejuvenecer profundamente la piel mientras recuperas un efecto glow inmediato.
               </p>
               <p className="mt-4 text-stone-600 italic">
                 Sí… esa piel luminosa, limpia y uniforme que ves en redes sociales o alfombras rojas ahora también puede ser tuya.
               </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT IT DOES ────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 flex items-center justify-center gap-3">
              <Star className="w-8 h-8 text-primary fill-primary" />
              ¿Qué Hace el Hollywood Peel?
            </h2>
            <p className="text-stone-500 text-lg">El tratamiento trabaja profundamente en la piel para:</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-16">
             {[
               "Reducir manchas solares y marcas de acné",
               "Minimizar poros abiertos",
               "Controlar grasa facial",
               "Mejorar textura y suavidad",
               "Estimular producción natural de colágeno",
               "Disminuir líneas finas de expresión",
               "Aportar luminosidad inmediata",
               "Lograr una piel más uniforme y rejuvenecida"
             ].map((item, i) => (
               <div key={i} className="flex items-center gap-4 p-4 bg-white border border-stone-200 shadow-sm rounded-sm group hover:border-primary/30 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-stone-700 font-medium text-sm">{item}</span>
               </div>
             ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {["🔥 Sin incapacidad", "🔥 Sin recuperación prolongada", "🔥 Resultados visibles desde la primera sesión"].map((item, i) => (
               <span key={i} className="px-6 py-3 bg-stone-900 text-white font-bold rounded-full text-xs tracking-widest uppercase">
                 {item}
               </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMAGINE THIS ─────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-10">😍 Imagina Esto…</h2>
              <div className="space-y-6 text-stone-600 text-lg leading-relaxed mb-16">
                <p>Salir de tu sesión y notar inmediatamente tu piel más limpia, luminosa y fresca.</p>
                <p>Sentirte segura al verte al espejo.</p>
                <p>Usar menos maquillaje porque tu piel comienza a verse naturalmente saludable.</p>
              </div>

              <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-8">Recibir comentarios como:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {["✨ “¿Qué te hiciste en la cara?”", "✨ “Tu piel se ve hermosa”", "✨ “Te ves más descansada y joven”"].map((item, i) => (
                  <div key={i} className="p-6 border border-stone-100 bg-stone-50 italic text-stone-800 font-serif">
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-stone-500 italic">Eso es exactamente lo que muchas personas están logrando con Hollywood Peel.</p>
           </motion.div>
        </div>
      </section>

      {/* ── IDEAL FOR ────────────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">💎 ¿Para Quién es Ideal Este Tratamiento?</h2>
            <p className="text-white/60 text-lg">El Hollywood Peel es perfecto si tienes:</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              "Manchas solares",
              "Piel opaca o cansada",
              "Acné o marcas faciales",
              "Poros dilatados",
              "Textura irregular",
              "Líneas finas",
              "Eventos especiales próximos",
              "Deseas un efecto glow inmediato"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 border border-white/10 bg-white/5 rounded-sm">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-white/80 font-medium text-xs">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-white/50 italic text-sm">
            Incluso si nunca te has realizado tratamientos faciales, este procedimiento puede adaptarse a tu tipo de piel gracias a nuestros protocolos personalizados.
          </p>
        </div>
      </section>

      {/* ── DIFFERENTIATOR ───────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">🧖‍♀️ Atención Profesional y Personalizada en Turrialba</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              En <a href="https://mjesteticayspa.com?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">MJ Fisio Estética & Spa</a> no trabajamos con tratamientos genéricos. Cada piel es diferente.
            </p>

            <div className="bg-stone-50 p-10 border border-stone-200 mb-12">
               <p className="text-stone-700 leading-relaxed mb-6">
                 Por eso realizamos una valoración personalizada para ayudarte a alcanzar resultados reales, naturales y seguros según tus necesidades.
               </p>
               <p className="text-xl font-serif text-stone-900 italic">Nuestro objetivo no es solamente mejorar tu piel…</p>
               <p className="text-2xl font-serif text-primary font-bold mt-2">Es ayudarte a recuperar confianza, bienestar y seguridad en ti misma.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LEAD MAGNET ──────────────────────────────── */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-white/60 text-xs font-bold tracking-[0.4em] uppercase mb-4">🎁 RECURSO GRATUITO EXCLUSIVO</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Guía Gratuita:</h2>
              <p className="text-2xl font-serif mb-10 italic">“Cómo Potenciar los Resultados del Hollywood Peel”</p>

              <div className="max-w-md mx-auto bg-white p-10 text-stone-900 shadow-2xl">
                 <p className="text-sm text-stone-500 leading-relaxed mb-8">Solo por escribir la palabra clave en Instagram recibirás GRATIS nuestra guía exclusiva donde aprenderás:</p>

                 <div className="space-y-3 mb-10 text-left">
                   {[
                     "Qué hacer antes y después del tratamiento",
                     "Cómo prolongar el efecto glow",
                     "Errores que dañan tu piel sin darte cuenta",
                     "Recomendaciones profesionales",
                     "Tips para mantener una piel luminosa"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-2">
                       <CheckCircle2 className="w-3 h-3 text-primary" />
                       <span className="text-[10px] font-bold text-stone-700">{item}</span>
                     </div>
                   ))}
                 </div>

                 <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-4">💌 Comenta la palabra:</p>
                 <p className="text-5xl font-serif font-bold text-primary mb-10 underline decoration-stone-200">“HOLLYWOOD”</p>

                 <a
                    href="https://www.instagram.com/mj_fisioestetica/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-stone-900 text-white py-4 font-bold tracking-widest uppercase hover:bg-primary transition-colors text-xs"
                 >
                    <Instagram className="w-4 h-4" />
                    IR A INSTAGRAM
                 </a>
                 <p className="mt-6 text-[10px] text-stone-400 font-bold uppercase tracking-widest">🎁 Totalmente gratis por tiempo limitado</p>
              </div>
           </motion.div>
        </div>
        <Sparkles className="absolute -bottom-20 -left-20 w-64 h-64 text-white/5 rotate-12" />
      </section>

      {/* ── URGENCY / BOOKING ────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-8">
               <Zap className="w-4 h-4 fill-red-600" />
               <span className="text-[10px] font-bold tracking-widest uppercase">Cupos Limitados esta semana</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">Agenda tu valoración facial hoy</h2>
            <p className="text-stone-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Debido a la alta demanda de valoraciones y sesiones de Hollywood Peel en Turrialba, los espacios disponibles son reducidos. Si deseas aprovechar promociones y paquetes especiales, este es el mejor momento para reservar.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
               <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 bg-primary text-white p-10 hover:bg-stone-900 transition-all group"
               >
                 <MessageCircle className="w-8 h-8" />
                 <div>
                   <p className="text-[10px] font-bold tracking-widest uppercase mb-1 opacity-70">Opción 1</p>
                   <p className="font-serif text-xl font-bold">Reserva por WhatsApp</p>
                 </div>
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </a>

               <a
                href="https://mjesteticayspa.com?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 bg-white border border-stone-200 text-stone-900 p-10 hover:border-primary transition-all group"
               >
                 <Globe className="w-8 h-8 text-primary" />
                 <div>
                   <p className="text-[10px] font-bold tracking-widest uppercase mb-1 text-stone-400">Opción 2</p>
                   <p className="font-serif text-xl font-bold">Visita nuestra web</p>
                 </div>
                 <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
               </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL SEO BAND ───────────────────────────── */}
      <section className="py-20 bg-white border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-8 uppercase tracking-widest">✨ HOLLYWOOD PEEL EN TURRIALBA COSTA RICA</h2>
              <p className="text-stone-600 leading-relaxed mb-10 max-w-2xl mx-auto">
                Una piel más limpia, uniforme, luminosa y rejuvenecida sí es posible. Tu glow natural todavía está ahí… solo necesita el tratamiento correcto para volver a brillar.
              </p>
              <p className="text-primary font-bold">
                🔥 Agenda hoy tu cita y descubre por qué el Hollywood Peel se ha convertido en uno de los tratamientos favoritos para rejuvenecer la piel en Turrialba.
              </p>
           </motion.div>
        </div>
      </section>
    </div>
  );
}
