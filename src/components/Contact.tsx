import { useState } from 'react';
import { Mail, Send, CheckCircle2, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contacto" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Hablemos
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente, buscas un desarrollador fullstack para tu equipo o simplemente quieres decir hola? ¡Me encantaría saber de ti!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Info cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-2">Información de Contacto</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Puedes contactarme directamente a través de cualquiera de los siguientes canales. Respondo activamente a todas las propuestas de desarrollo e invitaciones laborales.
              </p>
            </div>

            <div className="space-y-4 my-6">
              <div className="glass-light p-4 rounded-xl border border-slate-805 flex items-center gap-4">
                <div className="p-3 bg-slate-900 rounded-lg text-indigo-400 border border-slate-800">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Correo Electrónico</div>
                  <a href="mailto:gmartinezarpe@gmail.com" className="text-white hover:text-indigo-400 font-semibold text-sm transition-colors">
                    gmartinezarpe@gmail.com
                  </a>
                </div>
              </div>

              <div className="glass-light p-4 rounded-xl border border-slate-805 flex items-center gap-4">
                <div className="p-3 bg-slate-900 rounded-lg text-indigo-400 border border-slate-800">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Ubicación</div>
                  <div className="text-white font-semibold text-sm">
                    Remoto / Disponible globalmente
                  </div>
                </div>
              </div>
            </div>

            {/* Social card buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://www.linkedin.com/in/gmartinezarpe"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-light p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/30 hover:bg-slate-900/40 transition-all duration-300"
              >
                <LinkedinIcon className="h-6 w-6 text-indigo-400 mb-2" />
                <span className="text-xs font-semibold">LinkedIn</span>
              </a>
              
              <a
                href="https://github.com/gmartinezarpe"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-light p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/30 hover:bg-slate-900/40 transition-all duration-300"
              >
                <GithubIcon className="h-6 w-6 text-purple-400 mb-2" />
                <span className="text-xs font-semibold">GitHub</span>
              </a>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col justify-center">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-fade-in">
                <div className="inline-flex p-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full mb-2">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-white">¡Mensaje enviado con éxito!</h4>
                <p className="text-slate-400 text-sm max-w-sm mx-auto">
                  Gracias por escribirme. Me pondré en contacto contigo lo antes posible para conversar sobre tu propuesta.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-2">Envíame un mensaje</h3>
                
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Tu Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Juan Pérez"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl text-white text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Tu Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Ej. juan@correo.com"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl text-white text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cuéntame sobre tu proyecto..."
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl text-white text-sm outline-none resize-none transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl text-sm transition-colors group"
                >
                  <span>Enviar Mensaje</span>
                  <Send className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
