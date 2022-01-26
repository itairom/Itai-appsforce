import axios from "axios";
import { storageService } from "./storageService";

const STORAGE_KEY = 'users'

// const gDefaultUsers = fetchUsers()

const gUsers = _loadUsers()


async function fetchUsers() {
    try {
        const users = await axios.get('https://randomuser.me/api/?results=10')
        return users.data.results
    }
    catch (err) {
        return err
    }
};

async function _loadUsers() {
    let users = storageService.loadFromStorage(STORAGE_KEY)
    // if (!users || !users.length) users = gDefaultUsers
    if (!users || !users.length) users = await fetchUsers()
    storageService.saveToStorage(STORAGE_KEY, users)
    return users
}

function query() {
    let usersToReturn = gUsers;
    return usersToReturn
}

function removeUser(user) {
    let users = storageService.loadFromStorage(STORAGE_KEY)
    const filterdUsers = users.filter(u => u.cell !== user.cell)
    storageService.saveToStorage(STORAGE_KEY, filterdUsers)
}
function addUser(user) {
    let users = storageService.loadFromStorage(STORAGE_KEY)
    const newUsers = [...users, user]
    storageService.saveToStorage(STORAGE_KEY, newUsers)
}

function updateUser(user) {
    const users = storageService.loadFromStorage(STORAGE_KEY)
    const newUsers = users.map(User => {
        if (User.cell === user.cell) return user
        return User
    })
    storageService.saveToStorage(STORAGE_KEY, newUsers)
}

export const userService = {
    fetchUsers, query, removeUser, addUser, updateUser
}