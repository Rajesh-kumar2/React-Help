import * as actionsTypes from '../actions/actionTypes';
import initialState from './initialState';

const productReducer = (state = initialState.products, action) => {
    switch (action.type) {
        case actionsTypes.LOAD_PRODUCTS_SUCCESS:
            return [...action.payload];
        case actionsTypes.INSERT_PRODUCT_SUCCESS:
            return [...state, action.payload];
        case actionsTypes.UPDATE_PRODUCT_SUCCESS:
            var itemIndex = state.findIndex(p => p.id == action.payload.id);
            state.splice(itemIndex, 1, Object.assign({}, action.payload));
            return [...state];
        case actionsTypes.DELETE_PRODUCT_SUCCESS:
            return [...state.filter(p => p.id != action.payload.id)];
        default:
            return state;
    }
};

export default productReducer;