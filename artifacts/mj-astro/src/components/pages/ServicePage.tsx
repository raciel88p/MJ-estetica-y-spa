import { withAppProviders } from "@/components/ReactAppWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Clock, Clock4, ChevronDown, ArrowRight, MessageCircle, Star, ShieldCheck, Award, UserCheck, GraduationCap, BadgeCheck, Download } from "lucide-react";
import { useState, useEffect } from "react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import type { ServicePageData } from "@/data/services";
import { servicePages } from "@/data/services";
import { SEO } from "@/components/SEO";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StatsBar } from "@/components/StatsBar";
import { useTranslations } from "@/i18n/ui";
import { LaserServiceContent } from "@/components/services/LaserServiceContent";
import { HydrolipoclasiaContent } from "@/components/services/HydrolipoclasiaContent";
import { HydrolipoclasiaBottomContent } from "@/components/services/HydrolipoclasiaBottomContent";
import { AdnSalmonContent } from "@/components/services/AdnSalmonContent";
import { CarboxiterapiaContent } from "@/components/services/CarboxiterapiaContent";
import { GluteoServiceContent } from "@/components/services/GluteoServiceContent";
import { PostOpServiceContent } from "@/components/services/PostOpServiceContent";
import { BotoxServiceContent } from "@/components/services/BotoxServiceContent";
import { BustoServiceContent } from "@/components/services/BustoServiceContent";
import { TensadoServiceContent } from "@/components/services/TensadoServiceContent";
import { IronBeautyServiceContent } from "@/components/services/IronBeautyServiceContent";
import { VendasFriasContent } from "@/components/services/VendasFriasContent";
import { BlanqueamientoIntimoContent } from "@/components/services/BlanqueamientoIntimoContent";
import { HollywoodPeelContent } from "@/components/services/HollywoodPeelContent";
import { HilosColagenoContent } from "@/components/services/HilosColagenoContent";
import { TrasplanteCapilarContent } from "@/components/services/TrasplanteCapilarContent";
import { LipFillerContent } from "@/components/services/LipFillerContent";
import { HilosTensoresContent } from "@/components/services/HilosTensoresContent";
import { AuriculoterapiaContent } from "@/components/services/AuriculoterapiaContent";
import { MicroagujasContent } from "@/components/services/MicroagujasContent";
import { MicroagujasGinkgoContent } from "@/components/services/MicroagujasGinkgoContent";
import { MasajeProfundoContent } from "@/components/services/MasajeProfundoContent";
import { MasajeRelajanteContent } from "@/components/services/MasajeRelajanteContent";
import { MicroagujasVitaminaCContent } from "@/components/services/MicroagujasVitaminaCContent";
import { RejuvenecimientoFacialContent } from "@/components/services/RejuvenecimientoFacialContent";
import { LimpiezaFacialContent } from "@/components/services/LimpiezaFacialContent";
import { LimpiezaHidratanteContent } from "@/components/services/LimpiezaHidratanteContent";
import { MicrodermoabrasionContent } from "@/components/services/MicrodermoabrasionContent";
import { OjerasServiceContent } from "@/components/services/OjerasServiceContent";
import { PeelingFacialContent } from "@/components/services/PeelingFacialContent";
import { AromaterapiaContent } from "@/components/services/AromaterapiaContent";
import { TerapiasFacialesContent } from "@/components/services/TerapiasFacialesContent";
import { LaserAcneContent } from "@/components/services/LaserAcneContent";
import { MelanOutContent } from "@/components/services/MelanOutContent";
import { MascarillasFacialesContent } from "@/components/services/MascarillasFacialesContent";
import { MasajeMaxilofacialContent } from "@/components/services/MasajeMaxilofacialContent";
import { InBodyServiceContent } from "@/components/services/InBodyServiceContent";
import { NutricionServiceContent } from "@/components/services/NutricionServiceContent";
import { RejuvenecimientoLaserContent } from "@/components/services/RejuvenecimientoLaserContent";
import { BodaSpaContent } from "@/components/services/BodaSpaContent";
import { ArteterapiaContent } from "@/components/services/ArteterapiaContent";
import { PsicologiaInfantilContent } from "@/components/services/PsicologiaInfantilContent";
import { BeforeAfterSlider } from "@/components/testimonials/BeforeAfterSlider";

import AnticelulitisServiceContent from "@/components/services/AnticelulitisServiceContent";
const WA = "https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0";

