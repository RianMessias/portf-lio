import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MessageSquare, Menu, X, ChevronUp } from 'lucide-react';
import TypewriterComponent from './components/TypewriterComponent';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import StatCounter from './components/StatCounter';
import ContactForm from './components/ContactForm';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-950/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              RM
            </span>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {[
                  ['sobre', 'Sobre'],
                  ['experiencia', 'Experiência'],
                  ['habilidades', 'Habilidades'],
                  ['projetos', 'Projetos'],
                  ['contato', 'Contato']
                ].map(([id, label]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="hover:text-blue-500 px-3 py-2 transition-colors text-sm uppercase tracking-wider"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64' : 'max-h-0'} overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm">
            {[
              ['sobre', 'Sobre'],
              ['experiencia', 'Experiência'],
              ['habilidades', 'Habilidades'],
              ['projetos', 'Projetos'],
              ['contato', 'Contato']
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="block px-3 py-2 text-base hover:text-blue-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="sobre" className="min-h-screen flex items-center pt-16 pb-20 px-4 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-blue-500 text-lg font-medium mb-4">Desenvolvedor Web</h2>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <TypewriterComponent text="Olá, eu sou Rian Messias" />
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Especialista em criação de sites modernos e funcionais, com 2 anos de experiência transformando ideias em realidade digital.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/rian-messias-9b007b340/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-all hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/RianMessias"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all hover:scale-110"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Espaço de trabalho do desenvolvedor"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold inline-block bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Minha Experiência
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCounter target={12} label="Projetos Concluídos" />
            <StatCounter target={128} label="Horas de Desenvolvimento" />
            <StatCounter target={2} label="Anos de Experiência" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold inline-block bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Habilidades
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard
              title="HTML"
              description="Criação de estruturas de sites semânticas e acessíveis."
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            />
            <SkillCard
              title="CSS"
              description="Estilização avançada de layouts responsivos e modernos."
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            />
            <SkillCard
              title="JavaScript"
              description="Desenvolvimento de interatividade e manipulação dinâmica de conteúdo."
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold inline-block bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Projetos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard
              title="Landing Page"
              description="Uma landing page moderna e responsiva desenvolvida com HTML, CSS e JavaScript."
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              githubUrl="https://github.com/RianMessias/landing-page"
            />
            <ProjectCard
              title="Tela de Login"
              description="Interface de login moderna com validação e animações suaves."
              image="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              githubUrl="https://github.com/RianMessias/Tela-de-login"
            />
            <ProjectCard
              title="Link Bio"
              description="Página de links para redes sociais com design minimalista e elegante."
              image="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              githubUrl="https://github.com/RianMessias/linkbio"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold inline-block bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Entre em Contato
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ContactForm />
            <div className="flex flex-col justify-center space-y-6">
              <a
                href="https://wa.me/5511967064125"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all hover:scale-105"
              >
                <MessageSquare className="mr-2 group-hover:animate-bounce" />
                Conversar no WhatsApp
              </a>
              <a
                href="mailto:seu-email@exemplo.com"
                className="group inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105"
              >
                <Mail className="mr-2 group-hover:animate-bounce" />
                Enviar E-mail
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/80 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 Rian Messias Alves. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-110 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        aria-label="Voltar ao topo"
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
}

export default App;