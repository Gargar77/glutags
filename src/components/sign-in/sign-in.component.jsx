import React from 'react';

import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        
        this.setState({email:'',password:''})
    }

    handleChange = e => {
        const { value,name } = e.target
        this.setState({[name]:value})
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} label="Email" handleChange={this.handleChange} required/>
                    <FormInput name="password" type="password" value={this.state.email} label="Password" handleChange required/>
                    <input type="submit" value="Submit form"/>
                </form>
            </div>
        )
    }
}

export default Signin;