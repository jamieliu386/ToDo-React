import { connect } from 'react-redux'
import { addTodo } from '../../actions/TodoListActions.js'
import Header from '../Header.js'


const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => {
            dispatch(addTodo(todo))
        }
    }
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header) // this is what it is rendering 

export default HeaderContainer