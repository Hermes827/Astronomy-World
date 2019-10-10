import React from 'react';
import {picURL} from '../pictures/picturesURL.js'

function Planet(props) {
  return (
    <div>
    <h1>{props.planet.englishName}</h1>
    {console.log(picURL)}


    </div>
  );
}

export default Planet;
