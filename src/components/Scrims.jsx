import "./Scrims.css";

const SCRIMS = [
  {
    id: 1, title: "EVENING SCRIM BATCH",
    time: "6:00 PM", mode: "Squad", map: "Bermuda",
    perKill: "₹5", winning: "₹200", entry: "₹80",
    slots: 10, total: 12, status: "open", host: "HawksMod_Alpha",
    type: "Kill Based",
  },
  {
    id: 2, title: "NIGHT OWL SCRIMS",
    time: "10:00 PM", mode: "Squad", map: "Purgatory",
    perKill: "₹8", winning: "₹300", entry: "₹100",
    slots: 7, total: 12, status: "open", host: "HawksMod_Beta",
    type: "Kill + Placement",
  },
  {
    id: 3, title: "DUO GRIND SESSION",
    time: "7:30 PM", mode: "Duo", map: "Kalahari",
    perKill: "₹5", winning: "₹150", entry: "₹50",
    slots: 12, total: 16, status: "live", host: "HawksMod_Zeta",
    type: "Kill Based",
  },
  {
    id: 4, title: "LATE NIGHT SQUAD",
    time: "11:30 PM", mode: "Squad", map: "Alpine",
    perKill: "₹10", winning: "₹500", entry: "₹150",
    slots: 4, total: 12, status: "soon", host: "HawksMod_Omega",
    type: "Full Point System",
  },
];

const INFO_CARDS = [
  { icon: "🎯", title: "KILL BASED", desc: "Earn money for every kill you get. More kills = more cash in your pocket." },
  { icon: "📍", title: "PLACEMENT BONUS", desc: "Top placements earn bonus prizes on top of kill earnings." },
  { icon: "⚡", title: "INSTANT PAYOUT", desc: "Winnings credited within 30 minutes of match end via UPI." },
  { icon: "🛡", title: "ANTI-CHEAT", desc: "All scrims are monitored. Cheaters are perma-banned instantly." },
];

export default function Scrims({ openJoin }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">🎯 Scrims</div>
          <h2 className="section-title">PRACTICE & <span>EARN</span></h2>
          <p className="section-desc">Paid scrims to sharpen your skills and earn money simultaneously. Real competition, real rewards.</p>
        </div>

        {/* Info cards */}
        <div className="scrims-info-row">
          {INFO_CARDS.map((c, i) => (
            <div key={i} className="info-chip animate-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <span className="info-chip-icon">{c.icon}</span>
              <div>
                <div className="info-chip-title">{c.title}</div>
                <div className="info-chip-desc">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Scrim cards */}
        <div className="grid-2" style={{ marginTop: "2rem" }}>
          {SCRIMS.map((s, i) => (
            <div key={s.id} className="scrim-card card animate-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="scrim-header">
                <div>
                  <div className="scrim-type">{s.type}</div>
                  <h3 className="scrim-title">{s.title}</h3>
                </div>
                <span className={`badge badge-${s.status}`}>
                  {s.status === "live" ? "● LIVE" : s.status === "open" ? "OPEN" : "SOON"}
                </span>
              </div>

              <div className="scrim-meta-grid">
                <div className="smg-item">
                  <span className="smg-label">TIME</span>
                  <span className="smg-val">{s.time}</span>
                </div>
                <div className="smg-item">
                  <span className="smg-label">MODE</span>
                  <span className="smg-val">{s.mode}</span>
                </div>
                <div className="smg-item">
                  <span className="smg-label">MAP</span>
                  <span className="smg-val">{s.map}</span>
                </div>
                <div className="smg-item">
                  <span className="smg-label">HOST</span>
                  <span className="smg-val">{s.host}</span>
                </div>
              </div>

              <div className="divider" />

              <div className="scrim-earnings">
                <div className="earn-item">
                  <div className="earn-label">ENTRY FEE</div>
                  <div className="earn-val badge badge-paid">{s.entry}<span style={{ fontSize: "0.6rem", marginLeft: "2px" }}>/team</span></div>
                </div>
                <div className="earn-sep">+</div>
                <div className="earn-item">
                  <div className="earn-label">PER KILL</div>
                  <div className="earn-val" style={{ color: "#39ff7e", fontFamily: "Orbitron", fontWeight: 700 }}>{s.perKill}</div>
                </div>
                <div className="earn-sep">→</div>
                <div className="earn-item">
                  <div className="earn-label">WIN PRIZE</div>
                  <div className="earn-val prize" style={{ fontSize: "1.1rem" }}>{s.winning}</div>
                </div>
              </div>

              <div className="scrim-footer">
                <div>
                  <div className="slots-bar" style={{ width: "120px" }}>
                    <div
                      className="slots-fill"
                      style={{
                        width: `${(s.slots / s.total) * 100}%`,
                        background: "linear-gradient(90deg, #ffa000, #ffbe33)"
                      }}
                    />
                  </div>
                  <span className="slots-text" style={{ fontSize: "0.68rem", marginTop: "4px", display: "block" }}>
                    {s.slots}/{s.total} teams joined
                  </span>
                </div>
                <button
                  className={`btn ${s.status === "live" ? "btn-danger" : "btn-primary"} btn-sm`}
                  onClick={() => openJoin(s)}
                >
                  {s.status === "live" ? "⚡ JOIN NOW" : "JOIN SCRIM →"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
