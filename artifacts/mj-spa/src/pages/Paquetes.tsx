import { motion } from "framer-motion";
import { MessageCircle, CheckCircle2, Star, Sparkles, Zap, Heart } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SEO } from "@/components/SEO";
import { Breadcrumb } from "@/components/Breadcrumb";

const WA = "https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 } }),
};

const packages = [
  {
    icon: Sparkles,
    tag: "Más popular",
    name: "Paquete Anti-Edad",
    tagline: "Rejuvenecimiento facial completo",
    description: "Combinación de nuestros tratamientos faciales más potentes para combatir el envejecimiento y recuperar una piel firme, luminosa y rejuvenecida.",
    includes: [
      "Radiofrecuencia Facial (2 sesiones)",
      "ADN de Salmón Facial (2 sesiones)",
      "Valoración y seguimiento personalizado",
      "Protocolo de cuidado en casa",
    ],
    highlight: true,
  },
  {
    icon: Zap,
    tag: "Corporal",
    name: "Paquete Reafirmante",
    tagline: "Moldea y tonifica tu figura",
    description: "Protocolo completo de remodelación corporal que combina reducción de medidas y tensado para resultados visibles desde las primeras sesiones.",
    includes: [
      "Reducción de Medidas (3 sesiones)",
      "Tensado Corporal (2 sesiones)",
      "Drenaje Linfático (1 sesión)",
      "Seguimiento de medidas incluido",
    ],
    highlight: false,
  },
  {
    icon: Heart,
    tag: "Post Operatorio",
    name: "Paquete Recuperación",
    tagline: "Recuperación segura y efectiva",
    description: "Diseñado para acompañarte en tu proceso de recuperación post quirúrgica, reduciendo inflamación, previniendo fibrosis y acelerando la sanación.",
    includes: [
      "Drenaje Post Operatorio (4 sesiones)",
      "Masaje Anti-Fibrosis (2 sesiones)",
      "Protocolo personalizado según procedimiento",
      "Atención y seguimiento continuo",
    ],
    highlight: false,
  },
  {
    icon: Star,
    tag: "Piernas",
    name: "Paquete Piernas Perfectas",
    tagline: "Piernas sanas, ligeras y estéticas",
    description: "Tratamiento integral para mejorar la circulación, eliminar arañas vasculares y aliviar la pesadez de piernas con resultados visibles y duraderos.",
    includes: [
      "Tratamiento Varices y Arañas Vasculares (2 sesiones)",
      "Drenaje Linfático en Piernas (2 sesiones)",
      "Valoración circulatoria inicial",
      "Recomendaciones de mantenimiento",
    ],
    highlight: false,
  },
];

export default function Paquetes() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Paquetes de Tratamientos"
        description="Paquetes especiales de tratamientos estéticos en MJ Fisio Estética y Spa, Turrialba. Anti-edad, reafirmante corporal, post operatorio y más. Reserva tu valoración gratuita."
        canonical="/paquetes"
      />
      <Navbar />
      <FloatingWhatsApp />

      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-[#071e2e] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/hero-bg.png)` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <Breadcrumb items={[{ label: "Paquetes" }]} variant="dark" />
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mt-8 mb-4">
            OFERTAS ESPECIALES
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
            Paquetes de<br />
            <span className="italic font-light text-white/40">Tratamientos</span>
          </h1>
          <p className="text-[#7FBCD2]/70 text-lg leading-relaxed max-w-xl">
            Protocolos completos diseñados para maximizar tus resultados. Combina los mejores tratamientos y transforma tu bienestar.
          </p>
          <div className="mt-10">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 font-semibold text-sm tracking-wide hover:bg-primary/90 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Consultar paquetes por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Intro band */}
      <section className="py-4 bg-primary">
        <p className="text-center text-white text-sm font-medium">
          Todos los paquetes incluyen <strong>valoración gratuita</strong> y protocolo personalizado según tu caso
        </p>
      </section>

      {/* Packages grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg, i) => {
              const Icon = pkg.icon;
              return (
                <motion.div
                  key={pkg.name}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`relative flex flex-col border rounded-2xl overflow-hidden ${
                    pkg.highlight
                      ? "border-primary shadow-xl shadow-primary/10"
                      : "border-stone-200 shadow-sm"
                  }`}
                >
                  {pkg.highlight && (
                    <div className="bg-primary text-white text-xs font-bold uppercase tracking-widest text-center py-2">
                      ★ Más Solicitado
                    </div>
                  )}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-start gap-4 mb-5">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${pkg.highlight ? "bg-primary/10" : "bg-stone-100"}`}>
                        <Icon className={`w-6 h-6 ${pkg.highlight ? "text-primary" : "text-stone-600"}`} />
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">{pkg.tag}</span>
                        <h2 className="text-xl font-serif font-bold text-foreground leading-tight">{pkg.name}</h2>
                        <p className="text-sm text-[#7FBCD2]/60 mt-0.5">{pkg.tagline}</p>
                      </div>
                    </div>

                    <p className="text-stone-600 text-sm leading-relaxed mb-6">{pkg.description}</p>

                    <div className="mb-8 flex-1">
                      <p className="text-xs font-bold uppercase tracking-widest text-[#7FBCD2]/70 mb-3">Incluye</p>
                      <ul className="space-y-2">
                        {pkg.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-stone-700">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={WA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold tracking-wide transition-colors ${
                        pkg.highlight
                          ? "bg-primary text-white hover:bg-primary/90"
                          : "bg-[#071e2e] text-white hover:bg-primary"
                      }`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Consultar este paquete
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA urgency */}
      <section className="py-16 bg-[#040f19]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">VALORACIÓN GRATUITA</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            ¿No sabes cuál paquete es para ti?
          </h2>
          <p className="text-[#7FBCD2]/70 mb-8 leading-relaxed">
            Agenda tu valoración gratuita y nuestras especialistas diseñarán el protocolo ideal según tus objetivos, tu historial y tu estilo de vida.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-10 py-4 font-semibold text-sm tracking-wide hover:bg-primary/90 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Reservar valoración gratuita
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
