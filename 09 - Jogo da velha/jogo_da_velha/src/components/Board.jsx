import { useState, useEffect } from "react";
import Square from "./Square";

function Board() {
  const [isNext, setIsNext] = useState(true);
  const winner = false;
  return (
    <div className="board">
      <div className="status">
        Status:{" "}
        {winner ? (
          <p>O vencedor é:{winner}!</p>
        ) : (
          `Próximo a jogar: ${isNext ? "X" : "O"}`
        )}
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <button className="reset-button">Reiniciar o jogo</button>
    </div>
  );
}

export default Board;
