import React from "react";
import { withAppProviders } from "@/components/ReactAppWrapper";
import { SEO } from "@/components/SEO";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle2,
  Sparkles,
  Building2,
  ArrowRight,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SucursalPageProps {
  branch: "turrialba" | "siquirres";
  lang?: "es" | "en";
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function SucursalPageComponent({ branch, lang = "es" }: SucursalPageProps) {
  const isEs = lang === "es";

  const data = {
    turrialba: {
      title: isEs ? "Sucursal Turrialba" : "Turrialba Office",
      titleItalic: isEs ? "Sede Principal" : "Main Branch",
      subtitle: isEs
        ? "Tu centro de estética, fisioterapia y medicina estética de vanguardia en Turrialba."
        : "Your premier aesthetic, physical therapy, and medical spa center in Turrialba.",
      heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop",
      badge: isEs ? "Sede Principal • Cartago" : "Main Branch • Cartago",
      address: isEs
        ? "Ciudadela Jorge Debravo, Calle 4, Casa #58, Turrialba, Cartago, Costa Rica"
        : "Jorge Debravo Neighborhood, 4th Street, House #58, Turrialba, Cartago, Costa Rica",
      landmark: isEs
        ? "Aproximadamente 200m Sur de Coopenae y 75m Sur de Sala de Belleza Cinthya."
        : "Approximately 200m South of Coopenae and 75m South of Cinthya's Beauty Salon.",
      hours: isEs ? "Lunes a Sábado: 8:00 AM – 6:00 PM" : "Monday to Saturday: 8:00 AM – 6:00 PM",
      phone: "+506 8690-7757",
      whatsapp: "https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15721.412034988354!2d-83.6876!3d9.9042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0d3f2a893111f%3A0x6b4df363cf81f4f0!2sTurrialba%2C%20Cartago%20Province!5e0!3m2!1sen!2scr!4v1700000000000!5m2!1sen!2scr",
      facilities: isEs
        ? [
            "Cabinas privadas de tratamiento climatizadas",
            "Aparatos láser y tecnología estética de última generación",
            "Parqueo seguro y accesible para clientes",
            "Área de relajación y recepción de lujo",
            "Consulta médico-estética privada"
          ]
        : [
            "Private climate-controlled treatment rooms",
            "State-of-the-art laser and aesthetic technology",
            "Secure and convenient client parking",
            "Luxury relaxation reception area",
            "Private aesthetic medicine consultation"
          ],
      popularServices: isEs
        ? [
            { name: "Armonización Facial & Bótox", desc: "Tratamientos médicos rejuvenecedores por especialistas." },
            { name: "Rejuvenecimiento Facial Láser", desc: "Hollywood Peel, láser de neudimio y rejuvenecimiento piel." },
            { name: "Moldeo Corporal & Hidrolipoclasia", desc: "Reducción de medidas, grasa localizada y celulitis." },
            { name: "Fisioterapia & Masajes Terapéuticos", desc: "Descarga muscular, masajes relajantes y de descarga." },
            { name: "Rituales SPA & Bienestar", desc: "Boda Spa, Masaje con Chocolate, Café y Barro." }
          ]
        : [
            { name: "Facial Harmonization & Botox", desc: "Rejuvenating medical procedures performed by specialists." },
            { name: "Laser Facial Rejuvenation", desc: "Hollywood Peel, Nd:YAG laser, and skin renewal." },
            { name: "Body Contouring & Hydrolipoclasia", desc: "Targeted fat reduction, tightening, and anti-cellulite." },
            { name: "Physical Therapy & Massages", desc: "Muscle release, deep tissue, and relaxation massages." },
            { name: "SPA Rituals & Wellness", desc: "Bridal Spa, Chocolate Therapy, Coffee, and Mud Treatments." }
          ]
    },
    siquirres: {
      title: isEs ? "Sucursal Siquirres" : "Siquirres Office",
      titleItalic: isEs ? "Sede Caribe" : "Caribbean Office",
      subtitle: isEs
        ? "Atención médica estética y fisioterapia de alta gama para la Zona del Caribe en Siquirres."
        : "High-end aesthetic medicine and physical therapy serving the Caribbean region in Siquirres.",
      heroImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop",
      badge: isEs ? "Sucursal Caribe • Limón" : "Caribbean Branch • Limón",
      address: isEs
        ? "Siquirres Centro, Limón, Costa Rica"
        : "Downtown Siquirres, Limón, Costa Rica",
      landmark: isEs
        ? "Ubicación céntrica en Siquirres. Consulta la dirección exacta al agendar tu cita."
        : "Central Siquirres location. Exact directions provided upon booking confirmation.",
      hours: isEs ? "Atención previa cita (Lunes a Sábado)" : "By appointment only (Monday to Saturday)",
      phone: "+506 8690-7757",
      whatsapp: "https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15712.923412341234!2d-83.5097!3d10.0975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa08c028a7e0f81%3A0x2f60a92f0f4a8b0!2sSiquirres%2C%20Lim%C3%B3n%20Province!5e0!3m2!1sen!2scr!4v1700000000000!5m2!1sen!2scr",
      facilities: isEs
        ? [
            "Atención personalizada exclusivamente con previa cita",
            "Especialistas médicos en armonización y rejuvenecimiento",
            "Ambiente discreto, confortable y de máxima privacidad",
            "Equipamiento de fisioterapia y estética de primera línea",
            "Fácil acceso en el centro de Siquirres"
          ]
        : [
            "Personalized care exclusively by appointment",
            "Medical specialists in harmonization & rejuvenation",
            "Discreet, comfortable, and highly private environment",
            "Top-tier physical therapy and aesthetic equipment",
            "Easy access in downtown Siquirres"
          ],
      popularServices: isEs
        ? [
            { name: "Tratamientos Dentales", desc: "Estética dental, limpieza, blanqueamiento y salud oral integral." },
            { name: "Trasplante Capilar", desc: "Restauración y microinjerto capilar de alta precisión para recuperar la densidad del cabello." },
            { name: "Medicina Estética Avanzada", desc: "Aplicación de Botox, Ácido Hialurónico e Hilos Tensores." },
            { name: "Fisioterapia Terapéutica & Deportiva", desc: "Rehabilitación, descarga muscular y manejo del dolor." },
            { name: "Tratamientos Faciales Especializados", desc: "Limpiezas profundas, peeling y rejuvenecimiento." },
            { name: "Modelado Corporal", desc: "Tratamientos reductivos y tensado de piel." }
          ]
        : [
            { name: "Dental Treatments", desc: "Dental aesthetics, teeth whitening, deep cleaning, and comprehensive oral health." },
            { name: "Hair Transplant", desc: "High-precision hair restoration and micrografting to restore hair density." },
            { name: "Advanced Medical Aesthetics", desc: "Botox, Hyaluronic Acid, and Tension Thread treatments." },
            { name: "Therapeutic & Sports Physical Therapy", desc: "Rehabilitation, muscle release, and pain management." },
            { name: "Specialized Facial Treatments", desc: "Deep cleansings, chemical peels, and rejuvenation." },
            { name: "Body Contouring", desc: "Targeted fat reduction and skin tightening." }
          ]
    }
  };

  const branchData = data[branch];
  const canonicalPath = isEs
    ? `/sucursales/${branch}`
    : `/en/locations/${branch}`;
  const alternatePath = isEs
    ? `/en/locations/${branch}`
    : `/sucursales/${branch}`;

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-stone-900">
      <SEO
        title={`${branchData.title} | MJ Fisio Estética y Spa`}
        description={branchData.subtitle}
        canonical={canonicalPath}
        lang={lang}
      />
      <Navbar lang={lang} alternateLink={alternatePath} />

      {/* Hero Header */}
      <section className="relative pt-36 pb-24 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <Breadcrumb items={[{ label: branchData.title }]} />
          </div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/20 text-primary border border-primary/30 mb-4">
              <Building2 className="w-3.5 h-3.5" />
              {branchData.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6">
              {branchData.title} <span className="italic text-white/85">{branchData.titleItalic}</span>
            </h1>
            <p className="text-lg text-primary/90 max-w-2xl mx-auto leading-relaxed mb-8">
              {branchData.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 rounded-full shadow-lg" asChild>
                <a href={branchData.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  {isEs ? "Reservar Cita por WhatsApp" : "Book Appointment on WhatsApp"}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-stone-700 text-stone-200 hover:bg-stone-800 hover:text-white font-semibold px-6 py-6 rounded-full" asChild>
                <a href="#contacto-info" className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  {isEs ? "Ver Ubicación & Horarios" : "View Location & Hours"}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section id="contacto-info" className="-mt-12 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded-2xl shadow-xl border border-stone-200/80 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-sm uppercase tracking-wider mb-1">
                {isEs ? "Dirección" : "Address"}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-1">{branchData.address}</p>
              <p className="text-stone-400 text-xs italic">{branchData.landmark}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-t md:border-t-0 md:border-l border-stone-100 pt-6 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-sm uppercase tracking-wider mb-1">
                {isEs ? "Horarios de Atención" : "Operating Hours"}
              </h3>
              <p className="text-stone-600 text-sm">{branchData.hours}</p>
              <p className="text-stone-400 text-xs mt-1">
                {isEs ? "Atención con previa cita para tu comodidad" : "By appointment for your convenience"}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-t md:border-t-0 md:border-l border-stone-100 pt-6 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-sm uppercase tracking-wider mb-1">
                {isEs ? "Teléfono & WhatsApp" : "Phone & WhatsApp"}
              </h3>
              <p className="text-stone-900 font-bold text-base mb-2">{branchData.phone}</p>
              <a
                href={branchData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                {isEs ? "Escribir directamente →" : "Send direct message →"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Map */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
              {isEs ? "Instalaciones de Primer Nivel" : "Top-Tier Facilities"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mb-6">
              {isEs ? `¿Por qué visitar nuestra sede de ${branch === "turrialba" ? "Turrialba" : "Siquirres"}?` : `Why Visit Our ${branch === "turrialba" ? "Turrialba" : "Siquirres"} Location?`}
            </h2>
            <p className="text-stone-600 text-base leading-relaxed mb-8">
              {isEs
                ? "En MJ Fisio Estética & Spa combinamos la calidez humana con la mejor tecnología médica y estética para ofrecerte resultados excepcionales en un espacio cómodo, privado y elegante."
                : "At MJ Physio Aesthetics & Spa we combine warm personal attention with state-of-the-art medical aesthetic technology to deliver exceptional results in a comfortable, private, and elegant setting."}
            </p>

            <div className="space-y-4">
              {branchData.facilities.map((facility, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-stone-200/80 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-stone-800 text-sm font-semibold">{facility}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-2xl p-4 shadow-xl border border-stone-200 overflow-hidden h-[450px] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-3 px-2">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                {isEs ? `Ubicación en Mapa — ${branch === "turrialba" ? "Turrialba" : "Siquirres"}` : `Map Location — ${branch === "turrialba" ? "Turrialba" : "Siquirres"}`}
              </span>
              <a
                href={branchData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary font-bold hover:underline"
              >
                {isEs ? "Pedir Waze / Google Maps" : "Request Directions"}
              </a>
            </div>
            <iframe
              src={branchData.mapUrl}
              className="w-full h-full rounded-xl border-0 flex-1"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa de Sucursal ${branch}`}
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-stone-100/80 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
              {isEs ? "Tratamientos Disponibles" : "Treatments Offered"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mb-4">
              {isEs ? `Especialidades en Sucursal ${branch === "turrialba" ? "Turrialba" : "Siquirres"}` : `Specialties at ${branch === "turrialba" ? "Turrialba" : "Siquirres"} Office`}
            </h2>
            <p className="text-stone-600 text-sm">
              {isEs
                ? "Contamos con un menú completo de servicios médicos estéticos, corporales, faciales y fisioterapia."
                : "Offering a comprehensive menu of medical aesthetic, body, facial, and physical therapy services."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branchData.popularServices.map((service, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-stone-900 text-lg mb-2">{service.name}</h3>
                <p className="text-stone-600 text-sm mb-4 leading-relaxed">{service.desc}</p>
                <a
                  href={branchData.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                >
                  {isEs ? "Consultar este tratamiento →" : "Inquire about treatment →"}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Team */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-foreground text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-stone-300 mb-4 border border-white/10">
              <Award className="w-3.5 h-3.5 text-primary" />
              {isEs ? "Equipo Profesional" : "Professional Team"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              {isEs ? "Atención Médica & Especializada de Confianza" : "Trusted Medical & Specialist Care"}
            </h2>
            <p className="text-stone-300 text-base leading-relaxed mb-8">
              {isEs
                ? "Nuestras sucursales están respaldadas por profesionales en medicina estética y fisioterapia licenciados, garantizando la máxima seguridad y efectividad en cada procedimiento."
                : "Our branch offices are backed by licensed medical aesthetic doctors and physical therapy professionals, ensuring maximum safety and effectiveness in every procedure."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
                <h4 className="font-bold text-white text-sm mb-1">Dr. Ricard Araya & Dr. Ruddy Jiménez</h4>
                <p className="text-stone-400 text-xs">{isEs ? "Médicos Especialistas en Medicina Estética" : "Medical Aesthetic Specialists"}</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
                <h4 className="font-bold text-white text-sm mb-1">Janneth Maria Molina Madrigal</h4>
                <p className="text-stone-400 text-xs">{isEs ? "Directora & Especialista en Fisioterapia Estética" : "Director & Aesthetic Physio Specialist"}</p>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 rounded-full" asChild>
              <a href={branchData.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {isEs ? "Agendar Valoración Médica" : "Book Medical Consultation"}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-foreground relative overflow-hidden">
        <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            {isEs ? `¿List@ para tu cita en ${branch === "turrialba" ? "Turrialba" : "Siquirres"}?` : `Ready for your appointment in ${branch === "turrialba" ? "Turrialba" : "Siquirres"}?`}
          </h2>
          <p className="text-white/80 mb-8 text-base">
            {isEs
              ? "Escríbenos directamente por WhatsApp y agenda tu espacio con nuestros especialistas."
              : "Message us directly on WhatsApp and book your session with our specialists."}
          </p>
          <a
            href={branchData.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-8 py-4 text-base font-semibold hover:bg-primary/90 transition-colors shadow-lg"
          >
            {isEs ? "Hablar con un Asesor por WhatsApp" : "Chat with an Advisor on WhatsApp"}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer lang={lang} />
      <FloatingWhatsApp />
    </div>
  );
}

export const SucursalPage = withAppProviders(SucursalPageComponent);
