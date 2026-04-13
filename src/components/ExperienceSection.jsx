import { useEffect, useRef } from 'react';

const ExperienceSection = () => {
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

  const education = [
    {
      degree: 'BSc Information Technology',
      org: 'K.P.B. Hinduja College, Mumbai University',
      period: '08/2022 – 05/2025',
      location: 'Mumbai',
      score: 'SGPI: 9.6 (Outstanding)',
      highlights: ['SGPI: 9.6 (Outstanding)', '97.30% in SYBSC.IT'],
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      org: 'Shankar Narayan College, Mumbai University',
      period: '2021 – 2023',
      location: 'Mumbai',
      score: '90%',
      highlights: ['Score: 90%'],
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      org: 'The Saraswati Vidyalaya',
      period: '2021',
      location: 'Maharashtra State Board',
      score: '84.4%',
      highlights: ['Score: 84.4%'],
    },
  ];

  const leadership = [
    { role: 'E-Cell President', desc: "Organized & hosted 'UNICORN'26' intercollegiate entrepreneurship fest, managing 30+ member team", icon: '👑' },
    { role: 'IT Department President', desc: "Launched 'Hinduja E-Sports', college's first esports event from concept to execution", icon: '🖥️' },
    { role: 'DLLE Student Manager', desc: 'Managed operations, community outreach & social media for DLLE, E-Cell & Women Dev Cell', icon: '🌐' },
    { role: 'Women Dev Cell — HOD (Tech & Social Media)', desc: 'Led digital campaigns and technical initiatives for women empowerment programs', icon: '📱' },
    { role: 'Contingent Leader', desc: 'Represented Hinduja College at technical, cultural & sports competitions across Mumbai', icon: '🏆' },
  ];

  return (
    <section id="experience" className="relative py-16 lg:py-28 overflow-hidden" ref={ref}>
      <div className="absolute right-0 bottom-0 w-72 h-72 bg-knight-red/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="text-knight-red font-mono text-sm mb-2">// Career Timeline</p>
          <h2 className="font-outfit font-black text-3xl sm:text-4xl lg:text-5xl text-knight-white mb-4">
            Experience & <span className="text-knight-red">Education</span>
          </h2>
          <div className="h-px bg-gradient-to-r from-knight-red via-knight-red/30 to-transparent w-48" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Experience */}
          <div>
            <h3 className="font-outfit font-bold text-knight-white mb-8 flex items-center gap-3 reveal">
              <div className="w-8 h-8 bg-knight-red/15 border border-knight-red/30 rounded-sm flex items-center justify-center">
                <svg className="w-4 h-4 text-knight-red" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              Work Experience
            </h3>

            {/* Main Experience Card */}
            <div className="reveal knight-card p-6 rounded-sm relative overflow-hidden mb-8">
              {/* Top red bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-knight-red via-knight-red-bright to-transparent" />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h4 className="font-outfit font-bold text-knight-white text-lg">Full Stack Development Intern</h4>
                  <p className="text-knight-red font-semibold text-sm mt-1">Zamanat Pvt. Ltd.</p>
                </div>
                <div className="flex-shrink-0 sm:text-right">
                  <span className="text-xs bg-knight-red/15 border border-knight-red/30 text-knight-red px-2 py-1 rounded font-mono">
                    01/2024 – 05/2025
                  </span>
                  <p className="text-knight-gray-muted text-xs mt-1 sm:text-right">📍 Mumbai</p>
                </div>
              </div>

              <p className="text-knight-gray-muted text-sm italic mb-4 border-l-2 border-knight-red/30 pl-3">
                Affordable & accessible financing solutions platform
              </p>

              <div className="space-y-2">
                {[
                  'Led an end-to-end full stack development team overseeing architecture, code reviews, and delivery timelines',
                  'Built and deployed production-ready web applications using React JS, Node JS, Express JS, Django, MongoDB Atlas, and Supabase',
                  'Integrated AI/automation workflows using n8n, UiPath Studio, and OpenRouter APIs for process automation',
                  'Collaborated across cross-functional teams; contributed to UI design in Figma and Wix Studio',
                ].map((bullet, i) => (
                  <div key={i} className="flex gap-3 text-sm text-knight-gray-faint">
                    <span className="text-knight-red mt-1 flex-shrink-0">▸</span>
                    <span className="leading-relaxed">{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-knight-black-5">
                {['React JS', 'Node JS', 'Django', 'MongoDB', 'n8n', 'UiPath', 'OpenRouter'].map(tech => (
                  <span key={tech} className="text-xs px-2 py-0.5 bg-knight-red/10 text-knight-red border border-knight-red/20 rounded font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Leadership Section */}
            <h3 className="font-outfit font-bold text-knight-white mb-6 flex items-center gap-3 reveal">
              <div className="w-8 h-8 bg-knight-red/15 border border-knight-red/30 rounded-sm flex items-center justify-center">
                <span className="text-sm">👑</span>
              </div>
              Leadership Roles
            </h3>
            <div className="space-y-3 reveal">
              {leadership.map((item, i) => (
                <div key={i} className="knight-card p-4 rounded-sm flex gap-4">
                  <div className="w-9 h-9 bg-knight-red/10 border border-knight-red/20 rounded-sm flex items-center justify-center flex-shrink-0 text-base">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-knight-white font-semibold text-sm font-outfit">{item.role}</p>
                    <p className="text-knight-gray-muted text-xs leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="font-outfit font-bold text-knight-white mb-8 flex items-center gap-3 reveal">
              <div className="w-8 h-8 bg-knight-red/15 border border-knight-red/30 rounded-sm flex items-center justify-center">
                <svg className="w-4 h-4 text-knight-red" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                </svg>
              </div>
              Education
            </h3>

            {/* Timeline */}
            <div className="relative reveal">
              {/* Vertical line */}
              <div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-knight-red via-knight-red/50 to-transparent" />

              <div className="space-y-8">
                {education.map((edu, i) => (
                  <div key={i} className="relative flex gap-6">
                    {/* Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-knight-red border-2 border-knight-red/40 flex items-center justify-center shadow-[0_0_12px_rgba(192,57,43,0.5)]">
                        <div className="w-2.5 h-2.5 bg-knight-white rounded-full" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="knight-card p-5 rounded-sm flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-outfit font-bold text-knight-white text-base leading-snug">{edu.degree}</h4>
                        <span className={`flex-shrink-0 text-xs font-mono font-bold ${i === 0 ? 'text-knight-red' : 'text-knight-gray-muted'}`}>
                          {edu.score}
                        </span>
                      </div>
                      <p className="text-knight-red text-sm font-medium mb-2">{edu.org}</p>
                      <div className="flex items-center gap-4 text-knight-gray-muted text-xs mb-3">
                        <span className="font-mono">📅 {edu.period}</span>
                        <span>📍 {edu.location}</span>
                      </div>
                      <div className="space-y-1">
                        {edu.highlights.map((h, j) => (
                          <p key={j} className="text-knight-gray-faint text-xs flex items-center gap-2">
                            <span className="text-knight-red text-xs">•</span>
                            {h}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
