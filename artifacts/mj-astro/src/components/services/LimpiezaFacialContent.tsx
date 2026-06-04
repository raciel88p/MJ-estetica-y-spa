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
  ChevronRight,
  Quote,
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
    <div className="space-y-24 pb-20 overflow-hidden">
      {/* 1. Intro Section (Post-Janeth) */}
      <section className="relative py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeUp} className="space-y-6">
              <p className="text-lg text-stone-700 leading-relaxed">
                En MJ Estética & Wellness Center entendemos que una limpieza facial no se trata solo de “limpiar la piel”.<br />
                Se trata de ayudarte a recuperar frescura, glow natural y bienestar facial mediante protocolos personalizados y una experiencia skincare premium en Turrialba.
              </p>

              <div className="space-y-3">
                {[
                  "Valoración facial personalizada",
                  "Protocolos adaptados según tu tipo de piel",
                  "Experiencia relajante y profesional",
                  "Productos especializados skincare",
                  "Atención enfocada en bienestar y luminosidad facial",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-primary text-lg">✨</span>
                    <span className="text-stone-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <p className="text-xl font-serif font-bold text-stone-900 mb-6">Descubre el protocolo ideal para tu piel hoy</p>
                <div className="space-y-4">
                  {[
                    "Agenda tu valoración facial",
                    "Consulta disponibilidad",
                    "Escríbenos por WhatsApp",
                  ].map((text, i) => (
                    <a
                      key={i}
                      href={limpiezaWaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-primary font-bold hover:translate-x-2 transition-transform cursor-pointer"
                    >
                      <span className="text-xl">👉</span>
                      <span className="border-b border-primary/30 pb-0.5">{text}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. What is it? */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-10"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold">¿Qué es una limpieza facial?</h2>
            <p className="text-xl text-stone-300 leading-relaxed font-light">
              La limpieza facial es un tratamiento skincare diseñado para apoyar la limpieza profunda de la piel, mejorar la sensación de frescura facial y favorecer una apariencia más luminosa y revitalizada.
            </p>
            <p className="text-lg text-stone-400">
              En MJ Estética & Wellness Center cada protocolo se adapta según las necesidades específicas de tu piel, porque no todas las pieles requieren el mismo cuidado.
            </p>

            <div className="pt-8">
              <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-8">Nuestro enfoque combina:</p>
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  "limpieza profunda facial",
                  "bienestar de la piel",
                  "glow facial natural",
                  "hidratación y cuidado profesional",
                  "experiencia wellness premium",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-none">
                    <span className="text-green-400">✅</span>
                    <span className="text-sm font-medium tracking-wide uppercase">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-primary font-serif italic text-2xl pt-10 border-t border-white/5">
              "La meta no es cambiar quién eres. Es ayudarte a sentirte más cómoda, fresca y segura con tu piel."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Improvements & Why */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-10"
          >
            <motion.h3 variants={fadeUp} className="text-3xl font-serif font-bold text-stone-900">
              ¿Qué puede ayudar a mejorar este tratamiento?
            </motion.h3>
            <motion.p variants={fadeUp} className="text-stone-600">
              La limpieza facial puede apoyar protocolos orientados a:
            </motion.p>

            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Glow y luminosidad facial",
                "Sensación de limpieza profunda",
                "Bienestar general de la piel",
                "Apariencia más fresca y revitalizada",
                "Textura facial más uniforme",
                "Rutinas de skincare personalizadas",
                "Cuidado facial preventivo",
                "Sensación de hidratación y frescura",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-primary">✨</span>
                  <span className="text-stone-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeUp} className="text-stone-500 text-sm italic pt-6 border-t border-stone-100">
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
              ¿Por qué tantas personas están incorporando limpiezas faciales en sus rutinas?
            </motion.h3>
            <motion.p variants={fadeUp} className="text-stone-300 leading-relaxed">
              Porque hoy el skincare dejó de ser un lujo. Ahora es parte del autocuidado.
            </motion.p>
            <motion.p variants={fadeUp} className="text-stone-400 text-sm">
              Muchas personas pasan semanas usando maquillaje, protector solar, estrés diario y contaminación ambiental sobre la piel… sin darle un verdadero proceso de limpieza profunda.
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-4">
              <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">El resultado puede sentirse así:</p>
              {[
                "Piel apagada",
                "Sensación de grasa o resequedad",
                "Falta de luminosidad",
                "Textura irregular",
                "Sensación de cansancio facial",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-stone-300">
                  <span className="text-red-400">❌</span>
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeUp} className="pt-6 font-serif italic text-xl border-t border-white/10 text-primary">
              Ahí es donde una experiencia facial premium puede marcar la diferencia.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 4. Real Benefits */}
      <section className="bg-white py-10">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-serif font-bold text-stone-900">Beneficios reales de una limpieza facial</h2>
              <p className="text-stone-600">En MJ Estética & Wellness Center buscamos resultados progresivos, naturales y personalizados.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                "Glow facial progresivo",
                "Sensación de frescura y limpieza",
                "Apariencia más luminosa",
                "Bienestar facial integral",
                "Experiencia skincare premium",
                "Relajación y autocuidado",
                "Cuidado profesional de la piel",
                "Protocolos adaptados individualmente",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-4 border-b border-stone-50">
                  <span className="text-green-500 font-bold">✅</span>
                  <span className="text-stone-800 font-medium uppercase tracking-wide text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-stone-50 p-10 text-center space-y-4 border-l-4 border-primary">
              <p className="text-stone-500 italic">"Sin promesas irreales. Sin exageraciones. Solo cuidado profesional enfocado en el bienestar y la salud visual de tu piel."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Types of Service */}
      <section className="bg-stone-50 py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-16 text-center uppercase tracking-widest">Tipos de limpieza facial disponibles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Limpieza facial profunda",
                desc: "Ideal para quienes buscan una sensación de limpieza intensiva y renovación facial.",
                features: ["Limpieza profesional", "Bienestar facial", "Sensación de frescura profunda"],
                cta: "Consulta disponibilidad"
              },
              {
                title: "Limpieza facial hidratante",
                desc: "Pensada para pieles que buscan hidratación, suavidad y luminosidad natural.",
                features: ["Glow saludable", "Sensación de hidratación", "Apariencia revitalizada"],
                cta: "Agenda tu valoración facial"
              },
              {
                title: "Facial premium glow",
                desc: "Una experiencia skincare orientada al bienestar, relajación y luminosidad facial.",
                features: ["Experiencia wellness", "Productos especializados", "Cuidado facial premium"],
                cta: "Descubre el protocolo ideal"
              },
              {
                title: "Protocolos skincare avanzados",
                desc: "Tratamientos personalizados según necesidades específicas evaluadas profesionalmente.",
                features: ["Valoración individual", "Protocolos personalizados", "Seguimiento profesional"],
                cta: "Escríbenos por WhatsApp"
              },
            ].map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 flex flex-col h-full border border-stone-100 hover:shadow-2xl transition-all"
              >
                <h4 className="text-xl font-serif font-bold text-stone-900 mb-4">{type.title}</h4>
                <p className="text-stone-500 text-sm mb-8 flex-grow leading-relaxed">{type.desc}</p>
                <div className="space-y-3 mb-10">
                  {type.features.map((feat, j) => (
                    <div key={j} className="flex items-center gap-2 text-stone-700 text-sm">
                      <span className="text-blue-500">✔</span>
                      {feat}
                    </div>
                  ))}
                </div>
                <a
                  href={limpiezaWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group"
                >
                  <span className="text-xl group-hover:translate-x-1 transition-transform">👉</span>
                  <span className="border-b-2 border-primary/20 pb-0.5 group-hover:border-primary transition-colors">{type.cta}</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How it works */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="bg-[#040f19] text-white p-10 md:p-20 relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-12">¿Cómo funciona una limpieza facial?</h2>
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
                  <div key={i} className="flex gap-6 border-l border-white/10 pl-8 relative">
                    <div className="absolute -left-1 top-0 w-2 h-2 rounded-full bg-primary" />
                    <div>
                      <span className="text-primary font-serif italic text-xl mb-1 block">{item.step}</span>
                      <h4 className="text-xl font-bold mb-2 uppercase tracking-wide">{item.title}</h4>
                      <p className="text-stone-400 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-10 self-center border border-white/10 space-y-10">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-primary">
                  <Clock className="w-8 h-8" />
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-[10px]">Duración aproximada</h4>
                    <p className="text-2xl font-serif">60 a 90 minutos</p>
                  </div>
                </div>
                <div className="space-y-4 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="text-primary text-lg">✨</span>
                    <span className="text-stone-300 text-sm">Experiencia relajante y cómoda</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-400 text-lg">☀</span>
                    <span className="text-stone-300 text-sm">Recomendado protector solar e hidratación</span>
                  </div>
                </div>
              </div>
              <a
                href={limpiezaWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-5 bg-primary text-white text-center font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-primary transition-all duration-300"
              >
                Reservar sesión
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. For Whom */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-900 uppercase tracking-widest mb-4">¿Para quién se recomienda una limpieza facial?</h2>
            <p className="text-stone-500">Este tratamiento puede ser ideal para:</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Personas interesadas en glow facial",
              "Personas que buscan limpieza profunda",
              "Quienes desean iniciar una rutina skincare",
              "Personas interesadas en bienestar facial",
              "Personas que buscan una experiencia premium de cuidado facial",
              "Rutinas preventivas de cuidado de la piel",
              "Personas que desean mejorar la sensación de frescura y luminosidad",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-5 border border-stone-200">
                <span className="text-primary text-xl">✨</span>
                <span className="text-stone-800 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Before & After */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase">Antes y después: resultados reales</h2>
            <p className="text-stone-600">En MJ Estética & Wellness Center creemos en resultados naturales.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Glow saludable",
              "Luminosidad progresiva",
              "Piel con apariencia más fresca",
              "Bienestar facial real",
              "Resultados personalizados",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 justify-center">
                <span className="text-primary">✔</span>
                <span className="text-stone-800 font-bold uppercase tracking-widest text-[10px]">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-stone-400 text-xs italic">📸 Utilizamos fotografías reales de pacientes y procesos auténticos.</p>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="bg-[#071e2e] py-24 text-white relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-serif font-bold mb-16 text-center">Lo que dicen nuestras clientas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Mi piel se siente mucho más fresca y luminosa.",
              "La experiencia fue súper relajante y personalizada.",
              "Me encantó cómo quedó mi piel después de la limpieza facial.",
              "Sentí una diferencia en luminosidad y suavidad desde la primera sesión.",
            ].map((text, i) => (
              <div key={i} className="p-10 bg-white/5 border border-white/10 relative">
                <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/20" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-stone-300 italic leading-relaxed">“{text}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQs */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-16 text-center">Preguntas frecuentes</h2>
          <div className="space-y-10">
            {[
              { q: "¿Qué incluye una limpieza facial?", a: "Incluye valoración facial, limpieza profesional, protocolo personalizado y recomendaciones posteriores." },
              { q: "¿Cada cuánto se recomienda?", a: "Depende del tipo de piel y objetivos individuales. La frecuencia ideal se define en valoración." },
              { q: "¿Ayuda con glow facial?", a: "Muchas personas buscan este tratamiento para apoyar luminosidad y bienestar facial." },
              { q: "¿Tiene recuperación?", a: "Generalmente las personas continúan sus actividades normales el mismo día." },
              { q: "¿Qué productos utilizan?", a: "Utilizamos productos especializados seleccionados según las necesidades de cada piel." },
              { q: "¿Se puede combinar con otros tratamientos faciales?", a: "Sí, dependiendo de la valoración profesional y objetivos skincare." },
              { q: "¿Cuánto dura la sesión?", a: "Entre 60 y 90 minutos aproximadamente." },
              { q: "¿Qué cuidados posteriores se recomiendan?", a: "Hidratación, protector solar y seguimiento de recomendaciones profesionales." },
            ].map((faq, i) => (
              <div key={i} className="space-y-3 pb-8 border-b border-stone-100">
                <h4 className="text-lg font-bold text-stone-900">{faq.q}</h4>
                <p className="text-stone-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Programs & Experience */}
      <section className="bg-primary/5 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-3xl font-serif font-bold text-stone-900 uppercase tracking-widest">Programas y experiencias skincare premium</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Valoración facial personalizada",
              "Programas glow facial",
              "Skincare memberships",
              "Wellness facial bundles",
              "Protocolos premium adaptados individualmente",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 justify-center bg-white p-6 border border-primary/20">
                <span className="text-primary text-lg">✨</span>
                <span className="text-stone-800 text-sm font-bold uppercase tracking-tight">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-stone-500 font-medium">Consulta disponibilidad y promociones activas.</p>
        </div>
      </section>

      {/* 12. Why Choose MJ? */}
      <section className="py-24 border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase">¿Por qué elegir MJ Estética & Wellness Center?</h2>
          <p className="text-stone-600 text-lg">Porque creemos que el skincare debe sentirse humano, profesional y personalizado.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              "Protocolos personalizados",
              "Atención profesional",
              "Experiencia skincare avanzada",
              "Ambiente cómodo y relajante",
              "Enfoque wellness facial",
              "Seguimiento individualizado",
              "Cuidado orientado a glow natural y bienestar",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-stone-50 border border-stone-100">
                <span className="text-primary">✅</span>
                <span className="text-stone-800 font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-2xl font-serif font-bold text-stone-900 pt-10">
            No buscamos hacer una limpieza facial genérica.<br />
            <span className="italic text-primary">Buscamos ayudarte a vivir una experiencia premium de cuidado facial.</span>
          </p>
        </div>
      </section>

      {/* 13. Location Block */}
      <section className="bg-white py-12">
        <div className="max-w-xl mx-auto px-6 text-center space-y-8 border-y border-stone-100 py-16">
          <h2 className="text-3xl font-serif font-bold text-stone-900">Limpieza Facial en Turrialba</h2>
          <div className="space-y-4">
            {[
              { icon: "📍", text: "Ubicación accesible en Turrialba" },
              { icon: "📲", text: "Atención por WhatsApp" },
              { icon: "🚗", text: "Parqueo cercano" },
              { icon: "🕒", text: "Horarios sujetos a disponibilidad" },
              { icon: "✨", text: "Atención personalizada" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-3 text-stone-700">
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium uppercase tracking-widest text-xs">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Lead Magnet & Final CTA */}
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-24">
        <div className="bg-primary/5 border-2 border-dashed border-primary/30 p-10 md:p-16 text-center space-y-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-stone-900 uppercase">Descubre el protocolo ideal para tu piel</h3>
            <p className="text-stone-600 leading-relaxed max-w-2xl mx-auto">
              Tu piel merece más que una limpieza rápida. Merece cuidado profesional, bienestar y una experiencia diseñada especialmente para ti.
            </p>
            <div className="flex flex-col items-center gap-6 pt-6">
              {[
                "Agenda tu valoración facial hoy",
                "Consulta disponibilidad",
                "Escríbenos por WhatsApp y descubre tu protocolo ideal",
              ].map((text, i) => (
                <a
                  key={i}
                  href={limpiezaWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary font-bold hover:scale-105 transition-transform"
                >
                  <span className="text-2xl font-serif">✨</span>
                  <span className="border-b-2 border-primary/20 pb-0.5">{text}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-16 border-t border-primary/20 space-y-8">
            <h4 className="text-xl font-serif font-bold text-stone-900 italic">
              🎁 Guía Gratuita: Cómo mejorar los resultados de una limpieza facial
            </h4>
            <div className="space-y-6">
              <p className="text-stone-600 text-sm">Comenta la palabra:</p>
              <div className="text-5xl md:text-6xl font-serif font-bold text-primary tracking-tighter">
                LIMPIEZA
              </div>
              <p className="text-stone-600 text-sm max-w-md mx-auto">
                Y recibe GRATIS nuestra guía con recomendaciones profesionales para potenciar glow, luminosidad y bienestar facial desde casa.
              </p>
              <a
                href={`https://wa.me/50686907757?text=LIMPIEZA`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-12 py-5 bg-[#25D366] text-white font-bold rounded-full hover:scale-105 transition-transform shadow-xl shadow-green-200"
              >
                <MessageCircle className="w-6 h-6" />
                QUIERO MI GUÍA GRATIS
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
