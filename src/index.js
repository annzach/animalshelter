import React from 'react'
import {render} from 'react-dom'
import {Router, Route,IndexRoute, browserHistory} from 'react-router'
import App from'./components/App'
import CreatePets  from './components/CreatePets'
import CreatePerson from './components/CreatePerson'
import Welcome from './components/Welcome'
import ViewPets from './components/ViewPets'
import ViewPerson from './components/ViewPerson'
import PersonList from './components/PersonList'
import AdoptedPets from './components/AdoptedPets'

import './css/style.css'


render(
  <Router history = {browserHistory}>
   <Route path = '/' component ={App}>
    <Route path = 'CreatePets' component ={CreatePets}/>
    <Route path = 'ViewPets' component={ViewPets}/>
    <Route path = 'CreatePerson' component ={CreatePerson}/>
    <Route path = 'ViewPerson' component = {ViewPerson}/>
    <Route path = 'AdoptedPets' component = {AdoptedPets}></Route>
   </Route>
  </Router>,
  document.getElementById('root'));





 