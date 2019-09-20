import React from 'react';
import logo from './logo.svg';
import './App.css';
// import universe from './pictures/universe.jpg'
import PlanetHolder from './containers/PlanetHolder.js'

const planetAPI = "https://api.le-systeme-solaire.net/rest/bodies/"

const filteredPlanets = "haha"

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      planets: []
    }
  }

  componentDidMount(){
    fetch(planetAPI)
    .then(res => res.json())
    .then(data => {
      console.log(data.bodies)
      this.setState({
        planets: data.bodies
      })
    })
  }

  filterPlanets = () => {
    var planets = this.state.planets
    const filteredPlanets = planets.filter(planet => {
        if(planet.isPlanet === true) {
          return planet
        }
      }
      )
    console.log(filteredPlanets);

  }

  render(){
  return (
    <div className="App">
    <h1 className="header">Welcome to the Universe</h1>
    {this.filterPlanets()}
    <PlanetHolder/>
    </div>
  );
}
}

export default App;
