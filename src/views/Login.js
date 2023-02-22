import React, { Component } from 'react';
import '../styles/login.scss';

export default class Login extends Component {
    render() {
        return (
            <form className='loginForm'>
                <h2 className='formHeader'>Login</h2>

                <span className='text'>Username </span>
                <input type="text" className='formInput' />
                <span className='error'></span>

                <span className='text'>Password </span>
                <input type="text" className='formInput' />
                <span className='error'></span>

                <input type="button" className='formButton' value="Login" />
            </form>
        )
    }
}
