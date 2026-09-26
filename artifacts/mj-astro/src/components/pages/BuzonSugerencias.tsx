import { withAppProviders } from "@/components/ReactAppWrapper";
import { SEO } from "@/components/SEO";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { motion } from "framer-motion";
import { MessageSquareHeart, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

function BuzonSugerencias({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const schema = z.object({
    botcheck: z.string().optional(),
    nombre: z.string().min(2, lang === 'es' ? "Por favor ingresa tu nombre" : "Please enter your name"),
    tipo: z.string().min(1, lang === 'es' ? "Selecciona una categoría" : "Select a category"),
    mensaje: z.string().min(10, lang === 'es' ? "El mensaje debe tener al menos 10 caracteres" : "The message must have at least 10 characters"),
  });

  type FormValues = z.infer<typeof schema>;
  const [enviado, setEnviado] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormValues) => {
    // Honeypot check to prevent automated spam bot submissions
    if (data.botcheck) {
      console.warn("Spam bot detected!");
      return;
    }

    const header = lang === 'es' ? "*Buzón de Sugerencias - MJ Estética*" : "*Suggestion Box - MJ Aesthetics*";
    const nameLabel = lang === 'es' ? "*Nombre:*" : "*Name:*";
    const categoryLabel = lang === 'es' ? "*Categoría:*" : "*Category:*";
    const messageLabel = lang === 'es' ? "*Mensaje:*" : "*Message:*";

    const texto = `${header}%0A%0A${nameLabel} ${encodeURIComponent(data.nombre)}%0A${categoryLabel} ${encodeURIComponent(data.tipo)}%0A%0A${messageLabel}%0A${encodeURIComponent(data.mensaje)}`;

    window.open(
      `https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0&text=${texto}`,
      "_blank"
    );

    setEnviado(true);
    reset();
    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title={lang === 'es' ? "Buzón de Sugerencias" : "Suggestion Box"}
        description={lang === 'es' ? "Comparte tus sugerencias, ideas o comentarios con el equipo de MJ Fisio Estética y Spa. Tu opinión nos ayuda a mejorar cada día." : "Share your suggestions, ideas, or comments with the MJ Fisio Estética & Spa team. Your opinion helps us improve every day."}
        canonical={lang === 'es' ? "/buzon-sugerencias" : "/en/suggestion-box"}
        lang={lang}
      />
      <Navbar lang={lang} alternateLink={lang === 'es' ? '/en/suggestion-box' : '/buzon-sugerencias'} />

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <div className="flex justify-center mb-6">
            <Breadcrumb items={[{ label: lang === 'es' ? "Nosotros" : "About Us", href: lang === 'es' ? "/nosotros" : "/en/nosotros" }, { label: lang === 'es' ? "Buzón de Sugerencias" : "Suggestion Box" }]} />
          </div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium tracking-widest uppercase mb-6">
              <MessageSquareHeart className="w-4 h-4" />
              {lang === 'es' ? "Tu opinión nos importa" : "Your opinion matters"}
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-5">
              {lang === 'es' ? "Buzón de Sugerencias" : "Suggestion Box"}
            </h1>
            <p className="text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
              {lang === 'es'
                ? "Comparte tus ideas, comentarios o sugerencias. Cada mensaje nos ayuda a mejorar y brindarte una experiencia aún mejor."
                : "Share your ideas, comments, or suggestions. Each message helps us improve and provide you with an even better experience."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl shadow-xl border border-border p-8 md:p-12"
          >
            {enviado ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-serif text-foreground mb-2">{lang === 'es' ? "¡Gracias por tu mensaje!" : "Thanks for your message!"}</h3>
                <p className="text-muted-foreground">{lang === 'es' ? "Tu sugerencia fue enviada. Nos comprometemos a leerla y mejorar tu experiencia." : "Your suggestion was sent. We promise to read it and improve your experience."}</p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Honeypot anti-spam input */}
                <div className="hidden" aria-hidden="true">
                  <input
                    {...register("botcheck")}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {lang === 'es' ? "Nombre" : "Name"} <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register("nombre")}
                    placeholder={lang === 'es' ? "Tu nombre" : "Your name"}
                    className={`w-full border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all ${errors.nombre ? "border-destructive" : "border-border"}`}
                  />
                  {errors.nombre && <p className="text-destructive text-xs mt-1">{errors.nombre.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {lang === 'es' ? "Categoría" : "Category"} <span className="text-primary">*</span>
                  </label>
                  <select
                    {...register("tipo")}
                    className={`w-full border rounded-xl px-4 py-3 text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all ${errors.tipo ? "border-destructive" : "border-border"}`}
                  >
                    <option value="">{lang === 'es' ? "Selecciona una categoría" : "Select a category"}</option>
                    <option value={lang === 'es' ? "Atención al cliente" : "Customer service"}>{lang === 'es' ? "Atención al cliente" : "Customer service"}</option>
                    <option value={lang === 'es' ? "Instalaciones" : "Facilities"}>{lang === 'es' ? "Instalaciones" : "Facilities"}</option>
                    <option value={lang === 'es' ? "Tratamientos" : "Treatments"}>{lang === 'es' ? "Tratamientos" : "Treatments"}</option>
                    <option value={lang === 'es' ? "Precios y paquetes" : "Prices and packages"}>{lang === 'es' ? "Precios y paquetes" : "Prices and packages"}</option>
                    <option value={lang === 'es' ? "Nuevos servicios" : "New services"}>{lang === 'es' ? "Nuevos servicios" : "New services"}</option>
                    <option value={lang === 'es' ? "Otro" : "Other"}>{lang === 'es' ? "Otro" : "Other"}</option>
                  </select>
                  {errors.tipo && <p className="text-destructive text-xs mt-1">{errors.tipo.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {lang === 'es' ? "Tu mensaje" : "Your message"} <span className="text-primary">*</span>
                  </label>
                  <textarea
                    {...register("mensaje")}
                    rows={5}
                    placeholder={lang === 'es' ? "Escribe aquí tu sugerencia, comentario o idea..." : "Write your suggestion, comment, or idea here..."}
                    className={`w-full border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none ${errors.mensaje ? "border-destructive" : "border-border"}`}
                  />
                  {errors.mensaje && <p className="text-destructive text-xs mt-1">{errors.mensaje.message}</p>}
                </div>

                <button
                  id="cta-buzon-enviar"
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white rounded-full px-8 py-4 text-base font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/30"
                >
                  <Send className="w-4 h-4" />
                  {lang === 'es' ? "Enviar sugerencia" : "Send suggestion"}
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  {lang === 'es'
                    ? "Tu mensaje se enviará a través de WhatsApp directamente a nuestro equipo."
                    : "Your message will be sent via WhatsApp directly to our team."}
                </p>
              </form>
            )}
          </motion.div>

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            {[
              {
                icon: "💬",
                title: lang === 'es' ? "Anónimo" : "Anonymous",
                desc: lang === 'es' ? "Puedes no incluir datos personales si prefieres." : "You can choose not to include personal data if you prefer."
              },
              {
                icon: "👀",
                title: lang === 'es' ? "Lo leemos todo" : "We read everything",
                desc: lang === 'es' ? "Cada sugerencia es revisada por nuestro equipo." : "Every suggestion is reviewed by our team."
              },
              {
                icon: "✨",
                title: lang === 'es' ? "Mejoramos" : "We improve",
                desc: lang === 'es' ? "Tu opinión impulsa cambios reales en el servicio." : "Your opinion drives real changes in the service."
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-white rounded-2xl border border-border p-5 text-center shadow-sm"
              >
                <div className="text-3xl mb-2">{card.icon}</div>
                <h4 className="font-serif font-semibold text-foreground mb-1">{card.title}</h4>
                <p className="text-sm text-muted-foreground">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer lang={lang} />
      <FloatingWhatsApp />
    </div>
  );
}

export default withAppProviders(BuzonSugerencias);
