import React, { Component } from 'react';

class ErrorHandler extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        // Log the error to an error service
    }

    render() {
        if (this.state.hasError) {
            //Fallback - Error Component
            return <h1 className="text-danger">Something went wrong!</h1>
        }
        return this.props.children || <h1 className="text-info">No Component to load!</h1>
    }
}

export default ErrorHandler;