import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, UserCheck, Mail } from 'lucide-react';
import { usePersonalization } from '../lib/usePersonalization';
import type { AgeBracket, CategoryInterest } from '../lib/personalizationEngine';

interface PersonalizedBannerProps {
  lang?: 'es' | 'en';
}

const AGE_EXTRA_RECOMMENDATIONS: Record<AgeBracket, { labelEs: string; labelEn: string; path: string }[]> = {
  young: [
    { labelEs: 'Depilación Láser', labelEn: 'Laser Hair Removal', path: '/servicios/depilacion-laser' },
    { labelEs: 'Limpieza Hidratante', labelEn: 'Hydrating Facial Cleanse', path: '/servicios/limpieza-facial-profunda' },
    { labelEs: 'Perfilado de Labios', labelEn: 'Lip Contouring', path: '/servicios/relleno-de-labios' },
  ],
  mature: [
    { labelEs: 'Bótox Full Face', labelEn: 'Full Face Botox', path: '/servicios/botox-full-face' },
    { labelEs: 'ADN Salmón', labelEn: 'Salmon DNA Biorevitalizer', path: '/servicios/adn-salmon' },
    { labelEs: 'Anticelulitis Pro', labelEn: 'Pro Anti-Cellulite', path: '/servicios/tratamiento-anticelulitis' },
  ],
  advanced: [
    { labelEs: 'Hilos Tensores', labelEn: 'Tension Threads', path: '/servicios/hilos-tensores' },
    { labelEs: 'Tensado Corporal', labelEn: 'Body Firming', path: '/servicios/tensado-corporal' },
    { labelEs: 'Medicina Estética', labelEn: 'Medical Aesthetics', path: '/medicina-estetica' },
  ],
};

const CATEGORY_CONTENT: Record<
  CategoryInterest,
  {
    badgeEs: string;
    badgeEn: string;
    titleEs: string;
    titleEn: string;
    descEs: string;
    descEn: string;
    tagEs: string;
    tagEn: string;
    ctaEs: string;
    ctaEn: string;
    ctaPath: string;
  }
> = {
  faciales: {
    badgeEs: 'Plan Facial Recomendado',
    badgeEn: 'Recommended Facial Plan',
    titleEs: 'Luminosidad & Renovación Celular Profunda',
    titleEn: 'Radiance & Deep Cellular Renewal',
    descEs: 'Diseñado para tu tipo de piel. Protocolos personalizados con microagujas, peelings y sueros antioxidantes.',
    descEn: 'Tailored for your skin type. Custom protocols with microneedling, peelings, and antioxidant serums.',
    tagEs: 'Especial Cuidado Facial',
    tagEn: 'Facial Care Special',
    ctaEs: 'Ver Tratamientos Faciales',
    ctaEn: 'View Facial Treatments',
    ctaPath: '/servicios/faciales',
  },
  reductivos: {
    badgeEs: 'Plan Reductivo Personalizado',
    badgeEn: 'Custom Weight & Contour Plan',
    titleEs: 'Moldea tu Silueta sin Cirugías',
    titleEn: 'Shape Your Silhouette Without Surgery',
    descEs: 'Combina hidrolipoclasia, cavitación y carboxiterapia para reducir medidas de forma segura y localizada.',
    descEn: 'Combine hydrolipoclasia, cavitation, and carboxytherapy to safely reduce local measurements.',
    tagEs: 'Reducción & Moldeado',
    tagEn: 'Reduction & Contouring',
    ctaEs: 'Explorar Protocolos Reductivos',
    ctaEn: 'Explore Reduction Protocols',
    ctaPath: '/servicios/corporales',
  },
  'medicina-estetica': {
    badgeEs: 'Atención Médico-Estética',
    badgeEn: 'Medical Aesthetic Care',
    titleEs: 'Armonización Facial & Rejuvenecimiento Médico',
    titleEn: 'Facial Harmonization & Medical Rejuvenation',
    descEs: 'Bótox, rellenos con ácido hialurónico y bioestimuladores aplicados por médicos especialistas en Turrialba y Siquirres.',
    descEn: 'Botox, hyaluronic acid fillers, and biostimulators applied by medical specialists in Turrialba and Siquirres.',
    tagEs: 'Resultados Naturales & Seguros',
    tagEn: 'Natural & Safe Results',
    ctaEs: 'Consultar Valoración Médica',
    ctaEn: 'Book Medical Evaluation',
    ctaPath: '/medicina-estetica',
  },
  corporales: {
    badgeEs: 'Cuidado Corporal Integral',
    badgeEn: 'Comprehensive Body Care',
    titleEs: 'Firmeza, Tonicidad y Drenaje Post-Operatorio',
    titleEn: 'Firmness, Tone, and Post-Op Drainage',
    descEs: 'Tratamientos avanzados de tensado, masajes moldeadores y recuperación corporal especializada.',
    descEn: 'Advanced firming treatments, shaping massages, and specialized body recovery.',
    tagEs: 'Tonicidad & Recuperación',
    tagEn: 'Tone & Recovery',
    ctaEs: 'Ver Servicios Corporales',
    ctaEn: 'View Body Services',
    ctaPath: '/servicios/corporales',
  },
  spa: {
    badgeEs: 'Rituales Spa & Desconexión',
    badgeEn: 'Spa Rituals & Relaxation',
    titleEs: 'Relajación Profunda y Bienestar Mental',
    titleEn: 'Deep Relaxation & Mental Wellness',
    descEs: 'Masajes para parejas, piedras volcánicas, aromaterapia y paquetes para novias en un entorno de paz.',
    descEn: 'Couples massages, hot stones, aromatherapy, and bridal packages in a serene environment.',
    tagEs: 'Experiencia Wellness Premium',
    tagEn: 'Premium Wellness Experience',
    ctaEs: 'Ver Rituales SPA',
    ctaEn: 'View SPA Rituals',
    ctaPath: '/servicios/boda-spa',
  },
};

