import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    num: '01',
    name: 'Systems Programming',
    desc: 'Building high-performance, low-level applications in C and C++ — from embedded systems to performance-critical software with precise memory management and optimized algorithms.',
  },
  {
    num: '02',
    name: 'Backend Development',
    desc: 'Designing and building robust server-side solutions with PHP, Node.js, and Express.js — RESTful APIs, authentication systems, and scalable architectures.',
  },
  {
    num: '03',
    name: 'Full-Stack Web (MERN)',
    desc: 'End-to-end web applications using MongoDB, Express, React, and Node.js — from interactive frontends to powerful backends with seamless data flow.',
  },
  {
    num: '04',
    name: 'Database Engineering',
    desc: 'Designing and optimizing relational and NoSQL databases using MySQL and MongoDB — schema design, query optimization, and data modeling for scalable applications.',
  },
  {
    num: '05',
    name: 'Firebase & Cloud Apps',
    desc: 'Real-time web applications powered by Firebase — Firestore, Authentication, Hosting, and Cloud Functions for dynamic, scalable, and serverless experiences.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="skills"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      {/* Heading */}
      <FadeIn scroll delay={0} y={40}>
        <h2
          className="font-black uppercase text-center text-[#0C0C0C]
            mb-16 sm:mb-20 md:mb-28 leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      {/* Service list */}
      <ul className="max-w-5xl mx-auto">
        {SERVICES.map((svc, i) => (
          <FadeIn key={svc.num} scroll delay={i * 0.1} y={30} as="li">
            <li
              className="flex items-start gap-4 sm:gap-6 md:gap-8
                py-8 sm:py-10 md:py-12"
              style={{
                borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : undefined,
                borderBottom: '1px solid rgba(12,12,12,0.15)',
              }}
            >
              {/* Number */}
              <span
                className="font-black text-[#0C0C0C] leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {svc.num}
              </span>

              {/* Name + description */}
              <div className="flex flex-col justify-center gap-2 pt-2">
                <span
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {svc.name}
                </span>
                <span
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.6,
                  }}
                >
                  {svc.desc}
                </span>
              </div>
            </li>
          </FadeIn>
        ))}
      </ul>
    </section>
  );
}
