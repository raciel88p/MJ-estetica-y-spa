import React, { useState } from "react";
import { withAppProviders } from "@/components/ReactAppWrapper";
import { SEO } from "@/components/SEO";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { motion } from "framer-motion";
import {
  Clock,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  MessageCircle,
  ArrowRight,
  ChevronDown,
  Shield,
  Award,
  Cpu,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { dentalServicesData, DentalService } from "@/data/dentalServices";

interface DentalServiceDetailPageProps {
  slug: string;
  lang?: "es" | "en";
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function DentalServiceDetailPageComponent({ slug, lang = "es" }: DentalServiceDetailPageProps) {
  const isEs = lang === "es";
  const services = dentalServicesData[lang] || dentalServicesData.es;
  const service = services.find((s) => s.slug === slug) || services[0];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const canonicalPath = isEs
    ? `/servicios/dental/${service.slug}`
    : `/en/services/dental/${service.slug}`;
  const alternatePath = isEs
    ? `/en/services/dental/${service.slug}`
    : `/servicios/dental/${service.slug}`;

  const whatsappLink = `https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0&text=${encodeURIComponent(
    service.whatsappText || "Hola, me gustaría información sobre este tratamiento dental en Siquirres."
  )}`;

  // Schema.org JSON-LD
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["MedicalProcedure", "DentalProcedure"],
    "name": service.name,
    "description": service.seoDescription,
    "url": `https://www.mjfisioesteticayspa.com${canonicalPath}`,
    "bodyLocation": "Mouth / Teeth / Gums",
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Dentistry"
    }
  };

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faq.map((item) => ({
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
        title={service.seoTitle}
        description={service.seoDescription}
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
            <Breadcrumb
              items={[
                { label: isEs ? "Odontología Siquirres" : "Siquirres Dentistry", href: isEs ? "/servicios/dental" : "/en/services/dental" },
                { label: service.name }
              ]}
            />
          </div>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/20 text-primary border border-primary/30 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              {isEs ? "Sede Siquirres • Odontología de Vanguardia" : "Siquirres Office • Advanced Dental Care"}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight max-w-4xl mx-auto">
              {service.h1}
            </h1>
            <p className="text-xl italic text-primary/90 font-serif max-w-3xl mx-auto mb-6">
              “{service.heroTagline}”
            </p>
            <p className="text-base text-stone-300 max-w-2xl mx-auto leading-relaxed mb-8">
              {service.emotionalIntro}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 rounded-full shadow-lg" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  {isEs ? "Solicitar Valoración por WhatsApp" : "Request Consultation on WhatsApp"}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-stone-700 text-stone-200 hover:bg-stone-800 hover:text-white font-semibold px-6 py-6 rounded-full" asChild>
                <a href="#procedimiento" className="flex items-center gap-2">
                  {isEs ? "Conocer el Paso a Paso ↓" : "View Step-by-Step Procedure ↓"}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Microcopy Card */}
      <section className="-mt-10 relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-2xl shadow-xl border border-stone-200/80 p-6">
          <div className="border-r border-stone-100 pr-4 last:border-r-0">
            <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
              {isEs ? "Tiempo Aprox." : "Approx Duration"}
            </span>
            <span className="text-stone-900 font-bold text-sm flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-primary shrink-0" />
              {service.microcopy.duration}
            </span>
          </div>
          <div className="border-r border-stone-100 pr-4 last:border-r-0">
            <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
              {isEs ? "Recuperación" : "Recovery Time"}
            </span>
            <span className="text-stone-900 font-bold text-sm flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              {service.microcopy.recovery}
            </span>
          </div>
          <div className="border-r border-stone-100 pr-4 last:border-r-0">
            <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
              {isEs ? "Frecuencia" : "Frequency"}
            </span>
            <span className="text-stone-900 font-bold text-sm flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-primary shrink-0" />
              {service.microcopy.frequency}
            </span>
          </div>
          <div>
            <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
              {isEs ? "Cuidados" : "Aftercare"}
            </span>
            <span className="text-stone-900 font-bold text-xs leading-tight block">
              {service.microcopy.aftercare}
            </span>
          </div>
        </div>
      </section>

      {/* Main Problem & Symptoms */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
              {isEs ? "¿Cuándo es momento de actuar?" : "When Is It Time to Act?"}
            </span>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">
              {isEs ? "¿Identificas estas señales en tu boca?" : "Do You Recognize These Signs?"}
            </h2>
            <p className="text-stone-600 text-base leading-relaxed mb-6">
              {service.mainProblem}
            </p>

            <div className="space-y-3">
              {service.symptomsChecklist.map((symptom, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-stone-50 p-3.5 rounded-xl border border-stone-200/80">
                  <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-stone-800 text-sm font-medium">{symptom}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-stone-900 text-white rounded-3xl p-8 shadow-xl border border-stone-800">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
              {isEs ? "Beneficios Clave" : "Key Benefits"}
            </span>
            <h3 className="text-2xl font-serif text-white mb-6">
              {isEs ? "¿Cómo cambiará tu vida después del tratamiento?" : "How Will Your Quality of Life Improve?"}
            </h3>
            <div className="space-y-6">
              {service.benefits.map((ben, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base mb-1">{ben.title}</h4>
                    <p className="text-stone-300 text-xs leading-relaxed">{ben.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Procedure Timeline */}
      <section id="procedimiento" className="py-20 bg-stone-100/80 border-y border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
              {isEs ? "Paso a Paso" : "Step by Step"}
            </span>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">
              {isEs ? "¿Cómo realizamos este procedimiento?" : "How We Perform This Procedure"}
            </h2>
            <p className="text-stone-600 text-sm">
              {isEs
                ? "Cada etapa está diseñada para garantizar tu comodidad, cero dolor y un resultado estético y funcional superior."
                : "Designed for your total comfort, painless care, and superior long-term results."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.procedureTimeline.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary text-white font-bold text-lg flex items-center justify-center shrink-0 shadow-md">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-base mb-1">{step.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Used */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block flex items-center gap-1.5">
              <Cpu className="w-4 h-4" />
              {isEs ? "Tecnología de Vanguardia" : "Advanced Technology"}
            </span>
            <h3 className="text-2xl font-serif font-bold text-stone-900">
              {service.technology[0]?.name || (isEs ? "Equipamiento Digital de Precisión" : "Precision Digital Equipment")}
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              {service.technology[0]?.description || (isEs ? "Instrumental y materiales biocompatibles certificados." : "Certified biocompatible equipment and materials.")}
            </p>
          </div>

          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 rounded-full shrink-0 shadow-md" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              {isEs ? "Consultar Disponibilidad" : "Check Availability"}
            </a>
          </Button>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
            {isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
          </span>
          <h2 className="text-3xl font-serif font-bold text-stone-900">
            {isEs ? "Resolvemos tus dudas antes de comenzar" : "Clear Answers Before Your Visit"}
          </h2>
        </div>

        <div className="space-y-4">
          {service.faq.map((item, idx) => (
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

      {/* Final CTA */}
      <section className="py-20 bg-foreground relative overflow-hidden">
        <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            {isEs ? `¿Listo para tu ${service.name} en Siquirres?` : `Ready for your ${service.name} in Siquirres?`}
          </h2>
          <p className="text-white/80 mb-8 text-base">
            {isEs
              ? "Escríbenos directamente por WhatsApp y agenda tu espacio con nuestros especialistas."
              : "Message us directly on WhatsApp and book your session with our dental team."}
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-8 py-4 text-base font-semibold hover:bg-primary/90 transition-colors shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            {isEs ? "Hablar con un Especialista por WhatsApp" : "Chat with a Specialist on WhatsApp"}
          </a>
        </div>
      </section>

      <Footer lang={lang} />
      <FloatingWhatsApp />
    </div>
  );
}

export const DentalServiceDetailPage = withAppProviders(DentalServiceDetailPageComponent);
