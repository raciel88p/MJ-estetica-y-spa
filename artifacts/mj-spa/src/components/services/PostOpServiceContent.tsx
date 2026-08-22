import { motion } from "framer-motion";
import {
  CheckCircle2,
  MessageCircle,
  AlertCircle,
  Target,
  Zap,
  ShieldCheck,
  Clock,
  Star,
  Users,
  Search,
  Check,
  ArrowRight
} from "lucide-react";
import es from "@/i18n/locales/es/post-op.json";
import en from "@/i18n/locales/en/post-op.json";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as any } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

export function PostOpServiceContent({ waLink, lang = "es" }: { waLink: string; lang?: "es" | "en" }) {
  const content = lang === "es" ? es : en;
  return (
    <div className="bg-white">
      {/* ── SECCIÓN 1: SÍNTOMAS (Debajo del profesional) ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-primary" />
              <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">{content.symptoms.label}</p>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight mb-8" dangerouslySetInnerHTML={{ __html: content.symptoms.title }} />
            <p className="text-stone-600 text-lg leading-relaxed mb-12">
              {content.symptoms.desc}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {content.symptoms.items.map((item, i) => {
              const icons = [<AlertCircle className="w-8 h-8 text-primary" />, <Clock className="w-8 h-8 text-primary" />, <Search className="w-8 h-8 text-primary" />];
              return (
              <motion.div key={i} variants={fadeUp} className="p-8 border border-stone-100 bg-stone-50 rounded-sm hover:shadow-sm transition-all">
                <div className="mb-6 flex justify-center">{icons[i]}</div>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 2: BENEFICIOS ── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{content.vital.label}</p>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight" dangerouslySetInnerHTML={{ __html: content.vital.title }} />
              <ul className="space-y-6">
                {content.vital.items.map((text, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-stone-700 font-medium">{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-stone-900 transition-colors group"
                >
                  <MessageCircle className="w-4 h-4" />
                  {content.vital.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative aspect-square"
            >
              <img
                src="/images/masajes-post-operatorios-bg.webp"
                alt="Tratamiento Post Operatorio"
                className="w-full h-full object-cover rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-8 shadow-xl border border-stone-100 max-w-xs">
                <p className="text-primary font-bold text-4xl mb-2">98%</p>
                <p className="text-stone-500 text-xs font-bold tracking-widest uppercase">{content.vital.stats}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 3: PROCESO ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center mb-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{content.protocol.label}</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900">{content.protocol.title}</h2>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-stone-100 border border-stone-100">
            {content.protocol.steps.map((step, i) => (
              <div key={i} className="bg-white p-10 group hover:bg-stone-50 transition-colors">
                <span className="text-primary/30 text-5xl font-serif font-bold block mb-6 group-hover:text-primary/50 transition-colors">{step.num}</span>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">{step.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 4: LEAD MAGNET (GUÍA GRATUITA) - LIGHT THEME ── */}
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
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">{content.leadMagnet.label}</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6 max-w-2xl mx-auto leading-tight" dangerouslySetInnerHTML={{ __html: content.leadMagnet.title }} />
              <p className="text-stone-500 mb-10 max-w-lg mx-auto leading-relaxed">
                {content.leadMagnet.desc}
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-stone-900 text-white px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-primary transition-colors"
              >
                {content.leadMagnet.cta}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 5: POR QUÉ ELEGIR MJ (Debajo del pliego de información) - LIGHT THEME ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-16">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{content.whyUs.label}</p>
              <h2 className="text-4xl font-serif font-bold text-stone-900 leading-tight" dangerouslySetInnerHTML={{ __html: content.whyUs.title }} />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {content.whyUs.items.map((item, i) => {
              const icons = [<ShieldCheck className="w-10 h-10 text-primary" />, <Zap className="w-10 h-10 text-primary" />, <Users className="w-10 h-10 text-primary" />];
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

      {/* ── SECCIÓN 6: FAQs ── */}
      <section className="py-20 bg-stone-50 border-t border-stone-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{content.faq.label}</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 leading-tight">{content.faq.title}</h2>
          </div>
          <div className="space-y-4">
            {content.faq.items.map((faq, i) => (
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

      {/* ── SECCIÓN 7: CTA FINAL ── */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-white/60 text-[10px] font-bold tracking-[0.4em] uppercase mb-6">{content.finalCta.label}</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight" dangerouslySetInnerHTML={{ __html: content.finalCta.title }} />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-stone-100 transition-all flex items-center justify-center gap-3 shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                {content.finalCta.cta1}
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-white/30 text-white px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-white/5 transition-all flex items-center justify-center gap-3"
              >
                {content.finalCta.cta2}
              </a>
            </div>
            <p className="mt-8 text-white/40 text-[10px] font-bold tracking-widest uppercase">
              {content.finalCta.footer}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
