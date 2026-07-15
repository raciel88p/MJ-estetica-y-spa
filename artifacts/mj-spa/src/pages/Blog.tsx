import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { useTranslations } from "@/i18n/ui";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Blog({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const [posts, setPosts] = useState<any[]>([]);
  const [authors, setAuthors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const t = useTranslations(lang);

  useEffect(() => {
    Promise.all([
      client.fetch(`*[_type == "post" && language == $lang] | order(publishedAt desc) {
        ...,
        author->
      }`, { lang }),
      client.fetch(`*[_type == "author"] | order(name asc)`)
    ])
      .then(([postsData, authorsData]) => {
        setPosts(postsData);
        setAuthors(authorsData);
        setLoading(false);
      })
      .catch(console.error);
  }, [lang]);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={lang === 'es' ? "Blog | MJ Fisio Estética y Spa" : "Blog | MJ Fisio Estética & Spa"}
        description={lang === 'es' ? "Consejos sobre salud, belleza y bienestar en Turrialba." : "Health, beauty and wellness tips in Turrialba."}
      />
      <Navbar lang={lang} />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">
              {lang === 'es' ? 'Nuestro Blog' : 'Our Blog'}
            </h1>
            <p className="text-xl text-muted-foreground">
              {lang === 'es' ? 'Consejos y novedades sobre bienestar y estética.' : 'Tips and news about wellness and aesthetics.'}
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post: any) => (
                  <motion.article
                    key={post._id}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow flex flex-col"
                  >
                    {post.mainImage && (
                      <Link href={lang === 'es' ? `/blog/${post.slug.current}` : `/en/blog/${post.slug.current}`}>
                        <img
                          src={urlFor(post.mainImage).width(600).height(400).url()}
                          alt={post.title}
                          className="w-full h-48 cursor-pointer object-cover"
                        />
                      </Link>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <h2 className="text-xl font-serif mb-2 text-stone-900">
                        <Link href={lang === 'es' ? `/blog/${post.slug.current}` : `/en/blog/${post.slug.current}`} className="hover:text-primary transition-colors line-clamp-2 cursor-pointer">
                          {post.title}
                        </Link>
                      </h2>
                      <div className="flex items-center gap-2 mb-4">
                        {post.author?.image && (
                          <img
                            src={urlFor(post.author.image).width(40).height(40).url()}
                            alt={post.author.name}
                            className="w-6 h-6 rounded-full object-cover"
                          />
                        )}
                        <p className="text-xs text-muted-foreground">
                          <span className="font-medium text-stone-700">{post.author?.name}</span> • {new Date(post.publishedAt).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </p>
                      </div>
                      <Link href={lang === 'es' ? `/blog/${post.slug.current}` : `/en/blog/${post.slug.current}`} className="mt-auto text-primary font-medium hover:underline cursor-pointer">
                        {lang === 'es' ? 'Leer más →' : 'Read more →'}
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>

              {posts.length === 0 && (
                <div className="text-center py-20 bg-stone-50 rounded-3xl border-2 border-dashed border-stone-200">
                  <p className="text-stone-400 font-medium">
                    {lang === 'es'
                      ? 'Próximamente compartiremos contenido muy especial contigo.'
                      : 'Coming soon we will share very special content with you.'}
                  </p>
                </div>
              )}

              {authors.length > 0 && (
                <div className="mt-32">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif text-primary mb-4">
                      {lang === 'es' ? 'Nuestros Expertos' : 'Our Experts'}
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      {lang === 'es'
                        ? 'Conoce a las mentes detrás de nuestro contenido de bienestar.'
                        : 'Meet the minds behind our wellness content.'}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {authors.map((author: any) => (
                      <div key={author._id} className="text-center group">
                        <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full shadow-md transition-transform group-hover:scale-105">
                          {author.image ? (
                            <img
                              src={urlFor(author.image).width(200).height(200).url()}
                              alt={author.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-stone-200 flex items-center justify-center">
                              <span className="text-stone-400 font-bold text-2xl">{author.name.charAt(0)}</span>
                            </div>
                          )}
                        </div>
                        <h3 className="font-serif text-lg font-medium text-stone-900">{author.name}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
