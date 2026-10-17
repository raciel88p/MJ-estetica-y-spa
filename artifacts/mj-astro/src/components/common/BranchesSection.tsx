import React from 'react';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

interface BranchesSectionProps {
  lang?: 'es' | 'en';
}

export const BranchesSection: React.FC<BranchesSectionProps> = ({ lang = 'es' }) => {
  const isEn = lang === 'en';

  const content = {
    badge: isEn ? 'Our Locations' : 'Nuestras Sucursales',
    title: isEn ? 'Visit Us in Turrialba or Siquirres' : 'Visítanos en Turrialba o Siquirres',
    subtitle: isEn
      ? 'We offer professional aesthetic, medical, and dental care in two convenient locations in Costa Rica.'
      : 'Te brindamos atención estética, médica y dental profesional en dos ubicaciones convenientes en Costa Rica.',
    branches: [
      {
        id: 'turrialba',
        name: isEn ? 'Turrialba Branch' : 'Sucursal Turrialba',
        tagline: isEn ? 'Main Medical & Aesthetics Headquarters' : 'Sede Principal Médica y Estética',
        address: isEn
          ? '25m North of the Court, central district, Turrialba, Cartago'
          : '25m Norte de los Tribunales, distrito central, Turrialba, Cartago',
        hours: isEn ? 'Mon - Sat: 8:00 AM - 7:00 PM' : 'Lun - Sáb: 8:00 AM - 7:00 PM',
        phone: '+506 8690-7757',
        link: isEn ? '/en/locations/turrialba' : '/sucursales/turrialba',
        linkText: isEn ? 'View Turrialba Branch Details' : 'Ver Detalles Sucursal Turrialba',
        waMessage: isEn
          ? 'Hello! I would like to schedule an appointment at the Turrialba branch.'
          : 'Hola! Me gustaría agendar una cita en la sucursal de Turrialba.'
      },
      {
        id: 'siquirres',
        name: isEn ? 'Siquirres Branch' : 'Sucursal Siquirres',
        tagline: isEn ? 'Specialized Medical & Dental Center' : 'Centro Médico y Dental Especializado',
        address: isEn
          ? 'Central District, Siquirres, Limón (Next to Municipal Market)'
          : 'Distrito Central, Siquirres, Limón (Contiguo al Mercado Municipal)',
        hours: isEn ? 'Mon - Sat: 8:00 AM - 6:00 PM' : 'Lun - Sáb: 8:00 AM - 6:00 PM',
        phone: '+506 8690-7757',
        link: isEn ? '/en/locations/siquirres' : '/sucursales/siquirres',
        linkText: isEn ? 'View Siquirres Branch Details' : 'Ver Detalles Sucursal Siquirres',
        waMessage: isEn
          ? 'Hello! I would like to schedule an appointment at the Siquirres branch.'
          : 'Hola! Me gustaría agendar una cita en la sucursal de Siquirres.'
      }
    ]
  };

  return (
    <section className="py-16 md:py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-radial from-rose-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-medium tracking-wider uppercase mb-4">
            {content.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-amber-100 font-light mb-4">
            {content.title}
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {content.branches.map((branch) => (
            <div
              key={branch.id}
              className="bg-stone-800/80 border border-stone-700/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif text-white">{branch.name}</h3>
                    <p className="text-xs text-amber-400 font-medium tracking-wide mt-0.5">{branch.tagline}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-3 my-6 text-stone-300 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{branch.hours}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{branch.phone}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-700/50 flex flex-col sm:flex-row gap-3">
                <a
                  href={branch.link}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-medium text-xs sm:text-sm transition-all shadow-md group"
                >
                  <span>{branch.linkText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={`https://wa.me/50686907757?text=${encodeURIComponent(branch.waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-medium text-xs sm:text-sm transition-all"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
