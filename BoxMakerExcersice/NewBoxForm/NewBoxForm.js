import React, { Component } from 'react';
import './NewBoxForm.css'

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = { color: "", width: "", height: "" };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addNewBox(this.state.color, this.state.width, this.state.height)
        this.setState({ color: "", width: "", height: "" });
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    render() {
        return (

            <form className="NewBoxForm" onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="color">Color: </label>
                    <input type="text" name="color" id="color" value={this.state.color} onChange={this.handleChange}></input>
                </div>
                <div>
                    <label htmlFor="width">Width: </label>
                    <input type="text" name="width" id="width" value={this.state.width} onChange={this.handleChange}></input>
                </div>
                <div>
                    <label htmlFor="height">Height: </label>
                    <input type="text" name="height" id="height" value={this.state.height} onChange={this.handleChange}></input>
                </div>

                <button>Add Box!</button>
            </form >

        );
    }
}

export default NewBoxForm;