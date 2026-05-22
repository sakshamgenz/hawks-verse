import "./Leaderboard.css";

const PLAYERS = [
  { rank: 1, name: "ShadowReaper_FF", uid: "FF20948301", kills: 847, wins: 124, earnings: "₹8,420", badge: "HAWK ELITE", change: "↑" },
  { rank: 2, name: "XBlaze_Official", uid: "FF19834720", kills: 791, wins: 108, earnings: "₹6,800", badge: "HAWK PRO", change: "↑" },
  { rank: 3, name: "NightHunter_77", uid: "FF20184730", kills: 745, wins: 99, earnings: "₹5,550", badge: "HAWK PRO", change: "↓" },
  { rank: 4, name: "SkyKiller_GG", uid: "FF19920031", kills: 712, wins: 94, earnings: "₹4,900", badge: "HAWK ACE", change: "↑" },
  { rank: 5, name: "DeathStrike_X", uid: "FF20034721", kills: 698, wins: 87, earnings: "₹4,200", badge: "HAWK ACE", change: "—" },
  { rank: 6, name: "ThunderBolt_FF", uid: "FF19234012", kills: 672, wins: 83, earnings: "₹3,700", badge: "HAWK ACE", change: "↓" },
  { rank: 7, name: "StormBreaker_9", uid: "FF20934721", kills: 644, wins: 77, earnings: "₹3,200", badge: "HAWK ELITE", change: "↑" },
  { rank: 8, name: "ViperSlayer_FF", uid: "FF19821034", kills: 631, wins: 72, earnings: "₹2,900", badge: "HAWK PRO", change: "↑" },
  { rank: 9, name: "IceWolf_Gaming", uid: "FF20843012", kills: 609, wins: 68, earnings: "₹2,600", badge: "HAWK PRO", change: "↓" },
  { rank: 10, name: "ZeroGravity_X", uid: "FF19920435", kills: 590, wins: 64, earnings: "₹2,200", badge: "HAWK ACE", change: "—" },
];

const TABS = ["ALL TIME", "THIS WEEK", "THIS MONTH"];

const badgeColor = {
  "HAWK ELITE": "#ffa000",
  "HAWK PRO": "#9b59ff",
  "HAWK ACE": "#00e5ff",
};

const rankDecor = {
  1: { icon: "🥇", color: "#ffa000", glow: "rgba(255,160,0,0.3)" },
  2: { icon: "🥈", color: "#c0c0c0", glow: "rgba(192,192,192,0.2)" },
  3: { icon: "🥉", color: "#cd7f32", glow: "rgba(205,127,50,0.25)" },
};

export default function Leaderboard() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">📊 Leaderboard</div>
          <h2 className="section-title">HAWKS <span>RANKINGS</span></h2>
          <p className="section-desc">Top players ranked by kills, wins, and earnings. Climb the board to earn exclusive rewards.</p>
        </div>

        {/* Tabs */}
        <div className="lb-tabs">
          {TABS.map((t, i) => (
            <button key={i} className={`lb-tab ${i === 0 ? "active" : ""}`}>{t}</button>
          ))}
        </div>

        {/* Top 3 podium */}
        <div className="podium">
          {[PLAYERS[1], PLAYERS[0], PLAYERS[2]].map((p, pos) => (
            <div
              key={p.rank}
              className={`podium-card ${p.rank === 1 ? "podium-center" : ""}`}
              style={{ "--glow": rankDecor[p.rank]?.glow }}
            >
              <div className="podium-rank-icon">{rankDecor[p.rank]?.icon}</div>
              <div className="podium-avatar" style={{ borderColor: rankDecor[p.rank]?.color }}>
                {p.name[0]}
              </div>
              <div className="podium-name">{p.name}</div>
              <div className="podium-kills"><span className="prize">{p.kills}</span> KILLS</div>
              <div className="podium-earn" style={{ color: rankDecor[p.rank]?.color }}>{p.earnings}</div>
            </div>
          ))}
        </div>

        {/* Full table */}
        <div className="lb-table-wrap">
          <table className="lb-table">
            <thead>
              <tr>
                <th>#</th>
                <th>PLAYER</th>
                <th>BADGE</th>
                <th>KILLS</th>
                <th>WINS</th>
                <th>EARNINGS</th>
                <th>TREND</th>
              </tr>
            </thead>
            <tbody>
              {PLAYERS.map((p, i) => (
                <tr key={p.rank} className={`lb-row animate-up ${p.rank <= 3 ? "top-row" : ""}`}
                  style={{ animationDelay: `${i * 0.05}s` }}>
                  <td>
                    <span className="rank-num" style={{ color: rankDecor[p.rank]?.color || "var(--text-secondary)" }}>
                      {p.rank <= 3 ? rankDecor[p.rank].icon : `#${p.rank}`}
                    </span>
                  </td>
                  <td>
                    <div className="lb-player">
                      <div className="lb-avatar">{p.name[0]}</div>
                      <div>
                        <div className="lb-name">{p.name}</div>
                        <div className="lb-uid">{p.uid}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="lb-badge" style={{
                      color: badgeColor[p.badge],
                      borderColor: `${badgeColor[p.badge]}40`,
                      background: `${badgeColor[p.badge]}10`
                    }}>
                      {p.badge}
                    </span>
                  </td>
                  <td><span className="lb-stat">{p.kills.toLocaleString()}</span></td>
                  <td><span className="lb-stat">{p.wins}</span></td>
                  <td><span className="prize">{p.earnings}</span></td>
                  <td>
                    <span className={`trend ${p.change === "↑" ? "up" : p.change === "↓" ? "down" : "neutral"}`}>
                      {p.change}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
