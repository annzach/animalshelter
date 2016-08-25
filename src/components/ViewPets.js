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
          <th><h5><b>Image</b></h5></th>
          <th><h5><b>Name</b></h5></th>
          <th><h5><b>Type</b></h5></th>
          <th><h5><b>Age</b></h5></th>
          <th><h5><b>Owner</b></h5></th>
          <th><h5><b>Action</b></h5></th>
        </tr>
      </thead>
      <tbody>
       {petLists}
      </tbody>
      </table>
    )
  }
}