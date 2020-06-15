import React, { Component } from 'react'
import Navbar from './Navbar'

export default class Home extends Component {
    

    
    render() {
        return (
            
            <div>
                {/* <Navbar/> */}
                
                {/* <img className='main-img' src='https://images.unsplash.com/photo-1491396122992-23bcbe680fe6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' /> */}
                <div className='showcase'>
                    <p className='showcase-text'>Orthodoxy is what Christ taught, 
                    <br/>
                    the apostles preached, and the Father Kept.  <span className='qout'> -St. Athanasius</span></p> 
                    
                </div>
                

                <div className='main-body'>
                    <div className='payment-container'>
                        <div className='donation'>Donation</div>
                        <div className='memb-payment'>Member's Payment</div>
                    </div>
                </div>

                <div className='footer-container'>
                    <div className='sections'>
                        <h4 className='title'>Section-1</h4>
                        <p>Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of 
                            type and scrambled it to make a type specimen book. 
                            </p>
                    </div>

                    <div className='sections'>
                        <h4 className='title'>Section-2</h4>
                        <p>Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of 
                            type and scrambled it to make a type specimen book. 
                            </p>
                    </div>

                    <div className='sections'>
                        <h4 className='title'>Section-3</h4>
                        <p>Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of 
                            type and scrambled it to make a type specimen book. 
                            </p>
                    </div>
                </div>
            </div>
            
        )
    }
}
