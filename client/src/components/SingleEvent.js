import React from 'react'
import axios from 'axios'




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
        return (<div>
           
            <img src={this.state.image_url} width="500" />
            <h3>{this.state.type_of_event}</h3>
            <div>{this.state.event_date}</div>
            <div>{this.state.place}</div>
            <div>{this.state.description}</div>
            <div>{this.state.event_cost}</div>
            <div>Register</div>
        </div>)
    }
}