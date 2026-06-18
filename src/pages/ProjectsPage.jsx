import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ──────────────────────────────────────────
// DATA
// ──────────────────────────────────────────
const allProjects = [
  {
    id: 1,
    title: 'GyanCode',
    subtitle: 'Interactive Code Learning & Assessment Platform',
    period: 'Jan 2025 – May 2025',
    category: 'Full Stack',
    status: 'Completed',
    featured: true,
    tech: ['React JS', 'Node JS', 'MongoDB Atlas', 'Express JS'],
    tags: ['Full Stack', 'Education', 'Team Project', 'Capstone'],
    desc: `GyanCode is a full-stack interactive code learning and assessment platform — my final year capstone project at Hinduja College.

The platform provides students with browser-based code editors, teacher-curated assessments, and real-time feedback mechanisms. Teachers can create coding challenges, set evaluation criteria, and monitor student progress through dashboards.

I led a team from initial requirement gathering, system design, all the way through to development and deployment. The project demonstrates end-to-end product ownership.`,
    highlights: ['Browser-based code editors', 'Teacher + Student dashboards', 'Real-time feedback system', 'Team lead from scratch to ship'],
    imgFile: 'gyancode.jpg',
    imgPlaceholder: 'GyanCode Platform Dashboard & Code Editor',
    github: 'http://github.com/Parag407/GyanCode',
    live: 'https://gyan-code.vercel.app/',
    color: '#C0392B',
  },
  {
    id: 2,
    title: 'AI-Powered Code Editor',
    subtitle: 'Browser IDE with DeepSeek R1 AI Intelligence',
    period: '2024',
    category: 'AI/ML',
    status: 'Live',
    featured: true,
    tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'DeepSeek R1 API', 'Vercel'],
    tags: ['AI', 'Developer Tool', 'Frontend', 'Deployed'],
    desc: `A browser-based code editor enhanced with AI capabilities powered by the DeepSeek R1 API. The editor provides intelligent code suggestions, auto-completion, and error explanations directly in the browser.

Built as a lightweight, accessible tool that requires no installation — developers can write, run, and get AI-assisted feedback entirely in-browser. Deployed on Vercel for instant global access.`,
    highlights: ['AI code suggestions via DeepSeek R1', 'Zero-install browser IDE', 'Auto-completion & error hints', 'Deployed live on Vercel'],
    imgFile: 'ai_code_editor.jpg',
    imgPlaceholder: 'AI Code Editor Interface & AI Suggestions Panel',
    github: 'https://github.com/Parag407/CodeWeb-v3',
    live: 'https://code-web-v3.vercel.app/',
    color: '#8B1A1A',
  },
  {
    id: 3,
    title: 'Simple Media',
    subtitle: 'Full-Featured Social Media Web Application',
    period: '2024',
    category: 'Full Stack',
    status: 'Completed',
    featured: false,
    tech: ['Django', 'Jinja2', 'Python', 'MySQL'],
    tags: ['Full Stack', 'Social Media', 'Django', 'Backend'],
    desc: `Simple Media is a complete social media web application built with Django's server-side rendering, Python backend, and MySQL database.

The platform includes user authentication & registration, post creation with media attachments, real-time-style feed browsing, follow/unfollow mechanics, user profile management with bio and avatar, and comment/like interactions — all designed with a clean, minimal UI.`,
    highlights: ['User auth & registration flow', 'Post feeds with media', 'Follow/unfollow system', 'Django + MySQL backend'],
    imgFile: 'simple_media.jpg',
    imgPlaceholder: 'Simple Media Feed, Profile, & Post Views',
    github: 'https://github.com/Parag407/simple-media',
    live: 'https://x-app-cllp.onrender.com/',
    color: '#C0392B',
  },
  {
    id: 4,
    title: 'EduDoc',
    subtitle: 'Digital Notes Marketplace for Students',
    period: '2024',
    category: 'Full Stack',
    status: 'Completed',
    featured: false,
    tech: ['React JS', 'Node JS', 'Supabase'],
    tags: ['Full Stack', 'Education', 'Marketplace', 'React'],
    desc: `EduDoc is a peer-to-peer academic notes marketplace that empowers students to upload, discover, and sell their study materials.

Built with React for the frontend, Node.js for the API layer, and Supabase for database and file storage. The platform features secure authentication, PDF upload/preview, categorization by subject and semester, seller profiles, and a simple purchase flow.`,
    highlights: ['PDF upload & secure preview', 'Supabase auth & storage', 'Subject/semester filtering', 'Student monetization flow'],
    imgFile: 'edudoc.jpg',
    imgPlaceholder: 'EduDoc Marketplace & Document Preview',
    github: '#',
    live: '#',
    color: '#8B1A1A',
  },
  {
    id: 5,
    title: 'News Browsing Website',
    subtitle: 'Real-time News Aggregator with Category Filters',
    period: '2023',
    category: 'Frontend',
    status: 'Completed',
    featured: false,
    tech: ['React JS', 'NewsAPI', 'CSS3'],
    tags: ['Frontend', 'React', 'API Integration', 'Responsive'],
    desc: `A responsive news aggregator application built with React JS and the NewsAPI. Fetches live news from multiple sources and allows users to browse by category (Technology, Business, Sports, Entertainment, etc.).

Key features include a real-time news feed with article thumbnails, category-based filtering, search functionality, article preview with source attribution, and infinite scroll pagination. Designed to be fast, responsive, and readable on all devices.`,
    highlights: ['Live NewsAPI integration', 'Category filtering system', 'Search & infinite scroll', 'Fully responsive layout'],
    imgFile: 'news_website.jpg',
    imgPlaceholder: 'News Aggregator Homepage & Category Views',
    github: '#',
    live: '#',
    color: '#C0392B',
  },
  {
    id: 6,
    title: 'Personal Portfolio Website',
    subtitle: 'Aesthetic Developer Portfolio with Knight Theme',
    period: '2024–2025',
    category: 'Frontend',
    status: 'Live',
    featured: false,
    tech: ['React JS', 'Tailwind CSS', 'JavaScript', 'Vite', 'Web3Forms'],
    tags: ['Frontend', 'Portfolio', 'React', 'Design', 'Deployed'],
    desc: `This very portfolio website — a showcase of design craft and front-end engineering. Built with a custom "Knight Edition" red and black theme featuring particle canvas animations, smooth scroll reveal effects, typewriter animations, and a glitch text hero.

Features include a chronological gallery, dedicated projects page with search, Web3Forms contact integration, fully responsive design, and SEO optimization. Every animation, gradient, and interaction was custom-crafted.`,
    highlights: ['Custom knight red/black design system', 'Canvas particle background', 'Scroll-reveal animations', 'Web3Forms integration', 'Gallery & Projects pages'],
    imgFile: 'portfolio_website.jpg',
    imgPlaceholder: 'Portfolio Hero, Gallery, and Projects Pages',
    github: 'https://github.com/Parag407/parag_suthar',
    live: 'https://parag-suthar.vercel.app/',
    color: '#8B1A1A',
  },
  {
    id: 7,
    title: 'Instagram Auth Clone',
    subtitle: 'Backend Authentication System — Instagram Style',
    period: '2024',
    category: 'Backend',
    status: 'Completed',
    featured: false,
    tech: ['Node JS', 'Express JS', 'JWT', 'MongoDB'],
    tags: ['Backend', 'Auth', 'REST API', 'Node.js'],
    desc: `A production-quality backend authentication system modeled after Instagram's auth flow, built as part of the NodeJS & Express JS Bootcamp by Devtown.

Implements full JWT-based authentication including registration, login, token refresh, protected routes, and session management. Built with Express.js middleware architecture, bcrypt password hashing, and MongoDB for user storage.`,
    highlights: ['JWT auth with token refresh', 'Bcrypt password security', 'Protected route middleware', 'MongoDB user management'],
    imgFile: 'instagram_auth_clone.jpg',
    imgPlaceholder: 'API Routes, Postman Tests & Auth Flow Diagram',
    github: '#',
    live: '#',
    color: '#C0392B',
  },
  {
    id: 8,
    title: 'Hotstar Clone',
    subtitle: 'Frontend Streaming Platform Clone',
    period: '2023',
    category: 'Frontend',
    status: 'Completed',
    featured: false,
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    tags: ['Frontend', 'Clone', 'HTML', 'Beginner'],
    desc: `A pixel-perfect frontend clone of Disney+ Hotstar built as the capstone for the Devtown HTML bootcamp. Replicates the streaming platform's homepage, category navigation, content cards, and responsive banner layouts.

A foundational project that sharpened HTML5 semantic structure, CSS Grid/Flexbox layouts, responsive design breakpoints, and JavaScript DOM manipulation skills.`,
    highlights: ['Hotstar UI recreation', 'Responsive CSS Grid/Flex', 'JavaScript DOM interactions', 'Semantic HTML5 structure'],
    imgFile: 'hotstar_clone.jpg',
    imgPlaceholder: 'Hotstar Clone Homepage & Content Sections',
    github: 'https://github.com/Parag407/Hotstar-clone/',
    live: 'https://hotstar-clone-sand-seven.vercel.app/',
    color: '#8B1A1A',
  },
  {
    id: 9,
    title: 'Gantt Chart Maker',
    subtitle: 'Project Scheduling & Timeline Tool',
    period: '2024',
    category: 'Frontend',
    status: 'Completed',
    featured: false,
    tech: ['HTML', 'CSS', 'JavaScript'],
    tags: ['Frontend', 'Tool', 'Utility', 'Third-Year'],
    desc: `Developed a dedicated Gantt chart maker to visualize project schedules and timelines. This tool was specifically designed and used to manage software engineering projects during my third year of BSc IT.

It features a visual timeline representation, allowing for clear project tracking and dynamic schedule visualization using native web technologies.`,
    highlights: ['Visual timeline representation', 'Dynamic schedule adjustments', 'Third-year academic tool', 'Native JS implementation'],
    imgFile: 'gantt_chart.jpg',
    imgPlaceholder: 'Gantt Chart Interface & Task List',
    github: 'https://github.com/Parag407/GanttChart',
    live: 'https://gantt-chart-navy.vercel.app/',
    color: '#C0392B',
  },
];

