import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface Props {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Antes",
  afterLabel = "Después"
}: Props) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!isResizing || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;

    if (position >= 0 && position <= 100) {
      setSliderPos(position);
    }
  };

  useEffect(() => {
    const endResize = () => setIsResizing(false);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("mouseup", endResize);
    window.addEventListener("touchend", endResize);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", endResize);
      window.removeEventListener("touchend", endResize);
    };
  }, [isResizing]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] md:aspect-[3/2] max-h-[700px] overflow-hidden rounded-xl border-4 border-white shadow-2xl cursor-col-resize select-none bg-[#040f19]"
      onMouseDown={() => setIsResizing(true)}
      onTouchStart={() => setIsResizing(true)}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt="Después"
        className="absolute inset-0 w-full h-full object-contain"
        draggable={false}
      />

      {/* Before Image (Clip) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt="Antes"
          className="absolute inset-0 w-full h-full object-contain"
          draggable={false}
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-primary">
          <div className="flex gap-1">
             <div className="w-1 h-4 bg-primary/30 rounded-full" />
             <div className="w-1 h-4 bg-primary/30 rounded-full" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold tracking-[0.35em] uppercase px-3 py-1.5 rounded-full opacity-80 pointer-events-none">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold tracking-[0.35em] uppercase px-3 py-1.5 rounded-full opacity-80 pointer-events-none">
        {afterLabel}
      </div>
    </div>
  );
}
