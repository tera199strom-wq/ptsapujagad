import { useState } from 'react';
import { motion } from 'motion/react';
import { Loader2, ImageOff } from 'lucide-react';

const IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1590212151175-e58edd96185b?auto=format&fit=crop&q=80&w=800",
    title: "Security Operations",
    desc: "24/7 Monitoring & Protection"
  },
  {
    url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
    title: "VVIP Protection",
    desc: "Executive Bodyguard Services"
  },
  {
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    title: "Strategic Training",
    desc: "Personnel Excellence Program"
  },
  {
    url: "https://atozservices.me/wp-content/uploads/2016/08/security-guard-service-pic.jpg",
    title: "Facility Management",
    desc: "Professional Cleaning Services"
  },
  {
    url: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800",
    title: "Professional Driving",
    desc: "Certified Corporate Drivers"
  },
  {
    url: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&q=80&w=800",
    title: "Project Management",
    desc: "Corporate Servis Solutions"
  }
];

function GalleryImage({ item, index }: { item: { url: string; title: string; desc: string }, index: number }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative h-[400px] overflow-hidden bg-platinum rounded-sm shadow-xl cursor-pointer"
    >
      {/* Loading State */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-platinum">
          <Loader2 className="w-8 h-8 text-navy animate-spin" />
        </div>
      )}

      {/* Error State */}
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-platinum p-6 text-center">
          <ImageOff className="w-12 h-12 text-navy/20 mb-4" />
          <p className="text-navy font-bold text-xs uppercase tracking-widest">Gagal memuat gambar</p>
        </div>
      ) : (
        <img
          src={item.url}
          alt={item.title}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
            isLoaded ? 'opacity-80 group-hover:opacity-100 group-hover:scale-110' : 'opacity-0'
          }`}
          referrerPolicy="no-referrer"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="absolute bottom-6 left-6 right-6 translate-y-4 md:translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <h3 className="text-white font-display font-black text-xl mb-1">{item.title}</h3>
        <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">{item.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden border-t border-platinum">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-navy/40 font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Our Work In Action</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-navy leading-none">Galeri Operasional</h2>
          </div>
          <p className="text-charcoal/60 max-w-sm text-sm font-medium border-l-2 border-navy pl-6">
            Dokumentasi profesional komitmen kami dalam melayani berbagai kebutuhan manajemen dan pengamanan di lapangan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {IMAGES.map((item, index) => (
            <div key={index}>
              <GalleryImage item={item} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-0 -translate-x-1/3 -translate-y-1/2 select-none pointer-events-none opacity-[0.02]">
        <span className="text-[25vw] font-black uppercase text-navy leading-none font-display">
          ACTION
        </span>
      </div>
    </section>
  );
}
