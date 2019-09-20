import React from 'react';
import logo from './logo.svg';
import './App.css';
// import universe from './pictures/universe.jpg'
import PlanetHolder from './containers/PlanetHolder.js'


function App() {
  return (
    <div className="App">
    <h1 className="header">Welcome to the Universe</h1>

    <PlanetHolder/>
    </div>
  );
}

export default App;
