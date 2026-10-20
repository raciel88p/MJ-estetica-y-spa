import React from 'react';
import { usePersonalization } from '../lib/usePersonalization';
import { BarChart3, Activity, Eye, MousePointerClick } from 'lucide-react';

export const AnalyticsWidget: React.FC<{ lang?: 'es' | 'en' }> = ({ lang = 'es' }) => {
  const { profile } = usePersonalization();
  const [isOpen, setIsOpen] = React.useState(false);

  const clicks = profile.analyticsEvents.filter((e) => e.eventType === 'click').length;
  const impressions = profile.analyticsEvents.filter((e) => e.eventType === 'impression').length;
  const pageViews = profile.totalPageViews;

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3 py-2 bg-stone-900/90 text-amber-400 hover:text-amber-300 rounded-full border border-stone-800 shadow-xl backdrop-blur-md text-xs font-semibold transition-all hover:scale-105"
          title="Motor de Marketing & Analytics Interno"
        >
          <BarChart3 className="w-4 h-4 text-amber-400" />
          <span>{lang === 'es' ? 'Perfil Mkt' : 'Mkt Profile'}</span>
        </button>
      ) : (
        <div className="w-80 bg-stone-900/95 text-stone-200 border border-stone-800 rounded-2xl shadow-2xl p-4 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center justify-between pb-3 border-b border-stone-800 mb-3">
            <div className="flex items-center gap-2 font-bold text-amber-400 text-xs">
              <Activity className="w-4 h-4" />
              <span>{lang === 'es' ? 'Motor de Personalización & Analytics' : 'Personalization & Analytics Engine'}</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-stone-100 text-xs font-bold px-1.5 py-0.5 rounded bg-stone-800"
            >
              ✕
            </button>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between items-center bg-stone-950/60 p-2 rounded-lg border border-stone-800/80">
              <span className="text-stone-400">{lang === 'es' ? 'Categoría de Interés:' : 'Interest Category:'}</span>
              <span className="font-bold text-amber-300 capitalize">{profile.topCategory}</span>
            </div>

            <div className="flex justify-between items-center bg-stone-950/60 p-2 rounded-lg border border-stone-800/80">
              <span className="text-stone-400">{lang === 'es' ? 'Perfil Edad Activo:' : 'Active Age Profile:'}</span>
              <span className="font-bold text-emerald-400">
                {profile.explicitAgeBracket ? `Explícito (${profile.explicitAgeBracket})` : `Inferido (${profile.inferredAgeBracket})`}
              </span>
            </div>

            {profile.userEmail && (
              <div className="flex justify-between items-center bg-stone-950/60 p-2 rounded-lg border border-stone-800/80">
                <span className="text-stone-400">{lang === 'es' ? 'Email Registrado:' : 'Registered Email:'}</span>
                <span className="font-bold text-stone-200 truncate max-w-[120px]">{profile.userEmail}</span>
              </div>
            )}

            <div className="grid grid-cols-3 gap-2 text-center pt-1">
              <div className="bg-stone-950/80 p-2 rounded-lg border border-stone-800">
                <div className="text-stone-400 text-[10px] flex items-center justify-center gap-1">
                  <Eye className="w-3 h-3 text-amber-400" />
                  <span>Vistas</span>
                </div>
                <div className="font-bold text-stone-100 text-sm">{pageViews}</div>
              </div>

              <div className="bg-stone-950/80 p-2 rounded-lg border border-stone-800">
                <div className="text-stone-400 text-[10px] flex items-center justify-center gap-1">
                  <BarChart3 className="w-3 h-3 text-emerald-400" />
                  <span>Impres.</span>
                </div>
                <div className="font-bold text-stone-100 text-sm">{impressions}</div>
              </div>

              <div className="bg-stone-950/80 p-2 rounded-lg border border-stone-800">
                <div className="text-stone-400 text-[10px] flex items-center justify-center gap-1">
                  <MousePointerClick className="w-3 h-3 text-rose-400" />
                  <span>Clics</span>
                </div>
                <div className="font-bold text-stone-100 text-sm">{clicks}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
