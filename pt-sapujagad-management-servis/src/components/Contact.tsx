import ScrollAnimatedSection from './ScrollAnimatedSection';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-platinum/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <ScrollAnimatedSection>
              <h2 className="text-navy font-display font-black text-3xl mb-2 border-l-4 border-navy pl-6 uppercase tracking-tight">Hubungi Kami</h2>
              <p className="text-charcoal/40 text-[10px] font-bold tracking-[0.3em] uppercase ml-6 mb-12">Informasi Kontak & Layanan</p>
            </ScrollAnimatedSection>

            <div className="space-y-4 ml-6">
              <ScrollAnimatedSection delay={0.1} className="flex gap-6 p-6 bg-white rounded-sm border border-charcoal/10 hover:border-navy transition-all">
                <div className="w-12 h-12 bg-accent rounded-sm flex items-center justify-center text-navy flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-navy text-xs uppercase tracking-widest mb-1">Kantor Pusat</h4>
                  <p className="text-charcoal/60 text-xs leading-relaxed">
                    Jl. Mandong - Temuwangi Jlogedan RT 05 RW 02 Mandong Trucuk, Klaten, Jawa Tengah 57467
                  </p>
                </div>
              </ScrollAnimatedSection>

              <ScrollAnimatedSection delay={0.2} className="flex gap-6 p-6 bg-white rounded-sm border border-charcoal/10 hover:border-navy transition-all">
                <div className="w-12 h-12 bg-accent rounded-sm flex items-center justify-center text-navy flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-navy text-xs uppercase tracking-widest mb-1">Telepon / WhatsApp</h4>
                  <p className="text-charcoal/60 text-xs font-bold uppercase tracking-widest">0857-2961-7223</p>
                </div>
              </ScrollAnimatedSection>
            </div>
          </div>

          <ScrollAnimatedSection delay={0.2}>
            <form className="bg-white p-8 md:p-12 rounded-sm border-2 border-navy shadow-2xl space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-navy ml-1">Nama Lengkap</label>
                  <input 
                    type="text" 
                    placeholder="Masukkan nama..."
                    className="w-full bg-platinum border-2 border-transparent focus:border-navy focus:bg-white rounded-sm px-6 py-4 outline-none transition-all text-sm"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-navy ml-1">Nomor Telepon</label>
                  <input 
                    type="tel" 
                    placeholder="085x xxxx xxxx"
                    className="w-full bg-platinum border-2 border-transparent focus:border-navy focus:bg-white rounded-sm px-6 py-4 outline-none transition-all text-sm"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-navy ml-1">Tujuan Pesan</label>
                <select className="w-full bg-platinum border-2 border-transparent focus:border-navy focus:bg-white rounded-sm px-6 py-4 outline-none transition-all appearance-none cursor-pointer text-sm">
                  <option>Layanan Keamanan</option>
                  <option>Rekrutmen Tenaga Kerja</option>
                  <option>Cleaning Service</option>
                  <option>Kerja Sama Bisnis</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-navy ml-1">Pesan Anda</label>
                <textarea 
                  rows={4} 
                  placeholder="Ceritakan kebutuhan Anda..."
                  className="w-full bg-platinum border-2 border-transparent focus:border-navy focus:bg-white rounded-sm px-6 py-4 outline-none transition-all resize-none text-sm"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-navy text-white font-black uppercase tracking-[0.2em] py-5 rounded-sm shadow-lg hover:bg-navy/90 transition-all flex items-center justify-center gap-3"
                style={{ minHeight: '56px' }}
              >
                Kirim Pesan
                <Send className="w-4 h-4" />
              </button>
            </form>
          </ScrollAnimatedSection>
        </div>
      </div>
    </section>
  );
}
