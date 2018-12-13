import React, { Component } from 'react';
import ErrorHandler from './common/ErrorHandler';
import Header from './common/Header';

class RootComponent extends Component {
    render() {
        return (
            <div>
                <ErrorHandler>
                    <Header/>
                </ErrorHandler>
            </div>
        );
    }
}

export default RootComponent;