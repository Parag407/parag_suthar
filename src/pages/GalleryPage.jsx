import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ──────────────────────────────────────────
// DATA
// ──────────────────────────────────────────
const timelineData = [
  {
    year: '2021',
    period: 'May 2021',
    category: 'Academic',
    icon: '🎓',
    tag: 'Milestone',
    title: 'SSC Completion — 84.4%',
    org: 'The Saraswati Vidyalaya · Maharashtra State Board',
    desc: 'Completed secondary schooling with a score of 84.4%, laying the academic foundation for a tech-driven career. Developed early interests in computers and analytical thinking.',
    highlights: ['Score: 84.4%', 'Maharashtra State Board'],
    imgFile: 'ssc_2021.jpeg',
    imgPlaceholder: 'SSC Results & School Farewell',
    color: '#C0392B',
  },
  {
    year: '2023',
    period: 'June 2023',
    category: 'Academic',
    icon: '📚',
    tag: 'Achievement',
    title: 'HSC Completion — 90%',
    org: 'Shankar Narayan College, Mumbai University',
    desc: 'Cleared Higher Secondary with an exceptional 90%, excelling in science stream subjects. This milestone confirmed the passion for technology and set the path toward BSc IT.',
    highlights: ['Score: 90%', 'Science Stream', 'Mumbai University Board'],
    imgFile: 'hsc_2023.jpeg',
    imgPlaceholder: 'HSC Marksheet & Celebration',
    color: '#C0392B',
  },
  {
    year: '2023',
    period: 'August 2022 — Ongoing',
    category: 'Education',
    icon: '🏛️',
    tag: 'Journey',
    title: 'BSc IT at K.P.B. Hinduja College',
    org: 'K.P.B. Hinduja College, Mumbai University',
    desc: 'Enrolled in BSc Information Technology at one of Mumbai\'s premier colleges. Consistently maintained outstanding academic performance, culminating in a CGPA of 9.5 — the highest recognition of academic excellence.',
    highlights: ['CGPA: 9.5 (Outstanding)', '97.30% in SYBSC.IT'],
    imgFile: 'hinduja_college.webp',
    imgPlaceholder: 'Hinduja College Campus & Classroom',
    color: '#E74C3C',
  },
  {
    year: '2023',
    period: 'November 2023',
    category: 'Certification',
    icon: '📜',
    tag: 'Certified',
    title: 'HTML Bootcamp — Hotstar Clone',
    org: 'Devtown',
    desc: 'Completed the intensive HTML bootcamp and built a fully functional Hotstar clone as the capstone project, demonstrating proficiency in HTML, CSS and web structure.',
    highlights: ['Built Hotstar Clone', 'Front-end Fundamentals'],
    imgFile: 'html_bootcamp_cert.png',
    imgPlaceholder: 'Hotstar Clone Project & Certificate',
    color: '#C0392B',
  },
  {
    year: '2023',
    period: 'December 2023',
    category: 'Certification',
    icon: '🐍',
    tag: 'Certified',
    title: 'Python Programming Certification',
    org: 'Reliance Foundation Skilling Academy',
    desc: 'Earned the Python Programming certification through the Reliance Foundation\'s skilling initiative, gaining strong foundational and intermediate Python skills for data processing and automation.',
    highlights: ['Python Fundamentals', 'Data Processing', 'Reliance Foundation'],
    imgFile: 'python_cert.png',
    imgPlaceholder: 'Python Certificate Award Ceremony',
    color: '#C0392B',
  },
  {
    year: '2026',
    period: 'January 2026',
    category: 'Career',
    icon: '💼',
    tag: 'Internship',
    title: 'Full Stack Intern — Zamanat Pvt. Ltd.',
    org: 'Zamanat Pvt. Ltd. · Mumbai',
    desc: 'Began a transformative internship journey at Zamanat — an affordable financing solutions platform. Led end-to-end full stack development, worked with production systems, and integrated cutting-edge AI automation workflows.',
    highlights: ['React JS • Node JS • Django', 'MongoDB Atlas • Supabase', 'AI/n8n/UiPath Integration', 'Led Development Team'],
    imgFile: 'zamanat_internship.png',
    imgPlaceholder: 'Office & Team Working Sessions',
    color: '#E74C3C',
  },
  {
    year: '2024',
    period: 'February 2024',
    category: 'Certification',
    icon: '🎨',
    tag: 'Certified',
    title: 'UX Design Workshop — B87 Certification',
    org: 'UX Workshop Certification',
    desc: 'Attended and successfully completed the UX Design Workshop (Batch 87), gaining hands-on expertise in user research, wireframing, prototyping and design thinking principles.',
    highlights: ['Design Thinking', 'Wireframing & Prototyping', 'User Research'],
    imgFile: 'ux_workshop_cert.png',
    imgPlaceholder: 'Workshop Sessions & Design Work',
    color: '#C0392B',
  },
  {
    year: '2026',
    period: 'January 2026',
    category: 'Achievement',
    icon: '🥇',
    tag: '1st Place',
    title: '1st Prize — Debate Competition, HUNAR Fest',
    org: 'Lala Lajpat Rai College, Mumbai',
    desc: 'Secured First Prize in the Debate Competition at the HUNAR Intercollegiate Fest. Also achieved 2nd Runner-Up position for the entire event as the Contingent Leader, demonstrating exceptional public speaking and leadership.',
    highlights: ['1st Prize — Debate', '2nd Runner-Up — Contingent', 'Public Speaking Excellence'],
    imgFile: 'sankalp_lalas_college.png',
    imgPlaceholder: 'Trophy Ceremony & Debate Stage',
    color: '#FFD700',
  },
  {
    year: '2025',
    period: 'November 2025',
    category: 'Achievement',
    icon: '🥈',
    tag: '2nd Place',
    title: '1st Runner-Up — Pixarel, NM College Technotsav',
    org: 'N.M. College, Mumbai',
    desc: 'Won First Runner-Up at the Pixarel Digital Poster Design competition at NM College\'s prestigious Technotsav tech festival. Also achieved the same distinction at Lala Lajpat Rai College\'s Sankalp event.',
    highlights: ['Digital Poster Design', 'NM College Technotsav', 'LLR College Sankalp'],
    imgFile: 'pixarel_nm_college.png',
    imgPlaceholder: 'Digital Posters & Competition Hall',
    color: '#C0C0C0',
  },
  {
    year: '2024',
    period: 'August 2024',
    category: 'Certification',
    icon: '🤖',
    tag: 'Certified',
    title: 'Google Cloud: Prompt Design in Vertex AI',
    org: 'Google Cloud · Machine Learning & AI Skill Badge',
    desc: 'Earned the prestigious Google Cloud skill badge for Prompt Design in Vertex AI, demonstrating competency in generative AI, large language models, and cloud-based AI deployment.',
    highlights: ['Vertex AI', 'Generative AI / LLMs', 'Google Cloud Platform'],
    imgFile: 'google_cloud_cert.png',
    imgPlaceholder: 'Google Cloud Badge & Certificate',
    color: '#4285F4',
  },
  {
    year: '2024',
    period: 'September 2024',
    category: 'Certification',
    icon: '📊',
    tag: 'Certified',
    title: 'Fintech Certificate Program 2023–24',
    org: 'Finlabs',
    desc: 'Completed the comprehensive Fintech Certificate Program from Finlabs, covering financial technology landscapes, digital payments, blockchain fundamentals, and AI in finance.',
    highlights: ['FinTech Landscape', 'Digital Payments', 'AI in Finance'],
    imgFile: 'fintech_cert.png',
    imgPlaceholder: 'Fintech Seminar & Certificate',
    color: '#C0392B',
  },
  {
    year: '2024',
    period: 'October 2024',
    category: 'Certification',
    icon: '🖥️',
    tag: 'Certified',
    title: 'NodeJS & Express JS Bootcamp',
    org: 'Devtown — Instagram Auth Clone Backend',
    desc: 'Completed the NodeJS & Express JS bootcamp, building a production-grade Instagram Authentication Clone as the backend project. Mastered RESTful APIs, JWT authentication, and middleware architecture.',
    highlights: ['NodeJS • Express JS', 'Instagram Auth Clone', 'JWT & REST APIs'],
    imgFile: 'nodejs_bootcamp_cert.png',
    imgPlaceholder: 'Bootcamp Project & Certificate',
    color: '#C0392B',
  },
  {
    year: '2025',
    period: 'June 2025',
    category: 'Leadership',
    icon: '👑',
    tag: 'Leadership',
    title: 'Women Development Cell — HOD (Tech & Social Media)',
    org: 'K.P.B. Hinduja College',
    desc: 'Appointed as Head of Department for Technology & Social Media at the Hinduja College Women\'s Development Cell. Led digital campaigns, managed social platforms, and spearheaded technical initiatives for women empowerment.',
    highlights: ['Digital Campaign Strategy', 'Social Media Management', 'Tech Initiative Lead'],
    imgFile: 'wdc_technical.png',
    imgPlaceholder: 'WDC Events & Campaign Materials',
    color: '#E74C3C',
  },
  {
    year: '2026',
    period: 'January 2026',
    category: 'Project',
    icon: '🚀',
    tag: 'Built',
    title: 'GyanCode — Capstone Project Launch',
    org: 'BSc IT Final Year Project · Hinduja College',
    desc: 'Led the end-to-end development of GyanCode — an interactive code learning and assessment platform. Managed the team from requirement gathering through architecture, development, and final deployment.',
    highlights: ['React JS • Node JS • MongoDB', 'Team Leadership', 'Full Product Lifecycle'],
    imgFile: 'gyancode_launch.jpg',
    imgPlaceholder: 'GyanCode Platform Screenshots & Team',
    color: '#E74C3C',
  },
  {
    year: '2026',
    period: 'January 2026',
    category: 'Achievement',
    icon: '🥇',
    tag: '1st Place',
    title: '1st Prize — Corporate Clash, L.S. Raheja E-Summit\'26',
    org: 'L.S. Raheja College, Mumbai',
    desc: 'Won First Prize at the prestigious Corporate Clash business strategy competition at L.S. Raheja College\'s E-Summit\'26. Also secured 3rd Prize in Crisis Management at the same event, showcasing versatile business acumen.',
    highlights: ['1st Prize — Corporate Clash', '3rd Prize — Crisis Management', 'Business Strategy'],
    imgFile: 'corporate_clash_esummit.jpg',
    imgPlaceholder: 'E-Summit Stage & Trophy Moment',
    color: '#FFD700',
  },
  {
    year: '2025',
    period: 'June 2025',
    category: 'Leadership',
    icon: '🏆',
    tag: 'Leadership',
    title: 'E-Cell President — UNICORN\'26 Fest',
    org: 'K.P.B. Hinduja College E-Cell',
    desc: 'Served as E-Cell President and organized the flagship \'UNICORN\'26\' intercollegiate entrepreneurship festival. Managed a 30+ member organizing committee, coordinating sponsorships, logistics, events, and guest speakers.',
    highlights: ['30+ Member Team', 'UNICORN\'26 Fest', 'Sponsorship & Logistics'],
    imgFile: 'unicorn26_fest.png',
    imgPlaceholder: "UNICORN'26 Event & Team Photo",
    color: '#E74C3C',
  },
  {
    year: '2025',
    period: 'August 2025',
    category: 'Achievement',
    icon: '🥉',
    tag: 'Achievement',
    title: 'IT Department President & Hinduja E-Sports Launch',
    org: 'K.P.B. Hinduja College IT Department',
    desc: 'As IT Department President, conceptualized and launched \'Hinduja E-Sports\' — the college\'s first-ever esports event — from concept to full execution. Managed registrations, setup, and live streaming logistics.',
    highlights: ['IT Dept. President', 'First Esports Event', 'Full Event Execution'],
    imgFile: 'hinduja_esports.png',
    imgPlaceholder: 'E-Sports Event & Gaming Setup',
    color: '#CD7F32',
  },
  {
    year: '2026',
    period: 'May 2026',
    category: 'Academic',
    icon: '🎓',
    tag: 'Milestone',
    title: 'BSc IT Graduation — CGPA 9.5',
    org: 'K.P.B. Hinduja College, Mumbai University',
    desc: 'Completed BSc Information Technology with an outstanding CGPA of 9.5 — the culmination of three years of academic excellence, technical growth, leadership activities, and multiple accolades across Mumbai.',
    highlights: ['CGPA: 9.5 (Outstanding)', 'BSc IT Graduate', 'Full Journey Complete'],
    imgFile: 'bsc_graduation.jpg',
    imgPlaceholder: 'Graduation Day & Certificate',
    color: '#E74C3C',
  },
];

