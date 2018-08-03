import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import formFields from './formFields';
import SignUpField from './SignUpField/SignUpField';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/actionsIndex';

import axios from 'axios';
import _ from 'lodash';

//TODO redirect the user back to the home page if user visit without first signing up
class SignUp extends Component {
    state = {
        authId: null
    }

    renderFields() {
        return _.map(formFields, ({name,label}) => {
            return <Field component={SignUpField} type="text" label={label} name={name} />
        })
    }

    renderForm(){
        const {handleSubmit,signup} = this.props;
        return (
            <form onSubmit={handleSubmit(signup)}>
                {this.renderFields()}
                <input type="submit" />
            </form>
        )
    }

    async componentDidMount() {
        console.log("Component did mount is called");
        const authId = await axios.get('/auth/authId');
        if(!authId.data){

        }else {
            this.setState({authId})
        }
    }
    render() {
        let form = null;
        if (this.state.authId) {
            form = this.renderForm();
        }
        return form;
    }
}

function validate(values) {
    const errors = {};
    _.each(formFields,({name})=>{
        if(!values[name]){
            errors[name]=`You must provide a ${name}`;
        }
    })
    return errors;
}

export default connect(null,actions)(reduxForm({validate, form: 'signup' })(SignUp));