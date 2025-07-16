import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Community', path: '/community' },
  { name: 'Developers', path: '/developers' },
  { name: 'Ecosystem', path: '/ecosystem' },
  { name: 'Usecases', path: '/usecases' },
  { name: 'Blogs', path: '/blogs' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-2' : 'py-4'
    }`}>
      <div className={`absolute inset-0 pointer-events-none transition-all duration-500 ${
        scrolled 
          ? 'bg-black/30 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'bg-black/40 backdrop-blur-xl border-b border-white/5 shadow-lg'
      }`} />
      
      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 text-xl md:text-2xl font-bold tracking-tight text-white hover:scale-105 transition-transform duration-300"
        >
          <img src="/logo%20(1).svg" alt="Xorion Logo" className="h-8 w-8 md:h-10 md:w-10 object-contain" />
          <span className="bg-white bg-clip-text text-transparent">
            XORION
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 rounded-lg group"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                {link.name}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full" />
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="lg:hidden relative z-50 p-3 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-md transition-all duration-300 flex items-center justify-center"
          aria-label="Toggle menu"
          style={{ width: 44, height: 44 }}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1' : 'mb-1'
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                isMenuOpen ? 'opacity-0 scale-0' : 'mb-1'
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-2xl" />
        
        {/* Floating close button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
          className="absolute top-6 right-4 z-50 p-3 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-md transition-all duration-300 flex items-center justify-center"
          style={{ width: 44, height: 44 }}
        >
          <IoClose size={28} className="text-white" />
        </button>

        {/* Menu content */}
        <div className="relative h-full w-full flex flex-col justify-center items-center px-6">
          <div className="space-y-2 w-full max-w-sm">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-center py-4 px-6 text-lg font-medium text-gray-200 hover:text-white rounded-2xl transition-all duration-300 hover:bg-white/10 hover:scale-105 active:scale-95 border border-transparent hover:border-white/20 ${isMenuOpen ? 'animate-fadeinup' : ''}`}
                style={{
                  animationDelay: isMenuOpen ? `${index * 0.1}s` : undefined
                }}
              >
                <span className="block transition-transform duration-300 hover:scale-105">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}} />
        </div>
      </div>

      {/* Keyframes for slideIn animation using Tailwind's arbitrary values */}
      {/* If you want to use custom keyframes, add them to your tailwind.config.js */}
    </header>
  );
}