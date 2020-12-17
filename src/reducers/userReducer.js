export default function userReducer(state = {users: []}, action) {
    // debugger;
    switch (action.type) {
        case 'FETCH_USERS':
            return {users: action.payload}

        case 'ADD_USER':
            return {...state, users: [...state.users, action.payload]}

        case 'ADD_ZIP':
            let usersZipAdd = state.users.map(user => {
                if (user.id === action.payload.id) {
                    return action.payload
                } else {
                    return user
                }
            })
            return {...state, users: usersZipAdd}

        case 'DELETE_ZIP':
            // debugger
            let usersZipDelete = state.users.map(user => {
                if (user.id === action.payload.id) {
                    return action.payload
                } else {
                    return user
                }
            })
            return {...state, users: usersZipDelete}

        case 'ADD_NOTE':
            let usersNoteAdd = state.users.map(user => {
                if (user.id === action.payload.id) {
                    return action.payload
                } else {
                    return user
                }
            })
            return {...state, users: usersNoteAdd}

        case 'DELETE_NOTE':
            // debugger
            let usersNoteDelete = state.users.map(user => {
                if (user.id === action.payload.id) {
                    return action.payload
                } else {
                    return user
                }
            })
            return {...state, users: usersNoteDelete}

        default:
            return state
    }
    // return state
}