import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WA_BASE } from "@/data/testimonials";
import { Tag, Clock, ArrowRight, Sparkles, Star, Gift, Zap } from "lucide-react";

const WA_CTA = WA_BASE;

function trackWA(label: string) {
  if (typeof window !== "undefined" && (window as any).dataLayer) {
    (window as any).dataLayer.push({ event: "cta_click", cta_label: label, page: "promociones" });
  }
}

const promos = [
  {
    tag: "🔥 Más popular",
    title: "Paquete Reductivo Completo",
    subtitle: "8 sesiones + 2 sesiones GRATIS",
    original: "₡320,000",
    discount: "35%",
    price: "₡208,000",
    perSession: "₡26,000 por sesión",
    includes: [
      "8 sesiones de reductivo",
      "2 sesiones de drenaje linfático GRATIS",
      "Valoración inicial incluida",
      "Seguimiento personalizado",
    ],
    color: "primary",
    urgency: "Solo 5 cupos disponibles",
    id: "promo-reductivo",
  },
  {
    tag: "✨ Nuevo",
    title: "Combo Facial Completo",
    subtitle: "Limpieza + Mesoterapia + Hidratación",
    original: "₡95,000",
    discount: "25%",
    price: "₡71,250",
    perSession: "3 tratamientos en 1 visita",
    includes: [
      "Limpieza profunda",
      "Mesoterapia facial",
      "Hidratación intensiva",
      "Mascarilla calmante incluida",
    ],
    color: "secondary",
    urgency: "Oferta válida hasta fin de mes",
    id: "promo-facial",
  },
  {
    tag: "💑 Especial pareja",
    title: "Dúo Corporal",
    subtitle: "Ven con una amiga y ahorra más",
    original: "₡160,000 c/u",
    discount: "30%",
    price: "₡112,000 c/u",
    perSession: "Ahorro de ₡48,000 cada una",
    includes: [
      "4 sesiones de maderoterapia",
      "2 sesiones de drenaje",
      "Aplicable a abdomen, piernas o espalda",
      "Horario flexible",
    ],
    color: "accent",
    urgency: "Solo 4 dúos disponibles",
    id: "promo-duo",
  },
  {
    tag: "🌟 Primera vez",
    title: "Kit Bienvenida",
    subtitle: "Para clientas nuevas solamente",
    original: "₡75,000",
    discount: "40%",
    price: "₡45,000",
    perSession: "Perfecta para comenzar",
    includes: [
      "Valoración completa",
      "2 sesiones de reductivo",
      "1 sesión de drenaje",
      "Guía de cuidados personalizados",
    ],
    color: "warm",
    urgency: "Solo para nuevas clientas",
    id: "promo-bienvenida",
  },
];

const colorMap: Record<string, { bg: string; border: string; badge: string; btn: string; tag: string }> = {
  primary: {
    bg: "bg-primary",
    border: "border-primary",
    badge: "bg-white text-primary",
    btn: "bg-white text-primary hover:bg-white/90",
    tag: "bg-white/20 text-white",
  },
  secondary: {
    bg: "bg-[#071e2e]",
    border: "border-[#7FBCD2]",
    badge: "bg-[#7FBCD2] text-[#071e2e]",
    btn: "bg-[#7FBCD2] text-[#071e2e] hover:bg-[#7FBCD2]/90",
    tag: "bg-[#7FBCD2]/20 text-[#7FBCD2]",
  },
  accent: {
    bg: "bg-stone-800",
    border: "border-stone-600",
    badge: "bg-yellow-400 text-stone-800",
    btn: "bg-yellow-400 text-stone-800 hover:bg-yellow-300",
    tag: "bg-yellow-400/20 text-yellow-400",
  },
  warm: {
    bg: "bg-[#1a0f2e]",
    border: "border-purple-500/30",
    badge: "bg-purple-500 text-white",
    btn: "bg-purple-500 text-white hover:bg-purple-400",
    tag: "bg-purple-500/20 text-purple-400",
  },
};

