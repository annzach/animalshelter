import React, { Component } from 'react'
import PeopleStore from '../stores/PeopleStore'
import PersonTodoActions from '../actions/PersonTodoActions'
import PersonList from './PersonList'


export default class ViewPerson extends Component{
  constructor(){
    super();
    this.state = {
      people:PeopleStore.getAll()
    }
     this._onChange = this._onChange.bind(this);
  }
 componentDidMount(){
    PersonTodoActions.getAllPeople();
    PeopleStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    PeopleStore.stopListening(this._onChange);
  }


  _onChange() {
    this.setState({
      people: PeopleStore.getAll()
    });
  }


  render(){
    console.log('this.props.location.query.petid:', this.props.location.query.petid)
   const peopleLists =this.state.people.map(person=>{
    return (
       <PersonList key = {person._id}{...person} petid={this.props.location.query.petid}/>
      )
   })
    return(
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Make Changes</th>
        </tr>
      </thead>
      <tbody>
         {peopleLists}
      </tbody>
      </table>
    )
  }

}