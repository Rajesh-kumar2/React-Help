import * as actionTypes from './actionTypes';
import productsAPIClient from '../api/productsAPIClient';

function loadProductsSuccess(products) {
    return { type: actionTypes.LOAD_PRODUCTS_SUCCESS, payload: products };
}

function insertProductSuccess(product) {
    return { type: actionTypes.INSERT_PRODUCT_SUCCESS, payload: product };
}

function updateProductSuccess(product) {
    return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product };
}

function deleteProductSuccess(product) {
    return { type: actionTypes.DELETE_PRODUCT_SUCCESS, payload: product };
}

export function insertProduct(product) {
    return function (dispatch) {
        return productsAPIClient.insertProduct(product).then((insertedProduct) => {
            dispatch(insertProductSuccess(insertedProduct));
        }, (eMsg) => {
            throw eMsg;
        })
    }
}

export function updateProduct(product) {
    return function (dispatch) {
        return productsAPIClient.updateProduct(product).then((updatedProduct) => {
            dispatch(updateProductSuccess(updatedProduct));
        }, (eMsg) => {
            throw eMsg;
        })
    }
}

export function loadProducts() {
    return function (dispatch) {
        return productsAPIClient.getAllProducts().then((data) => {
            dispatch(loadProductsSuccess(data));
        }, (eMsg) => {
            throw eMsg;
        })
    }
}

export function deleteProduct(product) {
    return function (dispatch) {
        return productsAPIClient.deleteProduct(product).then(() => {
            dispatch(deleteProductSuccess(product));
        }, (eMsg) => {
            throw eMsg;
        })
    }
}
