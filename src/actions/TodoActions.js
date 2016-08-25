import API from '../API'

const TodoActions = {

  getAllPets: API.getAllPets,
  
  createPets(pet){
    API.createPets(pet);
  },
   
   deletePet(id){
    API.deletePet(id);
    API.getAllPets();

   },

   addOwner(petid,ownerid){
    API.addOwner(petid,ownerid);
    API.getAllPets();
   }

}

export default TodoActions