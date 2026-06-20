import React from 'react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const ABOUT_TEXT =
  'Software Developer specializing in high-performance C++, C, PHP, and the MERN stack. With over 2+ years of experience, I build optimized systems and modern web applications — from scalable backends to polished frontends. Let\u2019s build something powerful together!';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 py-20"
    >
      {/* Decorative 3D images */}

      {/* Top-left: Moon */}
      <FadeIn
        scroll
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon decoration"
          className="w-[120px] sm:w-[160px] md:w-[210px]"
          loading="lazy"
        />
      </FadeIn>

      {/* Bottom-left: 3D object */}
      <FadeIn
        scroll
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D object decoration"
          className="w-[100px] sm:w-[140px] md:w-[180px]"
          loading="lazy"
        />
      </FadeIn>

      {/* Top-right: Lego icon */}
      <FadeIn
        scroll
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego decoration"
          className="w-[120px] sm:w-[160px] md:w-[210px]"
          loading="lazy"
        />
      </FadeIn>

      {/* Bottom-right: 3D group */}
      <FadeIn
        scroll
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D group decoration"
          className="w-[130px] sm:w-[170px] md:w-[220px]"
          loading="lazy"
        />
      </FadeIn>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-10 sm:gap-14 md:gap-16">
        {/* Heading */}
        <FadeIn scroll delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Text + Button group */}
        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text={ABOUT_TEXT}
            className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' } as React.CSSProperties}
          />

          <FadeIn scroll delay={0.3} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
