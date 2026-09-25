import { motion } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Heart,
  ArrowRight,
  Clock,
  Calendar,
  ShieldCheck,
  Star,
  Gift,
  MapPin,
  Smartphone,
  Car,
  ChevronDown
} from "lucide-react";
import { useState } from "react";
import es from "@/i18n/locales/es/hydrolipoclasia.json";
import en from "@/i18n/locales/en/hydrolipoclasia.json";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as any } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-stone-200 bg-white transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-6 text-left hover:bg-stone-50 transition-colors"
      >
        <span className="font-serif font-bold text-stone-900 text-lg">{question}</span>
        <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="p-6 pt-0 text-stone-600 text-sm leading-relaxed border-t border-stone-100 bg-stone-50/50">
          {answer}
        </div>
      )}
    </div>
  );
}

export function HydrolipoclasiaBottomContent({ waLink, lang = "es" }: { waLink: string; lang?: "es" | "en" }) {
  const content = (lang === "es" ? es : en) as any;

  return (
    <div className="bg-white">
      {/* ── TESTIMONIALS ────────────────────────────── */}
      {content.testimonials && (
        <section className="py-24 bg-white border-t border-stone-100">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-tight">
                {content.testimonials.title}
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.testimonials.items?.map((item: any, idx: number) => (
                <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-50 p-8 border border-stone-100 flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 text-amber-400 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-stone-700 font-serif italic text-sm leading-relaxed">{item.quote}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PREGUNTAS FRECUENTES ─────────────────────── */}
      {content.faqs && (
        <section className="py-24 bg-stone-50 border-t border-stone-200">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-tight">
                {content.faqs.title}
              </h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-4">
              {content.faqs.items?.map((item: any, i: number) => (
                <FaqItem key={i} question={item.q} answer={item.a} />
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ── PAQUETES & VALORACIÓN ───────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-50 border border-stone-200 p-10 md:p-16 shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-10 text-center uppercase tracking-tight">
                {content.packages?.title || (lang === 'es' ? "Paquetes y valoración" : "Packages & Body Assessment")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {(content.packages?.items || [
                  "Sesiones individuales",
                  "Paquetes por zonas",
                  "Protocolos personalizados",
                  "Valoración corporal previa"
                ]).map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-6 border border-stone-200 hover:border-primary/20 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-stone-800 font-bold text-sm uppercase tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROMOCIÓN ESPECIAL ───────────────────────── */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="border border-white/10 p-10 md:p-16 relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-8 border border-white/10">
              <Gift className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">
              {content.promo?.title || (lang === 'es' ? "Promoción especial" : "Special Promotion")}
            </h2>
            <p className="text-primary font-bold text-lg mb-8 uppercase tracking-[0.2em]">
              {content.promo?.subtitle || (lang === 'es' ? "🎁 Solicita tu valoración y recibe una guía gratuita:" : "🎁 Book your assessment and receive a FREE guide:")}
            </p>
            <p className="text-2xl font-serif italic mb-10 text-white/90">
              {content.promo?.guideTitle || (lang === 'es' ? "“Cómo bajar de peso y mejorar tu bienestar corporal”" : "“How to Lose Weight and Improve Your Body Wellness”")}
            </p>

            <div className="max-w-lg mx-auto bg-white/5 border border-white/10 p-8 text-left mb-12">
              <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-6 text-center">
                {content.promo?.learnTitle || (lang === 'es' ? "La guía incluye:" : "Includes:")}
              </p>
              <ul className="space-y-4">
                {(content.promo?.items || [
                  "Hábitos que ayudan realmente",
                  "Errores comunes al intentar adelgazar",
                  "Tips de alimentación y bienestar",
                  "Recomendaciones para potenciar tratamientos corporales"
                ]).map((item: string, i: number) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-white/80 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-primary/90 transition-all shadow-2xl"
            >
              <MessageCircle className="w-5 h-5" />
              {content.promo?.cta || (lang === 'es' ? "SOLICITAR VALORACIÓN + GUÍA" : "BOOK ASSESSMENT + FREE GUIDE")}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── POR QUÉ ELEGIR MJ ────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6 uppercase tracking-tight">
              {content.whyUs?.title || (
                lang === 'es' ? (
                  <>¿Por qué elegir <br/><span className="text-primary italic">MJ Estética & Wellness Center?</span></>
                ) : (
                  <>Why Choose <br/><span className="text-primary italic">MJ Estética & Wellness Center?</span></>
                )
              )}
            </h2>
            <p className="text-stone-500 max-w-2xl mx-auto leading-relaxed">
              {content.whyUs?.desc || (lang === 'es' ? "Porque aquí no buscamos venderte ilusiones. Buscamos ayudarte con:" : "Because we don't believe in selling you illusions. We focus on helping you through:")}
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {(content.whyUs?.items || [
              "Atención personalizada",
              "Protocolos corporales profesionales",
              "Acompañamiento real",
              "Ambiente cómodo y privado",
              "Evaluación honesta",
              "Enfoque wellness integral",
              "Tecnología estética especializada"
            ]).map((item: string, i: number) => (
              <motion.div key={i} variants={fadeUp} className="flex items-center gap-3 bg-stone-50 p-5 border border-stone-100">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-stone-800 font-bold text-xs uppercase tracking-widest">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center text-stone-500 mt-16 italic text-lg max-w-xl mx-auto border-t border-stone-100 pt-8">
            {content.whyUs?.footer || (lang === 'es' ? "Nuestro objetivo es que te sientas acompañado(a), informado(a) y seguro(a) en cada etapa del proceso." : "Our goal is for you to feel supported, informed, and confident throughout every stage of your journey.")}
          </motion.p>
        </div>
      </section>

      {/* ── UBICACIÓN & ATENCIÓN ─────────────────────── */}
      <section className="py-24 bg-stone-50 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white border border-stone-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
            <div className="bg-[#071e2e] p-10 md:p-16 md:w-1/2 text-white">
              <h2 className="text-3xl font-serif font-bold mb-8 uppercase tracking-tight text-white">
                {content.location?.title || (lang === 'es' ? "Ubicación y atención" : "Location & Appointments")}
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">{lang === 'es' ? "Dónde estamos" : "Location"}</p>
                    <p className="font-medium text-lg">{content.location?.locationText || "Turrialba, Costa Rica"}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Smartphone className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">{lang === 'es' ? "Reservas" : "Appointments"}</p>
                    <p className="font-medium text-lg">{content.location?.whatsappText || (lang === 'es' ? "Atención vía WhatsApp" : "WhatsApp appointments")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Car className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">{lang === 'es' ? "Comodidad" : "Access"}</p>
                    <p className="font-medium text-lg">{content.location?.parkingText || (lang === 'es' ? "Fácil acceso y parqueo cercano" : "Easy access and nearby parking")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">{lang === 'es' ? "Flexibilidad" : "Schedule"}</p>
                    <p className="font-medium text-lg">{content.location?.scheduleText || (lang === 'es' ? "Horarios personalizados con cita previa" : "Personalized appointment times")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 md:p-16 md:w-1/2 flex flex-col justify-center items-center text-center">
              <Heart className="w-12 h-12 text-primary/20 mb-6" />
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6 leading-tight">
                {content.finalCta?.title || (lang === 'es' ? "¿Lista para comenzar tu cambio?" : "Your Body Transformation Can Start Today")}
              </h3>
              <p className="text-stone-500 mb-8 text-sm leading-relaxed">
                {content.finalCta?.subtitle || (lang === 'es' ? "Agenda hoy mismo tu valoración personalizada y descubre el protocolo ideal para ti." : "You don't have to wait for the “perfect moment” to start feeling better about yourself.")}
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-stone-900 text-white px-8 py-4 font-bold tracking-[0.2em] uppercase hover:bg-primary transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                {lang === 'es' ? "Agendar cita" : "Book Assessment"}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
