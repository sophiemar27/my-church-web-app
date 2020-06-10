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

function App() {
  return (
    <div className="App">
      <h1>Debre Tsion</h1>

      <Router>
        <Switch>
          <Route exact path="/course" component={Course} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
