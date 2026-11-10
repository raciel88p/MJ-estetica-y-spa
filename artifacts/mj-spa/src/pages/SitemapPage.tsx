import { withAppProviders } from "@/components/ReactAppWrapper";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Link } from "wouter";
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
        { name: "Sobre Nosotros", href: "/nosotros" },
        { name: "Sucursal Turrialba", href: "/sucursales/turrialba" },
        { name: "Sucursal Siquirres", href: "/sucursales/siquirres" },
        { name: "Testimonios", href: "/testimonios" },
        { name: "Médico Estético", href: "/medicos-esteticos" },
        { name: "MJ Club (Membresías)", href: "/membresias" },
        { name: "Blog", href: "/blog" },
        { name: "Buzón de Sugerencias", href: "/buzon-sugerencias" },
        { name: "Política de Privacidad", href: "/politica-de-datos" },
        { name: "Política de Devoluciones y Cancelaciones", href: "/politica-devoluciones" },
      ],
    },
    {
      title: "Médico Estético",
      color: "text-primary",
      links: [
        { name: "Armonización Facial", href: "/medicina-estetica" },
        { name: "Nutrición", href: "/servicios/nutricion" },
        { name: "Psicología Familiar e Infantil", href: "/servicios/psicologia-infantil" },
        { name: "Botox Full Face", href: "/servicios/botox-full-face" },
        { name: "Hilos Tensores Turrialba y Siquirres", href: "/servicios/hilos-tensores" },
        { name: "Trasplante Capilar", href: "/servicios/trasplante-capilar" },
        { name: "Ácido Hialurónico", href: "/servicios/acido-hialuronico" },
        { name: "Biorevitalización", href: "/servicios/biorevitalizacion" },
        { name: "Implante de Barba", href: "/servicios/implante-barba" },
        { name: "Mesoterapia Capilar", href: "/servicios/mesoterapia-capilar" },
        { name: "Relleno de Labios", href: "/servicios/relleno-de-labios" },
        { name: "InBody", href: "/servicios/inbody" },
      ],
    },
    {
      title: "Tratamientos Corporales",
      color: "text-primary",
      links: [
        { name: "Todos los Tratamientos Corporales", href: "/servicios/corporales" },
        { name: "Masajes Relajantes", href: "/servicios/masajes-relajantes" },
        { name: "Masajes Profundos", href: "/servicios/masajes-profundos" },
        { name: "Masajes Post Operatorios", href: "/servicios/masajes-post-operatorios" },
        { name: "Masaje Corporal Avanzado", href: "/servicios/masajes-corporales" },
        { name: "Tensado Corporal", href: "/servicios/tensado-corporal" },
        { name: "Depilación Láser", href: "/servicios/depilacion-laser" },
        { name: "Iron Beauty Fitness", href: "/servicios/iron-beauty-fitness" },
        { name: "Carboxiterapia", href: "/servicios/carboxiterapia" },
        { name: "Levantamiento de Glúteo", href: "/servicios/levantamiento-gluteo" },
        { name: "Levantamiento de Busto", href: "/servicios/levantamiento-busto" },
        { name: "Vendas Frías", href: "/servicios/vendas-frias" },
        { name: "Auriculoterapia", href: "/servicios/auriculoterapia" },
        { name: "Blanqueamiento Zona Íntima", href: "/servicios/blanqueamiento-zona-intima" },
      ],
    },
    {
      title: "Cuidado Facial",
      color: "text-primary",
      links: [
        { name: "Tratamientos Faciales", href: "/servicios/faciales" },
        { name: "Limpieza Facial", href: "/servicios/limpieza-facial" },
        { name: "Limpieza Facial Profunda", href: "/servicios/limpieza-facial-profunda" },
        { name: "Limpieza Facial Hidratante", href: "/servicios/limpieza-facial-hidratante" },
        { name: "Terapias Faciales", href: "/servicios/terapias-faciales" },
        { name: "Peeling Facial", href: "/servicios/peeling-quimico" },
        { name: "Hollywood Peel en Turrialba & Siquirres", href: "/servicios/hollywood-peel" },
        { name: "Eliminación de Manchas", href: "/servicios/eliminacion-manchas" },
        { name: "Radiofrecuencia Facial", href: "/servicios/radiofrecuencia-facial" },
        { name: "ADN de Salmón", href: "/servicios/adn-salmon" },
        { name: "Hilos de Colágeno", href: "/servicios/hilos-colageno" },
        { name: "Microagujas", href: "/servicios/microagujas" },
        { name: "Microagujas con Ginkgo Biloba", href: "/servicios/microagujas-ginkgo-biloba" },
        { name: "Microagujas con Vitamina C", href: "/servicios/microagujas-vitamina-c" },
        { name: "Microagujas con MelanOut", href: "/servicios/microagujas-melanout" },
        { name: "Rejuvenecimiento Facial en Turrialba &  Siquirres", href: "/servicios/rejuvenecimiento-facial" },
        { name: "Rejuvenecimiento Facial Láser", href: "/servicios/rejuvenecimiento-facial-laser" },
        { name: "Microdermoabrasión", href: "/servicios/microdermoabrasion" },
        { name: "Tratamiento de Ojeras", href: "/servicios/tratamiento-ojeras" },
        { name: "Masaje Maxilofacial", href: "/servicios/masaje-maxilofacial" },
        { name: "Láser para Acné", href: "/servicios/laser-acne" },
        { name: "Mascarillas Faciales", href: "/servicios/mascarillas-faciales" },
      ],
    },
    {
      title: "Rituales SPA & Piernas",
      color: "text-primary",
      links: [
        { name: "Boda Spa", href: "/servicios/boda-spa" },
        { name: "Aromaterapia", href: "/servicios/aromaterapia" },
        { name: "Masajes para Embarazadas", href: "/servicios/masaje-embarazadas" },
        { name: "Tropical Extreme", href: "/servicios/tropical-extreme" },
        { name: "Masaje con Café", href: "/servicios/masaje-cafe" },
        { name: "Masaje con Chocolate", href: "/servicios/masaje-chocolate" },
        { name: "Masaje de Descarga Muscular", href: "/servicios/masaje-descarga-muscular" },
        { name: "Masajes para Parejas", href: "/servicios/masaje-parejas" },
        { name: "Cuidado de Piernas Cansadas", href: "/servicios/piernas-cansadas" },
        { name: "Tratamiento Anticelulitis", href: "/servicios/tratamiento-anticelulitis" },
        { name: "Arteterapia", href: "/servicios/arteterapia" },
      ],
    },
    {
      title: "Servicios Dentales (Siquirres)",
      color: "text-primary",
      links: [
        { name: "Salud Dental & Odontología", href: "/servicios/dental" },
        { name: "Limpieza Dental Profunda", href: "/servicios/dental/limpieza-dental" },
        { name: "Blanqueamiento Dental", href: "/servicios/dental/blanqueamiento-dental" },
        { name: "Calzas de Resina Estética", href: "/servicios/dental/calzas-de-resina" },
        { name: "Coronas Dentales", href: "/servicios/dental/coronas-dentales" },
        { name: "Carillas Dentales", href: "/servicios/dental/carillas-dentales" },
        { name: "Endodoncia (Tratamiento de Conducto)", href: "/servicios/dental/endodoncia" },
        { name: "Extracciones Dentales", href: "/servicios/dental/extracciones" },
        { name: "Extracción de Cordales", href: "/servicios/dental/extraccion-cordales" },
        { name: "Implantes Dentales", href: "/servicios/dental/implantes-dentales" },
        { name: "Prótesis Dentales", href: "/servicios/dental/protesis-dentales" },
        { name: "Ortodoncia Tradicional y Estética", href: "/servicios/dental/ortodoncia" },
        { name: "Alineadores Transparentes", href: "/servicios/dental/alineadores-transparentes" },
        { name: "Diseño de Sonrisa Digital", href: "/servicios/dental/diseno-de-sonrisa" },
        { name: "Tratamiento de Encías (Periodoncia)", href: "/servicios/dental/tratamiento-encias" },
        { name: "Urgencias Dentales Siquirres", href: "/servicios/dental/urgencias-dentales" },
        { name: "Odontopediatría (Atención Infantil)", href: "/servicios/dental/odontopediatria" },
        { name: "Tratamiento para Bruxismo", href: "/servicios/dental/bruxismo" },
        { name: "Guarda / Placa Oclusal", href: "/servicios/dental/guarda-oclusal" },
        { name: "Radiografías Dentales Digitales", href: "/servicios/dental/radiografias-dentales" },
      ],
    },
  ],
  en: [
    {
      title: "Main Pages",
      color: "text-primary",
      links: [
        { name: "Home", href: "/en" },
        { name: "About Us", href: "/en/nosotros" },
        { name: "Turrialba Location", href: "/en/locations/turrialba" },
        { name: "Siquirres Location", href: "/en/locations/siquirres" },
        { name: "Testimonials", href: "/en/testimonials" },
        { name: "Medical Aesthetic", href: "/en/medical-aesthetic" },
        { name: "MJ Club (Memberships)", href: "/en/memberships" },
        { name: "Blog", href: "/en/blog" },
        { name: "Suggestion Box", href: "/en/suggestion-box" },
        { name: "Privacy Policy", href: "/en/data-policy" },
        { name: "Refund and Cancellation Policy", href: "/en/refund-policy" },
      ],
    },
    {
      title: "Medical Aesthetics",
      color: "text-primary",
      links: [
        { name: "Facial Harmonization", href: "/en/facial-harmonization" },
        { name: "Nutrition", href: "/en/services/nutrition" },
        { name: "Family & Child Psychology", href: "/en/services/child-psychology" },
        { name: "Botox Full Face", href: "/en/services/botox-full-face" },
        { name: "Tension Threads", href: "/en/services/tension-threads" },
        { name: "Hair Transplant", href: "/en/services/hair-transplant" },
        { name: "Hyaluronic Acid", href: "/en/services/hyaluronic-acid" },
        { name: "Biorevitalization", href: "/en/services/biorevitalizacion" },
        { name: "Beard Implant", href: "/en/services/implante-barba" },
        { name: "Capillary Mesotherapy", href: "/en/services/mesoterapia-capilar" },
        { name: "Lip Filler", href: "/en/services/lip-filler" },
        { name: "InBody", href: "/en/services/inbody" },
      ],
    },
    {
      title: "Body Treatments",
      color: "text-primary",
      links: [
        { name: "All Body Treatments", href: "/en/services/body-treatments" },
        { name: "Relaxing Massages", href: "/en/services/relaxing-massages" },
        { name: "Deep Tissue Massages", href: "/en/services/deep-tissue-massages" },
        { name: "Post-Operative Massages", href: "/en/services/post-operative-massages" },
        { name: "Advanced Body Massage", href: "/en/services/body-massages" },
        { name: "Body Tightening", href: "/en/services/tensado-corporal" },
        { name: "Laser Hair Removal", href: "/en/services/laser-hair-removal" },
        { name: "Iron Beauty Fitness", href: "/en/services/iron-beauty-fitness" },
        { name: "Carboxytherapy", href: "/en/services/carboxytherapy" },
        { name: "Butt Lift", href: "/en/services/levantamiento-gluteo" },
        { name: "Bust Lift", href: "/en/services/levantamiento-busto" },
        { name: "Cold Wraps", href: "/en/services/vendas-frias" },
        { name: "Auriculotherapy", href: "/en/services/auriculoterapia" },
        { name: "Intimate Area Whitening", href: "/en/services/blanqueamiento-zona-intima" },
      ],
    },
    {
      title: "Facial Care",
      color: "text-primary",
      links: [
        { name: "Facial Treatments", href: "/en/services/facials" },
        { name: "Facial Cleansing", href: "/en/services/facial-cleansing" },
        { name: "Deep Facial Cleansing", href: "/en/services/limpieza-facial-profunda" },
        { name: "Hydrating Facial Cleansing", href: "/en/services/limpieza-facial-hidratante" },
        { name: "Facial Therapies", href: "/en/services/terapias-faciales" },
        { name: "Facial Peeling", href: "/en/services/facial-peeling" },
        { name: "Hollywood Peel", href: "/en/services/hollywood-peel" },
        { name: "Stain Removal", href: "/en/services/eliminacion-manchas" },
        { name: "Facial Radiofrequency", href: "/en/services/radiofrecuencia-facial" },
        { name: "Salmon DNA", href: "/en/services/salmon-dna" },
        { name: "Collagen Threads", href: "/en/services/hilos-colageno" },
        { name: "Microneedling", href: "/en/services/microdermabrasion" },
        { name: "Microneedling with Ginkgo Biloba", href: "/en/services/microagujas-ginkgo-biloba" },
        { name: "Microneedling with Vitamin C", href: "/en/services/microagujas-vitamina-c" },
        { name: "Microneedling with MelanOut", href: "/en/services/microagujas-melanout" },
        { name: "Facial Rejuvenation", href: "/en/services/rejuvenecimiento-facial" },
        { name: "Laser Facial Rejuvenation", href: "/en/services/rejuvenecimiento-facial-laser" },
        { name: "Microdermabrasion", href: "/en/services/microdermabrasion" },
        { name: "Dark Circles Treatment", href: "/en/services/tratamiento-ojeras" },
        { name: "Maxillofacial Massage", href: "/en/services/masaje-maxilofacial" },
        { name: "Acne Laser", href: "/en/services/laser-acne" },
        { name: "Facial Masks", href: "/en/services/mascarillas-faciales" },
      ],
    },
    {
      title: "SPA Rituals & Legs",
      color: "text-primary",
      links: [
        { name: "Spa for Brides", href: "/en/services/spa-brides" },
        { name: "Aromatherapy", href: "/en/services/aromaterapia" },
        { name: "Prenatal Massage", href: "/en/services/prenatal-massage" },
        { name: "Tropical Extreme", href: "/en/services/tropical-extreme" },
        { name: "Coffee Massage", href: "/en/services/coffee-massage" },
        { name: "Chocolate Massage", href: "/en/services/chocolate-massage" },
        { name: "Muscle Release Massage", href: "/en/services/muscle-release-massage" },
        { name: "Couples Massage", href: "/en/services/couples-massage" },
        { name: "Tired Leg Care", href: "/en/services/piernas-cansadas" },
        { name: "Anti-Cellulite Treatment", href: "/en/services/tratamiento-anticelulitis" },
        { name: "Art Therapy", href: "/en/services/art-therapy" },
      ],
    },
    {
      title: "Dental Services (Siquirres)",
      color: "text-primary",
      links: [
        { name: "Dental Health & Dentistry", href: "/en/services/dental" },
        { name: "Professional Teeth Cleaning", href: "/en/services/dental/limpieza-dental" },
        { name: "Teeth Whitening", href: "/en/services/dental/blanqueamiento-dental" },
        { name: "Composite Resin Fillings", href: "/en/services/dental/calzas-de-resina" },
        { name: "Dental Crowns", href: "/en/services/dental/coronas-dentales" },
        { name: "Porcelain Veneers", href: "/en/services/dental/carillas-dentales" },
        { name: "Root Canal Treatment", href: "/en/services/dental/endodoncia" },
        { name: "Dental Extractions", href: "/en/services/dental/extracciones" },
        { name: "Wisdom Teeth Removal", href: "/en/services/dental/extraccion-cordales" },
        { name: "Dental Implants", href: "/en/services/dental/implantes-dentales" },
        { name: "Dental Dentures", href: "/en/services/dental/protesis-dentales" },
        { name: "Traditional & Ceramic Braces", href: "/en/services/dental/ortodoncia" },
        { name: "Clear Aligners", href: "/en/services/dental/alineadores-transparentes" },
        { name: "Digital Smile Design", href: "/en/services/dental/diseno-de-sonrisa" },
        { name: "Gum Disease Treatment", href: "/en/services/dental/tratamiento-encias" },
        { name: "Emergency Dentistry", href: "/en/services/dental/urgencias-dentales" },
        { name: "Pediatric Dentistry", href: "/en/services/dental/odontopediatria" },
        { name: "Bruxism & TMJ Treatment", href: "/en/services/dental/bruxismo" },
        { name: "Night Guard Appliance", href: "/en/services/dental/guarda-oclusal" },
        { name: "Digital Dental X-Rays", href: "/en/services/dental/radiografias-dentales" },
      ],
    },
  ],
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
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2 text-stone-600 hover:text-primary transition-colors text-sm cursor-pointer"
                      >
                        <ChevronRight className="w-3.5 h-3.5 shrink-0 text-primary/50 group-hover:text-primary transition-colors" />
                        {link.name}
                      </Link>
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
