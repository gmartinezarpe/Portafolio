import { Award, BookOpen, ShieldCheck } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Award className="h-6 w-6 text-indigo-400" />,
      title: 'Enfoque Fullstack',
      description: 'Dominio de arquitecturas frontend responsivas y backends robustos conectados a bases de datos escalables.',
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-indigo-400" />,
      title: 'Código Limpio',
      description: 'Escritura de código estructurado, TypeScript tipado, mejores prácticas y facil mantenimiento.',
    },
    {
      icon: <BookOpen className="h-6 w-6 text-indigo-400" />,
      title: 'Integración de APIs',
      description: 'Experiencia integrando servicios externos como Google Calendar APIs, pasarelas de pago, correo SMTP y generación de códigos QR.',
    },
  ];

  return (
    <section id="sobre-mi" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Sobre Mí
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Conoce mi trayectoria, mi filosofía de desarrollo y lo que me impulsa a crear software de calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & BIO */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Creando soluciones digitales eficientes y escalables
            </h3>
            
            <p className="text-slate-300 leading-relaxed">
              Hola, soy Gerardo Martínez. Mi pasión por la programación nació de la curiosidad por resolver problemas complejos a través de líneas de código. Me enfoco en desarrollar aplicaciones web que no solo sean visualmente atractivas, sino también rápidas, seguras y altamente funcionales.
            </p>
            
            <p className="text-slate-300 leading-relaxed">
              Recientemente he desarrollado sistemas complejos como una plataforma completa de reserva de citas con sincronización de **Google Calendar en tiempo real**, notificaciones automáticas por correo electrónico mediante servidores SMTP y generación dinámica de códigos QR para la verificación presencial.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <div className="flex-1 bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center gap-3">
                <div className="text-3xl font-extrabold text-indigo-400">100%</div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Compromiso en cada proyecto</div>
              </div>
              <div className="flex-1 bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center gap-3">
                <div className="text-3xl font-extrabold text-purple-400">Clean</div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Código limpio y escalable</div>
              </div>
            </div>
          </div>

          {/* Right Column: Highlights Cards */}
          <div className="lg:col-span-5 space-y-4">
            {highlights.map((item, idx) => (
              <div key={idx} className="glass-light p-6 rounded-xl border border-slate-800/60 flex gap-4 hover:border-slate-700/80 transition-all duration-300">
                <div className="flex-shrink-0 bg-slate-950 p-3 rounded-xl border border-slate-800/80 self-start">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
