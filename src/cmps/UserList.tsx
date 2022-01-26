import React, { useEffect } from 'react';
import { User } from '../Interface/UserInterface';
import UserPreview from './UserPreview';

type Props = {
  users: User[] | null
};

export default function UserList({ users }: Props) {

  // useEffect(() => {
  //   console.log(users);
  // }, [users]);


  return <div className='user-list'>
    {users?.map(user => {
      return <UserPreview user={user} />
    })}
  </div>;
}
