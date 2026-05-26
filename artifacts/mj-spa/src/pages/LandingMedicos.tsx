import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { StatsBar } from "@/components/StatsBar";
import {
  CheckCircle2,
  ArrowRight,
  Star,
  ShieldCheck,
  Clock,
  ChevronDown,
  Phone,
  Sparkles,
  Zap,
  Stethoscope,
  XCircle,
  HelpCircle,
  Award,
} from "lucide-react";
import { useState } from "react";

const WA_CTA = "https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0";

function trackWA(label: string) {
  if (typeof window !== "undefined" && (window as any).dataLayer) {
    (window as any).dataLayer.push({ event: "click_whatsapp", cta_label: label, page: "medicina-estetica" });
  }
}

function CTAButton({ label, id, className = "" }: { label: string; id: string; className?: string }) {
  return (
    <a
      id={id}
      href={WA_CTA}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWA(label)}
      className={`inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold rounded-full px-8 py-4 text-base shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-0.5 transition-all duration-200 ${className}`}
    >
      <Phone className="w-5 h-5" />
      {label}
      <ArrowRight className="w-4 h-4" />
    </a>
  );
}

const faqs = [
  {
    q: "¿Los resultados se ven naturales?",
    a: "Sí. Nuestro enfoque está orientado a armonización y naturalidad progresiva.",
  },
  {
    q: "¿Necesito una valoración previa?",
    a: "Sí. Cada persona requiere evaluación individual para diseñar un protocolo adecuado.",
  },
  {
    q: "¿Cuándo se ven resultados?",
    a: "Depende del tratamiento y cada persona, pero muchos protocolos muestran mejoras progresivas.",
  },
  {
    q: "¿Se pueden combinar tratamientos?",
    a: "Sí. Muchos protocolos wellness y faciales pueden complementarse entre sí.",
  },
  {
    q: "¿Qué tratamiento es ideal para mí?",
    a: "La valoración personalizada nos ayuda a recomendar el protocolo más adecuado según tus objetivos.",
  },
];

