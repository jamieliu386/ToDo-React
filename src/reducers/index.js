import { combineReducers } from 'redux'
import TodoListReducer from './TodoListReducer.js'

//if you wanted to add another reducer, you would add it here
const reducers = combineReducers({
  todoReducer: TodoListReducer,
})

export default reducers