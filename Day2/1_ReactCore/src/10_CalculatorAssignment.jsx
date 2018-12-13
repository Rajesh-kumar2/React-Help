import React, { Component } from 'react';

class CalculatorOne extends Component {
    constructor(props) {
        super(props);
        this.state = { data: { t1: 0, t2: 0 }, result: 0 };
        this.addClick = this.addClick.bind(this);
    }

    addClick(e) {
        e.preventDefault();
        this.setState({ result: parseInt(this.refs.t1.value) + parseInt(this.refs.t2.value) });
    }

    render() {
        return (
            <div>
                <form className="form-horizontal">
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="none">Number One:</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="none"
                                placeholder="Enter first number" defaultValue={this.state.data.t1} ref="t1" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="ntwo">Number Two:</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="ntwo"
                                placeholder="Enter second number" defaultValue={this.state.data.t2} ref="t2" />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-3">
                            <h3>Result: {this.state.result}</h3>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-3">
                            <button type="submit" className="btn btn-default btn-block"
                                onClick={this.addClick}>Add</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

class CalculatorTwo extends Component {
    constructor(props) {
        super(props);
        this.state = { data: { t1: 0, t2: 0 }, result: 0 };
        this.addClick = this.addClick.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }

    addClick(e) {
        e.preventDefault();
        this.setState({ result: parseInt(this.state.data.t1) + parseInt(this.state.data.t2) });
    }

    handleChange1(e) {
        var obj = Object.assign({}, this.state.data);
        obj.t1 = e.target.value;
        this.setState({ data: obj });
    }

    handleChange2(e) {
        var obj = Object.assign({}, this.state.data);
        obj.t2 = e.target.value;
        this.setState({ data: obj });
    }

    render() {
        return (
            <div>
                <form className="form-horizontal">
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="none">Number One:</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="none"
                                placeholder="Enter first number" value={this.state.data.t1} onChange={this.handleChange1} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="ntwo">Number Two:</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="ntwo"
                                placeholder="Enter second number" value={this.state.data.t2} onChange={this.handleChange2} />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-3">
                            <h3>Result: {this.state.result}</h3>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-3">
                            <button type="submit" className="btn btn-default btn-block"
                                onClick={this.addClick}>Add</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

class CalculatorThree extends Component {
    constructor(props) {
        super(props);
        this.state = { data: { t1: 0, t2: 0 }, result: 0 };
        this.addClick = this.addClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addClick(e) {
        e.preventDefault();
        this.setState({ result: parseInt(this.state.data.t1) + parseInt(this.state.data.t2) });
    }

    handleChange(e) {
        const field = e.target.name;
        var obj = Object.assign({}, this.state.data);
        obj[field] = e.target.value;
        this.setState({ data: obj });
    }

    render() {
        return (
            <div>
                <form className="form-horizontal">
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="none">Number One:</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" name="t1"
                                placeholder="Enter first number" value={this.state.data.t1}
                                onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="ntwo">Number Two:</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" name="t2"
                                placeholder="Enter second number" value={this.state.data.t2}
                                onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-3">
                            <h3>Result: {this.state.result}</h3>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-3">
                            <button type="submit" className="btn btn-default btn-block"
                                onClick={this.addClick}>Add</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

class TextInput extends Component {
    render() {
        return (
            <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="{this.props.name}">{this.props.label}:</label>
                <div className="col-sm-6">
                    <input type="text" className="form-control" name={this.props.name} id={this.props.name}
                        placeholder="Enter Number" value={this.props.value}
                        onChange={this.props.onChange} />
                </div>
            </div>
        );
    }
}

class CalculatorFour extends Component {
    constructor(props) {
        super(props);
        this.state = { data: { t1: 0, t2: 0 }, result: 0 };
        this.addClick = this.addClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addClick(e) {
        e.preventDefault();
        this.setState({ result: parseInt(this.state.data.t1) + parseInt(this.state.data.t2) });
    }

    handleChange(e) {
        const field = e.target.name;
        var obj = Object.assign({}, this.state.data);
        obj[field] = e.target.value;
        this.setState({ data: obj });
    }

    render() {
        return (
            <div>
                <form className="form-horizontal">
                    <TextInput label={"Number One"} name={"t1"} value={this.state.data.t1}
                        onChange={this.handleChange} />
                    <TextInput label={"Number Two"} name={"t2"} value={this.state.data.t2}
                        onChange={this.handleChange} />

                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-3">
                            <h3>Result: {this.state.result}</h3>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-3">
                            <button type="submit" className="btn btn-default btn-block"
                                onClick={this.addClick}>Add</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

class CalculatorAssignment extends Component {
    render() {
        return (
            <div>
                {/* <CalculatorOne /> */}
                {/* <CalculatorTwo /> */}
                {/* <CalculatorThree/> */}
                <CalculatorFour />
            </div>
        );
    }
}

export default CalculatorAssignment;