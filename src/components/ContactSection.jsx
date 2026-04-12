import { useEffect, useRef, useState } from 'react';

const ContactSection = () => {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

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

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const formData = new FormData();
      formData.append('access_key', '34ba2f54-1a4b-499a-b0d1-0fb7c9639252'); // Replace with your key
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('subject', form.subject || `Portfolio Contact from ${form.name}`);
      formData.append('message', form.message);
      formData.append('from_name', 'Parag Suthar Portfolio');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'paragsuthar407@gmail.com', href: 'mailto:paragsuthar407@gmail.com' },
    { icon: '📞', label: 'Phone', value: '+91 9867618804', href: 'tel:+919867618804' },
    { icon: '📍', label: 'Location', value: 'Bhayander (East), Mumbai — 401105', href: '#' },
  ];

  return (
    <section id="contact" className="relative py-28 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-knight-black-2/30 to-transparent pointer-events-none" />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-knight-red/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="reveal mb-16 text-center">
          <p className="text-knight-red font-mono text-sm mb-2">// Let's Connect</p>
          <h2 className="font-outfit font-black text-4xl lg:text-5xl text-knight-white mb-4">
            Get In <span className="text-knight-red">Touch</span>
          </h2>
          <p className="text-knight-gray-muted text-base max-w-lg mx-auto">
            Whether you have a project in mind, a job opportunity, or just want to say hi — my inbox is always open.
          </p>
          <div className="flex justify-center mt-4">
            <div className="h-px bg-gradient-to-r from-transparent via-knight-red to-transparent w-48" />
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-6 reveal">
            <div>
              <p className="text-knight-gray-muted text-sm leading-relaxed mb-6">
                I'm currently open to new opportunities and collaborations. 
                Whether you want to build something amazing or just have a conversation — feel free to reach out!
              </p>
            </div>

            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.href}
                className="flex items-center gap-4 p-4 knight-card rounded-sm group transition-all duration-200 hover:border-knight-red/40"
              >
                <div className="w-10 h-10 bg-knight-red/10 border border-knight-red/20 rounded-sm flex items-center justify-center flex-shrink-0 text-base group-hover:bg-knight-red/20 transition-colors">
                  {info.icon}
                </div>
                <div>
                  <p className="text-knight-gray-muted text-xs font-medium">{info.label}</p>
                  <p className="text-knight-gray-faint text-sm">{info.value}</p>
                </div>
                <svg className="w-4 h-4 text-knight-red/40 ml-auto group-hover:text-knight-red transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            ))}

            {/* Social row */}
            <div className="pt-4">
              <p className="text-knight-gray-muted text-xs font-mono mb-3">// Social Profiles</p>
              <div className="flex gap-3">
                {[
                  { label: 'GitHub', icon: 'GH', href: '#' },
                  { label: 'LinkedIn', icon: 'LI', href: '#' },
                  { label: 'Instagram', icon: 'IG', href: '#' },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 border border-knight-gray/30 text-knight-gray-muted text-xs font-mono rounded-sm hover:border-knight-red/50 hover:text-knight-red transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 reveal">
            <div className="knight-card rounded-sm p-8 relative overflow-hidden">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-knight-red via-knight-red-deep to-transparent" />

              <h3 className="font-outfit font-bold text-knight-white text-lg mb-6 flex items-center gap-2">
                <span className="text-knight-red font-mono text-sm">{'>'}</span>
                Send Message
              </h3>

              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-900/20 border border-green-500/30 rounded-sm flex items-center gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <div>
                    <p className="text-green-400 font-medium text-sm">Message sent successfully!</p>
                    <p className="text-green-500/70 text-xs">I'll get back to you as soon as possible.</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-sm flex items-center gap-3">
                  <span className="text-knight-red text-xl">✗</span>
                  <div>
                    <p className="text-knight-red font-medium text-sm">Something went wrong!</p>
                    <p className="text-knight-gray-muted text-xs">Please try again or email me directly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-knight-gray-muted text-xs font-mono mb-1.5">your_name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="contact-input w-full px-4 py-3 rounded-sm text-sm font-inter placeholder:text-knight-gray/50"
                    />
                  </div>
                  <div>
                    <label className="block text-knight-gray-muted text-xs font-mono mb-1.5">your_email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="contact-input w-full px-4 py-3 rounded-sm text-sm font-inter placeholder:text-knight-gray/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-knight-gray-muted text-xs font-mono mb-1.5">subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration / Job Opportunity / etc."
                    className="contact-input w-full px-4 py-3 rounded-sm text-sm font-inter placeholder:text-knight-gray/50"
                  />
                </div>

                <div>
                  <label className="block text-knight-gray-muted text-xs font-mono mb-1.5">message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or how we can work together..."
                    className="contact-input w-full px-4 py-3 rounded-sm text-sm font-inter placeholder:text-knight-gray/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 bg-knight-red text-white font-outfit font-bold text-sm rounded-sm relative overflow-hidden transition-all duration-300 hover:bg-knight-red-bright hover:shadow-[0_0_25px_rgba(192,57,43,0.5)] disabled:opacity-60 disabled:cursor-not-allowed group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
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
                  </span>
                </button>

                <p className="text-knight-gray/40 text-xs text-center font-mono">
                  Powered by Web3Forms • Secure & spam-free
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
