import React, { ReactEventHandler, useState } from "react";
import Box from "../Box";
import "./styles.css";

function Board(props: any) {
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

  const handleClick = (index: number) => {
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
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        setWinner(currentPlayer);
        return winner;
      }
    }

    let gameStateCopy = gameState;
    if (gameStateCopy[index] === "") {
      gameStateCopy[index] = currentPlayer;
      setGameState(gameStateCopy);
      currentPlayer === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X");
    }
  };

  return (
    <div className='tic-board'>
      {gameState.map((val: string, index: number) => (
        <Box
          handleClick={() => handleClick(index)}
          key={index}
          index={index}
          boxValue={val}
        />
      ))}
    </div>
  );
}

export default Board;
