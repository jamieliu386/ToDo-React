import { connect } from 'react-redux'
import { clearCompleted } from '../../actions/TodoListActions.js'
import { changeFilter } from '../../actions/filterActions.js'
import Footer from '../Footer.js'

const mapStatetoProps = (state) => {
    let count = 0
    state.todoRed.todoList.forEach( todo => {
        if (!todo.finished) 
            count++
    })

    return {
        filter: state.filterRed.filter,
        total: state.todoRed.total,
        count,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFilter: (filter) => {
            dispatch(changeFilter(filter))
        },
        clearCompleted: () => {
            dispatch(clearCompleted())
        }
    }
}

const FooterContainer = connect(
    mapStatetoProps,
    mapDispatchToProps
)(Footer)

export default FooterContainer