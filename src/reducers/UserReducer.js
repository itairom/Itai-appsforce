const initialState = {
    users: null,
    filterBy: null,

}

export default function UserReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: action.users
            }
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.user]
            }
        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter(user => user.cell !== action.user.cell)
            }
        case 'UPDATE_USER':
            return {
                ...state,
                users: state.users.map(user => {
                    if (action.user.cell === user.cell) return action.user;
                    return user
                })
            }
        case 'SET_FILTER':
            return {
                ...state,
                filterBy: action.filterBy
            }
        default:
            return state;
    }
}