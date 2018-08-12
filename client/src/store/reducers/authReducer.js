import {UPDATE_TOKEN} from '../actions/types';


export default (state = null, action) => {
    switch (action.type) {
        case UPDATE_TOKEN:
            return {...state,token:action.payload}
        break;
            
        default:
            return state;
    }
};