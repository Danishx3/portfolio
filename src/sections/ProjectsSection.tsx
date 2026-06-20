import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

const PROJECTS = [
  {
    num: '01',
    category: 'Firebase Realtime',
    name: 'Ilmify',
    url: 'https://ilmify.me',
    tech: ['Firebase', 'Firebase Realtime db'],
    col1img1: 'https://i.ibb.co/4w9hbTRd/Screenshot-2026-06-20-202339.png',
    col1img2: 'https://i.ibb.co/FGTPbsj/Screenshot-2026-06-20-201733.png',
    col2img: 'https://i.ibb.co/v4BFN6KY/Screenshot-2026-06-20-201519.png',
  },
  {
    num: '02',
    category: 'Firebase Realtime',
    name: 'E-Com Platform',
    url: 'https://toymall.co.in',
    tech: ['Firebase'],
    col1img1: 'https://i.ibb.co/PZzSMJhz/Screenshot-2026-06-20-205926.png',
    col1img2: 'https://i.ibb.co/0p0SMcS3/Screenshot-2026-06-20-210042.png',
    col2img: 'https://i.ibb.co/Fb93N0K8/Screenshot-2026-06-20-210207.png',
  }
];

const TOTAL_CARDS = PROJECTS.length;

interface ProjectCardProps {
  project: (typeof PROJECTS)[0];
  index: number;
  totalCards: number;
}

function ProjectCard({ project, index, totalCards }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isLast = index === totalCards - 1;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, !isLast ? 0.88 : 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, !isLast ? 0.65 : 1]);

  const borderRadius = 'clamp(20px, 3vw, 40px)';

  return (
    <div
      ref={containerRef}
      className="sticky top-0 h-screen"
      style={{ zIndex: index + 1 }}
    >
      {/*
       * The motion.div + inner card both use flex-col + flex-1 so the card
       * always fills the full h-screen — no blank gap left underneath.
       */}
      <motion.div
        className="h-full flex flex-col px-4 sm:px-6 md:px-8 pt-5 sm:pt-6 pb-4 sm:pb-5"
        style={{ scale, opacity, originY: 0 }}
      >
        <div
          className="w-full border border-[#D7E2EA]/20 bg-[#111111] p-4 sm:p-5 md:p-6 flex flex-col flex-1 min-h-0"
          style={{ borderRadius }}
        >
          {/* Header row — fixed height */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3 flex-shrink-0">
            <div className="flex items-center gap-3 sm:gap-5">
              <span
                className="font-black text-[#D7E2EA] leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(2.2rem, 7vw, 100px)' }}
              >
                {project.num}
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="text-[#D7E2EA]/45 font-light uppercase tracking-widest" style={{ fontSize: 'clamp(0.55rem, 0.9vw, 0.8rem)' }}>
                  {project.category}
                </span>
                <span className="text-[#D7E2EA] font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(0.9rem, 2.2vw, 2.4rem)' }}>
                  {project.name}
                </span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[#D7E2EA]/50 border border-[#D7E2EA]/20 rounded-full px-2 py-0.5" style={{ fontSize: 'clamp(0.5rem, 0.75vw, 0.68rem)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <LiveProjectButton url={project.url} />
          </div>

          {/* Image grid — grows to fill all remaining card height */}
          <div className="flex gap-2 sm:gap-3 flex-1 min-h-0">
            {/* Left column — two stacked images */}
            <div className="flex flex-col gap-2 sm:gap-3 min-h-0" style={{ width: '40%' }}>
              <img
                src={project.col1img1}
                alt={`${project.name} 1`}
                loading="lazy"
                className="w-full object-cover flex-1 min-h-0"
                style={{ borderRadius }}
              />
              <img
                src={project.col1img2}
                alt={`${project.name} 2`}
                loading="lazy"
                className="w-full object-cover flex-1 min-h-0"
                style={{ borderRadius }}
              />
            </div>
            {/* Right column — single tall image */}
            <div className="flex flex-col min-h-0" style={{ width: '60%' }}>
              <img
                src={project.col2img}
                alt={`${project.name} 3`}
                loading="lazy"
                className="w-full object-cover flex-1 min-h-0"
                style={{ borderRadius }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[56px] -mt-8 sm:-mt-10 md:-mt-12 relative"
      style={{ zIndex: 10 }}
    >
      {/* Heading */}
      <div className="px-4 sm:px-6 md:px-8 pt-10 sm:pt-14 pb-6 sm:pb-8">
        <FadeIn scroll delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Projects
          </h2>
        </FadeIn>
      </div>

      {/* Stacking cards */}
      {PROJECTS.map((project, i) => (
        <ProjectCard key={project.num} project={project} index={i} totalCards={TOTAL_CARDS} />
      ))}
    </section>
  );
}
