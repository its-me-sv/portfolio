const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function Icon({ name, size = 14, className = "icon" }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", className, "aria-hidden": true, ...strokeProps };
  switch (name) {
    case "contact":
      return (
        <svg {...common}><path d="M4 6h16v12H4z" /><path d="M4 7l8 6 8-6" /></svg>
      );
    case "skills":
      return (
        <svg {...common}><path d="M6 4v4M18 4v4M6 16v4M18 16v4M4 12h16" /><circle cx="12" cy="12" r="3" /></svg>
      );
    case "education":
      return (
        <svg {...common}><path d="M2 10l10-5 10 5-10 5z" /><path d="M6 12v4c0 1.5 3 3 6 3s6-1.5 6-3v-4" /></svg>
      );
    case "certifications":
      return (
        <svg {...common}><circle cx="12" cy="9" r="5" /><path d="M9 13l-2 7 5-2 5 2-2-7" /></svg>
      );
    case "experience":
      return (
        <svg {...common}><rect x="3" y="7" width="18" height="13" rx="1.5" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /><path d="M3 13h18" /></svg>
      );
    case "projects":
      return (
        <svg {...common}><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>
      );
    case "achievements":
      return (
        <svg {...common}><path d="M7 4h10v4a5 5 0 0 1-10 0z" /><path d="M7 8H4v1a3 3 0 0 0 3 3M17 8h3v1a3 3 0 0 1-3 3" /><path d="M9 16h6M10 20h4M12 12v4" /></svg>
      );
    case "github":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
          <path d="M12 1.5A10.5 10.5 0 0 0 1.5 12c0 4.65 3.01 8.6 7.19 10A.75.75 0 0 0 9.5 21.3v-1.9c-2.92.64-3.54-1.4-3.54-1.4-.48-1.2-1.17-1.52-1.17-1.52-.95-.65.07-.64.07-.64 1.05.07 1.6 1.08 1.6 1.08.94 1.6 2.46 1.14 3.06.87.1-.68.37-1.14.67-1.4-2.33-.27-4.79-1.17-4.79-5.2 0-1.15.41-2.1 1.08-2.84-.11-.27-.47-1.35.1-2.82 0 0 .88-.28 2.88 1.07a10 10 0 0 1 5.24 0c2-1.35 2.88-1.07 2.88-1.07.57 1.47.21 2.55.1 2.82.67.74 1.08 1.69 1.08 2.84 0 4.04-2.47 4.93-4.82 5.19.38.33.72.97.72 1.96v2.9c0 .28.19.61.75.5A10.5 10.5 0 0 0 22.5 12 10.5 10.5 0 0 0 12 1.5z" />
        </svg>
      );
    case "email":
      return (
        <svg {...common}><rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="M3 7l9 7 9-7" /></svg>
      );
    case "linkedin":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
          <path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5zM3 9.5h4V21H3V9.5zM9.5 9.5h3.83v1.57h.05c.53-.95 1.84-1.95 3.79-1.95 4.05 0 4.8 2.42 4.8 5.57V21H18V15.3c0-1.36-.03-3.1-1.98-3.1-1.98 0-2.28 1.47-2.28 3v5.8H9.5V9.5z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" /></svg>
      );
    case "web":
      return (
        <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" /></svg>
      );
    default:
      return null;
  }
}
