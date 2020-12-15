export default function userReducer(state = {users: []}, action) {
    // debugger;
    switch (action.type) {
        case 'FETCH_USERS':
            return {users: action.payload}

        case 'ADD_USER':
            return {...state, users: [...state.users, action.payload]}

        case 'ADD_ZIP':
            let users = state.users.map(user => {
                if (user.id === action.payload.id) {
                    return action.payload
                } else {
                    return user
                }
            })
            return {...state, users: users}

        default:
            return state
    }
    // return state
}