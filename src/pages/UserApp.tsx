import { useEffect, useState } from "react";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { loadUsers, setFilter } from "../actions/UserActions";
import { User } from "../Interface/UserInterface";
import { appService } from "../services/AppService";
import UserEdit from "../cmps/UserEdit";
import UserList from "../cmps/UserList";
import UserFiler from "../cmps/UserFiler";

export function UserApp() {
    const userTemplate: User = {
        name: {
            first: '',
            last: '',
            title: '',
        },
        location: {
            city: '',
            country: '',
            street: {
                name: ''
            }
        },
        email: '',
        id: {
            name: appService.makeId(),
            value: appService.makeId()
        },
        cell: appService.makeId(),
        picture: { medium: 'https://www.pasrc.org/sites/g/files/toruqf431/files/styles/3x4_750w_1000h/public/2021-03/blank-profile-picture-973460_1280.jpg?itok=wWzzzj7Q' }
    }

    const dispatch = useDispatch()
    const [isAdd, setIsAdd] = useState<Boolean>(false);

    const { isDark } = useSelector((state: RootStateOrAny) => state.appModule)
    const { users, filterBy } = useSelector((state: RootStateOrAny) => state.userModule)

    useEffect(() => {
        dispatch(loadUsers(filterBy))
    }, [filterBy]);

    const onSetIsAdd = (status: boolean) => {
        setIsAdd(status)
    };

    return (
        <section className={isDark ? 'main-container dark' : 'main-container'}>
            <div className='home-container'>
                <UserFiler onSetFilter={(filterBy: any) => dispatch(setFilter(filterBy))} />
                <UserList users={users} />
                <div className="add-btn"
                    onClick={() => {
                        setIsAdd(true)
                    }}>Add</div>
                {isAdd && <UserEdit onSetIsAdd={onSetIsAdd} isAddUser={true} user={userTemplate} />}
            </div>
        </section>
    )
}