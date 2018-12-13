import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PTComponent extends Component {
    render() {
        return (
            <div>
                <h3>Hello, {this.props.name}</h3>
                <h3>Age, {this.props.age}</h3>
            </div>
        );
    }
}

// PTComponent.defaultProps = {
//     name: "NA"
// }

PTComponent.displayName = "PropTypeComponent";

PTComponent.propTypes = {
    name: PropTypes.string.isRequired,
    // age: PropTypes.number.isRequired
    age: function(props,propName,componentName){
        if(props[propName]<30){
            return new Error(componentName+ " ---- " + propName + ", must be greater than 30.");
        }
    }
}


class PTRoot extends Component {
    render() {
        return (
            <div>
                {/* <PTComponent name={23}/> */}
                <PTComponent name={"Manish"} age={20} />
            </div>
        );
    }
}

export default PTRoot;