import axios from 'axios';
import {UPDATE_TOKEN,FETCH_TOKEN} from './types';

//TODO security issue-- chaina chaina jiskya ho
export const signupFormSubmit =(values,history) => async dispatch=> {
    const response = await axios.post('/auth/signup',values);
    const token = response.data;
    history.push('/');
    localStorage.setItem('newsletterToken',token);
    dispatch(updateToken(token));
}

export const fetchToken= () => async dispatch =>{
    console.log("This line is called");
    //Checking the token at first in local Storage
    const token = localStorage.getItem('newsletterToken');
    if(token)  return dispatch(updateToken(token));

    //Sending the request to fetch the token from back end
    try {
        const response = await axios.get('/auth/getToken');
        localStorage.setItem('newsletterToken',response.data);
        dispatch(updateToken(response.data))
    } catch(error){
        dispatch(updateToken(null));
    }

}

export const updateToken = (token)=>{
    return {
        type:UPDATE_TOKEN,
        payload:token
    }
}