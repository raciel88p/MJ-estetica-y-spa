import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShieldCheck, MessageCircle, FileText, Clock, AlertCircle, RefreshCw } from 'lucide-react';

export function PoliticaDevoluciones({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const waLink = "https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0";

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans text-stone-800">
      <SEO
        title="Política de Devoluciones y Cancelaciones | MJ Terapia y Estética"
        description="Conoce la política de devoluciones y cancelaciones de servicios y certificados de regalo en MJ Terapia y Estética en Turrialba."
        canonical="/politica-devoluciones"
      />
      <Navbar lang={lang} alternateLink="/politica-devoluciones" />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <header className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              Transparencia y Calidad
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
              Política de devoluciones y cancelaciones
            </h1>
            <p className="text-lg text-stone-600 font-medium font-serif italic">
              MJ Terapia y Estética
            </p>
          </header>

          <div className="bg-white p-8 md:p-14 shadow-sm border border-stone-200/80 rounded-none space-y-10 leading-relaxed text-stone-700">
            <p className="text-stone-600 border-b border-stone-100 pb-8 text-lg">
              Con el objetivo de brindar claridad y transparencia a nuestros clientes, establecemos las siguientes condiciones para la devolución de servicios y certificados de regalo:
            </p>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-stone-900 font-bold text-xl font-serif">
                <Clock className="w-6 h-6 text-primary shrink-0" />
                <h2>1. Plazo para solicitar una devolución</h2>
              </div>
              <p className="pl-9">
                El cliente dispone de un plazo máximo de <strong>24 horas naturales a partir de la fecha y hora de la compra</strong> para solicitar la cancelación y devolución de un servicio o certificado de regalo adquirido.
              </p>
              <p className="pl-9 text-stone-600">
                La solicitud deberá realizarse por medio de nuestros canales oficiales de comunicación y estar acompañada del comprobante de compra.
              </p>
            </section>

            <section className="space-y-4 pt-6 border-t border-stone-100">
              <div className="flex items-center gap-3 text-stone-900 font-bold text-xl font-serif">
                <FileText className="w-6 h-6 text-primary shrink-0" />
                <h2>2. Condiciones para la devolución</h2>
              </div>
              <p className="pl-9">
                Las solicitudes serán evaluadas de acuerdo con el tipo de servicio o producto adquirido, su estado y las condiciones aplicables a la compra.
              </p>
              <p className="pl-9 text-stone-600">
                En el caso de los certificados de regalo, la solicitud deberá realizarse dentro del plazo indicado y antes de que el certificado haya sido utilizado.
              </p>
            </section>

            <section className="space-y-4 pt-6 border-t border-stone-100">
              <div className="flex items-center gap-3 text-stone-900 font-bold text-xl font-serif">
                <AlertCircle className="w-6 h-6 text-primary shrink-0" />
                <h2>3. Servicios realizados o certificados utilizados</h2>
              </div>
              <p className="pl-9">
                Los servicios que ya hayan sido prestados y los certificados que hayan sido utilizados no serán elegibles para devolución, salvo cuando corresponda conforme a la legislación aplicable.
              </p>
            </section>

            <section className="space-y-4 pt-6 border-t border-stone-100">
              <div className="flex items-center gap-3 text-stone-900 font-bold text-xl font-serif">
                <RefreshCw className="w-6 h-6 text-primary shrink-0" />
                <h2>4. Solicitudes fuera del plazo establecido</h2>
              </div>
              <p className="pl-9">
                Las solicitudes presentadas después de las 24 horas serán evaluadas conforme a las condiciones de compra y la normativa vigente. El vencimiento del plazo establecido en esta política no limita los derechos irrenunciables que puedan corresponder al consumidor.
              </p>
            </section>

            <section className="space-y-4 pt-6 border-t border-stone-100">
              <div className="flex items-center gap-3 text-stone-900 font-bold text-xl font-serif">
                <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                <h2>5. Entrega de certificados de regalo</h2>
              </div>
              <p className="pl-9">
                El cliente deberá verificar la fecha, el lugar y la modalidad de entrega acordados al momento de la compra. Cualquier inconveniente relacionado con la entrega deberá comunicarse oportunamente al comercio para procurar una solución.
              </p>
            </section>

            <section className="space-y-4 pt-6 border-t border-stone-100">
              <div className="flex items-center gap-3 text-stone-900 font-bold text-xl font-serif">
                <MessageCircle className="w-6 h-6 text-primary shrink-0" />
                <h2>6. Canal de atención</h2>
              </div>
              <p className="pl-9">
                Para solicitar una devolución o aclarar cualquier consulta, puede comunicarse con MJ Terapia y Estética por medio de nuestro canal oficial de WhatsApp.
              </p>
              <div className="pl-9 pt-2">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 font-bold text-sm hover:bg-stone-900 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contactar por WhatsApp
                </a>
              </div>
            </section>

            <div className="bg-stone-50 p-6 border-t border-stone-200 text-stone-600 text-sm space-y-2 mt-8">
              <p>
                Al realizar una compra, el cliente podrá consultar las condiciones aplicables a su servicio o certificado de regalo.
              </p>
              <p className="font-serif italic text-stone-800 text-base pt-2">
                En MJ Terapia y Estética trabajamos para ofrecer una atención transparente, responsable y respetuosa, procurando siempre una solución justa para nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
