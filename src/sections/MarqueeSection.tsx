import { useEffect, useRef, useState } from 'react';

// Tech-themed marquee items for Danish's stack
const ROW1_ITEMS = [
  { label: 'C++', icon: '⚡' },
  { label: 'C', icon: '🔧' },
  { label: 'PHP', icon: '🐘' },
  { label: 'React', icon: '⚛️' },
  { label: 'Node.js', icon: '🟢' },
  { label: 'MongoDB', icon: '🍃' },
  { label: 'Firebase', icon: '🔥' },
  { label: 'Express', icon: '🚀' },
  { label: 'MySQL', icon: '🗄️' },
  { label: 'Linux', icon: '🐧' },
];

const ROW2_ITEMS = [
  { label: 'TypeScript', icon: '🔷' },
  { label: 'JavaScript', icon: '✨' },
  { label: 'REST API', icon: '🌐' },
  { label: 'CMake', icon: '🛠️' },
  { label: 'Git', icon: '🌿' },
  { label: 'Docker', icon: '🐳' },
  { label: 'Tailwind', icon: '🎨' },
  { label: 'Redux', icon: '🔄' },
  { label: 'Vite', icon: '⚡' },
  { label: 'Postman', icon: '📬' },
];

// Triple items for seamless scrolling
const row1 = [...ROW1_ITEMS, ...ROW1_ITEMS, ...ROW1_ITEMS];
const row2 = [...ROW2_ITEMS, ...ROW2_ITEMS, ...ROW2_ITEMS];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(200);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(scrollOffset);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      {/* Row 1 — scrolls right */}
      <div className="overflow-hidden mb-4">
        <div
          className="flex gap-4"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {row1.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 flex-shrink-0 rounded-2xl border border-[#D7E2EA]/20 bg-[#D7E2EA]/5 px-6 py-4"
              style={{ minWidth: 180 }}
            >
              <span className="text-2xl">{item.icon}</span>
              <span
                className="text-[#D7E2EA] font-semibold uppercase tracking-wider"
                style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1.1rem)' }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls left */}
      <div className="overflow-hidden">
        <div
          className="flex gap-4"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {row2.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 flex-shrink-0 rounded-2xl border border-[#D7E2EA]/20 bg-[#D7E2EA]/5 px-6 py-4"
              style={{ minWidth: 180 }}
            >
              <span className="text-2xl">{item.icon}</span>
              <span
                className="text-[#D7E2EA] font-semibold uppercase tracking-wider"
                style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1.1rem)' }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
