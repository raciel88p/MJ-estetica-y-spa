import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShieldCheck, MessageCircle, FileText, Clock, AlertCircle, RefreshCw } from 'lucide-react';

export function PoliticaDevoluciones({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const isEn = lang === 'en';
  const waLink = "https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0";

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans text-stone-800">
      <SEO
        title={isEn ? "Refund and Cancellation Policy | MJ Terapia y Estética" : "Política de Devoluciones y Cancelaciones | MJ Terapia y Estética"}
        description={isEn ? "Read the terms and conditions for refunds and cancellations of services and gift certificates at MJ Terapia y Estética in Turrialba." : "Conoce la política de devoluciones y cancelaciones de servicios y certificados de regalo en MJ Terapia y Estética en Turrialba."}
        canonical={isEn ? "/en/refund-policy" : "/politica-devoluciones"}
      />
      <Navbar lang={lang} alternateLink={isEn ? "/politica-devoluciones" : "/en/refund-policy"} />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <header className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              {isEn ? "Transparency & Quality" : "Transparencia y Calidad"}
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
              {isEn ? "Refund and Cancellation Policy" : "Política de devoluciones y cancelaciones"}
            </h1>
            <p className="text-lg text-stone-600 font-medium font-serif italic">
              MJ Terapia y Estética
            </p>
          </header>

          <div className="bg-white p-8 md:p-14 shadow-sm border border-stone-200/80 rounded-none space-y-10 leading-relaxed text-stone-700">
            <p className="text-stone-600 border-b border-stone-100 pb-8 text-lg">
              {isEn
                ? "To ensure transparency and clarity for our clients, we have established the following terms and conditions for refunds and cancellations of services and gift certificates."
                : "Con el objetivo de brindar claridad y transparencia a nuestros clientes, establecemos las siguientes condiciones para la devolución de servicios y certificados de regalo:"}
            </p>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-stone-900 font-bold text-xl font-serif">
                <Clock className="w-6 h-6 text-primary shrink-0" />
                <h2>{isEn ? "1. Refund Request Period" : "1. Plazo para solicitar una devolución"}</h2>
              </div>
              <p className="pl-9">
                {isEn ? (
                  <>Clients have a maximum of <strong>24 hours from the date and time of purchase</strong> to request a cancellation and refund for any service or gift certificate purchased.</>
                ) : (
                  <>El cliente dispone de un plazo máximo de <strong>24 horas naturales a partir de la fecha y hora de la compra</strong> para solicitar la cancelación y devolución de un servicio o certificado de regalo adquirido.</>
                )}
              </p>
              <p className="pl-9 text-stone-600">
                {isEn
                  ? "Requests must be submitted through our official communication channels and accompanied by proof of purchase."
                  : "La solicitud deberá realizarse por medio de nuestros canales oficiales de comunicación y estar acompañada del comprobante de compra."}
              </p>
            </section>

            <section className="space-y-4 pt-6 border-t border-stone-100">
              <div className="flex items-center gap-3 text-stone-900 font-bold text-xl font-serif">
                <FileText className="w-6 h-6 text-primary shrink-0" />
                <h2>{isEn ? "2. Refund Conditions" : "2. Condiciones para la devolución"}</h2>
              </div>
              <p className="pl-9">
                {isEn
                  ? "Refund requests will be evaluated based on the type of service or product purchased, its status, and the terms and conditions applicable to the purchase."
                  : "Las solicitudes serán evaluadas de acuerdo con el tipo de servicio o producto adquirido, su estado y las condiciones aplicables a la compra."}
              </p>
              <p className="pl-9 text-stone-600">
                {isEn
                  ? "For gift certificates, refund requests must be submitted within the specified period and before the certificate has been redeemed."
                  : "En el caso de los certificados de regalo, la solicitud deberá realizarse dentro del plazo indicado y antes de que el certificado haya sido utilizado."}
              </p>
            </section>

            <section className="space-y-4 pt-6 border-t border-stone-100">
              <div className="flex items-center gap-3 text-stone-900 font-bold text-xl font-serif">
                <AlertCircle className="w-6 h-6 text-primary shrink-0" />
                <h2>{isEn ? "3. Services Already Provided or Gift Certificates Redeemed" : "3. Servicios realizados o certificados utilizados"}</h2>
              </div>
              <p className="pl-9">
                {isEn
                  ? "Services that have already been provided and gift certificates that have already been redeemed are not eligible for refunds, except where required by applicable law."
                  : "Los servicios que ya hayan sido prestados y los certificados que hayan sido utilizados no serán elegibles para devolución, salvo cuando corresponda conforme a la legislación aplicable."}
              </p>
            </section>

            <section className="space-y-4 pt-6 border-t border-stone-100">
              <div className="flex items-center gap-3 text-stone-900 font-bold text-xl font-serif">
                <RefreshCw className="w-6 h-6 text-primary shrink-0" />
                <h2>{isEn ? "4. Requests Submitted After the Deadline" : "4. Solicitudes fuera del plazo established"}</h2>
              </div>
              <p className="pl-9">
                {isEn
                  ? "Requests submitted after the 24-hour period will be evaluated in accordance with the applicable purchase terms and current legislation. The expiration of this period does not limit any non-waivable consumer rights provided by law."
                  : "Las solicitudes presentadas después de las 24 horas serán evaluadas conforme a las condiciones de compra y la normativa vigente. El vencimiento del plazo establecido en esta política no limita los derechos irrenunciables que puedan corresponder al consumidor."}
              </p>
            </section>

            <section className="space-y-4 pt-6 border-t border-stone-100">
              <div className="flex items-center gap-3 text-stone-900 font-bold text-xl font-serif">
                <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                <h2>{isEn ? "5. Gift Certificate Delivery" : "5. Entrega de certificados de regalo"}</h2>
              </div>
              <p className="pl-9">
                {isEn
                  ? "Clients are responsible for verifying the agreed delivery date, location, and method at the time of purchase. Any delivery-related issues should be reported to the business promptly so that we can work toward an appropriate resolution."
                  : "El cliente deberá verificar la fecha, el lugar y la modalidad de entrega acordados al momento de la compra. Cualquier inconveniente relacionado con la entrega deberá comunicarse oportunamente al comercio para procurar una solución."}
              </p>
            </section>

            <section className="space-y-4 pt-6 border-t border-stone-100">
              <div className="flex items-center gap-3 text-stone-900 font-bold text-xl font-serif">
                <MessageCircle className="w-6 h-6 text-primary shrink-0" />
                <h2>{isEn ? "6. Customer Service" : "6. Canal de atención"}</h2>
              </div>
              <p className="pl-9">
                {isEn
                  ? "To request a refund or obtain further information, please contact MJ Terapia y Estética through our official WhatsApp channel."
                  : "Para solicitar una devolución o aclarar cualquier consulta, puede comunicarse con MJ Terapia y Estética por medio de nuestro canal oficial de WhatsApp."}
              </p>
              <div className="pl-9 pt-2">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 font-bold text-sm hover:bg-stone-900 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  {isEn ? "Contact via WhatsApp" : "Contactar por WhatsApp"}
                </a>
              </div>
            </section>

            <div className="bg-stone-50 p-6 border-t border-stone-200 text-stone-600 text-sm space-y-2 mt-8">
              <p>
                {isEn
                  ? "Clients may review the applicable terms and conditions before completing their purchase."
                  : "Al realizar una compra, el cliente podrá consultar las condiciones aplicables a su servicio o certificado de regalo."}
              </p>
              <p className="font-serif italic text-stone-800 text-base pt-2">
                {isEn
                  ? "At MJ Terapia y Estética, we are committed to providing transparent, responsible, and respectful service while striving to find fair solutions for our clients."
                  : "En MJ Terapia y Estética trabajamos para ofrecer una atención transparente, responsable y respetuosa, procurando siempre una solución justa para nuestros clientes."}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