const categoryColors = {
  Academic: '#8B5CF6',
  Education: '#3B82F6',
  Certification: '#10B981',
  Career: '#F59E0B',
  Achievement: '#FFD700',
  Leadership: '#EC4899',
  Project: '#C0392B',
};

const categoryFilter = ['All', 'Academic', 'Career', 'Achievement', 'Certification', 'Leadership', 'Project'];

// ──────────────────────────────────────────
// IMAGE COMPONENT (real image or placeholder)
// ──────────────────────────────────────────
const GalleryImage = ({ imgFile, label, color }) => {
  const [loaded, setLoaded] = useState(false);
  const [error,  setError]  = useState(false);
  const src = `/assets/gallery/${imgFile}`;

  if (!imgFile || error) {
    return (
      <div
        className="relative w-full aspect-video rounded-sm overflow-hidden flex flex-col items-center justify-center gap-3 transition-all duration-300"
        style={{
          background: `linear-gradient(135deg, rgba(${color === '#FFD700' ? '255,215,0' : '192,57,43'}, 0.08), rgba(17,17,17,0.9))`,
          border: `1px dashed ${color}40`,
        }}
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(${color}20 1px, transparent 1px), linear-gradient(90deg, ${color}20 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
        <div className="absolute top-2 left-2 w-4 h-4" style={{ borderTop: `1.5px solid ${color}60`, borderLeft: `1.5px solid ${color}60` }} />
        <div className="absolute top-2 right-2 w-4 h-4" style={{ borderTop: `1.5px solid ${color}60`, borderRight: `1.5px solid ${color}60` }} />
        <div className="absolute bottom-2 left-2 w-4 h-4" style={{ borderBottom: `1.5px solid ${color}60`, borderLeft: `1.5px solid ${color}60` }} />
        <div className="absolute bottom-2 right-2 w-4 h-4" style={{ borderBottom: `1.5px solid ${color}60`, borderRight: `1.5px solid ${color}60` }} />
        <div className="w-10 h-10 rounded-sm flex items-center justify-center z-10" style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
          <svg className="w-5 h-5 opacity-50" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ color }}>
            <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="z-10 text-center px-4">
          <p className="text-xs font-mono opacity-50" style={{ color }}>[ Add photo ]</p>
          <p className="text-[10px] opacity-35 mt-0.5 font-mono text-knight-gray-faint">/assets/gallery/{imgFile}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-knight-black-3">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-t-2 border-knight-red rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={label}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
      {loaded && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      )}
    </div>
  );
};

