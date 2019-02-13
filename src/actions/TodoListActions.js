/*
 * action types
 */
export const ADD_TODO = 'ADD_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const MARK_ALL_COMPLETE = 'MARK_ALL_COMPLETE'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'


/*
 * action creators
 */

export function addTodo(todo) {
  return { type: ADD_TODO, todo, }
}

export function editTodo(edited, index) {
 return { type: EDIT_TODO, edited, index}
}

export function deleteTodo(index) {
  return { type: DELETE_TODO, index }
}

export function markAllComplete(){
  return { type: MARK_ALL_COMPLETE }
}

export function clearCompleted(){
  return { type: CLEAR_COMPLETED }
}