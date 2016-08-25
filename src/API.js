import axios from 'axios'
import ServerActions from './actions/ServerActions'
import PersonServerActions from './actions/PersonServerActions'

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
  },
  createPeople(person){
      axios.post(`/api/people`,person)
         .then(res => res.data)
         .then(PersonServerActions.receivePerson)
         .catch(console.error)
  },
  getAllPeople(){
      axios.get(`/api/people`)
         .then(res=>res.data)
         .then(PersonServerActions.receiveAllPeople)
         .catch(console.error)

  },
  deletePerson(id){
      axios.delete('/api/people/'+id)
           .then(res=>res.data)
           .then(PersonServerActions.deletePerson)
           .catch(console.error)
  }
}




export default API;