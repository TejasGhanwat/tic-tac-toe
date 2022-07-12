import Box from "../Box";
import "./styles.css";

function Board(props: any) {
  return (
    <div className='tic-board'>
      {props.gameState.map((val: string, index: number) => (
        <Box
          handleClick={() => props.handleClick(index)}
          key={index}
          index={index}
          boxValue={val}
          playerClass={props.playerClass}
        />
      ))}
    </div>
  );
}

export default Board;
