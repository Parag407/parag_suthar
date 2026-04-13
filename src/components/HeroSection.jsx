import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const roles = [
  'Full Stack Developer',
  'Python Developer',
  'UI/UX Enthusiast',
  'React JS Expert',
  'Problem Solver',
];

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex]     = useState(0);
  const [charIndex, setCharIndex]     = useState(0);
  const [deleting, setDeleting]       = useState(false);
  const [visible, setVisible]         = useState(false);

  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  /* Typewriter */
  useEffect(() => {
    const current = roles[roleIndex];
    let t;
    if (!deleting && charIndex < current.length) {
      t = setTimeout(() => { setDisplayText(current.slice(0, charIndex + 1)); setCharIndex(c => c + 1); }, 80);
    } else if (!deleting && charIndex === current.length) {
      t = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      t = setTimeout(() => { setDisplayText(current.slice(0, charIndex - 1)); setCharIndex(c => c - 1); }, 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex(r => (r + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 sm:px-6">
      {/* central glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[640px] h-[640px] rounded-full bg-knight-red/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ── Left ── */}
          <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-knight-red/30 bg-knight-red/10 mb-6">
              <div className="w-2 h-2 rounded-full bg-knight-red animate-pulse" />
              <span className="text-knight-red text-xs font-mono font-medium">Available for opportunities</span>
            </div>

            {/* Greeting */}
            <p className="text-knight-gray-muted font-mono text-sm mb-3">
              <span className="text-knight-red">›</span> Hello, World! I am
            </p>

            {/* Name */}
            <h1 className="font-outfit font-black text-4xl sm:text-5xl lg:text-7xl leading-none mb-1 glitch" data-text="PARAG">
              <span className="text-knight-white">PARAG</span>
            </h1>
            <h1 className="font-outfit font-black text-4xl sm:text-5xl lg:text-7xl leading-none mb-6 glitch" data-text="SUTHAR">
              <span className="bg-gradient-to-r from-knight-red to-knight-red-bright bg-clip-text text-transparent red-text-glow">
                SUTHAR
              </span>
            </h1>

            {/* Typewriter */}
            <div className="flex items-center gap-2 mb-8 h-8">
              <span className="text-knight-gray-faint font-inter text-lg">I Am </span>
              <span className="text-knight-red font-outfit font-semibold text-lg">
                {displayText}
                <span className="animate-[typeCursor_1s_step-end_infinite] text-knight-red">|</span>
              </span>
            </div>

            {/* Summary */}
            <p className="text-knight-gray-muted font-inter text-base leading-relaxed mb-8 max-w-lg">
              BSc IT graduate with <span className="text-knight-red font-semibold">SGPI 9.6</span> from Hinduja College.
              Full Stack Developer with expertise in React, Node.js, Python & AI integrations.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-knight-red text-white font-outfit font-semibold text-sm rounded-sm transition-all duration-300 hover:bg-knight-red-bright hover:shadow-[0_0_25px_rgba(192,57,43,0.5)]"
              >
                View Projects
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 border border-knight-red/50 text-knight-red font-outfit font-semibold text-sm rounded-sm transition-all duration-300 hover:border-knight-red hover:bg-knight-red/10 hover:shadow-[0_0_20px_rgba(192,57,43,0.2)]"
              >
                Contact Me
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>

            {/* Quick-nav pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'About Me',    path: '/about' },
                { label: '🏆 Gallery',  path: '/gallery' },
              ].map(({ label, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="px-3 py-1.5 text-xs font-mono border border-knight-gray/25 text-knight-gray-muted rounded-sm hover:border-knight-red/50 hover:text-knight-red transition-all duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Right: Profile ── */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative mt-8 lg:mt-0">
              {/* Decorative rings — hidden on mobile to avoid overflow */}
              <div className="hidden sm:block absolute inset-0 -m-8 rounded-full border border-knight-red/10 animate-[float_6s_ease-in-out_infinite]" />
              <div className="hidden sm:block absolute inset-0 -m-16 rounded-full border border-knight-red/5 animate-[float_8s_ease-in-out_infinite_reverse]" />

              {/* Corner decorators */}
              <div className="absolute -top-4 -right-4 w-12 h-12 border border-knight-red/30 rotate-45" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-knight-red/20 rotate-45" />
              <div className="hidden sm:block absolute top-1/2 -left-8 w-3 h-3 bg-knight-red rounded-full animate-pulse" />
              <div className="absolute -top-2 left-1/3 w-2 h-2 bg-knight-red/60 rounded-full animate-pulse delay-700" />

              {/* Photo */}
              <div className="relative corner-bracket">
                <div className="w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-96 rounded-sm overflow-hidden border-2 border-knight-red/40 shadow-[0_0_40px_rgba(192,57,43,0.3)]">
                  <img
                    src="/assets/profile/parag_profile_pic.jpeg"
                    alt="Parag Kumar Suthar"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-knight-red/20 via-transparent to-transparent" />
                </div>

                {/* Floating stats — inside photo on mobile, outside on sm+ */}
                <div className="absolute left-2 top-2 sm:-left-12 sm:top-8 bg-knight-black-3/90 backdrop-blur border border-knight-red/30 rounded-sm px-2 py-1.5 sm:px-3 sm:py-2 shadow-lg">
                  <div className="text-knight-red font-outfit font-bold text-base sm:text-xl leading-none">9.6</div>
                  <div className="text-knight-gray-faint font-inter text-xs">SGPI</div>
                </div>
                <div className="absolute right-2 bottom-16 sm:-right-12 sm:bottom-12 bg-knight-black-3/90 backdrop-blur border border-knight-red/30 rounded-sm px-2 py-1.5 sm:px-3 sm:py-2 shadow-lg">
                  <div className="text-knight-red font-outfit font-bold text-base sm:text-xl leading-none">1+</div>
                  <div className="text-knight-gray-faint font-inter text-xs">Yrs Exp.</div>
                </div>
                <div className="absolute left-2 bottom-2 sm:-left-8 sm:bottom-4 bg-knight-black-3/90 backdrop-blur border border-knight-red/30 rounded-sm px-2 py-1.5 sm:px-3 sm:py-2 shadow-lg">
                  <div className="text-knight-red font-outfit font-bold text-base sm:text-xl leading-none">8+</div>
                  <div className="text-knight-gray-faint font-inter text-xs">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page-nav cards at bottom */}
        <div className={`mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { label: 'About Me',     sub: 'Skills · Experience',     path: '/about',    icon: '👤' },
            { label: 'Achievement Gallery', sub: 'My journey 2021–25', path: '/gallery', icon: '🏆' },
            { label: 'All Projects', sub: '8 projects with search',   path: '/projects', icon: '🚀' },
            { label: 'Contact',      sub: 'Let\'s work together',     path: '/contact',  icon: '✉️' },
          ].map(({ label, sub, path, icon }) => (
            <Link
              key={path}
              to={path}
              className="group knight-card p-4 rounded-sm text-center hover:border-knight-red/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(192,57,43,0.12)]"
            >
              <div className="text-2xl mb-2">{icon}</div>
              <div className="font-outfit font-semibold text-knight-white text-sm group-hover:text-knight-red transition-colors">{label}</div>
              <div className="text-knight-gray-muted text-xs mt-0.5 font-mono">{sub}</div>
            </Link>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-12">
          <div className="flex flex-col items-center gap-2 opacity-40">
            <span className="text-knight-gray-muted text-xs font-mono">explore</span>
            <div className="w-px h-10 bg-gradient-to-b from-knight-red/60 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
