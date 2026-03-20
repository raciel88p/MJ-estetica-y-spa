import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Heart, Activity, Sparkles, Smile, Zap, Waves, 
  Droplets, Coffee, Flower, ArrowRight, Star, Quote, CheckCircle2,
  MapPin, Phone, Clock
} from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// --- DATA ---
const servicesData = {
  "Fisioterapia": [
    { title: "Fisioterapia Manual", desc: "Tratamiento de dolores musculares y articulares mediante técnicas manuales.", icon: Activity },
    { title: "Electroestimulación", desc: "Técnica para aliviar el dolor y mejorar la función muscular.", icon: Zap },
    { title: "Vendaje Funcional", desc: "Técnica de vendaje para soporte y recuperación.", icon: Heart },
    { title: "Masaje Terapéutico", desc: "Masaje especializado para alivio de tensiones y dolores.", icon: Waves },
    { title: "Punción Seca", desc: "Tratamiento de puntos gatillo mediante agujas finas.", icon: Activity },
    { title: "Drenaje Linfático", desc: "Técnica de masaje para estimular el sistema linfático.", icon: Droplets },
  ],
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
    { title: "Presoterapia", desc: "Tratamiento de drenaje con presión para mejorar la circulación.", icon: Activity },
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
    { title: "Envoltura Corporal", desc: "Tratamiento de envoltura para nutrir e hidratar la piel.", icon: Sparkles },
  ]
};

const testimonials = [
  { name: "María García", text: "Llevo años viniendo a MJ Fisio y nunca me ha decepcionado. Los masajes son increíbles y el trato es excelente. 100% recomendado." },
  { name: "Laura Martínez", text: "La fisioterapia me ha ayudado muchísimo con mi dolor de espalda. Las chicas son muy profesionales y amables. Me encanta este centro." },
  { name: "Ana Rodríguez", text: "Vine por primera vez para un tratamiento facial y quedé encantada. La limpieza facial fue espectacular. Ya tengo la siguiente cita reservada." },
  { name: "Carmen López", text: "El circuito spa es una experiencia de lujo. Todo está muy cuidado y el ambiente es muy relajante. Perfecto para desconectar." },
  { name: "Isabel Sánchez", text: "Hice el tratamiento de cavitación y los resultados son visibles desde la primera sesión. Muy recomendable y el precio es muy razonable." },
  { name: "Patricia Fernández", text: "El mejor centro de estética que he conocido. Profesionales, amables y con resultados reales. No cambio este sitio por nada." },
];

