import { useEffect, useMemo, useRef, useState } from "react";

export function CmdK({ data, t, onJump }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [idx, setIdx] = useState(0);
  const inputRef = useRef(null);

  const items = useMemo(() => {
    const list = [
      { tag: t("cmdk_section"), label: t("experience"), act: () => onJump("experience") },
      { tag: t("cmdk_section"), label: t("selected_projects"), act: () => onJump("projects") },
      { tag: t("cmdk_section"), label: t("achievements"), act: () => onJump("achievements") },
      { tag: t("cmdk_action"), label: t("cmdk_print"), act: () => window.print() },
      {
        tag: t("cmdk_action"), label: t("cmdk_toggle_theme"), act: () => {
          const h = document.documentElement;
          const cur = h.getAttribute("data-theme");
          const nx = cur === "light" ? "dark" : (cur === "dark" ? "sepia" : "light");
          const saved = JSON.parse(localStorage.getItem("tw") || "{}");
          localStorage.setItem("tw", JSON.stringify({ ...saved, theme: nx }));
          window.location.reload();
        }
      },
    ];
    data.experience.forEach(e => list.push({ tag: t("cmdk_role"), label: `${e.role} — ${e.company}`, act: () => onJump("experience") }));
    data.projects.forEach(p => list.push({ tag: t("cmdk_project"), label: p.name, act: () => onJump("projects") }));
    list.push({ tag: t("cmdk_contact"), label: t("cmdk_email"), act: () => window.location.href = `mailto:${data.contact.email}` });
    list.push({ tag: t("cmdk_contact"), label: t("cmdk_github"), act: () => window.open(`https://github.com/${data.contact.github}`, "_blank") });
    list.push({ tag: t("cmdk_contact"), label: t("cmdk_linkedin"), act: () => window.open(`https://linkedin.com/in/${data.contact.linkedin}`, "_blank") });
    return list;
  }, [data, onJump, t]);

  const filtered = q
    ? items.filter(i => (i.label + " " + i.tag).toLowerCase().includes(q.toLowerCase()))
    : items;

  useEffect(() => {
    function onKey(ev) {
      const k = ev.key.toLowerCase();
      if ((ev.metaKey || ev.ctrlKey) && k === "k") {
        ev.preventDefault();
        setOpen(o => !o);
      } else if (ev.key === "Escape" && open) {
        setOpen(false);
      } else if (open) {
        if (ev.key === "ArrowDown") { ev.preventDefault(); setIdx(i => Math.min(i + 1, filtered.length - 1)); }
        else if (ev.key === "ArrowUp") { ev.preventDefault(); setIdx(i => Math.max(i - 1, 0)); }
        else if (ev.key === "Enter") {
          ev.preventDefault();
          const sel = filtered[idx];
          if (sel) { sel.act(); setOpen(false); setQ(""); }
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, idx]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 30);
    else { setQ(""); setIdx(0); }
  }, [open]);

  useEffect(() => { setIdx(0); }, [q]);

  return (
    <div className={`cmdk-back ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
      <div className="cmdk" onClick={e => e.stopPropagation()}>
        <input ref={inputRef} value={q} onChange={e => setQ(e.target.value)} placeholder={t("cmdk_placeholder")} />
        <div className="cmdk-list">
          {filtered.length === 0 && <div className="cmdk-item"><span /><span>{t("cmdk_no_results")}</span><span /></div>}
          {filtered.map((it, i) => (
            <div
              key={i}
              className={`cmdk-item ${i === idx ? "active" : ""}`}
              onMouseEnter={() => setIdx(i)}
              onClick={() => { it.act(); setOpen(false); setQ(""); }}
            >
              <span className="tag">{it.tag}</span>
              <span>{it.label}</span>
              <span className="kbd">↵</span>
            </div>
          ))}
        </div>
        <div className="cmdk-hint">
          <span>{t("cmdk_hint")}</span>
          <span>⌘K</span>
        </div>
      </div>
    </div>
  );
}
