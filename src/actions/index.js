import axios from 'axios';

export const START_FETCH = "START_FETCH";
export const FETCH_SUCCESSFUL = "FETCH_SUCCESSFUL";
export const FETCH_FAILED = "FETCH_FAILED";

export const ADD_SMURF = "ADD_SMURF"; 
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";

export const startFetch = () => {
    return({
        type: START_FETCH
    })
}

export const fetchSuccessful = () => {
    return({
        type: FETCH_SUCCESSFUL
    })
}

export const fetchFailed = () => {
    return({
        type: FETCH_FAILED
    })
}

export const addSmurf = (newSmurf) => {
    return({
        type: ADD_SMURF,
        payload: newSmurf //Still to be solved how to add it to the array
    });
}

export const setError = (newErrorMessage) => {
    return({
        type: SET_ERROR_MESSAGE,
        payload: newErrorMessage
    })
}



//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.