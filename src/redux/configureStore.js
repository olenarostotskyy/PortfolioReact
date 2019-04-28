import {createStore} from 'redux';//allows us to create the redux store.
import { Reducer, initialState } from './reducer'

export const ConfigureStore = () => {
    const store = createStore(//createstore takes in two parameters here.
        Reducer, // reducer
        initialState, // our initialState
    );

    return store;
}