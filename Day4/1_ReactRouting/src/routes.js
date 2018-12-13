import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import HomeComponent from './components/home/HomeComponent';
// import AboutComponent from './components/about/AboutComponent';
// import ProductsComponent from './components/products/ProductsComponent';
// import AdminComponent from './components/admin/AdminComponent';

const AboutComponent = Loadable({
    loader: () => import('./components/about/AboutComponent'),
    loading: () => <div>Loading....</div>
});

const ProductsComponent = Loadable({
    loader: () => import('./components/products/ProductsComponent'),
    loading: () => <div>Loading....</div>
});

const AdminComponent = Loadable({
    loader: () => import('./components/admin/AdminComponent'),
    loading: () => <div>Loading....</div>
});

export default (
    <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/about" component={AboutComponent} />
        <Route path="/products" component={ProductsComponent} />
        <Route path="/admin" component={AdminComponent} />
        <Route path="**" render={() => (
            <article className="text-danger">
                <h1>Inconceivable!</h1>
                <p>I do not think this page is where you think it is.</p>
            </article>
        )} />
    </Switch>
);