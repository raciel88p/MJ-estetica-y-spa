import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Image, Quote } from "lucide-react";
import { testimonials, beforeAfterItems, chatProofs } from "@/data/testimonials";
import { TestimonialCard } from "./TestimonialCard";
import { BeforeAfterCard } from "./BeforeAfterCard";
import { ChatProof } from "./ChatProof";

type Tab = "testimonios" | "resultados" | "chat";

export function TestimonialGrid() {
  const [activeTab, setActiveTab] = useState<Tab>("testimonios");

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "testimonios", label: "Testimonios", icon: <Quote className="w-4 h-4" /> },
    { id: "resultados", label: "Antes & Después", icon: <Image className="w-4 h-4" /> },
    { id: "chat", label: "Mensajes reales", icon: <MessageSquare className="w-4 h-4" /> },
  ];

  return (
    <div data-cro="testimonial-grid">
      {/* Tabs */}
      <div className="flex gap-2 flex-wrap justify-center mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "bg-white text-stone-600 border border-stone-200 hover:border-primary/40 hover:text-primary"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "testimonios" && (
          <motion.div
            key="testimonios"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <TestimonialCard key={t.id} testimonial={t} index={i} />
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "resultados" && (
          <motion.div
            key="resultados"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-center text-sm text-stone-500 mb-8 italic">
              * Por privacidad de nuestras clientas, no mostramos rostros. Solo áreas tratadas.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {beforeAfterItems.map((item, i) => (
                <BeforeAfterCard key={item.id} item={item} index={i} />
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "chat" && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-center text-sm text-stone-500 mb-8 italic">
              Mensajes reales compartidos por nuestras clientas con su permiso.
            </p>
            <div className="max-w-lg mx-auto">
              <ChatProof messages={chatProofs} title="Mensajes de clientas reales" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
