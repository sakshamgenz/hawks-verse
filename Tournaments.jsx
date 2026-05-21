import "./Tournaments.css";

const TOURNAMENTS = [
  {
    id: 1,
    name: "HAWKS CHAMPIONSHIP S3",
    tier: "MEGA",
    prizePool: "₹10,000",
    entry: "₹200",
    perTeam: "₹800",
    mode: "Squad",
    slots: 24,
    totalSlots: 64,
    date: "June 15, 2025",
    time: "7:00 PM IST",
    map: "Bermuda",
    status: "open",
    highlight: true,
    rules: ["Top 3 teams win", "No emulators", "Screenshot proof required"],
    distribution: ["1st: ₹5,000", "2nd: ₹3,000", "3rd: ₹2,000"],
  },
  {
    id: 2,
    name: "FRIDAY BLITZ CUP",
    tier: "MID",
    prizePool: "₹3,000",
    entry: "₹80",
    perTeam: "₹320",
    mode: "Squad",
    slots: 14,
    totalSlots: 32,
    date: "May 30, 2025",
    time: "8:00 PM IST",
    map: "Kalahari",
    status: "open",
    highlight: false,
    rules: ["Kill points count", "No VPN", "Valid UID required"],
    distribution: ["1st: ₹1,500", "2nd: ₹900", "3rd: ₹600"],
  },
  {
    id: 3,
    name: "SOLO WARRIORS CUP",
    tier: "STANDARD",
    prizePool: "₹1,500",
    entry: "₹50",
    perTeam: "₹50",
    mode: "Solo",
    slots: 18,
    totalSlots: 30,
    date: "May 28, 2025",
    time: "9:00 PM IST",
    map: "Alpine",
    status: "soon",
    highlight: false,
    rules: ["Top 5 win prizes", "No cheats", "Host final call"],
    distribution: ["1st: ₹700", "2nd: ₹450", "3rd: ₹350"],
  },
  {
    id: 4,
    name: "DUO DOMINATION II",
    tier: "MID",
    prizePool: "₹2,500",
    entry: "₹60",
    perTeam: "₹120",
    mode: "Duo",
    slots: 20,
    totalSlots: 20,
    date: "May 25, 2025",
    time: "7:30 PM IST",
    map: "Purgatory",
    status: "full",
    highlight: false,
    rules: ["Kill+placement scoring", "SS required", "Fair play rule"],
    distribution: ["1st: ₹1,200", "2nd: ₹800", "3rd: ₹500"],
  },
];

const tierStyle = {
  MEGA: { color: "#ffa000", glow: "rgba(255,160,0,0.4)" },
  MID: { color: "#9b59ff", glow: "rgba(155,89,255,0.3)" },
  STANDARD: { color: "#00e5ff", glow: "rgba(0,229,255,0.3)" },
};

export default function Tournaments({ openJoin }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">🏆 Tournaments</div>
          <h2 className="section-title">UPCOMING <span>EVENTS</span></h2>
          <p className="section-desc">High-stakes tournaments with massive prize pools. Register early, slots fill fast.</p>
        </div>

        <div className="tourney-list">
          {TOURNAMENTS.map((t, i) => (
            <div
              key={t.id}
              className={`tourney-card card animate-up ${t.highlight ? "tourney-highlight" : ""}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {t.highlight && (
                <div className="tourney-featured-label">
                  ★ FEATURED
                </div>
              )}

              <div className="tourney-header">
                <div className="tourney-left">
                  <div className="tourney-tier" style={{
                    color: tierStyle[t.tier]?.color,
                    textShadow: `0 0 15px ${tierStyle[t.tier]?.glow}`
                  }}>
                    ◆ {t.tier}
                  </div>
                  <h3 className="tourney-name">{t.name}</h3>
                  <div className="tourney-meta-row">
                    <span className="t-meta">📅 {t.date}</span>
                    <span className="t-meta">🕐 {t.time}</span>
                    <span className="t-meta">🗺 {t.map}</span>
                    <span className="t-meta">👥 {t.mode}</span>
                  </div>
                </div>

                <div className="tourney-right">
                  <div className="tourney-pool">
                    <div className="pool-label">PRIZE POOL</div>
                    <div className="pool-val prize">{t.prizePool}</div>
                  </div>
                  <div className="tourney-entry-row">
                    <span className="t-entry-label">Entry:</span>
                    <span className="badge badge-paid">{t.entry}/player</span>
                  </div>
                </div>
              </div>

              <div className="divider" />

              <div className="tourney-body">
                {/* Distribution */}
                <div className="dist-block">
                  <div className="block-title">PRIZE DISTRIBUTION</div>
                  <div className="dist-list">
                    {t.distribution.map((d, j) => (
                      <div key={j} className={`dist-item dist-pos-${j + 1}`}>
                        <span className="dist-pos">{j === 0 ? "🥇" : j === 1 ? "🥈" : "🥉"}</span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rules */}
                <div className="rules-block">
                  <div className="block-title">RULES</div>
                  <ul className="rules-list">
                    {t.rules.map((r, j) => (
                      <li key={j} className="rule-item">
                        <span className="rule-dot">▸</span> {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Slots + CTA */}
                <div className="tourney-cta-block">
                  <div className="mc-slots">
                    <div className="slots-info">
                      <span className="slots-text">Teams Registered</span>
                      <span className="slots-count">
                        <span style={{ color: t.slots === t.totalSlots ? "#ff3a3a" : "#39ff7e" }}>{t.slots}</span>
                        <span className="slots-sep">/{t.totalSlots}</span>
                      </span>
                    </div>
                    <div className="slots-bar">
                      <div
                        className="slots-fill"
                        style={{
                          width: `${(t.slots / t.totalSlots) * 100}%`,
                          background: t.slots === t.totalSlots
                            ? "linear-gradient(90deg, #ff3a3a, #ff6b6b)"
                            : "linear-gradient(90deg, #ffa000, #ffbe33)"
                        }}
                      />
                    </div>
                  </div>

                  <div className="tourney-actions">
                    <span className={`badge badge-${t.status}`}>
                      {t.status === "open" ? "OPEN" : t.status === "soon" ? "COMING SOON" : "FULL"}
                    </span>
                    <button
                      className={`btn ${t.status === "full" ? "btn-outline disabled-btn" : "btn-primary"} btn-sm`}
                      onClick={() => t.status !== "full" && openJoin(t)}
                      disabled={t.status === "full"}
                    >
                      {t.status === "full" ? "SLOTS FULL" : t.status === "soon" ? "PRE-REGISTER →" : "REGISTER →"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
