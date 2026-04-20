import ScrollAnimatedSection from './ScrollAnimatedSection';
import { Quote, Star, Building2, Factory, Hotel, Warehouse, Briefcase, Stethoscope, ShoppingBag, School } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    id: 1,
    quote: "Layanan pengamanan dari PT Sapujagad sangat profesional. Personil mereka disiplin, sigap, dan memiliki integritas tinggi. Sangat membantu operasional pabrik kami tetap kondusif.",
    name: "Bambang Wibowo",
    title: "HR Manager",
    company: "PT Maju Terus Manufacturing",
    rating: 5
  },
  {
    id: 2,
    quote: "Kami telah bekerja sama untuk layanan cleaning service selama 2 tahun. Hasil kerjanya konsisten bersih dan tenaga kerjanya sopan. Recomended untuk partner bisnis.",
    name: "Siti Rahmawati",
    title: "Operational Manager",
    company: "Hotel Grand Klaten",
    rating: 5
  },
  {
    id: 3,
    quote: "Driver yang disediakan sangat berpengalaman dan menguasai rute dengan baik. Standar keselamatan mereka benar-benar terjaga, membuat perjalanan bisnis kami lebih nyaman.",
    name: "Hendrik Pratama",
    title: "Chief Executive",
    company: "Universal Distribution Ltd",
    rating: 5
  }
];

const clientIcons = [
  { icon: Building2, name: 'Office Complex' },
  { icon: Factory, name: 'Industri Manufaktur' },
  { icon: Hotel, name: 'Sektor Perhotelan' },
  { icon: Warehouse, name: 'Logistik & Gudang' },
  { icon: Briefcase, name: 'Instansi Pemerintah' },
  { icon: Stethoscope, name: 'Rumah Sakit' },
  { icon: ShoppingBag, name: 'Ritel & Mall' },
  { icon: School, name: 'Institusi Pendidikan' }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <ScrollAnimatedSection>
            <h2 className="text-navy font-display font-black text-3xl mb-2 border-l-4 border-navy pl-6 uppercase tracking-tight">Testimoni Klien</h2>
            <p className="text-charcoal/40 text-[10px] font-bold tracking-[0.3em] uppercase ml-6">Apa Kata Mereka Tentang Kami</p>
          </ScrollAnimatedSection>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testi, index) => (
            <ScrollAnimatedSection key={testi.id} delay={index * 0.1}>
              <div className="bg-platinum/20 p-8 rounded-sm border-t-4 border-navy shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-navy fill-navy" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-navy/10" />
                </div>
                <p className="text-charcoal/80 text-sm italic leading-relaxed mb-8 flex-grow">
                  "{testi.quote}"
                </p>
                <div className="border-t border-charcoal/5 pt-6">
                  <p className="font-black text-navy text-sm uppercase tracking-tight">{testi.name}</p>
                  <p className="text-charcoal/40 text-[10px] font-bold uppercase tracking-widest leading-none mt-1">
                    {testi.title} — {testi.company}
                  </p>
                </div>
              </div>
            </ScrollAnimatedSection>
          ))}
        </div>

        {/* Client Marquee */}
        <ScrollAnimatedSection delay={0.4} className="relative mt-20">
          <p className="text-center text-[10px] font-bold text-charcoal/30 uppercase tracking-[0.4em] mb-12">
            Melayani Berbagai Sektor Industri
          </p>
          
          <div className="relative flex overflow-x-hidden">
            <motion.div 
              animate={{ x: ['0%', '-50%'] }}
              transition={{ 
                repeat: Infinity, 
                duration: 30, 
                ease: "linear" 
              }}
              className="flex whitespace-nowrap gap-16 md:gap-32 items-center py-4"
            >
              {/* First set of icons */}
              {[...clientIcons, ...clientIcons].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-center group">
                    <div className="w-16 h-16 bg-platinum flex items-center justify-center rounded-sm border-b-2 border-transparent group-hover:border-navy transition-all duration-300">
                      <Icon className="w-8 h-8 text-navy opacity-30 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-charcoal/20 group-hover:text-navy mt-3 transition-colors">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
          
          {/* Faded edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </ScrollAnimatedSection>
      </div>
    </section>
  );
}
