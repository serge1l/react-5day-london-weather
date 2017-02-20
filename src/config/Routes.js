import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../containers/Main';
import ForecastContainer from '../containers/ForecastContainer';
import DayDetailsContainer from '../containers/DayDetailsContainer';

var routes = (<Router history={hashHistory}>
    <Route path='/' component={Main}>
        <IndexRoute component={ForecastContainer}/>
        <Route path='forecast/:city' component={ForecastContainer}/>
        <Route path='detail/:city' component={DayDetailsContainer}/>
    </Route>
</Router>);

export default routes;