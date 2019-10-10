import React from 'react';
import logo from './logo.svg';
import './App.css';
// import universe from './pictures/universe.jpg'
import PlanetHolder from './containers/PlanetHolder.js'

// const planetAPI = "https://api.le-systeme-solaire.net/rest/bodies/"

const planetAPI = "http://localhost:3000/api/v1/planets"

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      planets: []
    }
  }

  // displayNewAPI(){
  //   fetch(newAPI)
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data[0].image)
  //   })
  // }

  // componentDidMount(){
  //   fetch(planetAPI)
  //   .then(res => res.json())
  //   .then(data => {
  //     const filteredPlanets = data.bodies.filter(planet => {
  //         if(planet.isPlanet === true) {
  //           return planet
  //         }
  //       }
  //       )
  //
  //       const refilteredPlanets = filteredPlanets.filter(planet => {
  //         if(planet.englishName === "Earth"
  //         || planet.englishName === "Venus"
  //         || planet.englishName === "Mercury"
  //         || planet.englishName === "Mars"
  //         || planet.englishName === "Jupiter"
  //         || planet.englishName === "Saturn"
  //         || planet.englishName === "Uranus"
  //         || planet.englishName === "Neptune"
  //         || planet.englishName === "Pluto")
  //         {
  //           return planet
  //         }
  //       })
  //     this.setState({
  //       planets: refilteredPlanets
  //     })
  //     })
  // }

  componentDidMount(){
    fetch(planetAPI)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        planets: data
      })
      })
  }




  render(){

  return (
    <div className="App">
    <h1 className="header">Welcome to the Universe</h1>
    <PlanetHolder planets={this.state.planets}/>
    </div>
  );
}
}

export default App;
