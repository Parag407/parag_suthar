import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home',         path: '/' },
  { label: 'About',        path: '/about' },
  { label: 'Gallery',      path: '/gallery' },
  { label: 'All Projects', path: '/projects' },
];

const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-knight-black/95 backdrop-blur-md border-b border-knight-red/20 shadow-lg shadow-knight-red/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 flex-shrink-0">
            <div className="absolute inset-0 border-2 border-knight-red rotate-45 transition-all duration-300 group-hover:scale-110" />
            <div className="absolute inset-1 bg-knight-red rotate-45 opacity-60 transition-all duration-300 group-hover:opacity-80" />
            <span className="absolute inset-0 flex items-center justify-center text-knight-white font-outfit font-bold text-sm z-10">P</span>
          </div>
          <div className="leading-none">
            <span className="font-outfit font-bold text-lg text-knight-white">Parag</span>
            <span className="text-knight-red font-outfit font-bold text-lg">.</span>
            <span className="text-knight-gray-muted text-xs font-inter ml-1">dev</span>
          </div>
        </Link>

        {/* ── Desktop Links ── */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map(({ label, path }) => {
            const isActive = path === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(path);

            return (
              <Link
                key={path}
                to={path}
                className={`relative px-4 py-2 text-sm font-inter font-medium rounded-sm transition-all duration-200 ${
                  isActive
                    ? 'text-knight-red'
                    : 'text-knight-gray-faint hover:text-knight-white'
                }`}
              >
                {label}
                {/* Active underline */}
                <span
                  className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-knight-red transition-all duration-300 ${
                    isActive ? 'opacity-100 shadow-[0_0_8px_#C0392B]' : 'opacity-0'
                  }`}
                />
              </Link>
            );
          })}

          {/* CTA */}
          <Link
            to="/contact"
            className="ml-3 px-5 py-2 bg-knight-red text-white text-sm font-outfit font-semibold rounded-sm transition-all duration-200 hover:bg-knight-red-bright hover:shadow-[0_0_18px_rgba(192,57,43,0.5)]"
          >
            Contact Me
          </Link>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle navigation"
        >
          <span className={`block w-6 h-0.5 bg-knight-red origin-center transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-knight-red transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-knight-red origin-center transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-80 border-t border-knight-red/15' : 'max-h-0'
        } bg-knight-black-2/98 backdrop-blur-md`}
      >
        <div className="px-6 py-4 space-y-1">
          {navItems.map(({ label, path }) => {
            const isActive = path === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(path);
            return (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-3 py-3 text-sm font-inter border-b border-knight-black-4 last:border-b-0 transition-colors duration-200 ${
                  isActive ? 'text-knight-red' : 'text-knight-gray-faint hover:text-knight-white'
                }`}
              >
                <span className="font-mono text-knight-red/40 text-xs">&gt;</span>
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
