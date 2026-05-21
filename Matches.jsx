import "./Matches.css";

const MATCHES = [
  {
    id: 1,
    title: "SOLO RANKED CLASH",
    mode: "Solo",
    map: "Bermuda",
    entry: "₹20",
    prize: "₹300",
    slots: 12,
    totalSlots: 16,
    time: "6:00 PM",
    status: "open",
    host: "HawksMod_Alpha",
  },
  {
    id: 2,
    title: "DUO BATTLE ROYALE",
    mode: "Duo",
    map: "Kalahari",
    entry: "₹40",
    prize: "₹600",
    slots: 14,
    totalSlots: 16,
    time: "7:00 PM",
    status: "live",
    host: "HawksMod_Beta",
  },
  {
    id: 3,
    title: "SQUAD DEATH MATCH",
    mode: "Squad",
    map: "Purgatory",
    entry: "₹100",
    prize: "₹1,400",
    slots: 12,
    totalSlots: 16,
    time: "8:30 PM",
    status: "open",
    host: "HawksMod_Zeta",
  },
  {
    id: 4,
    title: "SOLO BLITZ ROYALE",
    mode: "Solo",
    map: "Alpine",
    entry: "₹30",
    prize: "₹450",
    slots: 16,
    totalSlots: 16,
    time: "9:00 PM",
    status: "full",
    host: "HawksMod_Delta",
  },
  {
    id: 5,
    title: "CS RANK PUSH",
    mode: "Duo",
    map: "Bermuda Remastered",
    entry: "₹60",
    prize: "₹850",
    slots: 8,
    totalSlots: 16,
    time: "9:45 PM",
    status: "open",
    host: "HawksMod_Sigma",
  },
  {
    id: 6,
    title: "CLASH SQUAD ELITE",
    mode: "Squad (4v4)",
    map: "Clash Squad",
    entry: "₹150",
    prize: "₹2,000",
    slots: 6,
    totalSlots: 8,
    time: "10:30 PM",
    status: "soon",
    host: "HawksMod_Omega",
  },
];

const modeColor = { Solo: "#00e5ff", Duo: "#9b59ff", Squad: "#39ff7e", "Squad (4v4)": "#ffa000" };

export default function Matches({ openJoin }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">⚔ Paid Matches</div>
          <h2 className="section-title">TODAY'S <span>BATTLES</span></h2>
          <p className="section-desc">All matches verified and moderated by Hawks admins. Fast results, instant payment.</p>
        </div>

        <div className="grid-3">
          {MATCHES.map((m, i) => (
            <div key={m.id} className="match-card card animate-up" style={{ animationDelay: `${i * 0.07}s` }}>
              {/* Header */}
              <div className="mc-header">
                <div className="mc-mode" style={{ color: modeColor[m.mode] || "#ffa000" }}>
                  ● {m.mode}
                </div>
                <span className={`badge badge-${m.status}`}>
                  {m.status === "live" ? "● LIVE" : m.status === "open" ? "OPEN" : m.status === "soon" ? "SOON" : "FULL"}
                </span>
              </div>

              <h3 className="mc-title">{m.title}</h3>

              <div className="mc-meta">
                <div className="mc-meta-item">
                  <span className="meta-icon">🗺</span>
                  <span>{m.map}</span>
                </div>
                <div className="mc-meta-item">
                  <span className="meta-icon">🕐</span>
                  <span>{m.time}</span>
                </div>
                <div className="mc-meta-item">
                  <span className="meta-icon">👤</span>
                  <span>{m.host}</span>
                </div>
              </div>

              <div className="divider" />

              {/* Slots bar */}
              <div className="mc-slots">
                <div className="slots-info">
                  <span className="slots-text">Slots</span>
                  <span className="slots-count">
                    <span style={{ color: m.slots === m.totalSlots ? "#ff3a3a" : "#39ff7e" }}>{m.slots}</span>
                    <span className="slots-sep">/{m.totalSlots}</span>
                  </span>
                </div>
                <div className="slots-bar">
                  <div
                    className="slots-fill"
                    style={{
                      width: `${(m.slots / m.totalSlots) * 100}%`,
                      background: m.slots === m.totalSlots
                        ? "linear-gradient(90deg, #ff3a3a, #ff6b6b)"
                        : "linear-gradient(90deg, #ffa000, #ffbe33)"
                    }}
                  />
                </div>
              </div>

              {/* Pricing */}
              <div className="mc-pricing">
                <div className="mc-price-item">
                  <span className="price-label">ENTRY</span>
                  <span className="price-val badge badge-paid">{m.entry}</span>
                </div>
                <div className="mc-price-arrow">→</div>
                <div className="mc-price-item">
                  <span className="price-label">WIN</span>
                  <span className="prize prize-big">{m.prize}</span>
                </div>
              </div>

              {/* Action */}
              <button
                className={`btn ${m.status === "full" ? "btn-outline disabled-btn" : m.status === "live" ? "btn-danger" : "btn-primary"} mc-btn`}
                onClick={() => m.status !== "full" && openJoin(m)}
                disabled={m.status === "full"}
              >
                {m.status === "full" ? "MATCH FULL" : m.status === "live" ? "⚡ JOIN LIVE" : "JOIN MATCH →"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
