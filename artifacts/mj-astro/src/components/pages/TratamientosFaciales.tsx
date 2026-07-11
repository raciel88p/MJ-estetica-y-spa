import { withAppProviders } from "@/components/ReactAppWrapper";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, Award, Clock4 } from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SEO } from "@/components/SEO";
import { Breadcrumb } from "@/components/Breadcrumb";
import { tratamientosFacialesLinks, servicePages } from "@/data/services";
import { StatsBar } from "@/components/StatsBar";
import { useTranslations } from "@/i18n/ui";

const WA = "https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

function TratamientosFaciales({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const t = useTranslations(lang);

  const highlights = [
    { n: "7+", label: t('faciales.hero.stat1') },
    { n: "100%", label: t('faciales.hero.stat2') },
    { n: lang === 'es' ? "Alta" : "High", label: t('faciales.hero.stat3') },
  ];
  const services = tratamientosFacialesLinks[lang].map((link) => {
    const slug = link.href.replace("/servicios/", "").replace("/en/services/", "");
    const data = servicePages.find((s) => s[lang].slug === slug);
    return { ...link, slug, tagline: data?.tagline ?? "", heroDescription: data?.heroDescription ?? "" };
  });

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={lang === 'es' ? "Tratamientos Faciales" : "Facial Treatments"}
        description={lang === 'es' ? "Tratamientos faciales en MJ Fisio Estética y Spa: Hollywood Peel en Turrialba, eliminación de manchas, radiofrecuencia, peeling químico, terapias faciales y más en Turrialba, Costa Rica." : "Facial treatments at MJ Fisio Estética & Spa: Hollywood Peel, spot removal, radiofrequency, chemical peel, facial therapies, and more in Turrialba, Costa Rica."}
        canonical={lang === 'es' ? "/servicios/faciales" : "/en/services/facials"}
        lang={lang}
      />
      <Navbar lang={lang} alternateLink={lang === 'es' ? '/en/services/facials' : '/servicios/faciales'} />
      <FloatingWhatsApp />

      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-[#071e2e] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/hero-bg.webp)` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <Breadcrumb
            items={[{ label: t('faciales.hero.title') }]}
            variant="dark"
          />
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mt-8 mb-4">
            {t('faciales.hero.tagline')}
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
            {t('faciales.hero.title')}<br />
            <span className="italic font-light text-white/50">{t('faciales.hero.title_italic')}</span>
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-xl">
            {t('faciales.hero.desc')}
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

      <StatsBar lang={lang} />

      {/* Intro Banner */}
      <section className="py-5 bg-primary">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white text-center sm:text-left text-sm font-medium">
            {t('faciales.banner.desc')}
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/60 px-6 py-2.5 hover:bg-white hover:text-primary transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            {t('corporales.banner.cta')}
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
            <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">{t('corporales.services.tagline')}</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900">
              {t('faciales.services.title')}
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
                <a href={service.href}>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary border-b border-primary/30 pb-0.5 hover:border-primary transition-colors cursor-pointer">
                    {t('service.related.view')} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>
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
              { icon: <ShieldCheck className="w-6 h-6 text-primary" />, title: t('faciales.trust.t1'), desc: t('faciales.trust.d1') },
              { icon: <Award className="w-6 h-6 text-primary" />, title: t('faciales.trust.t2'), desc: t('faciales.trust.d2') },
              { icon: <Clock4 className="w-6 h-6 text-primary" />, title: t('faciales.trust.t3'), desc: t('faciales.trust.d3') },
            ].map((t_item) => (
              <div key={t_item.title} className="flex gap-4">
                <div className="shrink-0 mt-0.5">{t_item.icon}</div>
                <div>
                  <p className="font-serif font-bold text-stone-900 mb-1">{t_item.title}</p>
                  <p className="text-white/65 text-sm leading-relaxed">{t_item.desc}</p>
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
              {t('faciales.testimonial.text')}
            </p>
            <footer className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">A</div>
              <div>
                <p className="text-stone-900 text-sm font-semibold">{t('faciales.testimonial.author')}</p>
                <p className="text-white/75 text-xs">{t('corporales.testimonial.role')}</p>
              </div>
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#071e2e]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">{t('corporales.cta.tagline')}</p>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              {t('faciales.cta.title')}<br />
              <span className="italic font-light text-white/50">{t('faciales.cta.title_italic')}</span>
            </h2>
            <p className="text-white/75 text-sm mb-10 max-w-md mx-auto">
              {t('faciales.cta.desc')}
            </p>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white text-sm font-bold tracking-[0.15em] uppercase px-10 py-4 hover:bg-primary/90 transition-all group"
            >
              <MessageCircle className="w-4 h-4" />
              {t('corporales.cta.button')}
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}

export default withAppProviders(TratamientosFaciales);
