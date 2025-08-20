import React from 'react';
import { Menu, X, Sun, Moon, Type } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode, increaseFontSize, decreaseFontSize }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isDarkMode ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-white/95 backdrop-blur-sm'
    } border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Mayara Monteiro
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection('home')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('experiencia')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                Experiência
              </button>
              <button
                onClick={() => scrollToSection('projetos')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                Contato
              </button>
            </div>
          </div>

          {/*Fontes */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={decreaseFontSize}
              className={`p-2 rounded-md transition-colors ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
              title="Diminuir fonte"
            >
              <Type size={16} />
            </button>
            <button
              onClick={increaseFontSize}
              className={`p-2 rounded-md transition-colors ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
              title="Aumentar fonte"
            >
              <Type size={20} />
            </button>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-md transition-colors ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
              title={isDarkMode ? 'Modo claro' : 'Modo escuro'}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'} border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('hero')}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('experiencia')}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Experiência
            </button>
            <button
              onClick={() => scrollToSection('projetos')}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Contato
            </button>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={decreaseFontSize}
                className={`p-2 rounded-md transition-colors ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
                title="Diminuir fonte"
              >
                <Type size={16} />
              </button>
              <button
                onClick={increaseFontSize}
                className={`p-2 rounded-md transition-colors ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
                title="Aumentar fonte"
              >
                <Type size={20} />
              </button>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-md transition-colors ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
                title={isDarkMode ? 'Modo claro' : 'Modo escuro'}
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;