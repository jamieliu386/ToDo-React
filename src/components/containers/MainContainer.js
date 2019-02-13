import { connect } from 'react-redux'
import { markAllComplete } from '../../actions/TodoListActions.js'
import Main from '../Main.js'

const mapStateToProps = (state) => {
    return {
        count: state.todoRed.count,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        markAllComplete: () => {
            dispatch(markAllComplete())
        }
    }
}

const MainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)

export default MainContainer