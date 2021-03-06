import { userService } from "../services/UserService";

// Dispatchers
const _setUsers = (users) => ({ type: 'SET_USERS', users });
const _setFilter = (filterBy) => ({ type: 'SET_FILTER', filterBy });
const _removeUser = (user) => ({ type: 'REMOVE_USER', user });
const _addUser = (user) => ({ type: 'ADD_USER', user });
const _updateUser = (user) => ({ type: 'UPDATE_USER', user });

// THUNK
export function loadUsers(filterBy) {
    return async (dispatch) => {
        const users = await userService.query(filterBy)
        dispatch(_setUsers(users));
    }
}
export function addUser(user) {
    return (dispatch) => {
        userService.addUser(user)
        dispatch(_addUser(user));
    }
}

export function setFilter(filterBy) {
    return (dispatch) => dispatch(_setFilter(filterBy))
}

export function updateUser(user) {
    return (dispatch) => {
        userService.updateUser(user)
        dispatch(_updateUser(user));
    }
}
export function removeUser(user) {
    return (dispatch) => {
        userService.removeUser(user)
        dispatch(_removeUser(user));
    }
}