const allTags = ['All', 'Full Stack', 'Frontend', 'Backend', 'AI', 'React', 'Django', 'Education', 'Deployed', 'Design'];
const allCategories = ['All', 'Full Stack', 'Frontend', 'Backend', 'AI/ML'];

// ──────────────────────────────────────────
// PROJECT IMAGE (real or placeholder)
// ──────────────────────────────────────────
const ProjectImage = ({ imgFile, label, color, height = 'h-44' }) => {
  const [loaded, setLoaded] = useState(false);
  const [error,  setError]  = useState(false);
  const src = `/assets/projects/${imgFile}`;

  if (!imgFile || error) {
    return (
      <div
        className={`relative w-full ${height} flex flex-col items-center justify-center gap-2 overflow-hidden`}
        style={{ background: `linear-gradient(135deg, rgba(192,57,43,0.06), #111111)`, border: `1px solid ${color}25` }}
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(${color}20 1px, transparent 1px), linear-gradient(90deg, ${color}20 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
        {[['top-2 left-2', 0], ['top-2 right-2', 1], ['bottom-2 left-2', 2], ['bottom-2 right-2', 3]].map(([pos, i]) => (
          <div key={i} className={`absolute ${pos} w-4 h-4`} style={{
            borderTop:    i < 2  ? `1.5px solid ${color}40` : undefined,
            borderBottom: i >= 2 ? `1.5px solid ${color}40` : undefined,
            borderLeft:   i % 2 === 0 ? `1.5px solid ${color}40` : undefined,
            borderRight:  i % 2 === 1 ? `1.5px solid ${color}40` : undefined,
          }} />
        ))}
        <div className="z-10 flex flex-col items-center gap-1">
          <svg className="w-7 h-7 opacity-25" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ color }}>
            <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-[9px] font-mono opacity-30 text-knight-gray-faint">/assets/projects/{imgFile}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${height} overflow-hidden bg-knight-black-3`}>
      {!loaded && <div className="absolute inset-0 flex items-center justify-center"><div className="w-5 h-5 border-t-2 border-knight-red rounded-full animate-spin" /></div>}
      <img
        src={src} alt={label}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
      {loaded && <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />}
    </div>
  );
};

