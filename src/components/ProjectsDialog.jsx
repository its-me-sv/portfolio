import { useEffect, useMemo, useRef, useState } from "react";

export function ProjectsDialog({ open, onClose, projects, t }) {
  const [q, setQ] = useState("");
  const [tool, setTool] = useState("");
  const inputRef = useRef(null);

  const allTools = useMemo(() => {
    const s = new Set();
    projects.forEach(p => p.stack.forEach(x => s.add(x)));
    return Array.from(s).sort();
  }, [projects]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return projects.filter(p => {
      if (tool && !p.stack.includes(tool)) return false;
      if (!query) return true;
      return (
        p.name.toLowerCase().includes(query) ||
        p.summary.toLowerCase().includes(query) ||
        p.stack.some(s => s.toLowerCase().includes(query))
      );
    });
  }, [projects, q, tool]);

  useEffect(() => {
    if (!open) return;
    setTimeout(() => inputRef.current?.focus(), 30);
    const onKey = (ev) => { if (ev.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) { setQ(""); setTool(""); }
  }, [open]);

  if (!open) return null;

  return (
    <div className="pdlg-back open" onClick={onClose}>
      <div className="pdlg" onClick={e => e.stopPropagation()}>
        <div className="pdlg-head">
          <div>
            <div className="pdlg-num">§ 06·A</div>
            <h2 className="pdlg-title">{t("more_projects")}</h2>
          </div>
          <button className="pdlg-close" onClick={onClose} aria-label="close">×</button>
        </div>

        <div className="pdlg-controls">
          <input
            ref={inputRef}
            className="pdlg-search"
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder={t("search_projects")}
          />
          <div className="pdlg-tools">
            <button
              className={`pdlg-tool ${tool === "" ? "on" : ""}`}
              onClick={() => setTool("")}
            >{t("all_tools")}</button>
            {allTools.map(x => (
              <button
                key={x}
                className={`pdlg-tool ${tool === x ? "on" : ""}`}
                onClick={() => setTool(tool === x ? "" : x)}
              >{x}</button>
            ))}
          </div>
        </div>

        <div className="pdlg-body">
          {filtered.length === 0 ? (
            <div className="pdlg-empty">{t("no_projects_match")}</div>
          ) : (
            <div className="pdlg-grid">
              {filtered.map(p => (
                <article key={p.id} className="pdlg-card">
                  <div className="pdlg-card-head">
                    <h3 className="pdlg-card-name">{p.name}</h3>
                  </div>
                  <div className="pdlg-card-summary">{p.summary}</div>
                  <div className="pdlg-card-stack">
                    {p.stack.map(s => (
                      <span
                        key={s}
                        className={`chip ${tool === s ? "hot" : ""}`}
                        onClick={() => setTool(tool === s ? "" : s)}
                      >{s}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
