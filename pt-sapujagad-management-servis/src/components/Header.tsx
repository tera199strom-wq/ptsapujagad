import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';

const LOGO_URL = "https://ugc.production.linktr.ee/b39d8301-f061-4984-a001-3437fb05c3a9_IMG-20231213-WA0279.jpeg?io=true&size=avatar-v3_0";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Profil', href: '#about' },
    { name: 'Keunggulan', href: '#why-choose-us' },
    { name: 'Layanan', href: '#services' },
    { name: 'Galeri', href: '#gallery' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white py-3 shadow-md border-b-2 border-navy' 
          : 'bg-transparent py-6 border-b-2 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-10 h-10 bg-white rounded-sm shadow-sm flex items-center justify-center overflow-hidden border border-platinum"
          >
            <img 
              src={LOGO_URL} 
              alt="Sapujagad Logo" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="flex flex-col">
            <span className={`font-display font-black text-lg leading-none tracking-tight ${isScrolled ? 'text-navy' : 'text-white'}`}>PT SAPUJAGAD</span>
            <span className={`text-[10px] tracking-[0.2em] uppercase font-bold ${isScrolled ? 'text-charcoal/60' : 'text-white/70'}`}>Management Servis</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-bold uppercase tracking-wider transition-all hover:text-navy ${
                activeSection === link.href.slice(1) 
                  ? `${isScrolled ? 'text-navy border-b-2 border-navy' : 'text-white border-b-2 border-white'}` 
                  : `${isScrolled ? 'text-charcoal' : 'text-white/80'}`
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:085729617223"
            className={`flex items-center gap-2 px-6 py-2 rounded-sm font-bold text-xs transition-colors min-h-[40px] shadow-sm ${
              isScrolled ? 'bg-navy text-white hover:bg-navy/90' : 'bg-white text-navy hover:bg-platinum'
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            Hubungi Kami
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center ${isScrolled ? 'text-navy' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t-2 border-navy overflow-hidden"
          >
            <div className="px-4 py-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-navy hover:text-charcoal text-xl font-black tracking-tight"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:085729617223"
                className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-4 rounded-sm font-bold text-base min-h-[56px] shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Hubungi Kami
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
