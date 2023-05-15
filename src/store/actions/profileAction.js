export const createProfile = (value) => {
    return {
        type: 'CREATE PROFILE',
        payload: value
    }
}

export const loginUser = (value) => {
    return {
        type: 'LOGIN',
        payload: true
    }
}