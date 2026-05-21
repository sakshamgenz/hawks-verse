import { useState } from "react";
import "./JoinModal.css";

export default function JoinModal({ match, onClose }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ uid: "", name: "", upi: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.uid || !form.name) return;
    setSubmitted(true);
    setTimeout(() => { onClose(); setSubmitted(false); setStep(1); }, 3000);
  };

  return (
    <div className="modal-overlay animate-in" onClick={onClose}>
      <div className="modal-box animate-up" onClick={(e) => e.stopPropagation()}>
        {/* Corner decorations */}
        <div className="m-corner m-tl" />
        <div className="m-corner m-tr" />

        {/* Header */}
        <div className="modal-header">
          <div>
            <div className="modal-tag">⚔ JOINING MATCH</div>
            <h2 className="modal-title">{match?.title || match?.name}</h2>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="divider" />

        {/* Match summary */}
        <div className="modal-summary">
          {[
            ["ENTRY", match?.entry || match?.perTeam],
            ["WIN", match?.prize || match?.winning || match?.prizePool],
            ["MODE", match?.mode],
            ["MAP", match?.map],
          ].map(([label, val]) => (
            <div key={label} className="ms-item">
              <div className="ms-label">{label}</div>
              <div className="ms-val">{val}</div>
            </div>
          ))}
        </div>

        {!submitted ? (
          <>
            {/* Step indicator */}
            <div className="step-row">
              {[1, 2].map((s) => (
                <div key={s} className={`step-dot ${step === s ? "active" : step > s ? "done" : ""}`}>
                  {step > s ? "✓" : s}
                </div>
              ))}
              <div className="step-line" style={{ background: step > 1 ? "#ffa000" : "rgba(255,255,255,0.1)" }} />
            </div>

            {step === 1 && (
              <div className="modal-form animate-up">
                <div className="form-group">
                  <label className="form-label">FREE FIRE UID *</label>
                  <input
                    className="form-input"
                    placeholder="Enter your UID (e.g. 1234567890)"
                    value={form.uid}
                    onChange={(e) => setForm({ ...form, uid: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">IN-GAME NAME *</label>
                  <input
                    className="form-input"
                    placeholder="Your Free Fire nickname"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="modal-note">
                  ⚠ Make sure your UID is correct. Wrong UID = disqualification.
                </div>
                <button
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                  onClick={() => form.uid && form.name && setStep(2)}
                >
                  CONTINUE →
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="modal-form animate-up">
                <div className="payment-box">
                  <div className="pay-label">PAYMENT REQUIRED</div>
                  <div className="pay-amount prize">{match?.entry || match?.perTeam}</div>
                  <div className="pay-sub">Send to UPI ID: <strong className="upi-id">hawksverse@upi</strong></div>
                  <div className="qr-placeholder">
                    <div className="qr-inner">
                      <div className="qr-text">QR CODE</div>
                      <div className="qr-sub">Scan to pay</div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">UPI TRANSACTION ID *</label>
                  <input
                    className="form-input"
                    placeholder="Paste your transaction ID"
                    value={form.upi}
                    onChange={(e) => setForm({ ...form, upi: e.target.value })}
                  />
                </div>
                <div className="modal-note">
                  💡 Room ID & password will be sent to your registered ID 15 mins before match.
                </div>
                <div className="modal-btn-row">
                  <button className="btn btn-outline btn-sm" onClick={() => setStep(1)}>← BACK</button>
                  <button
                    className="btn btn-primary"
                    style={{ flex: 1, justifyContent: "center" }}
                    onClick={handleSubmit}
                  >
                    CONFIRM REGISTRATION ✓
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="modal-success animate-up">
            <div className="success-icon">✓</div>
            <div className="success-title">REGISTRATION SUCCESSFUL!</div>
            <div className="success-sub">
              You're in, <strong>{form.name}</strong>! Room details will be shared before the match. Get ready to dominate. 🔥
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
