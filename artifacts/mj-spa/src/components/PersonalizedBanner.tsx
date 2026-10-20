import React, { useState, useEffect } from 'react';
import { usePersonalization } from '../lib/usePersonalization';
import { AgeBracket, CategoryInterest } from '../lib/personalizationEngine';
import { Sparkles, ArrowRight, UserCheck, Zap, CheckCircle } from 'lucide-react';

interface ContentOffer {
  title: Record<'es' | 'en', string>;
  description: Record<'es' | 'en', string>;
  ctaText: Record<'es' | 'en', string>;
  ctaUrl: string;
  badge: Record<'es' | 'en', string>;
  highlight: Record<'es' | 'en', string>;
}

const PERSONALIZED_OFFERS: Record<CategoryInterest, Record<AgeBracket, ContentOffer>> = {
  'faciales': {
    young: {
      title: { es: "Piel Radiante Sin Imperfecciones", en: "Radiant Skin Without Imperfections" },
      description: { es: "Tratamientos preventivos de limpieza profunda, control de acné y luminosidad natural ideales para pieles jóvenes.", en: "Preventive deep cleansing, acne control and natural glow treatments ideal for young skin." },
      ctaText: { es: "Ver Faciales Preventivos", en: "View Preventive Facials" },
      ctaUrl: "/servicios/limpieza-facial-profunda",
      badge: { es: "Recomendado para ti (18-29)", en: "Recommended for you (18-29)" },
      highlight: { es: "Limpieza Hidratante + Peeling Suave", en: "Hydrating Cleansing + Mild Peel" }
    },
    mature: {
      title: { es: "Luminosidad y Definición Facial", en: "Radiance & Facial Definition" },
      description: { es: "Combate las primeras líneas de expresión y renueva el colágeno con microagujas y ácido hialurónico.", en: "Combat early expression lines and renew collagen with microneedling and hyaluronic acid." },
      ctaText: { es: "Descubrir Bioestimulación", en: "Discover Biostimulation" },
      ctaUrl: "/servicios/microagujas-dermapen",
      badge: { es: "Selección Vitalidad (30-45)", en: "Vitality Selection (30-45)" },
      highlight: { es: "ADN Salmón + Dermapen", en: "Salmon DNA + Dermapen" }
    },
    advanced: {
      title: { es: "Rejuvenecimiento Facial Profundo", en: "Deep Facial Rejuvenation" },
      description: { es: "Atenúa arrugas marcadas, restaura la firmeza y rejuvenece tu piel de forma natural y segura.", en: "Reduce deep wrinkles, restore firmness and rejuvenate your skin naturally and safely." },
      ctaText: { es: "Ver Protocolos Antiaging", en: "View Antiaging Protocols" },
      ctaUrl: "/servicios/armonizacion-facial",
      badge: { es: "Protocolo Anti-Edad Pro (46+)", en: "Pro Anti-Age Protocol (46+)" },
      highlight: { es: "Hilos Tensores + Bótox", en: "Tensor Threads + Botox" }
    }
  },
  'reductivos': {
    young: {
      title: { es: "Moldea tu Silueta con Tecnología Avanzada", en: "Shape Your Silhouette with Advanced Tech" },
      description: { es: "Elimina grasa localizada y tonifica tu figura rápidamente sin cirugías.", en: "Eliminate stubborn fat and tone your figure quickly without surgery." },
      ctaText: { es: "Ver Tratamientos Reductivos", en: "View Sculpting Treatments" },
      ctaUrl: "/servicios/masajes-corporales",
      badge: { es: "Tendencia Sculpt (18-29)", en: "Sculpt Trend (18-29)" },
      highlight: { es: "Hidrolipoclasia + Drenaje", en: "Hydrolipoclasia + Drainage" }
    },
    mature: {
      title: { es: "Remodelación Corporal y Anticelulitis", en: "Body Sculpting & Anti-Cellulite" },
      description: { es: "Protocolos combinados para reducir medidas, reafirmar tejidos y celulitis tras cambios de peso o embarazos.", en: "Combined protocols to reduce inches, firm tissues and reduce cellulite after weight changes or pregnancy." },
      ctaText: { es: "Plan Reductor Personalizado", en: "Custom Sculpting Plan" },
      ctaUrl: "/servicios/tratamiento-anticelulitis",
      badge: { es: "Plan Reafirmante (30-45)", en: "Firming Plan (30-45)" },
      highlight: { es: "Carboxiterapia + Vendas Frías", en: "Carboxytherapy + Cold Wraps" }
    },
    advanced: {
      title: { es: "Reducción de Grasa y Tensado Corporal", en: "Fat Reduction & Skin Tightening" },
      description: { es: "Restaura la elasticidad de la piel y tonifica áreas difíciles como abdomen, flancos y brazos.", en: "Restore skin elasticity and tone tough areas like abdomen, flanks, and arms." },
      ctaText: { es: "Ver Tensado Corporal", en: "View Body Tightening" },
      ctaUrl: "/servicios/tensado-corporal",
      badge: { es: "Protocolo Firmeza (46+)", en: "Firmness Protocol (46+)" },
      highlight: { es: "Tensado Intensivo + Drenaje Lymph", en: "Intensive Tightening + Lymph Drainage" }
    }
  },
  'medicina-estetica': {
    young: {
      title: { es: "Realza tus Facciones Naturales", en: "Enhance Your Natural Features" },
      description: { es: "Perfilado de labios, armonización suave y tratamientos de medicina estética sutiles.", en: "Lip contouring, subtle harmonization and gentle medical aesthetic enhancements." },
      ctaText: { es: "Ver Relleno de Labios", en: "View Lip Filler" },
      ctaUrl: "/servicios/relleno-de-labios",
      badge: { es: "Estética Sutil (18-29)", en: "Subtle Aesthetics (18-29)" },
      highlight: { es: "Perfilado de Labios Hyaluron", en: "Hyaluron Lip Sculpting" }
    },
    mature: {
      title: { es: "Previene Líneas y Restaura el Volumen", en: "Prevent Lines & Restore Volume" },
      description: { es: "Tratamientos médicos estéticos no invasivos para mantener un rostro descansado y juvenil.", en: "Non-invasive medical aesthetic treatments to maintain a rested, youthful face." },
      ctaText: { es: "Explorar Bótox y Rellenos", en: "Explore Botox & Fillers" },
      ctaUrl: "/servicios/botox",
      badge: { es: "Pre-Aging Pro (30-45)", en: "Pre-Aging Pro (30-45)" },
      highlight: { es: "Toxina Botulínica + Ácido Hialurónico", en: "Botulinum Toxin + Hyaluronic Acid" }
    },
    advanced: {
      title: { es: "Efecto Lifting Sin Cirugía", en: "Non-Surgical Lifting Effect" },
      description: { es: "Tratamientos médicos avanzados para recuperar el óvalo facial y devolver la densidad a la piel.", en: "Advanced medical treatments to restore facial contour and skin density." },
      ctaText: { es: "Ver Armonización Avanzada", en: "View Advanced Harmonization" },
      ctaUrl: "/servicios/armonizacion-facial",
      badge: { es: "Lifting Médico (46+)", en: "Medical Lifting (46+)" },
      highlight: { es: "Hilos Tensores + Armonización", en: "Tensor Threads + Harmonization" }
    }
  },
  'corporales': {
    young: {
      title: { es: "Tonificación y Moldeo Express", en: "Express Toning & Sculpting" },
      description: { es: "Luce un cuerpo firme y moldeado con sesiones rápidas y efectivas.", en: "Show off a firm, sculpted body with fast, effective sessions." },
      ctaText: { es: "Ver Levantamiento de Glúteos", en: "View Butt Lifting" },
      ctaUrl: "/servicios/levantamiento-gluteo",
      badge: { es: "Sculpting Express (18-29)", en: "Express Sculpting (18-29)" },
      highlight: { es: "Levantamiento de Glúteos + Peeling", en: "Butt Lift + Body Peel" }
    },
    mature: {
      title: { es: "Post-Parto, Moldeo y Reafirmación", en: "Post-Partum, Sculpting & Firming" },
      description: { es: "Recupera la firmeza del busto, glúteos y abdomen con tecnología avanzada.", en: "Regain bust, buttock, and abdominal firmness with advanced technology." },
      ctaText: { es: "Ver Levantamiento de Busto", en: "View Bust Lifting" },
      ctaUrl: "/servicios/levantamiento-busto",
      badge: { es: "Reafirmación Corporal (30-45)", en: "Body Firming (30-45)" },
      highlight: { es: "Levantamiento de Busto y Glúteo", en: "Bust & Butt Lifting" }
    },
    advanced: {
      title: { es: "Tonificación Corporal Completa", en: "Full Body Toning" },
      description: { es: "Técnicas especializadas para rejuvenecer la textura de la piel corporal y combatir la flacidez.", en: "Specialized techniques to rejuvenate body skin texture and fight sagging." },
      ctaText: { es: "Ver Masajes Avanzados", en: "View Advanced Massages" },
      ctaUrl: "/servicios/masajes-corporales",
      badge: { es: "Restauración Corporal (46+)", en: "Body Restoration (46+)" },
      highlight: { es: "Masaje Avanzado + Crioterapia", en: "Advanced Massage + Cryotherapy" }
    }
  },
  'spa': {
    young: {
      title: { es: "Desconexión y Bienestar Total", en: "Unplug & Total Wellness" },
      description: { es: "Libérate del estrés diario con nuestras experiencias sensoriales y masajes relajantes.", en: "Release daily stress with our sensory experiences and relaxing massages." },
      ctaText: { es: "Ver Rituales SPA", en: "View SPA Rituals" },
      ctaUrl: "/servicios/boda-spa",
      badge: { es: "Relax & Glow (18-29)", en: "Relax & Glow (18-29)" },
      highlight: { es: "Aromaterapia + Masaje Relajante", en: "Aromatherapy + Relaxing Massage" }
    },
    mature: {
      title: { es: "Descarga Muscular y Boda SPA", en: "Muscle Release & Wedding SPA" },
      description: { es: "Alivia tensiones de espalda y cuello o disfruta momentos únicos en pareja.", en: "Relieve back and neck tension or enjoy unique couples' moments." },
      ctaText: { es: "Ver Masaje de Descarga", en: "View Deep Tissue Massage" },
      ctaUrl: "/servicios/masaje-descarga-muscular",
      badge: { es: "Bienestar Vital (30-45)", en: "Vital Wellness (30-45)" },
      highlight: { es: "Masaje Descarga Muscular + Parejas", en: "Deep Tissue + Couples Massage" }
    },
    advanced: {
      title: { es: "Rituales Terapéuticos y Anti-Estrés", en: "Therapeutic & Anti-Stress Rituals" },
      description: { es: "Restaura la energía corporal, mejora la circulación y revitaliza tu cuerpo en un ambiente de calma.", en: "Restore body energy, improve circulation, and revitalize your body in a calm space." },
      ctaText: { es: "Ver Masaje Corporal", en: "View Body Massage" },
      ctaUrl: "/servicios/masajes-corporales",
      badge: { es: "Spa Terapéutico (46+)", en: "Therapeutic Spa (46+)" },
      highlight: { es: "Ritual Tropical Extreme + Piedras Calientes", en: "Tropical Extreme + Hot Stones" }
    }
  }
};

