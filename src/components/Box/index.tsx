import "./styles.css";

function Box(props: any) {
  return (
    <div
      onClick={props.handleClick}
      className={`tic-box ${props.boxValue === "X" ? "tic-X" : "tic-Y"} 
      }`}
    >
      {props.boxValue}
    </div>
  );
}

export default Box;
