import React, { useEffect, useState } from "react";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { loadUsers } from "../actions/UserActions";
import { User } from "../Interface/UserInterface";
import { userService } from "../services/UserService";
import UserList from "./UserList";

export function Home() {
    const dispatch = useDispatch()
    // const [users, setUsers] = useState<User[] | null>(null)
    const { isDark } = useSelector((state: RootStateOrAny) => state.appModule)
    const { users } = useSelector((state: RootStateOrAny) => state.userModule)

    useEffect(() => {
        dispatch(loadUsers())
    }, []);

    useEffect(() => {
        console.log(users);

    }, [users])


    return (
        <section className={isDark ? 'main-container dark' : 'main-container'}>
            <div className='home-container'>
                <h1>Home</h1>
                <UserList users={users} />
            </div>

        </section>
    )
}