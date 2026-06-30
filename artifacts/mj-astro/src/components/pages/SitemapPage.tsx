import { withAppProviders } from "@/components/ReactAppWrapper";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SEO } from "@/components/SEO";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ChevronRight } from "lucide-react";

const sectionsMap = {
  es: [
    {
      title: "Páginas Principales",
      color: "text-primary",
      links: [
        { name: "Inicio", href: "/" },
        { name: "Armonización Facial (Landing)", href: "/medicina-estetica" },
        { name: "Sobre Nosotros", href: "/nosotros" },
        { name: "Paquetes", href: "/paquetes" },
        { name: "Testimonios", href: "/testimonios" },
        { name: "Médico Estético", href: "/medicos-esteticos" },
        { name: "Buzón de Sugerencias", href: "/buzon-sugerencias" },
        { name: "Política de Privacidad", href: "/politica-de-datos" },
      ],
    },
    {
      title: "Tratamientos Corporales",
      color: "text-primary",
      links: [
        { name: "Todos los Tratamientos Corporales", href: "/servicios/corporales" },
        { name: "Masajes Corporales", href: "/servicios/masajes-corporales" },
        { name: "Masajes Relajantes", href: "/servicios/masajes-relajantes" },
        { name: "Masajes Profundos", href: "/servicios/masajes-profundos" },
        { name: "Masajes Post Operatorios", href: "/servicios/masajes-post-operatorios" },
        { name: "Tensado Corporal", href: "/servicios/tensado-corporal" },
        { name: "Depilación Láser", href: "/servicios/depilacion-laser" },
        { name: "Iron Beauty Fitness", href: "/servicios/iron-beauty-fitness" },
        { name: "Carboxiterapia", href: "/servicios/carboxiterapia" },
        { name: "Levantamiento de Glúteo", href: "/servicios/levantamiento-gluteo" },
        { name: "Levantamiento de Busto", href: "/servicios/levantamiento-busto" },
        { name: "Vendas Frías", href: "/servicios/vendas-frias" },
        { name: "Auriculoterapia", href: "/servicios/auriculoterapia" },
        { name: "Boda Spa", href: "/servicios/boda-spa" },
        { name: "Blanqueamiento Zona Íntima", href: "/servicios/blanqueamiento-zona-intima" },
      ],
    },
    {
      title: "Tratamientos Faciales",
      color: "text-primary",
      links: [
        { name: "Todos los Tratamientos Faciales", href: "/servicios/faciales" },
        { name: "Limpieza Facial en Turrialba", href: "/servicios/limpieza-facial" },
        { name: "Terapias Faciales", href: "/servicios/terapias-faciales" },
        { name: "Peeling Facial", href: "/servicios/peeling-quimico" },
        { name: "HOLLYWOOD PEEL EN TURRIALBA", href: "/servicios/hollywood-peel" },
        { name: "Eliminación de Manchas", href: "/servicios/eliminacion-manchas" },
        { name: "Radiofrecuencia Facial", href: "/servicios/radiofrecuencia-facial" },
        { name: "ADN de Salmón", href: "/servicios/adn-salmon" },
        { name: "Hilos de Colágeno", href: "/servicios/hilos-colageno" },
        { name: "Microagujas", href: "/servicios/microagujas" },
        { name: "Microagujas con Ginkgo Biloba", href: "/servicios/microagujas-ginkgo-biloba" },
        { name: "Microagujas con Vitamina C", href: "/servicios/microagujas-vitamina-c" },
        { name: "Rejuvenecimiento Facial en Turrialba", href: "/servicios/rejuvenecimiento-facial" },
        { name: "Rejuvenecimiento Facial Láser", href: "/servicios/rejuvenecimiento-facial-laser" },
        { name: "Tratamiento de Ojeras", href: "/servicios/tratamiento-ojeras" },
      ],
    },
  ],
  en: [
    {
      title: "Main Pages",
      color: "text-primary",
      links: [
        { name: "Home", href: "/en" },
        { name: "Facial Harmonization (Landing)", href: "/en/facial-harmonization" },
        { name: "About Us", href: "/en/nosotros" },
        { name: "Packages", href: "/en/packages" },
        { name: "Testimonials", href: "/en/testimonials" },
        { name: "Medical Aesthetic", href: "/en/medical-aesthetic" },
        { name: "Suggestion Box", href: "/en/suggestion-box" },
        { name: "Privacy Policy", href: "/en/data-policy" },
      ],
    },
    {
      title: "Body Treatments",
      color: "text-primary",
      links: [
        { name: "All Body Treatments", href: "/en/services/body-treatments" },
        { name: "Body Massages", href: "/en/services/body-massages" },
        { name: "Relaxing Massages", href: "/en/services/relaxing-massages" },
      ],
    },
  ]
};

function SitemapPage({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={lang === 'es' ? "Mapa del Sitio" : "Sitemap"}
        description={lang === 'es' ? "Todas las páginas y tratamientos de MJ Fisio Estética y Spa en Turrialba, Costa Rica." : "All pages and treatments of MJ Fisio Estética & Spa in Turrialba, Costa Rica."}
        canonical={lang === 'es' ? "/mapa-del-sitio" : "/en/sitemap"}
        lang={lang}
      />
      <Navbar lang={lang} alternateLink={lang === 'es' ? '/en/sitemap' : '/mapa-del-sitio'} />
      <FloatingWhatsApp />

      <section className="relative pt-36 pb-20 bg-[#071e2e] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/hero-bg.webp)` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <Breadcrumb items={[{ label: "Mapa del Sitio" }]} variant="dark" />
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mt-8 mb-4">
            NAVEGACIÓN
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
            Mapa del<br />
            <span className="italic font-light text-white/40">Sitio</span>
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-xl mt-6">
            Todas las páginas y tratamientos disponibles en MJ Fisio Estética y Spa.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {sectionsMap[lang].map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-serif font-bold text-foreground border-b border-stone-200 pb-3 mb-5">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="group flex items-center gap-2 text-stone-600 hover:text-primary transition-colors text-sm"
                      >
                        <ChevronRight className="w-3.5 h-3.5 shrink-0 text-primary/50 group-hover:text-primary transition-colors" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}

export default withAppProviders(SitemapPage);
