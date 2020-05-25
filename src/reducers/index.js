import counterReducer from './counter'
import { combineReducers } from 'redux'
import loggedInReducer from './loggedInReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    isLoggedIn: loggedInReducer
})

export default rootReducer;