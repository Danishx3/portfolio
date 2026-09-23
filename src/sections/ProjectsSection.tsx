import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

const PROJECTS = [
  {
    num: '01',
    category: 'Firebase Realtime',
    name: 'Ilmify',
    url: 'https://ilmify.me',
    tech: ['Firebase', 'Firebase Realtime db'],
    images: [
      'https://i.ibb.co/v4BFN6KY/Screenshot-2026-06-20-201519.png',
      'https://i.ibb.co/4w9hbTRd/Screenshot-2026-06-20-202339.png',
      'https://i.ibb.co/FGTPbsj/Screenshot-2026-06-20-201733.png',
    ],
  },
  {
    num: '02',
    category: 'Firebase Realtime',
    name: 'Toymall',
    url: 'https://toymall.co.in',
    tech: ['Firebase', 'Ecom website'],
    images: [
      'https://i.ibb.co/Fb93N0K8/Screenshot-2026-06-20-210207.png',
      'https://i.ibb.co/PZzSMJhz/Screenshot-2026-06-20-205926.png',
      'https://i.ibb.co/0p0SMcS3/Screenshot-2026-06-20-210042.png',
    ],
  },
  {
    num: '03',
    category: 'Firebase Realtime',
    name: 'Miyakids',
    url: 'https://miyakids.com',
    tech: ['Firebase', 'Ecom website'],
    images: [
      'https://i.ibb.co/Xf2xRTTc/Screenshot-2026-09-23-193213.webp',
      'https://i.ibb.co/rCWfFrg/Screenshot-2026-09-23-192736.webp',
    ],
  },
  {
    num: '04',
    category: 'Next Js',
    name: 'Mahal  Administration',
    url: 'https://mahal-rho.vercel.app',
    tech: ['React', 'Next Js', 'Supabase', 'Postgres'],
    images: [
      'https://i.ibb.co/6SPh0Zj/Screenshot-2026-09-23-194210.webp',
      'https://i.ibb.co/8g8wXMzR/Screenshot-2026-09-23-194229.webp',
      'https://i.ibb.co/b5z6Hc7V/Screenshot-2026-09-23-194414.webp',
    ],
  },
];

interface ProjectCardProps {
  project: (typeof PROJECTS)[number];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = (slideIndex: number) => {
    const slide = galleryRef.current?.children[slideIndex] as HTMLElement | undefined;
    slide?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  };

  const updateActiveSlide = () => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const slides = Array.from(gallery.children) as HTMLElement[];
    const closestIndex = slides.reduce((closest, slide, slideIndex) => {
      const galleryLeft = gallery.getBoundingClientRect().left;
      const distance = Math.abs(slide.getBoundingClientRect().left - galleryLeft);
      const closestDistance = Math.abs(slides[closest].getBoundingClientRect().left - galleryLeft);
      return distance < closestDistance ? slideIndex : closest;
    }, 0);

    setActiveSlide(closestIndex);
  };

  const showAdjacentSlide = (direction: -1 | 1) => {
    const nextIndex = (activeSlide + direction + project.images.length) % project.images.length;
    goToSlide(nextIndex);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 0.7, 0.25, 1] }}
      whileHover={{ y: -3 }}
      className="project-card grid overflow-hidden rounded-[26px] border border-[#D7E2EA]/10 bg-[#111315] shadow-[0_24px_90px_rgba(0,0,0,0.22)] transition-colors duration-300 hover:border-[#D7E2EA]/25 sm:rounded-[32px]"
    >
      <div className="project-details flex flex-col justify-between gap-8 p-5 sm:p-7 lg:p-9">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="font-black leading-none text-[#D7E2EA]/80" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              {project.num}
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-[#D7E2EA]/35 to-transparent" />
          </div>

          <p className="mb-2 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[#D7E2EA]/45 sm:text-xs">
            {project.category}
          </p>
          <h3 className="max-w-[14ch] text-3xl font-black uppercase leading-[0.95] tracking-tight text-[#D7E2EA] sm:text-4xl lg:text-[2.75rem]">
            {project.name}
          </h3>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-[#D7E2EA]/15 px-3 py-1 text-[0.65rem] text-[#D7E2EA]/60 sm:text-xs"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <LiveProjectButton url={project.url} className="project-live-button self-start" />
      </div>

      <div className="project-gallery-wrap min-w-0 p-3 sm:p-4 lg:p-5">
        <div
          ref={galleryRef}
          className="project-gallery"
          onScroll={updateActiveSlide}
          aria-label={`${project.name} screenshots`}
        >
          {project.images.map((src, imageIndex) => (
            <div className="project-gallery-slide" key={src}>
              <img
                src={src}
                alt={`${project.name} screenshot ${imageIndex + 1}`}
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between gap-3 px-1 sm:mt-4 sm:px-2">
          <span className="min-w-[3.5rem] font-mono text-[0.7rem] tracking-wider text-[#D7E2EA]/45" aria-live="polite">
            {String(activeSlide + 1).padStart(2, '0')} <span className="text-[#D7E2EA]/20">/</span> {String(project.images.length).padStart(2, '0')}
          </span>

          <div className="flex items-center gap-2" aria-label="Choose screenshot">
            {project.images.map((_, slideIndex) => (
              <button
                key={slideIndex}
                type="button"
                className={`project-slide-dot ${slideIndex === activeSlide ? 'is-active' : ''}`}
                onClick={() => goToSlide(slideIndex)}
                aria-label={`Show screenshot ${slideIndex + 1}`}
                aria-pressed={slideIndex === activeSlide}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              className="project-slide-arrow"
              onClick={() => showAdjacentSlide(-1)}
              aria-label="Previous screenshot"
            >
              <ArrowLeft size={16} strokeWidth={1.8} />
            </button>
            <button
              type="button"
              className="project-slide-arrow"
              onClick={() => showAdjacentSlide(1)}
              aria-label="Next screenshot"
            >
              <ArrowRight size={16} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-8 rounded-t-[36px] bg-[#0C0C0C] px-4 pb-16 pt-10 sm:-mt-10 sm:rounded-t-[48px] sm:px-6 sm:pb-24 sm:pt-14 md:-mt-12 md:rounded-t-[56px] md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 sm:mb-12">
          <FadeIn scroll delay={0} y={32}>
            <p className="mb-2 text-center text-[0.65rem] font-medium uppercase tracking-[0.28em] text-[#D7E2EA]/40 sm:text-xs">
              A few things I’ve built
            </p>
            <h2
              className="hero-heading text-center font-black uppercase leading-[0.9] tracking-tight"
              style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)' }}
            >
              Projects
            </h2>
          </FadeIn>
        </div>

        <div className="flex flex-col gap-5 sm:gap-7 lg:gap-9">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.num} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
