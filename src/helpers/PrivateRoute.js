import React from 'react';
import { Route, Redirect } from 'react-router-dom';
var cookie = require("cookie");

const cookies = cookie.parse(document.cookie);
let userInfo;
if (cookies.userInfo){
    userInfo = JSON.parse(cookies.userInfo);
}

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        userInfo
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
    )} />
)

