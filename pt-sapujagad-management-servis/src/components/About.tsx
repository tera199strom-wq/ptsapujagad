import { useRef } from 'react';
import ScrollAnimatedSection from './ScrollAnimatedSection';
import { Shield, Target, Users } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="about" ref={containerRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollAnimatedSection>
            <div className="space-y-8">
              <div>
                <h2 className="text-navy font-display font-black text-3xl mb-4 border-l-4 border-navy pl-6 uppercase tracking-tight">Profil Perusahaan</h2>
                <div className="text-charcoal/40 text-[10px] font-bold tracking-[0.3em] uppercase ml-6">PT Sapujagad Management Servis</div>
              </div>
              
              <p className="text-charcoal/80 text-base leading-relaxed ml-6">
                Kami adalah badan usaha resmi yang bergerak di bidang penyediaan jasa tenaga kerja (Outsourcing) dan Pengamanan (BUJP). Berkedudukan di Klaten, kami melayani berbagai mitra industri dengan dedikasi pada kualitas dan ketertiban.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 ml-6">
                <div className="p-6 border border-platinum bg-platinum/30 rounded-sm hover:border-navy transition-colors group">
                  <Shield className="w-8 h-8 text-navy mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-black text-navy text-sm uppercase mb-2">Keamanan</h4>
                  <p className="text-xs text-charcoal/60 leading-relaxed">Sistem pengamanan Gada Pratama yang handal.</p>
                </div>
                <div className="p-6 border border-platinum bg-platinum/30 rounded-sm hover:border-navy transition-colors group">
                  <Users className="w-8 h-8 text-navy mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-black text-navy text-sm uppercase mb-2">SDM Unggul</h4>
                  <p className="text-xs text-charcoal/60 leading-relaxed">Penyaringan ketat untuk hasil maksimal.</p>
                </div>
                <div className="p-6 border border-platinum bg-platinum/30 rounded-sm hover:border-navy transition-colors group">
                  <Target className="w-8 h-8 text-navy mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-black text-navy text-sm uppercase mb-2">Integritas</h4>
                  <p className="text-xs text-charcoal/60 leading-relaxed">Kepercayaan mitra adalah aset utama kami.</p>
                </div>
              </div>
            </div>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection delay={0.2} className="relative">
            <motion.div 
              style={{ y }}
              className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative group"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: `url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000')`,
                }}
              />
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
            
            {/* Overlay Info */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-navy p-8 rounded-2xl text-white shadow-xl hidden sm:block max-w-[280px]"
            >
              <p className="text-3xl font-display font-bold mb-2">100+</p>
              <p className="text-white/70 text-sm">Klien yang telah mempercayakan operasional bisnisnya kepada kami.</p>
            </motion.div>
          </ScrollAnimatedSection>
        </div>


        <div className="mt-32">
          <ScrollAnimatedSection className="bg-navy rounded-[2rem] p-12 lg:p-16 text-white grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-display font-bold mb-6 italic">Visi & Misi</h3>
              <p className="text-white/80 text-lg mb-8">
                Menjadi partner strategis terdepan dalam penyediaan tenaga kerja profesional dan sistem pengamanan handal di Indonesia.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span>Meningkatkan efisiensi bisnis klien melalui rekrutmen SDM yang unggul.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span>Menjamin keamanan aset dan kenyamanan lingkungan kerja secara maksimal.</span>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=600" 
                alt="Corporate Professional" 
                referrerPolicy="no-referrer"
                className="rounded-2xl opacity-80"
              />
            </div>
          </ScrollAnimatedSection>
        </div>
      </div>
    </section>
  );
}