const beforeDescMap: Record<string, Record<string, string[]>> = {
  es: {
    "masajes-corporales":        ["Celulitis visible y grasa localizada resistente", "Piel sin luminosidad y con pérdida de firmeza", "Estrías y signos de envejecimiento prematuro"],
    "masajes-relajantes":        ["Ansiedad y estrés crónico que no cede", "Insomnio y dificultad para desconectarse", "Tensión acumulada en cuello, espalda y hombros"],
    "masajes-profundos":         ["Estrés acumulado y rigidez muscular persistente", "Sensación de cuerpo pesado y falta de descanso", "Necesidad de desconexión profunda y bienestar"],
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
    "microagujas": ["Piel opaca y sin brillo (pérdida de glow)", "Textura irregular y poros visibles", "Signos incipientes de envejecimiento facial"],
    "microagujas-ginkgo-biloba": ["Piel opaca y sin brillo (pérdida de glow)", "Textura irregular y poros visibles", "Signos incipientes de envejecimiento facial"],
    "microagujas-vitamina-c": ["Piel opaca y falta de luminosidad", "Textura irregular", "Deseo de rejuvenecimiento natural"],
    "faciales":                  ["Piel opaca, con manchas y sin luminosidad", "Poros dilatados, imperfecciones y falta de hidratación", "Envejecimiento prematuro y pérdida de uniformidad"],
    "terapias-faciales":         ["Piel deshidratada, tensa y sin vitalidad", "Manchas, rojeces y textura irregular", "Arrugas finas y pérdida de elasticidad visible"],
    "peeling-quimico":           ["Manchas superficiales, piel apagada y textura irregular", "Cicatrices de acné y marcas post-inflamatorias", "Exceso de células muertas que bloquea la renovación celular"],
    "hollywood-peel":            ["Piel sin brillo, gris y con poros visibles", "Acné, comedones y textura rugosa", "Aspecto cansado y falta de luminosidad en el rostro"],
    "eliminacion-manchas":       ["Manchas solares, melasma y discromías visibles", "Tono irregular y falta de uniformidad en el rostro", "Hiperpigmentación que no responde a cremas convencionales"],
    "radiofrecuencia-facial":    ["Flacidez facial incipiente y pérdida del óvalo", "Arrugas de expresión y surcos marcados", "Piel sin firmeza que envejece el aspecto general"],
    "adn-salmon":                ["Piel envejecida, sin hidratación profunda ni luminosidad", "Arrugas, flacidez y pérdida de densidad cutánea", "Aspecto apagado y sin vitalidad que no mejora con cremas"],
    "tratamiento-anticelulitis": ["Celulitis en muslos, glúteos y abdomen muy visible", "Piel de naranja resistente y textura irregular", "Mala circulación y sensación de pesadez en piernas"],
    "piernas-cansadas":          ["Piernas pesadas, hinchadas y con sensación de fatiga al final del día", "Circulación deficiente y retención de líquidos en extremidades", "Calambres, hormigueos y piel sin tono en pantorrillas"],
    "nutricion":                 ["Alimentación desordenada y objetivos sin resultados", "Metabolismo lento y sensación de bloqueo permanente", "Déficits nutricionales que afectan energía, piel y bienestar"],
    "botox-full-face":           ["Arrugas de expresión marcadas en frente, entrecejo y patas de gallo", "Aspecto cansado y envejecido que no refleja cómo te sientes", "Pérdida de armonía facial y rasgos sin suavidad"],
    "hilos-tensores":            ["Flacidez facial pronunciada y pérdida del óvalo", "Caída de mejillas, jowls marcados y cuello flácido", "Envejecimiento visible que los tratamientos tópicos no corrigen"],
    "trasplante-capilar":        ["Alopecia progresiva con zonas sin densidad capilar", "Pérdida de confianza y autoestima por la caída del cabello", "Entradas, coronilla visible y frente que retrocede con el tiempo"],
    "acido-hialuronico":         ["Pérdida de volumen facial y surcos nasogeniacos profundos", "Labios finos y asimétricos que proyectan vejez", "Ojeras profundas y pómulos hundidos que envejecen el rostro"],
    "biorevitalizacion":         ["Piel deshidratada, sin luminosidad y con pérdida de firmeza difusa", "Arrugas finas y textura irregular que cremas no corrigen", "Aspecto apagado y sin vitalidad que no mejora con cosmética habitual"],
    "tratamiento-ojeras":        ["Ojeras oscuras y surcos lagrimales que proyectan cansancio permanente", "Aspecto apagado que el maquillaje no puede disimular", "Pérdida de luminosidad en la mirada que envejece el rostro"],
    "blanqueamiento-zona-intima":["Hiperpigmentación y manchas oscuras en zonas íntimas por fricción u hormonas", "Tono irregular en ingle, axilas o zona bikini que genera inseguridad", "Manchas post-depilación resistentes que no mejoran con cremas"],
    "aromaterapia": ["Estrés acumulado y ritmo diario que no deja tiempo propio", "Necesidad de desconexión profunda y bienestar emocional", "Deseo de una experiencia sensorial premium y personalizada"],
    "rejuvenecimiento-facial-laser": ["Signos visibles de envejecimiento y cansancio", "Pérdida de colágeno y firmeza natural", "Manchas y textura irregular que restan juventud"],
    "implante-barba":            ["Barba irregular, con calvas y sin densidad uniforme", "Incapacidad de conseguir un aspecto masculino definido con barba natural", "Falta de confianza por una barba escasa que no crece en zonas clave"],
    "mesoterapia-capilar":       ["Caída de cabello progresiva y devisa que no se detiene", "Cabello sin densidad, fino y sin vitalidad", "Cuero cabelludo con poca circulación y folículos debilitados"],
    "relleno-de-labios":           ["Labios finos, asimétricos o con pérdida de volumen por la edad", "Contorno labial difuminado que envejece el tercio inferior del rostro", "Inseguridad al hablar o sonreír por la apariencia de los labios"],
    "rejuvenecimiento-facial": ["Piel opaca y sin vitalidad", "Deseo de rejuvenecimiento natural", "Pérdida de glow facial"],
  },
  en: {
    "body-massages": ["Visible cellulite and resistant localized fat", "Skin without radiance and loss of firmness", "Stretch marks and signs of premature aging"],
    "relaxing-massages": ["Anxiety and chronic stress that does not subside", "Insomnia and difficulty disconnecting", "Tension in neck, back, and shoulders"],
    "deep-massages": ["Accumulated stress and persistent muscle stiffness", "Heavy body sensation and lack of rest", "Need for deep disconnection and well-being"],
    "post-op-massages": ["Inflammation and fibrosis after surgery", "Slow healing and subcutaneous adhesions", "Fluid accumulation and post-operative pain"],
    "weight-loss": ["Localized fat resistant to diet and exercise", "Excessive volume in abdomen, flanks, and thighs", "Loss of definition and body contour"],
    "body-tightening": ["Visible sagging in arms, abdomen, and thighs", "Loss of firmness and elasticity due to age or weight changes", "Toneless skin that does not respond to exercise"],
    "lymphatic-drainage": ["Fluid retention and persistent swelling", "Heaviness sensation and tired legs", "Accumulated toxins and blocked lymphatic system"],
    "laser-hair-removal": ["Unwanted hair that reappears constantly", "Irritation, folliculitis, and marks from frequent hair removal", "Loss of time and money on temporary methods"],
    "iron-beauty": ["Loss of muscle mass and body tone", "Difficulty combining aesthetics and fitness effectively", "Slow results with conventional training"],
    "carboxytherapy": ["Visible cellulite and resistant localized fat", "Skin without radiance and loss of firmness", "Stretch marks and signs of premature aging"],
    "buttock-lift": ["Drooping buttocks without volume or definition", "Sagging in the gluteal area due to age or weight changes", "Loss of curvature and natural projection"],
    "breast-lift": ["Drooping breast without firmness after breastfeeding or weight changes", "Loss of volume and contour in the neckline", "Sagging in pectoral skin that generates insecurity"],
    "cold-wraps": ["Severe fluid retention and swollen silhouette", "Advanced cellulite and visible orange peel skin", "Heaviness sensation and lack of body definition"],
    "maderotherapy": ["Fat accumulation and embedded cellulite nodules", "Irregular skin, without tone and with orange texture", "Undefined and poorly modeled silhouette"],
    "auriculotherapy": ["Food anxiety and uncontrolled emotional snacking", "Chronic stress that prevents weight loss or sleeping well", "Nervous system imbalance and slow metabolism"],
    "microneedling": ["Dull skin and loss of glow", "Irregular texture and visible pores", "Incipient signs of facial aging"],
    "microneedling-ginkgo": ["Dull skin and loss of glow", "Irregular texture and visible pores", "Incipient signs of facial aging"],
    "microneedling-vitamin-c": ["Dull skin and lack of radiance", "Irregular texture", "Desire for natural rejuvenation"],
    "facials": ["Dull skin, with spots and without radiance", "Dilated pores, imperfections, and lack of hydration", "Premature aging and loss of uniformity"],
    "facial-therapies": ["Dehydrated, tight skin without vitality", "Spots, redness, and irregular texture", "Fine wrinkles and visible loss of elasticity"],
    "chemical-peeling": ["Superficial spots, dull skin, and irregular texture", "Acne scars and post-inflammatory marks", "Excess dead cells that block cell renewal"],
    "hollywood-peel": ["Skin without radiance, gray, and with visible pores", "Acne, comedones, and rough texture", "Tired appearance and lack of facial radiance"],
    "spot-removal": ["Sunspots, melasma, and visible dyschromias", "Irregular tone and lack of facial uniformity", "Hyperpigmentation that does not respond to conventional creams"],
    "facial-radiofrequency": ["Incipient facial sagging and loss of oval", "Expression wrinkles and marked furrows", "Skin without firmness that ages the general appearance"],
    "salmon-dna": ["Aged skin, without deep hydration or radiance", "Wrinkles, sagging, and loss of skin density", "Dull appearance and without vitality that does not improve with creams"],
    "anticellulite-treatment": ["Very visible cellulite on thighs, buttocks, and abdomen", "Resistant orange peel skin and irregular texture", "Poor circulation and heaviness sensation in legs"],
    "tired-legs": ["Heavy, swollen legs and fatigue at the end of the day", "Deficient circulation and fluid retention in extremities", "Cramps, tingling, and toneless skin in calves"],
    "nutrition": ["Disordered eating and goals without results", "Slow metabolism and feeling of permanent block", "Nutritional deficits that affect energy, skin, and well-being"],
    "botox-full-face": ["Marked expression wrinkles on forehead, frown, and crow's feet", "Tired and aged look that does not reflect how you feel", "Loss of facial harmony and traits without softness"],
    "tensor-threads": ["Pronounced facial sagging and loss of oval", "Drooping cheeks, marked jowls, and sagging neck", "Visible aging that topical treatments do not correct"],
    "hair-transplant": ["Progressive alopecia with areas without hair density", "Loss of confidence and self-esteem due to hair loss", "Receding hairline, visible crown, and forehead that recedes over time"],
    "hyaluronic-acid": ["Loss of facial volume and deep nasolabial folds", "Thin and asymmetric lips that project aging", "Deep dark circles and sunken cheekbones that age the face"],
    "biorevitalization": ["Dehydrated skin, without radiance and with diffuse loss of firmness", "Fine wrinkles and irregular texture that creams do not correct", "Dull and vitality-free appearance that does not improve with usual cosmetics"],
    "dark-circles-treatment": ["Dark circles and tear troughs that project permanent tiredness", "Dull appearance that makeup cannot hide", "Loss of radiance in the look that ages the face"],
    "intimate-bleaching": ["Hyperpigmentation and dark spots in intimate areas due to friction or hormones", "Irregular tone in groin, armpits, or bikini area that generates insecurity", "Resistant post-depilation spots that do not improve with creams"],
    "aromatherapy": ["Accumulated stress and daily rhythm that leaves no personal time", "Need for deep disconnection and emotional well-being", "Desire for a premium and personalized sensory experience"],
    "facial-rejuvenation-laser": ["Visible signs of aging and fatigue", "Loss of collagen and natural firmness", "Spots and irregular texture that subtract youth"],
    "beard-implant": ["Irregular beard, with bald spots and without uniform density", "Inability to achieve a defined masculine look with natural beard", "Lack of confidence due to a sparse beard that does not grow in key areas"],
    "hair-mesotherapy": ["Progressive hair loss that does not stop", "Hair without density, thin, and without vitality", "Scalp with poor circulation and weakened follicles"],
    "lip-filler": ["Thin, asymmetric lips or loss of volume due to age", "Blurred lip contour that ages the lower third of the face", "Insecurity when speaking or smiling due to lip appearance"],
    "facial-rejuvenation": ["Dull skin without vitality", "Desire for natural rejuvenation", "Loss of facial glow"],
  }
};

const afterDescMap: Record<string, Record<string, string[]>> = {
  es: {
    "masajes-corporales":        ["Elimina la celulitis y la grasa localizada de forma eficaz", "Estimula la producción natural de colágeno y elastina", "Mejora la circulación y oxigenación del tejido"],
    "botox-full-face":           ["Suaviza arrugas de expresión sin perder naturalidad", "Eleva la mirada y refresca el aspecto general", "Previene la formación de arrugas profundas"],
    "levantamiento-gluteo":      ["Elevación visible y duradera de los glúteos", "Mejora significativa del tono muscular", "Piel más firme, tersa y definida"],
  },
  en: {
    "body-massages": ["Eliminates cellulite and localized fat effectively", "Stimulates the natural production of collagen and elastin", "Improves tissue circulation and oxygenation"],
    "botox-full-face": ["Smooths expression wrinkles without losing naturalness", "Elevates the look and refreshes the general appearance", "Prevents the formation of deep wrinkles"],
    "buttock-lift": ["Visible and lasting lifting of the buttocks", "Significant improvement in muscle tone", "Firmer, smoother, and more defined skin"],
  }
};

