import React, { Component } from 'react';
import NewTodoForm from '../NewTodoForm/NewTodoForm'
import Todo from '../Todo/Todo'
import { v4 as uuidv4 } from 'uuid';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: []
        };
        this.addTask = this.addTask.bind(this)
        this.removeTask = this.removeTask.bind(this)
        this.editTask = this.editTask.bind(this)
    }

    addTask(todoItem) {
        let todoItemToAdd = { task: todoItem, id: uuidv4() }
        this.setState(state => ({
            todoItems: [...state.todoItems, todoItemToAdd]
        }))
    }

    removeTask(id) {
        this.setState({ todoItems: this.state.todoItems.filter(item => id !== item.id) })
    }

    editTask(todoItem) {
        this.setState({ todoItems: this.state.todoItems.filter(item => todoItem.id !== item.id) })
        let todoItemToAdd = { task: todoItem.todoTask, id: uuidv4() }
        this.setState(state => ({
            todoItems: [...state.todoItems, todoItemToAdd]
        }))
    }
    render() {
        return (
            <React.Fragment>
                {this.state.todoItems.map(item => (
                    <Todo
                        toDoTask={item.task}
                        key={item.id}
                        id={item.id}
                        removeTask={this.removeTask}
                        editTask={this.editTask}
                    />
                ))}

                <NewTodoForm addTask={this.addTask} />
            </React.Fragment>
        );
    }
}


export default TodoList;

// TodoList - this component should render the NewTodoForm component and should render the list of Todo components. Place your state that contains all of the todos in this component.
