import React, { Component } from 'react';

class Footer extends React.Component{
    constructor(props) {
        super(props)
    }

    allSelected = () => {
        if (this.props.filter === 0)
            return "selected"
    }

    activeSelected = () => {
        if (this.props.filter === 1)
            return "selected"
    }

    completedSelected = () => {
        if (this.props.filter === 2)
            return "selected"
    }

    renderClearCompleted = () => {
        if (this.props.count === this.props.total) {
            return null
        }
        else {
            return (<button className={"clear-completed"} onClick={()=>this.props.clearCompleted()}>Clear completed</button>)
        }
    }

    render() {
        return (
            <footer className="footer">
            {/* <!-- This should be `0 items left` by default --> */}
                <span className="todo-count"><strong>{this.props.count}</strong> items left</span>
            {/* <!-- Remove this if you don't implement routing --> */}
                <ul className="filters">
                    <li>
                        <a className={this.allSelected()} href="#/" onClick={()=>this.props.changeFilter(0)}>All</a>
                    </li>
                    <li>
                        <a className={this.activeSelected()} href="#/active" onClick={()=>this.props.changeFilter(1)}>Active</a>
                    </li>
                    <li>
                        <a className={this.completedSelected()} href="#/completed" onClick={()=>this.props.changeFilter(2)}>Completed</a>
                    </li>
                </ul>
            {/* <!-- Hidden if no completed items are left ↓ --> */}
                {this.renderClearCompleted()}
            </footer>
        )
    }
}
export default Footer