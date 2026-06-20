import { useEffect, useRef, useState } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const inZone =
        Math.abs(dx) < rect.width / 2 + padding &&
        Math.abs(dy) < rect.height / 2 + padding;

      if (inZone) {
        setIsActive(true);
        el.style.transition = activeTransition;
        el.style.transform = `translate3d(${dx / strength}px, ${dy / strength}px, 0)`;
      } else if (isActive) {
        setIsActive(false);
        el.style.transition = inactiveTransition;
        el.style.transform = 'translate3d(0, 0, 0)';
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [padding, strength, activeTransition, inactiveTransition, isActive]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
  );
}
