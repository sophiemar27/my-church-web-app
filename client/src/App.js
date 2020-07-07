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
import Services from './components/Services.js'
import Success from './components/Success.js'
import Cancel from './components/Cancel.js'


function App() {
  return (
    <div className="App">
      

      <Router>
      
        <nav className="nav-bar">
          <Link to="/home">
          <i className="material-icons logo">

          {/* Logo */}
          <img className='logo-img' src='https://cdn.iconscout.com/icon/premium/png-256-thumb/sevanavank-monastery-1726840-1468229.png'/>
          </i>
          </Link>
            
          
          <Link to="/">
            <div className="link-item">Home</div>
          </Link>
          <Link to="/all_event">
            <div className="link-item">Events</div>
          </Link>
          <Link to="/courses">
            <div className="link-item">Classes</div>
          </Link>
          <Link to="/services">
            <div className="link-item">Services</div>
          </Link>
          

          
          </nav>
       <div className='text_container'>
        <Switch>
          <Route exact path="/" component={Home} />  
          <Route exact path="/services" component={Services} />
          <Route exact path="/courses/" component={Course} />
          <Route exact path="/single_course/:courseId" component={SingleCourse} />
          <Route exact path="/register/:courseId" component={Register} />
          <Route exact path="/all_event" component={Event} />
          <Route exact path="/single_event/:eventId" component={SingleEvent} />
          <Route exact path="/event_register/:eventId" component={User} />
          <Route exact path="/success" component={Success} />
          <Route exact path="/cancel" component={Cancel} />
        </Switch>
      </div>
      </Router>

    </div>
  );
}

export default App;
