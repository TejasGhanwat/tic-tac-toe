import React from "react";
import "./styles.css";

function Box(props: any) {
  return (
    <div onClick={props.handleClick} className='tic-box'>
      {props.boxValue}
    </div>
  );
}

export default Box;
