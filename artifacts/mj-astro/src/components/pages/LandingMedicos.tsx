import { withAppProviders } from "@/components/ReactAppWrapper";
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

function LandingMedicos({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs_localized = lang === 'es' ? faqs : [
    {
      q: "Do the results look natural?",
      a: "Yes. Our approach focuses on progressive facial harmony and natural-looking results.",
    },
    {
      q: "Do I need a consultation beforehand?",
      a: "Yes. Every person requires an individual evaluation so we can design an appropriate treatment protocol.",
    },
    {
      q: "When will I see results?",
      a: "This depends on the treatment and each individual. Many protocols produce improvements gradually over time.",
    },
    {
      q: "Can treatments be combined?",
      a: "Yes. Many wellness and facial protocols can complement one another as part of a personalized treatment plan.",
    },
    {
      q: "Which treatment is right for me?",
      a: "A personalized consultation helps us recommend the most appropriate protocol based on your individual goals and needs.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title={lang === 'es' ? "Tratamientos Médico-Estéticos en Turrialba | Armonización Facial" : "Medical Aesthetic Treatments in Turrialba | MJ Estética & Wellness"}
        description={lang === 'es' ? "Armonización facial y bienestar estético con resultados naturales en Turrialba. Botox, rellenos, bioestimuladores y protocolos personalizados. MJ Estética." : "Facial harmony and aesthetic wellness with natural, progressive results in Turrialba. Discover personalized medical aesthetic protocols at MJ Estética & Wellness Center."}
        canonical={lang === 'es' ? "/medicina-estetica" : "/en/medical-aesthetic"}
        lang={lang}
      />
      <Navbar lang={lang} alternateLink={lang === 'es' ? '/en/medical-aesthetic' : '/medicina-estetica'} />

      {/* ───── 1. HERO ───── */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#071e2e] overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/medicina-estetica-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,#1378A2,transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center py-24">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Stethoscope className="w-3.5 h-3.5" />
            {lang === 'es' ? "Medicina Estética Avanzada" : "Advanced Medical Aesthetics"}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-serif text-white leading-tight mb-6"
          >
            {lang === 'es' ? "Tratamientos" : "Medical Aesthetic"} <span className="text-primary italic">{lang === 'es' ? "Médico-Estéticos" : "Treatments"}</span> {lang === 'es' ? "en Turrialba" : "in Turrialba"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {lang === 'es' ? "Armonización facial y bienestar estético con resultados naturales y progresivos." : "Facial harmony and aesthetic wellness with natural, progressive results."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <CTAButton label={lang === 'es' ? "Quiero mi valoración estética" : "Book Your Aesthetic Consultation Today"} id="hero-cta-medicos" className="text-lg px-10 py-5" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mt-12 text-white/50 text-xs"
          >
            {(lang === 'es' ? ["Resultados naturales", "Protocolos médicos", "Atención personalizada"] : ["Natural, progressive results", "Personalized attention", "Safe environment"]).map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary/60" /> {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <StatsBar lang={lang} />

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
              {lang === 'es'
                ? "En MJ Estética & Wellness Center creemos que la medicina estética moderna no se trata de cambiar quién eres… sino de ayudarte a sentirte más seguro(a), fresco(a) y en armonía contigo mismo(a)."
                : "At MJ Estética & Wellness Center, we believe modern aesthetic medicine is not about changing who you are… but about helping you feel more confident, refreshed, and in harmony with yourself."}
            </h2>
            <p className="text-stone-600 text-lg mb-12">
              {lang === 'es'
                ? "Nuestros protocolos médico-estéticos están diseñados para apoyar el bienestar facial y corporal mediante tratamientos personalizados, enfocados en naturalidad, seguridad y resultados progresivos."
                : "Our medical aesthetic protocols are designed to support facial and body wellness through personalized treatments focused on natural-looking results, safety, and gradual improvement."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
              {(lang === 'es' ? [
                "Atención personalizada",
                "Protocolos adaptados individualmente",
                "Enfoque wellness y estético",
                "Ambiente premium y seguro",
                "Resultados naturales y progresivos",
              ] : [
                "✨ Personalized attention",
                "✨ Individually tailored protocols",
                "✨ Aesthetic and wellness approach",
                "✨ Premium and safe environment",
                "✨ Natural, progressive results",
              ]).map((item, i) => (
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
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">
                {lang === 'es' ? "Descubre una nueva forma de cuidar tu imagen" : "Discover a New Way to Care for Your Appearance and Well-Being"}
              </p>
              <h2 className="text-4xl font-serif mb-6 text-white">
                {lang === 'es' ? "Muchas personas desean verse mejor… pero también tienen miedo de:" : "Many people want to look better… but they are also afraid of:"}
              </h2>
              <ul className="space-y-4">
              {(lang === 'es' ? [
                  "Verse artificiales",
                  "Perder naturalidad",
                  "Tratamientos exagerados",
                  "Malas experiencias",
                  "Procedimientos poco personalizados",
              ] : [
                "❌ Looking artificial",
                "❌ Losing their natural appearance",
                "❌ Overdone treatments",
                "❌ Bad experiences",
                "❌ Treatments that are not personalized",
              ]).map((fear, i) => (
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
              <h3 className="text-2xl font-serif text-primary mb-4">
                {lang === 'es' ? "La realidad es que la medicina estética moderna ha evolucionado." : "The reality is that modern aesthetic medicine has evolved."}
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                {lang === 'es'
                  ? "Hoy, el objetivo no es transformar tu rostro. El objetivo es armonizar, rejuvenecer y resaltar tu belleza natural de manera progresiva y elegante."
                  : "Today, the goal is not to transform your face. The goal is to harmonize, rejuvenate, and enhance your natural beauty in a gradual and elegant way."}
              </p>
              <p className="text-white/80 leading-relaxed">
                {lang === 'es'
                  ? "En MJ Estética & Wellness Center trabajamos bajo un enfoque de bienestar estético integral para ayudarte a sentirte mejor contigo mismo(a), respetando siempre tu naturalidad y esencia."
                  : "At MJ Estética & Wellness Center, we take a comprehensive aesthetic wellness approach to help you feel better about yourself while always respecting your natural appearance and individuality."}
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
            <h2 className="text-4xl font-serif text-stone-800 mb-6">
              {lang === 'es' ? "¿Qué son los tratamientos médico-estéticos?" : "What Are Medical Aesthetic Treatments?"}
            </h2>
            <p className="text-stone-600 text-lg mb-8 leading-relaxed">
              {lang === 'es'
                ? "Los tratamientos médico-estéticos son protocolos personalizados orientados al bienestar facial y corporal que buscan mejorar la apariencia, luminosidad y armonización estética mediante procedimientos avanzados y atención profesional."
                : "Medical aesthetic treatments are personalized protocols focused on facial and body aesthetics and wellness. They are designed to improve the appearance, radiance, and overall harmony of your features through advanced procedures and professional care."}
            </p>
            <p className="text-stone-500 mb-12">
              {lang === 'es'
                ? "Cada persona tiene necesidades diferentes. Por eso, realizamos valoraciones personalizadas para diseñar protocolos adaptados a cada caso."
                : "Every person has different needs. That is why we provide personalized consultations to create protocols tailored to each individual."}
            </p>
            <div className="inline-block bg-primary/10 border border-primary/20 px-8 py-4 rounded-full">
              <p className="text-primary font-bold">
                {lang === 'es' ? "El objetivo NO es exagerar resultados." : "The goal is NOT to create exaggerated results."}
              </p>
            </div>
            <p className="mt-4 text-stone-700 font-serif text-xl italic">
              {lang === 'es' ? "El objetivo es ayudarte a verte descansado(a), saludable y naturalmente armonizado(a)." : "The goal is to help you look refreshed, healthy, and naturally balanced."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───── 5. IMPROVEMENTS ───── */}
      <section className="py-24 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800">
              {lang === 'es' ? "¿Qué pueden ayudar a mejorar los tratamientos médico-estéticos?" : "What Can Medical Aesthetic Treatments Help Improve?"}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {(lang === 'es' ? [
              "Apariencia facial y corporal",
              "Glow y luminosidad de la piel",
              "Bienestar estético integral",
              "Rejuvenecimiento progresivo",
              "Apariencia de cansancio facial",
              "Armonización facial natural",
              "Confianza estética",
              "Complemento de autocuidado wellness",
            ] : [
              "✅ Facial and body appearance",
              "✅ Skin glow and radiance",
              "✅ Overall aesthetic wellness",
              "✅ Gradual facial rejuvenation",
              "✅ The appearance of facial tiredness",
              "✅ Natural facial harmony",
              "✅ Aesthetic confidence",
              "✅ Complementary wellness self-care",
            ]).map((item, i) => (
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
            {lang === 'es'
              ? "Nuestros protocolos pueden combinarse con tratamientos faciales avanzados, skincare profesional y wellness estético para potenciar resultados progresivos y personalizados."
              : "Our protocols can be combined with advanced facial treatments, professional skincare, and aesthetic wellness services to support gradual and personalized results."}
          </p>
        </div>
      </section>

      {/* ───── 6. FOCUS ───── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-stone-800 mb-4">
            {lang === 'es' ? "Resultados naturales, no artificiales" : "Natural Results, Not an Artificial Look"}
          </h2>
          <p className="text-stone-500 mb-12">
            {lang === 'es'
              ? "En MJ Estética & Wellness Center creemos en la estética inteligente y equilibrada."
              : "At MJ Estética & Wellness Center, we believe in intelligent, balanced aesthetics. That is why our approach focuses on:"}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {(lang === 'es' ? ["Naturalidad", "Bienestar", "Armonización", "Prevención", "Personalización", "Seguridad estética"] : ["✔ Natural-looking results", "✔ Wellness", "✔ Harmony", "✔ Prevention", "✔ Personalization", "✔ Aesthetic safety"]).map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2 text-stone-700 font-semibold border border-stone-200 py-4 rounded-2xl hover:bg-stone-50 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                {item}
              </div>
            ))}
          </div>
          <p className="mt-12 text-2xl font-serif text-stone-800">
            {lang === 'es' ? "Nuestro objetivo es ayudarte a verte mejor" : "Our goal is to help you look better"}
            <span className="text-primary italic text-3xl block mt-2">
              {lang === 'es' ? "SIN perder tu esencia." : "WITHOUT losing what makes you, you."}
            </span>
          </p>
        </div>
      </section>

      {/* ───── 7. METHODOLOGY ───── */}
      <section className="py-24 px-4 sm:px-6 bg-[#071e2e] text-white overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">
              {lang === 'es' ? "El Proceso" : "The Process"}
            </p>
            <h2 className="text-4xl font-serif text-white">
              {lang === 'es' ? "¿Cómo funciona una valoración médico-estética?" : "How Does a Medical Aesthetic Consultation Work?"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-white/10" />
            {(lang === 'es' ? [
              { step: "Paso 1", title: "Evaluación personalizada", desc: "Analizamos tu piel, objetivos estéticos, estilo de vida y expectativas para entender qué protocolo puede ayudarte mejor." },
              { step: "Paso 2", title: "Diseño del protocolo", desc: "Creamos un plan personalizado orientado a resultados naturales y progresivos." },
              { step: "Paso 3", title: "Aplicación del tratamiento", desc: "Los procedimientos se realizan bajo atención profesional, en un ambiente seguro, cómodo y wellness premium." },
              { step: "Paso 4", title: "Seguimiento y recomendaciones", desc: "Te guiamos con cuidados posteriores y recomendaciones para apoyar tus resultados y bienestar estético." },
            ] : [
              { step: "Step 1", title: "Personalized Evaluation", desc: "We assess your skin, aesthetic goals, lifestyle, and expectations to understand which protocol may be most appropriate for you." },
              { step: "Step 2", title: "Personalized Treatment Plan", desc: "We create a customized plan focused on natural-looking and progressive results." },
              { step: "Step 3", title: "Treatment Application", desc: "Procedures are performed with professional care in a safe, comfortable, and premium wellness environment." },
              { step: "Step 4", title: "Follow-Up & Recommendations", desc: "We guide you with aftercare instructions and recommendations to support your results and overall aesthetic wellness." },
            ]).map((step, i) => (
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
              <h2 className="text-4xl font-serif text-stone-800 mb-6">
                {lang === 'es' ? "¿Para quién se recomiendan estos tratamientos?" : "Who Are These Treatments For?"}
              </h2>
              <p className="text-stone-500 mb-8 leading-relaxed">
                {lang === 'es'
                  ? "Estos protocolos pueden ser ideales para personas que buscan mejorar su apariencia de forma elegante y sutil, priorizando la salud de su piel y su bienestar integral."
                  : "These protocols may be ideal for people looking for:"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(lang === 'es' ? [
                  "Rejuvenecimiento facial natural",
                  "Glow y luminosidad saludable",
                  "Armonización facial",
                  "Protocolos preventivos antiaging",
                  "Bienestar estético integral",
                  "Mantenimiento facial premium",
                  "Complementar su rutina de skincare avanzado",
                ] : [
                  "✨ Natural facial rejuvenation",
                  "✨ Healthy glow and skin radiance",
                  "✨ Facial harmonization",
                  "✨ Preventive anti-aging protocols",
                  "✨ Comprehensive aesthetic wellness",
                  "✨ Premium facial maintenance",
                  "✨ A complement to an advanced skincare routine",
                ]).map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-stone-700 text-sm font-medium">
                    <Sparkles className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-stone-50 rounded-3xl p-8 border border-stone-200">
              <h3 className="text-2xl font-serif text-stone-800 mb-4">
                {lang === 'es' ? "Lo que hace diferente a MJ Estética & Wellness Center" : "What Makes MJ Estética & Wellness Center Different?"}
              </h3>
              <p className="text-stone-600 mb-6 font-medium">
                {lang === 'es' ? "No buscamos que te veas “operado(a)” o exagerado(a)." : "We don't want you to look “overdone” or unnatural."}
              </p>
              <p className="text-stone-500 text-sm mb-6">
                {lang === 'es' ? "Nuestro enfoque está basado en:" : "Our approach is based on:"}
              </p>
              <ul className="space-y-3">
                {(lang === 'es' ? [
                  "Atención personalizada",
                  "Protocolos adaptados individualmente",
                  "Experiencia wellness premium",
                  "Ambiente seguro y profesional",
                  "Resultados progresivos y naturales",
                  "Bienestar facial y corporal integral",
                ] : [
                  "✔ Personalized attention",
                  "✔ Individually tailored protocols",
                  "✔ Premium wellness experience",
                  "✔ Safe and professional environment",
                  "✔ Progressive, natural-looking results",
                  "✔ Comprehensive facial and body wellness",
                ]).map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-stone-700 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-stone-500 text-xs italic">
                {lang === 'es' ? "Cada protocolo se adapta a tu rostro, objetivos y necesidades reales." : "Every protocol is adapted to your face, your goals, and your individual needs."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── 10. TESTIMONIALS ───── */}
      <section className="py-24 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">
              {lang === 'es' ? "Experiencias" : "Experiences"}
            </p>
            <h2 className="text-4xl font-serif text-stone-800">
              {lang === 'es' ? "Testimonios de pacientes" : "Patient Testimonials"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(lang === 'es' ? [
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
            ] : [
              {
                text: "“I loved it because the results looked so natural. I felt fresher and more rested, but I still looked like myself.”",
                author: "MJ Patient"
              },
              {
                text: "“From the consultation, I felt completely confident. Everything was personalized and very professional.”",
                author: "MJ Patient"
              },
              {
                text: "“I was looking for a healthy glow and facial wellness without going overboard… and that is exactly what I found at MJ.”",
                author: "MJ Patient"
              }
            ]).map((t, i) => (
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
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">
              {lang === 'es' ? "Preguntas frecuentes" : "Frequently Asked Questions"}
            </p>
            <h2 className="text-3xl font-serif text-stone-800">
              {lang === 'es' ? "Resolvemos tus dudas" : "Frequently Asked Questions"}
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs_localized.map((faq, i) => (
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
              <h2 className="text-3xl font-serif mb-8 text-white">
                {lang === 'es' ? "Programas y protocolos disponibles" : "Available Programs & Protocols"}
              </h2>
              <ul className="grid grid-cols-1 gap-4">
                {(lang === 'es' ? [
                  "Programas wellness premium",
                  "Protocolos faciales personalizados",
                  "Rejuvenecimiento facial natural",
                  "Skincare avanzado profesional",
                  "Armonización estética personalizada",
                  "Paquetes faciales y corporales",
                ] : [
                  "✨ Premium wellness programs",
                  "✨ Personalized facial protocols",
                  "✨ Natural facial rejuvenation",
                  "✨ Advanced professional skincare",
                  "✨ Personalized aesthetic harmonization",
                  "✨ Facial and body treatment packages",
                ]).map((prog, i) => (
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
                {lang === 'es' ? "Regalo para ti" : "FREE GUIDE"}
              </div>
              <h3 className="text-2xl font-serif mb-2">🎁 {lang === 'es' ? "GUÍA GRATUITA" : "FREE GUIDE"}</h3>
              <p className="text-stone-600 font-semibold mb-6">
                {lang === 'es' ? "Cómo mejorar los resultados de tus limpiezas faciales" : "How to Get Better Results from Your Facial Treatments"}
              </p>
              <p className="text-stone-500 text-sm mb-8">
                {lang === 'es' ? "Comenta la palabra" : "Comment the word:"}{" "}
                <span className="text-primary font-bold text-lg px-2">
                  {lang === 'es' ? "MÉDICOS" : "MEDICAL"}
                </span>{" "}
                {lang === 'es' ? "en nuestro WhatsApp y recibe GRATIS nuestra guía práctica." : "and receive our FREE practical guide with professional recommendations to enhance your skincare routine and support better results from your facial treatments."}
              </p>
              <a
                href={WA_CTA}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWA("lead-magnet-medicos")}
                className="bg-primary text-white font-bold rounded-full py-4 px-8 hover:bg-stone-900 transition-all flex items-center justify-center gap-2 group shadow-xl"
              >
                {lang === 'es' ? "Quiero mi guía GRATIS" : "I want my FREE guide"}
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
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6 leading-tight">
              {lang === 'es' ? "Agenda tu valoración estética hoy" : "Book Your Aesthetic Consultation Today"}
            </h2>
            <p className="text-stone-600 text-lg mb-10">
              {lang === 'es'
                ? "Tu bienestar también merece atención profesional, personalizada y natural."
                : "Your well-being deserves professional, personalized, and natural-looking care."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto mb-12">
              {(lang === 'es' ? [
                "Descubre el protocolo ideal para ti",
                "Consulta disponibilidad",
                "Agenda tu valoración estética",
                "Escríbenos por WhatsApp hoy",
              ] : [
                "✨ Discover the ideal protocol for you",
                "✨ Check availability",
                "✨ Book your aesthetic consultation",
                "✨ Message us on WhatsApp today",
              ]).map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-stone-700 text-sm font-semibold">
                  <Zap className="w-4 h-4 text-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <CTAButton label={lang === 'es' ? "Agendar valoración por WhatsApp" : "Book Your Aesthetic Consultation"} id="final-cta-medicos" className="text-lg px-12 py-5 shadow-2xl" />

            <div className="mt-16 pt-8 border-t border-stone-200">
              <p className="text-stone-900 font-serif font-bold text-lg mb-1">📍 MJ Estética & Wellness Center — Turrialba</p>
              <p className="text-stone-500 text-sm">
                {lang === 'es'
                  ? "Atención wellness y médico-estética premium orientada a resultados naturales y progresivos."
                  : "Premium aesthetic and wellness care focused on natural-looking, progressive results."}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer lang={lang} />
      <FloatingWhatsApp />
    </div>
  );
}

export default withAppProviders(LandingMedicos);
