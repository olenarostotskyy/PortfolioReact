import * as ActionTypes from './ActionTypes';
import { ITEMS } from '../shared/items';

export const addComment = (itemId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        itemId: itemId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchItems = () => (dispatch) => {

    dispatch(itemsLoading(true));

    setTimeout(() => {
        dispatch(addItems(ITEMS));
    }, 2000);
}

export const itemsLoading = () => ({
    type: ActionTypes.ITEMS_LOADING
});

export const itemsFailed = (errmess) => ({
    type: ActionTypes.ITEMS_FAILED,
    payload: errmess
});

export const addItems = (items) => ({
    type: ActionTypes.ADD_ITEMS,
    payload: items
});