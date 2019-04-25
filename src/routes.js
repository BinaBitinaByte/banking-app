import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

export default (
    <Switch>
        <Route path='/register' component={Register} />
        <Route path='/profile' component={Profile} />
        <Route exact path='/' component={Login} />
    </Switch>
)