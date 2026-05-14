import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";

// Placeholder mock data until we fetch from an API (or Notion in SPA context)
const mockPosts = [
  {
    id: "mi-primer-post",
    title: "Próximamente: Nuestro Nuevo Blog",
    description: "Estamos preparando artículos sobre estética, masajes y bienestar. Muy pronto conectaremos esta sección para poder publicar contenido directamente.",
    date: new Date(),
    tags: ["novedades", "spa"]
  }
];

export default function BlogList() {
  return (
    <>
      <SEO
        title="Blog | MJ Estética Wellness Center"
        description="Noticias, consejos y artículos sobre estética, masajes y bienestar."
      />
      <Navbar />

      <main className="min-h-screen pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestro Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Consejos, novedades y todo lo que necesitas saber sobre bienestar y estética.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2 hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </h2>
                  </Link>
                  {post.date && (
                    <time className="text-sm text-gray-500 mb-4 block" dateTime={post.date.toISOString()}>
                      {post.date.toLocaleDateString("es-CR", { year: "numeric", month: "long", day: "numeric" })}
                    </time>
                  )}
                  {post.description && (
                    <p className="text-gray-600 line-clamp-3">
                      {post.description}
                    </p>
                  )}
                  <div className="mt-4">
                    <Link href={`/blog/${post.id}`} className="text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center cursor-pointer">
                      Leer más
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
            {mockPosts.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">Próximamente publicaremos nuevos artículos. ¡Mantente atento!</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
