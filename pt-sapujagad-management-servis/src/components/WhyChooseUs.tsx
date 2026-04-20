import ScrollAnimatedSection from './ScrollAnimatedSection';
import { UserCheck, Clock, Handshake, Tag } from 'lucide-react';

const differentiators = [
  {
    icon: UserCheck,
    title: 'Experienced Personnel',
    description: 'Our team comprises highly trained and experienced professionals, ensuring top-tier service delivery across all sectors.'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'We are committed to providing round-the-clock support and security, ensuring your business operations are never interrupted.'
  },
  {
    icon: Handshake,
    title: 'Client-Centric Approach',
    description: 'We prioritize your needs, delivering tailored solutions that align perfectly with your specific business goals and requirements.'
  },
  {
    icon: Tag,
    title: 'Competitive Pricing',
    description: 'Enjoy high-quality management and security services at competitive rates, providing maximum value for your investment.'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-platinum/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <ScrollAnimatedSection>
            <h2 className="text-navy font-display font-black text-3xl mb-2 border-l-4 border-navy pl-6 uppercase tracking-tight">Why Choose Us?</h2>
            <p className="text-charcoal/40 text-[10px] font-bold tracking-[0.3em] uppercase ml-6">Key Differentiators of PT Sapujagad</p>
          </ScrollAnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollAnimatedSection key={index} delay={index * 0.1}>
                <div 
                  className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 border-b-4 border-transparent hover:border-navy group h-full"
                >
                  <div className="w-14 h-14 bg-platinum rounded-sm flex items-center justify-center mb-6 group-hover:bg-navy transition-colors duration-500">
                    <Icon className="w-7 h-7 text-navy group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="font-black text-navy text-lg uppercase mb-4 tracking-tight leading-none group-hover:text-navy transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollAnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
