import React from 'react'
import Planet from '../components/Planet.js'

class PlanetHolder extends React.Component {
  constructor(props){
    super(props)
  }





  render(){


      const sortedPlanets = [...this.props.planets]
      function sortPlanets(){
      sortedPlanets.sort((a,b) => a.planet_id - b.planet_id);
      return sortedPlanets
      }

    return(
      <div class="scrollmenu">

        {
          sortPlanets(sortedPlanets).map((planet) => {
          return <Planet planet={planet}/>
          })
        }

      </div>
    )
  }
}

export default PlanetHolder


// var obj = [...this.state.data];
// obj.sort((a,b) => a.timeM - b.timeM);
// obj.map((item, i) => (<div key={i}> {item.matchID}
//                       {item.timeM} {item.description}</div>))
