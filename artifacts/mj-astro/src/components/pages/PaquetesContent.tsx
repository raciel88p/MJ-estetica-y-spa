import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, FileImage, X, Image as ImageIcon, Loader2, Lock, Unlock, Settings, Eye } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

interface Promotion {
  id: number;
  imageUrl: string;
  createdAt: string;
}

const STORAGE_KEY = "mj_promotions_fallback";

export default function PaquetesContent({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const [images, setImages] = useState<Promotion[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [adminKey, setAdminKey] = useState("");
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  const fetchPromotions = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/promotions");
      if (response.ok) {
        const data = await response.json();
        setImages(data);
      } else {
        throw new Error("API failed");
      }
    } catch (error) {
      console.warn("API Error, falling back to LocalStorage:", error);
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setImages(JSON.parse(saved));
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPromotions();
  }, [fetchPromotions]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
    }
  }, [images, isLoading]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const handleFiles = async (files: File[]) => {
    if (!isAdminMode) return;

    const validFiles = files.filter(f => f.type.startsWith('image/'));
    if (validFiles.length === 0) return;

    setIsUploading(true);
    for (const file of validFiles) {
      try {
        const base64 = await fileToBase64(file);

        try {
          const response = await fetch("/api/promotions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-admin-key": adminKey
            },
            body: JSON.stringify({ imageUrl: base64 }),
          });

          if (response.ok) {
            const newPromo = await response.json();
            setImages(prev => [newPromo, ...prev]);
            continue;
          }
        } catch (apiErr) {
          console.warn("API Upload failed");
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
    setIsUploading(false);
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const removeImage = async (id: number) => {
    if (!isAdminMode) return;

    try {
      const response = await fetch(`/api/promotions/${id}`, {
        method: "DELETE",
        headers: {
          "x-admin-key": adminKey
        }
      });

      if (response.ok) {
        setImages(prev => prev.filter(img => img.id !== id));
      }
    } catch (error) {
      console.warn("API Delete failed");
    }
  };

  const toggleAdmin = () => {
    if (isAdminMode) {
      setIsAdminMode(false);
      setAdminKey("");
      setShowAdminPanel(false);
    } else {
      setShowAdminPanel(true);
    }
  };

  const verifyKey = () => {
    // Basic local check to enable mode, server will double check
    if (adminKey === "mj-admin-secret-2025") {
      setIsAdminMode(true);
      setShowAdminPanel(false);
    } else {
      alert(lang === 'es' ? "Clave incorrecta" : "Incorrect key");
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <SEO
        title={lang === 'es' ? "Paquetes y Promociones" : "Packages and Promotions"}
        description={lang === 'es' ? "Descubre nuestras promociones y paquetes exclusivos en Turrialba." : "Discover our exclusive promotions and packages in Turrialba."}
        canonical={lang === 'es' ? "/paquetes" : "/en/packages"}
        lang={lang}
      />
      <Navbar lang={lang} alternateLink={lang === 'es' ? '/en/packages' : '/paquetes'} />

      <main className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
             <h1 className="text-4xl sm:text-6xl font-serif font-bold text-stone-900">{lang === 'es' ? 'Nuestros Paquetes' : 'Our Packages'}</h1>
             <button
                onClick={toggleAdmin}
                className={`p-2 rounded-full transition-colors ${isAdminMode ? 'bg-primary text-white' : 'text-stone-300 hover:text-stone-400'}`}
                title={lang === 'es' ? "Configuración de administrador" : "Admin settings"}
             >
                <Settings className="w-5 h-5" />
             </button>
          </div>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg">{lang === 'es' ? 'Aprovecha nuestras ofertas especiales diseñadas para tu bienestar.' : 'Take advantage of our special offers designed for your well-being.'}</p>
        </div>

        {/* Admin Access Modal */}
        <AnimatePresence>
          {showAdminPanel && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full"
              >
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Lock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-stone-900">{lang === 'es' ? 'Acceso Administrador' : 'Admin Access'}</h3>
                  <p className="text-stone-500 text-sm mt-2">{lang === 'es' ? 'Ingresa tu clave para gestionar las promociones.' : 'Enter your key to manage promotions.'}</p>
                </div>

                <div className="space-y-4">
                  <input
                    type="password"
                    value={adminKey}
                    onChange={(e) => setAdminKey(e.target.value)}
                    placeholder={lang === 'es' ? "Clave de seguridad" : "Security key"}
                    className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20"
                    onKeyDown={(e) => e.key === 'Enter' && verifyKey()}
                  />
                  <div className="flex gap-3">
                    <button
                      onClick={() => setShowAdminPanel(false)}
                      className="flex-1 px-4 py-3 text-stone-500 font-medium hover:bg-stone-50 rounded-xl transition-colors"
                    >
                      {lang === 'es' ? 'Cancelar' : 'Cancel'}
                    </button>
                    <button
                      onClick={verifyKey}
                      className="flex-1 bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                    >
                      {lang === 'es' ? 'Entrar' : 'Enter'}
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Admin Upload Zone */}
        {isAdminMode && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-primary/10 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                    <Unlock className="w-3 h-3" /> {lang === 'es' ? 'Modo Edición Activo' : 'Edit Mode Active'}
                  </span>
               </div>

               <h2 className="text-xl font-serif font-bold text-stone-800 mb-6">{lang === 'es' ? 'Subir nuevas promociones' : 'Upload new promotions'}</h2>

               <div
                className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${isDragging ? 'border-primary bg-primary/5' : 'border-stone-200 bg-stone-50 hover:bg-stone-100'}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileInput}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  aria-label={lang === 'es' ? "Subir imágenes de paquetes" : "Upload package images"}
                  disabled={isUploading}
                />
                <div className="flex flex-col items-center justify-center pointer-events-none">
                  {isUploading ? (
                    <Loader2 className="w-12 h-12 mb-4 text-primary animate-spin" />
                  ) : (
                    <UploadCloud className={`w-12 h-12 mb-4 ${isDragging ? 'text-primary' : 'text-stone-400'}`} />
                  )}
                  <p className="text-lg font-medium text-stone-800 mb-1">
                    {isUploading
                      ? (lang === 'es' ? 'Subiendo imágenes...' : 'Uploading images...')
                      : (lang === 'es' ? 'Arrastra y suelta tus imágenes aquí' : 'Drag and drop your images here')}
                  </p>
                  <p className="text-sm text-stone-500">{lang === 'es' ? 'o haz clic para explorar tus archivos' : 'or click to browse your files'}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Images Grid */}
        {isLoading ? (
          <div className="text-center py-20">
            <Loader2 className="w-12 h-12 text-primary/40 mx-auto mb-4 animate-spin" />
            <p className="text-stone-400 font-serif italic text-lg">{lang === 'es' ? 'Cargando paquetes...' : 'Loading packages...'}</p>
          </div>
        ) : images.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((promo, idx) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                key={promo.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-stone-100"
              >
                <div className="aspect-[4/5] overflow-hidden">
                   <img
                      src={promo.imageUrl}
                      alt={`Paquete ${promo.id}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                   />
                </div>

                {isAdminMode && (
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      onClick={() => removeImage(promo.id)}
                      className="bg-red-500 text-white p-2.5 rounded-full hover:bg-red-600 transition-all shadow-lg transform hover:scale-110 active:scale-95"
                      aria-label={lang === 'es' ? "Eliminar paquete" : "Delete package"}
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="text-white">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] mb-1 opacity-80">{lang === 'es' ? 'Promoción' : 'Promotion'}</p>
                        <h4 className="text-xl font-serif font-bold">MJ Estética</h4>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-white rounded-[2.5rem] shadow-sm border border-stone-100">
            <FileImage className="w-16 h-16 text-stone-200 mx-auto mb-4" />
            <h3 className="text-2xl font-serif text-stone-400 italic">{lang === 'es' ? 'No hay promociones activas' : 'No active promotions'}</h3>
            <p className="text-stone-300 mt-2">{lang === 'es' ? 'Vuelve pronto para ver nuestras novedades.' : 'Check back soon for our latest updates.'}</p>
          </div>
        )}
      </main>

      <Footer lang={lang} />
      <FloatingWhatsApp />
    </div>
  );
}
