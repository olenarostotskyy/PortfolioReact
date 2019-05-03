import {createStore, combineReducers} from 'redux';//allows us to create the redux store.
import { Items } from './items';
import { Owner } from './owner';


export const ConfigureStore = () => {
    const store = createStore(//createstore takes in two parameters here.
        //Reducer, // reducer
        //initialState, // our initialState
        combineReducers({
            items: Items,
            owner: Owner
        })
    );

    return store;
}