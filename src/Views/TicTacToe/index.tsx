import { useEffect, useState } from "react";
import Board from "../../components/Board/index";
import Winner from "../../components/Winner/index";
import "./styles.css";

function TicTacToe(_props: any) {
  const [gameState, setGameState] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState("");
  const [playerClass, setPlayerClass] = useState("playerX");

  const handleClick = (index: number) => {
    let gameStateCopy = gameState;
    if (gameStateCopy[index] === "") {
      gameStateCopy[index] = currentPlayer;
      setGameState(gameStateCopy);
      currentPlayer === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X");
    }
    currentPlayer === "X"
      ? setPlayerClass("playerY")
      : setPlayerClass("PlayerX");
    const winnerCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winnerCombinations.length; i++) {
      const [a, b, c] = winnerCombinations[i];
      if (
        gameStateCopy[a] &&
        gameStateCopy[a] === gameStateCopy[b] &&
        gameStateCopy[a] === gameStateCopy[c]
      ) {
        setWinner(currentPlayer);
        break;
      }
    }
  };
  useEffect(() => {}, [winner]);

  const resetData = () => {
    setWinner("");
    setGameState(["", "", "", "", "", "", "", "", ""]);
  };

  return (
    <div className='tic-board-wrapper'>
      <h2>Tic Tac Toe</h2>
      {winner === "" && <h4>Current Player: {currentPlayer}</h4>}
      <Board
        winner={winner}
        gameState={gameState}
        handleClick={handleClick}
        playerClass={playerClass}
        setWinner={setWinner}
        setGameState={setGameState}
      />
      {winner !== "" && <Winner winner={winner} />}
      {(winner !== "" || !gameState.includes("")) && (
        <button className='tic-reset-button' onClick={resetData}>
          Play Again
        </button>
      )}
    </div>
  );
}

export default TicTacToe;
