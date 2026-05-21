import "./Hero.css";

const STATS = [
  { value: "12K+", label: "Players" },
  { value: "₹2L+", label: "Prize Pool" },
  { value: "340+", label: "Matches Hosted" },
  { value: "98%", label: "Fair Play" },
];

export default function Hero({ setActiveTab }) {
  return (
    <section className="hero">
      {/* Scan line effect */}
      <div className="scan-line" />

      {/* Corner decorations */}
      <div className="corner corner-tl" />
      <div className="corner corner-tr" />
      <div className="corner corner-bl" />
      <div className="corner corner-br" />

      <div className="container hero-content">
        {/* Badge */}
        <div className="hero-badge animate-up" style={{ animationDelay: "0s" }}>
          <span className="badge badge-live">● LIVE</span>
          <span className="hero-badge-text">Free Fire Competitive Platform</span>
        </div>

        {/* Heading */}
        <h1 className="hero-title animate-up" style={{ animationDelay: "0.1s" }}>
          <span className="hero-line1">ENTER THE</span>
          <br />
          <span className="hero-line2">HAWKS<span className="hero-verse-word"> VERSE</span></span>
          <br />
          <span className="hero-line3">ARENA</span>
        </h1>

        <p className="hero-sub animate-up" style={{ animationDelay: "0.2s" }}>
          Compete. Dominate. Earn. Join thousands of Free Fire players in paid matches,
          scrims, and high-stakes tournaments. Only the best survive.
        </p>

        {/* CTAs */}
        <div className="hero-ctas animate-up" style={{ animationDelay: "0.3s" }}>
          <button className="btn btn-primary hero-btn" onClick={() => setActiveTab("matches")}>
            <span>⚔</span> Join a Match
          </button>
          <button className="btn btn-outline hero-btn" onClick={() => setActiveTab("tournaments")}>
            <span>🏆</span> View Tournaments
          </button>
        </div>

        {/* Stats */}
        <div className="hero-stats animate-up" style={{ animationDelay: "0.4s" }}>
          {STATS.map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating cards */}
      <div className="hero-floats">
        <div className="float-card fc1 animate-up" style={{ animationDelay: "0.5s" }}>
          <div className="fc-dot dot-green" />
          <div>
            <div className="fc-title">SQUAD MATCH</div>
            <div className="fc-sub">Entry: ₹40 • 12/16 joined</div>
          </div>
        </div>
        <div className="float-card fc2 animate-up" style={{ animationDelay: "0.65s" }}>
          <div className="fc-dot dot-amber" />
          <div>
            <div className="fc-title">SCRIM — 7PM</div>
            <div className="fc-sub">Prize: ₹500 • Starting soon</div>
          </div>
        </div>
        <div className="float-card fc3 animate-up" style={{ animationDelay: "0.8s" }}>
          <div className="fc-dot dot-red" />
          <div>
            <div className="fc-title">MEGA TOURNEY</div>
            <div className="fc-sub">Pool: ₹10,000 • 48 slots left</div>
          </div>
        </div>
      </div>
    </section>
  );
}
