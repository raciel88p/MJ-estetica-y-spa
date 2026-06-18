import { withAppProviders } from "@/components/ReactAppWrapper";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  ArrowRight, Star, MapPin, Phone, Clock,
  ChevronRight, ChevronLeft, MessageCircle,
  ShieldCheck, Award, Sparkles, Heart, CheckCircle2
} from "lucide-react";

import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { GoogleMap, MAPS_LINK, GOOGLE_REVIEW_LINK } from "@/components/GoogleMap";
import { StatsBar } from "@/components/StatsBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const WA_LINK = "https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const formSchema = z.object({
  name: z.string().min(2, "El nombre es muy corto"),
  phone: z.string().min(8, "Teléfono inválido"),
  message: z.string().min(10, "El mensaje es muy corto"),
});

function Home() {
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setMounted(true);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", phone: "", message: "" }
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden selection:bg-primary/20">
      <SEO
        title="MJ Fisio Estética & Spa | Centro de Bienestar en Turrialba"
        description="Descubre tu mejor versión en MJ Fisio Estética y Spa. Tratamientos médicos, faciales y corporales de vanguardia en Turrialba, Costa Rica."
        canonical="/"
      />
      <Navbar />
      <FloatingWhatsApp />

      {/* ── HERO SECTION ────────────────────────────────── */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.webp"
            alt="MJ Fisio Estética & Spa"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/30 md:to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">Estética Avanzada & Wellness</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1] mb-8"
            >
              Realza tu <br />
              <span className="italic font-light text-primary">belleza natural</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed font-light"
            >
              En MJ Fisio Estética & Spa combinamos ciencia médica y tecnología de vanguardia para ofrecerte resultados visibles en un ambiente de total relajación.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5">
              <a href="#especialidades">
                <Button size="lg" className="h-14 px-10 text-sm tracking-widest uppercase font-bold bg-primary hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
                  Ver tratamientos
                </Button>
              </a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="h-14 px-10 text-sm tracking-widest uppercase font-bold bg-white/5 text-white border-white/20 hover:bg-white hover:text-stone-900 transition-all backdrop-blur-sm">
                  Agendar Cita
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1"
          >
            <div className="w-1.5 h-2 bg-primary rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* ── TRUST BAR ──────────────────────────────────── */}
      <section className="bg-[#050c14] py-12 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Profesionales", sub: "Certificados" },
              { icon: Star, title: "Resultados", sub: "Garantizados" },
              { icon: Heart, title: "Atención", sub: "Personalizada" },
              { icon: Award, title: "Tecnología", sub: "Médica" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 justify-center">
                <item.icon className="w-8 h-8 text-primary" />
                <div className="text-left">
                  <p className="text-white font-bold text-sm uppercase tracking-wider leading-tight">{item.title}</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-[0.2em]">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ESPECIALIDADES ─────────────────────────────── */}
      <section id="especialidades" className="py-24 md:py-32 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-stone-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">MJ Fisio Estética & Spa</h2>
            <h3 className="text-4xl md:text-6xl font-serif text-stone-900 mb-6">Nuestras Especialidades</h3>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Corporales",
                slug: "corporales",
                img: "about-us.webp",
                desc: "Remodelación y firmeza corporal.",
                link: "/tratamientos/corporales"
              },
              {
                title: "Faciales",
                slug: "faciales",
                img: "faciales-bg.webp",
                desc: "Limpieza y rejuvenecimiento facial.",
                link: "/tratamientos/faciales"
              },
              {
                title: "Piernas",
                slug: "piernas",
                img: "anticelulitis-bg.webp",
                desc: "Tratamientos circulatorios.",
                link: "/tratamientos/piernas"
              },
            ].map((cat, i) => (
              <motion.a
                key={i}
                href={cat.link}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group relative h-[450px] overflow-hidden rounded-sm"
              >
                <img
                  src={`/images/${cat.img}`}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h4 className="text-2xl font-serif text-white mb-2">{cat.title}</h4>
                  <p className="text-white/60 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    {cat.desc}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-bold text-[10px] tracking-widest uppercase">
                    Ver más <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRATAMIENTOS ESTRELLA ──────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">Tratamientos Destacados</p>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">Nuestros resultados <br /><span className="italic font-light text-primary">más buscados</span></h2>
            </div>
            <a href="/tratamientos/corporales" className="text-sm font-bold tracking-widest uppercase border-b border-stone-200 pb-2 hover:text-primary hover:border-primary transition-colors">
              Ver todos los servicios
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {[
              {
                title: "Botox Full Face",
                category: "Médico Estético",
                desc: "Suaviza arrugas de expresión manteniendo tu naturalidad.",
                link: "/servicios/botox-full-face"
              },
              {
                title: "Hidrolipoclasia",
                category: "Corporal",
                desc: "Elimina grasa localizada sin cirugía en una sesión.",
                link: "/servicios/masajes-corporales"
              },
              {
                title: "Limpieza Facial Profunda",
                category: "Facial",
                desc: "Renovación completa para una piel radiante y sin impurezas.",
                link: "/servicios/limpieza-facial"
              },
              {
                title: "Hilos Tensores",
                category: "Médico Estético",
                desc: "Efecto lifting inmediato estimulando tu propio colágeno.",
                link: "/servicios/hilos-tensores"
              },
              {
                title: "Depilación Láser",
                category: "Premium",
                desc: "Despídete del vello para siempre con tecnología de punta.",
                link: "/servicios/depilacion-laser"
              },
              {
                title: "Levantamiento de Glúteo",
                category: "Corporal",
                desc: "Tonifica y proyecta tu figura de forma no invasiva.",
                link: "/servicios/levantamiento-gluteo"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group"
              >
                <div className="mb-6 overflow-hidden bg-stone-100 aspect-video relative">
                   <div className="absolute inset-0 bg-stone-200 flex items-center justify-center">
                      <Sparkles className="w-12 h-12 text-white" />
                   </div>
                </div>
                <p className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-2">{item.category}</p>
                <h4 className="text-2xl font-serif text-stone-900 mb-3 group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                <a href={item.link} className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase hover:text-primary transition-colors">
                  Conocer más <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCIA MJ ─────────────────────────────── */}
      <section className="py-24 md:py-32 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-6">Experiencia Wellness</h2>
              <h3 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">Mucho más que un <br /><span className="italic font-light text-stone-400">centro de estética</span></h3>
              <div className="space-y-6 text-stone-400 text-lg font-light leading-relaxed">
                <p>Ubicados en el corazón de Turrialba, en MJ Estética & Wellness Center diseñamos cada tratamiento como un ritual de cuidado personal.</p>
                <p>Nuestra misión es ayudarte a sentirte bien contigo misma, fusionando protocolos médicos de alta eficiencia con una experiencia sensorial única.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                {[
                  "Valoración profesional previa",
                  "Protocolos 100% personalizados",
                  "Tecnología de última generación",
                  "Ambiente privado y relajante"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-white text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-14">
                 <a href="/nosotros">
                    <Button variant="outline" className="h-12 px-8 tracking-widest uppercase text-[10px] font-bold border-white/20 text-white hover:bg-white hover:text-stone-900 transition-all">
                       Conoce nuestra historia
                    </Button>
                 </a>
              </div>
            </motion.div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
                 <img src="/images/about-us.webp" alt="Experiencia MJ" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-primary p-10 hidden md:block">
                 <p className="text-white text-5xl font-serif font-bold mb-1">10+</p>
                 <p className="text-white/80 text-[10px] font-bold tracking-widest uppercase">Años de experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ────────────────────────────────── */}
      <section className="py-24 bg-stone-50 border-b border-stone-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-8">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-primary text-primary" />)}
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-12">Lo que nuestras clientas dicen</h2>

            <div className="bg-white p-10 md:p-16 shadow-xl rounded-sm relative">
              <p className="text-xl md:text-2xl text-stone-600 font-light italic leading-relaxed mb-8">
                "Excelente atención, el personal es muy profesional y amable. Las instalaciones son de primer nivel y los resultados de los tratamientos son visibles desde la primera sesión. 100% recomendado para quienes buscan calidad."
              </p>
              <p className="text-stone-900 font-bold uppercase tracking-widest text-sm">— María V.</p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
               <a href="/testimonios">
                  <Button variant="ghost" className="tracking-widest uppercase text-xs font-bold">Ver más testimonios</Button>
               </a>
               <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="tracking-widest uppercase text-xs font-bold border-stone-200">Dejar reseña en Google</Button>
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACTO ──────────────────────────────────── */}
      <section id="contacto" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
            <div className="flex-1">
              <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-6">Contacto</p>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8 leading-tight">¿Lista para empezar <br />tu transformación?</h2>

              <div className="space-y-8 mt-12">
                <div className="flex gap-5">
                   <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                   </div>
                   <div>
                      <p className="font-bold text-stone-900 text-lg">Visítanos</p>
                      <p className="text-stone-500 leading-relaxed">Turrialba Centro, 150m este de la Iglesia Católica, Cartago, Costa Rica.</p>
                   </div>
                </div>
                <div className="flex gap-5">
                   <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                   </div>
                   <div>
                      <p className="font-bold text-stone-900 text-lg">Llámanos</p>
                      <p className="text-stone-500">+506 8888-8888</p>
                   </div>
                </div>
                <div className="flex gap-5">
                   <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                   </div>
                   <div>
                      <p className="font-bold text-stone-900 text-lg">Horario</p>
                      <p className="text-stone-500">Lun - Vie: 9:00 - 20:00 / Sáb: 8:00 - 15:00</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="flex-1 min-h-[450px] relative rounded-sm overflow-hidden shadow-2xl border border-stone-100">
               <GoogleMap className="h-full w-full" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default withAppProviders(Home);
