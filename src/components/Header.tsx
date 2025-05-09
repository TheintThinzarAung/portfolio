import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, Download } from 'lucide-react';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 mb-6 ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div
          className="font-bold text-xl md:text-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          Theint Thinzar
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors font-medium"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors font-medium"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors font-medium"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('certifications')}
            className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors font-medium"
          >
            Certifications
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors font-medium"
          >
            Contact
          </button>
          
          <a
            href="/path-to-your-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:opacity-90 transition-all duration-300 hover:scale-105"
          >
            <Download size={16} className="mr-2" />
            Resume
          </a>
          
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-105"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <a
            href="/path-to-your-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-all duration-300 hover:scale-105"
          >
            <Download size={20} />
          </a>
          
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-105"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-105"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg">
          <nav className="flex flex-col p-4 space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors py-2 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors py-2 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors py-2 font-medium"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors py-2 font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors py-2 font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('certifications')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors py-2 font-medium"
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors py-2 font-medium"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;