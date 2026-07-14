import { motion } from "framer-motion";
import {
  Star,
  Clock,
  MapPin,
  Smartphone,
  Calendar,
} from "lucide-react";
import type { ServicePageData } from "@/data/services";
import es from "@/i18n/locales/es/masaje-relajante.json";
import en from "@/i18n/locales/en/masaje-relajante.json";

interface Props {
  service: ServicePageData;
  waLink: string;
  lang?: "es" | "en";
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as any },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function MasajeRelajanteContent({ service, waLink, lang = "es" }: Props) {
  const content = lang === "es" ? es : en;
  const massageWaLink = waLink || `https://wa.me/50686907757?text=${encodeURIComponent(content.waMessages.general)}`;

  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      {/* 1. Intro Section (Post-Professional) */}
      <section className="relative py-20 bg-white text-stone-800">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div variants={fadeUp} className="space-y-8">
              <div className="bg-stone-50 p-8 border-l-4 border-primary space-y-6">
                <p className="text-lg text-stone-700 leading-relaxed italic">
                  "{content.intro.quote}"
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {content.intro.items.map((item, i) => {
                    const icons = [<MapPin className="w-4 h-4" />, <Smartphone className="w-4 h-4" />, <Calendar className="w-4 h-4" />, <Star className="w-4 h-4" />];
                    return (
                    <div key={i} className="flex items-center gap-3 text-stone-600">
                      <span className="text-primary">{icons[i]}</span>
                      <span className="text-sm font-bold uppercase tracking-widest">{item.text}</span>
                    </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-primary/5 border-2 border-dashed border-primary/30 p-8 text-center space-y-6">
                <h3 className="text-xl font-serif font-bold text-stone-900 uppercase tracking-tighter">
                  {content.intro.guideTitle}
                </h3>
                <p className="text-stone-600 text-sm">{content.intro.guideDesc}</p>
                <a
                  href={massageWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:scale-105 transition-transform"
                >
                  <span className="text-xl">👉</span>
                  <span className="border-b-2 border-primary/20 pb-0.5 uppercase tracking-widest text-xs">{content.intro.guideCta}</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Why Choose Us? */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-12"
          >
            <div className="space-y-4 text-center">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">{content.whyUs.title}</h2>
              <div className="h-1 w-20 bg-primary mx-auto" />
            </div>

            <p className="text-xl text-stone-300 leading-relaxed font-light text-center">
              {content.whyUs.desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pt-8">
              <div className="space-y-4">
                <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">{content.whyUs.consequenceLabel}</p>
                {content.whyUs.consequences.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-red-400">✔</span>
                    <span className="text-stone-200 text-sm tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white/5 p-8 border border-white/10 flex flex-col justify-center text-center space-y-6">
                <p className="text-2xl font-serif text-primary italic">
                  "{content.whyUs.quote}"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-widest">{content.services.title}</h2>
            <div className="h-1 w-20 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.items.map((item, i) => {
              const itemTitle = item.title.toLowerCase();
              let benefits: string[] = [];

              if (itemTitle.includes("relajante") || itemTitle.includes("relaxing")) {
                benefits = (content.services.benefitGroups as any).relajante || (content.services.benefitGroups as any).relaxing || [];
              } else if (itemTitle.includes("descontracturante") || itemTitle.includes("deep-tissue")) {
                benefits = (content.services.benefitGroups as any).descontracturante || (content.services.benefitGroups as any)["deep-tissue"] || [];
              } else {
                benefits = content.services.benefitGroups.default || [];
              }

              return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 flex flex-col h-full border border-stone-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <h4 className="text-2xl font-serif font-bold text-stone-900 mb-4">{item.title} {content.services.locationSuffix}</h4>
                <p className="text-stone-600 text-sm mb-8 leading-relaxed italic">{item.description}</p>

                {item.title !== "Aromaterapia" && item.title !== "Aromatherapy" && item.title !== "Spa para Parejas" && item.title !== "Pre-Wedding Couples Spa" && (
                   <div className="space-y-3 mb-10 border-t border-stone-50 pt-6">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4">{content.services.benefitsLabel}</p>
                    {benefits.map((feat, j) => (
                      <div key={j} className="flex items-center gap-2 text-stone-800 text-xs font-bold uppercase tracking-tight">
                        <span className="text-green-500">✅</span>
                        {feat}
                      </div>
                    ))}
                  </div>
                )}

                {(item.title === "Aromaterapia" || item.title === "Aromatherapy") && (
                   <p className="text-stone-500 text-xs mb-10 flex-grow">{content.services.aromaNote}</p>
                )}
                {(item.title === "Spa para Parejas" || item.title === "Pre-Wedding Couples Spa") && (
                   <p className="text-stone-500 text-xs mb-10 flex-grow">{content.services.spaParejaNote}</p>
                )}

                <a
                  href={massageWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group"
                >
                  <span className="text-xl group-hover:translate-x-1 transition-transform">👉</span>
                  <span className="border-b-2 border-primary/20 pb-0.5 group-hover:border-primary transition-colors">
                    {content.services.cta}
                  </span>
                </a>
              </motion.div>
            )})}
          </div>
        </div>
      </section>

      {/* 4. Regular Benefits */}
      <section className="bg-stone-50 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-16"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase">{content.regularBenefits.title}</h2>
              <p className="text-stone-600">{content.regularBenefits.desc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {content.regularBenefits.items.map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-5 border-b border-white">
                  <span className="text-green-500 font-bold text-xl">✅</span>
                  <span className="text-stone-800 font-bold uppercase tracking-widest text-[10px]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Difference Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10">
        <div className="bg-[#040f19] text-white p-10 md:p-20 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold text-white uppercase tracking-tighter">{content.difference.title}</h2>
              <p className="text-stone-300 leading-relaxed italic">
                "{content.difference.quote}"
              </p>
              <div className="space-y-4 pt-4">
                <p className="text-primary text-xs font-bold tracking-widest uppercase">{content.difference.chooseLabel}</p>
                <div className="grid grid-cols-1 gap-3">
                  {content.difference.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-primary">✔</span>
                      <span className="text-stone-200 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-10 border border-white/10 flex flex-col justify-center space-y-12">
               <div className="space-y-8">
                  <h4 className="text-center text-xs font-bold uppercase tracking-[0.3em] text-primary">{content.difference.opinionsLabel}</h4>
                  {content.difference.opinions.map((text, i) => (
                    <div key={i} className="space-y-2 border-l-2 border-primary/30 pl-6 italic">
                       <p className="text-stone-200 text-sm leading-relaxed">“{text}”</p>
                       <div className="flex gap-1">
                          {[...Array(5)].map((_, j) => <Star key={j} className="w-2.5 h-2.5 fill-primary text-primary" />)}
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="py-24 text-stone-800">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-16 text-center uppercase tracking-widest">{content.faqs.title}</h2>
          <div className="space-y-10">
            {service.faq?.map((faq, i) => (
              <div key={i} className="space-y-3 pb-8 border-b border-stone-100 group">
                <h4 className="text-lg font-bold text-stone-900 group-hover:text-primary transition-colors">{faq.question}</h4>
                <p className="text-stone-600 leading-relaxed text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA & Zones */}
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-24">
        <div className="bg-primary/5 border-2 border-dashed border-primary/30 p-10 md:p-16 text-center space-y-12">
          <div className="space-y-6">
            <h3 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter">{content.finalCta.title}</h3>
            <p className="text-stone-600 leading-relaxed max-w-2xl mx-auto italic">
              {content.finalCta.desc}
            </p>

            <div className="flex flex-col items-center gap-6 pt-8 border-t border-primary/10">
              <div className="space-y-4">
                 {content.finalCta.items.map((item, i) => {
                   const icons = [<MapPin className="w-5 h-5 text-primary" />, <Smartphone className="w-5 h-5 text-primary" />, <Clock className="w-5 h-5 text-primary" />];
                   return (
                    <div key={i} className="flex items-center justify-center gap-3 text-stone-800 font-bold">
                       {icons[i]}
                       <span>{item}</span>
                    </div>
                   );
                 })}
              </div>

              <a
                href={massageWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 px-12 py-6 bg-primary text-white font-bold rounded-none hover:scale-105 transition-transform shadow-2xl shadow-primary/20 uppercase tracking-[0.2em]"
              >
                {content.finalCta.cta}
              </a>
              <p className="text-stone-500 font-bold text-xs uppercase tracking-widest pt-4">{content.finalCta.footer}</p>
            </div>
          </div>

          <div className="pt-16 border-t border-primary/20 space-y-8">
            <h4 className="text-xl font-serif font-bold text-stone-900 uppercase tracking-widest">
              {content.finalCta.zonesTitle}
            </h4>
            <p className="text-stone-600 text-sm">{content.finalCta.zonesDesc}</p>
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              {content.finalCta.zones.map((zone, i) => (
                <span key={i} className="px-4 py-2 bg-white border border-stone-200 text-stone-700 text-xs font-bold rounded-full shadow-sm uppercase tracking-tight">
                  {zone}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
