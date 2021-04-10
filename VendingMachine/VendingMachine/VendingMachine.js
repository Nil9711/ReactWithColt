import React, { Component } from 'react';
import Pizza from '../Pizza/Pizza';
import Soda from '../Soda/Soda';
import Sushi from '../Sushi/Sushi';
import { Route, Switch } from "react-router-dom";

class VendingMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <Switch>
                <Route exact path='/sushi' component={Sushi} />
                <Route exact path='/soda' component={Soda} />
                <Route exact path='/pizza' component={Pizza} />
            </Switch>

        );
    }
}

export default VendingMachine
