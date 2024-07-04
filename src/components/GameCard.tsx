import { useGameLogic, GameChoice } from "../hooks/useGameLogic";

const GameCard = () => {
  const {
    playerChoice,
    compChoice,
    msg: result,
    isGameActive,
    startGame,
    resetGame,
  } = useGameLogic();

  return (
    <div className="w-96 h-auto bg-white text-center text-lg font-sans font-semibold rounded-3xl shadow-2xl p-10 flex flex-col justify-between space-y-6">
      <div>
        <div className="flex justify-between mb-6">
          <div className="flex flex-col items-center">
            <p className="text-xl text-gray-600 mb-1">Player Choice:</p>
            <p className="text-2xl text-blue-700">{playerChoice || "-"}</p>
          </div>
          <div className="flex flex-col items-center ">
            <p className="text-xl text-gray-600 mb-1">Computer Choice:</p>
            <p className="text-2xl text-blue-700">{compChoice || "-"}</p>
          </div>
        </div>
        <div className="flex justify-around mt-4 space-x-2">
          <button
            onClick={() => startGame(GameChoice.ROCK)}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full shadow-md transition-all duration-300 ease-in-out focus:outline-none disabled:bg-blue-300 disabled:cursor-not-allowed"
            disabled={!isGameActive}
          >
            Rock
          </button>
          <button
            onClick={() => startGame(GameChoice.PAPER)}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full shadow-md transition-all duration-300 ease-in-out focus:outline-none disabled:bg-blue-300 disabled:cursor-not-allowed"
            disabled={!isGameActive}
          >
            Paper
          </button>
          <button
            onClick={() => startGame(GameChoice.SCISSORS)}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full shadow-md transition-all duration-300 ease-in-out focus:outline-none disabled:bg-blue-300 disabled:cursor-not-allowed"
            disabled={!isGameActive}
          >
            Scissors
          </button>
        </div>
        <div className="flex justify-center mt-6">
          <button
            onClick={resetGame}
            className="bg-red-600 hover:bg-red-700 text-white py-3 px-10 rounded-full shadow-md transition-all duration-300 ease-in-out focus:outline-none disabled:bg-red-300 disabled:cursor-not-allowed"
            disabled={isGameActive}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-xl text-gray-700">Result:</p>
        <p className="text-2xl font-bold mt-2 text-green-600 ">{result}</p>
      </div>
    </div>
  );
};

export default GameCard;
