import { motion } from "framer-motion";
import {
  MessageCircle,
  CheckCircle2,
  Zap,
  Check,
  ShieldCheck,
  MapPin,
  ChevronDown,
  Quote,
  Clock,
  Heart
} from "lucide-react";
import es from "@/i18n/locales/es/auriculoterapia.json";
import en from "@/i18n/locales/en/auriculoterapia.json";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as any } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function AuriculoterapiaContent({
  waLink,
  lang = "es"
}: {
  waLink: string;
  lang?: "es" | "en";
}) {
  const content = lang === "es" ? es : en;
  return (
    <div className="bg-white">
      {/* ── SECCIÓN: INTRODUCCIÓN ────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-8 mx-auto">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <p className="text-stone-800 text-xl md:text-2xl font-serif leading-relaxed italic max-w-3xl mx-auto mb-12">
              {content.intro.quote}
            </p>
            <div className="max-w-2xl mx-auto space-y-6 text-stone-600 text-lg">
              <p>
                {content.intro.p1}
              </p>
              <p className="font-bold text-stone-900">
                {content.intro.highlight}
              </p>
            </div>
            <div className="mt-12">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                {content.intro.cta}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: ¿QUÉ ES? ─────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8 uppercase tracking-tighter">{content.whatIs.title}</h2>
              <p className="text-stone-600 leading-relaxed mb-8 text-lg">
                {content.whatIs.desc}
              </p>
              <ul className="grid grid-cols-1 gap-4">
                {content.whatIs.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-stone-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-white p-10 border border-stone-100 rounded-sm shadow-sm"
            >
              <Quote className="w-12 h-12 text-primary/10 mb-6" />
              <p className="text-xl font-serif italic text-stone-800 leading-relaxed">
                {content.whatIs.quote}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: BENEFICIOS ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{content.benefits.label}</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter">{content.benefits.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.benefits.items.map((item, i) => (
              <motion.div
                key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-stone-50 p-10 border border-stone-100 rounded-sm hover:bg-white hover:shadow-md transition-all group"
              >
                <Zap className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-serif font-bold mb-4 text-stone-900 uppercase tracking-tight">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: PARA QUIÉN? ─────────────────── */}
      <section className="py-24 bg-[#071e2e] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 uppercase tracking-tight text-white">{content.who.title}</h2>
             <p className="text-stone-400 mb-12 text-lg">{content.who.intro}</p>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left max-w-4xl mx-auto">
               {content.who.items.map((item, i) => (
                 <div key={i} className="flex items-center gap-3 bg-white/5 p-4 border border-white/10 rounded-sm">
                   <Check className="w-4 h-4 text-primary shrink-0" />
                   <span className="text-stone-200 text-xs font-bold uppercase tracking-wide">{item}</span>
                 </div>
               ))}
             </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN: PASO A PASO ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{content.process.label}</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter">{content.process.title}</h2>
          </motion.div>

          <div className="space-y-8 max-w-2xl mx-auto">
            {content.process.items.map((text, i) => (
              <div key={i} className="flex items-center gap-6 group">
                <span className="w-12 h-12 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-primary font-bold text-lg group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  {i + 1}
                </span>
                <p className="text-stone-700 text-lg font-medium">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-16 text-center text-stone-500 italic">
            {content.process.footer}
          </p>
        </div>
      </section>

      {/* ── SECCIÓN: POR QUÉ ELEGIRNOS ─────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter">{content.whyUs.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.whyUs.items.map((item, i) => (
              <div key={i} className="bg-white p-8 border border-stone-100 shadow-sm rounded-sm">
                <ShieldCheck className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-xl font-serif font-bold mb-4 text-stone-900 uppercase tracking-tight">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: FAQ ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{content.faqs.label}</p>
            <h2 className="text-4xl font-serif font-bold text-stone-900 leading-tight uppercase tracking-tighter">{content.faqs.title}</h2>
          </motion.div>

          <div className="space-y-4">
            {content.faqs.items.map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <details className="group bg-stone-50 border border-stone-100 rounded-sm overflow-hidden transition-all duration-300 open:shadow-md">
                  <summary className="p-6 cursor-pointer flex justify-between items-center list-none font-serif font-bold text-stone-900 group-hover:text-primary">
                    {item.q}
                    <span className="text-primary transition-transform duration-300 group-open:rotate-180">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="p-6 pt-0 text-stone-600 text-sm leading-relaxed border-t border-stone-200">
                    {item.a}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: FINAL CTA ─────────────────── */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 uppercase tracking-tighter text-white">{content.finalCta.title}</h2>
            <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              {content.finalCta.desc}
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-primary px-12 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-all shadow-2xl"
            >
              <MessageCircle className="w-5 h-5" />
              {content.finalCta.cta}
            </a>
            <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-60">
               <span className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase"><MapPin className="w-3 h-3" /> {content.finalCta.location}</span>
               <span className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase"><Clock className="w-3 h-3" /> {content.finalCta.schedule}</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
