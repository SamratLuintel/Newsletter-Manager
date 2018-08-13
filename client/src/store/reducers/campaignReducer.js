import {UPDATE_CAMPAIGN,SET_CAMPAIGN_FILTER_TEXT} from '../actions/types';

const initialState={
    lists:null,
    filter:{
        text:""
    }
}
export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CAMPAIGN:
            return {...state,lists:action.payload}
        break;
        case SET_CAMPAIGN_FILTER_TEXT:
            return {
                ...state,
                filter:{
                    text:action.payload
                }
            }
        break;
        default:
            return state;
    }
};