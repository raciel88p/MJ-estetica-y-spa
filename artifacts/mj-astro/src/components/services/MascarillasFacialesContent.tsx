import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, ArrowRight, Star, MapPin, Download, Sparkles, Heart, Zap, ShieldCheck, Clock } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

interface Props {
  waLink: string;
}

export function MascarillasFacialesContent({ waLink }: Props) {
  return (
    <div className="bg-white">
      {/* ── INTRO / PAS ────────────────────────────── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              ¿Has sentido que tu piel luce cansada o apagada?
            </h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto">
              <p>Cada día tu piel enfrenta factores que pueden afectar su apariencia: el sol, la contaminación, el estrés, las pantallas y la falta de descanso pueden quitarle ese brillo saludable que antes parecía natural.</p>
              <p>En MJ Estética & Wellness Center hemos creado una experiencia de <span className="font-bold text-stone-900 underline decoration-primary/30">mascarillas faciales personalizadas en Turrialba</span>, diseñada para ayudarte a recuperar una apariencia más fresca, luminosa e hidratada mientras disfrutas un momento de relajación absoluta.</p>
            </div>
            <div className="mt-12 bg-white p-8 md:p-12 shadow-xl border border-stone-100 rounded-sm">
               <h3 className="text-2xl font-serif font-bold text-stone-900 mb-8">Imagina sentir tu piel así...</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10 max-w-lg mx-auto">
                 {[
                   "Más luminosa",
                   "Más fresca",
                   "Más suave",
                   "Más hidratada",
                   "Más radiante",
                   "Más cuidada"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                     <span className="text-sm font-bold text-stone-700 uppercase tracking-wide">✨ {item}</span>
                   </div>
                 ))}
               </div>
               <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-primary text-white text-xs font-bold tracking-[0.2em] uppercase px-8 py-5 hover:bg-stone-900 transition-all shadow-lg">
                  <MessageCircle className="w-4 h-4" />
                  RESERVAR POR WHATSAPP
                  <ArrowRight className="w-4 h-4" />
               </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── DIFFERENTIATION ─────────────────────────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
                Mucho más que una mascarilla facial
              </h2>
              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p>La mayoría de los centros simplemente aplican un producto. Nosotros comenzamos entendiendo tu piel.</p>
                <p>Cada experiencia inicia con una <span className="font-bold text-stone-900">valoración personalizada</span> para identificar qué necesita realmente tu rostro. Porque no existen dos pieles iguales, y tampoco deberían existir tratamientos genéricos.</p>
                <p>En MJ Estética & Wellness Center cada protocolo es adaptado según las necesidades específicas de cada cliente.</p>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary/5 p-10 border border-primary/10 rounded-sm">
               <h3 className="text-xl font-serif font-bold text-stone-900 mb-6">¿Qué hace diferente nuestra experiencia?</h3>
               <ul className="space-y-4">
                 {[
                   "Valoración facial personalizada",
                   "Protocolos adaptados a cada piel",
                   "Ambiente relajante",
                   "Experiencia wellness premium",
                   "Atención individualizada",
                   "Recomendaciones posteriores"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                     <span className="text-stone-700 text-sm font-bold uppercase tracking-widest">{item}</span>
                   </li>
                 ))}
               </ul>
               <p className="mt-8 text-stone-500 italic text-sm">"Porque creemos que el cuidado facial debe sentirse tan bien como se ve."</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ────────────────────────────────── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 text-white">BENEFICIOS</p>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Lo que nuestras clientas buscan</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Hidratación profunda", icon: Zap, d: "Recupera los niveles óptimos de agua en tu piel." },
              { t: "Glow facial natural", icon: Sparkles, d: "Luminosidad saludable sin filtros ni maquillaje." },
              { t: "Momento de autocuidado", icon: Heart, d: "Espacio dedicado exclusivamente a tu bienestar." },
              { t: "Bienestar y confianza", icon: Star, d: "Cuando te ves bien, te sientes diferente." }
            ].map((b, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-all">
                <b.icon className="w-10 h-10 text-primary mb-6" />
                <h4 className="font-serif font-bold text-2xl mb-4 text-white">{b.t}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{b.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCONNECTION ───────────────────────────── */}
      <section className="py-24 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">Tu momento de desconexión comienza aquí</h2>
            <p className="text-stone-500 text-lg leading-relaxed mb-12">
              Imagina entrar a un espacio tranquilo. Sin llamadas, sin reuniones, sin pendientes. Solo tú, tu bienestar y un protocolo diseñado para ayudarte a consentir tu piel.
            </p>
            <div className="p-10 bg-stone-50 border border-stone-200 rounded-sm italic text-stone-700 text-xl font-serif">
              "No sabía cuánto necesitaba este momento."
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-stone-400 font-bold uppercase text-[10px] tracking-[0.2em]">
               <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> Duración: 60 min aprox</div>
               <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Protocolo 100% seguro</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900">Lo que dicen nuestras clientas</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Mi piel se veía mucho más luminosa y fresca. La experiencia fue increíble.",
              "Me encantó la atención personalizada. Desde que llegué me sentí muy cómoda.",
              "Más que una mascarilla, sentí que me regalé un espacio para mí."
            ].map((t, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-8 shadow-sm border border-stone-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-stone-600 italic">"{t}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEAD MAGNET ─────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary/5 border-2 border-dashed border-primary/30 p-12 text-center rounded-sm">
           <p className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 italic font-bold">🎁 RECURSO GRATUITO</p>
           <h3 className="text-3xl font-serif font-bold text-stone-900 mb-6">Guía: Cómo mantener una piel más luminosa e hidratada por más tiempo</h3>
           <p className="text-stone-600 mb-8 max-w-xl mx-auto">Aprende los mejores consejos profesionales para cuidar tu piel después de tu sesión y potenciar los resultados.</p>
           <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-stone-900 text-white text-[10px] font-bold px-10 py-5 tracking-widest uppercase hover:bg-primary transition-all shadow-xl">
              <Download className="w-5 h-5" /> SOLICITAR GUÍA POR WHATSAPP
           </a>
        </motion.div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────── */}
      <section className="py-24 bg-[#040f19] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl font-serif font-bold mb-8 leading-tight text-white">Reserva tu experiencia de mascarilla facial</h2>
            <p className="text-stone-400 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
              Las citas son limitadas porque cada protocolo requiere atención personalizada. Consulta disponibilidad y recibe orientación sobre la mejor opción para tu piel.
            </p>
            <div className="flex flex-col gap-6 max-w-sm mx-auto">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-primary text-white text-sm font-bold tracking-[0.15em] uppercase px-10 py-5 hover:bg-white hover:text-stone-900 transition-all group shadow-2xl shadow-primary/20">
                <MessageCircle className="w-5 h-5" />
                Agendar Valoración
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mt-2 font-bold">📍 Turrialba, Costa Rica</p>
            </div>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] text-white/40 font-bold tracking-widest uppercase">
               <div className="flex items-center justify-center gap-2"><MapPin className="w-3 h-3" /> Turrialba</div>
               <div className="flex items-center justify-center gap-2"><MapPin className="w-3 h-3" /> La Suiza</div>
               <div className="flex items-center justify-center gap-2"><MapPin className="w-3 h-3" /> Santa Cruz</div>
               <div className="flex items-center justify-center gap-2"><MapPin className="w-3 h-3" /> Cartago</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
