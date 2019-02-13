import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  MARK_ALL_COMPLETE,
  CLEAR_COMPLETED
} from '../actions/TodoListActions.js'

const initialState = {
  todoList: [],
  total: 0
}

const TodoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // let newList = state.todoList
      let t = state.total + 1
      // newList.push(action.todo)
      // return Object.assign({}, state, {todoList: newList, total: c})
      return Object.assign({}, state, { todoList: [...state.todoList, action.todo], total: t } )

    case EDIT_TODO:
      let editedList = state.todoList
      editedList[action.index] = action.edited
      // return Object.assign({}, state, { todoList: editedList } )
      return Object.assign({}, state, { todoList: [...editedList] } )

    case DELETE_TODO:
      //filter takes in a function to be called on each item in list,
      //if the function returns true for that item, keep it, otherwise, remove it
      let deletedList = state.todo.filter((text) => {
        if(text !== action.todo)
          return true
        return false
      })
      return Object.assign({}, state, { todoList: deletedList} )
    
    case MARK_ALL_COMPLETE:
      let length = state.todoList.length;
      let allCompleted = true;
      for (let i = 0; i < length; i++) {
        if (state.todoList[i].finished === false) {
          allCompleted = false;
          break
        }
      }
      let cList = state.todoList.map(todo => {
        let edited = todo 
        edited.finished = !allCompleted
        return edited
      })
      return Object.assign({}, state, { todoList: cList} )

    case CLEAR_COMPLETED:
      let clearList = state.todoList.filter(todo => todo.finished === false )
      return Object.assign({}, state, { todoList: clearList} )
    default:
      return state
  }
}

export default TodoListReducer