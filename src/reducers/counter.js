import { COUNTER } from '../constants'

const initialState = {
    counter: 0,
    isLoggedIn: false
}

//isLoggedIn is dummy variable for testing

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case COUNTER.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
}

export default counterReducer;