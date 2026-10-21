import React from 'react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { BranchesSection } from '../common/BranchesSection';
import { Sparkles, Check, ArrowRight, ShieldCheck, Heart, Zap } from 'lucide-react';

interface MembresiasPageProps {
  lang?: 'es' | 'en';
}

export const MembresiasPage: React.FC<MembresiasPageProps> = ({ lang = 'es' }) => {
  const isEn = lang === 'en';

  const waBase = "https://wa.me/50686907757?text=";
  const waMsgWellness = encodeURIComponent(
    isEn
      ? "Hello! I would like to join the MJ Wellness Membership."
      : "Hola! Me gustaría información y suscribirme a la MJ Membresía Wellness."
  );
  const waMsgLaser = encodeURIComponent(
    isEn
      ? "Hello! I would like to join the MJ Laser Membership."
      : "Hola! Me gustaría información y suscribirme a la MJ Membresía Láser."
  );

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 flex flex-col">
      <Navbar lang={lang} />

      <main className="flex-grow pt-28 pb-16">
        {/* Hero Header */}
        <section className="bg-stone-900 text-white py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-950/40 via-stone-900 to-stone-950 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs sm:text-sm font-medium tracking-wider uppercase mb-6">
              <Sparkles className="w-4 h-4 text-rose-400" />
              {isEn ? 'Exclusive Memberships' : 'Membresías Exclusivas MJ'}
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-amber-100 font-light max-w-4xl mx-auto leading-tight mb-6">
              {isEn ? 'MJ Wellness & Laser Memberships' : '🌿 Membresías MJ Wellness & Láser'}
            </h1>

            <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {isEn
                ? 'Your well-being begins with a small monthly habit. Consistent, accessible, and high-end aesthetic care in Turrialba and Siquirres.'
                : 'Tu bienestar comienza con un pequeño hábito cada mes. Cuidado estético constante, accesible y de alta gama en Turrialba y Siquirres.'}
            </p>
          </div>
        </section>

        {/* Membership Plans Container */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* PLAN 1: MJ Membresía Wellness */}
            <div className="bg-white rounded-3xl border border-stone-200/80 shadow-xl overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
              <div className="p-8 sm:p-10">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold tracking-wide border border-emerald-200">
                    <Heart className="w-3.5 h-3.5 text-emerald-600" />
                    {isEn ? 'Facial & Body Balance' : 'Cuidado Facial & Corporal'}
                  </span>
                  <span className="text-xs text-stone-400 font-mono">MJ WELLNESS</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 font-light mb-2">
                  🌿 {isEn ? 'MJ Wellness Membership' : 'MJ Membresía Wellness'}
                </h2>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl sm:text-4xl font-serif text-amber-700 font-normal">₡30.915</span>
                  <span className="text-stone-500 text-sm font-medium">{isEn ? '/ month' : '/ mes'}</span>
                </div>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8 italic border-l-2 border-amber-500 pl-4 bg-amber-50/50 py-2 rounded-r-lg">
                  {isEn
                    ? '“Your well-being begins with a small habit each month. Enjoy a personal care experience designed to pamper your skin, relax your body, and maintain a consistent wellness routine.”'
                    : '“Tu bienestar comienza con un pequeño hábito cada mes. Disfruta de una experiencia de cuidado personal diseñada para consentir tu piel, relajar tu cuerpo y mantener una rutina constante de bienestar.”'}
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-600" />
                      {isEn ? 'Includes one monthly visit with your choice of:' : 'Incluye una visita mensual con un tratamiento a escoger:'}
                    </h3>
                    <ul className="space-y-2.5 text-stone-700 text-sm">
                      <li className="flex items-start gap-2.5">
                        <span className="text-amber-600 shrink-0 mt-0.5">✨</span>
                        <span><strong>{isEn ? 'Deep Facial Cleansing' : 'Limpieza facial profunda.'}</strong></span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-amber-600 shrink-0 mt-0.5">✨</span>
                        <span><strong>{isEn ? 'Personalized Body Session' : 'Sesión corporal personalizada.'}</strong></span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-amber-600 shrink-0 mt-0.5">✨</span>
                        <span><strong>{isEn ? '30-minute Back Massage' : 'Masaje de espalda de 30 minutos.'}</strong></span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-stone-100">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      {isEn ? 'Also includes:' : 'Además incluye:'}
                    </h3>
                    <ul className="space-y-2 text-stone-700 text-sm">
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>10% {isEn ? 'permanent discount' : 'de descuento permanente'}</strong> {isEn ? 'on aesthetic treatments and MJ products.*' : 'en tratamientos estéticos y productos MJ.*'}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{isEn ? 'Access to exclusive member-only promotions.' : 'Acceso a promociones exclusivas para miembros.'}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{isEn ? 'Invitations to beauty, wellness, and self-care events.' : 'Invitaciones a eventos de belleza, bienestar y autocuidado.'}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-stone-100 bg-stone-50 p-4 rounded-xl">
                    <p className="text-xs text-stone-600">
                      <strong>{isEn ? 'Ideal for:' : 'Ideal para:'}</strong> {isEn
                        ? 'People who want to maintain a monthly self-care routine, enjoying professional treatments with an accessible investment.'
                        : 'Personas que desean mantener una rutina mensual de cuidado personal, disfrutando de tratamientos profesionales con una inversión accesible.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-10 bg-stone-50 border-t border-stone-100">
                <a
                  href={`${waBase}${waMsgWellness}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-medium text-sm sm:text-base shadow-lg shadow-amber-600/20 transition-all hover:gap-3"
                >
                  <span>{isEn ? 'Join Wellness Membership via WhatsApp' : 'Unirme a Membresía Wellness por WhatsApp'}</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-center text-[11px] text-stone-400 mt-3 italic">
                  {isEn
                    ? 'MJ Wellness: a space to care for your skin, relax your body, and dedicate a moment to yourself.'
                    : 'MJ Wellness: un espacio para cuidar tu piel, relajar tu cuerpo y dedicarte un momento para ti.'}
                </p>
              </div>
            </div>

            {/* PLAN 2: MJ Membresía Láser */}
            <div className="bg-white rounded-3xl border-2 border-rose-500/30 shadow-2xl overflow-hidden flex flex-col justify-between relative">
              <div className="absolute top-0 right-0 bg-rose-500 text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-bl-xl shadow-md">
                {isEn ? 'POPULAR CHOICE' : 'MÁS POPULAR'}
              </div>

              <div className="p-8 sm:p-10">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-semibold tracking-wide border border-rose-200">
                    <Zap className="w-3.5 h-3.5 text-rose-600" />
                    {isEn ? 'Permanent Hair Removal' : 'Depilación Láser Definitiva'}
                  </span>
                  <span className="text-xs text-stone-400 font-mono">MJ LASER</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 font-light mb-2">
                  ✨ {isEn ? 'MJ Laser Membership' : 'MJ Membresía Láser'}
                </h2>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl sm:text-4xl font-serif text-rose-700 font-normal">₡35.000</span>
                  <span className="text-stone-500 text-sm font-medium">{isEn ? '/ month' : '/ mes'}</span>
                </div>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8 italic border-l-2 border-rose-500 pl-4 bg-rose-50/50 py-2 rounded-r-lg">
                  {isEn
                    ? '“Enjoy smoother, hair-free skin with laser hair removal treatments designed for your ultimate comfort and well-being.”'
                    : '“Disfruta una piel más suave y libre de vello con tratamientos de depilación láser diseñados para tu comodidad y bienestar.”'}
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-rose-600" />
                      {isEn ? 'Includes every month:' : 'Incluye cada mes:'}
                    </h3>
                    <ul className="space-y-2.5 text-stone-700 text-sm">
                      <li className="flex items-start gap-2.5">
                        <span className="text-rose-600 shrink-0 mt-0.5">✨</span>
                        <span><strong>{isEn ? 'Underarm laser hair removal.' : 'Depilación láser de axilas.'}</strong></span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-rose-600 shrink-0 mt-0.5">✨</span>
                        <span><strong>{isEn ? 'Full bikini laser hair removal.' : 'Depilación láser de bikini completo.'}</strong></span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-rose-600 shrink-0 mt-0.5">✨</span>
                        <span><strong>{isEn ? 'Full leg laser hair removal.' : 'Depilación láser de piernas.'}</strong></span>
                      </li>
                      <li className="flex items-start gap-2.5 bg-rose-50 p-2.5 rounded-lg border border-rose-200/60">
                        <span className="text-rose-600 shrink-0 mt-0.5">🎁</span>
                        <span><strong className="text-rose-800">{isEn ? 'Free mustache' : 'Bigote gratis'}</strong> {isEn ? 'as an exclusive membership benefit.' : 'como beneficio exclusivo de la membresía.'}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-stone-100">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      {isEn ? 'Additional Benefits:' : 'Beneficios adicionales:'}
                    </h3>
                    <ul className="space-y-2 text-stone-700 text-sm">
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{isEn ? 'Personalized progress tracking of your treatment.' : 'Seguimiento personalizado de tu tratamiento.'}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>10% {isEn ? 'discount' : 'de descuento'}</strong> {isEn ? 'on other aesthetic treatments and MJ products.*' : 'en otros tratamientos estéticos y productos MJ.*'}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{isEn ? 'Access to special promotions for members.' : 'Acceso a promociones especiales para miembros.'}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-stone-100 bg-stone-50 p-4 rounded-xl">
                    <p className="text-xs text-stone-600">
                      <strong>{isEn ? 'Ideal for:' : 'Ideal para:'}</strong> {isEn
                        ? 'People who want a practical and consistent solution to reduce hair growth, saving time and enjoying smoother skin all year round.'
                        : 'Personas que desean una solución práctica y constante para reducir el crecimiento del vello, ahorrando tiempo y disfrutando una piel más suave durante todo el año.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-10 bg-rose-50/40 border-t border-rose-100">
                <a
                  href={`${waBase}${waMsgLaser}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-medium text-sm sm:text-base shadow-lg shadow-rose-600/20 transition-all hover:gap-3"
                >
                  <span>{isEn ? 'Join Laser Membership via WhatsApp' : 'Unirme a Membresía Láser por WhatsApp'}</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-center text-[11px] text-stone-400 mt-3 italic">
                  {isEn
                    ? 'MJ Laser Membership: invest every month in your comfort, confidence, and well-being.'
                    : 'MJ Membresía Láser: invierte cada mes en tu comodidad, confianza y bienestar.'}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Conditions Disclaimer Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 text-center text-xs sm:text-sm text-stone-600">
            <p className="font-semibold text-stone-800 mb-1">
              {isEn ? '📌 Terms & Conditions (MJ Club):' : '📌 Condiciones de MJ Club:'}
            </p>
            <p>
              {isEn
                ? '* The 10% discount benefit in MJ Club is not applicable to medical aesthetic, nutritional, or psychological treatments.'
                : '* Beneficios y descuentos de MJ Club no aplicables a tratamientos médico-estéticos, nutricionales o psicológicos.'}
            </p>
          </div>
        </div>

        {/* Branches Section */}
        <div className="mt-20">
          <BranchesSection lang={lang} />
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
};
