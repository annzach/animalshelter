import API from '../API'

const TodoActions = {

  getAllPets: API.getAllPets,
  petWithoutOwner:API.petWithoutOwner,
  
  createPets(pet){
    API.createPets(pet);
  },
   
   deletePet(id){
    API.deletePet(id);
    API.getAllPets();
    API.petWithoutOwner();

   },

   addOwner(petid,ownerid){
    API.addOwner(petid,ownerid);
    API.getAllPets();
   }



}

export default TodoActions