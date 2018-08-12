import React, { Component } from 'react';
import SignUpForm from './SignUpForm/SignUpForm';
import Header from '../../components/Header/Header';
import './SignUp.scss';

class SignUp extends Component {
    render() {
        return (
            <div>
                <Header loggedIn={false}/>
                <div className="signup">
                    <p className="signup__head">Please fill the below form</p>
                    <div className="signup__body">
                        <SignUpForm />
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;