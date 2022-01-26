
// Dispatchers
const _toggleDark = () => ({ type: 'TOGGLE_DARK' });

// THUNK

export function toggleDark() {
    return (dispatch) => dispatch(_toggleDark())
}


