import React from 'react';
import ReactDOM from 'react-dom';

import RootComponent from './components/RootComponent';

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from './store/configureStore';
var appStore = configureStore();
// var appStore = configureStore({ counterReducer: 10 });

ReactDOM.render(
    <Provider store={appStore}>
        <BrowserRouter>
            <RootComponent />
        </BrowserRouter>
    </Provider>,
    document.getElementById("container"));