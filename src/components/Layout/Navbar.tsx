import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
          XORION
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative text-white/80 hover:text-cyan-400 transition-colors px-2 py-1 group"
            >
              <span className="group-hover:scale-105 transition-transform">
                {link.name}
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="lg:hidden w-10 h-10 relative z-50 flex flex-col justify-center items-center"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white mb-1.5 rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white mb-1.5 rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-gradient-to-br from-[#0f172a]/90 to-[#1e293b]/90 backdrop-blur-xl transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible delay-300'
        }`}
      >
        <div className="relative h-full w-full flex flex-col justify-center items-center space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-semibold text-white hover:text-cyan-400 transition duration-300 py-2 px-4"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}