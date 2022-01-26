const initialState = {
    isDark: false
}

export default function AppReducer(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_DARK':
            console.log('toggle');
            return {
                ...state,
                isDark: !state.isDark
            }
        default:
            return state;
    }
}