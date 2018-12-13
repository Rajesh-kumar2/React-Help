import React from 'react';
import ReactDOM from 'react-dom';

import RootComponent from './components/RootComponent';

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <RootComponent />
    </BrowserRouter>,
    document.getElementById("container"));