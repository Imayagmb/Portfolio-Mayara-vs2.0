import React from 'react';
import { FolderOpen, Linkedin, Github, ChevronDown } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center justify-center ${
        isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-white'
      } pt-16`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Avatar */}
          <div className="mb-8">
            <div className={`w-32 h-32 mx-auto rounded-full ${
              isDarkMode ? 'bg-gray-700' : 'bg-[#0F96AE]'
            } flex items-center justify-center text-white text-4xl font-bold shadow-lg`}>
              MM
            </div>
          </div>

          {/* Nome */}
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          } animate-fade-in`}>
            Mayara Gonçalves Monteiro
          </h1>

          {/* Frase de destaque */}
          <p className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          } animate-fade-in-delay`}>
            "Transformando código em soluções e interfaces que fazem a diferença."
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className={`inline-flex items-center px-8 py-3 rounded-lg font-semibold text-white bg-[#0F96AE] hover:bg-[#0d7a94] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
            >
              <FolderOpen className="mr-2" size={20} />
              Projetos
            </button>
            
            <a
              href="https://www.linkedin.com/in/maya-monteiro/"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                isDarkMode 
                  ? 'bg-gray-700 text-white hover:bg-gray-600' 
                  : 'bg-white text-gray-900 hover:bg-gray-50'
              } border-2 border-[#0F96AE]`}
            >
              <Linkedin className="mr-2" size={20} />
              LinkedIn
            </a>
            
            <a
              href="https://github.com/Imayagmb"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                isDarkMode 
                  ? 'bg-gray-700 text-white hover:bg-gray-600' 
                  : 'bg-white text-gray-900 hover:bg-gray-50'
              } border-2 border-[#0F96AE]`}
            >
              <Github className="mr-2" size={20} />
              GitHub
            </a>
          </div>

          {/* Scroll */}
          <div className="animate-bounce">
            <ChevronDown 
              size={32} 
              className={`mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} cursor-pointer`}
              onClick={() => scrollToSection('sobre')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;