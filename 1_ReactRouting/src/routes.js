import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import Loadable from 'react-loadable';

import HomeComponent from './components/home/HomeComponent';
import { authenticator } from './api/authAPIClient';
import LoginComponent from './components/login/LoginComponent';

const AboutComponent = Loadable({
    loader: () => import('./components/about/AboutComponent'),
    loading: () => <div>Loading...</div>
});

const ProductsComponent = Loadable({
    loader: () => import('./components/products/ProductsComponent'),
    loading: () => <div>Loading...</div>
});

const AdminComponent = Loadable({
    loader: () => import('./components/admin/AdminComponent'),
    loading: () => <div>Loading...</div>
});

const PrivateRoute = ({ component: Component, ...args }) => {
    console.log(Component);
    console.log(args);

    return (
        <Route {...args} render={
            (props) => authenticator.isAuthenticated === true ?
                <Component {...props} /> :
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        } />
    );
}

export default (
    <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/about" component={AboutComponent} />
        <PrivateRoute path="/products" component={ProductsComponent} />
        <Route path="/login" component={LoginComponent} />
        <PrivateRoute path="/admin" component={AdminComponent} />
        <Route path="**" render={() => (
            <article className="text-danger">
                <h1>Inconceivable!</h1>
                <p>I do not think this page is where you think it is.</p>
            </article>
        )} />

    </Switch>
);