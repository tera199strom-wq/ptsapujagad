import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import ScrollFloat from './components/ScrollFloat';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Footer from './components/Footer';

const LOGO_URL = "https://ugc.production.linktr.ee/b39d8301-f061-4984-a001-3437fb05c3a9_IMG-20231213-WA0279.jpeg?io=true&size=avatar-v3_0";

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setIsLoading(false), 2000); // Slightly longer for better visual of bar
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'why-choose-us', 'services', 'gallery', 'testimonials'];
      const scrollPos = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="bg-white selection:bg-navy selection:text-white font-sans">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[90] flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-8 px-4 w-full max-w-[300px]"
            >
              <div className="flex flex-col items-center gap-6">
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                  className="w-36 h-36 bg-white rounded-lg shadow-2xl overflow-hidden border-[6px] border-navy relative"
                >
                  <img 
                    src={LOGO_URL} 
                    alt="Sapujagad Logo" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-navy/5" />
                </motion.div>
                <div className="text-center">
                  <h2 className="text-navy font-display font-black text-3xl tracking-tighter leading-none mb-1">PT SAPUJAGAD</h2>
                  <p className="text-charcoal/40 text-[11px] uppercase font-bold tracking-[0.5em]">Management Servis</p>
                </div>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full h-1 bg-platinum rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, ease: "linear" }}
                  className="absolute top-0 left-0 h-full bg-navy"
                />
              </div>
              
              <p className="text-[10px] font-black uppercase tracking-widest text-navy animate-pulse">
                Initializing Systems...
              </p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Header activeSection={activeSection} />
            <Hero />
            
            {/* Transition Divider & Siapa Kami */}
            <div className="relative">
              {/* Shape Divider - Bridges Hero and Siapa Kami */}
              <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none -translate-y-[99%]">
                <svg 
                  viewBox="0 0 1000 100" 
                  preserveAspectRatio="none" 
                  className="relative block w-full h-[80px] md:h-[120px] fill-white scale-y-[-1]"
                >
                  <path d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                </svg>
              </div>

              <section className="bg-white py-12 flex items-center justify-center overflow-hidden">
                <ScrollFloat
                  animationDuration={1}
                  ease='back.inOut(2)'
                  scrollStart='top bottom-=10%'
                  scrollEnd='bottom center'
                  stagger={0.03}
                  containerClassName="px-4"
                  textClassName="text-navy font-black tracking-tighter"
                >
                  SIAPA KAMI?
                </ScrollFloat>
              </section>
            </div>

            <About />
            <WhyChooseUs />
            <Stats />
            <Services />
            <Gallery />
            <Testimonials />
            <Location />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>

      {/* Background Micro-interaction Elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-navy/5 blur-[120px] rounded-full -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-navy/5 blur-[120px] rounded-full translate-x-1/2" />
      </div>
    </div>
  );
}