// --- SCHEMAS ---
const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre es muy corto"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(9, "Teléfono inválido"),
  service: z.string().min(1, "Selecciona un servicio"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

// --- ANIMATION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<keyof typeof servicesData>("Fisioterapia");
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "", email: "", phone: "", service: "", message: ""
    }
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form data:", data);
    toast({
      title: "¡Mensaje enviado con éxito!",
      description: "Nos pondremos en contacto contigo lo antes posible.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      <FloatingWhatsApp />

      {/* --- HERO SECTION --- */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Spa Hero Background" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-white/20 backdrop-blur-md text-sm uppercase tracking-widest mb-6 font-medium border border-white/30">
              Cuidado Integral
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 drop-shadow-lg leading-tight">
              Tu bienestar es<br />
              <span className="text-secondary italic font-light">nuestra prioridad</span>
            </h1>
            <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto text-white/90 drop-shadow-md">
              Descubre un oasis de paz en Málaga. Especialistas en fisioterapia, 
              estética avanzada y tratamientos spa para revitalizar tu cuerpo y alma.
            </p>
            <Button 
              size="lg" 
              className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1"
              asChild
            >
              <a href="#contacto">
                Reserva tu Experiencia <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="relative"
            >
              <div className="absolute inset-0 bg-secondary rounded-t-full rounded-b-xl transform -translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src={`${import.meta.env.BASE_URL}images/about-us.png`} 
                alt="Instalaciones de MJ Fisio y Spa" 
                className="rounded-t-full rounded-b-xl shadow-2xl object-cover w-full h-[600px]"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary fill-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-foreground">+10 Años</p>
                    <p className="text-sm text-muted-foreground">de Experiencia</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <h2 className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Sobre Nosotros</h2>
              <h3 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">El Arte de Cuidar <br/><span className="italic text-muted-foreground">de Ti</span></h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                En MJ Fisio Estética y Spa, hemos creado un espacio dedicado exclusivamente a tu salud, belleza y relajación. 
                Situados en el corazón de Málaga, nuestro centro combina la calidez de un trato cercano con la excelencia de 
                profesionales altamente cualificados.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                Nuestro equipo de expertos en fisioterapia y estética trabaja de manera integral para ofrecerte 
                tratamientos personalizados que responden a tus necesidades reales, utilizando tecnología de 
                vanguardia en un ambiente diseñado para desconectar.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Profesionales certificados",
                  "Tecnología avanzada",
                  "Ambiente relajante",
                  "Trato personalizado"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="rounded-full px-8 py-6 text-primary border-primary hover:bg-primary hover:text-white transition-all">
                Conoce a nuestro equipo
              </Button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="servicios" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Nuestros Servicios</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-6">Tratamientos a Medida</h3>
            <p className="text-muted-foreground text-lg">Explora nuestra amplia gama de servicios diseñados para realzar tu belleza natural y restaurar tu equilibrio físico y mental.</p>
          </div>

          {/* Custom Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {(Object.keys(servicesData) as Array<keyof typeof servicesData>).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === tab 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "bg-white text-foreground hover:bg-primary/10 border border-border"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <motion.div 
            key={activeTab} // Forces re-render animation on tab change
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {servicesData[activeTab].map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group cursor-default"
                >
                  <div className="w-14 h-14 rounded-xl bg-secondary/30 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-xl font-serif font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section id="testimonios" className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10" />
          <img 
            src={`${import.meta.env.BASE_URL}images/spa-texture.png`} 
            alt="Texture background" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Testimonios</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-6">Lo Que Dicen Nuestros Clientes</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/50 relative hover:-translate-y-1 transition-transform duration-300"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-secondary/40" />
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(star => (
                    <Star key={star} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground/80 italic leading-relaxed mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/50 flex items-center justify-center font-serif font-bold text-primary text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground font-serif">{testimonial.name}</h5>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Cliente Verificado</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contacto" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Contacto</h2>
              <h3 className="text-4xl md:text-5xl font-serif mb-8 text-foreground">Reserva tu Momento <br/><span className="italic text-muted-foreground">de Bienestar</span></h3>
              <p className="text-muted-foreground text-lg mb-12">
                Estamos aquí para asesorarte. Rellena el formulario o contáctanos directamente para programar tu visita.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xl mb-1">Nuestra Ubicación</h4>
                    <p className="text-muted-foreground">Turrialba<br/>Ciudadela Jorge de Bravo</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xl mb-1">Llámanos</h4>
                    <p className="text-muted-foreground">+506 86907757<br/>Para reservas o consultas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xl mb-1">Horario</h4>
                    <p className="text-muted-foreground">Lun, Mar, Jue, Vie: 9:00 - 20:00<br/>Sábados: 8:00 - 15:00</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-background rounded-3xl p-8 md:p-10 shadow-xl border border-border"
            >
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nombre completo</label>
                  <Input 
                    {...form.register("name")} 
                    placeholder="Tu nombre" 
                    className={`bg-white border-border/50 py-6 px-4 rounded-xl ${form.formState.errors.name ? 'border-destructive' : ''}`}
                  />
                  {form.formState.errors.name && <p className="text-destructive text-sm mt-1">{form.formState.errors.name.message}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <Input 
                      {...form.register("email")} 
                      placeholder="tu@email.com" 
                      className={`bg-white border-border/50 py-6 px-4 rounded-xl ${form.formState.errors.email ? 'border-destructive' : ''}`}
                    />
                    {form.formState.errors.email && <p className="text-destructive text-sm mt-1">{form.formState.errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Teléfono</label>
                    <Input 
                      {...form.register("phone")} 
                      placeholder="Tu teléfono" 
                      className={`bg-white border-border/50 py-6 px-4 rounded-xl ${form.formState.errors.phone ? 'border-destructive' : ''}`}
                    />
                    {form.formState.errors.phone && <p className="text-destructive text-sm mt-1">{form.formState.errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Servicio de interés</label>
                  <select 
                    {...form.register("service")} 
                    className={`w-full bg-white border border-border/50 py-4 px-4 rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all ${form.formState.errors.service ? 'border-destructive' : ''}`}
                  >
                    <option value="">Selecciona un servicio</option>
                    <optgroup label="Fisioterapia">
                      <option value="fisioterapia-manual">Fisioterapia Manual</option>
                      <option value="masaje-terapeutico">Masaje Terapéutico</option>
                    </optgroup>
                    <optgroup label="Estética">
                      <option value="limpieza-facial">Limpieza Facial</option>
                      <option value="tratamiento-corporal">Tratamiento Corporal</option>
                    </optgroup>
                    <optgroup label="Spa">
                      <option value="circuito-spa">Circuito Spa</option>
                      <option value="masaje-relajante">Masaje Relajante</option>
                    </optgroup>
                  </select>
                  {form.formState.errors.service && <p className="text-destructive text-sm mt-1">{form.formState.errors.service.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Mensaje</label>
                  <Textarea 
                    {...form.register("message")} 
                    placeholder="¿En qué podemos ayudarte?" 
                    className={`bg-white border-border/50 py-4 px-4 rounded-xl min-h-[120px] resize-none ${form.formState.errors.message ? 'border-destructive' : ''}`}
                  />
                  {form.formState.errors.message && <p className="text-destructive text-sm mt-1">{form.formState.errors.message.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  className="w-full rounded-xl py-6 text-lg bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
