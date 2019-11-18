import {
    FETCH_LOGIN_LOADING,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILED
} from "../actions"

export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_LOGIN_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case FETCH_LOGIN_FAILED: 
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }


        default:
            return state;
    }
}


const initialState = {
    error: null,
    isFetching: false,

}