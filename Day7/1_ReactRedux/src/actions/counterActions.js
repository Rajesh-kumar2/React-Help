import * as actionTypes from './actionTypes';

//Action Creator
export function incCounter(data = 1) {
    // return an action object
    return { type: actionTypes.INCREMENT_COUNTER, payload: data };
}

export function decCounter(data = 1) {
    return { type: actionTypes.DECREMENT_COUNTER, payload: data };
}