import React , {Component} from 'react'
import TodoActions from '../actions/TodoActions'

export default class PetList extends Component {
  constructor(){
    super();
    this.deletePet=this.deletePet.bind(this);

  }

  deletePet(e){
   console.log('deleteme:', e.target.id);
   TodoActions.deletePet(e.target.id)
  }


render(){
  let {_id, name , type, age ,owner}=this.props;
  if(owner) {
    return (
      <tr key={_id}>
        <td>{name}</td>
        <td>{type}</td>
        <td>{age}</td>
        <td>{owner.name}</td>
        <td><button id = {_id} onClick={this.deletePet} className ="btn btn-danger">Delete</button>
            <button className ="btn btn-warning">Edit</button></td>
      </tr>
    )
  }
  else {
      return (
      <tr key={_id}>
        <td>{name}</td>
        <td>{type}</td>
        <td>{age}</td>
        <td>N/A</td>
        <td><button id = {_id} onClick={this.deletePet} className ="btn btn-danger">Delete</button>
            <button className ="btn btn-warning">Edit</button></td>
      </tr>
      )
  }
}



}