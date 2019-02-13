import { combineReducers } from 'redux'
import TodoListReducer from './TodoListReducer.js'
import filterReducer from './filterReducer.js'

//if you wanted to add another reducer, you would add it here
const reducers = combineReducers({
  todoRed: TodoListReducer,
  filterRed: filterReducer
})

export default reducers