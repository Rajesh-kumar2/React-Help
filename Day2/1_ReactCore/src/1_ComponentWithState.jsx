import React, { Component } from 'react';

class ComponentWithState extends Component {
    constructor() {
        super();
        this.state = { name: "Manish" };
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h2 className="text-info">Hello, {this.state.name}</h2>
            </div>
        );
    }
}

export default ComponentWithState;