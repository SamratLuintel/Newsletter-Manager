import {UPDATE_CAMPAIGN,SET_CAMPAIGN_FILTER_TEXT, SET_CAMPAIGN_SORT_OPTION} from '../actions/types';

//sortOption includes [latest,oldest,lastEdited]
const initialState={
    lists:null,
    filter:{
        text:"",
        sortBy:"latest"
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
        case SET_CAMPAIGN_SORT_OPTION:
            return {
                ...state,
                filter:{
                    ...state.filter,
                    sortBy:action.payload
                }
            }
        default:
            return state;
    }
};