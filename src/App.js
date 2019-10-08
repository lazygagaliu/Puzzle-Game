import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";

import style from "./style.css";

import Board from "./Board";
import Menu from "./Menu";
import Ranking from "./Ranking";

class App extends Component {
  state = {
    tiles: [1, 2, 3, 4, 5, 6, 7, 8, 0],
    isWon: false,
    num: 1
  }

  shuffle = arr => {
    for(let i = arr.length - 1; i > 0; i--){
      let j = Math.floor( Math.random() * (i + 1) );
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  initBoard = player => {
    let tiles = this.state.tiles;
    let name = player
    // tiles = this.shuffle(tiles);
    // tiles = [1, 2, 3, 4, 5, 6, 0, 7, 8];
    tiles = [4, 1, 2, 7, 5, 3, 0, 8, 6];
    this.setState( prevState => ({
      tiles,
      num: prevState.num,
      name
    }))
    console.log(this.state);
  }

  checkWin = () => {
    let tiles = this.state.tiles;
    for(let i = 0; i < tiles.length - 1; i++){
      if(tiles[i] !== i + 1){
        return false;
      }
    }
    let json = {
      name: this.state.name,
      steps: this.state.num
    }
    let ranking;
    if( !localStorage.getItem("ranking") ){
      ranking = [];
      ranking.push(json);
      localStorage.setItem( "ranking", JSON.stringify(ranking) );
    } else {
      ranking = JSON.parse( localStorage.getItem("ranking") );
      ranking.push(json);
      localStorage.setItem( "ranking", JSON.stringify(ranking) );
    }

    return true;
  }

  clickHandle = (index, status) => {
    let tiles = this.state.tiles;
    let moves = [
        [null,1,3,null], [null,2,4,0], [null,null,5,1],
        [0,4,6,null],    [1,5,7,3],     [2,null,8,4],
        [3,7,null,null], [4,8,null,6], [5,null,null,7]
    ];
    let name = this.state.name;

    for(let i = 0; i < moves[index].length; i++){
      let move = moves[index][i];
      if(typeof move === "number" && tiles[move] === 0){
        tiles[index] = 0;
        tiles[move] = status;
        this.setState(prevState => ({
          tiles,
          name,
          num: prevState.num + 1,
          isWon: this.checkWin()
        }))
      }
    }
    console.log(this.state);
  }

  back = () => {
    let path = location.pathname;
    this.setState({
      tiles: [1, 2, 3, 4, 5, 6, 7, 8, 0],
      num: 1,
      isWon:false,
      path
    })
  }

  restart = () => {
    let name = this.state.name;
    this.back();
    this.initBoard(this.state.name);
  }

  render(){
    return(
      <BrowserRouter>
        <div className={style.game}>
          <h1>Sliding Puzzle Game</h1>
          <Route exact path="/"
                 render={ (props) => <Board back={this.back} isWon={this.state.isWon} restart={this.restart} clickHandle={this.clickHandle} tiles={this.state.tiles} /> }
          />
          <Route path="/ranking" component={Ranking} />
          <Menu name={this.state.name} initBoard={this.initBoard}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
