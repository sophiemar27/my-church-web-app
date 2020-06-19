import React, { Component } from 'react'

export default class Services extends Component {
    render() {
        return (
            <div>
                <div className='service-verse'>
                    <p className='weloming-verse'><i>"There is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus." </i><br/><span>Galatians 3:28</span></p>
                    
                </div>
                <div className='service-page'>
                    <div className='sevice-container'>
                        <div className='sunday-services'>
                            <h1 className='service-title'>Sunday Services</h1>
                            <h3>Our Sunday Services Are: <br /> 5:00AM - 10:00AM</h3>
                            <div className='service-time'>5:00AM - 7:00AM <br /> <span className='services'>Morning Praise</span></div>
                            <div className='service-time'>7:00AM - 9:00AM <br /> <span className='services'>Liturgy</span></div>
                            <div className='service-time'>9:00AM - 10:00AM <br /> <span className='services'>Mezmur and Sermon</span></div>
                            <div className='service-time'>5:00AM - 10:00AM <br /> <span className='services'>Fellowship</span></div>
                            
                        </div>

                        <div className='saturday-services'>
                            <h1 className='service-title'>Saturday Services</h1>
                            <h3>Our Saturday Services Are: <br /> 10:00AM - 1:00PM</h3>
                            <div className='service-time'>10:00AM - 11:00AM <br /> <span className='services'>Bible Study</span></div>
                            <div className='service-time'>11:00AM - 12:00AM <br /> <span className='services'>Mezmur/prayer Lesson</span></div>
                            <div className='service-time'>12:00AM - 1:00PM <br /> <span className='services'>Funn Time</span></div>
                            

                        </div>

                        <div className='other-services'>
                            <h1 className='service-title'>Other Services</h1>
                            <div className='service-time'>5:00PM - 5:30pm <br /> <span className='services'>Daily Online prayer</span></div>
                            <div className='service-time'>5:30PM - 6:30PM <br /> <span className='services'>Dayily Bible Study</span></div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
