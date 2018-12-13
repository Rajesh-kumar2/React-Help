import React, { Component } from 'react';

class ControlledVsUncontrolled extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "Manish" };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        // console.log(e.target.value);
        this.setState({ name: e.target.value });
    }

    handleClick(e) {
        this.setState({ name: this.refs.t6.value });
    }

    render() {
        return (
            <div>
                <input type="text" value="Manish" />
                <br />
                <input type="text" value={this.state.name} onChange={this.handleChange} />
                <h3>{this.state.name}</h3>
                <br />
                <input type="text" />
                <br />
                <input type="text" defaultValue={this.state.name} />
                <br />
                <br />
                <input type="text" ref="t6" />
                <br />
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}

export default ControlledVsUncontrolled;