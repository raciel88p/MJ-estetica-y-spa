import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SEO } from "@/components/SEO";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ChevronRight } from "lucide-react";

const sections = [
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
      { name: "Todos los Tratamientos Corporales", href: "/tratamientos/corporales" },
      { name: "Masajes Reductor con Hidrolicoplasia Turrialba", href: "/servicios/masajes-corporales" },
      { name: "Masajes Relajantes", href: "/servicios/masajes-relajantes" },
      { name: "Masajes Post Operatorios", href: "/servicios/masajes-post-operatorios" },
      { name: "Reducción de Medidas", href: "/servicios/reduccion-de-medidas" },
      { name: "Tensado Corporal en Turrialba", href: "/servicios/tensado-corporal" },
      { name: "Drenaje Linfático", href: "/servicios/drenaje-linfatico" },
      { name: "Depilación Láser", href: "/servicios/depilacion-laser" },
      { name: "Iron Beauty Fitness", href: "/servicios/iron-beauty-fitness" },
      { name: "Carboxiterapia", href: "/servicios/carboxiterapia" },
      { name: "Levantamiento de Glúteo", href: "/servicios/levantamiento-gluteo" },
      { name: "Levantamiento de Busto en Turrialba", href: "/servicios/levantamiento-busto" },
      { name: "Vendas Frías en Turrialba", href: "/servicios/vendas-frias" },
      { name: "Maderoterapia", href: "/servicios/maderoterapia" },
      { name: "Auriculoterapia", href: "/servicios/auriculoterapia" },
      { name: "Láser Despigmentante en Turrialba", href: "/servicios/blanqueamiento-zona-intima" },
    ],
  },
  {
    title: "Tratamientos Faciales",
    color: "text-primary",
    links: [
      { name: "Todos los Tratamientos Faciales", href: "/tratamientos/faciales" },
      { name: "Terapias Faciales", href: "/servicios/terapias-faciales" },
      { name: "Peeling Químico", href: "/servicios/peeling-quimico" },
      { name: "HOLLYWOOD PEEL EN TURRIALBA", href: "/servicios/hollywood-peel" },
      { name: "Eliminación de Manchas", href: "/servicios/eliminacion-manchas" },
      { name: "Radiofrecuencia Facial", href: "/servicios/radiofrecuencia-facial" },
      { name: "ADN de Salmón", href: "/servicios/adn-salmon" },
      { name: "Hilos de Colágeno", href: "/servicios/hilos-colageno" },
      { name: "Tratamiento de Ojeras", href: "/servicios/tratamiento-ojeras" },
    ],
  },
  {
    title: "Tratamientos de Piernas",
    color: "text-primary",
    links: [
      { name: "Todos los Tratamientos de Piernas", href: "/tratamientos/piernas" },
      { name: "Tratamiento Anticelulitis", href: "/servicios/tratamiento-anticelulitis" },
      { name: "Cuidado de Piernas Cansadas", href: "/servicios/piernas-cansadas" },
    ],
  },
  {
    title: "Medicina Estética",
    color: "text-primary",
    links: [
      { name: "Botox Full Face", href: "/servicios/botox-full-face" },
      { name: "Relleno de Labios", href: "/servicios/relleno-de-labios" },
      { name: "Ácido Hialurónico", href: "/servicios/acido-hialuronico" },
      { name: "Biorevitalización", href: "/servicios/biorevitalizacion" },
      { name: "Hilos Tensores", href: "/servicios/hilos-tensores" },
      { name: "Nutrición", href: "/servicios/nutricion" },
      { name: "Trasplante Capilar de Apariencia Natural", href: "/servicios/trasplante-capilar" },
      { name: "Implante de Barba", href: "/servicios/implante-barba" },
      { name: "Mesoterapia Capilar", href: "/servicios/mesoterapia-capilar" },
      { name: "Rellenos de Labios", href: "/servicios/rellenos-labios" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Mapa del Sitio"
        description="Todas las páginas y tratamientos de MJ Fisio Estética y Spa en Turrialba, Costa Rica."
        canonical="/mapa-del-sitio"
      />
      <Navbar />
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
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-serif font-bold text-foreground border-b border-stone-200 pb-3 mb-5">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2 text-stone-600 hover:text-primary transition-colors text-sm"
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

      <Footer />
    </div>
  );
}
