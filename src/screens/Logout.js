import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class Logout extends Component {
    constructor(props) {
        super(props);
        localStorage.removeItem('jwToken')
        localStorage.removeItem('userid')
        localStorage.removeItem('name')
    }
    render() {

        return (
            <div>
                <Redirect to="/menu" />
            </div>
        )
    }
}
export default Logout;  