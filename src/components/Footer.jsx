const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-knight-red/10 py-8 overflow-hidden">
      {/* Red glow accent */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-96 h-px bg-gradient-to-r from-transparent via-knight-red/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-6 h-6">
              <div className="absolute inset-0 border border-knight-red rotate-45" />
              <span className="absolute inset-0 flex items-center justify-center text-knight-red font-outfit font-bold text-xs z-10">P</span>
            </div>
            <span className="font-outfit font-bold text-knight-white">
              Parag<span className="text-knight-red">.</span>
            </span>
          </div>

          {/* Copyright */}
          <div className="text-knight-gray-muted text-xs font-mono text-center">
            <span className="text-knight-red">{'<'}</span>
            &nbsp;Designed & Built by Parag Kumar Suthar © {year}&nbsp;
            <span className="text-knight-red">{'/>'}</span>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-knight-gray-muted text-xs font-mono hover:text-knight-red transition-colors duration-200 group"
          >
            Back to top
            <div className="w-6 h-6 rounded-full border border-knight-gray/30 flex items-center justify-center group-hover:border-knight-red group-hover:shadow-[0_0_8px_rgba(192,57,43,0.4)] transition-all">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </button>
        </div>

        {/* Tech stack line */}
        <div className="text-center mt-6">
          <p className="text-knight-gray/30 text-xs font-mono">
            Built with React · Tailwind CSS · Vite · Web3Forms
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
