import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienciaProps {
  isDarkMode: boolean;
}

const Experiencia: React.FC<ExperienciaProps> = ({ isDarkMode }) => {
  const experiencias = [
    {
      company: 'Casulo Tecnológico',
      position: 'Projeto em React',
      period: 'jan/2025 – atual',
      location: 'Remoto',
      description: [
        'Desenvolvimento em React',
        'Participação em projeto colaborativo com metodologia ágil',
        'Trilha de aprendizagem Alura'
      ],
      isActive: true
    },
    {
      company: 'Compass UOL',
      position: 'Estágio em AWS Cloud Data Engineering',
      period: 'dez/2024 – fev/2025',
      location: 'Remoto',
      description: [
        'ETL e análise de dados com Python (Pandas, Numpy)',
        'SQL avançado',
        'Modelagem de dados e uso de serviços AWS como Lambda',
        'Trilha de aprendizagem Udemy'
      ],
      isActive: false
    },
    {
      company: 'UNISUAM',
      position: 'Estágio em Sistemas da Informação',
      period: 'nov/2024 – jul/2025',
      location: 'Remoto',
      description: [
        'Desenvolvimento e manutenção de APIs em PHP (Laravel)',
        'Integração com Angular',
        'Testes de interface e correção de bugs',
        'Consultas SQL e modelagem de banco de dados'
      ],
      isActive: false
    }
  ];

  return (
    <section 
      id="experiencia" 
      className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Experiência Profissional
          </h2>
          <div className="w-24 h-1 bg-[#0F96AE] mx-auto mb-8"></div>
        </div>

        <div className="relative">
          {/* Linha do tempo */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#0F96AE] hidden md:block"></div>
          
          <div className="space-y-8">
            {experiencias.map((exp, index) => (
              <div key={index} className="relative">
                {/* Marcador da linha do tempo */}
                <div className="absolute left-6 w-4 h-4 bg-[#0F96AE] rounded-full hidden md:block"></div>
                
                <div className="md:ml-16">
                  <div className={`p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${
                    isDarkMode ? 'bg-gray-800' : 'bg-white'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className={`text-xl font-bold mb-2 ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {exp.position}
                        </h3>
                        <p className="text-[#0F96AE] font-semibold text-lg">
                          {exp.company}
                        </p>
                      </div>
                      {exp.isActive && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800 mt-2 sm:mt-0">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          Atual
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center mb-4 space-y-2 sm:space-y-0 sm:space-x-4">
                      <div className="flex items-center">
                        <Calendar size={16} className={`mr-2 ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`} />
                        <span className={`text-sm ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {exp.period}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className={`mr-2 ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`} />
                        <span className={`text-sm ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    
                    <ul className={`space-y-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-[#0F96AE] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;