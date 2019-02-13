import { connect } from 'react-redux'
import { deleteTodo, editTodo } from '../../actions/TodoListActions.js'
import TodoList from '../TodoList.js'

const mapStateToProps = (state) => {
    return {
        todoList: state.todoRed.todoList,
        filter: state.filterRed.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (index) => {
            dispatch(deleteTodo(index))
        },
        editTodo: (edited, index) => {
            dispatch(editTodo(edited, index))
        }
    }
}

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default TodoListContainer