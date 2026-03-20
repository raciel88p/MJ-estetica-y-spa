import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { motion } from "framer-motion";
import { CheckCircle2, Star, Heart, Award, Users, Sparkles, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const values = [
  {
    icon: Heart,
    title: "Vocación de Servicio",
    description:
      "Cada tratamiento está diseñado con dedicación y empatía. Tu bienestar es nuestra mayor motivación y satisfacción.",
  },
  {
    icon: Award,
    title: "Excelencia Profesional",
    description:
      "Nuestro equipo cuenta con formación especializada y se actualiza continuamente para ofrecerte técnicas y tecnologías de vanguardia.",
  },
  {
    icon: Users,
    title: "Trato Personalizado",
    description:
      "Cada persona es única. Por eso escuchamos, evaluamos y diseñamos un plan a medida para cada cliente.",
  },
  {
    icon: Sparkles,
    title: "Ambiente de Bienestar",
    description:
      "Hemos creado un espacio pensado para que desde el momento en que entras, te desconectes del mundo y disfrutes.",
  },
];

const team = [
  {
    name: "María José",
    role: "Directora & Especialista en Estética",
    description:
      "Fundadora de MJ Fisio Estética y Spa, con más de 3 años de experiencia en tratamientos estéticos y bienestar. Su pasión por el cuidado personal la llevó a crear un espacio de referencia en Turrialba.",
    emoji: "👩‍⚕️",
  },
  {
    name: "Equipo de Fisioterapia",
    role: "Fisioterapeutas Certificados",
    description:
      "Profesionales certificados especializados en técnicas de rehabilitación, masajes terapéuticos y tratamientos corporales. Con experiencia en deporte, lesiones y bienestar general.",
    emoji: "🏥",
  },
  {
    name: "Equipo Médico Estético",
    role: "Médicos y Especialistas",
    description:
      "Médicos especialistas en estética avanzada: botox, hilos tensores, rellenos y trasplante capilar. Comprometidos con resultados naturales y seguros.",
    emoji: "💉",
  },
  {
    name: "Nutricionista",
    role: "Especialista en Nutrición",
    description:
      "Experta en diseño de planes nutricionales personalizados para objetivos de salud, peso y rendimiento deportivo.",
    emoji: "🥗",
  },
];

const stats = [
  { value: "+3", label: "Años de experiencia" },
  { value: "2335", label: "Clientes satisfechos" },
  { value: "15+", label: "Tratamientos disponibles" },
  { value: "100%", label: "Atención personalizada" },
];

export default function Nosotros() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-primary/80 tracking-widest uppercase text-sm font-medium mb-4">Quiénes somos</p>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              El Arte de Cuidar <span className="italic text-white/60">de Ti</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              En MJ Fisio Estética y Spa hemos creado un espacio donde la salud, la belleza y el bienestar
              se unen para ofrecerte una experiencia única en el corazón de Turrialba, Costa Rica.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <p className="text-4xl font-serif font-bold text-white">{stat.value}</p>
                <p className="text-white/70 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative"
            >
              <div className="absolute inset-0 bg-secondary rounded-t-full rounded-b-xl transform -translate-x-4 translate-y-4 -z-10" />
              <img
                src={`${import.meta.env.BASE_URL}images/about-us.png`}
                alt="Instalaciones MJ Fisio Estética y Spa"
                className="rounded-t-full rounded-b-xl shadow-2xl object-cover w-full h-[550px]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&q=80";
                }}
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary fill-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-foreground">+3 Años</p>
                    <p className="text-sm text-muted-foreground">de Experiencia</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Nuestra Historia</h2>
              <h3 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
                Nació de una <span className="italic text-muted-foreground">pasión</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5 text-lg">
                MJ Fisio Estética y Spa nació del sueño de crear un lugar donde cada persona pudiera sentirse
                cuidada, escuchada y renovada. Ubicados en Turrialba, Ciudadela Jorge de Bravo, Costa Rica,
                combinamos la calidez de un trato cercano con la excelencia de profesionales altamente cualificados.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                Desde nuestros inicios, la misión ha sido clara: ofrecer tratamientos de calidad en un ambiente
                relajante, donde cada visita sea una experiencia de bienestar real. Hoy contamos con un equipo
                multidisciplinario de especialistas en fisioterapia, estética y medicina estética.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Profesionales certificados",
                  "Tecnología de vanguardia",
                  "Ambiente diseñado para relajar",
                  "Tratamientos personalizados",
                  "Atención integral",
                  "Resultados comprobados",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Lo que nos define</p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">Nuestros Valores</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } } }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-serif text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Las personas detrás del spa</p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">Nuestro Equipo</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } } }}
                className="bg-background rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-br from-primary/10 to-secondary/30 h-40 flex items-center justify-center text-7xl">
                  {member.emoji}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        <div className="max-w-2xl mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-serif text-white mb-4">¿Lista para tu primera visita?</h2>
          <p className="text-white/60 mb-8 text-lg">
            Reserva tu cita y descubre por qué somos el centro de referencia en Turrialba.
          </p>
          <a
            href="https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-8 py-4 text-base font-semibold hover:bg-primary/90 transition-colors shadow-lg"
          >
            Reservar mi cita
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
