import { COUNTER } from '../constants'

const initialState = {
    counter: 0,
    isLoggedIn: false
}

//counter is dummy variable for testing

const loggedInReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER.SIGNIN:
            return {
                ...state,
                isLoggedIn: true
            }
        case COUNTER.SIGNOUT:
            return {
                ...state,
                isLoggedIn: false
            }
        default:
            return state;
    }
}

export default loggedInReducer;