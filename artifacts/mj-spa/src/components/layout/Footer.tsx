import { Instagram, Facebook, MapPin, Phone, Clock } from "lucide-react";
import { useTranslations } from "@/i18n/ui";
import { Link } from "wouter";

export function Footer({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const t = useTranslations(lang);

  const t_address = lang === 'es' ? 'Turrialba, Ciudadela Jorge de Bravo' : 'Turrialba, Ciudadela Jorge de Bravo';
  const t_maps = lang === 'es' ? 'Ver en Google Maps' : 'View on Google Maps';
  const t_review = lang === 'es' ? 'Dejarnos una reseña' : 'Leave us a review';
  const t_search = lang === 'es' ? 'Buscar en Google' : 'Search on Google';
  const t_hours_week = lang === 'es' ? 'Lun, Mar, Jue, Vie: 9:00 - 20:00' : 'Mon, Tue, Thu, Fri: 9:00 - 20:00';
  const t_hours_sat = lang === 'es' ? 'Sáb: 8:00 - 15:00' : 'Sat: 8:00 - 15:00';

  return (
    <footer className="bg-foreground text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <img
              src={`${import.meta.env.BASE_URL}images/logo-mj.png`}
              alt="MJ Fisio Estética y Spa"
              className="h-16 w-auto object-contain mb-6"
              loading="lazy"
              width="160"
              height="64"
            />
            <p className="text-white/60 font-light leading-relaxed">
              {t('footer.brand')}
            </p>
            <div className="flex gap-4 pt-4 flex-wrap">
              <a href="https://www.instagram.com/fisioesteticamj/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/MJFisioEsteticaySpa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a id="cta-footer-whatsapp" href="https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-serif text-white mb-6">{t('footer.pages')}</h4>
            <ul className="space-y-3">
              <li><Link href={lang === 'es' ? "/nosotros" : "/en/about-us"} className="hover:text-secondary transition-colors cursor-pointer">{lang === 'es' ? "Sobre Nosotros" : "About Us"}</Link></li>
              <li><Link href={lang === 'es' ? "/servicios/corporales" : "/en/services/body-treatments"} className="hover:text-secondary transition-colors cursor-pointer">{lang === 'es' ? "Tratamientos Corporales" : "Body Treatments"}</Link></li>
              <li><Link href={lang === 'es' ? "/servicios/faciales" : "/en/services/facials"} className="hover:text-secondary transition-colors cursor-pointer">{lang === 'es' ? "Tratamientos Faciales" : "Facial Treatments"}</Link></li>
              <li><Link href={lang === 'es' ? "/servicios/piernas" : "/en/services/leg-treatments"} className="hover:text-secondary transition-colors cursor-pointer">{lang === 'es' ? "Tratamientos de Piernas" : "Leg Treatments"}</Link></li>
              <li><Link href={lang === 'es' ? "/paquetes" : "/en/packages"} className="hover:text-secondary transition-colors cursor-pointer">{lang === 'es' ? "Paquetes" : "Packages"}</Link></li>
              <li><Link href={lang === 'es' ? "/medicos-esteticos" : "/en/medical-aesthetic"} className="hover:text-secondary transition-colors cursor-pointer">{lang === 'es' ? "Médico Estético" : "Medical Aesthetic"}</Link></li>
              <li><Link href={lang === 'es' ? "/testimonios" : "/en/testimonials"} className="hover:text-secondary transition-colors cursor-pointer">{lang === 'es' ? "Testimonios" : "Testimonials"}</Link></li>
              <li><Link href={lang === 'es' ? "/blog" : "/en/blog"} className="hover:text-secondary transition-colors cursor-pointer">{lang === 'es' ? "Blog" : "Blog"}</Link></li>
              <li><Link href={lang === 'es' ? "/buzon-sugerencias" : "/en/suggestion-box"} className="hover:text-secondary transition-colors font-medium text-primary cursor-pointer">{lang === 'es' ? "Buzón de Sugerencias" : "Suggestion Box"}</Link></li>
              <li><Link href={lang === 'es' ? "/mapa-del-sitio" : "/en/sitemap"} className="hover:text-secondary transition-colors cursor-pointer">{lang === 'es' ? "Mapa del Sitio" : "Sitemap"}</Link></li>
            </ul>
          </div>

          {/* Google Business + Find us */}
          <div>
            <h4 className="text-xl font-serif text-white mb-6">{t('footer.findus')}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://maps.google.com/maps?q=MJ+Fisio+Estetica+y+Spa+Ciudadela+Jorge+de+Bravo+Turrialba+Costa+Rica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-secondary transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  {t_maps}
                </a>
              </li>
              <li>
                <a
                  href="https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsdiY1GsfSg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0 fill-yellow-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  {t_review}
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/search?q=MJ+Fisio+Estetica+y+Spa+Turrialba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-secondary transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  {t_search}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-serif text-white mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>{t_address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>+506 86907757</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p>{t_hours_week}</p>
                  <p>{t_hours_sat}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} MJ Fisio Estética y Spa. {t('footer.rights')}</p>
          <div className="flex gap-4">
            <Link href={lang === 'es' ? "/politica-de-datos" : "/en/data-policy"} className="hover:text-white cursor-pointer">{lang === 'es' ? "Política de Privacidad" : "Privacy Policy"}</Link>
            <Link href={lang === 'es' ? "/mapa-del-sitio" : "/en/sitemap"} className="hover:text-white cursor-pointer">{lang === 'es' ? "Mapa del Sitio" : "Sitemap"}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
