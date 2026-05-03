const Watermark: React.FC = () => (
  <div
    className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden select-none"
    aria-hidden="true"
  >
    <span className="font-serif italic font-medium text-[min(22vw,320px)] tracking-[-0.02em] text-(--ink) opacity-[0.035] whitespace-nowrap rotate-[-24deg]">
      Suraj Vijayan
    </span>
  </div>
);

export default Watermark;
