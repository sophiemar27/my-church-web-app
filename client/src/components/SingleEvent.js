import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'




export default class SingleEvent extends React.Component {
    state = {
        image_url: '',
        type_of_event: '',
        event_date: '',
        place: '',
        description: '',
        event_cost: ''
    }

    

    componentDidMount() {
        this.getSingleEvent()
    }

    getSingleEvent = async () => {
        const eventId = this.props.match.params.eventId;
        const res = await axios.get(`/api/v1/event/${eventId}/`)
        console.log(res.data)
        let newState = { ...this.state }
        newState = res.data
        this.setState(newState)
    }

    render() {
        return (<div className='single-event'>
           
            <img className='single-img' src={this.state.image_url} width="500" />
            <h3 class='event-type'>{this.state.type_of_event}</h3>
            <div class='event-date'>{this.state.event_date}</div>
            <div class='event-place'>{this.state.place}</div>
            <div className='event-description'>{this.state.description}</div>
            <div className='event-cost'>{this.state.event_cost}</div>
            <Link to={`/event_register/${this.state.id}`} >
            <div className='course-btn'>Register</div>
            </Link>
        </div>)
    }
}