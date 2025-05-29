import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import WordDisplay from "./components/WordDisplay";
import Keyboard from "./components/Keyboard";
import HelpModal from "./components/HelpModal";

const WORDS = ["react", "javascript", "hangman", "coding", "banana"];
const MAX_WRONG = 6;

// Emoji face progression depending on how bad it gets 😬
const getHangmanEmoji = (wrongCount) => {
  const stages = [
    "😄", // 0 wrong
    "😐", // 1
    "😬", // 2
    "😰", // 3
    "😵", // 4
    "💀", // 5
    "☠️", // 6 - DEAD
  ];
  return stages[wrongCount];
};

function App() {
  const [word, setWord] = useState(
    WORDS[Math.floor(Math.random() * WORDS.length)]
  );
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [showHelp, setShowHelp] = useState(false); // Help modal state

  const incorrectLetters = guessedLetters.filter(
    (letter) => !word.includes(letter)
  );

  const isWinner = word
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isLoser = incorrectLetters.length >= MAX_WRONG;

  const restartGame = () => {
    setWord(WORDS[Math.floor(Math.random() * WORDS.length)]);
    setGuessedLetters([]);
  };

  return (
    <div className="App">
      {/* Header with Restart + Help buttons */}
      <Header onRestart={restartGame} onHelp={() => setShowHelp(true)} />

      {/* Hangman emoji expression */}
      <div className="hangman-emoji">
        <p>{getHangmanEmoji(incorrectLetters.length)}</p>
      </div>

      {/* Word display (dashes & letters) */}
      <WordDisplay word={word} guessedLetters={guessedLetters} />

      {/* Wrong guesses info */}
      <p>
        Wrong guesses: {incorrectLetters.length} / {MAX_WRONG}
      </p>

      {/* Win/Lose messages */}
      {isWinner && <p className="win">🎉 You won! 🎉</p>}
      {isLoser && <p className="lose">☠️ You lost! The word was: {word} ☠️</p>}

      {/* Virtual keyboard for guessing */}
      <Keyboard
        guessedLetters={guessedLetters}
        onGuess={(letter) => {
          if (!isWinner && !isLoser && !guessedLetters.includes(letter)) {
            setGuessedLetters((prev) => [...prev, letter]);
          }
        }}
      />

      {/* Help modal */}
      <HelpModal show={showHelp} onClose={() => setShowHelp(false)} />
    </div>
  );
}

export default App;
