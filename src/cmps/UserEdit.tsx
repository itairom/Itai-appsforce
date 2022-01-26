import { User } from '../Interface/UserInterface';
import { Formik, Form } from 'formik';
import Input from './Input';
import { addUser, updateUser } from '../actions/UserActions';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

type Props = {
    user: User
    onSetIsEdit?: any,
    onSetIsAdd?: any,
    isAddUser: boolean
};

export default function UserEdit({ user, onSetIsEdit, onSetIsAdd, isAddUser }: Props) {

    const initValues = {
        name: {
            first: user.name.first,
            last: user.name.last,
            title: user.name.title,
        },
        location: {
            city: user.location.city,
            country: user.location.country,
            street: {
                name: user.location.street.name
            }
        },
        email: user.email,
    }

    const { users } = useSelector((state: RootStateOrAny) => state.userModule)
    const dispatch = useDispatch()

    function isEmail(email: string) {
        const regex = new RegExp('[a-z0-9]+@[a-z]+[a-z]{2,3}');
        return regex.test(email)
    }

    const checkEmptyFeild = (user: User) => {
        let isEmptyField = false
        Object.values(user.location).forEach(val => {
            if (val === '') isEmptyField = true
        });
        Object.values(user.name).forEach(val => {
            if (val === '') isEmptyField = true
        });
        return isEmptyField
    }

    const ceckEmailIsTaken = (User: User) => {
        let isEmailTaken = false
        users.forEach((user: User) => {
            if (User.email === user.email && User.cell !== user.cell) isEmailTaken = true
        })
        return isEmailTaken
    }

    const onSubmit = (values: any) => {
        const userCopy: User = { ...user, ...values }
        if (!isEmail(values.email)) {
            alert('Email is not valid')
            return
        }
        if (checkEmptyFeild(userCopy)) {
            alert('Field cannot be empty')
            return
        }

        if (userCopy.name.first.length < 3) {
            alert('First Name length is too short')
            return
        }

        if (ceckEmailIsTaken(userCopy)) {
            alert('Email already Exist')
            return
        }

        if (!isAddUser) {
            dispatch(updateUser(userCopy))
            onSetIsEdit(false)
        } else {
            dispatch(addUser(userCopy))
            onSetIsAdd(false)
        }
    }

    return <div className='user-edit'>
        <div className="edit-container">
            <div className="">
                {isAddUser && <h1>Add User</h1>}
                {!isAddUser && <h1>Edit User</h1>}
            </div>
            <Formik
                initialValues={initValues}
                onSubmit={(values) => {
                    onSubmit(values)
                }} >
                <Form className="flex column align-center">
                    <div className="name-form">
                        <h2>Info</h2>
                        <Input name="First name" value="name.first" />
                        <Input name="Last name" value="name.last" />
                        <Input name="Title" value="name.title" />
                    </div>
                    <div className="location-form">
                        <h2>Location</h2>
                        <Input name="City" value="location.city" />
                        <Input name="Country" value="location.country" />
                    </div>
                    <h2>Email</h2>
                    <Input name="Email" value="email" />
                    <div className="btn-container">
                        <button type="submit" className="primary-btn login-signup-btn">Save</button>
                        <div className="back-btn"
                            onClick={() => {
                                isAddUser ? onSetIsAdd(false) : onSetIsEdit(false)
                            }}>Cancel</div>
                    </div>
                </Form>
            </Formik>
        </div>
    </div>;
}
