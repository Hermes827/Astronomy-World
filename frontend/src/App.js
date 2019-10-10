import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlanetHolder from './containers/PlanetHolder.js'
import PlanetView from './components/PlanetView.js'

// const planetAPI = "https://api.le-systeme-solaire.net/rest/bodies/"

const planetAPI = "http://localhost:3000/api/v1/planets"

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      planets: [],
      lookingAtPlanet: false,
      currentPlanet: {}
    }
  }

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

  setCurrentPlanet = (planet) => {
  this.setState({
    currentPlanet: planet,
    lookingAtPlanet: true
  })
  }

  renderPlanetView = () => {
    const {currentPlanet} = this.state
    if(this.state.lookingAtPlanet === true){
      return <PlanetView currentPlanet={currentPlanet}/>
    }
  }

  render(){

  return (
    <div className="App">
    <h1 className="header">Welcome to the Solar System</h1>
    <PlanetHolder
      planets={this.state.planets}
      setCurrentPlanet={this.setCurrentPlanet}
      />
    {this.renderPlanetView()}
    </div>
  );
}
}

export default App;
