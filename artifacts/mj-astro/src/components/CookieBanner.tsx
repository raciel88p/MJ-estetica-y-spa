import { useState, useEffect } from "react";
import { ShieldCheck, Cookie } from "lucide-react";

interface CookieBannerProps {
  lang?: "es" | "en";
}

export function CookieBanner({ lang = "es" }: CookieBannerProps) {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if consent has already been given/denied
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay before displaying banner for smooth load
      const timer = setTimeout(() => setShowBanner(true), 1200);
      return () => clearTimeout(timer);
    } else if (consent === "accepted") {
      enableMarketingScripts();
    }
  }, []);

  const enableMarketingScripts = () => {
    try {
      // Active actual GTM / analytics scripts with data-consent="marketing"
      const scripts = document.querySelectorAll('script[data-consent="marketing"]');
      scripts.forEach((script) => {
        const newScript = document.createElement('script');
        Array.from(script.attributes).forEach((attr) => {
          if (attr.name !== 'type') {
            newScript.setAttribute(attr.name, attr.value);
          }
        });
        newScript.setAttribute('type', 'text/javascript');
        if (script.innerHTML) {
          newScript.innerHTML = script.innerHTML;
        }
        script.parentNode?.replaceChild(newScript, script);
      });

      // Handle noscript tag elements if present
      const noscripts = document.querySelectorAll('noscript[data-consent="marketing"]');
      noscripts.forEach((noscript) => {
        const iframe = noscript.querySelector('iframe');
        if (iframe) {
          const newIframe = document.createElement('iframe');
          Array.from(iframe.attributes).forEach((attr) => {
            newIframe.setAttribute(attr.name, attr.value);
          });
          noscript.parentNode?.replaceChild(newIframe, noscript);
        }
      });
    } catch (e) {
      console.error("Error enabling marketing scripts:", e);
    }
  };

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "accepted");
    enableMarketingScripts();
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-[9999] animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border border-stone-200 dark:border-stone-800 p-6 rounded-2xl shadow-2xl flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
            <Cookie className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-stone-900 dark:text-stone-100 text-base">
              {lang === "es" ? "Control de Privacidad" : "Privacy Preferences"}
            </h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              {lang === "es"
                ? "Utilizamos cookies propias y de terceros para analizar la navegación y mostrarte publicidad personalizada en base a un perfil elaborado a partir de tus hábitos de navegación. Puedes aceptar todo o rechazarlo."
                : "We use our own and third-party cookies to analyze navigation and show you personalized ads based on a profile compiled from your browsing habits. You can accept all or reject them."}
            </p>
          </div>
        </div>

        <div className="flex gap-3 justify-end pt-2 border-t border-stone-100 dark:border-stone-800/50">
          <button
            onClick={handleRejectAll}
            className="px-4 py-2 text-[10px] uppercase tracking-wider font-bold text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 transition-colors"
          >
            {lang === "es" ? "Rechazar" : "Reject"}
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-5 py-2.5 text-[10px] uppercase tracking-wider font-bold bg-primary hover:bg-primary/90 text-white rounded-lg shadow-lg shadow-primary/20 transition-all duration-200"
          >
            {lang === "es" ? "Aceptar todo" : "Accept all"}
          </button>
        </div>
      </div>
    </div>
  );
}
