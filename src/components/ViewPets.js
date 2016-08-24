import React, { Component } from 'react'
import AnimalStore from '../stores/AnimalStore'
import TodoActions from '../actions/TodoActions'
import PetList from './PetList'

export default class ViewPets extends Component{

  constructor(){
    super();
    this.state = {
      pets:AnimalStore.getAll()
    }
    this._onChange = this._onChange.bind(this);
  }

 componentDidMount(){
    TodoActions.getAllPets();
    AnimalStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    AnimalStore.stopListening(this._onChange);
  }


  _onChange() {
    this.setState({
      pets: AnimalStore.getAll()
    });
  }


  render(){
   const petLists = this.state.pets.map(pet =>{
      return (
        <PetList key = {pet._id} {...pet}/>
        )
    })
    return(
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Age</th>
          <th>Owners Name</th>
          <th>Make Changes</th>
        </tr>
      </thead>
      <tbody>
       {petLists}
      </tbody>
      </table>
    )
  }
}