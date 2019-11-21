import axios from "axios";
import { axiosWithAuth } from "./axiosWithAuth";

export const REQUEST_LOADING = "REQUEST_LOADING";
export const REQUEST_FAILED = "REQUEST_FAILED";

export const FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const DELETE_DATA_SUCCESS = "DELETE_DATA_SUCCESS";
export const EDIT_DATA_SUCCESS = "EDIT_DATA_SUCCESS";
export const ADD_DATA_SUCCESS = "ADD_DATA_SUCCESS";
export const SIGN_USER_OUT = "SIGN_USER_OUT";

export const requestLoading = () =>({ type: REQUEST_LOADING });
export const requestFailure = error => ({ 
    type: REQUEST_FAILED, 
    payload: error 
});

export const loginLoadSuccess = data => ({ 
    type: FETCH_LOGIN_SUCCESS,
    payload: data 
});
export const fetchDataSuccess = data => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
});
export const deleteDataSuccess = () => ({ type: DELETE_DATA_SUCCESS });
export const editDataSuccess = () => ({type: EDIT_DATA_SUCCESS});
export const addDataSuccess = data => ({
    type: ADD_DATA_SUCCESS,
    payload: data
});
export const signUserOut = () => ({type: SIGN_USER_OUT});

export function signOut(history){

    return function(dispatch){
        dispatch(signUserOut());
        sessionStorage.clear();
        history.push("/");
    }
}

export function fetchData (history){

    return function(dispatch){
        dispatch(requestLoading());
        return axiosWithAuth().get('https://lambdaschool-onelineaday.herokuapp.com/entries/entries')
            .then((res)=>{
                console.log(res);
                const orderedArray = res.data.sort((a, b) => new Date(b.entrydate) - new Date(a.entrydate));
                dispatch(fetchDataSuccess(orderedArray));
            })
            .catch((error)=>{
                dispatch(requestFailure(error));
                if (error.message === "Request failed with status code 401"){
                    history.push("/");
                }
            })
    }
};

export function editData (editedEntry, history, id ){

    return function(dispatch){
        dispatch(requestLoading());
        return axiosWithAuth().put(`https://lambdaschool-onelineaday.herokuapp.com/entries/entry/${id}`, editedEntry)
            .then((res)=>{
                console.log(res);
                dispatch(editDataSuccess());
                history.push("/journal")
            })
            .catch((error)=>{
                dispatch(requestFailure(error));
                if (error.message === "Request failed with status code 401"){
                    history.push("/");
                }
            })
    }
};

export function deleteData (deletedEntryid, history){

    return function(dispatch){
        dispatch(requestLoading());
        return axiosWithAuth().delete(`https://lambdaschool-onelineaday.herokuapp.com/entries/entry/${deletedEntryid}`)
            .then((res)=>{
                console.log(res);
                dispatch(deleteDataSuccess());
                history.push("/journal");
            })
            .catch((error)=>{
                dispatch(requestFailure(error));
                if (error.message === "Request failed with status code 401"){
                    history.push("/");
                }
            })
    }
};

export function addData (newEntry, history){

    return function(dispatch){
        dispatch(requestLoading());
        return axiosWithAuth().post('https://lambdaschool-onelineaday.herokuapp.com/entries/entry', newEntry)
            .then((res)=>{
                console.log(res);
                return axiosWithAuth().get('https://lambdaschool-onelineaday.herokuapp.com/entries/entries')
                .then((res)=>{
                    console.log(res);
                    const orderedArray = res.data.sort((a, b) => new Date(b.entrydate) - new Date(a.entrydate));
                    dispatch(addDataSuccess(orderedArray));
                })
            })
            .catch((error)=>{
                dispatch(requestFailure(error));
                if (error.message === "Request failed with status code 401"){
                    history.push("/");
                }
            })
    }
};


