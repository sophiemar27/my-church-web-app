import React, { Component } from 'react'
import Navbar from './Navbar'

export default class Home extends Component {
    

    
    render() {
        return (
            
            <div>
                {/* <Navbar/> */}
                
                {/* <img className='main-img' src='https://images.unsplash.com/photo-1491396122992-23bcbe680fe6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' /> */}
                <div className='showcase'>
                    <p className='showcase-text'>Orthodoxy is what Christ taught, the apostles preached, and the Father Kept.<span className='qout'> -St. Athanasius</span></p> 
                    
                </div>
                <div className='main-body'></div>
                <div className='footer'></div>
            </div>
            
        )
    }
}
