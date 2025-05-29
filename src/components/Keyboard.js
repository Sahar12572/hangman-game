import React from "react";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

function Keyboard({ guessedLetters, onGuess }) {
  return (
    <div className="keyboard">
      {ALPHABET.map((letter) => (
        <button
          key={letter}
          onClick={() => onGuess(letter)}
          disabled={guessedLetters.includes(letter)}>
          {letter.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
