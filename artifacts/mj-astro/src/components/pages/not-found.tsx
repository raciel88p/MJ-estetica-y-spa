import { withAppProviders } from "@/components/ReactAppWrapper";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Home } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const WA = "https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0";
const BASE = import.meta.env.BASE_URL;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const popularTreatments = [
  {
    name: "Masajes Relajantes",
    tagline: "Desconecta mente y cuerpo con nuestras técnicas exclusivas",
    href: "/servicios/masajes-relajantes",
    num: "01",
  },
  {
    name: "Hollywood Peel",
    tagline: "Piel radiante y sin imperfecciones desde la primera sesión",
    href: "/servicios/hollywood-peel",
    num: "02",
  },
  {
    name: "Radiofrecuencia Facial",
    tagline: "Reafirma y rejuvenece sin agujas ni tiempo de recuperación",
    href: "/servicios/radiofrecuencia-facial",
    num: "03",
  },
  {
    name: "Reducción de Medidas",
    tagline: "Pierde centímetros y moldea tu silueta de forma progresiva",
    href: "/servicios/reduccion-de-medidas",
    num: "04",
  },
  {
    name: "Tratamiento Anticelulitis",
    tagline: "Elimina la celulitis con tecnología de última generación",
    href: "/servicios/tratamiento-anticelulitis",
    num: "05",
  },
  {
    name: "Botox Full Face",
    tagline: "Resultados naturales que preservan tu expresividad",
    href: "/servicios/botox-full-face",
    num: "06",
  },
];

function NotFound() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-[#071e2e]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${BASE}images/hero-bg.webp)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071e2e]/60 via-[#071e2e]/80 to-[#071e2e]" />

        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-16 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-6">
              Error 404
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-[10rem] md:text-[14rem] font-serif font-bold leading-none text-white/10 select-none mb-0 -mb-8 md:-mb-12">
              404
            </motion.h1>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-5 relative z-10">
              Esta página no existe,<br />
              <span className="font-light italic text-primary">pero tu tratamiento sí.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/65 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
              La página que buscas no está disponible, pero no hace falta que te vayas con las manos vacías. Aquí tienes los tratamientos que más piden nuestras clientas.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-primary text-white text-sm font-bold tracking-[0.15em] uppercase px-8 py-4 hover:bg-primary/90 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Reservar cita por WhatsApp
              </a>
              <a href="/">
                <span className="inline-flex items-center gap-2 text-white/70 text-sm font-medium border border-white/20 px-8 py-4 hover:border-white/60 hover:text-white transition-all cursor-pointer">
                  <Home className="w-4 h-4" />
                  Ir al inicio
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── TRATAMIENTOS MÁS SOLICITADOS ─────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-primary" />
              <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Lo más solicitado</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
              Tratamientos favoritos<br />
              <span className="font-light italic text-primary">de nuestras clientas</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-100"
          >
            {popularTreatments.map((t) => (
              <motion.div key={t.href} variants={fadeUp}>
                <a href={t.href}>
                  <div className="group bg-white p-8 hover:bg-stone-50 transition-colors cursor-pointer h-full flex flex-col justify-between min-h-[180px]">
                    <div>
                      <p className="text-stone-400 text-xs font-serif font-bold mb-3">{t.num}</p>
                      <h3 className="text-xl font-serif font-bold text-stone-900 mb-2 group-hover:text-primary transition-colors">
                        {t.name}
                      </h3>
                      <p className="text-stone-600 text-sm leading-relaxed">{t.tagline}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-primary border-b border-primary/30 pb-0.5 hover:border-primary transition-colors mt-6 w-fit">
                      Ver tratamiento <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────── */}
      <section className="bg-primary py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-white/70 text-xs font-bold tracking-[0.4em] uppercase mb-3">
              Valoración gratuita y sin compromiso
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              ¿No encuentras lo que buscas?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/75 text-sm mb-8 max-w-md mx-auto leading-relaxed">
              Escríbenos directamente y te asesoramos sobre el tratamiento ideal para tu caso, sin costo ni compromiso.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white text-primary text-sm font-bold tracking-[0.15em] uppercase px-8 py-4 hover:bg-white/90 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Hablar con una especialista
              </a>
              <a href="/mapa-del-sitio">
                <span className="inline-flex items-center gap-2 text-white/80 text-sm font-medium border border-white/30 px-8 py-4 hover:border-white hover:text-white transition-all cursor-pointer">
                  Ver todos los servicios <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default withAppProviders(NotFound);
