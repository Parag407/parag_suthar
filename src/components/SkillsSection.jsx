import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: '⚡',
    skills: [
      { name: 'Python', level: 90, accent: true },
      { name: 'JavaScript', level: 88, accent: true },
      { name: 'React JS', level: 85, accent: true },
      { name: 'Node.js', level: 82, accent: true },
      { name: 'Express.js', level: 78 },
      { name: 'Django', level: 75 },
      { name: 'HTML5/CSS3', level: 92 },
      { name: 'C/C++', level: 65 },
      { name: 'Streamlit', level: 70 },
    ]
  },
  {
    title: 'Databases & Cloud',
    icon: '☁️',
    skills: [
      { name: 'MongoDB', level: 82, accent: true },
      { name: 'Supabase', level: 75 },
      { name: 'MySQL', level: 73 },
      { name: 'Vercel', level: 80 },
      { name: 'Google Cloud', level: 65 },
    ]
  },
  {
    title: 'Styling & Design',
    icon: '🎨',
    skills: [
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Bootstrap', level: 80 },
      { name: 'CSS3', level: 85 },
      { name: 'Figma', level: 75 },
      { name: 'Canva', level: 80 },
      { name: 'Wix Studio', level: 70 },
    ]
  },
  {
    title: 'AI & Automation',
    icon: '🤖',
    skills: [
      { name: 'OpenRouter API', level: 78 },
      { name: 'Vertex AI', level: 72 },
      { name: 'n8n', level: 75 },
      { name: 'UiPath', level: 68 },
      { name: 'ChatGPT/Claude', level: 85 },
      { name: 'DeepSeek', level: 70 },
    ]
  },
];

const SkillBar = ({ skill, animate }) => (
  <div className="mb-3 last:mb-0">
    <div className="flex justify-between items-center mb-1.5">
      <span className={`text-sm font-medium ${skill.accent ? 'text-knight-red' : 'text-knight-gray-faint'}`}>
        {skill.name}
      </span>
      <span className="text-knight-gray-muted text-xs font-mono">{skill.level}%</span>
    </div>
    <div className="h-1 bg-knight-black-5 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-1000 ease-out ${skill.accent ? 'bg-gradient-to-r from-knight-red-deep to-knight-red' : 'bg-gradient-to-r from-knight-gray to-knight-gray-light'}`}
        style={{ 
          width: animate ? `${skill.level}%` : '0%',
          boxShadow: skill.accent ? '0 0 8px rgba(192, 57, 43, 0.5)' : 'none'
        }}
      />
    </div>
  </div>
);

const techBadges = [
  'Python', 'JavaScript', 'React', 'Node.js', 'Express.js', 'Django',
  'MongoDB', 'Supabase', 'MySQL', 'Tailwind CSS', 'Figma',
  'n8n', 'UiPath', 'Vercel', 'GCP', 'Git', 'VS Code',
];

const SkillsSection = () => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target === ref.current) {
              setTimeout(() => setAnimate(true), 300);
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = ref.current?.querySelectorAll('.reveal');
    elements?.forEach(el => observer.observe(el));
    if (ref.current) observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="relative py-16 lg:py-28 overflow-hidden" ref={ref}>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-knight-red-muted/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="text-knight-red font-mono text-sm mb-2">// Technical Arsenal</p>
          <h2 className="font-outfit font-black text-3xl sm:text-4xl lg:text-5xl text-knight-white mb-4">
            Skills & <span className="text-knight-red">Expertise</span>
          </h2>
          <div className="h-px bg-gradient-to-r from-knight-red via-knight-red/30 to-transparent w-48" />
        </div>

        {/* Category tabs */}
        <div className="reveal flex gap-2 flex-wrap mb-8">
          {skillCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(i)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-sm text-xs sm:text-sm font-outfit font-medium transition-all duration-200 ${
                activeCategory === i
                  ? 'bg-knight-red text-white shadow-[0_0_15px_rgba(192,57,43,0.4)]'
                  : 'border border-knight-gray/30 text-knight-gray-muted hover:border-knight-red/50 hover:text-knight-red'
              }`}
            >
              <span className="mr-1">{cat.icon}</span> {cat.title}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="reveal grid lg:grid-cols-2 gap-6 mb-12">
          <div className="knight-card p-6 rounded-sm">
            <h3 className="font-outfit font-bold text-knight-white text-sm mb-5 flex items-center gap-2">
              <span>{skillCategories[activeCategory].icon}</span>
              {skillCategories[activeCategory].title}
            </h3>
            {skillCategories[activeCategory].skills.slice(0, Math.ceil(skillCategories[activeCategory].skills.length / 2)).map((skill, i) => (
              <SkillBar key={i} skill={skill} animate={animate} />
            ))}
          </div>
          <div className="knight-card p-6 rounded-sm">
            <h3 className="font-outfit font-bold text-knight-white text-sm mb-5 flex items-center gap-2">
              <span className="text-knight-red font-mono text-xs">{'>'}</span>
              Advanced Skills
            </h3>
            {skillCategories[activeCategory].skills.slice(Math.ceil(skillCategories[activeCategory].skills.length / 2)).map((skill, i) => (
              <SkillBar key={i} skill={skill} animate={animate} />
            ))}
          </div>
        </div>

        {/* Tech badge cloud */}
        <div className="reveal">
          <p className="text-knight-gray-muted text-sm font-mono mb-4">// All Technologies</p>
          <div className="flex flex-wrap gap-2">
            {techBadges.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-knight-black-3 border border-knight-gray/20 text-knight-gray-faint text-xs font-mono rounded-sm hover:border-knight-red/50 hover:text-knight-red hover:bg-knight-red/5 transition-all duration-200 cursor-default"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications row */}
        <div className="reveal mt-12">
          <h3 className="font-outfit font-bold text-knight-white mb-6 flex items-center gap-3">
            <span className="text-knight-red">📜</span>
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Google Cloud: Prompt Design in Vertex AI', org: 'Machine Learning & AI Skill Badge', year: '2024' },
              { name: 'Fintech Certificate Program 2023–24', org: 'Finlabs', year: '2024' },
              { name: 'Python Programming', org: 'Reliance Foundation Skilling Academy', year: '2023' },
              { name: 'NodeJS & Express JS Bootcamp', org: 'Devtown — Instagram Auth Clone', year: '2024' },
              { name: 'HTML Bootcamp — Hotstar Clone', org: 'Devtown', year: '2023' },
              { name: 'UX Design — Workshop B87', org: 'UX Workshop Certification', year: '2024' },
            ].map((cert, i) => (
              <div key={i} className="knight-card p-4 rounded-sm group">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-knight-red/10 rounded-sm border border-knight-red/20 flex-shrink-0 group-hover:bg-knight-red/20 transition-colors">
                    <svg className="w-4 h-4 text-knight-red" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-knight-white text-xs font-semibold font-outfit leading-snug mb-1">{cert.name}</p>
                    <p className="text-knight-gray-muted text-xs">{cert.org}</p>
                    <p className="text-knight-red/60 text-xs font-mono mt-1">{cert.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
