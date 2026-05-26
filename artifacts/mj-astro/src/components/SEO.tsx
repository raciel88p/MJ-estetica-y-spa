import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article";
}

const SITE_NAME = "MJ Fisio Estética y Spa";
const BASE_URL = "https://mjfisioesteticayspa.com";
const DEFAULT_DESC =
  "Centro de estética, bienestar y tratamientos médico-estéticos en Turrialba, Costa Rica. Faciales, corporales, piernas cansadas, botox, hilos tensores y más. Reserva por WhatsApp.";
const DEFAULT_IMAGE = `${BASE_URL}/images/logo-mj.png`;

export function SEO({ title, description, canonical, image, type = "website" }: SEOProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Turrialba, Costa Rica`;
  const desc = description ?? DEFAULT_DESC;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
  const ogImage = image ?? DEFAULT_IMAGE;

  return (
    <Helmet>
      <html lang="es" />
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Geo meta tags for local SEO */}
      <meta name="geo.region" content="CR-C" />
      <meta name="geo.placename" content="Turrialba, Cartago, Costa Rica" />
      <meta name="geo.position" content="9.9001;-83.6819" />
      <meta name="ICBM" content="9.9001, -83.6819" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="es_CR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />

      {/* Extra SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={SITE_NAME} />
      <meta name="language" content="Spanish" />
    </Helmet>
  );
}