// ──────────────────────────────────────────
// PROJECT CARD
// ──────────────────────────────────────────
const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="knight-card rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_0_30px_rgba(192,57,43,0.18)] group"
      style={{ borderColor: `${project.color}25` }}
    >
      {/* Image section */}
      <div className="relative">
        <ProjectImage imgFile={project.imgFile} label={project.imgPlaceholder} color={project.color} />
        {/* Overlay badges */}
        <div className="absolute top-2 left-2 flex gap-1.5">
          {project.featured && (
            <span className="px-2 py-0.5 text-[10px] font-mono bg-knight-red/80 text-white rounded">Featured</span>
          )}
          <span
            className={`px-2 py-0.5 text-[10px] font-mono rounded ${
              project.status === 'Live'
                ? 'bg-green-900/80 text-green-400 border border-green-500/30'
                : 'bg-knight-black-4 text-knight-gray-muted border border-knight-gray/20'
            }`}
          >
            {project.status === 'Live' && <span className="inline-block w-1.5 h-1.5 bg-green-400 rounded-full mr-1 animate-pulse" />}
            {project.status}
          </span>
        </div>
        <div className="absolute top-2 right-2">
          <span className="px-2 py-0.5 text-[10px] font-mono bg-knight-black-4/80 text-knight-gray-muted border border-knight-gray/20 rounded">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Period */}
        <p className="text-[10px] font-mono mb-1.5" style={{ color: `${project.color}70` }}>📅 {project.period}</p>

        {/* Title */}
        <h3 className="font-outfit font-bold text-knight-white text-lg leading-tight mb-0.5">{project.title}</h3>
        <p className="text-knight-gray-muted text-xs mb-3">{project.subtitle}</p>

        {/* Description */}
        <div className="mb-4">
          <p className="text-knight-gray-faint text-xs leading-relaxed">
            {expanded ? project.desc : project.desc.slice(0, 160) + '...'}
          </p>
          <button
            onClick={() => setExpanded(e => !e)}
            className="text-knight-red text-[10px] font-mono mt-1 hover:text-knight-red-bright"
          >
            {expanded ? '↑ Show less' : '↓ Read more'}
          </button>
        </div>

        {/* Highlights */}
        <div className="space-y-1 mb-4">
          {project.highlights.slice(0, 3).map((h, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-knight-gray-faint">
              <span style={{ color: project.color }} className="mt-0.5 flex-shrink-0">▸</span>
              <span>{h}</span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="px-1.5 py-0.5 text-[10px] font-mono bg-knight-black-5 border border-knight-gray/25 rounded" style={{ color: 'antiquewhite' }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-knight-black-5 mt-auto">
          {project.tech.map(t => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] font-mono border rounded transition-all duration-200 group-hover:border-knight-red/30 group-hover:text-knight-red"
              style={{ background: `${project.color}08`, borderColor: `${project.color}30`, color: 'antiquewhite' }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 mt-4">
          <a
            href={project.github}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 border border-knight-gray/30 text-knight-gray-muted text-xs font-mono rounded-sm hover:border-knight-red/50 hover:text-knight-red transition-all duration-200"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a
            href={project.live}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-knight-red/10 border border-knight-red/30 text-knight-red text-xs font-mono rounded-sm hover:bg-knight-red/20 hover:shadow-[0_0_10px_rgba(192,57,43,0.2)] transition-all duration-200"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

// ──────────────────────────────────────────
// MAIN PAGE
// ──────────────────────────────────────────
const ProjectsPage = () => {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [view, setView] = useState('grid'); // grid | list

  const filtered = useMemo(() => {
    let results = allProjects;

    // Search
    if (search.trim()) {
      const q = search.toLowerCase();
      results = results.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.tech.some(t => t.toLowerCase().includes(q)) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    // Tag filter
    if (activeTag !== 'All') {
      results = results.filter(p => p.tags.includes(activeTag));
    }

    // Category filter
    if (activeCategory !== 'All') {
      results = results.filter(p => p.category === activeCategory);
    }

    // Sort
    if (sortBy === 'featured') results = [...results].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    else if (sortBy === 'recent') results = [...results].sort((a, b) => parseInt(b.period) - parseInt(a.period));
    else if (sortBy === 'az') results = [...results].sort((a, b) => a.title.localeCompare(b.title));

    return results;
  }, [search, activeTag, activeCategory, sortBy]);

  return (
    <div className="relative min-h-screen bg-knight-black">
      <div className="noise-overlay" />
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />

        {/* Hero */}
        <div className="relative pt-28 sm:pt-32 pb-12 px-4 sm:px-6 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[300px] rounded-full bg-knight-red/4 blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-knight-gray-muted mb-6">
              <Link to="/" className="hover:text-knight-red transition-colors">Home</Link>
              <span className="text-knight-red">/</span>
              <span className="text-knight-gray-faint">Projects</span>
            </div>

            <p className="text-knight-red font-mono text-sm mb-3">// Portfolio</p>
            <h1 className="font-outfit font-black text-4xl sm:text-5xl lg:text-6xl text-knight-white mb-4">
              All <span className="text-knight-red">Projects</span>
            </h1>
            <p className="text-knight-gray-muted text-base max-w-xl leading-relaxed">
              A complete collection of everything I've built — from AI-powered tools and full-stack platforms 
              to frontend clones and open-source tools.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-6">
              {[
                { label: 'Total Projects', value: allProjects.length },
                { label: 'Live Deployments', value: allProjects.filter(p => p.status === 'Live').length },
                { label: 'Technologies Used', value: '15+' },
                { label: 'Featured', value: allProjects.filter(p => p.featured).length },
              ].map((s, i) => (
                <div key={i}>
                  <div className="font-outfit font-black text-2xl text-knight-red">{s.value}</div>
                  <div className="text-knight-gray-muted text-xs font-mono">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Search & Filters Bar */}
        <div className="sticky top-16 z-40 bg-knight-black/95 backdrop-blur-md border-b border-knight-red/10 px-4 sm:px-6 py-3 sm:py-4">
          <div className="max-w-7xl mx-auto space-y-3">
            {/* Row 1: Search + Sort + View */}
            <div className="flex gap-2 sm:gap-3 flex-wrap items-center">
              {/* Search */}
              <div className="relative flex-1 min-w-[140px] max-w-md">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-knight-red/60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search projects, tech, tags..."
                  className="w-full pl-9 pr-4 py-2 bg-knight-black-3 border border-knight-red/20 text-knight-gray-faint text-xs font-mono rounded-sm focus:outline-none focus:border-knight-red/50 focus:shadow-[0_0_10px_rgba(192,57,43,0.15)] placeholder:text-knight-gray/30 transition-all"
                />
                {search && (
                  <button
                    onClick={() => setSearch('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-knight-gray-muted hover:text-knight-red text-xs"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Result count */}
              <span className="text-knight-gray/50 text-xs font-mono">
                {filtered.length} / {allProjects.length} projects
              </span>

              <div className="flex gap-2 ml-auto items-center">
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="bg-knight-black-3 border border-knight-gray/20 text-knight-gray-muted text-xs font-mono px-3 py-2 rounded-sm focus:outline-none focus:border-knight-red/40"
                >
                  <option value="featured">Featured First</option>
                  <option value="recent">Most Recent</option>
                  <option value="az">A–Z</option>
                </select>

                {/* View toggle */}
                <div className="flex border border-knight-gray/20 rounded-sm overflow-hidden">
                  {['grid', 'list'].map(v => (
                    <button
                      key={v}
                      onClick={() => setView(v)}
                      className={`px-3 py-2 text-xs font-mono transition-all ${
                        view === v ? 'bg-knight-red text-white' : 'bg-knight-black-3 text-knight-gray-muted hover:text-knight-red'
                      }`}
                    >
                      {v === 'grid' ? '⊞' : '☰'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2: Tags + Category */}
            <div className="flex gap-2 flex-wrap">
              {allCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 text-xs font-mono rounded-sm transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-knight-red text-white shadow-[0_0_10px_rgba(192,57,43,0.3)]'
                      : 'border border-knight-gray/30 text-knight-gray-muted hover:border-knight-red/50 hover:text-knight-red'
                  }`}
                >
                  {cat}
                </button>
              ))}
              <div className="w-px h-5 bg-knight-gray/20 self-center mx-1" />
              {allTags.slice(1).map(tag => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(activeTag === tag ? 'All' : tag)}
                  className={`px-2 py-1 text-[10px] font-mono rounded transition-all duration-200 ${
                    activeTag === tag
                      ? 'bg-knight-red/20 text-knight-red border border-knight-red/40'
                      : 'text-knight-gray/40 hover:text-knight-gray-muted'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid / List */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-5xl mb-4">🔍</p>
              <p className="text-knight-gray-muted font-mono text-sm mb-2">No projects match your search.</p>
              <button
                onClick={() => { setSearch(''); setActiveTag('All'); setActiveCategory('All'); }}
                className="mt-3 px-4 py-2 border border-knight-red/40 text-knight-red text-xs font-mono rounded-sm hover:bg-knight-red/10 transition-all"
              >
                Clear all filters
              </button>
            </div>
          ) : view === 'grid' ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
            </div>
          ) : (
            /* List view */
            <div className="space-y-4">
              {filtered.map(p => (
                <div
                  key={p.id}
                  className="knight-card rounded-sm overflow-hidden flex flex-col sm:flex-row gap-0 group transition-all duration-300 hover:shadow-[0_0_20px_rgba(192,57,43,0.15)]"
                  style={{ borderColor: `${p.color}20` }}
                >
                  {/* Thumbnail — hidden on mobile, shown on sm+ */}
                  <div className="hidden sm:block w-48 flex-shrink-0 relative overflow-hidden">
                    <ProjectImage imgFile={p.imgFile} label={p.imgPlaceholder} color={p.color} height="h-full" />
                    {p.featured && (
                      <div className="absolute top-2 left-2">
                        <span className="px-1.5 py-0.5 text-[9px] font-mono bg-knight-red text-white rounded">★</span>
                      </div>
                    )}
                  </div>
                  {/* Content */}
                  <div className="flex-1 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded" style={{ background: `${p.color}15`, color: p.color }}>{p.category}</span>
                          <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${p.status === 'Live' ? 'bg-green-900/60 text-green-400' : 'bg-knight-black-5 text-knight-gray-muted'}`}>{p.status}</span>
                          <span className="text-[9px] font-mono text-knight-gray/40">{p.period}</span>
                        </div>
                        <h3 className="font-outfit font-bold text-knight-white text-lg">{p.title}</h3>
                        <p className="text-knight-gray-muted text-xs mb-2">{p.subtitle}</p>
                        <p className="text-knight-gray-faint text-xs leading-relaxed line-clamp-2">{p.desc}</p>
                      </div>
                      <div className="flex flex-col gap-2 flex-shrink-0">
                        <a href={p.github} className="px-3 py-1.5 border border-knight-gray/30 text-knight-gray-muted text-[10px] font-mono rounded-sm hover:border-knight-red/50 hover:text-knight-red transition-all text-center">GitHub</a>
                        <a href={p.live} className="px-3 py-1.5 bg-knight-red/10 border border-knight-red/30 text-knight-red text-[10px] font-mono rounded-sm hover:bg-knight-red/20 transition-all text-center">Live</a>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {p.tech.map(t => (
                        <span key={t} className="text-[9px] px-1.5 py-0.5 font-mono bg-knight-black-5 text-knight-gray/50 border border-knight-gray/15 rounded">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ProjectsPage;
