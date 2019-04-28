import { ITEMS } from '../shared/items';

export const initialState = {
    items: ITEMS
};

//to create reducer function in here, you export const Reducer. Recieves current state and an action.
//It's a pure function, so we can't modify the state directly.
export const Reducer = (state = initialState, action) => {
    return state;//reducer funtion right now is not doing anything, it's just returning the state, because we haven't defined any action.
};//It's a pure function right now. Not returning the state in any way.