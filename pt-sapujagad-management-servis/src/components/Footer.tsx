import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

const LOGO_URL = "https://ugc.production.linktr.ee/b39d8301-f061-4984-a001-3437fb05c3a9_IMG-20231213-WA0279.jpeg?io=true&size=avatar-v3_0";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-sm overflow-hidden border border-white/10 flex items-center justify-center">
                <img 
                  src={LOGO_URL} 
                  alt="Sapujagad Logo" 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none">SAPUJAGAD</span>
                <span className="text-white/50 text-[10px] tracking-widest uppercase">Management Servis</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Penyedia layanan tenaga kerja profesional dan keamanan berintegritas tinggi yang berpusat di Klaten, Jawa Tengah.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Pintasan</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Layanan Unggulan</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Rekrutmen</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Layanan</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li>Keamanan (BUJP)</li>
              <li>Cleaning Service</li>
              <li>Sopir Profesional</li>
              <li>Staff Administrasi</li>
              <li>Manajemen Facility</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Hadir di</h4>
            <div className="space-y-4 text-white/60 text-sm">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 text-white/40" />
                <span>Klaten, Solo, Yogyakarta, & Jawa Tengah sekitarnya.</span>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-white/40" />
                <span>0857-2961-7223</span>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-white/40" />
                <span>info@sapujagadsms.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} PT Sapujagad Management Servis. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-white/50 text-xs hover:text-white transition-colors"
          >
            <span>Kembali ke Atas</span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
