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
          <Breadcrumb items={[{ label: lang === 'es' ? "Política de Datos" : "Data Policy" }]} variant="light" />
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
              {lang === 'es' ? "Política de Cookies y Recogida de Datos" : "Cookies and Data Collection Policy"}
            </h1>
            <p className="text-sm text-muted-foreground mb-10">
              {lang === 'es' ? "Fecha de última actualización: 20/03/2026" : "Last updated: 20/03/2026"}
            </p>

            <div className="prose prose-stone max-w-none space-y-8 text-foreground/80 leading-relaxed text-sm sm:text-base">

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">1. {lang === 'es' ? "Introducción" : "Introduction"}</h2>
                <p>
                  {lang === 'es'
                    ? "Bienvenido a MJ estética y SPA (\"Nosotros\", \"Nuestro\" o \"Nosotros\"). Esta política explica cómo utilizamos cookies y recopilamos datos para actividades comerciales de marketing en nuestro sitio web y en nuestras plataformas de redes sociales. Al utilizar nuestros servicios, usted acepta las prácticas descritas en esta política."
                    : "Welcome to MJ Estética & SPA (\"We\", \"Our\" or \"Us\"). This policy explains how we use cookies and collect data for commercial marketing activities on our website and on our social media platforms. By using our services, you agree to the practices described in this policy."}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">2. Cookies</h2>
                <p>
                  {lang === 'es'
                    ? "Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. Utilizamos cookies para mejorar su experiencia de usuario, personalizar contenido y anuncios, proporcionar funciones de redes sociales y analizar el tráfico del sitio. Algunas cookies son esenciales para el funcionamiento del sitio, mientras que otras son opcionales y requieren de su consentimiento."
                    : "Cookies are small text files that are stored on your device when you visit our website. We use cookies to improve your user experience, personalize content and ads, provide social media features, and analyze site traffic. Some cookies are essential for the operation of the site, while others are optional and require your consent."}
                </p>
                <p className="mt-3">
                  {lang === 'es'
                    ? "Al utilizar nuestro sitio web, usted acepta el uso de cookies de acuerdo con esta política."
                    : "By using our website, you agree to the use of cookies in accordance with this policy."}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">3. {lang === 'es' ? "Recopilación de Datos para Uso de Marketing" : "Data Collection for Marketing Use"}</h2>
                <p>
                  {lang === 'es'
                    ? "Recopilamos datos personales con el fin de mejorar nuestros servicios y personalizar la experiencia del usuario. Los datos que recopilamos pueden incluir, entre otros:"
                    : "We collect personal data in order to improve our services and personalize the user experience. The data we collect may include, among others:"}
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>{lang === 'es' ? "Información de contacto (nombre, dirección de correo electrónico, número de teléfono)." : "Contact information (name, email address, phone number)."}</li>
                  <li>{lang === 'es' ? "Datos demográficos (edad, género, ubicación)." : "Demographic data (age, gender, location)."}</li>
                  <li>{lang === 'es' ? "Historial de compras y comportamiento de navegación." : "Purchase history and browsing behavior."}</li>
                  <li>{lang === 'es' ? "Encuesta a usuarios por medio de Google Docs." : "User surveys through Google Docs."}</li>
                  <li>{lang === 'es' ? "Aplicaciones de terceros como los programas de lealtad." : "Third-party applications such as loyalty programs."}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">4. {lang === 'es' ? "Uso de Datos para Marketing" : "Use of Data for Marketing"}</h2>
                <p>{lang === 'es' ? "Utilizamos los datos recopilados para:" : "We use the collected data to:"}</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>{lang === 'es' ? "Enviar comunicaciones de marketing, como correo electrónico, promociones y actualizaciones de productos." : "Send marketing communications, such as email, promotions, and product updates."}</li>
                  <li>{lang === 'es' ? "Personalizar contenido y anuncios según sus preferencias." : "Personalize content and ads according to your preferences."}</li>
                  <li>{lang === 'es' ? "Realizar análisis de mercado y estudios para mejorar nuestros productos y servicios." : "Perform market analysis and studies to improve our products and services."}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">5. {lang === 'es' ? "Compartir Datos con Terceros" : "Sharing Data with Third Parties"}</h2>
                <p>
                  {lang === 'es'
                    ? "Podemos compartir datos con terceros, como socios publicitarios y agencias de marketing, para mejorar la relevancia de los anuncios y optimizar nuestras estrategias de marketing. Sin embargo, no compartimos información que identifique personalmente a nuestros usuarios con terceros sin su consentimiento."
                    : "We may share data with third parties, such as advertising partners and marketing agencies, to improve the relevance of ads and optimize our marketing strategies. However, we do not share information that personally identifies our users with third parties without their consent."}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">6. {lang === 'es' ? "Elección y Control del Usuario" : "User Choice and Control"}</h2>
                <p>{lang === 'es' ? "Usted tiene el derecho de:" : "You have the right to:"}</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>{lang === 'es' ? "Optar por no recibir comunicaciones de marketing en cualquier momento." : "Opt out of receiving marketing communications at any time."}</li>
                  <li>{lang === 'es' ? "Configurar las preferencias de cookies en su navegador." : "Set cookie preferences in your browser."}</li>
                  <li>{lang === 'es' ? "Solicitar acceso, corrección o eliminación de sus datos personales." : "Request access, correction, or deletion of your personal data."}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">7. {lang === 'es' ? "Seguridad de Datos" : "Data Security"}</h2>
                <p>
                  {lang === 'es'
                    ? "Tomamos medidas para proteger la seguridad de sus datos personales y garantizar que se utilicen de manera adecuada."
                    : "We take measures to protect the security of your personal data and ensure that they are used appropriately."}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">8. {lang === 'es' ? "Cambios en la Política" : "Changes to the Policy"}</h2>
                <p>
                  {lang === 'es'
                    ? "Nos reservamos el derecho de modificar esta política en cualquier momento. Los cambios entrarán en vigencia cuando se publiquen en nuestro sitio web."
                    : "We reserve the right to modify this policy at any time. Changes will take effect when they are published on our website."}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">9. {lang === 'es' ? "Contacto" : "Contact"}</h2>
                <p>
                  {lang === 'es'
                    ? "Si tiene preguntas o inquietudes sobre nuestra política de cookies y recogida de datos, contáctenos a través del número de teléfono "
                    : "If you have questions or concerns about our cookie and data collection policy, contact us through the phone number "}
                  <a href="tel:+50686907757" className="text-primary hover:underline font-medium">
                    8690-7757
                  </a>.
                </p>
              </section>

              <div className="border-t border-border pt-6 mt-8 text-sm text-muted-foreground">
                {lang === 'es'
                  ? "Al utilizar nuestro sitio web y participar en nuestras actividades de marketing, usted acepta los términos de esta política."
                  : "By using our website and participating in our marketing activities, you agree to the terms of this policy."}
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
