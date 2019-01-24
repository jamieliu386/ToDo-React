import React, { Component } from 'react';
import Blah from './Blah.js'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todoList: [],
      filter: 0, // 0 for all, 1 for active, 2 for completed
      count: 0, // number of todos in the todo list
    }
  }

  editItem = (edited, index) => {
    this.setState((prevState) =>
    {
      prevState.todoList[index] = edited
      return {
        todoList: prevState.todoList
      }
    })
  }

  addItem = (newItem) => {
    this.setState((prevState) =>
    { 
      prevState.todoList.push(newItem)
      return {
        todoList: prevState.todoList,
        count: prevState.count + 1
      }
    })
  }

  changeFilter = (newFilter) => {
    this.setState({
      filter: newFilter
    })
  }

  getItemsLeft = () => {
    let count = 0;
    let length = this.state.todoList.length;
    for (let i = 0; i < length; i++) {
      if (this.state.todoList[i].finished === false)
        count++;
    }
    return count
  }

  markAllComplete = () => {
    this.setState((prevState) => {
      prevState.todoList.map(todo => {
        todo.finished = true;
        return todo
      })
      return {
        todoList: prevState.todoList
      }
    })
  }

  clearCompleted = () => {
    this.setState((prevState) => {
      prevState.todoList = prevState.todoList.filter(todo => todo.finished === false)
      return {
        todoList: prevState.todoList
      }
    })
  }

  render() {
    return (
      <div>
        <section className="todoapp">
          <Header 
            addItem={this.addItem}
          />
          <Main 
            todoList={this.state.todoList}
            editItem={this.editItem}
            filter={this.state.filter}
            markAllComplete={this.markAllComplete}
          />
          <Footer
            changeFilter={this.changeFilter}
            count={this.getItemsLeft()}
            filter={this.state.filter}
            total={this.state.todoList.length}
            clearCompleted={this.clearCompleted}
          />
        </section>
      </div>
    );
  }
}

export default App;
