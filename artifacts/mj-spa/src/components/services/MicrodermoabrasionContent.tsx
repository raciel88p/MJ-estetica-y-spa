import { motion } from "framer-motion";
import {
  MessageCircle,
  Star,
  Quote,
  Clock,
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

export function MicrodermoabrasionContent({ service, waLink }: Props) {
  const microWaLink = waLink || `https://wa.me/50686907757?text=Hola!%20Deseo%20más%20información%20sobre%20el%20Facial%20de%20Microdermoabrasión`;

  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      {/* 1. Intro Section */}
      <section className="relative py-20 bg-white text-stone-800">
        <div className="max-w-4xl mx-auto px-6 text-center sm:text-left">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeUp} className="space-y-6">
              <div className="text-lg text-stone-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: service.heroDescription }} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
                {service.benefits.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-primary text-lg">✨</span>
                    <span className="text-stone-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <p className="text-xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-tight">Agenda hoy tu valoración facial personalizada</p>
                <div className="space-y-4">
                  {[
                    "Consulta disponibilidad",
                    "Escríbenos por WhatsApp",
                    "Descubre el protocolo ideal para tu piel",
                  ].map((text, i) => (
                    <a
                      key={i}
                      href={microWaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center sm:justify-start gap-3 text-primary font-bold hover:translate-x-2 transition-transform cursor-pointer group"
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform">✅</span>
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">¿Qué es un Facial de Microdermoabrasión?</h2>
            <p className="text-xl text-stone-200 leading-relaxed font-light">
              La microdermoabrasión facial es un tratamiento de exfoliación profesional diseñado para apoyar la renovación de la piel mediante protocolos orientados a mejorar textura, luminosidad y apariencia facial.
            </p>
            <p className="text-lg text-stone-300">
              En MJ Estética & Wellness Center, cada protocolo se adapta de forma personalizada según las necesidades de la piel, porque entendemos que cada rostro requiere cuidados únicos.
            </p>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Este tratamiento puede complementar rutinas de skincare avanzado y ayudar a revitalizar visualmente la piel mediante una experiencia estética enfocada en bienestar facial y resultados progresivos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Improvements */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="bg-stone-50 p-10 md:p-20 border border-stone-200 rounded-none relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div className="space-y-8">
              <h3 className="text-3xl font-serif font-bold text-stone-900">¿Qué puede ayudar a mejorar la Microdermoabrasión?</h3>
              <p className="text-stone-600">Nuestro protocolo facial está diseñado para apoyar:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Apariencia de textura facial irregular",
                  "Luminosidad y glow natural",
                  "Sensación de piel opaca o cansada",
                  "Renovación facial progresiva",
                  "Bienestar y frescura de la piel",
                  "Apariencia saludable y revitalizada",
                  "Limpieza facial avanzada",
                  "Complemento para skincare profesional",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-primary font-bold">✅</span>
                    <span className="text-stone-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-stone-500 text-sm italic pt-6 border-t border-stone-200">
                Todo mediante atención personalizada y protocolos adaptados individualmente.
              </p>
            </div>

            <div className="bg-[#071e2e] p-10 text-white flex flex-col justify-center space-y-6">
              <p className="text-2xl font-serif italic text-primary leading-tight">
                "Imagina verte al espejo y notar tu piel más luminosa…"
              </p>
              <div className="space-y-4">
                <p className="text-stone-300 text-sm uppercase tracking-widest font-bold">Muchas personas buscan algo simple:</p>
                <p className="text-xl">“Quiero que mi piel vuelva a verse fresca.”</p>
                <div className="space-y-2 pt-4">
                   {["Piel apagada", "Sensación de cansancio facial", "Textura poco uniforme", "Rutinas que ya no generan resultados", "Falta de tiempo para cuidar la piel"].map((t, i) => (
                     <div key={i} className="flex items-center gap-3 text-stone-300 text-xs">
                        <span className="text-red-400">❌</span>
                        <span>{t}</span>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>
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
              <h2 className="text-4xl font-serif font-bold text-stone-900">Beneficios Reales del Facial de Microdermoabrasión</h2>
              <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs">¿Qué beneficios puedes experimentar?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {[
                "Apariencia más luminosa",
                "Sensación de renovación facial",
                "Glow progresivo y natural",
                "Textura visualmente más uniforme",
                "Complemento ideal para skincare avanzado",
                "Bienestar facial integral",
                "Piel con apariencia más fresca",
                "Sensación de limpieza profunda",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-4 border-b border-stone-50">
                  <span className="text-primary text-lg">✨</span>
                  <span className="text-stone-800 font-medium uppercase tracking-wide text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-stone-50 p-10 text-center space-y-4 border-y border-stone-100">
              <p className="text-stone-600 leading-relaxed">
                Nuestro objetivo NO es prometer resultados irreales.<br />
                Nuestro enfoque es acompañarte con protocolos personalizados orientados al bienestar y cuidado progresivo de tu piel.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Process */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="bg-[#040f19] text-white p-10 md:p-20 relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-12 text-white">¿Cómo funciona el tratamiento?</h2>
              <div className="space-y-12">
                {[
                  {
                    step: "Paso 1",
                    title: "Evaluación Facial Personalizada",
                    desc: "Analizamos las necesidades de tu piel para definir el protocolo ideal según textura, sensibilidad y objetivos skincare.",
                  },
                  {
                    step: "Paso 2",
                    title: "Limpieza y Preparación",
                    desc: "Se prepara la piel mediante limpieza profesional para optimizar el tratamiento.",
                  },
                  {
                    step: "Paso 3",
                    title: "Aplicación de Microdermoabrasión",
                    desc: "Se realiza el protocolo de exfoliación facial profesional orientado a renovación y revitalización de la piel.",
                  },
                  {
                    step: "Paso 4",
                    title: "Hidratación y Recomendaciones",
                    desc: "Finalizamos con hidratación facial y recomendaciones personalizadas para cuidados posteriores.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 border-l border-white/10 pl-8 relative">
                    <div className="absolute -left-1 top-0 w-2 h-2 rounded-full bg-primary" />
                    <div>
                      <span className="text-primary font-serif italic text-xl mb-1 block">{item.step}</span>
                      <h4 className="text-xl font-bold mb-2 uppercase tracking-wide text-white">{item.title}</h4>
                      <p className="text-stone-300 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-10 self-center border border-white/10 space-y-10">
              <div className="space-y-8">
                <div className="flex items-center gap-4 text-primary">
                  <Clock className="w-8 h-8" />
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-[10px]">Duración aproximada</h4>
                    <p className="text-2xl font-serif text-white">45 a 60 minutos</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-widest text-primary font-bold">Sensación del tratamiento</p>
                  <p className="text-stone-200 text-sm italic">"La mayoría de personas describen la experiencia como relajante, fresca y confortable."</p>
                </div>

                <div className="space-y-4 pt-6 border-t border-white/10">
                  <p className="text-xs uppercase tracking-widest text-primary font-bold">Cuidados posteriores</p>
                  <div className="grid grid-cols-2 gap-3">
                    {["Hidratación", "Protección solar", "Rutina skincare", "Seguimiento"].map((c, i) => (
                       <div key={i} className="flex items-center gap-2 text-stone-300 text-xs">
                          <span className="text-primary font-bold">✔</span>
                          {c}
                       </div>
                    ))}
                  </div>
                </div>
              </div>
              <a
                href={microWaLink}
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

      {/* 6. For Whom */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-900 uppercase tracking-widest mb-4">¿Para quién se recomienda este facial?</h2>
            <p className="text-stone-500">Este protocolo puede ser ideal para personas que buscan:</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-stone-800">
            {[
              "Glow facial natural",
              "Mejorar apariencia de textura facial",
              "Complementar rutinas skincare avanzadas",
              "Sensación de renovación y frescura",
              "Mantenimiento facial preventivo",
              "Bienestar y cuidado premium de piel",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-5 border border-stone-200 shadow-sm">
                <span className="text-primary font-bold">✅</span>
                <span className="text-stone-800 text-sm font-medium uppercase tracking-tight">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-stone-400 text-xs mt-12 italic">Cada piel requiere valoración personalizada antes de iniciar cualquier protocolo.</p>
        </div>
      </section>

      {/* 7. Results */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase">Resultados Reales y Naturales</h2>
            <p className="text-stone-600">En MJ Estética & Wellness Center creemos en resultados reales.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Glow natural",
              "Luminosidad progresiva",
              "Apariencia saludable",
              "Textura más uniforme",
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3 justify-center">
                <span className="text-primary text-2xl">✨</span>
                <span className="text-stone-800 font-bold uppercase tracking-widest text-[10px]">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-stone-50 p-10">
             <p className="text-stone-600 max-w-2xl mx-auto text-sm">
               No utilizamos imágenes irreales ni expectativas exageradas.<br />
               Nuestro enfoque es la naturalidad, el cuidado profesional y la experiencia wellness premium.
             </p>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="bg-[#071e2e] py-24 text-white relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-serif font-bold mb-16 text-center text-white uppercase tracking-widest">Lo que dicen nuestras clientas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Sentí mi piel mucho más fresca y luminosa desde la primera sesión.",
              "Me encantó porque mi rostro se veía con un glow natural sin verse artificial.",
              "La experiencia fue súper relajante y personalizada.",
              "Ahora mi piel se siente más suave y con apariencia más saludable.",
            ].map((text, i) => (
              <div key={i} className="p-10 bg-white/5 border border-white/10 relative">
                <div className="flex gap-1 mb-6 text-primary text-xl font-serif">💬</div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-stone-200 italic leading-relaxed">“{text}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQs */}
      <section className="py-24 text-stone-800">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-16 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-10">
            {service.faq?.map((faq, i) => (
              <div key={i} className="space-y-3 pb-8 border-b border-stone-100">
                <h4 className="text-lg font-bold text-stone-900">{faq.question}</h4>
                <p className="text-stone-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Plans */}
      <section className="bg-primary/5 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-3xl font-serif font-bold text-stone-900 uppercase tracking-widest">Planes y Protocolos Faciales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Protocolos personalizados",
              "Programas glow facial",
              "Mantenimiento skincare",
              "Bundles de rejuvenecimiento",
              "Valoración previa",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 justify-center bg-white p-6 border border-primary/20">
                <span className="text-primary text-lg">✨</span>
                <span className="text-stone-800 text-[10px] font-bold uppercase tracking-widest">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-stone-500 font-medium">Consulta disponibilidad y paquetes especiales.</p>
        </div>
      </section>

      {/* 11. Why Choose MJ? */}
      <section className="py-24 border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter">¿Por qué elegir MJ Estética & Wellness Center?</h2>
          <p className="text-stone-600 text-lg">Porque no creemos en tratamientos genéricos.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              "Protocolos personalizados de piel",
              "Atención individualizada",
              "Experiencia wellness premium",
              "Ambiente seguro y profesional",
              "Skincare avanzado",
              "Seguimiento progresivo",
              "Atención enfocada en naturalidad y bienestar facial",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-stone-50 border border-stone-100">
                <span className="text-primary font-bold">✅</span>
                <span className="text-stone-800 font-medium text-sm uppercase tracking-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Location Block */}
      <section className="bg-white py-12">
        <div className="max-w-xl mx-auto px-6 text-center space-y-8 border-y border-stone-100 py-16">
          <h2 className="text-3xl font-serif font-bold text-stone-900 uppercase tracking-widest">Ubicación y Atención en Turrialba</h2>
          <div className="space-y-4">
            {[
              { icon: "📍", text: "Atención en Turrialba" },
              { icon: "🚗", text: "Fácil acceso y parqueo" },
              { icon: "📲", text: "Atención por WhatsApp" },
              { icon: "🕒", text: "Consulta horarios y disponibilidad" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-3 text-stone-700">
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium uppercase tracking-widest text-xs">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Lead Magnet & Final CTA */}
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-24">
        <div className="bg-primary/5 border-2 border-dashed border-primary/30 p-10 md:p-16 text-center space-y-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-stone-900 uppercase tracking-tighter">Tu piel merece atención profesional y personalizada</h3>
            <p className="text-stone-600 leading-relaxed max-w-2xl mx-auto">
              No se trata solo de un facial. Se trata de sentirte bien contigo misma, recuperar luminosidad y darle a tu piel el cuidado que merece.
            </p>
            <div className="flex flex-col items-center gap-6 pt-6">
              <p className="font-serif font-bold text-xl text-stone-900">Agenda tu valoración facial hoy</p>
              {[
                "Descubre el protocolo ideal para tu piel",
                "Consulta disponibilidad",
                "Escríbenos por WhatsApp",
                "Reserva tu experiencia skincare premium en Turrialba",
              ].map((text, i) => (
                <a
                  key={i}
                  href={microWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary font-bold hover:scale-105 transition-transform group"
                >
                  <span className="text-2xl group-hover:rotate-12 transition-transform">✅</span>
                  <span className="border-b-2 border-primary/20 pb-0.5 group-hover:border-primary transition-colors">{text}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-16 border-t border-primary/20 space-y-8">
            <h4 className="text-xl font-serif font-bold text-stone-900 italic leading-relaxed">
              🎁 Descarga GRATIS la Guía de Glow Facial y Resultados de Microdermoabrasión
            </h4>
            <div className="space-y-6">
              <p className="text-stone-600 text-sm uppercase tracking-widest">Comenta la palabra:</p>
              <div className="text-4xl md:text-5xl font-mono font-bold text-primary tracking-tighter bg-white py-4 px-8 border border-primary/20 inline-block">
                “limpieza_facial”
              </div>
              <div className="max-w-md mx-auto space-y-4">
                 <p className="text-stone-600 text-sm">y recibe una guía exclusiva con recomendaciones para:</p>
                 <div className="grid grid-cols-1 gap-2 text-left bg-white p-6 shadow-sm border border-stone-100">
                    {[
                      "Potenciar los resultados de tu facial",
                      "Mantener una piel luminosa por más tiempo",
                      "Mejorar tu rutina skincare",
                      "Aprender cuidados post tratamiento",
                      "Evitar errores comunes que afectan tu piel",
                    ].map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-stone-700 text-xs">
                        <span className="text-primary font-bold">✔</span>
                        {feat}
                      </div>
                    ))}
                 </div>
              </div>
              <a
                href={`https://wa.me/50686907757?text=limpieza_facial`}
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
