import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class User extends Component {
    state = {
        user: {
            full_name: '',
            email: '',
            phone_number: '',
            address: '',
            city: '',
            state: '',
            zip_code: '',
            age: '',
            gender: '',
            event: this.props.match.params.eventId
           
        },

    }


    componentDidMount() {
        
    }


    onChangeUser = (evt) => {
        const newState = { ...this.state }
        newState.user[evt.target.name] = evt.target.value
        this.setState(newState)
    }

    onSubmit = async (evt) => {
        evt.preventDefault()
        try {
            await axios.post('/api/v1/user/', this.state.user)

            console.log(this.state.user)
        } catch (error) {
            console.log('Failed to create student')
            console.log(error)
        }
        const newState = { ...this.state }
        newState.user.full_name = ''
        newState.user.email = ''
        newState.user.phone_number = ''
        newState.user.address = ''
        newState.user.city = ''
        newState.user.state = ''
        newState.user.zip_code = ''
        newState.user.age = ''
        newState.user.gender = ''
        this.setState(newState)
    }



    render() {
        return (
            <div>
                <h1>Event Registeration Form</h1>

                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="full_name"></label>
                        <input className='input'
                            placeholder="Full Name"
                            type="text"
                            name="full_name"
                            value={this.state.user.full_name}
                            onChange={this.onChangeUser}
                        />
                    </div>

                    <div>
                        <label htmlFor="email"></label>
                        <input className='input'
                            placeholder="Email"
                            type="email"
                            name="email"
                            value={this.state.user.email}
                            onChange={this.onChangeUser}
                        />
                    </div>

                    <div>
                        <label htmlFor="phone_number"></label>
                        <input className='input'
                            placeholder="phone_number"
                            type="text"
                            name="phone_number"
                            value={this.state.user.phone_number}
                            onChange={this.onChangeUser}
                        />
                    </div>

                    <div>
                        <label htmlFor="address"></label>
                        <input className='input'
                            placeholder="address"
                            type="text"
                            name="address"
                            value={this.state.user.address}
                            onChange={this.onChangeUser}
                        />
                    </div>


                    <div>
                        <label htmlFor="city"></label>
                        <input className='input'
                            placeholder="city"
                            type="text"
                            name="city"
                            value={this.state.user.city}
                            onChange={this.onChangeUser}
                        />
                    </div>

                    <div>
                        <label htmlFor="state"></label>
                        <input className='input'
                            placeholder="state"
                            type="text"
                            name="state"
                            value={this.state.user.state}
                            onChange={this.onChangeUser}
                        />
                    </div>

                    <div>
                        <label htmlFor="zip_code"></label>
                        <input className='input'
                            placeholder="zip_code"
                            type="text"
                            name="zip_code"
                            value={this.state.user.zip_code}
                            onChange={this.onChangeUser}
                        />
                    </div>

                    <div>
                        <label htmlFor="age"></label>
                        <input className='input'
                            placeholder="Age"
                            type="number"
                            name="age"
                            value={this.state.user.age}
                            onChange={this.onChangeUser}
                        />
                    </div>

                    <div>
                        <label htmlFor="gender"></label>
                        <input className='input'
                            placeholder="Gender"
                            type="text"
                            name="gender"
                            value={this.state.user.gender}
                            onChange={this.onChangeUser}
                        />
                    </div>

                    

                    <input className='input' type="submit" value="Submit" />


                </form>

            </div>
        )
    }
}