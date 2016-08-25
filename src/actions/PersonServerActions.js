import AppDispatcher from '../AppDispatcher'

const PersonServerActions ={
  receivePerson(person){
    AppDispatcher.dispatch({
    type:'RECEIVE_PERSON',
    person
  })
 },

  receiveAllPeople(people){
    AppDispatcher.dispatch({
    type:'RECEIVE_ALL_PEOPLE',
    people
  })
 },

  deletePerson(person){
    AppDispatcher.dispatch({
    type:'DELETE_PERSON',
    data
   })
  }
}

export default PersonServerActions;