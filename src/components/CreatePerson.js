import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import PersonTodoActions from '../actions/PersonTodoActions'

export default class CreatePerson extends Component{
  constructor(){
    super();
    this.state = {
      name:'',
      email:''
    }
  this.submitPerson = this.submitPerson.bind(this);
  }

  resetForm(){
    this.setState({name:'',email:''});
  }

  submitPerson(e){
    e.preventDefault();
    let person = {
      name:this.state.name,
      email:this.state.email

    }
    console.log('person',{person})
    PersonTodoActions.createPeople(person)
    this.setState({person:''});
    this.resetForm();
    browserHistory.push('/ViewPerson')
    
  }

  render(){
    let {person} =this.state;
    return (
      <div id ="personid">
        <form onSubmit={this.submitPerson}>
          <input type="text" value ={this.state.name} 
                 placeholder ="Name" 
                 onChange = {e=>this.setState({name:e.target.value})}/> <br/>
          <input type="text" value ={this.state.email} 
                 placeholder ="Email id"
                 onChange = {e=>this.setState({email:e.target.value})}/> <br/>
          <button id="petsmtid"className = "btn btn-warning">Add me</button>

        </form>

      </div>
      )
  }
}