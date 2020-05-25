import { COUNTER } from '../constants'

export const increment = () => {
    return {
        type: COUNTER.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: COUNTER.DECREMENT
    }
}

export const signIn = () => {
    return {
        type: COUNTER.SIGNIN
    }
}

export const signOut = () => {
    return {
        type: COUNTER.SIGNOUT
    }
}