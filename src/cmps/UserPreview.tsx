import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from '../actions/UserActions';
import { User } from '../Interface/UserInterface';
import UserEdit from './UserEdit';

type Props = {
    user: User
};

export default function UserPreview({ user }: Props) {

    const [isEdit, setisEdit] = useState<Boolean>(false);
    const dispatch = useDispatch()
    useEffect(() => {
        // console.log(user);
    }, [user])

    const onSetIsEdit = (status: boolean) => {
        setisEdit(status)
    };


    return <div key={user.id.value} className='user-preview flex column'>
        <img src={user.picture.medium} alt="profile-img" />
        <div className="user-name">
            <p>{user.name.title}</p>
            <p>{user.name.first}</p>
            <p>{user.name.last}</p>
        </div>
        <div className="user-id">
            <p>{user.id.name}</p>
            {/* <p>{user.id.value}</p> */}
        </div>
        <p>{user.email}</p>
        <div className="user-location">
            <p>{user.location.city}</p>
            <p>{user.location.country}</p>
            <p>{user.location.street.name}</p>
        </div>
        <div
            onClick={() => {
                setisEdit(true)
            }}
            className="edit-btn">
            Edit
        </div>
        <div
            onClick={() => {
                dispatch(removeUser(user))
            }}
            className="remove-btn">
            Remove
        </div>
        {isEdit && <UserEdit onSetIsEdit={onSetIsEdit} user={user} />}
    </div>
}
