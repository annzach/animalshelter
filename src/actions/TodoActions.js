import API from '../API'

const TodoActions = {

  getAllPets: API.getAllPets,
  
  createPets(pet){
    API.createPets(pet);
  },
   
   deletePet(id){
    API.deletePet(id);
    API.getAllPets();

   }

}

export default TodoActions