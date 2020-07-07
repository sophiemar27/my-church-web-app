import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Cancel extends Component {
    render() {
        return (
            <div className='cancel-page'>
                <div className='cancel-msg'>You Have Successfully Cancelled Your Subscription!</div>
                <Link to={"/"}>
                <div className='r-home-page'>Return To Home Page</div>
                </Link>
            </div>
        )
    }
}
