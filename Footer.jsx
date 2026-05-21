import "./Footer.css";

export default function Footer({ setActiveTab }) {
  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <polygon points="16,2 30,10 30,22 16,30 2,22 2,10" fill="rgba(255,160,0,0.1)" stroke="#ffa000" strokeWidth="1.5"/>
              <text x="16" y="21" textAnchor="middle" fill="#ffa000" fontSize="12" fontFamily="Orbitron" fontWeight="900">H</text>
            </svg>
            <div>
              <div className="fl-name">HAWKS VERSE</div>
              <div className="fl-sub">Free Fire Combat Hub</div>
            </div>
          </div>
          <p className="footer-desc">
            India's premier paid Free Fire platform. Fair play, instant payouts, real competition.
          </p>
          <div className="footer-social">
            {["Discord", "WhatsApp", "Instagram", "YouTube"].map((s) => (
              <a key={s} href="#" className="social-btn">{s}</a>
            ))}
          </div>
        </div>

        <div className="footer-links">
          <div className="fl-col">
            <div className="fl-col-title">PLAY</div>
            {["Matches", "Tournaments", "Scrims", "Leaderboard"].map((l) => (
              <button key={l} className="fl-link" onClick={() => setActiveTab(l.toLowerCase())}>{l}</button>
            ))}
          </div>
          <div className="fl-col">
            <div className="fl-col-title">INFO</div>
            {["How to Join", "Prize Rules", "Fair Play Policy", "Contact Us"].map((l) => (
              <a key={l} href="#" className="fl-link">{l}</a>
            ))}
          </div>
          <div className="fl-col">
            <div className="fl-col-title">CONTACT</div>
            <div className="contact-item">📧 hawksverse@gmail.com</div>
            <div className="contact-item">💬 Discord: HawksVerse</div>
            <div className="contact-item">📱 WhatsApp: +91 XXXXX XXXXX</div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container fb-inner">
          <span className="fb-copy">© 2025 HAWKS VERSE. All rights reserved.</span>
          <span className="fb-note">Not affiliated with Garena Free Fire.</span>
        </div>
      </div>
    </footer>
  );
}
