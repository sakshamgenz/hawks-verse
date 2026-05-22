import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Matches from "./components/Matches";
import Tournaments from "./components/Tournaments";
import Scrims from "./components/Scrims";
import Leaderboard from "./components/Leaderboard";
import Footer from "./components/Footer";
import JoinModal from "./components/JoinModal";
import "./App.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);

  const openJoin = (match) => {
    setSelectedMatch(match);
    setModalOpen(true);
  };

  return (
    <div className="app">
      <div className="bg-grid" />
      <div className="bg-glow" />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {activeTab === "home" && <Hero setActiveTab={setActiveTab} />}
        {activeTab === "matches" && <Matches openJoin={openJoin} />}
        {activeTab === "tournaments" && <Tournaments openJoin={openJoin} />}
        {activeTab === "scrims" && <Scrims openJoin={openJoin} />}
        {activeTab === "leaderboard" && <Leaderboard />}
      </main>
      <Footer setActiveTab={setActiveTab} />
      {modalOpen && (
        <JoinModal
          match={selectedMatch}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}
