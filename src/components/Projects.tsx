import { ExternalLink, Calendar, Mail, QrCode, Sparkles, CheckCircle } from 'lucide-react';
import { GithubIcon } from './icons';

export default function Projects() {
  const projects = [
    {
      title: 'Aplicación de Reserva de Citas Fullstack',
      description: 'Plataforma web profesional para la gestión y reserva de citas médicas/empresariales. Cuenta con un panel de control interactivo para administradores, creación, edición y eliminación de citas, y validaciones de horarios.',
      featured: true,
      tags: ['React', 'Node.js', 'MongoDB', 'Ant Design', 'TypeScript', 'Express'],
      features: [
        'Sincronización en tiempo real con Google Calendar API.',
        'Notificaciones de confirmación por email automáticas usando Nodemailer SMTP.',
        'Generación automática de códigos QR dinámicos para control presencial.',
        'Edición completa de citas con actualización instantánea en base de datos y Google Calendar.',
        'Dashboard interactivo con resúmenes estadísticos.'
      ],
      github: 'https://github.com/gmartinezarpe/Reserva-citas-fullstack',
      demo: '#', // Placeholder for now, can be updated later
    },
    {
      title: 'API REST de Gestión de Tareas',
      description: 'API RESTful para gestión de usuarios y sus tareas, desarrollada en TypeScript con Express y Prisma sobre MySQL. Incluye autenticación, validaciones, controladores tipados y preparación para despliegue (Heroku / CI).',
      featured: false,
      tags: ['TypeScript', 'Node.js', 'Express', 'Prisma', 'MySQL', 'JWT'],
      features: [
        'Endpoints CRUD para usuarios y tareas con validaciones y gestión de errores.',
        'Autenticación y autorización basada en JWT para rutas protegidas.',
        'Prisma ORM para modelado, migraciones y consultas tipadas.',
        'Estructura modular (controllers, services, routes) y middlewares reutilizables.',
        'Configuración y scripts para despliegue en Heroku y workflows de CI en GitHub Actions.'
      ],
      github: 'https://github.com/gmartinezarpe/api-user-task',
      demo: '#',
    },
    {
      title: 'Portafolio Web Profesional Interactivo',
      description: 'Este mismo sitio web. Diseñado para ofrecer una experiencia estética e interactiva de alto nivel que demuestre mis habilidades front-end, optimizado para carga rápida y despliegue continuo.',
      featured: false,
      tags: ['React', 'Vite', 'Tailwind CSS', 'TypeScript', 'GitHub Pages'],
      features: [
        'Totalmente responsivo y adaptado para dispositivos móviles.',
        'Estética moderna en modo oscuro ("glassmorphism").',
        'Despliegue automatizado continuo a través de GitHub Pages.'
      ],
      github: 'https://github.com/gmartinezarpe/Portafolio',
      demo: 'https://gmartinezarpe.github.io/Portafolio/',
    }
  ];

  return (
    <section id="proyectos" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Mis Proyectos
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Una muestra de las aplicaciones reales que he construido, combinando ingenio, diseño y una sólida arquitectura técnica.
          </p>
        </div>

        <div className="space-y-12">
          {/* Featured Project */}
          {projects.filter(p => p.featured).map((project, idx) => (
            <div key={idx} className="bg-slate-950 rounded-3xl border border-slate-800 hover:border-indigo-500/30 overflow-hidden transition-all duration-300 shadow-2xl p-6 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative group">
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1.5 animate-pulse">
                <Sparkles className="h-3.5 w-3.5" />
                Proyecto Estrella
              </div>

              {/* Text side */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-3">Integraciones Clave:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-slate-400 text-sm mb-6">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1 rounded-lg text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-slate-200 border border-slate-800 hover:border-slate-700 hover:text-white hover:bg-slate-850 rounded-xl text-sm font-semibold transition-colors duration-200"
                  >
                    <GithubIcon className="h-4 w-4" />
                    Ver Código
                  </a>
                </div>
              </div>

              {/* Showcase / Visual side */}
              <div className="lg:col-span-5 flex flex-col justify-center items-center bg-slate-900/50 rounded-2xl border border-slate-800/80 p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-purple-500/5 z-0"></div>
                <div className="relative z-10 w-full text-center space-y-6">
                  <div className="text-indigo-400 font-bold text-xs uppercase tracking-widest">Arquitectura del Sistema</div>
                  
                  {/* Visual blocks */}
                  <div className="flex flex-col gap-3 max-w-[280px] mx-auto text-xs font-semibold text-slate-300">
                    <div className="flex items-center justify-between p-3 bg-slate-950 border border-slate-800 rounded-xl">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-indigo-400" />
                        <span>Reserva de Citas</span>
                      </div>
                      <span className="text-[10px] text-green-500 uppercase bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">React</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-slate-950 border border-slate-800 rounded-xl">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-purple-400" />
                        <span>SMTP / Nodemailer</span>
                      </div>
                      <span className="text-[10px] text-green-500 uppercase bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">Backend</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-950 border border-slate-800 rounded-xl">
                      <div className="flex items-center gap-2">
                        <QrCode className="h-4 w-4 text-pink-400" />
                        <span>Generador de QR</span>
                      </div>
                      <span className="text-[10px] text-green-500 uppercase bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">MERN</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 leading-normal px-2">
                    Estructura desacoplada con API RESTful, enrutamiento seguro de Express y base de datos persistente en MongoDB Atlas.
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Grid of Other Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.filter(p => !p.featured).map((project, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800/80 rounded-2xl hover:border-slate-700 hover:bg-slate-900/40 p-6 flex flex-col justify-between transition-all duration-300 group">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-500 mb-6">
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <CheckCircle className="h-3 h-3 text-slate-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-slate-900 border border-slate-850 text-slate-400 px-2 py-0.5 rounded-md text-[11px] font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-800 hover:text-white rounded-lg text-xs font-semibold transition-colors duration-150"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      Código
                    </a>
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold transition-colors duration-150"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
