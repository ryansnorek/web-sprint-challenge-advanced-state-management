import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR = "SET_ERROR";

export const fetchData = () => {

    return (dispatch) => {
        dispatch(fetchStart());
        axios.get("http://localhost:3333/smurfs")
            .then(res => dispatch(fetchSuccess(res.data)))
            .catch(err => dispatch(fetchFailure(err)))
    };
};
export const fetchStart = () => {
    return ({ type: FETCH_START });
};
export const fetchSuccess = data => {
    return ({ type: FETCH_SUCCESS, payload: data });
};
export const fetchFailure = error => {
    return ({ type: FETCH_FAILURE, payload: error});
};
export const addSmurf = smurf => {
    return ({ type: ADD_SMURF, payload: smurf });
};
export const setError = message => {
    return ({ type: SET_ERROR, payload: message });
};