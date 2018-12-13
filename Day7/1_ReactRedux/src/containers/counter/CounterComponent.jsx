import React, { Component } from 'react';

import { connect } from "react-redux";

import * as counterActions from '../../actions/counterActions';

class CounterComponent extends Component {
    constructor(props) {
        super(props);
        this.incCounter = this.incCounter.bind(this);
        this.decCounter = this.decCounter.bind(this);
    }

    incCounter(e) {
        e.preventDefault();
        // this.props.inc();
        this.props.inc(10);
    }

    decCounter(e) {
        e.preventDefault();
        // this.props.dec();
        this.props.dec(10);
    }

    render() {
        return (
            <div>
                <h3 className="row">Counter Component</h3>
                <div className="col-md-4">
                    <input type="text" className="form-control" value={this.props.count} readOnly />
                </div>
                <div className="col-md-1">
                    <button className="btn btn-info btn-block" onClick={this.incCounter}>+</button>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-info btn-block" onClick={this.decCounter}>-</button>
                </div>
            </div>
        );
    }
}

// Map the state of Store to Props of Component
function mapStateToProps(state, ownProps) {
    return {
        count: state.counterReducer
    };
}

// Mapp the actions to Props of Component
function mapDispatchToProps(dispatch) {
    return {
        inc: (data) => dispatch(counterActions.incCounter(data)),
        dec: (data) => dispatch(counterActions.decCounter(data))
    };
}

export default (connect(mapStateToProps, mapDispatchToProps))(CounterComponent);

// var connectTo = connect(mapStateToProps, mapDispatchToProps);
// var NewCounterComponent = connectTo(CounterComponent);
// export default NewCounterComponent;