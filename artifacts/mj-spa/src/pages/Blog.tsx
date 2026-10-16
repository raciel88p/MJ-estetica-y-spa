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

const categoriesES = [
  { id: "all", name: "Todos" },
  { id: "medicina-estetica", name: "Servicios Médicos Estéticos" },
  { id: "corporales", name: "Servicios Corporales" },
  { id: "faciales", name: "Cuidados Faciales" },
  { id: "dentales", name: "Servicios Dentales" },
  { id: "capilar", name: "Trasplante Capilar" },
  { id: "rituales-spa", name: "Rituales SPA" }
];

const categoriesEN = [
  { id: "all", name: "All" },
  { id: "medicina-estetica", name: "Medical Aesthetic Services" },
  { id: "corporales", name: "Body Treatments" },
  { id: "faciales", name: "Facial Care" },
  { id: "dentales", name: "Dental Services" },
  { id: "capilar", name: "Hair Transplant" },
  { id: "rituales-spa", name: "SPA Rituals" }
];

function getPostCategory(post: any): string {
  const title = (post.title || "").toLowerCase();
  const role = (post.author?.role || "").toLowerCase();
  const name = (post.author?.name || "").toLowerCase();

  if (title.includes("denta") || title.includes("diente") || title.includes("limpieza") || role.includes("denta") || role.includes("odon")) return "dentales";
  if (title.includes("capilar") || title.includes("trasplante") || title.includes("pelo") || role.includes("capilar")) return "capilar";
  if (title.includes("botox") || title.includes("hilos") || title.includes("ácido") || title.includes("medici") || name.includes("dr.") || role.includes("médic")) return "medicina-estetica";
  if (title.includes("corporal") || title.includes("masaje") || title.includes("celulitis") || title.includes("reductor") || role.includes("fisio")) return "corporales";
  if (title.includes("spa") || title.includes("boda") || title.includes("relaj")) return "rituales-spa";
  return "faciales";
}

