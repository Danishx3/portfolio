import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <div
      className="bg-[#0C0C0C]"
      style={{ overflowX: 'clip', fontFamily: "'Kanit', sans-serif" }}
    >
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
