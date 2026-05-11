import { motion } from "framer-motion";
import { Star, MapPin, CheckCircle2 } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

interface Props {
  testimonial: Testimonial;
  index?: number;
}

export function TestimonialCard({ testimonial, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-lg transition-all duration-300 flex flex-col gap-4"
      data-cro="testimonial-card"
    >
      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {testimonial.verified && (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1">
            <CheckCircle2 className="w-3 h-3" /> Caso verificado
          </span>
        )}
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1">
          {testimonial.area}
        </span>
      </div>

      {/* Result highlight */}
      <div className="bg-primary/5 border border-primary/15 rounded-xl px-4 py-3">
        <p className="text-xs text-primary/70 font-medium uppercase tracking-wider mb-0.5">
          Resultado en {testimonial.duration}
        </p>
        <p className="text-lg font-bold text-primary font-serif">{testimonial.result}</p>
      </div>

      {/* Text */}
      <p className="text-stone-600 italic leading-relaxed flex-1 text-sm">
        "{testimonial.text}"
      </p>

      {/* Stars */}
      <div className="flex gap-0.5 mb-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      {/* Identity (anonymous) */}
      <div className="flex items-center gap-3 pt-3 border-t border-stone-100">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-serif text-lg shrink-0">
          {testimonial.age}
        </div>
        <div>
          <p className="text-sm font-semibold text-stone-800">
            Paciente real MJ Estética
          </p>
          <div className="flex items-center gap-1 text-xs text-stone-500">
            <MapPin className="w-3 h-3" />
            <span>
              {testimonial.location}, {testimonial.age} años · {testimonial.treatment}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
