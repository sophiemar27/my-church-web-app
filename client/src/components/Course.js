import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Course extends React.Component {
    state = {
        course: {
            course: '',
            date: '',
            how_often: '',
            time: '',
        },
        allCourses: []
    }

    componentDidMount() {
        this.getAllCourses()
    }
 
    getAllCourses = async () => {
        try {
            const res = await axios.get('/api/v1/course/')
            const newState = { ...this.state }
            newState.allCourses = res.data
            this.setState(newState)
        } catch (error) {
            console.log('Failed to get all Courses')
            console.log(error)
        }
    }

    render() {
        return (
            <div className='all-course'>
                {this.state.allCourses.map((course, index) => {
                    return (
                        <div  key={`jd320kd-${index}`}>
                            <div>{course.course}</div>
                            <div>{course.date}</div>
                            <div>{course.how_often}</div>
                            <div>{course.time}</div>
                           
                                <div>Register</div>
                        
                        </div>
                    )
                })}
            </div>
        )
    }
}
