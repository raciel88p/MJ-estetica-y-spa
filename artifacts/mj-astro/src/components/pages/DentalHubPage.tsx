import { BranchesSection } from '../common/BranchesSection';
import React, { useState } from "react";
import { withAppProviders } from "@/components/ReactAppWrapper";
import { SEO } from "@/components/SEO";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  Heart,
  UserCheck,
  Smile,
  Shield,
  Award,
  Star,
  Activity,
  Scissors,
  Zap,
  CheckCircle,
  Grid,
  EyeOff,
  PhoneCall,
  Layers,
  FileText,
  MessageCircle,
  ArrowRight,
  ChevronDown,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { dentalHubData } from "@/data/dentalServices";

interface DentalHubPageProps {
  lang?: "es" | "en";
}

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-primary" />,
  Sparkles: <Sparkles className="w-6 h-6 text-primary" />,
  Heart: <Heart className="w-6 h-6 text-primary" />,
  UserCheck: <UserCheck className="w-6 h-6 text-primary" />,
  Smile: <Smile className="w-6 h-6 text-primary" />,
  Shield: <Shield className="w-6 h-6 text-primary" />,
  Award: <Award className="w-6 h-6 text-primary" />,
  Star: <Star className="w-6 h-6 text-primary" />,
  Activity: <Activity className="w-6 h-6 text-primary" />,
  Scissors: <Scissors className="w-6 h-6 text-primary" />,
  Zap: <Zap className="w-6 h-6 text-primary" />,
  CheckCircle: <CheckCircle className="w-6 h-6 text-primary" />,
  Grid: <Grid className="w-6 h-6 text-primary" />,
  EyeOff: <EyeOff className="w-6 h-6 text-primary" />,
  PhoneCall: <PhoneCall className="w-6 h-6 text-primary" />,
  Layers: <Layers className="w-6 h-6 text-primary" />,
  FileText: <FileText className="w-6 h-6 text-primary" />
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function DentalHubPageComponent({ lang = "es" }: DentalHubPageProps) {
  const isEs = lang === "es";
  const data = dentalHubData[lang] || dentalHubData.es;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const canonicalPath = isEs ? "/servicios/dental" : "/en/services/dental";
  const alternatePath = isEs ? "/en/services/dental" : "/servicios/dental";

  // Schema.org JSON-LD
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness"],
    "name": "MJ Fisio Estética & Odontología Siquirres",
    "description": data.seoDescription,
    "url": `https://www.mjfisioesteticayspa.com${canonicalPath}`,
    "telephone": "+506 8690-7757",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Siquirres Centro",
      "addressLocality": "Siquirres",
      "addressRegion": "Limón",
      "addressCountry": "CR"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  };

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faq.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-stone-900">
      <SEO
        title={data.seoTitle}
        description={data.seoDescription}
        canonical={canonicalPath}
        lang={lang}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }} />

      <Navbar lang={lang} alternateLink={alternatePath} />

      {/* Hero Header */}
      <section className="relative pt-36 pb-24 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <Breadcrumb items={[{ label: isEs ? "Odontología & Salud Dental" : "Dental Care & Dentistry" }]} />
          </div>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/20 text-primary border border-primary/30 mb-4">
              <Smile className="w-3.5 h-3.5" />
              {isEs ? "Sede Siquirres • Odontología Emocional" : "Siquirres Branch • Compassionate Dentistry"}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
              {data.h1}
            </h1>
            <p className="text-xl italic text-primary/90 font-serif max-w-3xl mx-auto mb-6">
              “{data.tagline}”
            </p>
            <p className="text-base text-stone-300 max-w-2xl mx-auto leading-relaxed mb-8">
              {data.emotionalIntro}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 rounded-full shadow-lg" asChild>
                <a
                  href="https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  {isEs ? "Agendar Valoración por WhatsApp" : "Book Consultation on WhatsApp"}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-stone-700 text-stone-200 hover:bg-stone-800 hover:text-white font-semibold px-6 py-6 rounded-full" asChild>
                <a href="#tratamientos-dentales" className="flex items-center gap-2">
                  {isEs ? "Ver Todos los Tratamientos ↓" : "View All Treatments ↓"}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values & Differentiators */}
      <section className="-mt-12 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-white rounded-2xl shadow-xl border border-stone-200/80 p-6 sm:p-8">
          {data.values.map((val, idx) => (
            <div key={idx} className="flex flex-col items-start gap-3 p-4 rounded-xl hover:bg-stone-50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                {iconMap[val.icon] || <Sparkles className="w-6 h-6 text-primary" />}
              </div>
              <h3 className="font-bold text-stone-900 text-base">{val.title}</h3>
              <p className="text-stone-600 text-xs leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Emotional Makenzy Storytelling Block */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-stone-800">
          <div className="relative z-10 space-y-4 max-w-3xl">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block">
              {isEs ? "Nuestra Filosofía" : "Our Philosophy"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">
              {isEs ? "No es solo cuidar tus dientes. Es ayudarte a volver a sonreír con tranquilidad." : "It’s not just about teeth. It’s helping you smile again with peace of mind."}
            </h2>
            <div className="space-y-3 text-stone-300 text-base leading-relaxed font-light">
              <p>{isEs ? "No siempre duele. A veces simplemente dejas de sonreír en las fotografías." : "Pain isn’t always physical. Sometimes you simply stop smiling in photos."}</p>
              <p>{isEs ? "Empiezas a cubrir tu boca cuando hablas. Evitas reír a carcajadas." : "You start covering your mouth when you talk. You avoid laughing out loud."}</p>
              <p>{isEs ? "Y poco a poco eso afecta tu confianza." : "And step by step, that subtly drains your confidence."}</p>
              <p className="text-white font-semibold pt-2">
                {isEs ? "Nuestro trabajo no es únicamente aplicar procedimientos. Es vender tranquilidad, autoestima y calidad de vida en Siquirres." : "Our purpose isn’t just medical procedures. It’s giving you back peace of mind, self-esteem, and confidence in Siquirres."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Grid Section */}
      <section id="tratamientos-dentales" className="py-20 bg-stone-100/80 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
              {isEs ? "Especialidades en Siquirres" : "Siquirres Specialties"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mb-4">
              {isEs ? "Tratamientos Dentales Disponibles" : "Available Dental Treatments"}
            </h2>
            <p className="text-stone-600 text-sm">
              {isEs
                ? "Explora nuestra gama de soluciones odontológicas. Haz clic en cualquier tratamiento para conocer el procedimiento paso a paso, duraciones y resolver todas tus dudas."
                : "Explore our comprehensive dental treatments. Click on any service to learn more about the step-by-step procedure and benefits."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.servicesList.map((service, idx) => {
              const serviceHref = isEs
                ? `/servicios/dental/${service.slug}`
                : `/en/services/dental/${service.slug}`;

              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                        {iconMap[service.icon] || <Sparkles className="w-5 h-5" />}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 border border-stone-200">
                        {service.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-stone-900 text-lg mb-2">{service.name}</h3>
                    <p className="text-stone-600 text-sm mb-6 leading-relaxed">{service.shortDesc}</p>
                  </div>

                  <a
                    href={serviceHref}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline group pt-2 border-t border-stone-100"
                  >
                    <span>{isEs ? "Ver detalles del tratamiento" : "View treatment details"}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
            {isEs ? "Transparencia & Respuestas" : "Transparency & Answers"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
            {isEs ? "Preguntas Frecuentes sobre Odontología en Siquirres" : "Frequently Asked Questions"}
          </h2>
        </div>

        <div className="space-y-4">
          {data.faq.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left p-6 flex justify-between items-center gap-4 font-bold text-stone-900 text-base hover:bg-stone-50/50 transition-colors"
              >
                <span>{item.question}</span>
                <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform duration-200 ${openFaq === idx ? "rotate-180" : ""}`} />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-6 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4 space-y-3">
                  <p>{item.answer}</p>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/60 text-xs text-stone-500">
                    <strong className="text-stone-700 block mb-1">Resumen / Quick Answer:</strong>
                    {item.aeoSummary}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 bg-foreground relative overflow-hidden">
        <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            {isEs ? "¿Listo para recuperar la confianza de sonreír en Siquirres?" : "Ready to restore your smile confidence in Siquirres?"}
          </h2>
          <p className="text-white/80 mb-8 text-base">
            {isEs
              ? "Habla con nuestro equipo por WhatsApp. Evaluamos tu caso con calidez, respeto y sin presiones."
              : "Chat directly with our team on WhatsApp. We evaluate your case with empathy and complete transparency."}
          </p>
          <a
            href="https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-8 py-4 text-base font-semibold hover:bg-primary/90 transition-colors shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            {isEs ? "Agendar Mi Cita Dental por WhatsApp" : "Book My Dental Appointment on WhatsApp"}
          </a>
        </div>
      </section>

      <BranchesSection lang={lang} />
      <Footer lang={lang} />
      <FloatingWhatsApp />
    </div>
  );
}

export const DentalHubPage = withAppProviders(DentalHubPageComponent);
