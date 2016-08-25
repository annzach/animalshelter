import React from 'react'
import {Link} from 'react-router'
import Welcome from './Welcome'
const App = React.createClass({
 
  render(){
    return (
      <div>
       
       
     
        <button>
          <Link to = '/CreatePets'>CreatePets</Link>
        </button>

         <button>
          <Link to = '/ViewPets'>ViewPets</Link>
        </button>

        <button>
          <Link to = '/CreatePerson'>CreatePerson</Link>
        </button>

         <button>
          <Link to = '/ViewPerson'>ViewPerson</Link>
        </button>

          <button>
          <Link to = '/AdoptedPets'>AdoptedPets</Link>
        </button>
        
        <Welcome/>
    

         {this.props.children}
         
      
      </div>

    )
  }
})

export default App;