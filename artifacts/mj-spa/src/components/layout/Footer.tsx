import { Instagram, Facebook, MapPin, Phone, Clock, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-serif text-white mb-6">MJ <span className="block text-lg font-sans font-light tracking-widest mt-1 text-secondary">Fisio Estética y Spa</span></h3>
            <p className="text-white/60 font-light leading-relaxed">
              Tu centro de confianza en Málaga para cuidar de tu cuerpo, mente y bienestar con los mejores profesionales.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-serif text-white mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="hover:text-secondary transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-secondary transition-colors">Sobre Nosotros</a></li>
              <li><a href="#servicios" className="hover:text-secondary transition-colors">Servicios</a></li>
              <li><a href="#testimonios" className="hover:text-secondary transition-colors">Testimonios</a></li>
              <li><a href="#contacto" className="hover:text-secondary transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-serif text-white mb-6">Nuestros Servicios</h4>
            <ul className="space-y-3">
              <li><a href="#servicios" className="hover:text-secondary transition-colors">Fisioterapia</a></li>
              <li><a href="#servicios" className="hover:text-secondary transition-colors">Estética Facial</a></li>
              <li><a href="#servicios" className="hover:text-secondary transition-colors">Estética Corporal</a></li>
              <li><a href="#servicios" className="hover:text-secondary transition-colors">Spa y Bienestar</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-serif text-white mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>Turrialba, Ciudadela Jorge de Bravo</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>+506 86907757</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span>info@mjfisioesteticayspa.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p>Lun, Mar, Jue, Vie: 9:00 - 20:00</p>
                  <p>Sáb: 8:00 - 15:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} MJ Fisio Estética y Spa. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Política de Privacidad</a>
            <a href="#" className="hover:text-white">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
