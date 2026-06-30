import { withAppProviders } from "@/components/ReactAppWrapper";
import { SEO } from "@/components/SEO";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { motion } from "framer-motion";
import { CheckCircle2, Star, Heart, Award, Users, Sparkles, ArrowRight } from "lucide-react";
import { StatsBar } from "@/components/StatsBar";
import { useTranslations } from "@/i18n/ui";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Nosotros({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const t = useTranslations(lang);

  const values = [
    {
      icon: Heart,
      title: lang === 'es' ? "Vocación de Servicio" : "Service Vocation",
      description: lang === 'es'
        ? "Cada tratamiento está diseñado con dedicación y empatía. Tu bienestar es nuestra mayor motivación y satisfacción."
        : "Each treatment is designed with dedication and empathy. Your well-being is our greatest motivation and satisfaction.",
    },
    {
      icon: Award,
      title: lang === 'es' ? "Excelencia Profesional" : "Professional Excellence",
      description: lang === 'es'
        ? "Nuestro equipo cuenta con formación especializada y se actualiza continuamente para ofrecerte técnicas y tecnologías de vanguardia."
        : "Our team has specialized training and is continuously updated to offer you cutting-edge techniques and technologies.",
    },
    {
      icon: Users,
      title: lang === 'es' ? "Trato Personalizado" : "Personalized Care",
      description: lang === 'es'
        ? "Cada persona es única. Por eso escuchamos, evaluamos y diseñamos un plan a medida para cada cliente."
        : "Each person is unique. That's why we listen, evaluate, and design a custom plan for each client.",
    },
    {
      icon: Sparkles,
      title: lang === 'es' ? "Ambiente de Bienestar" : "Wellness Environment",
      description: lang === 'es'
        ? "Hemos creado un espacio pensado para que desde el momento en que entras, te desconectes del mundo y disfrutes."
        : "We have created a space designed so that from the moment you enter, you disconnect from the world and enjoy.",
    },
  ];

  const team = [
    {
      name: "María Jeanneth",
      role: lang === 'es' ? "Directora & Especialista en Estética" : "Director & Aesthetic Specialist",
      description: lang === 'es'
        ? "Fundadora de MJ Fisio Estética y Spa, con más de 15 años de experiencia en tratamientos estéticos y bienestar. Su pasión por el cuidado personal la llevó a crear un espacio de referencia en Turrialba."
        : "Founder of MJ Fisio Estética & Spa, with more than 15 years of experience in aesthetic treatments and well-being. Her passion for personal care led her to create a reference space in Turrialba.",
      emoji: "👩‍⚕️",
    },
    {
      name: lang === 'es' ? "Equipo de Fisioterapia" : "Physiotherapy Team",
      role: lang === 'es' ? "Fisioterapeutas Certificados" : "Certified Physiotherapists",
      description: lang === 'es'
        ? "Profesionales certificados especializados en técnicas de rehabilitación, masajes terapéuticos y tratamientos corporales. Con experiencia en deporte, lesiones y bienestar general."
        : "Certified professionals specialized in rehabilitation techniques, therapeutic massages, and body treatments. With experience in sports, injuries, and general well-being.",
      emoji: "🏥",
    },
    {
      name: lang === 'es' ? "Equipo Médico Estético" : "Medical Aesthetic Team",
      role: lang === 'es' ? "Médicos y Especialistas" : "Doctors and Specialists",
      description: lang === 'es'
        ? "Médicos especialistas en estética avanzada: botox, hilos tensores, rellenos y trasplante capilar. Comprometidos con resultados naturales y seguros."
        : "Doctors specializing in advanced aesthetics: botox, tensor threads, fillers, and hair transplant. Committed to natural and safe results.",
      emoji: "💉",
    },
    {
      name: lang === 'es' ? "Nutricionista" : "Nutritionist",
      role: lang === 'es' ? "Especialista en Nutrición" : "Nutrition Specialist",
      description: lang === 'es'
        ? "Experta en diseño de planes nutricionales personalizados para objetivos de salud, peso y rendimiento deportivo."
        : "Expert in designing personalized nutritional plans for health, weight, and sports performance goals.",
      emoji: "🥗",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title={lang === 'es' ? "Sobre Nosotros" : "About Us"}
        description={lang === 'es' ? "Conoce la historia de MJ Fisio Estética y Spa. Más de 10 años de experiencia brindando bienestar y tratamientos estéticos de alta calidad en Turrialba." : "Learn about the history of MJ Fisio Estética & Spa. Over 10 years of experience providing wellness and high-quality aesthetic treatments in Turrialba."}
        canonical={lang === 'es' ? "/nosotros" : "/en/nosotros"}
        lang={lang}
      />
      <Navbar lang={lang} alternateLink={lang === 'es' ? '/en/nosotros' : '/nosotros'} />

      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="flex justify-center mb-6">
            <Breadcrumb items={[{ label: t('nav.nosotros') }]} />
          </div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-primary/80 tracking-widest uppercase text-sm font-medium mb-4">{t('about.hero.tagline')}</p>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              {t('about.hero.title')} <span className="italic text-white/85">{t('about.hero.title_italic')}</span>
            </h1>
            <p className="text-lg text-primary/90 max-w-2xl mx-auto leading-relaxed">
              {t('about.hero.desc')}
            </p>
          </motion.div>
        </div>
      </section>

      <StatsBar />

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
                src={`${import.meta.env.BASE_URL}images/about-us.webp`}
                alt={lang === 'es' ? "Equipo de MJ Fisio Estética y Spa en Turrialba" : "MJ Fisio Estética & Spa Team in Turrialba"}
                className="rounded-t-full rounded-b-xl shadow-2xl object-cover w-full h-[550px]"
                loading="lazy"
                decoding="async"
                width={700}
                height={550}
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
                    <p className="font-bold text-2xl text-foreground">10+</p>
                    <p className="text-sm text-muted-foreground">{lang === 'es' ? 'Años de Experiencia' : 'Years of Experience'}</p>
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
              <h2 className="text-primary font-medium tracking-widest uppercase text-sm mb-3">{t('about.history.tagline')}</h2>
              <h3 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
                {t('about.history.title')} <span className="italic text-muted-foreground">{t('about.history.title_italic')}</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5 text-lg">
                {t('about.history.p1')}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                {t('about.history.p2')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  t('about.history.f1'),
                  t('about.history.f2'),
                  t('about.history.f3'),
                  t('about.history.f4'),
                  t('about.history.f5'),
                  t('about.history.f6'),
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
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">{t('about.values.tagline')}</p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">{t('about.values.title')}</h2>
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
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">{t('about.team.tagline')}</p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">{t('about.team.title')}</h2>
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
          <h2 className="text-4xl font-serif text-white mb-4">{t('about.cta.title')}</h2>
          <p className="text-white/80 mb-8 text-lg">
            {t('about.cta.desc')}
          </p>
          <a
            id="cta-nosotros-reserva"
            href="https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-8 py-4 text-base font-semibold hover:bg-primary/90 transition-colors shadow-lg"
          >
            {t('about.cta.button')}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer lang={lang} />
      <FloatingWhatsApp />
    </div>
  );
}

export default withAppProviders(Nosotros);
