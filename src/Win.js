import React from "react";
import { NavLink } from "react-router-dom";

import win from "./win.css";

let Win = ({restart, isWon, back}) => {
  return(
    <div className={win.wrapper} style={isWon ? {display:"block"} : {display:"none"} }>
      <div className={win.win}>
        <div>
        Well Done! {'\u2728\u2728\u2728'}<br />
        Wow~ You have won this game! <br /> <br />
        </div>
        <div onClick={restart} className={win.button}>Restart</div>
        <div onClick={back} className={win.button}>Back</div>
      </div>
    </div>
  )
}

export default Win;
