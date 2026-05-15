import { Link, useRoute } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";

// Placeholder mock data
const mockPosts: Record<string, any> = {};

export default function BlogPost() {
  const [, params] = useRoute("/blog/:id");
  const postId = params?.id;
  const post = postId ? mockPosts[postId as keyof typeof mockPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Artículo no encontrado</h1>
          <Link href="/blog" className="text-primary hover:underline">Volver al blog</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${post.title} | MJ Estética Wellness Center`}
        description={post.description}
      />
      <Navbar />

      <main className="min-h-screen pt-24 pb-16 bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10 text-center">
            {post.tags && post.tags.length > 0 && (
              <div className="flex justify-center gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            {post.date && (
              <time className="text-gray-500 block" dateTime={post.date.toISOString()}>
                {post.date.toLocaleDateString("es-CR", { year: "numeric", month: "long", day: "numeric" })}
              </time>
            )}
          </header>

          <div
            className="prose prose-lg prose-primary max-w-none prose-headings:font-semibold prose-a:text-primary hover:prose-a:text-primary/80"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 pt-8 border-t border-gray-100">
            <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-primary transition-colors font-medium cursor-pointer">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al blog
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
