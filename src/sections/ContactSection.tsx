import FadeIn from '../components/FadeIn';

const CONTACT_INFO = [
  {
    id: 'phone',
    label: 'Phone',
    value: '+91 9048499130',
    href: 'tel:+919048499130',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11 19.79 19.79 0 01.97 2.38 2 2 0 012.95.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
      </svg>
    ),
  },
  {
    id: 'email',
    label: 'Email',
    value: 'danishkpmariyad@gmail.com',
    href: 'mailto:danishkpmariyad@gmail.com',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 7L2 7" />
      </svg>
    ),
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/danishx3',
    href: 'https://github.com/danishx3',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Muhammed Danish KP',
    href: 'https://www.linkedin.com/in/muhammed-danish-kp-3158b5327/',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    /*
     * The white panel uses the same rounded-top + negative-margin pattern
     * as ServicesSection and AboutSection, so it slides smoothly over the
     * last sticky project card — no blank dark gap between them.
     * z-index: 30 ensures it paints above all project cards (z-index 1-3).
     */
    <section
      id="contact"
      className="bg-white rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[56px]
        -mt-8 sm:-mt-10 md:-mt-12 relative
        px-5 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-28"
      style={{ zIndex: 30 }}
    >
      {/* Heading */}
      <FadeIn scroll delay={0} y={40}>
        <h2
          className="font-black uppercase text-center text-[#0C0C0C] leading-none tracking-tight mb-4"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Contact
        </h2>
        <p
          className="text-center text-[#0C0C0C]/45 font-light max-w-xl mx-auto mb-14"
          style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)' }}
        >
          Have a project in mind or just want to say hello? Feel free to reach out.
        </p>
      </FadeIn>

      {/* Contact cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {CONTACT_INFO.map((item, i) => (
          <FadeIn key={item.id} scroll delay={i * 0.08} y={25}>
            <a
              href={item.href}
              target={item.id === 'github' || item.id === 'linkedin' ? '_blank' : undefined}
              rel={item.id === 'github' || item.id === 'linkedin' ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-4 rounded-2xl border border-[#0C0C0C]/10 bg-[#0C0C0C]/[0.04] px-5 py-5 transition-all duration-300 hover:bg-[#0C0C0C]/[0.08] hover:border-[#0C0C0C]/20 hover:shadow-sm"
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, rgba(182,0,168,0.12) 0%, rgba(118,33,176,0.12) 100%)',
                  color: '#7621B0',
                }}
              >
                {item.icon}
              </div>

              {/* Label + value */}
              <div className="flex flex-col min-w-0">
                <span className="text-[#0C0C0C]/40 font-medium uppercase tracking-widest" style={{ fontSize: '0.62rem' }}>
                  {item.label}
                </span>
                <span
                  className="text-[#0C0C0C] font-semibold truncate transition-colors duration-200 group-hover:text-[#7621B0]"
                  style={{ fontSize: 'clamp(0.82rem, 1.3vw, 1rem)' }}
                >
                  {item.value}
                </span>
              </div>

              {/* Arrow */}
              <div className="ml-auto flex-shrink-0 text-[#0C0C0C]/20 transition-all duration-300 group-hover:text-[#7621B0] group-hover:translate-x-0.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>

      {/* Big clickable email */}
      <FadeIn scroll delay={0.4} y={25}>
        <div className="mt-14 text-center">
          <p className="text-[#0C0C0C]/30 text-xs uppercase tracking-widest mb-3">Or drop a message directly</p>
          <a
            href="mailto:danishkmariyad@gmail.com"
            className="inline-block font-black uppercase tracking-tight text-[#0C0C0C] leading-none transition-opacity duration-200 hover:opacity-50 break-all"
            style={{ fontSize: 'clamp(1.2rem, 3.5vw, 3rem)' }}
          >
            danishkmariyad@gmail.com
          </a>
        </div>
      </FadeIn>

      {/* Footer */}
      <FadeIn scroll delay={0.5} y={15}>
        <div className="mt-14 pt-8 border-t border-[#0C0C0C]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span
            className="font-black uppercase text-transparent bg-clip-text"
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
              backgroundImage: 'linear-gradient(135deg, #B600A8, #7621B0)',
            }}
          >
            Muhammed Danish KP
          </span>
          <span className="text-[#0C0C0C]/30 text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} · All rights reserved
          </span>
        </div>
      </FadeIn>
    </section>
  );
}
