import React, { Component } from 'react';
import Todo from './Todo.js'

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    renderTodos = () => {
        return this.props.todoList.map((todo, index) => {
            if (this.props.filter === 1 && todo.finished === true) {
                return null
            }
            else if (this.props.filter === 2 && todo.finished === false) {
                return null
            }
            else {
                return (
                    <Todo 
                        key={index}
                        index={index}
                        {...todo}
                        todo={todo}
                        editItem={(edited)=>this.props.editItem(edited, index)}
                    />
                )
            }
        })
    }

    render() {
        return (
            <ul className="todo-list">
                {this.renderTodos()}
            </ul>
        )
    }
}

export default TodoList