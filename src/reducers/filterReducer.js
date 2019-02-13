import {
    CHANGE_FILTER,
} from '../actions/filterActions.js'

const initialState = {
    filter: 0,
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FILTER:
            return Object.assign({}, state, {filter: action.filter })
        default: 
            return state
    }
}

export default filterReducer