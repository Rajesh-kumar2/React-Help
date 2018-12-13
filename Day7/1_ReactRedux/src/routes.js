import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Loadable from 'react-loadable';

import HomeComponent from './components/home/HomeComponent';
import ManageProductComponent from './containers/products/ManageProductComponent';

const AboutComponent = Loadable({
    loader: () => import('./components/about/AboutComponent'),
    loading: () => <div>Loading About Component...</div>
});

const CounterComponent = Loadable({
    loader: () => import('./containers/counter/CounterComponent'),
    loading: () => <div>Loading Counter Component...</div>
});

const ProductsComponent = Loadable({
    loader: () => import('./containers/products/ProductsComponent'),
    loading: () => <div>Loading Products Component...</div>
});

export default (
    <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/about" component={AboutComponent} />
        <Route path="/counter" component={CounterComponent} />
        <Route path="/products" component={ProductsComponent} />
        <Route path="/product/:id" component={ManageProductComponent} />
        <Route path="/product" component={ManageProductComponent} />
        <Route path="**" render={() => (
            <div>
                <h1>Inconceivable!</h1>
                <h4 className="text-danger">I do not think this page is where you think it is.</h4>
            </div>
        )} />

    </Switch>
);