import React, { Component } from 'react';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = { data: 0, flag: true };
        console.log("Parent - Ctor");
    }

    handleChange(e) {
        this.setState({ data: this.state.data + 1 });
    }

    handleLoad(e) {
        this.setState({ flag: !this.state.flag });
    }

    render() {
        console.log("Parent - Render");

        var child = this.state.flag ? null : <Child value={this.state.data} />

        return (
            <div className="text-info">
                <h3>Parent State: {this.state.data}</h3>
                <button className="btn" onClick={this.handleChange.bind(this)}>Change</button>
                <button className="btn" onClick={this.handleLoad.bind(this)}>Load/Unload</button>
                <hr/>
                {child}
            </div>
        );
    }
}

class Child extends Component {
    constructor(props) {
        super(props);
        this.state = { childState: 0 };
        console.log("Child - Ctor");
    }

    componentWillMount(){
        console.log("Child - componentWillMount");
    }

    componentDidMount(){
        console.log("Child - componentDidMount");
    }

    handleChange(e) {
        this.setState({ childState: this.state.childState + 1 });
    }

    handleUpdate(e){
        this.forceUpdate();
    }

    render() {
        console.log("Child - Render");

        return (
            <div className="text-success">
                <h3>Child: {this.props.value}</h3>
                <h3>Child State: {this.state.childState}</h3>
                <button className="btn" onClick={this.handleChange.bind(this)}>Change</button>
                <button className="btn" onClick={this.handleUpdate.bind(this)}>Force Update</button>
            </div>
        );
    }

    componentWillReceiveProps(newProps){
        console.log("Child - componentWillReceiveProps");
    }

    shouldComponentUpdate(newProps,newState){
        console.log("Child - shouldComponentUpdate");
        // return true;
        return false;
    }

    componentWillUpdate(){
        console.log("Child - componentWillUpdate");
    }

    componentDidUpdate(){
        console.log("Child - componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("Child - componentWillUnmount");
    }
}

export default Parent;

