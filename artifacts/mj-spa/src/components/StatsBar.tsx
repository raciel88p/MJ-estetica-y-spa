import { motion } from "framer-motion";

const STATS = {
  es: [
    { n: "2335+", label: "Clientes atendidas" },
    { n: "85%",   label: "Clientes satisfechas" },
    { n: "82+",   label: "Tratamientos disponibles" },
    { n: "3+",    label: "Años de experiencia" },
  ],
  en: [
    { n: "2335+", label: "Clients served" },
    { n: "85%",   label: "Satisfied clients" },
    { n: "82+",   label: "Treatments available" },
    { n: "3+",    label: "Years of experience" },
  ]
};

export function StatsBar({ lang = "es" }: { lang?: "es" | "en" }) {
  const stats = lang === "es" ? STATS.es : STATS.en;
  return (
    <section className="bg-[#071e2e] border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
        {stats.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="text-center px-4 py-1"
          >
            <p className="text-primary text-2xl font-serif font-bold">{s.n}</p>
            <p className="text-white/70 text-[11px] tracking-widest uppercase mt-0.5">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
