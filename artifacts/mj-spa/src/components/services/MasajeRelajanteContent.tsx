import { motion } from "framer-motion";
import {
  MessageCircle,
  Star,
  Quote,
  Clock,
  MapPin,
  Smartphone,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import type { ServicePageData } from "@/data/services";

interface Props {
  service: ServicePageData;
  waLink: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as any },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function MasajeRelajanteContent({ service, waLink }: Props) {
  const massageWaLink = waLink || `https://wa.me/50686907757?text=Hola!%20Deseo%20más%20información%20sobre%20los%20Masajes%20en%20Turrialba`;

  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      {/* 1. Intro Section (Post-Professional) */}
      <section className="relative py-20 bg-white text-stone-800">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div variants={fadeUp} className="space-y-8">
              <div className="bg-stone-50 p-8 border-l-4 border-primary space-y-6">
                <p className="text-lg text-stone-700 leading-relaxed italic">
                  "En MJ Estética & Wellness Center ofrecemos masajes relajantes, terapéuticos y descontracturantes en Turrialba diseñados para ayudarte a sentirte mejor física y mentalmente desde la primera sesión."
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {[
                    { icon: <MapPin className="w-4 h-4" />, text: "Ubicación conveniente en Turrialba" },
                    { icon: <Smartphone className="w-4 h-4" />, text: "Reserva rápida por WhatsApp" },
                    { icon: <Calendar className="w-4 h-4" />, text: "Citas programadas" },
                    { icon: <Star className="w-4 h-4" />, text: "Atención personalizada" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-600">
                      <span className="text-primary">{item.icon}</span>
                      <span className="text-sm font-bold uppercase tracking-widest">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 border-2 border-dashed border-primary/30 p-8 text-center space-y-6">
                <h3 className="text-xl font-serif font-bold text-stone-900 uppercase tracking-tighter">
                  Descarga Gratis Nuestra Guía para Potenciar los Beneficios de un Masaje
                </h3>
                <p className="text-stone-600 text-sm">Aprende cómo obtener mejores resultados antes y después de tu sesión.</p>
                <a
                  href={massageWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:scale-105 transition-transform"
                >
                  <span className="text-xl">👉</span>
                  <span className="border-b-2 border-primary/20 pb-0.5 uppercase tracking-widest text-xs">Descargar Guía Gratuita</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Why Choose Us? */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-12"
          >
            <div className="space-y-4 text-center">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">¿Por Qué Elegir Nuestros Masajes en Turrialba?</h2>
              <div className="h-1 w-20 bg-primary mx-auto" />
            </div>

            <p className="text-xl text-stone-300 leading-relaxed font-light text-center">
              Vivimos expuestos al estrés, largas jornadas laborales, malas posturas y tensión acumulada.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pt-8">
              <div className="space-y-4">
                <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">Con el tiempo esto puede provocar:</p>
                {[
                  "Dolor de cuello",
                  "Contracturas musculares",
                  "Estrés constante",
                  "Fatiga física",
                  "Problemas para descansar",
                  "Sensación de agotamiento",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-red-400">✔</span>
                    <span className="text-stone-200 text-sm tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white/5 p-8 border border-white/10 flex flex-col justify-center text-center space-y-6">
                <p className="text-2xl font-serif text-primary italic">
                  "Nuestros tratamientos están diseñados para ayudarte a recuperar equilibrio, bienestar y relajación."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-widest">Servicios de Masajes en Turrialba</h2>
            <div className="h-1 w-20 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 flex flex-col h-full border border-stone-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <h4 className="text-2xl font-serif font-bold text-stone-900 mb-4">{item.title} en Turrialba</h4>
                <p className="text-stone-600 text-sm mb-8 leading-relaxed italic">{item.description}</p>

                {item.title !== "Aromaterapia" && item.title !== "Spa para Parejas" && (
                   <div className="space-y-3 mb-10 border-t border-stone-50 pt-6">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4">Beneficios:</p>
                    {(item.title === "Masaje Relajante"
                        ? ["Relajación profunda", "Mejor descanso", "Menor tensión muscular", "Sensación de bienestar general"]
                        : item.title === "Masaje Descontracturante"
                        ? ["Alivio de contracturas", "Menor rigidez muscular", "Mejor movilidad", "Recuperación muscular"]
                        : ["Alivio de tensión localizada", "Recuperación física", "Mayor comodidad corporal", "Sensación de alivio"]
                    ).map((feat, j) => (
                      <div key={j} className="flex items-center gap-2 text-stone-800 text-xs font-bold uppercase tracking-tight">
                        <span className="text-green-500">✅</span>
                        {feat}
                      </div>
                    ))}
                  </div>
                )}

                {item.title === "Aromaterapia" && (
                   <p className="text-stone-500 text-xs mb-10 flex-grow">Ideal para personas que buscan una experiencia de bienestar integral.</p>
                )}
                {item.title === "Spa para Parejas" && (
                   <p className="text-stone-500 text-xs mb-10 flex-grow">Una excelente opción para aniversarios, celebraciones o simplemente para desconectarse juntos.</p>
                )}

                <a
                  href={massageWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group"
                >
                  <span className="text-xl group-hover:translate-x-1 transition-transform">👉</span>
                  <span className="border-b-2 border-primary/20 pb-0.5 group-hover:border-primary transition-colors">
                    RESERVAR AHORA
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Regular Benefits */}
      <section className="bg-stone-50 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-16"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase">Beneficios de Recibir Masajes de Forma Regular</h2>
              <p className="text-stone-600">Muchas personas buscan masajes en Turrialba porque desean mejorar su calidad de vida.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                "Reducir el estrés y la ansiedad",
                "Mejorar la calidad del sueño",
                "Disminuir tensión muscular",
                "Favorecer la circulación sanguínea",
                "Mejorar el bienestar físico y emocional",
                "Recuperarte del cansancio diario",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-5 border-b border-white">
                  <span className="text-green-500 font-bold text-xl">✅</span>
                  <span className="text-stone-800 font-bold uppercase tracking-widest text-[10px]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Difference Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10">
        <div className="bg-[#040f19] text-white p-10 md:p-20 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold text-white uppercase tracking-tighter">Lo Que Hace Diferente a MJ Estética & Wellness Center</h2>
              <p className="text-stone-300 leading-relaxed italic">
                "No ofrecemos sesiones genéricas. Cada masaje se adapta a las necesidades específicas de cada cliente."
              </p>
              <div className="space-y-4 pt-4">
                <p className="text-primary text-xs font-bold tracking-widest uppercase">Por eso nuestros clientes nos eligen:</p>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "Atención profesional y personalizada",
                    "Ambiente privado y relajante",
                    "Instalaciones cómodas y seguras",
                    "Protocolos adaptados a cada persona",
                    "Fácil acceso en Turrialba",
                    "Reserva rápida por WhatsApp",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-primary">✔</span>
                      <span className="text-stone-200 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-10 border border-white/10 flex flex-col justify-center space-y-12">
               <div className="space-y-8">
                  <h4 className="text-center text-xs font-bold uppercase tracking-[0.3em] text-primary">Opiniones de Clientes de Turrialba</h4>
                  {[
                    "Excelente atención y ambiente. Salí completamente relajada.",
                    "El masaje descontracturante me ayudó muchísimo con la tensión de espalda.",
                    "Un lugar muy profesional y acogedor.",
                  ].map((text, i) => (
                    <div key={i} className="space-y-2 border-l-2 border-primary/30 pl-6 italic">
                       <p className="text-stone-200 text-sm leading-relaxed">“{text}”</p>
                       <div className="flex gap-1">
                          {[...Array(5)].map((_, j) => <Star key={j} className="w-2.5 h-2.5 fill-primary text-primary" />)}
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="py-24 text-stone-800">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-16 text-center uppercase tracking-widest">Preguntas Frecuentes Sobre Masajes en Turrialba</h2>
          <div className="space-y-10">
            {service.faq?.map((faq, i) => (
              <div key={i} className="space-y-3 pb-8 border-b border-stone-100 group">
                <h4 className="text-lg font-bold text-stone-900 group-hover:text-primary transition-colors">{faq.question}</h4>
                <p className="text-stone-600 leading-relaxed text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA & Zones */}
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-24">
        <div className="bg-primary/5 border-2 border-dashed border-primary/30 p-10 md:p-16 text-center space-y-12">
          <div className="space-y-6">
            <h3 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter">Reserva Tu Masaje en Turrialba Hoy</h3>
            <p className="text-stone-600 leading-relaxed max-w-2xl mx-auto italic">
              Si buscas un masaje relajante, terapéutico o descontracturante en Turrialba, estamos listos para ayudarte.
              No esperes a que el estrés y la tensión sigan acumulándose.
            </p>

            <div className="flex flex-col items-center gap-6 pt-8 border-t border-primary/10">
              <div className="space-y-4">
                 <div className="flex items-center justify-center gap-3 text-stone-800 font-bold">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>MJ Estética & Wellness Center</span>
                 </div>
                 <div className="flex items-center justify-center gap-3 text-stone-800 font-bold">
                    <Smartphone className="w-5 h-5 text-primary" />
                    <span>Reserva por WhatsApp</span>
                 </div>
                 <div className="flex items-center justify-center gap-3 text-stone-800 font-bold">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Cupos limitados por día</span>
                 </div>
              </div>

              <a
                href={massageWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 px-12 py-6 bg-primary text-white font-bold rounded-none hover:scale-105 transition-transform shadow-2xl shadow-primary/20 uppercase tracking-[0.2em]"
              >
                👉 AGENDAR MI MASAJE AHORA
              </a>
              <p className="text-stone-500 font-bold text-xs uppercase tracking-widest pt-4">Recupera tu bienestar, relaja tu cuerpo y vuelve a sentirte mejor.</p>
            </div>
          </div>

          <div className="pt-16 border-t border-primary/20 space-y-8">
            <h4 className="text-xl font-serif font-bold text-stone-900 uppercase tracking-widest">
              Zonas que Atendemos
            </h4>
            <p className="text-stone-600 text-sm">Si buscas masajes en Turrialba o zonas cercanas, estaremos encantados de atenderte.</p>
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              {[
                "Turrialba Centro",
                "La Suiza",
                "Santa Cruz",
                "Tucurrique",
                "Pavones",
                "Juan Viñas",
                "Aquiares",
                "Pejibaye",
              ].map((zone, i) => (
                <span key={i} className="px-4 py-2 bg-white border border-stone-200 text-stone-700 text-xs font-bold rounded-full shadow-sm uppercase tracking-tight">
                  {zone}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
