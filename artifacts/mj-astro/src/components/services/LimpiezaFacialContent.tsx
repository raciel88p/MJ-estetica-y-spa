import { motion } from "framer-motion";
import {
  MessageCircle,
  Star,
  Quote,
  Clock,
} from "lucide-react";
import type { ServicePageData } from "@/data/services";
import es from "@/i18n/locales/es/limpieza-facial.json";
import en from "@/i18n/locales/en/limpieza-facial.json";

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

export function LimpiezaFacialContent({ service, waLink, lang = "es" }: Props) {
  const content = lang === "es" ? es : en;
  // Use the provided waLink or fallback to a default one
  const limpiezaWaLink = waLink || `https://wa.me/50686907757?text=${encodeURIComponent(content.waMessages.general)}`;

  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      {/* 1. Intro Section (Post-Janeth) */}
      <section className="relative py-20 bg-white text-stone-800">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeUp} className="space-y-6">
              <div className="text-lg text-stone-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: service.heroDescription }} />

              <div className="space-y-3">
                {service.benefits.slice(0, 5).map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-primary text-lg">✨</span>
                    <span className="text-stone-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <p className="text-xl font-serif font-bold text-stone-900 mb-6">{content.intro.title}</p>
                <div className="space-y-4">
                  <a
                    href={limpiezaWaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-primary font-bold hover:translate-x-2 transition-transform cursor-pointer"
                  >
                    <span className="text-xl">👉</span>
                    <span className="border-b border-primary/30 pb-0.5">{content.intro.cta}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. What is it? */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-10"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">{content.whatIs.title}</h2>
            <p className="text-xl text-stone-200 leading-relaxed font-light">
              {content.whatIs.desc1}
            </p>
            <p className="text-lg text-stone-300">
              {content.whatIs.desc2}
            </p>

            <div className="pt-8">
              <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-8">{content.whatIs.focus}</p>
              <div className="flex flex-wrap justify-center gap-6">
                {content.whatIs.focusItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-none">
                    <span className="text-green-400">✅</span>
                    <span className="text-sm font-medium tracking-wide uppercase text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-primary font-serif italic text-2xl pt-10 border-t border-white/5">
              "{content.whatIs.quote}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Improvements & Why */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-10"
          >
            <motion.h3 variants={fadeUp} className="text-3xl font-serif font-bold text-stone-900">
              {content.improvements.title}
            </motion.h3>
            <motion.p variants={fadeUp} className="text-stone-600">
              {content.improvements.desc}
            </motion.p>

            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.slice(5).map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-primary">✨</span>
                  <span className="text-stone-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeUp} className="text-stone-500 text-sm italic pt-6 border-t border-stone-100">
              {content.improvements.note}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-[#071e2e] p-10 md:p-16 text-white space-y-8"
          >
            <motion.h3 variants={fadeUp} className="text-3xl font-serif font-bold leading-tight text-white">
              {content.why.title}
            </motion.h3>
            <motion.p variants={fadeUp} className="text-stone-100 leading-relaxed">
              {content.why.p1}
            </motion.p>
            <motion.p variants={fadeUp} className="text-stone-200 text-sm">
              {content.why.p2}
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-4 text-white">
              <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">{content.why.resultLabel}</p>
              {content.why.results.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-red-400">❌</span>
                  <span className="text-stone-200">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeUp} className="pt-6 font-serif italic text-xl border-t border-white/10 text-primary">
              {content.why.closing}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 4. Real Benefits */}
      <section className="bg-white py-10">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-serif font-bold text-stone-900">{content.realBenefits.title}</h2>
              <p className="text-stone-600">{content.realBenefits.desc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {content.realBenefits.items.map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-4 border-b border-stone-50">
                  <span className="text-green-500 font-bold">✅</span>
                  <span className="text-stone-800 font-medium uppercase tracking-wide text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-stone-50 p-10 text-center space-y-4 border-l-4 border-primary">
              <p className="text-stone-500 italic">"{content.realBenefits.quote}"</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Types of Service */}
      <section className="bg-stone-50 py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-16 text-center uppercase tracking-widest">{content.types.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.items.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 flex flex-col h-full border border-stone-100 hover:shadow-2xl transition-all"
              >
                {type.badge && (
                   <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-4 w-fit">
                    {type.badge}
                   </span>
                )}
                <h4 className="text-xl font-serif font-bold text-stone-900 mb-4">{type.title}</h4>
                <p className="text-stone-600 text-sm mb-8 flex-grow leading-relaxed">{type.description}</p>

                {type.features && (
                  <div className="space-y-3 mb-10">
                    {type.features.map((feat, j) => (
                      <div key={j} className="flex items-center gap-2 text-stone-800 text-sm">
                        <span className="text-primary font-bold">✔</span>
                        {feat}
                      </div>
                    ))}
                  </div>
                )}

                <a
                  href={type.link || limpiezaWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group"
                >
                  <span className="text-xl group-hover:translate-x-1 transition-transform">👉</span>
                  <span className="border-b-2 border-primary/20 pb-0.5 group-hover:border-primary transition-colors">
                    {type.linkText || (lang === "es" ? "Escríbenos por WhatsApp" : "Write us on WhatsApp")}
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How it works */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="bg-[#040f19] text-white p-10 md:p-20 relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-12 text-white">{content.howItWorks.title}</h2>
              <div className="space-y-12">
                {content.howItWorks.steps.map((item, i) => (
                  <div key={i} className="flex gap-6 border-l border-white/10 pl-8 relative">
                    <div className="absolute -left-1 top-0 w-2 h-2 rounded-full bg-primary" />
                    <div>
                      <span className="text-primary font-serif italic text-xl mb-1 block">{item.step}</span>
                      <h4 className="text-xl font-bold mb-2 uppercase tracking-wide text-white">{item.title}</h4>
                      <p className="text-stone-300 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-10 self-center border border-white/10 space-y-10">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-primary">
                  <Clock className="w-8 h-8" />
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-[10px]">{content.howItWorks.durationLabel}</h4>
                    <p className="text-2xl font-serif text-white">{content.howItWorks.durationValue}</p>
                  </div>
                </div>
                <div className="space-y-4 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="text-primary text-lg">✨</span>
                    <span className="text-stone-200 text-sm">{content.howItWorks.feature1}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-400 text-lg">☀</span>
                    <span className="text-stone-200 text-sm">{content.howItWorks.feature2}</span>
                  </div>
                </div>
              </div>
              <a
                href={limpiezaWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-5 bg-primary text-white text-center font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-primary transition-all duration-300"
              >
                {content.howItWorks.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. For Whom */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-900 uppercase tracking-widest mb-4">{content.forWhom.title}</h2>
            <p className="text-stone-500">{content.forWhom.desc}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-stone-800">
            {content.forWhom.items.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-5 border border-stone-200">
                <span className="text-primary text-xl">✨</span>
                <span className="text-stone-800 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Before & After */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase">{content.beforeAfter.title}</h2>
            <p className="text-stone-600">{content.beforeAfter.desc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.beforeAfter.items.map((item, i) => (
              <div key={i} className="flex items-center gap-3 justify-center">
                <span className="text-primary font-bold">✔</span>
                <span className="text-stone-800 font-bold uppercase tracking-widest text-[10px]">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-stone-400 text-xs italic">{content.beforeAfter.note}</p>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="bg-[#071e2e] py-24 text-white relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-serif font-bold mb-16 text-center text-white">{content.testimonials.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.testimonials.items.map((text, i) => (
              <div key={i} className="p-10 bg-white/5 border border-white/10 relative">
                <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/20" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-stone-100 italic leading-relaxed">“{text}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQs */}
      <section className="py-24 text-stone-800">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-16 text-center">{content.faqs.title}</h2>
          <div className="space-y-10">
            {service.faq?.map((faq, i) => (
              <div key={i} className="space-y-3 pb-8 border-b border-stone-100">
                <h4 className="text-lg font-bold text-stone-900">{faq.question}</h4>
                <p className="text-stone-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Programs & Experience */}
      <section className="bg-primary/5 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-3xl font-serif font-bold text-stone-900 uppercase tracking-widest">{content.programs.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {content.programs.items.map((item, i) => (
              <div key={i} className="flex items-center gap-3 justify-center bg-white p-6 border border-primary/20">
                <span className="text-primary text-lg">✨</span>
                <span className="text-stone-800 text-sm font-bold uppercase tracking-tight">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-stone-500 font-medium">{content.programs.promoNote}</p>
        </div>
      </section>

      {/* 12. Why Choose MJ? */}
      <section className="py-24 border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase">{content.whyMJ.title}</h2>
          <p className="text-stone-600 text-lg">{content.whyMJ.desc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {content.whyMJ.items.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-stone-50 border border-stone-100">
                <span className="text-primary font-bold">✅</span>
                <span className="text-stone-800 font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-2xl font-serif font-bold text-stone-900 pt-10">
            {content.whyMJ.closing.split('. ')[0]}.<br />
            <span className="italic text-primary">{content.whyMJ.closing.split('. ')[1]}</span>
          </p>
        </div>
      </section>

      {/* 13. Location Block */}
      <section className="bg-white py-12">
        <div className="max-w-xl mx-auto px-6 text-center space-y-8 border-y border-stone-100 py-16">
          <h2 className="text-3xl font-serif font-bold text-stone-900">{content.location.title}</h2>
          <div className="space-y-4">
            {content.location.items.map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-3 text-stone-700">
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium uppercase tracking-widest text-xs">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Lead Magnet & Final CTA */}
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-24">
        <div className="bg-primary/5 border-2 border-dashed border-primary/30 p-10 md:p-16 text-center space-y-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-stone-900 uppercase">{content.finalCta.title}</h3>
            <p className="text-stone-600 leading-relaxed max-w-2xl mx-auto">
              {content.finalCta.desc}
            </p>
            <div className="flex flex-col items-center gap-6 pt-6">
              <a
                href={limpiezaWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary font-bold hover:scale-105 transition-transform"
              >
                <span className="text-2xl font-serif">✨</span>
                <span className="border-b-2 border-primary/20 pb-0.5">{content.finalCta.waLinkText}</span>
              </a>
            </div>
          </div>

          <div className="pt-16 border-t border-primary/20 space-y-8">
            <h4 className="text-xl font-serif font-bold text-stone-900 italic">
              {content.leadMagnet.title}
            </h4>
            <div className="space-y-6">
              <p className="text-stone-600 text-sm">{content.leadMagnet.wordLabel}</p>
              <div className="text-5xl md:text-6xl font-serif font-bold text-primary tracking-tighter">
                {content.leadMagnet.word}
              </div>
              <p className="text-stone-600 text-sm max-w-md mx-auto">
                {content.leadMagnet.desc}
              </p>
              <a
                href={`https://wa.me/50686907757?text=${content.leadMagnet.word}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-12 py-5 bg-[#25D366] text-white font-bold rounded-full hover:scale-105 transition-transform shadow-xl shadow-green-200"
              >
                <MessageCircle className="w-6 h-6" />
                {content.leadMagnet.cta}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
