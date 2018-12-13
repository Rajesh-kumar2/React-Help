import React, { Component } from 'react';
import ComponentOne from './CompOne/ComponentOne';
import ComponentTwo from './CompTwo/ComponentTwo';

class RootComponent extends Component {
    render() {
        return (
            <div>
                <ComponentOne/>
                <ComponentTwo/>
            </div>
        );
    }
}

export default RootComponent;