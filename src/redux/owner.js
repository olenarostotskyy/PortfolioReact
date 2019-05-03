import { OWNER } from '../shared/owner';//by making owner.js and items.js we've split the management of state 
                                        //into different reducers that managage partial state and will combine 
                                        //them back together in configureStore.js

export const Owner = (state = OWNER, action) => {
    switch (action.type) {
        default:
          return state;
      }
};