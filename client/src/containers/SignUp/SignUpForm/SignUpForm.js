import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import formFields from './formFields';
import SignUpField from './SignUpField/SignUpField';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/actionsIndex';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';

//TODO redirect the user back to the home page if user visit without first signing up
class SignUpForm extends Component {
    state = {
        authId: null
    }

    renderFields() {
        return _.map(formFields, ({name,label}) => {
            return <Field component={SignUpField} type="text" label={label} name={name} />
        })
    }

    renderForm(){
        const {handleSubmit,signupFormSubmit,history} = this.props;
        //signupFormSubmit is an action creator coming from store
        return (
            <form onSubmit={handleSubmit((values)=>signupFormSubmit(values,history))} className="form">
                {this.renderFields()}
                <input type="submit" className="form__submit" />
                <button className="form__cancel" >Cancel</button>
            </form>
        )
    }
    async componentDidMount() {
        const res = await axios.get('/auth/authId');
        console.log(res.data)
        if(!res.data.authId){

        }else {
             this.setState({authId:res.data.authId})
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

export default connect(null,actions)(reduxForm({validate, form: 'signup' })(withRouter(SignUpForm)));