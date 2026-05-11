import { withAppProviders } from "@/components/ReactAppWrapper";
import { SEO } from "@/components/SEO";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { TestimonialGrid } from "@/components/testimonials/TestimonialGrid";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";
import { StatsBar } from "@/components/StatsBar";

const testimonials = [
  {
    name: "Avanza / Andrey Montoya",
    service: "Uniformes para personal",
    rating: 5,
    text: "Recientemente adquirimos los uniformes para nuestro personal en Avanza Ingeniería y Construcción S.A. y la experiencia ha sido fantástica. Lo que más destacamos es la calidad de la tela; es resistente pero muy cómoda para el uso diario. Incluso después de varios lavados, el color se mantiene intacto y no se arruga con facilidad. El ajuste de las tallas fue exacto a la guía proporcionada, lo cual nos ahorró muchos inconvenientes. Además, el bordado de nuestro logo quedó impecable, con mucha nitidez en los detalles.",
  },
  {
    name: "Jennifer Delgado",
    service: "Propietaria JD Panadería",
    rating: 5,
    text: "Tuve la oportunidad de colaborar con Ingenia CR, para la creación de unos uniformes que necesita con urgencia para una feria. El servicio y sentido de urgencia hacia mi pedido, me hizo sentir que era parte importante de la empresa, lo que con llevo a que mis uniformes salieran a tiempo según lo planeado. Excelente servicio y calidad de los productos. Siempre estuvieron atentos a atenderme y a escuchar la solicitud de mi pedido.",
  },
  {
    name: "Productos Artesanales Maromo",
    service: "",
    rating: 5,
    text: "Se siente complacido con el trabajo realizado por Ingenia. Su ingenio y dedicación se reflejan en cada pieza, mostrando una calidad excepcional. Además, el tiempo de entrega fue excelente, y los materiales utilizados son de primera. Sin duda, recomendamos sus servicios a quienes busquen trabajos de gran nivel.",
  }
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

function Testimonios() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Testimonios de Clientes"
        description="Lee las opiniones y testimonios reales de clientes de MJ Fisio Estética y Spa en Turrialba, Costa Rica. Más de 2335 clientes satisfechos con valoración 4.9/5."
        canonical="/testimonios"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="flex justify-center mb-6">
            <Breadcrumb items={[{ label: "Testimonios" }]} />
          </div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium tracking-widest uppercase mb-6">
              <Star className="w-4 h-4 fill-primary" />
              Lo que dicen nuestras clientas
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Testimonios Reales
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              La satisfacción de nuestras clientas es nuestra mayor recompensa.
              Estas son sus experiencias reales en MJ Fisio Estética y Spa.
            </p>
          </motion.div>
        </div>
      </section>

      <StatsBar />


      {/* CRO Testimonial System */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <Star className="w-4 h-4 fill-primary" />
              Casos verificados
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-3">
              Resultados, mensajes y transformaciones
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              Explora testimonios detallados, resultados antes y después, y mensajes reales de nuestras clientas.
            </p>
          </div>
          <TestimonialGrid />
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
                    {t.service && <p className="text-xs text-muted-foreground mb-1">{t.service}</p>}
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
            id="cta-testimonios-reserva"
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

export default withAppProviders(Testimonios);
