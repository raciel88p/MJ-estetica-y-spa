import { motion } from "framer-motion";
import { CheckCircle2, Clock, ChevronDown, ChevronRight, ArrowLeft, Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import type { ServicePageData } from "@/data/services";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5 text-left bg-card hover:bg-muted/40 transition-colors"
      >
        <span className="font-serif text-lg text-foreground pr-4">{question}</span>
        {open ? (
          <ChevronDown className="w-5 h-5 text-primary shrink-0" />
        ) : (
          <ChevronRight className="w-5 h-5 text-primary shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 pt-0 text-muted-foreground leading-relaxed bg-card">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function ServicePage({ service }: { service: ServicePageData }) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-4">
              <Link href="/#servicios">
                <span className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors cursor-pointer">
                  <ArrowLeft className="w-4 h-4" />
                  Volver a Servicios
                </span>
              </Link>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-primary text-sm uppercase tracking-widest font-medium mb-3"
            >
              {service.tagline}
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-serif text-white mb-4 leading-tight"
            >
              {service.name}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed"
            >
              {service.heroDescription}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
          >
            {service.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-3 bg-background rounded-2xl p-4 shadow-sm border border-border"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground font-medium leading-snug">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Items */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <h2 className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
              Nuestros Tratamientos
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-foreground">
              ¿Qué incluye este servicio?
            </h3>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {service.items.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-card border border-border rounded-3xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4 gap-4">
                  <h4 className="text-2xl font-serif text-foreground">{item.title}</h4>
                  {item.duration && (
                    <span className="flex items-center gap-1.5 text-muted-foreground text-sm shrink-0 bg-secondary/30 px-3 py-1 rounded-full">
                      <Clock className="w-3.5 h-3.5" />
                      {item.duration}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-5">{item.description}</p>
                <a
                  href="/#contacto"
                  className="inline-flex items-center gap-1.5 text-primary font-medium text-sm hover:underline"
                >
                  Reservar cita <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif mb-4">
              ¿Lista para tu primera sesión?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 text-lg mb-8">
              Contacta con nosotras y te asesoramos de forma personalizada sin compromiso.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-5 text-base font-semibold shadow-lg"
                asChild
              >
                <a href="/#contacto">
                  <Phone className="w-4 h-4 mr-2" />
                  Reserva tu cita ahora
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white/10 rounded-full px-8 py-5 text-base"
                asChild
              >
                <a href="/#servicios">Ver todos los servicios</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      {service.faq && service.faq.length > 0 && (
        <section className="py-20 bg-muted/20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-12"
            >
              <h2 className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
                Preguntas Frecuentes
              </h2>
              <h3 className="text-4xl font-serif text-foreground">Todo lo que necesitas saber</h3>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-4"
            >
              {service.faq.map((item, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <FaqItem question={item.question} answer={item.answer} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
