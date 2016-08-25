import React , {Component} from 'react'
import TodoActions from '../actions/TodoActions'
import { browserHistory } from 'react-router'


export default class PetList extends Component {
  constructor(){
    super();
    this.deletePet=this.deletePet.bind(this);

  }

  deletePet(e){
   console.log('deleteme:', e.target.id);
   TodoActions.deletePet(e.target.id)
  }

  addOwner(e){
    console.log('addOwner',e.target.id);
    browserHistory.push({pathname:'/ViewPerson', query:{petid:e.target.id}});
  }


render(){
  let {_id,image, name , type, age ,owner}=this.props;
  if(owner) {
    return (
      <tr key={_id}>
        <td><img src={image} width="200 px"  alt = "No Image"/></td>
        <td>{name}</td>
        <td>{type}</td>
        <td>{age}</td>
        <td><button id = {_id} onClick={this.deletePet} className ="btn btn-danger">Delete Me</button>
            <button id = {_id} onClick={this.addOwner} className ="btn btn-success">Add Owner</button>
        </td>
      </tr>
    )
  }
  else {
      return (
      <tr key={_id}>
        <td><img src={image} width="200 px" alt = "No Image"/></td>
        <td>{name}</td>
        <td>{type}</td>
        <td>{age}</td>
        <td><button id = {_id} onClick={this.deletePet} className ="btn btn-danger">Delete Me</button>
            <button id = {_id} onClick={this.addOwner}className ="btn btn-success">Add Owner</button>
        </td>
      </tr>
      )
  }
}



}