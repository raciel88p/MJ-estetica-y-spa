import { SEO } from "@/components/SEO";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Stethoscope, BadgeCheck } from "lucide-react";
import { StatsBar } from "@/components/StatsBar";
import { medicoEsteticosLinks } from "@/data/services";
import { servicePages } from "@/data/services";

const BASE = import.meta.env.BASE_URL;

const doctors = [
  {
    name: "Dr. Ricard Araya",
    linc: "323106",
    specialty: "Armonizador Facial",
    photo: "dr-ricard-araya.webp",
    bio: "Médico especialista en medicina estética y tratamientos faciales mínimamente invasivos. Experto en toxina botulínica, ácido hialurónico e hilos tensores con enfoque en resultados naturales.",
    services: ["/servicios/botox-full-face", "/servicios/hilos-tensores", "/servicios/acido-hialuronico", "/servicios/rellenos-labios"],
    serviceLabels: ["Botox", "Hilos Tensores", "Ácido Hialurónico", "Rellenos de Labios"],
  },
  {
    name: "Dr. Ruddy Jiménez Montero",
    linc: "13583",
    specialty: "Master en Cirugía Capilar",
    photo: "dr-ruddy-jimenez.webp",
    bio: "Especialista con formación de posgrado en cirugía capilar. Realiza cada procedimiento con técnicas de última generación garantizando resultados naturales, seguros y permanentes.",
    services: ["/servicios/trasplante-capilar", "/servicios/implante-barba", "/servicios/mesoterapia-capilar"],
    serviceLabels: ["Trasplante Capilar", "Implante de Barba", "Mesoterapia Capilar"],
  },
  {
    name: "Dr. Johan",
    linc: "3667-25",
    specialty: "Nutricionista Deportivo",
    photo: "dr-johan.webp",
    bio: "Especialista en nutrición clínica y deportiva. Diseña planes alimentarios personalizados orientados a objetivos de salud, rendimiento y composición corporal.",
    services: ["/servicios/nutricion"],
    serviceLabels: ["Nutrición Clínica"],
  },
];

const descriptions: Record<string, string> = {
  nutricion:
    "Planes nutricionales personalizados para alcanzar tus objetivos de salud, peso y bienestar con el acompañamiento de nuestros especialistas.",
  "botox-full-face":
    "Tratamiento con toxina botulínica para reducir arrugas de expresión y rejuvenecer el rostro de forma natural y sin cirugía.",
  "hilos-tensores":
    "Lifting no quirúrgico con hilos reabsorbibles que devuelven firmeza y tensión a la piel estimulando la producción de colágeno.",
  "trasplante-capilar":
    "Solución definitiva para la alopecia con técnicas mínimamente invasivas, resultados permanentes y aspecto completamente natural.",
  "implante-barba":
    "Técnica de trasplante capilar facial para obtener una barba densa, uniforme y completamente natural adaptada a tu estructura facial.",
  "mesoterapia-capilar":
    "Microinyecciones de vitaminas, minerales y factores de crecimiento directamente en el cuero cabelludo para frenar la caída y estimular el crecimiento.",
  "rellenos-labios":
    "Relleno con ácido hialurónico para dar volumen, definir el contorno y rejuvenecer los labios con un resultado natural y duradero.",
};

const icons: Record<string, string> = {
  nutricion: "🥗",
  "botox-full-face": "💉",
  "hilos-tensores": "✨",
  "trasplante-capilar": "💆",
  "implante-barba": "🧔",
  "mesoterapia-capilar": "💊",
  "rellenos-labios": "👄",
};

export default function MedicosEsteticos() {
  const services = medicoEsteticosLinks.map((link) => {
    const slug = link.href.replace("/servicios/", "");
    const data = servicePages.find((s) => s.slug === slug);
    return { ...link, slug, tagline: data?.tagline ?? "", description: descriptions[slug] ?? "" };
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Tratamientos Médicos Estéticos"
        description="Tratamientos médicos estéticos en Turrialba: botox, rellenos, hilos tensores, trasplante capilar y nutrición. Especialistas certificados en MJ Estética Wellness Center."
        canonical="/medicos-esteticos"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="flex justify-center mb-6">
            <Breadcrumb items={[{ label: "Médicos y Estéticos" }]} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium tracking-widest uppercase mb-6">
              <Stethoscope className="w-4 h-4" />
              Especialidades
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Médicos y Estéticos
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Tratamientos médico-estéticos de vanguardia realizados por profesionales especializados.
              Ciencia y belleza para transformar tu bienestar de adentro hacia afuera.
            </p>
          </motion.div>
        </div>
      </section>

      <StatsBar />

      {/* ── Nuestros Especialistas ── */}
      <section className="py-20 bg-[#071e2e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3">Equipo Médico</p>
            <h2 className="text-4xl font-serif text-white">Nuestros Especialistas</h2>
            <p className="text-white/60 mt-3 max-w-xl mx-auto text-sm">
              Profesionales certificados con años de experiencia en medicina estética y bienestar.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doc, i) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/40 transition-colors"
              >
                {/* Photo */}
                <div className="relative h-64 bg-[#0a2a3d] overflow-hidden">
                  <img
                    src={`${BASE}images/${doc.photo}`}
                    alt={`${doc.name} - Equipo Médico de MJ Estética Wellness Center`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071e2e]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase">
                      <BadgeCheck className="w-3 h-3" />
                      {doc.specialty}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-lg font-serif font-bold text-white mb-1">{doc.name}</h3>
                  <p className="text-primary/80 text-xs font-medium tracking-widest uppercase mb-4">
                    Linc {doc.linc}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed mb-5">{doc.bio}</p>

                  {/* Service tags */}
                  <div className="flex flex-wrap gap-2">
                    {doc.serviceLabels.map((label, j) => (
                      <Link key={j} href={doc.services[j]}>
                        <span className="inline-block bg-white/8 border border-white/10 text-white/70 text-[11px] font-medium px-3 py-1 rounded-full hover:bg-primary/20 hover:text-white hover:border-primary/30 transition-colors cursor-pointer">
                          {label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={service.href}>
                  <div className="group cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-border hover:-translate-y-1 h-full">
                    <div className="bg-gradient-to-br from-primary/5 to-secondary/20 p-8 flex items-center gap-4">
                      <span className="text-5xl">{icons[service.slug]}</span>
                      <div>
                        <h2 className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors">
                          {service.name}
                        </h2>
                        <p className="text-sm text-primary/80 italic mt-1">{service.tagline}</p>
                      </div>
                    </div>
                    <div className="p-8 pt-6">
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                        Ver tratamientos
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif text-foreground mb-4">¿No sabes cuál es el tratamiento ideal para ti?</h2>
          <p className="text-muted-foreground mb-8">
            Contáctanos y nuestros especialistas te orientarán para elegir el tratamiento más adecuado según tus objetivos y condición.
          </p>
          <a
            id="cta-medicos-asesoria"
            href="https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-8 py-4 text-base font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/30"
          >
            Solicitar asesoría gratuita
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
