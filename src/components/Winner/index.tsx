import "./styles.css";
function index(props: any) {
  return (
    <div className='tic-winner'>
      <h4> Player '{props.winner}' Won!</h4>
    </div>
  );
}

export default index;
