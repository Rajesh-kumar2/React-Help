import React, { Component } from 'react';

class TextInput extends Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <input name={this.props.name}
                        type="text"
                        className="form-control"
                        value={this.props.value}
                        onChange={this.props.onChange} />
                </div>
            </div>
        );
    }
}

export default TextInput;