// ──────────────────────────────────────────
// TIMELINE CARD
// ──────────────────────────────────────────
const TimelineCard = ({ item, index, isLeft }) => {
  const catColor = categoryColors[item.category] || '#C0392B';
  const tagBg = item.tag === '1st Place' ? '#FFD70020' : item.tag === '2nd Place' ? '#C0C0C020' : 'rgba(192,57,43,0.12)';
  const tagColor = item.tag === '1st Place' ? '#FFD700' : item.tag === '2nd Place' ? '#C0C0C0' : '#C0392B';

  return (
    <div className={`relative flex items-start gap-0 group ${
      /* On mobile: always single column (left aligned), on md+ alternate sides */
      isLeft ? 'md:flex-row flex-row' : 'md:flex-row-reverse flex-row'
    }`}>
      {/* Card — full width on mobile, half width on md+ */}
      <div className={`w-full md:w-[calc(50%-28px)] ${isLeft ? 'md:pr-6 md:text-right' : 'md:pl-6 md:text-left'} pl-6`}>
        <div
          className="knight-card rounded-sm p-5 transition-all duration-300 group-hover:shadow-[0_0_24px_rgba(192,57,43,0.18)] relative overflow-hidden"
          style={{ borderColor: `${item.color}25` }}
        >
          {/* Color top bar */}
          <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }} />

          {/* Header */}
          <div className={`flex items-center gap-2 mb-3 ${isLeft ? 'md:justify-end justify-start' : 'justify-start'}`}>
            <span
              className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded"
              style={{ background: tagBg, color: tagColor, border: `1px solid ${tagColor}30` }}
            >
              {item.tag}
            </span>
            <span
              className="text-[10px] font-mono px-2 py-0.5 rounded"
              style={{ background: `${catColor}15`, color: catColor, border: `1px solid ${catColor}25` }}
            >
              {item.category}
            </span>
          </div>

          {/* Image */}
          <div className="mb-4">
            <GalleryImage imgFile={item.imgFile} label={item.imgPlaceholder} color={item.color} />
          </div>

          {/* Period */}
          <p className="text-xs font-mono mb-1" style={{ color: `${item.color}80` }}>📅 {item.period}</p>

          {/* Title */}
          <h3 className="font-outfit font-bold text-knight-white text-base leading-snug mb-1">{item.title}</h3>
          <p className="font-inter text-xs mb-3" style={{ color: item.color }}>{item.org}</p>

          {/* Desc */}
          <p className="text-knight-gray-muted text-xs leading-relaxed mb-3">{item.desc}</p>

          {/* Highlights */}
          <div className={`flex flex-wrap gap-1.5 ${isLeft ? 'md:justify-end justify-start' : 'justify-start'}`}>
            {item.highlights.map((h, i) => (
              <span
                key={i}
                className="text-[10px] px-2 py-0.5 font-mono rounded"
                style={{ background: '#1A1A1A', border: '1px solid #2D2D2D', color: '#888' }}
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Center dot — always on left on mobile, center on md+ */}
      <div className="absolute -left-3 md:static flex flex-col items-center flex-shrink-0 mt-5 z-10">
        <div
          className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-base md:text-lg shadow-lg transition-all duration-300 group-hover:scale-110"
          style={{
            background: `radial-gradient(circle, ${item.color}30, ${item.color}10)`,
            border: `2px solid ${item.color}60`,
            boxShadow: `0 0 12px ${item.color}30`,
          }}
        >
          {item.icon}
        </div>
      </div>

      {/* Spacer right/left — hidden on mobile */}
      <div className="hidden md:block md:w-[calc(50%-28px)]" />
    </div>
  );
};

