import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, ArrowRight, Star, MapPin, Phone, Clock } from "lucide-react";
import es from "@/i18n/locales/es/nutricion.json";
import en from "@/i18n/locales/en/nutricion.json";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as any } },
};

interface Props {
  waLink: string;
  lang?: "es" | "en";
}

export function NutricionServiceContent({ waLink, lang = "es" }: Props) {
  const content = lang === "es" ? es : en;

  return (
    <div className="bg-white">
      {/* ── PROBLEM / AGITATION ──────────────────────── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              {content.problem.title}
            </h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
              <p>{content.problem.p1}</p>
              <p className="font-bold text-stone-900">{content.problem.p2}</p>
              <p>{content.problem.p3}</p>
              <p>{content.problem.p4}</p>
              <p>{content.problem.p5}</p>
              <p className="italic font-medium text-primary">{content.problem.closing}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOCUS SECTIONS ───────────────────────────── */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6 leading-tight">
                {content.focus.title}
              </h2>
              <p className="text-stone-600 mb-8">{content.focus.desc}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.focus.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-stone-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-stone-500 text-sm italic">{content.focus.note}</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-50 p-8 border border-stone-200">
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-8">{content.focus.includesTitle}</h3>
              <div className="space-y-8">
                {content.focus.includes.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 mb-1">{item.t}</h4>
                      <p className="text-stone-500 text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WEIGHT LOSS / COMPOSITION ────────────────── */}
      <section className="py-20 bg-[#071e2e] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight text-white">
                {content.composition.title}
              </h2>
              <p className="text-white/70 mb-8">{content.composition.desc}</p>
              <div className="grid grid-cols-1 gap-3">
                {content.composition.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-white/50 italic">{content.composition.note}</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/5 border border-white/10 p-10 backdrop-blur-sm text-center">
              <Star className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-serif font-bold mb-4 text-white">{content.composition.ctaTitle}</h3>
              <p className="text-white/60 mb-8 text-sm leading-relaxed">{content.composition.ctaDesc}</p>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-white text-xs font-bold tracking-widest uppercase px-8 py-4 hover:bg-white hover:text-stone-900 transition-all">
                {content.composition.cta} <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS GRID ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-3">{content.benefits.label}</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">{content.benefits.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.benefits.items.map((b, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-50 p-8 border border-stone-100 hover:border-primary/20 transition-colors">
                <h4 className="font-serif font-bold text-xl text-stone-900 mb-3">{b.t}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{b.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ──────────────────────────────── */}
      <section className="py-20 bg-white text-stone-900 border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">{content.methodology.label}</p>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">{content.methodology.title}</h2>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-100 border border-stone-100">
            {content.methodology.steps.map((step, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-10">
                <span className="text-primary text-xs font-bold tracking-widest uppercase block mb-6">{step.s}</span>
                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">{step.t}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────── */}
      <section className="py-24 bg-stone-50 border-y border-stone-200">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6">{content.testimonials.title}</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">{content.testimonials.desc}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.testimonials.items.map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-10 shadow-sm border border-stone-100">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-stone-600 italic mb-8 leading-relaxed">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center font-bold text-stone-400">
                    {item.author[0]}
                  </div>
                  <div>
                    <p className="text-stone-900 font-bold text-sm uppercase tracking-wider">{item.author}</p>
                    <p className="text-stone-400 text-[10px] uppercase">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4 leading-tight">
              {content.faqs.title}
            </h2>
          </motion.div>
          <div className="space-y-10">
            {content.faqs.items.map((faq, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={faqUp}>
                <h4 className="text-lg font-bold text-stone-900 mb-3">{faq.q}</h4>
                <p className="text-stone-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL INFO / CTA ─────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">{content.location.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {content.location.items.map((item, i) => {
                  const icons = [MapPin, MapPin, Clock, Phone, CheckCircle2, Star];
                  const Icon = icons[i];
                  return (
                    <div key={i} className="flex items-center gap-3 text-stone-700">
                      <Icon className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#071e2e] p-10 text-white text-center">
              <h2 className="text-3xl font-serif font-bold mb-6 leading-tight text-white">{content.finalCta.title}</h2>
              <p className="text-white/70 mb-10 leading-relaxed">
                {content.finalCta.desc}
              </p>
              <div className="flex flex-col gap-4 max-w-sm mx-auto">
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-primary text-white text-sm font-bold tracking-[0.15em] uppercase px-8 py-4 hover:bg-white hover:text-stone-900 transition-all group">
                  <MessageCircle className="w-4 h-4" />
                  {content.finalCta.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-primary font-bold text-xs uppercase tracking-widest mt-2">{content.finalCta.note}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
const faqUp = fadeUp;
