import { useEffect, useRef } from 'react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

const TECH_BADGES = ['C++', 'C', 'PHP', 'React', 'Node.js', 'MongoDB', 'Firebase'];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const dots: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    for (let i = 0; i < 45; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.2 + 0.4,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(182, 0, 168, 0.45)';
        ctx.fill();
      });
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(118, 33, 176, ${0.3 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col overflow-hidden"
      style={{ background: '#0C0C0C', minHeight: '100svh' }}
    >
      {/* Animated canvas bg */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      {/* Glow blobs */}
      <div className="absolute pointer-events-none" style={{ top: '-15%', right: '-8%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(182,0,168,0.16) 0%, transparent 65%)', zIndex: 0 }} />
      <div className="absolute pointer-events-none" style={{ bottom: '-10%', left: '-8%', width: '38vw', height: '38vw', background: 'radial-gradient(circle, rgba(118,33,176,0.12) 0%, transparent 65%)', zIndex: 0 }} />

      {/* ── Navbar ── */}
      <FadeIn delay={0} y={-20} as="nav" className="relative z-10 flex-shrink-0">
        <nav className="flex justify-between items-center px-6 md:px-10 pt-5 md:pt-7">
          <span
            className="font-black uppercase tracking-widest text-transparent bg-clip-text"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)', backgroundImage: 'linear-gradient(135deg, #B600A8, #7621B0)' }}
          >
            MD
          </span>
          <div className="flex gap-5 md:gap-9">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] font-medium uppercase tracking-wider transition-colors duration-200"
                style={{ fontSize: 'clamp(0.65rem, 1.1vw, 0.95rem)' }}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </FadeIn>

      {/* ── Main content — fills remaining height ── */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center px-6 md:px-10 lg:px-14 pt-6 pb-4 gap-6 lg:gap-10 min-h-0">

        {/* LEFT column */}
        <div className="flex flex-col gap-4 lg:gap-5 justify-center flex-1 order-2 lg:order-1">

          {/* Role badge */}
          <FadeIn delay={0.1} y={15}>
            <div className="inline-flex items-center gap-2 w-fit">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#B600A8' }} />
              <span className="text-[#D7E2EA]/55 font-medium uppercase tracking-widest" style={{ fontSize: 'clamp(0.6rem, 0.95vw, 0.78rem)' }}>
                Software Developer &amp; Systems Engineer
              </span>
            </div>
          </FadeIn>

          {/* Name */}
          <FadeIn delay={0.18} y={30}>
            <h1
              className="font-black uppercase tracking-tight leading-[0.88] text-[#D7E2EA]"
              style={{ fontSize: 'clamp(2.8rem, 6.5vw, 6.5rem)' }}
            >
              Muhammed{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #B600A8 0%, #7621B0 55%, #BE4C00 100%)' }}
              >
                Danish KP
              </span>
            </h1>
          </FadeIn>

          {/* Bio */}
          <FadeIn delay={0.28} y={15}>
            <p
              className="text-[#D7E2EA]/50 font-light leading-relaxed max-w-[430px]"
              style={{ fontSize: 'clamp(0.82rem, 1.25vw, 1.05rem)' }}
            >
              Building high-performance systems in C/C++ and modern web apps
              with MERN &amp; Firebase. 2+ years turning complex problems into
              elegant, efficient solutions.
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.36} y={15}>
            <div className="flex flex-wrap gap-3 items-center">
              <ContactButton />
              <a
                href="#projects"
                className="rounded-full border border-[#D7E2EA]/25 text-[#D7E2EA]/60 font-medium uppercase tracking-widest px-7 py-3 text-xs transition-all duration-200 hover:border-[#D7E2EA]/50 hover:text-[#D7E2EA]"
              >
                View Projects
              </a>
            </div>
          </FadeIn>

          {/* Social + email */}
          <FadeIn delay={0.44} y={15}>
            <div className="flex gap-4 items-center">
              <a href="https://github.com/danishx3" target="_blank" rel="noopener noreferrer" className="text-[#D7E2EA]/35 hover:text-[#D7E2EA] transition-colors duration-200" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/muhammed-danish-kp-3158b5327/" target="_blank" rel="noopener noreferrer" className="text-[#D7E2EA]/35 hover:text-[#D7E2EA] transition-colors duration-200" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <span className="w-10 h-px bg-[#D7E2EA]/15" />
              <span className="text-[#D7E2EA]/25 font-light" style={{ fontSize: 'clamp(0.6rem, 0.9vw, 0.75rem)' }}>
                danishkpmariyad@gmail.com
              </span>
            </div>
          </FadeIn>
        </div>

        {/* RIGHT column — photo */}
        <div className="relative flex-shrink-0 order-1 lg:order-2 flex items-center justify-center">
          <FadeIn delay={0.45} y={20}>
            <div className="relative">
              {/* Glow behind photo */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(182,0,168,0.35) 0%, rgba(118,33,176,0.25) 50%, rgba(190,76,0,0.15) 100%)',
                  filter: 'blur(28px)',
                  transform: 'scale(1.06)',
                }}
              />
              {/* Frame */}
              <div
                className="relative overflow-hidden"
                style={{
                  borderRadius: '24px',
                  border: '1.5px solid rgba(182,0,168,0.3)',
                  boxShadow: '0 0 50px rgba(182,0,168,0.18), 0 0 100px rgba(118,33,176,0.08)',
                }}
              >
                <img
                  src="/src/assets/photo.png"
                  alt="Muhammed Danish KP — Software Developer"
                  loading="eager"
                  className="block object-cover object-top"
                  style={{
                    width: 'clamp(200px, 24vw, 340px)',
                    height: 'clamp(240px, 30vw, 430px)',
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-20"
                  style={{ background: 'linear-gradient(to top, rgba(12,12,12,0.75), transparent)' }}
                />
              </div>

              {/* Badge — top right */}
              <div className="absolute -top-3 -right-3 rounded-xl px-3 py-1.5 border" style={{ background: 'rgba(12,12,12,0.92)', borderColor: 'rgba(182,0,168,0.35)', backdropFilter: 'blur(12px)' }}>
                <span className="text-[#D7E2EA] font-semibold text-xs uppercase tracking-widest">C++ / MERN</span>
              </div>

              {/* Badge — bottom left */}
              <div className="absolute -bottom-3 -left-3 rounded-xl px-3 py-1.5 border" style={{ background: 'rgba(12,12,12,0.92)', borderColor: 'rgba(118,33,176,0.35)', backdropFilter: 'blur(12px)' }}>
                <div className="flex items-baseline gap-1">
                  <span className="font-black text-[#D7E2EA]" style={{ fontSize: '1rem', lineHeight: 1 }}>2+</span>
                  <span className="text-[#D7E2EA]/45 text-[0.58rem] uppercase tracking-wider">Yrs Exp.</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ── Tech strip ── */}
      <FadeIn delay={0.55} y={10} className="relative z-10 flex-shrink-0">
        <div className="px-6 md:px-10 lg:px-14 pb-5 pt-2 flex flex-wrap gap-2 items-center">
          <span className="text-[#D7E2EA]/25 text-[0.6rem] uppercase tracking-widest mr-1">Stack</span>
          {TECH_BADGES.map((tech) => (
            <span
              key={tech}
              className="rounded-full border text-[#D7E2EA]/50 font-medium px-2.5 py-0.5 text-[0.62rem] uppercase tracking-wider"
              style={{ borderColor: 'rgba(215,226,234,0.12)', background: 'rgba(215,226,234,0.03)' }}
            >
              {tech}
            </span>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