// ──────────────────────────────────────────
// MAIN PAGE
// ──────────────────────────────────────────
const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeYear, setActiveYear] = useState('All');
  const years = ['All', ...Array.from(new Set(timelineData.map(i => i.year))).sort()];

  const filtered = timelineData.filter(item => {
    const catMatch = activeFilter === 'All' || item.category === activeFilter;
    const yearMatch = activeYear === 'All' || item.year === activeYear;
    return catMatch && yearMatch;
  });

  // Group by year for year labels
  const grouped = filtered.reduce((acc, item) => {
    if (!acc[item.year]) acc[item.year] = [];
    acc[item.year].push(item);
    return acc;
  }, {});

  return (
    <div className="relative min-h-screen bg-knight-black">
      <div className="noise-overlay" />
      <ParticleBackground />

      <div className="relative z-10">
        <Navbar />

        {/* Hero Banner */}
        <div className="relative pt-28 sm:pt-32 pb-16 px-4 sm:px-6 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[300px] rounded-full bg-knight-red/5 blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-knight-gray-muted mb-6">
              <Link to="/" className="hover:text-knight-red transition-colors">Home</Link>
              <span className="text-knight-red">/</span>
              <span className="text-knight-gray-faint">Gallery</span>
            </div>

            <p className="text-knight-red font-mono text-sm mb-3">// Achievement Timeline</p>
            <h1 className="font-outfit font-black text-4xl sm:text-5xl lg:text-6xl text-knight-white mb-4">
              My <span className="text-knight-red">Journey</span>
            </h1>
            <p className="text-knight-gray-muted text-base max-w-xl leading-relaxed mb-6">
              A chronological storyboard of every milestone, achievement, certification and leadership moment — 
              from SSC to BSc IT graduation and beyond.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {[
                { label: 'Milestones', value: timelineData.length },
                { label: 'Years Covered', value: '2021–2026' },
                { label: 'Awards Won', value: '4+' },
                { label: 'Certifications', value: '6' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="font-outfit font-black text-2xl text-knight-red">{s.value}</div>
                  <div className="text-knight-gray-muted text-xs font-mono">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="sticky top-16 z-40 bg-knight-black/90 backdrop-blur-md border-b border-knight-red/10 px-4 sm:px-6 py-3 sm:py-4">
          <div className="max-w-7xl mx-auto">
            {/* Category filters */}
            <div className="flex flex-wrap gap-2 mb-3">
              {categoryFilter.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3 py-1 text-xs font-mono font-medium rounded-sm transition-all duration-200 ${
                    activeFilter === cat
                      ? 'bg-knight-red text-white shadow-[0_0_10px_rgba(192,57,43,0.4)]'
                      : 'border border-knight-gray/30 text-knight-gray-muted hover:border-knight-red/50 hover:text-knight-red'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Year filter */}
            <div className="flex flex-wrap gap-2">
              {years.map(y => (
                <button
                  key={y}
                  onClick={() => setActiveYear(y)}
                  className={`px-3 py-1 text-xs font-mono rounded-sm transition-all duration-200 ${
                    activeYear === y
                      ? 'bg-knight-black-4 text-knight-red border border-knight-red/40'
                      : 'text-knight-gray/50 hover:text-knight-gray-muted'
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          {Object.keys(grouped).sort().map(year => (
            <div key={year} className="mb-16">
              {/* Year badge */}
              <div className="flex items-center justify-center mb-10">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-knight-red/30" />
                <div className="mx-4 px-5 py-2 bg-knight-red/10 border border-knight-red/30 rounded-sm shadow-[0_0_15px_rgba(192,57,43,0.2)]">
                  <span className="font-outfit font-black text-knight-red text-lg tracking-widest">{year}</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-knight-red/30" />
              </div>

              {/* Items */}
              <div className="relative">
                {/* Vertical line - hidden on mobile where we use absolute positioning */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-knight-red/40 via-knight-red/20 to-transparent -translate-x-1/2" />
                {/* Vertical line for mobile (left side) */}
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-knight-red/40 via-knight-red/20 to-transparent" />

                <div className="space-y-10">
                  {grouped[year].map((item, i) => (
                    <TimelineCard key={i} item={item} index={i} isLeft={i % 2 === 0} />
                  ))}
                </div>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="text-4xl mb-4">🔍</p>
              <p className="text-knight-gray-muted font-mono text-sm">No milestones match this filter.</p>
              <button
                onClick={() => { setActiveFilter('All'); setActiveYear('All'); }}
                className="mt-4 px-4 py-2 border border-knight-red/40 text-knight-red text-xs font-mono rounded-sm hover:bg-knight-red/10 transition-all"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Future section */}
          <div className="flex items-center justify-center mt-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-knight-red/20" />
            <div className="mx-4 px-5 py-3 border border-dashed border-knight-red/30 rounded-sm text-center">
              <p className="text-knight-red/60 font-mono text-xs">🚀 The journey continues...</p>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-knight-red/20" />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default GalleryPage;
