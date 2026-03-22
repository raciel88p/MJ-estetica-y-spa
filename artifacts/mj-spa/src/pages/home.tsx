import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Heart, Activity, Sparkles, Smile, Zap, Waves,
  Droplets, Coffee, Flower, ArrowRight, Star,
  MapPin, Phone, Clock, ChevronRight
} from "lucide-react";

import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

const servicesData = {
  "Estética Facial": [
    { title: "Limpieza Facial Profunda", desc: "Limpieza y purificación profunda de la piel.", icon: Sparkles },
    { title: "Higiene Facial Completa", desc: "Tratamiento completo de higiene y cuidado facial.", icon: Smile },
    { title: "Tratamiento Antienvejecimiento", desc: "Combate los signos del envejecimiento.", icon: Sparkles },
    { title: "Peeling Químico", desc: "Renovación celular mediante ácidos suaves.", icon: Droplets },
    { title: "Mesoterapia Facial", desc: "Microinyecciones con vitaminas y ácido hialurónico.", icon: Zap },
    { title: "Radiofrecuencia Facial", desc: "Reafirmación y rejuvenecimiento cutáneo.", icon: Waves },
  ],
  "Estética Corporal": [
    { title: "Masaje Relajante", desc: "Masaje para la relajación total del cuerpo.", icon: Heart },
    { title: "Masaje Anticelulítico", desc: "Tratamiento específico para la celulitis.", icon: Waves },
    { title: "Presoterapia", desc: "Drenaje con presión para mejorar la circulación.", icon: Activity },
    { title: "Cavitación", desc: "Reducción de grasa localizada mediante ultrasonidos.", icon: Zap },
    { title: "Radiofrecuencia Corporal", desc: "Reafirmación y remodelación corporal.", icon: Waves },
    { title: "Tratamiento Reductor", desc: "Tratamiento integral para la reducción de medidas.", icon: Activity },
  ],
  "Spa y Bienestar": [
    { title: "Circuito Spa", desc: "Experiencia completa de spa con diferentes tratamientos.", icon: Droplets },
    { title: "Chocolaterapia", desc: "Tratamiento corporal con chocolate para hidratar y nutrir.", icon: Coffee },
    { title: "Aromaterapia", desc: "Tratamiento con aceites esenciales para bienestar total.", icon: Flower },
    { title: "Baño de Sales", desc: "Tratamiento relajante con sales minerales.", icon: Droplets },
    { title: "Piedras Calientes", desc: "Técnica de termoterapia con piedras volcánicas.", icon: Zap },
    { title: "Envoltura Corporal", desc: "Envoltura para nutrir e hidratar la piel.", icon: Sparkles },
  ]
};

const testimonials = [
  { name: "Kattya Brenes", text: "Es un privilegio formar parte de la Familia MJ. Agradezco infinitamente por abrirme las puertas para ser atendida por un equipo de personas profesionales y capacitadas." },
  { name: "Carlos Brenes", text: "Desde que empecé con MJ estética he sentido como mi autoestima ha crecido, en un mes rebajé varios centímetros en mi abdomen y papada. Los resultados en poco tiempo me hacen sentir agradecido." },
  { name: "Laura Hernández González", text: "Esos rollitos tan molestos que no podía quitar por más gimnasio, los logré eliminar gracias al tratamiento en MJ estética. Sin lugar a dudas un lugar para chinearte y de paso verte mejor." },
  { name: "Andrea Salas Portuguez", text: "La atención excelente tanto de Adri como de María, los servicios de primera calidad, mucho orden, puntualidad y precios muy asequibles." },
  { name: "Marlene Fernández Mora", text: "El servicio brindado y la atención son excelentes, en particular el profesionalismo que demuestran. Sí los recomendaría a ojos cerrados." },
  { name: "Catalina Aguilar Madriz", text: "Me he realizado varios tratamientos con MJ teniendo súper buenos resultados, por eso sigo comprando paquetes y recomendando a mis amig@s a que también vayan." },
];

