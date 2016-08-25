import AppDispatcher from '../AppDispatcher'


const ServerActions={
 receivePet(pet){
  AppDispatcher.dispatch({
    type:'RECEIVE_PET',
    pet
  })
 },

 receiveAllPets(pets){
  AppDispatcher.dispatch({
    type:'RECEIVE_ALL_PETS',
    pets
  })
 },

 deletePet(data){
  AppDispatcher.dispatch({
    type:'DELETE_PET',
    data
  })
 },

 receivePetsWithoutOwner(pets){
  AppDispatcher.dispatch({
    type:'PETS_WITHOUT_OWNER',
    pets
  })
 }

}


export default ServerActions;