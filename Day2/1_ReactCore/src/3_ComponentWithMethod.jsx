import React, { Component } from 'react';

class Button extends Component {
    handleClick(){
        alert("Button Clicked...");
    }

    render() {
        return (
            <div>
                <button className="btn btn-info" onClick={this.handleClick}>Click Me</button>
            </div>
        );
    }
}

export default Button;