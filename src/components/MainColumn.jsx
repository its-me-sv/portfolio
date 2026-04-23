import { useState, useRef } from "react";
import { ProjectsDialog } from "./ProjectsDialog.jsx";

function ProjectPreview({ kind }) {
  const common = { width: "100%", height: "100%", display: "block" };
  if (kind === "wallet") return (
    <svg viewBox="0 0 220 140" style={common} preserveAspectRatio="none">
      <rect width="220" height="140" fill="var(--paper)" />
      <g stroke="var(--ink)" strokeWidth="1" fill="none" opacity="0.6">
        {Array.from({ length: 14 }).map((_, i) => <line key={i} x1="0" y1={i * 10 + 5} x2="220" y2={i * 10 + 5} />)}
      </g>
      <rect x="40" y="44" width="140" height="52" fill="var(--accent)" opacity="0.9" />
      <circle cx="160" cy="70" r="10" fill="var(--highlight)" />
      <circle cx="148" cy="70" r="10" fill="var(--paper)" opacity="0.6" />
    </svg>
  );
  if (kind === "social") return (
    <svg viewBox="0 0 220 140" style={common} preserveAspectRatio="none">
      <rect width="220" height="140" fill="var(--paper)" />
      <g fill="var(--ink)" opacity="0.15">
        {Array.from({ length: 8 }).map((_, i) => Array.from({ length: 12 }).map((_, j) => (
          <circle key={i + "_" + j} cx={10 + j * 18} cy={10 + i * 18} r="2" />
        )))}
      </g>
      <circle cx="70" cy="70" r="22" fill="var(--accent)" />
      <circle cx="140" cy="50" r="14" fill="var(--ink)" />
      <circle cx="160" cy="95" r="10" fill="var(--highlight)" />
      <line x1="70" y1="70" x2="140" y2="50" stroke="var(--ink)" strokeWidth="1" />
      <line x1="70" y1="70" x2="160" y2="95" stroke="var(--ink)" strokeWidth="1" />
    </svg>
  );
  if (kind === "database") return (
    <svg viewBox="0 0 220 140" style={common} preserveAspectRatio="none">
      <rect width="220" height="140" fill="var(--paper)" />
      {[0, 1, 2, 3].map(i => (
        <g key={i}>
          <ellipse cx="110" cy={30 + i * 22} rx="60" ry="8" fill="none" stroke="var(--ink)" strokeWidth="1" />
          <line x1="50" y1={30 + i * 22} x2="50" y2={52 + i * 22} stroke="var(--ink)" />
          <line x1="170" y1={30 + i * 22} x2="170" y2={52 + i * 22} stroke="var(--ink)" />
        </g>
      ))}
      <rect x="55" y="110" width="110" height="4" fill="var(--accent)" />
    </svg>
  );
  if (kind === "org") return (
    <svg viewBox="0 0 220 140" style={common} preserveAspectRatio="none">
      <rect width="220" height="140" fill="var(--paper)" />
      <rect x="90" y="14" width="40" height="24" fill="var(--ink)" />
      {[40, 110, 180].map((x, i) => <rect key={i} x={x - 20} y="70" width="40" height="24" fill={i === 1 ? "var(--accent)" : "var(--ink)"} opacity={i === 1 ? 1 : 0.4} />)}
      <line x1="110" y1="38" x2="40" y2="70" stroke="var(--ink)" />
      <line x1="110" y1="38" x2="110" y2="70" stroke="var(--ink)" />
      <line x1="110" y1="38" x2="180" y2="70" stroke="var(--ink)" />
      <rect x="20" y="112" width="180" height="2" fill="var(--ink-3)" />
    </svg>
  );
  return (
    <svg viewBox="0 0 220 140" style={common} preserveAspectRatio="none">
      <rect width="220" height="140" fill="var(--paper)" />
      <rect x="66" y="22" width="88" height="96" rx="8" fill="var(--ink)" />
      <rect x="74" y="32" width="72" height="16" fill="var(--paper-2)" />
      <rect x="74" y="56" width="72" height="2" fill="var(--accent)" />
      <rect x="74" y="66" width="40" height="2" fill="var(--paper-2)" />
      <rect x="74" y="74" width="54" height="2" fill="var(--paper-2)" />
      <circle cx="110" cy="100" r="8" fill="var(--highlight)" />
    </svg>
  );
}

