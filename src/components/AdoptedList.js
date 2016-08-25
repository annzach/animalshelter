import React , {Component} from 'react'
import TodoActions from '../actions/TodoActions'


export default class AdoptedList extends Component {
  constructor(){
    super();
    this.deletePet=this.deletePet.bind(this);

  }

  deletePet(e){
   console.log('deleteme:', e.target.id);
   TodoActions.deletePet(e.target.id)
  }

 


render(){
  let {_id, image, name , type, age ,owner}=this.props;
  if(owner) {
    return (
      <tr key={_id}>
        <td><img src={image} width="200 px"  alt = "No Image"/></td>
        <td>{name}</td>
        <td>{type}</td>
        <td>{age}</td>
        <td>{owner.name}</td>
        <td><button id = {_id} onClick={this.deletePet} className ="btn btn-danger">Delete Me</button>
           
        </td>
      </tr>
    )
  }
  else{
    return (<div></div>)
  }
 
}



}