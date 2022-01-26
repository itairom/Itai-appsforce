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


export const userService = {
    fetchUsers, query
}