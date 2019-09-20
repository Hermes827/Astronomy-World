import React from 'react'
import Planet from '../components/Planet.js'

class PlanetHolder extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h1 className="header1">Hello</h1>
        <Planet/>
      </div>
    )
  }
}

export default PlanetHolder
