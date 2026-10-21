import React, { useState } from 'react';
import { BarChart2, X, Eye, MousePointer, Activity, User, Mail, Tag, RefreshCw } from 'lucide-react';
import { usePersonalization } from '../lib/usePersonalization';

interface AnalyticsWidgetProps {
  lang?: 'es' | 'en';
}

export const AnalyticsWidget: React.FC<AnalyticsWidgetProps> = ({ lang = 'es' }) => {
  const isEn = lang === 'en';
  const { profile, activeAgeBracket, topCategory } = usePersonalization();
  const [isOpen, setIsOpen] = useState(false);

  // Compute stats from events history
  const pageViewsCount = profile.totalPageViews;
  const impressionsCount = profile.eventsHistory.filter((e) => e.eventType === 'impression').length;
  const clicksCount = profile.eventsHistory.filter((e) => e.eventType === 'click').length;

  const isExplicitAge = Boolean(profile.explicitAgeBracket);

  return (
    <div className="fixed bottom-5 left-5 z-50 font-sans">
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 bg-stone-900/90 hover:bg-stone-900 text-amber-300 font-bold text-xs rounded-full shadow-2xl border border-amber-500/30 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
      >
        <BarChart2 className="w-4 h-4 text-amber-400" />
        <span>📊 Perfil Mkt</span>
      </button>

      {/* Floating Analytics Modal Panel */}
      {isOpen && (
        <div className="absolute bottom-12 left-0 w-80 sm:w-96 bg-stone-900/95 text-stone-100 rounded-3xl p-5 shadow-2xl border border-amber-500/20 backdrop-blur-xl space-y-4 text-xs animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between border-b border-stone-800 pb-3">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-amber-400" />
              <h4 className="font-bold text-sm text-amber-200">
                {isEn ? 'Marketing & Analytics Profile' : 'Perfil de Analytics & Mkt'}
              </h4>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Current Category & Age Status */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between bg-stone-800/60 p-2.5 rounded-xl border border-stone-700/50">
              <span className="text-stone-400 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-amber-400" />
                {isEn ? 'Dominant Interest:' : 'Interés Dominante:'}
              </span>
              <span className="font-bold text-amber-300 uppercase tracking-wider bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                {topCategory}
              </span>
            </div>

            <div className="flex items-center justify-between bg-stone-800/60 p-2.5 rounded-xl border border-stone-700/50">
              <span className="text-stone-400 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-rose-400" />
                {isEn ? 'Age Bracket:' : 'Perfil de Edad:'}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-rose-300 uppercase">
                  {activeAgeBracket}
                </span>
                <span
                  className={`text-[9px] px-1.5 py-0.5 rounded uppercase font-semibold ${
                    isExplicitAge
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-stone-700 text-stone-300'
                  }`}
                >
                  {isExplicitAge ? (isEn ? 'Explicit' : 'Explícito') : (isEn ? 'Inferred' : 'Inferido')}
                </span>
              </div>
            </div>

            {profile.email && (
              <div className="flex items-center justify-between bg-stone-800/60 p-2.5 rounded-xl border border-stone-700/50 truncate">
                <span className="text-stone-400 flex items-center gap-1.5 shrink-0">
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  Email:
                </span>
                <span className="font-mono text-sky-300 truncate max-w-[180px]">
                  {profile.email}
                </span>
              </div>
            )}
          </div>

          {/* Live Metrics Counters */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            <div className="bg-stone-800/80 p-2.5 rounded-xl border border-stone-700/50 text-center">
              <Eye className="w-3.5 h-3.5 text-sky-400 mx-auto mb-1" />
              <p className="text-stone-400 text-[10px] font-medium">{isEn ? 'Views' : 'Vistas'}</p>
              <p className="text-base font-bold text-stone-100 mt-0.5">{pageViewsCount}</p>
            </div>

            <div className="bg-stone-800/80 p-2.5 rounded-xl border border-stone-700/50 text-center">
              <RefreshCw className="w-3.5 h-3.5 text-amber-400 mx-auto mb-1" />
              <p className="text-stone-400 text-[10px] font-medium">{isEn ? 'Impressions' : 'Impresiones'}</p>
              <p className="text-base font-bold text-stone-100 mt-0.5">{impressionsCount}</p>
            </div>

            <div className="bg-stone-800/80 p-2.5 rounded-xl border border-stone-700/50 text-center">
              <MousePointer className="w-3.5 h-3.5 text-emerald-400 mx-auto mb-1" />
              <p className="text-stone-400 text-[10px] font-medium">{isEn ? 'Clicks' : 'Clics'}</p>
              <p className="text-base font-bold text-stone-100 mt-0.5">{clicksCount}</p>
            </div>
          </div>

          <div className="text-[10px] text-stone-500 text-center pt-1 border-t border-stone-800">
            {isEn ? 'Internal client-side engine (localStorage)' : 'Motor interno client-side (localStorage)'}
          </div>
        </div>
      )}
    </div>
  );
};
