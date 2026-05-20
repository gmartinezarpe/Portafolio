import { ArrowUp, Terminal } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Logo / Tech Brand */}
        <div className="flex items-center gap-2 text-slate-400">
          <Terminal className="h-5 w-5 text-indigo-400" />
          <span className="text-sm font-semibold tracking-tight">
            gmartinezarpe <span className="text-slate-600">|</span> {currentYear}
          </span>
        </div>

        {/* Copyright */}
        <div className="text-slate-500 text-xs sm:text-sm text-center sm:text-left">
          &copy; {currentYear} Gerardo Martínez. Todos los derechos reservados. Desarrollado con React y Tailwind.
        </div>

        {/* Back to top button */}
        <div>
          <a
            href="#inicio"
            className="inline-flex items-center justify-center p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-all duration-200"
            title="Volver arriba"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}