const beforeAfterBgMap: Record<string, { before: string; after: string }> = {
  "masajes-corporales": {
    before: "corporales-antes-bg.webp",
    after: "corporales-despues-bg.webp"
  },
  "carboxiterapia": {
    before: "corporales-antes-bg.webp",
    after: "corporales-despues-bg.webp"
  },
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
  "masajes-profundos":         "masajes-relajantes-bg.webp",
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
  "microagujas": "faciales-bg.webp",
  "microagujas-ginkgo-biloba": "faciales-bg.webp",
  "microagujas-vitamina-c": "microagujas-vitamina-c-bg.jpg",
  "rejuvenecimiento-facial": "faciales-bg.webp",
  "limpieza-facial":           "faciales-bg.webp",
  "limpieza-facial-profunda":  "faciales-bg.webp",
  "limpieza-facial-hidratante": "faciales-bg.webp",
  "microdermoabrasion":        "faciales-bg.webp",
  "masaje-maxilofacial":       "faciales-bg.webp",
  "microagujas-melanout":      "faciales-bg.webp",
  "piernas-cansadas":          "piernas-cansadas-bg.webp",
  "nutricion":                 "nutricion-bg.webp",
  "botox-full-face":           "botox-full-face-bg.webp",
  "hilos-tensores":            "hilos-tensores-bg.webp",
  "hilos-colageno":            "hilos-tensores-bg.webp",
  "trasplante-capilar":        "trasplante-capilar-bg.webp",
  "acido-hialuronico":         "acido-hialuronico-bg.webp",
  "biorevitalizacion":         "biorevitalizacion-bg.webp",
  "tratamiento-ojeras":        "acido-hialuronico-bg.webp",
  "blanqueamiento-zona-intima":"depilacion-laser-bg.webp",
  "aromaterapia": "masajes-relajantes-bg.webp",
  "inbody": "about-us.webp",
  "boda-spa": "masajes-relajantes-bg.webp",
  "implante-barba":            "trasplante-capilar-bg.webp",
  "mesoterapia-capilar":       "trasplante-capilar-bg.webp",
  "relleno-de-labios":           "acido-hialuronico-bg.webp",
  "laser-acne": "faciales-bg.webp",
  "rejuvenecimiento-facial-laser": "faciales-bg.webp",
  "mascarillas-faciales": "faciales-bg.webp",
  "arteterapia": "masajes-relajantes-bg.webp",
  "nuevo-servicio-1": "hero-bg.webp",
  "nuevo-servicio-2": "hero-bg.webp",
  "nuevo-servicio-3": "hero-bg.webp",
};

