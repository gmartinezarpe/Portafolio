import { ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-slate-950">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs sm:text-sm mb-6 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
          Disponible para nuevos proyectos
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
            Diseño y Desarrollo
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500">
            Aplicaciones Web Fullstack
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-400 mb-10 leading-relaxed">
          Soy Gerardo Martínez, un desarrollador de software apasionado por crear experiencias digitales de alta calidad, robustas y atractivas. Especializado en el ecosistema **MERN (MongoDB, Express, React, Node.js)**.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#proyectos"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 transition-all duration-200 group"
          >
            Ver Proyectos
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-slate-300 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-slate-800 hover:border-slate-700 transition-all duration-200"
          >
            Contáctame
          </a>
          <a
            href={`${import.meta.env.BASE_URL}CV-Gerardo-Martinez.pdf`}
            download
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 transition-all duration-200"
          >
            Descargar CV
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-5 text-slate-400">
          <a
            href="https://github.com/gmartinezarpe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white p-2 rounded-lg bg-slate-900 border border-slate-850 hover:border-slate-700 transition-all duration-200"
            title="GitHub"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/gerardo-martinez-arpe/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white p-2 rounded-lg bg-slate-900 border border-slate-850 hover:border-slate-700 transition-all duration-200"
            title="LinkedIn"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href="mailto:gmartinezarpe@gmail.com"
            className="hover:text-white p-2 rounded-lg bg-slate-900 border border-slate-850 hover:border-slate-700 transition-all duration-200"
            title="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-slate-900">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V30.27C1124.4,19,1062.89,113.38,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
}