function FAQ({ q, a, open, toggle }: { q: string; a: string; open: boolean; toggle: () => void }) {
  return (
    <div className="border border-stone-200 rounded-2xl overflow-hidden">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-stone-50 transition-colors"
      >
        <span className="font-semibold text-stone-800 text-sm leading-snug">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-stone-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function LandingMedicos() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Tratamientos Médico-Estéticos en Turrialba | Armonización Facial"
        description="Armonización facial y bienestar estético con resultados naturales en Turrialba. Botox, rellenos, bioestimuladores y protocolos personalizados. MJ Estética."
        canonical="/medicina-estetica"
      />
      <Navbar />

      {/* ───── 1. HERO ───── */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#071e2e] overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,#1378A2,transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center py-24">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Stethoscope className="w-3.5 h-3.5" />
            Medicina Estética Avanzada
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-serif text-white leading-tight mb-6"
          >
            Tratamientos <span className="text-primary italic">Médico-Estéticos</span> en Turrialba
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Armonización facial y bienestar estético con resultados naturales y progresivos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <CTAButton label="Quiero mi valoración estética" id="hero-cta-medicos" className="text-lg px-10 py-5" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mt-12 text-white/50 text-xs"
          >
            {["Resultados naturales", "Protocolos médicos", "Atención personalizada"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary/60" /> {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <StatsBar />

      {/* ───── 2. INTRO ───── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-8 leading-snug">
              En MJ Estética & Wellness Center creemos que la medicina estética moderna no se trata de cambiar quién eres… sino de ayudarte a sentirte más seguro(a), fresco(a) y en armonía contigo mismo(a).
            </h2>
            <p className="text-stone-600 text-lg mb-12">
              Nuestros protocolos médico-estéticos están diseñados para apoyar el bienestar facial y corporal mediante tratamientos personalizados, enfocados en naturalidad, seguridad y resultados progresivos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
              {[
                "Atención personalizada",
                "Protocolos adaptados individualmente",
                "Enfoque wellness y estético",
                "Ambiente premium y seguro",
                "Resultados naturales y progresivos",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-stone-50 border border-stone-100 p-4 rounded-xl">
                  <Sparkles className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-stone-700 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── 3. FEARS VS REALITY ───── */}
      <section className="py-24 px-4 sm:px-6 bg-[#071e2e] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Descubre una nueva forma de cuidar tu imagen</p>
              <h2 className="text-4xl font-serif mb-6 text-white">Muchas personas desean verse mejor… pero también tienen miedo de:</h2>
              <ul className="space-y-4">
                {[
                  "Verse artificiales",
                  "Perder naturalidad",
                  "Tratamientos exagerados",
                  "Malas experiencias",
                  "Procedimientos poco personalizados",
                ].map((fear, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                    {fear}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-serif text-primary mb-4">La realidad es que la medicina estética moderna ha evolucionado.</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Hoy, el objetivo no es transformar tu rostro. El objetivo es armonizar, rejuvenecer y resaltar tu belleza natural de manera progresiva y elegante.
              </p>
              <p className="text-white/80 leading-relaxed">
                En MJ Estética & Wellness Center trabajamos bajo un enfoque de bienestar estético integral para ayudarte a sentirte mejor contigo mismo(a), respetando siempre tu naturalidad y esencia.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── 4. WHAT ARE THEY? ───── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <HelpCircle className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-serif text-stone-800 mb-6">¿Qué son los tratamientos médico-estéticos?</h2>
            <p className="text-stone-600 text-lg mb-8 leading-relaxed">
              Los tratamientos médico-estéticos son protocolos personalizados orientados al bienestar facial y corporal que buscan mejorar la apariencia, luminosidad y armonización estética mediante procedimientos avanzados y atención profesional.
            </p>
            <p className="text-stone-500 mb-12">
              Cada persona tiene necesidades diferentes. Por eso, realizamos valoraciones personalizadas para diseñar protocolos adaptados a cada caso.
            </p>
            <div className="inline-block bg-primary/10 border border-primary/20 px-8 py-4 rounded-full">
              <p className="text-primary font-bold">El objetivo NO es exagerar resultados.</p>
            </div>
            <p className="mt-4 text-stone-700 font-serif text-xl italic">
              El objetivo es ayudarte a verte descansado(a), saludable y naturalmente armonizado(a).
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───── 5. IMPROVEMENTS ───── */}
      <section className="py-24 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800">¿Qué pueden ayudar a mejorar los tratamientos médico-estéticos?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Apariencia facial y corporal",
              "Glow y luminosidad de la piel",
              "Bienestar estético integral",
              "Rejuvenecimiento progresivo",
              "Apariencia de cansancio facial",
              "Armonización facial natural",
              "Confianza estética",
              "Complemento de autocuidado wellness",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1, transition: { delay: i * 0.05 } }
                }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0" />
                <span className="text-stone-700 text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-12 text-stone-500 italic text-sm">
            Nuestros protocolos pueden combinarse con tratamientos faciales avanzados, skincare profesional y wellness estético para potenciar resultados progresivos y personalizados.
          </p>
        </div>
      </section>

      {/* ───── 6. FOCUS ───── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-stone-800 mb-4">Resultados naturales, no artificiales</h2>
          <p className="text-stone-500 mb-12">En MJ Estética & Wellness Center creemos en la estética inteligente y equilibrada.</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {["Naturalidad", "Bienestar", "Armonización", "Prevención", "Personalización", "Seguridad estética"].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2 text-stone-700 font-semibold border border-stone-200 py-4 rounded-2xl hover:bg-stone-50 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                {item}
              </div>
            ))}
          </div>
          <p className="mt-12 text-2xl font-serif text-stone-800">
            Nuestro objetivo es ayudarte a verte mejor <span className="text-primary italic text-3xl block mt-2">SIN perder tu esencia.</span>
          </p>
        </div>
      </section>

      {/* ───── 7. METHODOLOGY ───── */}
      <section className="py-24 px-4 sm:px-6 bg-[#071e2e] text-white overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">El Proceso</p>
            <h2 className="text-4xl font-serif text-white">¿Cómo funciona una valoración médico-estética?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-white/10" />
            {[
              { step: "Paso 1", title: "Evaluación personalizada", desc: "Analizamos tu piel, objetivos estéticos, estilo de vida y expectativas para entender qué protocolo puede ayudarte mejor." },
              { step: "Paso 2", title: "Diseño del protocolo", desc: "Creamos un plan personalizado orientado a resultados naturales y progresivos." },
              { step: "Paso 3", title: "Aplicación del tratamiento", desc: "Los procedimientos se realizan bajo atención profesional, en un ambiente seguro, cómodo y wellness premium." },
              { step: "Paso 4", title: "Seguimiento y recomendaciones", desc: "Te guiamos con cuidados posteriores y recomendaciones para apoyar tus resultados y bienestar estético." },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } }
                }}
                className="relative z-10"
              >
                <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-[#071e2e] font-bold mb-6 mx-auto md:mx-0">
                  {i + 1}
                </div>
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{step.step}</p>
                <h3 className="text-xl font-serif mb-4 text-white">{step.title}</h3>
                <p className="text-white text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 8. IDEAL FOR... ───── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif text-stone-800 mb-6">¿Para quién se recomiendan estos tratamientos?</h2>
              <p className="text-stone-500 mb-8 leading-relaxed">
                Estos protocolos pueden ser ideales para personas que buscan mejorar su apariencia de forma elegante y sutil, priorizando la salud de su piel y su bienestar integral.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Rejuvenecimiento facial natural",
                  "Glow y luminosidad saludable",
                  "Armonización facial",
                  "Protocolos preventivos antiaging",
                  "Bienestar estético integral",
                  "Mantenimiento facial premium",
                  "Complementar su rutina de skincare avanzado",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-stone-700 text-sm font-medium">
                    <Sparkles className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-stone-50 rounded-3xl p-8 border border-stone-200">
              <h3 className="text-2xl font-serif text-stone-800 mb-4">Lo que hace diferente a MJ Estética & Wellness Center</h3>
              <p className="text-stone-600 mb-6 font-medium">No buscamos que te veas “operado(a)” o exagerado(a).</p>
              <p className="text-stone-500 text-sm mb-6">Nuestro enfoque está basado en:</p>
              <ul className="space-y-3">
                {[
                  "Atención personalizada",
                  "Protocolos adaptados individualmente",
                  "Experiencia wellness premium",
                  "Ambiente seguro y profesional",
                  "Resultados progresivos y naturales",
                  "Bienestar facial y corporal integral",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-stone-700 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-stone-500 text-xs italic">Cada protocolo se adapta a tu rostro, objetivos y necesidades reales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── 10. TESTIMONIALS ───── */}
      <section className="py-24 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Experiencias</p>
            <h2 className="text-4xl font-serif text-stone-800">Testimonios de pacientes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "“Me encantó porque los resultados se veían súper naturales. Me sentía más fresca y descansada, pero seguía viéndome yo.”",
                author: "Paciente MJ"
              },
              {
                text: "“Desde la valoración sentí muchísima confianza. Todo fue personalizado y muy profesional.”",
                author: "Paciente MJ"
              },
              {
                text: "“Buscaba glow y bienestar facial sin exagerar resultados… y justamente eso encontré en MJ.”",
                author: "Paciente MJ"
              }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } }
                }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-stone-600 text-sm italic leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                    {t.author[0]}
                  </div>
                  <p className="text-stone-800 text-xs font-bold uppercase tracking-widest">{t.author}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 11. FAQ ───── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Preguntas frecuentes</p>
            <h2 className="text-3xl font-serif text-stone-800">Resolvemos tus dudas</h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQ key={i} q={faq.q} a={faq.a} open={openFaq === i} toggle={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* ───── 12. PROGRAMS & LEAD MAGNET ───── */}
      <section className="py-24 px-4 sm:px-6 bg-[#071e2e] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif mb-8 text-white">Programas y protocolos disponibles</h2>
              <ul className="grid grid-cols-1 gap-4">
                {[
                  "Programas wellness premium",
                  "Protocolos faciales personalizados",
                  "Rejuvenecimiento facial natural",
                  "Skincare avanzado profesional",
                  "Armonización estética personalizada",
                  "Paquetes faciales y corporales",
                ].map((prog, i) => (
                  <li key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl">
                    <Sparkles className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-white font-medium text-sm">{prog}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 text-stone-800 text-center flex flex-col justify-center border-t-8 border-primary shadow-2xl">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest mb-6 mx-auto">
                <Award className="w-3.5 h-3.5" />
                Regalo para ti
              </div>
              <h3 className="text-2xl font-serif mb-2">🎁 GUÍA GRATUITA</h3>
              <p className="text-stone-600 font-semibold mb-6">Cómo mejorar los resultados de tus limpiezas faciales</p>
              <p className="text-stone-500 text-sm mb-8">
                Comenta la palabra <span className="text-primary font-bold text-lg px-2">MÉDICOS</span> en nuestro WhatsApp y recibe GRATIS nuestra guía práctica.
              </p>
              <a
                href={WA_CTA}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWA("lead-magnet-medicos")}
                className="bg-primary text-white font-bold rounded-full py-4 px-8 hover:bg-stone-900 transition-all flex items-center justify-center gap-2 group shadow-xl"
              >
                Quiero mi guía GRATIS
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───── 13. FINAL CTA ───── */}
      <section className="py-24 px-4 sm:px-6 bg-stone-50 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6 leading-tight">Agenda tu valoración estética hoy</h2>
            <p className="text-stone-600 text-lg mb-10">Tu bienestar también merece atención profesional, personalizada y natural.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto mb-12">
              {[
                "Descubre el protocolo ideal para ti",
                "Consulta disponibilidad",
                "Agenda tu valoración estética",
                "Escríbenos por WhatsApp hoy",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-stone-700 text-sm font-semibold">
                  <Zap className="w-4 h-4 text-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <CTAButton label="Agendar valoración por WhatsApp" id="final-cta-medicos" className="text-lg px-12 py-5 shadow-2xl" />

            <div className="mt-16 pt-8 border-t border-stone-200">
              <p className="text-stone-900 font-serif font-bold text-lg mb-1">📍 MJ Estética & Wellness Center — Turrialba</p>
              <p className="text-stone-500 text-sm">Atención wellness y médico-estética premium orientada a resultados naturales y progresivos.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
