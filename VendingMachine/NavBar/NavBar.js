import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <nav className='App-nav'>
                <NavLink activeClassName='active-link' to='/pizza'>
                    Pizza
            </NavLink>
                <NavLink activeClassName='active-link' to='/sushi'>
                    Sushi
            </NavLink>
                <NavLink activeClassName='active-link' to='/soda'>
                    Soda
            </NavLink>
            </nav>

        );
    }
}

export default NavBar;