import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

interface ProjetosProps {
  isDarkMode: boolean;
}

const Projetos: React.FC<ProjetosProps> = ({ isDarkMode }) => {
  const projetos = [
    {
      title: 'Casulo Tecnológico vs 2.0',
      description: 'Sistema web desenvolvido com HTML, CSS e JavaScript para a gestão de cursos, alunos e professores. O projeto faz parte de uma iniciativa voltada para a formação de novos talentos em tecnologia, utilizando práticas modernas de desenvolvimento e foco em aplicações reais.',
      technologies: ['HMLT', 'CSS', 'JavaScript'],
      demoUrl: 'https://casulo-tech.vercel.app/',
      githubUrl: 'https://github.com/Imayagmb/casulo-tec',
      image: 'https://i.postimg.cc/GhgdftLF/Captura-de-tela-2025-07-24-200951.png'
    },
    {
      title: 'OnPlay',
      description: 'Site promocional desenvolvido com HTML e CSS, focado na apresentação de planos de streaming. O projeto destaca os benefícios do Combo+ e do Plano Básico, utilizando um layout visualmente atraente e organizado para facilitar a comparação e a escolha do plano ideal pelos usuários.',
      technologies: ['HTML', 'CSS'],
      demoUrl: 'https://on-play.vercel.app/',
      githubUrl: 'https://github.com/Imayagmb/OnPlay',
      image: 'https://i.postimg.cc/7Y9dsWNj/OnPlay.png'
    },
    {
      title: 'Landing Page – C&M Lanches',
      description: 'Projeto pessoal de uma landing page informativa desenvolvida com HTML e CSS, criada para divulgar uma lanchonete fictícia. O objetivo foi apresentar o cardápio, localização e canais de contato de forma clara, atrativa e acessível aos usuários.',
      technologies: ['HTML', 'CSS'],
      demoUrl: 'https://landing-page-lanchonete.vercel.app/#',
      githubUrl: 'https://github.com/Imayagmb/Landing-Page-Lanchonete?tab=readme-ov-file',
      image: 'https://i.postimg.cc/hjScL2cn/image.png'
    },
     {
      title: 'Portfolio- vs 1.0',
      description: 'Meu primeiro portfólio web, desenvolvido com HTML e CSS, com foco em um design moderno e responsivo. O site foi criado para apresentar meus projetos, habilidades e experiências de forma clara, organizada e visualmente atrativa, proporcionando uma boa navegação em diferentes dispositivos.',
      technologies: ['HTML', 'CSS'],
      demoUrl: 'https://portfolio-mayara.vercel.app/',
      githubUrl: 'https://github.com/Imayagmb/Portfolio-Mayara',
      image: 'https://i.postimg.cc/P58cP1GM/Portfolio-Web.png'
    },
    {
      title: 'Modavo – CPaaS',
      description: 'Meu primeiro contato prático com o desenvolvimento front-end,por meio de um site institucional criado com HTML, CSS e JavaScript. O projeto apresenta uma empresa fictícia do setor de telefonia e telecomunicações, com um conjunto de páginas interligadas que destacam seus principais serviços.',
      technologies: ['HTML', 'JavaScript', 'CSS'],
      demoUrl: 'https://modavo-netfon.vercel.app/',
      githubUrl: 'https://github.com/Imayagmb/Modavo-netfon?tab=readme-ov-file',
      image: 'https://i.postimg.cc/YS0JMTrh/netfon.png'
    },
    {
      title: 'Diesel+',
      description: 'Projeto criado com HTML, CSS e JavaScript, focado em apresentar serviços e produtos com clareza. Layout moderno, navegação intuitiva e conteúdo organizado para melhor experiência do usuário. Trabalho realizado como parte de um projeto acadêmico em equipe. Foco em boas práticas de front-end e comunicação visual eficaz.',
      technologies: ['HTML', 'CSS', 'JS', 'Bootstrap'],
      demoUrl: 'https://diesel-mecanica.vercel.app/index.html',
      githubUrl: 'https://github.com/Imayagmb/DieselMecanica',
      image: 'https://i.postimg.cc/63m6BdxN/mecanica-diesel.png'
    },
    {
      title: 'Casulo Tecnológico vs 1.0',
      description: 'Primeira versão do projeto desenvolvida em HTML, CSS e JavaScript para apresentar serviços e produtos de forma clara. Ainda necessita de melhorias visuais e ajustes de design para uma experiência mais envolvente. O layout simples e a navegação intuitiva refletem um projeto pessoal criado por mim e por Ramon Barbosa, com foco em boas práticas de front-end e comunicação visual eficiente.',
      technologies: ['HTML', 'CSS', 'JS'],
      demoUrl: 'https://casulo-hrhmg9u4p-mayaras-projects-02ae6b93.vercel.app/',
      githubUrl: 'https://github.com/Imayagmb/casulo',
      image: 'https://i.postimg.cc/Mp7qQVtF/Casulo-1-0.png'
    },
    {
      title: 'Vida plena',
      description: 'Aplicativo web desenvolvido para ajudar a manter uma rotina saudável. Oferece controle de metas diárias, acompanhamento de hábitos, dicas de alimentação, histórico médico, contatos de emergência, tarefas, finanças pessoais e opções de personalização. Projeto focado em bem-estar e organização pessoal.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'React Icons / Lucide React', 'Vite'],
      demoUrl: 'https://vida-plena-react.vercel.app/',
      githubUrl: 'https://github.com/Imayagmb/VidaPlena-React',
      image: 'https://i.postimg.cc/J0Hyf8Bg/vidaplena.png'
    },
    {
      title: 'Landing Page –  Coca-Cola',
      description: 'Uma das primeiras páginas que desenvolvi no início da minha jornada com HTML e CSS. O projeto tem como objetivo apresentar a marca Coca-Cola de forma visualmente impactante, com destaque para a tipografia, cores e imagens. Embora funcional no desktop, esta versão não é responsiva e carece de ajustes para adaptação em diferentes dispositivos. Foi um exercício importante para treinar estruturação de layout, uso de cores e organização de conteúdo.',
      technologies: ['HTML', 'CSS'],
      demoUrl: 'https://landing-page-coca-cola-alpha.vercel.app/#',
      githubUrl: 'https://github.com/Imayagmb/Landing-Page-Coca-Cola',
      image: 'https://i.postimg.cc/pTGqccV1/Landing-page-Coca-cola.png'
    }
  ];

  return (
    <section 
      id="projetos" 
      className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Projetos
          </h2>
          <div className="w-24 h-1 bg-[#0F96AE] mx-auto mb-8"></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Alguns dos projetos que desenvolvi, mostrando minhas habilidades em diferentes tecnologias e frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((projeto, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                isDarkMode ? 'bg-gray-700' : 'bg-white'
              }`}
            >
              {/* Projeto Img */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={projeto.image}
                  alt={projeto.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={projeto.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#0F96AE] rounded-full text-white hover:bg-[#0d7a94] transition-colors"
                      title="Ver projeto"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={projeto.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors"
                      title="Ver código"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Projeto Info */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {projeto.title}
                </h3>
                
                <p className={`text-sm mb-4 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                } leading-relaxed`}>
                  {projeto.description}
                </p>

                {/* Tecnologias */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {projeto.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          isDarkMode 
                            ? 'bg-gray-600 text-gray-300' 
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Acao Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={projeto.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-[#0F96AE] text-white rounded-lg hover:bg-[#0d7a94] transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Ver Projeto
                  </a>
                  <a
                    href={projeto.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                      isDarkMode 
                        ? 'bg-gray-600 text-white hover:bg-gray-500' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <Code size={16} className="mr-2" />
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projetos;