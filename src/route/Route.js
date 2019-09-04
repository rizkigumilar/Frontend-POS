import React, { Component } from 'react';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import Home from '../screens/Home';
import Login from '../screens/Login';
import Logout from '../screens/Logout';

class Routing extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Redirect to="/menu" />
                    <Route exact path={"/menu"} component={Home} />
                    <Route exact path={"/menu/login"} component={Login} />
                    <Route exact path={"/menu/logout"} component={Logout} />
                </Router>
            </div>
        );
    }
}

export default Routing;