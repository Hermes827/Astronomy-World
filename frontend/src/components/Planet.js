import React from 'react';
import {picURL} from '../pictures/picturesURL.js'

function Planet(props) {
  return (
    <div className="planet" onClick={() => props.setCurrentPlanet(props.planet)}>
    <h1>{props.planet.name}</h1>
    <img className="planetIMG" src={props.planet.image}></img>

    </div>
  );
}

export default Planet;
