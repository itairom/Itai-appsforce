import { User } from '../Interface/UserInterface';
import UserPreview from './UserPreview';

type Props = {
  users: User[] | null
};

export default function UserList({ users }: Props) {
  return <div className='user-list'>
    {users?.map(user => {
      return <UserPreview key={user.cell} user={user} />
    })}
  </div>;
}
