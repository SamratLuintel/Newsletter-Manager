import React, { Component } from 'react';

const SignUpField = ({input,label,meta:{touched,error}}) => {
    return (
        <div className="formField">
            <label className="formField__label">{label}</label>
            <input className="formField__input" {...input} placeholder={label} type="text"/>
            {touched && error &&
                <span>{error}</span>
            }
        </div>
    );
}

export default SignUpField;