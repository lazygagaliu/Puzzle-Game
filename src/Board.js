import React from "react";
import board from "./board.css";
import Win from "./Win";

let Board = ({ tiles, clickHandle, restart, isWon, back }) => {
  console.log(isWon);
  let newTiles = tiles;
  newTiles = newTiles.map( (tile, index) => {
    if( tile === 0 ){
      return (
        <span className={board.zero} status={tile} key={index}>{tile}</span>
      )
    }
    return <span onClick={ () => { clickHandle(index, tile); } }
                 className={board.tile}
                 status={tile}
                 key={index}>
           {tile}</span>
  });

  return(
      <div className={board.wrapper}>
        <Win restart={restart} isWon={isWon} back={back} />
        {newTiles}
      </div>
    )
}

export default Board;
