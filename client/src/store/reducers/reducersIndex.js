import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import campaignReducer from './campaignReducer';

export default combineReducers({
    form:formReducer,
    auth:authReducer,
    campaigns:campaignReducer
})