export const PersonalizedBanner: React.FC<PersonalizedBannerProps> = ({ lang = 'es' }) => {
  const isEn = lang === 'en';
  const { profile, activeAgeBracket, topCategory, updateAge, trackClick } = usePersonalization();

  const [emailInput, setEmailInput] = useState(profile.email || '');
  const [emailSaved, setEmailSaved] = useState(false);

  useEffect(() => {
    if (profile.email) {
      setEmailInput(profile.email);
    }
  }, [profile.email]);

  const catContent = CATEGORY_CONTENT[topCategory] || CATEGORY_CONTENT.faciales;
  const extraRecs = AGE_EXTRA_RECOMMENDATIONS[activeAgeBracket] || AGE_EXTRA_RECOMMENDATIONS.mature;

  const handleAgeChange = (age: AgeBracket) => {
    updateAge(age);
    trackClick(`select_age_${age}`);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      updateAge(activeAgeBracket, emailInput.trim());
      setEmailSaved(true);
      trackClick('capture_email', { email: emailInput.trim() });
      setTimeout(() => setEmailSaved(false), 3000);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="relative rounded-3xl bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950 text-white p-6 sm:p-8 md:p-10 shadow-2xl border border-amber-500/20 overflow-hidden backdrop-blur-xl">
        {/* Background ambient light */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Personalized Offer Content */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                {isEn ? catContent.badgeEn : catContent.badgeEs}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-[10px] font-bold uppercase tracking-widest">
                {isEn ? catContent.tagEn : catContent.tagEs}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-amber-100 leading-tight">
              {isEn ? catContent.titleEn : catContent.titleEs}
            </h3>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              {isEn ? catContent.descEn : catContent.descEs}
            </p>

            {/* Extra Recommendations based on Age */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-300/80 mb-2.5">
                {isEn ? 'Recommended for your age profile:' : 'Recomendaciones para tu perfil de edad:'}
              </p>
              <div className="flex flex-wrap gap-2">
                {extraRecs.map((rec, i) => (
                  <a
                    key={i}
                    href={rec.path}
                    onClick={() => trackClick(`click_recommendation_${rec.labelEs}`)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-amber-500/20 border border-white/10 hover:border-amber-500/40 text-stone-200 hover:text-amber-200 text-xs font-medium transition-all group"
                  >
                    <span>{isEn ? rec.labelEn : rec.labelEs}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <a
                href={catContent.ctaPath}
                onClick={() => trackClick(`click_banner_cta_${topCategory}`)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all hover:gap-3"
              >
                <span>{isEn ? catContent.ctaEn : catContent.ctaEs}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Age Selector & Optional Email Capture Card */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-md space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <UserCheck className="w-4 h-4 text-amber-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">
                  {isEn ? 'Customize Your Experience' : 'Personaliza tu Experiencia'}
                </h4>
              </div>
              <p className="text-xs text-stone-400">
                {isEn
                  ? 'Select your age bracket to receive specialized aesthetic recommendations.'
                  : 'Selecciona tu rango de edad para recibir recomendaciones estéticas especializadas.'}
              </p>
            </div>

            {/* Age bracket pills */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { key: 'young', label: '18-29' },
                { key: 'mature', label: '30-45' },
                { key: 'advanced', label: '46+' },
              ].map((item) => {
                const isActive = activeAgeBracket === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => handleAgeChange(item.key as AgeBracket)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                      isActive
                        ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-md shadow-amber-500/20'
                        : 'bg-white/5 text-stone-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Email form for exclusive offers */}
            <form onSubmit={handleEmailSubmit} className="pt-2 border-t border-white/10 space-y-2">
              <label className="block text-[11px] font-medium text-stone-300">
                {isEn ? 'Receive exclusive personalized discounts (optional):' : 'Recibe descuentos exclusivos personalizados (opcional):'}
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder={isEn ? 'your.email@domain.com' : 'tu.correo@ejemplo.com'}
                    className="w-full bg-stone-900/80 border border-white/15 rounded-xl pl-9 pr-3 py-2 text-xs text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/15 rounded-xl text-xs font-bold text-amber-200 transition-colors shrink-0"
                >
                  {isEn ? 'Save' : 'Guardar'}
                </button>
              </div>

              {emailSaved && (
                <p className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {isEn ? 'Profile updated successfully!' : '¡Perfil actualizado con éxito!'}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
