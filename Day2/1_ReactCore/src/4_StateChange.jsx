import React, { Component } from 'react';

class ButtonWithStateChange extends Component {
    constructor(props) {
        super(props);
        this.state = { id: 1, count: 0 }
        this.incCount = this.incCount.bind(this);
    }

    incCount() {
        this.setState({ count: this.state.count + 1 }, () => {
            console.log(this.state);
        });
    }

    render() {
        return (
            <div>
                <div className="text-info">
                    <h2>Id: {this.state.id}</h2>
                    <h2>Count: {this.state.count}</h2>
                </div>
                <button className="btn btn-info" onClick={this.incCount}>Click Me</button>
                {/* <button className="btn btn-info" onClick={this.incCount.bind(this)}>Click Me</button> */}
            </div>
        );
    }
}

export default ButtonWithStateChange;