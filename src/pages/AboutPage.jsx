import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import AchievementsSection from '../components/AchievementsSection';
import Footer from '../components/Footer';

/* ── Page-level breadcrumb banner ── */
const PageBanner = ({ tag, title, highlight, desc }) => (
  <div className="relative pt-32 pb-10 px-6 overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-[500px] h-[280px] rounded-full bg-knight-red/5 blur-3xl" />
    </div>
    <div className="max-w-6xl mx-auto relative z-10">
      <div className="flex items-center gap-2 text-xs font-mono text-knight-gray-muted mb-6">
        <Link to="/" className="hover:text-knight-red transition-colors">Home</Link>
        <span className="text-knight-red">/</span>
        <span className="text-knight-gray-faint">{title}</span>
      </div>
      <p className="text-knight-red font-mono text-sm mb-3">// {tag}</p>
      <h1 className="font-outfit font-black text-5xl lg:text-6xl text-knight-white mb-4">
        {title} <span className="text-knight-red">{highlight}</span>
      </h1>
      <p className="text-knight-gray-muted text-base max-w-xl leading-relaxed">{desc}</p>
      <div className="mt-6 h-px bg-gradient-to-r from-knight-red/40 via-knight-red/10 to-transparent w-64" />
    </div>
  </div>
);

const AboutPage = () => (
  <div className="relative min-h-screen bg-knight-black">
    <div className="noise-overlay" />
    <ParticleBackground />
    <div className="relative z-10">
      <Navbar />
      <PageBanner
        tag="Who I Am"
        title="About"
        highlight="Me"
        desc="My background, technical skills, work experience, education timeline, and key achievements — everything you need to know."
      />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <AchievementsSection />
      <Footer />
    </div>
  </div>
);

export default AboutPage;
