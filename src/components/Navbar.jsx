import { useState } from "react";
import "./Navbar.css";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: "⌂" },
  { id: "matches", label: "Matches", icon: "⚔" },
  { id: "tournaments", label: "Tournaments", icon: "🏆" },
  { id: "scrims", label: "Scrims", icon: "🎯" },
  { id: "leaderboard", label: "Leaderboard", icon: "📊" },
];

export default function Navbar({ activeTab, setActiveTab }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <div className="logo" onClick={() => setActiveTab("home")}>
          <div className="logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <polygon points="16,2 30,10 30,22 16,30 2,22 2,10" fill="rgba(255,160,0,0.1)" stroke="#ffa000" strokeWidth="1"/>
              <polygon points="16,6 26,12 26,20 16,26 6,20 6,12" fill="rgba(255,160,0,0.08)" stroke="#ffbe33" strokeWidth="0.5"/>
              <text x="16" y="21" textAnchor="middle" fill="#ffa000" fontSize="12" fontFamily="Orbitron" fontWeight="900">H</text>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-name">HAWKS</span>
            <span className="logo-verse">VERSE</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="nav-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-btn ${activeTab === item.id ? "active" : ""}`}
                onClick={() => setActiveTab(item.id)}
              >
                {item.label}
                {activeTab === item.id && <span className="nav-line" />}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="nav-right">
          <button className="btn btn-primary btn-sm" style={{ clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)" }}>
            Register Now
          </button>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? "open" : ""} />
          <span className={menuOpen ? "open" : ""} />
          <span className={menuOpen ? "open" : ""} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu animate-in">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`mobile-nav-btn ${activeTab === item.id ? "active" : ""}`}
              onClick={() => { setActiveTab(item.id); setMenuOpen(false); }}
            >
              <span className="mob-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
          <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: "1rem" }}>
            Register Now
          </button>
        </div>
      )}
    </nav>
  );
}
