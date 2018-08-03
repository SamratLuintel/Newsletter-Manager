import React, { Component } from 'react';

const SignUpField = ({input,label,meta:{touched,error}}) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} type="text"/>
            {touched && error &&
                <span>{error}</span>
            }
        </div>
    );
}

export default SignUpField;