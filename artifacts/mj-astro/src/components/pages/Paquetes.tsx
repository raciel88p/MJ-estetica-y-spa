import { withAppProviders } from "@/components/ReactAppWrapper";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Upload, Trash2, Image as ImageIcon, Sparkles, Loader2, Lock } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SEO } from "@/components/SEO";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StatsBar } from "@/components/StatsBar";
import { toast } from "sonner";
import { useListPromotions, useCreatePromotion, useDeletePromotion } from "@workspace/api-client-react";

const WA = "https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0";

// Admin Key for demonstration - In production this should be handled by a proper Auth system
const ADMIN_KEY = (import.meta as any).env?.VITE_ADMIN_KEY || "mj-admin-secret-2025";

function Paquetes() {
  const [isDragging, setIsDragging] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleAdminToggle = () => {
    if (!isAdmin) {
      const pass = window.prompt("Ingrese la clave de administrador:");
      if (pass === ADMIN_KEY) {
        setIsAdmin(true);
      } else {
        toast.error("Clave incorrecta");
      }
    } else {
      setIsAdmin(false);
    }
  };

  const { data: promotions = [], isLoading, refetch } = useListPromotions();

  const createPromotion = useCreatePromotion({
    request: { headers: { "x-admin-key": ADMIN_KEY } },
    mutation: {
      onSuccess: () => {
        refetch();
        toast.success("Promoción subida con éxito");
      },
      onError: (error: any) => {
        toast.error(error.message || "Error al subir promoción");
      }
    }
  });

  const deletePromotion = useDeletePromotion({
    request: { headers: { "x-admin-key": ADMIN_KEY } },
    mutation: {
      onSuccess: () => {
        refetch();
        toast.success("Promoción eliminada");
      },
      onError: (error: any) => {
        toast.error(error.message || "Error al eliminar promoción");
      }
    }
  });

  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const fileArray = Array.from(files);

    for (const file of fileArray) {
      if (!file.type.startsWith("image/")) {
        toast.error(`El archivo ${file.name} no es una imagen válida.`);
        continue;
      }

      try {
        const reader = new FileReader();
        const base64Promise = new Promise<string>((resolve) => {
          reader.onload = (e) => resolve(e.target?.result as string);
        });
        reader.readAsDataURL(file);
        const imageUrl = await base64Promise;

        await createPromotion.mutateAsync({ data: { imageUrl } });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (isAdmin) {
      handleFileUpload(e.dataTransfer.files);
    } else {
      toast.error("Acceso denegado. Activa el modo administrador para subir archivos.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Promociones Especiales"
        description="Gestiona y visualiza nuestras promociones vigentes en MJ Fisio Estética y Spa, Turrialba. Sube tus propias promociones aquí."
        canonical="/paquetes"
      />
      <Navbar />
      <FloatingWhatsApp />

      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-[#071e2e] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/hero-bg.webp)` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex justify-between items-start">
            <Breadcrumb items={[{ label: "Promociones" }]} variant="dark" />
            <button
              onClick={handleAdminToggle}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all shadow-lg ${
                isAdmin
                  ? "bg-primary text-white scale-105"
                  : "bg-white text-stone-900 hover:bg-primary hover:text-white"
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              {isAdmin ? "Admin Activo" : "Modo Admin"}
            </button>
          </div>
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mt-8 mb-4">
            GESTIÓN DE OFERTAS
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
            Nuestras<br />
            <span className="italic font-light text-white/40">Promociones</span>
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-xl">
            Sube o elimina las imágenes de promociones vigentes para mantener a tus clientes informados de las mejores ofertas.
          </p>
        </div>
      </section>

      <StatsBar />

      {/* Drag & Drop Section - Only visible/active for Admin */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

          <AnimatePresence>
            {isAdmin && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                animate={{ opacity: 1, height: "auto", marginBottom: 64 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                className="overflow-hidden"
              >
                <motion.div
                  className={`relative border-2 border-dashed rounded-3xl p-12 text-center transition-all ${
                    isDragging
                      ? "border-primary bg-primary/5 scale-[1.01]"
                      : "border-stone-200 bg-stone-50 hover:border-primary/50"
                  } ${createPromotion.isPending ? "opacity-50 pointer-events-none" : ""}`}
                  onDragOver={onDragOver}
                  onDragLeave={onDragLeave}
                  onDrop={onDrop}
                >
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={(e) => handleFileUpload(e.target.files)}
                    disabled={createPromotion.isPending}
                  />
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4 text-primary">
                      {createPromotion.isPending ? <Loader2 className="w-8 h-8 animate-spin" /> : <Upload className="w-8 h-8" />}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-stone-800 mb-2">
                      {createPromotion.isPending ? "Subiendo promociones..." : "Sube nuevas promociones"}
                    </h3>
                    <p className="text-stone-500 max-w-xs mx-auto text-sm">
                      Arrastra y suelta tus imágenes aquí o haz clic para explorar tus archivos
                    </p>
                    <div className="mt-6 flex gap-4 text-xs font-medium text-stone-400 uppercase tracking-widest">
                      <span className="flex items-center gap-1.5"><ImageIcon className="w-3.5 h-3.5" /> JPG / PNG</span>
                      <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5" /> Calidad HD</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Promotions Grid */}
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <h2 className="text-2xl font-serif font-bold text-stone-900 flex items-center gap-2">
                Promociones Activas
                {!isLoading && (
                  <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">{promotions.length}</span>
                )}
              </h2>
              {isAdmin && promotions.length > 0 && (
                <p className="text-sm text-stone-400">Haz clic en el ícono de eliminar para quitar una promoción</p>
              )}
            </div>

            {isLoading ? (
              <div className="py-20 flex flex-col items-center justify-center">
                <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
                <p className="text-stone-400 italic">Cargando promociones...</p>
              </div>
            ) : promotions.length === 0 ? (
              <div className="py-20 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-stone-50 text-stone-300 mb-4">
                  <ImageIcon className="w-8 h-8" />
                </div>
                <p className="text-stone-400 italic">No hay promociones subidas actualmente.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                  {promotions.map((promo) => (
                    <motion.div
                      key={promo.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                      className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg bg-stone-100"
                    >
                      <img
                        src={promo.imageUrl}
                        alt={`Promoción ${promo.id}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {isAdmin && (
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <button
                            onClick={() => deletePromotion.mutate({ id: promo.id })}
                            disabled={deletePromotion.isPending}
                            className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors shadow-xl transform translate-y-4 group-hover:translate-y-0 duration-300 disabled:opacity-50"
                          >
                            {deletePromotion.isPending ? <Loader2 className="w-6 h-6 animate-spin" /> : <Trash2 className="w-6 h-6" />}
                          </button>
                        </div>
                      )}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-stone-900 text-[10px] font-bold uppercase tracking-tighter px-2 py-1 rounded shadow-sm">
                        PROMO #{promo.id}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA urgency */}
      <section className="py-16 bg-[#040f19]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">VALORACIÓN GRATUITA</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            ¿Viste algo que te gustó?
          </h2>
          <p className="text-white/75 mb-8 leading-relaxed">
            Agenda tu valoración gratuita y nuestras especialistas te asesorarán sobre la mejor promoción para tus necesidades.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-10 py-4 font-semibold text-sm tracking-wide hover:bg-primary/90 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Reservar valoración gratuita
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default withAppProviders(Paquetes);
