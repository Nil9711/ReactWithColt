import React, { Component } from 'react';
import './ColorBox.css'

class ColorBox extends Component {
    state = {

        color: this.props.color

    };

    clickHandler = () => {
        this.setState({ color: this.props.colorOptions[Math.floor(Math.random() * this.props.colorOptions.length)] })
    }
    render() {
        return (

            <div onClick={(this.clickHandler)} className="ColorBox" style={{ backgroundColor: this.state.color }} >

            </div >

        );
    }
}

export default ColorBox;