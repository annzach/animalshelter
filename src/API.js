import axios from 'axios'
import ServerActions from './actions/ServerActions'

const API = {

  getAllPets(){
    axios.get(`/api/animals`)
         .then(res=>res.data)
         .then(ServerActions.receiveAllPets)
         .catch(console.error)

  },
  createPets(pets) {
    axios.post(`/api/animals`,pets)
         .then(res => res.data)
         .then(ServerActions.receivePet)
         .catch(console.error)
  },
  deletePet(id){
    axios.delete('/api/animals/'+id)
         .then(res=>res.data)
         .then(ServerActions.deletePet)
         .catch(console.error);
  }
}




export default API;