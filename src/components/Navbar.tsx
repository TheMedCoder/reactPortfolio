
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((open) => !open);

  return (
<nav className="w-full px-6 md:px-12 lg:px-24 pt-10">
  <div className="flex items-center justify-between">
    {/* name */}
    <div className="shrink-0">
      <p className="text-2xl font-bold text-gray-200 font-gelasio">TheMedCoder</p>
    </div>
    
    {/* Desktop */}
    <ul className="hidden md:flex gap-8 lg:gap-12 text-lg">
      <li><a href="#home" className="text-gray-200 hover:text-sky-500 transition-colors">Home</a></li>
      <li><a href="#about" className="text-gray-200 hover:text-sky-500 transition-colors">About</a></li>
      <li><a href="#projects" className="text-gray-200 hover:text-sky-500 transition-colors">Projects</a></li>
      <li><a href="#contact" className="text-gray-200 hover:text-sky-500 transition-colors">Contact</a></li>
    </ul>
    
    {/* Mobile */}
    <button 
      className="md:hidden text-gray-200 focus:outline-none"
      onClick={toggleMenu}
      aria-label="Toggle menu"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {isMenuOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  </div>
  
  {/* Mobile */}
  {isMenuOpen ? (
    <ul className="md:hidden mt-4 space-y-4 pb-4">
      <li><a href="#home" className="block text-gray-200 hover:text-sky-500 transition-colors" onClick={toggleMenu}>Home</a></li>
      <li><a href="#about" className="block text-gray-200 hover:text-sky-500 transition-colors" onClick={toggleMenu}>About</a></li>
      <li><a href="#projects" className="block text-gray-200 hover:text-sky-500 transition-colors" onClick={toggleMenu}>Projects</a></li>
      <li><a href="#contact" className="block text-gray-200 hover:text-sky-500 transition-colors" onClick={toggleMenu}>Contact</a></li>
    </ul>
  ) : null}
</nav>
);
}

export default Navbar; 