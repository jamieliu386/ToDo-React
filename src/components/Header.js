import React from 'react';


class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: ""
        }
    }

    trim = (str) => {
        return str.replace(/^\s+|\s+$/g,'');
    }

    onChange = event => { 
        this.setState({
            todo: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        let todo = this.trim(this.state.todo)
        this.setState({
            todo: ""
        })

        if (todo.length === 0) {
            return
        }

        this.props.addTodo({
            title: this.state.todo,
            finished: false,
            editing: false,
        });
    }

    render(){
        return (
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={this.onSubmit}>
                    <input 
                        className="new-todo" 
                        placeholder="What needs to be done?" 
                        onChange={this.onChange}
                        onSubmit={this.onSubmit}
                        value={this.state.todo}
                        autoFocus 
                    />
                </form>
            </header>
        )
    }
}

export default Header;