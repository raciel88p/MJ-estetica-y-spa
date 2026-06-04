import { motion } from "framer-motion";
import {
  MessageCircle,
  Star,
  CheckCircle2,
  Sparkles,
  Zap,
  Target,
  ArrowRight,
  Clock,
  ShieldCheck,
  Heart,
} from "lucide-react";

interface Props {
  service: any;
  waLink: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
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

export function LimpiezaFacialContent({ service, waLink }: Props) {
  const limpiezaWaLink = `https://wa.me/50686907757?text=Hola!%20Deseo%20más%20información%20sobre%20la%20Limpieza%20Facial%20en%20Turrialba`;

  return (
    <div className="space-y-24 pb-20">
      {/* Intro Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-4 h-4" />
                Experiencia Skincare Premium
              </motion.div>

              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
                Tu piel habla <br />
                <span className="italic font-light text-primary">antes que tú</span>
              </motion.h2>

              <motion.p variants={fadeUp} className="text-lg text-stone-600 leading-relaxed italic">
                "Y cuando se siente apagada, con exceso de grasa, textura irregular o sin luminosidad… también afecta cómo te ves y cómo te sientes."
              </motion.p>

              <motion.p variants={fadeUp} className="text-lg text-stone-600 leading-relaxed">
                En MJ Estética & Wellness Center entendemos que una limpieza facial no se trata solo de "limpiar la piel". Se trata de ayudarte a recuperar frescura, glow natural y bienestar facial mediante protocolos personalizados y una experiencia skincare premium en Turrialba.
              </motion.p>

              <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Valoración facial personalizada",
                  "Protocolos adaptados según tu piel",
                  "Experiencia relajante y profesional",
                  "Productos especializados skincare",
                  "Atención enfocada en bienestar",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-stone-700 font-medium">{item}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="pt-4 flex flex-wrap gap-4">
                <a
                  href={limpiezaWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#071e2e] text-white font-bold rounded-none hover:bg-primary transition-all duration-300 flex items-center gap-3 group"
                >
                  <MessageCircle className="w-5 h-5" />
                  AGENDA TU VALORACIÓN
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-none overflow-hidden shadow-2xl relative z-10">
                <img
                  src="/images/services/facial-cleaning-detail.webp"
                  alt="Limpieza Facial Premium en MJ"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/services/faciales.webp";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 -z-10" />
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-stone-100 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is it section */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold">¿Qué es una limpieza facial?</h2>
            <p className="text-xl text-stone-300 leading-relaxed font-light">
              La limpieza facial es un tratamiento skincare diseñado para apoyar la limpieza profunda de la piel, mejorar la sensación de frescura facial y favorecer una apariencia más luminosa y revitalizada.
            </p>
            <p className="text-lg text-stone-400">
              En MJ Estética & Wellness Center cada protocolo se adapta según las necesidades específicas de tu piel, porque no todas las pieles requieren el mismo cuidado.
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-8">
              {[
                "limpieza profunda facial",
                "bienestar de la piel",
                "glow facial natural",
                "hidratación profesional",
                "experiencia wellness premium",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-medium tracking-wide uppercase">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-primary font-serif italic text-2xl pt-10">
              "La meta no es cambiar quién eres. Es ayudarte a sentirte más cómoda, fresca y segura con tu piel."
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skew-x-12 transform translate-x-1/2" />
      </section>

      {/* Benefits / What can it improve */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-10"
          >
            <motion.h3 variants={fadeUp} className="text-3xl font-serif font-bold text-stone-900 border-l-4 border-primary pl-6">
              ¿Qué puede ayudar a mejorar este tratamiento?
            </motion.h3>

            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Glow y luminosidad", icon: <Sparkles className="w-5 h-5" /> },
                { title: "Limpieza profunda", icon: <Target className="w-5 h-5" /> },
                { title: "Bienestar de la piel", icon: <Heart className="w-5 h-5" /> },
                { title: "Apariencia fresca", icon: <Zap className="w-5 h-5" /> },
                { title: "Textura uniforme", icon: <ShieldCheck className="w-5 h-5" /> },
                { title: "Skincare personalizado", icon: <Star className="w-5 h-5" /> },
                { title: "Cuidado preventivo", icon: <Clock className="w-5 h-5" /> },
                { title: "Hidratación intensa", icon: <Sparkles className="w-5 h-5" /> },
              ].map((benefit, i) => (
                <div key={i} className="p-4 bg-stone-50 border border-stone-100 hover:border-primary/30 transition-colors group">
                  <div className="text-primary mb-3 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider">{benefit.title}</h4>
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeUp} className="text-stone-500 text-sm italic">
              Cada piel responde de manera distinta, por eso realizamos una valoración previa antes de recomendar cualquier protocolo.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-[#071e2e] p-10 md:p-16 text-white space-y-8"
          >
            <motion.h3 variants={fadeUp} className="text-3xl font-serif font-bold leading-tight">
              ¿Por qué tantas personas incorporan limpiezas faciales?
            </motion.h3>
            <motion.p variants={fadeUp} className="text-stone-300 leading-relaxed">
              Porque hoy el skincare dejó de ser un lujo. Ahora es parte del autocuidado.
            </motion.p>
            <motion.p variants={fadeUp} className="text-stone-300 leading-relaxed">
              El maquillaje, protector solar, estrés y contaminación pueden dejar la piel:
            </motion.p>

            <motion.ul variants={fadeUp} className="space-y-4">
              {[
                "Piel apagada",
                "Sensación de grasa o resequedad",
                "Falta de luminosidad",
                "Textura irregular",
                "Sensación de cansancio facial",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-stone-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.p variants={fadeUp} className="pt-6 font-serif italic text-xl border-t border-white/10">
              Ahí es donde una experiencia facial premium puede marcar la diferencia.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Types of facial cleaning */}
      <section className="bg-stone-50 py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tight">Tipos de limpieza facial disponibles</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Resultados progresivos, naturales y personalizados según tus necesidades.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Limpieza facial profunda",
                desc: "Ideal para quienes buscan una sensación de limpieza intensiva y renovación facial.",
                features: ["Limpieza profesional", "Bienestar facial", "Frescura profunda"],
              },
              {
                title: "Limpieza facial hidratante",
                desc: "Pensada para pieles que buscan hidratación, suavidad y luminosidad natural.",
                features: ["Glow saludable", "Hidratación", "Apariencia revitalizada"],
              },
              {
                title: "Facial premium glow",
                desc: "Una experiencia skincare orientada al bienestar, relajación y luminosidad facial.",
                features: ["Experiencia wellness", "Productos especializados", "Cuidado facial premium"],
              },
              {
                title: "Protocolos avanzados",
                desc: "Tratamientos personalizados según necesidades específicas evaluadas profesionalmente.",
                features: ["Valoración individual", "Protocolos personalizados", "Seguimiento profesional"],
              },
            ].map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 border border-stone-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <h4 className="text-xl font-serif font-bold text-stone-900 mb-4">{type.title}</h4>
                <p className="text-stone-500 text-sm mb-8 flex-grow leading-relaxed">{type.desc}</p>
                <ul className="space-y-3 mb-8 border-t border-stone-50 pt-6">
                  {type.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-2 text-stone-700 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <a
                  href={limpiezaWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 text-center border-b-2 border-stone-900 text-stone-900 text-xs font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all duration-300"
                >
                  CONSULTAR
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="bg-[#040f19] text-white p-10 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <img src="/images/pattern.png" alt="pattern" className="w-full h-full object-cover" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-8">¿Cómo funciona una limpieza facial?</h2>
              <div className="space-y-12">
                {[
                  {
                    step: "Paso 1",
                    title: "Valoración facial personalizada",
                    desc: "Analizamos tu piel y tus objetivos para recomendar el protocolo más adecuado.",
                  },
                  {
                    step: "Paso 2",
                    title: "Limpieza y preparación facial",
                    desc: "Se realiza un proceso de limpieza profesional orientado al bienestar y preparación de la piel.",
                  },
                  {
                    step: "Paso 3",
                    title: "Aplicación del protocolo skincare",
                    desc: "Aplicamos productos y técnicas según las necesidades específicas evaluadas.",
                  },
                  {
                    step: "Paso 4",
                    title: "Recomendaciones posteriores",
                    desc: "Te brindamos recomendaciones de hidratación, protector solar y cuidado facial para potenciar resultados.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="text-primary font-serif italic text-2xl shrink-0 opacity-50">{item.step}</span>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-stone-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-8 md:p-12 self-center border border-white/10 space-y-8">
              <div className="flex items-center gap-4 text-primary">
                <Clock className="w-8 h-8" />
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm">Duración aproximada</h4>
                  <p className="text-2xl font-serif">60 a 90 minutos</p>
                </div>
              </div>
              <div className="space-y-4 pt-6 border-t border-white/10 text-stone-300">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">✅</div>
                  <span>Experiencia relajante y cómoda</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">✅</div>
                  <span>Protocolos adaptados individualmente</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">✅</div>
                  <span>Recomendado protector solar posterior</span>
                </div>
              </div>
              <a
                href={limpiezaWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-5 bg-primary text-white text-center font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-primary transition-all duration-300"
              >
                Agenda tu sesión
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet CTA Section */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <div className="bg-primary/5 border-2 border-dashed border-primary/30 p-10 md:p-16 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Sparkles className="w-24 h-24 text-primary" />
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 italic">
              🎁 Guía Gratuita: Cómo mejorar los resultados de una limpieza facial
            </h3>
            <p className="text-stone-600 leading-relaxed">
              Envíanos un mensaje por WhatsApp con la palabra clave y recibe GRATIS nuestra guía con recomendaciones profesionales para potenciar glow, luminosidad y bienestar facial desde casa.
            </p>

            <div className="flex flex-col items-center gap-4 pt-6">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-stone-500">PALABRA CLAVE:</span>
              <div className="text-5xl md:text-6xl font-serif font-bold text-primary tracking-tighter">
                LIMPIEZA
              </div>
              <a
                href={`https://wa.me/50686907757?text=LIMPIEZA`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 px-12 py-5 bg-[#25D366] text-white font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-3 shadow-xl shadow-green-200"
              >
                <MessageCircle className="w-6 h-6" />
                QUIERO MI GUÍA GRATIS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final Section / Why Choose MJ */}
      <section className="py-24 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-16 uppercase tracking-tight">¿Por qué elegir MJ Estética & Wellness Center?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {[
              {
                title: "Enfoque Wellness",
                desc: "No buscamos hacer una limpieza facial genérica. Buscamos ayudarte a vivir una experiencia premium.",
                icon: <Heart className="w-10 h-10 text-primary" />,
              },
              {
                title: "Atención Profesional",
                desc: "Protocolos personalizados, seguimiento individualizado y productos de alta gama skincare.",
                icon: <ShieldCheck className="w-10 h-10 text-primary" />,
              },
              {
                title: "Glow Natural",
                desc: "Resultados progresivos enfocados en la salud visual y luminosidad natural de tu piel.",
                icon: <Sparkles className="w-10 h-10 text-primary" />,
              },
            ].map((item, i) => (
              <div key={i} className="space-y-6 p-8 bg-stone-50 border border-stone-100 hover:border-primary/20 transition-all group">
                <div className="group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="text-xl font-bold text-stone-900 uppercase tracking-wider">{item.title}</h4>
                <p className="text-stone-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
