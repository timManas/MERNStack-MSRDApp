import React from 'react';
import './card.styles.css'

// We fetch the properties in "card-list.componenets.jsx" for Tag 'Card'
// All the properties in the tag come in as arguments in the form of "props"
export const Card = props => (
    <div className="card-container">
        <img 
            alt='monster'
            src={`https://robohash.org/${props.monster.id}?set=set2`}
        />
        <h2> {props.monster.name} </h2>
        <p> {props.monster.id}</p>
        <p> {props.monster.email}</p>
    </div>
);