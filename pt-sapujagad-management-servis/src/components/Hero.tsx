import { motion } from 'motion/react';
import { ShieldCheck, ChevronRight } from 'lucide-react';

const LOGO_URL = "https://ugc.production.linktr.ee/b39d8301-f061-4984-a001-3437fb05c3a9_IMG-20231213-WA0279.jpeg?io=true&size=avatar-v3_0";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-navy/60 z-10" />
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=2000')`,
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 mb-6"
          >
            <ShieldCheck className="text-white w-5 h-5" />
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              BUJP Professional Outsourcing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-display font-black text-white mb-8 leading-[1.1] tracking-tight"
          >
            Keamanan dan Layanan <br />
            <span className="text-accent underline decoration-4 underline-offset-8">Terpercaya Sejak Dini.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/70 text-base md:text-lg mb-10 max-w-xl leading-relaxed"
          >
            Penyedia tenaga kerja Security, Driver, dan Cleaning Service profesional untuk kebutuhan korporat dan personal di Jawa Tengah.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#services"
              className="bg-white text-navy px-10 py-4 rounded-sm font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-accent transition-all shadow-xl min-h-[56px]"
            >
              Layanan Unggulan
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="border-2 border-white/30 text-white px-10 py-4 rounded-sm font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/10 transition-all min-h-[56px]"
            >
              Hubungi Kami
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Orange Circle - Solid Large Circle (1/4 visible) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 200, y: 200 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -bottom-[400px] -right-[400px] w-[800px] h-[800px] bg-orange-500 rounded-full z-[15] pointer-events-none shadow-2xl"
      />

      {/* Security Officer Image - Large Half Body View (Fade In & Direct Upward Motion) */}
      <motion.div
        initial={{ opacity: 0, y: 400 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
        className="absolute -bottom-[350px] md:-bottom-[650px] lg:-bottom-[800px] -right-[120px] md:-right-[220px] lg:-right-[300px] z-20 w-[450px] md:w-[700px] lg:w-[900px] pointer-events-none"
      >
        <img 
          src="https://raw.githubusercontent.com/tera199strom-wq/ptsapujagad/refs/heads/main/pt-sapujagad-management-servis/src/components/smiling-caucasian-police-officer-uniform-standing-with-baton-indoors-front-view-bearded-cop.png" 
          alt="Security Officer" 
          className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
}
