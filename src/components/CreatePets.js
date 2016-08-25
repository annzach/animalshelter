import React, { Component } from 'react'
import TodoActions from '../actions/TodoActions'
import { browserHistory } from 'react-router'



export default class CreatePets extends Component{
  constructor(){
    super();
    this.state = {
      name:'',
      type:'',
      age:'',
      image:''

    }
    this.submitPets = this.submitPets.bind(this);


  }

  resetForm(){
    this.setState({name:'',type:'',age:'',image:''});
  }

  submitPets(e){
   e.preventDefault();
   let pet={
   name:this.state.name,
   type:this.state.type,
   age:this.state.age,
   image:this.state.image
   }
   console.log(pet,{pet});
   TodoActions.createPets(pet)
   this.setState({pet:''});
   this.resetForm();
   browserHistory.push('/ViewPets')

  }

  render(){
    let {pet} = this.state;
    return (
      <div id ="petsid">
        <form onSubmit={this.submitPets}>
          <input type="text" value ={this.state.name} placeholder ="Name" onChange={e=>this.setState({name:e.target.value})}/><br/>
          <input type="text" value ={this.state.type} placeholder ="Type" onChange={e=>this.setState({type:e.target.value})}/> <br/>
          <input type="text" value ={this.state.age} placeholder ="Age" onChange={e=>this.setState({age:e.target.value})}/> <br/>
          <input type="text" value={this.state.image} placeholder="Image URL" onChange= {e=>this.setState({image:e.target.value})}/><br/>
          <button id="petsmtid" type ="submit" className = "btn btn-warning">Add me</button>
       </form>
       
      </div>
      )
  }
}