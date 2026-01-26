import React from 'react';
import { Github, Linkedin} from 'lucide-react';
import { FaReact } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";



interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-900'} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Mayara  Monteiro</h3>
            <p className="text-gray-400 mb-4">
              Desenvolvedora Full Stack transformando ideias em código.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/Imayagmb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                title="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/maya-monteiro/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('experiencia')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Experiência
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projetos
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* contato Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
             <p className="text-gray-400 mb-2 flex items-center justify-center md:justify-end gap-2">
    <MdEmail size={18} />
              <a 
                href="mailto:imayagmb@gmail.com"
                className="hover:text-white transition-colors"
              >
                imayagmb@gmail.com
              </a>
            </p>
            <p className="text-gray-400 flex items-center justify-center md:justify-end gap-2">
    <FaLocationDot size={16} />
              Rio de Janeiro, RJ
            </p>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Mayara Monteiro. Todos os direitos reservados.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <span className="flex items-center">
                Desenvolvido com
                <FaReact size={16} className="mx-1 text-cyan-400" />
                React.js                
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;