import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { UploadCloud, FileImage, X, Image as ImageIcon } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Promociones() {
  const [images, setImages] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);

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

  const handleFiles = (files: File[]) => {
    const validFiles = files.filter(f => f.type.startsWith('image/'));
    const newImages = validFiles.map(file => URL.createObjectURL(file));
    setImages(prev => [...prev, ...newImages]);
  };

  const removeImage = (indexToRemove: number) => {
    setImages(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO title="Promociones - MJ Fisio Estética y Spa" description="Descubre las promociones exclusivas en tratamientos estéticos y bienestar." />
      <Navbar />

      <main className="pt-32 pb-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-900 mb-4">Promociones Actuales</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">Sube y visualiza las promociones del mes. Arrastra las imágenes a la zona de abajo.</p>
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
            aria-label="Subir imágenes de promociones"
          />
          <div className="flex flex-col items-center justify-center pointer-events-none">
            <UploadCloud className={`w-12 h-12 mb-4 ${isDragging ? 'text-primary' : 'text-stone-400'}`} />
            <p className="text-lg font-medium text-stone-800 mb-1">Arrastra y suelta tus imágenes aquí</p>
            <p className="text-sm text-stone-500">o haz clic para explorar tus archivos</p>
          </div>
        </div>

        {/* Images Grid */}
        {images.length > 0 ? (
          <div className="mt-16">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-primary" />
              Tus Promociones
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {images.map((img, index) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  key={index}
                  className="relative group rounded-xl overflow-hidden shadow-md aspect-square"
                >
                  <img src={img} alt={`Promoción ${index + 1} de MJ Estética Wellness Center`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() => removeImage(index)}
                      className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                      aria-label="Eliminar promoción"
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
            <p className="text-stone-500">Aún no has subido ninguna promoción.</p>
          </div>
        )}
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
