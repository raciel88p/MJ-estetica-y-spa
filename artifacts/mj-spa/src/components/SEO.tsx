import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
}

const SITE_NAME = "MJ Fisio Estética y Spa";
const BASE_URL = "https://mjfisioesteticayspa.com";
const DEFAULT_DESC =
  "Centro de estética, bienestar y tratamientos médicos en Turrialba, Costa Rica. Faciales, masajes, depilación láser, botox, hilos tensores y más.";
const DEFAULT_IMAGE = `${BASE_URL}/images/logo-mj.png`;

export function SEO({ title, description, canonical, image }: SEOProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const desc = description ?? DEFAULT_DESC;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
  const ogImage = image ?? DEFAULT_IMAGE;

  return (
    <Helmet>
      <html lang="es" />
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
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
      <meta name="geo.region" content="CR" />
      <meta name="geo.placename" content="Turrialba, Costa Rica" />
    </Helmet>
  );
}
