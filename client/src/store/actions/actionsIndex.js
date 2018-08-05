import axios from 'axios';
import {FETCH_TOKEN} from './types';

//TODO security issue-- chaina chaina jiskya ho
export const signupFormSubmit =(values, dispatch, props) =>dispatch=> {
    dispatch(signup(values,props.history));
}

export const signup = (formValues,history) => async dispatch =>{
    const response = await axios.post('/auth/signup',formValues);
    const token = response.data;
    console.log(history);
    history.push('/');
    dispatch(fetchToken(token));
}

export const fetchToken = (token)=>{
    localStorage.setItem('token',token);
    return {
        type:FETCH_TOKEN,
        payload:token
    }
}