const serviceCategoryMap: Record<string, { name: string; href: string }> = {
  "masajes-corporales":        { name: "Tratamientos Corporales", href: "/servicios/corporales" },
  "masajes-relajantes":        { name: "Tratamientos Corporales", href: "/servicios/corporales" },
  "masajes-profundos":         { name: "Tratamientos Corporales", href: "/servicios/corporales" },
  "masajes-post-operatorios":  { name: "Tratamientos Corporales", href: "/servicios/corporales" },
  "reduccion-de-medidas":      { name: "Tratamientos Corporales", href: "/servicios/corporales" },
  "tensado-corporal":          { name: "Tratamientos Corporales", href: "/servicios/corporales" },
  "drenaje-linfatico":         { name: "Tratamientos Corporales", href: "/servicios/corporales" },
  "depilacion-laser":          { name: "Tratamientos Corporales", href: "/servicios/corporales" },
  "iron-beauty-fitness":       { name: "Tratamientos Corporales", href: "/servicios/corporales" },
  "carboxiterapia":            { name: "Tratamientos Corporales", href: "/servicios/corporales" },
  "levantamiento-gluteo":      { name: "Tratamientos Corporales", href: "/servicios/corporales" },
  "levantamiento-busto":       { name: "Tratamientos Corporales", href: "/servicios/corporales" },
  "vendas-frias":              { name: "Tratamientos Corporales", href: "/servicios/corporales" },
  "maderoterapia":             { name: "Tratamientos Corporales", href: "/servicios/corporales" },
  "auriculoterapia":           { name: "Tratamientos Corporales", href: "/servicios/corporales" },
  "microagujas": { name: "Tratamientos Faciales", href: "/servicios/faciales" },
  "microagujas-ginkgo-biloba": { name: "Tratamientos Faciales", href: "/servicios/faciales" },
  "microagujas-vitamina-c": { name: "Tratamientos Faciales", href: "/servicios/faciales" },
  "rejuvenecimiento-facial": { name: "Tratamientos Faciales", href: "/servicios/faciales" },
  "rejuvenecimiento-facial-laser": { name: "Tratamientos Faciales", href: "/servicios/faciales" },
  "limpieza-facial":           { name: "Tratamientos Faciales", href: "/servicios/faciales" },
  "masaje-maxilofacial":       { name: "Tratamientos Faciales", href: "/servicios/faciales" },
  "faciales":                  { name: "Tratamientos Faciales",   href: "/servicios/faciales"   },
  "adn-salmon":                { name: "Tratamientos Faciales",   href: "/servicios/faciales"   },
  "terapias-faciales":         { name: "Tratamientos Faciales",   href: "/servicios/faciales"   },
  "peeling-quimico":           { name: "Tratamientos Faciales",   href: "/servicios/faciales"   },
  "laser-acne":                { name: "Tratamientos Faciales",   href: "/servicios/faciales"   },
  "hollywood-peel":            { name: "Tratamientos Faciales",   href: "/servicios/faciales"   },
  "eliminacion-manchas":       { name: "Tratamientos Faciales",   href: "/servicios/faciales"   },
  "radiofrecuencia-facial":    { name: "Tratamientos Faciales",   href: "/servicios/faciales"   },
  "tratamiento-anticelulitis": { name: "Tratamientos de Piernas", href: "/servicios/piernas"    },
  "piernas-cansadas":          { name: "Tratamientos de Piernas", href: "/servicios/piernas"    },
  "tratamiento-ojeras":        { name: "Tratamientos Faciales",   href: "/servicios/faciales"   },
  "blanqueamiento-zona-intima":{ name: "Tratamientos Corporales", href: "/servicios/corporales"  },
  "aromaterapia": { name: "Tratamientos Corporales", href: "/servicios/corporales" },
  "boda-spa": { name: "Tratamientos Corporales", href: "/servicios/corporales" },
  "inbody": { name: "Médico Estético",     href: "/medicos-esteticos"        },
  "implante-barba":            { name: "Médico Estético",     href: "/medicos-esteticos"        },
  "mesoterapia-capilar":       { name: "Médico Estético",     href: "/medicos-esteticos"        },
  "relleno-de-labios":           { name: "Médico Estético",     href: "/medicos-esteticos"        },
  "botox-full-face":             { name: "Médico Estético",     href: "/medicos-esteticos"        },
  "nutricion":                   { name: "Médico Estético",     href: "/medicos-esteticos"        },
  "trasplante-capilar":          { name: "Médico Estético",     href: "/medicos-esteticos"        },
  "hilos-tensores":              { name: "Médico Estético",     href: "/medicos-esteticos"        },
  "hilos-colageno":              { name: "Tratamientos Faciales", href: "/servicios/faciales"   },
  "acido-hialuronico":           { name: "Médico Estético",     href: "/medicos-esteticos"        },
  "biorevitalizacion":           { name: "Médico Estético",     href: "/medicos-esteticos"        },
  "mascarillas-faciales":        { name: "Tratamientos Faciales", href: "/servicios/faciales"   },
  "limpieza-facial-profunda":    { name: "Tratamientos Faciales", href: "/servicios/faciales"   },
  "limpieza-facial-hidratante":  { name: "Tratamientos Faciales", href: "/servicios/faciales"   },
  "microdermoabrasion":          { name: "Tratamientos Faciales", href: "/servicios/faciales"   },
  "microagujas-melanout":        { name: "Tratamientos Faciales", href: "/servicios/faciales"   },
  "arteterapia":                 { name: "MJ Creativo",           href: "/servicios/arteterapia"   },
  "nuevo-servicio-1":            { name: "Servicios",             href: "/servicios"              },
  "nuevo-servicio-2":            { name: "Servicios",             href: "/servicios"              },
  "nuevo-servicio-3":            { name: "Servicios",             href: "/servicios"              },
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

function ServicePage({ service, lang = 'es' }: { service: ServicePageData, lang?: 'es' | 'en' }) {
  const t = useTranslations(lang);
  const categoryRaw = serviceCategoryMap[service.slug];
  const category = categoryRaw ? {
    ...categoryRaw,
    name: lang === 'es' ? categoryRaw.name : (
      categoryRaw.name === "Tratamientos Corporales" ? "Body Treatments" :
      categoryRaw.name === "Tratamientos Faciales" ? "Facial Treatments" :
      categoryRaw.name === "Tratamientos de Piernas" ? "Leg Treatments" :
      categoryRaw.name === "Médico Estético" ? "Medical Aesthetic" :
      categoryRaw.name === "MJ Creativo" ? "MJ Creative" : categoryRaw.name
    ),
    href: lang === 'es' ? categoryRaw.href : (
      categoryRaw.href === "/servicios/corporales" ? "/en/services/body-treatments" :
      categoryRaw.href === "/servicios/faciales" ? "/en/services/facials" :
      categoryRaw.href === "/servicios/piernas" ? "/en/services/leg-treatments" :
      categoryRaw.href === "/medicos-esteticos" ? "/en/medical-aesthetic" :
      categoryRaw.href === "/servicios/arteterapia" ? "/en/services/art-therapy" : categoryRaw.href
    )
  } : undefined;

  const alternateSlug = lang === 'es'
    ? servicePages.find(s => s.es.slug === service.slug)?.en.slug
    : servicePages.find(s => s.en.slug === service.slug)?.es.slug;

  const alternatePath = lang === 'es'
    ? `/en/services/${alternateSlug}`
    : `/servicios/${alternateSlug}`;

  // WebMCP Integration: Register service details tool
  useEffect(() => {
    // @ts-ignore
    if (typeof window !== "undefined" && "navigator" in window && "modelContext" in window.navigator) {
      const controller = new AbortController();
      const tool = {
        name: `detalles-servicio-${service.slug}`,
        description: `Obtiene información detallada sobre el tratamiento de ${service.name} en MJ Estética.`,
        inputSchema: {
          type: "object",
          properties: {},
          required: []
        },
        execute: () => {
          return {
            content: [{
              type: "text",
              text: `Servicio: ${service.name}\nEslogan: ${service.tagline}\nDescripción: ${service.heroDescription.replace(/<br \/>/g, '\n')}\nBeneficios: ${service.benefits.join(', ')}\n\n¿Deseas reservar una valoración gratuita para este tratamiento?`
            }]
          };
        }
      };

      try {
        // @ts-ignore
        window.navigator.modelContext.registerTool(tool, { signal: controller.signal });
      } catch (e) {
        console.warn("WebMCP tool registration failed", e);
      }

      return () => controller.abort();
    }
    return undefined;
  }, [service.slug, service.name]);

  const BASE = import.meta.env.BASE_URL;

  const isNutritionEspecialist = service.slug === "nutricion" || service.slug === "inbody";
  const isPeelingSpecialist = service.slug === "peeling-quimico" || service.slug === "microdermoabrasion";
  const isPsychologySpecialist = service.slug === "psicologia-infantil";

  const specialistName = isPeelingSpecialist
    ? "Maria Molina Madrigal"
    : isNutritionEspecialist
    ? "Dr. Johan"
    : isPsychologySpecialist
    ? "Mast. Cristina Pere Ibarra"
    : "Janneth Maria Molina Madrigal";

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

  const heroBg = service.heroBg?.startsWith("http")
    ? service.heroBg
    : `${BASE}images/${heroBgMap[service.slug] ?? service.heroBg ?? "hero-bg.webp"}`;

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={service.fullTitle ?? service.name}
        description={`${service.tagline} — ${service.heroDescription.replace(/<[^>]*>?/gm, '').slice(0, 120)}. MJ Fisio Estética y Spa, Turrialba, Costa Rica.`}
        canonical={lang === 'es' ? `/servicios/${service.slug}` : `/en/services/${service.slug}`}
        alternateUrl={alternatePath}
        lang={lang}
      />
      <Navbar lang={lang} alternateLink={alternatePath} />

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-end pb-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/90" />

        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-[194px] pb-16 mt-[40px]">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-8">
              <Breadcrumb items={breadcrumbItems} variant="dark" />
            </motion.div>

            <motion.p variants={fadeUp} className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">
              {service.tagline}
            </motion.p>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6 max-w-3xl">
              {service.fullTitle ?? service.name}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-white/65 text-base md:text-lg max-w-2xl leading-relaxed mb-10"
              dangerouslySetInnerHTML={{ __html: service.heroDescription }}
            />

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
                {t('service.hero.wa')}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              {category && (
                <a href={category.href}>
                  <span className="inline-flex items-center gap-2 text-white/60 text-sm font-medium border-b border-white/20 pb-0.5 hover:text-white hover:border-white transition-colors cursor-pointer">
                    {t('service.hero.viewall')} {category.name.toLowerCase()}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────── */}
      {!["depilacion-laser"].includes(service.slug) && (
      <section className="bg-[#040f19] py-5 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: <Star className="w-4 h-4 fill-primary text-primary" />, text: lang === 'es' ? "5★ en Google" : "5★ on Google" },
            { icon: <ShieldCheck className="w-4 h-4 text-primary" />,       text: lang === 'es' ? "100% no invasivo" : "100% non-invasive" },
            { icon: <Award className="w-4 h-4 text-primary" />,             text: lang === 'es' ? "Profesionales certificados" : "Certified professionals" },
            { icon: <MessageCircle className="w-4 h-4 text-primary" />,     text: lang === 'es' ? "Valoración gratuita" : "Free assessment" },
          ].map((t_item) => (
            <div key={t_item.text} className="flex items-center justify-center gap-2">
              {t_item.icon}
              <span className="text-white/60 text-xs font-medium tracking-wide">{t_item.text}</span>
            </div>
          ))}
        </div>
      </section>
      )}

      {!["depilacion-laser", "peeling-quimico", "aromaterapia", "blanqueamiento-zona-intima", "rejuvenecimiento-facial-laser", "tratamiento-ojeras", "terapias-faciales", "microagujas-melanout"].includes(service.slug) && <StatsBar lang={lang} />}


      {/* ── LINC FISIO TERAPIA – PROFESIONAL RESPONSABLE ── */}
      {!["botox-full-face","hilos-tensores","relleno-de-labios","acido-hialuronico","trasplante-capilar","implante-barba","mesoterapia-capilar","biorevitalizacion"].includes(service.slug) && (
      <section className="py-10 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-stone-50 border border-stone-200 rounded-sm overflow-hidden"
          >
            <div className="bg-primary px-6 py-3 flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-white shrink-0" />
              <span className="text-white text-[10px] font-bold tracking-[0.35em] uppercase">{isNutritionEspecialist ? t('service.professional.specialist') : t('service.professional.responsible')}</span>
            </div>
            <div className="px-6 py-6 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="shrink-0 w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30">
                <img
                  src={isNutritionEspecialist ? "/images/dr-johan.webp" : isPeelingSpecialist ? "/images/maria-molina.webp" : isPsychologySpecialist ? "https://cdn.sanity.io/images/c7ltnbh1/production/4e8f015f6997a29f0ac99c3b232c9ed35f40ba63-800x800.jpg?w=300" : "/images/janneth-molina.webp"}
                  alt={specialistName}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    // Fallback to janneth if maria image is missing
                    if (isPeelingSpecialist) {
                      (e.target as HTMLImageElement).src = "/images/janneth-molina.webp";
                    }
                  }}
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-1">
                  {specialistName}
                </h3>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
                  <span className="inline-flex items-center gap-1.5 bg-primary/8 text-primary text-xs font-semibold px-3 py-1.5 rounded-full border border-primary/20">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    {isNutritionEspecialist ? `${t('service.professional.code')}: 3667-25` : isPsychologySpecialist ? `${t('service.professional.code')}: 15152` : t('service.professional.linc')}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-stone-100 text-stone-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-stone-200">
                    <GraduationCap className="w-3.5 h-3.5" />
                    {isNutritionEspecialist ? (lang === 'es' ? "Nutricionista Deportivo" : "Sports Nutritionist") : isPsychologySpecialist ? (lang === 'es' ? "Psicología Infantil y Familiar" : "Child & Family Psychology") : t('service.professional.aesthetic')}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-stone-100 text-stone-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-stone-200">
                    <Award className="w-3.5 h-3.5 text-primary" />
                    {isNutritionEspecialist ? t('service.professional.personalized') : t('service.professional.hospital')}
                  </span>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed mt-4 max-w-xl">
                  {service.slug === "peeling-quimico"
                    ? (lang === 'es'
                        ? "Con amplia experiencia en medicina estética, Maria Molina Madrigal se especializa en protocolos de renovación cutánea y tratamientos avanzados para manchas y acné, brindando resultados seguros y personalizados."
                        : "With extensive experience in medical aesthetics, Maria Molina Madrigal specializes in skin renewal protocols and advanced treatments for spots and acne, providing safe and personalized results.")
                    : service.slug === "psicologia-infantil"
                    ? (lang === 'es'
                        ? "Especialista en psicología infantil y familiar, con un enfoque cálido, empático y profesional. Cristina Pérez Ibarra acompaña a los niños y sus familias a comprender el origen de sus retos conductuales o del neurodesarrollo y construir herramientas prácticas para la vida diaria."
                        : "Specialist in child and family psychology, with a warm, empathetic, and professional approach. Cristina Pérez Ibarra accompanies children and their families to understand the origin of their behavioral or neurodevelopmental challenges and build practical tools for daily life.")
                    : service.slug === "tratamiento-ojeras"
                    ? (lang === 'es'
                        ? "¿Tus ojeras te hacen lucir cansada aunque descanses bien? Descubre cómo nuestro tratamiento de carboxiterapia para ojeras en Turrialba puede ayudarte a mejorar la apariencia de bolsas, pigmentación oscura y signos visibles de fatiga."
                        : "Do your dark circles make you look tired even when you rest well? Discover how our carboxytherapy treatment for dark circles in Turrialba can help you improve the appearance of bags, dark pigmentation, and visible signs of fatigue.")
                    : service.slug === "aromaterapia"
                    ? (lang === 'es'
                        ? "¿Sientes que el estrés, las responsabilidades y el ritmo diario no te dejan tiempo para ti? En MJ Estética & Wellness Center, hemos creado una experiencia de aromaterapia en Turrialba diseñada para ayudarte a disfrutar de momentos de relajación profunda, bienestar integral y autocuidado en un ambiente cómodo, privado y totalmente personalizado."
                        : "Do you feel that stress, responsibilities, and the daily rhythm leave you no time for yourself? At MJ Estética & Wellness Center, we have created an aromatherapy experience in Turrialba designed to help you enjoy moments of deep relaxation, integral well-being, and self-care in a comfortable, private, and totally personalized environment.")
                    : service.slug === "rejuvenecimiento-facial-laser"
                    ? (lang === 'es'
                        ? "¿Buscas recuperar la firmeza y luminosidad de tu piel sin cirugías? Nuestro tratamiento de rejuvenecimiento facial con láser en Turrialba está diseñado para estimular el colágeno natural y devolverle a tu rostro una apariencia fresca, saludable y juvenil."
                        : "Looking to recover the firmness and luminosity of your skin without surgeries? Our laser facial rejuvenation treatment in Turrialba is designed to stimulate natural collagen and give your face a fresh, healthy, and youthful appearance.")
                    : (service.slug === "nutricion" || service.slug === "inbody")
                    ? (lang === 'es'
                        ? "Transforma tus hábitos alimenticios con acompañamiento profesional y un plan nutricional diseñado específicamente para ti."
                        : "Transform your eating habits with professional guidance and a nutritional plan designed specifically for you.")
                    : (lang === 'es'
                        ? "La estética es una pasión que ha formado parte de mi vida desde siempre. Me inspira la belleza en todas sus formas y me dedico a realzar la belleza natural de cada persona, ayudándoles a sentirse seguras y radiantes."
                        : "Aesthetics is a passion that has always been part of my life. I am inspired by beauty in all its forms and I am dedicated to enhancing the natural beauty of each person, helping them feel confident and radiant.")
                  }
                </p>
                {service.slug === "aromaterapia" && (
                  <div className="flex flex-col gap-3 mt-6">
                    <div className="flex items-center gap-2 text-stone-700 text-sm font-bold uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-primary" /> {lang === 'es' ? "Atención personalizada" : "Personalized attention"}
                    </div>
                    <div className="flex items-center gap-2 text-stone-700 text-sm font-bold uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-primary" /> {lang === 'es' ? "Protocolos wellness premium" : "Premium wellness protocols"}
                    </div>
                    <div className="flex items-center gap-2 text-stone-700 text-sm font-bold uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-primary" /> {lang === 'es' ? "Ambiente relajante y sensorial" : "Relaxing and sensory environment"}
                    </div>
                    <div className="flex items-center gap-2 text-stone-700 text-sm font-bold uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-primary" /> {lang === 'es' ? "Espacios privados y confortables" : "Private and comfortable spaces"}
                    </div>
                    <div className="flex items-center gap-2 text-stone-700 text-sm font-bold uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-primary" /> {lang === 'es' ? "Ubicación accesible en Turrialba" : "Accessible location in Turrialba"}
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <a href={WA} target="_blank" rel="noopener noreferrer" className="bg-primary text-white text-[10px] font-bold px-5 py-3 tracking-widest uppercase hover:bg-stone-900 transition-colors">
                        {t('service.professional.wa_write')}
                      </a>
                      <a href={WA} target="_blank" rel="noopener noreferrer" className="border border-stone-900 text-stone-900 text-[10px] font-bold px-5 py-3 tracking-widest uppercase hover:bg-stone-900 hover:text-white transition-colors">
                        {t('service.professional.check_avail')}
                      </a>
                      <a href={WA} target="_blank" rel="noopener noreferrer" className="border border-stone-400 text-stone-500 text-[10px] font-bold px-5 py-3 tracking-widest uppercase hover:bg-stone-900 hover:text-white transition-colors">
                        {t('service.professional.visit')}
                      </a>
                    </div>
                  </div>
                )}
                {service.slug === "tratamiento-ojeras" && (
                  <div className="flex flex-col gap-3 mt-6">
                    <div className="flex items-center gap-2 text-stone-700 text-sm font-bold uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-primary" /> {lang === 'es' ? "Valoración Personalizada" : "Personalized Assessment"}
                    </div>
                    <div className="flex items-center gap-2 text-stone-700 text-sm font-bold uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-primary" /> {lang === 'es' ? "Tratamiento No Quirúrgico" : "Non-Surgical Treatment"}
                    </div>
                    <div className="flex items-center gap-2 text-stone-700 text-sm font-bold uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-primary" /> {lang === 'es' ? "Atención Profesional en Turrialba" : "Professional Attention in Turrialba"}
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <a href={WA} target="_blank" rel="noopener noreferrer" className="bg-primary text-white text-[10px] font-bold px-5 py-3 tracking-widest uppercase hover:bg-stone-900 transition-colors">
                        {t('service.professional.schedule_wa')}
                      </a>
                      <a href={WA} target="_blank" rel="noopener noreferrer" className="border border-stone-900 text-stone-900 text-[10px] font-bold px-5 py-3 tracking-widest uppercase hover:bg-stone-900 hover:text-white transition-colors">
                        {t('service.professional.guide_free')} {lang === 'es' ? "para Ojeras" : "for Dark Circles"}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* ── NUTRITION LEAD MAGNET (OUTSIDE CARD) ── */}
          {service.slug === "nutricion" && (
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="mt-12"
            >
              <div className="max-w-xl mx-auto">
                <p className="text-stone-600 text-base leading-relaxed mb-8">
                  {lang === 'es'
                    ? "En MJ Estética & Wellness Center ayudamos a personas de Turrialba, Cartago y zonas cercanas a mejorar su alimentación, desarrollar hábitos sostenibles y alcanzar objetivos de bienestar mediante consultas nutricionales personalizadas."
                    : "At MJ Estética & Wellness Center we help people from Turrialba, Cartago, and nearby areas improve their nutrition, develop sustainable habits, and achieve well-being goals through personalized nutritional consultations."}
                </p>

                <div className="flex flex-col gap-3 mb-10">
                  <div className="flex items-center gap-2 text-stone-700 text-sm font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> {lang === 'es' ? "Valoración Nutricional Profesional" : "Professional Nutritional Assessment"}
                  </div>
                  <div className="flex items-center gap-2 text-stone-700 text-sm font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> {lang === 'es' ? "Plan Nutricional Personalizado" : "Personalized Nutritional Plan"}
                  </div>
                  <div className="flex items-center gap-2 text-stone-700 text-sm font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> {lang === 'es' ? "Seguimiento y Acompañamiento" : "Follow-up and Guidance"}
                  </div>
                  <div className="flex items-center gap-2 text-stone-700 text-sm font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> {lang === 'es' ? "Nutrición para Bienestar y Estética" : "Nutrition for Well-being and Aesthetics"}
                  </div>
                  <div className="flex items-center gap-2 text-stone-700 text-sm font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> {lang === 'es' ? "Atención en Turrialba" : "Attention in Turrialba"}
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/20 p-8 sm:p-10 rounded-sm">
                   <p className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4">🎁 {lang === 'es' ? "Descarga GRATIS la Guía:" : "Download the Guide for FREE:"}</p>
                   <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4 leading-tight">{t('service.nutrition.guide_title')}</h3>
                   <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                     {lang === 'es'
                        ? "Aprende hábitos simples que pueden ayudarte a sentirte mejor, organizar tu alimentación y potenciar tus resultados."
                        : "Learn simple habits that can help you feel better, organize your eating, and boost your results."}
                   </p>
                   <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-white text-[10px] font-bold px-8 py-5 tracking-widest uppercase hover:bg-stone-900 transition-colors shadow-lg">
                     <Download className="w-4 h-4" /> {t('service.nutrition.guide_cta')}
                   </a>
                   <p className="text-stone-400 text-[10px] mt-4 uppercase tracking-widest">{t('service.nutrition.guide_request')}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
      )}

      {/* ── CUSTOM CONTENT: DEPILACIÓN LÁSER ────────────────── */}
      {service.slug === "depilacion-laser" && (
        <LaserServiceContent service={service} waLink={WA} lang={lang} />
      )}

      {/* ── CUSTOM CONTENT: HIDROLIPOCLASIA ────────────────── */}
      {service.slug === "masajes-corporales" && (
        <HydrolipoclasiaContent waLink={WA} lang={lang} />
      )}
      {service.slug === "masajes-profundos" && (
        <MasajeProfundoContent waLink={WA} lang={lang} />
      )}

      {/* ── CUSTOM CONTENT: CARBOXITERAPIA ────────────────── */}
      {service.slug === "carboxiterapia" && (
        <CarboxiterapiaContent service={service} waLink={WA} lang={lang} />
      )}
      {/* ── CUSTOM CONTENT: ANTICELULITIS ──────────────────── */}
      {service.slug === "tratamiento-anticelulitis" && (
        <AnticelulitisServiceContent service={service} waLink={WA} lang={lang} />
      )}
      {service.slug === "auriculoterapia" && (
        <AuriculoterapiaContent waLink={WA} lang={lang} />
      )}
      {service.slug === "microagujas" && (
        <MicroagujasContent waLink={WA} lang={lang} />
      )}
      {service.slug === "microagujas-ginkgo-biloba" && (
        <MicroagujasGinkgoContent waLink={WA} lang={lang} />
      )}
      {service.slug === "microagujas-vitamina-c" && (
        <MicroagujasVitaminaCContent waLink={WA} lang={lang} />
      )}
      {service.slug === "rejuvenecimiento-facial" && (
        <RejuvenecimientoFacialContent waLink={WA} faq={service.faq} lang={lang} />
      )}
      {service.slug === "masajes-relajantes" && (
        <MasajeRelajanteContent service={service} waLink={WA} lang={lang} />
      )}
      {service.slug === "microdermoabrasion" && (
        <MicrodermoabrasionContent service={service} waLink={WA} lang={lang} />
      )}

      {service.slug === "peeling-quimico" && (
        <PeelingFacialContent waLink={WA} lang={lang} />
      )}

      {service.slug === "terapias-faciales" && (
        <TerapiasFacialesContent waLink={WA} lang={lang} />
      )}

      {service.slug === "masaje-maxilofacial" && (
        <MasajeMaxilofacialContent waLink={WA} lang={lang} />
      )}

      {service.slug === "laser-acne" && (
        <LaserAcneContent waLink={WA} lang={lang} />
      )}

      {service.slug === "microagujas-melanout" && (
        <MelanOutContent waLink={WA} lang={lang} />
      )}

      {service.slug === "mascarillas-faciales" && (
        <MascarillasFacialesContent waLink={WA} lang={lang} />
      )}

      {service.slug === "limpieza-facial" && (
        <LimpiezaFacialContent service={service} waLink={WA} lang={lang} />
      )}

      {(service.slug === "limpieza-facial-profunda" || service.slug === "limpieza-facial-hidratante") && (
        <LimpiezaHidratanteContent waLink={WA} lang={lang} />
      )}

      {service.slug === "tratamiento-ojeras" && (
        <OjerasServiceContent waLink={WA} lang={lang} />
      )}

      {service.slug === "aromaterapia" && (
        <AromaterapiaContent waLink={WA} lang={lang} />
      )}

      {service.slug === "rejuvenecimiento-facial-laser" && (
        <RejuvenecimientoLaserContent waLink={WA} lang={lang} />
      )}

      {service.slug === "boda-spa" && (
        <BodaSpaContent waLink={WA} lang={lang} />
      )}

      {service.slug === "arteterapia" && (
        <ArteterapiaContent waLink={WA} lang={lang} />
      )}

      {service.slug === "psicologia-infantil" && (
        <PsicologiaInfantilContent waLink={WA} lang={lang} />
      )}

      {service.slug === "nutricion" && (
        <NutricionServiceContent waLink={WA} lang={lang} />
      )}

      {service.slug === "inbody" && (
        <InBodyServiceContent waLink={WA} lang={lang} />
      )}

      {/* ── MÉDICO ESPECIALISTA ────────────────────────── */}
      {service.slug === "masajes-post-operatorios" && (
        <PostOpServiceContent waLink={WA} lang={lang} />
      )}
      {(() => {
        const doctorMap: Record<string, { name: string; code: string; specialty: string; photo?: string; bio: string }> = {
          "trasplante-capilar":  { name: "Dr. Ruddy Jiménez Montero", code: "13583",  specialty: "Master en Cirugía Capilar",     photo: "dr-ruddy-jimenez.webp",  bio: "Especialista con formación de posgrado en cirugía capilar. Realiza cada procedimiento con técnicas de última generación garantizando resultados naturales, seguros y permanentes." },
          "implante-barba":      { name: "Dr. Ruddy Jiménez Montero", code: "13583",  specialty: "Master en Cirugía Capilar",     photo: "dr-ruddy-jimenez.webp",  bio: "Especialista con formación de posgrado en cirugía capilar. Realiza cada procedimiento con técnicas de última generación garantizando resultados naturales, seguros y permanentes." },
          "mesoterapia-capilar": { name: "Dr. Ruddy Jiménez Montero", code: "13583",  specialty: "Master en Cirugía Capilar",     photo: "dr-ruddy-jimenez.webp",  bio: "Especialista con formación de posgrado en cirugía capilar. Realiza cada procedimiento con técnicas de última generación garantizando resultados naturales, seguros y permanentes." },
          "botox-full-face":     { name: "Dr. Ricard Araya",           code: "323106", specialty: "Armonizador Facial",  photo: "dr-ricard-araya.webp",   bio: "Médico especialista en medicina estética y tratamientos faciales mínimamente invasivos. Experto en toxina botulínica, ácido hialurónico e hilos tensores con enfoque en resultados naturales." },
          "acido-hialuronico":   { name: "Dr. Ricard Araya",           code: "323106", specialty: "Armonizador Facial",  photo: "dr-ricard-araya.webp",   bio: "Médico especialista en medicina estética y tratamientos faciales mínimamente invasivos. Experto en toxina botulínica, ácido hialurónico e hilos tensores con enfoque en resultados naturales." },
          "hilos-tensores":      { name: "Dr. Ricard Araya",           code: "323106", specialty: "Armonizador Facial",  photo: "dr-ricard-araya.webp",   bio: "Médico especialista en medicina estética y tratamientos faciales mínimamente invasivos. Experto en toxina botulínica, ácido hialurónico e hilos tensores con enfoque en resultados naturales." },
          "relleno-de-labios":     { name: "Dr. Ricard Araya",           code: "323106", specialty: "Armonizador Facial",  photo: "dr-ricard-araya.webp",   bio: "Médico especialista en medicina estética y tratamientos faciales mínimamente invasivos. Experto en toxina botulínica, ácido hialurónico e hilos tensores con enfoque en resultados naturales." },
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
                <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-3">{t('service.professional.specialist')}</p>
                <h2 className="text-3xl font-serif font-bold text-stone-900">{lang === 'es' ? "Tu procedimiento en manos expertas" : "Your procedure in expert hands"}</h2>
              </motion.div>
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-white border border-stone-200 shadow-sm rounded-sm overflow-hidden"
              >
                <div className="bg-[#071e2e] px-8 py-5 flex items-center gap-3">
                  <UserCheck className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-white/70 text-xs font-bold tracking-[0.35em] uppercase">{lang === 'es' ? "Médico Certificado" : "Certified Doctor"}</span>
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
                        {lang === 'es' ? "Código Médico:" : "Medical Code:"} {doctor.code}
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-stone-100 text-stone-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-stone-200">
                        <GraduationCap className="w-3.5 h-3.5" />
                        {lang === 'es' ? doctor.specialty : (
                          doctor.specialty === "Armonizador Facial" ? "Facial Harmonizer" :
                          doctor.specialty === "Master en Cirugía Capilar" ? "Master in Hair Surgery" : doctor.specialty
                        )}
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-stone-100 text-stone-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-stone-200">
                        <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                        {lang === 'es' ? "Registro CCSS verificado" : "CCSS Registration verified"}
                      </span>
                    </div>
                    <p className="text-stone-500 text-sm leading-relaxed mt-5 max-w-xl">
                      {lang === 'es' ? doctor.bio : (
                        doctor.name === "Dr. Ricard Araya"
                          ? "Medical specialist in medical aesthetics and minimally invasive facial treatments. Expert in botulinum toxin, hyaluronic acid, and tensor threads with a focus on natural results."
                          : "Specialist with postgraduate training in hair surgery. Performs each procedure with state-of-the-art techniques guaranteeing natural, safe, and permanent results."
                      )}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })()}

      {/* ── CUSTOM CONTENT: LEVANTAMIENTO DE GLÚTEO ─────────── */}
      {service.slug === "levantamiento-gluteo" && (
        <GluteoServiceContent service={service} waLink={WA} lang={lang} />
      )}

      {/* ── CUSTOM CONTENT: IRON BEAUTY FITNESS ─────────── */}
      {service.slug === "iron-beauty-fitness" && (
        <IronBeautyServiceContent waLink={WA} lang={lang} />
      )}

      {/* ── CUSTOM CONTENT: VENDAS FRÍAS ─────────── */}
      {service.slug === "vendas-frias" && (
        <VendasFriasContent service={service} waLink={WA} lang={lang} />
      )}

      {/* ── CUSTOM CONTENT: LÁSER DESPIGMENTANTE ─────────── */}
      {service.slug === "blanqueamiento-zona-intima" && (
        <BlanqueamientoIntimoContent service={service} waLink={WA} lang={lang} />
      )}

      {/* ── CUSTOM CONTENT: HOLLYWOOD PEEL ─────────── */}
      {service.slug === "hollywood-peel" && (
        <HollywoodPeelContent service={service} waLink={WA} lang={lang} />
      )}

      {/* ── CUSTOM CONTENT: HILOS DE COLÁGENO ─────────── */}
      {service.slug === "hilos-colageno" && (
        <HilosColagenoContent service={service} waLink={WA} lang={lang} />
      )}

      {/* ── CUSTOM CONTENT: TRASPLANTE CAPILAR ─────────── */}
      {service.slug === "trasplante-capilar" && (
        <TrasplanteCapilarContent service={service} waLink={WA} lang={lang} />
      )}

      {/* ── CUSTOM CONTENT: RELLENO DE LABIOS ─────────── */}
      {service.slug === "relleno-de-labios" && (
        <LipFillerContent waLink={WA} lang={lang} />
      )}

      {/* ── BOTOX CUSTOM SECTIONS ────────────────── */}
      {service.slug === "botox-full-face" && (
        <BotoxServiceContent waLink={WA} faq={service.faq} lang={lang} />
      )}
      {/* ── HILOS TENSORES CUSTOM SECTIONS ─────────── */}
      {service.slug === "hilos-tensores" && (
        <HilosTensoresContent waLink={WA} faq={service.faq} lang={lang} />
      )}


      {/* ── ADN SALMON CUSTOM SECTIONS ────────────────── */}
      {service.slug === "adn-salmon" && (
        <AdnSalmonContent waLink={WA} lang={lang} />
      )}

      {/* ── BUSTO CUSTOM SECTIONS ────────────────── */}
      {service.slug === "levantamiento-busto" && (
        <BustoServiceContent service={service} waLink={WA} lang={lang} />
      )}

      {/* ── TENSADO CUSTOM SECTIONS ────────────────── */}
      {service.slug === "tensado-corporal" && (
        <TensadoServiceContent service={service} waLink={WA} lang={lang} />
      )}

      {/* ── BENEFITS ─────────────────────────────────── */}
      {!["depilacion-laser", "carboxiterapia", "tensado-corporal", "masajes-post-operatorios", "botox-full-face", "hilos-tensores", "masajes-profundos", "levantamiento-gluteo", "levantamiento-busto", "iron-beauty-fitness", "vendas-frias", "blanqueamiento-zona-intima", "hollywood-peel", "hilos-colageno", "trasplante-capilar", "relleno-de-labios", "tratamiento-anticelulitis", "auriculoterapia", "microagujas", "microagujas-ginkgo-biloba", "microagujas-vitamina-c", "rejuvenecimiento-facial", "rejuvenecimiento-facial-laser", "limpieza-facial", "tratamiento-ojeras", "aromaterapia", "peeling-quimico", "nutricion", "terapias-faciales", "inbody", "masaje-maxilofacial", "limpieza-facial-profunda", "limpieza-facial-hidratante", "laser-acne", "microagujas-melanout", "mascarillas-faciales", "boda-spa", "arteterapia"].includes(service.slug) && (
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-10"
          >
            <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-3">{lang === 'es' ? "Beneficios" : "Benefits"}</p>
            <h2 className="text-3xl font-serif font-bold text-stone-900">
              {service.slug === "adn-salmon" ? (lang === 'es' ? "✨ BENEFICIOS DEL TRATAMIENTO" : "✨ TREATMENT BENEFITS") :
               service.slug === "depilacion-laser" ? (lang === 'es' ? "Beneficios reales que notarás" : "Real benefits you will notice") :
               (lang === 'es' ? "¿Por qué elegir este tratamiento?" : "Why choose this treatment?")}
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
                {service.slug === "depilacion-laser" ? (
                  <span className="shrink-0 mt-0.5 text-sm">✅</span>
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                )}
                <span className="text-sm text-stone-700 font-medium leading-snug">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {service.slug === "adn-salmon" && (
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="mt-10 text-center text-stone-600 font-medium italic max-w-2xl mx-auto"
            >
              {lang === 'es'
                ? "Este tratamiento es ideal si deseas verte más fresca, descansada y saludable sin perder naturalidad."
                : "This treatment is ideal if you want to look fresher, more rested, and healthy without losing naturalness."}
            </motion.p>
          )}
        </div>
      </section>
      )}

      {/* ── SERVICE ITEMS ─────────────────────────────── */}
      {!["adn-salmon", "masajes-corporales", "masajes-profundos", "carboxiterapia", "tensado-corporal", "masajes-post-operatorios", "botox-full-face", "hilos-tensores", "masajes-profundos", "levantamiento-gluteo", "levantamiento-busto", "iron-beauty-fitness", "vendas-frias", "blanqueamiento-zona-intima", "hollywood-peel", "hilos-colageno", "trasplante-capilar", "relleno-de-labios", "tratamiento-anticelulitis", "auriculoterapia", "microagujas", "microagujas-ginkgo-biloba", "microagujas-vitamina-c", "rejuvenecimiento-facial", "rejuvenecimiento-facial-laser", "limpieza-facial", "tratamiento-ojeras", "aromaterapia", "peeling-quimico", "nutricion", "terapias-faciales", "inbody", "masaje-maxilofacial", "limpieza-facial-profunda", "limpieza-facial-hidratante", "laser-acne", "microagujas-melanout", "mascarillas-faciales", "boda-spa", "arteterapia"].includes(service.slug) && (
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-primary" />
                <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">
                  {service.slug === "depilacion-laser" ? (lang === 'es' ? "Inversión y Paquetes" : "Investment and Packages") : (lang === 'es' ? "Nuestros Tratamientos" : "Our Treatments")}
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
                {service.slug === "depilacion-laser" ? (
                  lang === 'es'
                    ? <>Elige tu plan de <span className="font-light italic text-primary">transformación</span></>
                    : <>Choose your <span className="font-light italic text-primary">transformation</span> plan</>
                ) : (
                  lang === 'es'
                    ? <>¿Qué incluye<br /><span className="font-light italic text-primary">este servicio?</span></>
                    : <>What does<br /><span className="font-light italic text-primary">this service include?</span></>
                )}
              </h2>
              {service.slug === "depilacion-laser" && (
                <p className="text-primary font-bold mt-4">👉 {lang === 'es' ? "Consulta disponibilidad y valoración personalizada hoy mismo" : "Check availability and personalized assessment today"}</p>
              )}
            </motion.div>

            {service.slug === "depilacion-laser" ? (
              /* Premium Table-like Layout for Laser */
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {service.items.map((item, i) => (
                  <motion.div
                    key={i} variants={fadeUp}
                    className="relative bg-stone-50 border border-stone-200 p-8 flex flex-col group hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="mb-6">
                       <span className="text-primary text-[10px] font-bold tracking-widest uppercase mb-2 block">{lang === 'es' ? "Opción" : "Option"} {i+1}</span>
                       <h3 className="text-xl font-serif font-bold text-stone-900 leading-tight min-h-[3rem] flex items-center">{item.title.replace("✨ ", "")}</h3>
                    </div>
                    <div className="flex-1">
                       <p className="text-stone-500 text-sm leading-relaxed mb-8">{item.description}</p>
                    </div>
                    <div className="mt-auto pt-6 border-t border-stone-200/60">
                       <div className="mb-6">
                          <p className="text-stone-400 text-[10px] uppercase tracking-widest mb-1">{t('service.items.investment')}</p>
                          <p className="text-2xl font-serif font-bold text-primary">{item.price}</p>
                       </div>
                       <a
                        href={WA}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex justify-center items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-white bg-primary py-3.5 hover:bg-stone-900 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        {t('service.items.want')}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* Standard Layout for other services */
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
                      {t('service.items.book')}
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* ── ANTES Y DESPUÉS — servicios corporales seleccionados ─── */}
      {["masajes-corporales", "reduccion-de-medidas", "drenaje-linfatico", "carboxiterapia"].includes(service.slug) && !["peeling-quimico", "aromaterapia", "blanqueamiento-zona-intima", "rejuvenecimiento-facial-laser", "tratamiento-ojeras", "terapias-faciales", "inbody", "masaje-maxilofacial", "limpieza-facial-profunda", "limpieza-facial-hidratante", "laser-acne", "microagujas-melanout", "mascarillas-faciales", "boda-spa", "arteterapia"].includes(service.slug) && (() => {
        const bgPair = beforeAfterBgMap[service.slug] ?? { before: "corporales-antes-bg.webp", after: "corporales-despues-bg.webp" };
        const beforeBg = `${BASE}images/${bgPair.before}`;
        const afterBg  = `${BASE}images/${bgPair.after}`;
        const beforeItems = beforeDescMap[lang][service.slug] ?? [
          lang === 'es' ? "Problema visible que afecta tu bienestar y confianza" : "Visible problem that affects your well-being and confidence",
          lang === 'es' ? "Resultados lentos o nulos con métodos convencionales" : "Slow or zero results with conventional methods",
          lang === 'es' ? "Sensación de no encontrar la solución adecuada" : "Feeling of not finding the right solution",
        ];
        const afterItems = afterDescMap[lang][service.slug] ?? service.benefits.slice(0, 3);
        return (
          <section className="py-20 md:py-28 bg-[#040f19] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="text-center mb-14"
              >
                <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-3">{t('service.beforeafter.title')}</p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                  {lang === 'es' ? "Antes y " : "Before and "} <span className="text-primary font-light italic">{lang === 'es' ? "después" : "after"}</span>
                </h2>
                <p className="text-white/45 text-sm max-w-sm mx-auto leading-relaxed mb-8">
                  {t('service.beforeafter.desc')} {service.name.toLowerCase()}.
                </p>
              </motion.div>

              {service.slug === "masajes-corporales" ? (
                <div className="max-w-4xl mx-auto">
                   <BeforeAfterSlider
                    beforeImage={beforeBg}
                    afterImage={afterBg}
                   />

                   <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16"
                   >
                     {/* ANTES */}
                     <motion.div variants={fadeUp} className="flex flex-col">
                       <div>
                         <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-2">{lang === 'es' ? "Sin tratamiento" : "Without treatment"}</p>
                         <h3 className="text-xl font-serif font-bold text-white/80 leading-tight mb-6">
                           {t('service.beforeafter.change')}
                         </h3>
                       </div>
                       <ul className="space-y-4">
                         {(beforeDescMap[lang][service.slug] ?? []).map((item, i) => (
                           <li key={i} className="flex items-start gap-3">
                             <span className="w-3.5 h-3.5 rounded-full border border-stone-600 flex items-center justify-center shrink-0 mt-0.5">
                               <span className="w-1 h-1 rounded-full bg-stone-500" />
                             </span>
                             <span className="text-white/55 text-sm leading-snug">{item}</span>
                           </li>
                         ))}
                       </ul>
                     </motion.div>

                     {/* DESPUÉS */}
                     <motion.div variants={fadeUp} className="flex flex-col">
                       <div>
                         <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-2">{lang === 'es' ? "Con nuestro tratamiento" : "With our treatment"}</p>
                         <h3 className="text-xl font-serif font-bold text-white leading-tight mb-6">
                           {t('service.beforeafter.deserved')}
                         </h3>
                       </div>
                       <ul className="space-y-4">
                         {(afterDescMap[lang][service.slug] ?? []).map((item, i) => (
                           <li key={i} className="flex items-start gap-3">
                             <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                             <span className="text-white/85 text-sm leading-snug">{item}</span>
                           </li>
                         ))}
                       </ul>
                     </motion.div>
                   </motion.div>
                </div>
              ) : (
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
                        alt={lang === 'es' ? "Antes del tratamiento" : "Before treatment"}
                        className="max-w-full max-h-full w-auto h-full object-contain transition-transform duration-700 group-hover:scale-105"
                        style={{ filter: "grayscale(1) brightness(0.88)" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#040f19]/80 to-transparent" />
                      <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white/80 text-[10px] font-bold tracking-[0.35em] uppercase px-3 py-1.5">
                        {lang === 'es' ? "Antes" : "Before"}
                      </span>
                    </div>
                    {/* Text below image */}
                    <div className="px-8 py-8 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-2">{lang === 'es' ? "Sin tratamiento" : "Without treatment"}</p>
                        <h3 className="text-xl font-serif font-bold text-white/80 leading-tight mb-6">
                          {t('service.beforeafter.change')}
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
                        alt={lang === 'es' ? "Después del tratamiento" : "After treatment"}
                        className="max-w-full max-h-full w-auto h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#040f19]/80 to-transparent" />
                      <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold tracking-[0.35em] uppercase px-3 py-1.5">
                        {lang === 'es' ? "Después" : "After"}
                      </span>
                    </div>
                    {/* Text below image */}
                    <div className="px-8 py-8 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-2">{lang === 'es' ? "Con nuestro tratamiento" : "With our treatment"}</p>
                        <h3 className="text-xl font-serif font-bold text-white leading-tight mb-6">
                          {t('service.beforeafter.deserved')}
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
              )}

              {/* CTA under the panel */}
              {service.slug !== "masajes-corporales" && (
                <motion.div
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="mt-10 text-center"
                >
                  <p className="text-white/40 text-xs mb-5 uppercase tracking-widest">{lang === 'es' ? "¿Lista para tu transformación?" : "Ready for your transformation?"}</p>
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 border border-primary text-primary text-xs font-bold tracking-[0.2em] uppercase px-8 py-3.5 hover:bg-primary hover:text-white transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    {t('service.beforeafter.book')}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              )}
            </div>
          </section>
        );
      })()}

      {/* ── BOTTOM CONTENT: HIDROLIPOCLASIA ────────────────── */}
      {service.slug === "masajes-corporales" && (
        <HydrolipoclasiaBottomContent waLink={WA} />
      )}
      {service.slug === "masajes-profundos" && (
        <MasajeProfundoContent waLink={WA} />
      )}

      {/* ── URGENCY CTA BAND ──────────────────────────── */}
      {service.slug !== "depilacion-laser" && service.slug !== "tensado-corporal" && service.slug !== "masajes-post-operatorios" && service.slug !== "masajes-profundos" && service.slug !== "botox-full-face" && service.slug !== "hilos-tensores" && service.slug !== "levantamiento-busto" && service.slug !== "iron-beauty-fitness" && service.slug !== "vendas-frias" && service.slug !== "blanqueamiento-zona-intima" && service.slug !== "hollywood-peel" && service.slug !== "hilos-colageno" && service.slug !== "trasplante-capilar" && service.slug !== "relleno-de-labios" && service.slug !== "tratamiento-anticelulitis" && service.slug !== "auriculoterapia" && service.slug !== "microagujas" && service.slug !== "microagujas-ginkgo-biloba" && service.slug !== "microagujas-vitamina-c" && service.slug !== "rejuvenecimiento-facial" && service.slug !== "rejuvenecimiento-facial-laser" && service.slug !== "limpieza-facial" && service.slug !== "tratamiento-ojeras" && service.slug !== "aromaterapia" && service.slug !== "peeling-quimico" && service.slug !== "nutricion" && service.slug !== "terapias-faciales" && service.slug !== "inbody" && service.slug !== "masaje-maxilofacial" && service.slug !== "limpieza-facial-profunda" && service.slug !== "limpieza-facial-hidratante" && service.slug !== "laser-acne" && service.slug !== "microagujas-melanout" && service.slug !== "mascarillas-faciales" && service.slug !== "boda-spa" && service.slug !== "arteterapia" && (
      <section className="bg-primary py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-white/70 text-xs font-bold tracking-[0.4em] uppercase mb-3">
              {service.slug === "adn-salmon" ? "✨ MJ Estética Wellness Center" : t('service.urgency.title')}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              {service.slug === "adn-salmon"
                ? (lang === 'es' ? "Rejuvenecimiento facial avanzado con resultados naturales." : "Advanced facial rejuvenation with natural results.")
                : t('service.urgency.reserve')}
            </h2>
            {service.slug !== "adn-salmon" && (
              <>
                <p className="text-white/75 text-sm mb-8 max-w-md mx-auto leading-relaxed">
                  {lang === 'es'
                    ? "Escríbenos por WhatsApp y te asesoramos sin costo. Diseñamos el protocolo ideal para tu caso."
                    : "Write us on WhatsApp and we will advise you free of charge. We design the ideal protocol for your case."}
                </p>
                <a
                  id={`cta-urgency-${service.slug}`}
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-primary text-sm font-bold tracking-[0.15em] uppercase px-10 py-4 hover:bg-stone-100 transition-colors group"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t('service.urgency.wa')}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </>
            )}
          </motion.div>
        </div>
      </section>
      )}


      {/* ── FAQ ───────────────────────────────────────── */}
      {service.faq && service.faq.length > 0 && !["depilacion-laser", "masajes-corporales", "masajes-profundos", "carboxiterapia", "tensado-corporal", "masajes-post-operatorios", "botox-full-face", "hilos-tensores", "masajes-profundos", "levantamiento-gluteo", "levantamiento-busto", "iron-beauty-fitness", "vendas-frias", "blanqueamiento-zona-intima", "hollywood-peel", "hilos-colageno", "trasplante-capilar", "relleno-de-labios", "tratamiento-anticelulitis", "auriculoterapia", "microagujas", "microagujas-ginkgo-biloba", "microagujas-vitamina-c", "rejuvenecimiento-facial", "rejuvenecimiento-facial-laser", "limpieza-facial", "tratamiento-ojeras", "aromaterapia", "peeling-quimico", "nutricion", "terapias-faciales", "inbody", "masaje-maxilofacial", "limpieza-facial-profunda", "limpieza-facial-hidratante", "laser-acne", "microagujas-melanout", "mascarillas-faciales", "boda-spa", "arteterapia"].includes(service.slug) && (
        <section className="py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6 sm:px-10">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-primary" />
                <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">{t('service.faq.title')}</p>
              </div>
              <h2 className="text-4xl font-serif font-bold text-stone-900">
                {lang === 'es' ? "Todo lo que necesitas" : "Everything you need"}<br />
                <span className="font-light italic text-primary">{lang === 'es' ? "saber antes de tu cita" : "to know before your appointment"}</span>
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
                <p className="text-white font-serif text-xl font-bold mb-1">{t('service.faq.more_doubts')}</p>
                <p className="text-white/75 text-sm">{lang === 'es' ? "Escríbenos y te respondemos al instante." : "Write us and we will answer you instantly."}</p>
              </div>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 border border-primary text-primary text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 hover:bg-primary hover:text-white transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                {t('service.faq.ask_now')}
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
              <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{t('service.related.title')}</p>
              <h2 className="text-3xl font-serif font-bold text-stone-900">{t('service.related.subtitle')}</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200">
              {related.map((rel_raw, i) => {
                const rel = rel_raw[lang];
                return (
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
                    <a href={lang === 'es' ? `/servicios/${rel.slug}` : `/en/services/${rel.slug}`}>
                      <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-primary border-b border-primary/30 pb-0.5 hover:border-primary transition-colors cursor-pointer">
                        {t('service.related.view')} <ArrowRight className="w-3 h-3" />
                      </span>
                    </a>
                  </motion.div>
                );
              })}
            </div>
            {category && (
              <div className="mt-8 text-center">
                <a href={category.href}>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-stone-600 border-b border-stone-300 pb-0.5 hover:text-primary hover:border-primary transition-colors cursor-pointer tracking-wide uppercase text-xs">
                    {t('service.hero.viewall')} {category.name.toLowerCase()} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>
            )}
          </div>
        </section>
      )}

      <Footer lang={lang} />
      <FloatingWhatsApp />
    </div>
  );
}

export default withAppProviders(ServicePage);
