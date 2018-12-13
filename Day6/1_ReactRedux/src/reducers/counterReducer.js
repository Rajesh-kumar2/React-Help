import * as actionsTypes from '../actions/actionTypes';
import initialState from './initialState';

const counterReducer = (state = initialState.count, action) => {
    let newState;

    switch (action.type) {
        case actionsTypes.INCREMENT_COUNTER:
            return newState = state + action.payload;
        case actionsTypes.DECREMENT_COUNTER:
            return newState = state - action.payload;
        default:
            return state;
    }
};

export default counterReducer;