
const GameBoard = ({ handleSquareClick, board }) => {


  //const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleClick(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [...prevGameBoard.map(innerArray=>[...innerArray])];
  //     updatedBoard[rowIndex][colIndex]=activePlayerSymbol;
  //     console.log(updatedBoard)
  //     return updatedBoard;
  //   });
  //   handleSquareClick();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSquareClick(rowIndex, colIndex)} disabled={ playerSymbol !== null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
