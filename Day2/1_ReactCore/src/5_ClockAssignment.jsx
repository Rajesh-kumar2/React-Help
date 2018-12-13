import React, { Component } from 'react';

class Clock extends Component {
    render() {
        return (
            <div>
                <h2 className="text-right">Time is: {this.props.now}</h2>
            </div>
        );
    }
}

class ClockRoot extends Component {
    constructor(props) {
        super(props);
        this.state = { time: (new Date()).toTimeString() };
        setInterval(() => {
            this.setState({ time: (new Date()).toTimeString() });
        }, 1000);
    }

    render() {
        return (
            <div>
                <Clock now={this.state.time} />
            </div>
        );
    }
}

export default ClockRoot;