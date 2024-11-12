import React, { useState } from 'react'
import Board from './Board'
import './Game.css';

const Game = () => {
    const [squares, setSqauares] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState(true); 

    const handleClick = (index) => {
        if (squares[index] || calculateWinner(squares)) return;

        const nextSquares = squares.slice();
        nextSquares[index] = turn ? 'X' : 'O';
        setSqauares(nextSquares);
        setTurn(!turn);
    }

    const winner = calculateWinner(squares);
    const status = winner ? `Contragulation, Winner is : ${winner}` : `Next Player : ${turn ? 'X':'O'}`;

    const resetGame = () => {
        setSqauares(Array(9).fill(null));
        setTurn(turn);
    }

    function calculateWinner(squares) {
        const winnerPattern = [
            [0, 1, 2],
            [0, 3, 6],
            [0, 4, 8],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6],
            [3, 4, 5],
            [6, 7, 8],
        ];

        for (let i = 0; i < winnerPattern.length; i++){
            const [a, b, c] = winnerPattern[i];
            if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
  return (
      <div className="game">
          <h4 className="text-winner">{status}</h4>
          <Board squares={squares} onClicks={handleClick} />
          <button className="reset-btn" onClick={resetGame}>Reset Game</button>
          
    </div>
  )
}

export default Game
