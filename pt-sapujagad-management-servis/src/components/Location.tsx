import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section className="bg-white border-t border-platinum overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Text Info */}
        <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="text-navy w-5 h-5" />
              <span className="text-navy font-black tracking-[0.3em] uppercase text-[10px]">Lokasi Kami</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-navy mb-8 leading-tight">
              Kunjungi Kantor <br />
              Pusat Operasional.
            </h2>
            <div className="space-y-6 text-charcoal/70">
              <p className="text-lg leading-relaxed">
                PT Sapujagad Management Servis berpusat di lokasi strategis Jawa Tengah untuk mendukung mobilitas layanan kami ke seluruh wilayah mitra.
              </p>
              <div className="p-6 bg-platinum rounded-sm border-l-4 border-navy">
                <p className="font-bold text-navy mb-2 uppercase text-xs tracking-widest">Alamat Lengkap:</p>
                <p className="text-navy font-medium italic">
                  Jl. Mayor Kusmanto No.24, Sungkur, Bareng, Kec. Klaten Tengah, Kabupaten Klaten, Jawa Tengah 57414
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Frame */}
        <div className="h-[400px] lg:h-full min-h-[500px] relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.6930880061664!2d110.6983098!3d-7.7160428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a41e253986bed%3A0xdb8b04b26f381695!2sPT.SAPUJAGAD%20MANAGEMENT%20SERVIS!5e0!3m2!1sid!2sid!4v1776607964908!5m2!1sid!2sid" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
