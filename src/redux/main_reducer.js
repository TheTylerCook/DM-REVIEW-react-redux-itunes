import axios from 'axios';

const initialState = {
    results: []
}

export const getResults = (term) => {
    return {
        type: 'GET_RESULTS',
        payload: axios.get(`https://itunes.apple.com/search?term=${term}`)
    }
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'GET_RESULTS_PENDING':
        console.log('pending');
            return state;
        case 'GET_RESULTS_FULFILLED':
        console.log('fulfilled');
            return Object.assign(
                {},
                state,
                {results: action.payload.data.results}
            );
        case 'GET_RESULTS_REJECTED':
            console.log('rejected');
            return state;
        default:
            return state;
    }
}

export default reducer;