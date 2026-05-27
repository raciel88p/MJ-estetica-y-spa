import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { UploadCloud, FileImage, X, Image as ImageIcon, Loader2, Lock, Unlock } from "lucide-react";
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

export default function PaquetesContent() {
  const [images, setImages] = useState<Promotion[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [adminKey, setAdminKey] = useState("");
  const [isKeyVisible, setIsKeyVisible] = useState(false);

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
    if (!adminKey) {
      alert("Por favor, ingresa la clave de administrador para subir imágenes.");
      return;
    }

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

          if (response.status === 401) {
            alert("Clave de administrador incorrecta.");
            setIsUploading(false);
            return;
          }

          if (response.ok) {
            const newPromo = await response.json();
            setImages(prev => [newPromo, ...prev]);
            continue;
          }
        } catch (apiErr) {
          console.warn("API Upload failed");
        }

        // Optional: Local only if intentional dev mode
        /*
        const localPromo = {
          id: Date.now() + Math.random(),
          imageUrl: base64,
          createdAt: new Date().toISOString()
        };
        setImages(prev => [localPromo, ...prev]);
        */

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
    if (!adminKey) {
      alert("Por favor, ingresa la clave de administrador para eliminar imágenes.");
      return;
    }

    try {
      const response = await fetch(`/api/promotions/${id}`, {
        method: "DELETE",
        headers: {
          "x-admin-key": adminKey
        }
      });

      if (response.status === 401) {
        alert("Clave de administrador incorrecta.");
        return;
      }

      if (response.ok) {
        setImages(prev => prev.filter(img => img.id !== id));
      }
    } catch (error) {
      console.warn("API Delete failed");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Paquetes - MJ Fisio Estética y Spa"
        description="Gestiona los paquetes exclusivos de MJ Fisio Estética y Spa."
        canonical="/paquetes"
      />
      <Navbar />

      <main className="pt-32 pb-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-900 mb-4">Gestión de Paquetes</h1>
          <p className="text-stone-600 max-w-2xl mx-auto mb-8">Administra las promociones visuales de la clínica.</p>

          {/* Admin Key Input */}
          <div className="max-w-xs mx-auto relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">
              {adminKey ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
            </div>
            <input
              type={isKeyVisible ? "text" : "password"}
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
              placeholder="Clave de administrador"
              className="w-full pl-10 pr-10 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <button
              onClick={() => setIsKeyVisible(!isKeyVisible)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
            >
              {isKeyVisible ? <X className="w-4 h-4" /> : <ImageIcon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Drag and Drop Zone */}
        <div
          className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${isDragging ? 'border-primary bg-primary/5' : 'border-stone-200 bg-stone-50 hover:bg-stone-100'}`}
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
            aria-label="Subir imágenes de paquetes"
            disabled={isUploading}
          />
          <div className="flex flex-col items-center justify-center pointer-events-none">
            {isUploading ? (
              <Loader2 className="w-12 h-12 mb-4 text-primary animate-spin" />
            ) : (
              <UploadCloud className={`w-12 h-12 mb-4 ${isDragging ? 'text-primary' : 'text-stone-400'}`} />
            )}
            <p className="text-lg font-medium text-stone-800 mb-1">
              {isUploading ? 'Subiendo imágenes...' : 'Arrastra y suelta tus imágenes aquí'}
            </p>
            <p className="text-sm text-stone-500">o haz clic para explorar tus archivos</p>
          </div>
        </div>

        {/* Images Grid */}
        {isLoading ? (
          <div className="mt-16 text-center py-12">
            <Loader2 className="w-10 h-10 text-primary mx-auto mb-3 animate-spin" />
            <p className="text-stone-500">Cargando paquetes...</p>
          </div>
        ) : images.length > 0 ? (
          <div className="mt-16">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-primary" />
              Paquetes Activos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {images.map((promo) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  key={promo.id}
                  className="relative group rounded-xl overflow-hidden shadow-md aspect-square"
                >
                  <img src={promo.imageUrl} alt={`Paquete ${promo.id}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() => removeImage(promo.id)}
                      className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                      aria-label="Eliminar paquete"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-16 text-center py-12 border border-stone-100 rounded-xl bg-white shadow-sm">
            <FileImage className="w-10 h-10 text-stone-300 mx-auto mb-3" />
            <p className="text-stone-500">No hay paquetes subidos actualmente.</p>
          </div>
        )}
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
