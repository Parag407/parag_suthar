import { useEffect, useRef } from 'react';

const useReveal = () => {
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = ref.current?.querySelectorAll('.reveal');
    elements?.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);
  
  return ref;
};

const AboutSection = () => {
  const ref = useReveal();

  const stats = [
    { label: 'CGPA Score', value: '9.5', sub: 'BSc IT — Outstanding', icon: '🎓' },
    { label: 'HSC Score', value: '90%', sub: 'Shankar Narayan College', icon: '📚' },
    { label: 'Experience', value: '1+ yr', sub: 'Full Stack Intern', icon: '💼' },
    { label: 'Projects', value: '6+', sub: 'Production-ready apps', icon: '🚀' },
  ];

  const highlights = [
    { label: 'Location', value: 'Bhayander (East), Mumbai — 401105', icon: '📍' },
    { label: 'Phone', value: '+91 9867618804', icon: '📞' },
    { label: 'Email', value: 'paragsuthar.work@gmail.com', icon: '✉️' },
    { label: 'Education', value: 'BSc Information Technology', icon: '🎓' },
    { label: 'College', value: 'K.P.B. Hinduja College, Mumbai University', icon: '🏛️' },
  ];

  return (
    <section id="about" className="relative py-16 lg:py-28 overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-knight-red/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-knight-red font-mono text-sm">{'<'}</span>
            <span className="text-knight-gray-muted font-mono text-sm">section</span>
            <span className="text-knight-red font-mono text-sm">id</span>
            <span className="text-knight-gray-muted font-mono text-sm">= "about"{'>'}</span>
          </div>
          <h2 className="font-outfit font-black text-3xl sm:text-4xl lg:text-5xl text-knight-white mb-3">
            About <span className="text-knight-red">Me</span>
          </h2>
          <div className="flex items-center gap-4">
            <div className="h-px bg-gradient-to-r from-knight-red to-transparent w-32" />
            <span className="text-knight-gray-muted text-sm font-mono">profile.json</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Text */}
          <div className="space-y-6 reveal">
            {/* Code-style block */}
            <div className="bg-knight-black-3/50 border border-knight-red/20 rounded-sm p-4 font-mono text-sm overflow-x-auto">
              <div className="text-knight-gray-muted mb-2">
                <span className="text-knight-red">const</span>
                <span className="text-knight-white"> developer</span>
                <span className="text-knight-gray-muted"> = {'{'}</span>
              </div>
              <div className="pl-4 space-y-1">
                <div><span className="text-knight-red-bright">name</span><span className="text-knight-gray-muted">: </span><span className="text-green-400">"Parag Kumar Suthar"</span><span className="text-knight-gray-muted">,</span></div>
                <div><span className="text-knight-red-bright">role</span><span className="text-knight-gray-muted">: </span><span className="text-green-400">"Full Stack Developer"</span><span className="text-knight-gray-muted">,</span></div>
                <div><span className="text-knight-red-bright">cgpa</span><span className="text-knight-gray-muted">: </span><span className="text-yellow-400">9.5</span><span className="text-knight-gray-muted">,</span></div>
                <div><span className="text-knight-red-bright">passion</span><span className="text-knight-gray-muted">: </span><span className="text-green-400">"Building the future"</span></div>
              </div>
              <div className="text-knight-gray-muted">{'}'}</div>
            </div>

            <p className="text-knight-gray-faint font-inter text-base leading-relaxed">
              I'm a motivated <span className="text-knight-white font-medium">BSc IT graduate</span> (CGPA 9.5) from Hinduja College 
              specializing in full-stack web development and Python programming. I thrive at the intersection 
              of clean code and beautiful design.
            </p>
            <p className="text-knight-gray-faint font-inter text-base leading-relaxed">
              Experienced in building <span className="text-knight-red font-medium">scalable web applications</span>, leading development teams, 
              and integrating AI solutions. From React frontends to Node.js backends, I craft end-to-end solutions 
              that deliver real value.
            </p>
            <p className="text-knight-gray-faint font-inter text-base leading-relaxed">
              As <span className="text-knight-white font-medium">E-Cell President</span>, I organized 'UNICORN'26' — an intercollegiate entrepreneurship fest — 
              managing a 30+ member team, demonstrating my leadership and organizational skills alongside technical work.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-1 gap-3 pt-2">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <span className="text-base">{item.icon}</span>
                  <span className="text-knight-gray-muted font-medium w-24">{item.label}:</span>
                  <span className="text-knight-gray-faint">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-4 reveal">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="knight-card p-6 rounded-sm group cursor-default"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="text-2xl mb-3">{stat.icon}</div>
                <div className="font-outfit font-black text-3xl text-knight-red mb-1 group-hover:text-knight-red-bright transition-colors">
                  {stat.value}
                </div>
                <div className="font-outfit font-semibold text-sm text-knight-white mb-1">{stat.label}</div>
                <div className="font-inter text-xs text-knight-gray-muted">{stat.sub}</div>
              </div>
            ))}

            {/* Languages */}
            <div className="col-span-2 knight-card p-5 rounded-sm">
              <h4 className="font-outfit font-semibold text-sm text-knight-white mb-4">Languages</h4>
              <div className="grid grid-cols-2 gap-3">
                {[{ name: 'English', level: 'Native', dots: 5 }, { name: 'Hindi', level: 'Proficient', dots: 4 }].map(lang => (
                  <div key={lang.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-knight-gray-faint text-sm font-medium">{lang.name}</span>
                      <span className="text-knight-gray-muted text-xs">{lang.level}</span>
                    </div>
                    <div className="flex gap-1.5">
                      {[...Array(5)].map((_, j) => (
                        <div
                          key={j}
                          className={`w-4 h-1.5 rounded-full ${j < lang.dots ? 'bg-knight-red' : 'bg-knight-black-5'}`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interests row */}
        <div className="mt-12 reveal">
          <h4 className="font-outfit font-semibold text-knight-gray-muted text-sm mb-4">⚡ Interests & Hobbies</h4>
          <div className="flex flex-wrap gap-3">
            {['Drawing', 'Cricket', 'Badminton', 'Travelling', 'Entrepreneurship', 'UI/UX Design', 'AI/ML', 'Gaming'].map(interest => (
              <span key={interest} className="px-3 py-1.5 border border-knight-gray/30 text-knight-gray-faint text-sm rounded-sm hover:border-knight-red/50 hover:text-knight-red transition-all duration-200 cursor-default">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
