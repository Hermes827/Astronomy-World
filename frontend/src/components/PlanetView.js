import React from 'react';

function PlanetView(props) {
  return (
    <div className="planetView">
    <div className="planetView2">
    <h1>{props.currentPlanet.name} <img className="glyph" src={props.currentPlanet.glyph}></img></h1>
    </div>
    <img className="planetViewIMG" src={props.currentPlanet.image}></img>
    <button onClick={()=> props.returnToHomepage()}>Return to homepage</button>
    {console.log(props)}
    </div>
  );
}

export default PlanetView;
