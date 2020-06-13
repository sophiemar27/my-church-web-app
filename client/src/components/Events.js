import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Event extends React.Component {
    state = {
        event: {
            image_url: '',
            type_of_event: '',
        },
        allEvents: []
    }

    


    componentDidMount() {
        this.getAllEvents()
    }
 
    getAllEvents = async () => {
        try {
            const res = await axios.get('/api/v1/event/')
            const newState = { ...this.state }
            newState.allEvents = res.data
            this.setState(newState)
        } catch (error) {
            console.log('Failed to get all Events')
            console.log(error)
        }
    }

    render() {
        return (
            <div className='all-events'>
                {this.state.allEvents.map((event, index) => {
                    return (
                        <div className='all-event-img' key={`jd320kd-${index}`}>
                            <Link to={`/single_event/${event.id}`} >
                            <img className='event-img'  src={event.image_url} width="230" />
                            <div>{event.type_of_event}</div>
                            </Link>
                                
                            
                        </div>
                    )
                })}
            </div>
        )
    }
}
