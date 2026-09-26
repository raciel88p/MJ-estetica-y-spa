import { motion } from "framer-motion";
import {
  MessageCircle,
  Zap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Users,
  Star,
  Quote,
  Heart
} from "lucide-react";
import es from "@/i18n/locales/es/post-op.json";
import en from "@/i18n/locales/en/post-op.json";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as any } },
};

export function PostOpServiceContent({ waLink, lang = "es" }: { waLink: string; lang?: "es" | "en" }) {
  const content = (lang === "es" ? es : en) as any;

  return (
    <div className="bg-white">
      {/* ── SECCIÓN INTRO / HEADER ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6 leading-tight">
              {content.intro?.title}
            </h2>
            <p className="text-xl font-serif text-primary italic mb-6">{content.intro?.tagline}</p>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">{content.intro?.p1}</p>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">{content.intro?.p2}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.intro?.items?.map((item: string, i: number) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-stone-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FRUSTRATION / PAIN POINTS ── */}
      {content.frustration && (
        <section className="py-20 bg-stone-900 text-white">
          <div className="max-w-4xl mx-auto px-6 sm:px-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white leading-tight">
                {content.frustration.title}
              </h2>
              <p className="text-white/60 mb-8 uppercase tracking-widest text-xs font-bold">{content.frustration.intro}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {content.frustration.items?.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 bg-white/5 p-4 border border-white/10">
                    <span className="text-red-400 font-bold shrink-0">❌</span>
                    <span className="text-white/90 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/80 text-base leading-relaxed mb-6">{content.frustration.closing}</p>
              <p className="text-xl font-serif font-bold text-primary italic">{content.frustration.highlight}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── WHAT ARE POST-OP MASSAGES ── */}
      {content.whatIs && (
        <section className="py-20 bg-stone-50">
          <div className="max-w-4xl mx-auto px-6 sm:px-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">{content.whatIs.title}</h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">{content.whatIs.desc}</p>
              <p className="text-stone-500 italic text-sm border-l-2 border-primary pl-4">{content.whatIs.note}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── SECCIÓN BENEFICIOS / VITAL ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">
                {content.vital?.label || content.benefits?.subtitle}
              </p>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight" dangerouslySetInnerHTML={{ __html: content.vital?.title || content.benefits?.title }} />
              <p className="text-stone-600 mb-6">{content.benefits?.intro}</p>
              <ul className="space-y-4 mb-8">
                {(content.vital?.items || content.benefits?.items || []).map((text: string, i: number) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-stone-700 font-medium">{text}</span>
                  </li>
                ))}
              </ul>
              <div>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-stone-900 transition-colors group"
                >
                  <MessageCircle className="w-4 h-4" />
                  {content.vital?.cta || "CHECK AVAILABILITY"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative aspect-square">
              <img
                src="/images/masajes-post-operatorios-bg.webp"
                alt="Tratamiento Post Operatorio"
                className="w-full h-full object-cover rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-8 shadow-xl border border-stone-100 max-w-xs">
                <p className="text-primary font-bold text-4xl mb-2">98%</p>
                <p className="text-stone-500 text-xs font-bold tracking-widest uppercase">{content.vital?.stats || "Satisfaction in recovery"}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHO IS IT RECOMMENDED FOR ── */}
      {content.who && (
        <section className="py-20 bg-stone-50">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">{content.who.title}</h2>
              <p className="text-stone-600 mb-8">{content.who.intro}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {content.who.items?.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-4 border border-stone-200 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-stone-800 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
              {content.who.footer && (
                <p className="text-stone-500 italic text-sm">{content.who.footer}</p>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* ── PROCESO / METHODOLOGY ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center mb-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{content.protocol?.label || "PROCESO"}</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900">{content.protocol?.title || content.methodology?.title}</h2>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-stone-100 border border-stone-100">
            {(content.protocol?.steps || content.methodology?.steps || []).map((step: any, i: number) => (
              <div key={i} className="bg-white p-10 group hover:bg-stone-50 transition-colors">
                <span className="text-primary/30 text-5xl font-serif font-bold block mb-6 group-hover:text-primary/50 transition-colors">{step.num || `0${i+1}`}</span>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">{step.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEAD MAGNET (GUÍA GRATUITA) ── */}
      <section className="py-20 bg-white border-y border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-stone-50 border border-stone-200 rounded-sm p-10 md:p-16 text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8">
                <Star className="w-4 h-4 fill-primary" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">{content.leadMagnet?.label}</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-2 leading-tight" dangerouslySetInnerHTML={{ __html: content.leadMagnet?.title }} />
              {content.leadMagnet?.subtitle && (
                <p className="text-xl font-serif italic text-primary mb-6">{content.leadMagnet.subtitle}</p>
              )}
              <p className="text-stone-500 mb-8 max-w-lg mx-auto leading-relaxed">
                {content.leadMagnet?.desc}
              </p>
              {content.leadMagnet?.items && (
                <div className="bg-white p-6 border border-stone-200 max-w-xl mx-auto mb-8 text-left">
                  <p className="text-xs uppercase tracking-widest text-primary font-bold mb-3">{content.leadMagnet.learnTitle}</p>
                  <ul className="space-y-2">
                    {content.leadMagnet.items.map((it: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-stone-900 text-white px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-primary transition-colors"
              >
                {content.leadMagnet?.cta}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      {content.testimonials && (
        <section className="py-20 bg-stone-50 border-t border-stone-200">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-stone-900">{content.testimonials.title}</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.testimonials.items?.map((item: any, i: number) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-8 border border-stone-200 flex flex-col justify-between shadow-sm">
                  <div>
                    <Quote className="w-8 h-8 text-primary/20 mb-4" />
                    <h4 className="font-serif font-bold text-stone-900 mb-2">{item.title}</h4>
                    <p className="text-stone-600 text-sm italic leading-relaxed">{item.quote}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── POR QUÉ ELEGIR MJ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-16">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{content.whyUs?.label}</p>
              <h2 className="text-4xl font-serif font-bold text-stone-900 leading-tight" dangerouslySetInnerHTML={{ __html: content.whyUs?.title }} />
              {content.whyUs?.intro && (
                <p className="text-stone-500 max-w-xl mx-auto mt-4">{content.whyUs.intro}</p>
              )}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {content.whyUs?.items?.map((item: any, i: number) => {
              const icons = [<ShieldCheck key="1" className="w-10 h-10 text-primary" />, <Zap key="2" className="w-10 h-10 text-primary" />, <Users key="3" className="w-10 h-10 text-primary" />];
              return (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
                <div className="flex justify-center mb-6">{icons[i]}</div>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-20 bg-stone-50 border-t border-stone-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{content.faq?.label}</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 leading-tight">{content.faq?.title}</h2>
          </div>
          <div className="space-y-4">
            {content.faq?.items?.map((faq: any, i: number) => (
              <details key={i} className="group bg-white border border-stone-200 rounded-sm overflow-hidden transition-all duration-300 open:shadow-md">
                <summary className="p-6 cursor-pointer flex justify-between items-center list-none font-serif font-bold text-stone-900 group-hover:text-primary">
                  {faq.q}
                  <span className="text-primary transition-transform duration-300 group-open:rotate-180">↓</span>
                </summary>
                <div className="p-6 pt-0 text-stone-500 text-sm leading-relaxed border-t border-stone-50">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-white/60 text-[10px] font-bold tracking-[0.4em] uppercase mb-6">{content.finalCta?.label}</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight" dangerouslySetInnerHTML={{ __html: content.finalCta?.title }} />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-stone-100 transition-all flex items-center justify-center gap-3 shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                {content.finalCta?.cta1}
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-white/30 text-white px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-white/5 transition-all flex items-center justify-center gap-3"
              >
                {content.finalCta?.cta2}
              </a>
            </div>
            <p className="mt-8 text-white/40 text-[10px] font-bold tracking-widest uppercase">
              {content.finalCta?.footer}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
