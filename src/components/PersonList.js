import React , {Component} from 'react'
import PersonTodoActions from '../actions/PersonTodoActions'

export default class PersonList extends Component{
  constructor(){
    super();
    this.deletePerson=this.deletePerson.bind(this);
  }

  deletePerson(e){
     PersonTodoActions.deletePerson(e.target.id);
  }
  
  render(){
    let {_id,name,email}=this.props;
    return(
      <tr key={_id}>
      <td>{name}</td>
      <td>{email}</td>
      <td><button id = {_id} onClick={this.deletePerson} className ="btn btn-danger">Delete</button>
      </td>
      </tr>
    )
  }
}