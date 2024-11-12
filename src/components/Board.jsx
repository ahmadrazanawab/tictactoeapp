import React from 'react'
import './Game.css';

const Board = ({ squares, onClicks }) => {
  return (
    <div>
          <div className="board">
              {
                  squares.map((squares,index) => {
                      return <button key={index} onClick={()=>{onClicks(index)}} className="squares">{squares}</button>
                })  
              }
        </div>
    </div>
  )
}

export default Board
