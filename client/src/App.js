import React, { Component } from 'react'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  Link } 
  from 'react-router-dom'

import './App.css';

import  Course from './components/Course.js'
import  Register from './components/Register.js'
import Event from './components/Events.js'
import SingleEvent from './components/SingleEvent.js'

function App() {
  return (
    <div className="App">
      <h1>Debre Tsion</h1>

      <Router>
        <Switch>
          <Route exact path="/course" component={Course} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/all_event" component={Event} />
          <Route exact path="/Single_event/:eventId" component={SingleEvent} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
