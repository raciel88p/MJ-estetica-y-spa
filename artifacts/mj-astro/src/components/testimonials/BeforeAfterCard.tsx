import { motion } from "framer-motion";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import type { BeforeAfterItem } from "@/data/testimonials";

interface Props {
  item: BeforeAfterItem;
  index?: number;
}

export function BeforeAfterCard({ item, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-300"
      data-cro="before-after-card"
    >
      {/* Visual comparison */}
      <div className="grid grid-cols-2 h-44">
        {/* Before */}
        <div className="relative bg-stone-100 flex flex-col items-center justify-center gap-3 p-4 border-r border-stone-200">
          <div className="text-4xl opacity-40 grayscale">{item.areaIcon}</div>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">Antes</p>
            <div className="w-12 h-1.5 bg-stone-300 rounded-full mx-auto" />
          </div>
          <div className="absolute top-3 left-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 bg-white border border-stone-200 rounded-full px-2 py-0.5">
              Antes
            </span>
          </div>
        </div>

        {/* After */}
        <div className="relative bg-primary/8 flex flex-col items-center justify-center gap-3 p-4">
          <div className="text-4xl">{item.areaIcon}</div>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Después</p>
            <div className="w-12 h-1.5 bg-primary rounded-full mx-auto" />
          </div>
          <div className="absolute top-3 right-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 rounded-full px-2 py-0.5">
              Después
            </span>
          </div>
          {/* Sparkle badge */}
          <div className="absolute bottom-3 right-3">
            <Sparkles className="w-4 h-4 text-primary/40" />
          </div>
        </div>

        {/* Arrow divider */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center border border-stone-200 col-span-2">
          <ArrowRight className="w-4 h-4 text-primary" />
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <Clock className="w-3.5 h-3.5 text-primary/60" />
          <span className="text-xs text-stone-500">Resultado en {item.duration}</span>
        </div>
        <p className="text-xs text-stone-500 mb-1 uppercase tracking-wider font-medium">{item.area}</p>
        <p className="text-base font-bold text-stone-800 font-serif leading-snug mb-1">{item.result}</p>
        <p className="text-xs text-stone-400">{item.treatment}</p>
      </div>

      {/* Footer badge */}
      <div className="px-5 pb-4">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1">
          ✔ Resultado real · Sin filtros
        </span>
      </div>
    </motion.div>
  );
}
