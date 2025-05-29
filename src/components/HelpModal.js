// components/HelpModal.js
import React from "react";
import "./HelpModal.css";

function HelpModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>🆘 How to Play Hangman</h2>
        <ul>
          <li>Guess the hidden word one letter at a time.</li>
          <li>Each incorrect guess brings you closer to being hanged 💀.</li>
          <li>You lose after 6 wrong guesses.</li>
          <li>You win if you guess the full word before then!</li>
        </ul>
        <button onClick={onClose}>Got it!</button>
      </div>
    </div>
  );
}

export default HelpModal;
