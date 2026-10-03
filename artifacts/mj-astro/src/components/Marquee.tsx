import { Sparkles } from "lucide-react";

interface MarqueeProps {
  items?: string[];
}

export function Marquee({
  items = [
    "Fisioterapia",
    "Estética Avanzada",
    "Spa & Relajación",
    "Masajes Profesionales",
    "Tratamientos Médicos",
    "Bienestar Integral",
    "Depilación Láser",
    "Nutrición",
  ],
}: MarqueeProps) {
  // Duplicate items array a few times to ensure seamless infinite scroll
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden bg-[#1378A2] py-4 select-none border-y border-white/10 shadow-inner">
      <div className="flex w-max items-center animate-[marquee_30s_linear_infinite]">
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center gap-10 text-white font-serif tracking-[0.15em] font-semibold uppercase text-xs md:text-sm whitespace-nowrap px-5">
            <span>{item}</span>
            <Sparkles className="w-3.5 h-3.5 text-white/50 fill-white/20 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
