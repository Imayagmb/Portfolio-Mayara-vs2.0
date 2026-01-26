import React from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

interface ContatoProps {
  isDarkMode: boolean;
}

const Contato: React.FC<ContatoProps> = ({ isDarkMode }) => {
  return (
    <section 
      id="contato" 
      className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-[#0F96AE] mx-auto mb-8"></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Estou sempre aberta a novas oportunidades e colaborações. Vamos conversar!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contato Info */}
            <div className="space-y-8">
              <div>
                <h3 className={`text-2xl font-bold mb-6 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Informações de Contato
                </h3>
                <p className={`text-lg mb-8 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Prefere contato direto? Use os links abaixo para entrar em contato comigo.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <a
                  href="mailto:imayagmb@gmail.com"
                  className={`flex items-center p-4 rounded-lg transition-all duration-300 hover:scale-105 ${
                    isDarkMode 
                      ? 'bg-gray-800 hover:bg-gray-700' 
                      : 'bg-white hover:bg-gray-50'
                  } shadow-lg hover:shadow-xl`}
                >
                  <div className="w-12 h-12 bg-[#0F96AE] rounded-lg flex items-center justify-center mr-4">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className={`font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Email
                    </p>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      imayagmb@gmail.com
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/imayagmb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center p-4 rounded-lg transition-all duration-300 hover:scale-105 ${
                    isDarkMode 
                      ? 'bg-gray-800 hover:bg-gray-700' 
                      : 'bg-white hover:bg-gray-50'
                  } shadow-lg hover:shadow-xl`}
                >
                  <div className="w-12 h-12 bg-[#0F96AE] rounded-lg flex items-center justify-center mr-4">
                    <Linkedin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className={`font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      LinkedIn
                    </p>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      /in/imayagmb/
                    </p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Imayagmb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center p-4 rounded-lg transition-all duration-300 hover:scale-105 ${
                    isDarkMode 
                      ? 'bg-gray-800 hover:bg-gray-700' 
                      : 'bg-white hover:bg-gray-50'
                  } shadow-lg hover:shadow-xl`}
                >
                  <div className="w-12 h-12 bg-[#0F96AE] rounded-lg flex items-center justify-center mr-4">
                    <Github size={20} className="text-white" />
                  </div>
                  <div>
                    <p className={`font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      GitHub
                    </p>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      /Imayagmb
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contato  */}
            <div className={`p-8 rounded-lg ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Vamos Trabalhar Juntos?
              </h3>
              
              <p className={`text-lg mb-8 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Estou sempre interessada em novos projetos e oportunidades de crescimento. 
                Se você tem uma ideia ou projeto em mente, vamos conversar!
              </p>

              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                }`}>
                  <h4 className={`font-semibold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Disponível para:
                  </h4>
                  <ul className={`space-y-1 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <li>• Desenvolvimento Front-end</li>
                    <li>• Desenvolvimento Back-end</li>
                    <li>• Projetos Full Stack</li>
                  </ul>
                </div>

                <a
                  href="mailto:imayagmb@gmail.com"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#0F96AE] text-white rounded-lg hover:bg-[#0d7a94] transition-colors font-semibold"
                >
                  <Send size={20} className="mr-2" />
                  Enviar Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;