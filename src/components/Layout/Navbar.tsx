// components/Navbar.jsx
import { useState } from 'react';

const navLinks = [
  'About',
  'Developers',
  'Ecosystem',
  'News',
  'Use Oasis',
  'Community',
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-6 left-6 z-50">
        <div className="text-sm font-semibold tracking-wider">XORION FOUNDATION</div>
      </header>

      {/* Mobile Menu Button - Right side */}
      <div className="lg:hidden fixed top-6 right-6 z-50">
        <button 
          className="p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black mb-1 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black mb-1 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-95 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-2xl font-medium text-black hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Navigation - Right side */}
      <nav className="hidden lg:flex flex-col items-end gap-4 fixed right-8 top-1/2 -translate-y-1/2 z-40 text-lg font-medium">
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="relative text-black/80 hover:text-black transition-colors duration-300 group"
          >
            <span className="block group-hover:translate-x-1 transition-transform">
              {link}
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-px bg-black group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </nav>
    </>
  );
}