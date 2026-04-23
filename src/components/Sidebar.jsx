import { Icon } from "./Icons.jsx";

export function Sidebar({ data, t, activeSkills, toggleSkill, clearSkills }) {
  const c = data.contact;
  return (
    <aside className="col-side">
      <div className="reveal">
        <div className="side-name">{data.name}</div>
        <div className="side-role">{t("sidebar_role")}</div>

        <div className="side-status">
          <div className="label"><span className="dot" />{t("currently")}</div>
          <div style={{ marginTop: 4 }}>{data.currently}</div>
        </div>
      </div>

      <div className="sec reveal">
        <div className="sec-head">
          <span className="num">§ 01</span>
          <h2>{t("contact")}</h2>
        </div>
        <a href={`https://github.com/${c.github}`} target="_blank" rel="noreferrer">
          <div className="contact-row">
            <span className="k"><Icon name="github" size={13} className="c-ic" />{t("c_github")}</span>
            <span className="v">{c.github}</span>
          </div>
        </a>
        <a href={`mailto:${c.email}`}>
          <div className="contact-row">
            <span className="k"><Icon name="email" size={13} className="c-ic" />{t("c_email")}</span>
            <span className="v">{c.email}</span>
          </div>
        </a>
        <a href={`https://linkedin.com/in/${c.linkedin}`} target="_blank" rel="noreferrer">
          <div className="contact-row">
            <span className="k"><Icon name="linkedin" size={13} className="c-ic" />{t("c_linkedin")}</span>
            <span className="v">{c.linkedin}</span>
          </div>
        </a>
        {c.instagram && (
          <a href={`https://instagram.com/${c.instagram}`} target="_blank" rel="noreferrer">
            <div className="contact-row">
              <span className="k"><Icon name="instagram" size={13} className="c-ic" />{t("c_instagram")}</span>
              <span className="v">{c.instagram}</span>
            </div>
          </a>
        )}
        <a href={`https://${c.site}`} target="_blank" rel="noreferrer">
          <div className="contact-row">
            <span className="k"><Icon name="web" size={13} className="c-ic" />{t("c_web")}</span>
            <span className="v">{c.site}</span>
          </div>
        </a>
      </div>

      <div className="sec reveal">
        <div className="sec-head">
          <span className="num">§ 02</span>
          <h2>{t("skills")}</h2>
          {activeSkills.size > 0 && (
            <span className="tag" onClick={clearSkills} style={{ cursor: "pointer", color: "var(--accent)" }}>
              {t("clear")} ({activeSkills.size})
            </span>
          )}
        </div>
        {Object.entries(data.skills).map(([group, items]) => (
          <div className="skill-group" key={group}>
            <div className="skill-title">{group}</div>
            <div className="skill-list">
              {items.map(s => {
                const hasMapping = Object.prototype.hasOwnProperty.call(data.skillProjects, s);
                const on = activeSkills.has(s);
                const dimmed = activeSkills.size > 0 && !on;
                return (
                  <button
                    key={s}
                    className={`skill ${on ? "on" : ""} ${dimmed ? "dimmed" : ""}`}
                    onClick={() => hasMapping && toggleSkill(s)}
                    title={hasMapping ? t("filter_hint") : ""}
                    style={{ cursor: hasMapping ? "pointer" : "default" }}
                  >{s}</button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="sec reveal">
        <div className="sec-head">
          <span className="num">§ 03</span>
          <h2>{t("education")}</h2>
        </div>
        {data.education.map((e, i) => (
          <div className="edu-item" key={i}>
            <div className="edu-degree">{e.degree}</div>
            <div className="edu-school">{e.school}</div>
          </div>
        ))}
      </div>

      <div className="sec reveal">
        <div className="sec-head">
          <span className="num">§ 04</span>
          <h2>{t("certifications")}</h2>
        </div>
        <ul className="cert-list">
          {data.certifications.map((cert, i) => (
            <li key={i} className="cert-item">
              <span className="cert-title">{cert.title}</span>
              <div className="cert-card">
                <div className="cert-card-head">
                  <span className="cert-card-issuer">{cert.issuer}</span>
                  <span className="cert-card-year">{cert.year}</span>
                </div>
                <div className="cert-card-detail">{cert.detail}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <WaxSeal t={t} />
    </aside>
  );
}

function WaxSeal({ t }) {
  const top = t("seal_top");
  const bottom = t("seal_bottom");
  const center = t("seal_center");
  return (
    <div className="wax-seal-wrap reveal">
      <svg className="wax-seal" viewBox="0 0 220 220" role="img" aria-label={`${top} ${bottom}`}>
        <defs>
          <radialGradient id="wax-fill" cx="38%" cy="32%" r="75%">
            <stop offset="0%" stopColor="#e25648" />
            <stop offset="38%" stopColor="#b92a1f" />
            <stop offset="78%" stopColor="#7b160e" />
            <stop offset="100%" stopColor="#3d0804" />
          </radialGradient>
          <radialGradient id="wax-shine" cx="34%" cy="28%" r="26%">
            <stop offset="0%" stopColor="rgba(255,220,205,0.7)" />
            <stop offset="60%" stopColor="rgba(255,220,205,0.18)" />
            <stop offset="100%" stopColor="rgba(255,220,205,0)" />
          </radialGradient>
          <radialGradient id="wax-dark" cx="70%" cy="80%" r="55%">
            <stop offset="0%" stopColor="rgba(0,0,0,0)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.55)" />
          </radialGradient>
          <filter id="wax-noise" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="2" seed="7" stitchTiles="stitch" />
            <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.4 0" />
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
          <filter id="wax-bump" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="2" />
            <feDisplacementMap in="SourceGraphic" scale="3" />
          </filter>
          <filter id="wax-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#000" floodOpacity="0.5" />
          </filter>
          <path id="wax-top-arc" d="M 26 110 A 84 84 0 0 1 194 110" />
          <path id="wax-bot-arc" d="M 36 122 A 74 74 0 0 0 184 122" />
        </defs>

        <g filter="url(#wax-shadow)">
          <g filter="url(#wax-bump)">
            <path d="M 110 22
                     C 155 22 198 50 198 104
                     C 200 140 188 172 156 192
                     C 140 202 130 198 120 196
                     C 108 200 92 204 74 194
                     C 40 178 22 148 22 108
                     C 22 54 66 22 110 22 Z"
                  fill="url(#wax-fill)" />
          </g>

          <circle cx="110" cy="110" r="94" fill="url(#wax-dark)" style={{ mixBlendMode: "multiply" }} />

          <g style={{ mixBlendMode: "multiply" }}>
            <circle cx="110" cy="110" r="94" fill="#000" filter="url(#wax-noise)" opacity="0.75" />
          </g>

          <g fill="none" stroke="#2a0503" strokeOpacity="0.7">
            <circle cx="110" cy="110" r="86" strokeWidth="1.2" />
            <circle cx="110" cy="110" r="78" strokeWidth="0.6" strokeDasharray="1.5 2.5" />
            <circle cx="110" cy="110" r="58" strokeWidth="0.8" />
          </g>

          <g fill="#f7dccf">
            <text fontSize="9.2" fontFamily="'JetBrains Mono', ui-monospace, monospace" letterSpacing="3" textAnchor="middle">
              <textPath href="#wax-top-arc" startOffset="50%">{top}</textPath>
            </text>
            <text fontSize="9.2" fontFamily="'JetBrains Mono', ui-monospace, monospace" letterSpacing="3" textAnchor="middle">
              <textPath href="#wax-bot-arc" startOffset="50%">{bottom}</textPath>
            </text>
          </g>

          <g fill="#f1c9b8" opacity="0.9">
            {[0, 72, 144, 216, 288].map(a => {
              const rad = (a * Math.PI) / 180;
              const x = 110 + Math.cos(rad) * 66;
              const y = 110 + Math.sin(rad) * 66;
              return <circle key={a} cx={x} cy={y} r="1.6" />;
            })}
          </g>

          <g fontFamily="'Newsreader', Georgia, serif" fill="#f8e1d2">
            <text x="110" y="126" textAnchor="middle" fontSize="54" fontWeight="500" fontStyle="italic" letterSpacing="-0.02em" style={{ filter: "drop-shadow(0 1px 0 rgba(0,0,0,0.5))" }}>{center}</text>
          </g>
          <line x1="72" y1="142" x2="148" y2="142" stroke="#f8e1d2" strokeOpacity="0.6" strokeWidth="0.8" />
          <text x="110" y="158" textAnchor="middle" fontSize="6.5" fontFamily="'JetBrains Mono', ui-monospace, monospace" letterSpacing="3" fill="#f8e1d2" opacity="0.85">PORTFOLIO</text>

          <circle cx="110" cy="110" r="94" fill="url(#wax-shine)" style={{ mixBlendMode: "screen" }} />
          <circle cx="110" cy="110" r="94" fill="none" stroke="#2a0503" strokeOpacity="0.6" strokeWidth="0.8" />
        </g>
      </svg>
    </div>
  );
}
