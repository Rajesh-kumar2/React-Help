import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel, HelpBlock, Alert } from "react-bootstrap";
import { authenticator } from '../../api/authAPIClient';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            message: '',
            redirectToReferrer: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.validateUserName = this.validateUserName.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.login = this.login.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    validateUserName(e) {
        const length = this.state.username.length;
        if (length > 5) return 'success';
        else if (length > 0) return 'error';
        return null;
    }

    validatePassword(e) {
        const length = this.state.password.length;
        if (length > 5) return 'success';
        else if (length > 0) return 'error';
        return null;
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    login(e) {
        e.preventDefault();
        authenticator.authenticate(this.state.username, this.state.password).then(
            (result) => {
                this.setState({ message: result.message });
                if (result.success) {
                    this.setState({ redirectToReferrer: authenticator.isAuthenticated });
                }
            }, (eMsg) => {
                this.setState({ message: eMsg });
            }
        )
    }

    componentDidMount() {
        authenticator.clearToken();
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />
        }

        return (
            <div>
                {this.state.message && (
                    <Alert bsStyle="danger">{this.state.message}</Alert>
                )}
                <form onSubmit={this.login}>
                    <FormGroup controlId="username" validationState={this.validateUserName()}>
                        <ControlLabel>Username</ControlLabel>
                        <FormControl autoFocus type="text"
                            value={this.state.username}
                            onChange={this.handleChange} />
                        <FormControl.Feedback />
                        <HelpBlock>Username must be more than 5 characters.</HelpBlock>
                    </FormGroup>
                    <FormGroup controlId="password" validationState={this.validatePassword()}>
                        <ControlLabel>Password</ControlLabel>
                        <FormControl value={this.state.password}
                            onChange={this.handleChange}
                            type="password" />
                        <FormControl.Feedback />
                        <HelpBlock>Password must be more than 5 characters.</HelpBlock>
                    </FormGroup>
                    <Button block type="submit" disabled={!this.validateForm()}>
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}

export default LoginComponent;