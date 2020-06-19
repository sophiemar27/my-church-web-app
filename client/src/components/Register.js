import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class Register extends Component {
    state = {
        newStudent: {
            full_name: '',
            email: '',
            phone_number: '',
            address: '',
            city: '',
            state: '',
            zip_code: '',
            age: '',
            gender: '',
            grade: '',
            course: this.props.match.params.courseId
        },

    }


    componentDidMount() {
        
    }


    onChangeStudent = (evt) => {
        const newState = { ...this.state }
        newState.newStudent[evt.target.name] = evt.target.value
        this.setState(newState)
    }

    onSubmit = async (evt) => {
        evt.preventDefault()
        try {
            await axios.post('/api/v1/register/', this.state.newStudent)

            console.log(this.state.newStudent)
        } catch (error) {
            console.log('Failed to create student')
            console.log(error)
        }
        const newState = { ...this.state }
        newState.newStudent.full_name = ''
        newState.newStudent.email = ''
        newState.newStudent.phone_number = ''
        newState.newStudent.address = ''
        newState.newStudent.city = ''
        newState.newStudent.state = ''
        newState.newStudent.zip_code = ''
        newState.newStudent.age = ''
        newState.newStudent.gender = ''
        newState.newStudent.grade = ''
        this.setState(newState)
    }



    render() {
        return (
            <div className='enroll-form'>
                <h1 className='form-title'>Student Enrollement Form</h1>
            
                <form  onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="full_name"></label>
                        <input className='name-input'
                            placeholder="Full Name"
                            type="text"
                            name="full_name"
                            value={this.state.newStudent.full_name}
                            onChange={this.onChangeStudent}
                        />
                    
                    </div>
                    
                        <label htmlFor="email"></label>
                        <input className='input'
                            placeholder="email"
                            type="email"
                            name="email"
                            value={this.state.newStudent.email}
                            onChange={this.onChangeStudent}
                        />
                    

                    
                        <label htmlFor="phone_number"></label>
                        <input className='input'
                            placeholder="Phone Number"
                            type="text"
                            name="phone_number"
                            value={this.state.newStudent.phone_number}
                            onChange={this.onChangeStudent}
                        />
                    

                    <div>
                        <label htmlFor="address"></label>
                        <input className='address-input'
                            placeholder="Address"
                            type="text"
                            name="address"
                            value={this.state.newStudent.address}
                            onChange={this.onChangeStudent}
                        />
                    </div>


                    <div>
                        <label htmlFor="city"></label>
                        <input className='input'
                            placeholder="City"
                            type="text"
                            name="city"
                            value={this.state.newStudent.city}
                            onChange={this.onChangeStudent}
                        />
                    

                    
                        <label htmlFor="state"></label>
                        <input className='input'
                            placeholder="State"
                            type="text"
                            name="state"
                            value={this.state.newStudent.state}
                            onChange={this.onChangeStudent}
                        />
                    
                    </div>
                    <div>
                        <label htmlFor="zip_code"></label>
                        <input className='input'
                            placeholder="Zipcode"
                            type="text"
                            name="zip_code"
                            value={this.state.newStudent.zip_code}
                            onChange={this.onChangeStudent}
                        />
            

                    
                        <label htmlFor="age"></label>
                        <input className='input'
                            placeholder="Age"
                            type="number"
                            name="age"
                            value={this.state.newStudent.age}
                            onChange={this.onChangeStudent}
                        />
                    </div>

                    <div>
                        <label htmlFor="gender"></label>
                        <input className='input'
                            placeholder="Sex"
                            type="text"
                            name="gender"
                            value={this.state.newStudent.gender}
                            onChange={this.onChangeStudent}
                        />
                    

                    
                        <label htmlFor="grade"></label>
                        <input className='input'
                            placeholder="Grade"
                            type="number"
                            name="grade"
                            value={this.state.newStudent.grade}
                            onChange={this.onChangeStudent}
                        />
                    </div>

                    <input className='submit-btn' type="submit" value="Submit" />


                </form>

            </div>
        )
    }
}