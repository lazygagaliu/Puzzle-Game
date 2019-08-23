import React from "react";
import ranking from "./ranking.css"; // can't use ?!???!!??!

let Ranking = () => {
  let ranking;
  if( !localStorage.getItem("ranking") ){
    ranking = <div> No Record !</div>;
  } else {
    ranking = JSON.parse( localStorage.getItem("ranking") );
    ranking.sort( (a, b) => {
      return b.steps - a.steps
    });

    ranking = ranking.map( (rank, i) => {
      return(
        <div style={{width:"200px"}} key={i}>
          <span style={{display:"inline-block", textAlign:"center",width:"60px"}}>{i + 1} </span>
          <span style={{display:"inline-block", textAlign:"center",width:"60px"}}>{rank.name} </span>
          <span style={{display:"inline-block", textAlign:"center",width:"60px"}}>{rank.steps}</span>
        </div>
      )
    });
  }

  return(
    <div>
      <h2 style={{textAlign:"center"}}>Ranking !</h2>
      <div style={{width:"200px", marginBottom:"16px", borderBottom:"1px solid black"}}>
        <span style={{display:"inline-block", textAlign:"center",width:"60px"}}>Rank</span>
        <span style={{display:"inline-block", textAlign:"center",width:"60px"}}>Player</span>
        <span style={{display:"inline-block", textAlign:"center",width:"60px"}}>Steps</span>
      </div>
      {ranking}
    </div>
  )
}

export default Ranking;