function ExperienceEntry({ e, open, onToggle, dimmed, activeSkills, t }) {
  const hotStack = new Set([...activeSkills]);
  const endLabel = e.end === "Present" ? t("present") : e.end;
  return (
    <article className={`entry ${open ? "open" : ""} ${dimmed ? "dimmed" : ""}`}>
      <header className="entry-head" onClick={onToggle}>
        <div>
          <h3 className="entry-title">
            {e.role}<span className="entry-company"> · {e.company}</span>
          </h3>
        </div>
        <div className="entry-dates">
          {e.start} — {endLabel}
          <span className="type">{e.type}</span>
        </div>
      </header>
      <div className="entry-stack">
        {e.stack.map(s => (
          <span key={s} className={`chip ${hotStack.has(s) ? "hot" : ""}`}>{s}</span>
        ))}
      </div>
      <div className="entry-preview">{e.bullets[0]}</div>
      <div className="bullets">
        <ul className="bullets-inner" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {e.bullets.map((b, i) => (
            <li key={i} className="bullet">
              <span className="marker">{String(i + 1).padStart(2, "0")}</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="entry-toggle" onClick={onToggle}>
        <span>{open ? t("collapse") : `${t("expand")} · ${e.bullets.length} ${t("notes")}`}</span>
        <span className="bar" />
        <span>{open ? "−" : "+"}</span>
      </div>
    </article>
  );
}

function Project({ p, dimmed, activeSkills, onPeek, onPeekEnd }) {
  const hot = new Set([...activeSkills]);
  return (
    <div
      className={`project ${dimmed ? "dimmed" : ""}`}
      onMouseEnter={(ev) => onPeek(p, ev)}
      onMouseMove={(ev) => onPeek(p, ev)}
      onMouseLeave={onPeekEnd}
    >
      <div className="project-head">
        <h3 className="project-name">{p.name}</h3>
      </div>
      <div className="project-summary">{p.summary}</div>
      <div className="project-stack">
        {p.stack.map(s => (
          <span
            key={s}
            className={`chip ${hot.has(s) ? "hot" : ""}`}
            style={hot.has(s) ? { color: "var(--paper)", background: "var(--accent)", borderColor: "var(--accent)" } : null}
          >{s}</span>
        ))}
      </div>
    </div>
  );
}

function Achievements({ data, t }) {
  return (
    <div className="sec reveal" id="achievements">
      <div className="sec-head">
        <span className="num">§ 07</span>
        <h2>{t("achievements")}</h2>
        <span className="tag">{t("selected")}</span>
      </div>
      <div className="awards">
        {data.hackathons.map((a, i) => (
          <div className="award" key={i}>
            <div className="place">{a.place}<small>{a.year}</small></div>
            <div>
              <div className="title">{a.title}</div>
              <div className="detail">{a.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MainColumn({ data, t, activeSkills }) {
  const [peek, setPeek] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [openEntry, setOpenEntry] = useState(data.experience[0]?.id ?? null);
  const peekRef = useRef(null);

  const allProjects = [...data.projects, ...(data.moreProjects || [])];

  const onPeek = (p, ev) => {
    const x = ev.clientX + 20;
    const y = ev.clientY - 80;
    setPeek({ p, x, y });
  };
  const onPeekEnd = () => setPeek(null);

  const affectedExp = new Set();
  const affectedProj = new Set();
  if (activeSkills.size > 0) {
    activeSkills.forEach(s => {
      (data.skillProjects[s] || []).forEach(id => { affectedExp.add(id); affectedProj.add(id); });
    });
  }
  const hasFilter = activeSkills.size > 0;

  return (
    <main className="col-main">
      <div className="sec reveal" id="experience">
        <div className="sec-head">
          <span className="num">§ 05</span>
          <h2>{t("experience")}</h2>
          <span className="tag">{hasFilter ? `${affectedExp.size} ${t("match")}` : t("chronological")}</span>
        </div>
        {data.experience.map((e) => (
          <ExperienceEntry
            key={e.id}
            e={e}
            t={t}
            open={openEntry === e.id}
            onToggle={() => setOpenEntry(cur => cur === e.id ? null : e.id)}
            dimmed={hasFilter && !affectedExp.has(e.id)}
            activeSkills={activeSkills}
          />
        ))}
      </div>

      <div className="sec reveal" id="projects">
        <div className="sec-head">
          <span className="num">§ 06</span>
          <h2>{t("selected_projects")}</h2>
          {hasFilter && <span className="tag">{affectedProj.size} {t("match")}</span>}
        </div>
        <div className="project-grid">
          {data.projects.map(p => (
            <Project
              key={p.id}
              p={p}
              dimmed={hasFilter && !affectedProj.has(p.id)}
              activeSkills={activeSkills}
              onPeek={onPeek}
              onPeekEnd={onPeekEnd}
            />
          ))}
        </div>
        <div className="project-more">
          <button className="view-more" onClick={() => setDialogOpen(true)}>
            <span>{t("view_more")}</span>
            <span className="arr">→</span>
          </button>
        </div>
      </div>

      <Achievements data={data.achievements} t={t} />

      <div
        ref={peekRef}
        className={`peek ${peek ? "show" : ""}`}
        style={peek ? { left: peek.x, top: peek.y } : {}}
      >
        {peek && <ProjectPreview kind={peek.p.preview} />}
        {peek && <div className="peek-label">{peek.p.name}</div>}
      </div>

      <ProjectsDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        projects={allProjects}
        t={t}
      />
    </main>
  );
}
