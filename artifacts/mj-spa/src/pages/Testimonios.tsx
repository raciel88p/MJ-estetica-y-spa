import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Daniela",
    service: "",
    rating: 5,
    text: "Precioso, muy acojedor, justo lo que uno espera, de verdad fue muy bonita la atención, el lugar y lo que pude ver, los aromas que utilizan también.",
  },
  {
    name: "María Lourdes",
    service: "",
    rating: 5,
    text: "Agradecer primero la atención y contarte que me he sentido muy bien con el tratamiento, he sentido cambios muy importantes en mi cuerpo y eso me motiva mucho a seguir trabajando para lograr mi meta!!",
  },
  {
    name: "Ana Paula",
    service: "",
    rating: 5,
    text: "Estoy muy contenta por el trato que he recibido, siempre atentas, y porque desde las primeras semanas se ven resultados. Si hay buena alimentación, hidratación y ser estable con el tratamiento rápido se ven cambios.",
  },
  {
    name: "Carlos Brenes",
    service: "",
    rating: 5,
    text: "Desde que empecé con MJ estética he sentido como mi autoestima ha crecido, en un mes rebajé varios centímetros en mi abdomen y papada. La atención del lugar lo hace a uno sentirse seguro. Los resultados en poco tiempo me hacen sentir agradecido. Gracias.",
  },
  {
    name: "Laura Hernández González",
    service: "",
    rating: 5,
    text: "Esos rollitos tan molestos que no podía quitar por más gimnasio, los logré eliminar gracias al tratamiento en MJ estética. Sin lugar a dudas un lugar para chinearte y de paso verte mejor.",
  },
  {
    name: "Kattya Brenes",
    service: "",
    rating: 5,
    text: "Es un privilegio formar parte de la Familia MJ. Agradezco infinitamente por abrirme las puertas para ser atendida por un equipo de personas profesionales y capacitadas. Me siento muy afortunada de recibir sus servicios. Muchas gracias y muchos éxitos.",
  },
  {
    name: "Darril Ordóñez Ramírez",
    service: "",
    rating: 5,
    text: "Me ha ayudado mucho con la grasa localizada y de verdad es un éxito 🙌",
  },
  {
    name: "Yuleidy Vargas",
    service: "",
    rating: 5,
    text: "Recomendado, he visto resultados en menos de un mes. 🙌",
  },
  {
    name: "Eduardo Andrés Loaiza Mata",
    service: "",
    rating: 5,
    text: "MJ Estética me ha brindado mucho apoyo para bajar de peso. Además la atención ha sido genial y muy interesados en ayudar a que uno pueda lo más pronto bajar de peso.",
  },
  {
    name: "Johana Núñez Campos",
    service: "",
    rating: 5,
    text: "Mis sesiones han sido de gran ayuda para mí, ya he visto mucho el cambio en mi físico desde que inicié. Los recomiendo a ojos cerrados.",
  },
  {
    name: "Andrea Salas Portuguez",
    service: "",
    rating: 5,
    text: "La atención excelente tanto de Adri como de María, los servicios de primera calidad, mucho orden, puntualidad y precios muy asequibles.",
  },
  {
    name: "Wendy Rodríguez Mora",
    service: "",
    rating: 5,
    text: "Una experiencia muy agradable. Aún sigo en el proceso. Me siento muy bien y la atención al 100%.",
  },
  {
    name: "Marlene Fernández Mora",
    service: "",
    rating: 5,
    text: "El servicio brindado y la atención son excelentes, en particular el profesionalismo que demuestran. Los tratamientos son excelentes complementados con una buena alimentación y ejercicio se notan los cambios. Sí los recomendaría a ojos cerrados.",
  },
  {
    name: "Nidia Cervantes Fonseca",
    service: "",
    rating: 5,
    text: "Me dio mucho gusto y mucha confianza los servicios brindados, las muchachas muy bella gente y atentas. La seguridad de todos los procedimientos fue muy buena.",
  },
  {
    name: "Vanessa Alfaro Cervantes",
    service: "",
    rating: 5,
    text: "Excelente servicio y profesionalismo.",
  },
  {
    name: "Catalina Aguilar Madriz",
    service: "",
    rating: 5,
    text: "Me he realizado varios tratamientos con MJ teniendo súper buenos resultados, por eso sigo comprando paquetes y recomendando a mis amig@s a que también vayan.",
  },
  {
    name: "Yorleny Araya Vega",
    service: "",
    rating: 5,
    text: "Mejoró mi rostro en hidratación y mi abdomen.",
  },
  {
    name: "Irlanda Jiménez Loaiza",
    service: "",
    rating: 5,
    text: "La atención muy buena, los procedimientos excelentes, lo recomiendo.",
  },
  {
    name: "María Fernanda Vargas Calvo",
    service: "",
    rating: 5,
    text: "Sí me ha funcionado los tratamientos de Carbo y Mesoterapia.",
  },
  {
    name: "Eylin Garro Espinoza",
    service: "",
    rating: 5,
    text: "He asistido únicamente a dos sesiones de limpieza profunda, y hasta el momento el trato que he recibido ha sido bueno y en cuanto al tratamiento realizado ha sido satisfactorio.",
  },
  {
    name: "Marianela Sánchez Quesada",
    service: "",
    rating: 5,
    text: "Excelente atención.",
  },
  {
    name: "M. Ángela Picado Méndez",
    service: "",
    rating: 5,
    text: "Excelente la atención y los paquetes promocionales.",
  },
  {
    name: "Felicia Salazar Salazar",
    service: "",
    rating: 5,
    text: "Muy bueno, me ha encantado lo que llevo.",
  },
  {
    name: "Mireya Jiménez Aguilar",
    service: "",
    rating: 5,
    text: "Brinda una buena atención al servicio para los clientes.",
  },
  {
    name: "Xinia Aguilar Martínez",
    service: "",
    rating: 5,
    text: "Excelente, se ven los resultados, la atención es muy buena, no tengo queja, solo felicitaciones.",
  },
  {
    name: "Karla Méndez Gutiérrez",
    service: "",
    rating: 5,
    text: "Súper feliz con los resultados.",
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
