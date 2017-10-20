import axios from 'axios';

const initialState = {
    results: []
}


//using string constants for switch cases prevent silent errors due to typos
const GET_RESULTS = 'GET_RESULTS';
const GET_RESULTS_PENDING = 'GET_RESULTS_PENDING';
const GET_RESULTS_FULFILLED = 'GET_RESULTS_FULFILLED';
const GET_RESULTS_REJECTED = 'GET_RESULTS_REJECTED';


//when using middleware, the payload of your action will be the asynchronous request
//redux-promise-middleware will recognize the promise and handle sending it's
//..._PENDING, ..._FULFILLED or ..._REJECTED case through the reducer,
//concatinating them onto the actions type
//***NOTE that an action who's payload is not a promise will flow through without 
//these extra cases***
export const getResults = (term) => {
    return {
        type: GET_RESULTS,
        payload: axios.get(`https://itunes.apple.com/search?term=${term}`)
    }
}



const reducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_RESULTS_PENDING:
            console.log('pending');
            return state;
        case GET_RESULTS_FULFILLED:
            console.log('fulfilled');
            return Object.assign(
                {},
                state,
                {results: action.payload.data.results}
            );
        case GET_RESULTS_REJECTED:
            console.log('rejected');
            return state;
        default:
            return state;
    }
}

export default reducer;