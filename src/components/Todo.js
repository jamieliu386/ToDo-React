import React, { Component } from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
        }
    }

    toggleFinished = () => {
        let edited = this.props.todo 
        edited.finished = !edited.finished 
        this.props.editItem(edited)
    }

    renderCheckbox = () => {
        if(this.props.finished) {
            return (
                <input className="toggle" type="checkbox" checked onClick={this.toggleFinished} />
            )
        }
        else {
            return (
                <input className="toggle" type="checkbox" onClick={this.toggleFinished} />
            )
        }
    }

    renderTitle = () => (
        <label>
            {this.props.title}
        </label>
    )
    
    getclassName = () => {
        if(this.props.finished) {
            return ("completed")
        }
        else {
            return ("view")
        }
    }


    render() {
        return (
            <li className={this.getclassName()}>
                <div className="view">
                    {this.renderCheckbox()}
                    {this.renderTitle()}
                </div>
            </li>
        )
    } 
}

export default Todo