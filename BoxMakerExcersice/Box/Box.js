import React, { Component } from 'react';
import './Box.css'

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const boxStyle = {
            margin: 'auto',
            backgroundColor: this.props.backgroundColor,
            width: this.props.width,
            height: this.props.height
        }

        return (
            <React.Fragment>

                <div style={boxStyle}>

                </div>
                <button onClick={() => this.props.deleteBox(this.props.id)}>X</button>
            </React.Fragment>

        );
    }
}

export default Box;