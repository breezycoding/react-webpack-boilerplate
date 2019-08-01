import { GET_DUMMY_DATA } from "../action/dummy";
const defaultState = {};

export default (state = defaultState, action) => {
    switch(action.type){
        case GET_DUMMY_DATA:
            return [...state, action.payload]
        default:
            return state;
    }
}