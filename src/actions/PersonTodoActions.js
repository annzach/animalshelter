import API from '../API'

const PersonTodoActions = {

  getAllPeople:API.getAllPeople,
  
  createPeople(person){
    API.createPeople(person);
  },

  deletePerson(id){
    API.deletePerson(id);
    API.getAllPeople();
  }
}

export default PersonTodoActions