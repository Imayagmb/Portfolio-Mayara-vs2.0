import React from 'react';
import { Code, Database, Cloud, Palette } from 'lucide-react';

interface SobreProps {
  isDarkMode: boolean;
}

const Sobre: React.FC<SobreProps> = ({ isDarkMode }) => {
  const skills = [
    {
      icon: <Code size={24} />,
      title: 'Frontend',
      items: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Angular', 'React']
    },
    {
      icon: <Database size={24} />,
      title: 'Backend',
      items: ['PHP (Laravel)', 'Node.js (iniciante)', 'MySQL', 'APIs REST']
    },
    {
      icon: <Cloud size={24} />,
      title: 'Data/Cloud',
      items: ['Python (Pandas/Numpy)', 'AWS Lambda', 'SQL']
    },
    {
      icon: <Palette size={24} />,
      title: 'Ferramentas',
      items: ['Git', 'GitHub', 'DBeaver', 'Postman', 'Figma']
    }
  ];

  const softSkills = [
    'Comunicação',
    'Organização',
    'Foco em soluções',
    'Trabalho em equipe',
    'Metodologia ágil'
  ];

  return (
    <section 
      id="sobre" 
      className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-[#0F96AE] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {}
          <div className="space-y-6">
            <p className={`text-lg leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Desenvolvedora apaixonada por tecnologia, formada em Análise e Desenvolvimento de Sistemas. 
              Tenho experiência em desenvolvimento full stack, com foco em front-end usando Angular e React, 
              além de back-end com PHP, SQL e integração de sistemas.
            </p>
            <p className={`text-lg leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Participei de projetos reais e estágios em ambientes colaborativos e ágeis, 
              unindo criatividade e lógica para entregar soluções eficientes.
            </p>

            {}
            <div className={`p-6 rounded-lg ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <h3 className={`text-xl font-semibold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Formação Acadêmica
              </h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <strong>UNISUAM</strong> – Análise e Desenvolvimento de Sistemas
              </p>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Conclusão: 2025
              </p>
            </div>

            {}
            <div>
              <h3 className={`text-xl font-semibold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Habilidades Comportamentais 
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm ${
                      isDarkMode 
                        ? 'bg-[#0F96AE] text-white' 
                        : 'bg-[#0F96AE] text-white'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Habilidades técnicas */}
          <div className="space-y-6">
            <h3 className={`text-2xl font-semibold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Habilidades Técnicas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg transition-all duration-300 hover:scale-105 ${
                    isDarkMode 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  } shadow-lg hover:shadow-xl`}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-[#0F96AE] mr-3">
                      {skill.icon}
                    </div>
                    <h4 className={`text-lg font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {skill.title}
                    </h4>
                  </div>
                  <ul className={`space-y-1 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <span className="w-2 h-2 bg-[#0F96AE] rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;