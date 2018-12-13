import React, { Component } from 'react';
import ErrorHandler from './common/ErrorHandler';
import Header from './common/Header';

class RootComponent extends Component {
    render() {
        return (
            <ErrorHandler>
                <Header/>
            </ErrorHandler>
        );
    }
}

export default RootComponent;