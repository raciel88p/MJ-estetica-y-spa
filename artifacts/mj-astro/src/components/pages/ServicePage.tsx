import { withAppProviders } from "@/components/ReactAppWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Clock, Clock4, ChevronDown, ArrowRight, MessageCircle, Star, ShieldCheck, Award, UserCheck, GraduationCap, BadgeCheck } from "lucide-react";
import { useState } from "react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import type { ServicePageData } from "@/data/services";
import { servicePages } from "@/data/services";
import { SEO } from "@/components/SEO";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StatsBar } from "@/components/StatsBar";

const WA = "https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0";

const beforeDescMap: Record<string, string[]> = {
  "masajes-corporales":        ["Tensión muscular acumulada y contracturas dolorosas", "Circulación deficiente y sensación de pesadez corporal", "Estrés físico que afecta el descanso y el bienestar"],
  "masajes-relajantes":        ["Ansiedad y estrés crónico que no cede", "Insomnio y dificultad para desconectarse", "Tensión acumulada en cuello, espalda y hombros"],
  "masajes-post-operatorios":  ["Inflamación y fibrosis tras la cirugía", "Cicatrización lenta y adherencias subcutáneas", "Acumulación de líquidos y dolor postoperatorio"],
  "reduccion-de-medidas":      ["Grasa localizada resistente a dieta y ejercicio", "Volumen excesivo en abdomen, flancos y muslos", "Pérdida de definición y contorno corporal"],
  "tensado-corporal":          ["Flacidez visible en piel de brazos, abdomen y muslos", "Pérdida de firmeza y elasticidad por la edad o cambios de peso", "Piel sin tono que no responde al ejercicio"],
  "drenaje-linfatico":         ["Retención de líquidos e hinchazón persistente", "Sensación de pesadez y piernas cansadas", "Toxinas acumuladas y sistema linfático bloqueado"],
  "depilacion-laser":          ["Vello no deseado que reaparece constantemente", "Irritación, foliculitis y marcas por depilación frecuente", "Pérdida de tiempo y dinero en métodos temporales"],
  "iron-beauty-fitness":       ["Pérdida de masa muscular y tono corporal", "Dificultad para combinar estética y fitness eficazmente", "Resultados lentos con el entrenamiento convencional"],
  "carboxiterapia":            ["Celulitis visible y grasa localizada resistente", "Piel sin luminosidad y con pérdida de firmeza", "Estrías y signos de envejecimiento prematuro"],
  "levantamiento-gluteo":      ["Glúteos caídos y sin volumen ni definición", "Flacidez en la zona glútea por la edad o cambios de peso", "Pérdida de curvatura y proyección natural"],
  "levantamiento-busto":       ["Busto caído y sin firmeza tras lactancia o cambios de peso", "Pérdida de volumen y contorno en el escote", "Flacidez en piel pectoral que genera inseguridad"],
  "vendas-frias":              ["Retención severa de líquidos y silueta hinchada", "Celulitis avanzada y piel de naranja visible", "Sensación de pesadez y falta de definición corporal"],
  "maderoterapia":             ["Acumulación de grasa y nódulos de celulitis enquistados", "Piel irregular, sin tono y con textura de naranja", "Silueta indefinida y poco modelada"],
  "auriculoterapia":           ["Ansiedad alimentaria y picoteo emocional fuera de control", "Estrés crónico que impide perder peso o dormir bien", "Desequilibrio del sistema nervioso y metabolismo lento"],
  "faciales":                  ["Piel opaca, con manchas y sin luminosidad", "Poros dilatados, imperfecciones y falta de hidratación", "Envejecimiento prematuro y pérdida de uniformidad"],
  "terapias-faciales":         ["Piel deshidratada, tensa y sin vitalidad", "Manchas, rojeces y textura irregular", "Arrugas finas y pérdida de elasticidad visible"],
  "peeling-quimico":           ["Manchas superficiales, piel apagada y textura irregular", "Cicatrices de acné y marcas post-inflamatorias", "Exceso de células muertas que bloquea la renovación celular"],
  "hollywood-peel":            ["Piel sin brillo, gris y con poros visibles", "Acné, comedones y textura rugosa", "Aspecto cansado y falta de luminosidad en el rostro"],
  "eliminacion-manchas":       ["Manchas solares, melasma y discromías visibles", "Tono irregular y falta de uniformidad en el rostro", "Hiperpigmentación que no responde a cremas convencionales"],
  "radiofrecuencia-facial":    ["Flacidez facial incipiente y pérdida del óvalo", "Arrugas de expresión y surcos marcados", "Piel sin firmeza que envejece el aspecto general"],
  "adn-salmon":                ["Piel envejecida, sin hidratación profunda ni luminosidad", "Arrugas, flacidez y pérdida de densidad cutánea", "Aspecto apagado y sin vitalidad que no mejora con cremas"],
  "tratamiento-anticelulitis": ["Celulitis en muslos, glúteos y abdomen muy visible", "Piel de naranja resistente y textura irregular", "Mala circulación y sensación de pesadez en piernas"],
  "varices-aranas-vasculares": ["Varices y arañas vasculares visibles en piernas y rostro", "Dolor, pesadez y calambres nocturnos frecuentes", "Inseguridad para mostrar las piernas por la apariencia vascular"],
  "piernas-cansadas":          ["Piernas pesadas, hinchadas y con sensación de fatiga al final del día", "Circulación deficiente y retención de líquidos en extremidades", "Calambres, hormigueos y piel sin tono en pantorrillas"],
  "nutricion":                 ["Alimentación desordenada y objetivos sin resultados", "Metabolismo lento y sensación de bloqueo permanente", "Déficits nutricionales que afectan energía, piel y bienestar"],
  "botox-full-face":           ["Arrugas de expresión marcadas en frente, entrecejo y patas de gallo", "Aspecto cansado y envejecido que no refleja cómo te sientes", "Pérdida de armonía facial y rasgos sin suavidad"],
  "hilos-tensores":            ["Flacidez facial pronunciada y pérdida del óvalo", "Caída de mejillas, jowls marcados y cuello flácido", "Envejecimiento visible que los tratamientos tópicos no corrigen"],
  "trasplante-capilar":        ["Alopecia progresiva con zonas sin densidad capilar", "Pérdida de confianza y autoestima por la caída del cabello", "Entradas, coronilla visible y frente que retrocede con el tiempo"],
  "acido-hialuronico":         ["Pérdida de volumen facial y surcos nasogeniacos profundos", "Labios finos y asimétricos que proyectan vejez", "Ojeras profundas y pómulos hundidos que envejecen el rostro"],
  "biorevitalizacion":         ["Piel deshidratada, sin luminosidad y con pérdida de firmeza difusa", "Arrugas finas y textura irregular que cremas no corrigen", "Aspecto apagado y sin vitalidad que no mejora con cosmética habitual"],
  "tratamiento-ojeras":        ["Ojeras oscuras y surcos lagrimales que proyectan cansancio permanente", "Aspecto apagado que el maquillaje no puede disimular", "Pérdida de luminosidad en la mirada que envejece el rostro"],
  "blanqueamiento-zona-intima":["Hiperpigmentación y manchas oscuras en zonas íntimas por fricción u hormonas", "Tono irregular en ingle, axilas o zona bikini que genera inseguridad", "Manchas post-depilación resistentes que no mejoran con cremas"],
  "implante-barba":            ["Barba irregular, con calvas y sin densidad uniforme", "Incapacidad de conseguir un aspecto masculino definido con barba natural", "Falta de confianza por una barba escasa que no crece en zonas clave"],
  "mesoterapia-capilar":       ["Caída de cabello progresiva y difusa que no se detiene", "Cabello sin densidad, fino y sin vitalidad", "Cuero cabelludo con poca circulación y folículos debilitados"],
  "rellenos-labios":           ["Labios finos, asimétricos o con pérdida de volumen por la edad", "Contorno labial difuminado que envejece el tercio inferior del rostro", "Inseguridad al hablar o sonreír por la apariencia de los labios"],
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const heroBgMap: Record<string, string> = {
  "masajes-corporales":        "masajes-corporales-bg.webp",
  "masajes-relajantes":        "masajes-relajantes-bg.webp",
  "masajes-post-operatorios":  "masajes-post-operatorios-bg.webp",
  "reduccion-de-medidas":      "reduccion-de-medidas-bg.webp",
  "tensado-corporal":          "tensado-corporal-bg.webp",
  "drenaje-linfatico":         "drenaje-linfatico-bg.webp",
  "depilacion-laser":          "depilacion-laser-bg.webp",
  "iron-beauty-fitness":       "iron-beauty-fitness-bg.webp",
  "faciales":                  "faciales-bg.webp",
  "terapias-faciales":         "terapias-faciales-bg.webp",
  "peeling-quimico":           "peeling-quimico-bg.webp",
  "hollywood-peel":            "hollywood-peel-bg.webp",
  "eliminacion-manchas":       "eliminacion-manchas-bg.webp",
  "radiofrecuencia-facial":    "radiofrecuencia-facial-bg.webp",
  "adn-salmon":                "adn-salmon-bg.webp",
  "tratamiento-anticelulitis": "anticelulitis-bg.webp",
  "carboxiterapia":            "carboxiterapia-bg.webp",
  "levantamiento-gluteo":      "levantamiento-gluteo-bg.webp",
  "levantamiento-busto":       "levantamiento-busto-bg.webp",
  "vendas-frias":              "vendas-frias-bg.webp",
  "maderoterapia":             "maderoterapia-bg.webp",
  "auriculoterapia":           "auriculoterapia-bg.webp",
  "varices-aranas-vasculares": "varices-aranas-vasculares-bg.webp",
  "piernas-cansadas":          "piernas-cansadas-bg.webp",
  "nutricion":                 "nutricion-bg.webp",
  "botox-full-face":           "botox-full-face-bg.webp",
  "hilos-tensores":            "hilos-tensores-bg.webp",
  "trasplante-capilar":        "trasplante-capilar-bg.webp",
  "acido-hialuronico":         "acido-hialuronico-bg.webp",
  "biorevitalizacion":         "biorevitalizacion-bg.webp",
  "tratamiento-ojeras":        "acido-hialuronico-bg.webp",
  "blanqueamiento-zona-intima":"depilacion-laser-bg.webp",
  "implante-barba":            "trasplante-capilar-bg.webp",
  "mesoterapia-capilar":       "trasplante-capilar-bg.webp",
  "rellenos-labios":           "acido-hialuronico-bg.webp",
};

const serviceCategoryMap: Record<string, { name: string; href: string }> = {
  "masajes-corporales":        { name: "Tratamientos Corporales", href: "/tratamientos/corporales" },
  "masajes-relajantes":        { name: "Tratamientos Corporales", href: "/tratamientos/corporales" },
  "masajes-post-operatorios":  { name: "Tratamientos Corporales", href: "/tratamientos/corporales" },
  "reduccion-de-medidas":      { name: "Tratamientos Corporales", href: "/tratamientos/corporales" },
  "tensado-corporal":          { name: "Tratamientos Corporales", href: "/tratamientos/corporales" },
  "drenaje-linfatico":         { name: "Tratamientos Corporales", href: "/tratamientos/corporales" },
  "depilacion-laser":          { name: "Tratamientos Corporales", href: "/tratamientos/corporales" },
  "iron-beauty-fitness":       { name: "Tratamientos Corporales", href: "/tratamientos/corporales" },
  "carboxiterapia":            { name: "Tratamientos Corporales", href: "/tratamientos/corporales" },
  "levantamiento-gluteo":      { name: "Tratamientos Corporales", href: "/tratamientos/corporales" },
  "levantamiento-busto":       { name: "Tratamientos Corporales", href: "/tratamientos/corporales" },
  "vendas-frias":              { name: "Tratamientos Corporales", href: "/tratamientos/corporales" },
  "maderoterapia":             { name: "Tratamientos Corporales", href: "/tratamientos/corporales" },
  "auriculoterapia":           { name: "Tratamientos Corporales", href: "/tratamientos/corporales" },
  "faciales":                  { name: "Tratamientos Faciales",   href: "/tratamientos/faciales"   },
  "adn-salmon":                { name: "Tratamientos Faciales",   href: "/tratamientos/faciales"   },
  "terapias-faciales":         { name: "Tratamientos Faciales",   href: "/tratamientos/faciales"   },
  "peeling-quimico":           { name: "Tratamientos Faciales",   href: "/tratamientos/faciales"   },
  "hollywood-peel":            { name: "Tratamientos Faciales",   href: "/tratamientos/faciales"   },
  "eliminacion-manchas":       { name: "Tratamientos Faciales",   href: "/tratamientos/faciales"   },
  "radiofrecuencia-facial":    { name: "Tratamientos Faciales",   href: "/tratamientos/faciales"   },
  "tratamiento-anticelulitis": { name: "Tratamientos de Piernas", href: "/tratamientos/piernas"    },
  "varices-aranas-vasculares": { name: "Tratamientos de Piernas", href: "/tratamientos/piernas"    },
  "piernas-cansadas":          { name: "Tratamientos de Piernas", href: "/tratamientos/piernas"    },
  "tratamiento-ojeras":        { name: "Tratamientos Faciales",   href: "/tratamientos/faciales"   },
  "blanqueamiento-zona-intima":{ name: "Tratamientos Corporales", href: "/tratamientos/corporales"  },
  "implante-barba":            { name: "Médicos y Estéticos",     href: "/medicos-esteticos"        },
  "mesoterapia-capilar":       { name: "Médicos y Estéticos",     href: "/medicos-esteticos"        },
  "rellenos-labios":           { name: "Médicos y Estéticos",     href: "/medicos-esteticos"        },
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
            <p className="text-primary/80 leading-relaxed pb-6 text-sm">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ServicePage({ service }: { service: ServicePageData }) {
  const category = serviceCategoryMap[service.slug];
  const BASE = import.meta.env.BASE_URL;

  const breadcrumbItems = category
    ? [{ label: category.name, href: category.href }, { label: service.name }]
    : [{ label: service.name }];

  const related = servicePages
    .filter((s) => {
      if (s.slug === service.slug) return false;
      if (!category) return false;
      const cat = serviceCategoryMap[s.slug];
      return cat?.href === category.href;
    })
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={service.name}
        description={`${service.tagline} — ${service.heroDescription.slice(0, 120)}. MJ Fisio Estética y Spa, Turrialba, Costa Rica.`}
        canonical={`/servicios/${service.slug}`}
      />
      <Navbar />

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-end pb-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BASE}images/${heroBgMap[service.slug] ?? service.heroBg ?? "hero-bg.webp"})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/90" />

        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-36 pb-16">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-8">
              <Breadcrumb items={breadcrumbItems} variant="dark" />
            </motion.div>

            <motion.p variants={fadeUp} className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">
              {service.tagline}
            </motion.p>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6 max-w-3xl">
              {service.name}
            </motion.h1>

            <motion.p variants={fadeUp} className="text-white/65 text-base md:text-lg max-w-2xl leading-relaxed mb-10">
              {service.heroDescription}
            </motion.p>

            {/* Hero CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                id={`cta-hero-${service.slug}`}
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-primary text-white text-sm font-bold tracking-[0.15em] uppercase px-8 py-4 hover:bg-primary/90 transition-all group"
              >
                <MessageCircle className="w-4 h-4" />
                Reservar por WhatsApp
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              {category && (
                <a href={category.href}>
                  <span className="inline-flex items-center gap-2 text-white/60 text-sm font-medium border-b border-white/20 pb-0.5 hover:text-white hover:border-white transition-colors cursor-pointer">
                    Ver todos los {category.name.toLowerCase()}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────── */}
      <section className="bg-[#040f19] py-5 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: <Star className="w-4 h-4 fill-primary text-primary" />, text: "5★ en Google" },
            { icon: <ShieldCheck className="w-4 h-4 text-primary" />,       text: "100% no invasivo" },
            { icon: <Award className="w-4 h-4 text-primary" />,             text: "Profesionales certificados" },
            { icon: <MessageCircle className="w-4 h-4 text-primary" />,     text: "Valoración gratuita" },
          ].map((t) => (
            <div key={t.text} className="flex items-center justify-center gap-2">
              {t.icon}
              <span className="text-white/60 text-xs font-medium tracking-wide">{t.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── LINC FISIO TERAPIA – PROFESIONAL RESPONSABLE ── */}
      {!["nutricion", "botox-full-face","hilos-tensores","rellenos-labios","acido-hialuronico","trasplante-capilar","implante-barba","mesoterapia-capilar"].includes(service.slug) && (
      <section className="py-10 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-stone-50 border border-stone-200 rounded-sm overflow-hidden"
          >
            <div className="bg-primary px-6 py-3 flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-white shrink-0" />
              <span className="text-white text-[10px] font-bold tracking-[0.35em] uppercase">Profesional responsable</span>
            </div>
            <div className="px-6 py-6 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="shrink-0 w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30">
                <img src="/images/janneth-molina.webp" alt="Janneth Maria Molina Madrigal - Especialista en Estética" loading="lazy" decoding="async" className="w-full h-full object-cover object-top" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-1">
                  Janneth Maria Molina Madrigal
                </h3>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
                  <span className="inline-flex items-center gap-1.5 bg-primary/8 text-primary text-xs font-semibold px-3 py-1.5 rounded-full border border-primary/20">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    Linc Fisio Terapia
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-stone-100 text-stone-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-stone-200">
                    <GraduationCap className="w-3.5 h-3.5" />
                    Especialista en Estética
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-stone-100 text-stone-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-stone-200">
                    <Award className="w-3.5 h-3.5 text-primary" />
                    Laboró Hospital la Católica
                  </span>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed mt-4 max-w-xl">
                  La estética es una pasión que ha formado parte de mi vida desde siempre. Me inspira la belleza en todas sus formas y me dedico a realzar la belleza natural de cada persona, ayudándoles a sentirse seguras y radiantes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      )}

      <StatsBar />

      {/* ── MÉDICO ESPECIALISTA ────────────────────────── */}
      {(() => {
        const doctorMap: Record<string, { name: string; code: string; specialty: string; photo?: string; bio: string }> = {
          "nutricion":           { name: "Dr. Johan",                  code: "3667-25",   specialty: "Nutricionista Deportivo",  photo: "dr-johan.webp",               bio: "Especialista en nutrición clínica y deportiva. Diseña planes alimentarios personalizados orientados a objetivos de salud, rendimiento y composición corporal." },
          "trasplante-capilar":  { name: "Dr. Ruddy Jiménez Montero", code: "13583",  specialty: "Master en Cirugía Capilar",     photo: "dr-ruddy-jimenez.webp",  bio: "Especialista con formación de posgrado en cirugía capilar. Realiza cada procedimiento con técnicas de última generación garantizando resultados naturales, seguros y permanentes." },
          "implante-barba":      { name: "Dr. Ruddy Jiménez Montero", code: "13583",  specialty: "Master en Cirugía Capilar",     photo: "dr-ruddy-jimenez.webp",  bio: "Especialista con formación de posgrado en cirugía capilar. Realiza cada procedimiento con técnicas de última generación garantizando resultados naturales, seguros y permanentes." },
          "mesoterapia-capilar": { name: "Dr. Ruddy Jiménez Montero", code: "13583",  specialty: "Master en Cirugía Capilar",     photo: "dr-ruddy-jimenez.webp",  bio: "Especialista con formación de posgrado en cirugía capilar. Realiza cada procedimiento con técnicas de última generación garantizando resultados naturales, seguros y permanentes." },
          "botox-full-face":     { name: "Dr. Ricard Araya",           code: "323106", specialty: "Armonizador Facial",  photo: "dr-ricard-araya.webp",   bio: "Médico especialista en medicina estética y tratamientos faciales mínimamente invasivos. Experto en toxina botulínica, ácido hialurónico e hilos tensores con enfoque en resultados naturales." },
          "acido-hialuronico":   { name: "Dr. Ricard Araya",           code: "323106", specialty: "Armonizador Facial",  photo: "dr-ricard-araya.webp",   bio: "Médico especialista en medicina estética y tratamientos faciales mínimamente invasivos. Experto en toxina botulínica, ácido hialurónico e hilos tensores con enfoque en resultados naturales." },
          "hilos-tensores":      { name: "Dr. Ricard Araya",           code: "323106", specialty: "Armonizador Facial",  photo: "dr-ricard-araya.webp",   bio: "Médico especialista en medicina estética y tratamientos faciales mínimamente invasivos. Experto en toxina botulínica, ácido hialurónico e hilos tensores con enfoque en resultados naturales." },
          "rellenos-labios":     { name: "Dr. Ricard Araya",           code: "323106", specialty: "Armonizador Facial",  photo: "dr-ricard-araya.webp",   bio: "Médico especialista en medicina estética y tratamientos faciales mínimamente invasivos. Experto en toxina botulínica, ácido hialurónico e hilos tensores con enfoque en resultados naturales." },
        };
        const doctor = doctorMap[service.slug];
        if (!doctor) return null;
        return (
          <section className="py-16 bg-stone-50 border-b border-stone-100">
            <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="text-center mb-10"
              >
                <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-3">Especialista a cargo</p>
                <h2 className="text-3xl font-serif font-bold text-stone-900">Tu procedimiento en manos expertas</h2>
              </motion.div>
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-white border border-stone-200 shadow-sm rounded-sm overflow-hidden"
              >
                <div className="bg-[#071e2e] px-8 py-5 flex items-center gap-3">
                  <UserCheck className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-white/70 text-xs font-bold tracking-[0.35em] uppercase">Médico Certificado</span>
                </div>
                <div className="px-8 py-10 flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="shrink-0 w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30 shadow-md">
                    {doctor.photo ? (
                      <img
                        src={`${BASE}images/${doctor.photo}`}
                        alt={doctor.name}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                        decoding="async"
                        width={96}
                        height={96}
                      />
                    ) : (
                      <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                        <UserCheck className="w-10 h-10 text-primary" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-1">
                      {doctor.name}
                    </h3>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
                      <span className="inline-flex items-center gap-1.5 bg-primary/8 text-primary text-xs font-semibold px-3 py-1.5 rounded-full border border-primary/20">
                        <BadgeCheck className="w-3.5 h-3.5" />
                        Código Médico: {doctor.code}
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-stone-100 text-stone-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-stone-200">
                        <GraduationCap className="w-3.5 h-3.5" />
                        {doctor.specialty}
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-stone-100 text-stone-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-stone-200">
                        <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                        Registro CCSS verificado
                      </span>
                    </div>
                    <p className="text-stone-500 text-sm leading-relaxed mt-5 max-w-xl">
                      {doctor.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })()}

      {/* ── BENEFITS ─────────────────────────────────── */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-10"
          >
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-3">Beneficios</p>
            <h2 className="text-3xl font-serif font-bold text-stone-900">
              ¿Por qué elegir este tratamiento?
            </h2>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {service.benefits.map((benefit, i) => (
              <motion.div
                key={i} variants={fadeUp}
                className="flex items-start gap-3 bg-white p-5 border border-stone-100 hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-stone-700 font-medium leading-snug">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE ITEMS ─────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-primary" />
              <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Nuestros Tratamientos</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
              ¿Qué incluye<br />
              <span className="font-light italic text-primary">este servicio?</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-100"
          >
            {service.items.map((item, i) => (
              <motion.div
                key={i} variants={fadeUp}
                className="group bg-white p-8 md:p-10 hover:bg-stone-50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4 gap-4">
                  <div>
                    <span className="text-stone-400 text-sm font-serif font-bold mr-3">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-stone-900 group-hover:text-primary transition-colors inline">{item.title}</h3>
                  </div>
                  {item.duration && (
                    <span className="flex items-center gap-1.5 text-stone-500 text-xs shrink-0 border border-stone-200 px-3 py-1">
                      <Clock className="w-3.5 h-3.5" />
                      {item.duration}
                    </span>
                  )}
                </div>
                <p className="text-stone-600 leading-relaxed mb-6 text-sm">{item.description}</p>
                {item.price && (
                  <p className="text-stone-500 text-xs tracking-widest uppercase mb-5">{item.price}</p>
                )}
                <a
                  id={`cta-item-${service.slug}-${i}`}
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-white bg-primary px-5 py-2.5 hover:bg-primary/90 transition-colors group/btn"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Reservar sesión
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── URGENCY CTA BAND ──────────────────────────── */}
      <section className="bg-primary py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-white/70 text-xs font-bold tracking-[0.4em] uppercase mb-3">Valoración Sin Compromiso</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Reserva hoy — plazas limitadas
            </h2>
            <p className="text-white/75 text-sm mb-8 max-w-md mx-auto leading-relaxed">
              Escríbenos por WhatsApp y te asesoramos sin costo. Diseñamos el protocolo ideal para tu caso.
            </p>
            <a
              id={`cta-urgency-${service.slug}`}
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-primary text-sm font-bold tracking-[0.15em] uppercase px-10 py-4 hover:bg-stone-100 transition-colors group"
            >
              <MessageCircle className="w-4 h-4" />
              Escribir por WhatsApp
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── ANTES Y DESPUÉS — servicios corporales seleccionados ─── */}
      {["masajes-corporales", "reduccion-de-medidas", "drenaje-linfatico", "carboxiterapia"].includes(service.slug) && (() => {
        const beforeBg = `${BASE}images/corporales-antes-bg.webp`;
        const afterBg  = `${BASE}images/corporales-despues-bg.webp`;
        const beforeItems = beforeDescMap[service.slug] ?? [
          "Problema visible que afecta tu bienestar y confianza",
          "Resultados lentos o nulos con métodos convencionales",
          "Sensación de no encontrar la solución adecuada",
        ];
        const afterItems = service.benefits.slice(0, 3);
        return (
          <section className="py-20 md:py-28 bg-[#040f19] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="text-center mb-14"
              >
                <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-3">Transformación Real</p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                  Antes y <span className="text-primary font-light italic">después</span>
                </h2>
                <p className="text-white/45 text-sm max-w-sm mx-auto leading-relaxed">
                  Así cambia la vida de nuestras clientas con {service.name.toLowerCase()}.
                </p>
              </motion.div>

              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5"
              >
                {/* ANTES */}
                <motion.div variants={fadeUp} className="bg-[#040f19] overflow-hidden flex flex-col">
                  {/* Photo shown in full rectangular shape — no cropping */}
                  <div className="relative overflow-hidden bg-[#040f19] flex items-center justify-center" style={{ height: "440px" }}>
                    <img
                      src={beforeBg}
                      alt={`Antes del tratamiento - ${service.name}`}
                      loading="lazy"
                      decoding="async"
                      className="max-w-full max-h-full w-auto h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      style={{ filter: "grayscale(1) brightness(0.88)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040f19]/80 to-transparent" />
                    <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white/80 text-[10px] font-bold tracking-[0.35em] uppercase px-3 py-1.5">
                      Antes
                    </span>
                  </div>
                  {/* Text below image */}
                  <div className="px-8 py-8 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-2">Sin tratamiento</p>
                      <h3 className="text-xl font-serif font-bold text-white/80 leading-tight mb-6">
                        La situación que queremos cambiar
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {beforeItems.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-3.5 h-3.5 rounded-full border border-stone-600 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="w-1 h-1 rounded-full bg-stone-500" />
                          </span>
                          <span className="text-white/55 text-sm leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* DESPUÉS */}
                <motion.div variants={fadeUp} className="bg-[#040f19] overflow-hidden flex flex-col">
                  {/* Photo shown in full rectangular shape — no cropping */}
                  <div className="relative overflow-hidden bg-[#040f19] flex items-center justify-center" style={{ height: "440px" }}>
                    <img
                      src={afterBg}
                      alt={`Después del tratamiento - ${service.name}`}
                      loading="lazy"
                      decoding="async"
                      className="max-w-full max-h-full w-auto h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040f19]/80 to-transparent" />
                    <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold tracking-[0.35em] uppercase px-3 py-1.5">
                      Después
                    </span>
                  </div>
                  {/* Text below image */}
                  <div className="px-8 py-8 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-2">Con nuestro tratamiento</p>
                      <h3 className="text-xl font-serif font-bold text-white leading-tight mb-6">
                        La transformación que te mereces
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {afterItems.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-white/85 text-sm leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>

              {/* CTA under the panel */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="mt-10 text-center"
              >
                <p className="text-white/40 text-xs mb-5 uppercase tracking-widest">¿Lista para tu transformación?</p>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 border border-primary text-primary text-xs font-bold tracking-[0.2em] uppercase px-8 py-3.5 hover:bg-primary hover:text-white transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Reservar mi sesión
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            </div>
          </section>
        );
      })()}


      {/* ── SPECIALIST BOX ─────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-stone-900 rounded-lg p-6 sm:p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col md:flex-row gap-8 sm:gap-12 items-center md:items-start relative overflow-hidden group transition-shadow">

            <div className="w-32 sm:w-40 md:w-48 shrink-0 relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full translate-x-2 sm:translate-x-3 translate-y-2 sm:translate-y-3" />
              <img
                src="/images/janeth-molina.png"
                alt="Lic Terapiafísca Janeth Maria Molina Madrigal"
                loading="lazy"
                decoding="async"
                className="w-full h-auto aspect-square object-cover rounded-full relative z-10 border-4 border-stone-800 shadow-md grayscale-[0.1] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                <ShieldCheck className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                <span className="text-primary text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase">Especialista Certificada</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">Lic. Terapia Física Janeth Maria Molina Madrigal</h2>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 mb-6">
                <span className="inline-flex items-center gap-2 bg-stone-800 px-3 py-1.5 rounded-full text-xs font-medium text-stone-300">
                  <Award className="w-3.5 h-3.5" />
                  Especialista Estética
                </span>
                <span className="inline-flex items-center gap-2 bg-stone-800 px-3 py-1.5 rounded-full text-xs font-medium text-stone-300">
                  <Clock4 className="w-3.5 h-3.5" />
                  15 Años de Experiencia
                </span>
              </div>

              <p className="text-stone-400 text-sm leading-relaxed max-w-xl mx-auto md:mx-0">
                Especialista en el campo estético, cuenta con 15 años trabajando en el campo clínico médico-estético de referencia.
              </p>
            </div>
          </motion.div>
        </div>
      </section>


          {/* Lic Terapiafísca Janeth Maria Molina Madrigal */}
          <motion.div variants={fadeUp} className="bg-white rounded-lg p-6 sm:p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100 flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 items-start relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
            <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-700" />

            <div className="w-32 sm:w-40 md:w-56 shrink-0 relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full translate-x-2 sm:translate-x-3 md:translate-x-4 translate-y-2 sm:translate-y-3 md:translate-y-4" />
              <img
                src="/images/janeth-molina.png"
                alt="Lic Terapiafísca Janeth Maria Molina Madrigal"
                loading="lazy"
                decoding="async"
                className="w-full h-auto aspect-square object-cover rounded-full relative z-10 border-4 border-white shadow-md grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                <ShieldCheck className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-primary" />
                <span className="text-primary text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase">Especialista Certificada</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4 sm:mb-6">Lic. Janeth Maria Molina Madrigal</h2>

              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                <span className="inline-flex items-center gap-2 bg-stone-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-stone-600">
                  <Award className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  Especialista Estética
                </span>
                <span className="inline-flex items-center gap-2 bg-stone-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-stone-600">
                  <Clock4 className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  15 Años de Experiencia
                </span>
              </div>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-2xl">
                Especialista en el campo estético, cuenta con 15 años trabajando el campo clínico médico-estético de referencia. Su amplia trayectoria garantiza resultados óptimos, seguros y vanguardistas en terapias físicas y estéticas para el bienestar integral.
              </p>

              <a
                href="https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-primary border-b border-primary/30 pb-0.5 hover:border-primary transition-colors cursor-pointer group/link"
              >
                Agendar con la especialista <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

      {/* ── FAQ ───────────────────────────────────────── */}
      {service.faq && service.faq.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6 sm:px-10">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-primary" />
                <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Preguntas Frecuentes</p>
              </div>
              <h2 className="text-4xl font-serif font-bold text-stone-900">
                Todo lo que necesitas<br />
                <span className="font-light italic text-primary">saber antes de tu cita</span>
              </h2>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="border-t border-stone-200"
            >
              {service.faq.map((item, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <FaqItem question={item.question} answer={item.answer} />
                </motion.div>
              ))}
            </motion.div>

            {/* Inline WhatsApp after FAQ */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="mt-12 p-8 bg-[#040f19] flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div>
                <p className="text-white font-serif text-xl font-bold mb-1">¿Tienes más dudas?</p>
                <p className="text-white/75 text-sm">Escríbenos y te respondemos al instante.</p>
              </div>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 border border-primary text-primary text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 hover:bg-primary hover:text-white transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Preguntar ahora
              </a>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── RELATED SERVICES ──────────────────────────── */}
      {related.length > 0 && (
        <section className="py-16 bg-stone-50 border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="mb-10"
            >
              <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">También te puede interesar</p>
              <h2 className="text-3xl font-serif font-bold text-stone-900">Servicios relacionados</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200">
              {related.map((rel, i) => (
                <motion.div
                  key={rel.slug}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.08 } } }}
                  className="bg-white p-8 group hover:bg-stone-50 transition-colors"
                >
                  <p className="text-xs font-serif font-bold text-stone-400 mb-3">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-2 group-hover:text-primary transition-colors">
                    {rel.name}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-5">{rel.tagline}</p>
                  <a href={`/servicios/${rel.slug}`}>
                    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-primary border-b border-primary/30 pb-0.5 hover:border-primary transition-colors cursor-pointer">
                      Ver tratamiento <ArrowRight className="w-3 h-3" />
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>
            {category && (
              <div className="mt-8 text-center">
                <a href={category.href}>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-stone-600 border-b border-stone-300 pb-0.5 hover:text-primary hover:border-primary transition-colors cursor-pointer tracking-wide uppercase text-xs">
                    Ver todos los {category.name.toLowerCase()} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>
            )}
          </div>
        </section>
      )}

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default withAppProviders(ServicePage);