export default function Blog({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const [posts, setPosts] = useState<any[]>([]);
  const [authors, setAuthors] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [loading, setLoading] = useState(true);
  const t = useTranslations(lang);

  const categories = lang === 'es' ? categoriesES : categoriesEN;

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

  const filteredPosts = selectedCategory === "all"
    ? posts
    : posts.filter((p) => getPostCategory(p) === selectedCategory);

  return (
    <div className="min-h-screen bg-white font-sans text-stone-900">
      <SEO
        title={lang === 'es' ? "Blog & Publicaciones por Sector Médico | MJ Fisio Estética y Spa" : "Blog & Articles by Medical Sector | MJ Physio Aesthetics & Spa"}
        description={lang === 'es' ? "Consejos de salud, medicina estética, odontología y bienestar en Turrialba y Siquirres." : "Health, medical aesthetic, dental care and wellness articles in Turrialba and Siquirres."}
      />
      <Navbar lang={lang} />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
              {lang === 'es' ? "Revista Editorial" : "Editorial Journal"}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4 font-bold">
              {lang === 'es' ? 'Nuestro Diario de Bienestar' : 'Our Wellness Journal'}
            </h1>
            <p className="text-lg text-stone-600 max-w-xl mx-auto">
              {lang === 'es'
                ? 'Consejos expertos en medicina estética, cuidado facial, salud dental, corporal y bienestar integral.'
                : 'Expert advice on medical aesthetics, skincare, dental health, body care, and holistic wellness.'}
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
            </div>
          ) : (
            <>
              {/* Sector Category Filter Buttons */}
              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 mb-12 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-stone-200/60">
                  <h3 className="font-serif font-bold text-stone-900 text-base">
                    {lang === 'es' ? "Filtrar Publicaciones por Sector Médico" : "Filter Articles by Medical Sector"}
                  </h3>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                    {filteredPosts.length} {lang === 'es' ? (filteredPosts.length === 1 ? 'Artículo' : 'Artículos') : (filteredPosts.length === 1 ? 'Article' : 'Articles')}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                        selectedCategory === cat.id
                          ? "bg-primary text-white shadow-sm"
                          : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200/80"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post: any) => (
                  <motion.article
                    key={post._id}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
                  >
                    {post.mainImage && (
                      <Link href={lang === 'es' ? `/blog/${post.slug.current}` : `/en/blog/${post.slug.current}`}>
                        <img
                          src={urlFor(post.mainImage).width(600).height(400).url()}
                          alt={post.title}
                          className="w-full h-52 cursor-pointer object-cover"
                        />
                      </Link>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span className="text-[10px] text-primary font-bold tracking-widest uppercase">
                          {new Date(post.publishedAt).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </span>
                        {post.author?.role && (
                          <span className="text-[10px] font-bold text-stone-600 bg-stone-100 px-2 py-0.5 rounded-full border border-stone-200">
                            {post.author.role}
                          </span>
                        )}
                      </div>

                      <h2 className="text-xl font-serif font-bold mb-3 text-stone-900 leading-snug">
                        <Link href={lang === 'es' ? `/blog/${post.slug.current}` : `/en/blog/${post.slug.current}`} className="hover:text-primary transition-colors line-clamp-2 cursor-pointer">
                          {post.title}
                        </Link>
                      </h2>

                      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-stone-100">
                        {post.author?.image && (
                          <img
                            src={urlFor(post.author.image).width(80).url()}
                            alt={post.author.name}
                            className="w-7 h-7 rounded-full object-cover object-top"
                          />
                        )}
                        <div>
                          <p className="text-xs font-bold text-stone-800">{post.author?.name}</p>
                          {post.author?.role && <p className="text-[10px] text-primary">{post.author.role}</p>}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-20 bg-stone-50 rounded-3xl border-2 border-dashed border-stone-200">
                  <p className="text-stone-400 font-medium">
                    {lang === 'es'
                      ? 'No hay publicaciones para la categoría seleccionada.'
                      : 'No articles found for the selected category.'}
                  </p>
                </div>
              )}

              {/* Expert Showcase Section with Roles */}
              {authors.length > 0 && (
                <div className="mt-32">
                  <div className="text-center mb-12">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
                      {lang === 'es' ? "Equipo Médico & Especialistas" : "Medical & Specialist Team"}
                    </span>
                    <h2 className="text-3xl font-serif text-stone-900 font-bold mb-4">
                      {lang === 'es' ? 'Nuestros Expertos' : 'Our Experts'}
                    </h2>
                    <p className="text-stone-600 text-sm max-w-xl mx-auto">
                      {lang === 'es'
                        ? 'Conoce a las mentes profesionales detrás de nuestras publicaciones de salud y estética.'
                        : 'Meet the healthcare specialists behind our clinical and wellness publications.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {authors.map((author: any) => (
                      <div key={author._id} className="text-center bg-stone-50 p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full shadow-md border-2 border-white">
                          {author.image ? (
                            <img
                              src={urlFor(author.image).width(200).height(200).url()}
                              alt={author.name}
                              className="w-full h-full object-cover object-top"
                            />
                          ) : (
                            <div className="w-full h-full bg-stone-200 flex items-center justify-center">
                              <span className="text-stone-400 font-bold text-2xl">{author.name.charAt(0)}</span>
                            </div>
                          )}
                        </div>
                        <h3 className="font-serif text-lg font-bold text-stone-900 mb-1">{author.name}</h3>
                        {author.role ? (
                          <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 mb-2">
                            {author.role}
                          </span>
                        ) : (
                          <span className="inline-block text-xs text-stone-500 mb-2">Specialist</span>
                        )}
                        {author.shortBio && (
                          <p className="text-stone-500 text-xs line-clamp-2 leading-relaxed">{author.shortBio}</p>
                        )}
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
