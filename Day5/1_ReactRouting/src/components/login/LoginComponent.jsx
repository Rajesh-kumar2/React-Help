import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { authenticator } from '../../api/authAPIClient';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            redirectToReferrer: false,
            message: ""
        };
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    login(e) {
        e.preventDefault();
        authenticator.authenticate(this.state.username, this.state.password).then(
            (result) => {
                if (result.success) {
                    this.setState({ redirectToReferrer: authenticator.isAuthenticated });
                } else {
                    this.setState({ message: result.message });
                }
            }, (eMsg) => {
                console.error(eMsg);
            })
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        return (
            <div>
                <h3 className="alert alert-danger">{this.state.message}</h3>
                <form onSubmit={this.login}>
                    <FormGroup controlId="username" >
                        <ControlLabel>Username</ControlLabel>
                        <FormControl autoFocus type="text"
                            value={this.state.username}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup controlId="password" >
                        <ControlLabel>Password</ControlLabel>
                        <FormControl value={this.state.password}
                            onChange={this.handleChange}
                            type="password" />
                    </FormGroup>
                    <Button block type="submit">
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}

export default LoginComponent;