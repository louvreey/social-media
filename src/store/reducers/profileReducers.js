const initialState = {
  username: '',
  email: '',
  password: '',
};
export const profileReducer = (state = initialState, action) => {
    if (action.type === 'CREATE PROFILE') {
        const data = action.payload
        const newUserName = data.username
        const newEmail = data.email
        const newPassword = data.password

        return {
            ...state,
            username: newUserName,
            email: newEmail,
            password: newPassword,
        }
    }
  return state;
};
