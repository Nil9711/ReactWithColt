import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { isBeingEdited: false, todoTask: "", id: this.props.id }
        this.handleEdit = this.handleEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleEdit() {
        this.setState({ isBeingEdited: true });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.editTask(this.state)
        this.setState({ isBeingEdited: false, todoTask: "" });
    }


    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    render() {
        const edit =
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="edit">Edit:</label>
                    <input name="todoTask" id="edit" value={this.state.todoTask} onChange={this.handleChange}></input>
                    <button>Save</button>
                </form>
            </div>
        return (
            <React.Fragment>
                {this.state.isBeingEdited ? edit :
                    <div>
                        <div>{this.props.toDoTask}</div>
                        <button onClick={this.handleEdit}>Edit?</button>
                    </div>
                }
                <button onClick={() => this.props.removeTask(this.props.id)}>X</button>

            </React.Fragment>
        );
    }
}

export default Todo;