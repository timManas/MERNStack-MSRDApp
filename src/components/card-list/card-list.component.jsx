import React from "react";
import { Card } from "../card/card.component"
import "./card-list.styles.css";

// Responsible for listing all thr card names 
// In App.js, there is a property for CardList..i.e monsters={this.state.monsters}
// Hence here we can FETCH that property "monsters", using the props argument
// Every component has a list of properties inherited on ReactJS
export const CardList = props => (
  <div className="card-list">
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} />   
    ))}
  </div>
);
