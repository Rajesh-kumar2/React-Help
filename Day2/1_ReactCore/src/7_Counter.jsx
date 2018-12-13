import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0, clickCount: 0, flag: false };
        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
        this.reset = this.reset.bind(this);
    }

    reset(e) {
        this.setState({ count: 0, clickCount: 0, flag: false }, () => {
            this.props.onMax(this.state.flag);
        });
    }

    manageClickCount(e) {
        this.setState({ clickCount: this.state.clickCount + 1 }, () => {
            if (this.state.clickCount > 9) {
                this.setState({ flag: true }, () => {
                    this.props.onMax(this.state.flag);
                });
            }
        });
    }

    inc(e) {
        this.manageClickCount();
        this.setState({ count: this.state.count + this.props.interval });
    }

    dec(e) {
        this.manageClickCount();
        this.setState({ count: this.state.count - this.props.interval });
    }

    render() {
        return (
            <div>
                <h3 className="row">Counter Component</h3>
                <div className="col-md-4">
                    <input type="text" className="form-control" value={this.state.count} readOnly />
                </div>
                <div className="col-md-1">
                    <button className="btn btn-info btn-block" onClick={this.inc} disabled={this.state.flag}>+</button>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-info btn-block" onClick={this.dec} disabled={this.state.flag}>-</button>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-info btn-block" onClick={this.reset} disabled={!this.state.flag}>Reset</button>
                </div>
            </div>
        );
    }

    // static get defaultProps() {
    //     return {
    //         interval: 1
    //     };
    // }
}

Counter.defaultProps = {
    interval: 10
};

class CounterRoot extends Component {
    constructor(props) {
        super(props);
        this.state = { message: "" };
        this.child = React.createRef();
        this.p_reset = this.p_reset.bind(this);
        this.maxedOut = this.maxedOut.bind(this);
    }

    p_reset(e) {
        // console.log(this.child);
        this.child.current.reset();
    }

    maxedOut(flag) {
        if (flag)
            this.setState({ message: "Max Click Count Reached, press Reset..." });
        else
            this.setState({ message: "" });
    }

    render() {
        return (
            <div>
                <h2 className="alert alert-danger">{this.state.message}</h2>
                {/* <Counter ref={this.child} interval={1} onMax={this.maxedOut} /> */}
                <Counter ref={this.child} onMax={this.maxedOut} />
                <div className="col-md-2">
                    <button className="btn btn-danger btn-block" onClick={this.p_reset}>Parent Reset</button>
                </div>
            </div>
        );
    }
}

export default CounterRoot;