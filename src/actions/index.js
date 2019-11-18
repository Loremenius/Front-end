import axios from "axios";
import { axiosWithAuth } from "./axiosWithAuth";

export const REQUEST_LOADING = "REQUEST_LOADING";
export const REQUEST_FAILED = "REQUEST_FAILED";

export const FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS";
export const FETCH_DATA_SUCCESS = "FETCH_LOGIN_SUCCESS";
export const DELETE_DATA_SUCCESS = "DELETE_DATA_SUCCESS";
export const EDIT_DATA_SUCCESS = "EDIT_DATA_SUCCESS";
export const ADD_DATA_SUCCESS = "ADD_DATA_SUCCESS";

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
export const deleteDataSuccess = data => ({
    type: DELETE_DATA_SUCCESS,
    payload: data
});
export const editDataSuccess = data => ({
    type: EDIT_DATA_SUCCESS,
    payload: data
});
export const addDataSuccess = data => ({
    type: ADD_DATA_SUCCESS,
    payload: data
});

export function loginUser( credentials ){

    return function(dispatch){
        dispatch(requestLoading());
        return axios.post('', credentials )
            .then((res) =>{
                console.log(res);
                sessionStorage.setItem("token", res.data)
                dispatch(loginLoadSuccess(res.data));
            })
            .catch((error)=>{
                dispatch(requestFailure(error));
            });
    }
};

export function fetchData (){

    return function(dispatch){
        dispatch(requestLoading());
        return axiosWithAuth().get('')
            .then((res)=>{
                console.log(res);
                dispatch(fetchDataSuccess(res.data));
            })
            .catch((error)=>{
                dispatch(requestFailure(error));
            })
    }
};

export function editData (editedEntry){

    return function(dispatch){
        dispatch(requestLoading());
        return axiosWithAuth().put('', editedEntry)
            .then((res)=>{
                console.log(res);
                dispatch(editDataSuccess(res.data));
            })
            .catch((error)=>{
                dispatch(requestFailure(error));
            })
    }
};

export function deleteData (deletedEntry){

    return function(dispatch){
        dispatch(requestLoading());
        return axiosWithAuth().delete('', deletedEntry)
            .then((res)=>{
                console.log(res);
                dispatch(deleteDataSuccess(res.data));
            })
            .catch((error)=>{
                dispatch(requestFailure(error));
            })
    }
};

export function addData (newEntry){

    return function(dispatch){
        dispatch(requestLoading());
        return axiosWithAuth().post('', newEntry)
            .then((res)=>{
                console.log(res);
                dispatch(addDataSuccess(res.data));
            })
            .catch((error)=>{
                dispatch(requestFailure(error));
            })
    }
};


