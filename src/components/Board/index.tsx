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

  const handleClick = (index: number) => {
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
