import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
    render() {
        return (
            <div className='nav-bar'>
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

            </div>
        )
    }
}
