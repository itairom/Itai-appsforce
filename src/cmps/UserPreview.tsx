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

        <p className='user-email'>{user.email}</p>
        <div className="user-location">
            <div className="">
                <p>{user.location.street.name},</p>
                <p>{user.location.city} </p>
            </div>
            <p className='country'>{user.location.country}</p>
        </div>
        <div className="btn-container">
            <div className="edit-btn"
                onClick={() => {
                    setisEdit(true)
                }}> Edit</div>
            <div className="remove-btn"
                onClick={() => {
                    dispatch(removeUser(user))
                }} >Removes</div>
        </div>
        {isEdit && <UserEdit isAddUser={false} onSetIsEdit={onSetIsEdit} user={user} />}
    </div>
}
