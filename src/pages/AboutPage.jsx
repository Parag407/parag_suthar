import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import AchievementsSection from '../components/AchievementsSection';
import Footer from '../components/Footer';

/* Minimal breadcrumb — no duplicate heading */
const Breadcrumb = ({ label }) => (
  <div className="pt-24 pb-2 px-6 max-w-7xl mx-auto">
    <div className="flex items-center gap-2 text-xs font-mono text-knight-gray-muted">
      <Link to="/" className="hover:text-knight-red transition-colors">Home</Link>
      <span className="text-knight-red">/</span>
      <span className="text-knight-gray-faint">{label}</span>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="relative min-h-screen bg-knight-black">
    <div className="noise-overlay" />
    <ParticleBackground />
    <div className="relative z-10">
      <Navbar />
      <Breadcrumb label="About" />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <AchievementsSection />
      <Footer />
    </div>
  </div>
);

export default AboutPage;