export default function Promociones() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Promociones y Paquetes — MJ Estética & Spa Turrialba"
        description="Ofertas especiales en tratamientos reductivos, faciales y maderoterapia en Turrialba, Costa Rica. Paquetes con hasta 40% de descuento. MJ Estética."
        canonical="/promociones"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_top,#1378A2,transparent)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <div className="flex justify-center mb-6">
            <Breadcrumb items={[{ label: "Promociones" }]} />
          </div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium tracking-widest uppercase mb-6">
              <Tag className="w-4 h-4" />
              Ofertas especiales · Turrialba
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Promociones del Mes
            </h1>
            <p className="text-lg text-white/70 max-w-xl mx-auto">
              Aprovecha nuestros paquetes especiales con hasta{" "}
              <strong className="text-white">40% de descuento</strong>. Cupos limitados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Urgency bar */}
      <div className="bg-yellow-400 py-3 px-4">
        <p className="text-center text-yellow-900 text-sm font-bold flex items-center justify-center gap-2">
          <Zap className="w-4 h-4" />
          Ofertas válidas hasta el 30 de este mes · Cupos muy limitados
          <Zap className="w-4 h-4" />
        </p>
      </div>

      {/* Promo cards */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {promos.map((promo, i) => {
              const colors = colorMap[promo.color];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-3xl overflow-hidden border-2 ${colors.border} shadow-xl flex flex-col`}
                >
                  {/* Card header */}
                  <div className={`${colors.bg} p-8 flex flex-col gap-4`}>
                    <div className="flex items-start justify-between gap-4">
                      <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${colors.tag}`}>
                        {promo.tag}
                      </span>
                      <span className={`text-2xl font-black px-3 py-1 rounded-xl ${colors.badge}`}>
                        -{promo.discount}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight">
                        {promo.title}
                      </h3>
                      <p className="text-white/70 text-sm mt-1">{promo.subtitle}</p>
                    </div>
                    <div>
                      <p className="text-white/40 text-sm line-through">{promo.original}</p>
                      <p className="text-4xl font-serif font-black text-white">{promo.price}</p>
                      <p className="text-white/60 text-xs mt-1">{promo.perSession}</p>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="bg-white p-8 flex flex-col gap-6 flex-1">
                    <ul className="flex flex-col gap-3">
                      {promo.includes.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-stone-700">
                          <Sparkles className="w-4 h-4 text-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 text-xs text-orange-600 font-semibold bg-orange-50 border border-orange-200 rounded-full px-4 py-2 self-start">
                      <Clock className="w-3.5 h-3.5" />
                      {promo.urgency}
                    </div>

                    <a
                      id={promo.id}
                      href={WA_CTA}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWA(promo.id)}
                      className="flex items-center justify-center gap-2 bg-primary text-white font-bold py-4 rounded-full hover:bg-primary/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/20 text-sm"
                    >
                      Quiero esta promoción
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="py-20 bg-stone-50 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Gift className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">
              ¿Por qué actuar ahora?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[
                { icon: "⏰", title: "Cupos limitados", desc: "Solo atendemos a un número determinado de clientas para garantizar calidad." },
                { icon: "💰", title: "Precios garantizados", desc: "Una vez que reservas tu paquete, el precio queda fijo sin importar ajustes futuros." },
                { icon: "📅", title: "Disponibilidad inmediata", desc: "Sin listas de espera largas. Agenda tu primera sesión esta semana." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-stone-800 mb-2">{item.title}</h3>
                  <p className="text-stone-500 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rating proof */}
      <section className="py-16 bg-primary px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-white text-2xl font-serif font-bold mb-2">4.9 / 5 estrellas</p>
          <p className="text-white/70 mb-8">Basado en más de 100 reseñas de clientas en Turrialba</p>
          <a
            id="promo-final-cta"
            href={WA_CTA}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWA("promo-final-cta")}
            className="inline-flex items-center gap-2 bg-white text-primary font-bold rounded-full px-8 py-4 hover:bg-white/90 transition-all shadow-lg hover:-translate-y-0.5"
          >
            Ver disponibilidad ahora
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
