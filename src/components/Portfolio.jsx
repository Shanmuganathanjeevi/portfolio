import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Mail, Linkedin, Github, ExternalLink, Github as GithubIcon } from 'lucide-react';
import { loadProjects, loadArticles } from '../utils/dataLoader';

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [projects, setProjects] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Load projects and articles from data files
  useEffect(() => {
    const loadData = async () => {
      try {
        const projectsData = await loadProjects();
        const articlesData = await loadArticles();
        
        setProjects(projectsData);
        setArticles(articlesData);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    
    loadData();
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const experience = [
    {
      title: 'Senior Software Consultant',
      company: 'Opentext',
      duration: 'Aug-2022 - Present',
      achievements: [
        'Led end-to-end architectural decisions on enterprise AI-powered file manager',
        'Architected microservices using Fastify and Node.js with Kubernetes orchestration',
        'Designed and implemented scalable solutions leveraging Agentic AI patterns'
      ],
      technologies: ['Node.js', 'Fastify', 'React', 'Kubernetes', 'Agentic AI']
    },
    {
      title: 'Enterprise Software Architect',
      company: 'Cognizant Technology Solutions',
      duration: 'Jan-2022 - Aug-2022',
      achievements: [
        'Architected enterprise CMS solutions using OpenText TeamSite',
        'Optimized application performance resulting in 40% improvement in deployment times',
        'Mentored team of junior developers on enterprise software best practices'
      ],
      technologies: ['Java', 'XSLT', 'FTL', 'Apache', 'TeamSite']
    },
    {
      title: 'Full Stack Developer',
      company: 'Tata Consultancy Services',
      duration: 'Apr-2019 - Jan-2022',
      achievements: [
        'Built full-stack web applications with Java backend and JavaScript frontend',
        'Implemented search infrastructure using Apache Solr for large datasets',
        'Developed RESTful APIs and integrated third-party services'
      ],
      technologies: ['Java', 'JavaScript', 'Solr', 'Spring', 'Git']
    }
  ];

  const skills = {
    'Languages': ['Java', 'JavaScript', 'Python', 'XSLT', 'FTL'],
    'Frontend': ['React', 'HTML', 'CSS', 'Tailwind CSS'],
    'Backend': ['Node.js', 'Fastify', 'SpringBoot 3', 'Express'],
    'Infrastructure': ['Kubernetes', 'Docker', 'Apache', 'Git', 'SVN'],
    'Databases & Caching': ['Redis', 'Kafka', 'Solr'],
    'Architectures': ['Agentic AI', 'Microservices', 'REST APIs']
  };

  const techStackBadges = [
    { name: 'Java', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100' },
    { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100' },
    { name: 'React', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100' },
    { name: 'Node.js', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' },
    { name: 'Kubernetes', color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100' },
    { name: 'Python', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100' },
    { name: 'Docker', color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-100' },
    { name: 'Redis', color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100' },
    { name: 'Kafka', color: 'bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-100' },
    { name: 'SpringBoot', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' },
    { name: 'Solr', color: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100' },
    { name: 'Agentic AI', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100' }
  ];

  return (
    <div>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          background-color: #ffffff;
          color: #1a202c;
        }
        
        html.dark body {
          background-color: #0f172a;
          color: #f1f5f9;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        /* Scrollbar styling */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        
        html.dark ::-webkit-scrollbar-thumb {
          background: #475569;
        }
      `}
      </style>

      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
        <div className="container flex justify-between items-center h-20">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            SC
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {['home', 'experience', 'skills', 'projects', 'blog', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize text-sm font-medium transition-colors ${
                  activeSection === item
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Dark Mode Toggle + Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-gray-600" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} className="text-gray-600 dark:text-gray-400" />
              ) : (
                <Menu size={24} className="text-gray-600 dark:text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-gray-50 dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700">
            <div className="container py-4 flex flex-col gap-3">
              {['home', 'experience', 'skills', 'projects', 'blog', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
          <div className="container py-20">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                Software Consultant & Architect
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                7 years of expertise in enterprise software, cloud infrastructure, and web development
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
                Specializing in Java, React, Kubernetes, and enterprise AI solutions
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-white dark:bg-slate-900">
          <div className="container">
            <h2 className="text-4xl font-bold mb-16 text-gray-900 dark:text-white">Experience</h2>
            
            <div className="relative">
              {/* Timeline */}
              <div className="space-y-12">
                {experience.map((item, index) => (
                  <div key={index} className="relative pl-8 md:pl-12">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 w-4 h-4 bg-blue-600 rounded-full md:left-0"></div>
                    
                    {/* Timeline line */}
                    {index < experience.length - 1 && (
                      <div className="absolute left-2 top-6 w-0.5 h-32 bg-gray-300 dark:bg-slate-700 md:left-2"></div>
                    )}

                    {/* Content */}
                    <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                            {item.title}
                          </h3>
                          <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                            {item.company}
                          </p>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                          {item.duration}
                        </span>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-3 text-gray-700 dark:text-gray-300">
                            <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-800">
          <div className="container">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Technical Skills</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg">
              Proficient across a range of technologies spanning full-stack development, cloud infrastructure, and enterprise software
            </p>

            {/* Tech Stack Badges */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Technology Stack</h3>
              <div className="flex flex-wrap gap-3">
                {techStackBadges.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${tech.color} transition-transform hover:scale-105`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills by Category */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-gray-200 dark:border-slate-700"
                >
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {skillList.map((skill, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white dark:bg-slate-900">
          <div className="container">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg">
              Showcasing significant projects and technical case studies
            </p>

            {projects.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400">
                  Loading projects... or add project files to <code className="bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded">src/data/projects/</code>
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-gray-50 dark:bg-slate-800 rounded-lg overflow-hidden border border-gray-200 dark:border-slate-700 hover:shadow-lg dark:hover:shadow-slate-900 transition-shadow"
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-400 to-teal-400 dark:from-blue-900 dark:to-teal-900 flex items-center justify-center">
                      {project.image ? (
                        <img src={`/portfolio/images/projects/${project.image}`} alt={project.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white opacity-50">{project.id}</div>
                          <p className="text-white opacity-50 mt-2">Project Image</p>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs font-medium rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.link && (
                        <a href={project.link} target='_blank' rel='noopener noreferrer' className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                          Learn More <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-20 bg-gray-50 dark:bg-slate-800">
          <div className="container">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Blog & Insights</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg">
              Thoughts on software architecture, cloud infrastructure, and enterprise solutions
            </p>

            {articles.length === 0 ? (
              <div className="mt-12 p-8 bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-700 text-center">
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  📝 No articles yet. Add article files to <code className="bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded">src/data/articles/</code>
                </p>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 gap-8">
                  {articles.map((article) => (
                    <article
                      key={article.id}
                      className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-gray-200 dark:border-slate-700 hover:shadow-lg dark:hover:shadow-slate-900 transition-shadow"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                          article.status === 'published'
                            ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100'
                            : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100'
                        }`}>
                          {article.status === 'published' ? 'Published' : 'Coming Soon'}
                        </span>
                        {article.date && (
                          <span className="text-xs text-gray-500 dark:text-gray-400">{article.date}</span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {article.excerpt}
                      </p>
                      {article.tags && article.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {article.tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 text-xs font-medium rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-slate-900">
          <div className="container max-w-2xl">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white text-center">
              Let's Work Together
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-12 text-center text-lg">
              Interested in discussing your next project or opportunity? I'd love to hear from you.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Email */}
              <a
                href="mailto:shanmuganathanjeevi@gmail.com"
                className="flex items-center gap-4 p-6 bg-gray-50 dark:bg-slate-800 rounded-lg hover:shadow-lg dark:hover:shadow-slate-900 transition-all border border-gray-200 dark:border-slate-700"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Mail size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">shanmuganathanjeevi@gmail.com</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/shanmuganathanjeevi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-gray-50 dark:bg-slate-800 rounded-lg hover:shadow-lg dark:hover:shadow-slate-900 transition-all border border-gray-200 dark:border-slate-700"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Linkedin size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">View my profile</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-white py-12">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-2xl font-bold mb-4">SC</div>
                <p className="text-gray-400">Software Consultant & Aspiring Architect</p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {['Home', 'Experience', 'Skills', 'Projects', 'Blog', 'Contact'].map((link, i) => (
                    <li key={i}>
                      <button
                        onClick={() => scrollToSection(link.toLowerCase())}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Social</h4>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/shanmuganathanjeevi" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://github.com/shanmuganathanjeevi" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                  </a>
                  <a href="mailto:shanmuganathanjeevi@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>© 2026 Shanmuganathan. All rights reserved.</p>
              <button
                onClick={() => scrollToSection('home')}
                className="mt-4 text-white hover:text-gray-300 transition-colors font-medium"
              >
                ↑ Back to Top
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}