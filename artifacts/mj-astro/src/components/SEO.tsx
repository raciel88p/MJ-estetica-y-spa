import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  alternateUrl?: string;
  image?: string;
  type?: "website" | "article";
  lang?: "es" | "en";
  schemaType?: "MedicalClinic" | "MedicalProcedure" | "Both";
  serviceName?: string;
  serviceCategory?: string;
}

const SITE_NAME = "MJ Fisio Estética y Spa";
const BASE_URL = "https://mjfisioesteticayspa.com";
const DEFAULT_DESC =
  "Centro de estética, bienestar y tratamientos médico-estéticos en Turrialba, Costa Rica. Faciales, corporales, piernas cansadas, botox, hilos tensores y más. Reserva por WhatsApp.";
const DEFAULT_IMAGE = `${BASE_URL}/images/logo-mj.png`;

export function SEO({
  title,
  description,
  canonical,
  alternateUrl,
  image,
  type = "website",
  lang = "es",
  schemaType,
  serviceName,
  serviceCategory
}: SEOProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Turrialba, Costa Rica`;
  const desc = description ?? DEFAULT_DESC;

  let currentPath = "";
  if (typeof window !== "undefined") {
    currentPath = window.location.pathname;
  }

  const finalPath = canonical ?? currentPath;
  let canonicalUrl = BASE_URL;

  if (finalPath) {
    if (finalPath.startsWith("http")) {
      canonicalUrl = finalPath;
    } else {
      let path = finalPath.startsWith("/") ? finalPath : `/${finalPath}`;
      if (path.length > 1 && path.endsWith("/")) {
        path = path.slice(0, -1);
      }
      canonicalUrl = `${BASE_URL}${path}`;
    }
  }

  if (canonicalUrl.length > BASE_URL.length + 1 && canonicalUrl.endsWith("/")) {
    canonicalUrl = canonicalUrl.slice(0, -1);
  }

  const ogImage = image ?? DEFAULT_IMAGE;

  const alternateLang = lang === "es" ? "en" : "es";

  let finalAlternateUrl = "";
  if (alternateUrl) {
    finalAlternateUrl = alternateUrl.startsWith("http")
      ? alternateUrl
      : `${BASE_URL}${alternateUrl.startsWith("/") ? "" : "/"}${alternateUrl}`;
  } else {
    // Simple alternate URL logic (assumes /en prefix for English)
    finalAlternateUrl = lang === "es"
      ? `${BASE_URL}/en${currentPath === "/" ? "" : currentPath}`
      : `${BASE_URL}${currentPath.replace(/^\/en/, "") || "/"}`;
  }

  // Schema.org — MedicalClinic JSON-LD
  const schemaMedicalClinic = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": SITE_NAME,
    "url": BASE_URL,
    "logo": DEFAULT_IMAGE,
    "telephone": "+506 8690-7757",
    "email": "contacto@mjfisioesteticayspa.com",
    "description": lang === "es" ? DEFAULT_DESC : "Teal-blue themed premium aesthetic clinic and spa in Turrialba, Costa Rica. Facial and body treatments.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Turrialba Centro, 150m este de la Iglesia Catolica",
      "addressLocality": "Turrialba",
      "addressRegion": "Cartago",
      "postalCode": "30501",
      "addressCountry": "CR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "9.9327",
      "longitude": "-83.6789"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "08:00",
        "closes": "15:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/mj_fisio_estetica_spa/",
      "https://www.facebook.com/mjfisioesteticaspa/"
    ],
    "priceRange": "$$"
  };

  // Schema.org — MedicalProcedure JSON-LD
  const schemaMedicalProcedure = serviceName ? {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": serviceName,
    "description": desc,
    "category": serviceCategory || (lang === "es" ? "Procedimiento Estético" : "Aesthetic Procedure"),
    "procedureSteps": lang === "es"
      ? "Reserva una sesion personalizada en MJ Fisio Estetica y Spa con nuestros profesionales."
      : "Book a personalized session at MJ Fisio Estetica & Spa with our certified professionals."
  } : null;

  // Sitelinks Searchbox JSON-LD
  const schemaWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_NAME,
    "url": BASE_URL,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${BASE_URL}/?s={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const showClinicSchema = schemaType === "MedicalClinic" || schemaType === "Both" || !schemaType;
  const showProcedureSchema = (schemaType === "MedicalProcedure" || schemaType === "Both" || (!schemaType && !!serviceName)) && !!schemaMedicalProcedure;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonicalUrl} />

      <meta name="geo.region" content="CR-C" />
      <meta name="geo.placename" content="Turrialba, Cartago, Costa Rica" />
      <meta name="geo.position" content="9.9327;-83.6789" />
      <meta name="ICBM" content="9.9327, -83.6789" />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="es_CR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="alternate" hrefLang={lang} href={canonicalUrl} />
      <link rel="alternate" hrefLang={alternateLang} href={finalAlternateUrl} />
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}/`} />

      <meta name="robots" content="index, follow" />
      <meta name="author" content={SITE_NAME} />
      <meta name="language" content={lang === "es" ? "Spanish" : "English"} />

      {/* JSON-LD Schemas */}
      {showClinicSchema && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMedicalClinic)}
        </script>
      )}
      {showProcedureSchema && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMedicalProcedure)}
        </script>
      )}
      <script type="application/ld+json">
        {JSON.stringify(schemaWebsite)}
      </script>
    </Helmet>
  );
}
