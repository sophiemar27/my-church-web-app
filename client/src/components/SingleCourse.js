import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'




export default class SingleCourse extends React.Component {
    state = {
        course: '',
        date: '',
        how_often: '',
        time: '',
    }

    

    componentDidMount() {
        this.getSingleCourse()
    }

    getSingleCourse = async () => {
        const courseId = this.props.match.params.courseId;
        const res = await axios.get(`/api/v1/course/${courseId}/`)
        console.log(res.data)
        let newState = { ...this.state }
        newState = res.data
        this.setState(newState)
    }

    render() {
        return (<div className='course'>
           
            
            <div className='single-course-name'>{this.state.course}</div>
            <div className='courses-detail'>{this.state.date}</div>
            <div className='courses-detail'>{this.state.how_often}</div>
            <div className='courses-detail'>{this.state.time}</div>
            
            <Link to={`/register/${this.state.id}`} >
            <div className='course-btn'>Register</div>
            </Link>
        </div>)
    }
}