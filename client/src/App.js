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
import User from './components/User.js'
import SingleCourse from './components/SingleCourse.js'
import Home from './components/Home.js'

function App() {
  return (
    <div className="App">
      <h1></h1>

      <Router>
      
        <nav className="nav-bar">
          <Link to="/">
          <i className="material-icons logo">
          Hope
          {/* <img src='client/public/crossLogo.png'> */}
          </i>
          </Link>
            
          
          <Link to="/home">
            <div className="link-item">Home</div>
          </Link>
          <Link to="/all_event">
            <div className="link-item">Events</div>
          </Link>
          <Link to="/course">
            <div className="link-item">Courses</div>
          </Link>
          <Link to="">
            <div className="link-item">Services</div>
          </Link>
          

          
          </nav>
       <div className='text_container'>
        <Switch>
          <Route exact path="/home" component={Home} />  
          <Route exact path="/course/" component={Course} />
          <Route exact path="/single_course/:courseId" component={SingleCourse} />
          <Route exact path="/register/:courseId" component={Register} />
          <Route exact path="/all_event" component={Event} />
          <Route exact path="/single_event/:eventId" component={SingleEvent} />
          <Route exact path="/event_register/:eventId" component={User} />
        </Switch>
      </div>
      </Router>

    </div>
  );
}

export default App;
