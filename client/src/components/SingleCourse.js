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
        return (<div>
           
            <img src={this.state.image_url} width="500" />
            <h3>{this.state.type_of_course}</h3>
            <div>{this.state.course_date}</div>
            <div>{this.state.place}</div>
            <div>{this.state.description}</div>
            <div>{this.state.course_cost}</div>
            <Link to={`/course_register/${this.state.id}`} >
            <div>Register</div>
            </Link>
        </div>)
    }
}