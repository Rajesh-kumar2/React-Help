import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

import HomeComponent from './components/home/HomeComponent';

const AboutComponent = Loadable({
    loader: () => import('./components/about/AboutComponent'),
    loading: () => <div>Loading....</div>
});

const CounterComponent = Loadable({
    loader: () => import('./containers/counter/CounterComponent'),
    loading: () => <div>Loading Counter, please wait....</div>
});

export default (
    <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/about" component={AboutComponent} />
        <Route path="/counter" component={CounterComponent} />
        <Route path="**" render={() => (
            <article className="text-danger">
                <h1>Inconceivable!</h1>
                <p>I do not think this page is where you think it is.</p>
            </article>
        )} />
    </Switch>
);