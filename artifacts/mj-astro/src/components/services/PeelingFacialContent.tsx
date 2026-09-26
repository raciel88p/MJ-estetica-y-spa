import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Instagram,
  Clock,
  Quote,
  Zap,
  Target,
  ShieldCheck,
  UserCheck,
  Award,
  Heart,
  FileText,
  User
} from "lucide-react";
import { useState } from "react";
import es from "@/i18n/locales/es/peeling-facial.json";
import en from "@/i18n/locales/en/peeling-facial.json";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as any } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left gap-4 group"
      >
        <span className="font-serif text-lg text-stone-900 group-hover:text-primary transition-colors">{question}</span>
        <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-stone-500 leading-relaxed pb-6 text-sm">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PeelingFacialContent({ waLink, lang = "es" }: { waLink: string; lang?: "es" | "en" }) {
  const content = lang === "es" ? es : en;
  return (
    <div className="bg-white">
      {/* ── INTRO SECTION (PAS) ────────────────────────── */}
      <section className="py-20 bg-white border-b border-stone-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">{content.intro.label}</span>
            </div>
            <p className="text-stone-600 text-lg leading-relaxed mb-6 italic" dangerouslySetInnerHTML={{ __html: content.intro.p1 }} />
            <p className="text-stone-600 text-lg leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: content.intro.p2 }} />
          </motion.div>
        </div>
      </section>

      {/* ── LEAD MAGNET ──────────────────────────────── */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-1 md:p-2 shadow-xl border border-stone-100">
              <div className="border border-stone-50 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
                 <div className="flex-1 text-center md:text-left text-stone-900">
                    <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{content.leadMagnet.label}</p>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">{content.leadMagnet.title}</h3>
                    <div className="space-y-2 mb-8 text-left max-w-sm mx-auto md:mx-0">
                       {content.leadMagnet.items.map((item, i) => (
                         <p key={i} className="text-sm text-stone-600 font-medium">{item}</p>
                       ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                       <div className="bg-stone-50 border border-stone-200 px-6 py-3 text-center w-full sm:w-auto">
                          <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">{content.leadMagnet.keywordLabel}</p>
                          <p className="text-2xl font-serif font-bold text-primary">{content.leadMagnet.keyword}</p>
                       </div>
                       <a
                          href={waLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-4 font-bold tracking-widest uppercase hover:bg-primary transition-colors text-xs w-full sm:w-auto"
                       >
                          <MessageCircle className="w-4 h-4" />
                          {content.leadMagnet.cta}
                       </a>
                    </div>
                 </div>
                 <div className="shrink-0 w-40 h-56 bg-stone-100 flex items-center justify-center relative group hidden md:flex">
                    <div className="absolute inset-2 border border-stone-200" />
                    <FileText className="w-12 h-12 text-primary/20" />
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                       <p className="text-[8px] font-bold tracking-tighter text-stone-400 uppercase">{content.leadMagnet.badge}</p>
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* ── ¿QUÉ ES? ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              {content.whatIs.title}
            </h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: content.whatIs.p1 }} />
              <p dangerouslySetInnerHTML={{ __html: content.whatIs.p2 }} />
              <p className="font-medium text-stone-800" dangerouslySetInnerHTML={{ __html: content.whatIs.p3 }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BENEFICIOS ────────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-stone-900">{content.benefits.title}</h2>
            <p className="text-stone-500 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: content.benefits.desc }} />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {content.benefits.items.map((benefit, i) => (
              <div key={i} className="bg-white p-6 border border-stone-100 shadow-sm flex items-start gap-3 hover:border-primary transition-colors">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-stone-700 leading-tight">{benefit}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-stone-400 italic">{content.benefits.footer}</p>
        </div>
      </section>

      {/* ── MANCHAS ──────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
                {content.spots.title}
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                {content.spots.p1}
              </p>
              <ul className="space-y-4 mb-8">
                {content.spots.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-700 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                  </li>
                ))}
              </ul>
              <p className="text-stone-500 italic">{content.spots.footer}</p>
            </motion.div>
            <div className="relative">
              <div className="aspect-square bg-stone-100 border border-stone-200 flex items-center justify-center p-8">
                 <Sparkles className="w-24 h-24 text-primary/20 animate-pulse" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-stone-900 text-white p-6 shadow-xl">
                 <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">{content.spots.badgeLabel}</p>
                 <p className="text-xl font-serif font-bold italic">{content.spots.badgeValue}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACNÉ ─────────────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              {content.acne.title}
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              {content.acne.p1}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
               {content.acne.items.map((item, i) => (
                 <div key={i} className="bg-white p-6 border border-stone-200 text-left">
                    <h4 className="font-bold text-stone-900 mb-1">{item.t}</h4>
                    <p className="text-sm text-stone-500">{item.d}</p>
                 </div>
               ))}
            </div>
            <p className="text-stone-500">{content.acne.footer}</p>
          </motion.div>
        </div>
      </section>

      {/* ── REJUVENECIMIENTO ─────────────────────────── */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] bg-stone-900 overflow-hidden relative shadow-2xl">
                   <img src="/images/faciales-bg.webp" alt="Rejuvenecimiento Facial" className="w-full h-full object-cover opacity-60" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-white text-3xl font-serif font-bold italic text-center px-10">{content.rejuvenation.imageText}</p>
                   </div>
                </div>
             </div>
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 leading-tight">{content.rejuvenation.title}</h2>
                <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
                   <p>{content.rejuvenation.p1}</p>
                   <p dangerouslySetInnerHTML={{ __html: content.rejuvenation.p2 }} />
                   <p className="font-medium text-stone-900 italic">{content.rejuvenation.p3}</p>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROCESO ──────────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-stone-900 uppercase tracking-tighter">{content.process.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.process.items.map((step, i) => (
              <div key={i} className="p-8 bg-white border border-stone-200 group hover:border-primary transition-colors">
                <span className="text-primary font-serif text-4xl font-bold mb-6 block opacity-20 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                <h4 className="text-xl font-serif font-bold text-stone-900 mb-4">{step.t}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFERENCIALES ────────────────────────────── */}
      <section className="py-24 bg-[#040f19] text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">{content.whyUs.title}</h2>
            <p className="text-white/50 max-w-2xl mx-auto italic">{content.whyUs.desc}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.whyUs.items.map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-4 border-b border-white/10">
                <Sparkles className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-medium text-white/80">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-16 text-primary font-bold italic text-lg">{content.whyUs.footer}</p>
        </div>
      </section>

      {/* ── CANDIDATOS ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 leading-tight">{content.candidates.title}</h2>
                <p className="text-stone-600 mb-8">{content.candidates.p1}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {content.candidates.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <UserCheck className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm font-bold text-stone-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="flex-1 bg-stone-50 p-10 border border-stone-200 text-center">
               <Quote className="w-12 h-12 text-primary/10 mx-auto mb-6" />
               <p className="text-xl font-serif italic text-stone-800 leading-relaxed mb-6">{content.candidates.quote}</p>
               <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-stone-900 text-white px-8 py-4 font-bold tracking-widest uppercase hover:bg-primary transition-all text-[10px]">
                  {content.candidates.cta}
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ───────────────────────────────── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12 text-center">
            <h2 className="text-4xl font-serif font-bold text-stone-900 uppercase tracking-tighter">{content.faq.title}</h2>
            <p className="text-stone-400 uppercase text-[10px] tracking-widest font-bold mt-2">{content.faq.label}</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="border-t border-stone-200">
            {content.faq.items.map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <FaqItem question={item.q} answer={item.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">{content.finalCta.title}</h2>
            <p className="text-stone-600 text-lg mb-12 max-w-2xl mx-auto italic">
              {content.finalCta.p1}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-primary text-white px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all text-xs"
              >
                <MessageCircle className="w-5 h-5" />
                {content.finalCta.cta1}
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-stone-900 text-stone-900 px-10 py-5 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-all text-xs"
              >
                {content.finalCta.cta2}
              </a>
            </div>
            <p className="mt-12 text-stone-400 font-bold uppercase tracking-[0.3em] text-[10px]">{content.finalCta.footer}</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
