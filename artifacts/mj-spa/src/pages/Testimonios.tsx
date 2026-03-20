import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    service: "Masajes Corporales",
    rating: 5,
    text: "Llevo años viniendo a MJ Fisio y nunca me ha decepcionado. Los masajes son increíbles y el trato es excelente. 100% recomendado.",
  },
  {
    name: "Laura Martínez",
    service: "Fisioterapia",
    rating: 5,
    text: "La fisioterapia me ha ayudado muchísimo con mi dolor de espalda. Las chicas son muy profesionales y amables. Me encanta este centro.",
  },
  {
    name: "Ana Rodríguez",
    service: "Tratamiento Facial",
    rating: 5,
    text: "Vine por primera vez para un tratamiento facial y quedé encantada. La limpieza facial fue espectacular. Ya tengo la siguiente cita reservada.",
  },
  {
    name: "Carmen López",
    service: "Circuito Spa",
    rating: 5,
    text: "El circuito spa es una experiencia de lujo. Todo está muy cuidado y el ambiente es muy relajante. Perfecto para desconectar.",
  },
  {
    name: "Isabel Sánchez",
    service: "Estética Corporal",
    rating: 5,
    text: "Hice el tratamiento de cavitación y los resultados son visibles desde la primera sesión. Muy recomendable y el precio es muy razonable.",
  },
  {
    name: "Patricia Fernández",
    service: "Masajes Relajantes",
    rating: 5,
    text: "El mejor centro de estética que he conocido. Profesionales, amables y con resultados reales. No cambio este sitio por nada.",
  },
  {
    name: "Sofía Vargas",
    service: "Botox Full Face",
    rating: 5,
    text: "Tenía mucho miedo antes del botox pero el equipo me explicó todo detalladamente y el resultado fue completamente natural. Estoy encantada.",
  },
  {
    name: "Daniela Mora",
    service: "Nutrición",
    rating: 5,
    text: "Gracias al plan nutricional personalizado logré mis objetivos de salud en solo 3 meses. El seguimiento constante hace toda la diferencia.",
  },
  {
    name: "Valeria Jiménez",
    service: "Hilos Tensores",
    rating: 5,
    text: "El resultado de los hilos tensores superó mis expectativas. Natural, inmediato y sin tiempo de recuperación. Lo recomiendo totalmente.",
  },
  {
    name: "Marcela Rojas",
    service: "Peeling Químico",
    rating: 5,
    text: "Después del peeling mi piel luce radiante y las manchas disminuyeron notablemente. El proceso fue muy cómodo y el resultado increíble.",
  },
  {
    name: "Alejandra Castro",
    service: "Depilación Láser",
    rating: 5,
    text: "Llevaba años buscando una solución definitiva para el vello. Con la depilación láser estoy más que satisfecha. El equipo es muy profesional.",
  },
  {
    name: "Rebeca Solano",
    service: "Masajes Relajantes",
    rating: 5,
    text: "Vengo cada mes a recargar energías. El ambiente es precioso y los masajes son de un nivel altísimo. Es mi ritual de autocuidado favorito.",
  },
];

const stats = [
  { value: "2335", label: "Clientes satisfechos" },
  { value: "4.9/5", label: "Valoración promedio" },
  { value: "98%", label: "Recomendarían el centro" },
  { value: "+3", label: "Años de confianza" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

export default function Testimonios() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium tracking-widest uppercase mb-6">
              <Star className="w-4 h-4 fill-primary" />
              Lo que dicen nuestras clientas
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Testimonios
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              La satisfacción de nuestras clientas es nuestra mayor recompensa.
              Estas son sus experiencias reales en MJ Fisio Estética y Spa.
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

      {/* Testimonials Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-shadow flex flex-col"
              >
                <Quote className="w-8 h-8 text-primary/20 mb-4 shrink-0" />
                <p className="text-foreground/80 italic leading-relaxed mb-6 flex-1">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-serif text-lg shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-foreground font-serif">{t.name}</p>
                    <p className="text-xs text-muted-foreground mb-1">{t.service}</p>
                    <StarRating rating={t.rating} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Sé la próxima en compartir tu experiencia
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Reserva tu cita hoy y descubre por qué tantas clientas confían en nosotras.
          </p>
          <a
            href="https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-8 py-4 text-base font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/30"
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
