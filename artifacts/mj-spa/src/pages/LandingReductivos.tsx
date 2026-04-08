import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { BeforeAfterCard } from "@/components/testimonials/BeforeAfterCard";
import { ChatProof } from "@/components/testimonials/ChatProof";
import { testimonials, beforeAfterItems, chatProofs, WA_BASE } from "@/data/testimonials";
import {
  CheckCircle2,
  ArrowRight,
  Star,
  ShieldCheck,
  Clock,
  Zap,
  ChevronDown,
  Phone,
  Users,
  Award,
} from "lucide-react";
import { useState } from "react";

const WA_CTA = WA_BASE;

function trackWA(label: string) {
  if (typeof window !== "undefined" && (window as any).dataLayer) {
    (window as any).dataLayer.push({ event: "click_whatsapp", cta_label: label });
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
    q: "¿Cuántas sesiones necesito para ver resultados?",
    a: "La mayoría de nuestras clientas ven cambios visibles desde la 2ª o 3ª sesión. Un ciclo completo de 8–12 sesiones garantiza resultados duraderos. Cada cuerpo es diferente, por eso empezamos con una valoración GRATIS.",
  },
  {
    q: "¿Duele el tratamiento?",
    a: "No. Los tratamientos reductivos son completamente indoloros. Son relajantes y muchas clientas se quedan dormidas durante las sesiones. No hay tiempo de recuperación — puedes continuar tu día normal.",
  },
  {
    q: "¿Cuánto tiempo dura cada sesión?",
    a: "Entre 45 y 75 minutos dependiendo del área a tratar. Puedes venir en tu hora de almuerzo o antes/después del trabajo.",
  },
  {
    q: "¿Los resultados son permanentes?",
    a: "Con hábitos saludables y mantenimiento mensual, los resultados se mantienen a largo plazo. Te enseñamos cómo cuidar los resultados para que duren.",
  },
  {
    q: "¿Funciona después de embarazos o cirugías?",
    a: "Sí. Muchas de nuestras clientas vienen precisamente por esto. Tenemos protocolos especiales para tejidos postparto y post-quirúrgicos. Consultamos tu historial en la valoración.",
  },
  {
    q: "¿Cuánto cuesta el tratamiento?",
    a: "Tenemos paquetes desde ₡45,000 por sesión individual hasta paquetes de 10 sesiones con hasta 35% de descuento. Escríbenos para cotizarte según tu objetivo específico.",
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

export default function LandingReductivos() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Reductivos en Turrialba — Reduce medidas sin cirugía | MJ Estética"
        description="Tratamientos reductivos en Turrialba, Costa Rica. Pierde hasta 2 tallas en 4 semanas con maderoterapia, drenaje linfático y reductivos. Valoración GRATIS. MJ Estética."
        canonical="/reductivos-turrialba"
      />
      <Navbar />

      {/* ───── 1. HERO ───── */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#071e2e] overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,#1378A2,transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Star className="w-3.5 h-3.5 fill-primary" />
            +100 clientas atendidas en Turrialba · 4.9★
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-serif text-white leading-tight mb-6"
          >
            Reduce medidas
            <span className="block text-primary">sin cirugía</span>
            en Turrialba
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-4"
          >
            Pierde hasta <strong className="text-white">2 tallas en 4 semanas</strong> con nuestros
            tratamientos reductivos, maderoterapia y drenaje linfático.
            <span className="block mt-1">Resultados reales. Sin filtros. Sin cirugía.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-primary font-semibold text-sm mb-10"
          >
            🎁 Tu primera valoración es completamente GRATIS
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <CTAButton label="Quiero mi valoración GRATIS" id="hero-cta-reductivos" className="text-lg px-10 py-5" />
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mt-12 text-white/50 text-xs"
          >
            {["Sin lista de espera", "Sin tiempo de recuperación", "100% no invasivo"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary/60" /> {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───── Trust bar ───── */}
      <section className="bg-primary py-6">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "+100", label: "Clientas en Turrialba" },
              { value: "4.9★", label: "Valoración promedio" },
              { value: "2 tallas", label: "Promedio de reducción" },
              { value: "4 sem.", label: "Para ver resultados" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl font-serif font-bold text-white">{stat.value}</p>
                <p className="text-white/70 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 2. PROBLEM ───── */}
      <section className="py-24 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">¿Te identificas?</p>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              ¿Cansada de luchar con tu cuerpo?
            </h2>
            <p className="text-stone-500 text-lg">
              Si alguna de estas situaciones te suena familiar, llegaste al lugar indicado.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Haces ejercicio pero la grasa localizada no desaparece",
              "Después del embarazo tu cuerpo no volvió a ser el mismo",
              "Te sientes incómoda en traje de baño o ropa ajustada",
              "La celulitis y la flacidez te quitan confianza",
              "Probaste dietas y nada funciona a largo plazo",
              "Quieres resultados reales sin someterte a cirugías",
            ].map((pain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 bg-white border border-stone-200 rounded-xl p-4"
              >
                <div className="w-6 h-6 rounded-full bg-red-50 border border-red-200 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-red-400 text-xs">✕</span>
                </div>
                <p className="text-stone-700 text-sm leading-snug">{pain}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center"
          >
            <p className="text-primary font-semibold text-lg font-serif">
              Tienes solución. Y no necesita cirugía.
            </p>
            <p className="text-stone-600 text-sm mt-2">
              En MJ Estética tenemos protocolos personalizados que atacan exactamente tu problema.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───── 3. SOLUTION ───── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Nuestra solución</p>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              Tratamientos reductivos profesionales
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              Combinamos técnicas avanzadas para atacar la grasa localizada, la celulitis y la flacidez de forma simultánea.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🪵",
                title: "Maderoterapia",
                desc: "Técnica colombiana con rodillos de madera que rompe la grasa y activa la circulación. Visible desde la 1ª sesión.",
                badge: "Muy popular",
              },
              {
                icon: "🌊",
                title: "Drenaje Linfático",
                desc: "Elimina toxinas y líquidos retenidos. Reduce inflamación y define la silueta. Ideal combinado con reductivos.",
                badge: "Complemento esencial",
              },
              {
                icon: "⚡",
                title: "Reductivo Intensivo",
                desc: "Protocolo personalizado que combina varias técnicas para máximos resultados. El preferido de nuestras clientas.",
                badge: "Mayor resultado",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative bg-white rounded-2xl p-7 border border-stone-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <span className="absolute top-4 right-4 text-[10px] font-bold text-primary bg-primary/10 rounded-full px-2.5 py-1 uppercase tracking-wider">
                  {item.badge}
                </span>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-serif font-bold text-stone-800 mb-3">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <CTAButton label="Saber qué tratamiento me conviene" id="solution-cta-reductivos" />
          </motion.div>
        </div>
      </section>

      {/* ───── 4. RESULTS (Before/After) ───── */}
      <section className="py-24 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Resultados reales</p>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              Antes y después de nuestras clientas
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto text-sm italic">
              * Por privacidad de nuestras clientas, mostramos solo las áreas tratadas, no los rostros.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {beforeAfterItems.map((item, i) => (
              <BeforeAfterCard key={item.id} item={item} index={i} />
            ))}
          </div>

          {/* Trust signals */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {[
              { icon: <Users className="w-4 h-4" />, text: "+100 clientas atendidas en Turrialba" },
              { icon: <Award className="w-4 h-4" />, text: "Resultados reales sin filtros" },
              { icon: <ShieldCheck className="w-4 h-4" />, text: "Testimonios verificados de clientas reales" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white border border-stone-200 rounded-full px-4 py-2 text-sm text-stone-700"
              >
                <span className="text-primary">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 5. TESTIMONIALS ───── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">
              Testimonios verificados
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              Lo que dicen nuestras clientas
            </h2>
            <p className="text-stone-500">Experiencias reales de mujeres de Turrialba.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {testimonials.slice(0, 3).map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>

          {/* Chat proof */}
          <div className="max-w-sm mx-auto">
            <p className="text-center text-sm text-stone-500 mb-4 font-medium">
              Mensajes reales de clientas
            </p>
            <ChatProof messages={chatProofs.slice(0, 4)} />
          </div>
        </div>
      </section>

      {/* ───── 6. OFFER / PRICING ───── */}
      <section className="py-24 px-4 sm:px-6 bg-[#071e2e]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Nuestros paquetes</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
              Elige tu plan de resultados
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Todos los paquetes incluyen protocolo personalizado y seguimiento de resultados.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Inicio",
                sessions: "4 sesiones",
                desc: "Para conocer los resultados y empezar tu transformación.",
                perks: ["Protocolo inicial", "Valoración incluida", "Seguimiento semanal"],
                cta: "Consultar precio",
                highlight: false,
              },
              {
                name: "Transformación",
                sessions: "8 sesiones",
                desc: "El más popular. Resultados visibles y duraderos.",
                perks: [
                  "Protocolo combinado",
                  "Drenaje incluido",
                  "Seguimiento personalizado",
                  "20% de descuento",
                ],
                cta: "¡Lo quiero!",
                highlight: true,
              },
              {
                name: "Total",
                sessions: "12 sesiones",
                desc: "Transformación completa con máximos resultados.",
                perks: [
                  "Protocolo premium",
                  "Maderoterapia incluida",
                  "Prioridad en citas",
                  "35% de descuento",
                ],
                cta: "Consultar precio",
                highlight: false,
              },
            ].map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-7 flex flex-col gap-5 ${
                  pkg.highlight
                    ? "bg-primary border-2 border-primary shadow-xl shadow-primary/30 scale-105"
                    : "bg-white/5 border border-white/10"
                }`}
              >
                {pkg.highlight && (
                  <div className="text-center">
                    <span className="text-xs font-bold uppercase tracking-widest bg-white text-primary rounded-full px-3 py-1">
                      Más popular
                    </span>
                  </div>
                )}
                <div>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${pkg.highlight ? "text-white/80" : "text-white/50"}`}>
                    {pkg.name}
                  </p>
                  <p className={`text-3xl font-serif font-bold ${pkg.highlight ? "text-white" : "text-white"}`}>
                    {pkg.sessions}
                  </p>
                  <p className={`text-sm mt-2 ${pkg.highlight ? "text-white/80" : "text-white/50"}`}>{pkg.desc}</p>
                </div>
                <ul className="flex flex-col gap-2 flex-1">
                  {pkg.perks.map((p, j) => (
                    <li key={j} className={`flex items-center gap-2 text-sm ${pkg.highlight ? "text-white" : "text-white/70"}`}>
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${pkg.highlight ? "text-white" : "text-primary/60"}`} />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href={WA_CTA}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWA(`pkg-${pkg.name}`)}
                  className={`w-full text-center font-bold py-3 rounded-full transition-all text-sm ${
                    pkg.highlight
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  {pkg.cta} →
                </a>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-white/40 text-xs mt-8">
            * Los precios se consultan por WhatsApp. Manejamos planes de financiamiento.
          </p>
        </div>
      </section>

      {/* ───── 7. FAQ ───── */}
      <section className="py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Preguntas frecuentes</p>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-3">
              Resolvemos tus dudas
            </h2>
            <p className="text-stone-500 text-sm">
              ¿Tienes una pregunta diferente? Escríbenos por WhatsApp.
            </p>
          </motion.div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQ
                key={i}
                q={faq.q}
                a={faq.a}
                open={openFaq === i}
                toggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ───── 8. FINAL CTA ───── */}
      <section className="py-24 px-4 sm:px-6 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_bottom_right,white,transparent)]" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 text-white rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider mb-8">
              <Clock className="w-3.5 h-3.5" /> Plazas limitadas esta semana
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">
              Tu cuerpo merece
              <span className="block">esta transformación</span>
            </h2>
            <p className="text-white/80 text-lg mb-4 max-w-xl mx-auto">
              Comienza con una valoración completamente GRATIS. Sin compromiso, sin presiones. Solo resultados.
            </p>
            <div className="flex flex-wrap gap-3 justify-center text-white/70 text-xs mb-10">
              <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> Sin lista de espera</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> 100% seguro</span>
              <span className="flex items-center gap-1"><Star className="w-3 h-3" /> +100 clientas satisfechas</span>
            </div>
            <CTAButton label="Agendar mi valoración GRATIS ahora" id="final-cta-reductivos" className="text-lg px-10 py-5" />
            <p className="text-white/50 text-xs mt-4">Atendemos en Turrialba, Costa Rica · Lun–Sáb</p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
