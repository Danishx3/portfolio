interface LiveProjectButtonProps {
  className?: string;
  url?: string;
}

export default function LiveProjectButton({ className = '', url }: LiveProjectButtonProps) {
  return (
    <a
      href={url || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest
        px-8 py-3 sm:px-10 sm:py-3.5
        text-sm sm:text-base
        transition-colors duration-200 hover:bg-[#D7E2EA]/10 cursor-pointer inline-block
        ${className}`}
    >
      Live Project
    </a>
  );
}
