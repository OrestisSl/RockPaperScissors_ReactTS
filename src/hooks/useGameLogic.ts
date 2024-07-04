import { useState, useEffect } from "react";

enum GameChoice {
  ROCK = "ROCK",
  PAPER = "PAPER",
  SCISSORS = "SCISSORS",
}

const useGameLogic = () => {
  const [playerChoice, setPlayerChoice] = useState<GameChoice | null>(null);
  const [compChoice, setCompChoice] = useState<GameChoice | null>(null);
  const [isGameActive, setIsGameActive] = useState(true);
  const [msg, setMsg] = useState("");

  const choices: GameChoice[] = [
    GameChoice.ROCK,
    GameChoice.PAPER,
    GameChoice.SCISSORS,
  ];

  const generateCompChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    setCompChoice(computerChoice);
  };

  useEffect(() => {
    if (compChoice !== null && playerChoice !== null) {
      handleWinner(playerChoice, compChoice);
    }
  }, [compChoice, playerChoice]);

  const handleWinner = (player: GameChoice, comp: GameChoice) => {
    if (player === comp) {
      setMsg("DRAW 🙂‍");
    } else if (
      (player === GameChoice.ROCK && comp === GameChoice.SCISSORS) ||
      (player === GameChoice.PAPER && comp === GameChoice.ROCK) ||
      (player === GameChoice.SCISSORS && comp === GameChoice.PAPER)
    ) {
      setMsg("PLAYER WINS 😁");
    } else {
      setMsg("COMPUTER WINS 😓");
    }
  };

  const startGame = (choice: GameChoice) => {
    setPlayerChoice(choice);
    generateCompChoice();
    setIsGameActive(false);
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setCompChoice(null);
    setMsg("");
    setIsGameActive(true);
  };

  return {
    playerChoice,
    compChoice,
    msg,
    isGameActive,
    startGame,
    resetGame,
  };
};

export { useGameLogic, GameChoice };
