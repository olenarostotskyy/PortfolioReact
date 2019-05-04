import {createStore, combineReducers, applyMiddleware } from 'redux';//allows us to create the redux store.
import { Items } from './items';
import { Owner } from './owner';
import { Comments } from './comments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(//createstore takes in two parameters here.
        //Reducer, // reducer
        //initialState, // our initialState
        combineReducers({
            items: Items,
            owner: Owner,
            comments: Comments
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}