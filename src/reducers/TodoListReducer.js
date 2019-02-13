import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  MARK_ALL_COMPLETE,
  CLEAR_COMPLETED
} from '../actions/TodoListActions.js'

const initialState = {
  todoList: [],
  count: 0
}

const TodoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      let newList = state.todoList
      let c = state.count + 1
      newList.push(action.todo)
      return Object.assign({}, state, { todoList: newList, count: c } )

    case EDIT_TODO:
      let editedList = state.todoList
      editedList[action.index] = action.edited
      return Object.assign({}, state, { todoList: editedList } )

    case DELETE_TODO:
      //filter takes in a function to be called on each item in list,
      //if the function returns true for that item, keep it, otherwise, remove it
      let filteredList = state.todo.filter((text) => {
        if(text !== action.todo)
          return true
        return false
      })
      return Object.assign({}, state, { todoList: filteredList} )
    
    case MARK_ALL_COMPLETE:
      let length = this.state.todoList.length;
      let allCompleted = true;
      for (let i = 0; i < length; i++) {
        if (this.state.todoList[i].finished === false) {
          allCompleted = false;
          break
        }
      }

      let finishedState = !allCompleted;
      let cList = state.list.map(todo => {
        let edited = todo 
        edited.finished = finishedState
        return edited
      })
      return Object.assign({}, state, { todoList: cList} )
    case CLEAR_COMPLETED:
      let clearList = state.list.filter((todo) => {
        todo.finished === false
      })
      return Object.assign({}, state, { todoList: clearList} )
    default:
      return state
  }
}

export default TodoListReducer