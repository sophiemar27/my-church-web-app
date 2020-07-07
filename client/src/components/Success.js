import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Success extends Component {
    render() {
        return (
            <div className='success-page'>
                <div className='success-msg'>You Have Successfully Subscribed!</div>
                <Link to={"/"}>
                <div className='r-home-page'>Return To Home Page</div>
                </Link>
            </div>
        )
    }
}
