import React, {Component} from "react";
import { NavLink } from "react-router-dom";

import menu from "./menu.css";

class Menu extends Component {
  state = {
    name: "",
  }

  storeName = e => {
    this.setState({
      name: e.target.value
    })
  }

  render(){
    return(
      <div className={menu.wrapper}>
        <label>Player: </label><br />
        <input className={menu.input} type="text" onChange={this.storeName} value={this.state.name}/>
        <div onClick={ () => {this.props.initBoard(this.state.name)} }
             className={menu.button}>
             {!this.props.name ? "Start" : "Restart"}</div>
        <div className={menu.button}><NavLink className={menu.link} to="/ranking">Ranking</NavLink></div>
        <div className={menu.button}><NavLink className={menu.link} to="/">Back to Game</NavLink></div>
      </div>
      )
  }
}

export default Menu;
