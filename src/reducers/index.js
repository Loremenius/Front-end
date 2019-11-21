import {
    REQUEST_LOADING,
    REQUEST_FAILED,
    FETCH_LOGIN_SUCCESS,
    FETCH_DATA_SUCCESS,
    DELETE_DATA_SUCCESS,
    EDIT_DATA_SUCCESS,
    ADD_DATA_SUCCESS,
    SIGN_USER_OUT

} from "../actions"

export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case REQUEST_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case REQUEST_FAILED: 
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case FETCH_LOGIN_SUCCESS:
            return{
                ...state,
                isFetching:false,
                error: null,
                username: action.payload
            }
        case FETCH_DATA_SUCCESS:
            return{
                ...state,
                isFetching:false,
                error: null,
                journalEntryList: action.payload
            }
        case DELETE_DATA_SUCCESS:
            return{
                ...state,
                isFetching:false,
                error: null
            }
        case EDIT_DATA_SUCCESS:
            return{
                ...state,
                isFetching:false,
                error: null
            }
        case ADD_DATA_SUCCESS:
            return{
                ...state,
                isFetching:false,
                error: null,
                journalEntryList: action.payload
            }
        case SIGN_USER_OUT:
            return{
                error: null,
                isFetching: false,
                username: '',
                journalEntryList: [],
            }


        default:
            return state;
    }
}


const initialState = {
    error: null,
    isFetching: false,
    username: '',
    journalEntryList: [],



}