import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { ChatProof } from "@/components/testimonials/ChatProof";
import { WA_BASE, chatProofs } from "@/data/testimonials";
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
} from "lucide-react";
import { useState } from "react";

const WA_CTA = WA_BASE;

function trackWA(label: string) {
  if (typeof window !== "undefined" && (window as any).dataLayer) {
    (window as any).dataLayer.push({ event: "click_whatsapp", cta_label: label, page: "faciales" });
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

const facialTestimonials = [
  {
    id: 101,
    age: 33,
    location: "Turrialba",
    area: "Rostro",
    duration: "3 sesiones",
    treatment: "Limpieza profunda + Hidratación",
    result: "Piel visiblemente más luminosa",
    text: "Mi piel cambió completamente. La carboxiterapia facial me ayudó con las manchas y los poros. Me siento con 10 años menos.",
    verified: true,
  },
  {
    id: 102,
    age: 41,
    location: "Turrialba",
    area: "Rostro y cuello",
    duration: "6 semanas",
    treatment: "Mesoterapia facial",
    result: "Manchas reducidas al 80%",
    text: "Tenía manchas del embarazo que me atormentaban. La mesoterapia las redujo muchísimo. El equipo es súper cuidadoso y profesional.",
    verified: true,
  },
  {
    id: 103,
    age: 27,
    location: "Turrialba",
    area: "Frente y mejillas",
    duration: "4 sesiones",
    treatment: "Limpieza profunda",
    result: "Acné controlado",
    text: "Vine con acné severo y no creía que pudiera mejorar sin medicamentos fuertes. Las limpiezas profundas de MJ cambiaron todo.",
    verified: true,
  },
];

const faqs = [
  {
    q: "¿Con cuántas sesiones veo resultados en mi piel?",
    a: "Desde la primera limpieza facial notarás la diferencia. Para problemas como manchas, acné o flacidez facial, recomendamos un ciclo de 4–8 sesiones para resultados duraderos.",
  },
  {
    q: "¿Es dolorosa la limpieza profunda?",
    a: "Puede haber ligera molestia al extraer impurezas, pero nada insoportable. La mayoría de clientas lo describen como un proceso relajante. Usamos técnicas suaves y productos de alta calidad.",
  },
  {
    q: "¿Puedo maquillarme después del tratamiento?",
    a: "Recomendamos esperar 24 horas para faciales de limpieza profunda o tratamientos con ácidos. Para hidrataciones o masajes, puedes maquillarte inmediatamente.",
  },
  {
    q: "¿Qué pasa si tengo piel sensible?",
    a: "Nos adaptamos a tu tipo de piel. En la valoración evaluamos exactamente qué productos y técnicas son ideales para vos. No aplicamos nada sin tu aprobación.",
  },
  {
    q: "¿Los tratamientos son seguros durante el embarazo?",
    a: "Algunos tratamientos sí son seguros. En tu valoración te indicamos exactamente qué podemos hacer. Siempre priorizamos tu seguridad y la de tu bebé.",
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

export default function LandingFaciales() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Tratamientos Faciales en Turrialba — Piel luminosa y sin manchas | MJ Estética"
        description="Limpieza facial profunda, mesoterapia, carboxiterapia e hidratación en Turrialba, Costa Rica. Elimina manchas, acné y flacidez. Primera valoración GRATIS. MJ Estética."
        canonical="/faciales"
      />
      <Navbar />

      {/* ───── 1. HERO ───── */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#071e2e] overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_60%_80%_at_70%_30%,#7FBCD2,transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center py-24">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#7FBCD2]/20 border border-[#7FBCD2]/30 text-[#7FBCD2] rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Expertos en piel en Turrialba · 4.9★
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-serif text-white leading-tight mb-6"
          >
            Tu piel merece
            <span className="block text-[#7FBCD2]">brillar de nuevo</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-4"
          >
            Elimina manchas, acné, flacidez y poros abiertos con nuestros{" "}
            <strong className="text-white">tratamientos faciales profesionales</strong> en Turrialba.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#7FBCD2] font-semibold text-sm mb-10"
          >
            🎁 Primera valoración facial completamente GRATIS
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <CTAButton label="Quiero mi valoración facial GRATIS" id="hero-cta-faciales" className="text-lg px-10 py-5" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mt-12 text-white/50 text-xs"
          >
            {["Sin dolor", "Productos premium", "Protocolo personalizado"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7FBCD2]/60" /> {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───── Trust bar ───── */}
      <section className="bg-[#7FBCD2] py-6">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "+100", label: "Clientas atendidas" },
              { value: "4.9★", label: "Valoración promedio" },
              { value: "3 ses.", label: "Para ver resultados" },
              { value: "100%", label: "Sin efectos secundarios" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl font-serif font-bold text-white">{stat.value}</p>
                <p className="text-white/80 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsBar />

      {/* ───── 2. PROBLEM ───── */}
      <section className="py-24 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">¿Te suena familiar?</p>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              Tu piel merece más que promesas
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Manchas del sol o del embarazo que no desaparecen",
              "Poros abiertos y puntos negros que reaparecen",
              "Acné que no mejora con productos de farmacia",
              "Piel opaca, cansada o sin luminosidad",
              "Flacidez facial que te hace ver mayor",
              "Cremas caras que no dan resultados reales",
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
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Nuestros tratamientos</p>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              Soluciones reales para tu piel
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🫧", title: "Limpieza Profunda", desc: "Elimina impurezas, puntos negros y toxinas. Base de cualquier buen tratamiento." },
              { icon: "💉", title: "Mesoterapia Facial", desc: "Vitaminas y ácido hialurónico inyectados directamente donde la piel los necesita." },
              { icon: "✨", title: "Carboxiterapia", desc: "CO₂ para eliminar manchas, mejorar circulación y rejuvenecer la piel de forma natural." },
              { icon: "💧", title: "Hidratación Profunda", desc: "Rellena y devuelve la luminosidad a la piel. Resultados visibles desde la 1ª sesión." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-serif font-bold text-stone-800 mb-2">{item.title}</h3>
                <p className="text-stone-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <CTAButton label="¿Cuál tratamiento me conviene?" id="solution-cta-faciales" />
          </motion.div>
        </div>
      </section>

      {/* ───── 5. TESTIMONIALS ───── */}
      <section className="py-24 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">
              Resultados reales
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              Clientas que transformaron su piel
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {facialTestimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>

          <div className="max-w-sm mx-auto">
            <ChatProof messages={chatProofs.slice(2, 6)} title="Lo que dicen nuestras clientas" />
          </div>
        </div>
      </section>

      {/* ───── 6. OFFER ───── */}
      <section className="py-24 px-4 sm:px-6 bg-[#071e2e]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#7FBCD2] text-sm font-bold uppercase tracking-widest mb-3">Paquetes faciales</p>
            <h2 className="text-4xl font-serif text-white mb-3">Inversión en tu piel</h2>
            <p className="text-white/60 text-sm">Todos incluyen valoración y protocolo personalizado.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Facial Esencial",
                desc: "4 sesiones · Limpieza + Hidratación",
                perks: ["Ideal para comenzar", "Protocolo básico", "Seguimiento incluido"],
                highlight: false,
              },
              {
                name: "Facial Completo",
                desc: "8 sesiones · Protocolo intensivo",
                perks: [
                  "Manchas y acné",
                  "Mesoterapia o carboxiterapia",
                  "25% descuento",
                  "Productos incluidos",
                ],
                highlight: true,
              },
            ].map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-7 flex flex-col gap-5 ${
                  pkg.highlight
                    ? "bg-primary border-2 border-primary shadow-xl shadow-primary/30"
                    : "bg-white/5 border border-white/10"
                }`}
              >
                {pkg.highlight && (
                  <span className="self-start text-xs font-bold uppercase tracking-widest bg-white text-primary rounded-full px-3 py-1">
                    Más popular
                  </span>
                )}
                <div>
                  <p className="text-2xl font-serif font-bold text-white">{pkg.name}</p>
                  <p className={`text-sm mt-1 ${pkg.highlight ? "text-white/80" : "text-white/50"}`}>{pkg.desc}</p>
                </div>
                <ul className="flex flex-col gap-2 flex-1">
                  {pkg.perks.map((p, j) => (
                    <li key={j} className={`flex items-center gap-2 text-sm ${pkg.highlight ? "text-white" : "text-white/70"}`}>
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${pkg.highlight ? "text-white" : "text-[#7FBCD2]/60"}`} />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href={WA_CTA}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWA(`facial-pkg-${pkg.name}`)}
                  className={`w-full text-center font-bold py-3 rounded-full text-sm transition-all ${
                    pkg.highlight
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  Consultar precio →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 7. FAQ ───── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Preguntas frecuentes</p>
            <h2 className="text-3xl font-serif text-stone-800">Resolvemos tus dudas</h2>
          </motion.div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQ key={i} q={faq.q} a={faq.a} open={openFaq === i} toggle={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* ───── 8. FINAL CTA ───── */}
      <section className="py-24 px-4 sm:px-6 bg-[#7FBCD2] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_left,white,transparent)]" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 bg-white/20 text-white rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider mb-8">
              <Clock className="w-3.5 h-3.5" /> Agenda disponible esta semana
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">
              Dale a tu piel el cuidado
              <span className="block">que siempre mereció</span>
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Agenda tu valoración facial GRATIS y descubre el protocolo perfecto para tu tipo de piel.
            </p>
            <CTAButton label="Agendar valoración facial GRATIS" id="final-cta-faciales" className="text-lg px-10 py-5" />
            <div className="flex flex-wrap gap-4 justify-center text-white/70 text-xs mt-6">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Sin efectos secundarios</span>
              <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> Resultados desde la 1ª sesión</span>
              <span className="flex items-center gap-1"><Star className="w-3 h-3" /> 4.9 estrellas de valoración</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
