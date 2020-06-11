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
                <h1 className='title'>Sunday School Classes</h1>
                {this.state.allCourses.map((course, index) => {
                    return (
                        <div className='courses' key={`jd320kd-${index}`}>
                            <Link to={`/single_course/${course.id}`} >
                            <div className='course-name'>{course.course}</div>
                            </Link>
                            <div className='courses-detail'>{course.date}</div>
                            <div className='courses-detail'>{course.how_often}</div>
                            <div className='courses-detail'>{course.time}</div>
                            
                            
                            
                        </div>
                    )
                })}
            </div>
        )
    }
}
