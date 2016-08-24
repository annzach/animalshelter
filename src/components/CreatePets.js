import React, { Component } from 'react'
import TodoActions from '../actions/TodoActions'

export default class CreatePets extends Component{
  constructor(){
    super();
    this.state = {
      name:'',
      type:'',
      age:''

    }
    this.submitPets = this.submitPets.bind(this);


  }

  resetForm(){
    this.setState({name:'',type:'',age:''});
  }

  submitPets(e){
   e.preventDefault();
   let pet={
   name:this.state.name,
   type:this.state.type,
   age:this.state.age
   }
   console.log(pet,{pet});
   TodoActions.createPets(pet)
   this.setState({pet:''});
   this.resetForm();
  }

  render(){
    let {pet} = this.state;
    return (
      <div id ="petsid">
        <form onSubmit={this.submitPets}>
          <input type="text" value ={this.state.name} placeholder ="Name" onChange={e=>this.setState({name:e.target.value})}/><br/>
          <input type="text" value ={this.state.type} placeholder ="Type" onChange={e=>this.setState({type:e.target.value})}/> <br/>
          <input type="text" value ={this.state.age} placeholder ="Age" onChange={e=>this.setState({age:e.target.value})}/> <br/>
          <button id="petsmtid" type ="submit" className = "btn btn-warning">Add me</button>
       </form>
      </div>
      )
  }
}