import React, { Component } from 'react';

class ComponentWithProps extends Component {
    constructor(props) {
        super(props);
        console.log('Ctor - ', this.props);
        this.state = Object.assign({}, this.props);
        this.state.name = "Manish";
    }

    render() {
        console.log('Render - ', this.props);

        return (
            <div>
                <h2 className="text-info">props - {this.props.name} {this.props.age} {this.props.city}</h2>
                <h2 className="text-info">props - {this.state.name} {this.state.age} {this.state.city}</h2>
            </div>
        );
    }
}

export default ComponentWithProps;