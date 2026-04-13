import { useState } from 'react';
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const contactInfo = [
  { icon: '📧', label: 'Email',    value: 'paragsuthar407@gmail.com', href: 'mailto:paragsuthar407@gmail.com' },
  { icon: '📞', label: 'Phone',    value: '+91 9867618804',            href: 'tel:+919867618804' },
  { icon: '📍', label: 'Location', value: 'Bhayander (East), Mumbai — 401105', href: '#' },
];

const ContactPage = () => {
  const [form,   setForm]   = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');
    try {
      const fd = new FormData();
      fd.append('access_key', '10124819-3d3f-40a2-82fe-de976ed36f69'); // ← replace with your key
      fd.append('name',    form.name);
      fd.append('email',   form.email);
      fd.append('subject', form.subject || `Portfolio Contact from ${form.name}`);
      fd.append('message', form.message);
      fd.append('from_name', 'Parag Suthar Portfolio');

      const res  = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
      const data = await res.json();
      setStatus(data.success ? 'success' : 'error');
      if (data.success) setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <div className="relative min-h-screen bg-knight-black">
      <div className="noise-overlay" />
      <ParticleBackground />

      <div className="relative z-10">
        <Navbar />

        {/* ── Banner ── */}
        <div className="relative pt-28 sm:pt-32 pb-10 px-4 sm:px-6 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[480px] h-[280px] rounded-full bg-knight-red/5 blur-3xl" />
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex items-center gap-2 text-xs font-mono text-knight-gray-muted mb-6">
              <Link to="/" className="hover:text-knight-red transition-colors">Home</Link>
              <span className="text-knight-red">/</span>
              <span className="text-knight-gray-faint">Contact</span>
            </div>
            <p className="text-knight-red font-mono text-sm mb-3">// Let's Connect</p>
            <h1 className="font-outfit font-black text-4xl sm:text-5xl lg:text-6xl text-knight-white mb-4">
              Get In <span className="text-knight-red">Touch</span>
            </h1>
            <p className="text-knight-gray-muted text-base max-w-xl leading-relaxed">
              Whether you have a project in mind, a job opportunity, or just want to say hi — my inbox is always open.
            </p>
            <div className="mt-6 h-px bg-gradient-to-r from-knight-red/40 via-knight-red/10 to-transparent w-64" />
          </div>
        </div>

        {/* ── Body ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-16 sm:pb-24">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

            {/* Left: info + social */}
            <div className="lg:col-span-2 space-y-5">
              <p className="text-knight-gray-muted text-sm leading-relaxed">
                I'm currently open to new opportunities and collaborations.
                Feel free to reach out — I reply within 24 hours.
              </p>

              {contactInfo.map((info, i) => (
                <a
                  key={i}
                  href={info.href}
                  className="flex items-center gap-4 p-4 knight-card rounded-sm group hover:border-knight-red/40 transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-knight-red/10 border border-knight-red/20 rounded-sm flex items-center justify-center flex-shrink-0 text-base group-hover:bg-knight-red/20 transition-colors">
                    {info.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-knight-gray-muted text-xs font-medium">{info.label}</p>
                    <p className="text-knight-gray-faint text-sm truncate">{info.value}</p>
                  </div>
                  <svg className="w-4 h-4 text-knight-red/30 ml-auto flex-shrink-0 group-hover:text-knight-red transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              ))}

              <div className="pt-2">
                <p className="text-knight-gray-muted text-xs font-mono mb-3">// Social Profiles</p>
                <div className="flex gap-3">
                  {[
                    { label: 'LinkedIn', icon: <i className="fab fa-linkedin-in text-base"></i>, href: 'https://www.linkedin.com/in/parag-suthar-05b50b280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
                    { label: 'GitHub',   icon: <i className="fab fa-github text-base"></i>, href: 'https://github.com/Parag407' },
                    { label: 'Twitter',  icon: <i className="fab fa-twitter text-base"></i>, href: 'https://x.com/paragsuthar407?t=E4wwf9vWGn0fnEue3KPZPA&s=09' },
                    { label: 'Instagram',icon: <i className="fab fa-instagram text-base"></i>, href: 'https://www.instagram.com/parag_ig?igsh=MWdzNml1dHdrYm04bg==' },
                  ].map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      title={s.label}
                      className="w-10 h-10 flex items-center justify-center border border-knight-gray/30 text-knight-gray-muted rounded-full hover:border-knight-red/50 hover:text-white hover:bg-knight-red/20 transition-all duration-200"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Download CV */}
              <div className="pt-4 border-t border-knight-black-5">
                <p className="text-knight-gray-muted text-xs font-mono mb-3">// Resume</p>
                <a
                  href="/assets/Parag_Kumar_Suthar_Resume.pdf"
                  download="Parag_Kumar_Suthar_Resume.pdf"
                  className="group flex items-center justify-center gap-2 w-full py-3 border border-knight-red/40 text-knight-red text-sm font-outfit font-semibold rounded-sm transition-all duration-300 hover:bg-knight-red/10 hover:border-knight-red hover:shadow-[0_0_18px_rgba(192,57,43,0.25)]"
                >
                  <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download CV
                </a>
              </div>

              {/* Quick links */}
              <div className="pt-4 border-t border-knight-black-5">
                <p className="text-knight-gray-muted text-xs font-mono mb-3">// Other Pages</p>
                <div className="flex flex-col gap-2">
                  {[
                    { label: 'View All Projects →', path: '/projects' },
                    { label: 'Achievement Gallery →', path: '/gallery' },
                    { label: 'About Me →', path: '/about' },
                  ].map(({ label, path }) => (
                    <Link
                      key={path}
                      to={path}
                      className="text-xs font-mono text-knight-gray-muted hover:text-knight-red transition-colors"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <div className="knight-card rounded-sm p-5 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-knight-red via-knight-red-deep to-transparent" />

                <h2 className="font-outfit font-bold text-knight-white text-xl mb-6 flex items-center gap-2">
                  <span className="text-knight-red font-mono text-sm">›</span>
                  Send a Message
                </h2>

                {/* Success */}
                {status === 'success' && (
                  <div className="mb-6 p-4 bg-green-900/20 border border-green-500/30 rounded-sm flex items-start gap-3">
                    <span className="text-green-400 text-lg flex-shrink-0">✓</span>
                    <div>
                      <p className="text-green-400 font-semibold text-sm">Message sent!</p>
                      <p className="text-green-500/70 text-xs mt-0.5">I'll get back to you ASAP.</p>
                    </div>
                  </div>
                )}

                {/* Error */}
                {status === 'error' && (
                  <div className="mb-6 p-4 bg-red-900/20 border border-knight-red/30 rounded-sm flex items-start gap-3">
                    <span className="text-knight-red text-lg flex-shrink-0">✗</span>
                    <div>
                      <p className="text-knight-red font-semibold text-sm">Something went wrong.</p>
                      <p className="text-knight-gray-muted text-xs mt-0.5">Try again or email me directly.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-knight-gray-muted text-xs font-mono mb-1.5">Name <span className="text-knight-red">*</span></label>
                      <input
                        type="text" name="name" value={form.name} onChange={handleChange} required
                        placeholder="John Doe"
                        className="contact-input w-full px-4 py-3 rounded-sm text-sm font-inter placeholder:text-knight-gray/35"
                      />
                    </div>
                    <div>
                      <label className="block text-knight-gray-muted text-xs font-mono mb-1.5">Email <span className="text-knight-red">*</span></label>
                      <input
                        type="email" name="email" value={form.email} onChange={handleChange} required
                        placeholder="john@example.com"
                        className="contact-input w-full px-4 py-3 rounded-sm text-sm font-inter placeholder:text-knight-gray/35"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-knight-gray-muted text-xs font-mono mb-1.5">Subject</label>
                    <input
                      type="text" name="subject" value={form.subject} onChange={handleChange}
                      placeholder="Project idea / Job opportunity / Collaboration..."
                      className="contact-input w-full px-4 py-3 rounded-sm text-sm font-inter placeholder:text-knight-gray/35"
                    />
                  </div>

                  <div>
                    <label className="block text-knight-gray-muted text-xs font-mono mb-1.5">Message <span className="text-knight-red">*</span></label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} required rows={6}
                      placeholder="Tell me about your project or how we can work together..."
                      className="contact-input w-full px-4 py-3 rounded-sm text-sm font-inter placeholder:text-knight-gray/35 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3.5 bg-knight-red text-white font-outfit font-bold text-sm rounded-sm transition-all duration-300 hover:bg-knight-red-bright hover:shadow-[0_0_25px_rgba(192,57,43,0.5)] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="knight-loader scale-75" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-center text-knight-gray/35 text-xs font-mono">
                    Secured by Web3Forms · No spam, ever.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
