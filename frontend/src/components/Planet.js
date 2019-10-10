import React from 'react';
import {picURL} from '../pictures/picturesURL.js'

function Planet(props) {
  return (
    <div>
    <h1>{props.planet.name}</h1>
    <img className="planets" src={props.planet.image}></img>

    </div>
  );
}

export default Planet;
