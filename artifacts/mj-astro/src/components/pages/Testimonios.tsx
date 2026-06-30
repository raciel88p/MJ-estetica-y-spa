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
import { useTranslations } from "@/i18n/ui";

const testimonials = [
  {
    name: "Daniela",
    service: "",
    rating: 5,
    text_es: "Precioso, muy acojedor, justo lo que uno espera, de verdad fue muy bonita la atención, el lugar y lo que pude ver, los aromas que utilizan también.",
    text_en: "Beautiful, very cozy, exactly what one expects, it truly was a very nice experience, the place, and what I could see, the aromas they use too.",
  },
  {
    name: "María Lourdes",
    service: "",
    rating: 5,
    text_es: "Agradecer primero la atención y contarte que me he sentido muy bien con el tratamiento, he sentido cambios muy importantes en mi cuerpo y eso me motiva mucho a seguir trabajando para lograr mi meta!!",
    text_en: "First, thank you for the attention and tell you that I have felt very well with the treatment, I have felt very important changes in my body and that motivates me a lot to continue working to achieve my goal!!",
  },
  {
    name: "Ana Paula",
    service: "",
    rating: 5,
    text_es: "Estoy muy contenta por el trato que he recibido, siempre atentas, y porque desde las primeras semanas se ven resultados. Si hay buena alimentación, hidratación y ser estable con el tratamiento rápido se ven cambios.",
    text_en: "I am very happy with the treatment I have received, always attentive, and because from the first weeks results are seen. If there is good nutrition, hydration, and being stable with the treatment, changes are seen quickly.",
  },
  {
    name: "Carlos Brenes",
    service: "",
    rating: 5,
    text_es: "Desde que empecé con MJ estética he sentido como mi autoestima ha crecido, en un mes rebajé varios centímetros en mi abdomen y papada. La atención del lugar lo hace a uno sentirse seguro. Los resultados en poco tiempo me hacen sentir agradecido. Gracias.",
    text_en: "Since I started with MJ aesthetics, I have felt how my self-esteem has grown; in one month, I lost several centimeters in my abdomen and double chin. The attention at the place makes one feel safe. The results in a short time make me feel grateful. Thanks.",
  },
  {
    name: "Laura Hernández González",
    service: "",
    rating: 5,
    text_es: "Esos rollitos tan molestos que no podía quitar por más gimnasio, los logré eliminar gracias al tratamiento en MJ estética. Sin lugar a dudas un lugar para chinearte y de paso verte mejor.",
    text_en: "Those annoying rolls that I couldn't get rid of no matter how much gym I did, I managed to eliminate them thanks to the treatment at MJ aesthetics. Without a doubt, a place to pamper yourself and look better in the process.",
  },
  {
    name: "Kattya Brenes",
    service: "",
    rating: 5,
    text_es: "Es un privilegio formar parte de la Familia MJ. Agradezco infinitamente por abrirme las puertas para ser atendida por un equipo de personas profesionales y capacitadas. Me siento muy afortunada de recibir sus servicios. Muchas gracias y muchos éxitos.",
    text_en: "It is a privilege to be part of the MJ Family. I infinitely thank you for opening the doors for me to be treated by a team of professional and trained people. I feel very fortunate to receive your services. Thank you very much and many successes.",
  },
  {
    name: "Darril Ordóñez Ramírez",
    service: "",
    rating: 5,
    text_es: "Me ha ayudado mucho con la grasa localizada y de verdad es un éxito 🙌",
    text_en: "It has helped me a lot with localized fat and it really is a success 🙌",
  },
  {
    name: "Yuleidy Vargas",
    service: "",
    rating: 5,
    text_es: "Recomendado, he visto resultados en menos de un mes. 🙌",
    text_en: "Recommended, I have seen results in less than a month. 🙌",
  },
  {
    name: "Eduardo Andrés Loaiza Mata",
    service: "",
    rating: 5,
    text_es: "MJ Estética me ha brindado mucho apoyo para bajar de peso. Además la atención ha sido genial y muy interesados en ayudar a que uno pueda lo más pronto bajar de peso.",
    text_en: "MJ Aesthetics has provided me with a lot of support to lose weight. Also, the attention has been great and very interested in helping one lose weight as soon as possible.",
  },
  {
    name: "Johana Núñez Campos",
    service: "",
    rating: 5,
    text_es: "Mis sesiones han sido de gran ayuda para mí, ya he visto mucho el cambio en mi físico desde que inicié. Los recomiendo a ojos cerrados.",
    text_en: "My sessions have been a great help to me; I have already seen a lot of change in my physical appearance since I started. I recommend them blindly.",
  },
  {
    name: "Andrea Salas Portuguez",
    service: "",
    rating: 5,
    text_es: "La atención excelente tanto de Adri como de María, los servicios de primera calidad, mucho orden, puntualidad y precios muy asequibles.",
    text_en: "Excellent attention from both Adri and María, top-quality services, a lot of order, punctuality, and very affordable prices.",
  },
  {
    name: "Wendy Rodríguez Mora",
    service: "",
    rating: 5,
    text_es: "Una experiencia muy agradable. Aún sigo en el proceso. Me siento muy bien y la atención al 100%.",
    text_en: "A very pleasant experience. I am still in the process. I feel very good and the attention is 100%.",
  },
  {
    name: "Marlene Fernández Mora",
    service: "",
    rating: 5,
    text_es: "El servicio brindado y la atención son excelentes, en particular el profesionalismo que demuestran. Los tratamientos son excelentes complementados con una buena alimentación y ejercicio se notan los cambios. Sí los recomendaría a ojos cerrados.",
    text_en: "The service provided and the attention are excellent, particularly the professionalism they demonstrate. The treatments are excellent; complemented with a good diet and exercise, the changes are noticeable. Yes, I would recommend them blindly.",
  },
  {
    name: "Nidia Cervantes Fonseca",
    service: "",
    rating: 5,
    text_es: "Me dio mucho gusto y mucha confianza los servicios brindados, las muchachas muy bella gente y atentas. La seguridad de todos los procedimientos fue muy buena.",
    text_en: "I was very pleased and felt a lot of confidence in the services provided; the girls are very beautiful people and attentive. The safety of all procedures was very good.",
  },
  {
    name: "Vanessa Alfaro Cervantes",
    service: "",
    rating: 5,
    text_es: "Excelente servicio y profesionalismo.",
    text_en: "Excellent service and professionalism.",
  },
  {
    name: "Catalina Aguilar Madriz",
    service: "",
    rating: 5,
    text_es: "Me he realizado varios tratamientos con MJ teniendo súper buenos resultados, por eso sigo comprando paquetes y recomendando a mis amig@s a que también vayan.",
    text_en: "I have had several treatments with MJ with super good results, which is why I keep buying packages and recommending to my friends that they go too.",
  },
  {
    name: "Yorleny Araya Vega",
    service: "",
    rating: 5,
    text_es: "Mejoró mi rostro en hidratación y mi abdomen.",
    text_en: "It improved my face in hydration and my abdomen.",
  },
  {
    name: "Irlanda Jiménez Loaiza",
    service: "",
    rating: 5,
    text_es: "La atención muy buena, los procedimientos excelentes, lo recomiendo.",
    text_en: "The attention is very good, the procedures excellent, I recommend it.",
  },
  {
    name: "María Fernanda Vargas Calvo",
    service: "",
    rating: 5,
    text_es: "Sí me ha funcionado los tratamientos de Carbo y Mesoterapia.",
    text_en: "The Carbo and Mesotherapy treatments have worked for me.",
  },
  {
    name: "Eylin Garro Espinoza",
    service: "",
    rating: 5,
    text_es: "He asistido únicamente a dos sesiones de limpieza profunda, y hasta el momento el trato que he recibido ha sido bueno y en cuanto al tratamiento realizado ha sido satisfactorio.",
    text_en: "I have only attended two deep cleaning sessions, and so far the treatment I have received has been good and regarding the treatment performed it has been satisfactory.",
  },
  {
    name: "Marianela Sánchez Quesada",
    service: "",
    rating: 5,
    text_es: "Excelente atención.",
    text_en: "Excellent attention.",
  },
  {
    name: "M. Ángela Picado Méndez",
    service: "",
    rating: 5,
    text_es: "Excelente la atención y los paquetes promocionales.",
    text_en: "Excellent attention and promotional packages.",
  },
  {
    name: "Felicia Salazar Salazar",
    service: "",
    rating: 5,
    text_es: "Muy bueno, me ha encantado lo que llevo.",
    text_en: "Very good, I have loved what I've had so far.",
  },
  {
    name: "Mireya Jiménez Aguilar",
    service: "",
    rating: 5,
    text_es: "Brinda una buena atención al servicio para los clientes.",
    text_en: "Provides good customer service for clients.",
  },
  {
    name: "Xinia Aguilar Martínez",
    service: "",
    rating: 5,
    text_es: "Excelente, se ven los resultados, la atención es muy buena, no tengo queja, solo felicitaciones.",
    text_en: "Excellent, the results are seen, the attention is very good, I have no complaint, only congratulations.",
  },
  {
    name: "Karla Méndez Gutiérrez",
    service: "",
    rating: 5,
    text_es: "Súper feliz con los resultados.",
    text_en: "Super happy with the results.",
  },
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

function Testimonios({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const t_hook = useTranslations(lang);
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title={lang === 'es' ? "Testimonios de Clientes" : "Client Testimonials"}
        description={lang === 'es' ? "Lee las opiniones y testimonios reales de clientes de MJ Fisio Estética y Spa en Turrialba, Costa Rica. Más de 2335 clientes satisfechos con valoración 4.9/5." : "Read the opinions and real testimonials of MJ Fisio Estética & Spa clients in Turrialba, Costa Rica. More than 2335 satisfied clients with a 4.9/5 rating."}
        canonical={lang === 'es' ? "/testimonios" : "/en/testimonials"}
        lang={lang}
      />
      <Navbar lang={lang} alternateLink={lang === 'es' ? '/en/testimonials' : '/testimonios'} />

      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="flex justify-center mb-6">
            <Breadcrumb items={[{ label: t_hook('nav.testimonios') }]} />
          </div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium tracking-widest uppercase mb-6">
              <Star className="w-4 h-4 fill-primary" />
              {t_hook('testimonials.hero.tagline')}
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              {t_hook('testimonials.hero.title')}
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              {t_hook('testimonials.hero.desc')}
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
              {t_hook('testimonials.cases.tagline')}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-3">
              {t_hook('testimonials.cases.title')}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              {t_hook('testimonials.cases.desc')}
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
                  "{lang === 'es' ? t.text_es : t.text_en}"
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
            {t_hook('testimonials.cta.title')}
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            {t_hook('testimonials.cta.desc')}
          </p>
          <a
            id="cta-testimonios-reserva"
            href="https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-8 py-4 text-base font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/30"
          >
            {t_hook('testimonials.cta.button')}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer lang={lang} />
      <FloatingWhatsApp />
    </div>
  );
}

export default withAppProviders(Testimonios);
