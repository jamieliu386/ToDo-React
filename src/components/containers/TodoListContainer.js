import { connect } from 'react-redux'
import addTodo from '../../../actions/TodoListActions.js'
import TodoList from '../TodoList.js'

const mapStateToProps = (state, ownProps) => {
    console.log("state", state)
    return {
        list: state.todo.todoList
    }
}

const mapDispatchToProps = () => {
    return {
        addTodo: (todo) => {
            dispatchEvent(addTodo(todo))
            },
        }
    }
    // return {
    //     addBlah: ()=>{
    //         dispatchEvent(addBlah())
    //     },
    //     addValue: (value)=>{
    //         dispatchEvent(addValue(value))
    //     },
    //     deleteBlah: (blah) => {
    //         dispatchEvent(deleteBlah(blah))
    //     },
    // }
