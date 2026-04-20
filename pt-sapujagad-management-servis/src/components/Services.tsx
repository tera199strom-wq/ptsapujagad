import { useState } from 'react';
import ScrollAnimatedSection from './ScrollAnimatedSection';
import { Shield, Truck, Sparkles, UserCheck, X, CheckCircle2, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const services = [
  {
    title: 'Security Services (BUJP)',
    description: 'Penyediaan tenaga satuan pengamanan (Satpam) bersertifikat Gada Pratama dengan disiplin tinggi untuk perlindungan aset dan area.',
    icon: <Shield className="w-8 h-8" />,
    image: 'https://atozservices.me/wp-content/uploads/2016/08/security-guard-service-pic.jpg',
    details: [
      'Personil bersertifikat Gada Pratama/Madya',
      'Sistem patroli rutin & pengawasan 24 jam',
      'Pelatihan bela diri dan tanggap darurat rutin',
      'Koordinasi intensif dengan kepolisian setempat',
      'Audit keamanan berkala di area mitra'
    ]
  },
  {
    title: 'Cleaning Service',
    description: 'Solusi kebersihan profesional untuk gedung perkantoran, pabrik, dan komersial dengan tenaga terlatih dan peralatan modern.',
    icon: <Sparkles className="w-8 h-8" />,
    image: 'https://hes.co.id/an-component/media/upload-gambar-artikel/HAN_59171.jpg',
    details: [
      'Pembersihan area indoor & outdoor secara menyeluruh',
      'Penggunaan chemical pembersih ramah lingkungan',
      'Staff jujur, rapi, dan terlatih SOP kebersihan',
      'Layanan general cleaning & pembersihan berkala',
      'Peralatan modern (Polisher, Vacuum, dll)'
    ]
  },
  {
    title: 'Professional Driver',
    description: 'Penyediaan supir profesional, sopan, dan menguasai rute serta teknis kendaraan untuk kebutuhan operasional maupun eksekutif.',
    icon: <Truck className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800',
    details: [
      'Uji kompetensi mengemudi & teknis kendaraan',
      'Sertifikat safety driving untuk keamanan maksimal',
      'Pemeriksaan latar belakang & catatan kepolisian',
      'Kemampuan bahasa asing (opsional eksekutif)',
      'Standar grooming dan etika pelayanan tinggi'
    ]
  },
  {
    title: 'Admin & Staff Support',
    description: 'Recruitment dan penempatan tenaga administrasi, resepsionis, serta staff pendukung kantor yang kompeten dan handal.',
    icon: <UserCheck className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800',
    details: [
      'Skrining kompetensi teknis & psikotes',
      'Penguasaan aplikasi perkantoran (Office/Cloud)',
      'Keahlian komunikasi dan customer relationship',
      'Pelatihan budaya kerja korporat klien',
      'Manajemen penggajian & administratif terintegrasi'
    ]
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-24 bg-platinum/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex items-end justify-between">
          <ScrollAnimatedSection>
            <h2 className="text-navy font-display font-black text-3xl border-l-4 border-navy pl-6 uppercase tracking-tight">Layanan Unggulan</h2>
            <p className="text-charcoal/40 text-[10px] font-bold tracking-[0.3em] uppercase ml-6 mt-2">Solusi Tenaga Kerja Terintegrasi</p>
          </ScrollAnimatedSection>
          <div className="hidden md:block text-right">
             <p className="text-charcoal/40 text-[10px] font-bold tracking-widest uppercase mb-1">Integritas & Kualitas</p>
             <div className="h-0.5 w-24 bg-navy ml-auto" />
          </div>
        </div>

        {/* Desktop Grid / Mobile Horizontal Scroll */}
        <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 no-scrollbar">
          {services.map((service, index) => (
            <ScrollAnimatedSection 
              key={service.title} 
              delay={index * 0.1}
              className="min-w-[280px] flex-shrink-0 snap-center md:min-w-0"
            >
              <div 
                onClick={() => setSelectedService(service)}
                className="group bg-white rounded-sm overflow-hidden border border-charcoal/10 hover:border-navy hover:bg-platinum/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full flex flex-col shadow-sm"
              >
                <div className="p-8 flex-grow flex flex-col">
                  <div className="w-12 h-12 bg-accent rounded-sm flex items-center justify-center text-navy mb-6 group-hover:bg-navy group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-navy font-black text-lg mb-3 uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-charcoal/60 text-xs leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <div className="px-8 pb-8 flex items-center justify-between">
                  <div className="inline-block px-3 py-1 bg-platinum rounded-sm text-[10px] font-bold text-navy uppercase tracking-wider group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                    BUJP Certified
                  </div>
                  <span className="text-[10px] font-black text-navy uppercase opacity-0 group-hover:opacity-100 transition-opacity">Detail →</span>
                </div>
              </div>
            </ScrollAnimatedSection>
          ))}
        </div>

        <div className="mt-16 text-center">
          <ScrollAnimatedSection delay={0.4}>
            <div className="inline-flex items-center gap-8 bg-white p-6 rounded-full shadow-sm">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/${i + 20}/64/64`}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-navy">
                Gabung bersama ratusan profesional lainnya
              </p>
              <a 
                href="tel:085729617223" 
                className="bg-navy text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-navy/90 transition-colors"
                style={{ minHeight: '44px', display: 'flex', alignItems: 'center' }}
              >
                Mulai Konsultasi
              </a>
            </div>
          </ScrollAnimatedSection>
        </div>
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-navy/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-navy hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-navy/60 to-transparent flex items-end md:items-center p-8">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-navy shadow-2xl scale-110">
                    {selectedService.icon}
                  </div>
                </div>
              </div>

              <div className="flex-1 p-8 md:p-12">
                <h3 className="text-3xl font-display font-black text-navy uppercase tracking-tight mb-4">
                  {selectedService.title}
                </h3>
                <p className="text-charcoal/60 text-base mb-8 border-l-4 border-platinum pl-6 italic">
                  {selectedService.description}
                </p>

                <div className="space-y-4 mb-10">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-navy/40">Cakupan Keunggulan:</p>
                  {selectedService.details?.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-charcoal/80">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:085729617223"
                    className="flex-1 bg-navy text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-navy/90 transition-all shadow-lg hover:shadow-navy/20"
                  >
                    <Phone className="w-5 h-5" />
                    Hubungi Sekarang
                  </a>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="flex-1 border-2 border-platinum text-charcoal hover:bg-platinum hover:text-navy px-8 py-4 rounded-xl font-bold transition-all"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
