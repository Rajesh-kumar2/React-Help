import React, { Component } from 'react';
import { connect } from "react-redux";

import * as counterActions from '../../actions/counterActions';

class CounterComponent extends Component {
    constructor(props) {
        super(props);
        this.incClick = this.incClick.bind(this);
        this.decClick = this.decClick.bind(this);
    }

    incClick(e) {
        e.preventDefault();
        // this.props.inc();
        this.props.inc(10);
    }

    decClick(e) {
        e.preventDefault();
        // this.props.dec();
        this.props.dec(10);
    }

    render() {
        return (
            <div>
                <h1>Counter Component</h1>
                <h2 className="text-info">Count: {this.props.count}</h2>
                <button className="btn btn-info" onClick={this.incClick}>+</button>
                <button className="btn btn-info" onClick={this.decClick}>-</button>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        count: state.counterReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        inc: (data) => dispatch(counterActions.incCounter(data)),
        dec: (data) => dispatch(counterActions.decCounter(data))
    };
}

export default (connect(mapStateToProps, mapDispatchToProps))(CounterComponent);

// var connectTo = connect(mapStateToProps, mapDispatchToProps);
// var newCounterComponent = connectTo(CounterComponent);
// export default newCounterComponent;



// ----------------------------------------
// function Hello(greeting, name) {
//     console.log(greeting + ", " + name);
// }

// Hello("Good Morning", "Manish");
// Hello("Good Morning", "Abhijeet");
// Hello("Good Morning", "Ramakant");

// function Hello(greeting) {
//     return function (name) {
//         console.log(greeting + ", " + name);
//     }
// }

// var mGreet = Hello("Good Morning");
// mGreet("Manish");
// mGreet("Abhijeet");
// mGreet("Ramakant");


// function Employee(){
//     this.id=1;
// }

// var e = new Employee();

// function Project(){
//     this.id=1;
// }
// var p = new Project();
// console.log(e);
// console.log(p);

// function extend(arg){
//     arg.prototype.name = "NA"
// }

// extend(Employee);
// // extend(Project);

// console.log(e.name);
// console.log(p.name);


