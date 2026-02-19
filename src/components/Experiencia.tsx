import React from "react";
import { Calendar, MapPin } from "lucide-react";

interface ExperienciaProps {
  isDarkMode: boolean;
}

const Experiencia: React.FC<ExperienciaProps> = ({ isDarkMode }) => {
  const experiencias = [
    {
      company: "Generation Brasil",
      position: "Desenvolvedora Full Stack JavaScript (Bootcamp- Aluno)",
      period: "jan/2026 – atual",
      location: "Remoto",
      description: [
        "Desenvolvimento Full Stack com JavaScript, TypeScript, React, Node.js e NestJS",
        "Controle de versionamento utilizando Git e GitHub (branches, commits e pull requests)",
        "Desenvolvimento de projetos colaborativos com metodologia ágil",
        "Formação intensiva em desenvolvimento web por meio de bootcamp",
      ],
      isActive: true,
    },
    {
      company: "Casulo Tecnológico",
      position: "Desenvolvedora FullStack (Estagiária)",
      period: "jan/2025 – atual",
      location: "Remoto",
      description: [
        "Desenvolvimento de aplicações com React, Next.js e Node.js",
        "Versionamento de código com Git e GitHub (branches, commits e pull requests)",
        "Atuação em projetos colaborativos com metodologias ágeis (Scrum/Kanban)",
        "Aprimoramento contínuo por meio de trilhas de aprendizagem em desenvolvimento web (Alura)",
      ],
      isActive: true,
    },
    {
      company: "UNISUAM",
      position:
        "Estagiária em Desenvolvimento Full Stack — Gerência de Projetos",
      period: "nov/2024 – jul/2025",
      location: "Remoto",
      description: [
        "Desenvolvimento e manutenção de APIs REST em PHP (Laravel)",
        "Integração entre front-end (Angular) e back-end",
        "Testes de interface, identificação e correção de bugs",
        "Criação de queries SQL e apoio na modelagem de banco de dados",
      ],
      isActive: false,
    },
    {
      company: "Compass UOL",
      position: "Estagiária em Engenharia de Dados em Nuvem (AWS)",
      period: "dez/2024 – fev/2025",
      location: "Remoto",
      description: [
        "Desenvolvimento de processos ETL e análise de dados com Python (Pandas e NumPy)",
        "Elaboração de consultas SQL para manipulação e análise de dados",
        "Modelagem de dados e utilização de serviços AWS, como AWS Lambda",
        "Aprimoramento técnico por meio de trilha de aprendizagem em Cloud e Dados",
      ],
      isActive: false,
    },
  ];

  return (
    <section
      id="experiencia"
      className={`py-20 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
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
                  <div
                    className={`p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${
                      isDarkMode ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3
                          className={`text-xl font-bold mb-2 ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
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
                        <Calendar
                          size={16}
                          className={`mr-2 ${
                            isDarkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {exp.period}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <MapPin
                          size={16}
                          className={`mr-2 ${
                            isDarkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul
                      className={`space-y-2 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
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
