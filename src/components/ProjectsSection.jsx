import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    title: 'GyanCode',
    subtitle: 'Interactive Code Learning & Assessment Platform',
    period: '01/2025 – 05/2025',
    tech: ['React JS', 'Node JS', 'MongoDB Atlas', 'Express JS'],
    desc: 'Final year capstone project; full-stack platform for students and teachers with code editors, assessments, and real-time feedback. Led a team from requirement gathering through deployment.',
    highlights: [
      'Full-stack platform with live code editors',
      'Teacher-student assessment system',
      'Real-time feedback & team-led development',
    ],
    icon: '🎓',
    featured: true,
    color: '#C0392B',
  },
  {
    title: 'AI-Powered Code Editor',
    subtitle: 'Browser-based IDE with AI Intelligence',
    period: '2024',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'DeepSeek R1 API', 'Vercel'],
    desc: 'Built and deployed an AI-assisted code editor with intelligent code suggestions and auto-completion powered by DeepSeek R1 API.',
    highlights: [
      'AI code suggestions & auto-completion',
      'Browser-based IDE experience',
      'Deployed on Vercel',
    ],
    icon: '🤖',
    featured: true,
    color: '#8B1A1A',
  },
  {
    title: 'Simple Media',
    subtitle: 'Social Media Web Application',
    period: '2024',
    tech: ['Django', 'Jinja2', 'Python', 'MySQL'],
    desc: 'Full-featured social media application with user authentication, post feeds, and profile management built with Django.',
    highlights: [
      'User auth & profile management',
      'Post feeds & social interactions',
      'Django + MySQL backend',
    ],
    icon: '📱',
    featured: false,
    color: '#C0392B',
  },
  {
    title: 'EduDoc',
    subtitle: 'Digital Notes Marketplace',
    period: '2024',
    tech: ['React JS', 'Node JS', 'Supabase'],
    desc: 'Platform enabling students to upload, share, and sell academic notes with secure authentication and payment integration.',
    highlights: [
      'Notes upload & sharing marketplace',
      'Secure auth with Supabase',
      'Student monetization features',
    ],
    icon: '📚',
    featured: false,
    color: '#8B1A1A',
  },
  {
    title: 'News Browsing Website',
    subtitle: 'Real-time News Aggregator',
    period: '2023',
    tech: ['React JS', 'NewsAPI'],
    desc: 'Responsive news aggregator with real-time data, category filtering, and search functionality using NewsAPI.',
    highlights: [
      'Real-time news feed',
      'Category filtering & search',
      'Fully responsive design',
    ],
    icon: '📰',
    featured: false,
    color: '#C0392B',
  },
  {
    title: 'Personal Portfolio Website',
    subtitle: 'Aesthetic Developer Portfolio',
    period: '2024',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
    desc: 'Highly aesthetic portfolio website showcasing projects, skills, and achievements with clean UX design.',
    highlights: [
      'Stunning modern UI design',
      'Smooth animations & transitions',
      'Fully responsive layout',
    ],
    icon: '🌐',
    featured: false,
    color: '#8B1A1A',
  },
  {
    title: 'Gantt Chart Maker',
    subtitle: 'Project Scheduling & Timeline Tool',
    period: '2024',
    tech: ['HTML', 'CSS', 'JavaScript'],
    desc: 'Developed a custom Gantt chart maker to visualize project schedules and timelines for software engineering projects in my third year.',
    highlights: [
      'Visual timeline representation',
      'Dynamic schedule adjustments',
      'Third-year academic tool',
    ],
    icon: '📊',
    featured: false,
    color: '#C0392B',
  },
];

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`knight-card rounded-sm relative overflow-hidden group cursor-default ${
        project.featured ? 'col-span-1 md:col-span-2 lg:col-span-1' : ''
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top gradient bar */}
      <div 
        className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300"
        style={{ 
          background: hovered 
            ? `linear-gradient(90deg, ${project.color}, transparent)`
            : 'transparent'
        }}
      />

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-3 right-3 px-2 py-0.5 bg-knight-red/20 border border-knight-red/40 text-knight-red text-xs font-mono rounded">
          Featured
        </div>
      )}

      <div className="p-6">
        {/* Icon + Title */}
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 bg-knight-red/10 border border-knight-red/20 rounded-sm flex items-center justify-center flex-shrink-0 text-xl group-hover:bg-knight-red/20 transition-colors">
            {project.icon}
          </div>
          <div>
            <h3 className="font-outfit font-bold text-knight-white text-base leading-tight">{project.title}</h3>
            <p className="text-knight-gray-muted text-xs mt-0.5">{project.subtitle}</p>
          </div>
        </div>

        <p className="text-knight-gray-faint text-sm leading-relaxed mb-4">{project.desc}</p>

        {/* Highlights */}
        <div className="space-y-1.5 mb-4">
          {project.highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-knight-gray-faint">
              <span className="text-knight-red mt-0.5">▸</span>
              <span>{h}</span>
            </div>
          ))}
        </div>

        {/* Period */}
        <p className="text-knight-red/50 text-xs font-mono mb-3">📅 {project.period}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-knight-black-5">
          {project.tech.map(t => (
            <span key={t} className="px-2 py-0.5 text-xs font-mono bg-knight-black-5 border border-knight-gray/30 rounded group-hover:border-knight-red/30 group-hover:text-knight-red transition-all duration-200" style={{ color: 'antiquewhite' }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.05 }
    );
    const elements = ref.current?.querySelectorAll('.reveal');
    elements?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="relative py-16 lg:py-28 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-knight-black-2/40 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-knight-red/3 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="text-knight-red font-mono text-sm mb-2">// Portfolio</p>
          <h2 className="font-outfit font-black text-3xl sm:text-4xl lg:text-5xl text-knight-white mb-4">
            Featured <span className="text-knight-red">Projects</span>
          </h2>
          <div className="flex items-center gap-4">
            <div className="h-px bg-gradient-to-r from-knight-red via-knight-red/30 to-transparent w-48" />
            <span className="text-knight-gray-muted text-xs font-mono">6 projects built</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
