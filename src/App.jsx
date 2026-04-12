import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Pages
import HomePage     from './pages/HomePage';
import AboutPage    from './pages/AboutPage';
import GalleryPage  from './pages/GalleryPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage  from './pages/ContactPage';

// ──────────────────────────────────────────
// LOADING SCREEN
// ──────────────────────────────────────────
const Loader = ({ onDone }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(iv); setTimeout(onDone, 200); return 100; }
        return p + Math.random() * 14;
      });
    }, 70);
    return () => clearInterval(iv);
  }, [onDone]);

  const pct = Math.min(Math.round(progress), 100);

  return (
    <div className="fixed inset-0 bg-knight-black z-[9999] flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(192,57,43,0.06) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(192,57,43,0.06) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
      <div className="relative flex flex-col items-center">
        {/* Spinner */}
        <div className="relative w-24 h-24 mb-8">
          <div className="absolute inset-0 rounded-full border-2 border-knight-red/15" />
          <div
            className="absolute inset-0 rounded-full border-t-2 border-knight-red"
            style={{ animation: 'loaderSpin 1s linear infinite', filter: 'drop-shadow(0 0 6px #C0392B)' }}
          />
          <div className="absolute inset-3 border border-knight-red/25 rotate-45" />
          <div
            className="absolute inset-3 border border-knight-red/15"
            style={{ animation: 'loaderSpin 2s linear infinite reverse' }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-outfit font-black text-2xl text-knight-red">P</span>
          </div>
        </div>

        <h1 className="font-outfit font-black text-3xl text-knight-white mb-1">
          PARAG <span className="text-knight-red">SUTHAR</span>
        </h1>
        <p className="text-knight-gray-muted font-mono text-sm mb-8">
          <span className="text-knight-red">{'> '}</span>
          Initializing portfolio
          <span className="animate-[typeCursor_1s_step-end_infinite] text-knight-red">_</span>
        </p>

        <div className="w-64 h-0.5 bg-knight-black-5 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-knight-red-deep to-knight-red transition-all duration-100"
            style={{ width: `${pct}%`, boxShadow: '0 0 8px rgba(192,57,43,0.6)' }}
          />
        </div>
        <div className="flex justify-between w-64 mt-2">
          <p className="text-knight-gray/40 text-[10px] font-mono">Loading assets...</p>
          <p className="text-knight-red/60 text-[10px] font-mono">{pct}%</p>
        </div>
      </div>
    </div>
  );
};

// ──────────────────────────────────────────
// CURSOR GLOW
// ──────────────────────────────────────────
const CursorGlow = () => {
  useEffect(() => {
    const el = document.createElement('div');
    el.style.cssText = `
      position:fixed;pointer-events:none;z-index:9998;
      width:320px;height:320px;border-radius:50%;
      background:radial-gradient(circle,rgba(192,57,43,0.05) 0%,transparent 70%);
      transform:translate(-50%,-50%);will-change:left,top;
    `;
    document.body.appendChild(el);
    const move = e => { el.style.left = e.clientX + 'px'; el.style.top = e.clientY + 'px'; };
    window.addEventListener('mousemove', move);
    return () => { window.removeEventListener('mousemove', move); el.remove(); };
  }, []);
  return null;
};

// ──────────────────────────────────────────
// SCROLL TO TOP
// ──────────────────────────────────────────
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

// ──────────────────────────────────────────
// APP
// ──────────────────────────────────────────
function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <div className={`transition-opacity duration-700 ${loading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <CursorGlow />
        <ScrollToTop />
        <Routes>
          <Route path="/"         element={<HomePage />} />
          <Route path="/about"    element={<AboutPage />} />
          <Route path="/gallery"  element={<GalleryPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact"  element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
