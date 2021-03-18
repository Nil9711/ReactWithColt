import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    state = {}
    render() {

        return (

            <span>
                <i className={"fas fa-dice-" + this.props.result + " fa-10x Die-Icon"}></i>
            </span>

        );
    }
}

export default Die;