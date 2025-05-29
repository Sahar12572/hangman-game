import React from "react";

function Header({ onRestart, onHelp }) {
  return (
    <header>
      <h1>🎯 Hangman Game</h1>
      <button onClick={onRestart}>🔄 Restart</button>
      <button onClick={onHelp}>🆘 Help</button>
    </header>
  );
}

export default Header;