interface PersonalizationProps {
  lang?: 'es' | 'en';
}

export const PersonalizedBanner: React.FC<PersonalizationProps> = ({ lang = 'es' }) => {
  const { topCategory, activeAgeBracket, updateAge, trackClick, trackImpression } = usePersonalization();
  const [emailInput, setEmailInput] = useState('');
  const [selectedAge, setSelectedAge] = useState<AgeBracket>(activeAgeBracket);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSelectedAge(activeAgeBracket);
  }, [activeAgeBracket]);

  const offer = PERSONALIZED_OFFERS[topCategory]?.[selectedAge] || PERSONALIZED_OFFERS['faciales']['young'];

  useEffect(() => {
    trackImpression('personalized_banner', { category: topCategory, age: selectedAge });
  }, [topCategory, selectedAge, trackImpression]);

  const handleAgeSelect = (age: AgeBracket) => {
    setSelectedAge(age);
    updateAge(age, emailInput || undefined);
    trackClick('age_button_selected', { age });
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput) {
      updateAge(selectedAge, emailInput);
      setSubmitted(true);
      trackClick('email_personalization_submitted', { email: emailInput, age: selectedAge });
    }
  };

  return (
    <div className="w-full bg-gradient-to-r from-stone-900 via-rose-950 to-stone-900 text-white rounded-2xl shadow-xl overflow-hidden my-8 p-6 md:p-8 border border-amber-500/20 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{offer.badge[lang]}</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-100 mb-2 leading-tight">
            {offer.title[lang]}
          </h3>

          <p className="text-stone-300 text-sm md:text-base mb-4 leading-relaxed">
            {offer.description[lang]}
          </p>

          <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-medium text-amber-200">
            <span className="bg-stone-800/80 px-2.5 py-1 rounded-md border border-stone-700 flex items-center gap-1">
              <Zap className="w-3 h-3 text-amber-400" /> {offer.highlight[lang]}
            </span>
          </div>

          <div className="pt-2">
            <a
              href={offer.ctaUrl}
              onClick={() => trackClick('personalized_banner_cta', { url: offer.ctaUrl })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold text-sm shadow-lg hover:shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
            >
              <span>{offer.ctaText[lang]}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Dynamic Age Selector & Email Customizer Card */}
        <div className="w-full lg:w-80 bg-stone-950/70 backdrop-blur-md rounded-xl p-4 border border-stone-800 shadow-inner">
          <div className="flex items-center gap-2 text-stone-200 text-xs font-bold mb-3">
            <UserCheck className="w-4 h-4 text-amber-400" />
            <span>{lang === 'es' ? 'Ajusta tu perfil de edad:' : 'Adjust your age profile:'}</span>
          </div>

          <div className="grid grid-cols-3 gap-1.5 mb-4">
            <button
              onClick={() => handleAgeSelect('young')}
              className={`px-2 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedAge === 'young'
                  ? 'bg-amber-500 text-stone-950 font-bold shadow'
                  : 'bg-stone-900 text-stone-400 hover:bg-stone-800'
              }`}
            >
              18 - 29
            </button>
            <button
              onClick={() => handleAgeSelect('mature')}
              className={`px-2 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedAge === 'mature'
                  ? 'bg-amber-500 text-stone-950 font-bold shadow'
                  : 'bg-stone-900 text-stone-400 hover:bg-stone-800'
              }`}
            >
              30 - 45
            </button>
            <button
              onClick={() => handleAgeSelect('advanced')}
              className={`px-2 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedAge === 'advanced'
                  ? 'bg-amber-500 text-stone-950 font-bold shadow'
                  : 'bg-stone-900 text-stone-400 hover:bg-stone-800'
              }`}
            >
              46+
            </button>
          </div>

          {submitted ? (
            <div className="flex items-center gap-2 p-2 bg-emerald-950/50 border border-emerald-800/50 rounded-lg text-emerald-300 text-xs">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{lang === 'es' ? '¡Perfil actualizado! Recibirás promociones exclusivas.' : 'Profile updated! You will receive exclusive offers.'}</span>
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="space-y-2">
              <label className="block text-[11px] text-stone-400">
                {lang === 'es' ? 'Recibe recomendaciones para tu edad:' : 'Get age-customized recommendations:'}
              </label>
              <div className="flex gap-1.5">
                <input
                  type="email"
                  required
                  placeholder={lang === 'es' ? 'Tu correo electrónico' : 'Your email'}
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs bg-stone-900 border border-stone-800 rounded-lg text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-amber-400 font-bold text-xs rounded-lg transition-colors shrink-0 border border-stone-700"
                >
                  OK
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
