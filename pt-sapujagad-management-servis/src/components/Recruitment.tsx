import ScrollAnimatedSection from './ScrollAnimatedSection';
import { Search, MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';

const jobs = [
  { id: 1, title: 'Satuan Pengamanan (Security)', location: 'Klaten / Solo', type: 'Full-time', salary: 'UMR sesuai wilayah' },
  { id: 2, title: 'Cleaning Service Specialist', location: 'Surakarta', type: 'Full-time', salary: 'Kompetitif' },
  { id: 3, title: 'Executive Driver', location: 'Yogyakarta', type: 'Contract', salary: 'Harian / Bulanan' },
  { id: 4, title: 'Staff Administrasi', location: 'Klaten (Pusat)', type: 'Full-time', salary: 'Nego' },
];

export default function Recruitment() {
  return (
    <section id="careers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <ScrollAnimatedSection className="max-w-2xl">
            <h2 className="text-navy font-display font-black text-3xl mb-2 border-l-4 border-navy pl-6 uppercase tracking-tight">Rekrutmen Tenaga Kerja</h2>
            <p className="text-charcoal/40 text-[10px] font-bold tracking-[0.3em] uppercase ml-6">Peluang Karir Profesional</p>
          </ScrollAnimatedSection>
          <ScrollAnimatedSection delay={0.2}>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Cari posisi..." 
                className="pl-12 pr-6 py-4 bg-platinum rounded-sm border-2 border-transparent focus:border-navy focus:bg-white transition-all outline-none w-full md:w-[300px] text-sm"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40 group-focus-within:text-navy transition-colors w-4 h-4" />
            </div>
          </ScrollAnimatedSection>
        </div>

        <div className="space-y-4">
          {jobs.map((job, index) => (
            <ScrollAnimatedSection key={job.id} delay={index * 0.1}>
              <div className="group bg-white border border-charcoal/10 p-6 md:p-8 rounded-sm hover:border-navy hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-accent rounded-sm flex items-center justify-center text-navy shadow-sm group-hover:bg-navy group-hover:text-white transition-colors">
                    <Briefcase className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="inline-block px-2 py-1 bg-accent rounded-sm text-[9px] font-black text-navy uppercase tracking-widest mb-2">
                       OPEN RECRUITMENT
                    </div>
                    <h3 className="text-navy font-black text-xl mb-2 uppercase tracking-tight">{job.title}</h3>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-1.5 text-charcoal/60 text-xs font-bold uppercase tracking-wider transition-colors">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1.5 text-charcoal/60 text-xs font-bold uppercase tracking-wider transition-colors">
                        <Clock className="w-3.5 h-3.5" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end border-t border-charcoal/5 md:border-none pt-4 md:pt-0">
                  <div className="text-right hidden sm:block">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-charcoal/30 mb-1">Standard Salary</p>
                    <p className="text-navy font-black text-sm">{job.salary}</p>
                  </div>
                  <button className="bg-navy text-white px-8 py-3 rounded-sm font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-navy/90 transition-all min-h-[48px]">
                    Lamar Sekarang
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </ScrollAnimatedSection>
          ))}
        </div>

        <div className="mt-16 bg-[#004688] rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-navy/20 blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <ScrollAnimatedSection>
            <h3 className="text-2xl font-display font-bold mb-4">Ingin Menjadi Bagian dari Kami?</h3>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Kirimkan CV dan portofolio Anda langsung ke kantor pusat kami atau melalui WhatsApp recruitment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://wa.me/6285729617223" 
                target="_blank" 
                className="bg-navy px-8 py-4 rounded-full font-bold hover:bg-navy/80 transition-colors flex items-center gap-2"
              >
                WhatsApp Recruitment
              </a>
              <a 
                href="#contact" 
                className="border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Hubungi HQ
              </a>
            </div>
          </ScrollAnimatedSection>
        </div>
      </div>
    </section>
  );
}
