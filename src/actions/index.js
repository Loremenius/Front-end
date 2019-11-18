import axios from "axios";
export const FETCH_LOGIN_LOADING = "FETCH_LOGIN_LOADING";
export const FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS";
export const FETCH_LOGIN_FAILED = "FETCH_LOGIN_FAILED";

export const loginLoading = () =>({ type: FETCH_LOGIN_LOADING });
export const loginLoadSuccess = data => ({ 
    type: FETCH_LOGIN_SUCCESS, 
    payload: data 
});
export const loginLoadFailure = error => ({ 
    type: FETCH_LOGIN_FAILED, 
    payload: error 
});

export function loginUser( credentials ){

    return function(dispatch){
        dispatch(loginLoading());
        return axios.get('', credentials )
            .then((res) =>{
                console.log(res);
                dispatch(loginLoadSuccess(res.data));
            })
            .catch((error)=>{
                dispatch(loginLoadFailure(error));
            });
    }
}

