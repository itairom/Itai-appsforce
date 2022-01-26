
const initialState = {
    users: null
}

export default function UserReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: action.users
            }
        // case 'UPDATE_USER':
        //     return {
        //         ...state,
        //         users: action.users
        //     }
        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter(user => user.cell !== action.user.cell)
            }
        case 'UPDATE_USER':
            console.log( action.user);
            return {
                ...state,
                users: state.users.map(user => {
                    if (action.user.cell === user.cell) {
                        return action.user; //swap the relevant user with updatedUser (action.user)
                    }
                    return user
                })
            }
        default:
            return state;
    }
}