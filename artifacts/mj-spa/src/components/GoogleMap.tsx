interface GoogleMapProps {
  className?: string;
}

const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=MJ+Fisio+Estetica+y+Spa+Ciudadela+Jorge+de+Bravo+Turrialba+Costa+Rica&t=&z=16&ie=UTF8&iwloc=&output=embed";

const MAPS_LINK =
  "https://maps.google.com/maps?q=MJ+Fisio+Estetica+y+Spa+Ciudadela+Jorge+de+Bravo+Turrialba+Costa+Rica";

const GOOGLE_SEARCH_LINK =
  "https://www.google.com/search?q=MJ+Fisio+Estetica+y+Spa+Turrialba+Costa+Rica";

const GOOGLE_REVIEW_LINK =
  "https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsdiY1GsfSg";

export function GoogleMap({ className = "" }: GoogleMapProps) {
  return (
    <div className={`relative ${className}`}>
      <iframe
        title="MJ Fisio Estética y Spa — Google Maps"
        src={MAPS_EMBED_URL}
        width="100%"
        height="100%"
        style={{ border: 0, display: "block" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        aria-label="Mapa de ubicación de MJ Fisio Estética y Spa en Turrialba, Costa Rica"
      />
      {/* Overlay action buttons */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-stone-100 flex flex-col sm:flex-row gap-0 divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-widest text-stone-600 hover:text-primary hover:bg-primary/5 transition-all"
        >
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          Ver en Google Maps
        </a>
        <a
          href={GOOGLE_SEARCH_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-widest text-stone-600 hover:text-primary hover:bg-primary/5 transition-all"
        >
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Ver en Google
        </a>
        <a
          href={GOOGLE_REVIEW_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-widest text-stone-600 hover:text-yellow-600 hover:bg-yellow-50 transition-all"
        >
          <svg className="w-4 h-4 shrink-0 fill-yellow-400" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          Dejar una reseña
        </a>
      </div>
    </div>
  );
}

export { MAPS_LINK, GOOGLE_SEARCH_LINK, GOOGLE_REVIEW_LINK };
