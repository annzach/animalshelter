import React , {Component} from 'react'
import TodoActions from '../actions/TodoActions'
import PersonTodoActions from '../actions/PersonTodoActions'
import {browserHistory} from 'react-router'

export default class PersonList extends Component{
  constructor(){
    super();
    this.deletePerson=this.deletePerson.bind(this);
  }

  deletePerson(e){
     PersonTodoActions.deletePerson(e.target.id);
  }

  select(petid,ownerid){
    console.log('petid',petid);
    console.log('ownerid',ownerid)
    TodoActions.addOwner(petid,ownerid);
    browserHistory.push('/AdoptedPets')
   
  }
  
  render(){
    let {_id,name,email,petid}=this.props;
    return(
      <tr key={_id}>
      <td>{name}</td>
      <td>{email}</td>
      <td>
          <button id = {_id} onClick={this.select.bind(null,petid,_id)} className ="btn btn-success">Select</button>
          <button id = {_id} onClick={this.deletePerson} className ="btn btn-danger">Delete</button>
      </td>
      </tr>
    )
  }
}