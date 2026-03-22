import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: "dark" | "light";
}

const BASE_URL = "https://mjfisioesteticayspa.com";

export function Breadcrumb({ items, variant = "dark" }: BreadcrumbProps) {
  const base = variant === "dark"
    ? "text-white/70 hover:text-white"
    : "text-muted-foreground hover:text-foreground";
  const current = variant === "dark" ? "text-white font-medium" : "text-foreground font-medium";
  const sep = variant === "dark" ? "text-white/40" : "text-muted-foreground/50";
  const all = [{ label: "Inicio", href: "/" }, ...items];

  const schemaItems = all.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.label,
    item: item.href ? `${BASE_URL}${item.href}` : undefined,
  }));

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: schemaItems,
          })}
        </script>
      </Helmet>

      <nav
        aria-label="Breadcrumb"
        className={`flex items-center flex-wrap gap-1 text-sm ${variant === "dark" ? "text-white/70" : "text-muted-foreground"}`}
      >
        <Link href="/" className={`flex items-center gap-1 transition-colors ${base}`}>
          <Home className="w-3.5 h-3.5" />
          <span>Inicio</span>
        </Link>

        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1">
            <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${sep}`} />
            {item.href && i < items.length - 1 ? (
              <Link href={item.href} className={`transition-colors ${base}`}>
                {item.label}
              </Link>
            ) : (
              <span className={current}>{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
