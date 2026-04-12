import ParticleBackground from '../components/ParticleBackground';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const HomePage = () => (
  <div className="relative min-h-screen bg-knight-black">
    <div className="noise-overlay" />
    <ParticleBackground />
    <div className="relative z-10">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  </div>
);

export default HomePage;
