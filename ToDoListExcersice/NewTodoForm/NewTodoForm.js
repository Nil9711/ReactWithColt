import React, { Component } from 'react';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { todoTask: "" }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.setState({ todoTask: "" });
        this.props.addTask(this.state.todoTask)
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }
    render() {
        return (

            <React.Fragment>

                <form onSubmit={this.handleSubmit}>

                    <div>
                        <label htmlFor="todoTask"></label>
                        <input name="todoTask" id="todoTask" value={this.state.todoTask} onChange={this.handleChange}></input>
                    </div>

                    <button>Add New Task!</button>
                </form>

            </React.Fragment>
        );
    }
}

export default NewTodoForm;