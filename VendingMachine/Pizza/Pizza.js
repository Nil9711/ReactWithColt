import React, { Component } from 'react';
import { Route, Switch, NavLink } from "react-router-dom";
import VendingMachine from '../VendingMachine/VendingMachine'
class Pizza extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                BRB, eating Pizza!
                <NavLink to='/'>
                    Go Home
                </NavLink>
            </div>
        );
    }
}

export default Pizza;