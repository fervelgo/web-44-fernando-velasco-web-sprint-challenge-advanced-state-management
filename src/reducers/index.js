import {
    START_FETCH,
    FETCH_SUCCESSFUL,
    FETCH_FAILED,
    ADD_SMURF,
    SET_ERROR_MESSAGE
} from './../actions';

export const initialState = {
    smurfs:[
        {
          id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
          name:'Poppa Smurf',
          position:'Village Leader',
          nickname: 'Pops',
          description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
        },
        {
          id:"JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZ",
          name:'Smurfette',
          position:'Beautician',
          nickname: 'Smurfette',
          description: 'Smurfette\'s role in the village is that of any other smurf; chores, and helping out where she can, but for her specifically, she is often seen to be very active in organizing events.'
        }
      ],
      loading: null,
      error: ""
    }

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case (START_FETCH):
            return({
                ...state,
                loading: true,
                error: ""
            });
        case (FETCH_SUCCESSFUL):
            return ({
                ...state,
                smurfs: action.payload,
                loading: false,
                error: ""
            });
        case (FETCH_FAILED):
            return ({
                ...state,
                smurfs: "catch error"
            });
        case (ADD_SMURF):
            return ({
                ...state,
                smurfs: state.smurfs.push(action.payload)
            });
        case (SET_ERROR_MESSAGE):
            return ({
                ...state,
                error: action.payload
            });
        default:
            return state;
    }
};

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.