import { useEffect, useRef } from 'react';

const achievements = [
  {
    place: '1st',
    medal: '🥇',
    title: 'Corporate Clash — L.S. Raheja College E-Summit\'26',
    desc: 'Finance/business strategy competition; also secured 3rd Prize in Crisis Management at the same event',
    category: 'Business Strategy',
    color: '#FFD700',
  },
  {
    place: '1st',
    medal: '🥇',
    title: 'Debate Competition — Lala Lajpat Rai College HUNAR Fest',
    desc: 'Also secured 2nd Runner-Up as Contingent Leader at the same intercollegiate fest',
    category: 'Public Speaking',
    color: '#FFD700',
  },
  {
    place: '2nd',
    medal: '🥈',
    title: 'Pixarel (Digital Poster) — NM College Technotsav',
    desc: 'Also 1st Runner-Up at Lala Lajpat Rai College Sankalp — Digital Poster Design',
    category: 'Design',
    color: '#C0C0C0',
  },
  {
    place: '3rd',
    medal: '🥉',
    title: 'Fireless Cooking — Somaiya College AURA Fest',
    desc: 'Also 3rd in Tug of War, Annual Sports Day. Demonstrated versatility across technical, creative, and sports categories',
    category: 'Versatility',
    color: '#CD7F32',
  },
];

const AchievementsSection = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const elements = ref.current?.querySelectorAll('.reveal');
    elements?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" className="relative py-28 overflow-hidden" ref={ref}>
      <div className="absolute right-0 top-0 w-80 h-80 bg-knight-red/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="text-knight-red font-mono text-sm mb-2">// Accolades</p>
          <h2 className="font-outfit font-black text-4xl lg:text-5xl text-knight-white mb-4">
            Achievements & <span className="text-knight-red">Awards</span>
          </h2>
          <div className="h-px bg-gradient-to-r from-knight-red via-knight-red/30 to-transparent w-48" />
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-6 reveal">
          {achievements.map((ach, i) => (
            <div key={i} className="knight-card rounded-sm p-6 relative overflow-hidden group">
              {/* Background medal glow */}
              <div 
                className="absolute top-0 right-0 text-[100px] opacity-5 pointer-events-none leading-none"
                style={{ color: ach.color }}
              >
                {ach.medal}
              </div>

              {/* Place badge */}
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="w-12 h-12 rounded-sm flex items-center justify-center text-2xl font-outfit font-black shadow-lg flex-shrink-0"
                  style={{ 
                    background: `linear-gradient(135deg, ${ach.color}30, ${ach.color}10)`,
                    border: `1px solid ${ach.color}40`
                  }}
                >
                  {ach.medal}
                </div>
                <div>
                  <div className="text-xs font-mono text-knight-gray-muted">{ach.category}</div>
                  <div 
                    className="text-lg font-outfit font-black"
                    style={{ color: ach.color }}
                  >
                    {ach.place} Place
                  </div>
                </div>
              </div>

              <h4 className="font-outfit font-bold text-knight-white text-base leading-snug mb-3">
                {ach.title}
              </h4>
              <p className="text-knight-gray-muted text-sm leading-relaxed">
                {ach.desc}
              </p>

              {/* Bottom accent */}
              <div 
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${ach.color}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* Stats summary */}
        <div className="reveal mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Competitions Won', value: '4+', icon: '🏆' },
            { label: 'Colleges Represented', value: '5+', icon: '🏛️' },
            { label: 'Events Organized', value: '3+', icon: '🎪' },
            { label: 'Team Size Managed', value: '30+', icon: '👥' },
          ].map((stat, i) => (
            <div key={i} className="knight-card p-4 rounded-sm text-center">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="font-outfit font-black text-2xl text-knight-red">{stat.value}</div>
              <div className="text-knight-gray-muted text-xs font-inter mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
