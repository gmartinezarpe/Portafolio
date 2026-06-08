import { Layers, Server, Database, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layers className="h-6 w-6 text-indigo-400" />,
      skills: [
        { name: 'React.js', level: 'Intermedio-Avanzado' },
        { name: 'TypeScript', level: 'Intermedio' },
        { name: 'Tailwind CSS', level: 'Avanzado' },
        { name: 'Vite', level: 'Avanzado' },
        { name: 'Ant Design', level: 'Intermedio-Avanzado' },
        { name: 'HTML5 & CSS3', level: 'Avanzado' },
        { name: 'JavaScript (ES6+)', level: 'Avanzado' },
      ],
    },
    {
      title: 'Backend Development',
      icon: <Server className="h-6 w-6 text-purple-400" />,
      skills: [
        { name: 'Node.js', level: 'Intermedio-Avanzado' },
        { name: 'Express.js', level: 'Intermedio-Avanzado' },
        { name: 'RESTful APIs', level: 'Avanzado' },
        { name: 'Nodemailer / SMTP', level: 'Intermedio-Avanzado' },
        { name: 'Google APIs (Calendar)', level: 'Intermedio' },
        { name: 'JWT Auth', level: 'Intermedio-Avanzado' },
      ],
    },
    {
      title: 'Bases de Datos',
      icon: <Database className="h-6 w-6 text-pink-400" />,
      skills: [
        { name: 'MongoDB', level: 'Intermedio-Avanzado' },
        { name: 'Mongoose (ODM)', level: 'Intermedio-Avanzado' },
        { name: 'MongoDB Atlas', level: 'Intermedio' },
        { name: 'MySQL', level: 'Intermedio' },
      ],
    },
    {
      title: 'Herramientas & DevOps',
      icon: <Wrench className="h-6 w-6 text-emerald-400" />,
      skills: [
        { name: 'Git & GitHub', level: 'Avanzado' },
        { name: 'npm / pnpm', level: 'Avanzado' },
        { name: 'Postman', level: 'Avanzado' },
        { name: 'VS Code', level: 'Avanzado' },
      ],
    },
  ];

  return (
    <section id="habilidades" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Mis Habilidades
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            El conjunto de herramientas y tecnologías que utilizo para dar vida a las ideas y construir aplicaciones completas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-2xl hover:border-slate-700/80 hover:bg-slate-900/80 transition-all duration-300 shadow-md group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex flex-col px-3 py-2 bg-slate-950 rounded-xl border border-slate-800/80 hover:border-indigo-500/30 hover:bg-slate-950/40 transition-all duration-200"
                  >
                    <span className="text-white text-sm font-semibold">{skill.name}</span>
                    <span className="text-[10px] text-slate-500 font-medium tracking-wide uppercase mt-0.5">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
