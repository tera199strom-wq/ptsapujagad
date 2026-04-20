import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';

interface CountUpProps {
  to: number;
  duration?: number;
  suffix?: string;
  label: string;
}

function CountUp({ to, duration = 2, suffix = "", label }: CountUpProps) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  useEffect(() => {
    return rounded.on("change", (v) => setDisplayValue(v));
  }, [rounded]);

  return (
    <div ref={nodeRef} className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm">
      <div className="text-4xl md:text-5xl font-black text-white mb-2 font-display">
        {displayValue}{suffix}
      </div>
      <div className="text-white/40 text-[10px] uppercase font-bold tracking-[0.3em] font-sans">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  const stats = [
    { to: 12, suffix: "+", label: "Tahun Pengalaman" },
    { to: 500, suffix: "+", label: "Tenaga Pengamanan" },
    { to: 85, suffix: "+", label: "Klien Korporat" },
    { to: 35, suffix: "", label: "Kota Operasional" },
  ];

  return (
    <section className="bg-navy relative py-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CountUp {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
