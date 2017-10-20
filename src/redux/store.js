import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './main_reducer';

//when setting up the store, we'll use redux's built in 'applyMiddleware' function
//to apply 'promiseMiddleware' to all of our app's actions
//***NOTE this is the only import we need from 'redux-promise-middleware'***
export default createStore(reducer,
    applyMiddleware(promiseMiddleware())
);