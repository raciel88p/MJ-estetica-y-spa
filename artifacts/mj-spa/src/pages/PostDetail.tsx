import { useState, useEffect } from "react";
import { useRoute } from "wouter";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { PortableText } from "@/components/blog/PortableText";
import { useTranslations } from "@/i18n/ui";

export default function PostDetail({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const [match, params] = useRoute(lang === 'es' ? "/blog/:slug" : "/en/blog/:slug");
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const t = useTranslations(lang);

  useEffect(() => {
    if (params?.slug) {
      client
        .fetch(`*[_type == "post" && slug.current == $slug && language == $lang][0] {
          ...,
          author->
        }`, { slug: params.slug, lang })
        .then((data) => {
          setPost(data);
          setLoading(false);
        })
        .catch(console.error);
    }
  }, [params?.slug, lang]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar lang={lang} />
        <div className="flex justify-center items-center h-[60vh]">
          <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        </div>
        <Footer lang={lang} />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar lang={lang} />
        <div className="max-w-3xl mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-serif mb-4">{lang === 'es' ? 'Post no encontrado' : 'Post not found'}</h1>
          <a href={lang === 'es' ? "/blog" : "/en/blog"} className="text-primary hover:underline">
            {lang === 'es' ? '← Volver al blog' : '← Back to blog'}
          </a>
        </div>
        <Footer lang={lang} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${post.title} | MJ Fisio Estética y Spa`}
        description={post.title}
      />
      <Navbar lang={lang} />

      <article className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4 leading-tight">{post.title}</h1>
            <div className="flex items-center text-muted-foreground gap-4 text-sm uppercase tracking-widest">
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
              </time>
            </div>
          </header>

          {post.mainImage && (
            <img
              src={urlFor(post.mainImage).width(1200).url()}
              alt={post.title}
              className="w-full rounded-2xl mb-8 shadow-sm"
            />
          )}

          <div className="prose prose-lg prose-stone max-w-none prose-headings:font-serif prose-headings:text-primary">
            <PortableText value={post.body} />
          </div>

          {post.author && (
            <div className="mt-16 p-8 bg-stone-50 rounded-2xl border border-border flex flex-col md:flex-row gap-6 items-center md:items-start">
              {post.author.image && (
                <img
                  src={urlFor(post.author.image).width(200).height(200).url()}
                  alt={post.author.name}
                  className="w-24 h-24 rounded-full object-cover shadow-sm"
                />
              )}
              <div className="flex-1 text-center md:text-left">
                <p className="text-primary text-xs font-bold tracking-widest uppercase mb-1">
                  {lang === 'es' ? 'Sobre el autor' : 'About the author'}
                </p>
                <h3 className="text-xl font-serif text-stone-900 mb-3">{post.author.name}</h3>
                {post.author.bio && (
                  <div className="text-stone-600 text-sm leading-relaxed">
                    <PortableText value={post.author.bio} />
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="mt-16 pt-8 border-t border-border">
            <a href={lang === 'es' ? "/blog" : "/en/blog"} className="text-primary font-medium hover:underline flex items-center gap-2">
              <span>←</span> {lang === 'es' ? 'Volver al blog' : 'Back to blog'}
            </a>
          </div>
        </div>
      </article>

      <Footer lang={lang} />
    </div>
  );
}
