import React from 'react'
import Planet from '../components/Planet.js'

class PlanetHolder extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div class="scrollmenu">

        {
          this.props.planets.map((planet) => {
          return <Planet planet={planet}/>
          })
        }

      </div>
    )
  }
}

export default PlanetHolder
