import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <button className="btn btn-info" onClick={
                (e) => { this.props.handleClick(this.props.incby, e); }
            }>Add {this.props.incby}</button>
        );
    }
}

class Result extends Component {
    render() {
        return (
            <h2 className="text-info">Result: {this.props.result}</h2>
        );
    }
}

class AssignmentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.increaseCount = this.increaseCount.bind(this);
    }

    increaseCount(by) {
        this.setState({ count: this.state.count + by });
    }

    render() {
        return (
            <div>
                <Result result={this.state.count} />
                <Button incby={5} handleClick={this.increaseCount} />
                <Button incby={10} handleClick={this.increaseCount} />
                <Button incby={15} handleClick={this.increaseCount} />
                <Button incby={20} handleClick={this.increaseCount} />
            </div>
        );
    }
}

export default AssignmentComponent;