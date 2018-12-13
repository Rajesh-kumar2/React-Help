import React, { Component } from 'react';

class AdminComponent extends Component {
    render() {
        return (
            <div>
                <h1>Admin Component</h1>
                <h4 className="text-success">Welcome Admin, You are Authenticated</h4>
            </div>
        );
    }
}

export default AdminComponent;