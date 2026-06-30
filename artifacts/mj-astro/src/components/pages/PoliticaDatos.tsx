import { withAppProviders } from "@/components/ReactAppWrapper";
import { SEO } from "@/components/SEO";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

function PoliticaDatos({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title={lang === 'es' ? "Política de Datos" : "Data Policy"}
        description={lang === 'es' ? "Política de privacidad y tratamiento de datos personales de MJ Fisio Estética y Spa, Turrialba, Costa Rica." : "Privacy policy and personal data treatment of MJ Fisio Estética & Spa, Turrialba, Costa Rica."}
        canonical={lang === 'es' ? "/politica-de-datos" : "/en/data-policy"}
        lang={lang}
      />
      <Navbar lang={lang} alternateLink={lang === 'es' ? '/en/data-policy' : '/politica-de-datos'} />

      {/* Breadcrumb strip */}
      <div className="pt-24 pb-2 bg-foreground/5 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumb items={[{ label: "Política de Datos" }]} variant="light" />
        </div>
      </div>

      <main className="flex-1 pt-8 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-serif text-foreground mb-2">
              Política de Cookies y Recogida de Datos
            </h1>
            <p className="text-sm text-muted-foreground mb-10">
              Fecha de última actualización: 20/03/2026
            </p>

            <div className="prose prose-stone max-w-none space-y-8 text-foreground/80 leading-relaxed">

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">1. Introducción</h2>
                <p>
                  Bienvenido a MJ estética y SPA ("Nosotros", "Nuestro" o "Nosotros"). Esta política explica cómo utilizamos cookies y recopilamos datos para actividades comerciales de marketing en nuestro sitio web y en nuestras plataformas de redes sociales. Al utilizar nuestros servicios, usted acepta las prácticas descritas en esta política.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">2. Cookies</h2>
                <p>
                  Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. Utilizamos cookies para mejorar su experiencia de usuario, personalizar contenido y anuncios, proporcionar funciones de redes sociales y analizar el tráfico del sitio. Algunas cookies son esenciales para el funcionamiento del sitio, mientras que otras son opcionales y requieren de su consentimiento.
                </p>
                <p className="mt-3">
                  Al utilizar nuestro sitio web, usted acepta el uso de cookies de acuerdo con esta política.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">3. Recopilación de Datos para Uso de Marketing</h2>
                <p>
                  Recopilamos datos personales con el fin de mejorar nuestros servicios y personalizar la experiencia del usuario. Los datos que recopilamos pueden incluir, entre otros:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>Información de contacto (nombre, dirección de correo electrónico, número de teléfono).</li>
                  <li>Datos demográficos (edad, género, ubicación).</li>
                  <li>Historial de compras y comportamiento de navegación.</li>
                  <li>Encuesta a usuarios por medio de Google Docs.</li>
                  <li>Aplicaciones de terceros como los programas de lealtad.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">4. Uso de Datos para Marketing</h2>
                <p>Utilizamos los datos recopilados para:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>Enviar comunicaciones de marketing, como correo electrónico, promociones y actualizaciones de productos.</li>
                  <li>Personalizar contenido y anuncios según sus preferencias.</li>
                  <li>Realizar análisis de mercado y estudios para mejorar nuestros productos y servicios.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">5. Compartir Datos con Terceros</h2>
                <p>
                  Podemos compartir datos con terceros, como socios publicitarios y agencias de marketing, para mejorar la relevancia de los anuncios y optimizar nuestras estrategias de marketing. Sin embargo, no compartimos información que identifique personalmente a nuestros usuarios con terceros sin su consentimiento.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">6. Elección y Control del Usuario</h2>
                <p>Usted tiene el derecho de:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>Optar por no recibir comunicaciones de marketing en cualquier momento.</li>
                  <li>Configurar las preferencias de cookies en su navegador.</li>
                  <li>Solicitar acceso, corrección o eliminación de sus datos personales.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">7. Seguridad de Datos</h2>
                <p>
                  Tomamos medidas para proteger la seguridad de sus datos personales y garantizar que se utilicen de manera adecuada.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">8. Cambios en la Política</h2>
                <p>
                  Nos reservamos el derecho de modificar esta política en cualquier momento. Los cambios entrarán en vigencia cuando se publiquen en nuestro sitio web.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">9. Contacto</h2>
                <p>
                  Si tiene preguntas o inquietudes sobre nuestra política de cookies y recogida de datos, contáctenos a través del número de teléfono{" "}
                  <a href="tel:+50686907757" className="text-primary hover:underline font-medium">
                    8690-7757
                  </a>.
                </p>
              </section>

              <div className="border-t border-border pt-6 mt-8 text-sm text-muted-foreground">
                Al utilizar nuestro sitio web y participar en nuestras actividades de marketing, usted acepta los términos de esta política.
              </div>

            </div>
          </motion.div>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}

export default withAppProviders(PoliticaDatos);
