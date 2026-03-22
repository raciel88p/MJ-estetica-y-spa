import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, Award, Clock4 } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SEO } from "@/components/SEO";
import { Breadcrumb } from "@/components/Breadcrumb";
import { tratamientosCorporalesLinks, servicePages } from "@/data/services";

const WA = "https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const highlights = [
  { n: "7+", label: "Tratamientos corporales" },
  { n: "100%", label: "No invasivos" },
  { n: "3+", label: "Años de experiencia" },
];

export default function TratamientosCorporales() {
  const services = tratamientosCorporalesLinks.map((link) => {
    const slug = link.href.replace("/servicios/", "");
    const data = servicePages.find((s) => s.slug === slug);
    return { ...link, slug, tagline: data?.tagline ?? "", heroDescription: data?.heroDescription ?? "" };
  });

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Tratamientos Corporales"
        description="Tratamientos corporales en MJ Fisio Estética y Spa: reducción de medidas, tensado corporal, drenaje linfático, masajes y más en Turrialba, Costa Rica."
        canonical="/tratamientos/corporales"
      />
      <Navbar />
      <FloatingWhatsApp />

      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-[#071e2e] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/about-us.png)` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <Breadcrumb
            items={[{ label: "Tratamientos Corporales" }]}
            variant="dark"
          />
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mt-8 mb-4">
            CORPORALES
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
            Tratamientos<br />
            <span className="italic font-light text-white/50">Corporales</span>
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-xl">
            Tecnología de vanguardia y técnicas especializadas para moldear tu figura, eliminar grasa localizada y mejorar la circulación — sin cirugía.
          </p>

          <div className="grid grid-cols-3 gap-8 mt-14 pt-10 border-t border-[#1a4f6e]">
            {highlights.map((h) => (
              <div key={h.n}>
                <p className="text-3xl font-serif font-bold text-white">{h.n}</p>
                <p className="text-white/65 text-sm mt-1">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Banner */}
      <section className="py-5 bg-primary">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white text-center sm:text-left text-sm font-medium">
            Solicita tu <strong>valoración gratuita</strong> — diseñamos el protocolo ideal para ti
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/60 px-6 py-2.5 hover:bg-white hover:text-primary transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Reservar valoración gratuita
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mb-14"
          >
            <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">NUESTROS SERVICIOS</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900">
              Todos nuestros tratamientos corporales
            </h2>
            <div className="w-16 h-0.5 bg-primary mt-5" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-100">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.07 } } }}
                className="bg-white p-8 group hover:bg-stone-50 transition-colors"
              >
                <span className="text-xs font-semibold text-stone-300 tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-serif font-bold text-stone-900 mt-3 mb-3 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed mb-6">
                  {service.tagline}
                </p>
                <Link href={service.href}>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary border-b border-primary/30 pb-0.5 hover:border-primary transition-colors cursor-pointer">
                    Ver tratamiento <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust + Testimonial */}
      <section className="bg-stone-50 py-16 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {[
              { icon: <ShieldCheck className="w-6 h-6 text-primary" />, title: "100% No invasivo", desc: "Sin cirugía ni tiempos de recuperación. Regresa a tu rutina de inmediato." },
              { icon: <Award className="w-6 h-6 text-primary" />, title: "Profesionales certificados", desc: "Fisioterapeutas y esteticistas con formación especializada y años de experiencia." },
              { icon: <Clock4 className="w-6 h-6 text-primary" />, title: "Resultados desde la 1ª sesión", desc: "La mayoría de nuestras clientas notan cambios visibles desde el primer tratamiento." },
            ].map((t) => (
              <div key={t.title} className="flex gap-4">
                <div className="shrink-0 mt-0.5">{t.icon}</div>
                <div>
                  <p className="font-serif font-bold text-stone-900 mb-1">{t.title}</p>
                  <p className="text-white/65 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <motion.blockquote
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="border-l-4 border-primary pl-8 py-2"
          >
            <p className="text-stone-700 font-serif text-xl italic leading-relaxed mb-4">
              "Llevaba meses buscando algo que realmente funcionara para mi flacidez. Con el tensado corporal y el drenaje noté resultados desde la segunda sesión. El trato es excelente y el lugar está muy bien equipado."
            </p>
            <footer className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">V</div>
              <div>
                <p className="text-stone-900 text-sm font-semibold">Valeria M.</p>
                <p className="text-white/75 text-xs">Clienta — Turrialba</p>
              </div>
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#071e2e]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">PIDE TU CITA</p>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Comienza tu transformación<br />
              <span className="italic font-light text-white/50">corporal hoy</span>
            </h2>
            <p className="text-white/75 text-sm mb-10 max-w-md mx-auto">
              En Turrialba, Ciudadela Jorge de Bravo. Escríbenos y agendamos tu valoración gratuita.
            </p>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white text-sm font-bold tracking-[0.15em] uppercase px-10 py-4 hover:bg-primary/90 transition-all group"
            >
              <MessageCircle className="w-4 h-4" />
              Reservar por WhatsApp
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