const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre es muy corto"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(9, "Teléfono inválido"),
  service: z.string().min(1, "Selecciona un servicio"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<keyof typeof servicesData>("Estética Facial");
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", phone: "", service: "", message: "" }
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form data:", data);
    toast({ title: "¡Mensaje enviado!", description: "Nos pondremos en contacto contigo pronto." });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <SEO
        title="Centro de Estética y Spa en Turrialba"
        description="MJ Fisio Estética y Spa en Turrialba, Costa Rica. Tratamientos faciales, masajes, depilación láser, botox, hilos tensores, nutrición y más. Reserva tu cita hoy."
        canonical="/"
      />
      <Navbar />
      <FloatingWhatsApp />

      {/* ── HERO ── */}
      <section id="inicio" className="relative h-screen flex items-end pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="MJ Fisio Estética y Spa - Centro de bienestar en Turrialba"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="text-white/60 tracking-[0.25em] uppercase text-xs font-medium mb-5">
              Turrialba · Costa Rica
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white leading-tight mb-6">
              Tu bienestar,<br />
              <span className="italic font-light text-white/80">nuestra prioridad</span>
            </h1>
            <p className="text-white/70 text-base md:text-lg mb-10 max-w-lg leading-relaxed">
              Estética avanzada, tratamientos médicos y spa en el corazón de Turrialba.
            </p>
            <a
              id="cta-hero-reserva"
              href="https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-stone-900 text-sm font-semibold tracking-wide px-8 py-4 hover:bg-primary hover:text-white transition-all duration-300 group"
            >
              Reservar cita
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 divide-x divide-white/20">
            {[
              { n: "2335", label: "Clientes atendidas" },
              { n: "82+", label: "Tratamientos disponibles" },
              { n: "3+", label: "Años de experiencia" },
            ].map((s) => (
              <div key={s.n} className="text-center px-4">
                <p className="text-white text-xl font-serif font-bold">{s.n}</p>
                <p className="text-white/60 text-xs tracking-wide mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section id="nosotros" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/about-us.png`}
                alt="Instalaciones de MJ Fisio Estética y Spa"
                className="w-full h-[520px] object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="lg:pl-4"
            >
              <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Sobre nosotros</p>
              <h2 className="text-3xl md:text-4xl font-serif text-stone-900 leading-tight mb-6">
                El arte de cuidar<br />
                <span className="italic font-light text-stone-400">de ti</span>
              </h2>
              <p className="text-stone-500 leading-relaxed mb-5">
                En MJ Fisio Estética y Spa hemos creado un espacio dedicado a tu salud, belleza y relajación.
                Situados en Turrialba, Costa Rica, combinamos la calidez de un trato cercano con la excelencia
                de profesionales altamente cualificados.
              </p>
              <p className="text-stone-500 leading-relaxed mb-10">
                Nuestro equipo trabaja de manera integral para ofrecerte tratamientos personalizados que
                responden a tus necesidades reales, usando tecnología de vanguardia en un ambiente diseñado para desconectar.
              </p>

              <ul className="space-y-3 mb-10">
                {["Profesionales certificados", "Tecnología avanzada", "Trato personalizado", "Productos de alta gama"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-stone-700 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link href="/nosotros">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary border-b border-primary/40 pb-0.5 hover:border-primary transition-colors cursor-pointer">
                  Conoce nuestro equipo <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="servicios" className="py-24 md:py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-14">
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Nuestros servicios</p>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900">Tratamientos a medida</h2>
          </div>

          {/* Tab nav */}
          <div className="flex gap-8 mb-10 border-b border-stone-200">
            {(Object.keys(servicesData) as Array<keyof typeof servicesData>).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-medium transition-all duration-200 border-b-2 -mb-px ${
                  activeTab === tab
                    ? "border-primary text-primary"
                    : "border-transparent text-stone-400 hover:text-stone-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Services list */}
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200"
          >
            {servicesData[activeTab].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white p-8 group hover:bg-stone-50 transition-colors"
              >
                <h4 className="text-base font-semibold text-stone-900 mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-stone-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonios" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Testimonios</p>
              <h2 className="text-3xl md:text-4xl font-serif text-stone-900">Lo que dicen<br />nuestras clientas</h2>
            </div>
            <Link href="/testimonios">
              <span className="text-sm text-stone-400 hover:text-primary transition-colors cursor-pointer whitespace-nowrap">
                Ver todos los testimonios →
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="border-t border-stone-200 pt-8"
              >
                <div className="flex gap-0.5 mb-5">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">"{t.text}"</p>
                <p className="text-stone-900 text-sm font-semibold">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="py-20 md:py-24 bg-stone-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Agenda tu visita</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Comienza tu experiencia<br />
              <span className="italic font-light text-white/60">de bienestar hoy</span>
            </h2>
            <p className="text-stone-400 mb-10 text-sm leading-relaxed max-w-xl mx-auto">
              Estamos en Turrialba, Ciudadela Jorge de Bravo. Escríbenos por WhatsApp y agendamos tu cita.
            </p>
            <a
              href="https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white text-sm font-semibold tracking-wide px-10 py-4 hover:bg-primary/90 transition-colors group"
            >
              Reservar por WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contacto" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Contacto</p>
              <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-8">
                Reserva tu momento<br />
                <span className="italic font-light text-stone-400">de bienestar</span>
              </h2>
              <p className="text-stone-500 text-sm leading-relaxed mb-12">
                Estamos aquí para asesorarte. Contáctanos directamente o completa el formulario y te respondemos pronto.
              </p>

              <div className="space-y-8">
                {[
                  { icon: MapPin, title: "Ubicación", lines: ["Turrialba, Costa Rica", "Ciudadela Jorge de Bravo"] },
                  { icon: Phone, title: "Teléfono", lines: ["+506 86907757", "Para reservas o consultas"] },
                  { icon: Clock, title: "Horario", lines: ["Lun, Mar, Jue, Vie: 9:00 – 20:00", "Sábados: 8:00 – 15:00"] },
                ].map(({ icon: Icon, title, lines }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-stone-200 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-stone-900 uppercase tracking-widest mb-1">{title}</p>
                      {lines.map((l, i) => (
                        <p key={i} className="text-stone-500 text-sm">{l}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-widest mb-2">Nombre</label>
                  <Input
                    {...form.register("name")}
                    placeholder="Tu nombre completo"
                    className="rounded-none border-0 border-b border-stone-200 bg-transparent px-0 py-3 focus-visible:ring-0 focus-visible:border-primary placeholder:text-stone-300 text-sm"
                  />
                  {form.formState.errors.name && <p className="text-red-500 text-xs mt-1">{form.formState.errors.name.message}</p>}
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-widest mb-2">Email</label>
                    <Input
                      {...form.register("email")}
                      placeholder="tu@email.com"
                      className="rounded-none border-0 border-b border-stone-200 bg-transparent px-0 py-3 focus-visible:ring-0 focus-visible:border-primary placeholder:text-stone-300 text-sm"
                    />
                    {form.formState.errors.email && <p className="text-red-500 text-xs mt-1">{form.formState.errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-widest mb-2">Teléfono</label>
                    <Input
                      {...form.register("phone")}
                      placeholder="Tu teléfono"
                      className="rounded-none border-0 border-b border-stone-200 bg-transparent px-0 py-3 focus-visible:ring-0 focus-visible:border-primary placeholder:text-stone-300 text-sm"
                    />
                    {form.formState.errors.phone && <p className="text-red-500 text-xs mt-1">{form.formState.errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-widest mb-2">Servicio</label>
                  <select
                    {...form.register("service")}
                    className="w-full border-0 border-b border-stone-200 bg-transparent py-3 text-sm text-stone-700 focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="">Selecciona un servicio</option>
                    <optgroup label="Estética">
                      <option value="limpieza-facial">Limpieza Facial</option>
                      <option value="tratamiento-corporal">Tratamiento Corporal</option>
                    </optgroup>
                    <optgroup label="Spa">
                      <option value="circuito-spa">Circuito Spa</option>
                      <option value="masaje-relajante">Masaje Relajante</option>
                    </optgroup>
                  </select>
                  {form.formState.errors.service && <p className="text-red-500 text-xs mt-1">{form.formState.errors.service.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-widest mb-2">Mensaje</label>
                  <Textarea
                    {...form.register("message")}
                    placeholder="¿En qué podemos ayudarte?"
                    className="rounded-none border-0 border-b border-stone-200 bg-transparent px-0 py-3 focus-visible:ring-0 focus-visible:border-primary placeholder:text-stone-300 text-sm min-h-[100px] resize-none"
                  />
                  {form.formState.errors.message && <p className="text-red-500 text-xs mt-1">{form.formState.errors.message.message}</p>}
                </div>

                <div className="pt-4">
                  <Button
                    id="cta-contacto-enviar"
                    type="button"
                    className="w-full rounded-none bg-stone-900 hover:bg-primary text-white text-sm font-semibold tracking-wide py-5 transition-colors"
                    onClick={() => window.open("https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0", "_blank")}
                  >
                    Enviar por WhatsApp
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
